/// <reference path="../GL.ts" />
/// <reference path="../lk.ts" />
/// <reference path="../Pe.ts" />
/// <reference path="../Uniform.ts" />
/// <reference path="../Attribute.ts" />
/// <reference path="../renderers/RenderPassIndex.ts" />
/// <reference path="../../geom/Matrix.ts" />
/// <reference path="../../geom/ColorTransform.ts" />
/// <reference path="../../util/Logger.ts" />
/// <reference path="IShader.ts" />

module flwebgl.e.shaders
{
  import GL = flwebgl.e.GL;
  import Pe = flwebgl.e.Pe;
  import Uniform = flwebgl.e.Uniform;
  import Uniforms = flwebgl.e.Uniforms;
  import UniformValue = flwebgl.e.UniformValue;
  import Attribute = flwebgl.e.Attribute;
  import Attributes = flwebgl.e.Attributes;
  import RenderPassIndex = flwebgl.e.renderers.RenderPassIndex;
  import Matrix = flwebgl.geom.Matrix;
  import Logger = flwebgl.util.Logger;

  // Ak
  export class ShaderMSAAStdDev implements IShader
  {
    private gl: GL;
    private _id: number;
    private _attribs: Attributes;
    private _uniforms: Uniforms;
    private uniformMap: any;
    private program: WebGLProgram;
    private vertexShader: WebGLShader;
    private vertexShaderSrc: string;
    private fragmentShader: WebGLShader;
    private fragmentShaderSrc: string;
    private modelViewMatrix: Matrix;

    constructor() {
      console.log("ShaderMSAAStdDev");
    }

    get id(): number {
      return this._id;
    }

    get uniforms(): Uniforms {
      return this._uniforms;
    }

    get attribs(): Attributes {
      return this._attribs;
    }

    setGL(gl: GL): boolean {
      this.gl = gl;
      this.modelViewMatrix = new Matrix();
      return this.setup();
    }

    activate() {
      this.gl.useProgram(this.program)
    }

    draw(a: Pe, b?) {
      var count = a.F.length;
      var viewMatrix = this.gl.viewMatrix;
      for (var e = 0; e < count; ++e) {
        var k: lk = a.mc(e);
        if (k.dirty) {
          var frameID = k.geometry.name;
          var texture = this.gl.getTextureAtlasByFrameID(frameID);
          var frame = texture.getFrame(frameID);
          var cxform = k.getColorTransform();
          var samplerIndex = +k.atlasID;
          var overflowType = k.geometry.fillMode;
          var width = texture.width;
          var height = texture.height;
          this.modelViewMatrix.identity();
          this.modelViewMatrix.multiply(viewMatrix);
          this.modelViewMatrix.multiply(k.getTransform());
          var uniformValues = k.getUniforms(this._id);
          if (!uniformValues) {
            uniformValues = [
              new UniformValue(this.uniformMap.uMVMatrix, this.modelViewMatrix.values),
              new UniformValue(this.uniformMap.uSampler, [samplerIndex]),
              new UniformValue(this.uniformMap.uColorXformMultiplier, [cxform.redMultiplier, cxform.greenMultiplier, cxform.blueMultiplier, cxform.alphaMultiplier]),
              new UniformValue(this.uniformMap.uColorXformOffset, [cxform.redOffset / 255, cxform.greenOffset / 255, cxform.blueOffset / 255, cxform.alphaOffset / 255]),
              new UniformValue(this.uniformMap.uOverflowType, [overflowType]),
              new UniformValue(this.uniformMap.uFrame, [frame.left / width, frame.top / height, frame.width / width, frame.height / height])
            ];
          } else {
            uniformValues[0].value = this.modelViewMatrix.values;
            uniformValues[1].value = [samplerIndex];
            uniformValues[2].value = [cxform.redMultiplier, cxform.greenMultiplier, cxform.blueMultiplier, cxform.alphaMultiplier];
            uniformValues[3].value = [cxform.redOffset / 255, cxform.greenOffset / 255, cxform.blueOffset / 255, cxform.alphaOffset / 255];
            uniformValues[4].value = [overflowType];
            uniformValues[5].value = [frame.left / width, frame.top / height, frame.width / width, frame.height / height];
          }
          k.setUniforms(this._id, uniformValues);
        }
      }
      if (count > 0) {
        this.gl.draw(this, a.mc(0).geometry.attributeDefsArray, a.F);
      }
    }

    setup(): boolean {
      this.vertexShaderSrc =
        "attribute vec2 aVertexPosition; \n" +
        "attribute vec2 aLoopBlinnTextureCoord; \n" +
        "attribute vec2 aTextureCoord; \n" +
        "attribute float aIsConvex; \n" +
        "uniform mat4 uMVMatrix; \n" +
        "varying vec4 vTexCoord; \n" +
        "varying float vIsConvex; \n" +
        "void main(void) { \n" +
          "gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0, 1.0); \n" +
          "vTexCoord = vec4(aLoopBlinnTextureCoord, aTextureCoord); \n" +
          "vIsConvex = aIsConvex; \n" +
        "}";
      this.fragmentShaderSrc =
        "#extension GL_OES_standard_derivatives : enable \n" +
        "precision mediump float; \n" +
        "varying vec4 vTexCoord; \n" +
        "varying float vIsConvex; \n" +
        "uniform vec4 uColorXformMultiplier; \n" +
        "uniform vec4 uColorXformOffset; \n" +
        "uniform sampler2D uSampler; \n" +
        "uniform int uOverflowType; \n" +
        "uniform vec4 uFrame; \n" +
        "void main(void) { \n" +
          "vec2 p = vTexCoord.xy; \n" +
          "vec2 px = dFdx(p); \n" +
          "vec2 py = dFdy(p); \n" +
          "vec2 f = (2.0 * vTexCoord.x) * vec2(px.x, py.x) - vec2(px.y, py.y); \n" +
          "float sd = vIsConvex * (vTexCoord.x * vTexCoord.x - vTexCoord.y) / length(f); \n" +
          "float alpha = min(0.5 - sd, 1.0); \n" +
          "if (alpha < 0.0) \n" +
            "discard; \n" +
          "vec2 uv; \n" +
          "if (uOverflowType == 0) { /* solid fill */ \n" +
            "uv = vTexCoord.zw; \n" +
          "} else if (uOverflowType == 1) { /* gradient and bitmap fill with overflow type extend */ \n" +
            "uv = clamp(vTexCoord.zw, vec2(0.0, 0.0), vec2(1.0, 1.0)) * uFrame.zw + uFrame.xy; \n" +
          "} else if (uOverflowType == 2) { /* gradient and bitmap fill with overflow type repeat */ \n" +
            "uv = fract(vTexCoord.zw) * uFrame.zw + uFrame.xy; \n" +
          "} else if (uOverflowType == 3) { /* gradient fill with overflow type reflect */ \n" +
            "uv = vTexCoord.zw; \n" +
            "if (uv.s > 1.0) { \n" +
              "float integerPart = floor(uv.s); \n" +
              "float fracPart = mod(uv.s, 1.0); \n" +
              "float odd = mod(integerPart, 2.0); \n" +
              "if (odd == 1.0) { /* if the uv.s lies on the odd number of band towards the right side */ \n" +
                "uv.s = 1.0 - fracPart; \n" +
              "} else { /* if the uv.s lies on the even number of band towards the right side */ \n" +
                "uv.s = fracPart; \n" +
              "} \n" +
            "} else if (uv.s < 0.0) { \n" +
              "float integerPart = floor(uv.s); \n" +
              "float fracPart = mod(uv.s, 1.0); \n" +
              "float odd = mod(integerPart, 2.0); \n" +
              "if (integerPart == 0.0) { /* special case for left side */ \n" +
                "uv.s = fracPart; \n" +
              "} else if (odd == 1.0) { /* if the uv.s lies on the odd number of band towards the left side */ \n" +
                "uv.s = 1.0 - fracPart; \n" +
              "} else { /* if the uv.s lies on the even number of band towards the left side */ \n" +
                "uv.s = fracPart; \n" +
              "} \n" +
            "} \n" +
            "uv = (uFrame.xy + (uv * uFrame.zw)); \n" +
          "} \n" +
          "vec4 textureColor = texture2D(uSampler, uv); \n" +
          "textureColor.a = textureColor.a * alpha; \n" +
          "gl_FragColor = textureColor * uColorXformMultiplier + uColorXformOffset; \n" +
        "}";
      this.vertexShader = this.gl.createShader(GL.VERTEX_SHADER, this.vertexShaderSrc);
      this.fragmentShader = this.gl.createShader(GL.FRAGMENT_SHADER, this.fragmentShaderSrc);
      this.program = this.gl.createProgram();
      this.gl.attachShader(this.program, this.vertexShader);
      this.gl.attachShader(this.program, this.fragmentShader);
      this._id = this.gl.linkProgram(this.program);
      if (this._id < 0) {
        this.gl.deleteProgram(this.program);
        Logger.error("Program linking failed.");
        return false;
      }
      var ul0 = this.gl.getUniformLocation(this.program, "uMVMatrix");
      var ul1 = this.gl.getUniformLocation(this.program, "uSampler");
      var ul2 = this.gl.getUniformLocation(this.program, "uColorXformMultiplier");
      var ul3 = this.gl.getUniformLocation(this.program, "uColorXformOffset");
      var ul4 = this.gl.getUniformLocation(this.program, "uOverflowType");
      var ul5 = this.gl.getUniformLocation(this.program, "uFrame");
      var u0 = new Uniform(ul0, GL.FLOAT_MAT4, 1, Uniform.Jd);
      var u1 = new Uniform(ul1, GL.SAMPLER_2D, 1, Uniform.Q);
      var u2 = new Uniform(ul2, GL.FLOAT_VEC4, 1, Uniform.Q);
      var u3 = new Uniform(ul3, GL.FLOAT_VEC4, 1, Uniform.Q);
      var u4 = new Uniform(ul4, GL.INT, 1, Uniform.Q);
      var u5 = new Uniform(ul5, GL.FLOAT_VEC4, 1, Uniform.Q);
      this._uniforms = new Uniforms([ u0, u1, u2, u3, u4, u5 ]);
      this.uniformMap = {
        uMVMatrix: u0,
        uSampler: u1,
        uColorXformMultiplier: u2,
        uColorXformOffset: u3,
        uOverflowType: u4,
        uFrame: u5
      };
      var al0 = this.gl.getAttribLocation(this.program, "aVertexPosition");
      var al1 = this.gl.getAttribLocation(this.program, "aLoopBlinnTextureCoord");
      var al2 = this.gl.getAttribLocation(this.program, "aIsConvex");
      var al3 = this.gl.getAttribLocation(this.program, "aTextureCoord");
      var a0 = new Attribute(al0, "POSITION0", GL.FLOAT, 2);
      var a1 = new Attribute(al1, "TEXCOORD0", GL.FLOAT, 2);
      var a2 = new Attribute(al2, "TEXCOORD1", GL.FLOAT, 1);
      var a3 = new Attribute(al3, "TEXCOORD2", GL.FLOAT, 2);
      this._attribs = new Attributes([ a0, a1, a2, a3 ]);
      return true;
    }
    
    destroy() {
      this.gl.deleteShader(this.vertexShader);
      this.gl.deleteShader(this.fragmentShader);
      this.gl.deleteProgram(this.program);
    }
  }
}

/*
 ADOBE SYSTEMS INCORPORATED
  Copyright 2013 Adobe Systems Incorporated
  All Rights Reserved.

 NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
 terms of the Adobe license agreement accompanying it.  If you have received this file from a
 source other than Adobe, then your use, modification, or distribution of it requires the prior
 written permission of Adobe.

 Version: 0.2.0
 Build number: 14.1.0.96
*/
function aa() {
  return function () {}
}

function g(c) {
  return function (d) {
    this[c] = d
  }
}

function z(c) {
  return function () {
    return this[c]
  }
}
var N;
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e) {
        this.v = a;
        this.pe = h;
        this.Vd = b;
        this.wg = e
      }
      b.prototype.i = z("v");
      return b
    }();
    c.Yh = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, h) {
        this.x = a;
        this.y = h
      }
      b.prototype.add = function (a) {
        var h = new c.c.k(this.x, this.y);
        h.x += a.x;
        h.y += a.y;
        return h
      };
      b.prototype.sub = function (a) {
        var h = new c.c.k(this.x, this.y);
        h.x -= a.x;
        h.y -= a.y;
        return h
      };
      return b
    }();
    d.k = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
window.flwebgl = N;
N.geom = N.c;
N.c.Point = N.c.k;
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.rotate = function (a) {
          var b = Math.cos(a);
          a = Math.sin(a);
          var e = this.b[0],
            k = this.b[4],
            l = this.b[12];
          this.b[0] = e * b - this.b[1] * a;
          this.b[1] = e * a + this.b[1] * b;
          this.b[4] = k * b - this.b[5] * a;
          this.b[5] = k * a + this.b[5] * b;
          this.b[12] = l * b - this.b[13] * a;
          this.b[13] = l * a + this.b[13] * b;
          this.L = 1 == this.b[0] && 1 == this.b[5] && 0 == this.b[1] && 0 == this.b[4] && 0 == this.b[12] && 0 == this.b[13];
          return this
        };
        this.scale = function (a, b) {
          this.b[0] *= a;
          this.b[5] *= b;
          this.b[4] *= a;
          this.b[1] *= b;
          this.b[12] *=
            a;
          this.b[13] *= b;
          this.L = 1 == this.b[0] && 1 == this.b[5] && 0 == this.b[1] && 0 == this.b[4] && 0 == this.b[12] && 0 == this.b[13];
          return this
        };
        this.L = !1;
        this.b = Array(16);
        this.ja();
        void 0 !== a && 6 <= a.length && this.ak(a)
      }
      b.prototype.C = function () {
        return (new c.c.u).copy(this)
      };
      b.prototype.ja = function () {
        this.b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        this.L = !0;
        return this
      };
      b.prototype.hh = z("L");
      b.prototype.copy = function (a) {
        for (var h = 0; 16 > h; h++) this.b[h] = a.b[h];
        this.L = a.L;
        return this
      };
      b.prototype.Cm = function () {
        var a = Array(6);
        a[0] = this.b[0];
        a[1] = this.b[1];
        a[2] = this.b[4];
        a[3] = this.b[5];
        a[4] = this.b[12];
        a[5] = this.b[13];
        return a
      };
      b.prototype.ak = function (a) {
        void 0 !== a && 6 <= a.length && (this.b[0] = a[0], this.b[1] = a[1], this.b[4] = a[2], this.b[5] = a[3], this.b[12] = a[4], this.b[13] = a[5], 1 != a[0] || 1 != a[3] || 0 != a[1] || 0 != a[2] || 0 != a[4] || 0 != a[5]) && (this.L = !1)
      };
      b.prototype.concat = function (a) {
        if (this.L) {
          if (a.L) return this.b[10] *= a.b[10], this;
          this.b[0] = a.b[0];
          this.b[1] = a.b[1];
          this.b[4] = a.b[4];
          this.b[5] = a.b[5];
          this.b[10] *= a.b[10];
          this.b[12] = a.b[12];
          this.b[13] = a.b[13];
          this.L = a.L;
          return this
        }
        if (a.L) return this.b[10] *= a.b[10], this;
        var h = a.b[1] * this.b[0] + a.b[5] * this.b[1],
          b = a.b[0] * this.b[4] + a.b[4] * this.b[5],
          e = a.b[1] * this.b[4] + a.b[5] * this.b[5],
          k = a.b[0] * this.b[12] + a.b[4] * this.b[13] + a.b[12],
          l = a.b[1] * this.b[12] + a.b[5] * this.b[13] + a.b[13],
          c = a.b[10] * this.b[10];
        this.b[0] = a.b[0] * this.b[0] + a.b[4] * this.b[1];
        this.b[1] = h;
        this.b[4] = b;
        this.b[5] = e;
        this.b[10] = c;
        this.b[12] = k;
        this.b[13] = l;
        return this
      };
      b.prototype.Ga = function (a) {
        if (this.L) a.L ? this.b[10] *= a.b[10] : (this.b[0] = a.b[0], this.b[1] =
          a.b[1], this.b[4] = a.b[4], this.b[5] = a.b[5], this.b[10] *= a.b[10], this.b[12] = a.b[12], this.b[13] = a.b[13], this.L = a.L);
        else if (a.L) this.b[10] *= a.b[10];
        else {
          var h = this.b[1] * a.b[0] + this.b[5] * a.b[1],
            b = this.b[0] * a.b[4] + this.b[4] * a.b[5],
            e = this.b[1] * a.b[4] + this.b[5] * a.b[5],
            k = this.b[0] * a.b[12] + this.b[4] * a.b[13] + this.b[12],
            l = this.b[1] * a.b[12] + this.b[5] * a.b[13] + this.b[13],
            c = this.b[10] * a.b[10];
          this.b[0] = this.b[0] * a.b[0] + this.b[4] * a.b[1];
          this.b[1] = h;
          this.b[4] = b;
          this.b[5] = e;
          this.b[10] = c;
          this.b[12] = k;
          this.b[13] = l
        }
      };
      b.prototype.J =
        function (a) {
          var h = new c.c.k(0, 0);
          h.x = this.b[0] * a.x + this.b[4] * a.y + this.b[12];
          h.y = this.b[1] * a.x + this.b[5] * a.y + this.b[13];
          return h
        };
      b.prototype.bk = function (a) {
        var h = new c.c.k(a.left, a.top),
          b = this.J(h);
        h.x = a.left + a.width;
        var e = this.J(h);
        h.y = a.top + a.height;
        var k = this.J(h);
        h.x = a.left;
        var l = this.J(h);
        a = Math.min(b.x, e.x, k.x, l.x);
        var h = Math.max(b.x, e.x, k.x, l.x),
          d = Math.min(b.y, e.y, k.y, l.y),
          b = Math.max(b.y, e.y, k.y, l.y);
        return new c.c.M(a, d, h - a, b - d)
      };
      b.prototype.Rb = function () {
        if (this.L) return this;
        var a = this.b[0],
          h = this.b[1],
          b = this.b[4],
          e = this.b[5],
          k = this.b[12],
          l = this.b[13],
          c = h * b - a * e;
        if (0 == c) return this.ja(), this;
        this.ja();
        this.b[0] = -e / c;
        this.b[1] = h / c;
        this.b[4] = b / c;
        this.b[5] = -a / c;
        this.b[12] = (k * e - l * b) / c;
        this.b[13] = (l * a - k * h) / c;
        this.L = !1;
        return this
      };
      b.prototype.Ec = function (a) {
        return this.b[0] != a.b[0] || this.b[1] != a.b[1] || this.b[4] != a.b[4] || this.b[5] != a.b[5] || this.b[12] != a.b[12] || this.b[13] != a.b[13] || this.b[10] != a.b[10] ? !1 : !0
      };
      b.prototype.translate = function (a, h) {
        this.b[12] += a;
        this.b[13] += h;
        if (0 !== this.b[12] ||
          0 !== this.b[13]) this.L = !1;
        return this
      };
      b.prototype.Jm = function () {
        return this.L ? !1 : 0 == this.b[1] * this.b[4] - this.b[0] * this.b[5]
      };
      b.prototype.set = function (a, h, b) {
        this.b[4 * h + a] = b;
        2 != a && 2 != h && (this.L = !1)
      };
      b.prototype.get = function (a, h) {
        return this.b[4 * h + a]
      };
      return b
    }();
    d.u = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
window.flwebgl = N;
N.geom = N.c;
N.c.Matrix = N.c.u;
N.c.u.prototype.clone = N.c.u.prototype.C;
N.c.u.prototype.identity = N.c.u.prototype.ja;
N.c.u.prototype.isIdentity = N.c.u.prototype.hh;
N.c.u.prototype.copy = N.c.u.prototype.copy;
N.c.u.prototype.equals = N.c.u.prototype.Ec;
N.c.u.prototype.concat = N.c.u.prototype.concat;
N.c.u.prototype.translate = N.c.u.prototype.translate;
N.c.u.prototype.rotate = N.c.u.prototype.rotate;
N.c.u.prototype.scale = N.c.u.prototype.scale;
N.c.u.prototype.transformPoint = N.c.u.prototype.J;
N.c.u.prototype.getValues = N.c.u.prototype.Cm;
N.c.u.prototype.setValues = N.c.u.prototype.ak;
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e) {
        "undefined" === typeof e && (e = 255);
        this.Jf = a;
        this.vf = h;
        this.rf = b;
        this.ve = e;
        this.red = a;
        this.green = h;
        this.blue = b;
        this.alpha = e
      }
      b.prototype.Ec = function (a) {
        return this.Jf != a.Jf || this.vf != a.vf || this.rf != a.rf || this.ve != a.ve ? !1 : !0
      };
      return b
    }();
    c.Qc = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
window.flwebgl = N;
N.geom = N.c;
N.c.Color = N.c.Qc;
(function (c) {
  (function (d) {
    var f;
    (function (a) {
      a[a.k_None = 0] = "k_None";
      a[a.k_Extend = 1] = "k_Extend";
      a[a.k_Repeat = 2] = "k_Repeat";
      a[a.k_Reflect = 3] = "k_Reflect"
    })(f || (f = {}));
    d.Tn = function () {
      return aa()
    }();
    d.na = function () {
      return function (a, h, b, e) {
        this.byteOffset = a;
        this.pc = h;
        this.type = b;
        this.size = e
      }
    }();
    d.di = function () {
      return function (a, h) {
        this.vb = a;
        this.aa = h
      }
    }();
    var b = function () {
      return function () {
        this.ta = []
      }
    }();
    d.Rn = b;
    d.Pd = function () {
      return function (a, h) {
        this.ba = a;
        this.jc = h
      }
    }();
    f = function () {
      function a(a, p) {
        this.ad =
          a;
        this.Rg = {};
        this.Fi = void 0;
        this.he = new b;
        this.sl = p;
        this.je = 0
      }
      a.prototype.nc = function (a) {
        "undefined" === typeof a && (a = void 0);
        return void 0 === a ? void 0 : this.Rg[a]
      };
      a.prototype.qj = function () {
        var a = [],
          b;
        for (b in this.Rg) a.push(b);
        return a
      };
      a.prototype.sa = function () {
        return this.Fi.length
      };
      a.prototype.Sb = z("sl");
      a.prototype.i = function () {
        return -1
      };
      a.prototype.xe = function (a, b) {
        this.Rg[a] = b;
        for (var e = 0; e < b.length; ++e) this.he.ta.push(b[e].jc)
      };
      a.prototype.we = function (a) {
        this.Fi = new Uint16Array(a)
      };
      a.prototype.Ke =
        g("je");
      a.Xn = new c.c.Qc(255, 0, 0, 255);
      a.ko = "Extend";
      a.mo = "Repeat";
      a.lo = "Reflect";
      a.Pm = "Extend";
      a.Ff = "Repeat";
      a.ho = "Reflect";
      a.Rc = {
        Extend: 1,
        Repeat: 2,
        Reflect: 3
      };
      return a
    }();
    d.ca = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, h, b, e, k, l, c, d) {
        "undefined" === typeof a && (a = 0);
        "undefined" === typeof h && (h = 1);
        "undefined" === typeof b && (b = 0);
        "undefined" === typeof e && (e = 1);
        "undefined" === typeof k && (k = 0);
        "undefined" === typeof l && (l = 1);
        "undefined" === typeof c && (c = 0);
        "undefined" === typeof d && (d = 1);
        this.ja();
        void 0 !== a && (this.cb = a);
        void 0 !== h && (this.ua = h);
        void 0 !== b && (this.mb = b);
        void 0 !== e && (this.Ca = e);
        void 0 !== k && (this.jb = k);
        void 0 !== l && (this.Aa = l);
        void 0 !== c && (this.eb = c);
        void 0 !== d &&
          (this.va = d)
      }
      b.prototype.Ya = z("cb");
      b.prototype.tb = z("mb");
      b.prototype.rb = z("jb");
      b.prototype.pb = z("eb");
      b.prototype.Xa = z("ua");
      b.prototype.sb = z("Ca");
      b.prototype.qb = z("Aa");
      b.prototype.ob = z("va");
      b.prototype.sn = g("cb");
      b.prototype.Fn = g("mb");
      b.prototype.zn = g("jb");
      b.prototype.vn = g("eb");
      b.prototype.rn = function (a) {
        this.ua = a;
        1 < this.ua && (this.ua = 1)
      };
      b.prototype.En = function (a) {
        this.Ca = a;
        1 < this.Ca && (this.Ca = 1)
      };
      b.prototype.yn = function (a) {
        this.Aa = a;
        1 < this.Aa && (this.Aa = 1)
      };
      b.prototype.un = function (a) {
        this.va =
          a;
        1 < this.va && (this.va = 1)
      };
      b.prototype.ja = function () {
        this.eb = this.jb = this.mb = this.cb = 0;
        this.va = this.Aa = this.Ca = this.ua = 1;
        return this
      };
      b.prototype.hh = function () {
        return 0 == this.cb && 1 == this.ua && 0 == this.mb && 1 == this.Ca && 0 == this.eb && 1 == this.va && 0 == this.jb && 1 == this.Aa
      };
      b.prototype.Ec = function (a) {
        return this.cb != a.cb || this.mb != a.mb || this.jb != a.jb || this.eb != a.eb || this.ua != a.ua || this.Ca != a.Ca || this.Aa != a.Aa || this.va != a.va ? !1 : !0
      };
      b.prototype.concat = function (a) {
        this.cb += this.ua * a.cb;
        this.ua *= a.ua;
        this.mb += this.Ca *
          a.mb;
        this.Ca *= a.Ca;
        this.jb += this.Aa * a.jb;
        this.Aa *= a.Aa;
        this.eb += this.va * a.eb;
        this.va *= a.va;
        return this
      };
      b.prototype.C = function () {
        return (new c.c.p).copy(this)
      };
      b.prototype.copy = function (a) {
        this.mb = a.tb();
        this.jb = a.rb();
        this.eb = a.pb();
        this.cb = a.Ya();
        this.Ca = a.sb();
        this.Aa = a.qb();
        this.va = a.ob();
        this.ua = a.Xa();
        return this
      };
      return b
    }();
    d.p = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
window.flwebgl = N;
N.geom = N.c;
N.c.ColorTransform = N.c.p;
N.c.p.prototype.getAlphaOffset = N.c.p.prototype.Ya;
N.c.p.prototype.getRedOffset = N.c.p.prototype.tb;
N.c.p.prototype.getGreenOffset = N.c.p.prototype.rb;
N.c.p.prototype.getBlueOffset = N.c.p.prototype.pb;
N.c.p.prototype.getAlphaMultiplier = N.c.p.prototype.Xa;
N.c.p.prototype.getRedMultiplier = N.c.p.prototype.sb;
N.c.p.prototype.getGreenMultiplier = N.c.p.prototype.qb;
N.c.p.prototype.getBlueMultiplier = N.c.p.prototype.ob;
N.c.p.prototype.setAlphaOffset = N.c.p.prototype.sn;
N.c.p.prototype.setRedOffset = N.c.p.prototype.Fn;
N.c.p.prototype.setGreenOffset = N.c.p.prototype.zn;
N.c.p.prototype.setBlueOffset = N.c.p.prototype.vn;
N.c.p.prototype.setAlphaMultiplier = N.c.p.prototype.rn;
N.c.p.prototype.setRedMultiplier = N.c.p.prototype.En;
N.c.p.prototype.setGreenMultiplier = N.c.p.prototype.yn;
N.c.p.prototype.setBlueMultiplier = N.c.p.prototype.un;
N.c.p.prototype.identity = N.c.p.prototype.ja;
N.c.p.prototype.isIdentity = N.c.p.prototype.hh;
N.c.p.prototype.equals = N.c.p.prototype.Ec;
N.c.p.prototype.concat = N.c.p.prototype.concat;
N.c.p.prototype.clone = N.c.p.prototype.C;
N.c.p.prototype.copy = N.c.p.prototype.copy;
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e) {
        this.v = a;
        this.ka = h;
        this.lb = b;
        this.Ba = e;
        this.se = {}
      }
      b.prototype.i = z("v");
      b.prototype.nc = function () {
        return this.ka.nc(this.lb)
      };
      b.prototype.sa = function () {
        return this.ka.sa()
      };
      b.prototype.Ce = function (a) {
        return this.se[a]
      };
      b.prototype.Pf = function (a, h) {
        this.se[a] = h
      };
      b.prototype.ub = function () {
        return this.Ba.ub()
      };
      b.prototype.La = function () {
        return this.Ba.La()
      };
      b.prototype.Fa = function () {
        return this.Ba.Fa()
      };
      b.prototype.Jc = function () {
        return this.Ba.Jc()
      };
      b.prototype.Sb = function () {
        var a = this.Ba.La();
        return this.ka.Sb() && 1 == a.Xa() && 0 == a.Ya()
      };
      b.prototype.s = function () {
        this.Ba = void 0
      };
      return b
    }();
    c.lk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
var ca = N || (N = {}),
  da = ca.e || (ca.e = {}),
  ea = da.dk || (da.dk = {});
ea[ea.kBM_AlphaBlend = 1] = "kBM_AlphaBlend";
(function (c) {
  (function (c) {
    var f = function () {
      function b() {
        this.F = []
      }
      b.prototype.Dc = function (a) {
        this.F.push(a)
      };
      b.prototype.mc = function (a) {
        return 0 <= a ? this.F[a] : null
      };
      b.prototype.sort = function (a) {
        this.F.sort(a)
      };
      b.prototype.clear = function () {
        for (; 0 < this.F.length;) delete this.F.pop()
      };
      return b
    }();
    c.Pe = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e) {
        this.tc = !0;
        void 0 !== a && (this.left = a, this.top = h, this.width = b, this.height = e, this.tc = !1)
      }
      b.prototype.Gm = function (a) {
        return this.tc || a.tc ? !1 : !(a.left > this.left + this.width || a.left + a.width < this.left || a.top > this.top + this.height || a.top + a.height < this.top)
      };
      b.prototype.copy = function (a) {
        this.left = a.left;
        this.top = a.top;
        this.width = a.width;
        this.height = a.height;
        this.tc = a.tc
      };
      b.prototype.zh = function (a) {
        if (this.tc) this.copy(a);
        else if (!a.tc) {
          var h = this.left +
            this.width,
            b = this.top + this.height;
          this.left = Math.min(this.left, a.left);
          this.top = Math.min(this.top, a.top);
          this.width = Math.max(h, a.left + a.width) - this.left;
          this.height = Math.max(b, a.top + a.height) - this.top
        }
      };
      return b
    }();
    c.M = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
window.flwebgl = N;
N.geom = N.c;
N.c.Rect = N.c.M;
N.c.M.prototype.left = N.c.M.prototype.left;
N.c.M.prototype.top = N.c.M.prototype.top;
N.c.M.prototype.width = N.c.M.prototype.width;
N.c.M.prototype.height = N.c.M.prototype.height;
N.c.M.prototype.intersects = N.c.M.prototype.Gm;
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e) {
        this.v = a;
        this.ng = h;
        this.ue = b;
        this.be = e;
        this.qi = {}
      }
      b.prototype.i = z("v");
      b.prototype.wf = z("ng");
      b.prototype.Zj = function (a, h) {
        this.qi[a] = h
      };
      b.prototype.$a = function (a) {
        return this.qi[a]
      };
      return b
    }();
    c.Zh = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.v = a;
        this.fd = {};
        this.fd[b.Z] = [];
        this.fd[b.P] = [];
        this.fd[b.bb] = [];
        this.pg = void 0
      }
      b.prototype.i = z("v");
      b.prototype.ra = function (a) {
        return this.fd[a].length
      };
      b.prototype.yf = function (a, h) {
        if (h < this.ra(a)) return this.fd[a][h]
      };
      b.prototype.Nb = function (a, h) {
        this.fd[a].push(h)
      };
      b.prototype.Xg = function () {
        this.pg = new c.c.M;
        for (var a = this.ra(b.P), h = 0; h < a; ++h)
          for (var p = this.yf(b.P, h), e = p.qj(), p = p.nc(e[0]), e = 0; e < p.length; ++e)
            for (var k = p[e], l = k.jc.vb,
                d = 0; d < l.length; ++d) {
              var m = l[d];
              if ("POSITION0" === m.pc) {
                l = k.ba;
                k = k.jc.aa / Float32Array.BYTES_PER_ELEMENT;
                for (m = m.byteOffset / Float32Array.BYTES_PER_ELEMENT; m < l.length; m += k) d = new c.c.M(l[m], l[m + 1], 0, 0), this.pg.zh(d);
                break
              }
            }
      };
      b.Z = 1;
      b.P = 2;
      b.bb = 3;
      return b
    }();
    d.t = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b() {}
      b.An = function (a) {
        b.ef = a
      };
      b.info = function (a) {
        b.ef >= b.Dj && console.log("INFO: " + a)
      };
      b.warn = function (a) {
        b.ef >= b.Fj && console.log("WARN: " + a)
      };
      b.error = function (a) {
        b.ef >= b.Cj && console.log("ERROR: " + a)
      };
      b.Ej = -1;
      b.Cj = 0;
      b.Fj = 1;
      b.Dj = 2;
      b.ef = b.Ej;
      return b
    }();
    c.w = f
  })(c.l || (c.l = {}))
})(N || (N = {}));
window.flwebgl = N;
N.util = N.l;
N.l.Logger = N.l.w;
N.l.w.setLevel = N.l.w.An;
N.l.w.info = N.l.w.info;
N.l.w.warn = N.l.w.warn;
N.l.w.error = N.l.w.error;
N.l.w.kLevel_OFF = N.l.w.Ej;
N.l.w.kLevel_Error = N.l.w.Cj;
N.l.w.kLevel_Warn = N.l.w.Fj;
N.l.w.kLevel_Info = N.l.w.Dj;
(function (c) {
  (function (c) {
    c.mk = function () {
      return function (c, b) {
        "undefined" === typeof c && (c = -1);
        "undefined" === typeof b && (b = -1);
        this.Ld = c;
        this.fh = b
      }
    }()
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e) {
        this.location = a;
        this.type = h;
        this.size = b;
        this.no = e
      }
      b.Jd = 0;
      b.Q = 1;
      return b
    }();
    c.q = f;
    f = function () {
      return function (b) {
        this.se = b;
        for (b = this.ri = this.bo = 0; b < this.se.length; ++b) {
          var a = this.se[b],
            h = 0;
          switch (a.type) {
            case c.d.INT:
            case c.d.FLOAT:
            case c.d.SAMPLER_2D:
              h = Math.ceil(a.size / 4);
              break;
            case c.d.INT_VEC2:
            case c.d.FLOAT_VEC2:
              h = Math.ceil(2 * a.size / 4);
              break;
            case c.d.INT_VEC3:
            case c.d.FLOAT_VEC3:
              h = Math.ceil(3 * a.size / 4);
              break;
            case c.d.INT_VEC4:
            case c.d.FLOAT_VEC4:
              h =
                a.size;
              break;
            case c.d.FLOAT_MAT4:
              h = 4 * a.size
          }
          this.ri += h
        }
      }
    }();
    c.Re = f;
    c.R = function () {
      return function (b, a, h, p, e) {
        "undefined" === typeof e && (e = !1);
        this.location = b;
        this.pc = a;
        this.type = h;
        this.size = p;
        this.Hf = e
      }
    }();
    f = function () {
      function b(a) {
        this.fi = {};
        for (var h = 0; h < a.length; ++h) this.fi[a[h].pc] = a[h]
      }
      b.prototype.Za = function (a) {
        return this.fi[a]
      };
      return b
    }();
    c.Oe = f;
    c.D = function () {
      return function (b, a) {
        this.jc = b;
        this.value = a
      }
    }()
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b, e, k, l) {
        this.v = a;
        this.$d = [];
        this.vc = h;
        this.il = b;
        this.fl = e;
        this.hl = k;
        this.le = {};
        for (a = 0; a < l.length; a++) this.le[l[a].Ka] || (this.le[l[a].Ka] = []), this.le[l[a].Ka].push(l[a].functionName)
      }
      b.prototype.i = z("v");
      b.prototype.getName = z("vc");
      b.prototype.zd = z("hl");
      b.prototype.pm = function (a) {
        return this.le[a + 1] ? this.le[a + 1] : []
      };
      b.prototype.pj = function (a) {
        return a < this.$d.length ? this.$d[a] : []
      };
      b.prototype.ej = function (a) {
        this.$d.push(a)
      };
      return b
    }();
    c.$h =
      f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h, b) {
        this.v = a;
        this.vc = h;
        this.Jl = b;
        this.cf = !1
      }
      b.prototype.i = z("v");
      b.prototype.getName = z("vc");
      b.prototype.Bn = function () {
        this.cf = !0
      };
      return b
    }();
    c.Xh = f
  })(c.media || (c.media = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b() {
        this.md = {};
        this.fc = {};
        this.of = {};
        this.Ig = {};
        this.gd = -1
      }
      b.prototype.Bd = function (a) {
        return this.md[a]
      };
      b.prototype.zf = function (a) {
        return this.fc[a]
      };
      b.prototype.Am = function (a) {
        for (var h in this.fc) {
          var b = this.fc[h];
          if (a === b.il) return b
        }
      };
      b.prototype.uj = function (a) {
        return this.of[a]
      };
      b.prototype.tj = function () {
        var a = [],
          h = 0,
          b;
        for (b in this.of) a[h++] = this.of[b];
        return a
      };
      b.prototype.um = function () {
        var a = [],
          h = 0,
          b;
        for (b in this.md) a[h++] = this.md[b];
        return a
      };
      b.prototype.zm = function () {
        var a = [],
          h = 0,
          b;
        for (b in this.fc) a[h++] = this.fc[b];
        return a
      };
      b.prototype.rj = function () {
        var a = [],
          h = 0,
          b;
        for (b in this.Ig) a[h++] = this.Ig[b];
        return a
      };
      b.prototype.Ug = function (a) {
        this.md[a.i()] = a
      };
      b.prototype.gj = function (a) {
        this.fc[a.i()] = a
      };
      b.prototype.Wl = function (a) {
        this.of[a.i()] = a
      };
      b.prototype.fj = function (a) {
        this.Ig[a.i()] = a
      };
      b.prototype.qm = function () {
        if (-1 === this.gd) {
          for (var a = this.um(), h = a.length, b = 0; b < h; ++b) {
            var e = a[b];
            e.i() > this.gd && (this.gd = e.i())
          }
          a = this.zm();
          h = a.length;
          for (b = 0; b < h; ++b) e = a[b], e.i() > this.gd && (this.gd = e.i())
        }
        return ++this.gd
      };
      b.prototype.yl = function (a) {
        var h = this.Bd(a);
        h && delete h;
        this.md[a] = void 0
      };
      b.prototype.zl = function (a) {
        var h = this.zf(a);
        h && delete h;
        this.fc[a] = void 0
      };
      b.prototype.s = function () {
        for (var a in this.md) this.yl(a);
        for (a in this.fc) this.zl(a)
      };
      return b
    }();
    c.tk = f
  })(c.l || (c.l = {}))
})(N || (N = {}));
(function (c) {
  var d = function () {
    function c(b, a) {
      this.ng = a;
      this.Pl = b
    }
    c.prototype.wf = z("ng");
    c.prototype.sj = z("Pl");
    return c
  }();
  c.Od = d
})(N || (N = {}));
window.flwebgl = N;
N.TextureAtlas = N.Od;
N.Od.prototype.getImageURL = N.Od.prototype.wf;
N.Od.prototype.getTextureJSON = N.Od.prototype.sj;
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.b = Array(9);
        a instanceof c.c.Vf ? this.copy(a) : a instanceof Array && 9 == a.length ? this.Kk(a) : this.ja()
      }
      b.prototype.ja = function () {
        this.b = [1, 0, 0, 0, 1, 0, 0, 0, 1]
      };
      b.prototype.copy = function (a) {
        for (var h = 0; 9 > h; h++) this.b[h] = a.b[h]
      };
      b.prototype.concat = function (a) {
        var h = this.b[1] * a.b[0] + this.b[4] * a.b[1] + this.b[7] * a.b[2],
          b = this.b[2] * a.b[0] + this.b[5] * a.b[1] + this.b[8] * a.b[2],
          e = this.b[0] * a.b[3] + this.b[3] * a.b[4] + this.b[6] * a.b[5],
          k = this.b[1] * a.b[3] + this.b[4] *
          a.b[4] + this.b[7] * a.b[5],
          l = this.b[2] * a.b[3] + this.b[5] * a.b[4] + this.b[8] * a.b[5],
          c = this.b[0] * a.b[6] + this.b[3] * a.b[7] + this.b[6] * a.b[8],
          d = this.b[1] * a.b[6] + this.b[4] * a.b[7] + this.b[7] * a.b[8],
          n = this.b[2] * a.b[6] + this.b[5] * a.b[7] + this.b[8] * a.b[8];
        this.b[0] = this.b[0] * a.b[0] + this.b[3] * a.b[1] + this.b[6] * a.b[2];
        this.b[1] = h;
        this.b[2] = b;
        this.b[3] = e;
        this.b[4] = k;
        this.b[5] = l;
        this.b[6] = c;
        this.b[7] = d;
        this.b[8] = n
      };
      b.prototype.J = function (a) {
        var h = new c.c.k(0, 0);
        h.x = this.b[0] * a.x + this.b[3] * a.y + this.b[6];
        h.y = this.b[1] * a.x +
          this.b[4] * a.y + this.b[7];
        return h
      };
      b.prototype.Rb = function () {
        var a = this.b[0],
          h = this.b[1],
          b = this.b[3],
          e = this.b[4],
          k = this.b[6],
          l = this.b[7],
          c = a * (e - l) + b * (l - h) + k * (h - e);
        0 != c && (this.b[0] = e - l, this.b[1] = l - h, this.b[2] = h - e, this.b[3] = k - b, this.b[4] = a - k, this.b[5] = b - a, this.b[6] = b * l - k * e, this.b[7] = k * h - a * l, this.b[8] = a * e - b * h, this.hm(c))
      };
      b.prototype.hm = function (a) {
        this.b[0] /= a;
        this.b[1] /= a;
        this.b[2] /= a;
        this.b[3] /= a;
        this.b[4] /= a;
        this.b[5] /= a;
        this.b[6] /= a;
        this.b[7] /= a;
        this.b[8] /= a
      };
      b.prototype.Kk = function (a) {
        for (var h =
            0; 9 > h; h++) this.b[h] = a[h]
      };
      return b
    }();
    d.Vf = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.Da = a;
        this.ya = !0;
        this.Gb = {};
        this.Gb[d.t.Z] = [];
        this.Gb[d.t.P] = [];
        this.Gb[d.t.bb] = []
      }
      b.prototype.Fa = function () {
        return this.Da.Fa()
      };
      b.prototype.He = function (a) {
        this.Da.Fa() != a && (this.Da.He(a), this.ya = !0)
      };
      b.prototype.Jc = z("ya");
      b.prototype.Ie = g("ya");
      b.prototype.ra = function (a) {
        return this.Da.Ic().ra(a)
      };
      b.prototype.ab = function (a, h, b) {
        var e = this.Gb[a][h];
        if (!e) {
          var e = this.Da.Ic(),
            k = e.yf(a, h);
          if (!k) return;
          e = new c.e.lk(c.l.U.cm(e.i(), h, a), k, b.Be(k.ad).i(),
            this);
          this.Gb[a][h] = e
        }
        return e
      };
      b.prototype.ub = function () {
        return this.Da.Pb()
      };
      b.prototype.La = function () {
        return this.Da.Gc()
      };
      b.prototype.s = function () {
        for (var a = [d.t.Z, d.t.P, d.t.bb], h = 0; h < a.length; ++h)
          for (var b = a[h], e = 0; e < this.Gb[b].length; ++e) this.Gb[b][e] && (this.Gb[b][e].s(), delete this.Gb[b][e])
      };
      return b
    }();
    d.qk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a, h) {
        "undefined" === typeof h && (h = !1);
        this.Ql = a;
        this.Hk = h;
        this.mi = this.$i = void 0
      }
      b.prototype.vj = z("Ql");
      b.prototype.ah = z("Hk");
      b.prototype.xm = z("$i");
      b.prototype.om = z("mi");
      b.prototype.stopPropagation = function () {
        this.Zi = !0
      };
      b.prototype.stopImmediatePropagation = function () {
        this.Ll = !0
      };
      b.prototype.Ln = g("$i");
      b.prototype.xn = g("mi");
      b.Tf = "flwebgl.events.Event.ADDED";
      b.Nh = "flwebgl.events.Event.REMOVED";
      b.Vn = "flwebgl.events.Event.UPDATED";
      b.Ch = "flwebgl.events.Event.ENTER_FRAME";
      b.Dh = "flwebgl.events.Event.EXIT_FRAME";
      b.Ih = "flwebgl.events.Event.FRAME_CONSTRUCTED";
      return b
    }();
    c.A = f
  })(c.r || (c.r = {}))
})(N || (N = {}));
window.flwebgl = N;
N.events = N.r;
N.r.Event = N.r.A;
N.r.A.prototype.getType = N.r.A.prototype.vj;
N.r.A.prototype.getBubbles = N.r.A.prototype.ah;
N.r.A.prototype.getTarget = N.r.A.prototype.xm;
N.r.A.prototype.getCurrentTarget = N.r.A.prototype.om;
N.r.A.prototype.stopPropagation = N.r.A.prototype.stopPropagation;
N.r.A.prototype.stopImmediatePropagation = N.r.A.prototype.stopImmediatePropagation;
N.r.A.ADDED = N.r.A.Tf;
N.r.A.REMOVED = N.r.A.Nh;
N.r.A.ENTER_FRAME = N.r.A.Ch;
N.r.A.EXIT_FRAME = N.r.A.Dh;
N.r.A.FRAME_CONSTRUCTED = N.r.A.Ih;
(function (c) {
  (function (c) {
    var f = function () {
      function b() {
        this.dd = {}
      }
      b.prototype.addEventListener = function (a, h) {
        var b = this.dd[a];
        void 0 !== b && b || (b = this.dd[a] = []);
        this.wj(a, h) || b.push(h)
      };
      b.prototype.wj = function (a, h) {
        "undefined" === typeof h && (h = void 0);
        var b = this.dd[a];
        if (void 0 === b || !b || 0 === b.length) return !1;
        if (h) {
          for (var e = 0; e < b.length; ++e)
            if (b[e] === h) return !0;
          return !1
        }
        return !0
      };
      b.prototype.removeEventListener = function (a, h) {
        var b = this.dd[a];
        if (void 0 !== b && b)
          for (var e = 0; e < b.length; ++e) b[e] === h && b.splice(e,
            1)
      };
      b.prototype.dispatchEvent = function (a) {
        a.Ln(this);
        this.sc(a)
      };
      b.prototype.sc = function (a) {
        var h = this.dd[a.vj()];
        if (void 0 !== h && h.length) {
          h = h.slice(0);
          a.xn(this);
          for (var b = 0; b < h.length && !a.Ll; ++b) h[b](a)
        }
      };
      b.prototype.on = function () {
        this.dd = {}
      };
      return b
    }();
    c.Na = f
  })(c.r || (c.r = {}))
})(N || (N = {}));
window.flwebgl = N;
N.events = N.r;
N.r.EventDispatcher = N.r.Na;
N.r.Na.prototype.addEventListener = N.r.Na.prototype.addEventListener;
N.r.Na.prototype.hasEventListener = N.r.Na.prototype.wj;
N.r.Na.prototype.removeEventListener = N.r.Na.prototype.removeEventListener;
N.r.Na.prototype.dispatchEvent = N.r.Na.prototype.dispatchEvent;
var fa = N || (N = {}),
  ga = fa.g || (fa.g = {}),
  $ = ga.ok || (ga.ok = {});
$[$.kTransform = 1] = "kTransform";
$[$.kColorTransform = 2] = "kColorTransform";
$[$.kVisibility = 4] = "kVisibility";
var ha = this.Wn || function (c, d) {
  function f() {
    this.constructor = c
  }
  for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]);
  f.prototype = d.prototype;
  c.prototype = new f
};
(function (c) {
  (function (d) {
    var f = function (b) {
      function a() {
        b.call(this);
        this.Ra = new c.c.p;
        this.za = new c.c.p;
        this.Fb = new c.c.u;
        this.ea = new c.c.u;
        this.mf = new c.e.qk(this);
        this.ya = this.sd = !0;
        this.Ba = void 0;
        this.W = 0
      }
      ha(a, b);
      a.prototype.Lf = g("v");
      a.prototype.i = z("v");
      a.prototype.Mf = g("vc");
      a.prototype.getName = z("vc");
      a.prototype.Le = function (a, b) {
        "undefined" === typeof b && (b = !0);
        b && (this.W |= 4);
        this.sd = a
      };
      a.prototype.Af = z("sd");
      a.prototype.Kd = function (a, b) {
        "undefined" === typeof b && (b = !0);
        b && (this.W |= 1);
        this.ya = !0;
        this.Fb = a.C()
      };
      a.prototype.Hc = function () {
        return this.Fb.C()
      };
      a.prototype.Pb = function () {
        return this.ea.C()
      };
      a.prototype.Je = function (a, b) {
        "undefined" === typeof b && (b = !0);
        b && (this.W |= 2);
        this.ya = !0;
        void 0 !== a ? this.Ra = a.C() : this.Ra.ja()
      };
      a.prototype.xf = function () {
        return this.Ra.C()
      };
      a.prototype.Gc = function () {
        return this.za.C()
      };
      a.prototype.Ea = function (a, b) {
        a ? (this.ea.copy(a), this.ea.Ga(this.Fb)) : this.ea.copy(this.Fb);
        b ? (this.za.copy(b), this.za.concat(this.Ra)) : this.za.copy(this.Ra)
      };
      a.prototype.Fa = function () {
        return this.ea.get(2,
          2)
      };
      a.prototype.He = function (a) {
        this.ea.set(2, 2, a)
      };
      a.prototype.Ic = z("yc");
      a.prototype.Of = g("yc");
      a.prototype.Qb = function (a) {
        this.sd && (this.mf.Ie(this.ya), a.push(this.mf));
        this.ya = !1
      };
      a.prototype.ze = function (a, b, e, k) {
        "undefined" === typeof a && (a = void 0);
        "undefined" === typeof b && (b = !0);
        "undefined" === typeof e && (e = c.e.t.P);
        "undefined" === typeof k && (k = !1);
        void 0 === a && (a = this);
        if (!0 === k) k = a.Pb(), a = this.Pb();
        else {
          k = new c.c.u;
          for (var l = a; l;) k.concat(l.Hc()), l = l.getParent();
          k.Rb();
          a = new c.c.u;
          for (l = this; l;) a.concat(l.Hc()),
            l = l.getParent();
          a.concat(k)
        }
        return b ? a.bk(this.yc.pg) : this.cl(e, a)
      };
      a.prototype.getParent = z("Ba");
      a.prototype.Nf = g("Ba");
      a.prototype.cl = function (a, b) {
        for (var e = new c.c.M, k = this.yc.ra(a), l = new c.c.k(0, 0), d = 0; d < k; ++d)
          for (var m = this.yc.yf(a, d), n = m.qj(), m = m.nc(n[0]), n = 0; n < m.length; ++n)
            for (var y = m[n], w = y.jc.vb, f = 0; f < w.length; ++f) {
              var q = w[f];
              if ("POSITION0" === q.pc) {
                w = y.ba;
                y = y.jc.aa / Float32Array.BYTES_PER_ELEMENT;
                for (q = q.byteOffset / Float32Array.BYTES_PER_ELEMENT; q < w.length; q += y) l.x = w[q], l.y = w[q + 1], l = b.J(l),
                  f = new c.c.M(l.x, l.y, 0, 0), e.zh(f);
                break
              }
            }
        return e
      };
      a.prototype.sc = function (a) {
        b.prototype.sc.call(this, a);
        this.getParent() && (a.ah() && !a.Zi) && this.getParent().sc(a)
      };
      a.prototype.s = function () {
        this.v = -1;
        this.yc = void 0;
        this.mf.s();
        this.Ba = void 0;
        delete this.mf
      };
      return a
    }(c.r.Na);
    d.G = f
  })(c.g || (c.g = {}))
})(N || (N = {}));
window.flwebgl = N;
N.sg = N.g;
N.g.Shape = N.g.G;
N.g.G.prototype.setName = N.g.G.prototype.Mf;
N.g.G.prototype.getName = N.g.G.prototype.getName;
N.g.G.prototype.setVisible = N.g.G.prototype.Le;
N.g.G.prototype.isVisible = N.g.G.prototype.Af;
N.g.G.prototype.setLocalTransform = N.g.G.prototype.Kd;
N.g.G.prototype.getLocalTransform = N.g.G.prototype.Hc;
N.g.G.prototype.getGlobalTransform = N.g.G.prototype.Pb;
N.g.G.prototype.setLocalColorTransform = N.g.G.prototype.Je;
N.g.G.prototype.getLocalColorTransform = N.g.G.prototype.xf;
N.g.G.prototype.getGlobalColorTransform = N.g.G.prototype.Gc;
N.g.G.prototype.getBounds = N.g.G.prototype.ze;
N.g.G.prototype.getParent = N.g.G.prototype.getParent;
(function (c) {
  (function (d) {
    var f = function (b) {
      function a() {
        b.call(this);
        this.v = -1;
        this.Va = void 0;
        this.m = [];
        this.Ra = new c.c.p;
        this.za = new c.c.p;
        this.Fb = new c.c.u;
        this.ea = new c.c.u;
        this.ya = this.sd = !0;
        this.pa = void 0;
        this.Ui = !1;
        this.gb = void 0;
        this.xa = -1;
        this.ff = !0;
        this.W = 0;
        this.Ba = void 0;
        this.jf = !0;
        this.Y = [];
        this.df = this.Td = !1
      }
      ha(a, b);
      a.prototype.Mf = g("vc");
      a.prototype.getName = z("vc");
      a.prototype.Le = function (a, b) {
        "undefined" === typeof b && (b = !0);
        b && (this.W |= 4);
        this.sd = a
      };
      a.prototype.Af = z("sd");
      a.prototype.Kd =
        function (a, b) {
          "undefined" === typeof b && (b = !0);
          b && (this.W |= 1);
          this.ya = !0;
          this.Fb = a.C()
        };
      a.prototype.Hc = function () {
        return this.Fb.C()
      };
      a.prototype.Pb = function () {
        return this.ea.C()
      };
      a.prototype.Je = function (a, b) {
        "undefined" === typeof b && (b = !0);
        b && (this.W |= 2);
        this.ya = !0;
        void 0 !== a ? this.Ra = a.C() : this.Ra.ja()
      };
      a.prototype.xf = function () {
        return this.Ra.C()
      };
      a.prototype.Gc = function () {
        return this.za.C()
      };
      a.prototype.Ul = function (a, b) {
        "undefined" === typeof b && (b = !0);
        return this.Tg(a, 0, b)
      };
      a.prototype.Tg = function (b,
        p, e, k) {
        "undefined" === typeof e && (e = !0);
        "undefined" === typeof k && (k = !1);
        if (void 0 == p || null == p || p > this.Ad()) return !1;
        0 > p && (p = 0);
        e && b.Lf(-1);
        void 0 !== b.getParent() && b.getParent().removeChild(b);
        if (k) return this.Y.push({
          Vb: p,
          vd: b
        }), this.m.splice(p, 0, null), !0;
        b.Nf(this);
        b.Ea(this.ea, this.za);
        this.m.splice(p, 0, b);
        p = new c.r.A(c.r.A.Tf, !0);
        b.dispatchEvent(p);
        if (b instanceof a) {
          for (p = this; p.getParent();) p = p.getParent();
          p == this.gb.dh() && 0 == b.Ae() && (b.Ne(), b.yh(), b.Pc(), b.Qf(), b.Rf(), b.Sf())
        }
        return !0
      };
      a.prototype.removeChild =
        function (a) {
          return this.Ge(this.bh(a))
        };
      a.prototype.Ge = function (a) {
        if (!(0 > a || void 0 == a || null == a || a >= this.Ad())) {
          var b = this.ia(a);
          if (!this.Td) {
            var e = new c.r.A(c.r.A.Nh, !0);
            b.dispatchEvent(e)
          }
          b.Nf(void 0);
          this.m.splice(a, 1);
          b.on();
          return b
        }
      };
      a.prototype.Ad = function () {
        return this.m.length
      };
      a.prototype.oj = function () {
        return this.m.slice(0)
      };
      a.prototype.ia = function (a, b) {
        "undefined" === typeof b && (b = !1);
        var e;
        if (a < this.Ad() && (e = this.m[a], null == e && b))
          for (var k = 0; k < this.Y.length; k++)
            if (this.Y[k].Vb == a) {
              e = this.Y[k].vd;
              break
            }
        return e
      };
      a.prototype.bh = function (a) {
        return this.m.indexOf(a)
      };
      a.prototype.lm = function (a) {
        for (var b = 0; b < this.m.length; ++b)
          if (this.m[b].getName() === a) return this.m[b]
      };
      a.prototype.getParent = z("Ba");
      a.prototype.wn = function (a, b) {
        this.vh(this.bh(a), b)
      };
      a.prototype.Ae = function () {
        return this.xa + 1
      };
      a.prototype.Bm = z("re");
      a.prototype.play = function () {
        this.jf = !0
      };
      a.prototype.stop = function () {
        this.jf = !1
      };
      a.prototype.yj = z("jf");
      a.prototype.Dm = function (a) {
        this.Bi(a, !1)
      };
      a.prototype.Em = function (a) {
        this.Bi(a, !0)
      };
      a.prototype.Bi = function (a, b) {
        if ("string" === typeof a) {
          for (var e = this.Va.zd(), k = !1, l = e.length - 1; 0 <= l; l--)
            if (a === e[l].name) {
              a = e[l].Ka;
              k = !0;
              break
            }
          if (!1 === k) return
        }
        if (!(1 > a || a > this.re) && a != this.xa + 1) {
          this.Pc(!0);
          this.play();
          a < this.xa + 1 && (e = 1 == a, this.Ji(!e), this.Pc(!e));
          for (; this.xa + 1 < a;) e = a == this.xa + 1 + 1, this.Ne(!0, e), this.Pc(!e);
          !1 === b ? this.play() : this.stop();
          this.Qf();
          this.Rf();
          this.Sf()
        }
      };
      a.prototype.vh = function (a, b) {
        if (a !== b && !(0 > a || a >= this.m.length || 0 > b || b >= this.m.length)) {
          var e = this.m.splice(a,
            1);
          this.m.splice(b, 0, e[0]);
          for (e = 0; e < this.Y.length; e++) {
            var k = this.Y[e];
            k.Vb == a ? k.Vb = b : (k.Vb > a && k.Vb--, k.Vb >= b && k.Vb++)
          }
        }
      };
      a.prototype.Lf = g("v");
      a.prototype.i = z("v");
      a.prototype.Dn = g("gb");
      a.prototype.Cn = g("ff");
      a.prototype.sc = function (a) {
        b.prototype.sc.call(this, a);
        this.getParent() && (a.ah() && !a.Zi) && this.getParent().sc(a)
      };
      a.prototype.Ne = function (a, b) {
        "undefined" === typeof a && (a = !1);
        "undefined" === typeof b && (b = !1);
        var e = !0;
        this.jf || (e = !1);
        e && (!this.ff && this.xa == this.re - 1) && (e = !1);
        e && (0 == this.xa && 1 ==
          this.re) && (e = !1);
        if (e) {
          this.xa++;
          if (this.xa == this.re) this.Ji(a), this.Pc(a);
          else {
            if (e = a && !b) this.Td = !0;
            for (var k = this.Va.pj(this.xa), l = 0; l < k.length; ++l) k[l].execute(this, this.gb, e);
            this.Td = !1
          }
          this.df = !0
        }
        if (!a) {
          for (e = 0; e < this.m.length; e++) this.m[e] instanceof c.g.j && this.m[e].Ne(a);
          for (e = 0; e < this.Y.length; e++) this.Y[e].vd instanceof c.g.j && this.Y[e].vd.Ne(a)
        }
      };
      a.prototype.yh = function () {
        var a = new c.r.A(c.r.A.Ch);
        this.dispatchEvent(a);
        for (a = 0; a < this.m.length; a++) this.m[a] instanceof c.g.j && this.m[a].yh()
      };
      a.prototype.Pc = function (a) {
        "undefined" === typeof a && (a = !1);
        for (var b = 0; b < this.Y.length; b++) {
          var e = this.Y[b].vd;
          this.m[this.Y[b].Vb] = e;
          e.Nf(this)
        }
        for (b = 0; b < this.m.length; b++) this.m[b] instanceof c.g.j && this.m[b].Pc();
        for (b = 0; b < this.Y.length; b++)
          if (e = this.Y[b].vd, e.Ea(this.ea, this.za), !a) {
            var k = new c.r.A(c.r.A.Tf, !0);
            e.dispatchEvent(k)
          }
        this.Y = []
      };
      a.prototype.Qf = function () {
        var a = new c.r.A(c.r.A.Ih);
        this.dispatchEvent(a);
        for (a = 0; a < this.m.length; a++) this.m[a] instanceof c.g.j && this.m[a].Qf()
      };
      a.prototype.Rf =
        function () {
          if (this.df) {
            for (var a = this.Va.pm(this.xa), b = 0; b < a.length; ++b) this.im(a[b]);
            this.df = !1
          }
          for (a = 0; a < this.m.length; a++) this.m[a] instanceof c.g.j && this.m[a].Rf()
        };
      a.prototype.Sf = function () {
        var a = new c.r.A(c.r.A.Dh);
        this.dispatchEvent(a);
        for (a = 0; a < this.m.length; a++) this.m[a] instanceof c.g.j && this.m[a].Sf()
      };
      a.prototype.zd = function () {
        for (var a = this.Va.zd(), b = [], e = 0; e < a.length; e++) b.push({
          frameNum: a[e].Ka,
          name: a[e].name
        });
        return b
      };
      a.prototype.mm = function () {
        for (var a = this.Va.zd(), b = a.length - 1; 0 <=
          b; b--)
          if (this.Ae() == a[b].Ka) return a[b].name
      };
      a.prototype.nm = function () {
        for (var a = this.Va.zd(), b = void 0, e = this.Ae(), k = -1, l = 0; l < a.length; l++) a[l].Ka >= k && a[l].Ka <= e && (b = a[l].name, k = a[l].Ka);
        return b
      };
      a.prototype.Nf = g("Ba");
      a.prototype.Ob = function (a) {
        if (0 > a) return -1;
        for (var b = 0; b < this.m.length; ++b)
          if (this.m[b] && this.m[b].i() == a) return b;
        for (b = 0; b < this.Y.length; ++b)
          if (this.Y[b].vd.i() == a) return this.Y[b].Vb;
        return -1
      };
      a.prototype.Of = function (a) {
        this.Va = a;
        this.xa = -1;
        this.re = this.Va.$d.length
      };
      a.prototype.Ic =
        z("Va");
      a.prototype.$j = function (a) {
        this.pa = a;
        this.Ui = !0
      };
      a.prototype.Ea = function (a, b) {
        a ? (this.ea.copy(a), this.ea.Ga(this.Fb)) : this.ea.copy(this.Fb);
        b ? (this.za.copy(b), this.za.concat(this.Ra)) : this.za.copy(this.Ra);
        for (var e = 0; e < this.m.length; ++e) this.m[e].Ea(this.ea, this.za);
        void 0 !== this.pa && (this.za.Ec(this.pa.La()) ? this.pa.Ea(this.ea) : this.oi())
      };
      a.prototype.Fa = function () {
        return this.ea.get(2, 2)
      };
      a.prototype.He = function (a) {
        this.ea.set(2, 2, a)
      };
      a.prototype.s = function () {
        for (; 0 < this.m.length;) {
          var a =
            this.m.pop();
          a.s();
          delete a
        }
        this.v = -1;
        this.Va = void 0
      };
      a.prototype.Ji = function (a) {
        "undefined" === typeof a && (a = !1);
        this.xa = 0;
        var b = [];
        a && (this.Td = !0);
        for (var e = this.Va.pj(0), k = 0; k < e.length; ++k) {
          var l = e[k];
          l instanceof c.B.Wf && b.push(l.X)
        }
        for (k = 0; k < this.Ad(); ++k)
          if (l = this.ia(k), -1 !== l.i()) {
            var d = !0;
            if (0 < b.length)
              for (var m = l.i(), n = 0; n < b.length; ++n)
                if (m == b[n]) {
                  b.splice(n, 1);
                  d = !1;
                  break
                }
            d && (this.Ge(k), l.s(), --k)
          }
        for (k = 0; k < e.length; ++k) l = e[k], l.execute(this, this.gb, a);
        this.Td = !1;
        this.df = !0
      };
      a.prototype.oi =
        function () {
          void 0 !== this.pa && (this.pa.s(), this.pa = void 0)
        };
      a.prototype.Qb = function (a) {
        if (this.Af()) {
          if (void 0 === this.pa) {
            for (var b = a.length, e = 0; e < this.m.length; ++e) this.m[e].Qb(a);
            if (this.ya)
              for (e = b; e < a.length; ++e) a[e].Ie(!0)
          } else {
            b = [];
            for (e = 0; e < this.m.length; ++e) this.m[e].Qb(b);
            for (var k = !1, e = 0; !k && e < b.length; ++e) k = b[e].Jc();
            if (k)
              for (this.oi(), e = 0; e < b.length; ++e) b[e].Ie(!0), a.push(b[e]);
            else this.pa.Qb(a)
          }
          this.ya = !1
        }
      };
      a.prototype.ze = function (a, b, e, k) {
        "undefined" === typeof a && (a = void 0);
        "undefined" ===
        typeof b && (b = !0);
        "undefined" === typeof e && (e = c.e.t.P);
        "undefined" === typeof k && (k = !1);
        void 0 === a && (a = this);
        for (var l = new c.c.M, d = 0; d < this.m.length; ++d) l.zh(this.m[d].ze(a, b, e, k));
        return l
      };
      a.prototype.im = function (a) {
        eval("flwebgl.actions." + a + ".call(this);")
      };
      return a
    }(c.r.Na);
    d.j = f
  })(c.g || (c.g = {}))
})(N || (N = {}));
window.flwebgl = N;
N.sg = N.g;
N.g.MovieClip = N.g.j;
N.g.j.prototype.setName = N.g.j.prototype.Mf;
N.g.j.prototype.getName = N.g.j.prototype.getName;
N.g.j.prototype.setVisible = N.g.j.prototype.Le;
N.g.j.prototype.isVisible = N.g.j.prototype.Af;
N.g.j.prototype.setLocalTransform = N.g.j.prototype.Kd;
N.g.j.prototype.getLocalTransform = N.g.j.prototype.Hc;
N.g.j.prototype.getGlobalTransform = N.g.j.prototype.Pb;
N.g.j.prototype.setLocalColorTransform = N.g.j.prototype.Je;
N.g.j.prototype.getLocalColorTransform = N.g.j.prototype.xf;
N.g.j.prototype.getGlobalColorTransform = N.g.j.prototype.Gc;
N.g.j.prototype.addChild = N.g.j.prototype.Ul;
N.g.j.prototype.addChildAt = N.g.j.prototype.Tg;
N.g.j.prototype.removeChild = N.g.j.prototype.removeChild;
N.g.j.prototype.removeChildAt = N.g.j.prototype.Ge;
N.g.j.prototype.getNumChildren = N.g.j.prototype.Ad;
N.g.j.prototype.getChildren = N.g.j.prototype.oj;
N.g.j.prototype.getChildAt = N.g.j.prototype.ia;
N.g.j.prototype.getChildIndex = N.g.j.prototype.bh;
N.g.j.prototype.getChildByName = N.g.j.prototype.lm;
N.g.j.prototype.getBounds = N.g.j.prototype.ze;
N.g.j.prototype.getParent = N.g.j.prototype.getParent;
N.g.j.prototype.setChildIndex = N.g.j.prototype.wn;
N.g.j.prototype.getCurrentFrame = N.g.j.prototype.Ae;
N.g.j.prototype.getTotalFrames = N.g.j.prototype.Bm;
N.g.j.prototype.getFrameLabels = N.g.j.prototype.zd;
N.g.j.prototype.getCurrentFrameLabel = N.g.j.prototype.mm;
N.g.j.prototype.getCurrentLabel = N.g.j.prototype.nm;
N.g.j.prototype.play = N.g.j.prototype.play;
N.g.j.prototype.stop = N.g.j.prototype.stop;
N.g.j.prototype.isPlaying = N.g.j.prototype.yj;
N.g.j.prototype.gotoAndPlay = N.g.j.prototype.Dm;
N.g.j.prototype.gotoAndStop = N.g.j.prototype.Em;
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.requestAnimationFrame = function (a, b, c) {
        var e = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame;
        return void 0 != e ? e(a) : c.setTimeout(a, 1E3 / b)
      };
      b.cancelAnimationFrame = function (a, b) {
        var c = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.clearTimeout;
        void 0 != c && c(a)
      };
      b.yd = function (a) {
        var b =
          parseInt(a.substring(1, 3), 16),
          d = parseInt(a.substring(3, 5), 16),
          e = parseInt(a.substring(5, 7), 16),
          k = 255;
        7 < a.length && (k = parseInt(a.substring(7), 16));
        return new c.c.Qc(b, d, e, k)
      };
      b.cm = function (a, b, c) {
        return "" + a + "_" + b + "_" + c
      };
      b.em = function (a, b) {
        return "__Snapshot__" + a + "_" + b
      };
      b.bind = function (a, b) {
        return function () {
          a[b].apply(a, arguments)
        }
      };
      b.co = function (a) {
        return 0 < a && 0 == (a & a - 1)
      };
      b.ud = function (a) {
        return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
      };
      b.sm = function (a) {
        var b = a.Pb().C();
        a = a.Hc().C();
        a.Rb();
        b.Ga(a);
        return b
      };
      return b
    }();
    d.U = f
  })(c.l || (c.l = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.Ag = a[0];
        this.hf = a[1];
        this.X = a[2];
        if (4 < a.length) {
          var b = a.slice(3);
          this.hc = new c.c.u(b)
        } else this.hc = new c.c.u;
        if (10 == a.length || 4 == a.length) this.Gi = a[a.length - 1]
      }
      b.prototype.execute = function (a, b) {
        var c = b.T,
          e = b.Pi,
          k = a.Ob(this.X);
        if (0 <= k) {
          c = a.ia(k);
          0 === (c.W & 1) && c.Kd(this.hc, !1);
          0 === (c.W & 2) && (e = c.xf().C(), e.ja(), c.Je(e, !1));
          for (e = a.Ob(this.hf) + 1; a.ia(e) && 0 > a.ia(e).i();) e++;
          e > k && e--;
          a.vh(k, e);
          0 === (c.W & 4) && c.Le(!0, !1);
          return !0
        }
        return 0 > this.Ek(a,
          c, e) ? !1 : !0
      };
      b.prototype.Ek = function (a, b, c) {
        var e = null,
          e = void 0 === b.Bd(this.Ag) ? c.Yg(this.Ag, this.X) : c.kj(this.Ag, this.X);
        e.Kd(this.hc, !1);
        void 0 !== this.Gi && e.Mf(this.Gi);
        for (b = a.Ob(this.hf) + 1; a.ia(b) && 0 > a.ia(b).i();) b++;
        return a.Tg(e, b, !1, !0) ? b : -1
      };
      return b
    }();
    d.Wf = f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a) {
        this.X = a[0]
      }
      b.prototype.execute = function (a) {
        var b = a.Ob(this.X);
        if (0 > b) return !1;
        var c = a.ia(b);
        a.Ge(b) && c.s();
        return !0
      };
      return b
    }();
    c.Ph = f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.X = a[0];
        this.hf = a[1];
        2 < a.length ? (a = a.slice(2), this.hc = new c.c.u(a)) : this.hc = new c.c.u
      }
      b.prototype.execute = function (a) {
        var b = a.Ob(this.X);
        if (0 > b) return !1;
        for (var c = a.ia(b), e = a.Ob(this.hf) + 1; a.ia(e) && 0 > a.ia(e).i();) e++;
        e > b && e--;
        b != e && a.vh(b, e);
        0 === (c.W & 1) && c.Kd(this.hc, !1);
        return !0
      };
      return b
    }();
    d.bi = f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.X = a[0];
        a = a.slice(1);
        this.dg = void 0 !== a && 8 == a.length ? new c.c.p(a[0], a[1] / 100, a[2], a[3] / 100, a[4], a[5] / 100, a[6], a[7] / 100) : new c.c.p
      }
      b.prototype.execute = function (a) {
        var b = a.Ob(this.X);
        if (0 > b) return !1;
        a = a.ia(b, !0);
        0 === (a.W & 2) && a.Je(this.dg, !1);
        return !0
      };
      return b
    }();
    d.ai = f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a) {
        this.X = a[0];
        this.Tl = 1 === a[1]
      }
      b.prototype.execute = function (a) {
        var b = a.Ob(this.X);
        if (0 > b) return !1;
        a = a.ia(b, !0);
        0 === (a.W & 4) && a.Le(this.Tl, !1);
        return !0
      };
      return b
    }();
    c.Vh = f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a) {
        this.X = a[0];
        this.Rd = new c.c.Qc(a[2], a[3], a[4], a[1])
      }
      b.prototype.execute = function (a, b) {
        var d = a.Ob(this.X);
        if (0 > d) return !1;
        d = a.ia(d, !0);
        if (d.Ui) return !0;
        var e = a.Gc().C(),
          k = new c.e.vk,
          d = new c.e.yk(d, this.Rd, e, k);
        return b.nd.nn(d)
      };
      return b
    }();
    d.Wh = f
  })(c.B || (c.B = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function b(a) {
        this.X = a[0];
        this.Ol = a[1];
        this.ll = a[2]
      }
      b.prototype.execute = function (a, b, c) {
        c || b.Ac.kn(this.X.toString(), this.Ol, this.ll);
        return !0
      };
      return b
    }();
    c.Mh = f
  })(c.media || (c.media = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      return function (a, b, h, c, e, d) {
        this.On = a;
        this.Nn = b;
        this.Mn = h;
        this.jm = c;
        this.loop = e;
        this.qn = d
      }
    }();
    d.Sn = f;
    var b = function () {
      function b(a) {
        this.T = a
      }
      b.prototype.gh = function (a, b, h) {
        if (void 0 !== b)
          for (var k = 0; k < b.length; k++)
            if (!this.vl(b[k].sj(), b[k].wf(), k)) return;
        return this.ul(a, h)
      };
      b.prototype.s = function () {
        return !0
      };
      b.prototype.If = function (a, b, h, k, e, d, p, f, r, u, A) {
        "undefined" === typeof f && (f = []);
        "undefined" === typeof r && (r = []);
        "undefined" === typeof u && (u = []);
        "undefined" ===
        typeof A && (A = []);
        var C = [];
        if (0 >= f.length && 0 >= r.length && 0 >= u.length && 0 >= A.length) return C;
        var v = [],
          x = c.e.t.Z;
        0 < f.length ? v = this.xl(a, f) : (x = c.e.t.P, v = this.wl(a, r, u, A));
        for (a = 0; a < v.length; a++) {
          f = v[a];
          r = this.ui(f, b, h, k);
          u = new c.e.ca(b, p);
          for (var B in r) {
            A = r[B];
            this.cd && this.ti(x, A, f.Ma.length);
            var I = this.te;
            A = new c.e.Pd(new Float32Array(A), I);
            u.xe(B, [A]);
            u.we(new Uint16Array(f.Ma))
          }
          u.Ke(this.xi(h, e, d));
          C.push(u)
        }
        return C
      };
      b.prototype.dj = function (a, b, h, k, e, d, f, q, r, u) {
        for (var A = 0, C = 0, v = 0, x = 0, B = 0, I = x = 0, K =
            0, T = b.length + h.length + k.length, X = [], U = 3 * Math.floor(c.e.d.la / 6); C < T;) {
          var A = C,
            C = T - C > U ? C + U : T,
            L = C - A,
            A = [],
            R = [],
            H = 0,
            F = 0,
            W = this.ec(7),
            J, x = B,
            B = B < h.length ? h.length - B < L ? h.length : B + L : B,
            L = L - (B - x);
          J = h;
          for (var M = this.ec(0), O = this.ec(1), K = this.ec(2); x < B; x += 3) {
            var E = J[x],
              G = J[x + 1],
              D = J[x + 2],
              E = new c.c.k(a[2 * E], a[2 * E + 1]),
              G = new c.c.k(a[2 * G], a[2 * G + 1]),
              D = new c.c.k(a[2 * D], a[2 * D + 1]),
              P = E.x - G.x,
              Y = E.y - G.y,
              S = G.x - D.x,
              Q = G.y - D.y,
              V = Math.sqrt(P * P + Y * Y),
              Z = Math.sqrt(S * S + Q * Q),
              Q = -Q / Z,
              S = S / Z,
              P = new c.c.k(E.x - 2 * (-Y / V), E.y - 2 * (P / V)),
              Y = G,
              Q =
              new c.c.k(D.x - 2 * Q, D.y - 2 * S),
              V = this.wi([E, G, D], [M, O, K], [P, Y, Q]);
            this.Sc(A, R, [E, P, G], [M, V[0], O], [1, 1, 1], F, H);
            F += 3 * this.S;
            H += 3;
            this.Sc(A, R, [G, Q, D], [O, V[2], K], [1, 1, 1], F, H);
            F += 3 * this.S;
            H += 3
          }
          if (0 < L)
            for (x = v, v = v < b.length ? b.length - v < L ? b.length : v + L : v, L -= v - x, M = this.ec(4), O = this.ec(5), K = this.ec(6), J = b; x < v; x += 3) E = J[x], G = J[x + 1], D = J[x + 2], E = new c.c.k(a[2 * E], a[2 * E + 1]), G = new c.c.k(a[2 * G], a[2 * G + 1]), D = new c.c.k(a[2 * D], a[2 * D + 1]), Y = (E.x + D.x) / 2, V = (E.y + D.y) / 2, P = D.x - E.x, S = D.y - E.y, Q = Math.sqrt(P * P + S * S), S = -S / Q, Z = P / Q, P = new c.c.k(E.x +
              0.1 * Math.min(2, Q) * S, E.y + 0.1 * Math.min(2, Q) * Z), Y = new c.c.k(Y, V), Q = new c.c.k(D.x + 0.1 * Math.min(2, Q) * S, D.y + 0.1 * Math.min(2, Q) * Z), V = this.wi([E, G, D], [M, O, K], [P, Y, Q]), this.Sc(A, R, [E, P, D], [M, V[0], K], [-1, -1, -1], F, H), F += 3 * this.S, H += 3, this.Sc(A, R, [D, P, Q], [K, V[0], V[2]], [-1, -1, -1], F, H), F += 3 * this.S, H += 3;
          if (0 < L)
            for (K = I, I = I < k.length ? k.length - I < L ? k.length : I + L : I, J = k, M = O = this.ec(4), x = K; x < I; x += 3) E = J[x], G = J[x + 1], D = J[x + 2], E = new c.c.k(a[2 * E], a[2 * E + 1]), new c.c.k(a[2 * G], a[2 * G + 1]), D = new c.c.k(a[2 * D], a[2 * D + 1]), P = D.x - E.x, S = D.y -
              E.y, Q = Math.sqrt(P * P + S * S), S = -S / Q, Z = P / Q, P = new c.c.k(E.x - 2 * S, E.y - 2 * Z), Y = new c.c.k(D.x - 2 * S, D.y - 2 * Z), V = [W, W], this.Sc(A, R, [E, P, D], [M, V[0], O], [-1, -1, -1], F, H), F += 3 * this.S, H += 3, this.Sc(A, R, [P, Y, D], [V[0], V[1], O], [-1, -1, -1], F, H), F += 3 * this.S, H += 3;
          if (0 == R.length) return;
          L = new c.e.ca(e, f);
          H = new p;
          H.ba = A;
          H.Ma = R;
          var A = this.ui(H, e, d, q),
            L = new c.e.ca(e, f),
            R = c.e.t.bb,
            ba;
          for (ba in A) F = A[ba], this.cd && this.ti(R, F, H.Ma.length), W = this.te, F = new c.e.Pd(new Float32Array(F), W), L.xe(ba, [F]), L.we(new Uint16Array(H.Ma));
          L.Ke(this.xi(d,
            r, u));
          X.push(L)
        }
        return X
      };
      b.prototype.Sc = function (a, b, h, k, e, c, d) {
        a[c + 0] = h[0].x;
        a[c + 1] = h[0].y;
        a[c + 2] = k[0].x;
        a[c + 3] = k[0].y;
        a[c + 4] = e[0];
        c += this.S;
        a[c + 0] = h[1].x;
        a[c + 1] = h[1].y;
        a[c + 2] = k[1].x;
        a[c + 3] = k[1].y;
        a[c + 4] = e[1];
        c += this.S;
        a[c + 0] = h[2].x;
        a[c + 1] = h[2].y;
        a[c + 2] = k[2].x;
        a[c + 3] = k[2].y;
        a[c + 4] = e[2];
        b[d + 0] = d + 0;
        b[d + 1] = d + 1;
        b[d + 2] = d + 2
      };
      b.prototype.ec = function (a) {
        if (9 <= a) return b.Me[a - 5];
        4 <= a && (a -= 4);
        4 == a && (a = 3);
        return b.Me[a]
      };
      b.prototype.ul = function (h, d) {
        "string" === typeof h && (h = JSON.parse(h));
        var p = h[b.Um],
          n = new f(p[b.Qj][b.jn],
            p[b.Qj][b.Vm], c.l.U.yd(p[b.en]), p[b.Tm], p[b.Zm], p[b.cn]),
          p = !0 == p[b.bn] ? new a(h, this, this.T) : new e(h, this, this.T);
        this.cd = !1;
        this.S = 7;
        if (this.cd = d[c.n.kh]) this.S += 4;
        this.hi = d[c.n.Hd];
        if (!p.Uj() || !p.Sj()) return n;
        this.te = new c.e.di;
        var y = new c.e.na(0, "POSITION0", c.e.d.FLOAT, 2),
          w = new c.e.na(2 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD0", c.e.d.FLOAT, 2),
          t = new c.e.na(4 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD1", c.e.d.FLOAT, 1),
          q = new c.e.na(5 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD2", c.e.d.FLOAT, 2);
        this.te.vb = [y, w, t, q];
        if (this.cd) {
          var q = new c.e.na(5 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD2", c.e.d.FLOAT, 2),
            r = new c.e.na(7 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD3", c.e.d.FLOAT, 2),
            u = new c.e.na(9 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD4", c.e.d.FLOAT, 2);
          this.te.vb = [y, w, t, q, r, u]
        }
        this.te.aa = this.S * Float32Array.BYTES_PER_ELEMENT;
        if (!p.Tj() || !p.Vj()) return n;
        this.ac = p.ac;
        return n
      };
      b.prototype.vl = function (a, h, e) {
        if (void 0 === a) return !1;
        var d = a[b.hn];
        if (void 0 === d) return !1;
        a = new c.e.Zh(e, h, a[b.Nj][b.Oj][b.Kh], a[b.Nj][b.Oj][b.Jh]);
        for (var p in d) h = d[p][b.Sm], h = new c.c.M(h[b.fn] + 1, h[b.jk] + 1, h[b.Kh] - 2, h[b.Jh] - 2), a.Zj(p, h);
        this.T.Wl(a);
        return !0
      };
      b.prototype.af = function (a, b, h, k, c, e, d) {
        "undefined" === typeof d && (d = void 0);
        d = void 0 === d ? new p : d;
        for (var f = d.Ma.length, r = d.ba.length, u = d.ba, A = d.Ma, C = 0; h < k; h += 3)
          for (var v = 0; 3 > v; v++) {
            var x = b[h + v];
            A[C + f] = C;
            var B = 0;
            u[r + B++] = a[2 * x + 0];
            u[r + B++] = a[2 * x + 1];
            u[r + B++] = c[v].x;
            u[r + B++] = c[v].y;
            for (u[r + B++] = e; B < this.S;) u[r + B++] = void 0;
            r += this.S;
            ++C
          }
        return d
      };
      b.prototype.xl = function (a, b) {
        for (var h = [], k = 0,
            e = 0, d = [new c.c.k(0, 1), new c.c.k(0, 1), new c.c.k(0, 1)]; e < b.length;) k = e, e = b.length - e > c.e.d.la ? e + c.e.d.la : b.length, k = this.af(a, b, k, e, d, 1E5), h.push(k);
        return h
      };
      b.prototype.wl = function (a, h, e, d) {
        for (var f = [], w = 0, t = 0, q = 0, r = 0, u = q = 0, A = q = 0, C = h.length + e.length + d.length, v = [b.Me[0], b.Me[1], b.Me[2]], x = [new c.c.k(0, 0), new c.c.k(0, 1), new c.c.k(0, 0)]; t < C;) {
          var w = t,
            t = C - t > c.e.d.la ? t + c.e.d.la : C,
            w = t - w,
            B = new p,
            q = r,
            r = r < h.length ? h.length - r < w ? h.length : r + w : r,
            w = w - (r - q);
          q != r && (B = this.af(a, h, q, r, v, -1));
          0 < w && (q = u, u = u < e.length ?
            e.length - u < w ? e.length : u + w : u, w -= u - q, B = this.af(a, e, q, u, v, 1, B));
          0 < w && (q = A, A = A < d.length ? d.length - A < w ? d.length : A + w : A, B = this.af(a, d, q, A, x, 1, B));
          f.push(B)
        }
        return f
      };
      b.prototype.ui = function (b, h, k, c) {
        for (var d = {}, p = this.T.tj(), f = this.cd ? this.S - 6 : this.S - 2, q = 0; q < p.length; q++) {
          var r = p[q],
            u = r.$a(h);
          if (void 0 !== u) {
            var A = r.ue,
              r = r.be;
            switch (k) {
              case a.ih:
              case e.ih:
                this.Wk(b.ba, this.S, f, A, r, u, b.Ma.length);
                break;
              case a.Gd:
              case e.Gd:
                this.Vk(b.ba, this.S, f, b.Ma.length, c);
                break;
              case a.Fd:
              case e.Fd:
                this.Uk(b.ba, this.S, f,
                  b.Ma.length, c, u.width, u.height)
            }
            void 0 !== b.ba && 0 < b.ba.length && (d[p[q].i()] = b.ba)
          }
        }
        return d
      };
      b.prototype.xi = function (b, h, k) {
        var d = 0;
        switch (b) {
          case a.Gd:
          case e.Gd:
            d = c.e.ca.Rc[h];
            break;
          case a.Fd:
          case e.Fd:
            d = c.e.ca.Rc[c.e.ca.Ff], k && (d = c.e.ca.Rc[c.e.ca.Pm])
        }
        return d
      };
      b.prototype.Wk = function (a, b, h, k, e, d, p) {
        if (!(0 >= p))
          for (d = new c.c.k(d.left + d.width / 2, d.top + d.height / 2), d.x /= k, d.y /= e, k = 0; k < p; k++, h += b) a[h] = d.x, a[h + 1] = d.y
      };
      b.prototype.Vk = function (a, h, e, d, p) {
        if (!(0 >= d || 6 != p.length)) {
          p = new c.c.u(p);
          p.Ga(b.Km);
          var f = p.Jm();
          f || p.Rb();
          for (var t = 0, q = e; t < h * d; t += h, q += h) f ? a[q] = 0.5 : (e = p.J(new c.c.k(a[t], a[t + 1])), a[q] = e.x), a[q + 1] = 0.5
        }
      };
      b.prototype.Uk = function (a, b, h, k, e, d, p) {
        if (!(0 >= k || 6 != e.length))
          for (e = new c.c.u(e), e.Rb(), d /= 20, p /= 20, e.set(0, 0, e.get(0, 0) / d), e.set(1, 0, e.get(1, 0) / p), e.set(0, 1, e.get(0, 1) / d), e.set(1, 1, e.get(1, 1) / p), e.set(0, 3, e.get(0, 3) / d), e.set(1, 3, e.get(1, 3) / p), p = 0, d = h; p < b * k; p += b, d += b) h = e.J(new c.c.k(a[p], a[p + 1])), a[d] = h.x, a[d + 1] = h.y
      };
      b.prototype.wi = function (a, b, h) {
        for (var k = [], e = a[1].sub(a[0]),
            d = a[2].sub(a[0]), p = b[1].sub(b[0]), f = b[2].sub(b[0]), r = p.x, u = f.x, p = p.y, A = f.y, C = 1 / (r * A - u * p), f = (A * e.x - p * d.x) * C, A = (A * e.y - p * d.y) * C, p = (-u * e.x + r * d.x) * C, e = (-u * e.y + r * d.y) * C, u = 1 / (f * e - A * p), e = e * u, d = -A * u, r = -p * u, f = f * u, u = 0; u < h.length; ++u) p = h[u].sub(a[0]), A = new c.c.k(0, 0), A.x = p.x * e + p.y * r, A.y = p.x * d + p.y * f, k.push(A.add(b[0]));
        return k
      };
      b.prototype.ti = function (a, b, h) {
        var e = this.S - 4,
          k = this.S;
        switch (a) {
          case c.e.t.Z:
            for (a = 0; a < h * k; a += k, e += k) b[e] = 0, b[e + 1] = 1, b[e + 2] = 0, b[e + 3] = 1;
            break;
          case c.e.t.P:
          case c.e.t.bb:
            for (a = 0; a < h * k; a +=
              3 * k, e += 3 * k) {
              var d = [];
              d.push(new c.c.k(b[a], b[a + 1]));
              d.push(new c.c.k(b[a + k], b[a + k + 1]));
              d.push(new c.c.k(b[a + 2 * k], b[a + 2 * k + 1]));
              d = this.bl([b[a + 2], b[a + 3], 1, b[a + k + 2], b[a + k + 3], 1, b[a + 2 * k + 2], b[a + 2 * k + 3], 1], d);
              b[e] = d[0].x;
              b[e + 1] = d[0].y;
              b[e + 2] = d[1].x;
              b[e + 3] = d[1].y;
              b[e + k] = d[0].x;
              b[e + k + 1] = d[0].y;
              b[e + k + 2] = d[1].x;
              b[e + k + 3] = d[1].y;
              b[e + 2 * k] = d[0].x;
              b[e + 2 * k + 1] = d[0].y;
              b[e + 2 * k + 2] = d[1].x;
              b[e + 2 * k + 3] = d[1].y
            }
        }
      };
      b.prototype.bl = function (a, b) {
        var h = b[0].sub(b[0]),
          e = b[1].sub(b[0]),
          k = b[2].sub(b[0]),
          h = new c.c.Vf([h.x, h.y, 1, e.x,
            e.y, 1, k.x, k.y, 1
          ]);
        h.Rb();
        e = a[0];
        k = a[1];
        a[0] = a[1] = 0;
        a[3] -= e;
        a[6] -= e;
        a[4] -= k;
        a[7] -= k;
        e = new c.c.Vf(a);
        e.concat(h);
        h = e.J(new c.c.k(1, 0));
        e = e.J(new c.c.k(0, 1));
        k = [];
        k.push(h);
        k.push(e);
        return k
      };
      b.Me = [new c.c.k(0, 0), new c.c.k(0.5, 0), new c.c.k(1, 1), new c.c.k(0, 1), new c.c.k(0.25, -0.25), new c.c.k(1, 0.75)];
      b.Km = new c.c.u([1638.4, 0, 0, 1638.4, -819.2, -819.2]);
      b.Um = "header";
      b.Qj = "stageSize";
      b.jn = "width";
      b.Vm = "height";
      b.en = "stageColor";
      b.Tm = "frameRate";
      b.bn = "readable";
      b.Zm = "loop";
      b.cn = "sceneTimelines";
      b.hn = "frames";
      b.Sm = "frame";
      b.Nj = "meta";
      b.Oj = "size";
      b.fn = "x";
      b.jk = "y";
      b.Kh = "w";
      b.Jh = "h";
      return b
    }();
    d.sk = b;
    var a = function () {
        function a(b, h, e) {
          this.Eb = b;
          this.Kb = h;
          this.T = e;
          this.ac = -1
        }
        a.prototype.Sj = function () {
          var b = this.Eb[a.mh];
          if (0 === b.length) return !0;
          this.Zd = {};
          this.Xd = {};
          this.Yd = {};
          for (var h = 0; h < b.length; ++h) this.Xd[b[h][a.Gf]] = b[h][a.Id], this.Yd[b[h][a.Id]] = "T" == b[h][a.an] ? !0 : !1, this.Zd[b[h][a.Id]] = b[h][a.gn];
          return !0
        };
        a.prototype.Tj = function () {
          var b = this.Eb[a.rh];
          if (0 === b.length) return !0;
          for (var h = 0; h < b.length; ++h) {
            for (var e =
                b[h], d = new c.e.t(e[a.Gf]), e = e[a.$m], p = 0; p < e.length; ++p) {
              var f = e[p],
                t = this.Xd[f[a.Rm]],
                q = this.Zd[t],
                r = this.Yd[t],
                u = this.Kb.If(f[a.uh], t, q, f[a.lh], f[a.ph], f[a.nh], r, f[a.Wm]),
                A = this.Kb.If(f[a.uh], t, q, f[a.lh], f[a.ph], f[a.nh], r, [], f[a.Ij], f[a.Jj], f[a.Kj]),
                f = this.Kb.dj(f[a.uh], f[a.Ij], f[a.Jj], f[a.Kj], t, q, r, f[a.lh], f[a.ph], f[a.nh]);
              if (u.length)
                for (t = 0; t < u.length; t++) d.Nb(c.e.t.Z, u[t]);
              if (A.length)
                for (t = 0; t < A.length; t++) d.Nb(c.e.t.P, A[t]);
              if (f && f.length)
                for (t = 0; t < f.length; t++) d.Nb(c.e.t.bb, f[t])
            }
            d.Xg();
            this.T.Ug(d)
          }
          return !0
        };
        a.prototype.Vj = function () {
          var b = this.Eb[a.th];
          if (0 === b.length) return !0;
          for (var h = 0; h < b.length; ++h) {
            for (var e = b[h], d = e[a.Id], p = e[a.Ym], f = e[a.Xm], t = [], q = 0; q < e[a.oh].length; q++) t.push({
              Ka: e[a.oh][q][a.Lj],
              name: e[a.oh][q][a.Id]
            });
            for (var r = [], q = 0; q < e[a.qh].length; q++) {
              var u = e[a.qh][q][a.Lj];
              r.push({
                Ka: u,
                functionName: e[a.qh][q][a.dn]
              })
            }
            d = new c.B.$h(e[a.Gf], d, p, f, t, r);
            for (u = 0; u < e[a.Mj].length; ++u) {
              p = e[a.Mj][u];
              f = [];
              t = null;
              for (q = 0; q < p[a.Ub].length; ++q) {
                switch (p[a.Ub][q][0]) {
                  case 1:
                    t = new c.B.Wf(p[a.Ub][q].slice(1));
                    this.ac = Math.max(this.ac, t.X);
                    break;
                  case 2:
                    t = new c.B.bi(p[a.Ub][q].slice(1));
                    break;
                  case 3:
                    t = new c.B.ai(p[a.Ub][q].slice(1));
                    break;
                  case 4:
                    t = new c.B.Ph(p[a.Ub][q].slice(1));
                    break;
                  case 5:
                    t = new c.B.Vh(p[a.Ub][q].slice(1));
                    break;
                  case 6:
                    this.Kb.hi && (t = new c.B.Wh(p[a.Ub][q].slice(1)));
                    break;
                  case 7:
                    t = new c.media.Mh(p[a.Ub][q].slice(1))
                }
                f.push(t)
              }
              d.ej(f)
            }
            this.T.gj(d)
          }
          return !0
        };
        a.prototype.Uj = function () {
          for (var b = this.Eb[a.sh], h = 0; h < b.length; ++h) {
            var e = b[h],
              e = new c.media.Xh(e[a.Gf], e[a.Id], e[a.Pj]);
            this.T.fj(e)
          }
          return !0
        };
        a.ih = "solid";
        a.Gd = "linearGradient";
        a.Fd = "bitmap";
        a.Gf = "id";
        a.Id = "name";
        a.Ym = "linkageName";
        a.Xm = "isScene";
        a.oh = "labels";
        a.Lj = "frameNum";
        a.mh = "fills";
        a.gn = "style";
        a.an = "isOpaque";
        a.rh = "shapes";
        a.$m = "meshes";
        a.Wm = "internalIndices";
        a.Ij = "concaveCurveIndices";
        a.Jj = "convexCurveIndices";
        a.Kj = "edgeIndices";
        a.uh = "vertices";
        a.Rm = "fillId";
        a.lh = "fillMatrix";
        a.ph = "overflow";
        a.nh = "isBitmapClipped";
        a.th = "timelines";
        a.qh = "scripts";
        a.dn = "script";
        a.Mj = "frames";
        a.sh = "sounds";
        a.Pj = "src";
        a.Ub = "frameCmds";
        return a
      }(),
      h;
    (function (a) {
      a[a.kFC_PlaceObject = 1] = "kFC_PlaceObject";
      a[a.kFC_SetTransform = 2] = "kFC_SetTransform";
      a[a.kFC_SetColorTransform = 3] = "kFC_SetColorTransform";
      a[a.kFC_RemoveObject = 4] = "kFC_RemoveObject";
      a[a.kFC_SetVisibility = 5] = "kFC_SetVisibility"
    })(h || (h = {}));
    var p = function () {
        return function () {
          this.ba = [];
          this.Ma = []
        }
      }(),
      e = function () {
        function a(b, h, e) {
          this.Eb = b;
          this.Kb = h;
          this.T = e;
          this.ac = -1
        }
        a.prototype.Sj = function () {
          var b = this.Eb[a.mh];
          if (0 === b.length) return !0;
          this.Zd = {};
          this.Xd = {};
          this.Yd = {};
          for (var h = 0; h <
            b.length; ++h) {
            var e = b[h][1],
              c = b[h][2],
              d = b[h][3];
            this.Xd[b[h][0]] = c;
            this.Zd[c] = e;
            this.Yd[c] = "T" == d ? !0 : !1
          }
          return !0
        };
        a.prototype.Tj = function () {
          var b = this.Eb[a.rh];
          if (0 === b.length) return !0;
          for (var h = 0; h < b.length; ++h) {
            for (var e = b[h], d = new c.e.t(e[0]), e = e.slice(1), p = 0; p < e.length; ++p) {
              var f = e[p],
                t = f[1],
                q = f[2],
                r = f[3],
                u = f[4],
                A = f[5],
                C = [],
                v = "",
                x = !1,
                B = this.Xd[f[0]],
                I = this.Zd[B],
                K = this.Yd[B];
              switch (I) {
                case a.Gd:
                  C = f[6];
                  v = f[7];
                  break;
                case a.Fd:
                  C = f[6], x = f[7]
              }
              f = this.Kb.If(t, B, I, C, v, x, K, q);
              q = this.Kb.If(t, B, I, C, v, x,
                K, [], u, A, r);
              t = this.Kb.dj(t, u, A, r, B, I, K, C, v, x);
              if (f.length)
                for (r = 0; r < f.length; r++) d.Nb(c.e.t.Z, f[r]);
              if (q.length)
                for (r = 0; r < q.length; r++) d.Nb(c.e.t.P, q[r]);
              if (t && t.length)
                for (r = 0; r < t.length; r++) d.Nb(c.e.t.bb, t[r])
            }
            d.Xg();
            this.T.Ug(d)
          }
          return !0
        };
        a.prototype.Vj = function () {
          var b = this.Eb[a.th];
          if (0 === b.length) return !0;
          for (var h = 0; h < b.length; ++h) {
            for (var e = b[h][0], d = b[h][1], p = b[h][2], f = b[h][3], t = [], q = 0; q < b[h][4].length; q += 2) t.push({
              Ka: b[h][4][q],
              name: b[h][4][q + 1]
            });
            for (var r = [], q = 0; q < b[h][5].length; q += 2) {
              var u =
                b[h][5][q];
              r.push({
                Ka: u,
                functionName: b[h][5][q + 1]
              })
            }
            q = b[h].slice(6);
            e = new c.B.$h(e, d, p, f, t, r);
            for (u = 0; u < q.length; ++u) {
              d = q[u];
              p = [];
              f = null;
              for (t = 0; t < d.length; ++t) {
                switch (d[t][0]) {
                  case 1:
                    f = new c.B.Wf(d[t].slice(1));
                    this.ac = Math.max(this.ac, f.X);
                    break;
                  case 2:
                    f = new c.B.bi(d[t].slice(1));
                    break;
                  case 3:
                    f = new c.B.ai(d[t].slice(1));
                    break;
                  case 4:
                    f = new c.B.Ph(d[t].slice(1));
                    break;
                  case 5:
                    f = new c.B.Vh(d[t].slice(1));
                    break;
                  case 6:
                    this.Kb.hi && (f = new c.B.Wh(d[t].slice(1)));
                    break;
                  case 7:
                    f = new c.media.Mh(d[t].slice(1))
                }
                p.push(f)
              }
              e.ej(p)
            }
            this.T.gj(e)
          }
          return !0
        };
        a.prototype.Uj = function () {
          for (var b = this.Eb[a.sh], h = 0; h < b.length; ++h) {
            var e = b[h],
              e = new c.media.Xh(e[0], e[1], e[2]);
            this.T.fj(e)
          }
          return !0
        };
        a.ih = "s";
        a.Gd = "lG";
        a.Fd = "b";
        a.mh = "fills";
        a.rh = "shapes";
        a.th = "timelines";
        a.sh = "sounds";
        a.Pj = "src";
        return a
      }()
  })(c.xj || (c.xj = {}))
})(N || (N = {}));
(function (c) {
  (function (c) {
    var f = function () {
      function a(b) {
        this.Rl = 0;
        this.Xc = {};
        this.ic = {};
        this.Qd = {};
        this.Sd = {};
        this.Wc = {};
        this.Vc = {};
        this.Ng = 0;
        this.uf = this.Kf = this.pd = void 0;
        this.ed = 12;
        this.Cc = 0.95;
        this.qf = !0;
        this.$b = c.d.la;
        void 0 !== b && (void 0 !== b[a.Df] && (this.ed = b[a.Df]), void 0 !== b[a.Cf] && (this.Cc = 1 - b[a.Cf]), void 0 !== b[a.Ef] && (this.qf = b[a.Ef]), void 0 !== b[a.zj] && (this.$b = b[a.zj]));
        1 > this.ed && (this.ed = 1);
        0.5 > this.Cc ? this.Cc = 0.5 : 1 < this.Cc && (this.Cc = 1);
        if (0 > this.$b || this.$b < c.d.la) this.$b = c.d.la;
        this.ji = {};
        this.ji[a.Aj] = this.ed;
        this.ji[a.Aj] = 1 - this.Cc
      }
      a.prototype.O = g("a");
      a.prototype.Vg = function (a, b) {
        this.Oa = a;
        this.Uc = b;
        this.gc = 0;
        this.ki = a.ta[0].aa;
        this.wa = this.al(this.ki);
        if (void 0 === this.wa)
          if (this.Ng < this.ed) {
            this.wa = [];
            this.Xc[this.ki] = [];
            for (var e = 0; 1 > e; e++) {
              var c = this.Ci(this.Oa);
              this.wa.push(c)
            }
          } else return;
        this.kb = [];
        this.Zn = {};
        this.Vc = {};
        this.Wc = {};
        for (e = 0; e < this.wa.length; e++) this.Wc[this.wa[e].i()] = 0, this.Vc[this.wa[e].i()] = 0
      };
      a.prototype.Zg = function () {
        var a = this.Dl();
        a.Zl();
        var b = this.Ai(this.kb,
          a);
        void 0 === b && (a.Hm(), b = this.Ai(this.kb, a));
        this.Si(a.i(), this.kb, b);
        a.end();
        return b.wh
      };
      a.prototype.upload = function (a) {
        if (this.gc + a.sa() > this.$b) return !1;
        for (var b = a.i(), e = a.sa(), c = 0; c < this.wa.length; c++) {
          var d = this.wa[c].i();
          this.wa[c].ln(b) ? this.Vc[d] += e : this.Wc[d] += e
        }
        this.kb.push(a);
        this.gc += a.sa();
        return !0
      };
      a.prototype.s = function () {
        for (var a in this.Xc)
          for (var b = this.Xc[a], e = 0; e < b.length; e++) {
            var c = b[e];
            c.s();
            this.a.deleteBuffer(this.Qd[c.i()]);
            for (var c = this.Sd[c.i()], d = 0; d < c.length; ++d) this.a.deleteBuffer(c[d])
          }
        if (this.qf) {
          for (a in this.ic) this.a.gm(this.ic[a]);
          delete this.ic
        }
        delete this.Xc;
        this.Qd = this.Wc = this.Vc = void 0
      };
      a.prototype.Yj = function (b, c) {
        switch (b) {
          case a.ci:
            this.pd = c;
            break;
          case a.Oh:
            this.Kf = c;
            break;
          case a.Bh:
            this.uf = c;
            break;
          case a.Ah:
            this.ag = c
        }
      };
      a.prototype.removeEventListener = function (b) {
        switch (b) {
          case a.ci:
            this.pd = void 0;
            break;
          case a.Oh:
            this.Kf = void 0;
            break;
          case a.Bh:
            this.uf = void 0;
            break;
          case a.Ah:
            this.ag = void 0
        }
      };
      a.prototype.Dl = function () {
        for (var a = 0, b = void 0, b = [0], e = 0; e < this.wa.length; e++) {
          var c = this.wa[e],
            d = c.i(),
            f = this.Vc[d],
            d = this.Wc[d],
            c = c.Bc * this.Cc - d,
            c = 0 > c ? -c : 0,
            f = f - (d + 2 * c);
          if (0 === a || f >= a) f === a ? b.push(e) : (a = f, delete b, b = [e])
        }
        e = b[0];
        if (1 < b.length)
          for (c = f = 0; c < b.length; c++) d = this.wa[b[c]].Ii, f < d && (f = d, e = c);
        b = this.wa[e];
        this.Ng < this.ed && 0 - (this.gc + 0) > a && (b = this.Ci(this.Oa));
        return b
      };
      a.prototype.Ai = function (a, b) {
        for (var e = [], c = [], d = 0; d < a.length; d++) {
          var f = a[d],
            m = b.get(f.i()),
            n = !1;
          if (void 0 === m) {
            m = b.add(a[d].i(), f.sa());
            if (void 0 === m) return;
            n = !0
          }
          e.push({
            Ld: m,
            fh: -1
          });
          c.push(n)
        }
        return {
          wh: e,
          ck: c
        }
      };
      a.prototype.Si = function (a, b, e) {
        "undefined" ===
        typeof b && (b = []);
        "undefined" === typeof e && (e = void 0);
        var k = this.Qd[a],
          l = this.Sd[a],
          f = !1,
          m = this.a.$g(c.d.ARRAY_BUFFER);
        0 === b.length && (f = !0);
        m !== k && (this.a.ga(c.d.ARRAY_BUFFER, k), void 0 !== this.ag && this.ag(a));
        for (var k = this.Oa.ta, n = 0; n < b.length; n++)
          if (e.ck[n]) {
            var y = b[n].nc()[0].ba,
              w = e.wh[n].Ld;
            this.a.bufferSubData(c.d.ARRAY_BUFFER, w * this.Oa.ta[0].aa, y);
            void 0 !== this.pd && this.pd(y.length * Float32Array.BYTES_PER_ELEMENT)
          }
        m = void 0;
        if (void 0 === this.ic[a]) {
          y = k[0];
          n = y.vb;
          y = y.aa;
          this.qf && (this.ic[a] = this.a.fm(),
            this.a.td(this.ic[a]));
          for (w = 0; w < n.length; ++w) {
            var t = this.Uc.Za(n[w].pc);
            f && this.a.kc(t.location);
            this.a.vertexAttribPointer(t.location, t.size, t.type, t.Hf, y, n[w].byteOffset)
          }
          this.qf && this.a.td(null)
        } else m = this.ic[a], this.a.td(m);
        for (var q = 1; q < k.length; ++q) {
          this.a.ga(c.d.ARRAY_BUFFER, l[q - 1]);
          for (n = 0; n < b.length; n++) e.ck[n] && (y = b[n].nc()[q].ba, w = e.wh[n].Ld, this.a.bufferSubData(c.d.ARRAY_BUFFER, w * this.Oa.ta[q].aa, y), void 0 !== this.pd && this.pd(y.length * Float32Array.BYTES_PER_ELEMENT));
          y = k[q];
          n = y.vb;
          y =
            y.aa;
          if (void 0 === m) {
            m = this.ic[a];
            void 0 !== m && this.a.td(m);
            for (w = 0; w < n.length; ++w) t = this.Uc.Za(n[w].pc), f && this.a.kc(t.location), this.a.vertexAttribPointer(t.location, t.size, t.type, t.Hf, y, n[w].byteOffset);
            void 0 !== m && this.a.td(null)
          }
        }
      };
      a.prototype.al = function (a) {
        return this.Xc[a]
      };
      a.prototype.dl = function () {
        return this.Rl++
      };
      a.prototype.Ci = function (a) {
        var p = a.ta[0],
          e = p.aa,
          p = this.$b * p.aa,
          k = new b(this.dl(), this.$b, this);
        this.Ng++;
        this.Xc[e].push(k);
        this.Qd[k.i()] = this.a.createBuffer();
        this.a.ga(c.d.ARRAY_BUFFER,
          this.Qd[k.i()]);
        this.a.tf(c.d.ARRAY_BUFFER, p, c.d.DYNAMIC_DRAW);
        void 0 === this.Sd[k.i()] && (this.Sd[k.i()] = []);
        for (e = 1; e < a.ta.length; ++e) {
          var p = a.ta[e],
            p = this.$b * p.aa,
            l = this.a.createBuffer();
          this.Sd[k.i()].push(l);
          this.a.ga(c.d.ARRAY_BUFFER, l);
          this.a.tf(c.d.ARRAY_BUFFER, p, c.d.DYNAMIC_DRAW)
        }
        this.a.ga(c.d.ARRAY_BUFFER, null);
        this.Si(k.i());
        return k
      };
      a.Aj = "maxbuffers";
      a.fo = "fragfactor";
      a.Df = 100;
      a.Cf = 101;
      a.Ef = 102;
      a.zj = 103;
      a.ci = 0;
      a.Oh = 1;
      a.Bh = 2;
      a.Ah = 3;
      return a
    }();
    c.Se = f;
    var b = function () {
      function a(a, b, e) {
        this.v =
          a;
        this.Ib = {};
        this.Hb = {};
        this.K = [{
          $: b,
          startOffset: 0
        }];
        this.bc = {};
        this.Bc = this.Mg = b;
        this.Ii = 0;
        this.fb = e
      }
      a.prototype.i = z("v");
      a.prototype.Zl = function () {
        this.gf = {};
        this.Ii = (new Date).getTime()
      };
      a.prototype.add = function (b, c) {
        if (this.Bc >= c) {
          var e = this.Dk(c);
          if (void 0 !== e) return this.Ib[b] = e, this.Hb[b] = c, this.Bc -= c, this.gf[b] = !0, this.pf(b), e
        } else {
          var d = this.$k(c);
          if (void 0 !== d) {
            var l = this.Ib[d],
              f = this.Hb[d];
            this.Ib[d] = void 0;
            this.Hb[d] = void 0;
            this.pf(d);
            this.gf[b] = !0;
            this.Ib[b] = l;
            this.Hb[b] = f;
            this.pf(b);
            f - c > a.Lm && (this.Fk({
              $: f - c,
              startOffset: l + c
            }), this.Bc += f - c, this.Hb[b] = c);
            return e
          }
        }
      };
      a.prototype.ln = function (a) {
        return void 0 === this.Ib[a] ? !1 : !0
      };
      a.prototype.get = function (a) {
        var b = this.Ib[a];
        void 0 !== b && (this.gf[a] = !0, this.pf(a));
        return b
      };
      a.prototype.end = aa();
      a.prototype.Hm = function () {
        this.Ib = {};
        this.Hb = {};
        this.Bc = this.Mg;
        this.K = [{
          $: this.Mg,
          startOffset: 0
        }];
        this.bc = {};
        void 0 !== this.fb.uf && this.fb.uf(this.v)
      };
      a.prototype.s = function () {
        delete this.K;
        delete this.Ib;
        delete this.Hb;
        delete this.bc
      };
      a.prototype.Dk =
        function (a) {
          for (var b = -1, e = 0; e < this.K.length; e++)
            if (a <= this.K[e].$) {
              b = e;
              break
            }
          if (-1 !== b) {
            var c = this.K[b],
              d = this.K[b].startOffset;
            this.K.splice(b, 1);
            if (0 < c.$ - a) {
              c.$ -= a;
              c.startOffset += a;
              for (e = b; e < this.K.length && !(c.$ < this.K[e].$); e++);
              this.K.splice(e, 0, c)
            }
            return d
          }
        };
      a.prototype.Fk = function (a) {
        for (var b = 0; b < this.K.length; b++) this.K[b].startOffset + this.K[b].$ === a.startOffset ? (a.startOffset = this.K[b].startOffset, a.$ += this.K[b].$, this.K.splice(b, 1)) : a.startOffset + a.$ === this.K[b].startOffset && (a.$ += this.K[b].$,
          this.K.splice(b, 1));
        for (b = 0; b < this.K.length && !(a.$ < this.K[b].$); b++);
        this.K.splice(b, 0, a)
      };
      a.prototype.pf = function (a) {
        if (void 0 !== this.Ib[a] && void 0 !== this.Hb[a]) {
          var b = this.bc[a];
          void 0 === b && (b = 0);
          this.bc[a] = b + 1
        } else this.bc[a] = void 0
      };
      a.prototype.$k = function (b) {
        var c = void 0,
          e = void 0,
          d = void 0,
          l = [],
          f;
        for (f in this.bc) void 0 !== this.bc[f] && l.push({
          meshId: f,
          hitCount: this.bc[f]
        });
        l.sort(function (a, b) {
          return a.Fm - b.Fm
        });
        for (f = 0; f < l.length; f++) {
          var m = l[f].Rj;
          if (void 0 === this.gf[m] && (m = this.Hb[m], b <= m))
            if (m /=
              b, m < a.Qm) {
              c = f;
              break
            } else if (void 0 === d || d > m) d = m, e = f
        }
        void 0 !== this.fb.Kf && this.fb.Kf();
        if (void 0 === c && void 0 !== e) return l[e].Rj;
        if (void 0 !== c) return l[c].Rj
      };
      a.Qm = 3;
      a.Lm = 30;
      return a
    }()
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {
        this.rd = {}
      }
      b.prototype.O = g("a");
      b.prototype.Vg = function (a, b) {
        this.Oa = a;
        this.Uc = b;
        this.gc = 0;
        var c = a.ta[0].aa;
        if (void 0 === this.rd[c]) {
          var e = d.d.la * this.Oa.ta[0].aa * Float32Array.BYTES_PER_ELEMENT,
            k = this.a.createBuffer();
          this.a.ga(d.d.ARRAY_BUFFER, k);
          this.a.tf(d.d.ARRAY_BUFFER, e, d.d.DYNAMIC_DRAW);
          this.oe();
          this.rd[c] = k
        }
        this.Cg = this.rd[c];
        this.kb = []
      };
      b.prototype.Zg = function () {
        this.a.$g(d.d.ARRAY_BUFFER) !== this.Cg && (this.a.ga(d.d.ARRAY_BUFFER, this.Cg),
          this.oe());
        for (var a = [], b = 0, p = this.Oa.ta[0].aa, e = 0; e < this.kb.length; e++) {
          var k = new c.e.mk;
          this.a.bufferSubData(d.d.ARRAY_BUFFER, b * p, this.kb[e].nc()[0].ba);
          k.fh = -1;
          k.Ld = b;
          a.push(k);
          b += this.kb[e].sa()
        }
        return a
      };
      b.prototype.upload = function (a) {
        if (this.gc + a.sa() > d.d.la) return !1;
        this.kb.push(a);
        this.gc += a.sa();
        return !0
      };
      b.prototype.s = function () {
        for (var a in this.rd) this.a.deleteBuffer(this.rd[a]);
        this.Cg = this.kb = this.rd = void 0
      };
      b.prototype.oe = function () {
        for (var a = this.Oa.ta, b = 0; b < a.length; ++b)
          for (var c =
              a[b], e = c.vb, c = c.aa, d = 0; d < e.length; ++d) {
            var l = this.Uc.Za(e[d].pc);
            this.a.kc(l.location);
            this.a.vertexAttribPointer(l.location, l.size, l.type, l.Hf, c, e[d].byteOffset)
          }
      };
      return b
    }();
    d.Ck = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    function f(a, b) {
      return b.size - a.size
    }
    var b = function () {
      function b() {
        this.Bj = 4
      }
      b.prototype.O = function (a) {
        this.a = a;
        this.zb = {};
        this.yb = {}
      };
      b.prototype.Vg = function (a, b) {
        this.Oa = a;
        this.qa = a.ta[0].aa;
        this.Uc = b;
        this.$f = 0;
        this.F = []
      };
      b.prototype.Zg = function (a) {
        if (!a) {
          var b = this.Zk();
          a = this.yb[this.qa][b];
          var h = this.yb[this.qa].length == this.Bj;
          a = a.add(this.F, h);
          if (void 0 === a) {
            if (h) {
              c.l.w.error("Upload failed!");
              return
            }
            a = this.Yf();
            a = a.add(this.F, !0)
          }
          if (void 0 === a) c.l.w.error("Upload failed!");
          else {
            b = this.zb[this.qa][b];
            h = this.a.$g(d.d.ARRAY_BUFFER);
            if (void 0 === h || h !== b) this.a.ga(d.d.ARRAY_BUFFER, b), this.oe();
            b = [];
            for (h = 0; h < this.F.length; ++h) {
              var e = a[this.F[h].i()];
              e.upload && this.a.bufferSubData(d.d.ARRAY_BUFFER, e.state.offset * this.qa, this.F[h].nc()[0].ba);
              b.push({
                Ld: e.state.offset,
                fh: -1
              })
            }
            return b
          }
        }
      };
      b.prototype.upload = function (a) {
        if (this.$f + a.sa() > c.e.d.la) return !1;
        this.$f += a.sa();
        this.F.push(a);
        return !0
      };
      b.prototype.s = function () {
        for (var a in this.yb)
          for (var b = 0; b < this.yb[a].length; ++b) this.yb[a][b].s();
        for (a in this.zb)
          for (b = 0; b < this.zb[a].length; ++b) this.a.deleteBuffer(this.zb[a][b])
      };
      b.prototype.Zk = function () {
        var a = this.yb[this.qa];
        if (!a) return this.Yf(), 0;
        for (var b = [], h = 0; h < a.length; ++h) {
          for (var e = 0, c = 0, p = 0; p < this.F.length; ++p) {
            var f = this.F[p].sa();
            void 0 === a[h].get(this.F[p].i()) ? c += f : e += f
          }
          p = a[h].Bb;
          0 == c || 0.95 * p > c ? b.push(e) : b.push(e - c - 0.95 * p)
        }
        a = -1;
        e = -d.d.la;
        for (h = 0; h < b.length; ++h) b[h] > e && (e = b[h], a = h);
        return 0 > e && this.zb[this.qa].length < this.Bj ? (this.Yf(), this.zb[this.qa].length - 1) : a
      };
      b.prototype.Yf =
        function () {
          var b = this.a.createBuffer();
          if (void 0 === b) c.l.w.error("Creation of vertex buffer failed.");
          else {
            var h = d.d.la * this.qa * Float32Array.BYTES_PER_ELEMENT;
            this.a.ga(d.d.ARRAY_BUFFER, b);
            this.a.tf(d.d.ARRAY_BUFFER, h, d.d.DYNAMIC_DRAW);
            this.oe();
            void 0 === this.zb[this.qa] && (this.zb[this.qa] = []);
            this.zb[this.qa].push(b);
            b = new a;
            void 0 === this.yb[this.qa] && (this.yb[this.qa] = []);
            this.yb[this.qa].push(b);
            return b
          }
        };
      b.prototype.oe = function () {
        for (var a = this.Oa.ta, b = 0; b < a.length; ++b)
          for (var h = a[b], e = h.vb,
              h = h.aa, c = 0; c < e.length; ++c) {
            var d = this.Uc.Za(e[c].pc);
            this.a.kc(d.location);
            this.a.vertexAttribPointer(d.location, d.size, d.type, d.Hf, h, e[c].byteOffset)
          }
      };
      return b
    }();
    d.Un = b;
    var a = function () {
        function a() {
          this.hg = void 0;
          this.Bb = 0;
          this.Mm = 0.5;
          this.Nm = 1024;
          this.hg = new p;
          this.Hl = [];
          this.ig = {};
          this.ib = [];
          this.kd = [];
          this.Ze = [];
          this.Ye = void 0;
          this.Bb = d.d.la;
          this.zc = [new h("-1", this.Bb, 0)]
        }
        a.prototype.get = function (a) {
          return this.ig[a]
        };
        a.prototype.add = function (a, b, e) {
          "undefined" === typeof b && (b = !1);
          "undefined" ===
          typeof e && (e = !1);
          this.dc();
          for (var c = a.length, d = 0; d < c; ++d) {
            var p = a[d];
            this.ib[d] = new h(p.i(), p.sa())
          }
          this.ib.sort(f);
          a = {};
          if (this.Oi(a) || e) {
            if (this.cc === this.ib.length) return this.eg(), a;
            if (!b || e) {
              if (this.cc === this.ib.length) return this.eg(), a;
              this.reset();
              this.Oi(a);
              this.ib.length = 0;
              this.eg();
              return a
            }
          }
          this.Bl()
        };
        a.prototype.s = function () {
          this.reset()
        };
        a.prototype.reset = function () {
          this.hg.s();
          this.hg = void 0;
          this.Hl.length = 0;
          this.zc.length = 0;
          this.ig = {};
          this.Bg = 0;
          this.cc = this.kd.length = 0;
          this.Zb = {};
          this.Ye = void 0;
          this.Ze.length = 0;
          this.Bb = d.d.la;
          this.zc = [new h("-1", this.Bb, 0)]
        };
        a.prototype.Oi = function (a) {
          for (var b = this.ib[this.ib.length - 1], h = this.ib.length, e = 0, c = this.zc.length - 1; 0 <= c; --c) {
            var d = this.zc[c];
            if (d.size < b.size) break;
            for (var p = d.size, f = d.offset, q = 0; q < this.ib.length; ++q) {
              var r = this.ib[q];
              if (this.Zb[r.Nc]) ++this.cc;
              else {
                var u = this.get(r.Nc);
                if (void 0 !== u) a[r.Nc] = {
                  state: u,
                  upload: !1
                }, this.Zb[r.Nc] = u, ++this.cc;
                else {
                  if (p < r.size) break;
                  r.offset = f;
                  p -= r.size;
                  f += r.size;
                  e += r.size;
                  p < this.Nm && (r.size +=
                    p, p = 0);
                  this.Bb -= r.size;
                  this.Zb[r.Nc] = r;
                  a[r.Nc] = {
                    state: r,
                    upload: !0
                  };
                  if (++this.cc == h) break
                }
              }
            }
            d.offset = f;
            d.size = p
          }
          return e / this.Yn < this.Mm ? !1 : !0
        };
        a.prototype.dc = function () {
          for (var a = 0; a < this.zc.length; ++a) this.kd[a] = this.zc[a].C();
          this.Bg = this.Bb;
          this.Zb = {};
          this.cc = 0;
          this.Ze.length = 0;
          this.Ye = void 0
        };
        a.prototype.Bl = function () {
          for (var a = 0; a < this.kd.length; ++a) this.zc[a] = this.kd[a].C();
          this.Bb = this.Bg;
          this.kd.length = 0;
          this.Ze.length = 0;
          this.Ye = void 0;
          this.Zb = {};
          this.cc = 0
        };
        a.prototype.eg = function () {
          for (var a in this.Zb) this.ig[a] =
            this.Zb[a];
          this.kd.length = 0;
          this.Ze.length = 0;
          this.Ye = void 0;
          this.Zb = {};
          this.Bg = this.cc = 0
        };
        a.io = 0;
        a.jo = 1;
        return a
      }(),
      h = function () {
        function a(b, h, e) {
          "undefined" === typeof e && (e = void 0);
          this.Nc = b;
          this.size = h;
          this.offset = e
        }
        a.prototype.C = function () {
          return new a(this.Nc, this.size, this.offset)
        };
        return a
      }(),
      p = function () {
        function a() {
          this.dc = this.gg = this.gg = this.dc = void 0
        }
        a.prototype.end = z("gg");
        a.prototype.s = function () {
          for (var a = this.dc; void 0 !== a;) {
            var b = a.next;
            delete a;
            a = b
          }
          this.dc = this.gg = void 0
        };
        return a
      }()
  })(c.e ||
    (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, h) {
        "undefined" === typeof h && (h = void 0);
        this.ei = {};
        this.Jb = {};
        this.ni = !1;
        for (var p = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = 0; e < p.length; ++e) {
          try {
            this.f = a.getContext(p[e], {
              premultipliedAlpha: !1,
              alpha: !1,
              antialias: h[b.Kc] === b.De
            }), this.f.clearColor(1, 1, 1, 1), this.f.clear(this.f.COLOR_BUFFER_BIT)
          } catch (k) {}
          if (this.f) break
        }
        if (void 0 === this.f || void 0 === this.f) throw c.l.w.error("Your browser doesn't support WebGL."), Error();
        this.cj = void 0;
        this.El();
        this.me();
        this.xb = [];
        this.qd = this.vi("OES_vertex_array_object");
        this.Fc("OES_standard_derivatives") || c.l.w.error("Standard derivatives extension not enabled.");
        this.ha = new d.Yh(void 0, void 0, void 0, void 0);
        this.Wd = {};
        this.Xf = {};
        this.ii = !1;
        this.ni = h[b.Fe];
        p = h[b.Lc];
        this.fb = (this.ii = p instanceof Object ? !0 : h[b.Lc]) ? new c.e.Se(p) : new c.e.Ck;
        this.fb.O(this);
        this.Pg = {};
        this.ql = 0
      }
      b.prototype.ym = function (a) {
        return this.Jb[a]
      };
      b.prototype.Oc = function (a, b) {
        "undefined" === typeof b && (b = !0);
        this.cj = a;
        this.f.viewport(a.left, a.top, a.width, a.height);
        var d = b ? -1 : 1;
        this.kf = new c.c.u([2 / a.width, 0, 0, 2 * d / a.height, -1, -1 * d])
      };
      b.prototype.Dd = z("cj");
      b.prototype.xh = function (a, b) {
        this.xb = a;
        this.jl(a, b)
      };
      b.prototype.uj = function (a) {
        for (var b = void 0, c = 0; c < this.xb.length; c++)
          if (this.xb[c].i() === a) {
            b = this.xb[c];
            break
          }
        return b
      };
      b.prototype.Be = function (a) {
        for (var b = void 0, c = 0; c < this.xb.length; c++)
          if (void 0 !== this.xb[c].$a(a)) {
            b = this.xb[c];
            break
          }
        return b
      };
      b.prototype.wd = function (a, h, c, e) {
        "undefined" === typeof c && (c =
          b.RGBA);
        "undefined" === typeof e && (e = b.DEPTH_COMPONENT16);
        var k = this.Wd[e],
          l = void 0,
          f = void 0;
        if (void 0 !== k)
          for (var m = 0; m < k.length; ++m)
            if (a === k[m].width && h === k[m].height) {
              l = k[m].si;
              f = k[m].wg;
              break
            }
        void 0 === l && (l = this.createFramebuffer(), this.bindFramebuffer(b.FRAMEBUFFER, l), f = this.createRenderbuffer(), this.bindRenderbuffer(b.RENDERBUFFER, f), this.renderbufferStorage(b.RENDERBUFFER, e, a, h), this.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, f), void 0 === this.Wd[e] && (this.Wd[e] = []),
          this.Wd[e].push({
            si: l,
            wg: f,
            width: a,
            height: h
          }), this.bindFramebuffer(b.FRAMEBUFFER, this.ha.Vd));
        e = this.createTexture();
        l = new d.Yh(this.xb.length, e, l, f);
        this.Sg(l.i());
        this.bindTexture(b.TEXTURE_2D, e);
        this.Pn(b.TEXTURE_2D, c, a, h, c, b.UNSIGNED_BYTE);
        this.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
        this.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
        this.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        this.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        a = new d.Zh(l.i(), void 0, a, h);
        this.Jb[l.i()] = l.pe;
        this.xb.push(a);
        this.bindTexture(b.TEXTURE_2D, null);
        this.Mk(l.i());
        return l
      };
      b.prototype.Ha = function (a) {
        if (a === this.ha) return this.ha;
        a.Vd !== this.ha.Vd && this.bindFramebuffer(b.FRAMEBUFFER, a.Vd);
        void 0 !== a.Vd && this.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a.pe, 0);
        var h = this.ha;
        this.ha = a;
        return h
      };
      b.prototype.Wg = function (a) {
        this.Sg(a.i());
        this.bindTexture(b.TEXTURE_2D, a.pe);
        return a.i()
      };
      b.prototype.eh = z("ha");
      b.prototype.ye =
        function (a) {
          void 0 !== a && a.pe && (this.deleteTexture(a.pe), this.Jb[a.i()] = void 0)
        };
      b.prototype.e = function (a, h, c) {
        for (var e = c.length, d = 0, l = 0; d < e;) {
          this.fb.Vg(h, a.Za());
          for (l = d; d < e && this.fb.upload(c[d]); d++);
          for (var f = this.fb.Zg(!1), m = 0; m < f.length; m++, l++) {
            var n = c[l];
            this.Fl(n);
            this.Gl(a, n);
            this.drawArrays(b.TRIANGLES, f[m].Ld, n.sa())
          }
          this.td(null)
        }
      };
      b.prototype.drawElements = function (a) {
        this.f.drawElements(this.f.TRIANGLES, a, this.f.UNSIGNED_SHORT, 0)
      };
      b.prototype.drawArrays = function (a, b, c) {
        this.f.drawArrays(a,
          b, c)
      };
      b.prototype.bufferData = function (a, b, c) {
        this.f.bufferData(a, b, c)
      };
      b.prototype.tf = function (a, b, c) {
        this.f.bufferData(a, b, c)
      };
      b.prototype.bufferSubData = function (a, b, c) {
        this.f.bufferSubData(a, b, c)
      };
      b.prototype.Wb = function (a) {
        this.Te = a;
        this.clearColor(a.Jf / 255, a.vf / 255, a.rf / 255, a.ve / 255)
      };
      b.prototype.lc = z("Te");
      b.prototype.clearColor = function (a, b, c, e) {
        this.f.clearColor(a, b, c, e)
      };
      b.prototype.clear = function (a, b, c) {
        var e = 0;
        a && (e |= this.f.COLOR_BUFFER_BIT);
        b && (e |= this.f.DEPTH_BUFFER_BIT);
        c && (e |= this.f.STENCIL_BUFFER_BIT);
        e && this.f.clear(e)
      };
      b.prototype.blendFunc = function (a, b) {
        this.f.blendFunc(a, b)
      };
      b.prototype.blendFuncSeparate = function (a, b, c, e) {
        this.f.blendFuncSeparate(a, b, c, e)
      };
      b.prototype.enable = function (a) {
        this.f.enable(a)
      };
      b.prototype.disable = function (a) {
        this.f.disable(a)
      };
      b.prototype.scissor = function (a) {
        this.f.scissor(a.left, a.top, a.width, a.height)
      };
      b.prototype.depthMask = function (a) {
        this.f.depthMask(a)
      };
      b.prototype.depthFunc = function (a) {
        this.f.depthFunc(a)
      };
      b.prototype.clearDepth = function (a) {
        this.f.clearDepth(a)
      };
      b.prototype.xd = function (a) {
        this.Ok !== a && (a ? this.f.enable(this.f.DEPTH_TEST) : this.f.disable(this.f.DEPTH_TEST), this.Ok = a)
      };
      b.prototype.Ja = function (a, b) {
        var d = this.f.createShader(a);
        if (this.de()) return null;
        this.f.shaderSource(d, b);
        if (this.de()) return null;
        this.f.compileShader(d);
        return this.de() ? null : this.f.getShaderParameter(d, this.f.COMPILE_STATUS) ? d : (c.l.w.info(this.f.getShaderInfoLog(d)), null)
      };
      b.prototype.deleteShader = function (a) {
        this.f.deleteShader(a)
      };
      b.prototype.createProgram = function () {
        return this.f.createProgram()
      };
      b.prototype.deleteProgram = function (a) {
        this.f.deleteProgram(a)
      };
      b.prototype.attachShader = function (a, b) {
        this.f.attachShader(a, b)
      };
      b.prototype.linkProgram = function (a) {
        this.f.linkProgram(a);
        var b = this.de(),
          d = this.f.getProgramParameter(a, this.f.LINK_STATUS);
        d && !b || c.l.w.error("Could not initialize shaders properly: " + this.f.getProgramInfoLog(a));
        return !b && d ? this.ql++ : -1
      };
      b.prototype.useProgram = function (a) {
        this.f.useProgram(a)
      };
      b.prototype.Fc = function (a) {
        return null != this.vi(a)
      };
      b.prototype.bindAttribLocation =
        function (a, b, c) {
          this.f.bindAttribLocation(a, b, c)
        };
      b.prototype.getAttribLocation = function (a, b) {
        return this.f.getAttribLocation(a, b)
      };
      b.prototype.kc = function (a) {
        this.f.enableVertexAttribArray(a)
      };
      b.prototype.vertexAttribPointer = function (a, b, c, e, d, f) {
        this.f.vertexAttribPointer(a, b, c, e, d, f)
      };
      b.prototype.getUniformLocation = function (a, b) {
        return this.f.getUniformLocation(a, b)
      };
      b.prototype.uniformMatrix4fv = function (a, b, c) {
        this.f.uniformMatrix4fv(a, b, c)
      };
      b.prototype.uniform2fv = function (a, b) {
        this.f.uniform2fv(a,
          b)
      };
      b.prototype.uniform4fv = function (a, b) {
        this.f.uniform4fv(a, b)
      };
      b.prototype.uniform1i = function (a, b) {
        this.f.uniform1i(a, b)
      };
      b.prototype.uniform1iv = function (a, b) {
        this.f.uniform1iv(a, b)
      };
      b.prototype.uniform2iv = function (a, b) {
        this.f.uniform2iv(a, b)
      };
      b.prototype.createBuffer = function () {
        var a = this.f.createBuffer();
        return this.de() ? void 0 : a
      };
      b.prototype.deleteBuffer = function (a) {
        this.f.deleteBuffer(a)
      };
      b.prototype.ga = function (a, b) {
        this.f.bindBuffer(a, b);
        this.ei[a] = b
      };
      b.prototype.$g = function (a) {
        return this.ei[a]
      };
      b.prototype.createFramebuffer = function () {
        return this.f.createFramebuffer()
      };
      b.prototype.deleteFramebuffer = function (a) {
        this.f.deleteFramebuffer(a)
      };
      b.prototype.bindFramebuffer = function (a, b) {
        this.f.bindFramebuffer(a, b)
      };
      b.prototype.bindRenderbuffer = function (a, b) {
        this.f.bindRenderbuffer(a, b)
      };
      b.prototype.framebufferTexture2D = function (a, b, c, e, d) {
        this.f.framebufferTexture2D(a, b, c, e, d)
      };
      b.prototype.framebufferRenderbuffer = function (a, b, c, e) {
        this.f.framebufferRenderbuffer(a, b, c, e)
      };
      b.prototype.createRenderbuffer =
        function () {
          return this.f.createRenderbuffer()
        };
      b.prototype.deleteRenderbuffer = function (a) {
        this.f.deleteRenderbuffer(a)
      };
      b.prototype.renderbufferStorage = function (a, b, c, e) {
        this.f.renderbufferStorage(a, b, c, e)
      };
      b.prototype.Sg = function (a) {
        this.Xf[a] = a;
        this.f.activeTexture(b.TEXTURE0 + a)
      };
      b.prototype.Mk = function (a) {
        this.Xf[a] = void 0
      };
      b.prototype.bindTexture = function (a, b) {
        this.f.bindTexture(a, b)
      };
      b.prototype.createTexture = function () {
        return this.f.createTexture()
      };
      b.prototype.deleteTexture = function (a) {
        this.f.deleteTexture(a)
      };
      b.prototype.texImage2D = function (a, b, c, e, d, f) {
        this.f.texImage2D(a, b, c, e, d, f)
      };
      b.prototype.Pn = function (a, b, c, e, d, f) {
        this.f.texImage2D(a, 0, b, c, e, 0, d, f, null)
      };
      b.prototype.texParameteri = function (a, b, c) {
        this.f.texParameteri(a, b, c)
      };
      b.prototype.pixelStorei = function (a, b) {
        this.f.pixelStorei(a, b)
      };
      b.prototype.flush = function () {
        this.f.flush()
      };
      b.prototype.fm = function () {
        if (void 0 !== this.qd) return this.qd.createVertexArrayOES()
      };
      b.prototype.td = function (a) {
        void 0 !== this.qd && this.qd.bindVertexArrayOES(a)
      };
      b.prototype.gm =
        function (a) {
          void 0 !== this.qd && this.qd.deleteVertexArrayOES(a)
        };
      b.prototype.s = function () {
        this.Nk();
        for (var a in this.Wd) {
          var b = a.si;
          this.deleteRenderbuffer(a.wg);
          this.deleteFramebuffer(b)
        }
        this.fb.s()
      };
      b.prototype.Nk = function () {
        for (var a in this.Jb) this.Jb[a] && this.f.deleteTexture(this.Jb[a]);
        this.Jb = {}
      };
      b.prototype.jl = function (a, c) {
        for (var d = 0, e = 0; e < a.length; e++) {
          var k = this.createTexture(),
            f = new Image,
            s = this,
            m = a[e],
            n = a.length;
          f.onload = function () {
            s.bindTexture(b.TEXTURE_2D, s.Jb[this.id]);
            s.texImage2D(b.TEXTURE_2D,
              0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, this);
            s.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
            s.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
            s.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
            s.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
            s.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
            s.bindTexture(b.TEXTURE_2D, null);
            ++d === n && c()
          };
          f.src = m.wf();
          f.id = "" + m.i();
          this.Jb[m.i()] = k
        }
      };
      b.prototype.me = function () {
        this.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA);
        this.enable(b.BLEND);
        this.depthFunc(b.LESS);
        this.Wb(new c.c.Qc(255, 255, 255, 0));
        this.clearDepth(1);
        this.disable(b.CULL_FACE);
        this.depthMask(!0);
        this.xd(!0)
      };
      b.prototype.getError = function () {
        if (!this.ni) return this.f.NO_ERROR;
        var a = this.f.getError();
        a != this.f.NO_ERROR && c.l.w.error("WebGL Error: " + a);
        return a
      };
      b.prototype.Fl = function (a) {
        a = a.lb;
        if (this.Xf[a] !== a) {
          var c = this.ym(a);
          c && (this.Sg(a), this.bindTexture(b.TEXTURE_2D, c))
        }
      };
      b.prototype.Gl = function (a, c) {
        var d = c.Ce(a.i()),
          e = this.Pg[a.i()];
        e || (e = this.Pg[a.i()] = {});
        for (var k = 0; k < d.length; ++k) {
          var f = d[k].value,
            s = d[k].jc.type,
            m = d[k].jc.location,
            n = e[k];
          switch (s) {
            case b.FLOAT_VEC2:
              void 0 !== n && n.value[0] === f[0] && n.value[1] === f[1] || this.uniform2fv(m, f);
              break;
            case b.FLOAT_VEC4:
              void 0 !== n && n.value[0] === f[0] && n.value[1] === f[1] && n.value[2] === f[2] && n.value[3] === f[3] || this.uniform4fv(m, f);
              break;
            case b.FLOAT_MAT4:
              void 0 !== n && n.value[0] === f[0] && n.value[1] === f[1] && n.value[4] === f[4] && n.value[5] === f[5] && n.value[10] === f[10] && n.value[12] === f[12] && n.value[13] === f[13] || this.uniformMatrix4fv(m, !1, f);
              break;
            case b.INT:
            case b.SAMPLER_2D:
              void 0 !== n && n.value[0] === f[0] && n.value[1] === f[1] || this.uniform1iv(m, f);
              break;
            case b.INT_VEC2:
              void 0 !== n && n.value[0] === f[0] && n.value[1] === f[1] || this.uniform2iv(m, f)
          }
          this.Pg[a.i()][k] = {
            type: s,
            value: f
          }
        }
      };
      b.prototype.vi = function (a) {
        a = this.f.getExtension(a);
        return null === a ? void 0 : a
      };
      b.prototype.El = function () {
        b.ZERO = this.f.ZERO;
        b.ONE = this.f.ONE;
        b.SRC_COLOR = this.f.SRC_COLOR;
        b.ONE_MINUS_SRC_COLOR = this.f.ONE_MINUS_SRC_COLOR;
        b.SRC_ALPHA = this.f.SRC_ALPHA;
        b.ONE_MINUS_SRC_ALPHA =
          this.f.ONE_MINUS_SRC_ALPHA;
        b.DST_ALPHA = this.f.DST_ALPHA;
        b.ONE_MINUS_DST_ALPHA = this.f.ONE_MINUS_DST_ALPHA;
        b.DST_COLOR = this.f.DST_COLOR;
        b.ONE_MINUS_DST_COLOR = this.f.ONE_MINUS_DST_COLOR;
        b.SRC_ALPHA_SATURATE = this.f.SRC_ALPHA_SATURATE;
        b.NEVER = this.f.NEVER;
        b.LESS = this.f.LESS;
        b.EQUAL = this.f.EQUAL;
        b.LEQUAL = this.f.LEQUAL;
        b.GREATER = this.f.GREATER;
        b.NOTEQUAL = this.f.NOTEQUAL;
        b.GEQUAL = this.f.GEQUAL;
        b.ALWAYS = this.f.ALWAYS;
        b.ARRAY_BUFFER = this.f.ARRAY_BUFFER;
        b.ELEMENT_ARRAY_BUFFER = this.f.ELEMENT_ARRAY_BUFFER;
        b.ARRAY_BUFFER_BINDING =
          this.f.ARRAY_BUFFER_BINDING;
        b.ELEMENT_ARRAY_BUFFER_BINDING = this.f.ELEMENT_ARRAY_BUFFER_BINDING;
        b.BYTE = this.f.BYTE;
        b.UNSIGNED_BYTE = this.f.UNSIGNED_BYTE;
        b.SHORT = this.f.SHORT;
        b.UNSIGNED_SHORT = this.f.UNSIGNED_SHORT;
        b.INT = this.f.INT;
        b.UNSIGNED_INT = this.f.UNSIGNED_INT;
        b.FLOAT = this.f.FLOAT;
        b.INT_VEC2 = this.f.INT_VEC2;
        b.INT_VEC3 = this.f.INT_VEC3;
        b.INT_VEC4 = this.f.INT_VEC4;
        b.FLOAT_VEC2 = this.f.FLOAT_VEC2;
        b.FLOAT_VEC3 = this.f.FLOAT_VEC3;
        b.FLOAT_VEC4 = this.f.FLOAT_VEC4;
        b.FLOAT_MAT4 = this.f.FLOAT_MAT4;
        b.SAMPLER_2D =
          this.f.SAMPLER_2D;
        b.FRAGMENT_SHADER = this.f.FRAGMENT_SHADER;
        b.VERTEX_SHADER = this.f.VERTEX_SHADER;
        b.MAX_VERTEX_ATTRIBS = this.f.MAX_VERTEX_ATTRIBS;
        b.MAX_VERTEX_UNIFORM_VECTORS = this.f.MAX_VERTEX_UNIFORM_VECTORS;
        b.MAX_VARYING_VECTORS = this.f.MAX_VARYING_VECTORS;
        b.MAX_COMBINED_TEXTURE_IMAGE_UNITS = this.f.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
        b.MAX_VERTEX_TEXTURE_IMAGE_UNITS = this.f.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
        b.MAX_TEXTURE_IMAGE_UNITS = this.f.MAX_TEXTURE_IMAGE_UNITS;
        b.MAX_FRAGMENT_UNIFORM_VECTORS = this.f.MAX_FRAGMENT_UNIFORM_VECTORS;
        b.CULL_FACE = this.f.CULL_FACE;
        b.BLEND = this.f.BLEND;
        b.DITHER = this.f.DITHER;
        b.STENCIL_TEST = this.f.STENCIL_TEST;
        b.DEPTH_TEST = this.f.DEPTH_TEST;
        b.SCISSOR_TEST = this.f.SCISSOR_TEST;
        b.POLYGON_OFFSET_FILL = this.f.POLYGON_OFFSET_FILL;
        b.SAMPLE_ALPHA_TO_COVERAGE = this.f.SAMPLE_ALPHA_TO_COVERAGE;
        b.SAMPLE_COVERAGE = this.f.SAMPLE_COVERAGE;
        b.TEXTURE0 = this.f.TEXTURE0;
        b.TEXTURE_2D = this.f.TEXTURE_2D;
        b.RGBA = this.f.RGBA;
        b.RGB = this.f.RGB;
        b.TEXTURE_MAG_FILTER = this.f.TEXTURE_MAG_FILTER;
        b.TEXTURE_MIN_FILTER = this.f.TEXTURE_MIN_FILTER;
        b.TEXTURE_WRAP_S = this.f.TEXTURE_WRAP_S;
        b.TEXTURE_WRAP_T = this.f.TEXTURE_WRAP_T;
        b.UNPACK_FLIP_Y_WEBGL = this.f.UNPACK_FLIP_Y_WEBGL;
        b.CLAMP_TO_EDGE = this.f.CLAMP_TO_EDGE;
        b.NEAREST = this.f.NEAREST;
        b.LINEAR = this.f.LINEAR;
        b.NEAREST_MIPMAP_NEAREST = this.f.NEAREST_MIPMAP_NEAREST;
        b.LINEAR_MIPMAP_NEAREST = this.f.LINEAR_MIPMAP_NEAREST;
        b.NEAREST_MIPMAP_LINEAR = this.f.NEAREST_MIPMAP_LINEAR;
        b.LINEAR_MIPMAP_LINEAR = this.f.LINEAR_MIPMAP_LINEAR;
        b.UNPACK_PREMULTIPLY_ALPHA_WEBGL = this.f.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
        b.FRAMEBUFFER =
          this.f.FRAMEBUFFER;
        b.RENDERBUFFER = this.f.RENDERBUFFER;
        b.COLOR_ATTACHMENT0 = this.f.COLOR_ATTACHMENT0;
        b.DEPTH_STENCIL = this.f.DEPTH_STENCIL;
        b.DEPTH_COMPONENT16 = this.f.DEPTH_COMPONENT16;
        b.STENCIL_INDEX8 = this.f.STENCIL_INDEX8;
        b.DEPTH_ATTACHMENT = this.f.DEPTH_ATTACHMENT;
        b.STENCIL_ATTACHMENT = this.f.STENCIL_ATTACHMENT;
        b.DEPTH_STENCIL_ATTACHMENT = this.f.DEPTH_STENCIL_ATTACHMENT;
        b.FRAMEBUFFER_UNSUPPORTED = this.f.FRAMEBUFFER_UNSUPPORTED;
        b.KEEP = this.f.KEEP;
        b.REPLACE = this.f.REPLACE;
        b.INCR = this.f.INCR;
        b.DECR = this.f.DECR;
        b.INVERT = this.f.INVERT;
        b.INCR_WRAP = this.f.INCR_WRAP;
        b.DECR_WRAP = this.f.DECR_WRAP;
        b.STREAM_DRAW = this.f.STREAM_DRAW;
        b.STATIC_DRAW = this.f.STATIC_DRAW;
        b.DYNAMIC_DRAW = this.f.DYNAMIC_DRAW;
        b.TRIANGLES = this.f.TRIANGLES
      };
      b.prototype.de = function () {
        return this.getError() != this.f.NO_ERROR
      };
      b.la = 65532;
      b.MAX_TEXTURE_SIZE = 2048;
      b.Fe = 0;
      b.Kc = 1;
      b.Lc = 2;
      b.jh = 3;
      b.De = 0;
      b.Bf = 1;
      return b
    }();
    d.d = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.i = z("v");
      b.prototype.O = function (a) {
        this.a = a;
        this.V = new c.c.u;
        return this.Ua()
      };
      b.prototype.Za = z("wb");
      b.prototype.e = function (a) {
        for (var b = a.F.length, c = this.a.kf, e = 0; e < b; ++e) {
          var k = a.mc(e);
          if (k.Jc()) {
            var f = k.ka.ad,
              s = this.a.Be(f),
              f = s.$a(f),
              m = k.La(),
              n = k.lb,
              y = k.ka.je,
              n = k.lb,
              w = s.ue,
              s = s.be;
            this.V.ja();
            this.V.Ga(c);
            this.V.Ga(k.ub());
            var t = this.V.b,
              q = k.Ce(this.i());
            void 0 === q ? (q = [], q.push(new d.D(this.o.uMVMatrix, t)), q.push(new d.D(this.o.uSampler, [n])), q.push(new d.D(this.o.uColorXformMultiplier, [m.sb(), m.qb(), m.ob(), m.Xa()])), q.push(new d.D(this.o.uColorXformOffset, [m.tb() / 255, m.rb() / 255, m.pb() / 255, m.Ya() / 255])), q.push(new d.D(this.o.uOverflowType, [y])), q.push(new d.D(this.o.uFrame, [f.left / w, f.top / s, f.width / w, f.height / s]))) : (q[0].value = t, q[1].value = [n], q[2].value = [m.sb(), m.qb(), m.ob(), m.Xa()], q[3].value = [m.tb() / 255, m.rb() / 255, m.pb() / 255, m.Ya() / 255], q[4].value = [y], q[5].value = [f.left / w, f.top / s, f.width / w, f.height / s]);
            k.Pf(this.i(), q)
          }
        }
        0 < a.F.length &&
          this.a.e(this, a.mc(0).ka.he, a.F)
      };
      b.prototype.Xb = function () {
        this.a.useProgram(this.h)
      };
      b.prototype.Ua = function () {
        this.Wa = "        \t\t    attribute vec2 aVertexPosition;     \t\t    attribute vec2 aLoopBlinnTextureCoord;            attribute vec2 aTextureCoord;       \t\t    attribute float aIsConvex;                                                              \t\tuniform mat4 uMVMatrix;                                                                 \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;                                                                \t\tvoid main(void) {        \t\tgl_Position \x3d uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);                vTexCoord \x3d vec4(aLoopBlinnTextureCoord, aTextureCoord);                vIsConvex \x3d aIsConvex;    \t\t}";
        this.Qa = "#extension GL_OES_standard_derivatives : enable\nprecision mediump float;    \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;\t\t\tuniform vec4 uColorXformMultiplier;\t\t\tuniform vec4 uColorXformOffset;            uniform sampler2D uSampler;            uniform int uOverflowType;            uniform vec4 uFrame;                                          \t\t    void main(void) {                vec2 p \x3d vTexCoord.xy;                                        \t            vec2 px \x3d dFdx(p);      \t            vec2 py \x3d dFdy(p);                                              \t            vec2 f \x3d (2.0 * vTexCoord.x) * vec2(px.x, py.x) - vec2(px.y, py.y);                                        \t            float sd \x3d vIsConvex * (vTexCoord.x * vTexCoord.x - vTexCoord.y) / length(f);                                             \t            float alpha \x3d min(0.5 - sd, 1.0);                 if (alpha \x3c 0.0)                     discard;                            vec2 uv;                                if(uOverflowType \x3d\x3d 0){ /*solid fill*/                    uv \x3d vTexCoord.zw;                }                 else if(uOverflowType \x3d\x3d 1) { /*gradient and bitmap fill with overflow type extend*/                    uv \x3d clamp(vTexCoord.zw, vec2(0.0, 0.0), vec2(1.0, 1.0)) * uFrame.zw + uFrame.xy;                }                else if(uOverflowType \x3d\x3d 2){/*gradient and bitmap fill with overflow type repeat*/                    uv \x3d fract(vTexCoord.zw) * uFrame.zw + uFrame.xy;                }                else if(uOverflowType \x3d\x3d 3){/*gradient fill with overflow type reflect*/                    uv \x3d vTexCoord.zw;                    if(uv.s \x3e 1.0) {\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (odd \x3d\x3d 1.0){ /*if the uv.s lies on the odd number of band towards the right side*/  \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else{/*if the uv.s lies on the even number of band towards the right side*/ \t\t                    uv.s \x3d fracPart;\t                    }                     }                    else if(uv.s \x3c 0.0){\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (integerPart \x3d\x3d 0.0){/* special case for left side*/ \t\t                    uv.s \x3d fracPart;\t                    }\t                    else if(odd \x3d\x3d 1.0){/*if the uv.s lies on the odd number of band towards the left side*/ \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else {/*if the uv.s lies on the even number of band towards the left side*/ \t\t                    uv.s \x3d fracPart;\t                    }                    }                    uv \x3d (uFrame.xy + (uv * uFrame.zw));                }                vec4 textureColor \x3d texture2D(uSampler, uv);                textureColor.a \x3d textureColor.a * alpha;                gl_FragColor \x3d textureColor * uColorXformMultiplier + uColorXformOffset;    \t\t} ";
        this.fa = this.a.Ja(d.d.VERTEX_SHADER, this.Wa);
        this.da = this.a.Ja(d.d.FRAGMENT_SHADER, this.Qa);
        this.h = this.a.createProgram();
        this.a.attachShader(this.h, this.fa);
        this.a.attachShader(this.h, this.da);
        this.v = this.a.linkProgram(this.h);
        if (0 > this.v) return this.a.deleteProgram(this.h), c.l.w.error("Program linking failed."), !1;
        var a = this.a.getUniformLocation(this.h, "uSampler"),
          b = this.a.getUniformLocation(this.h, "uColorXformMultiplier"),
          f = this.a.getUniformLocation(this.h, "uColorXformOffset"),
          e = this.a.getUniformLocation(this.h,
            "uOverflowType"),
          k = this.a.getUniformLocation(this.h, "uFrame"),
          l = new d.q(this.a.getUniformLocation(this.h, "uMVMatrix"), d.d.FLOAT_MAT4, 1, d.q.Jd),
          a = new d.q(a, d.d.SAMPLER_2D, 1, d.q.Q),
          b = new d.q(b, d.d.FLOAT_VEC4, 1, d.q.Q),
          f = new d.q(f, d.d.FLOAT_VEC4, 1, d.q.Q),
          e = new d.q(e, d.d.INT, 1, d.q.Q),
          k = new d.q(k, d.d.FLOAT_VEC4, 1, d.q.Q);
        this.Og = new d.Re([l, a, b, f, e, k]);
        this.o = {};
        this.o.uMVMatrix = l;
        this.o.uSampler = a;
        this.o.uColorXformMultiplier = b;
        this.o.uColorXformOffset = f;
        this.o.uOverflowType = e;
        this.o.uFrame = k;
        a = this.a.getAttribLocation(this.h,
          "aLoopBlinnTextureCoord");
        e = this.a.getAttribLocation(this.h, "aIsConvex");
        k = this.a.getAttribLocation(this.h, "aTextureCoord");
        l = new d.R(this.a.getAttribLocation(this.h, "aVertexPosition"), "POSITION0", d.d.FLOAT, 2);
        a = new d.R(a, "TEXCOORD0", d.d.FLOAT, 2);
        e = new d.R(e, "TEXCOORD1", d.d.FLOAT, 1);
        k = new d.R(k, "TEXCOORD2", d.d.FLOAT, 2);
        this.wb = new c.e.Oe([l, a, e, k]);
        return !0
      };
      b.prototype.s = function () {
        this.a.deleteShader(this.fa);
        this.a.deleteShader(this.da);
        this.a.deleteProgram(this.h)
      };
      b.Om = 7;
      return b
    }();
    d.Ak = f
  })(c.e ||
    (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.i = z("v");
      b.prototype.O = function (a) {
        this.a = a;
        this.V = new c.c.u;
        this.N = new c.c.u;
        return this.Ua()
      };
      b.prototype.Za = z("wb");
      b.prototype.e = function (a) {
        for (var b = a.F.length, c = this.a.kf, e = 0; e < b; ++e) {
          var k = a.mc(e);
          if (k.Jc()) {
            var f = k.ka.ad,
              s = this.a.Be(f),
              f = s.$a(f),
              m = k.La(),
              n = k.lb,
              y = k.ka.je,
              n = k.lb,
              w = s.ue,
              s = s.be;
            this.V.ja();
            this.V.Ga(c);
            this.V.Ga(k.ub());
            var t = this.V.b;
            this.N.copy(k.ub());
            this.N.Rb();
            var q = k.Ce(this.i());
            void 0 === q ? (q = [], q.push(new d.D(this.o.uMVMatrix,
              t)), q.push(new d.D(this.o.uMVMatrixInv, [this.N.get(0, 0), this.N.get(0, 1), this.N.get(1, 0), this.N.get(1, 1)])), q.push(new d.D(this.o.uSampler, [n])), q.push(new d.D(this.o.uColorXformMultiplier, [m.sb(), m.qb(), m.ob(), m.Xa()])), q.push(new d.D(this.o.uColorXformOffset, [m.tb() / 255, m.rb() / 255, m.pb() / 255, m.Ya() / 255])), q.push(new d.D(this.o.uOverflowType, [y])), q.push(new d.D(this.o.uFrame, [f.left / w, f.top / s, f.width / w, f.height / s]))) : (q[0].value = t, q[1].value = [this.N.get(0, 0), this.N.get(0, 1), this.N.get(1, 0), this.N.get(1,
              1)], q[2].value = [n], q[3].value = [m.sb(), m.qb(), m.ob(), m.Xa()], q[4].value = [m.tb() / 255, m.rb() / 255, m.pb() / 255, m.Ya() / 255], q[5].value = [y], q[6].value = [f.left / w, f.top / s, f.width / w, f.height / s]);
            k.Pf(this.i(), q)
          }
        }
        0 < a.F.length && this.a.e(this, a.mc(0).ka.he, a.F)
      };
      b.prototype.Xb = function () {
        this.a.useProgram(this.h)
      };
      b.prototype.Ua = function () {
        this.Wa = "        \t\t    attribute vec2 aVertexPosition;     \t\t    attribute vec2 aLoopBlinnTextureCoord;            attribute vec2 aTextureCoord;                   attribute vec2 adfdx;                         attribute vec2 adfdy;             \t\t    attribute float aIsConvex;                                                              \t\tuniform mat4 uMVMatrix;                         uniform vec4 uMVMatrixInv;                                                              \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;                        varying vec4 vDfDxDy;                                                                      \t\tvoid main(void) {        \t\tgl_Position \x3d uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);                vDfDxDy.xy \x3d vec2(uMVMatrixInv[0] * adfdx.x + uMVMatrixInv[1] * adfdy.x, uMVMatrixInv[0] * adfdx.y + uMVMatrixInv[1] * adfdy.y);                vDfDxDy.zw \x3d vec2(uMVMatrixInv[2] * adfdx.x + uMVMatrixInv[3] * adfdy.x, uMVMatrixInv[2] * adfdx.y + uMVMatrixInv[3] * adfdy.y);                vTexCoord \x3d vec4(aLoopBlinnTextureCoord, aTextureCoord);                vIsConvex \x3d aIsConvex;    \t\t}";
        this.Qa = "precision mediump float;    \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;            varying vec4 vDfDxDy;       \t\t\tuniform vec4 uColorXformMultiplier;\t\t\tuniform vec4 uColorXformOffset;            uniform sampler2D uSampler;            uniform int uOverflowType;            uniform vec4 uFrame;                                                                                  \t\t    void main(void) {                vec2 p \x3d vTexCoord.xy;                                        \t            vec2 px \x3d vDfDxDy.xy;      \t            vec2 py \x3d vDfDxDy.zw;                                              \t            vec2 f \x3d (2.0 * vTexCoord.x) * vec2(px.x, py.x) - vec2(px.y, py.y);                                        \t            float sd \x3d vIsConvex * (vTexCoord.x * vTexCoord.x - vTexCoord.y) / length(f);                                             \t            float alpha \x3d min(0.5 - sd, 1.0);                 if (alpha \x3c 0.0)                     discard;                            vec2 uv;                                if(uOverflowType \x3d\x3d 0){ /*solid fill*/                    uv \x3d vTexCoord.zw;                }                 else if(uOverflowType \x3d\x3d 1) { /*gradient and bitmap fill with overflow type extend*/                    uv \x3d clamp(vTexCoord.zw, vec2(0.0, 0.0), vec2(1.0, 1.0)) * uFrame.zw + uFrame.xy;                }                else if(uOverflowType \x3d\x3d 2){/*gradient and bitmap fill with overflow type repeat*/                    uv \x3d fract(vTexCoord.zw) * uFrame.zw + uFrame.xy;                }                else if(uOverflowType \x3d\x3d 3){/*gradient fill with overflow type reflect*/                    uv \x3d vTexCoord.zw;                    if(uv.s \x3e 1.0) {\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (odd \x3d\x3d 1.0){ /*if the uv.s lies on the odd number of band towards the right side*/  \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else{/*if the uv.s lies on the even number of band towards the right side*/ \t\t                    uv.s \x3d fracPart;\t                    }                     }                    else if(uv.s \x3c 0.0){\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (integerPart \x3d\x3d 0.0){/* special case for left side*/ \t\t                    uv.s \x3d fracPart;\t                    }\t                    else if(odd \x3d\x3d 1.0){/*if the uv.s lies on the odd number of band towards the left side*/ \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else {/*if the uv.s lies on the even number of band towards the left side*/ \t\t                    uv.s \x3d fracPart;\t                    }                    }                    uv \x3d (uFrame.xy + (uv * uFrame.zw));                }                vec4 textureColor \x3d texture2D(uSampler, uv);                textureColor.a \x3d textureColor.a * alpha;                gl_FragColor \x3d textureColor * uColorXformMultiplier + uColorXformOffset;    \t\t} ";
        this.fa = this.a.Ja(d.d.VERTEX_SHADER, this.Wa);
        this.da = this.a.Ja(d.d.FRAGMENT_SHADER, this.Qa);
        this.h = this.a.createProgram();
        this.a.attachShader(this.h, this.fa);
        this.a.attachShader(this.h, this.da);
        this.v = this.a.linkProgram(this.h);
        if (0 > this.v) return this.a.deleteProgram(this.h), c.l.w.error("Program linking failed."), !1;
        var a = this.a.getUniformLocation(this.h, "uMVMatrixInv"),
          b = this.a.getUniformLocation(this.h, "uSampler"),
          f = this.a.getUniformLocation(this.h, "uColorXformMultiplier"),
          e = this.a.getUniformLocation(this.h,
            "uColorXformOffset"),
          k = this.a.getUniformLocation(this.h, "uOverflowType"),
          l = this.a.getUniformLocation(this.h, "uFrame"),
          s = new d.q(this.a.getUniformLocation(this.h, "uMVMatrix"), d.d.FLOAT_MAT4, 1, d.q.Jd),
          a = new d.q(a, d.d.FLOAT_VEC4, 1, d.q.Jd),
          b = new d.q(b, d.d.SAMPLER_2D, 1, d.q.Q),
          f = new d.q(f, d.d.FLOAT_VEC4, 1, d.q.Q),
          e = new d.q(e, d.d.FLOAT_VEC4, 1, d.q.Q),
          k = new d.q(k, d.d.INT, 1, d.q.Q),
          l = new d.q(l, d.d.FLOAT_VEC4, 1, d.q.Q);
        this.Og = new d.Re([s, a, b, f, e, k, l]);
        this.o = {};
        this.o.uMVMatrix = s;
        this.o.uMVMatrixInv = a;
        this.o.uSampler =
          b;
        this.o.uColorXformMultiplier = f;
        this.o.uColorXformOffset = e;
        this.o.uOverflowType = k;
        this.o.uFrame = l;
        a = this.a.getAttribLocation(this.h, "aLoopBlinnTextureCoord");
        b = this.a.getAttribLocation(this.h, "aIsConvex");
        e = this.a.getAttribLocation(this.h, "aTextureCoord");
        k = this.a.getAttribLocation(this.h, "adfdx");
        l = this.a.getAttribLocation(this.h, "adfdy");
        s = new d.R(this.a.getAttribLocation(this.h, "aVertexPosition"), "POSITION0", d.d.FLOAT, 2);
        a = new d.R(a, "TEXCOORD0", d.d.FLOAT, 2);
        b = new d.R(b, "TEXCOORD1", d.d.FLOAT, 1);
        e = new d.R(e, "TEXCOORD2", d.d.FLOAT, 2);
        k = new d.R(k, "TEXCOORD3", d.d.FLOAT, 2);
        l = new d.R(l, "TEXCOORD4", d.d.FLOAT, 2);
        this.wb = new c.e.Oe([s, a, b, k, l, e]);
        return !0
      };
      b.prototype.s = function () {
        this.a.deleteShader(this.fa);
        this.a.deleteShader(this.da);
        this.a.deleteProgram(this.h)
      };
      b.Om = 11;
      return b
    }();
    d.Bk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.O = function (a) {
        this.a = a;
        a.Fc("OES_standard_derivatives") ? this.Pa = new d.Ak : this.Pa = new d.Bk;
        this.qc = [];
        this.qc[b.Ee] = new c.e.Pe;
        this.qc[b.Ed] = new c.e.Pe;
        this.fg = [];
        this.fg[b.Ee] = this.km;
        this.fg[b.Ed] = this.Yl;
        return this.Pa.O(a)
      };
      b.prototype.e = function (a) {
        this.ld();
        this.Qg(a);
        a = [b.Ee, b.Ed];
        for (var c = 0; c < a.length; ++c) this.nf(c), this.Ia(c)
      };
      b.prototype.Yl = function (a, b) {
        var c = a.Fa();
        return b.Fa() - c
      };
      b.prototype.km = function (a, b) {
        var c =
          a.Fa(),
          e = b.Fa();
        return c - e
      };
      b.prototype.ld = function () {
        this.ne();
        this.Pa.Xb()
      };
      b.prototype.nf = function (a) {
        this.qc[a].sort(this.fg[a]);
        this.Qi(a)
      };
      b.prototype.Ia = function (a) {
        this.Pa.e(this.qc[a]);
        this.qc[a].clear()
      };
      b.prototype.Qg = function (a) {
        for (var c = 0; c < a.length; ++c) {
          for (var f = a[c], e = 0; e < f.ra(d.t.Z); e++) {
            var k = f.ab(d.t.Z, e, this.a),
              l = b.Ee;
            k.Sb() || (l = b.Ed);
            this.qc[l].Dc(k)
          }
          for (e = 0; e < f.ra(d.t.P); e++) k = f.ab(d.t.P, e, this.a), this.qc[b.Ed].Dc(k)
        }
      };
      b.prototype.Qi = function (a) {
        switch (a) {
          case b.Ee:
            this.a.depthMask(!0);
            break;
          case b.Ed:
            this.a.depthMask(!1)
        }
      };
      b.prototype.ne = function () {
        this.a.blendFunc(d.d.SRC_ALPHA, d.d.ONE_MINUS_SRC_ALPHA);
        this.a.enable(d.d.BLEND);
        this.a.depthFunc(d.d.LESS);
        this.a.clearDepth(1);
        this.a.depthMask(!0);
        this.a.xd(!0)
      };
      b.prototype.s = function () {
        this.Pa.s()
      };
      b.Ee = 0;
      b.Ed = 1;
      return b
    }();
    d.kk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.i = z("v");
      b.prototype.O = function (a) {
        this.a = a;
        return this.Ua() ? !0 : !1
      };
      b.prototype.Za = z("wb");
      b.prototype.Xb = function () {
        this.a.useProgram(this.h);
        this.a.ga(d.d.ARRAY_BUFFER, this.Db);
        this.a.ga(d.d.ELEMENT_ARRAY_BUFFER, this.Cb);
        this.a.useProgram(this.h);
        this.a.disable(d.d.BLEND);
        this.a.depthMask(!1);
        this.a.disable(d.d.DEPTH_TEST);
        this.Eg()
      };
      b.prototype.e = function (a, b) {
        "undefined" === typeof b && (b = void 0);
        this.Dg(b.am, b.bm);
        this.a.drawElements(this.ae.length)
      };
      b.prototype.Eg = function () {
        var a = 0;
        this.a.vertexAttribPointer(0, 2, d.d.FLOAT, !1, 0, 4 * a);
        this.a.vertexAttribPointer(1, 2, d.d.FLOAT, !1, 0, 4 * (a + 8))
      };
      b.prototype.Dg = function (a, b) {
        this.a.uniform1i(this.bg, a);
        this.a.uniform1i(this.Lk, b)
      };
      b.prototype.Ua = function () {
        this.Wa = "attribute vec2 aVertexPosition;            attribute vec2 aTextureCoord;                                                                   varying vec2 vTextureCoord;                void main(void ) {        \t\tgl_Position \x3d vec4(aVertexPosition, 1.0, 1.0);                vTextureCoord \x3d aTextureCoord;             }";
        this.Qa = "precision mediump float;            uniform sampler2D uColorMap;            uniform sampler2D uCoverageMap;            varying vec2 vTextureCoord;                            void main()            {\t\t\t    vec4 cov \x3d texture2D(uCoverageMap, vTextureCoord);                vec4 color \x3d texture2D(uColorMap, vTextureCoord);                gl_FragColor \x3d cov + (color * (1.0 - cov.a));            }";
        this.Db = this.a.createBuffer();
        if (void 0 === this.Db) return c.l.w.error("Creation of vertex buffer failed."), !1;
        this.Cb = this.a.createBuffer();
        if (void 0 === this.Cb) return c.l.w.error("Creation of index buffer failed."), !1;
        this.fa = this.a.Ja(d.d.VERTEX_SHADER, this.Wa);
        this.da = this.a.Ja(d.d.FRAGMENT_SHADER, this.Qa);
        this.h = this.a.createProgram();
        this.a.attachShader(this.h, this.fa);
        this.a.attachShader(this.h, this.da);
        this.a.ga(d.d.ARRAY_BUFFER, this.Db);
        this.a.ga(d.d.ELEMENT_ARRAY_BUFFER, this.Cb);
        this.a.kc(0);
        this.a.kc(1);
        this.a.bindAttribLocation(this.h, 0, "aVertexPosition");
        this.a.bindAttribLocation(this.h, 1, "aTextureCoord");
        this.v = this.a.linkProgram(this.h);
        if (0 > this.v) return this.a.deleteProgram(this.h), c.l.w.error("Program linking failed."), !1;
        this.bg = this.a.getUniformLocation(this.h, "uColorMap");
        this.Lk = this.a.getUniformLocation(this.h, "uCoverageMap");
        this.kg = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1, 0, 0, 1, 0, 1, 1, 0, 1]);
        this.ae = new Uint16Array([0, 1, 2, 0, 2, 3]);
        this.a.bufferData(d.d.ARRAY_BUFFER, this.kg, d.d.STATIC_DRAW);
        this.a.bufferData(d.d.ELEMENT_ARRAY_BUFFER, this.ae, d.d.STATIC_DRAW);
        return !0
      };
      b.prototype.s = function () {
        this.a.deleteBuffer(this.Db);
        this.a.deleteBuffer(this.Cb);
        this.a.deleteShader(this.fa);
        this.a.deleteShader(this.da);
        this.a.deleteProgram(this.h)
      };
      return b
    }();
    d.ek = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.i = z("v");
      b.prototype.O = function (a) {
        this.a = a;
        if (!this.Ua()) return !1;
        this.V = new c.c.u;
        return !0
      };
      b.prototype.Za = z("wb");
      b.prototype.Xb = function () {
        this.a.useProgram(this.h)
      };
      b.prototype.e = function (a, b) {
        "undefined" === typeof b && (b = void 0);
        switch (b) {
          case d.ma.oc:
            this.xg(a);
            break;
          case d.ma.Tb:
            this.zg(a);
            break;
          case d.ma.Mc:
            this.yg(a)
        }
      };
      b.prototype.xg = function (a) {
        this.Fg();
        this.Ia(a, d.ma.oc)
      };
      b.prototype.zg = function (a) {
        this.Hg();
        this.Ia(a,
          d.ma.Tb)
      };
      b.prototype.yg = function (a) {
        this.Gg();
        this.Ia(a, d.ma.Mc)
      };
      b.prototype.Ia = function (a, b) {
        for (var c = a.F.length, e = this.a.kf, f = 0; f < c; ++f) {
          var l = a.mc(f);
          if (l.Jc()) {
            var s = l.ka.ad,
              m = this.a.Be(s),
              s = m.$a(s),
              n = l.La(),
              y = l.lb,
              w = l.ka.je,
              y = l.lb,
              t = m.ue,
              m = m.be;
            this.V.ja();
            this.V.Ga(e);
            this.V.Ga(l.ub());
            var q = this.V.b,
              r = l.Ce(this.i()),
              u = [];
            u[0] = 2 * Math.floor(y / 2);
            u[1] = u[0] + 1;
            y %= 2;
            void 0 === r ? (r = [], r.push(new d.D(this.o.uMVMatrix, q)), r.push(new d.D(this.o.uSamplers, u)), r.push(new d.D(this.o.uSamplerIndex, [y])),
              r.push(new d.D(this.o.uColorXformMultiplier, [n.sb(), n.qb(), n.ob(), n.Xa()])), r.push(new d.D(this.o.uColorXformOffset, [n.tb() / 255, n.rb() / 255, n.pb() / 255, n.Ya() / 255])), r.push(new d.D(this.o.uOverflowTypeAndPassIndex, [w, b])), r.push(new d.D(this.o.uFrame, [s.left / t, s.top / m, s.width / t, s.height / m]))) : (r[0].value = q, r[1].value = u, r[2].value = [y], r[3].value = [n.sb(), n.qb(), n.ob(), n.Xa()], r[4].value = [n.tb() / 255, n.rb() / 255, n.pb() / 255, n.Ya() / 255], r[5].value = [w, b], r[6].value = [s.left / t, s.top / m, s.width / t, s.height / m]);
            l.Pf(this.i(), r)
          }
        }
        0 < a.F.length && this.a.e(this, a.mc(0).ka.he, a.F)
      };
      b.prototype.Fg = function () {
        this.a.disable(d.d.BLEND);
        this.a.depthMask(!0);
        this.a.enable(d.d.DEPTH_TEST)
      };
      b.prototype.Hg = function () {
        this.a.depthMask(!1);
        this.a.enable(d.d.DEPTH_TEST);
        this.a.enable(d.d.BLEND);
        this.a.blendFuncSeparate(d.d.SRC_ALPHA_SATURATE, d.d.ONE, d.d.ONE, d.d.ONE)
      };
      b.prototype.Gg = function () {
        this.a.depthMask(!1);
        this.a.enable(d.d.DEPTH_TEST);
        this.a.enable(d.d.BLEND);
        this.a.blendFunc(d.d.ONE_MINUS_DST_ALPHA, d.d.ONE)
      };
      b.prototype.Ua =
        function () {
          this.Wa = "        \t\t    attribute vec2 aVertexPosition;     \t\t    attribute vec2 aLoopBlinnTextureCoord;            attribute vec2 aTextureCoord;       \t\t    attribute float aIsConvex;                                                              \t\tuniform mat4 uMVMatrix;                                                                 \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;                                                                \t\tvoid main(void) {        \t\tgl_Position \x3d uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);                vTexCoord \x3d vec4(aLoopBlinnTextureCoord, aTextureCoord);                vIsConvex \x3d aIsConvex;    \t\t}";
          this.Qa = "#extension GL_OES_standard_derivatives : enable\nprecision mediump float;    \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;\t\t\tuniform vec4 uColorXformMultiplier;\t\t\tuniform vec4 uColorXformOffset;            uniform sampler2D uSamplers[2];            uniform int uSamplerIndex;            uniform ivec2 uOverflowTypeAndPassIndex;            uniform vec4 uFrame;                                         \t\t    void main(void) {\t            vec2 px \x3d dFdx(vTexCoord.xy);      \t            vec2 py \x3d dFdy(vTexCoord.xy);                                              \t            vec2 f \x3d (2.0 * vTexCoord.x) * vec2(px.x, py.x) - vec2(px.y, py.y);                                        \t            float sd \x3d vIsConvex * (vTexCoord.x * vTexCoord.x - vTexCoord.y) / length(f);                                             \t            float alpha \x3d min(0.5 - sd, 1.0);                 float t \x3d max(1.0-float(uOverflowTypeAndPassIndex.y), 0.0);                 if (alpha \x3c t || alpha \x3d\x3d 0.0 || (uOverflowTypeAndPassIndex.y \x3d\x3d 1 \x26\x26 alpha \x3d\x3d 1.0))                     discard;                            vec2 uv;                                if(uOverflowTypeAndPassIndex.x \x3d\x3d 0){ /*solid fill*/                    uv \x3d vTexCoord.zw;                }                 else if(uOverflowTypeAndPassIndex.x \x3d\x3d 1) { /*gradient and bitmap fill with overflow type extend*/                    uv \x3d clamp(vTexCoord.zw, vec2(0.0, 0.0), vec2(1.0, 1.0)) * uFrame.zw + uFrame.xy;                }                else if(uOverflowTypeAndPassIndex.x \x3d\x3d 2){/*gradient and bitmap fill with overflow type repeat*/                    uv \x3d fract(vTexCoord.zw) * uFrame.zw + uFrame.xy;                }                else if(uOverflowTypeAndPassIndex.x \x3d\x3d 3){/*gradient fill with overflow type reflect*/                    uv \x3d vTexCoord.zw;                    if(uv.s \x3e 1.0) {\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (odd \x3d\x3d 1.0){ /*if the uv.s lies on the odd number of band towards the right side*/  \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else{/*if the uv.s lies on the even number of band towards the right side*/ \t\t                    uv.s \x3d fracPart;\t                    }                     }                    else if(uv.s \x3c 0.0) {\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (integerPart \x3d\x3d 0.0){/* special case for left side*/ \t\t                    uv.s \x3d fracPart;\t                    }\t                    else if(odd \x3d\x3d 1.0){/*if the uv.s lies on the odd number of band towards the left side*/ \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else {/*if the uv.s lies on the even number of band towards the left side*/ \t\t                    uv.s \x3d fracPart;\t                    }                    }                    uv \x3d (uFrame.xy + (uv * uFrame.zw));                }                vec4 c \x3d texture2D(uSamplers[0], uv);                 if(uSamplerIndex \x3d\x3d 1) c \x3d texture2D(uSamplers[1], uv);                c \x3d c * uColorXformMultiplier + uColorXformOffset;\t\t\t\tc.a \x3d c.a * alpha;\t\t\t\tif(uOverflowTypeAndPassIndex.y \x3d\x3d 2) \t\t\t\t\tc.rgb \x3d c.rgb * c.a;\t\t\t\tgl_FragColor \x3d c;            }";
          this.fa = this.a.Ja(d.d.VERTEX_SHADER, this.Wa);
          this.da = this.a.Ja(d.d.FRAGMENT_SHADER, this.Qa);
          this.h = this.a.createProgram();
          this.a.attachShader(this.h, this.fa);
          this.a.attachShader(this.h, this.da);
          this.v = this.a.linkProgram(this.h);
          if (0 > this.v) return this.a.deleteProgram(this.h), c.l.w.error("Program linking failed."), !1;
          var a = this.a.getUniformLocation(this.h, "uSamplers"),
            b = this.a.getUniformLocation(this.h, "uSamplerIndex"),
            f = this.a.getUniformLocation(this.h, "uColorXformMultiplier"),
            e = this.a.getUniformLocation(this.h,
              "uColorXformOffset"),
            k = this.a.getUniformLocation(this.h, "uOverflowTypeAndPassIndex"),
            l = this.a.getUniformLocation(this.h, "uFrame"),
            s = new d.q(this.a.getUniformLocation(this.h, "uMVMatrix"), d.d.FLOAT_MAT4, 1, d.q.Jd),
            a = new d.q(a, d.d.SAMPLER_2D, this.ao, d.q.Q),
            b = new d.q(b, d.d.INT, 1, d.q.Q),
            f = new d.q(f, d.d.FLOAT_VEC4, 1, d.q.Q),
            e = new d.q(e, d.d.FLOAT_VEC4, 1, d.q.Q),
            k = new d.q(k, d.d.INT_VEC2, 1, d.q.Q),
            l = new d.q(l, d.d.FLOAT_VEC4, 1, d.q.Q);
          this.Og = new d.Re([s, a, f, e, k, l]);
          this.o = {};
          this.o.uMVMatrix = s;
          this.o.uSamplers =
            a;
          this.o.uSamplerIndex = b;
          this.o.uColorXformMultiplier = f;
          this.o.uColorXformOffset = e;
          this.o.uOverflowTypeAndPassIndex = k;
          this.o.uFrame = l;
          a = this.a.getAttribLocation(this.h, "aLoopBlinnTextureCoord");
          k = this.a.getAttribLocation(this.h, "aIsConvex");
          l = this.a.getAttribLocation(this.h, "aTextureCoord");
          s = new d.R(this.a.getAttribLocation(this.h, "aVertexPosition"), "POSITION0", d.d.FLOAT, 2);
          a = new d.R(a, "TEXCOORD0", d.d.FLOAT, 2);
          k = new d.R(k, "TEXCOORD1", d.d.FLOAT, 1);
          l = new d.R(l, "TEXCOORD2", d.d.FLOAT, 2);
          this.wb = new c.e.Oe([s,
            a, k, l
          ]);
          return !0
        };
      b.prototype.s = function () {
        this.a.deleteShader(this.fa);
        this.a.deleteShader(this.da);
        this.a.deleteProgram(this.h)
      };
      return b
    }();
    d.hk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.i = z("v");
      b.prototype.O = function (a) {
        this.a = a;
        if (!this.Ua()) return !1;
        this.V = new c.c.u;
        this.N = new c.c.u;
        return !0
      };
      b.prototype.Za = z("wb");
      b.prototype.Xb = function () {
        this.a.useProgram(this.h)
      };
      b.prototype.e = function (a, b) {
        "undefined" === typeof b && (b = void 0);
        switch (b) {
          case d.ma.oc:
            this.xg(a);
            break;
          case d.ma.Tb:
            this.zg(a);
            break;
          case d.ma.Mc:
            this.yg(a)
        }
      };
      b.prototype.xg = function (a) {
        this.Fg();
        this.Ia(a, d.ma.oc)
      };
      b.prototype.zg = function (a) {
        this.Hg();
        this.Ia(a, d.ma.Tb)
      };
      b.prototype.yg = function (a) {
        this.Gg();
        this.Ia(a, d.ma.Mc)
      };
      b.prototype.Ia = function (a, b) {
        for (var c = a.F.length, e = this.a.kf, f = 0; f < c; ++f) {
          var l = a.mc(f);
          if (l.Jc()) {
            var s = l.ka.ad,
              m = this.a.Be(s),
              s = m.$a(s),
              n = l.La(),
              y = l.lb,
              w = l.ka.je,
              y = l.lb,
              t = m.ue,
              m = m.be;
            this.V.ja();
            this.V.Ga(e);
            this.V.Ga(l.ub());
            var q = this.V.b;
            this.N.copy(l.ub());
            this.N.Rb();
            var r = l.Ce(this.i());
            void 0 === r ? (r = [], r.push(new d.D(this.o.uMVMatrix, q)), r.push(new d.D(this.o.uMVMatrixInv, [this.N.get(0, 0), this.N.get(0, 1), this.N.get(1,
              0), this.N.get(1, 1)])), r.push(new d.D(this.o.uSampler, [y])), r.push(new d.D(this.o.uColorXformMultiplier, [n.sb(), n.qb(), n.ob(), n.Xa()])), r.push(new d.D(this.o.uColorXformOffset, [n.tb() / 255, n.rb() / 255, n.pb() / 255, n.Ya() / 255])), r.push(new d.D(this.o.uOverflowTypeAndPassIndex, [w, b])), r.push(new d.D(this.o.uFrame, [s.left / t, s.top / m, s.width / t, s.height / m]))) : (r[0].value = q, r[1].value = [this.N.get(0, 0), this.N.get(0, 1), this.N.get(1, 0), this.N.get(1, 1)], r[2].value = [y], r[3].value = [n.sb(), n.qb(), n.ob(), n.Xa()], r[4].value = [n.tb() / 255, n.rb() / 255, n.pb() / 255, n.Ya() / 255], r[5].value = [w, b], r[6].value = [s.left / t, s.top / m, s.width / t, s.height / m]);
            l.Pf(this.i(), r)
          }
        }
        0 < a.F.length && this.a.e(this, a.mc(0).ka.he, a.F)
      };
      b.prototype.Fg = function () {
        this.a.disable(d.d.BLEND);
        this.a.depthMask(!0);
        this.a.enable(d.d.DEPTH_TEST)
      };
      b.prototype.Hg = function () {
        this.a.depthMask(!1);
        this.a.enable(d.d.DEPTH_TEST);
        this.a.enable(d.d.BLEND);
        this.a.blendFunc(d.d.ONE_MINUS_DST_ALPHA, d.d.ONE)
      };
      b.prototype.Gg = function () {
        this.a.depthMask(!1);
        this.a.enable(d.d.DEPTH_TEST);
        this.a.enable(d.d.BLEND);
        this.a.blendFunc(d.d.ONE_MINUS_DST_ALPHA, d.d.ONE)
      };
      b.prototype.Ua = function () {
        this.Wa = "        \t\t    attribute vec2 aVertexPosition;     \t\t    attribute vec2 aLoopBlinnTextureCoord;            attribute vec2 aTextureCoord;                   attribute vec2 adfdx;                         attribute vec2 adfdy;             \t\t    attribute float aIsConvex;                                                              \t\tuniform mat4 uMVMatrix;                         uniform vec4 uMVMatrixInv;                                                              \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;                        varying vec4 vDfDxDy;                                                                      \t\tvoid main(void) {        \t\tgl_Position \x3d uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);                vDfDxDy.xy \x3d vec2(uMVMatrixInv.x * adfdx.x + uMVMatrixInv.y * adfdy.x, uMVMatrixInv.x * adfdx.y + uMVMatrixInv.y * adfdy.y);                vDfDxDy.zw \x3d vec2(uMVMatrixInv.z * adfdx.x + uMVMatrixInv.w * adfdy.x, uMVMatrixInv.z * adfdx.y + uMVMatrixInv.w * adfdy.y);                vTexCoord \x3d vec4(aLoopBlinnTextureCoord, aTextureCoord);                vIsConvex \x3d aIsConvex;    \t\t}";
        this.Qa = "precision mediump float;    \t\tvarying vec4 vTexCoord;         \t\tvarying float vIsConvex;            varying vec4 vDfDxDy;                  \t\t\tuniform vec4 uColorXformMultiplier;\t\t\tuniform vec4 uColorXformOffset;            uniform sampler2D uSampler;            uniform ivec2 uOverflowTypeAndPassIndex;            uniform vec4 uFrame;                                         \t\t    void main(void) {\t            vec2 px \x3d vDfDxDy.xy;      \t            vec2 py \x3d vDfDxDy.zw;                                              \t            vec2 f \x3d (2.0 * vTexCoord.x) * vec2(px.x, py.x) - vec2(px.y, py.y);                                        \t            float sd \x3d vIsConvex * (vTexCoord.x * vTexCoord.x - vTexCoord.y) / length(f);                                             \t            float alpha \x3d min(0.5 - sd, 1.0);                 float t \x3d max(1.0-float(uOverflowTypeAndPassIndex.y), 0.0);                 if (alpha \x3c t || alpha \x3d\x3d 0.0 || (uOverflowTypeAndPassIndex.y \x3d\x3d 1 \x26\x26 alpha \x3d\x3d 1.0))                     discard;                            vec2 uv;                                if(uOverflowTypeAndPassIndex.x \x3d\x3d 0){ /*solid fill*/                    uv \x3d vTexCoord.zw;                }                 else if(uOverflowTypeAndPassIndex.x \x3d\x3d 1) { /*gradient and bitmap fill with overflow type extend*/                    uv \x3d clamp(vTexCoord.zw, vec2(0.0, 0.0), vec2(1.0, 1.0)) * uFrame.zw + uFrame.xy;                }                else if(uOverflowTypeAndPassIndex.x \x3d\x3d 2){/*gradient and bitmap fill with overflow type repeat*/                    uv \x3d fract(vTexCoord.zw) * uFrame.zw + uFrame.xy;                }                else if(uOverflowTypeAndPassIndex.x \x3d\x3d 3){/*gradient fill with overflow type reflect*/                    uv \x3d vTexCoord.zw;                    if(uv.s \x3e 1.0) {\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (odd \x3d\x3d 1.0){ /*if the uv.s lies on the odd number of band towards the right side*/  \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else{/*if the uv.s lies on the even number of band towards the right side*/ \t\t                    uv.s \x3d fracPart;\t                    }                     }                    else if(uv.s \x3c 0.0){\t                    float integerPart \x3d floor(uv.s);\t                    float fracPart \x3d mod(uv.s,1.0);\t                    float odd \x3d mod(integerPart,2.0);\t                    if (integerPart \x3d\x3d 0.0){/* special case for left side*/ \t\t                    uv.s \x3d fracPart;\t                    }\t                    else if(odd \x3d\x3d 1.0){/*if the uv.s lies on the odd number of band towards the left side*/ \t\t                    uv.s \x3d 1.0 - fracPart;\t                    }\t                    else {/*if the uv.s lies on the even number of band towards the left side*/ \t\t                    uv.s \x3d fracPart;\t                    }                    }                    uv \x3d (uFrame.xy + (uv * uFrame.zw));                }                vec4 c \x3d texture2D(uSampler, uv) * uColorXformMultiplier + uColorXformOffset;                c.a \x3d c.a * alpha;                if(uOverflowTypeAndPassIndex.y !\x3d 0) \t\t\t\t\t    c.rgb \x3d c.rgb * c.a;                        gl_FragColor \x3d c;                    }";
        this.fa = this.a.Ja(d.d.VERTEX_SHADER, this.Wa);
        this.da = this.a.Ja(d.d.FRAGMENT_SHADER, this.Qa);
        this.h = this.a.createProgram();
        this.a.attachShader(this.h, this.fa);
        this.a.attachShader(this.h, this.da);
        this.v = this.a.linkProgram(this.h);
        if (0 > this.v) return this.a.deleteProgram(this.h), c.l.w.error("Program linking failed."), !1;
        var a = this.a.getUniformLocation(this.h, "uMVMatrixInv"),
          b = this.a.getUniformLocation(this.h, "uSampler"),
          f = this.a.getUniformLocation(this.h, "uColorXformMultiplier"),
          e = this.a.getUniformLocation(this.h,
            "uColorXformOffset"),
          k = this.a.getUniformLocation(this.h, "uOverflowTypeAndPassIndex"),
          l = this.a.getUniformLocation(this.h, "uFrame"),
          s = new d.q(this.a.getUniformLocation(this.h, "uMVMatrix"), d.d.FLOAT_MAT4, 1, d.q.Jd),
          a = new d.q(a, d.d.FLOAT_VEC4, 1, d.q.Jd),
          b = new d.q(b, d.d.SAMPLER_2D, 1, d.q.Q),
          f = new d.q(f, d.d.FLOAT_VEC4, 1, d.q.Q),
          e = new d.q(e, d.d.FLOAT_VEC4, 1, d.q.Q),
          k = new d.q(k, d.d.INT_VEC2, 1, d.q.Q),
          l = new d.q(l, d.d.FLOAT_VEC4, 1, d.q.Q);
        this.Og = new d.Re([s, a, b, f, e, k, l]);
        this.o = {};
        this.o.uMVMatrix = s;
        this.o.uMVMatrixInv =
          a;
        this.o.uSampler = b;
        this.o.uColorXformMultiplier = f;
        this.o.uColorXformOffset = e;
        this.o.uOverflowTypeAndPassIndex = k;
        this.o.uFrame = l;
        a = this.a.getAttribLocation(this.h, "aLoopBlinnTextureCoord");
        b = this.a.getAttribLocation(this.h, "aIsConvex");
        e = this.a.getAttribLocation(this.h, "aTextureCoord");
        k = this.a.getAttribLocation(this.h, "adfdx");
        l = this.a.getAttribLocation(this.h, "adfdy");
        s = new d.R(this.a.getAttribLocation(this.h, "aVertexPosition"), "POSITION0", d.d.FLOAT, 2);
        a = new d.R(a, "TEXCOORD0", d.d.FLOAT, 2);
        b = new d.R(b,
          "TEXCOORD1", d.d.FLOAT, 1);
        e = new d.R(e, "TEXCOORD2", d.d.FLOAT, 2);
        k = new d.R(k, "TEXCOORD3", d.d.FLOAT, 2);
        l = new d.R(l, "TEXCOORD4", d.d.FLOAT, 2);
        this.wb = new c.e.Oe([s, a, b, k, l, e]);
        return !0
      };
      b.prototype.s = function () {
        this.a.deleteShader(this.fa);
        this.a.deleteShader(this.da);
        this.a.deleteProgram(this.h)
      };
      return b
    }();
    d.ik = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {
        this.fe = 0
      }
      b.prototype.O = function (a) {
        this.a = a;
        a.Fc("OES_standard_derivatives") ? this.Pa = new d.hk : this.Pa = new d.ik;
        this.Ve = new d.ek;
        this.cg = new c.e.Pe;
        this.Ab = [];
        this.vg = [];
        this.fe = 0;
        this.Ue = {};
        this.We = {};
        return this.Pa.O(a) ? this.Ve.O(a) : !1
      };
      b.prototype.e = function (a) {
        this.rl = this.a.eh();
        this.ld();
        this.Qg(a);
        this.nf(b.oc);
        this.Ia(b.oc, this.cg);
        for (a = 0; a < this.Ab.length; ++a) {
          var c = this.Ab[a].type,
            d = this.Ab[a].sf;
          this.nf(c);
          this.Ia(c, d)
        }
        this.Ab.splice(0,
          this.Ab.length);
        this.a.Ha(this.rl);
        a = this.a.Wg(this.Yc);
        c = this.a.Wg(this.Zc);
        this.Ve.Xb();
        this.Ve.e(void 0, {
          am: a,
          bm: c
        })
      };
      b.prototype.ld = function () {
        this.ne();
        this.Pa.Xb();
        var a = this.a.Dd(),
          b = this.Yk();
        this.Yc = this.Ue[b];
        void 0 === this.Yc && (this.Yc = this.a.wd(a.width, a.height), this.Ue[b] = this.Yc);
        this.Zc = this.We[b];
        void 0 === this.Zc && (this.Zc = this.a.wd(a.width, a.height), this.We[b] = this.Zc);
        this.a.Ha(this.Yc);
        a = this.a.lc();
        this.a.clearColor(a.Jf / 255, a.vf / 255, a.rf / 255, a.ve / 255);
        this.a.clear(!0, !0, !1);
        this.a.Ha(this.Zc);
        this.a.clearColor(0, 0, 0, 0);
        this.a.clear(!0, !0, !1)
      };
      b.prototype.nf = function (a) {
        switch (a) {
          case b.oc:
            this.a.Ha(this.Yc);
            break;
          case b.Tb:
          case b.Mc:
            this.a.Ha(this.Zc)
        }
      };
      b.prototype.Ia = function (a, b) {
        "undefined" === typeof b && (b = void 0);
        this.Pa.e(b, a);
        void 0 !== b && b.clear()
      };
      b.prototype.Qg = function (a) {
        this.fe = 0;
        for (var c = a.length, f = 0; f < c; ++f) {
          for (var e = a[f], k = 0; k < e.ra(d.t.Z); k++) {
            var l = e.ab(d.t.Z, k, this.a);
            l.Sb() && this.cg.Dc(l)
          }
          for (k = 0; k < e.ra(d.t.P); k++) l = e.ab(d.t.P, k, this.a), l.Sb() && this.cg.Dc(l)
        }
        f = e = 0;
        for (l = []; e < c;) {
          for (var s = a[e].Fa(), m = s, n = -1, y = [], w = [], t = this.yi(), q = this.yi(), k = e; k < c; ++k, ++f) {
            for (var e = a[k], r = e.Fa(), u = !1, A = e.ra(d.t.Z), C = e.ra(d.t.P), v = 0; !u && v < A; ++v) u = !e.ab(d.t.Z, v, this.a).Sb();
            for (v = 0; !u && v < C; ++v) u = !e.ab(d.t.P, v, this.a).Sb();
            if (u) {
              n = r;
              if (m != n && (0 < l.length || 0 < y.length)) {
                0 < l.length && (y = y.concat(l));
                for (e = 0; e < y.length; ++e) t.Dc(y[e]);
                this.Ab.push({
                  type: b.Tb,
                  sf: t
                });
                l = [];
                y = []
              }
              break
            }
            for (v = 0; v < C; v++) {
              A = e.ab(d.t.P, v, this.a);
              l.push(A);
              var x = e.ab(d.t.bb, v, this.a);
              x && l.push(x)
            }
            u || r == m || (0 < l.length &&
              (y = y.concat(l)), l = [], m = r)
          }
          f == c && (-1 == n && 0 < l.length) && (y = y.concat(l), l = []);
          if (-1 != n && n == s) {
            for (k = f; k < c; ++k, ++f) {
              e = a[k];
              if (e.Fa() != n) break;
              A = e.ra(d.t.Z);
              C = e.ra(d.t.P);
              for (v = 0; v < A; v++)(s = e.ab(d.t.Z, v, this.a)) && !s.Sb() && w.push(s);
              for (v = 0; v < C; v++) A = e.ab(d.t.P, v, this.a), x = e.ab(d.t.bb, v, this.a), A.Sb() ? (l.push(A), x && l.push(x)) : (w.push(A), x && w.push(x))
            }
            if (0 < w.length) {
              for (e = 0; e < w.length; ++e) q.Dc(w[e]);
              this.Ab.push({
                type: b.Mc,
                sf: q
              })
            }
          } else if (0 < y.length) {
            for (e = 0; e < y.length; ++e) t.Dc(y[e]);
            this.Ab.push({
              type: b.Tb,
              sf: t
            })
          }
          e = f
        }
        0 < l.length && this.Ab.push({
          type: b.Tb,
          sf: t
        })
      };
      b.prototype.Qi = function (a) {
        switch (a) {
          case b.oc:
            this.a.depthMask(!0);
            break;
          case b.Tb:
            this.a.depthMask(!1);
            break;
          case b.Mc:
            this.a.depthMask(!1)
        }
      };
      b.prototype.ne = function () {
        this.a.blendFunc(d.d.SRC_ALPHA, d.d.ONE_MINUS_SRC_ALPHA);
        this.a.enable(d.d.BLEND);
        this.a.depthFunc(d.d.LESS);
        this.a.clearDepth(1);
        this.a.depthMask(!0);
        this.a.xd(!0)
      };
      b.prototype.yi = function () {
        var a = void 0;
        this.fe < this.vg.length ? a = this.vg[this.fe] : (a = new c.e.Pe, this.vg.push(a));
        this.fe++;
        return a
      };
      b.prototype.Yk = function () {
        var a = this.a.Dd();
        return d.d.MAX_TEXTURE_SIZE * a.height + a.width
      };
      b.prototype.s = function () {
        this.Pa.s();
        this.Ve.s();
        for (var a in this.Ue) this.a.ye(this.Ue[a]);
        for (a in this.We) this.a.ye(this.We[a])
      };
      b.oc = 0;
      b.Tb = 1;
      b.Mc = 2;
      return b
    }();
    d.ma = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.i = z("v");
      b.prototype.O = function (a) {
        this.a = a;
        return this.Ua() ? !0 : !1
      };
      b.prototype.Za = z("wb");
      b.prototype.Xb = function () {
        this.a.useProgram(this.h);
        this.a.ga(d.d.ARRAY_BUFFER, this.Db);
        this.a.ga(d.d.ELEMENT_ARRAY_BUFFER, this.Cb);
        this.a.useProgram(this.h);
        this.a.disable(d.d.BLEND);
        this.a.depthMask(!1);
        this.a.disable(d.d.DEPTH_TEST);
        this.Eg()
      };
      b.prototype.e = function (a, b) {
        "undefined" === typeof b && (b = void 0);
        this.Dg(b);
        this.a.drawElements(this.ae.length)
      };
      b.prototype.ld = aa();
      b.prototype.Eg = function () {
        var a = 0;
        this.a.vertexAttribPointer(0, 2, d.d.FLOAT, !1, 0, 4 * a);
        this.a.vertexAttribPointer(1, 2, d.d.FLOAT, !1, 0, 4 * (a + 8))
      };
      b.prototype.Dg = function (a) {
        this.a.uniform1i(this.bg, a)
      };
      b.prototype.Ua = function () {
        this.Wa = "attribute vec2 aVertexPosition;            attribute vec2 aTextureCoord;                                                                   varying vec2 vTextureCoord;                void main(void ) {        \t\tgl_Position \x3d vec4(aVertexPosition, 1.0, 1.0);                vTextureCoord \x3d aTextureCoord;             }";
        this.Qa = "precision mediump float;            uniform sampler2D uColorMap;            varying vec2 vTextureCoord;                            void main()            {                vec4 color \x3d texture2D(uColorMap, vTextureCoord);                if(color.a \x3d\x3d 0.0) discard;                color.rgb \x3d color.rgb / color.a;                 gl_FragColor \x3d color;            }";
        this.Db = this.a.createBuffer();
        if (void 0 === this.Db) return c.l.w.error("Creation of vertex buffer failed."), !1;
        this.Cb =
          this.a.createBuffer();
        if (void 0 === this.Cb) return c.l.w.error("Creation of index buffer failed."), !1;
        this.fa = this.a.Ja(d.d.VERTEX_SHADER, this.Wa);
        this.da = this.a.Ja(d.d.FRAGMENT_SHADER, this.Qa);
        this.h = this.a.createProgram();
        this.a.attachShader(this.h, this.fa);
        this.a.attachShader(this.h, this.da);
        this.a.ga(d.d.ARRAY_BUFFER, this.Db);
        this.a.ga(d.d.ELEMENT_ARRAY_BUFFER, this.Cb);
        this.a.kc(0);
        this.a.kc(1);
        this.a.bindAttribLocation(this.h, 0, "aVertexPosition");
        this.a.bindAttribLocation(this.h, 1, "aTextureCoord");
        this.v = this.a.linkProgram(this.h);
        if (0 > this.v) return this.a.deleteProgram(this.h), c.l.w.error("Program linking failed."), !1;
        this.bg = this.a.getUniformLocation(this.h, "uColorMap");
        this.kg = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1, 0, 0, 1, 0, 1, 1, 0, 1]);
        this.ae = new Uint16Array([0, 1, 2, 0, 2, 3]);
        this.a.bufferData(d.d.ARRAY_BUFFER, this.kg, d.d.STATIC_DRAW);
        this.a.bufferData(d.d.ELEMENT_ARRAY_BUFFER, this.ae, d.d.STATIC_DRAW);
        return !0
      };
      b.prototype.s = function () {
        this.a.deleteBuffer(this.Db);
        this.a.deleteBuffer(this.Cb);
        this.a.deleteShader(this.fa);
        this.a.deleteShader(this.da);
        this.a.deleteProgram(this.h)
      };
      return b
    }();
    d.pk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {}
      b.prototype.O = function (a) {
        this.a = a;
        this.og = new d.ma;
        var b = this.a.Dd();
        this.ha = this.a.wd(b.width, b.height);
        var b = this.a.lc(),
          f = new c.c.Qc(0, 0, 0, 0),
          e = this.a.Ha(this.ha);
        this.a.Wb(f);
        this.a.clear(!0, !0, !1);
        this.a.Ha(e);
        this.a.Wb(b);
        this.lf = new d.pk;
        return this.lf.O(a) ? this.og.O(a) : !1
      };
      b.prototype.e = function (a) {
        this.ld();
        var b = this.a.Ha(this.ha);
        this.og.e(a);
        this.a.Ha(b);
        this.lf.Xb();
        this.a.Wg(this.ha);
        this.lf.e(void 0, this.ha.i())
      };
      b.prototype.ld =
        function () {
          this.ne()
        };
      b.prototype.ne = aa();
      b.prototype.s = function () {
        this.lf.s();
        this.og.s();
        this.a.ye(this.ha)
      };
      return b
    }();
    d.rk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, b) {
        "undefined" === typeof b && (b = void 0);
        this.H = new c.e.d(a, b);
        this.rg = b[d.d.Kc] === d.d.De ? new d.kk : new d.ma;
        this.ie = void 0;
        this.oa = []
      }
      b.prototype.O = function () {
        this.rg.O(this.H)
      };
      b.prototype.Dd = function () {
        return this.H.Dd()
      };
      b.prototype.Oc = function (a, b) {
        "undefined" === typeof b && (b = !0);
        this.H.Oc(a, b)
      };
      b.prototype.lc = function () {
        return this.H.lc()
      };
      b.prototype.Wb = function (a) {
        this.H.Wb(a)
      };
      b.prototype.depthMask = function (a) {
        this.H.depthMask(a)
      };
      b.prototype.depthFunc =
        function (a) {
          this.H.depthFunc(a)
        };
      b.prototype.clearDepth = function (a) {
        this.H.clearDepth(a)
      };
      b.prototype.xd = function (a) {
        this.H.xd(a)
      };
      b.prototype.blendFunc = function (a, b) {
        this.H.blendFunc(a, b)
      };
      b.prototype.clear = function (a, b, c) {
        "undefined" === typeof b && (b = !1);
        "undefined" === typeof c && (c = !1);
        this.H.clear(a, b, c)
      };
      b.prototype.enable = function (a) {
        this.H.enable(a)
      };
      b.prototype.disable = function (a) {
        this.H.disable(a)
      };
      b.prototype.scissor = function (a) {
        this.H.scissor(a)
      };
      b.prototype.ij = function (a) {
        "undefined" === typeof a &&
          (a = b.Hj);
        switch (a) {
          case b.Hj:
            this.Kg = this.rg;
            break;
          case b.Gj:
            void 0 === this.ie && (this.ie = new d.rk, this.ie.O(this.H)), this.Kg = this.ie
        }
      };
      b.prototype.lj = function () {
        this.me();
        this.Kg.e(this.oa);
        for (var a = 0; a < this.oa.length; ++a) this.oa[a].Ie(!1);
        this.oa.length = 0
      };
      b.prototype.e = function (a) {
        this.oa.push(a)
      };
      b.prototype.wd = function (a, b) {
        return this.H.wd(a, b)
      };
      b.prototype.Ha = function (a) {
        return this.H.Ha(a)
      };
      b.prototype.eh = function () {
        return this.H.eh()
      };
      b.prototype.ye = function (a) {
        this.H.ye(a)
      };
      b.prototype.xh =
        function (a, b) {
          this.H.xh(a, b)
        };
      b.prototype.Fc = function (a) {
        return this.H.Fc(a)
      };
      b.prototype.flush = function () {
        this.H.flush()
      };
      b.prototype.s = function () {
        this.rg.s();
        this.ie.s();
        this.H.s();
        delete this.Kg;
        delete this.H
      };
      b.prototype.me = aa();
      b.Hj = 0;
      b.Gj = 1;
      return b
    }();
    d.Hh = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, b) {
        this.Sa = a;
        this.Lb = b;
        this.Tc = !1;
        this.m = []
      }
      b.prototype.jj = function (a) {
        if (a > this.Lb || this.Tc) return !1;
        if (a > this.Lb / 2) return 0 === this.m.length;
        if (0 === this.m.length) return !0;
        for (var b = 0; 4 > b; ++b)
          if (this.m[b].jj(a)) return !0;
        return !1
      };
      b.prototype.hj = function (a) {
        if (!(a > this.Lb || this.Tc)) {
          var b = void 0;
          if (a > this.Lb / 2) 0 === this.m.length && (b = this.Sa, this.Tc = !0);
          else {
            0 === this.m.length && this.Ml();
            for (var c = 0; 4 > c && (b = this.m[c].hj(a), void 0 === b); ++c);
          }
          return b
        }
      };
      b.prototype.mj = function (a) {
        var b = a.x - this.Sa.x,
          c = a.y - this.Sa.y;
        if (0 > b || b >= this.Lb || 0 > c || c >= this.Lb) return !1;
        if (this.Tc) return 0 === b && 0 === c ? (this.Tc = !1, !0) : !1;
        if (0 === this.m.length) return !1;
        var e = 0;
        b >= this.Lb / 2 && e++;
        c >= this.Lb / 2 && (e += 2);
        if (a = this.m[e].mj(a))
          for (b = 0; 4 > b; ++b)
            if (a = this.m[b].Im(), !a) return !1;
        this.m.length = 0;
        return !0
      };
      b.prototype.Ml = function () {
        var a = this.Lb / 2;
        this.m.push(new c.c.Md(new c.c.k(this.Sa.x, this.Sa.y), a));
        this.m.push(new c.c.Md(new c.c.k(this.Sa.x + a, this.Sa.y), a));
        this.m.push(new c.c.Md(new c.c.k(this.Sa.x,
          this.Sa.y + a), a));
        this.m.push(new c.c.Md(new c.c.k(this.Sa.x + a, this.Sa.y + a), a))
      };
      b.prototype.Im = function () {
        return !this.Tc && 0 === this.m.length
      };
      return b
    }();
    d.Md = f
  })(c.c || (c.c = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, b) {
        this.ha = a;
        this.qe = b;
        this.ol = 0;
        this.uc = {};
        this.tg = new c.c.Md(new c.c.k(0, 0), d.d.MAX_TEXTURE_SIZE)
      }
      b.prototype.$l = function (a, d) {
        var f = c.l.U.ud(a),
          e = c.l.U.ud(d);
        return this.tg.jj(Math.max(f, e, b.Lh))
      };
      b.prototype.Xl = function (a, d) {
        var f = c.l.U.ud(a),
          e = c.l.U.ud(d),
          f = this.tg.hj(Math.max(f, e, b.Lh));
        if (void 0 !== f) return f = new c.c.M(f.x, f.y, a, d), e = c.l.U.em(this.qe.i(), this.ol++), this.qe.Zj(e, f), e
      };
      b.prototype.nj = function (a) {
        a = this.qe.$a(a);
        void 0 !==
          a && this.tg.mj(new c.c.k(a.left, a.top))
      };
      b.prototype.$a = function (a) {
        return this.qe.$a(a)
      };
      b.prototype.Cd = function () {
        return this.ha.i()
      };
      b.prototype.mn = function (a, b, c) {
        void 0 === this.uc[b] && (this.uc[b] = {
          color: c,
          Xj: []
        });
        b = this.uc[b].Xj;
        c = a.length;
        for (var e = 0; e < c; ++e) b.push(a[e])
      };
      b.prototype.pn = function (a) {
        if (0 !== Object.keys(this.uc).length) {
          var b = a.lc(),
            f = a.Ha(this.ha);
          a.enable(d.d.SCISSOR_TEST);
          for (var e in this.uc) {
            var k = this.uc[e],
              l = this.qe.$a(e),
              l = new c.c.M(l.left, l.top, l.width, l.height);
            l.width =
              c.l.U.ud(l.width);
            l.height = c.l.U.ud(l.height);
            a.scissor(l);
            a.Wb(k.color);
            a.ij(d.Hh.Gj);
            for (var k = k.Xj, l = k.length, s = 0; s < l; ++s) k[s].He(s / l), a.e(k[s], 1);
            a.lj()
          }
          a.disable(d.d.SCISSOR_TEST);
          this.uc = {};
          a.Ha(f);
          a.Wb(b)
        }
      };
      b.Lh = 64;
      return b
    }();
    d.zk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, b, d, e, f, l) {
        this.Nl = a;
        this.yc = b;
        this.$n = d;
        this.Rd = e;
        this.hc = f.C();
        this.dg = void 0 !== l ? l.C() : new c.c.p;
        this.ug = 0
      }
      b.prototype.Cd = z("Nl");
      b.prototype.Bd = z("yc");
      b.prototype.yd = z("Rd");
      b.prototype.ub = z("hc");
      b.prototype.La = z("dg");
      b.prototype.Vl = function () {
        this.ug++
      };
      b.prototype.Wj = function () {
        this.ug--
      };
      return b
    }();
    d.wk = f;
    f = function () {
      function b() {
        this.Mb = void 0
      }
      b.prototype.In = function (a) {
        void 0 !== this.Mb && this.Mb.Wj();
        this.Mb = a;
        void 0 !== this.Mb &&
          this.Mb.Vl()
      };
      b.prototype.Hn = g("Da");
      b.prototype.Ea = function (a) {
        this.Da.Ea(a, void 0)
      };
      b.prototype.Qb = function (a) {
        this.Da.Qb(a)
      };
      b.prototype.La = function () {
        return this.Mb.La()
      };
      b.prototype.s = function () {
        void 0 !== this.Mb && this.Mb.Wj();
        this.Mb = void 0;
        void 0 !== this.Da && this.Da.s();
        this.Da = void 0
      };
      return b
    }();
    d.vk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, b, c, e) {
        this.Li = a;
        this.Rd = b;
        this.tl = c;
        this.pa = e
      }
      b.prototype.yd = z("Rd");
      return b
    }();
    d.yk = f;
    f = function () {
      function b(a, b, d) {
        this.eo = new c.c.p;
        this.a = a;
        this.T = b;
        this.Ti = d;
        this.oa = [];
        this.wc = [];
        this.nl = 1;
        this.Yb = {};
        this.gi = 0;
        this.ce = {}
      }
      b.prototype.nn = function (a) {
        if (void 0 === a.Li || void 0 === a.yd() || void 0 === a.pa) return !1;
        this.wc.push(a);
        return !0
      };
      b.prototype.Qn = function () {
        var a = this.wc.length;
        if (0 !== a) {
          for (var b = 0; b < a; ++b) {
            var f = this.wc[b].Li,
              e = this.wc[b].yd(),
              k = this.wc[b].tl,
              l = this.wc[b].pa,
              s = f.Pb().C(),
              m = f.Gc(),
              n = this.Ik(f),
              m = this.Qk(f.Ic().i(), e, n, m);
            void 0 === m ? m = this.pa(f, e, n, k) : this.ml(f);
            void 0 !== m ? (l.In(m), e = this.Ti.kj(m.Bd().i(), this.Ti.rm()), l.Hn(e), l.Ea(s), f.$j(l)) : (f.$j(void 0), l.s())
          }
          this.wc.length = 0;
          a = this.a.Dd();
          b = new c.c.M(0, 0, d.d.MAX_TEXTURE_SIZE, d.d.MAX_TEXTURE_SIZE);
          this.a.Oc(b, !1);
          for (var y in this.Yb) this.Yb[y].pn(this.a);
          this.a.Oc(a)
        }
      };
      b.prototype.Qk = function (a, b, c, e) {
        a = this.ce[a];
        if (void 0 !== a)
          for (var d = 0; d < a.length; ++d) {
            var f = a[d];
            if (f.yd().Ec(b) && this.el(c, f.ub()) && f.La().Ec(e)) return f
          }
      };
      b.prototype.ml = function (a) {
        var b = [];
        a = a.oj();
        for (var c = 0; c < a.length; ++c) a[c].Qb(b);
        for (c = 0; c < b.length; ++c) b[c].Ie(!1)
      };
      b.prototype.el = function (a, b) {
        return a.get(0, 0) != b.get(0, 0) || a.get(0, 1) != b.get(0, 1) || a.get(1, 0) != b.get(1, 0) || a.get(1, 1) != b.get(1, 1) ? !1 : !0
      };
      b.prototype.pa = function (a, b, d, e) {
        var f = c.l.U.sm(a),
          l = a.Hc().C();
        l.Rb();
        a.Ea(l, e);
        for (var s = a; void 0 !== s.getParent();) s = s.getParent();
        var m = a.ze(s, !1, c.e.t.bb, !0);
        if (m.left && !isNaN(m.left)) {
          m.left =
            Math.floor(m.left);
          m.top = Math.floor(m.top);
          m.width = Math.ceil(m.width);
          m.height = Math.ceil(m.height);
          var s = d.C(),
            n = s.bk(m),
            y = this.Rk(n.width, n.height);
          if (void 0 === y) a.Ea(f, e);
          else {
            var w = y.Xl(n.width, n.height);
            if (void 0 === w) a.Ea(f, e);
            else if (f = this.Tk(m, s, y.Cd(), w, 255 === b.ve), void 0 === f) y.nj(w);
            else return n = this.ce[a.Ic().i()], void 0 === n && (n = [], this.ce[a.Ic().i()] = n), d = new c.e.wk(y.Cd(), f, a.Ic().i(), b, d, a.Gc()), n.push(d), n = y.$a(w), s.Ga(l), l = s.get(0, 3), f = s.get(1, 3), s.translate(n.left + (l - Math.floor(l)),
              n.top + (f - Math.floor(f))), a.Ea(s, e), a.Qb(this.oa), y.mn(this.oa, w, b), this.oa.length = 0, d
          }
        }
      };
      b.prototype.Ik = function (a) {
        return a.Pb().C()
      };
      b.prototype.Rk = function (a, b) {
        var f = this.a.H,
          e = d.d.MAX_TEXTURE_SIZE;
        if (!(a > e || b > e)) {
          for (var k = void 0, l = 0; 2 > l; ++l) {
            for (var s in this.Yb)
              if (this.Yb[s].$l(a, b)) {
                k = this.Yb[s];
                break
              }
            if (void 0 === k && this.gi < this.nl) {
              var m = this.a.wd(e, e);
              if (void 0 !== m) {
                var n = f.uj(m.i());
                void 0 !== n && (k = new c.e.zk(m, n), this.Yb[k.Cd()] = k, this.gi++)
              }
            }
            void 0 === k && 0 === l && this.Jk();
            if (void 0 !== k) break
          }
          return k
        }
      };
      b.prototype.Jk = function () {
        for (var a in this.ce)
          for (var b = this.ce[a], c = b.length - 1; 0 <= c; --c) {
            var e = b[c];
            if (0 === e.ug) {
              for (var f = e.Bd(), l = f.ra(d.t.Z), s = 0; s < l; ++s) {
                var m = f.yf(d.t.Z, s);
                void 0 !== this.Yb[e.Cd()] && this.Yb[e.Cd()].nj(m.ad)
              }
              b.splice(c, 1)
            }
          }
      };
      b.prototype.Tk = function (a, b, d, e, f) {
        if (void 0 !== a && void 0 !== d && void 0 !== e) {
          var l = new c.e.t(this.T.qm()),
            s = 7;
          this.a.H.Fc("OES_standard_derivatives") || (s += 4);
          a = this.Xk(s, a, b);
          d = this.Sk(a.ba, a.Ma, s, d, e, f);
          l.Nb(c.e.t.Z, d[0]);
          1 < d.length && l.Nb(c.e.t.P, d[1]);
          2 < d.length &&
            l.Nb(c.e.t.bb, d[2]);
          l.Xg();
          this.T.Ug(l);
          return l
        }
      };
      b.prototype.Sk = function (a, b, f, e, k, l) {
        var s = new c.e.di,
          m = [],
          n = new c.e.na(0, "POSITION0", c.e.d.FLOAT, 2),
          y = new c.e.na(2 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD0", c.e.d.FLOAT, 2),
          w = new c.e.na(4 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD1", c.e.d.FLOAT, 1),
          t = new c.e.na(5 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD2", c.e.d.FLOAT, 2);
        s.vb = [n, y, w, t];
        if (11 == f) {
          var t = new c.e.na(5 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD2", c.e.d.FLOAT, 2),
            q = new c.e.na(7 * Float32Array.BYTES_PER_ELEMENT,
              "TEXCOORD3", c.e.d.FLOAT, 2),
            r = new c.e.na(9 * Float32Array.BYTES_PER_ELEMENT, "TEXCOORD4", c.e.d.FLOAT, 2);
          s.vb = [n, y, w, t, q, r]
        }
        s.aa = f * Float32Array.BYTES_PER_ELEMENT;
        f = new d.Pd(a[0], s);
        n = new d.ca(k, l);
        n.Ke(c.e.ca.Rc[c.e.ca.Ff]);
        n.xe(e, [f]);
        n.we(b[0]);
        m[0] = n;
        1 < a.length && (f = new d.Pd(a[1], s), n = new d.ca(k, l), n.Ke(c.e.ca.Rc[c.e.ca.Ff]), n.xe(e, [f]), n.we(b[1]), m[1] = n);
        2 < a.length && (a = new d.Pd(a[2], s), k = new d.ca(k, l), k.Ke(c.e.ca.Rc[c.e.ca.Ff]), k.xe(e, [a]), k.we(b[2]), m[2] = k);
        return m
      };
      b.prototype.Xk = function (a, b, d) {
        var e =
          new c.c.k(b.left, b.top),
          f = new c.c.k(b.left + b.width, b.top),
          l = new c.c.k(b.left + b.width, b.top + b.height);
        b = new c.c.k(b.left, b.top + b.height);
        var s = new c.c.k((e.x + f.x + b.x) / 3, (e.y + f.y + b.y) / 3),
          m = new c.c.k((l.x + f.x + b.x) / 3, (l.y + f.y + b.y) / 3),
          n = new c.c.k(e.x - 1, e.y),
          y = new c.c.k(b.x - 1, b.y),
          w = new c.c.k(e.x, e.y - 1),
          t = new c.c.k(f.x, f.y - 1),
          q = new c.c.k(f.x + 1, f.y),
          r = new c.c.k(l.x + 1, l.y),
          u = new c.c.k(b.x, b.y + 1),
          A = new c.c.k(l.x, l.y + 1),
          C = d.J(e),
          v = d.J(f),
          x = d.J(l),
          B = d.J(b),
          I = d.J(s),
          K = d.J(m),
          T = d.J(n),
          X = d.J(y),
          U = d.J(w),
          L = d.J(t),
          R = d.J(q),
          H = d.J(r),
          F = d.J(u),
          W = d.J(A),
          J = Math.min(C.x, v.x, x.x, B.x),
          M = Math.min(C.y, v.y, x.y, B.y),
          O = Math.max(C.x, v.x, x.x, B.x) - J,
          E = Math.max(C.y, v.y, x.y, B.y) - M,
          G = J - Math.floor(J),
          D = M - Math.floor(M);
        C.x = (C.x - J + G) / O;
        C.y = (C.y - M + D) / E;
        v.x = (v.x - J + G) / O;
        v.y = (v.y - M + D) / E;
        x.x = (x.x - J + G) / O;
        x.y = (x.y - M + D) / E;
        B.x = (B.x - J + G) / O;
        B.y = (B.y - M + D) / E;
        I.x = (I.x - J + G) / O;
        I.y = (I.y - M + D) / E;
        K.x = (K.x - J + G) / O;
        K.y = (K.y - M + D) / E;
        T.x = (T.x - J + G) / O;
        T.y = (T.y - M + D) / E;
        X.x = (X.x - J + G) / O;
        X.y = (X.y - M + D) / E;
        U.x = (U.x - J + G) / O;
        U.y = (U.y - M + D) / E;
        L.x = (L.x - J + G) / O;
        L.y = (L.y -
          M + D) / E;
        R.x = (R.x - J + G) / O;
        R.y = (R.y - M + D) / E;
        H.x = (H.x - J + G) / O;
        H.y = (H.y - M + D) / E;
        F.x = (F.x - J + G) / O;
        F.y = (F.y - M + D) / E;
        W.x = (W.x - J + G) / O;
        W.y = (W.y - M + D) / E;
        d.translate(-J, -M);
        7 === a ? (a = new Float32Array([b.x, b.y, 0, 1, 1E4, B.x, B.y, s.x, s.y, 0, 1, 1E4, I.x, I.y, f.x, f.y, 0, 1, 1E4, v.x, v.y, b.x, b.y, 0, 1, 1E4, B.x, B.y, m.x, m.y, 0, 1, 1E4, K.x, K.y, f.x, f.y, 0, 1, 1E4, v.x, v.y]), d = new Uint16Array([0, 1, 2, 3, 4, 5]), s = new Float32Array([b.x, b.y, 0, 0, 1, B.x, B.y, e.x, e.y, 0, 0, 1, C.x, C.y, s.x, s.y, 0, 1, 1, I.x, I.y, e.x, e.y, 0, 0, 1, C.x, C.y, s.x, s.y, 0, 1, 1, I.x, I.y, f.x, f.y, 0, 0,
          1, v.x, v.y, f.x, f.y, 0, 0, 1, v.x, v.y, m.x, m.y, 0, 1, 1, K.x, K.y, l.x, l.y, 0, 0, 1, x.x, x.y, l.x, l.y, 0, 0, 1, x.x, x.y, m.x, m.y, 0, 1, 1, K.x, K.y, b.x, b.y, 0, 0, 1, B.x, B.y
        ]), m = new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), e = new Float32Array([n.x, n.y, 0, 1, -1, T.x, T.y, e.x, e.y, 0, 0, -1, C.x, C.y, b.x, b.y, 0, 0, -1, B.x, B.y, y.x, y.y, 0, 1, -1, X.x, X.y, n.x, n.y, 0, 1, -1, T.x, T.y, b.x, b.y, 0, 0, -1, B.x, B.y, w.x, w.y, 0, 1, -1, U.x, U.y, e.x, e.y, 0, 0, -1, C.x, C.y, f.x, f.y, 0, 0, -1, v.x, v.y, t.x, t.y, 0, 1, -1, L.x, L.y, w.x, w.y, 0, 1, -1, U.x, U.y, f.x, f.y, 0, 0, -1, v.x, v.y, q.x, q.y, 0, 1, -1,
          R.x, R.y, f.x, f.y, 0, 0, -1, v.x, v.y, r.x, r.y, 0, 1, -1, x.x, x.y, r.x, r.y, 0, 1, -1, H.x, H.y, l.x, l.y, 0, 0, -1, x.x, x.y, f.x, f.y, 0, 0, -1, v.x, v.y, u.x, u.y, 0, 1, -1, F.x, F.y, b.x, b.y, 0, 0, -1, B.x, B.y, l.x, l.y, 0, 0, -1, x.x, x.y, A.x, A.y, 0, 1, -1, W.x, W.y, u.x, u.y, 0, 1, -1, F.x, F.y, l.x, l.y, 0, 0, -1, x.x, x.y
        ])) : (a = new Float32Array([b.x, b.y, 0, 1, 1E4, B.x, B.y, 0, 0, 0, 0, s.x, s.y, 0, 1, 1E4, I.x, I.y, 0, 0, 0, 0, f.x, f.y, 0, 1, 1E4, v.x, v.y, 0, 0, 0, 0, b.x, b.y, 0, 1, 1E4, B.x, B.y, 0, 0, 0, 0, m.x, m.y, 0, 1, 1E4, K.x, K.y, 0, 0, 0, 0, f.x, f.y, 0, 1, 1E4, v.x, v.y, 0, 0, 0, 0]), d = new Uint16Array([0, 1,
          2, 3, 4, 5
        ]), s = new Float32Array([b.x, b.y, 0, 0, 1, B.x, B.y, 0, 0, 0, 0, e.x, e.y, 0, 0, 1, C.x, C.y, 0, 0, 0, 0, s.x, s.y, 0, 1, 1, I.x, I.y, 0, 0, 0, 0, e.x, e.y, 0, 0, 1, C.x, C.y, 0, 0, 0, 0, s.x, s.y, 0, 1, 1, I.x, I.y, 0, 0, 0, 0, f.x, f.y, 0, 0, 1, v.x, v.y, 0, 0, 0, 0, f.x, f.y, 0, 0, 1, v.x, v.y, 0, 0, 0, 0, m.x, m.y, 0, 1, 1, K.x, K.y, 0, 0, 0, 0, l.x, l.y, 0, 0, 1, x.x, x.y, 0, 0, 0, 0, l.x, l.y, 0, 0, 1, x.x, x.y, 0, 0, 0, 0, m.x, m.y, 0, 1, 1, K.x, K.y, 0, 0, 0, 0, b.x, b.y, 0, 0, 1, B.x, B.y, 0, 0, 0, 0]), m = new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), e = new Float32Array([n.x, n.y, 0, 1, -1, T.x, T.y, 0, 0, 0, 0, e.x, e.y, 0, 0, -1, C.x, C.y, 0, 0, 0, 0, b.x, b.y, 0, 0, -1, B.x, B.y, 0, 0, 0, 0, y.x, y.y, 0, 1, -1, X.x, X.y, 0, 0, 0, 0, n.x, n.y, 0, 1, -1, T.x, T.y, 0, 0, 0, 0, b.x, b.y, 0, 0, -1, B.x, B.y, 0, 0, 0, 0, w.x, w.y, 0, 1, -1, U.x, U.y, 0, 0, 0, 0, e.x, e.y, 0, 0, -1, C.x, C.y, 0, 0, 0, 0, f.x, f.y, 0, 0, -1, v.x, v.y, 0, 0, 0, 0, t.x, t.y, 0, 1, -1, L.x, L.y, 0, 0, 0, 0, w.x, w.y, 0, 1, -1, U.x, U.y, 0, 0, 0, 0, f.x, f.y, 0, 0, -1, v.x, v.y, 0, 0, 0, 0, q.x, q.y, 0, 1, -1, R.x, R.y, 0, 0, 0, 0, f.x, f.y, 0, 0, -1, v.x, v.y, 0, 0, 0, 0, r.x, r.y, 0, 1, -1, x.x, x.y, 0, 0, 0, 0, r.x, r.y, 0, 1, -1, H.x, H.y, 0, 0, 0, 0, l.x, l.y, 0, 0, -1, x.x, x.y, 0, 0, 0, 0, f.x, f.y, 0, 0, -1, v.x,
          v.y, 0, 0, 0, 0, u.x, u.y, 0, 1, -1, F.x, F.y, 0, 0, 0, 0, b.x, b.y, 0, 0, -1, B.x, B.y, 0, 0, 0, 0, l.x, l.y, 0, 0, -1, x.x, x.y, 0, 0, 0, 0, A.x, A.y, 0, 1, -1, W.x, W.y, 0, 0, 0, 0, u.x, u.y, 0, 1, -1, F.x, F.y, 0, 0, 0, 0, l.x, l.y, 0, 0, -1, x.x, x.y, 0, 0, 0, 0
        ]));
        f = new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
        return {
          ba: [a, s, e],
          Ma: [d, m, f]
        }
      };
      return b
    }();
    d.xk = f
  })(c.e || (c.e = {}))
})(N || (N = {}));
(function (c) {
  var d = function () {
    function c(b, a, d) {
      this.a = b;
      this.T = a;
      this.nd = this.Pi = void 0;
      this.Ac = d;
      this.I = void 0
    }
    c.prototype.Gn = g("Pi");
    c.prototype.Jn = g("nd");
    c.prototype.Kn = g("I");
    c.prototype.dh = z("I");
    return c
  }();
  c.nk = d
})(N || (N = {}));
(function (c) {
  (function (d) {
    var f = function () {
      function b() {
        this.jg = this.Mi = 0;
        this.od = [];
        this.$c = []
      }
      b.prototype.kn = function (a, c, d) {
        !1 !== this.cf(a) && (0 < d && d--, d = {
          loop: d
        }, c === b.Sh ? (a = this.zi(a, c), a.play(d)) : c === b.Th ? this.gl(a) || (a = this.zi(a, c), a.play(d)) : c === b.uk && this.Kl(a))
      };
      b.prototype.tn = function (a, b) {
        this.Mi = a.length;
        this.Ni = b;
        this.nb = a;
        this.kl(c.l.U.bind(this, "_scriptLoadedCBK"))
      };
      b.prototype.s = function () {
        createjs.Sound.removeAllSounds();
        this.nb && delete this.nb;
        this.$c && delete this.$c;
        this.od && delete this.od
      };
      b.prototype.lg = function (a) {
        for (var b = 0; b < this.$c.length; b++)
          if (this.$c[b].soundId === a) return this.$c[b].instances
      };
      b.prototype.mg = function (a) {
        for (var b = 0; b < this.od.length; b++)
          if (this.od[b].soundId === a) return this.od[b].instance
      };
      b.prototype.zi = function (a, c) {
        var d;
        if (c === b.Sh) {
          var e = this.lg(a);
          if (void 0 !== e) {
            for (d = 0; d < e.length; d++)
              if (!this.ee(e[d])) return e[d];
            d = createjs.Sound.createInstance(a);
            e.push(d)
          } else e = [], d = createjs.Sound.createInstance(a), e.push(d), this.$c.push({
            soundId: a,
            instances: e
          })
        } else if (c ===
          b.Th) {
          if (d = this.mg(a)) return d;
          d = createjs.Sound.createInstance(a);
          this.od.push({
            soundId: a,
            instance: d
          })
        }
        return d
      };
      b.prototype.ee = function (a) {
        return a.playState === createjs.Sound.PLAY_SUCCEEDED || a.playState === createjs.Sound.PLAY_INITED ? !0 : !1
      };
      b.prototype.gl = function (a) {
        var b = this.mg(a);
        if (b && this.ee(b)) return !0;
        a = this.lg(a);
        if (void 0 !== a)
          for (b = 0; b < a.length; b++)
            if (this.ee(a[b])) return !0;
        return !1
      };
      b.prototype.Kl = function (a) {
        var b = this.lg(a);
        if (void 0 !== b)
          for (var c = 0; c < b.length; c++) this.ee(b[c]) && b[c].stop();
        (a = this.mg(a)) && this.ee(a) && a.stop()
      };
      b.prototype.cf = function (a) {
        for (var b = 0; b < this.nb.length; b++)
          if (this.nb[b].i().toString() === a) return this.nb[b].cf;
        return !1
      };
      b.prototype.Il = function () {
        0 === --this.Mi - this.jg && this.Ni()
      };
      b.prototype.kl = function (a) {
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.readyState ? b.onreadystatechange = function () {
          if ("loaded" == b.readyState || "complete" == b.readyState) b.onreadystatechange = null, a()
        } : b.onload = function () {
          a()
        };
        b.src = "libs/soundjs-0.5.2.min.js";
        document.getElementsByTagName("head")[0].appendChild(b)
      };
      b.prototype.Cl = function () {
        createjs.Sound.addEventListener("fileload", c.l.U.bind(this, "_soundLoadedCBK"));
        for (var a = 0; a < this.nb.length; a++) createjs.Sound.registerSound(this.nb[a].Jl, this.nb[a].i().toString()) ? this.nb[a].Bn() : this.jg++;
        this.jg === this.nb.length && this.Ni()
      };
      b.Sh = 0;
      b.Th = 1;
      b.uk = 2;
      return b
    }();
    d.Nd = f
  })(c.media || (c.media = {}))
})(N || (N = {}));
N.media.Nd.prototype._scriptLoadedCBK = N.media.Nd.prototype.Cl;
N.media.Nd.prototype._soundLoadedCBK = N.media.Nd.prototype.Il;
(function (c) {
  (function (d) {
    var f = function () {
      function b(a, b) {
        this.hb = a;
        this.pl = b
      }
      b.prototype.dm = function (a) {
        a = this.hb.T.Am(a);
        return void 0 === a || a.fl ? void 0 : this.Yg(a.i(), -1)
      };
      b.prototype.kj = function (a, b) {
        var d = new c.g.G;
        d.Of(this.hb.T.Bd(a));
        d.Lf(b);
        return d
      };
      b.prototype.Yg = function (a, b) {
        var d = new c.g.j;
        d.Dn(this.hb);
        void 0 !== a && d.Of(this.hb.T.zf(a));
        d.Lf(b);
        return d
      };
      b.prototype.rm = function () {
        return this.pl++
      };
      return b
    }();
    d.Qe = f
  })(c.g || (c.g = {}))
})(N || (N = {}));
window.flwebgl = N;
N.sg = N.g;
N.g.SceneGraphFactory = N.g.Qe;
N.g.Qe.prototype.createMovieClipInstance = N.g.Qe.prototype.dm;
(function (c) {
  var d = function () {
    function d() {
      this.Ta = new c.l.tk;
      this.qg = c.l.U.bind(this, "_loop");
      this.Jg = d.Rh;
      this.$e = void 0;
      this.Yi = 550;
      this.Xi = 400;
      this.hd = [];
      this.rc = -1;
      this.jd = !0;
      this.li = 0;
      this.Vi = this.aj = !1
    }
    d.prototype.gh = function (b, a, h, p, e) {
      if (void 0 == b || void 0 == a) return d.Fh;
      void 0 === e && (e = {});
      void 0 === e[d.Fe] && (e[d.Fe] = !1);
      e[d.jh] = !1;
      void 0 === e[d.Lc] && (e[d.Lc] = !0);
      void 0 === e[d.Hd] && (e[d.Hd] = !0);
      void 0 === e[d.Kc] && (e[d.Kc] = d.Bf);
      this.hd = e;
      this.gb = b;
      try {
        this.a = new c.e.Hh(this.gb, e)
      } catch (k) {
        return d.Eh
      }
      this.Ac =
        new c.media.Nd;
      this.hd[d.kh] = !1;
      this.a.Fc("OES_standard_derivatives") || (this.hd[d.kh] = !0);
      this.nd = void 0;
      this.Zf = p;
      this.ge = new c.xj.sk(this.Ta);
      return (b = this.ge.gh(a, h, this.hd)) && void 0 !== b ? (this.hb = new c.nk(this.a, this.Ta, this.Ac), this.Ud = new c.g.Qe(this.hb, this.ge.ac + 1), this.hd[d.Hd] && (this.nd = new c.e.xk(this.a, this.Ta, this.Ud)), this.hb.Gn(this.Ud), this.hb.Jn(this.nd), void 0 !== h && 0 < h.length ? this.a.xh(this.Ta.tj(), c.l.U.bind(this, "_texturesLoadedCBK")) : this.bj(), 0 < this.Ta.rj().length ? this.Ac.tn(this.Ta.rj(),
        c.l.U.bind(this, "_soundsLoadedCBK")) : this.Wi(), this.Te = b.Mn, this.Yi = b.On, this.Xi = b.Nn, this.bd = b.jm, this.Ki = b.loop, this.ke = b.qn, this.a.Wb(this.Te), 0 > this.bd && (this.bd = 1), this.bf = 1E3 / this.bd, this.I = this.Ud.Yg(void 0, -1), this.hb.Kn(this.I), this.I.Cn(this.Ki), d.Uh) : d.Gh
    };
    d.prototype.Oc = function (b) {
      this.a.Oc(b);
      this.a.clear(!0, !0, !1)
    };
    d.prototype.play = function (b) {
      "undefined" === typeof b && (b = void 0);
      var a = 0,
        h = this.jd;
      this.jd = !0;
      if (b && b.length) {
        for (var p = !1, e = 0; e < this.ke.length; e++)
          if (this.Ta.zf(this.ke[e]).getName() ===
            b) {
            a = e;
            p = !0;
            this.jd = !1;
            break
          }
        if (!1 === p) return !1
      }
      this.gb.addEventListener("webglcontextlost", this.Di, !1);
      this.gb.addEventListener("webglcontextrestored", this.Ei, !1);
      this.dc = (new Date).getTime();
      h && this.jd || this.Ri(a, h !== this.jd);
      this.Jg = d.Qh;
      this.xc = c.l.U.requestAnimationFrame(this.qg, this.bd, window);
      return !0
    };
    d.prototype.stop = function () {
      this.Jg = d.Rh
    };
    d.prototype.tm = z("Ud");
    d.prototype.dh = z("I");
    d.prototype.wm = z("Yi");
    d.prototype.vm = z("Xi");
    d.prototype.lc = z("Te");
    d.prototype.flush = function () {
      return void 0 !=
        this.a ? (this.a.flush(), !0) : !1
    };
    d.prototype.Yj = function (b, a) {
      switch (b) {
        case d.Uf:
          this.$e = a
      }
    };
    d.prototype.removeEventListener = function (b) {
      switch (b) {
        case d.Uf:
          this.$e = void 0
      }
    };
    d.prototype.s = function () {
      this.stop();
      this.ge && (this.ge.s(), delete this.ge);
      this.Ta && (this.Ta.s(), delete this.Ta);
      this.a && (this.a.s(), delete this.a);
      this.I && (this.I.s(), delete this.I);
      this.Ac && (this.Ac.s(), delete this.Ac);
      delete this.Ud
    };
    d.prototype.bj = function () {
      this.a.O();
      this.aj = !0;
      this.pi()
    };
    d.prototype.Wi = function () {
      this.Vi = !0;
      this.pi()
    };
    d.prototype.pi = function () {
      this.Zf && (this.aj && this.Vi) && (this.Zf(), this.Zf = void 0)
    };
    d.prototype.Di = function (b) {
      b.preventDefault()
    };
    d.prototype.Ei = function () {
      this.play()
    };
    d.prototype.Al = function () {
      var b;
      "undefined" === typeof b && (b = !1);
      b && (this.stop(), this.rc = -1);
      if (this.I)
        for (b = this.I.Ad() - 1; 0 <= b; --b) {
          var a = this.I.ia(b);
          this.I.Ge(b);
          a.s()
        }
    };
    d.prototype.ff = function () {
      try {
        if (this.Jg !== d.Qh) this.gb.removeEventListener("webglcontextlost", this.Di, !1), this.gb.removeEventListener("webglcontextrestored",
          this.Ei, !1), void 0 !== this.xc && (c.l.U.cancelAnimationFrame(this.xc, window), this.xc = void 0), void 0 != this.Lg && window.clearTimeout(this.Lg);
        else {
          this.xc = c.l.U.requestAnimationFrame(this.qg, this.bd, window);
          this.Lg = void 0;
          var b = Math.ceil(1E3 / 60);
          this.Xe == this.Hi && (this.Gk(), this.Xe = (this.Xe + 1) % (this.bd + 1));
          var a = (new Date).getTime() - this.dc;
          this.bf > a && this.bf - a < b ? (this.xc && (c.l.U.cancelAnimationFrame(this.xc, window), this.xc = void 0), this.Lg = window.setTimeout(this.qg, this.bf - a)) : a >= this.bf && (this.Sl(), this.Pk())
        }
      } catch (h) {
        throw c.l.w.error(h.message),
          this.stop(), h;
      }
    };
    d.prototype.Pk = function () {
      this.dc = (new Date).getTime();
      this.me();
      this.a.ij();
      for (var b = this.oa.length, a = 0; a < b; ++a) this.oa[a].He(a / b), this.a.e(this.oa[a], 1);
      this.a.lj();
      void 0 != this.$e && this.$e();
      this.Hi = this.Xe
    };
    d.prototype.me = function () {
      this.a.Wb(this.a.lc());
      this.a.blendFunc(c.e.d.SRC_ALPHA, c.e.d.ONE_MINUS_SRC_ALPHA);
      this.a.enable(c.e.d.BLEND);
      this.a.depthFunc(c.e.d.LESS);
      this.a.clearDepth(1);
      this.a.depthMask(!0);
      this.a.xd(!1);
      this.a.clear(!0, !0, !1)
    };
    d.prototype.Gk = function () {
      this.I.Ae() ===
        this.li && this.I.yj() && this.jd && (this.Ki || this.rc !== this.ke.length - 1) && this.Ri((this.rc + 1) % this.ke.length);
      this.I.Ne();
      this.I.yh();
      this.I.Pc();
      this.I.Qf();
      this.I.Rf();
      this.I.Sf()
    };
    d.prototype.Ri = function (b, a) {
      "undefined" === typeof a && (a = !1);
      (a || -1 !== this.rc && this.rc !== b) && this.Al();
      this.Xe = this.Hi = -1;
      if (a || b !== this.rc) {
        var c = this.Ta.zf(this.ke[b]);
        this.I.Of(c);
        this.I.play();
        this.li = c.$d.length
      }
      this.rc = b
    };
    d.prototype.Sl = function () {
      this.I.Ea(void 0, void 0);
      this.hd[d.Hd] && this.nd.Qn();
      this.oa = [];
      this.I.Qb(this.oa)
    };
    d.prototype.getContext = z("hb");
    d.Uh = 0;
    d.fk = 1;
    d.Fh = 2;
    d.Eh = 3;
    d.gk = 4;
    d.Gh = 5;
    d.Fe = c.e.d.Fe;
    d.Kc = c.e.d.Kc;
    d.Lc = c.e.d.Lc;
    d.jh = c.e.d.jh;
    d.Hd = 10;
    d.kh = 11;
    d.Df = c.e.Se.Df;
    d.Cf = c.e.Se.Cf;
    d.Ef = c.e.Se.Ef;
    d.De = c.e.d.De;
    d.Bf = c.e.d.Bf;
    d.Qh = 0;
    d.Rh = 1;
    d.Uf = 0;
    return d
  }();
  c.n = d
})(N || (N = {}));
window.flwebgl = N;
N.Player = N.n;
N.n.prototype.init = N.n.prototype.gh;
N.n.prototype.setViewport = N.n.prototype.Oc;
N.n.prototype.getStageWidth = N.n.prototype.wm;
N.n.prototype.getStageHeight = N.n.prototype.vm;
N.n.prototype.getBackgroundColor = N.n.prototype.lc;
N.n.prototype.play = N.n.prototype.play;
N.n.prototype.stop = N.n.prototype.stop;
N.n.prototype.getScenegraphFactory = N.n.prototype.tm;
N.n.prototype.getStage = N.n.prototype.dh;
N.n.kOption_AAType = N.n.Kc;
N.n.kOption_Caching = N.n.Lc;
N.n.kOption_CacheAsBitmap = N.n.Hd;
N.n.kAAType_MSAA = N.n.De;
N.n.kAAType_ImageSpace = N.n.Bf;
N.n.S_OK = N.n.Uh;
N.n.E_ERR = N.n.fk;
N.n.E_INVALID_PARAM = N.n.Fh;
N.n.E_CONTEXT_CREATION_FAILED = N.n.Eh;
N.n.E_REQUIRED_EXTENSION_NOT_PRESENT = N.n.gk;
N.n.E_RESOURCE_LOADING_FAILED = N.n.Gh;
N.n.prototype._loop = N.n.prototype.ff;
N.n.prototype._texturesLoadedCBK = N.n.prototype.bj;
N.n.prototype._soundsLoadedCBK = N.n.prototype.Wi;
N.n.prototype.flush = N.n.prototype.flush;
N.n.prototype.setEventListener = N.n.prototype.Yj;
N.n.prototype.removeEventListener = N.n.prototype.removeEventListener;
N.n.FRAME_RENDER = N.n.Uf;
//@ sourceMappingURL=flwebgl-0.2.min.map

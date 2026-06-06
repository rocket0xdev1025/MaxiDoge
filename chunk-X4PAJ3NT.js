import { a as An } from "./chunk-4F6IZRL6.js";
import {
  a as Me,
  c as Nm,
  e as Sf,
  f as Se,
  g as rr,
  h as kr,
  i as Je,
  j as Cs,
  l as C,
} from "./chunk-UUTKIRVD.js";
var Pa = {};
rr(Pa, {
  __assign: () => If,
  __asyncDelegator: () => aI,
  __asyncGenerator: () => oI,
  __asyncValues: () => cI,
  __await: () => Oa,
  __awaiter: () => eI,
  __classPrivateFieldGet: () => fI,
  __classPrivateFieldSet: () => dI,
  __createBinding: () => rI,
  __decorate: () => Qx,
  __exportStar: () => iI,
  __extends: () => Wx,
  __generator: () => tI,
  __importDefault: () => lI,
  __importStar: () => hI,
  __makeTemplateObject: () => uI,
  __metadata: () => Zx,
  __param: () => Xx,
  __read: () => qm,
  __rest: () => Yx,
  __spread: () => nI,
  __spreadArrays: () => sI,
  __values: () => Df,
});
function Wx(r, e) {
  xf(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function Yx(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(r); n < i.length; n++)
      e.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[n]) &&
        (t[i[n]] = r[i[n]]);
  return t;
}
function Qx(r, e, t, i) {
  var n = arguments.length,
    o =
      n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(r, e, t, i);
  else
    for (var l = r.length - 1; l >= 0; l--)
      (c = r[l]) && (o = (n < 3 ? c(o) : n > 3 ? c(e, t, o) : c(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function Xx(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function Zx(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function eI(r, e, t, i) {
  function n(o) {
    return o instanceof t
      ? o
      : new t(function (c) {
          c(o);
        });
  }
  return new (t || (t = Promise))(function (o, c) {
    function l(y) {
      try {
        g(i.next(y));
      } catch (v) {
        c(v);
      }
    }
    function p(y) {
      try {
        g(i.throw(y));
      } catch (v) {
        c(v);
      }
    }
    function g(y) {
      y.done ? o(y.value) : n(y.value).then(l, p);
    }
    g((i = i.apply(r, e || [])).next());
  });
}
function tI(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    o,
    c;
  return (
    (c = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == "function" &&
      (c[Symbol.iterator] = function () {
        return this;
      }),
    c
  );
  function l(g) {
    return function (y) {
      return p([g, y]);
    };
  }
  function p(g) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          n &&
            (o =
              g[0] & 2
                ? n.return
                : g[0]
                ? n.throw || ((o = n.return) && o.call(n), 0)
                : n.next) &&
            !(o = o.call(n, g[1])).done)
        )
          return o;
        switch (((n = 0), o && (g = [g[0] & 2, o.value]), g[0])) {
          case 0:
          case 1:
            o = g;
            break;
          case 4:
            return t.label++, { value: g[1], done: !1 };
          case 5:
            t.label++, (n = g[1]), (g = [0]);
            continue;
          case 7:
            (g = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((o = t.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (g[0] === 6 || g[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (g[0] === 3 && (!o || (g[1] > o[0] && g[1] < o[3]))) {
              t.label = g[1];
              break;
            }
            if (g[0] === 6 && t.label < o[1]) {
              (t.label = o[1]), (o = g);
              break;
            }
            if (o && t.label < o[2]) {
              (t.label = o[2]), t.ops.push(g);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        g = e.call(r, t);
      } catch (y) {
        (g = [6, y]), (n = 0);
      } finally {
        i = o = 0;
      }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function rI(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function iI(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Df(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function qm(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    n,
    o = [],
    c;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = i.next()).done; ) o.push(n.value);
  } catch (l) {
    c = { error: l };
  } finally {
    try {
      n && !n.done && (t = i.return) && t.call(i);
    } finally {
      if (c) throw c.error;
    }
  }
  return o;
}
function nI() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(qm(arguments[e]));
  return r;
}
function sI() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), n = 0, e = 0; e < t; e++)
    for (var o = arguments[e], c = 0, l = o.length; c < l; c++, n++)
      i[n] = o[c];
  return i;
}
function Oa(r) {
  return this instanceof Oa ? ((this.v = r), this) : new Oa(r);
}
function oI(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    n,
    o = [];
  return (
    (n = {}),
    c("next"),
    c("throw"),
    c("return"),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function c(A) {
    i[A] &&
      (n[A] = function (E) {
        return new Promise(function (P, T) {
          o.push([A, E, P, T]) > 1 || l(A, E);
        });
      });
  }
  function l(A, E) {
    try {
      p(i[A](E));
    } catch (P) {
      v(o[0][3], P);
    }
  }
  function p(A) {
    A.value instanceof Oa
      ? Promise.resolve(A.value.v).then(g, y)
      : v(o[0][2], A);
  }
  function g(A) {
    l("next", A);
  }
  function y(A) {
    l("throw", A);
  }
  function v(A, E) {
    A(E), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function aI(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (n) {
      throw n;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(n, o) {
    e[n] = r[n]
      ? function (c) {
          return (t = !t)
            ? { value: Oa(r[n](c)), done: n === "return" }
            : o
            ? o(c)
            : c;
        }
      : o;
  }
}
function cI(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof Df == "function" ? Df(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(o) {
    t[o] =
      r[o] &&
      function (c) {
        return new Promise(function (l, p) {
          (c = r[o](c)), n(l, p, c.done, c.value);
        });
      };
  }
  function n(o, c, l, p) {
    Promise.resolve(p).then(function (g) {
      o({ value: g, done: l });
    }, c);
  }
}
function uI(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function hI(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function lI(r) {
  return r && r.__esModule ? r : { default: r };
}
function fI(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function dI(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
var xf,
  If,
  Ma = Sf(() => {
    "use strict";
    xf = function (r, e) {
      return (
        (xf =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, i) {
              t.__proto__ = i;
            }) ||
          function (t, i) {
            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
          }),
        xf(r, e)
      );
    };
    If = function () {
      return (
        (If =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        If.apply(this, arguments)
      );
    };
  });
var jm = Se((yu) => {
  "use strict";
  Object.defineProperty(yu, "__esModule", { value: !0 });
  yu.delay = void 0;
  function pI(r) {
    return new Promise((e) => {
      setTimeout(() => {
        e(!0);
      }, r);
    });
  }
  yu.delay = pI;
});
var zm = Se((yo) => {
  "use strict";
  Object.defineProperty(yo, "__esModule", { value: !0 });
  yo.ONE_THOUSAND = yo.ONE_HUNDRED = void 0;
  yo.ONE_HUNDRED = 100;
  yo.ONE_THOUSAND = 1e3;
});
var km = Se((me) => {
  "use strict";
  Object.defineProperty(me, "__esModule", { value: !0 });
  me.ONE_YEAR =
    me.FOUR_WEEKS =
    me.THREE_WEEKS =
    me.TWO_WEEKS =
    me.ONE_WEEK =
    me.THIRTY_DAYS =
    me.SEVEN_DAYS =
    me.FIVE_DAYS =
    me.THREE_DAYS =
    me.ONE_DAY =
    me.TWENTY_FOUR_HOURS =
    me.TWELVE_HOURS =
    me.SIX_HOURS =
    me.THREE_HOURS =
    me.ONE_HOUR =
    me.SIXTY_MINUTES =
    me.THIRTY_MINUTES =
    me.TEN_MINUTES =
    me.FIVE_MINUTES =
    me.ONE_MINUTE =
    me.SIXTY_SECONDS =
    me.THIRTY_SECONDS =
    me.TEN_SECONDS =
    me.FIVE_SECONDS =
    me.ONE_SECOND =
      void 0;
  me.ONE_SECOND = 1;
  me.FIVE_SECONDS = 5;
  me.TEN_SECONDS = 10;
  me.THIRTY_SECONDS = 30;
  me.SIXTY_SECONDS = 60;
  me.ONE_MINUTE = me.SIXTY_SECONDS;
  me.FIVE_MINUTES = me.ONE_MINUTE * 5;
  me.TEN_MINUTES = me.ONE_MINUTE * 10;
  me.THIRTY_MINUTES = me.ONE_MINUTE * 30;
  me.SIXTY_MINUTES = me.ONE_MINUTE * 60;
  me.ONE_HOUR = me.SIXTY_MINUTES;
  me.THREE_HOURS = me.ONE_HOUR * 3;
  me.SIX_HOURS = me.ONE_HOUR * 6;
  me.TWELVE_HOURS = me.ONE_HOUR * 12;
  me.TWENTY_FOUR_HOURS = me.ONE_HOUR * 24;
  me.ONE_DAY = me.TWENTY_FOUR_HOURS;
  me.THREE_DAYS = me.ONE_DAY * 3;
  me.FIVE_DAYS = me.ONE_DAY * 5;
  me.SEVEN_DAYS = me.ONE_DAY * 7;
  me.THIRTY_DAYS = me.ONE_DAY * 30;
  me.ONE_WEEK = me.SEVEN_DAYS;
  me.TWO_WEEKS = me.ONE_WEEK * 2;
  me.THREE_WEEKS = me.ONE_WEEK * 3;
  me.FOUR_WEEKS = me.ONE_WEEK * 4;
  me.ONE_YEAR = me.ONE_DAY * 365;
});
var Rf = Se((vu) => {
  "use strict";
  Object.defineProperty(vu, "__esModule", { value: !0 });
  var Hm = (Ma(), Cs(Pa));
  Hm.__exportStar(zm(), vu);
  Hm.__exportStar(km(), vu);
});
var Vm = Se((vo) => {
  "use strict";
  Object.defineProperty(vo, "__esModule", { value: !0 });
  vo.fromMiliseconds = vo.toMiliseconds = void 0;
  var Km = Rf();
  function gI(r) {
    return r * Km.ONE_THOUSAND;
  }
  vo.toMiliseconds = gI;
  function mI(r) {
    return Math.floor(r / Km.ONE_THOUSAND);
  }
  vo.fromMiliseconds = mI;
});
var $m = Se((wu) => {
  "use strict";
  Object.defineProperty(wu, "__esModule", { value: !0 });
  var Gm = (Ma(), Cs(Pa));
  Gm.__exportStar(jm(), wu);
  Gm.__exportStar(Vm(), wu);
});
var Jm = Se((Na) => {
  "use strict";
  Object.defineProperty(Na, "__esModule", { value: !0 });
  Na.Watch = void 0;
  var bu = class {
    constructor() {
      this.timestamps = new Map();
    }
    start(e) {
      if (this.timestamps.has(e))
        throw new Error(`Watch already started for label: ${e}`);
      this.timestamps.set(e, { started: Date.now() });
    }
    stop(e) {
      let t = this.get(e);
      if (typeof t.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${e}`);
      let i = Date.now() - t.started;
      this.timestamps.set(e, { started: t.started, elapsed: i });
    }
    get(e) {
      let t = this.timestamps.get(e);
      if (typeof t > "u") throw new Error(`No timestamp found for label: ${e}`);
      return t;
    }
    elapsed(e) {
      let t = this.get(e);
      return t.elapsed || Date.now() - t.started;
    }
  };
  Na.Watch = bu;
  Na.default = bu;
});
var Wm = Se((_u) => {
  "use strict";
  Object.defineProperty(_u, "__esModule", { value: !0 });
  _u.IWatch = void 0;
  var Cf = class {};
  _u.IWatch = Cf;
});
var Ym = Se((Of) => {
  "use strict";
  Object.defineProperty(Of, "__esModule", { value: !0 });
  var yI = (Ma(), Cs(Pa));
  yI.__exportStar(Wm(), Of);
});
var bo = Se((wo) => {
  "use strict";
  Object.defineProperty(wo, "__esModule", { value: !0 });
  var Eu = (Ma(), Cs(Pa));
  Eu.__exportStar($m(), wo);
  Eu.__exportStar(Jm(), wo);
  Eu.__exportStar(Ym(), wo);
  Eu.__exportStar(Rf(), wo);
});
var Pf = Se((Rt) => {
  "use strict";
  Object.defineProperty(Rt, "__esModule", { value: !0 });
  Rt.getLocalStorage =
    Rt.getLocalStorageOrThrow =
    Rt.getCrypto =
    Rt.getCryptoOrThrow =
    Rt.getLocation =
    Rt.getLocationOrThrow =
    Rt.getNavigator =
    Rt.getNavigatorOrThrow =
    Rt.getDocument =
    Rt.getDocumentOrThrow =
    Rt.getFromWindowOrThrow =
    Rt.getFromWindow =
      void 0;
  function Os(r) {
    let e;
    return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
  }
  Rt.getFromWindow = Os;
  function _o(r) {
    let e = Os(r);
    if (!e) throw new Error(`${r} is not defined in Window`);
    return e;
  }
  Rt.getFromWindowOrThrow = _o;
  function vI() {
    return _o("document");
  }
  Rt.getDocumentOrThrow = vI;
  function wI() {
    return Os("document");
  }
  Rt.getDocument = wI;
  function bI() {
    return _o("navigator");
  }
  Rt.getNavigatorOrThrow = bI;
  function _I() {
    return Os("navigator");
  }
  Rt.getNavigator = _I;
  function EI() {
    return _o("location");
  }
  Rt.getLocationOrThrow = EI;
  function AI() {
    return Os("location");
  }
  Rt.getLocation = AI;
  function SI() {
    return _o("crypto");
  }
  Rt.getCryptoOrThrow = SI;
  function xI() {
    return Os("crypto");
  }
  Rt.getCrypto = xI;
  function II() {
    return _o("localStorage");
  }
  Rt.getLocalStorageOrThrow = II;
  function DI() {
    return Os("localStorage");
  }
  Rt.getLocalStorage = DI;
});
var Xm = Se((Au) => {
  "use strict";
  Object.defineProperty(Au, "__esModule", { value: !0 });
  Au.getWindowMetadata = void 0;
  var Qm = Pf();
  function RI() {
    let r, e;
    try {
      (r = Qm.getDocumentOrThrow()), (e = Qm.getLocationOrThrow());
    } catch {
      return null;
    }
    function t() {
      let v = r.getElementsByTagName("link"),
        A = [];
      for (let E = 0; E < v.length; E++) {
        let P = v[E],
          T = P.getAttribute("rel");
        if (T && T.toLowerCase().indexOf("icon") > -1) {
          let L = P.getAttribute("href");
          if (L)
            if (
              L.toLowerCase().indexOf("https:") === -1 &&
              L.toLowerCase().indexOf("http:") === -1 &&
              L.indexOf("//") !== 0
            ) {
              let H = e.protocol + "//" + e.host;
              if (L.indexOf("/") === 0) H += L;
              else {
                let Q = e.pathname.split("/");
                Q.pop();
                let J = Q.join("/");
                H += J + "/" + L;
              }
              A.push(H);
            } else if (L.indexOf("//") === 0) {
              let H = e.protocol + L;
              A.push(H);
            } else A.push(L);
        }
      }
      return A;
    }
    function i(...v) {
      let A = r.getElementsByTagName("meta");
      for (let E = 0; E < A.length; E++) {
        let P = A[E],
          T = ["itemprop", "property", "name"]
            .map((L) => P.getAttribute(L))
            .filter((L) => (L ? v.includes(L) : !1));
        if (T.length && T) {
          let L = P.getAttribute("content");
          if (L) return L;
        }
      }
      return "";
    }
    function n() {
      let v = i("name", "og:site_name", "og:title", "twitter:title");
      return v || (v = r.title), v;
    }
    function o() {
      return i(
        "description",
        "og:description",
        "twitter:description",
        "keywords"
      );
    }
    let c = n(),
      l = o(),
      p = e.origin,
      g = t();
    return { description: l, url: p, icons: g, name: c };
  }
  Au.getWindowMetadata = RI;
});
var ey = Se((RL, Zm) => {
  "use strict";
  Zm.exports = (r) =>
    encodeURIComponent(r).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    );
});
var sy = Se((CL, ny) => {
  "use strict";
  var iy = "%[a-f0-9]{2}",
    ty = new RegExp("(" + iy + ")|([^%]+?)", "gi"),
    ry = new RegExp("(" + iy + ")+", "gi");
  function Mf(r, e) {
    try {
      return [decodeURIComponent(r.join(""))];
    } catch {}
    if (r.length === 1) return r;
    e = e || 1;
    var t = r.slice(0, e),
      i = r.slice(e);
    return Array.prototype.concat.call([], Mf(t), Mf(i));
  }
  function CI(r) {
    try {
      return decodeURIComponent(r);
    } catch {
      for (var e = r.match(ty) || [], t = 1; t < e.length; t++)
        (r = Mf(e, t).join("")), (e = r.match(ty) || []);
      return r;
    }
  }
  function OI(r) {
    for (
      var e = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" },
        t = ry.exec(r);
      t;

    ) {
      try {
        e[t[0]] = decodeURIComponent(t[0]);
      } catch {
        var i = CI(t[0]);
        i !== t[0] && (e[t[0]] = i);
      }
      t = ry.exec(r);
    }
    e["%C2"] = "\uFFFD";
    for (var n = Object.keys(e), o = 0; o < n.length; o++) {
      var c = n[o];
      r = r.replace(new RegExp(c, "g"), e[c]);
    }
    return r;
  }
  ny.exports = function (r) {
    if (typeof r != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof r + "`"
      );
    try {
      return (r = r.replace(/\+/g, " ")), decodeURIComponent(r);
    } catch {
      return OI(r);
    }
  };
});
var ay = Se((OL, oy) => {
  "use strict";
  oy.exports = (r, e) => {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [r];
    let t = r.indexOf(e);
    return t === -1 ? [r] : [r.slice(0, t), r.slice(t + e.length)];
  };
});
var uy = Se((PL, cy) => {
  "use strict";
  cy.exports = function (r, e) {
    for (
      var t = {}, i = Object.keys(r), n = Array.isArray(e), o = 0;
      o < i.length;
      o++
    ) {
      var c = i[o],
        l = r[c];
      (n ? e.indexOf(c) !== -1 : e(c, l, r)) && (t[c] = l);
    }
    return t;
  };
});
var yy = Se((Pr) => {
  "use strict";
  var PI = ey(),
    MI = sy(),
    ly = ay(),
    NI = uy(),
    TI = (r) => r == null,
    Nf = Symbol("encodeFragmentIdentifier");
  function FI(r) {
    switch (r.arrayFormat) {
      case "index":
        return (e) => (t, i) => {
          let n = t.length;
          return i === void 0 ||
            (r.skipNull && i === null) ||
            (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, [kt(e, r), "[", n, "]"].join("")]
            : [...t, [kt(e, r), "[", kt(n, r), "]=", kt(i, r)].join("")];
        };
      case "bracket":
        return (e) => (t, i) =>
          i === void 0 ||
          (r.skipNull && i === null) ||
          (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, [kt(e, r), "[]"].join("")]
            : [...t, [kt(e, r), "[]=", kt(i, r)].join("")];
      case "colon-list-separator":
        return (e) => (t, i) =>
          i === void 0 ||
          (r.skipNull && i === null) ||
          (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, [kt(e, r), ":list="].join("")]
            : [...t, [kt(e, r), ":list=", kt(i, r)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        let e = r.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (t) => (i, n) =>
          n === void 0 ||
          (r.skipNull && n === null) ||
          (r.skipEmptyString && n === "")
            ? i
            : ((n = n === null ? "" : n),
              i.length === 0
                ? [[kt(t, r), e, kt(n, r)].join("")]
                : [[i, kt(n, r)].join(r.arrayFormatSeparator)]);
      }
      default:
        return (e) => (t, i) =>
          i === void 0 ||
          (r.skipNull && i === null) ||
          (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, kt(e, r)]
            : [...t, [kt(e, r), "=", kt(i, r)].join("")];
    }
  }
  function LI(r) {
    let e;
    switch (r.arrayFormat) {
      case "index":
        return (t, i, n) => {
          if (
            ((e = /\[(\d*)\]$/.exec(t)), (t = t.replace(/\[\d*\]$/, "")), !e)
          ) {
            n[t] = i;
            return;
          }
          n[t] === void 0 && (n[t] = {}), (n[t][e[1]] = i);
        };
      case "bracket":
        return (t, i, n) => {
          if (((e = /(\[\])$/.exec(t)), (t = t.replace(/\[\]$/, "")), !e)) {
            n[t] = i;
            return;
          }
          if (n[t] === void 0) {
            n[t] = [i];
            return;
          }
          n[t] = [].concat(n[t], i);
        };
      case "colon-list-separator":
        return (t, i, n) => {
          if (((e = /(:list)$/.exec(t)), (t = t.replace(/:list$/, "")), !e)) {
            n[t] = i;
            return;
          }
          if (n[t] === void 0) {
            n[t] = [i];
            return;
          }
          n[t] = [].concat(n[t], i);
        };
      case "comma":
      case "separator":
        return (t, i, n) => {
          let o = typeof i == "string" && i.includes(r.arrayFormatSeparator),
            c =
              typeof i == "string" &&
              !o &&
              Sn(i, r).includes(r.arrayFormatSeparator);
          i = c ? Sn(i, r) : i;
          let l =
            o || c
              ? i.split(r.arrayFormatSeparator).map((p) => Sn(p, r))
              : i === null
              ? i
              : Sn(i, r);
          n[t] = l;
        };
      case "bracket-separator":
        return (t, i, n) => {
          let o = /(\[\])$/.test(t);
          if (((t = t.replace(/\[\]$/, "")), !o)) {
            n[t] = i && Sn(i, r);
            return;
          }
          let c =
            i === null
              ? []
              : i.split(r.arrayFormatSeparator).map((l) => Sn(l, r));
          if (n[t] === void 0) {
            n[t] = c;
            return;
          }
          n[t] = [].concat(n[t], c);
        };
      default:
        return (t, i, n) => {
          if (n[t] === void 0) {
            n[t] = i;
            return;
          }
          n[t] = [].concat(n[t], i);
        };
    }
  }
  function fy(r) {
    if (typeof r != "string" || r.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function kt(r, e) {
    return e.encode ? (e.strict ? PI(r) : encodeURIComponent(r)) : r;
  }
  function Sn(r, e) {
    return e.decode ? MI(r) : r;
  }
  function dy(r) {
    return Array.isArray(r)
      ? r.sort()
      : typeof r == "object"
      ? dy(Object.keys(r))
          .sort((e, t) => Number(e) - Number(t))
          .map((e) => r[e])
      : r;
  }
  function py(r) {
    let e = r.indexOf("#");
    return e !== -1 && (r = r.slice(0, e)), r;
  }
  function BI(r) {
    let e = "",
      t = r.indexOf("#");
    return t !== -1 && (e = r.slice(t)), e;
  }
  function gy(r) {
    r = py(r);
    let e = r.indexOf("?");
    return e === -1 ? "" : r.slice(e + 1);
  }
  function hy(r, e) {
    return (
      e.parseNumbers &&
      !Number.isNaN(Number(r)) &&
      typeof r == "string" &&
      r.trim() !== ""
        ? (r = Number(r))
        : e.parseBooleans &&
          r !== null &&
          (r.toLowerCase() === "true" || r.toLowerCase() === "false") &&
          (r = r.toLowerCase() === "true"),
      r
    );
  }
  function my(r, e) {
    (e = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      e
    )),
      fy(e.arrayFormatSeparator);
    let t = LI(e),
      i = Object.create(null);
    if (typeof r != "string" || ((r = r.trim().replace(/^[?#&]/, "")), !r))
      return i;
    for (let n of r.split("&")) {
      if (n === "") continue;
      let [o, c] = ly(e.decode ? n.replace(/\+/g, " ") : n, "=");
      (c =
        c === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat)
          ? c
          : Sn(c, e)),
        t(Sn(o, e), c, i);
    }
    for (let n of Object.keys(i)) {
      let o = i[n];
      if (typeof o == "object" && o !== null)
        for (let c of Object.keys(o)) o[c] = hy(o[c], e);
      else i[n] = hy(o, e);
    }
    return e.sort === !1
      ? i
      : (e.sort === !0
          ? Object.keys(i).sort()
          : Object.keys(i).sort(e.sort)
        ).reduce((n, o) => {
          let c = i[o];
          return (
            c && typeof c == "object" && !Array.isArray(c)
              ? (n[o] = dy(c))
              : (n[o] = c),
            n
          );
        }, Object.create(null));
  }
  Pr.extract = gy;
  Pr.parse = my;
  Pr.stringify = (r, e) => {
    if (!r) return "";
    (e = Object.assign(
      {
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
      },
      e
    )),
      fy(e.arrayFormatSeparator);
    let t = (c) =>
        (e.skipNull && TI(r[c])) || (e.skipEmptyString && r[c] === ""),
      i = FI(e),
      n = {};
    for (let c of Object.keys(r)) t(c) || (n[c] = r[c]);
    let o = Object.keys(n);
    return (
      e.sort !== !1 && o.sort(e.sort),
      o
        .map((c) => {
          let l = r[c];
          return l === void 0
            ? ""
            : l === null
            ? kt(c, e)
            : Array.isArray(l)
            ? l.length === 0 && e.arrayFormat === "bracket-separator"
              ? kt(c, e) + "[]"
              : l.reduce(i(c), []).join("&")
            : kt(c, e) + "=" + kt(l, e);
        })
        .filter((c) => c.length > 0)
        .join("&")
    );
  };
  Pr.parseUrl = (r, e) => {
    e = Object.assign({ decode: !0 }, e);
    let [t, i] = ly(r, "#");
    return Object.assign(
      { url: t.split("?")[0] || "", query: my(gy(r), e) },
      e && e.parseFragmentIdentifier && i
        ? { fragmentIdentifier: Sn(i, e) }
        : {}
    );
  };
  Pr.stringifyUrl = (r, e) => {
    e = Object.assign({ encode: !0, strict: !0, [Nf]: !0 }, e);
    let t = py(r.url).split("?")[0] || "",
      i = Pr.extract(r.url),
      n = Pr.parse(i, { sort: !1 }),
      o = Object.assign(n, r.query),
      c = Pr.stringify(o, e);
    c && (c = `?${c}`);
    let l = BI(r.url);
    return (
      r.fragmentIdentifier &&
        (l = `#${e[Nf] ? kt(r.fragmentIdentifier, e) : r.fragmentIdentifier}`),
      `${t}${c}${l}`
    );
  };
  Pr.pick = (r, e, t) => {
    t = Object.assign({ parseFragmentIdentifier: !0, [Nf]: !1 }, t);
    let { url: i, query: n, fragmentIdentifier: o } = Pr.parseUrl(r, t);
    return Pr.stringifyUrl(
      { url: i, query: NI(n, e), fragmentIdentifier: o },
      t
    );
  };
  Pr.exclude = (r, e, t) => {
    let i = Array.isArray(e) ? (n) => !e.includes(n) : (n, o) => !e(n, o);
    return Pr.pick(r, i, t);
  };
});
var vy = Se((Hr) => {
  "use strict";
  Object.defineProperty(Hr, "__esModule", { value: !0 });
  function UI(r, e) {
    var t = (r >>> 16) & 65535,
      i = r & 65535,
      n = (e >>> 16) & 65535,
      o = e & 65535;
    return (i * o + (((t * o + i * n) << 16) >>> 0)) | 0;
  }
  Hr.mul = Math.imul || UI;
  function qI(r, e) {
    return (r + e) | 0;
  }
  Hr.add = qI;
  function jI(r, e) {
    return (r - e) | 0;
  }
  Hr.sub = jI;
  function zI(r, e) {
    return (r << e) | (r >>> (32 - e));
  }
  Hr.rotl = zI;
  function kI(r, e) {
    return (r << (32 - e)) | (r >>> e);
  }
  Hr.rotr = kI;
  function HI(r) {
    return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
  }
  Hr.isInteger = Number.isInteger || HI;
  Hr.MAX_SAFE_INTEGER = 9007199254740991;
  Hr.isSafeInteger = function (r) {
    return (
      Hr.isInteger(r) && r >= -Hr.MAX_SAFE_INTEGER && r <= Hr.MAX_SAFE_INTEGER
    );
  };
});
var Eo = Se((Te) => {
  "use strict";
  Object.defineProperty(Te, "__esModule", { value: !0 });
  var wy = vy();
  function KI(r, e) {
    return e === void 0 && (e = 0), (((r[e + 0] << 8) | r[e + 1]) << 16) >> 16;
  }
  Te.readInt16BE = KI;
  function VI(r, e) {
    return e === void 0 && (e = 0), ((r[e + 0] << 8) | r[e + 1]) >>> 0;
  }
  Te.readUint16BE = VI;
  function GI(r, e) {
    return e === void 0 && (e = 0), (((r[e + 1] << 8) | r[e]) << 16) >> 16;
  }
  Te.readInt16LE = GI;
  function $I(r, e) {
    return e === void 0 && (e = 0), ((r[e + 1] << 8) | r[e]) >>> 0;
  }
  Te.readUint16LE = $I;
  function by(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(2)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 8),
      (e[t + 1] = r >>> 0),
      e
    );
  }
  Te.writeUint16BE = by;
  Te.writeInt16BE = by;
  function _y(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(2)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 0),
      (e[t + 1] = r >>> 8),
      e
    );
  }
  Te.writeUint16LE = _y;
  Te.writeInt16LE = _y;
  function Tf(r, e) {
    return (
      e === void 0 && (e = 0),
      (r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]
    );
  }
  Te.readInt32BE = Tf;
  function Ff(r, e) {
    return (
      e === void 0 && (e = 0),
      ((r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]) >>> 0
    );
  }
  Te.readUint32BE = Ff;
  function Lf(r, e) {
    return (
      e === void 0 && (e = 0),
      (r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]
    );
  }
  Te.readInt32LE = Lf;
  function Bf(r, e) {
    return (
      e === void 0 && (e = 0),
      ((r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]) >>> 0
    );
  }
  Te.readUint32LE = Bf;
  function Su(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(4)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 24),
      (e[t + 1] = r >>> 16),
      (e[t + 2] = r >>> 8),
      (e[t + 3] = r >>> 0),
      e
    );
  }
  Te.writeUint32BE = Su;
  Te.writeInt32BE = Su;
  function xu(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(4)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 0),
      (e[t + 1] = r >>> 8),
      (e[t + 2] = r >>> 16),
      (e[t + 3] = r >>> 24),
      e
    );
  }
  Te.writeUint32LE = xu;
  Te.writeInt32LE = xu;
  function JI(r, e) {
    e === void 0 && (e = 0);
    var t = Tf(r, e),
      i = Tf(r, e + 4);
    return t * 4294967296 + i - (i >> 31) * 4294967296;
  }
  Te.readInt64BE = JI;
  function WI(r, e) {
    e === void 0 && (e = 0);
    var t = Ff(r, e),
      i = Ff(r, e + 4);
    return t * 4294967296 + i;
  }
  Te.readUint64BE = WI;
  function YI(r, e) {
    e === void 0 && (e = 0);
    var t = Lf(r, e),
      i = Lf(r, e + 4);
    return i * 4294967296 + t - (t >> 31) * 4294967296;
  }
  Te.readInt64LE = YI;
  function QI(r, e) {
    e === void 0 && (e = 0);
    var t = Bf(r, e),
      i = Bf(r, e + 4);
    return i * 4294967296 + t;
  }
  Te.readUint64LE = QI;
  function Ey(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(8)),
      t === void 0 && (t = 0),
      Su((r / 4294967296) >>> 0, e, t),
      Su(r >>> 0, e, t + 4),
      e
    );
  }
  Te.writeUint64BE = Ey;
  Te.writeInt64BE = Ey;
  function Ay(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(8)),
      t === void 0 && (t = 0),
      xu(r >>> 0, e, t),
      xu((r / 4294967296) >>> 0, e, t + 4),
      e
    );
  }
  Te.writeUint64LE = Ay;
  Te.writeInt64LE = Ay;
  function XI(r, e, t) {
    if ((t === void 0 && (t = 0), r % 8 !== 0))
      throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (r / 8 > e.length - t)
      throw new Error("readUintBE: array is too short for the given bitLength");
    for (var i = 0, n = 1, o = r / 8 + t - 1; o >= t; o--)
      (i += e[o] * n), (n *= 256);
    return i;
  }
  Te.readUintBE = XI;
  function ZI(r, e, t) {
    if ((t === void 0 && (t = 0), r % 8 !== 0))
      throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (r / 8 > e.length - t)
      throw new Error("readUintLE: array is too short for the given bitLength");
    for (var i = 0, n = 1, o = t; o < t + r / 8; o++)
      (i += e[o] * n), (n *= 256);
    return i;
  }
  Te.readUintLE = ZI;
  function e4(r, e, t, i) {
    if (
      (t === void 0 && (t = new Uint8Array(r / 8)),
      i === void 0 && (i = 0),
      r % 8 !== 0)
    )
      throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!wy.isSafeInteger(e))
      throw new Error("writeUintBE value must be an integer");
    for (var n = 1, o = r / 8 + i - 1; o >= i; o--)
      (t[o] = (e / n) & 255), (n *= 256);
    return t;
  }
  Te.writeUintBE = e4;
  function t4(r, e, t, i) {
    if (
      (t === void 0 && (t = new Uint8Array(r / 8)),
      i === void 0 && (i = 0),
      r % 8 !== 0)
    )
      throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!wy.isSafeInteger(e))
      throw new Error("writeUintLE value must be an integer");
    for (var n = 1, o = i; o < i + r / 8; o++)
      (t[o] = (e / n) & 255), (n *= 256);
    return t;
  }
  Te.writeUintLE = t4;
  function r4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat32(e);
  }
  Te.readFloat32BE = r4;
  function i4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat32(e, !0);
  }
  Te.readFloat32LE = i4;
  function n4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat64(e);
  }
  Te.readFloat64BE = n4;
  function s4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat64(e, !0);
  }
  Te.readFloat64LE = s4;
  function o4(r, e, t) {
    e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat32(t, r), e;
  }
  Te.writeFloat32BE = o4;
  function a4(r, e, t) {
    e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat32(t, r, !0), e;
  }
  Te.writeFloat32LE = a4;
  function c4(r, e, t) {
    e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat64(t, r), e;
  }
  Te.writeFloat64BE = c4;
  function u4(r, e, t) {
    e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat64(t, r, !0), e;
  }
  Te.writeFloat64LE = u4;
});
var si = Se((Uf) => {
  "use strict";
  Object.defineProperty(Uf, "__esModule", { value: !0 });
  function h4(r) {
    for (var e = 0; e < r.length; e++) r[e] = 0;
    return r;
  }
  Uf.wipe = h4;
});
var xy = Se((Iu) => {
  "use strict";
  Object.defineProperty(Iu, "__esModule", { value: !0 });
  var hr = Eo(),
    qf = si(),
    l4 = 20;
  function f4(r, e, t) {
    for (
      var i = 1634760805,
        n = 857760878,
        o = 2036477234,
        c = 1797285236,
        l = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
        p = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
        g = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
        y = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
        v = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
        A = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
        E = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
        P = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
        T = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
        L = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
        H = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
        Q = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
        J = i,
        G = n,
        W = o,
        Z = c,
        U = l,
        B = p,
        ae = g,
        fe = y,
        M = v,
        q = A,
        h = E,
        m = P,
        b = T,
        S = L,
        R = H,
        N = Q,
        z = 0;
      z < l4;
      z += 2
    )
      (J = (J + U) | 0),
        (b ^= J),
        (b = (b >>> 16) | (b << 16)),
        (M = (M + b) | 0),
        (U ^= M),
        (U = (U >>> 20) | (U << 12)),
        (G = (G + B) | 0),
        (S ^= G),
        (S = (S >>> 16) | (S << 16)),
        (q = (q + S) | 0),
        (B ^= q),
        (B = (B >>> 20) | (B << 12)),
        (W = (W + ae) | 0),
        (R ^= W),
        (R = (R >>> 16) | (R << 16)),
        (h = (h + R) | 0),
        (ae ^= h),
        (ae = (ae >>> 20) | (ae << 12)),
        (Z = (Z + fe) | 0),
        (N ^= Z),
        (N = (N >>> 16) | (N << 16)),
        (m = (m + N) | 0),
        (fe ^= m),
        (fe = (fe >>> 20) | (fe << 12)),
        (W = (W + ae) | 0),
        (R ^= W),
        (R = (R >>> 24) | (R << 8)),
        (h = (h + R) | 0),
        (ae ^= h),
        (ae = (ae >>> 25) | (ae << 7)),
        (Z = (Z + fe) | 0),
        (N ^= Z),
        (N = (N >>> 24) | (N << 8)),
        (m = (m + N) | 0),
        (fe ^= m),
        (fe = (fe >>> 25) | (fe << 7)),
        (G = (G + B) | 0),
        (S ^= G),
        (S = (S >>> 24) | (S << 8)),
        (q = (q + S) | 0),
        (B ^= q),
        (B = (B >>> 25) | (B << 7)),
        (J = (J + U) | 0),
        (b ^= J),
        (b = (b >>> 24) | (b << 8)),
        (M = (M + b) | 0),
        (U ^= M),
        (U = (U >>> 25) | (U << 7)),
        (J = (J + B) | 0),
        (N ^= J),
        (N = (N >>> 16) | (N << 16)),
        (h = (h + N) | 0),
        (B ^= h),
        (B = (B >>> 20) | (B << 12)),
        (G = (G + ae) | 0),
        (b ^= G),
        (b = (b >>> 16) | (b << 16)),
        (m = (m + b) | 0),
        (ae ^= m),
        (ae = (ae >>> 20) | (ae << 12)),
        (W = (W + fe) | 0),
        (S ^= W),
        (S = (S >>> 16) | (S << 16)),
        (M = (M + S) | 0),
        (fe ^= M),
        (fe = (fe >>> 20) | (fe << 12)),
        (Z = (Z + U) | 0),
        (R ^= Z),
        (R = (R >>> 16) | (R << 16)),
        (q = (q + R) | 0),
        (U ^= q),
        (U = (U >>> 20) | (U << 12)),
        (W = (W + fe) | 0),
        (S ^= W),
        (S = (S >>> 24) | (S << 8)),
        (M = (M + S) | 0),
        (fe ^= M),
        (fe = (fe >>> 25) | (fe << 7)),
        (Z = (Z + U) | 0),
        (R ^= Z),
        (R = (R >>> 24) | (R << 8)),
        (q = (q + R) | 0),
        (U ^= q),
        (U = (U >>> 25) | (U << 7)),
        (G = (G + ae) | 0),
        (b ^= G),
        (b = (b >>> 24) | (b << 8)),
        (m = (m + b) | 0),
        (ae ^= m),
        (ae = (ae >>> 25) | (ae << 7)),
        (J = (J + B) | 0),
        (N ^= J),
        (N = (N >>> 24) | (N << 8)),
        (h = (h + N) | 0),
        (B ^= h),
        (B = (B >>> 25) | (B << 7));
    hr.writeUint32LE((J + i) | 0, r, 0),
      hr.writeUint32LE((G + n) | 0, r, 4),
      hr.writeUint32LE((W + o) | 0, r, 8),
      hr.writeUint32LE((Z + c) | 0, r, 12),
      hr.writeUint32LE((U + l) | 0, r, 16),
      hr.writeUint32LE((B + p) | 0, r, 20),
      hr.writeUint32LE((ae + g) | 0, r, 24),
      hr.writeUint32LE((fe + y) | 0, r, 28),
      hr.writeUint32LE((M + v) | 0, r, 32),
      hr.writeUint32LE((q + A) | 0, r, 36),
      hr.writeUint32LE((h + E) | 0, r, 40),
      hr.writeUint32LE((m + P) | 0, r, 44),
      hr.writeUint32LE((b + T) | 0, r, 48),
      hr.writeUint32LE((S + L) | 0, r, 52),
      hr.writeUint32LE((R + H) | 0, r, 56),
      hr.writeUint32LE((N + Q) | 0, r, 60);
  }
  function Sy(r, e, t, i, n) {
    if ((n === void 0 && (n = 0), r.length !== 32))
      throw new Error("ChaCha: key size must be 32 bytes");
    if (i.length < t.length)
      throw new Error("ChaCha: destination is shorter than source");
    var o, c;
    if (n === 0) {
      if (e.length !== 8 && e.length !== 12)
        throw new Error("ChaCha nonce must be 8 or 12 bytes");
      (o = new Uint8Array(16)), (c = o.length - e.length), o.set(e, c);
    } else {
      if (e.length !== 16)
        throw new Error("ChaCha nonce with counter must be 16 bytes");
      (o = e), (c = n);
    }
    for (var l = new Uint8Array(64), p = 0; p < t.length; p += 64) {
      f4(l, o, r);
      for (var g = p; g < p + 64 && g < t.length; g++) i[g] = t[g] ^ l[g - p];
      p4(o, 0, c);
    }
    return qf.wipe(l), n === 0 && qf.wipe(o), i;
  }
  Iu.streamXOR = Sy;
  function d4(r, e, t, i) {
    return i === void 0 && (i = 0), qf.wipe(t), Sy(r, e, t, t, i);
  }
  Iu.stream = d4;
  function p4(r, e, t) {
    for (var i = 1; t--; )
      (i = (i + (r[e] & 255)) | 0), (r[e] = i & 255), (i >>>= 8), e++;
    if (i > 0) throw new Error("ChaCha: counter overflow");
  }
});
var Du = Se((Ao) => {
  "use strict";
  Object.defineProperty(Ao, "__esModule", { value: !0 });
  function g4(r, e, t) {
    return (~(r - 1) & e) | ((r - 1) & t);
  }
  Ao.select = g4;
  function m4(r, e) {
    return (((r | 0) - (e | 0) - 1) >>> 31) & 1;
  }
  Ao.lessOrEqual = m4;
  function Iy(r, e) {
    if (r.length !== e.length) return 0;
    for (var t = 0, i = 0; i < r.length; i++) t |= r[i] ^ e[i];
    return 1 & ((t - 1) >>> 8);
  }
  Ao.compare = Iy;
  function y4(r, e) {
    return r.length === 0 || e.length === 0 ? !1 : Iy(r, e) !== 0;
  }
  Ao.equal = y4;
});
var Ry = Se((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: !0 });
  var v4 = Du(),
    Ru = si();
  xn.DIGEST_LENGTH = 16;
  var Dy = (function () {
    function r(e) {
      (this.digestLength = xn.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var t = e[0] | (e[1] << 8);
      this._r[0] = t & 8191;
      var i = e[2] | (e[3] << 8);
      this._r[1] = ((t >>> 13) | (i << 3)) & 8191;
      var n = e[4] | (e[5] << 8);
      this._r[2] = ((i >>> 10) | (n << 6)) & 7939;
      var o = e[6] | (e[7] << 8);
      this._r[3] = ((n >>> 7) | (o << 9)) & 8191;
      var c = e[8] | (e[9] << 8);
      (this._r[4] = ((o >>> 4) | (c << 12)) & 255),
        (this._r[5] = (c >>> 1) & 8190);
      var l = e[10] | (e[11] << 8);
      this._r[6] = ((c >>> 14) | (l << 2)) & 8191;
      var p = e[12] | (e[13] << 8);
      this._r[7] = ((l >>> 11) | (p << 5)) & 8065;
      var g = e[14] | (e[15] << 8);
      (this._r[8] = ((p >>> 8) | (g << 8)) & 8191),
        (this._r[9] = (g >>> 5) & 127),
        (this._pad[0] = e[16] | (e[17] << 8)),
        (this._pad[1] = e[18] | (e[19] << 8)),
        (this._pad[2] = e[20] | (e[21] << 8)),
        (this._pad[3] = e[22] | (e[23] << 8)),
        (this._pad[4] = e[24] | (e[25] << 8)),
        (this._pad[5] = e[26] | (e[27] << 8)),
        (this._pad[6] = e[28] | (e[29] << 8)),
        (this._pad[7] = e[30] | (e[31] << 8));
    }
    return (
      (r.prototype._blocks = function (e, t, i) {
        for (
          var n = this._fin ? 0 : 2048,
            o = this._h[0],
            c = this._h[1],
            l = this._h[2],
            p = this._h[3],
            g = this._h[4],
            y = this._h[5],
            v = this._h[6],
            A = this._h[7],
            E = this._h[8],
            P = this._h[9],
            T = this._r[0],
            L = this._r[1],
            H = this._r[2],
            Q = this._r[3],
            J = this._r[4],
            G = this._r[5],
            W = this._r[6],
            Z = this._r[7],
            U = this._r[8],
            B = this._r[9];
          i >= 16;

        ) {
          var ae = e[t + 0] | (e[t + 1] << 8);
          o += ae & 8191;
          var fe = e[t + 2] | (e[t + 3] << 8);
          c += ((ae >>> 13) | (fe << 3)) & 8191;
          var M = e[t + 4] | (e[t + 5] << 8);
          l += ((fe >>> 10) | (M << 6)) & 8191;
          var q = e[t + 6] | (e[t + 7] << 8);
          p += ((M >>> 7) | (q << 9)) & 8191;
          var h = e[t + 8] | (e[t + 9] << 8);
          (g += ((q >>> 4) | (h << 12)) & 8191), (y += (h >>> 1) & 8191);
          var m = e[t + 10] | (e[t + 11] << 8);
          v += ((h >>> 14) | (m << 2)) & 8191;
          var b = e[t + 12] | (e[t + 13] << 8);
          A += ((m >>> 11) | (b << 5)) & 8191;
          var S = e[t + 14] | (e[t + 15] << 8);
          (E += ((b >>> 8) | (S << 8)) & 8191), (P += (S >>> 5) | n);
          var R = 0,
            N = R;
          (N += o * T),
            (N += c * (5 * B)),
            (N += l * (5 * U)),
            (N += p * (5 * Z)),
            (N += g * (5 * W)),
            (R = N >>> 13),
            (N &= 8191),
            (N += y * (5 * G)),
            (N += v * (5 * J)),
            (N += A * (5 * Q)),
            (N += E * (5 * H)),
            (N += P * (5 * L)),
            (R += N >>> 13),
            (N &= 8191);
          var z = R;
          (z += o * L),
            (z += c * T),
            (z += l * (5 * B)),
            (z += p * (5 * U)),
            (z += g * (5 * Z)),
            (R = z >>> 13),
            (z &= 8191),
            (z += y * (5 * W)),
            (z += v * (5 * G)),
            (z += A * (5 * J)),
            (z += E * (5 * Q)),
            (z += P * (5 * H)),
            (R += z >>> 13),
            (z &= 8191);
          var I = R;
          (I += o * H),
            (I += c * L),
            (I += l * T),
            (I += p * (5 * B)),
            (I += g * (5 * U)),
            (R = I >>> 13),
            (I &= 8191),
            (I += y * (5 * Z)),
            (I += v * (5 * W)),
            (I += A * (5 * G)),
            (I += E * (5 * J)),
            (I += P * (5 * Q)),
            (R += I >>> 13),
            (I &= 8191);
          var d = R;
          (d += o * Q),
            (d += c * H),
            (d += l * L),
            (d += p * T),
            (d += g * (5 * B)),
            (R = d >>> 13),
            (d &= 8191),
            (d += y * (5 * U)),
            (d += v * (5 * Z)),
            (d += A * (5 * W)),
            (d += E * (5 * G)),
            (d += P * (5 * J)),
            (R += d >>> 13),
            (d &= 8191);
          var D = R;
          (D += o * J),
            (D += c * Q),
            (D += l * H),
            (D += p * L),
            (D += g * T),
            (R = D >>> 13),
            (D &= 8191),
            (D += y * (5 * B)),
            (D += v * (5 * U)),
            (D += A * (5 * Z)),
            (D += E * (5 * W)),
            (D += P * (5 * G)),
            (R += D >>> 13),
            (D &= 8191);
          var ce = R;
          (ce += o * G),
            (ce += c * J),
            (ce += l * Q),
            (ce += p * H),
            (ce += g * L),
            (R = ce >>> 13),
            (ce &= 8191),
            (ce += y * T),
            (ce += v * (5 * B)),
            (ce += A * (5 * U)),
            (ce += E * (5 * Z)),
            (ce += P * (5 * W)),
            (R += ce >>> 13),
            (ce &= 8191);
          var ie = R;
          (ie += o * W),
            (ie += c * G),
            (ie += l * J),
            (ie += p * Q),
            (ie += g * H),
            (R = ie >>> 13),
            (ie &= 8191),
            (ie += y * L),
            (ie += v * T),
            (ie += A * (5 * B)),
            (ie += E * (5 * U)),
            (ie += P * (5 * Z)),
            (R += ie >>> 13),
            (ie &= 8191);
          var w = R;
          (w += o * Z),
            (w += c * W),
            (w += l * G),
            (w += p * J),
            (w += g * Q),
            (R = w >>> 13),
            (w &= 8191),
            (w += y * H),
            (w += v * L),
            (w += A * T),
            (w += E * (5 * B)),
            (w += P * (5 * U)),
            (R += w >>> 13),
            (w &= 8191);
          var $ = R;
          ($ += o * U),
            ($ += c * Z),
            ($ += l * W),
            ($ += p * G),
            ($ += g * J),
            (R = $ >>> 13),
            ($ &= 8191),
            ($ += y * Q),
            ($ += v * H),
            ($ += A * L),
            ($ += E * T),
            ($ += P * (5 * B)),
            (R += $ >>> 13),
            ($ &= 8191);
          var K = R;
          (K += o * B),
            (K += c * U),
            (K += l * Z),
            (K += p * W),
            (K += g * G),
            (R = K >>> 13),
            (K &= 8191),
            (K += y * J),
            (K += v * Q),
            (K += A * H),
            (K += E * L),
            (K += P * T),
            (R += K >>> 13),
            (K &= 8191),
            (R = ((R << 2) + R) | 0),
            (R = (R + N) | 0),
            (N = R & 8191),
            (R = R >>> 13),
            (z += R),
            (o = N),
            (c = z),
            (l = I),
            (p = d),
            (g = D),
            (y = ce),
            (v = ie),
            (A = w),
            (E = $),
            (P = K),
            (t += 16),
            (i -= 16);
        }
        (this._h[0] = o),
          (this._h[1] = c),
          (this._h[2] = l),
          (this._h[3] = p),
          (this._h[4] = g),
          (this._h[5] = y),
          (this._h[6] = v),
          (this._h[7] = A),
          (this._h[8] = E),
          (this._h[9] = P);
      }),
      (r.prototype.finish = function (e, t) {
        t === void 0 && (t = 0);
        var i = new Uint16Array(10),
          n,
          o,
          c,
          l;
        if (this._leftover) {
          for (l = this._leftover, this._buffer[l++] = 1; l < 16; l++)
            this._buffer[l] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (n = this._h[1] >>> 13, this._h[1] &= 8191, l = 2; l < 10; l++)
          (this._h[l] += n), (n = this._h[l] >>> 13), (this._h[l] &= 8191);
        for (
          this._h[0] += n * 5,
            n = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += n,
            n = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += n,
            i[0] = this._h[0] + 5,
            n = i[0] >>> 13,
            i[0] &= 8191,
            l = 1;
          l < 10;
          l++
        )
          (i[l] = this._h[l] + n), (n = i[l] >>> 13), (i[l] &= 8191);
        for (i[9] -= 8192, o = (n ^ 1) - 1, l = 0; l < 10; l++) i[l] &= o;
        for (o = ~o, l = 0; l < 10; l++) this._h[l] = (this._h[l] & o) | i[l];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            c = this._h[0] + this._pad[0],
            this._h[0] = c & 65535,
            l = 1;
          l < 8;
          l++
        )
          (c = (((this._h[l] + this._pad[l]) | 0) + (c >>> 16)) | 0),
            (this._h[l] = c & 65535);
        return (
          (e[t + 0] = this._h[0] >>> 0),
          (e[t + 1] = this._h[0] >>> 8),
          (e[t + 2] = this._h[1] >>> 0),
          (e[t + 3] = this._h[1] >>> 8),
          (e[t + 4] = this._h[2] >>> 0),
          (e[t + 5] = this._h[2] >>> 8),
          (e[t + 6] = this._h[3] >>> 0),
          (e[t + 7] = this._h[3] >>> 8),
          (e[t + 8] = this._h[4] >>> 0),
          (e[t + 9] = this._h[4] >>> 8),
          (e[t + 10] = this._h[5] >>> 0),
          (e[t + 11] = this._h[5] >>> 8),
          (e[t + 12] = this._h[6] >>> 0),
          (e[t + 13] = this._h[6] >>> 8),
          (e[t + 14] = this._h[7] >>> 0),
          (e[t + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (r.prototype.update = function (e) {
        var t = 0,
          i = e.length,
          n;
        if (this._leftover) {
          (n = 16 - this._leftover), n > i && (n = i);
          for (var o = 0; o < n; o++)
            this._buffer[this._leftover + o] = e[t + o];
          if (((i -= n), (t += n), (this._leftover += n), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (i >= 16 &&
            ((n = i - (i % 16)), this._blocks(e, t, n), (t += n), (i -= n)),
          i)
        ) {
          for (var o = 0; o < i; o++)
            this._buffer[this._leftover + o] = e[t + o];
          this._leftover += i;
        }
        return this;
      }),
      (r.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var e = new Uint8Array(16);
        return this.finish(e), e;
      }),
      (r.prototype.clean = function () {
        return (
          Ru.wipe(this._buffer),
          Ru.wipe(this._r),
          Ru.wipe(this._h),
          Ru.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      r
    );
  })();
  xn.Poly1305 = Dy;
  function w4(r, e) {
    var t = new Dy(r);
    t.update(e);
    var i = t.digest();
    return t.clean(), i;
  }
  xn.oneTimeAuth = w4;
  function b4(r, e) {
    return r.length !== xn.DIGEST_LENGTH || e.length !== xn.DIGEST_LENGTH
      ? !1
      : v4.equal(r, e);
  }
  xn.equal = b4;
});
var Py = Se((In) => {
  "use strict";
  Object.defineProperty(In, "__esModule", { value: !0 });
  var Cu = xy(),
    _4 = Ry(),
    Ta = si(),
    Cy = Eo(),
    E4 = Du();
  In.KEY_LENGTH = 32;
  In.NONCE_LENGTH = 12;
  In.TAG_LENGTH = 16;
  var Oy = new Uint8Array(16),
    A4 = (function () {
      function r(e) {
        if (
          ((this.nonceLength = In.NONCE_LENGTH),
          (this.tagLength = In.TAG_LENGTH),
          e.length !== In.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(e);
      }
      return (
        (r.prototype.seal = function (e, t, i, n) {
          if (e.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var o = new Uint8Array(16);
          o.set(e, o.length - e.length);
          var c = new Uint8Array(32);
          Cu.stream(this._key, o, c, 4);
          var l = t.length + this.tagLength,
            p;
          if (n) {
            if (n.length !== l)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            p = n;
          } else p = new Uint8Array(l);
          return (
            Cu.streamXOR(this._key, o, t, p, 4),
            this._authenticate(
              p.subarray(p.length - this.tagLength, p.length),
              c,
              p.subarray(0, p.length - this.tagLength),
              i
            ),
            Ta.wipe(o),
            p
          );
        }),
        (r.prototype.open = function (e, t, i, n) {
          if (e.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (t.length < this.tagLength) return null;
          var o = new Uint8Array(16);
          o.set(e, o.length - e.length);
          var c = new Uint8Array(32);
          Cu.stream(this._key, o, c, 4);
          var l = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              l,
              c,
              t.subarray(0, t.length - this.tagLength),
              i
            ),
            !E4.equal(l, t.subarray(t.length - this.tagLength, t.length)))
          )
            return null;
          var p = t.length - this.tagLength,
            g;
          if (n) {
            if (n.length !== p)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            g = n;
          } else g = new Uint8Array(p);
          return (
            Cu.streamXOR(
              this._key,
              o,
              t.subarray(0, t.length - this.tagLength),
              g,
              4
            ),
            Ta.wipe(o),
            g
          );
        }),
        (r.prototype.clean = function () {
          return Ta.wipe(this._key), this;
        }),
        (r.prototype._authenticate = function (e, t, i, n) {
          var o = new _4.Poly1305(t);
          n &&
            (o.update(n),
            n.length % 16 > 0 && o.update(Oy.subarray(n.length % 16))),
            o.update(i),
            i.length % 16 > 0 && o.update(Oy.subarray(i.length % 16));
          var c = new Uint8Array(8);
          n && Cy.writeUint64LE(n.length, c),
            o.update(c),
            Cy.writeUint64LE(i.length, c),
            o.update(c);
          for (var l = o.digest(), p = 0; p < l.length; p++) e[p] = l[p];
          o.clean(), Ta.wipe(l), Ta.wipe(c);
        }),
        r
      );
    })();
  In.ChaCha20Poly1305 = A4;
});
var My = Se((jf) => {
  "use strict";
  Object.defineProperty(jf, "__esModule", { value: !0 });
  function S4(r) {
    return (
      typeof r.saveState < "u" &&
      typeof r.restoreState < "u" &&
      typeof r.cleanSavedState < "u"
    );
  }
  jf.isSerializableHash = S4;
});
var Ty = Se((Fa) => {
  "use strict";
  Object.defineProperty(Fa, "__esModule", { value: !0 });
  var Ui = My(),
    x4 = Du(),
    I4 = si(),
    Ny = (function () {
      function r(e, t) {
        (this._finished = !1),
          (this._inner = new e()),
          (this._outer = new e()),
          (this.blockSize = this._outer.blockSize),
          (this.digestLength = this._outer.digestLength);
        var i = new Uint8Array(this.blockSize);
        t.length > this.blockSize
          ? this._inner.update(t).finish(i).clean()
          : i.set(t);
        for (var n = 0; n < i.length; n++) i[n] ^= 54;
        this._inner.update(i);
        for (var n = 0; n < i.length; n++) i[n] ^= 106;
        this._outer.update(i),
          Ui.isSerializableHash(this._inner) &&
            Ui.isSerializableHash(this._outer) &&
            ((this._innerKeyedState = this._inner.saveState()),
            (this._outerKeyedState = this._outer.saveState())),
          I4.wipe(i);
      }
      return (
        (r.prototype.reset = function () {
          if (
            !Ui.isSerializableHash(this._inner) ||
            !Ui.isSerializableHash(this._outer)
          )
            throw new Error(
              "hmac: can't reset() because hash doesn't implement restoreState()"
            );
          return (
            this._inner.restoreState(this._innerKeyedState),
            this._outer.restoreState(this._outerKeyedState),
            (this._finished = !1),
            this
          );
        }),
        (r.prototype.clean = function () {
          Ui.isSerializableHash(this._inner) &&
            this._inner.cleanSavedState(this._innerKeyedState),
            Ui.isSerializableHash(this._outer) &&
              this._outer.cleanSavedState(this._outerKeyedState),
            this._inner.clean(),
            this._outer.clean();
        }),
        (r.prototype.update = function (e) {
          return this._inner.update(e), this;
        }),
        (r.prototype.finish = function (e) {
          return this._finished
            ? (this._outer.finish(e), this)
            : (this._inner.finish(e),
              this._outer.update(e.subarray(0, this.digestLength)).finish(e),
              (this._finished = !0),
              this);
        }),
        (r.prototype.digest = function () {
          var e = new Uint8Array(this.digestLength);
          return this.finish(e), e;
        }),
        (r.prototype.saveState = function () {
          if (!Ui.isSerializableHash(this._inner))
            throw new Error(
              "hmac: can't saveState() because hash doesn't implement it"
            );
          return this._inner.saveState();
        }),
        (r.prototype.restoreState = function (e) {
          if (
            !Ui.isSerializableHash(this._inner) ||
            !Ui.isSerializableHash(this._outer)
          )
            throw new Error(
              "hmac: can't restoreState() because hash doesn't implement it"
            );
          return (
            this._inner.restoreState(e),
            this._outer.restoreState(this._outerKeyedState),
            (this._finished = !1),
            this
          );
        }),
        (r.prototype.cleanSavedState = function (e) {
          if (!Ui.isSerializableHash(this._inner))
            throw new Error(
              "hmac: can't cleanSavedState() because hash doesn't implement it"
            );
          this._inner.cleanSavedState(e);
        }),
        r
      );
    })();
  Fa.HMAC = Ny;
  function D4(r, e, t) {
    var i = new Ny(r, e);
    i.update(t);
    var n = i.digest();
    return i.clean(), n;
  }
  Fa.hmac = D4;
  Fa.equal = x4.equal;
});
var By = Se((zf) => {
  "use strict";
  Object.defineProperty(zf, "__esModule", { value: !0 });
  var Fy = Ty(),
    Ly = si(),
    R4 = (function () {
      function r(e, t, i, n) {
        i === void 0 && (i = new Uint8Array(0)),
          (this._counter = new Uint8Array(1)),
          (this._hash = e),
          (this._info = n);
        var o = Fy.hmac(this._hash, i, t);
        (this._hmac = new Fy.HMAC(e, o)),
          (this._buffer = new Uint8Array(this._hmac.digestLength)),
          (this._bufpos = this._buffer.length);
      }
      return (
        (r.prototype._fillBuffer = function () {
          this._counter[0]++;
          var e = this._counter[0];
          if (e === 0) throw new Error("hkdf: cannot expand more");
          this._hmac.reset(),
            e > 1 && this._hmac.update(this._buffer),
            this._info && this._hmac.update(this._info),
            this._hmac.update(this._counter),
            this._hmac.finish(this._buffer),
            (this._bufpos = 0);
        }),
        (r.prototype.expand = function (e) {
          for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
            this._bufpos === this._buffer.length && this._fillBuffer(),
              (t[i] = this._buffer[this._bufpos++]);
          return t;
        }),
        (r.prototype.clean = function () {
          this._hmac.clean(),
            Ly.wipe(this._buffer),
            Ly.wipe(this._counter),
            (this._bufpos = 0);
        }),
        r
      );
    })();
  zf.HKDF = R4;
});
var qy = Se((Ou) => {
  "use strict";
  Object.defineProperty(Ou, "__esModule", { value: !0 });
  Ou.BrowserRandomSource = void 0;
  var Uy = 65536,
    kf = class {
      constructor() {
        (this.isAvailable = !1), (this.isInstantiated = !1);
        let e = typeof self < "u" ? self.crypto || self.msCrypto : null;
        e &&
          e.getRandomValues !== void 0 &&
          ((this._crypto = e),
          (this.isAvailable = !0),
          (this.isInstantiated = !0));
      }
      randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
          throw new Error("Browser random byte generator is not available.");
        let t = new Uint8Array(e);
        for (let i = 0; i < t.length; i += Uy)
          this._crypto.getRandomValues(
            t.subarray(i, i + Math.min(t.length - i, Uy))
          );
        return t;
      }
    };
  Ou.BrowserRandomSource = kf;
});
var jy = Se(() => {
  "use strict";
});
var zy = Se((Pu) => {
  "use strict";
  Object.defineProperty(Pu, "__esModule", { value: !0 });
  Pu.NodeRandomSource = void 0;
  var C4 = si(),
    Hf = class {
      constructor() {
        if (
          ((this.isAvailable = !1), (this.isInstantiated = !1), typeof Nm < "u")
        ) {
          let e = jy();
          e &&
            e.randomBytes &&
            ((this._crypto = e),
            (this.isAvailable = !0),
            (this.isInstantiated = !0));
        }
      }
      randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
          throw new Error("Node.js random byte generator is not available.");
        let t = this._crypto.randomBytes(e);
        if (t.length !== e)
          throw new Error("NodeRandomSource: got fewer bytes than requested");
        let i = new Uint8Array(e);
        for (let n = 0; n < i.length; n++) i[n] = t[n];
        return (0, C4.wipe)(t), i;
      }
    };
  Pu.NodeRandomSource = Hf;
});
var ky = Se((Mu) => {
  "use strict";
  Object.defineProperty(Mu, "__esModule", { value: !0 });
  Mu.SystemRandomSource = void 0;
  var O4 = qy(),
    P4 = zy(),
    Kf = class {
      constructor() {
        if (
          ((this.isAvailable = !1),
          (this.name = ""),
          (this._source = new O4.BrowserRandomSource()),
          this._source.isAvailable)
        ) {
          (this.isAvailable = !0), (this.name = "Browser");
          return;
        }
        if (
          ((this._source = new P4.NodeRandomSource()), this._source.isAvailable)
        ) {
          (this.isAvailable = !0), (this.name = "Node");
          return;
        }
      }
      randomBytes(e) {
        if (!this.isAvailable)
          throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e);
      }
    };
  Mu.SystemRandomSource = Kf;
});
var La = Se((lr) => {
  "use strict";
  Object.defineProperty(lr, "__esModule", { value: !0 });
  lr.randomStringForEntropy =
    lr.randomString =
    lr.randomUint32 =
    lr.randomBytes =
    lr.defaultRandomSource =
      void 0;
  var M4 = ky(),
    N4 = Eo(),
    Hy = si();
  lr.defaultRandomSource = new M4.SystemRandomSource();
  function Vf(r, e = lr.defaultRandomSource) {
    return e.randomBytes(r);
  }
  lr.randomBytes = Vf;
  function T4(r = lr.defaultRandomSource) {
    let e = Vf(4, r),
      t = (0, N4.readUint32LE)(e);
    return (0, Hy.wipe)(e), t;
  }
  lr.randomUint32 = T4;
  var Ky = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function Vy(r, e = Ky, t = lr.defaultRandomSource) {
    if (e.length < 2) throw new Error("randomString charset is too short");
    if (e.length > 256) throw new Error("randomString charset is too long");
    let i = "",
      n = e.length,
      o = 256 - (256 % n);
    for (; r > 0; ) {
      let c = Vf(Math.ceil((r * 256) / o), t);
      for (let l = 0; l < c.length && r > 0; l++) {
        let p = c[l];
        p < o && ((i += e.charAt(p % n)), r--);
      }
      (0, Hy.wipe)(c);
    }
    return i;
  }
  lr.randomString = Vy;
  function F4(r, e = Ky, t = lr.defaultRandomSource) {
    let i = Math.ceil(r / (Math.log(e.length) / Math.LN2));
    return Vy(i, e, t);
  }
  lr.randomStringForEntropy = F4;
});
var $y = Se((ts) => {
  "use strict";
  Object.defineProperty(ts, "__esModule", { value: !0 });
  var Tu = Eo(),
    Nu = si();
  ts.DIGEST_LENGTH = 32;
  ts.BLOCK_SIZE = 64;
  var Gy = (function () {
    function r() {
      (this.digestLength = ts.DIGEST_LENGTH),
        (this.blockSize = ts.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (r.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (r.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.clean = function () {
        Nu.wipe(this._buffer), Nu.wipe(this._temp), this.reset();
      }),
      (r.prototype.update = function (e, t) {
        if ((t === void 0 && (t = e.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var i = 0;
        if (((this._bytesHashed += t), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && t > 0; )
            (this._buffer[this._bufferLength++] = e[i++]), t--;
          this._bufferLength === this.blockSize &&
            (Gf(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          t >= this.blockSize &&
          ((i = Gf(this._temp, this._state, e, i, t)), (t %= this.blockSize));
          t > 0;

        )
          (this._buffer[this._bufferLength++] = e[i++]), t--;
        return this;
      }),
      (r.prototype.finish = function (e) {
        if (!this._finished) {
          var t = this._bytesHashed,
            i = this._bufferLength,
            n = (t / 536870912) | 0,
            o = t << 3,
            c = t % 64 < 56 ? 64 : 128;
          this._buffer[i] = 128;
          for (var l = i + 1; l < c - 8; l++) this._buffer[l] = 0;
          Tu.writeUint32BE(n, this._buffer, c - 8),
            Tu.writeUint32BE(o, this._buffer, c - 4),
            Gf(this._temp, this._state, this._buffer, 0, c),
            (this._finished = !0);
        }
        for (var l = 0; l < this.digestLength / 4; l++)
          Tu.writeUint32BE(this._state[l], e, l * 4);
        return this;
      }),
      (r.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (r.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (r.prototype.restoreState = function (e) {
        return (
          this._state.set(e.state),
          (this._bufferLength = e.bufferLength),
          e.buffer && this._buffer.set(e.buffer),
          (this._bytesHashed = e.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.cleanSavedState = function (e) {
        Nu.wipe(e.state),
          e.buffer && Nu.wipe(e.buffer),
          (e.bufferLength = 0),
          (e.bytesHashed = 0);
      }),
      r
    );
  })();
  ts.SHA256 = Gy;
  var L4 = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function Gf(r, e, t, i, n) {
    for (; n >= 64; ) {
      for (
        var o = e[0],
          c = e[1],
          l = e[2],
          p = e[3],
          g = e[4],
          y = e[5],
          v = e[6],
          A = e[7],
          E = 0;
        E < 16;
        E++
      ) {
        var P = i + E * 4;
        r[E] = Tu.readUint32BE(t, P);
      }
      for (var E = 16; E < 64; E++) {
        var T = r[E - 2],
          L = ((T >>> 17) | (T << 15)) ^ ((T >>> 19) | (T << 13)) ^ (T >>> 10);
        T = r[E - 15];
        var H = ((T >>> 7) | (T << 25)) ^ ((T >>> 18) | (T << 14)) ^ (T >>> 3);
        r[E] = ((L + r[E - 7]) | 0) + ((H + r[E - 16]) | 0);
      }
      for (var E = 0; E < 64; E++) {
        var L =
            ((((((g >>> 6) | (g << 26)) ^
              ((g >>> 11) | (g << 21)) ^
              ((g >>> 25) | (g << 7))) +
              ((g & y) ^ (~g & v))) |
              0) +
              ((A + ((L4[E] + r[E]) | 0)) | 0)) |
            0,
          H =
            ((((o >>> 2) | (o << 30)) ^
              ((o >>> 13) | (o << 19)) ^
              ((o >>> 22) | (o << 10))) +
              ((o & c) ^ (o & l) ^ (c & l))) |
            0;
        (A = v),
          (v = y),
          (y = g),
          (g = (p + L) | 0),
          (p = l),
          (l = c),
          (c = o),
          (o = (L + H) | 0);
      }
      (e[0] += o),
        (e[1] += c),
        (e[2] += l),
        (e[3] += p),
        (e[4] += g),
        (e[5] += y),
        (e[6] += v),
        (e[7] += A),
        (i += 64),
        (n -= 64);
    }
    return i;
  }
  function B4(r) {
    var e = new Gy();
    e.update(r);
    var t = e.digest();
    return e.clean(), t;
  }
  ts.hash = B4;
});
var Qy = Se((Bt) => {
  "use strict";
  Object.defineProperty(Bt, "__esModule", { value: !0 });
  Bt.sharedKey =
    Bt.generateKeyPair =
    Bt.generateKeyPairFromSeed =
    Bt.scalarMultBase =
    Bt.scalarMult =
    Bt.SHARED_KEY_LENGTH =
    Bt.SECRET_KEY_LENGTH =
    Bt.PUBLIC_KEY_LENGTH =
      void 0;
  var U4 = La(),
    q4 = si();
  Bt.PUBLIC_KEY_LENGTH = 32;
  Bt.SECRET_KEY_LENGTH = 32;
  Bt.SHARED_KEY_LENGTH = 32;
  function qi(r) {
    let e = new Float64Array(16);
    if (r) for (let t = 0; t < r.length; t++) e[t] = r[t];
    return e;
  }
  var Jy = new Uint8Array(32);
  Jy[0] = 9;
  var j4 = qi([56129, 1]);
  function $f(r) {
    let e = 1;
    for (let t = 0; t < 16; t++) {
      let i = r[t] + e + 65535;
      (e = Math.floor(i / 65536)), (r[t] = i - e * 65536);
    }
    r[0] += e - 1 + 37 * (e - 1);
  }
  function Ba(r, e, t) {
    let i = ~(t - 1);
    for (let n = 0; n < 16; n++) {
      let o = i & (r[n] ^ e[n]);
      (r[n] ^= o), (e[n] ^= o);
    }
  }
  function z4(r, e) {
    let t = qi(),
      i = qi();
    for (let n = 0; n < 16; n++) i[n] = e[n];
    $f(i), $f(i), $f(i);
    for (let n = 0; n < 2; n++) {
      t[0] = i[0] - 65517;
      for (let c = 1; c < 15; c++)
        (t[c] = i[c] - 65535 - ((t[c - 1] >> 16) & 1)), (t[c - 1] &= 65535);
      t[15] = i[15] - 32767 - ((t[14] >> 16) & 1);
      let o = (t[15] >> 16) & 1;
      (t[14] &= 65535), Ba(i, t, 1 - o);
    }
    for (let n = 0; n < 16; n++)
      (r[2 * n] = i[n] & 255), (r[2 * n + 1] = i[n] >> 8);
  }
  function k4(r, e) {
    for (let t = 0; t < 16; t++) r[t] = e[2 * t] + (e[2 * t + 1] << 8);
    r[15] &= 32767;
  }
  function Fu(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] + t[i];
  }
  function Lu(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] - t[i];
  }
  function Dn(r, e, t) {
    let i,
      n,
      o = 0,
      c = 0,
      l = 0,
      p = 0,
      g = 0,
      y = 0,
      v = 0,
      A = 0,
      E = 0,
      P = 0,
      T = 0,
      L = 0,
      H = 0,
      Q = 0,
      J = 0,
      G = 0,
      W = 0,
      Z = 0,
      U = 0,
      B = 0,
      ae = 0,
      fe = 0,
      M = 0,
      q = 0,
      h = 0,
      m = 0,
      b = 0,
      S = 0,
      R = 0,
      N = 0,
      z = 0,
      I = t[0],
      d = t[1],
      D = t[2],
      ce = t[3],
      ie = t[4],
      w = t[5],
      $ = t[6],
      K = t[7],
      Y = t[8],
      ue = t[9],
      se = t[10],
      oe = t[11],
      le = t[12],
      pe = t[13],
      ne = t[14],
      ve = t[15];
    (i = e[0]),
      (o += i * I),
      (c += i * d),
      (l += i * D),
      (p += i * ce),
      (g += i * ie),
      (y += i * w),
      (v += i * $),
      (A += i * K),
      (E += i * Y),
      (P += i * ue),
      (T += i * se),
      (L += i * oe),
      (H += i * le),
      (Q += i * pe),
      (J += i * ne),
      (G += i * ve),
      (i = e[1]),
      (c += i * I),
      (l += i * d),
      (p += i * D),
      (g += i * ce),
      (y += i * ie),
      (v += i * w),
      (A += i * $),
      (E += i * K),
      (P += i * Y),
      (T += i * ue),
      (L += i * se),
      (H += i * oe),
      (Q += i * le),
      (J += i * pe),
      (G += i * ne),
      (W += i * ve),
      (i = e[2]),
      (l += i * I),
      (p += i * d),
      (g += i * D),
      (y += i * ce),
      (v += i * ie),
      (A += i * w),
      (E += i * $),
      (P += i * K),
      (T += i * Y),
      (L += i * ue),
      (H += i * se),
      (Q += i * oe),
      (J += i * le),
      (G += i * pe),
      (W += i * ne),
      (Z += i * ve),
      (i = e[3]),
      (p += i * I),
      (g += i * d),
      (y += i * D),
      (v += i * ce),
      (A += i * ie),
      (E += i * w),
      (P += i * $),
      (T += i * K),
      (L += i * Y),
      (H += i * ue),
      (Q += i * se),
      (J += i * oe),
      (G += i * le),
      (W += i * pe),
      (Z += i * ne),
      (U += i * ve),
      (i = e[4]),
      (g += i * I),
      (y += i * d),
      (v += i * D),
      (A += i * ce),
      (E += i * ie),
      (P += i * w),
      (T += i * $),
      (L += i * K),
      (H += i * Y),
      (Q += i * ue),
      (J += i * se),
      (G += i * oe),
      (W += i * le),
      (Z += i * pe),
      (U += i * ne),
      (B += i * ve),
      (i = e[5]),
      (y += i * I),
      (v += i * d),
      (A += i * D),
      (E += i * ce),
      (P += i * ie),
      (T += i * w),
      (L += i * $),
      (H += i * K),
      (Q += i * Y),
      (J += i * ue),
      (G += i * se),
      (W += i * oe),
      (Z += i * le),
      (U += i * pe),
      (B += i * ne),
      (ae += i * ve),
      (i = e[6]),
      (v += i * I),
      (A += i * d),
      (E += i * D),
      (P += i * ce),
      (T += i * ie),
      (L += i * w),
      (H += i * $),
      (Q += i * K),
      (J += i * Y),
      (G += i * ue),
      (W += i * se),
      (Z += i * oe),
      (U += i * le),
      (B += i * pe),
      (ae += i * ne),
      (fe += i * ve),
      (i = e[7]),
      (A += i * I),
      (E += i * d),
      (P += i * D),
      (T += i * ce),
      (L += i * ie),
      (H += i * w),
      (Q += i * $),
      (J += i * K),
      (G += i * Y),
      (W += i * ue),
      (Z += i * se),
      (U += i * oe),
      (B += i * le),
      (ae += i * pe),
      (fe += i * ne),
      (M += i * ve),
      (i = e[8]),
      (E += i * I),
      (P += i * d),
      (T += i * D),
      (L += i * ce),
      (H += i * ie),
      (Q += i * w),
      (J += i * $),
      (G += i * K),
      (W += i * Y),
      (Z += i * ue),
      (U += i * se),
      (B += i * oe),
      (ae += i * le),
      (fe += i * pe),
      (M += i * ne),
      (q += i * ve),
      (i = e[9]),
      (P += i * I),
      (T += i * d),
      (L += i * D),
      (H += i * ce),
      (Q += i * ie),
      (J += i * w),
      (G += i * $),
      (W += i * K),
      (Z += i * Y),
      (U += i * ue),
      (B += i * se),
      (ae += i * oe),
      (fe += i * le),
      (M += i * pe),
      (q += i * ne),
      (h += i * ve),
      (i = e[10]),
      (T += i * I),
      (L += i * d),
      (H += i * D),
      (Q += i * ce),
      (J += i * ie),
      (G += i * w),
      (W += i * $),
      (Z += i * K),
      (U += i * Y),
      (B += i * ue),
      (ae += i * se),
      (fe += i * oe),
      (M += i * le),
      (q += i * pe),
      (h += i * ne),
      (m += i * ve),
      (i = e[11]),
      (L += i * I),
      (H += i * d),
      (Q += i * D),
      (J += i * ce),
      (G += i * ie),
      (W += i * w),
      (Z += i * $),
      (U += i * K),
      (B += i * Y),
      (ae += i * ue),
      (fe += i * se),
      (M += i * oe),
      (q += i * le),
      (h += i * pe),
      (m += i * ne),
      (b += i * ve),
      (i = e[12]),
      (H += i * I),
      (Q += i * d),
      (J += i * D),
      (G += i * ce),
      (W += i * ie),
      (Z += i * w),
      (U += i * $),
      (B += i * K),
      (ae += i * Y),
      (fe += i * ue),
      (M += i * se),
      (q += i * oe),
      (h += i * le),
      (m += i * pe),
      (b += i * ne),
      (S += i * ve),
      (i = e[13]),
      (Q += i * I),
      (J += i * d),
      (G += i * D),
      (W += i * ce),
      (Z += i * ie),
      (U += i * w),
      (B += i * $),
      (ae += i * K),
      (fe += i * Y),
      (M += i * ue),
      (q += i * se),
      (h += i * oe),
      (m += i * le),
      (b += i * pe),
      (S += i * ne),
      (R += i * ve),
      (i = e[14]),
      (J += i * I),
      (G += i * d),
      (W += i * D),
      (Z += i * ce),
      (U += i * ie),
      (B += i * w),
      (ae += i * $),
      (fe += i * K),
      (M += i * Y),
      (q += i * ue),
      (h += i * se),
      (m += i * oe),
      (b += i * le),
      (S += i * pe),
      (R += i * ne),
      (N += i * ve),
      (i = e[15]),
      (G += i * I),
      (W += i * d),
      (Z += i * D),
      (U += i * ce),
      (B += i * ie),
      (ae += i * w),
      (fe += i * $),
      (M += i * K),
      (q += i * Y),
      (h += i * ue),
      (m += i * se),
      (b += i * oe),
      (S += i * le),
      (R += i * pe),
      (N += i * ne),
      (z += i * ve),
      (o += 38 * W),
      (c += 38 * Z),
      (l += 38 * U),
      (p += 38 * B),
      (g += 38 * ae),
      (y += 38 * fe),
      (v += 38 * M),
      (A += 38 * q),
      (E += 38 * h),
      (P += 38 * m),
      (T += 38 * b),
      (L += 38 * S),
      (H += 38 * R),
      (Q += 38 * N),
      (J += 38 * z),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = p + n + 65535),
      (n = Math.floor(i / 65536)),
      (p = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = L + n + 65535),
      (n = Math.floor(i / 65536)),
      (L = i - n * 65536),
      (i = H + n + 65535),
      (n = Math.floor(i / 65536)),
      (H = i - n * 65536),
      (i = Q + n + 65535),
      (n = Math.floor(i / 65536)),
      (Q = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = p + n + 65535),
      (n = Math.floor(i / 65536)),
      (p = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = L + n + 65535),
      (n = Math.floor(i / 65536)),
      (L = i - n * 65536),
      (i = H + n + 65535),
      (n = Math.floor(i / 65536)),
      (H = i - n * 65536),
      (i = Q + n + 65535),
      (n = Math.floor(i / 65536)),
      (Q = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (r[0] = o),
      (r[1] = c),
      (r[2] = l),
      (r[3] = p),
      (r[4] = g),
      (r[5] = y),
      (r[6] = v),
      (r[7] = A),
      (r[8] = E),
      (r[9] = P),
      (r[10] = T),
      (r[11] = L),
      (r[12] = H),
      (r[13] = Q),
      (r[14] = J),
      (r[15] = G);
  }
  function Ua(r, e) {
    Dn(r, e, e);
  }
  function H4(r, e) {
    let t = qi();
    for (let i = 0; i < 16; i++) t[i] = e[i];
    for (let i = 253; i >= 0; i--) Ua(t, t), i !== 2 && i !== 4 && Dn(t, t, e);
    for (let i = 0; i < 16; i++) r[i] = t[i];
  }
  function Jf(r, e) {
    let t = new Uint8Array(32),
      i = new Float64Array(80),
      n = qi(),
      o = qi(),
      c = qi(),
      l = qi(),
      p = qi(),
      g = qi();
    for (let E = 0; E < 31; E++) t[E] = r[E];
    (t[31] = (r[31] & 127) | 64), (t[0] &= 248), k4(i, e);
    for (let E = 0; E < 16; E++) o[E] = i[E];
    n[0] = l[0] = 1;
    for (let E = 254; E >= 0; --E) {
      let P = (t[E >>> 3] >>> (E & 7)) & 1;
      Ba(n, o, P),
        Ba(c, l, P),
        Fu(p, n, c),
        Lu(n, n, c),
        Fu(c, o, l),
        Lu(o, o, l),
        Ua(l, p),
        Ua(g, n),
        Dn(n, c, n),
        Dn(c, o, p),
        Fu(p, n, c),
        Lu(n, n, c),
        Ua(o, n),
        Lu(c, l, g),
        Dn(n, c, j4),
        Fu(n, n, l),
        Dn(c, c, n),
        Dn(n, l, g),
        Dn(l, o, i),
        Ua(o, p),
        Ba(n, o, P),
        Ba(c, l, P);
    }
    for (let E = 0; E < 16; E++)
      (i[E + 16] = n[E]),
        (i[E + 32] = c[E]),
        (i[E + 48] = o[E]),
        (i[E + 64] = l[E]);
    let y = i.subarray(32),
      v = i.subarray(16);
    H4(y, y), Dn(v, v, y);
    let A = new Uint8Array(32);
    return z4(A, v), A;
  }
  Bt.scalarMult = Jf;
  function Wy(r) {
    return Jf(r, Jy);
  }
  Bt.scalarMultBase = Wy;
  function Yy(r) {
    if (r.length !== Bt.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${Bt.SECRET_KEY_LENGTH} bytes`);
    let e = new Uint8Array(r);
    return { publicKey: Wy(e), secretKey: e };
  }
  Bt.generateKeyPairFromSeed = Yy;
  function K4(r) {
    let e = (0, U4.randomBytes)(32, r),
      t = Yy(e);
    return (0, q4.wipe)(e), t;
  }
  Bt.generateKeyPair = K4;
  function V4(r, e, t = !1) {
    if (r.length !== Bt.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (e.length !== Bt.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    let i = Jf(r, e);
    if (t) {
      let n = 0;
      for (let o = 0; o < i.length; o++) n |= i[o];
      if (n === 0) throw new Error("X25519: invalid shared key");
    }
    return i;
  }
  Bt.sharedKey = V4;
});
var Fb = Se((MU, Tb) => {
  "use strict";
  function f7(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Tb.exports = d7;
  function d7(r, e, t) {
    var i = (t && t.stringify) || f7,
      n = 1;
    if (typeof r == "object" && r !== null) {
      var o = e.length + n;
      if (o === 1) return r;
      var c = new Array(o);
      c[0] = i(r);
      for (var l = 1; l < o; l++) c[l] = i(e[l]);
      return c.join(" ");
    }
    if (typeof r != "string") return r;
    var p = e.length;
    if (p === 0) return r;
    for (
      var g = "", y = 1 - n, v = -1, A = (r && r.length) || 0, E = 0;
      E < A;

    ) {
      if (r.charCodeAt(E) === 37 && E + 1 < A) {
        switch (((v = v > -1 ? v : 0), r.charCodeAt(E + 1))) {
          case 100:
          case 102:
            if (y >= p || e[y] == null) break;
            v < E && (g += r.slice(v, E)),
              (g += Number(e[y])),
              (v = E + 2),
              E++;
            break;
          case 105:
            if (y >= p || e[y] == null) break;
            v < E && (g += r.slice(v, E)),
              (g += Math.floor(Number(e[y]))),
              (v = E + 2),
              E++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= p || e[y] === void 0) break;
            v < E && (g += r.slice(v, E));
            var P = typeof e[y];
            if (P === "string") {
              (g += "'" + e[y] + "'"), (v = E + 2), E++;
              break;
            }
            if (P === "function") {
              (g += e[y].name || "<anonymous>"), (v = E + 2), E++;
              break;
            }
            (g += i(e[y])), (v = E + 2), E++;
            break;
          case 115:
            if (y >= p) break;
            v < E && (g += r.slice(v, E)),
              (g += String(e[y])),
              (v = E + 2),
              E++;
            break;
          case 37:
            v < E && (g += r.slice(v, E)), (g += "%"), (v = E + 2), E++, y--;
            break;
        }
        ++y;
      }
      ++E;
    }
    return v === -1 ? r : (v < A && (g += r.slice(v)), g);
  }
});
var Ep = Se((NU, qb) => {
  "use strict";
  var Lb = Fb();
  qb.exports = en;
  var hc = A7().console || {},
    p7 = {
      mapHttpRequest: dh,
      mapHttpResponse: dh,
      wrapRequestSerializer: bp,
      wrapResponseSerializer: bp,
      wrapErrorSerializer: bp,
      req: dh,
      res: dh,
      err: w7,
    };
  function g7(r, e) {
    return Array.isArray(r)
      ? r.filter(function (i) {
          return i !== "!stdSerializers.err";
        })
      : r === !0
      ? Object.keys(e)
      : !1;
  }
  function en(r) {
    (r = r || {}), (r.browser = r.browser || {});
    let e = r.browser.transmit;
    if (e && typeof e.send != "function")
      throw Error("pino: transmit option must have a send function");
    let t = r.browser.write || hc;
    r.browser.write && (r.browser.asObject = !0);
    let i = r.serializers || {},
      n = g7(r.browser.serialize, i),
      o = r.browser.serialize;
    Array.isArray(r.browser.serialize) &&
      r.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (o = !1);
    let c = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof t == "function" &&
      (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
      r.enabled === !1 && (r.level = "silent");
    let l = r.level || "info",
      p = Object.create(t);
    p.log || (p.log = lc),
      Object.defineProperty(p, "levelVal", { get: y }),
      Object.defineProperty(p, "level", { get: v, set: A });
    let g = {
      transmit: e,
      serialize: n,
      asObject: r.browser.asObject,
      levels: c,
      timestamp: b7(r),
    };
    (p.levels = en.levels),
      (p.level = l),
      (p.setMaxListeners =
        p.getMaxListeners =
        p.emit =
        p.addListener =
        p.on =
        p.prependListener =
        p.once =
        p.prependOnceListener =
        p.removeListener =
        p.removeAllListeners =
        p.listeners =
        p.listenerCount =
        p.eventNames =
        p.write =
        p.flush =
          lc),
      (p.serializers = i),
      (p._serialize = n),
      (p._stdErrSerialize = o),
      (p.child = E),
      e && (p._logEvent = _p());
    function y() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function v() {
      return this._level;
    }
    function A(P) {
      if (P !== "silent" && !this.levels.values[P])
        throw Error("unknown level " + P);
      (this._level = P),
        Wo(g, p, "error", "log"),
        Wo(g, p, "fatal", "error"),
        Wo(g, p, "warn", "error"),
        Wo(g, p, "info", "log"),
        Wo(g, p, "debug", "log"),
        Wo(g, p, "trace", "log");
    }
    function E(P, T) {
      if (!P) throw new Error("missing bindings for child Pino");
      (T = T || {}), n && P.serializers && (T.serializers = P.serializers);
      let L = T.serializers;
      if (n && L) {
        var H = Object.assign({}, i, L),
          Q = r.browser.serialize === !0 ? Object.keys(H) : n;
        delete P.serializers, ph([P], Q, H, this._stdErrSerialize);
      }
      function J(G) {
        (this._childLevel = (G._childLevel | 0) + 1),
          (this.error = Yo(G, P, "error")),
          (this.fatal = Yo(G, P, "fatal")),
          (this.warn = Yo(G, P, "warn")),
          (this.info = Yo(G, P, "info")),
          (this.debug = Yo(G, P, "debug")),
          (this.trace = Yo(G, P, "trace")),
          H && ((this.serializers = H), (this._serialize = Q)),
          e && (this._logEvent = _p([].concat(G._logEvent.bindings, P)));
      }
      return (J.prototype = this), new J(this);
    }
    return p;
  }
  en.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  };
  en.stdSerializers = p7;
  en.stdTimeFunctions = Object.assign(
    {},
    { nullTime: Bb, epochTime: Ub, unixTime: _7, isoTime: E7 }
  );
  function Wo(r, e, t, i) {
    let n = Object.getPrototypeOf(e);
    (e[t] =
      e.levelVal > e.levels.values[t]
        ? lc
        : n[t]
        ? n[t]
        : hc[t] || hc[i] || lc),
      m7(r, e, t);
  }
  function m7(r, e, t) {
    (!r.transmit && e[t] === lc) ||
      (e[t] = (function (i) {
        return function () {
          let o = r.timestamp(),
            c = new Array(arguments.length),
            l =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === hc
                ? hc
                : this;
          for (var p = 0; p < c.length; p++) c[p] = arguments[p];
          if (
            (r.serialize &&
              !r.asObject &&
              ph(c, this._serialize, this.serializers, this._stdErrSerialize),
            r.asObject ? i.call(l, y7(this, t, c, o)) : i.apply(l, c),
            r.transmit)
          ) {
            let g = r.transmit.level || e.level,
              y = en.levels.values[g],
              v = en.levels.values[t];
            if (v < y) return;
            v7(
              this,
              {
                ts: o,
                methodLevel: t,
                methodValue: v,
                transmitLevel: g,
                transmitValue: en.levels.values[r.transmit.level || e.level],
                send: r.transmit.send,
                val: e.levelVal,
              },
              c
            );
          }
        };
      })(e[t]));
  }
  function y7(r, e, t, i) {
    r._serialize && ph(t, r._serialize, r.serializers, r._stdErrSerialize);
    let n = t.slice(),
      o = n[0],
      c = {};
    i && (c.time = i), (c.level = en.levels.values[e]);
    let l = (r._childLevel | 0) + 1;
    if ((l < 1 && (l = 1), o !== null && typeof o == "object")) {
      for (; l-- && typeof n[0] == "object"; ) Object.assign(c, n.shift());
      o = n.length ? Lb(n.shift(), n) : void 0;
    } else typeof o == "string" && (o = Lb(n.shift(), n));
    return o !== void 0 && (c.msg = o), c;
  }
  function ph(r, e, t, i) {
    for (let n in r)
      if (i && r[n] instanceof Error) r[n] = en.stdSerializers.err(r[n]);
      else if (typeof r[n] == "object" && !Array.isArray(r[n]))
        for (let o in r[n])
          e && e.indexOf(o) > -1 && o in t && (r[n][o] = t[o](r[n][o]));
  }
  function Yo(r, e, t) {
    return function () {
      let i = new Array(1 + arguments.length);
      i[0] = e;
      for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
      return r[t].apply(this, i);
    };
  }
  function v7(r, e, t) {
    let i = e.send,
      n = e.ts,
      o = e.methodLevel,
      c = e.methodValue,
      l = e.val,
      p = r._logEvent.bindings;
    ph(
      t,
      r._serialize || Object.keys(r.serializers),
      r.serializers,
      r._stdErrSerialize === void 0 ? !0 : r._stdErrSerialize
    ),
      (r._logEvent.ts = n),
      (r._logEvent.messages = t.filter(function (g) {
        return p.indexOf(g) === -1;
      })),
      (r._logEvent.level.label = o),
      (r._logEvent.level.value = c),
      i(o, r._logEvent, l),
      (r._logEvent = _p(p));
  }
  function _p(r) {
    return {
      ts: 0,
      messages: [],
      bindings: r || [],
      level: { label: "", value: 0 },
    };
  }
  function w7(r) {
    let e = { type: r.constructor.name, msg: r.message, stack: r.stack };
    for (let t in r) e[t] === void 0 && (e[t] = r[t]);
    return e;
  }
  function b7(r) {
    return typeof r.timestamp == "function"
      ? r.timestamp
      : r.timestamp === !1
      ? Bb
      : Ub;
  }
  function dh() {
    return {};
  }
  function bp(r) {
    return r;
  }
  function lc() {}
  function Bb() {
    return !1;
  }
  function Ub() {
    return Date.now();
  }
  function _7() {
    return Math.round(Date.now() / 1e3);
  }
  function E7() {
    return new Date(Date.now()).toISOString();
  }
  function A7() {
    function r(e) {
      return typeof e < "u" && e;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return r(self) || r(window) || r(this) || {};
    }
  }
});
var Gb = Se((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: !0 });
  var Xo = Eo(),
    Qo = si();
  Bn.DIGEST_LENGTH = 64;
  Bn.BLOCK_SIZE = 128;
  var Vb = (function () {
    function r() {
      (this.digestLength = Bn.DIGEST_LENGTH),
        (this.blockSize = Bn.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (r.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (r.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.clean = function () {
        Qo.wipe(this._buffer),
          Qo.wipe(this._tempHi),
          Qo.wipe(this._tempLo),
          this.reset();
      }),
      (r.prototype.update = function (e, t) {
        if ((t === void 0 && (t = e.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var i = 0;
        if (((this._bytesHashed += t), this._bufferLength > 0)) {
          for (; this._bufferLength < Bn.BLOCK_SIZE && t > 0; )
            (this._buffer[this._bufferLength++] = e[i++]), t--;
          this._bufferLength === this.blockSize &&
            (Dp(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          t >= this.blockSize &&
          ((i = Dp(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            e,
            i,
            t
          )),
          (t %= this.blockSize));
          t > 0;

        )
          (this._buffer[this._bufferLength++] = e[i++]), t--;
        return this;
      }),
      (r.prototype.finish = function (e) {
        if (!this._finished) {
          var t = this._bytesHashed,
            i = this._bufferLength,
            n = (t / 536870912) | 0,
            o = t << 3,
            c = t % 128 < 112 ? 128 : 256;
          this._buffer[i] = 128;
          for (var l = i + 1; l < c - 8; l++) this._buffer[l] = 0;
          Xo.writeUint32BE(n, this._buffer, c - 8),
            Xo.writeUint32BE(o, this._buffer, c - 4),
            Dp(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              c
            ),
            (this._finished = !0);
        }
        for (var l = 0; l < this.digestLength / 8; l++)
          Xo.writeUint32BE(this._stateHi[l], e, l * 8),
            Xo.writeUint32BE(this._stateLo[l], e, l * 8 + 4);
        return this;
      }),
      (r.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (r.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (r.prototype.restoreState = function (e) {
        return (
          this._stateHi.set(e.stateHi),
          this._stateLo.set(e.stateLo),
          (this._bufferLength = e.bufferLength),
          e.buffer && this._buffer.set(e.buffer),
          (this._bytesHashed = e.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.cleanSavedState = function (e) {
        Qo.wipe(e.stateHi),
          Qo.wipe(e.stateLo),
          e.buffer && Qo.wipe(e.buffer),
          (e.bufferLength = 0),
          (e.bytesHashed = 0);
      }),
      r
    );
  })();
  Bn.SHA512 = Vb;
  var Kb = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function Dp(r, e, t, i, n, o, c) {
    for (
      var l = t[0],
        p = t[1],
        g = t[2],
        y = t[3],
        v = t[4],
        A = t[5],
        E = t[6],
        P = t[7],
        T = i[0],
        L = i[1],
        H = i[2],
        Q = i[3],
        J = i[4],
        G = i[5],
        W = i[6],
        Z = i[7],
        U,
        B,
        ae,
        fe,
        M,
        q,
        h,
        m;
      c >= 128;

    ) {
      for (var b = 0; b < 16; b++) {
        var S = 8 * b + o;
        (r[b] = Xo.readUint32BE(n, S)), (e[b] = Xo.readUint32BE(n, S + 4));
      }
      for (var b = 0; b < 80; b++) {
        var R = l,
          N = p,
          z = g,
          I = y,
          d = v,
          D = A,
          ce = E,
          ie = P,
          w = T,
          $ = L,
          K = H,
          Y = Q,
          ue = J,
          se = G,
          oe = W,
          le = Z;
        if (
          ((U = P),
          (B = Z),
          (M = B & 65535),
          (q = B >>> 16),
          (h = U & 65535),
          (m = U >>> 16),
          (U =
            ((v >>> 14) | (J << 18)) ^
            ((v >>> 18) | (J << 14)) ^
            ((J >>> 9) | (v << 23))),
          (B =
            ((J >>> 14) | (v << 18)) ^
            ((J >>> 18) | (v << 14)) ^
            ((v >>> 9) | (J << 23))),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (U = (v & A) ^ (~v & E)),
          (B = (J & G) ^ (~J & W)),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (U = Kb[b * 2]),
          (B = Kb[b * 2 + 1]),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (U = r[b % 16]),
          (B = e[b % 16]),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (q += M >>> 16),
          (h += q >>> 16),
          (m += h >>> 16),
          (ae = (h & 65535) | (m << 16)),
          (fe = (M & 65535) | (q << 16)),
          (U = ae),
          (B = fe),
          (M = B & 65535),
          (q = B >>> 16),
          (h = U & 65535),
          (m = U >>> 16),
          (U =
            ((l >>> 28) | (T << 4)) ^
            ((T >>> 2) | (l << 30)) ^
            ((T >>> 7) | (l << 25))),
          (B =
            ((T >>> 28) | (l << 4)) ^
            ((l >>> 2) | (T << 30)) ^
            ((l >>> 7) | (T << 25))),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (U = (l & p) ^ (l & g) ^ (p & g)),
          (B = (T & L) ^ (T & H) ^ (L & H)),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (q += M >>> 16),
          (h += q >>> 16),
          (m += h >>> 16),
          (ie = (h & 65535) | (m << 16)),
          (le = (M & 65535) | (q << 16)),
          (U = I),
          (B = Y),
          (M = B & 65535),
          (q = B >>> 16),
          (h = U & 65535),
          (m = U >>> 16),
          (U = ae),
          (B = fe),
          (M += B & 65535),
          (q += B >>> 16),
          (h += U & 65535),
          (m += U >>> 16),
          (q += M >>> 16),
          (h += q >>> 16),
          (m += h >>> 16),
          (I = (h & 65535) | (m << 16)),
          (Y = (M & 65535) | (q << 16)),
          (p = R),
          (g = N),
          (y = z),
          (v = I),
          (A = d),
          (E = D),
          (P = ce),
          (l = ie),
          (L = w),
          (H = $),
          (Q = K),
          (J = Y),
          (G = ue),
          (W = se),
          (Z = oe),
          (T = le),
          b % 16 === 15)
        )
          for (var S = 0; S < 16; S++)
            (U = r[S]),
              (B = e[S]),
              (M = B & 65535),
              (q = B >>> 16),
              (h = U & 65535),
              (m = U >>> 16),
              (U = r[(S + 9) % 16]),
              (B = e[(S + 9) % 16]),
              (M += B & 65535),
              (q += B >>> 16),
              (h += U & 65535),
              (m += U >>> 16),
              (ae = r[(S + 1) % 16]),
              (fe = e[(S + 1) % 16]),
              (U =
                ((ae >>> 1) | (fe << 31)) ^
                ((ae >>> 8) | (fe << 24)) ^
                (ae >>> 7)),
              (B =
                ((fe >>> 1) | (ae << 31)) ^
                ((fe >>> 8) | (ae << 24)) ^
                ((fe >>> 7) | (ae << 25))),
              (M += B & 65535),
              (q += B >>> 16),
              (h += U & 65535),
              (m += U >>> 16),
              (ae = r[(S + 14) % 16]),
              (fe = e[(S + 14) % 16]),
              (U =
                ((ae >>> 19) | (fe << 13)) ^
                ((fe >>> 29) | (ae << 3)) ^
                (ae >>> 6)),
              (B =
                ((fe >>> 19) | (ae << 13)) ^
                ((ae >>> 29) | (fe << 3)) ^
                ((fe >>> 6) | (ae << 26))),
              (M += B & 65535),
              (q += B >>> 16),
              (h += U & 65535),
              (m += U >>> 16),
              (q += M >>> 16),
              (h += q >>> 16),
              (m += h >>> 16),
              (r[S] = (h & 65535) | (m << 16)),
              (e[S] = (M & 65535) | (q << 16));
      }
      (U = l),
        (B = T),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[0]),
        (B = i[0]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[0] = l = (h & 65535) | (m << 16)),
        (i[0] = T = (M & 65535) | (q << 16)),
        (U = p),
        (B = L),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[1]),
        (B = i[1]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[1] = p = (h & 65535) | (m << 16)),
        (i[1] = L = (M & 65535) | (q << 16)),
        (U = g),
        (B = H),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[2]),
        (B = i[2]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[2] = g = (h & 65535) | (m << 16)),
        (i[2] = H = (M & 65535) | (q << 16)),
        (U = y),
        (B = Q),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[3]),
        (B = i[3]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[3] = y = (h & 65535) | (m << 16)),
        (i[3] = Q = (M & 65535) | (q << 16)),
        (U = v),
        (B = J),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[4]),
        (B = i[4]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[4] = v = (h & 65535) | (m << 16)),
        (i[4] = J = (M & 65535) | (q << 16)),
        (U = A),
        (B = G),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[5]),
        (B = i[5]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[5] = A = (h & 65535) | (m << 16)),
        (i[5] = G = (M & 65535) | (q << 16)),
        (U = E),
        (B = W),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[6]),
        (B = i[6]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[6] = E = (h & 65535) | (m << 16)),
        (i[6] = W = (M & 65535) | (q << 16)),
        (U = P),
        (B = Z),
        (M = B & 65535),
        (q = B >>> 16),
        (h = U & 65535),
        (m = U >>> 16),
        (U = t[7]),
        (B = i[7]),
        (M += B & 65535),
        (q += B >>> 16),
        (h += U & 65535),
        (m += U >>> 16),
        (q += M >>> 16),
        (h += q >>> 16),
        (m += h >>> 16),
        (t[7] = P = (h & 65535) | (m << 16)),
        (i[7] = Z = (M & 65535) | (q << 16)),
        (o += 128),
        (c -= 128);
    }
    return o;
  }
  function F7(r) {
    var e = new Vb();
    e.update(r);
    var t = e.digest();
    return e.clean(), t;
  }
  Bn.hash = F7;
});
var o2 = Se((Qe) => {
  "use strict";
  Object.defineProperty(Qe, "__esModule", { value: !0 });
  Qe.convertSecretKeyToX25519 =
    Qe.convertPublicKeyToX25519 =
    Qe.verify =
    Qe.sign =
    Qe.extractPublicKeyFromSecretKey =
    Qe.generateKeyPair =
    Qe.generateKeyPairFromSeed =
    Qe.SEED_LENGTH =
    Qe.SECRET_KEY_LENGTH =
    Qe.PUBLIC_KEY_LENGTH =
    Qe.SIGNATURE_LENGTH =
      void 0;
  var L7 = La(),
    dc = Gb(),
    Qb = si();
  Qe.SIGNATURE_LENGTH = 64;
  Qe.PUBLIC_KEY_LENGTH = 32;
  Qe.SECRET_KEY_LENGTH = 64;
  Qe.SEED_LENGTH = 32;
  function be(r) {
    let e = new Float64Array(16);
    if (r) for (let t = 0; t < r.length; t++) e[t] = r[t];
    return e;
  }
  var B7 = new Uint8Array(32);
  B7[0] = 9;
  var Op = be(),
    Zo = be([1]),
    U7 = be([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    q7 = be([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    $b = be([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    Jb = be([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    j7 = be([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function us(r, e) {
    for (let t = 0; t < 16; t++) r[t] = e[t] | 0;
  }
  function Rp(r) {
    let e = 1;
    for (let t = 0; t < 16; t++) {
      let i = r[t] + e + 65535;
      (e = Math.floor(i / 65536)), (r[t] = i - e * 65536);
    }
    r[0] += e - 1 + 37 * (e - 1);
  }
  function Xb(r, e, t) {
    let i = ~(t - 1);
    for (let n = 0; n < 16; n++) {
      let o = i & (r[n] ^ e[n]);
      (r[n] ^= o), (e[n] ^= o);
    }
  }
  function pc(r, e) {
    let t = be(),
      i = be();
    for (let n = 0; n < 16; n++) i[n] = e[n];
    Rp(i), Rp(i), Rp(i);
    for (let n = 0; n < 2; n++) {
      t[0] = i[0] - 65517;
      for (let c = 1; c < 15; c++)
        (t[c] = i[c] - 65535 - ((t[c - 1] >> 16) & 1)), (t[c - 1] &= 65535);
      t[15] = i[15] - 32767 - ((t[14] >> 16) & 1);
      let o = (t[15] >> 16) & 1;
      (t[14] &= 65535), Xb(i, t, 1 - o);
    }
    for (let n = 0; n < 16; n++)
      (r[2 * n] = i[n] & 255), (r[2 * n + 1] = i[n] >> 8);
  }
  function Zb(r, e) {
    let t = 0;
    for (let i = 0; i < 32; i++) t |= r[i] ^ e[i];
    return (1 & ((t - 1) >>> 8)) - 1;
  }
  function Wb(r, e) {
    let t = new Uint8Array(32),
      i = new Uint8Array(32);
    return pc(t, r), pc(i, e), Zb(t, i);
  }
  function e2(r) {
    let e = new Uint8Array(32);
    return pc(e, r), e[0] & 1;
  }
  function z7(r, e) {
    for (let t = 0; t < 16; t++) r[t] = e[2 * t] + (e[2 * t + 1] << 8);
    r[15] &= 32767;
  }
  function ks(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] + t[i];
  }
  function Ks(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] - t[i];
  }
  function ut(r, e, t) {
    let i,
      n,
      o = 0,
      c = 0,
      l = 0,
      p = 0,
      g = 0,
      y = 0,
      v = 0,
      A = 0,
      E = 0,
      P = 0,
      T = 0,
      L = 0,
      H = 0,
      Q = 0,
      J = 0,
      G = 0,
      W = 0,
      Z = 0,
      U = 0,
      B = 0,
      ae = 0,
      fe = 0,
      M = 0,
      q = 0,
      h = 0,
      m = 0,
      b = 0,
      S = 0,
      R = 0,
      N = 0,
      z = 0,
      I = t[0],
      d = t[1],
      D = t[2],
      ce = t[3],
      ie = t[4],
      w = t[5],
      $ = t[6],
      K = t[7],
      Y = t[8],
      ue = t[9],
      se = t[10],
      oe = t[11],
      le = t[12],
      pe = t[13],
      ne = t[14],
      ve = t[15];
    (i = e[0]),
      (o += i * I),
      (c += i * d),
      (l += i * D),
      (p += i * ce),
      (g += i * ie),
      (y += i * w),
      (v += i * $),
      (A += i * K),
      (E += i * Y),
      (P += i * ue),
      (T += i * se),
      (L += i * oe),
      (H += i * le),
      (Q += i * pe),
      (J += i * ne),
      (G += i * ve),
      (i = e[1]),
      (c += i * I),
      (l += i * d),
      (p += i * D),
      (g += i * ce),
      (y += i * ie),
      (v += i * w),
      (A += i * $),
      (E += i * K),
      (P += i * Y),
      (T += i * ue),
      (L += i * se),
      (H += i * oe),
      (Q += i * le),
      (J += i * pe),
      (G += i * ne),
      (W += i * ve),
      (i = e[2]),
      (l += i * I),
      (p += i * d),
      (g += i * D),
      (y += i * ce),
      (v += i * ie),
      (A += i * w),
      (E += i * $),
      (P += i * K),
      (T += i * Y),
      (L += i * ue),
      (H += i * se),
      (Q += i * oe),
      (J += i * le),
      (G += i * pe),
      (W += i * ne),
      (Z += i * ve),
      (i = e[3]),
      (p += i * I),
      (g += i * d),
      (y += i * D),
      (v += i * ce),
      (A += i * ie),
      (E += i * w),
      (P += i * $),
      (T += i * K),
      (L += i * Y),
      (H += i * ue),
      (Q += i * se),
      (J += i * oe),
      (G += i * le),
      (W += i * pe),
      (Z += i * ne),
      (U += i * ve),
      (i = e[4]),
      (g += i * I),
      (y += i * d),
      (v += i * D),
      (A += i * ce),
      (E += i * ie),
      (P += i * w),
      (T += i * $),
      (L += i * K),
      (H += i * Y),
      (Q += i * ue),
      (J += i * se),
      (G += i * oe),
      (W += i * le),
      (Z += i * pe),
      (U += i * ne),
      (B += i * ve),
      (i = e[5]),
      (y += i * I),
      (v += i * d),
      (A += i * D),
      (E += i * ce),
      (P += i * ie),
      (T += i * w),
      (L += i * $),
      (H += i * K),
      (Q += i * Y),
      (J += i * ue),
      (G += i * se),
      (W += i * oe),
      (Z += i * le),
      (U += i * pe),
      (B += i * ne),
      (ae += i * ve),
      (i = e[6]),
      (v += i * I),
      (A += i * d),
      (E += i * D),
      (P += i * ce),
      (T += i * ie),
      (L += i * w),
      (H += i * $),
      (Q += i * K),
      (J += i * Y),
      (G += i * ue),
      (W += i * se),
      (Z += i * oe),
      (U += i * le),
      (B += i * pe),
      (ae += i * ne),
      (fe += i * ve),
      (i = e[7]),
      (A += i * I),
      (E += i * d),
      (P += i * D),
      (T += i * ce),
      (L += i * ie),
      (H += i * w),
      (Q += i * $),
      (J += i * K),
      (G += i * Y),
      (W += i * ue),
      (Z += i * se),
      (U += i * oe),
      (B += i * le),
      (ae += i * pe),
      (fe += i * ne),
      (M += i * ve),
      (i = e[8]),
      (E += i * I),
      (P += i * d),
      (T += i * D),
      (L += i * ce),
      (H += i * ie),
      (Q += i * w),
      (J += i * $),
      (G += i * K),
      (W += i * Y),
      (Z += i * ue),
      (U += i * se),
      (B += i * oe),
      (ae += i * le),
      (fe += i * pe),
      (M += i * ne),
      (q += i * ve),
      (i = e[9]),
      (P += i * I),
      (T += i * d),
      (L += i * D),
      (H += i * ce),
      (Q += i * ie),
      (J += i * w),
      (G += i * $),
      (W += i * K),
      (Z += i * Y),
      (U += i * ue),
      (B += i * se),
      (ae += i * oe),
      (fe += i * le),
      (M += i * pe),
      (q += i * ne),
      (h += i * ve),
      (i = e[10]),
      (T += i * I),
      (L += i * d),
      (H += i * D),
      (Q += i * ce),
      (J += i * ie),
      (G += i * w),
      (W += i * $),
      (Z += i * K),
      (U += i * Y),
      (B += i * ue),
      (ae += i * se),
      (fe += i * oe),
      (M += i * le),
      (q += i * pe),
      (h += i * ne),
      (m += i * ve),
      (i = e[11]),
      (L += i * I),
      (H += i * d),
      (Q += i * D),
      (J += i * ce),
      (G += i * ie),
      (W += i * w),
      (Z += i * $),
      (U += i * K),
      (B += i * Y),
      (ae += i * ue),
      (fe += i * se),
      (M += i * oe),
      (q += i * le),
      (h += i * pe),
      (m += i * ne),
      (b += i * ve),
      (i = e[12]),
      (H += i * I),
      (Q += i * d),
      (J += i * D),
      (G += i * ce),
      (W += i * ie),
      (Z += i * w),
      (U += i * $),
      (B += i * K),
      (ae += i * Y),
      (fe += i * ue),
      (M += i * se),
      (q += i * oe),
      (h += i * le),
      (m += i * pe),
      (b += i * ne),
      (S += i * ve),
      (i = e[13]),
      (Q += i * I),
      (J += i * d),
      (G += i * D),
      (W += i * ce),
      (Z += i * ie),
      (U += i * w),
      (B += i * $),
      (ae += i * K),
      (fe += i * Y),
      (M += i * ue),
      (q += i * se),
      (h += i * oe),
      (m += i * le),
      (b += i * pe),
      (S += i * ne),
      (R += i * ve),
      (i = e[14]),
      (J += i * I),
      (G += i * d),
      (W += i * D),
      (Z += i * ce),
      (U += i * ie),
      (B += i * w),
      (ae += i * $),
      (fe += i * K),
      (M += i * Y),
      (q += i * ue),
      (h += i * se),
      (m += i * oe),
      (b += i * le),
      (S += i * pe),
      (R += i * ne),
      (N += i * ve),
      (i = e[15]),
      (G += i * I),
      (W += i * d),
      (Z += i * D),
      (U += i * ce),
      (B += i * ie),
      (ae += i * w),
      (fe += i * $),
      (M += i * K),
      (q += i * Y),
      (h += i * ue),
      (m += i * se),
      (b += i * oe),
      (S += i * le),
      (R += i * pe),
      (N += i * ne),
      (z += i * ve),
      (o += 38 * W),
      (c += 38 * Z),
      (l += 38 * U),
      (p += 38 * B),
      (g += 38 * ae),
      (y += 38 * fe),
      (v += 38 * M),
      (A += 38 * q),
      (E += 38 * h),
      (P += 38 * m),
      (T += 38 * b),
      (L += 38 * S),
      (H += 38 * R),
      (Q += 38 * N),
      (J += 38 * z),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = p + n + 65535),
      (n = Math.floor(i / 65536)),
      (p = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = L + n + 65535),
      (n = Math.floor(i / 65536)),
      (L = i - n * 65536),
      (i = H + n + 65535),
      (n = Math.floor(i / 65536)),
      (H = i - n * 65536),
      (i = Q + n + 65535),
      (n = Math.floor(i / 65536)),
      (Q = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = p + n + 65535),
      (n = Math.floor(i / 65536)),
      (p = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = L + n + 65535),
      (n = Math.floor(i / 65536)),
      (L = i - n * 65536),
      (i = H + n + 65535),
      (n = Math.floor(i / 65536)),
      (H = i - n * 65536),
      (i = Q + n + 65535),
      (n = Math.floor(i / 65536)),
      (Q = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (r[0] = o),
      (r[1] = c),
      (r[2] = l),
      (r[3] = p),
      (r[4] = g),
      (r[5] = y),
      (r[6] = v),
      (r[7] = A),
      (r[8] = E),
      (r[9] = P),
      (r[10] = T),
      (r[11] = L),
      (r[12] = H),
      (r[13] = Q),
      (r[14] = J),
      (r[15] = G);
  }
  function Hs(r, e) {
    ut(r, e, e);
  }
  function t2(r, e) {
    let t = be(),
      i;
    for (i = 0; i < 16; i++) t[i] = e[i];
    for (i = 253; i >= 0; i--) Hs(t, t), i !== 2 && i !== 4 && ut(t, t, e);
    for (i = 0; i < 16; i++) r[i] = t[i];
  }
  function k7(r, e) {
    let t = be(),
      i;
    for (i = 0; i < 16; i++) t[i] = e[i];
    for (i = 250; i >= 0; i--) Hs(t, t), i !== 1 && ut(t, t, e);
    for (i = 0; i < 16; i++) r[i] = t[i];
  }
  function Pp(r, e) {
    let t = be(),
      i = be(),
      n = be(),
      o = be(),
      c = be(),
      l = be(),
      p = be(),
      g = be(),
      y = be();
    Ks(t, r[1], r[0]),
      Ks(y, e[1], e[0]),
      ut(t, t, y),
      ks(i, r[0], r[1]),
      ks(y, e[0], e[1]),
      ut(i, i, y),
      ut(n, r[3], e[3]),
      ut(n, n, q7),
      ut(o, r[2], e[2]),
      ks(o, o, o),
      Ks(c, i, t),
      Ks(l, o, n),
      ks(p, o, n),
      ks(g, i, t),
      ut(r[0], c, l),
      ut(r[1], g, p),
      ut(r[2], p, l),
      ut(r[3], c, g);
  }
  function Yb(r, e, t) {
    for (let i = 0; i < 4; i++) Xb(r[i], e[i], t);
  }
  function Np(r, e) {
    let t = be(),
      i = be(),
      n = be();
    t2(n, e[2]),
      ut(t, e[0], n),
      ut(i, e[1], n),
      pc(r, i),
      (r[31] ^= e2(t) << 7);
  }
  function r2(r, e, t) {
    us(r[0], Op), us(r[1], Zo), us(r[2], Zo), us(r[3], Op);
    for (let i = 255; i >= 0; --i) {
      let n = (t[(i / 8) | 0] >> (i & 7)) & 1;
      Yb(r, e, n), Pp(e, r), Pp(r, r), Yb(r, e, n);
    }
  }
  function Tp(r, e) {
    let t = [be(), be(), be(), be()];
    us(t[0], $b), us(t[1], Jb), us(t[2], Zo), ut(t[3], $b, Jb), r2(r, t, e);
  }
  function i2(r) {
    if (r.length !== Qe.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${Qe.SEED_LENGTH} bytes`);
    let e = (0, dc.hash)(r);
    (e[0] &= 248), (e[31] &= 127), (e[31] |= 64);
    let t = new Uint8Array(32),
      i = [be(), be(), be(), be()];
    Tp(i, e), Np(t, i);
    let n = new Uint8Array(64);
    return n.set(r), n.set(t, 32), { publicKey: t, secretKey: n };
  }
  Qe.generateKeyPairFromSeed = i2;
  function H7(r) {
    let e = (0, L7.randomBytes)(32, r),
      t = i2(e);
    return (0, Qb.wipe)(e), t;
  }
  Qe.generateKeyPair = H7;
  function K7(r) {
    if (r.length !== Qe.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${Qe.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(r.subarray(32));
  }
  Qe.extractPublicKeyFromSecretKey = K7;
  var Cp = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function n2(r, e) {
    let t, i, n, o;
    for (i = 63; i >= 32; --i) {
      for (t = 0, n = i - 32, o = i - 12; n < o; ++n)
        (e[n] += t - 16 * e[i] * Cp[n - (i - 32)]),
          (t = Math.floor((e[n] + 128) / 256)),
          (e[n] -= t * 256);
      (e[n] += t), (e[i] = 0);
    }
    for (t = 0, n = 0; n < 32; n++)
      (e[n] += t - (e[31] >> 4) * Cp[n]), (t = e[n] >> 8), (e[n] &= 255);
    for (n = 0; n < 32; n++) e[n] -= t * Cp[n];
    for (i = 0; i < 32; i++) (e[i + 1] += e[i] >> 8), (r[i] = e[i] & 255);
  }
  function Mp(r) {
    let e = new Float64Array(64);
    for (let t = 0; t < 64; t++) e[t] = r[t];
    for (let t = 0; t < 64; t++) r[t] = 0;
    n2(r, e);
  }
  function V7(r, e) {
    let t = new Float64Array(64),
      i = [be(), be(), be(), be()],
      n = (0, dc.hash)(r.subarray(0, 32));
    (n[0] &= 248), (n[31] &= 127), (n[31] |= 64);
    let o = new Uint8Array(64);
    o.set(n.subarray(32), 32);
    let c = new dc.SHA512();
    c.update(o.subarray(32)), c.update(e);
    let l = c.digest();
    c.clean(),
      Mp(l),
      Tp(i, l),
      Np(o, i),
      c.reset(),
      c.update(o.subarray(0, 32)),
      c.update(r.subarray(32)),
      c.update(e);
    let p = c.digest();
    Mp(p);
    for (let g = 0; g < 32; g++) t[g] = l[g];
    for (let g = 0; g < 32; g++)
      for (let y = 0; y < 32; y++) t[g + y] += p[g] * n[y];
    return n2(o.subarray(32), t), o;
  }
  Qe.sign = V7;
  function s2(r, e) {
    let t = be(),
      i = be(),
      n = be(),
      o = be(),
      c = be(),
      l = be(),
      p = be();
    return (
      us(r[2], Zo),
      z7(r[1], e),
      Hs(n, r[1]),
      ut(o, n, U7),
      Ks(n, n, r[2]),
      ks(o, r[2], o),
      Hs(c, o),
      Hs(l, c),
      ut(p, l, c),
      ut(t, p, n),
      ut(t, t, o),
      k7(t, t),
      ut(t, t, n),
      ut(t, t, o),
      ut(t, t, o),
      ut(r[0], t, o),
      Hs(i, r[0]),
      ut(i, i, o),
      Wb(i, n) && ut(r[0], r[0], j7),
      Hs(i, r[0]),
      ut(i, i, o),
      Wb(i, n)
        ? -1
        : (e2(r[0]) === e[31] >> 7 && Ks(r[0], Op, r[0]),
          ut(r[3], r[0], r[1]),
          0)
    );
  }
  function G7(r, e, t) {
    let i = new Uint8Array(32),
      n = [be(), be(), be(), be()],
      o = [be(), be(), be(), be()];
    if (t.length !== Qe.SIGNATURE_LENGTH)
      throw new Error(
        `ed25519: signature must be ${Qe.SIGNATURE_LENGTH} bytes`
      );
    if (s2(o, r)) return !1;
    let c = new dc.SHA512();
    c.update(t.subarray(0, 32)), c.update(r), c.update(e);
    let l = c.digest();
    return (
      Mp(l), r2(n, o, l), Tp(o, t.subarray(32)), Pp(n, o), Np(i, n), !Zb(t, i)
    );
  }
  Qe.verify = G7;
  function $7(r) {
    let e = [be(), be(), be(), be()];
    if (s2(e, r)) throw new Error("Ed25519: invalid public key");
    let t = be(),
      i = be(),
      n = e[1];
    ks(t, Zo, n), Ks(i, Zo, n), t2(i, i), ut(t, t, i);
    let o = new Uint8Array(32);
    return pc(o, t), o;
  }
  Qe.convertPublicKeyToX25519 = $7;
  function J7(r) {
    let e = (0, dc.hash)(r.subarray(0, 32));
    (e[0] &= 248), (e[31] &= 127), (e[31] |= 64);
    let t = new Uint8Array(e.subarray(0, 32));
    return (0, Qb.wipe)(e), t;
  }
  Qe.convertSecretKeyToX25519 = J7;
});
var D2 = {};
rr(D2, {
  __assign: () => zp,
  __asyncDelegator: () => fM,
  __asyncGenerator: () => lM,
  __asyncValues: () => dM,
  __await: () => wc,
  __awaiter: () => sM,
  __classPrivateFieldGet: () => yM,
  __classPrivateFieldSet: () => vM,
  __createBinding: () => aM,
  __decorate: () => rM,
  __exportStar: () => cM,
  __extends: () => eM,
  __generator: () => oM,
  __importDefault: () => mM,
  __importStar: () => gM,
  __makeTemplateObject: () => pM,
  __metadata: () => nM,
  __param: () => iM,
  __read: () => I2,
  __rest: () => tM,
  __spread: () => uM,
  __spreadArrays: () => hM,
  __values: () => kp,
});
function eM(r, e) {
  jp(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function tM(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(r); n < i.length; n++)
      e.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[n]) &&
        (t[i[n]] = r[i[n]]);
  return t;
}
function rM(r, e, t, i) {
  var n = arguments.length,
    o =
      n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(r, e, t, i);
  else
    for (var l = r.length - 1; l >= 0; l--)
      (c = r[l]) && (o = (n < 3 ? c(o) : n > 3 ? c(e, t, o) : c(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function iM(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function nM(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function sM(r, e, t, i) {
  function n(o) {
    return o instanceof t
      ? o
      : new t(function (c) {
          c(o);
        });
  }
  return new (t || (t = Promise))(function (o, c) {
    function l(y) {
      try {
        g(i.next(y));
      } catch (v) {
        c(v);
      }
    }
    function p(y) {
      try {
        g(i.throw(y));
      } catch (v) {
        c(v);
      }
    }
    function g(y) {
      y.done ? o(y.value) : n(y.value).then(l, p);
    }
    g((i = i.apply(r, e || [])).next());
  });
}
function oM(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    o,
    c;
  return (
    (c = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == "function" &&
      (c[Symbol.iterator] = function () {
        return this;
      }),
    c
  );
  function l(g) {
    return function (y) {
      return p([g, y]);
    };
  }
  function p(g) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          n &&
            (o =
              g[0] & 2
                ? n.return
                : g[0]
                ? n.throw || ((o = n.return) && o.call(n), 0)
                : n.next) &&
            !(o = o.call(n, g[1])).done)
        )
          return o;
        switch (((n = 0), o && (g = [g[0] & 2, o.value]), g[0])) {
          case 0:
          case 1:
            o = g;
            break;
          case 4:
            return t.label++, { value: g[1], done: !1 };
          case 5:
            t.label++, (n = g[1]), (g = [0]);
            continue;
          case 7:
            (g = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((o = t.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (g[0] === 6 || g[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (g[0] === 3 && (!o || (g[1] > o[0] && g[1] < o[3]))) {
              t.label = g[1];
              break;
            }
            if (g[0] === 6 && t.label < o[1]) {
              (t.label = o[1]), (o = g);
              break;
            }
            if (o && t.label < o[2]) {
              (t.label = o[2]), t.ops.push(g);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        g = e.call(r, t);
      } catch (y) {
        (g = [6, y]), (n = 0);
      } finally {
        i = o = 0;
      }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function aM(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function cM(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function kp(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function I2(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    n,
    o = [],
    c;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = i.next()).done; ) o.push(n.value);
  } catch (l) {
    c = { error: l };
  } finally {
    try {
      n && !n.done && (t = i.return) && t.call(i);
    } finally {
      if (c) throw c.error;
    }
  }
  return o;
}
function uM() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(I2(arguments[e]));
  return r;
}
function hM() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), n = 0, e = 0; e < t; e++)
    for (var o = arguments[e], c = 0, l = o.length; c < l; c++, n++)
      i[n] = o[c];
  return i;
}
function wc(r) {
  return this instanceof wc ? ((this.v = r), this) : new wc(r);
}
function lM(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    n,
    o = [];
  return (
    (n = {}),
    c("next"),
    c("throw"),
    c("return"),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function c(A) {
    i[A] &&
      (n[A] = function (E) {
        return new Promise(function (P, T) {
          o.push([A, E, P, T]) > 1 || l(A, E);
        });
      });
  }
  function l(A, E) {
    try {
      p(i[A](E));
    } catch (P) {
      v(o[0][3], P);
    }
  }
  function p(A) {
    A.value instanceof wc
      ? Promise.resolve(A.value.v).then(g, y)
      : v(o[0][2], A);
  }
  function g(A) {
    l("next", A);
  }
  function y(A) {
    l("throw", A);
  }
  function v(A, E) {
    A(E), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function fM(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (n) {
      throw n;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(n, o) {
    e[n] = r[n]
      ? function (c) {
          return (t = !t)
            ? { value: wc(r[n](c)), done: n === "return" }
            : o
            ? o(c)
            : c;
        }
      : o;
  }
}
function dM(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof kp == "function" ? kp(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(o) {
    t[o] =
      r[o] &&
      function (c) {
        return new Promise(function (l, p) {
          (c = r[o](c)), n(l, p, c.done, c.value);
        });
      };
  }
  function n(o, c, l, p) {
    Promise.resolve(p).then(function (g) {
      o({ value: g, done: l });
    }, c);
  }
}
function pM(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function gM(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function mM(r) {
  return r && r.__esModule ? r : { default: r };
}
function yM(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function vM(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
var jp,
  zp,
  R2 = Sf(() => {
    "use strict";
    jp = function (r, e) {
      return (
        (jp =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, i) {
              t.__proto__ = i;
            }) ||
          function (t, i) {
            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
          }),
        jp(r, e)
      );
    };
    zp = function () {
      return (
        (zp =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        zp.apply(this, arguments)
      );
    };
  });
var O2 = Se((ls) => {
  "use strict";
  Object.defineProperty(ls, "__esModule", { value: !0 });
  ls.isBrowserCryptoAvailable =
    ls.getSubtleCrypto =
    ls.getBrowerCrypto =
      void 0;
  function Hp() {
    return (
      (global == null ? void 0 : global.crypto) ||
      (global == null ? void 0 : global.msCrypto) ||
      {}
    );
  }
  ls.getBrowerCrypto = Hp;
  function C2() {
    let r = Hp();
    return r.subtle || r.webkitSubtle;
  }
  ls.getSubtleCrypto = C2;
  function wM() {
    return !!Hp() && !!C2();
  }
  ls.isBrowserCryptoAvailable = wM;
});
var N2 = Se((fs) => {
  "use strict";
  Object.defineProperty(fs, "__esModule", { value: !0 });
  fs.isBrowser = fs.isNode = fs.isReactNative = void 0;
  function P2() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  fs.isReactNative = P2;
  function M2() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  fs.isNode = M2;
  function bM() {
    return !P2() && !M2();
  }
  fs.isBrowser = bM;
});
var Kp = Se((Uh) => {
  "use strict";
  Object.defineProperty(Uh, "__esModule", { value: !0 });
  var T2 = (R2(), Cs(D2));
  T2.__exportStar(O2(), Uh);
  T2.__exportStar(N2(), Uh);
});
var z2 = Se((Pq, j2) => {
  "use strict";
  j2.exports = function () {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  };
});
var x3 = Se((Ec, ra) => {
  "use strict";
  var PM = 200,
    n0 = "__lodash_hash_undefined__",
    Xh = 1,
    r3 = 2,
    i3 = 9007199254740991,
    Vh = "[object Arguments]",
    Qp = "[object Array]",
    MM = "[object AsyncFunction]",
    n3 = "[object Boolean]",
    s3 = "[object Date]",
    o3 = "[object Error]",
    a3 = "[object Function]",
    NM = "[object GeneratorFunction]",
    Gh = "[object Map]",
    c3 = "[object Number]",
    TM = "[object Null]",
    ta = "[object Object]",
    V2 = "[object Promise]",
    FM = "[object Proxy]",
    u3 = "[object RegExp]",
    $h = "[object Set]",
    h3 = "[object String]",
    LM = "[object Symbol]",
    BM = "[object Undefined]",
    Xp = "[object WeakMap]",
    l3 = "[object ArrayBuffer]",
    Jh = "[object DataView]",
    UM = "[object Float32Array]",
    qM = "[object Float64Array]",
    jM = "[object Int8Array]",
    zM = "[object Int16Array]",
    kM = "[object Int32Array]",
    HM = "[object Uint8Array]",
    KM = "[object Uint8ClampedArray]",
    VM = "[object Uint16Array]",
    GM = "[object Uint32Array]",
    $M = /[\\^$.*+?()[\]{}|]/g,
    JM = /^\[object .+?Constructor\]$/,
    WM = /^(?:0|[1-9]\d*)$/,
    Ot = {};
  Ot[UM] =
    Ot[qM] =
    Ot[jM] =
    Ot[zM] =
    Ot[kM] =
    Ot[HM] =
    Ot[KM] =
    Ot[VM] =
    Ot[GM] =
      !0;
  Ot[Vh] =
    Ot[Qp] =
    Ot[l3] =
    Ot[n3] =
    Ot[Jh] =
    Ot[s3] =
    Ot[o3] =
    Ot[a3] =
    Ot[Gh] =
    Ot[c3] =
    Ot[ta] =
    Ot[u3] =
    Ot[$h] =
    Ot[h3] =
    Ot[Xp] =
      !1;
  var f3 =
      typeof global == "object" && global && global.Object === Object && global,
    YM = typeof self == "object" && self && self.Object === Object && self,
    qn = f3 || YM || Function("return this")(),
    d3 = typeof Ec == "object" && Ec && !Ec.nodeType && Ec,
    G2 = d3 && typeof ra == "object" && ra && !ra.nodeType && ra,
    p3 = G2 && G2.exports === d3,
    Jp = p3 && f3.process,
    $2 = (function () {
      try {
        return Jp && Jp.binding && Jp.binding("util");
      } catch {}
    })(),
    J2 = $2 && $2.isTypedArray;
  function QM(r, e) {
    for (var t = -1, i = r == null ? 0 : r.length, n = 0, o = []; ++t < i; ) {
      var c = r[t];
      e(c, t, r) && (o[n++] = c);
    }
    return o;
  }
  function XM(r, e) {
    for (var t = -1, i = e.length, n = r.length; ++t < i; ) r[n + t] = e[t];
    return r;
  }
  function ZM(r, e) {
    for (var t = -1, i = r == null ? 0 : r.length; ++t < i; )
      if (e(r[t], t, r)) return !0;
    return !1;
  }
  function eN(r, e) {
    for (var t = -1, i = Array(r); ++t < r; ) i[t] = e(t);
    return i;
  }
  function tN(r) {
    return function (e) {
      return r(e);
    };
  }
  function rN(r, e) {
    return r.has(e);
  }
  function iN(r, e) {
    return r?.[e];
  }
  function nN(r) {
    var e = -1,
      t = Array(r.size);
    return (
      r.forEach(function (i, n) {
        t[++e] = [n, i];
      }),
      t
    );
  }
  function sN(r, e) {
    return function (t) {
      return r(e(t));
    };
  }
  function oN(r) {
    var e = -1,
      t = Array(r.size);
    return (
      r.forEach(function (i) {
        t[++e] = i;
      }),
      t
    );
  }
  var aN = Array.prototype,
    cN = Function.prototype,
    Zh = Object.prototype,
    Wp = qn["__core-js_shared__"],
    g3 = cN.toString,
    nn = Zh.hasOwnProperty,
    W2 = (function () {
      var r = /[^.]+$/.exec((Wp && Wp.keys && Wp.keys.IE_PROTO) || "");
      return r ? "Symbol(src)_1." + r : "";
    })(),
    m3 = Zh.toString,
    uN = RegExp(
      "^" +
        g3
          .call(nn)
          .replace($M, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Y2 = p3 ? qn.Buffer : void 0,
    Wh = qn.Symbol,
    Q2 = qn.Uint8Array,
    y3 = Zh.propertyIsEnumerable,
    hN = aN.splice,
    Vs = Wh ? Wh.toStringTag : void 0,
    X2 = Object.getOwnPropertySymbols,
    lN = Y2 ? Y2.isBuffer : void 0,
    fN = sN(Object.keys, Object),
    Zp = ia(qn, "DataView"),
    Ac = ia(qn, "Map"),
    e0 = ia(qn, "Promise"),
    t0 = ia(qn, "Set"),
    r0 = ia(qn, "WeakMap"),
    Sc = ia(Object, "create"),
    dN = Js(Zp),
    pN = Js(Ac),
    gN = Js(e0),
    mN = Js(t0),
    yN = Js(r0),
    Z2 = Wh ? Wh.prototype : void 0,
    Yp = Z2 ? Z2.valueOf : void 0;
  function Gs(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
      var i = r[e];
      this.set(i[0], i[1]);
    }
  }
  function vN() {
    (this.__data__ = Sc ? Sc(null) : {}), (this.size = 0);
  }
  function wN(r) {
    var e = this.has(r) && delete this.__data__[r];
    return (this.size -= e ? 1 : 0), e;
  }
  function bN(r) {
    var e = this.__data__;
    if (Sc) {
      var t = e[r];
      return t === n0 ? void 0 : t;
    }
    return nn.call(e, r) ? e[r] : void 0;
  }
  function _N(r) {
    var e = this.__data__;
    return Sc ? e[r] !== void 0 : nn.call(e, r);
  }
  function EN(r, e) {
    var t = this.__data__;
    return (
      (this.size += this.has(r) ? 0 : 1),
      (t[r] = Sc && e === void 0 ? n0 : e),
      this
    );
  }
  Gs.prototype.clear = vN;
  Gs.prototype.delete = wN;
  Gs.prototype.get = bN;
  Gs.prototype.has = _N;
  Gs.prototype.set = EN;
  function jn(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
      var i = r[e];
      this.set(i[0], i[1]);
    }
  }
  function AN() {
    (this.__data__ = []), (this.size = 0);
  }
  function SN(r) {
    var e = this.__data__,
      t = el(e, r);
    if (t < 0) return !1;
    var i = e.length - 1;
    return t == i ? e.pop() : hN.call(e, t, 1), --this.size, !0;
  }
  function xN(r) {
    var e = this.__data__,
      t = el(e, r);
    return t < 0 ? void 0 : e[t][1];
  }
  function IN(r) {
    return el(this.__data__, r) > -1;
  }
  function DN(r, e) {
    var t = this.__data__,
      i = el(t, r);
    return i < 0 ? (++this.size, t.push([r, e])) : (t[i][1] = e), this;
  }
  jn.prototype.clear = AN;
  jn.prototype.delete = SN;
  jn.prototype.get = xN;
  jn.prototype.has = IN;
  jn.prototype.set = DN;
  function $s(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
      var i = r[e];
      this.set(i[0], i[1]);
    }
  }
  function RN() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Gs(),
        map: new (Ac || jn)(),
        string: new Gs(),
      });
  }
  function CN(r) {
    var e = tl(this, r).delete(r);
    return (this.size -= e ? 1 : 0), e;
  }
  function ON(r) {
    return tl(this, r).get(r);
  }
  function PN(r) {
    return tl(this, r).has(r);
  }
  function MN(r, e) {
    var t = tl(this, r),
      i = t.size;
    return t.set(r, e), (this.size += t.size == i ? 0 : 1), this;
  }
  $s.prototype.clear = RN;
  $s.prototype.delete = CN;
  $s.prototype.get = ON;
  $s.prototype.has = PN;
  $s.prototype.set = MN;
  function Yh(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.__data__ = new $s(); ++e < t; ) this.add(r[e]);
  }
  function NN(r) {
    return this.__data__.set(r, n0), this;
  }
  function TN(r) {
    return this.__data__.has(r);
  }
  Yh.prototype.add = Yh.prototype.push = NN;
  Yh.prototype.has = TN;
  function ms(r) {
    var e = (this.__data__ = new jn(r));
    this.size = e.size;
  }
  function FN() {
    (this.__data__ = new jn()), (this.size = 0);
  }
  function LN(r) {
    var e = this.__data__,
      t = e.delete(r);
    return (this.size = e.size), t;
  }
  function BN(r) {
    return this.__data__.get(r);
  }
  function UN(r) {
    return this.__data__.has(r);
  }
  function qN(r, e) {
    var t = this.__data__;
    if (t instanceof jn) {
      var i = t.__data__;
      if (!Ac || i.length < PM - 1)
        return i.push([r, e]), (this.size = ++t.size), this;
      t = this.__data__ = new $s(i);
    }
    return t.set(r, e), (this.size = t.size), this;
  }
  ms.prototype.clear = FN;
  ms.prototype.delete = LN;
  ms.prototype.get = BN;
  ms.prototype.has = UN;
  ms.prototype.set = qN;
  function jN(r, e) {
    var t = Qh(r),
      i = !t && tT(r),
      n = !t && !i && i0(r),
      o = !t && !i && !n && S3(r),
      c = t || i || n || o,
      l = c ? eN(r.length, String) : [],
      p = l.length;
    for (var g in r)
      (e || nn.call(r, g)) &&
        !(
          c &&
          (g == "length" ||
            (n && (g == "offset" || g == "parent")) ||
            (o && (g == "buffer" || g == "byteLength" || g == "byteOffset")) ||
            YN(g, p))
        ) &&
        l.push(g);
    return l;
  }
  function el(r, e) {
    for (var t = r.length; t--; ) if (b3(r[t][0], e)) return t;
    return -1;
  }
  function zN(r, e, t) {
    var i = e(r);
    return Qh(r) ? i : XM(i, t(r));
  }
  function Ic(r) {
    return r == null
      ? r === void 0
        ? BM
        : TM
      : Vs && Vs in Object(r)
      ? JN(r)
      : eT(r);
  }
  function e3(r) {
    return xc(r) && Ic(r) == Vh;
  }
  function v3(r, e, t, i, n) {
    return r === e
      ? !0
      : r == null || e == null || (!xc(r) && !xc(e))
      ? r !== r && e !== e
      : kN(r, e, t, i, v3, n);
  }
  function kN(r, e, t, i, n, o) {
    var c = Qh(r),
      l = Qh(e),
      p = c ? Qp : gs(r),
      g = l ? Qp : gs(e);
    (p = p == Vh ? ta : p), (g = g == Vh ? ta : g);
    var y = p == ta,
      v = g == ta,
      A = p == g;
    if (A && i0(r)) {
      if (!i0(e)) return !1;
      (c = !0), (y = !1);
    }
    if (A && !y)
      return (
        o || (o = new ms()),
        c || S3(r) ? w3(r, e, t, i, n, o) : GN(r, e, p, t, i, n, o)
      );
    if (!(t & Xh)) {
      var E = y && nn.call(r, "__wrapped__"),
        P = v && nn.call(e, "__wrapped__");
      if (E || P) {
        var T = E ? r.value() : r,
          L = P ? e.value() : e;
        return o || (o = new ms()), n(T, L, t, i, o);
      }
    }
    return A ? (o || (o = new ms()), $N(r, e, t, i, n, o)) : !1;
  }
  function HN(r) {
    if (!A3(r) || XN(r)) return !1;
    var e = _3(r) ? uN : JM;
    return e.test(Js(r));
  }
  function KN(r) {
    return xc(r) && E3(r.length) && !!Ot[Ic(r)];
  }
  function VN(r) {
    if (!ZN(r)) return fN(r);
    var e = [];
    for (var t in Object(r)) nn.call(r, t) && t != "constructor" && e.push(t);
    return e;
  }
  function w3(r, e, t, i, n, o) {
    var c = t & Xh,
      l = r.length,
      p = e.length;
    if (l != p && !(c && p > l)) return !1;
    var g = o.get(r);
    if (g && o.get(e)) return g == e;
    var y = -1,
      v = !0,
      A = t & r3 ? new Yh() : void 0;
    for (o.set(r, e), o.set(e, r); ++y < l; ) {
      var E = r[y],
        P = e[y];
      if (i) var T = c ? i(P, E, y, e, r, o) : i(E, P, y, r, e, o);
      if (T !== void 0) {
        if (T) continue;
        v = !1;
        break;
      }
      if (A) {
        if (
          !ZM(e, function (L, H) {
            if (!rN(A, H) && (E === L || n(E, L, t, i, o))) return A.push(H);
          })
        ) {
          v = !1;
          break;
        }
      } else if (!(E === P || n(E, P, t, i, o))) {
        v = !1;
        break;
      }
    }
    return o.delete(r), o.delete(e), v;
  }
  function GN(r, e, t, i, n, o, c) {
    switch (t) {
      case Jh:
        if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
          return !1;
        (r = r.buffer), (e = e.buffer);
      case l3:
        return !(r.byteLength != e.byteLength || !o(new Q2(r), new Q2(e)));
      case n3:
      case s3:
      case c3:
        return b3(+r, +e);
      case o3:
        return r.name == e.name && r.message == e.message;
      case u3:
      case h3:
        return r == e + "";
      case Gh:
        var l = nN;
      case $h:
        var p = i & Xh;
        if ((l || (l = oN), r.size != e.size && !p)) return !1;
        var g = c.get(r);
        if (g) return g == e;
        (i |= r3), c.set(r, e);
        var y = w3(l(r), l(e), i, n, o, c);
        return c.delete(r), y;
      case LM:
        if (Yp) return Yp.call(r) == Yp.call(e);
    }
    return !1;
  }
  function $N(r, e, t, i, n, o) {
    var c = t & Xh,
      l = t3(r),
      p = l.length,
      g = t3(e),
      y = g.length;
    if (p != y && !c) return !1;
    for (var v = p; v--; ) {
      var A = l[v];
      if (!(c ? A in e : nn.call(e, A))) return !1;
    }
    var E = o.get(r);
    if (E && o.get(e)) return E == e;
    var P = !0;
    o.set(r, e), o.set(e, r);
    for (var T = c; ++v < p; ) {
      A = l[v];
      var L = r[A],
        H = e[A];
      if (i) var Q = c ? i(H, L, A, e, r, o) : i(L, H, A, r, e, o);
      if (!(Q === void 0 ? L === H || n(L, H, t, i, o) : Q)) {
        P = !1;
        break;
      }
      T || (T = A == "constructor");
    }
    if (P && !T) {
      var J = r.constructor,
        G = e.constructor;
      J != G &&
        "constructor" in r &&
        "constructor" in e &&
        !(
          typeof J == "function" &&
          J instanceof J &&
          typeof G == "function" &&
          G instanceof G
        ) &&
        (P = !1);
    }
    return o.delete(r), o.delete(e), P;
  }
  function t3(r) {
    return zN(r, nT, WN);
  }
  function tl(r, e) {
    var t = r.__data__;
    return QN(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
  }
  function ia(r, e) {
    var t = iN(r, e);
    return HN(t) ? t : void 0;
  }
  function JN(r) {
    var e = nn.call(r, Vs),
      t = r[Vs];
    try {
      r[Vs] = void 0;
      var i = !0;
    } catch {}
    var n = m3.call(r);
    return i && (e ? (r[Vs] = t) : delete r[Vs]), n;
  }
  var WN = X2
      ? function (r) {
          return r == null
            ? []
            : ((r = Object(r)),
              QM(X2(r), function (e) {
                return y3.call(r, e);
              }));
        }
      : sT,
    gs = Ic;
  ((Zp && gs(new Zp(new ArrayBuffer(1))) != Jh) ||
    (Ac && gs(new Ac()) != Gh) ||
    (e0 && gs(e0.resolve()) != V2) ||
    (t0 && gs(new t0()) != $h) ||
    (r0 && gs(new r0()) != Xp)) &&
    (gs = function (r) {
      var e = Ic(r),
        t = e == ta ? r.constructor : void 0,
        i = t ? Js(t) : "";
      if (i)
        switch (i) {
          case dN:
            return Jh;
          case pN:
            return Gh;
          case gN:
            return V2;
          case mN:
            return $h;
          case yN:
            return Xp;
        }
      return e;
    });
  function YN(r, e) {
    return (
      (e = e ?? i3),
      !!e &&
        (typeof r == "number" || WM.test(r)) &&
        r > -1 &&
        r % 1 == 0 &&
        r < e
    );
  }
  function QN(r) {
    var e = typeof r;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean"
      ? r !== "__proto__"
      : r === null;
  }
  function XN(r) {
    return !!W2 && W2 in r;
  }
  function ZN(r) {
    var e = r && r.constructor,
      t = (typeof e == "function" && e.prototype) || Zh;
    return r === t;
  }
  function eT(r) {
    return m3.call(r);
  }
  function Js(r) {
    if (r != null) {
      try {
        return g3.call(r);
      } catch {}
      try {
        return r + "";
      } catch {}
    }
    return "";
  }
  function b3(r, e) {
    return r === e || (r !== r && e !== e);
  }
  var tT = e3(
      (function () {
        return arguments;
      })()
    )
      ? e3
      : function (r) {
          return xc(r) && nn.call(r, "callee") && !y3.call(r, "callee");
        },
    Qh = Array.isArray;
  function rT(r) {
    return r != null && E3(r.length) && !_3(r);
  }
  var i0 = lN || oT;
  function iT(r, e) {
    return v3(r, e);
  }
  function _3(r) {
    if (!A3(r)) return !1;
    var e = Ic(r);
    return e == a3 || e == NM || e == MM || e == FM;
  }
  function E3(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= i3;
  }
  function A3(r) {
    var e = typeof r;
    return r != null && (e == "object" || e == "function");
  }
  function xc(r) {
    return r != null && typeof r == "object";
  }
  var S3 = J2 ? tN(J2) : KN;
  function nT(r) {
    return rT(r) ? jN(r) : VN(r);
  }
  function sT() {
    return [];
  }
  function oT() {
    return !1;
  }
  ra.exports = iT;
});
var s0 = {};
rr(s0, { default: () => aT });
function aT(r, e) {
  return (
    (e = e || {}),
    new Promise(function (t, i) {
      var n = new XMLHttpRequest(),
        o = [],
        c = [],
        l = {},
        p = function () {
          return {
            ok: ((n.status / 100) | 0) == 2,
            statusText: n.statusText,
            status: n.status,
            url: n.responseURL,
            text: function () {
              return Promise.resolve(n.responseText);
            },
            json: function () {
              return Promise.resolve(n.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([n.response]));
            },
            clone: p,
            headers: {
              keys: function () {
                return o;
              },
              entries: function () {
                return c;
              },
              get: function (y) {
                return l[y.toLowerCase()];
              },
              has: function (y) {
                return y.toLowerCase() in l;
              },
            },
          };
        };
      for (var g in (n.open(e.method || "get", r, !0),
      (n.onload = function () {
        n
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (y, v, A) {
            o.push((v = v.toLowerCase())),
              c.push([v, A]),
              (l[v] = l[v] ? l[v] + "," + A : A);
          }),
          t(p());
      }),
      (n.onerror = i),
      (n.withCredentials = e.credentials == "include"),
      e.headers))
        n.setRequestHeader(g, e.headers[g]);
      n.send(e.body || null);
    })
  );
}
var o0 = Sf(() => {
  "use strict";
});
var D3 = Se((Lq, I3) => {
  "use strict";
  I3.exports =
    self.fetch || (self.fetch = (o0(), Cs(s0)).default || (o0(), Cs(s0)));
});
var p_ = Se((vs, d_) => {
  "use strict";
  var al =
      (typeof globalThis < "u" && globalThis) ||
      (typeof self < "u" && self) ||
      (typeof global < "u" && global),
    cl = (function () {
      function r() {
        (this.fetch = !1), (this.DOMException = al.DOMException);
      }
      return (r.prototype = al), new r();
    })();
  (function (r) {
    var e = (function (t) {
      var i =
          (typeof r < "u" && r) ||
          (typeof self < "u" && self) ||
          (typeof global < "u" && global) ||
          {},
        n = {
          searchParams: "URLSearchParams" in i,
          iterable: "Symbol" in i && "iterator" in Symbol,
          blob:
            "FileReader" in i &&
            "Blob" in i &&
            (function () {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            })(),
          formData: "FormData" in i,
          arrayBuffer: "ArrayBuffer" in i,
        };
      function o(M) {
        return M && DataView.prototype.isPrototypeOf(M);
      }
      if (n.arrayBuffer)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          l =
            ArrayBuffer.isView ||
            function (M) {
              return M && c.indexOf(Object.prototype.toString.call(M)) > -1;
            };
      function p(M) {
        if (
          (typeof M != "string" && (M = String(M)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(M) || M === "")
        )
          throw new TypeError(
            'Invalid character in header field name: "' + M + '"'
          );
        return M.toLowerCase();
      }
      function g(M) {
        return typeof M != "string" && (M = String(M)), M;
      }
      function y(M) {
        var q = {
          next: function () {
            var h = M.shift();
            return { done: h === void 0, value: h };
          },
        };
        return (
          n.iterable &&
            (q[Symbol.iterator] = function () {
              return q;
            }),
          q
        );
      }
      function v(M) {
        (this.map = {}),
          M instanceof v
            ? M.forEach(function (q, h) {
                this.append(h, q);
              }, this)
            : Array.isArray(M)
            ? M.forEach(function (q) {
                if (q.length != 2)
                  throw new TypeError(
                    "Headers constructor: expected name/value pair to be length 2, found" +
                      q.length
                  );
                this.append(q[0], q[1]);
              }, this)
            : M &&
              Object.getOwnPropertyNames(M).forEach(function (q) {
                this.append(q, M[q]);
              }, this);
      }
      (v.prototype.append = function (M, q) {
        (M = p(M)), (q = g(q));
        var h = this.map[M];
        this.map[M] = h ? h + ", " + q : q;
      }),
        (v.prototype.delete = function (M) {
          delete this.map[p(M)];
        }),
        (v.prototype.get = function (M) {
          return (M = p(M)), this.has(M) ? this.map[M] : null;
        }),
        (v.prototype.has = function (M) {
          return this.map.hasOwnProperty(p(M));
        }),
        (v.prototype.set = function (M, q) {
          this.map[p(M)] = g(q);
        }),
        (v.prototype.forEach = function (M, q) {
          for (var h in this.map)
            this.map.hasOwnProperty(h) && M.call(q, this.map[h], h, this);
        }),
        (v.prototype.keys = function () {
          var M = [];
          return (
            this.forEach(function (q, h) {
              M.push(h);
            }),
            y(M)
          );
        }),
        (v.prototype.values = function () {
          var M = [];
          return (
            this.forEach(function (q) {
              M.push(q);
            }),
            y(M)
          );
        }),
        (v.prototype.entries = function () {
          var M = [];
          return (
            this.forEach(function (q, h) {
              M.push([h, q]);
            }),
            y(M)
          );
        }),
        n.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);
      function A(M) {
        if (!M._noBody) {
          if (M.bodyUsed) return Promise.reject(new TypeError("Already read"));
          M.bodyUsed = !0;
        }
      }
      function E(M) {
        return new Promise(function (q, h) {
          (M.onload = function () {
            q(M.result);
          }),
            (M.onerror = function () {
              h(M.error);
            });
        });
      }
      function P(M) {
        var q = new FileReader(),
          h = E(q);
        return q.readAsArrayBuffer(M), h;
      }
      function T(M) {
        var q = new FileReader(),
          h = E(q),
          m = /charset=([A-Za-z0-9_-]+)/.exec(M.type),
          b = m ? m[1] : "utf-8";
        return q.readAsText(M, b), h;
      }
      function L(M) {
        for (
          var q = new Uint8Array(M), h = new Array(q.length), m = 0;
          m < q.length;
          m++
        )
          h[m] = String.fromCharCode(q[m]);
        return h.join("");
      }
      function H(M) {
        if (M.slice) return M.slice(0);
        var q = new Uint8Array(M.byteLength);
        return q.set(new Uint8Array(M)), q.buffer;
      }
      function Q() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (M) {
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = M),
              M
                ? typeof M == "string"
                  ? (this._bodyText = M)
                  : n.blob && Blob.prototype.isPrototypeOf(M)
                  ? (this._bodyBlob = M)
                  : n.formData && FormData.prototype.isPrototypeOf(M)
                  ? (this._bodyFormData = M)
                  : n.searchParams && URLSearchParams.prototype.isPrototypeOf(M)
                  ? (this._bodyText = M.toString())
                  : n.arrayBuffer && n.blob && o(M)
                  ? ((this._bodyArrayBuffer = H(M.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : n.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(M) || l(M))
                  ? (this._bodyArrayBuffer = H(M))
                  : (this._bodyText = M = Object.prototype.toString.call(M))
                : ((this._noBody = !0), (this._bodyText = "")),
              this.headers.get("content-type") ||
                (typeof M == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : n.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(M) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          n.blob &&
            (this.blob = function () {
              var M = A(this);
              if (M) return M;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var M = A(this);
              return (
                M ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                          this._bodyArrayBuffer.byteLength
                      )
                    )
                  : Promise.resolve(this._bodyArrayBuffer))
              );
            } else {
              if (n.blob) return this.blob().then(P);
              throw new Error("could not read as ArrayBuffer");
            }
          }),
          (this.text = function () {
            var M = A(this);
            if (M) return M;
            if (this._bodyBlob) return T(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(L(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          n.formData &&
            (this.formData = function () {
              return this.text().then(Z);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var J = [
        "CONNECT",
        "DELETE",
        "GET",
        "HEAD",
        "OPTIONS",
        "PATCH",
        "POST",
        "PUT",
        "TRACE",
      ];
      function G(M) {
        var q = M.toUpperCase();
        return J.indexOf(q) > -1 ? q : M;
      }
      function W(M, q) {
        if (!(this instanceof W))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        q = q || {};
        var h = q.body;
        if (M instanceof W) {
          if (M.bodyUsed) throw new TypeError("Already read");
          (this.url = M.url),
            (this.credentials = M.credentials),
            q.headers || (this.headers = new v(M.headers)),
            (this.method = M.method),
            (this.mode = M.mode),
            (this.signal = M.signal),
            !h && M._bodyInit != null && ((h = M._bodyInit), (M.bodyUsed = !0));
        } else this.url = String(M);
        if (
          ((this.credentials =
            q.credentials || this.credentials || "same-origin"),
          (q.headers || !this.headers) && (this.headers = new v(q.headers)),
          (this.method = G(q.method || this.method || "GET")),
          (this.mode = q.mode || this.mode || null),
          (this.signal =
            q.signal ||
            this.signal ||
            (function () {
              if ("AbortController" in i) {
                var S = new AbortController();
                return S.signal;
              }
            })()),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && h)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(h),
          (this.method === "GET" || this.method === "HEAD") &&
            (q.cache === "no-store" || q.cache === "no-cache"))
        ) {
          var m = /([?&])_=[^&]*/;
          if (m.test(this.url))
            this.url = this.url.replace(m, "$1_=" + new Date().getTime());
          else {
            var b = /\?/;
            this.url +=
              (b.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      W.prototype.clone = function () {
        return new W(this, { body: this._bodyInit });
      };
      function Z(M) {
        var q = new FormData();
        return (
          M.trim()
            .split("&")
            .forEach(function (h) {
              if (h) {
                var m = h.split("="),
                  b = m.shift().replace(/\+/g, " "),
                  S = m.join("=").replace(/\+/g, " ");
                q.append(decodeURIComponent(b), decodeURIComponent(S));
              }
            }),
          q
        );
      }
      function U(M) {
        var q = new v(),
          h = M.replace(/\r?\n[\t ]+/g, " ");
        return (
          h
            .split("\r")
            .map(function (m) {
              return m.indexOf(`
`) === 0
                ? m.substr(1, m.length)
                : m;
            })
            .forEach(function (m) {
              var b = m.split(":"),
                S = b.shift().trim();
              if (S) {
                var R = b.join(":").trim();
                try {
                  q.append(S, R);
                } catch (N) {
                  console.warn("Response " + N.message);
                }
              }
            }),
          q
        );
      }
      Q.call(W.prototype);
      function B(M, q) {
        if (!(this instanceof B))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        if (
          (q || (q = {}),
          (this.type = "default"),
          (this.status = q.status === void 0 ? 200 : q.status),
          this.status < 200 || this.status > 599)
        )
          throw new RangeError(
            "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
          );
        (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = q.statusText === void 0 ? "" : "" + q.statusText),
          (this.headers = new v(q.headers)),
          (this.url = q.url || ""),
          this._initBody(M);
      }
      Q.call(B.prototype),
        (B.prototype.clone = function () {
          return new B(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new v(this.headers),
            url: this.url,
          });
        }),
        (B.error = function () {
          var M = new B(null, { status: 200, statusText: "" });
          return (M.ok = !1), (M.status = 0), (M.type = "error"), M;
        });
      var ae = [301, 302, 303, 307, 308];
      (B.redirect = function (M, q) {
        if (ae.indexOf(q) === -1) throw new RangeError("Invalid status code");
        return new B(null, { status: q, headers: { location: M } });
      }),
        (t.DOMException = i.DOMException);
      try {
        new t.DOMException();
      } catch {
        (t.DOMException = function (q, h) {
          (this.message = q), (this.name = h);
          var m = Error(q);
          this.stack = m.stack;
        }),
          (t.DOMException.prototype = Object.create(Error.prototype)),
          (t.DOMException.prototype.constructor = t.DOMException);
      }
      function fe(M, q) {
        return new Promise(function (h, m) {
          var b = new W(M, q);
          if (b.signal && b.signal.aborted)
            return m(new t.DOMException("Aborted", "AbortError"));
          var S = new XMLHttpRequest();
          function R() {
            S.abort();
          }
          (S.onload = function () {
            var I = {
              statusText: S.statusText,
              headers: U(S.getAllResponseHeaders() || ""),
            };
            b.url.indexOf("file://") === 0 && (S.status < 200 || S.status > 599)
              ? (I.status = 200)
              : (I.status = S.status),
              (I.url =
                "responseURL" in S
                  ? S.responseURL
                  : I.headers.get("X-Request-URL"));
            var d = "response" in S ? S.response : S.responseText;
            setTimeout(function () {
              h(new B(d, I));
            }, 0);
          }),
            (S.onerror = function () {
              setTimeout(function () {
                m(new TypeError("Network request failed"));
              }, 0);
            }),
            (S.ontimeout = function () {
              setTimeout(function () {
                m(new TypeError("Network request timed out"));
              }, 0);
            }),
            (S.onabort = function () {
              setTimeout(function () {
                m(new t.DOMException("Aborted", "AbortError"));
              }, 0);
            });
          function N(I) {
            try {
              return I === "" && i.location.href ? i.location.href : I;
            } catch {
              return I;
            }
          }
          if (
            (S.open(b.method, N(b.url), !0),
            b.credentials === "include"
              ? (S.withCredentials = !0)
              : b.credentials === "omit" && (S.withCredentials = !1),
            "responseType" in S &&
              (n.blob
                ? (S.responseType = "blob")
                : n.arrayBuffer && (S.responseType = "arraybuffer")),
            q &&
              typeof q.headers == "object" &&
              !(
                q.headers instanceof v ||
                (i.Headers && q.headers instanceof i.Headers)
              ))
          ) {
            var z = [];
            Object.getOwnPropertyNames(q.headers).forEach(function (I) {
              z.push(p(I)), S.setRequestHeader(I, g(q.headers[I]));
            }),
              b.headers.forEach(function (I, d) {
                z.indexOf(d) === -1 && S.setRequestHeader(d, I);
              });
          } else
            b.headers.forEach(function (I, d) {
              S.setRequestHeader(d, I);
            });
          b.signal &&
            (b.signal.addEventListener("abort", R),
            (S.onreadystatechange = function () {
              S.readyState === 4 && b.signal.removeEventListener("abort", R);
            })),
            S.send(typeof b._bodyInit > "u" ? null : b._bodyInit);
        });
      }
      return (
        (fe.polyfill = !0),
        i.fetch ||
          ((i.fetch = fe), (i.Headers = v), (i.Request = W), (i.Response = B)),
        (t.Headers = v),
        (t.Request = W),
        (t.Response = B),
        (t.fetch = fe),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        t
      );
    })({});
  })(cl);
  cl.fetch.ponyfill = !0;
  delete cl.fetch.polyfill;
  var sa = al.fetch ? al : cl;
  vs = sa.fetch;
  vs.default = sa.fetch;
  vs.fetch = sa.fetch;
  vs.Headers = sa.Headers;
  vs.Request = sa.Request;
  vs.Response = sa.Response;
  d_.exports = vs;
});
var L_ = Je(An());
var Tm = function (r, e, t) {
    if (t || arguments.length === 2)
      for (var i = 0, n = e.length, o; i < n; i++)
        (o || !(i in e)) &&
          (o || (o = Array.prototype.slice.call(e, 0, i)), (o[i] = e[i]));
    return r.concat(o || Array.prototype.slice.call(e));
  },
  Bx = (function () {
    function r(e, t, i) {
      (this.name = e),
        (this.version = t),
        (this.os = i),
        (this.type = "browser");
    }
    return r;
  })();
var Ux = (function () {
  function r(e) {
    (this.version = e),
      (this.type = "node"),
      (this.name = "node"),
      (this.os = process.platform);
  }
  return r;
})();
var qx = (function () {
  function r(e, t, i, n) {
    (this.name = e),
      (this.version = t),
      (this.os = i),
      (this.bot = n),
      (this.type = "bot-device");
  }
  return r;
})();
var jx = (function () {
  function r() {
    (this.type = "bot"),
      (this.bot = !0),
      (this.name = "bot"),
      (this.version = null),
      (this.os = null);
  }
  return r;
})();
var zx = (function () {
  function r() {
    (this.type = "react-native"),
      (this.name = "react-native"),
      (this.version = null),
      (this.os = null);
  }
  return r;
})();
var kx =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Hx =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  Fm = 3,
  Kx = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", kx],
  ],
  Lm = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function Um(r) {
  return r
    ? Bm(r)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new zx()
    : typeof navigator < "u"
    ? Bm(navigator.userAgent)
    : $x();
}
function Vx(r) {
  return (
    r !== "" &&
    Kx.reduce(function (e, t) {
      var i = t[0],
        n = t[1];
      if (e) return e;
      var o = n.exec(r);
      return !!o && [i, o];
    }, !1)
  );
}
function Bm(r) {
  var e = Vx(r);
  if (!e) return null;
  var t = e[0],
    i = e[1];
  if (t === "searchbot") return new jx();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n
    ? n.length < Fm && (n = Tm(Tm([], n, !0), Jx(Fm - n.length), !0))
    : (n = []);
  var o = n.join("."),
    c = Gx(r),
    l = Hx.exec(r);
  return l && l[1] ? new qx(t, o, c, l[1]) : new Bx(t, o, c);
}
function Gx(r) {
  for (var e = 0, t = Lm.length; e < t; e++) {
    var i = Lm[e],
      n = i[0],
      o = i[1],
      c = o.exec(r);
    if (c) return n;
  }
  return null;
}
function $x() {
  var r = typeof process < "u" && process.version;
  return r ? new Ux(process.version.slice(1)) : null;
}
function Jx(r) {
  for (var e = [], t = 0; t < r; t++) e.push("0");
  return e;
}
var Nn = Je(bo()),
  as = Je(Pf()),
  Qv = Je(Xm()),
  Lo = Je(yy()),
  qd = Je(Py()),
  Xv = Je(By()),
  jd = Je(La()),
  Za = Je($y()),
  rh = Je(Qy());
function qa(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function So(r, e) {
  e || (e = r.reduce((n, o) => n + o.length, 0));
  let t = qa(e),
    i = 0;
  for (let n of r) t.set(n, i), (i += n.length);
  return t;
}
var Zf = {};
rr(Zf, { identity: () => Q4 });
function G4(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n),
      c = o.charCodeAt(0);
    if (t[c] !== 255) throw new TypeError(o + " is ambiguous");
    t[c] = n;
  }
  var l = r.length,
    p = r.charAt(0),
    g = Math.log(l) / Math.log(256),
    y = Math.log(256) / Math.log(l);
  function v(P) {
    if (
      (P instanceof Uint8Array ||
        (ArrayBuffer.isView(P)
          ? (P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength))
          : Array.isArray(P) && (P = Uint8Array.from(P))),
      !(P instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (P.length === 0) return "";
    for (var T = 0, L = 0, H = 0, Q = P.length; H !== Q && P[H] === 0; )
      H++, T++;
    for (var J = ((Q - H) * y + 1) >>> 0, G = new Uint8Array(J); H !== Q; ) {
      for (
        var W = P[H], Z = 0, U = J - 1;
        (W !== 0 || Z < L) && U !== -1;
        U--, Z++
      )
        (W += (256 * G[U]) >>> 0), (G[U] = W % l >>> 0), (W = (W / l) >>> 0);
      if (W !== 0) throw new Error("Non-zero carry");
      (L = Z), H++;
    }
    for (var B = J - L; B !== J && G[B] === 0; ) B++;
    for (var ae = p.repeat(T); B < J; ++B) ae += r.charAt(G[B]);
    return ae;
  }
  function A(P) {
    if (typeof P != "string") throw new TypeError("Expected String");
    if (P.length === 0) return new Uint8Array();
    var T = 0;
    if (P[T] !== " ") {
      for (var L = 0, H = 0; P[T] === p; ) L++, T++;
      for (
        var Q = ((P.length - T) * g + 1) >>> 0, J = new Uint8Array(Q);
        P[T];

      ) {
        var G = t[P.charCodeAt(T)];
        if (G === 255) return;
        for (var W = 0, Z = Q - 1; (G !== 0 || W < H) && Z !== -1; Z--, W++)
          (G += (l * J[Z]) >>> 0),
            (J[Z] = G % 256 >>> 0),
            (G = (G / 256) >>> 0);
        if (G !== 0) throw new Error("Non-zero carry");
        (H = W), T++;
      }
      if (P[T] !== " ") {
        for (var U = Q - H; U !== Q && J[U] === 0; ) U++;
        for (var B = new Uint8Array(L + (Q - U)), ae = L; U !== Q; )
          B[ae++] = J[U++];
        return B;
      }
    }
  }
  function E(P) {
    var T = A(P);
    if (T) return T;
    throw new Error(`Non-${e} character`);
  }
  return { encode: v, decodeUnsafe: A, decode: E };
}
var $4 = G4,
  J4 = $4,
  Xy = J4;
var nB = new Uint8Array(0);
var Zy = (r, e) => {
    if (r === e) return !0;
    if (r.byteLength !== e.byteLength) return !1;
    for (let t = 0; t < r.byteLength; t++) if (r[t] !== e[t]) return !1;
    return !0;
  },
  Rn = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  };
var ev = (r) => new TextEncoder().encode(r),
  tv = (r) => new TextDecoder().decode(r);
var Wf = class {
    constructor(e, t, i) {
      (this.name = e), (this.prefix = t), (this.baseEncode = i);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  Yf = class {
    constructor(e, t, i) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return iv(this, e);
    }
  },
  Qf = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return iv(this, e);
    }
    decode(e) {
      let t = e[0],
        i = this.decoders[t];
      if (i) return i.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  iv = (r, e) =>
    new Qf(
      Me(
        Me({}, r.decoders || { [r.prefix]: r }),
        e.decoders || { [e.prefix]: e }
      )
    ),
  Xf = class {
    constructor(e, t, i, n) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = i),
        (this.baseDecode = n),
        (this.encoder = new Wf(e, t, i)),
        (this.decoder = new Yf(e, t, n));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  xo = ({ name: r, prefix: e, encode: t, decode: i }) => new Xf(r, e, t, i),
  rs = ({ prefix: r, name: e, alphabet: t }) => {
    let { encode: i, decode: n } = Xy(t, e);
    return xo({ prefix: r, name: e, encode: i, decode: (o) => Rn(n(o)) });
  },
  W4 = (r, e, t, i) => {
    let n = {};
    for (let y = 0; y < e.length; ++y) n[e[y]] = y;
    let o = r.length;
    for (; r[o - 1] === "="; ) --o;
    let c = new Uint8Array(((o * t) / 8) | 0),
      l = 0,
      p = 0,
      g = 0;
    for (let y = 0; y < o; ++y) {
      let v = n[r[y]];
      if (v === void 0) throw new SyntaxError(`Non-${i} character`);
      (p = (p << t) | v),
        (l += t),
        l >= 8 && ((l -= 8), (c[g++] = 255 & (p >> l)));
    }
    if (l >= t || 255 & (p << (8 - l)))
      throw new SyntaxError("Unexpected end of data");
    return c;
  },
  Y4 = (r, e, t) => {
    let i = e[e.length - 1] === "=",
      n = (1 << t) - 1,
      o = "",
      c = 0,
      l = 0;
    for (let p = 0; p < r.length; ++p)
      for (l = (l << 8) | r[p], c += 8; c > t; )
        (c -= t), (o += e[n & (l >> c)]);
    if ((c && (o += e[n & (l << (t - c))]), i))
      for (; (o.length * t) & 7; ) o += "=";
    return o;
  },
  Ut = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    xo({
      prefix: e,
      name: r,
      encode(n) {
        return Y4(n, i, t);
      },
      decode(n) {
        return W4(n, i, t, r);
      },
    });
var Q4 = xo({
  prefix: "\0",
  name: "identity",
  encode: (r) => tv(r),
  decode: (r) => ev(r),
});
var ed = {};
rr(ed, { base2: () => X4 });
var X4 = Ut({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var td = {};
rr(td, { base8: () => Z4 });
var Z4 = Ut({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var rd = {};
rr(rd, { base10: () => eD });
var eD = rs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var id = {};
rr(id, { base16: () => tD, base16upper: () => rD });
var tD = Ut({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  rD = Ut({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var nd = {};
rr(nd, {
  base32: () => Io,
  base32hex: () => oD,
  base32hexpad: () => cD,
  base32hexpadupper: () => uD,
  base32hexupper: () => aD,
  base32pad: () => nD,
  base32padupper: () => sD,
  base32upper: () => iD,
  base32z: () => hD,
});
var Io = Ut({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  iD = Ut({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  nD = Ut({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  sD = Ut({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  oD = Ut({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  aD = Ut({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  cD = Ut({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  uD = Ut({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  hD = Ut({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var sd = {};
rr(sd, { base36: () => lD, base36upper: () => fD });
var lD = rs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  fD = rs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var od = {};
rr(od, { base58btc: () => ji, base58flickr: () => dD });
var ji = rs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  dD = rs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var ad = {};
rr(ad, {
  base64: () => pD,
  base64pad: () => gD,
  base64url: () => mD,
  base64urlpad: () => yD,
});
var pD = Ut({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  gD = Ut({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  mD = Ut({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  yD = Ut({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var cd = {};
rr(cd, { base256emoji: () => ED });
var nv = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  vD = nv.reduce((r, e, t) => ((r[t] = e), r), []),
  wD = nv.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function bD(r) {
  return r.reduce((e, t) => ((e += vD[t]), e), "");
}
function _D(r) {
  let e = [];
  for (let t of r) {
    let i = wD[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
var ED = xo({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: bD,
  decode: _D,
});
var fd = {};
rr(fd, { sha256: () => zD, sha512: () => kD });
var AD = av,
  sv = 128,
  SD = 127,
  xD = ~SD,
  ID = Math.pow(2, 31);
function av(r, e, t) {
  (e = e || []), (t = t || 0);
  for (var i = t; r >= ID; ) (e[t++] = (r & 255) | sv), (r /= 128);
  for (; r & xD; ) (e[t++] = (r & 255) | sv), (r >>>= 7);
  return (e[t] = r | 0), (av.bytes = t - i + 1), e;
}
var DD = ud,
  RD = 128,
  ov = 127;
function ud(r, i) {
  var t = 0,
    i = i || 0,
    n = 0,
    o = i,
    c,
    l = r.length;
  do {
    if (o >= l)
      throw ((ud.bytes = 0), new RangeError("Could not decode varint"));
    (c = r[o++]),
      (t += n < 28 ? (c & ov) << n : (c & ov) * Math.pow(2, n)),
      (n += 7);
  } while (c >= RD);
  return (ud.bytes = o - i), t;
}
var CD = Math.pow(2, 7),
  OD = Math.pow(2, 14),
  PD = Math.pow(2, 21),
  MD = Math.pow(2, 28),
  ND = Math.pow(2, 35),
  TD = Math.pow(2, 42),
  FD = Math.pow(2, 49),
  LD = Math.pow(2, 56),
  BD = Math.pow(2, 63),
  UD = function (r) {
    return r < CD
      ? 1
      : r < OD
      ? 2
      : r < PD
      ? 3
      : r < MD
      ? 4
      : r < ND
      ? 5
      : r < TD
      ? 6
      : r < FD
      ? 7
      : r < LD
      ? 8
      : r < BD
      ? 9
      : 10;
  },
  qD = { encode: AD, decode: DD, encodingLength: UD },
  jD = qD,
  ja = jD;
var za = (r, e = 0) => [ja.decode(r, e), ja.decode.bytes],
  Do = (r, e, t = 0) => (ja.encode(r, e, t), e),
  Ro = (r) => ja.encodingLength(r);
var Ps = (r, e) => {
    let t = e.byteLength,
      i = Ro(r),
      n = i + Ro(t),
      o = new Uint8Array(n + t);
    return Do(r, o, 0), Do(t, o, i), o.set(e, n), new Co(r, t, e, o);
  },
  cv = (r) => {
    let e = Rn(r),
      [t, i] = za(e),
      [n, o] = za(e.subarray(i)),
      c = e.subarray(i + o);
    if (c.byteLength !== n) throw new Error("Incorrect length");
    return new Co(t, n, c, e);
  },
  uv = (r, e) =>
    r === e
      ? !0
      : r.code === e.code && r.size === e.size && Zy(r.bytes, e.bytes),
  Co = class {
    constructor(e, t, i, n) {
      (this.code = e), (this.size = t), (this.digest = i), (this.bytes = n);
    }
  };
var ld = ({ name: r, code: e, encode: t }) => new hd(r, e, t),
  hd = class {
    constructor(e, t, i) {
      (this.name = e), (this.code = t), (this.encode = i);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? Ps(this.code, t)
          : t.then((i) => Ps(this.code, i));
      } else throw Error("Unknown type, must be binary type");
    }
  };
var lv = (r) => (e) =>
    C(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(r, e));
    }),
  zD = ld({ name: "sha2-256", code: 18, encode: lv("SHA-256") }),
  kD = ld({ name: "sha2-512", code: 19, encode: lv("SHA-512") });
var dd = {};
rr(dd, { identity: () => VD });
var fv = 0,
  HD = "identity",
  dv = Rn,
  KD = (r) => Ps(fv, dv(r)),
  VD = { code: fv, name: HD, encode: dv, digest: KD };
var DB = new TextEncoder(),
  RB = new TextDecoder();
var ju = class r {
    constructor(e, t, i, n) {
      (this.code = t),
        (this.version = e),
        (this.multihash = i),
        (this.bytes = n),
        (this.byteOffset = n.byteOffset),
        (this.byteLength = n.byteLength),
        (this.asCID = this),
        (this._baseCache = new Map()),
        Object.defineProperties(this, {
          byteOffset: qu,
          byteLength: qu,
          code: Uu,
          version: Uu,
          multihash: Uu,
          bytes: Uu,
          _baseCache: qu,
          asCID: qu,
        });
    }
    toV0() {
      switch (this.version) {
        case 0:
          return this;
        default: {
          let { code: e, multihash: t } = this;
          if (e !== Ha)
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          if (t.code !== QD)
            throw new Error(
              "Cannot convert non sha2-256 multihash CID to CIDv0"
            );
          return r.createV0(t);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          let { code: e, digest: t } = this.multihash,
            i = Ps(e, t);
          return r.createV1(this.code, i);
        }
        case 1:
          return this;
        default:
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
      }
    }
    equals(e) {
      return (
        e &&
        this.code === e.code &&
        this.version === e.version &&
        uv(this.multihash, e.multihash)
      );
    }
    toString(e) {
      let { bytes: t, version: i, _baseCache: n } = this;
      switch (i) {
        case 0:
          return WD(t, n, e || ji.encoder);
        default:
          return YD(t, n, e || Io.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes,
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(e) {
      return ZD(/^0\.0/, eR), !!(e && (e[gv] || e.asCID === e));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error(
        '"codec" property is deprecated, use integer "code" property instead'
      );
    }
    get buffer() {
      throw new Error(
        "Deprecated .buffer property, use .bytes to get Uint8Array instead"
      );
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(e) {
      if (e instanceof r) return e;
      if (e != null && e.asCID === e) {
        let { version: t, code: i, multihash: n, bytes: o } = e;
        return new r(t, i, n, o || pv(t, i, n.bytes));
      } else if (e != null && e[gv] === !0) {
        let { version: t, multihash: i, code: n } = e,
          o = cv(i);
        return r.create(t, n, o);
      } else return null;
    }
    static create(e, t, i) {
      if (typeof t != "number")
        throw new Error("String codecs are no longer supported");
      switch (e) {
        case 0: {
          if (t !== Ha)
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${Ha}) block encoding`
            );
          return new r(e, t, i, i.bytes);
        }
        case 1: {
          let n = pv(e, t, i.bytes);
          return new r(e, t, i, n);
        }
        default:
          throw new Error("Invalid version");
      }
    }
    static createV0(e) {
      return r.create(0, Ha, e);
    }
    static createV1(e, t) {
      return r.create(1, e, t);
    }
    static decode(e) {
      let [t, i] = r.decodeFirst(e);
      if (i.length) throw new Error("Incorrect length");
      return t;
    }
    static decodeFirst(e) {
      let t = r.inspectBytes(e),
        i = t.size - t.multihashSize,
        n = Rn(e.subarray(i, i + t.multihashSize));
      if (n.byteLength !== t.multihashSize) throw new Error("Incorrect length");
      let o = n.subarray(t.multihashSize - t.digestSize),
        c = new Co(t.multihashCode, t.digestSize, o, n);
      return [
        t.version === 0 ? r.createV0(c) : r.createV1(t.codec, c),
        e.subarray(t.size),
      ];
    }
    static inspectBytes(e) {
      let t = 0,
        i = () => {
          let [v, A] = za(e.subarray(t));
          return (t += A), v;
        },
        n = i(),
        o = Ha;
      if (
        (n === 18 ? ((n = 0), (t = 0)) : n === 1 && (o = i()),
        n !== 0 && n !== 1)
      )
        throw new RangeError(`Invalid CID version ${n}`);
      let c = t,
        l = i(),
        p = i(),
        g = t + p,
        y = g - c;
      return {
        version: n,
        codec: o,
        multihashCode: l,
        digestSize: p,
        multihashSize: y,
        size: g,
      };
    }
    static parse(e, t) {
      let [i, n] = JD(e, t),
        o = r.decode(n);
      return o._baseCache.set(i, e), o;
    }
  },
  JD = (r, e) => {
    switch (r[0]) {
      case "Q": {
        let t = e || ji;
        return [ji.prefix, t.decode(`${ji.prefix}${r}`)];
      }
      case ji.prefix: {
        let t = e || ji;
        return [ji.prefix, t.decode(r)];
      }
      case Io.prefix: {
        let t = e || Io;
        return [Io.prefix, t.decode(r)];
      }
      default: {
        if (e == null)
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        return [r[0], e.decode(r)];
      }
    }
  },
  WD = (r, e, t) => {
    let { prefix: i } = t;
    if (i !== ji.prefix)
      throw Error(`Cannot string encode V0 in ${t.name} encoding`);
    let n = e.get(i);
    if (n == null) {
      let o = t.encode(r).slice(1);
      return e.set(i, o), o;
    } else return n;
  },
  YD = (r, e, t) => {
    let { prefix: i } = t,
      n = e.get(i);
    if (n == null) {
      let o = t.encode(r);
      return e.set(i, o), o;
    } else return n;
  },
  Ha = 112,
  QD = 18,
  pv = (r, e, t) => {
    let i = Ro(r),
      n = i + Ro(e),
      o = new Uint8Array(n + t.byteLength);
    return Do(r, o, 0), Do(e, o, i), o.set(t, n), o;
  },
  gv = Symbol.for("@ipld/js-cid/CID"),
  Uu = { writable: !1, configurable: !1, enumerable: !0 },
  qu = { writable: !1, enumerable: !1, configurable: !1 },
  XD = "0.0.0-dev",
  ZD = (r, e) => {
    if (r.test(XD)) console.warn(e);
    else throw new Error(e);
  },
  eR = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
var pd = Me(
    Me(Me(Me(Me(Me(Me(Me(Me(Me({}, Zf), ed), td), rd), id), nd), sd), od), ad),
    cd
  ),
  LB = Me(Me({}, fd), dd);
function yv(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
var mv = yv(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  gd = yv(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      let e = qa(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  tR = Me(
    {
      utf8: mv,
      "utf-8": mv,
      hex: pd.base16,
      latin1: gd,
      ascii: gd,
      binary: gd,
    },
    pd
  ),
  zu = tR;
function ir(r, e = "utf8") {
  let t = zu[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
function $t(r, e = "utf8") {
  let t = zu[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(r).substring(1);
}
var vv = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
    batchFetchMessages: "waku_batchFetchMessages",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
    batchFetchMessages: "irn_batchFetchMessages",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
    batchFetchMessages: "iridium_batchFetchMessages",
  },
};
var rR = ":";
function Bo(r) {
  let [e, t] = r.split(rR);
  return { namespace: e, reference: t };
}
function zd(r, e = []) {
  let t = [];
  return (
    Object.keys(r).forEach((i) => {
      if (e.length && !e.includes(i)) return;
      let n = r[i];
      t.push(...n.accounts);
    }),
    t
  );
}
function Zv(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
var iR = Object.defineProperty,
  wv = Object.getOwnPropertySymbols,
  nR = Object.prototype.hasOwnProperty,
  sR = Object.prototype.propertyIsEnumerable,
  bv = (r, e, t) =>
    e in r
      ? iR(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  _v = (r, e) => {
    for (var t in e || (e = {})) nR.call(e, t) && bv(r, t, e[t]);
    if (wv) for (var t of wv(e)) sR.call(e, t) && bv(r, t, e[t]);
    return r;
  },
  oR = "ReactNative",
  Nr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  };
var aR = "js";
function Uo() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Fs() {
  return (
    !(0, as.getDocument)() &&
    !!(0, as.getNavigator)() &&
    navigator.product === oR
  );
}
function cs() {
  return !Uo() && !!(0, as.getNavigator)() && !!(0, as.getDocument)();
}
function ec() {
  return Fs()
    ? Nr.reactNative
    : Uo()
    ? Nr.node
    : cs()
    ? Nr.browser
    : Nr.unknown;
}
function ew() {
  var r;
  try {
    return Fs() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (r = global.Application) == null
        ? void 0
        : r.applicationId
      : void 0;
  } catch {
    return;
  }
}
function cR(r, e) {
  let t = Lo.parse(r);
  return (t = _v(_v({}, t), e)), (r = Lo.stringify(t)), r;
}
function tw() {
  return (
    (0, Qv.getWindowMetadata)() || {
      name: "",
      description: "",
      url: "",
      icons: [""],
    }
  );
}
function uR() {
  if (
    ec() === Nr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    let { OS: t, Version: i } = global.Platform;
    return [t, i].join("-");
  }
  let r = Um();
  if (r === null) return "unknown";
  let e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser"
    ? [e, r.name, r.version].join("-")
    : [e, r.version].join("-");
}
function hR() {
  var r;
  let e = ec();
  return e === Nr.browser
    ? [
        e,
        ((r = (0, as.getLocation)()) == null ? void 0 : r.host) || "unknown",
      ].join(":")
    : e;
}
function lR(r, e, t) {
  let i = uR(),
    n = hR();
  return [[r, e].join("-"), [aR, t].join("-"), i, n].join("/");
}
function rw({
  protocol: r,
  version: e,
  relayUrl: t,
  sdkVersion: i,
  auth: n,
  projectId: o,
  useOnCloseEvent: c,
  bundleId: l,
}) {
  let p = t.split("?"),
    g = lR(r, e, i),
    y = {
      auth: n,
      ua: g,
      projectId: o,
      useOnCloseEvent: c || void 0,
      origin: l || void 0,
    },
    v = cR(p[1] || "", y);
  return p[0] + "?" + v;
}
function Ms(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function kd(r) {
  return Object.fromEntries(r.entries());
}
function Hd(r) {
  return new Map(Object.entries(r));
}
function Tn(r = Nn.FIVE_MINUTES, e) {
  let t = (0, Nn.toMiliseconds)(r || Nn.FIVE_MINUTES),
    i,
    n,
    o;
  return {
    resolve: (c) => {
      o && i && (clearTimeout(o), i(c));
    },
    reject: (c) => {
      o && n && (clearTimeout(o), n(c));
    },
    done: () =>
      new Promise((c, l) => {
        (o = setTimeout(() => {
          l(new Error(e));
        }, t)),
          (i = c),
          (n = l);
      }),
  };
}
function Ls(r, e, t) {
  return new Promise((i, n) =>
    C(this, null, function* () {
      let o = setTimeout(() => n(new Error(t)), e);
      try {
        let c = yield r;
        i(c);
      } catch (c) {
        n(c);
      }
      clearTimeout(o);
    })
  );
}
function iw(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`)) return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function nw(r) {
  return iw("topic", r);
}
function sw(r) {
  return iw("id", r);
}
function ih(r) {
  let [e, t] = r.split(":"),
    i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) i.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return i;
}
function Jt(r, e) {
  return (0, Nn.fromMiliseconds)((e || Date.now()) + (0, Nn.toMiliseconds)(r));
}
function Yi(r) {
  return Date.now() >= (0, Nn.toMiliseconds)(r);
}
function Ne(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
function tc(r = [], e = []) {
  return [...new Set([...r, ...e])];
}
function ow(i) {
  return C(this, arguments, function* ({ id: r, topic: e, wcDeepLink: t }) {
    try {
      if (!t) return;
      let o = (typeof t == "string" ? JSON.parse(t) : t)?.href;
      if (typeof o != "string") return;
      o.endsWith("/") && (o = o.slice(0, -1));
      let c = `${o}/wc?requestId=${r}&sessionTopic=${e}`,
        l = ec();
      l === Nr.browser
        ? c.startsWith("https://") || c.startsWith("http://")
          ? window.open(c, "_blank", "noreferrer noopener")
          : window.open(c, "_self", "noreferrer noopener")
        : l === Nr.reactNative &&
          typeof (global == null ? void 0 : global.Linking) < "u" &&
          (yield global.Linking.openURL(c));
    } catch (n) {
      console.error(n);
    }
  });
}
function aw(r, e) {
  return C(this, null, function* () {
    try {
      return (yield r.getItem(e)) || (cs() ? localStorage.getItem(e) : void 0);
    } catch (t) {
      console.error(t);
    }
  });
}
var cw =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function fR(r) {
  var e = r.default;
  if (typeof e == "function") {
    var t = function () {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(r).forEach(function (i) {
      var n = Object.getOwnPropertyDescriptor(r, i);
      Object.defineProperty(
        t,
        i,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return r[i];
              },
            }
      );
    }),
    t
  );
}
var uw = { exports: {} };
(function (r) {
  (function () {
    var e = "input is invalid type",
      t = "finalize already called",
      i = typeof window == "object",
      n = i ? window : {};
    n.JS_SHA3_NO_WINDOW && (i = !1);
    var o = !i && typeof self == "object",
      c =
        !n.JS_SHA3_NO_NODE_JS &&
        typeof process == "object" &&
        process.versions &&
        process.versions.node;
    c ? (n = cw) : o && (n = self);
    var l = !n.JS_SHA3_NO_COMMON_JS && !0 && r.exports,
      p = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      g = "0123456789abcdef".split(""),
      y = [31, 7936, 2031616, 520093696],
      v = [4, 1024, 262144, 67108864],
      A = [1, 256, 65536, 16777216],
      E = [6, 1536, 393216, 100663296],
      P = [0, 8, 16, 24],
      T = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ],
      L = [224, 256, 384, 512],
      H = [128, 256],
      Q = ["hex", "buffer", "arrayBuffer", "array", "digest"],
      J = { 128: 168, 256: 136 };
    (n.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (w) {
        return Object.prototype.toString.call(w) === "[object Array]";
      }),
      p &&
        (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (w) {
          return (
            typeof w == "object" &&
            w.buffer &&
            w.buffer.constructor === ArrayBuffer
          );
        });
    for (
      var G = function (w, $, K) {
          return function (Y) {
            return new D(w, $, w).update(Y)[K]();
          };
        },
        W = function (w, $, K) {
          return function (Y, ue) {
            return new D(w, $, ue).update(Y)[K]();
          };
        },
        Z = function (w, $, K) {
          return function (Y, ue, se, oe) {
            return m["cshake" + w].update(Y, ue, se, oe)[K]();
          };
        },
        U = function (w, $, K) {
          return function (Y, ue, se, oe) {
            return m["kmac" + w].update(Y, ue, se, oe)[K]();
          };
        },
        B = function (w, $, K, Y) {
          for (var ue = 0; ue < Q.length; ++ue) {
            var se = Q[ue];
            w[se] = $(K, Y, se);
          }
          return w;
        },
        ae = function (w, $) {
          var K = G(w, $, "hex");
          return (
            (K.create = function () {
              return new D(w, $, w);
            }),
            (K.update = function (Y) {
              return K.create().update(Y);
            }),
            B(K, G, w, $)
          );
        },
        fe = function (w, $) {
          var K = W(w, $, "hex");
          return (
            (K.create = function (Y) {
              return new D(w, $, Y);
            }),
            (K.update = function (Y, ue) {
              return K.create(ue).update(Y);
            }),
            B(K, W, w, $)
          );
        },
        M = function (w, $) {
          var K = J[w],
            Y = Z(w, $, "hex");
          return (
            (Y.create = function (ue, se, oe) {
              return !se && !oe
                ? m["shake" + w].create(ue)
                : new D(w, $, ue).bytepad([se, oe], K);
            }),
            (Y.update = function (ue, se, oe, le) {
              return Y.create(se, oe, le).update(ue);
            }),
            B(Y, Z, w, $)
          );
        },
        q = function (w, $) {
          var K = J[w],
            Y = U(w, $, "hex");
          return (
            (Y.create = function (ue, se, oe) {
              return new ce(w, $, se).bytepad(["KMAC", oe], K).bytepad([ue], K);
            }),
            (Y.update = function (ue, se, oe, le) {
              return Y.create(ue, oe, le).update(se);
            }),
            B(Y, U, w, $)
          );
        },
        h = [
          { name: "keccak", padding: A, bits: L, createMethod: ae },
          { name: "sha3", padding: E, bits: L, createMethod: ae },
          { name: "shake", padding: y, bits: H, createMethod: fe },
          { name: "cshake", padding: v, bits: H, createMethod: M },
          { name: "kmac", padding: v, bits: H, createMethod: q },
        ],
        m = {},
        b = [],
        S = 0;
      S < h.length;
      ++S
    )
      for (var R = h[S], N = R.bits, z = 0; z < N.length; ++z) {
        var I = R.name + "_" + N[z];
        if (
          (b.push(I),
          (m[I] = R.createMethod(N[z], R.padding)),
          R.name !== "sha3")
        ) {
          var d = R.name + N[z];
          b.push(d), (m[d] = m[I]);
        }
      }
    function D(w, $, K) {
      (this.blocks = []),
        (this.s = []),
        (this.padding = $),
        (this.outputBits = K),
        (this.reset = !0),
        (this.finalized = !1),
        (this.block = 0),
        (this.start = 0),
        (this.blockCount = (1600 - (w << 1)) >> 5),
        (this.byteCount = this.blockCount << 2),
        (this.outputBlocks = K >> 5),
        (this.extraBytes = (K & 31) >> 3);
      for (var Y = 0; Y < 50; ++Y) this.s[Y] = 0;
    }
    (D.prototype.update = function (w) {
      if (this.finalized) throw new Error(t);
      var $,
        K = typeof w;
      if (K !== "string") {
        if (K === "object") {
          if (w === null) throw new Error(e);
          if (p && w.constructor === ArrayBuffer) w = new Uint8Array(w);
          else if (!Array.isArray(w) && (!p || !ArrayBuffer.isView(w)))
            throw new Error(e);
        } else throw new Error(e);
        $ = !0;
      }
      for (
        var Y = this.blocks,
          ue = this.byteCount,
          se = w.length,
          oe = this.blockCount,
          le = 0,
          pe = this.s,
          ne,
          ve;
        le < se;

      ) {
        if (this.reset)
          for (this.reset = !1, Y[0] = this.block, ne = 1; ne < oe + 1; ++ne)
            Y[ne] = 0;
        if ($)
          for (ne = this.start; le < se && ne < ue; ++le)
            Y[ne >> 2] |= w[le] << P[ne++ & 3];
        else
          for (ne = this.start; le < se && ne < ue; ++le)
            (ve = w.charCodeAt(le)),
              ve < 128
                ? (Y[ne >> 2] |= ve << P[ne++ & 3])
                : ve < 2048
                ? ((Y[ne >> 2] |= (192 | (ve >> 6)) << P[ne++ & 3]),
                  (Y[ne >> 2] |= (128 | (ve & 63)) << P[ne++ & 3]))
                : ve < 55296 || ve >= 57344
                ? ((Y[ne >> 2] |= (224 | (ve >> 12)) << P[ne++ & 3]),
                  (Y[ne >> 2] |= (128 | ((ve >> 6) & 63)) << P[ne++ & 3]),
                  (Y[ne >> 2] |= (128 | (ve & 63)) << P[ne++ & 3]))
                : ((ve =
                    65536 +
                    (((ve & 1023) << 10) | (w.charCodeAt(++le) & 1023))),
                  (Y[ne >> 2] |= (240 | (ve >> 18)) << P[ne++ & 3]),
                  (Y[ne >> 2] |= (128 | ((ve >> 12) & 63)) << P[ne++ & 3]),
                  (Y[ne >> 2] |= (128 | ((ve >> 6) & 63)) << P[ne++ & 3]),
                  (Y[ne >> 2] |= (128 | (ve & 63)) << P[ne++ & 3]));
        if (((this.lastByteIndex = ne), ne >= ue)) {
          for (this.start = ne - ue, this.block = Y[oe], ne = 0; ne < oe; ++ne)
            pe[ne] ^= Y[ne];
          ie(pe), (this.reset = !0);
        } else this.start = ne;
      }
      return this;
    }),
      (D.prototype.encode = function (w, $) {
        var K = w & 255,
          Y = 1,
          ue = [K];
        for (w = w >> 8, K = w & 255; K > 0; )
          ue.unshift(K), (w = w >> 8), (K = w & 255), ++Y;
        return $ ? ue.push(Y) : ue.unshift(Y), this.update(ue), ue.length;
      }),
      (D.prototype.encodeString = function (w) {
        var $,
          K = typeof w;
        if (K !== "string") {
          if (K === "object") {
            if (w === null) throw new Error(e);
            if (p && w.constructor === ArrayBuffer) w = new Uint8Array(w);
            else if (!Array.isArray(w) && (!p || !ArrayBuffer.isView(w)))
              throw new Error(e);
          } else throw new Error(e);
          $ = !0;
        }
        var Y = 0,
          ue = w.length;
        if ($) Y = ue;
        else
          for (var se = 0; se < w.length; ++se) {
            var oe = w.charCodeAt(se);
            oe < 128
              ? (Y += 1)
              : oe < 2048
              ? (Y += 2)
              : oe < 55296 || oe >= 57344
              ? (Y += 3)
              : ((oe =
                  65536 + (((oe & 1023) << 10) | (w.charCodeAt(++se) & 1023))),
                (Y += 4));
          }
        return (Y += this.encode(Y * 8)), this.update(w), Y;
      }),
      (D.prototype.bytepad = function (w, $) {
        for (var K = this.encode($), Y = 0; Y < w.length; ++Y)
          K += this.encodeString(w[Y]);
        var ue = $ - (K % $),
          se = [];
        return (se.length = ue), this.update(se), this;
      }),
      (D.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var w = this.blocks,
            $ = this.lastByteIndex,
            K = this.blockCount,
            Y = this.s;
          if (
            ((w[$ >> 2] |= this.padding[$ & 3]),
            this.lastByteIndex === this.byteCount)
          )
            for (w[0] = w[K], $ = 1; $ < K + 1; ++$) w[$] = 0;
          for (w[K - 1] |= 2147483648, $ = 0; $ < K; ++$) Y[$] ^= w[$];
          ie(Y);
        }
      }),
      (D.prototype.toString = D.prototype.hex =
        function () {
          this.finalize();
          for (
            var w = this.blockCount,
              $ = this.s,
              K = this.outputBlocks,
              Y = this.extraBytes,
              ue = 0,
              se = 0,
              oe = "",
              le;
            se < K;

          ) {
            for (ue = 0; ue < w && se < K; ++ue, ++se)
              (le = $[ue]),
                (oe +=
                  g[(le >> 4) & 15] +
                  g[le & 15] +
                  g[(le >> 12) & 15] +
                  g[(le >> 8) & 15] +
                  g[(le >> 20) & 15] +
                  g[(le >> 16) & 15] +
                  g[(le >> 28) & 15] +
                  g[(le >> 24) & 15]);
            se % w === 0 && (ie($), (ue = 0));
          }
          return (
            Y &&
              ((le = $[ue]),
              (oe += g[(le >> 4) & 15] + g[le & 15]),
              Y > 1 && (oe += g[(le >> 12) & 15] + g[(le >> 8) & 15]),
              Y > 2 && (oe += g[(le >> 20) & 15] + g[(le >> 16) & 15])),
            oe
          );
        }),
      (D.prototype.arrayBuffer = function () {
        this.finalize();
        var w = this.blockCount,
          $ = this.s,
          K = this.outputBlocks,
          Y = this.extraBytes,
          ue = 0,
          se = 0,
          oe = this.outputBits >> 3,
          le;
        Y ? (le = new ArrayBuffer((K + 1) << 2)) : (le = new ArrayBuffer(oe));
        for (var pe = new Uint32Array(le); se < K; ) {
          for (ue = 0; ue < w && se < K; ++ue, ++se) pe[se] = $[ue];
          se % w === 0 && ie($);
        }
        return Y && ((pe[ue] = $[ue]), (le = le.slice(0, oe))), le;
      }),
      (D.prototype.buffer = D.prototype.arrayBuffer),
      (D.prototype.digest = D.prototype.array =
        function () {
          this.finalize();
          for (
            var w = this.blockCount,
              $ = this.s,
              K = this.outputBlocks,
              Y = this.extraBytes,
              ue = 0,
              se = 0,
              oe = [],
              le,
              pe;
            se < K;

          ) {
            for (ue = 0; ue < w && se < K; ++ue, ++se)
              (le = se << 2),
                (pe = $[ue]),
                (oe[le] = pe & 255),
                (oe[le + 1] = (pe >> 8) & 255),
                (oe[le + 2] = (pe >> 16) & 255),
                (oe[le + 3] = (pe >> 24) & 255);
            se % w === 0 && ie($);
          }
          return (
            Y &&
              ((le = se << 2),
              (pe = $[ue]),
              (oe[le] = pe & 255),
              Y > 1 && (oe[le + 1] = (pe >> 8) & 255),
              Y > 2 && (oe[le + 2] = (pe >> 16) & 255)),
            oe
          );
        });
    function ce(w, $, K) {
      D.call(this, w, $, K);
    }
    (ce.prototype = new D()),
      (ce.prototype.finalize = function () {
        return (
          this.encode(this.outputBits, !0), D.prototype.finalize.call(this)
        );
      });
    var ie = function (w) {
      var $,
        K,
        Y,
        ue,
        se,
        oe,
        le,
        pe,
        ne,
        ve,
        ht,
        qe,
        Di,
        lt,
        Ke,
        Kt,
        Ve,
        We,
        an,
        Ge,
        ft,
        Fr,
        ke,
        Xe,
        fi,
        Ze,
        et,
        di,
        tt,
        rt,
        pi,
        it,
        dt,
        cn,
        pt,
        ot,
        Ri,
        gt,
        mt,
        un,
        yt,
        at,
        hn,
        vt,
        wt,
        gi,
        bt,
        nt,
        ln,
        _t,
        Et,
        fn,
        At,
        St,
        dn,
        xt,
        ct,
        Ci,
        Oi,
        Pi,
        Mi,
        Ni,
        Ti;
      for (Y = 0; Y < 48; Y += 2)
        (ue = w[0] ^ w[10] ^ w[20] ^ w[30] ^ w[40]),
          (se = w[1] ^ w[11] ^ w[21] ^ w[31] ^ w[41]),
          (oe = w[2] ^ w[12] ^ w[22] ^ w[32] ^ w[42]),
          (le = w[3] ^ w[13] ^ w[23] ^ w[33] ^ w[43]),
          (pe = w[4] ^ w[14] ^ w[24] ^ w[34] ^ w[44]),
          (ne = w[5] ^ w[15] ^ w[25] ^ w[35] ^ w[45]),
          (ve = w[6] ^ w[16] ^ w[26] ^ w[36] ^ w[46]),
          (ht = w[7] ^ w[17] ^ w[27] ^ w[37] ^ w[47]),
          (qe = w[8] ^ w[18] ^ w[28] ^ w[38] ^ w[48]),
          (Di = w[9] ^ w[19] ^ w[29] ^ w[39] ^ w[49]),
          ($ = qe ^ ((oe << 1) | (le >>> 31))),
          (K = Di ^ ((le << 1) | (oe >>> 31))),
          (w[0] ^= $),
          (w[1] ^= K),
          (w[10] ^= $),
          (w[11] ^= K),
          (w[20] ^= $),
          (w[21] ^= K),
          (w[30] ^= $),
          (w[31] ^= K),
          (w[40] ^= $),
          (w[41] ^= K),
          ($ = ue ^ ((pe << 1) | (ne >>> 31))),
          (K = se ^ ((ne << 1) | (pe >>> 31))),
          (w[2] ^= $),
          (w[3] ^= K),
          (w[12] ^= $),
          (w[13] ^= K),
          (w[22] ^= $),
          (w[23] ^= K),
          (w[32] ^= $),
          (w[33] ^= K),
          (w[42] ^= $),
          (w[43] ^= K),
          ($ = oe ^ ((ve << 1) | (ht >>> 31))),
          (K = le ^ ((ht << 1) | (ve >>> 31))),
          (w[4] ^= $),
          (w[5] ^= K),
          (w[14] ^= $),
          (w[15] ^= K),
          (w[24] ^= $),
          (w[25] ^= K),
          (w[34] ^= $),
          (w[35] ^= K),
          (w[44] ^= $),
          (w[45] ^= K),
          ($ = pe ^ ((qe << 1) | (Di >>> 31))),
          (K = ne ^ ((Di << 1) | (qe >>> 31))),
          (w[6] ^= $),
          (w[7] ^= K),
          (w[16] ^= $),
          (w[17] ^= K),
          (w[26] ^= $),
          (w[27] ^= K),
          (w[36] ^= $),
          (w[37] ^= K),
          (w[46] ^= $),
          (w[47] ^= K),
          ($ = ve ^ ((ue << 1) | (se >>> 31))),
          (K = ht ^ ((se << 1) | (ue >>> 31))),
          (w[8] ^= $),
          (w[9] ^= K),
          (w[18] ^= $),
          (w[19] ^= K),
          (w[28] ^= $),
          (w[29] ^= K),
          (w[38] ^= $),
          (w[39] ^= K),
          (w[48] ^= $),
          (w[49] ^= K),
          (lt = w[0]),
          (Ke = w[1]),
          (gi = (w[11] << 4) | (w[10] >>> 28)),
          (bt = (w[10] << 4) | (w[11] >>> 28)),
          (di = (w[20] << 3) | (w[21] >>> 29)),
          (tt = (w[21] << 3) | (w[20] >>> 29)),
          (Pi = (w[31] << 9) | (w[30] >>> 23)),
          (Mi = (w[30] << 9) | (w[31] >>> 23)),
          (at = (w[40] << 18) | (w[41] >>> 14)),
          (hn = (w[41] << 18) | (w[40] >>> 14)),
          (cn = (w[2] << 1) | (w[3] >>> 31)),
          (pt = (w[3] << 1) | (w[2] >>> 31)),
          (Kt = (w[13] << 12) | (w[12] >>> 20)),
          (Ve = (w[12] << 12) | (w[13] >>> 20)),
          (nt = (w[22] << 10) | (w[23] >>> 22)),
          (ln = (w[23] << 10) | (w[22] >>> 22)),
          (rt = (w[33] << 13) | (w[32] >>> 19)),
          (pi = (w[32] << 13) | (w[33] >>> 19)),
          (Ni = (w[42] << 2) | (w[43] >>> 30)),
          (Ti = (w[43] << 2) | (w[42] >>> 30)),
          (St = (w[5] << 30) | (w[4] >>> 2)),
          (dn = (w[4] << 30) | (w[5] >>> 2)),
          (ot = (w[14] << 6) | (w[15] >>> 26)),
          (Ri = (w[15] << 6) | (w[14] >>> 26)),
          (We = (w[25] << 11) | (w[24] >>> 21)),
          (an = (w[24] << 11) | (w[25] >>> 21)),
          (_t = (w[34] << 15) | (w[35] >>> 17)),
          (Et = (w[35] << 15) | (w[34] >>> 17)),
          (it = (w[45] << 29) | (w[44] >>> 3)),
          (dt = (w[44] << 29) | (w[45] >>> 3)),
          (Xe = (w[6] << 28) | (w[7] >>> 4)),
          (fi = (w[7] << 28) | (w[6] >>> 4)),
          (xt = (w[17] << 23) | (w[16] >>> 9)),
          (ct = (w[16] << 23) | (w[17] >>> 9)),
          (gt = (w[26] << 25) | (w[27] >>> 7)),
          (mt = (w[27] << 25) | (w[26] >>> 7)),
          (Ge = (w[36] << 21) | (w[37] >>> 11)),
          (ft = (w[37] << 21) | (w[36] >>> 11)),
          (fn = (w[47] << 24) | (w[46] >>> 8)),
          (At = (w[46] << 24) | (w[47] >>> 8)),
          (vt = (w[8] << 27) | (w[9] >>> 5)),
          (wt = (w[9] << 27) | (w[8] >>> 5)),
          (Ze = (w[18] << 20) | (w[19] >>> 12)),
          (et = (w[19] << 20) | (w[18] >>> 12)),
          (Ci = (w[29] << 7) | (w[28] >>> 25)),
          (Oi = (w[28] << 7) | (w[29] >>> 25)),
          (un = (w[38] << 8) | (w[39] >>> 24)),
          (yt = (w[39] << 8) | (w[38] >>> 24)),
          (Fr = (w[48] << 14) | (w[49] >>> 18)),
          (ke = (w[49] << 14) | (w[48] >>> 18)),
          (w[0] = lt ^ (~Kt & We)),
          (w[1] = Ke ^ (~Ve & an)),
          (w[10] = Xe ^ (~Ze & di)),
          (w[11] = fi ^ (~et & tt)),
          (w[20] = cn ^ (~ot & gt)),
          (w[21] = pt ^ (~Ri & mt)),
          (w[30] = vt ^ (~gi & nt)),
          (w[31] = wt ^ (~bt & ln)),
          (w[40] = St ^ (~xt & Ci)),
          (w[41] = dn ^ (~ct & Oi)),
          (w[2] = Kt ^ (~We & Ge)),
          (w[3] = Ve ^ (~an & ft)),
          (w[12] = Ze ^ (~di & rt)),
          (w[13] = et ^ (~tt & pi)),
          (w[22] = ot ^ (~gt & un)),
          (w[23] = Ri ^ (~mt & yt)),
          (w[32] = gi ^ (~nt & _t)),
          (w[33] = bt ^ (~ln & Et)),
          (w[42] = xt ^ (~Ci & Pi)),
          (w[43] = ct ^ (~Oi & Mi)),
          (w[4] = We ^ (~Ge & Fr)),
          (w[5] = an ^ (~ft & ke)),
          (w[14] = di ^ (~rt & it)),
          (w[15] = tt ^ (~pi & dt)),
          (w[24] = gt ^ (~un & at)),
          (w[25] = mt ^ (~yt & hn)),
          (w[34] = nt ^ (~_t & fn)),
          (w[35] = ln ^ (~Et & At)),
          (w[44] = Ci ^ (~Pi & Ni)),
          (w[45] = Oi ^ (~Mi & Ti)),
          (w[6] = Ge ^ (~Fr & lt)),
          (w[7] = ft ^ (~ke & Ke)),
          (w[16] = rt ^ (~it & Xe)),
          (w[17] = pi ^ (~dt & fi)),
          (w[26] = un ^ (~at & cn)),
          (w[27] = yt ^ (~hn & pt)),
          (w[36] = _t ^ (~fn & vt)),
          (w[37] = Et ^ (~At & wt)),
          (w[46] = Pi ^ (~Ni & St)),
          (w[47] = Mi ^ (~Ti & dn)),
          (w[8] = Fr ^ (~lt & Kt)),
          (w[9] = ke ^ (~Ke & Ve)),
          (w[18] = it ^ (~Xe & Ze)),
          (w[19] = dt ^ (~fi & et)),
          (w[28] = at ^ (~cn & ot)),
          (w[29] = hn ^ (~pt & Ri)),
          (w[38] = fn ^ (~vt & gi)),
          (w[39] = At ^ (~wt & bt)),
          (w[48] = Ni ^ (~St & xt)),
          (w[49] = Ti ^ (~dn & ct)),
          (w[0] ^= T[Y]),
          (w[1] ^= T[Y + 1]);
    };
    if (l) r.exports = m;
    else for (S = 0; S < b.length; ++S) n[b[S]] = m[b[S]];
  })();
})(uw);
var dR = uw.exports,
  pR = "logger/5.7.0",
  Ev = !1,
  Av = !1,
  $u = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
  Sv = $u.default,
  md = null;
function gR() {
  try {
    let r = [];
    if (
      (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
        try {
          if ("test".normalize(e) !== "test") throw new Error("bad normalize");
        } catch {
          r.push(e);
        }
      }),
      r.length)
    )
      throw new Error("missing " + r.join(", "));
    if ("\xE9".normalize("NFD") !== "e\u0301")
      throw new Error("broken implementation");
  } catch (r) {
    return r.message;
  }
  return null;
}
var xv = gR(),
  Pd;
(function (r) {
  (r.DEBUG = "DEBUG"),
    (r.INFO = "INFO"),
    (r.WARNING = "WARNING"),
    (r.ERROR = "ERROR"),
    (r.OFF = "OFF");
})(Pd || (Pd = {}));
var _i;
(function (r) {
  (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
    (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
    (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
    (r.NETWORK_ERROR = "NETWORK_ERROR"),
    (r.SERVER_ERROR = "SERVER_ERROR"),
    (r.TIMEOUT = "TIMEOUT"),
    (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
    (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
    (r.MISSING_NEW = "MISSING_NEW"),
    (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
    (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
    (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
    (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
    (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
    (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
    (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
    (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
    (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
    (r.ACTION_REJECTED = "ACTION_REJECTED");
})(_i || (_i = {}));
var Iv = "0123456789abcdef",
  Mt = class r {
    constructor(e) {
      Object.defineProperty(this, "version", {
        enumerable: !0,
        value: e,
        writable: !1,
      });
    }
    _log(e, t) {
      let i = e.toLowerCase();
      $u[i] == null &&
        this.throwArgumentError("invalid log level name", "logLevel", e),
        !(Sv > $u[i]) && console.log.apply(console, t);
    }
    debug(...e) {
      this._log(r.levels.DEBUG, e);
    }
    info(...e) {
      this._log(r.levels.INFO, e);
    }
    warn(...e) {
      this._log(r.levels.WARNING, e);
    }
    makeError(e, t, i) {
      if (Av) return this.makeError("censored error", t, {});
      t || (t = r.errors.UNKNOWN_ERROR), i || (i = {});
      let n = [];
      Object.keys(i).forEach((p) => {
        let g = i[p];
        try {
          if (g instanceof Uint8Array) {
            let y = "";
            for (let v = 0; v < g.length; v++)
              (y += Iv[g[v] >> 4]), (y += Iv[g[v] & 15]);
            n.push(p + "=Uint8Array(0x" + y + ")");
          } else n.push(p + "=" + JSON.stringify(g));
        } catch {
          n.push(p + "=" + JSON.stringify(i[p].toString()));
        }
      }),
        n.push(`code=${t}`),
        n.push(`version=${this.version}`);
      let o = e,
        c = "";
      switch (t) {
        case _i.NUMERIC_FAULT: {
          c = "NUMERIC_FAULT";
          let p = e;
          switch (p) {
            case "overflow":
            case "underflow":
            case "division-by-zero":
              c += "-" + p;
              break;
            case "negative-power":
            case "negative-width":
              c += "-unsupported";
              break;
            case "unbound-bitwise-result":
              c += "-unbound-result";
              break;
          }
          break;
        }
        case _i.CALL_EXCEPTION:
        case _i.INSUFFICIENT_FUNDS:
        case _i.MISSING_NEW:
        case _i.NONCE_EXPIRED:
        case _i.REPLACEMENT_UNDERPRICED:
        case _i.TRANSACTION_REPLACED:
        case _i.UNPREDICTABLE_GAS_LIMIT:
          c = t;
          break;
      }
      c && (e += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"),
        n.length && (e += " (" + n.join(", ") + ")");
      let l = new Error(e);
      return (
        (l.reason = o),
        (l.code = t),
        Object.keys(i).forEach(function (p) {
          l[p] = i[p];
        }),
        l
      );
    }
    throwError(e, t, i) {
      throw this.makeError(e, t, i);
    }
    throwArgumentError(e, t, i) {
      return this.throwError(e, r.errors.INVALID_ARGUMENT, {
        argument: t,
        value: i,
      });
    }
    assert(e, t, i, n) {
      e || this.throwError(t, i, n);
    }
    assertArgument(e, t, i, n) {
      e || this.throwArgumentError(t, i, n);
    }
    checkNormalize(e) {
      xv &&
        this.throwError(
          "platform missing String.prototype.normalize",
          r.errors.UNSUPPORTED_OPERATION,
          { operation: "String.prototype.normalize", form: xv }
        );
    }
    checkSafeUint53(e, t) {
      typeof e == "number" &&
        (t == null && (t = "value not safe"),
        (e < 0 || e >= 9007199254740991) &&
          this.throwError(t, r.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: e,
          }),
        e % 1 &&
          this.throwError(t, r.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: e,
          }));
    }
    checkArgumentCount(e, t, i) {
      i ? (i = ": " + i) : (i = ""),
        e < t &&
          this.throwError("missing argument" + i, r.errors.MISSING_ARGUMENT, {
            count: e,
            expectedCount: t,
          }),
        e > t &&
          this.throwError(
            "too many arguments" + i,
            r.errors.UNEXPECTED_ARGUMENT,
            { count: e, expectedCount: t }
          );
    }
    checkNew(e, t) {
      (e === Object || e == null) &&
        this.throwError("missing new", r.errors.MISSING_NEW, { name: t.name });
    }
    checkAbstract(e, t) {
      e === t
        ? this.throwError(
            "cannot instantiate abstract class " +
              JSON.stringify(t.name) +
              " directly; use a sub-class",
            r.errors.UNSUPPORTED_OPERATION,
            { name: e.name, operation: "new" }
          )
        : (e === Object || e == null) &&
          this.throwError("missing new", r.errors.MISSING_NEW, {
            name: t.name,
          });
    }
    static globalLogger() {
      return md || (md = new r(pR)), md;
    }
    static setCensorship(e, t) {
      if (
        (!e &&
          t &&
          this.globalLogger().throwError(
            "cannot permanently disable censorship",
            r.errors.UNSUPPORTED_OPERATION,
            { operation: "setCensorship" }
          ),
        Ev)
      ) {
        if (!e) return;
        this.globalLogger().throwError(
          "error censorship permanent",
          r.errors.UNSUPPORTED_OPERATION,
          { operation: "setCensorship" }
        );
      }
      (Av = !!e), (Ev = !!t);
    }
    static setLogLevel(e) {
      let t = $u[e.toLowerCase()];
      if (t == null) {
        r.globalLogger().warn("invalid log level - " + e);
        return;
      }
      Sv = t;
    }
    static from(e) {
      return new r(e);
    }
  };
(Mt.errors = _i), (Mt.levels = Pd);
var mR = "bytes/5.7.0",
  Ht = new Mt(mR);
function hw(r) {
  return !!r.toHexString;
}
function Po(r) {
  return (
    r.slice ||
      (r.slice = function () {
        let e = Array.prototype.slice.call(arguments);
        return Po(new Uint8Array(Array.prototype.slice.apply(r, e)));
      }),
    r
  );
}
function yR(r) {
  return (Kr(r) && !(r.length % 2)) || qo(r);
}
function Dv(r) {
  return typeof r == "number" && r == r && r % 1 === 0;
}
function qo(r) {
  if (r == null) return !1;
  if (r.constructor === Uint8Array) return !0;
  if (typeof r == "string" || !Dv(r.length) || r.length < 0) return !1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (!Dv(t) || t < 0 || t >= 256) return !1;
  }
  return !0;
}
function qt(r, e) {
  if ((e || (e = {}), typeof r == "number")) {
    Ht.checkSafeUint53(r, "invalid arrayify value");
    let t = [];
    for (; r; ) t.unshift(r & 255), (r = parseInt(String(r / 256)));
    return t.length === 0 && t.push(0), Po(new Uint8Array(t));
  }
  if (
    (e.allowMissingPrefix &&
      typeof r == "string" &&
      r.substring(0, 2) !== "0x" &&
      (r = "0x" + r),
    hw(r) && (r = r.toHexString()),
    Kr(r))
  ) {
    let t = r.substring(2);
    t.length % 2 &&
      (e.hexPad === "left"
        ? (t = "0" + t)
        : e.hexPad === "right"
        ? (t += "0")
        : Ht.throwArgumentError("hex data is odd-length", "value", r));
    let i = [];
    for (let n = 0; n < t.length; n += 2)
      i.push(parseInt(t.substring(n, n + 2), 16));
    return Po(new Uint8Array(i));
  }
  return qo(r)
    ? Po(new Uint8Array(r))
    : Ht.throwArgumentError("invalid arrayify value", "value", r);
}
function vR(r) {
  let e = r.map((n) => qt(n)),
    t = e.reduce((n, o) => n + o.length, 0),
    i = new Uint8Array(t);
  return e.reduce((n, o) => (i.set(o, n), n + o.length), 0), Po(i);
}
function wR(r, e) {
  (r = qt(r)),
    r.length > e &&
      Ht.throwArgumentError("value out of range", "value", arguments[0]);
  let t = new Uint8Array(e);
  return t.set(r, e - r.length), Po(t);
}
function Kr(r, e) {
  return !(
    typeof r != "string" ||
    !r.match(/^0x[0-9A-Fa-f]*$/) ||
    (e && r.length !== 2 + 2 * e)
  );
}
var yd = "0123456789abcdef";
function _r(r, e) {
  if ((e || (e = {}), typeof r == "number")) {
    Ht.checkSafeUint53(r, "invalid hexlify value");
    let t = "";
    for (; r; ) (t = yd[r & 15] + t), (r = Math.floor(r / 16));
    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
  }
  if (typeof r == "bigint")
    return (r = r.toString(16)), r.length % 2 ? "0x0" + r : "0x" + r;
  if (
    (e.allowMissingPrefix &&
      typeof r == "string" &&
      r.substring(0, 2) !== "0x" &&
      (r = "0x" + r),
    hw(r))
  )
    return r.toHexString();
  if (Kr(r))
    return (
      r.length % 2 &&
        (e.hexPad === "left"
          ? (r = "0x0" + r.substring(2))
          : e.hexPad === "right"
          ? (r += "0")
          : Ht.throwArgumentError("hex data is odd-length", "value", r)),
      r.toLowerCase()
    );
  if (qo(r)) {
    let t = "0x";
    for (let i = 0; i < r.length; i++) {
      let n = r[i];
      t += yd[(n & 240) >> 4] + yd[n & 15];
    }
    return t;
  }
  return Ht.throwArgumentError("invalid hexlify value", "value", r);
}
function bR(r) {
  if (typeof r != "string") r = _r(r);
  else if (!Kr(r) || r.length % 2) return null;
  return (r.length - 2) / 2;
}
function Rv(r, e, t) {
  return (
    typeof r != "string"
      ? (r = _r(r))
      : (!Kr(r) || r.length % 2) &&
        Ht.throwArgumentError("invalid hexData", "value", r),
    (e = 2 + 2 * e),
    t != null ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
  );
}
function Gi(r, e) {
  for (
    typeof r != "string"
      ? (r = _r(r))
      : Kr(r) || Ht.throwArgumentError("invalid hex string", "value", r),
      r.length > 2 * e + 2 &&
        Ht.throwArgumentError("value out of range", "value", arguments[1]);
    r.length < 2 * e + 2;

  )
    r = "0x0" + r.substring(2);
  return r;
}
function lw(r) {
  let e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x",
  };
  if (yR(r)) {
    let t = qt(r);
    t.length === 64
      ? ((e.v = 27 + (t[32] >> 7)),
        (t[32] &= 127),
        (e.r = _r(t.slice(0, 32))),
        (e.s = _r(t.slice(32, 64))))
      : t.length === 65
      ? ((e.r = _r(t.slice(0, 32))), (e.s = _r(t.slice(32, 64))), (e.v = t[64]))
      : Ht.throwArgumentError("invalid signature string", "signature", r),
      e.v < 27 &&
        (e.v === 0 || e.v === 1
          ? (e.v += 27)
          : Ht.throwArgumentError("signature invalid v byte", "signature", r)),
      (e.recoveryParam = 1 - (e.v % 2)),
      e.recoveryParam && (t[32] |= 128),
      (e._vs = _r(t.slice(32, 64)));
  } else {
    if (
      ((e.r = r.r),
      (e.s = r.s),
      (e.v = r.v),
      (e.recoveryParam = r.recoveryParam),
      (e._vs = r._vs),
      e._vs != null)
    ) {
      let n = wR(qt(e._vs), 32);
      e._vs = _r(n);
      let o = n[0] >= 128 ? 1 : 0;
      e.recoveryParam == null
        ? (e.recoveryParam = o)
        : e.recoveryParam !== o &&
          Ht.throwArgumentError(
            "signature recoveryParam mismatch _vs",
            "signature",
            r
          ),
        (n[0] &= 127);
      let c = _r(n);
      e.s == null
        ? (e.s = c)
        : e.s !== c &&
          Ht.throwArgumentError("signature v mismatch _vs", "signature", r);
    }
    if (e.recoveryParam == null)
      e.v == null
        ? Ht.throwArgumentError(
            "signature missing v and recoveryParam",
            "signature",
            r
          )
        : e.v === 0 || e.v === 1
        ? (e.recoveryParam = e.v)
        : (e.recoveryParam = 1 - (e.v % 2));
    else if (e.v == null) e.v = 27 + e.recoveryParam;
    else {
      let n = e.v === 0 || e.v === 1 ? e.v : 1 - (e.v % 2);
      e.recoveryParam !== n &&
        Ht.throwArgumentError(
          "signature recoveryParam mismatch v",
          "signature",
          r
        );
    }
    e.r == null || !Kr(e.r)
      ? Ht.throwArgumentError("signature missing or invalid r", "signature", r)
      : (e.r = Gi(e.r, 32)),
      e.s == null || !Kr(e.s)
        ? Ht.throwArgumentError(
            "signature missing or invalid s",
            "signature",
            r
          )
        : (e.s = Gi(e.s, 32));
    let t = qt(e.s);
    t[0] >= 128 &&
      Ht.throwArgumentError("signature s out of range", "signature", r),
      e.recoveryParam && (t[0] |= 128);
    let i = _r(t);
    e._vs &&
      (Kr(e._vs) ||
        Ht.throwArgumentError("signature invalid _vs", "signature", r),
      (e._vs = Gi(e._vs, 32))),
      e._vs == null
        ? (e._vs = i)
        : e._vs !== i &&
          Ht.throwArgumentError(
            "signature _vs mismatch v and s",
            "signature",
            r
          );
  }
  return (
    (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e
  );
}
function Kd(r) {
  return "0x" + dR.keccak_256(qt(r));
}
var fw = { exports: {} },
  _R = {},
  ER = Object.freeze({ __proto__: null, default: _R }),
  AR = fR(ER);
(function (r) {
  (function (e, t) {
    function i(h, m) {
      if (!h) throw new Error(m || "Assertion failed");
    }
    function n(h, m) {
      h.super_ = m;
      var b = function () {};
      (b.prototype = m.prototype),
        (h.prototype = new b()),
        (h.prototype.constructor = h);
    }
    function o(h, m, b) {
      if (o.isBN(h)) return h;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        h !== null &&
          ((m === "le" || m === "be") && ((b = m), (m = 10)),
          this._init(h || 0, m || 10, b || "be"));
    }
    typeof e == "object" ? (e.exports = o) : (t.BN = o),
      (o.BN = o),
      (o.wordSize = 26);
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (c = window.Buffer)
        : (c = AR.Buffer);
    } catch {}
    (o.isBN = function (h) {
      return h instanceof o
        ? !0
        : h !== null &&
            typeof h == "object" &&
            h.constructor.wordSize === o.wordSize &&
            Array.isArray(h.words);
    }),
      (o.max = function (h, m) {
        return h.cmp(m) > 0 ? h : m;
      }),
      (o.min = function (h, m) {
        return h.cmp(m) < 0 ? h : m;
      }),
      (o.prototype._init = function (h, m, b) {
        if (typeof h == "number") return this._initNumber(h, m, b);
        if (typeof h == "object") return this._initArray(h, m, b);
        m === "hex" && (m = 16),
          i(m === (m | 0) && m >= 2 && m <= 36),
          (h = h.toString().replace(/\s+/g, ""));
        var S = 0;
        h[0] === "-" && (S++, (this.negative = 1)),
          S < h.length &&
            (m === 16
              ? this._parseHex(h, S, b)
              : (this._parseBase(h, m, S),
                b === "le" && this._initArray(this.toArray(), m, b)));
      }),
      (o.prototype._initNumber = function (h, m, b) {
        h < 0 && ((this.negative = 1), (h = -h)),
          h < 67108864
            ? ((this.words = [h & 67108863]), (this.length = 1))
            : h < 4503599627370496
            ? ((this.words = [h & 67108863, (h / 67108864) & 67108863]),
              (this.length = 2))
            : (i(h < 9007199254740992),
              (this.words = [h & 67108863, (h / 67108864) & 67108863, 1]),
              (this.length = 3)),
          b === "le" && this._initArray(this.toArray(), m, b);
      }),
      (o.prototype._initArray = function (h, m, b) {
        if ((i(typeof h.length == "number"), h.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(h.length / 3)),
          (this.words = new Array(this.length));
        for (var S = 0; S < this.length; S++) this.words[S] = 0;
        var R,
          N,
          z = 0;
        if (b === "be")
          for (S = h.length - 1, R = 0; S >= 0; S -= 3)
            (N = h[S] | (h[S - 1] << 8) | (h[S - 2] << 16)),
              (this.words[R] |= (N << z) & 67108863),
              (this.words[R + 1] = (N >>> (26 - z)) & 67108863),
              (z += 24),
              z >= 26 && ((z -= 26), R++);
        else if (b === "le")
          for (S = 0, R = 0; S < h.length; S += 3)
            (N = h[S] | (h[S + 1] << 8) | (h[S + 2] << 16)),
              (this.words[R] |= (N << z) & 67108863),
              (this.words[R + 1] = (N >>> (26 - z)) & 67108863),
              (z += 24),
              z >= 26 && ((z -= 26), R++);
        return this._strip();
      });
    function l(h, m) {
      var b = h.charCodeAt(m);
      if (b >= 48 && b <= 57) return b - 48;
      if (b >= 65 && b <= 70) return b - 55;
      if (b >= 97 && b <= 102) return b - 87;
      i(!1, "Invalid character in " + h);
    }
    function p(h, m, b) {
      var S = l(h, b);
      return b - 1 >= m && (S |= l(h, b - 1) << 4), S;
    }
    o.prototype._parseHex = function (h, m, b) {
      (this.length = Math.ceil((h.length - m) / 6)),
        (this.words = new Array(this.length));
      for (var S = 0; S < this.length; S++) this.words[S] = 0;
      var R = 0,
        N = 0,
        z;
      if (b === "be")
        for (S = h.length - 1; S >= m; S -= 2)
          (z = p(h, m, S) << R),
            (this.words[N] |= z & 67108863),
            R >= 18
              ? ((R -= 18), (N += 1), (this.words[N] |= z >>> 26))
              : (R += 8);
      else {
        var I = h.length - m;
        for (S = I % 2 === 0 ? m + 1 : m; S < h.length; S += 2)
          (z = p(h, m, S) << R),
            (this.words[N] |= z & 67108863),
            R >= 18
              ? ((R -= 18), (N += 1), (this.words[N] |= z >>> 26))
              : (R += 8);
      }
      this._strip();
    };
    function g(h, m, b, S) {
      for (var R = 0, N = 0, z = Math.min(h.length, b), I = m; I < z; I++) {
        var d = h.charCodeAt(I) - 48;
        (R *= S),
          d >= 49 ? (N = d - 49 + 10) : d >= 17 ? (N = d - 17 + 10) : (N = d),
          i(d >= 0 && N < S, "Invalid character"),
          (R += N);
      }
      return R;
    }
    (o.prototype._parseBase = function (h, m, b) {
      (this.words = [0]), (this.length = 1);
      for (var S = 0, R = 1; R <= 67108863; R *= m) S++;
      S--, (R = (R / m) | 0);
      for (
        var N = h.length - b,
          z = N % S,
          I = Math.min(N, N - z) + b,
          d = 0,
          D = b;
        D < I;
        D += S
      )
        (d = g(h, D, D + S, m)),
          this.imuln(R),
          this.words[0] + d < 67108864 ? (this.words[0] += d) : this._iaddn(d);
      if (z !== 0) {
        var ce = 1;
        for (d = g(h, D, h.length, m), D = 0; D < z; D++) ce *= m;
        this.imuln(ce),
          this.words[0] + d < 67108864 ? (this.words[0] += d) : this._iaddn(d);
      }
      this._strip();
    }),
      (o.prototype.copy = function (h) {
        h.words = new Array(this.length);
        for (var m = 0; m < this.length; m++) h.words[m] = this.words[m];
        (h.length = this.length),
          (h.negative = this.negative),
          (h.red = this.red);
      });
    function y(h, m) {
      (h.words = m.words),
        (h.length = m.length),
        (h.negative = m.negative),
        (h.red = m.red);
    }
    if (
      ((o.prototype._move = function (h) {
        y(h, this);
      }),
      (o.prototype.clone = function () {
        var h = new o(null);
        return this.copy(h), h;
      }),
      (o.prototype._expand = function (h) {
        for (; this.length < h; ) this.words[this.length++] = 0;
        return this;
      }),
      (o.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (o.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = v;
      } catch {
        o.prototype.inspect = v;
      }
    else o.prototype.inspect = v;
    function v() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var A = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      E = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      P = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (o.prototype.toString = function (h, m) {
      (h = h || 10), (m = m | 0 || 1);
      var b;
      if (h === 16 || h === "hex") {
        b = "";
        for (var S = 0, R = 0, N = 0; N < this.length; N++) {
          var z = this.words[N],
            I = (((z << S) | R) & 16777215).toString(16);
          (R = (z >>> (24 - S)) & 16777215),
            (S += 2),
            S >= 26 && ((S -= 26), N--),
            R !== 0 || N !== this.length - 1
              ? (b = A[6 - I.length] + I + b)
              : (b = I + b);
        }
        for (R !== 0 && (b = R.toString(16) + b); b.length % m !== 0; )
          b = "0" + b;
        return this.negative !== 0 && (b = "-" + b), b;
      }
      if (h === (h | 0) && h >= 2 && h <= 36) {
        var d = E[h],
          D = P[h];
        b = "";
        var ce = this.clone();
        for (ce.negative = 0; !ce.isZero(); ) {
          var ie = ce.modrn(D).toString(h);
          (ce = ce.idivn(D)),
            ce.isZero() ? (b = ie + b) : (b = A[d - ie.length] + ie + b);
        }
        for (this.isZero() && (b = "0" + b); b.length % m !== 0; ) b = "0" + b;
        return this.negative !== 0 && (b = "-" + b), b;
      }
      i(!1, "Base should be between 2 and 36");
    }),
      (o.prototype.toNumber = function () {
        var h = this.words[0];
        return (
          this.length === 2
            ? (h += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (h += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              i(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -h : h
        );
      }),
      (o.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      c &&
        (o.prototype.toBuffer = function (h, m) {
          return this.toArrayLike(c, h, m);
        }),
      (o.prototype.toArray = function (h, m) {
        return this.toArrayLike(Array, h, m);
      });
    var T = function (h, m) {
      return h.allocUnsafe ? h.allocUnsafe(m) : new h(m);
    };
    (o.prototype.toArrayLike = function (h, m, b) {
      this._strip();
      var S = this.byteLength(),
        R = b || Math.max(1, S);
      i(S <= R, "byte array longer than desired length"),
        i(R > 0, "Requested array length <= 0");
      var N = T(h, R),
        z = m === "le" ? "LE" : "BE";
      return this["_toArrayLike" + z](N, S), N;
    }),
      (o.prototype._toArrayLikeLE = function (h, m) {
        for (var b = 0, S = 0, R = 0, N = 0; R < this.length; R++) {
          var z = (this.words[R] << N) | S;
          (h[b++] = z & 255),
            b < h.length && (h[b++] = (z >> 8) & 255),
            b < h.length && (h[b++] = (z >> 16) & 255),
            N === 6
              ? (b < h.length && (h[b++] = (z >> 24) & 255), (S = 0), (N = 0))
              : ((S = z >>> 24), (N += 2));
        }
        if (b < h.length) for (h[b++] = S; b < h.length; ) h[b++] = 0;
      }),
      (o.prototype._toArrayLikeBE = function (h, m) {
        for (var b = h.length - 1, S = 0, R = 0, N = 0; R < this.length; R++) {
          var z = (this.words[R] << N) | S;
          (h[b--] = z & 255),
            b >= 0 && (h[b--] = (z >> 8) & 255),
            b >= 0 && (h[b--] = (z >> 16) & 255),
            N === 6
              ? (b >= 0 && (h[b--] = (z >> 24) & 255), (S = 0), (N = 0))
              : ((S = z >>> 24), (N += 2));
        }
        if (b >= 0) for (h[b--] = S; b >= 0; ) h[b--] = 0;
      }),
      Math.clz32
        ? (o.prototype._countBits = function (h) {
            return 32 - Math.clz32(h);
          })
        : (o.prototype._countBits = function (h) {
            var m = h,
              b = 0;
            return (
              m >= 4096 && ((b += 13), (m >>>= 13)),
              m >= 64 && ((b += 7), (m >>>= 7)),
              m >= 8 && ((b += 4), (m >>>= 4)),
              m >= 2 && ((b += 2), (m >>>= 2)),
              b + m
            );
          }),
      (o.prototype._zeroBits = function (h) {
        if (h === 0) return 26;
        var m = h,
          b = 0;
        return (
          m & 8191 || ((b += 13), (m >>>= 13)),
          m & 127 || ((b += 7), (m >>>= 7)),
          m & 15 || ((b += 4), (m >>>= 4)),
          m & 3 || ((b += 2), (m >>>= 2)),
          m & 1 || b++,
          b
        );
      }),
      (o.prototype.bitLength = function () {
        var h = this.words[this.length - 1],
          m = this._countBits(h);
        return (this.length - 1) * 26 + m;
      });
    function L(h) {
      for (var m = new Array(h.bitLength()), b = 0; b < m.length; b++) {
        var S = (b / 26) | 0,
          R = b % 26;
        m[b] = (h.words[S] >>> R) & 1;
      }
      return m;
    }
    (o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var h = 0, m = 0; m < this.length; m++) {
        var b = this._zeroBits(this.words[m]);
        if (((h += b), b !== 26)) break;
      }
      return h;
    }),
      (o.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (o.prototype.toTwos = function (h) {
        return this.negative !== 0
          ? this.abs().inotn(h).iaddn(1)
          : this.clone();
      }),
      (o.prototype.fromTwos = function (h) {
        return this.testn(h - 1) ? this.notn(h).iaddn(1).ineg() : this.clone();
      }),
      (o.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (o.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (o.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (o.prototype.iuor = function (h) {
        for (; this.length < h.length; ) this.words[this.length++] = 0;
        for (var m = 0; m < h.length; m++)
          this.words[m] = this.words[m] | h.words[m];
        return this._strip();
      }),
      (o.prototype.ior = function (h) {
        return i((this.negative | h.negative) === 0), this.iuor(h);
      }),
      (o.prototype.or = function (h) {
        return this.length > h.length
          ? this.clone().ior(h)
          : h.clone().ior(this);
      }),
      (o.prototype.uor = function (h) {
        return this.length > h.length
          ? this.clone().iuor(h)
          : h.clone().iuor(this);
      }),
      (o.prototype.iuand = function (h) {
        var m;
        this.length > h.length ? (m = h) : (m = this);
        for (var b = 0; b < m.length; b++)
          this.words[b] = this.words[b] & h.words[b];
        return (this.length = m.length), this._strip();
      }),
      (o.prototype.iand = function (h) {
        return i((this.negative | h.negative) === 0), this.iuand(h);
      }),
      (o.prototype.and = function (h) {
        return this.length > h.length
          ? this.clone().iand(h)
          : h.clone().iand(this);
      }),
      (o.prototype.uand = function (h) {
        return this.length > h.length
          ? this.clone().iuand(h)
          : h.clone().iuand(this);
      }),
      (o.prototype.iuxor = function (h) {
        var m, b;
        this.length > h.length ? ((m = this), (b = h)) : ((m = h), (b = this));
        for (var S = 0; S < b.length; S++)
          this.words[S] = m.words[S] ^ b.words[S];
        if (this !== m) for (; S < m.length; S++) this.words[S] = m.words[S];
        return (this.length = m.length), this._strip();
      }),
      (o.prototype.ixor = function (h) {
        return i((this.negative | h.negative) === 0), this.iuxor(h);
      }),
      (o.prototype.xor = function (h) {
        return this.length > h.length
          ? this.clone().ixor(h)
          : h.clone().ixor(this);
      }),
      (o.prototype.uxor = function (h) {
        return this.length > h.length
          ? this.clone().iuxor(h)
          : h.clone().iuxor(this);
      }),
      (o.prototype.inotn = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = Math.ceil(h / 26) | 0,
          b = h % 26;
        this._expand(m), b > 0 && m--;
        for (var S = 0; S < m; S++) this.words[S] = ~this.words[S] & 67108863;
        return (
          b > 0 && (this.words[S] = ~this.words[S] & (67108863 >> (26 - b))),
          this._strip()
        );
      }),
      (o.prototype.notn = function (h) {
        return this.clone().inotn(h);
      }),
      (o.prototype.setn = function (h, m) {
        i(typeof h == "number" && h >= 0);
        var b = (h / 26) | 0,
          S = h % 26;
        return (
          this._expand(b + 1),
          m
            ? (this.words[b] = this.words[b] | (1 << S))
            : (this.words[b] = this.words[b] & ~(1 << S)),
          this._strip()
        );
      }),
      (o.prototype.iadd = function (h) {
        var m;
        if (this.negative !== 0 && h.negative === 0)
          return (
            (this.negative = 0),
            (m = this.isub(h)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && h.negative !== 0)
          return (
            (h.negative = 0),
            (m = this.isub(h)),
            (h.negative = 1),
            m._normSign()
          );
        var b, S;
        this.length > h.length ? ((b = this), (S = h)) : ((b = h), (S = this));
        for (var R = 0, N = 0; N < S.length; N++)
          (m = (b.words[N] | 0) + (S.words[N] | 0) + R),
            (this.words[N] = m & 67108863),
            (R = m >>> 26);
        for (; R !== 0 && N < b.length; N++)
          (m = (b.words[N] | 0) + R),
            (this.words[N] = m & 67108863),
            (R = m >>> 26);
        if (((this.length = b.length), R !== 0))
          (this.words[this.length] = R), this.length++;
        else if (b !== this)
          for (; N < b.length; N++) this.words[N] = b.words[N];
        return this;
      }),
      (o.prototype.add = function (h) {
        var m;
        return h.negative !== 0 && this.negative === 0
          ? ((h.negative = 0), (m = this.sub(h)), (h.negative ^= 1), m)
          : h.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (m = h.sub(this)), (this.negative = 1), m)
          : this.length > h.length
          ? this.clone().iadd(h)
          : h.clone().iadd(this);
      }),
      (o.prototype.isub = function (h) {
        if (h.negative !== 0) {
          h.negative = 0;
          var m = this.iadd(h);
          return (h.negative = 1), m._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(h),
            (this.negative = 1),
            this._normSign()
          );
        var b = this.cmp(h);
        if (b === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var S, R;
        b > 0 ? ((S = this), (R = h)) : ((S = h), (R = this));
        for (var N = 0, z = 0; z < R.length; z++)
          (m = (S.words[z] | 0) - (R.words[z] | 0) + N),
            (N = m >> 26),
            (this.words[z] = m & 67108863);
        for (; N !== 0 && z < S.length; z++)
          (m = (S.words[z] | 0) + N),
            (N = m >> 26),
            (this.words[z] = m & 67108863);
        if (N === 0 && z < S.length && S !== this)
          for (; z < S.length; z++) this.words[z] = S.words[z];
        return (
          (this.length = Math.max(this.length, z)),
          S !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (o.prototype.sub = function (h) {
        return this.clone().isub(h);
      });
    function H(h, m, b) {
      b.negative = m.negative ^ h.negative;
      var S = (h.length + m.length) | 0;
      (b.length = S), (S = (S - 1) | 0);
      var R = h.words[0] | 0,
        N = m.words[0] | 0,
        z = R * N,
        I = z & 67108863,
        d = (z / 67108864) | 0;
      b.words[0] = I;
      for (var D = 1; D < S; D++) {
        for (
          var ce = d >>> 26,
            ie = d & 67108863,
            w = Math.min(D, m.length - 1),
            $ = Math.max(0, D - h.length + 1);
          $ <= w;
          $++
        ) {
          var K = (D - $) | 0;
          (R = h.words[K] | 0),
            (N = m.words[$] | 0),
            (z = R * N + ie),
            (ce += (z / 67108864) | 0),
            (ie = z & 67108863);
        }
        (b.words[D] = ie | 0), (d = ce | 0);
      }
      return d !== 0 ? (b.words[D] = d | 0) : b.length--, b._strip();
    }
    var Q = function (h, m, b) {
      var S = h.words,
        R = m.words,
        N = b.words,
        z = 0,
        I,
        d,
        D,
        ce = S[0] | 0,
        ie = ce & 8191,
        w = ce >>> 13,
        $ = S[1] | 0,
        K = $ & 8191,
        Y = $ >>> 13,
        ue = S[2] | 0,
        se = ue & 8191,
        oe = ue >>> 13,
        le = S[3] | 0,
        pe = le & 8191,
        ne = le >>> 13,
        ve = S[4] | 0,
        ht = ve & 8191,
        qe = ve >>> 13,
        Di = S[5] | 0,
        lt = Di & 8191,
        Ke = Di >>> 13,
        Kt = S[6] | 0,
        Ve = Kt & 8191,
        We = Kt >>> 13,
        an = S[7] | 0,
        Ge = an & 8191,
        ft = an >>> 13,
        Fr = S[8] | 0,
        ke = Fr & 8191,
        Xe = Fr >>> 13,
        fi = S[9] | 0,
        Ze = fi & 8191,
        et = fi >>> 13,
        di = R[0] | 0,
        tt = di & 8191,
        rt = di >>> 13,
        pi = R[1] | 0,
        it = pi & 8191,
        dt = pi >>> 13,
        cn = R[2] | 0,
        pt = cn & 8191,
        ot = cn >>> 13,
        Ri = R[3] | 0,
        gt = Ri & 8191,
        mt = Ri >>> 13,
        un = R[4] | 0,
        yt = un & 8191,
        at = un >>> 13,
        hn = R[5] | 0,
        vt = hn & 8191,
        wt = hn >>> 13,
        gi = R[6] | 0,
        bt = gi & 8191,
        nt = gi >>> 13,
        ln = R[7] | 0,
        _t = ln & 8191,
        Et = ln >>> 13,
        fn = R[8] | 0,
        At = fn & 8191,
        St = fn >>> 13,
        dn = R[9] | 0,
        xt = dn & 8191,
        ct = dn >>> 13;
      (b.negative = h.negative ^ m.negative),
        (b.length = 19),
        (I = Math.imul(ie, tt)),
        (d = Math.imul(ie, rt)),
        (d = (d + Math.imul(w, tt)) | 0),
        (D = Math.imul(w, rt));
      var Ci = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Ci >>> 26)) | 0),
        (Ci &= 67108863),
        (I = Math.imul(K, tt)),
        (d = Math.imul(K, rt)),
        (d = (d + Math.imul(Y, tt)) | 0),
        (D = Math.imul(Y, rt)),
        (I = (I + Math.imul(ie, it)) | 0),
        (d = (d + Math.imul(ie, dt)) | 0),
        (d = (d + Math.imul(w, it)) | 0),
        (D = (D + Math.imul(w, dt)) | 0);
      var Oi = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Oi >>> 26)) | 0),
        (Oi &= 67108863),
        (I = Math.imul(se, tt)),
        (d = Math.imul(se, rt)),
        (d = (d + Math.imul(oe, tt)) | 0),
        (D = Math.imul(oe, rt)),
        (I = (I + Math.imul(K, it)) | 0),
        (d = (d + Math.imul(K, dt)) | 0),
        (d = (d + Math.imul(Y, it)) | 0),
        (D = (D + Math.imul(Y, dt)) | 0),
        (I = (I + Math.imul(ie, pt)) | 0),
        (d = (d + Math.imul(ie, ot)) | 0),
        (d = (d + Math.imul(w, pt)) | 0),
        (D = (D + Math.imul(w, ot)) | 0);
      var Pi = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Pi >>> 26)) | 0),
        (Pi &= 67108863),
        (I = Math.imul(pe, tt)),
        (d = Math.imul(pe, rt)),
        (d = (d + Math.imul(ne, tt)) | 0),
        (D = Math.imul(ne, rt)),
        (I = (I + Math.imul(se, it)) | 0),
        (d = (d + Math.imul(se, dt)) | 0),
        (d = (d + Math.imul(oe, it)) | 0),
        (D = (D + Math.imul(oe, dt)) | 0),
        (I = (I + Math.imul(K, pt)) | 0),
        (d = (d + Math.imul(K, ot)) | 0),
        (d = (d + Math.imul(Y, pt)) | 0),
        (D = (D + Math.imul(Y, ot)) | 0),
        (I = (I + Math.imul(ie, gt)) | 0),
        (d = (d + Math.imul(ie, mt)) | 0),
        (d = (d + Math.imul(w, gt)) | 0),
        (D = (D + Math.imul(w, mt)) | 0);
      var Mi = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Mi >>> 26)) | 0),
        (Mi &= 67108863),
        (I = Math.imul(ht, tt)),
        (d = Math.imul(ht, rt)),
        (d = (d + Math.imul(qe, tt)) | 0),
        (D = Math.imul(qe, rt)),
        (I = (I + Math.imul(pe, it)) | 0),
        (d = (d + Math.imul(pe, dt)) | 0),
        (d = (d + Math.imul(ne, it)) | 0),
        (D = (D + Math.imul(ne, dt)) | 0),
        (I = (I + Math.imul(se, pt)) | 0),
        (d = (d + Math.imul(se, ot)) | 0),
        (d = (d + Math.imul(oe, pt)) | 0),
        (D = (D + Math.imul(oe, ot)) | 0),
        (I = (I + Math.imul(K, gt)) | 0),
        (d = (d + Math.imul(K, mt)) | 0),
        (d = (d + Math.imul(Y, gt)) | 0),
        (D = (D + Math.imul(Y, mt)) | 0),
        (I = (I + Math.imul(ie, yt)) | 0),
        (d = (d + Math.imul(ie, at)) | 0),
        (d = (d + Math.imul(w, yt)) | 0),
        (D = (D + Math.imul(w, at)) | 0);
      var Ni = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Ni >>> 26)) | 0),
        (Ni &= 67108863),
        (I = Math.imul(lt, tt)),
        (d = Math.imul(lt, rt)),
        (d = (d + Math.imul(Ke, tt)) | 0),
        (D = Math.imul(Ke, rt)),
        (I = (I + Math.imul(ht, it)) | 0),
        (d = (d + Math.imul(ht, dt)) | 0),
        (d = (d + Math.imul(qe, it)) | 0),
        (D = (D + Math.imul(qe, dt)) | 0),
        (I = (I + Math.imul(pe, pt)) | 0),
        (d = (d + Math.imul(pe, ot)) | 0),
        (d = (d + Math.imul(ne, pt)) | 0),
        (D = (D + Math.imul(ne, ot)) | 0),
        (I = (I + Math.imul(se, gt)) | 0),
        (d = (d + Math.imul(se, mt)) | 0),
        (d = (d + Math.imul(oe, gt)) | 0),
        (D = (D + Math.imul(oe, mt)) | 0),
        (I = (I + Math.imul(K, yt)) | 0),
        (d = (d + Math.imul(K, at)) | 0),
        (d = (d + Math.imul(Y, yt)) | 0),
        (D = (D + Math.imul(Y, at)) | 0),
        (I = (I + Math.imul(ie, vt)) | 0),
        (d = (d + Math.imul(ie, wt)) | 0),
        (d = (d + Math.imul(w, vt)) | 0),
        (D = (D + Math.imul(w, wt)) | 0);
      var Ti = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Ti >>> 26)) | 0),
        (Ti &= 67108863),
        (I = Math.imul(Ve, tt)),
        (d = Math.imul(Ve, rt)),
        (d = (d + Math.imul(We, tt)) | 0),
        (D = Math.imul(We, rt)),
        (I = (I + Math.imul(lt, it)) | 0),
        (d = (d + Math.imul(lt, dt)) | 0),
        (d = (d + Math.imul(Ke, it)) | 0),
        (D = (D + Math.imul(Ke, dt)) | 0),
        (I = (I + Math.imul(ht, pt)) | 0),
        (d = (d + Math.imul(ht, ot)) | 0),
        (d = (d + Math.imul(qe, pt)) | 0),
        (D = (D + Math.imul(qe, ot)) | 0),
        (I = (I + Math.imul(pe, gt)) | 0),
        (d = (d + Math.imul(pe, mt)) | 0),
        (d = (d + Math.imul(ne, gt)) | 0),
        (D = (D + Math.imul(ne, mt)) | 0),
        (I = (I + Math.imul(se, yt)) | 0),
        (d = (d + Math.imul(se, at)) | 0),
        (d = (d + Math.imul(oe, yt)) | 0),
        (D = (D + Math.imul(oe, at)) | 0),
        (I = (I + Math.imul(K, vt)) | 0),
        (d = (d + Math.imul(K, wt)) | 0),
        (d = (d + Math.imul(Y, vt)) | 0),
        (D = (D + Math.imul(Y, wt)) | 0),
        (I = (I + Math.imul(ie, bt)) | 0),
        (d = (d + Math.imul(ie, nt)) | 0),
        (d = (d + Math.imul(w, bt)) | 0),
        (D = (D + Math.imul(w, nt)) | 0);
      var Kn = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Kn >>> 26)) | 0),
        (Kn &= 67108863),
        (I = Math.imul(Ge, tt)),
        (d = Math.imul(Ge, rt)),
        (d = (d + Math.imul(ft, tt)) | 0),
        (D = Math.imul(ft, rt)),
        (I = (I + Math.imul(Ve, it)) | 0),
        (d = (d + Math.imul(Ve, dt)) | 0),
        (d = (d + Math.imul(We, it)) | 0),
        (D = (D + Math.imul(We, dt)) | 0),
        (I = (I + Math.imul(lt, pt)) | 0),
        (d = (d + Math.imul(lt, ot)) | 0),
        (d = (d + Math.imul(Ke, pt)) | 0),
        (D = (D + Math.imul(Ke, ot)) | 0),
        (I = (I + Math.imul(ht, gt)) | 0),
        (d = (d + Math.imul(ht, mt)) | 0),
        (d = (d + Math.imul(qe, gt)) | 0),
        (D = (D + Math.imul(qe, mt)) | 0),
        (I = (I + Math.imul(pe, yt)) | 0),
        (d = (d + Math.imul(pe, at)) | 0),
        (d = (d + Math.imul(ne, yt)) | 0),
        (D = (D + Math.imul(ne, at)) | 0),
        (I = (I + Math.imul(se, vt)) | 0),
        (d = (d + Math.imul(se, wt)) | 0),
        (d = (d + Math.imul(oe, vt)) | 0),
        (D = (D + Math.imul(oe, wt)) | 0),
        (I = (I + Math.imul(K, bt)) | 0),
        (d = (d + Math.imul(K, nt)) | 0),
        (d = (d + Math.imul(Y, bt)) | 0),
        (D = (D + Math.imul(Y, nt)) | 0),
        (I = (I + Math.imul(ie, _t)) | 0),
        (d = (d + Math.imul(ie, Et)) | 0),
        (d = (d + Math.imul(w, _t)) | 0),
        (D = (D + Math.imul(w, Et)) | 0);
      var aa = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (aa >>> 26)) | 0),
        (aa &= 67108863),
        (I = Math.imul(ke, tt)),
        (d = Math.imul(ke, rt)),
        (d = (d + Math.imul(Xe, tt)) | 0),
        (D = Math.imul(Xe, rt)),
        (I = (I + Math.imul(Ge, it)) | 0),
        (d = (d + Math.imul(Ge, dt)) | 0),
        (d = (d + Math.imul(ft, it)) | 0),
        (D = (D + Math.imul(ft, dt)) | 0),
        (I = (I + Math.imul(Ve, pt)) | 0),
        (d = (d + Math.imul(Ve, ot)) | 0),
        (d = (d + Math.imul(We, pt)) | 0),
        (D = (D + Math.imul(We, ot)) | 0),
        (I = (I + Math.imul(lt, gt)) | 0),
        (d = (d + Math.imul(lt, mt)) | 0),
        (d = (d + Math.imul(Ke, gt)) | 0),
        (D = (D + Math.imul(Ke, mt)) | 0),
        (I = (I + Math.imul(ht, yt)) | 0),
        (d = (d + Math.imul(ht, at)) | 0),
        (d = (d + Math.imul(qe, yt)) | 0),
        (D = (D + Math.imul(qe, at)) | 0),
        (I = (I + Math.imul(pe, vt)) | 0),
        (d = (d + Math.imul(pe, wt)) | 0),
        (d = (d + Math.imul(ne, vt)) | 0),
        (D = (D + Math.imul(ne, wt)) | 0),
        (I = (I + Math.imul(se, bt)) | 0),
        (d = (d + Math.imul(se, nt)) | 0),
        (d = (d + Math.imul(oe, bt)) | 0),
        (D = (D + Math.imul(oe, nt)) | 0),
        (I = (I + Math.imul(K, _t)) | 0),
        (d = (d + Math.imul(K, Et)) | 0),
        (d = (d + Math.imul(Y, _t)) | 0),
        (D = (D + Math.imul(Y, Et)) | 0),
        (I = (I + Math.imul(ie, At)) | 0),
        (d = (d + Math.imul(ie, St)) | 0),
        (d = (d + Math.imul(w, At)) | 0),
        (D = (D + Math.imul(w, St)) | 0);
      var Vn = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Vn >>> 26)) | 0),
        (Vn &= 67108863),
        (I = Math.imul(Ze, tt)),
        (d = Math.imul(Ze, rt)),
        (d = (d + Math.imul(et, tt)) | 0),
        (D = Math.imul(et, rt)),
        (I = (I + Math.imul(ke, it)) | 0),
        (d = (d + Math.imul(ke, dt)) | 0),
        (d = (d + Math.imul(Xe, it)) | 0),
        (D = (D + Math.imul(Xe, dt)) | 0),
        (I = (I + Math.imul(Ge, pt)) | 0),
        (d = (d + Math.imul(Ge, ot)) | 0),
        (d = (d + Math.imul(ft, pt)) | 0),
        (D = (D + Math.imul(ft, ot)) | 0),
        (I = (I + Math.imul(Ve, gt)) | 0),
        (d = (d + Math.imul(Ve, mt)) | 0),
        (d = (d + Math.imul(We, gt)) | 0),
        (D = (D + Math.imul(We, mt)) | 0),
        (I = (I + Math.imul(lt, yt)) | 0),
        (d = (d + Math.imul(lt, at)) | 0),
        (d = (d + Math.imul(Ke, yt)) | 0),
        (D = (D + Math.imul(Ke, at)) | 0),
        (I = (I + Math.imul(ht, vt)) | 0),
        (d = (d + Math.imul(ht, wt)) | 0),
        (d = (d + Math.imul(qe, vt)) | 0),
        (D = (D + Math.imul(qe, wt)) | 0),
        (I = (I + Math.imul(pe, bt)) | 0),
        (d = (d + Math.imul(pe, nt)) | 0),
        (d = (d + Math.imul(ne, bt)) | 0),
        (D = (D + Math.imul(ne, nt)) | 0),
        (I = (I + Math.imul(se, _t)) | 0),
        (d = (d + Math.imul(se, Et)) | 0),
        (d = (d + Math.imul(oe, _t)) | 0),
        (D = (D + Math.imul(oe, Et)) | 0),
        (I = (I + Math.imul(K, At)) | 0),
        (d = (d + Math.imul(K, St)) | 0),
        (d = (d + Math.imul(Y, At)) | 0),
        (D = (D + Math.imul(Y, St)) | 0),
        (I = (I + Math.imul(ie, xt)) | 0),
        (d = (d + Math.imul(ie, ct)) | 0),
        (d = (d + Math.imul(w, xt)) | 0),
        (D = (D + Math.imul(w, ct)) | 0);
      var ca = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (ca >>> 26)) | 0),
        (ca &= 67108863),
        (I = Math.imul(Ze, it)),
        (d = Math.imul(Ze, dt)),
        (d = (d + Math.imul(et, it)) | 0),
        (D = Math.imul(et, dt)),
        (I = (I + Math.imul(ke, pt)) | 0),
        (d = (d + Math.imul(ke, ot)) | 0),
        (d = (d + Math.imul(Xe, pt)) | 0),
        (D = (D + Math.imul(Xe, ot)) | 0),
        (I = (I + Math.imul(Ge, gt)) | 0),
        (d = (d + Math.imul(Ge, mt)) | 0),
        (d = (d + Math.imul(ft, gt)) | 0),
        (D = (D + Math.imul(ft, mt)) | 0),
        (I = (I + Math.imul(Ve, yt)) | 0),
        (d = (d + Math.imul(Ve, at)) | 0),
        (d = (d + Math.imul(We, yt)) | 0),
        (D = (D + Math.imul(We, at)) | 0),
        (I = (I + Math.imul(lt, vt)) | 0),
        (d = (d + Math.imul(lt, wt)) | 0),
        (d = (d + Math.imul(Ke, vt)) | 0),
        (D = (D + Math.imul(Ke, wt)) | 0),
        (I = (I + Math.imul(ht, bt)) | 0),
        (d = (d + Math.imul(ht, nt)) | 0),
        (d = (d + Math.imul(qe, bt)) | 0),
        (D = (D + Math.imul(qe, nt)) | 0),
        (I = (I + Math.imul(pe, _t)) | 0),
        (d = (d + Math.imul(pe, Et)) | 0),
        (d = (d + Math.imul(ne, _t)) | 0),
        (D = (D + Math.imul(ne, Et)) | 0),
        (I = (I + Math.imul(se, At)) | 0),
        (d = (d + Math.imul(se, St)) | 0),
        (d = (d + Math.imul(oe, At)) | 0),
        (D = (D + Math.imul(oe, St)) | 0),
        (I = (I + Math.imul(K, xt)) | 0),
        (d = (d + Math.imul(K, ct)) | 0),
        (d = (d + Math.imul(Y, xt)) | 0),
        (D = (D + Math.imul(Y, ct)) | 0);
      var ua = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (ua >>> 26)) | 0),
        (ua &= 67108863),
        (I = Math.imul(Ze, pt)),
        (d = Math.imul(Ze, ot)),
        (d = (d + Math.imul(et, pt)) | 0),
        (D = Math.imul(et, ot)),
        (I = (I + Math.imul(ke, gt)) | 0),
        (d = (d + Math.imul(ke, mt)) | 0),
        (d = (d + Math.imul(Xe, gt)) | 0),
        (D = (D + Math.imul(Xe, mt)) | 0),
        (I = (I + Math.imul(Ge, yt)) | 0),
        (d = (d + Math.imul(Ge, at)) | 0),
        (d = (d + Math.imul(ft, yt)) | 0),
        (D = (D + Math.imul(ft, at)) | 0),
        (I = (I + Math.imul(Ve, vt)) | 0),
        (d = (d + Math.imul(Ve, wt)) | 0),
        (d = (d + Math.imul(We, vt)) | 0),
        (D = (D + Math.imul(We, wt)) | 0),
        (I = (I + Math.imul(lt, bt)) | 0),
        (d = (d + Math.imul(lt, nt)) | 0),
        (d = (d + Math.imul(Ke, bt)) | 0),
        (D = (D + Math.imul(Ke, nt)) | 0),
        (I = (I + Math.imul(ht, _t)) | 0),
        (d = (d + Math.imul(ht, Et)) | 0),
        (d = (d + Math.imul(qe, _t)) | 0),
        (D = (D + Math.imul(qe, Et)) | 0),
        (I = (I + Math.imul(pe, At)) | 0),
        (d = (d + Math.imul(pe, St)) | 0),
        (d = (d + Math.imul(ne, At)) | 0),
        (D = (D + Math.imul(ne, St)) | 0),
        (I = (I + Math.imul(se, xt)) | 0),
        (d = (d + Math.imul(se, ct)) | 0),
        (d = (d + Math.imul(oe, xt)) | 0),
        (D = (D + Math.imul(oe, ct)) | 0);
      var ha = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (ha >>> 26)) | 0),
        (ha &= 67108863),
        (I = Math.imul(Ze, gt)),
        (d = Math.imul(Ze, mt)),
        (d = (d + Math.imul(et, gt)) | 0),
        (D = Math.imul(et, mt)),
        (I = (I + Math.imul(ke, yt)) | 0),
        (d = (d + Math.imul(ke, at)) | 0),
        (d = (d + Math.imul(Xe, yt)) | 0),
        (D = (D + Math.imul(Xe, at)) | 0),
        (I = (I + Math.imul(Ge, vt)) | 0),
        (d = (d + Math.imul(Ge, wt)) | 0),
        (d = (d + Math.imul(ft, vt)) | 0),
        (D = (D + Math.imul(ft, wt)) | 0),
        (I = (I + Math.imul(Ve, bt)) | 0),
        (d = (d + Math.imul(Ve, nt)) | 0),
        (d = (d + Math.imul(We, bt)) | 0),
        (D = (D + Math.imul(We, nt)) | 0),
        (I = (I + Math.imul(lt, _t)) | 0),
        (d = (d + Math.imul(lt, Et)) | 0),
        (d = (d + Math.imul(Ke, _t)) | 0),
        (D = (D + Math.imul(Ke, Et)) | 0),
        (I = (I + Math.imul(ht, At)) | 0),
        (d = (d + Math.imul(ht, St)) | 0),
        (d = (d + Math.imul(qe, At)) | 0),
        (D = (D + Math.imul(qe, St)) | 0),
        (I = (I + Math.imul(pe, xt)) | 0),
        (d = (d + Math.imul(pe, ct)) | 0),
        (d = (d + Math.imul(ne, xt)) | 0),
        (D = (D + Math.imul(ne, ct)) | 0);
      var Zs = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (Zs >>> 26)) | 0),
        (Zs &= 67108863),
        (I = Math.imul(Ze, yt)),
        (d = Math.imul(Ze, at)),
        (d = (d + Math.imul(et, yt)) | 0),
        (D = Math.imul(et, at)),
        (I = (I + Math.imul(ke, vt)) | 0),
        (d = (d + Math.imul(ke, wt)) | 0),
        (d = (d + Math.imul(Xe, vt)) | 0),
        (D = (D + Math.imul(Xe, wt)) | 0),
        (I = (I + Math.imul(Ge, bt)) | 0),
        (d = (d + Math.imul(Ge, nt)) | 0),
        (d = (d + Math.imul(ft, bt)) | 0),
        (D = (D + Math.imul(ft, nt)) | 0),
        (I = (I + Math.imul(Ve, _t)) | 0),
        (d = (d + Math.imul(Ve, Et)) | 0),
        (d = (d + Math.imul(We, _t)) | 0),
        (D = (D + Math.imul(We, Et)) | 0),
        (I = (I + Math.imul(lt, At)) | 0),
        (d = (d + Math.imul(lt, St)) | 0),
        (d = (d + Math.imul(Ke, At)) | 0),
        (D = (D + Math.imul(Ke, St)) | 0),
        (I = (I + Math.imul(ht, xt)) | 0),
        (d = (d + Math.imul(ht, ct)) | 0),
        (d = (d + Math.imul(qe, xt)) | 0),
        (D = (D + Math.imul(qe, ct)) | 0);
      var eo = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (eo >>> 26)) | 0),
        (eo &= 67108863),
        (I = Math.imul(Ze, vt)),
        (d = Math.imul(Ze, wt)),
        (d = (d + Math.imul(et, vt)) | 0),
        (D = Math.imul(et, wt)),
        (I = (I + Math.imul(ke, bt)) | 0),
        (d = (d + Math.imul(ke, nt)) | 0),
        (d = (d + Math.imul(Xe, bt)) | 0),
        (D = (D + Math.imul(Xe, nt)) | 0),
        (I = (I + Math.imul(Ge, _t)) | 0),
        (d = (d + Math.imul(Ge, Et)) | 0),
        (d = (d + Math.imul(ft, _t)) | 0),
        (D = (D + Math.imul(ft, Et)) | 0),
        (I = (I + Math.imul(Ve, At)) | 0),
        (d = (d + Math.imul(Ve, St)) | 0),
        (d = (d + Math.imul(We, At)) | 0),
        (D = (D + Math.imul(We, St)) | 0),
        (I = (I + Math.imul(lt, xt)) | 0),
        (d = (d + Math.imul(lt, ct)) | 0),
        (d = (d + Math.imul(Ke, xt)) | 0),
        (D = (D + Math.imul(Ke, ct)) | 0);
      var to = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (to >>> 26)) | 0),
        (to &= 67108863),
        (I = Math.imul(Ze, bt)),
        (d = Math.imul(Ze, nt)),
        (d = (d + Math.imul(et, bt)) | 0),
        (D = Math.imul(et, nt)),
        (I = (I + Math.imul(ke, _t)) | 0),
        (d = (d + Math.imul(ke, Et)) | 0),
        (d = (d + Math.imul(Xe, _t)) | 0),
        (D = (D + Math.imul(Xe, Et)) | 0),
        (I = (I + Math.imul(Ge, At)) | 0),
        (d = (d + Math.imul(Ge, St)) | 0),
        (d = (d + Math.imul(ft, At)) | 0),
        (D = (D + Math.imul(ft, St)) | 0),
        (I = (I + Math.imul(Ve, xt)) | 0),
        (d = (d + Math.imul(Ve, ct)) | 0),
        (d = (d + Math.imul(We, xt)) | 0),
        (D = (D + Math.imul(We, ct)) | 0);
      var la = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (la >>> 26)) | 0),
        (la &= 67108863),
        (I = Math.imul(Ze, _t)),
        (d = Math.imul(Ze, Et)),
        (d = (d + Math.imul(et, _t)) | 0),
        (D = Math.imul(et, Et)),
        (I = (I + Math.imul(ke, At)) | 0),
        (d = (d + Math.imul(ke, St)) | 0),
        (d = (d + Math.imul(Xe, At)) | 0),
        (D = (D + Math.imul(Xe, St)) | 0),
        (I = (I + Math.imul(Ge, xt)) | 0),
        (d = (d + Math.imul(Ge, ct)) | 0),
        (d = (d + Math.imul(ft, xt)) | 0),
        (D = (D + Math.imul(ft, ct)) | 0);
      var fa = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (fa >>> 26)) | 0),
        (fa &= 67108863),
        (I = Math.imul(Ze, At)),
        (d = Math.imul(Ze, St)),
        (d = (d + Math.imul(et, At)) | 0),
        (D = Math.imul(et, St)),
        (I = (I + Math.imul(ke, xt)) | 0),
        (d = (d + Math.imul(ke, ct)) | 0),
        (d = (d + Math.imul(Xe, xt)) | 0),
        (D = (D + Math.imul(Xe, ct)) | 0);
      var da = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      (z = (((D + (d >>> 13)) | 0) + (da >>> 26)) | 0),
        (da &= 67108863),
        (I = Math.imul(Ze, xt)),
        (d = Math.imul(Ze, ct)),
        (d = (d + Math.imul(et, xt)) | 0),
        (D = Math.imul(et, ct));
      var pa = (((z + I) | 0) + ((d & 8191) << 13)) | 0;
      return (
        (z = (((D + (d >>> 13)) | 0) + (pa >>> 26)) | 0),
        (pa &= 67108863),
        (N[0] = Ci),
        (N[1] = Oi),
        (N[2] = Pi),
        (N[3] = Mi),
        (N[4] = Ni),
        (N[5] = Ti),
        (N[6] = Kn),
        (N[7] = aa),
        (N[8] = Vn),
        (N[9] = ca),
        (N[10] = ua),
        (N[11] = ha),
        (N[12] = Zs),
        (N[13] = eo),
        (N[14] = to),
        (N[15] = la),
        (N[16] = fa),
        (N[17] = da),
        (N[18] = pa),
        z !== 0 && ((N[19] = z), b.length++),
        b
      );
    };
    Math.imul || (Q = H);
    function J(h, m, b) {
      (b.negative = m.negative ^ h.negative), (b.length = h.length + m.length);
      for (var S = 0, R = 0, N = 0; N < b.length - 1; N++) {
        var z = R;
        R = 0;
        for (
          var I = S & 67108863,
            d = Math.min(N, m.length - 1),
            D = Math.max(0, N - h.length + 1);
          D <= d;
          D++
        ) {
          var ce = N - D,
            ie = h.words[ce] | 0,
            w = m.words[D] | 0,
            $ = ie * w,
            K = $ & 67108863;
          (z = (z + (($ / 67108864) | 0)) | 0),
            (K = (K + I) | 0),
            (I = K & 67108863),
            (z = (z + (K >>> 26)) | 0),
            (R += z >>> 26),
            (z &= 67108863);
        }
        (b.words[N] = I), (S = z), (z = R);
      }
      return S !== 0 ? (b.words[N] = S) : b.length--, b._strip();
    }
    function G(h, m, b) {
      return J(h, m, b);
    }
    (o.prototype.mulTo = function (h, m) {
      var b,
        S = this.length + h.length;
      return (
        this.length === 10 && h.length === 10
          ? (b = Q(this, h, m))
          : S < 63
          ? (b = H(this, h, m))
          : S < 1024
          ? (b = J(this, h, m))
          : (b = G(this, h, m)),
        b
      );
    }),
      (o.prototype.mul = function (h) {
        var m = new o(null);
        return (m.words = new Array(this.length + h.length)), this.mulTo(h, m);
      }),
      (o.prototype.mulf = function (h) {
        var m = new o(null);
        return (m.words = new Array(this.length + h.length)), G(this, h, m);
      }),
      (o.prototype.imul = function (h) {
        return this.clone().mulTo(h, this);
      }),
      (o.prototype.imuln = function (h) {
        var m = h < 0;
        m && (h = -h), i(typeof h == "number"), i(h < 67108864);
        for (var b = 0, S = 0; S < this.length; S++) {
          var R = (this.words[S] | 0) * h,
            N = (R & 67108863) + (b & 67108863);
          (b >>= 26),
            (b += (R / 67108864) | 0),
            (b += N >>> 26),
            (this.words[S] = N & 67108863);
        }
        return (
          b !== 0 && ((this.words[S] = b), this.length++),
          m ? this.ineg() : this
        );
      }),
      (o.prototype.muln = function (h) {
        return this.clone().imuln(h);
      }),
      (o.prototype.sqr = function () {
        return this.mul(this);
      }),
      (o.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (o.prototype.pow = function (h) {
        var m = L(h);
        if (m.length === 0) return new o(1);
        for (var b = this, S = 0; S < m.length && m[S] === 0; S++, b = b.sqr());
        if (++S < m.length)
          for (var R = b.sqr(); S < m.length; S++, R = R.sqr())
            m[S] !== 0 && (b = b.mul(R));
        return b;
      }),
      (o.prototype.iushln = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = h % 26,
          b = (h - m) / 26,
          S = (67108863 >>> (26 - m)) << (26 - m),
          R;
        if (m !== 0) {
          var N = 0;
          for (R = 0; R < this.length; R++) {
            var z = this.words[R] & S,
              I = ((this.words[R] | 0) - z) << m;
            (this.words[R] = I | N), (N = z >>> (26 - m));
          }
          N && ((this.words[R] = N), this.length++);
        }
        if (b !== 0) {
          for (R = this.length - 1; R >= 0; R--)
            this.words[R + b] = this.words[R];
          for (R = 0; R < b; R++) this.words[R] = 0;
          this.length += b;
        }
        return this._strip();
      }),
      (o.prototype.ishln = function (h) {
        return i(this.negative === 0), this.iushln(h);
      }),
      (o.prototype.iushrn = function (h, m, b) {
        i(typeof h == "number" && h >= 0);
        var S;
        m ? (S = (m - (m % 26)) / 26) : (S = 0);
        var R = h % 26,
          N = Math.min((h - R) / 26, this.length),
          z = 67108863 ^ ((67108863 >>> R) << R),
          I = b;
        if (((S -= N), (S = Math.max(0, S)), I)) {
          for (var d = 0; d < N; d++) I.words[d] = this.words[d];
          I.length = N;
        }
        if (N !== 0)
          if (this.length > N)
            for (this.length -= N, d = 0; d < this.length; d++)
              this.words[d] = this.words[d + N];
          else (this.words[0] = 0), (this.length = 1);
        var D = 0;
        for (d = this.length - 1; d >= 0 && (D !== 0 || d >= S); d--) {
          var ce = this.words[d] | 0;
          (this.words[d] = (D << (26 - R)) | (ce >>> R)), (D = ce & z);
        }
        return (
          I && D !== 0 && (I.words[I.length++] = D),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (o.prototype.ishrn = function (h, m, b) {
        return i(this.negative === 0), this.iushrn(h, m, b);
      }),
      (o.prototype.shln = function (h) {
        return this.clone().ishln(h);
      }),
      (o.prototype.ushln = function (h) {
        return this.clone().iushln(h);
      }),
      (o.prototype.shrn = function (h) {
        return this.clone().ishrn(h);
      }),
      (o.prototype.ushrn = function (h) {
        return this.clone().iushrn(h);
      }),
      (o.prototype.testn = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = h % 26,
          b = (h - m) / 26,
          S = 1 << m;
        if (this.length <= b) return !1;
        var R = this.words[b];
        return !!(R & S);
      }),
      (o.prototype.imaskn = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = h % 26,
          b = (h - m) / 26;
        if (
          (i(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= b)
        )
          return this;
        if (
          (m !== 0 && b++, (this.length = Math.min(b, this.length)), m !== 0)
        ) {
          var S = 67108863 ^ ((67108863 >>> m) << m);
          this.words[this.length - 1] &= S;
        }
        return this._strip();
      }),
      (o.prototype.maskn = function (h) {
        return this.clone().imaskn(h);
      }),
      (o.prototype.iaddn = function (h) {
        return (
          i(typeof h == "number"),
          i(h < 67108864),
          h < 0
            ? this.isubn(-h)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= h
              ? ((this.words[0] = h - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(h), (this.negative = 1), this)
            : this._iaddn(h)
        );
      }),
      (o.prototype._iaddn = function (h) {
        this.words[0] += h;
        for (var m = 0; m < this.length && this.words[m] >= 67108864; m++)
          (this.words[m] -= 67108864),
            m === this.length - 1
              ? (this.words[m + 1] = 1)
              : this.words[m + 1]++;
        return (this.length = Math.max(this.length, m + 1)), this;
      }),
      (o.prototype.isubn = function (h) {
        if ((i(typeof h == "number"), i(h < 67108864), h < 0))
          return this.iaddn(-h);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(h), (this.negative = 1), this;
        if (((this.words[0] -= h), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var m = 0; m < this.length && this.words[m] < 0; m++)
            (this.words[m] += 67108864), (this.words[m + 1] -= 1);
        return this._strip();
      }),
      (o.prototype.addn = function (h) {
        return this.clone().iaddn(h);
      }),
      (o.prototype.subn = function (h) {
        return this.clone().isubn(h);
      }),
      (o.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (o.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (o.prototype._ishlnsubmul = function (h, m, b) {
        var S = h.length + b,
          R;
        this._expand(S);
        var N,
          z = 0;
        for (R = 0; R < h.length; R++) {
          N = (this.words[R + b] | 0) + z;
          var I = (h.words[R] | 0) * m;
          (N -= I & 67108863),
            (z = (N >> 26) - ((I / 67108864) | 0)),
            (this.words[R + b] = N & 67108863);
        }
        for (; R < this.length - b; R++)
          (N = (this.words[R + b] | 0) + z),
            (z = N >> 26),
            (this.words[R + b] = N & 67108863);
        if (z === 0) return this._strip();
        for (i(z === -1), z = 0, R = 0; R < this.length; R++)
          (N = -(this.words[R] | 0) + z),
            (z = N >> 26),
            (this.words[R] = N & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (o.prototype._wordDiv = function (h, m) {
        var b = this.length - h.length,
          S = this.clone(),
          R = h,
          N = R.words[R.length - 1] | 0,
          z = this._countBits(N);
        (b = 26 - z),
          b !== 0 &&
            ((R = R.ushln(b)), S.iushln(b), (N = R.words[R.length - 1] | 0));
        var I = S.length - R.length,
          d;
        if (m !== "mod") {
          (d = new o(null)),
            (d.length = I + 1),
            (d.words = new Array(d.length));
          for (var D = 0; D < d.length; D++) d.words[D] = 0;
        }
        var ce = S.clone()._ishlnsubmul(R, 1, I);
        ce.negative === 0 && ((S = ce), d && (d.words[I] = 1));
        for (var ie = I - 1; ie >= 0; ie--) {
          var w =
            (S.words[R.length + ie] | 0) * 67108864 +
            (S.words[R.length + ie - 1] | 0);
          for (
            w = Math.min((w / N) | 0, 67108863), S._ishlnsubmul(R, w, ie);
            S.negative !== 0;

          )
            w--,
              (S.negative = 0),
              S._ishlnsubmul(R, 1, ie),
              S.isZero() || (S.negative ^= 1);
          d && (d.words[ie] = w);
        }
        return (
          d && d._strip(),
          S._strip(),
          m !== "div" && b !== 0 && S.iushrn(b),
          { div: d || null, mod: S }
        );
      }),
      (o.prototype.divmod = function (h, m, b) {
        if ((i(!h.isZero()), this.isZero()))
          return { div: new o(0), mod: new o(0) };
        var S, R, N;
        return this.negative !== 0 && h.negative === 0
          ? ((N = this.neg().divmod(h, m)),
            m !== "mod" && (S = N.div.neg()),
            m !== "div" &&
              ((R = N.mod.neg()), b && R.negative !== 0 && R.iadd(h)),
            { div: S, mod: R })
          : this.negative === 0 && h.negative !== 0
          ? ((N = this.divmod(h.neg(), m)),
            m !== "mod" && (S = N.div.neg()),
            { div: S, mod: N.mod })
          : this.negative & h.negative
          ? ((N = this.neg().divmod(h.neg(), m)),
            m !== "div" &&
              ((R = N.mod.neg()), b && R.negative !== 0 && R.isub(h)),
            { div: N.div, mod: R })
          : h.length > this.length || this.cmp(h) < 0
          ? { div: new o(0), mod: this }
          : h.length === 1
          ? m === "div"
            ? { div: this.divn(h.words[0]), mod: null }
            : m === "mod"
            ? { div: null, mod: new o(this.modrn(h.words[0])) }
            : { div: this.divn(h.words[0]), mod: new o(this.modrn(h.words[0])) }
          : this._wordDiv(h, m);
      }),
      (o.prototype.div = function (h) {
        return this.divmod(h, "div", !1).div;
      }),
      (o.prototype.mod = function (h) {
        return this.divmod(h, "mod", !1).mod;
      }),
      (o.prototype.umod = function (h) {
        return this.divmod(h, "mod", !0).mod;
      }),
      (o.prototype.divRound = function (h) {
        var m = this.divmod(h);
        if (m.mod.isZero()) return m.div;
        var b = m.div.negative !== 0 ? m.mod.isub(h) : m.mod,
          S = h.ushrn(1),
          R = h.andln(1),
          N = b.cmp(S);
        return N < 0 || (R === 1 && N === 0)
          ? m.div
          : m.div.negative !== 0
          ? m.div.isubn(1)
          : m.div.iaddn(1);
      }),
      (o.prototype.modrn = function (h) {
        var m = h < 0;
        m && (h = -h), i(h <= 67108863);
        for (var b = (1 << 26) % h, S = 0, R = this.length - 1; R >= 0; R--)
          S = (b * S + (this.words[R] | 0)) % h;
        return m ? -S : S;
      }),
      (o.prototype.modn = function (h) {
        return this.modrn(h);
      }),
      (o.prototype.idivn = function (h) {
        var m = h < 0;
        m && (h = -h), i(h <= 67108863);
        for (var b = 0, S = this.length - 1; S >= 0; S--) {
          var R = (this.words[S] | 0) + b * 67108864;
          (this.words[S] = (R / h) | 0), (b = R % h);
        }
        return this._strip(), m ? this.ineg() : this;
      }),
      (o.prototype.divn = function (h) {
        return this.clone().idivn(h);
      }),
      (o.prototype.egcd = function (h) {
        i(h.negative === 0), i(!h.isZero());
        var m = this,
          b = h.clone();
        m.negative !== 0 ? (m = m.umod(h)) : (m = m.clone());
        for (
          var S = new o(1), R = new o(0), N = new o(0), z = new o(1), I = 0;
          m.isEven() && b.isEven();

        )
          m.iushrn(1), b.iushrn(1), ++I;
        for (var d = b.clone(), D = m.clone(); !m.isZero(); ) {
          for (
            var ce = 0, ie = 1;
            !(m.words[0] & ie) && ce < 26;
            ++ce, ie <<= 1
          );
          if (ce > 0)
            for (m.iushrn(ce); ce-- > 0; )
              (S.isOdd() || R.isOdd()) && (S.iadd(d), R.isub(D)),
                S.iushrn(1),
                R.iushrn(1);
          for (var w = 0, $ = 1; !(b.words[0] & $) && w < 26; ++w, $ <<= 1);
          if (w > 0)
            for (b.iushrn(w); w-- > 0; )
              (N.isOdd() || z.isOdd()) && (N.iadd(d), z.isub(D)),
                N.iushrn(1),
                z.iushrn(1);
          m.cmp(b) >= 0
            ? (m.isub(b), S.isub(N), R.isub(z))
            : (b.isub(m), N.isub(S), z.isub(R));
        }
        return { a: N, b: z, gcd: b.iushln(I) };
      }),
      (o.prototype._invmp = function (h) {
        i(h.negative === 0), i(!h.isZero());
        var m = this,
          b = h.clone();
        m.negative !== 0 ? (m = m.umod(h)) : (m = m.clone());
        for (
          var S = new o(1), R = new o(0), N = b.clone();
          m.cmpn(1) > 0 && b.cmpn(1) > 0;

        ) {
          for (var z = 0, I = 1; !(m.words[0] & I) && z < 26; ++z, I <<= 1);
          if (z > 0)
            for (m.iushrn(z); z-- > 0; ) S.isOdd() && S.iadd(N), S.iushrn(1);
          for (var d = 0, D = 1; !(b.words[0] & D) && d < 26; ++d, D <<= 1);
          if (d > 0)
            for (b.iushrn(d); d-- > 0; ) R.isOdd() && R.iadd(N), R.iushrn(1);
          m.cmp(b) >= 0 ? (m.isub(b), S.isub(R)) : (b.isub(m), R.isub(S));
        }
        var ce;
        return (
          m.cmpn(1) === 0 ? (ce = S) : (ce = R),
          ce.cmpn(0) < 0 && ce.iadd(h),
          ce
        );
      }),
      (o.prototype.gcd = function (h) {
        if (this.isZero()) return h.abs();
        if (h.isZero()) return this.abs();
        var m = this.clone(),
          b = h.clone();
        (m.negative = 0), (b.negative = 0);
        for (var S = 0; m.isEven() && b.isEven(); S++) m.iushrn(1), b.iushrn(1);
        do {
          for (; m.isEven(); ) m.iushrn(1);
          for (; b.isEven(); ) b.iushrn(1);
          var R = m.cmp(b);
          if (R < 0) {
            var N = m;
            (m = b), (b = N);
          } else if (R === 0 || b.cmpn(1) === 0) break;
          m.isub(b);
        } while (!0);
        return b.iushln(S);
      }),
      (o.prototype.invm = function (h) {
        return this.egcd(h).a.umod(h);
      }),
      (o.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (o.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (o.prototype.andln = function (h) {
        return this.words[0] & h;
      }),
      (o.prototype.bincn = function (h) {
        i(typeof h == "number");
        var m = h % 26,
          b = (h - m) / 26,
          S = 1 << m;
        if (this.length <= b)
          return this._expand(b + 1), (this.words[b] |= S), this;
        for (var R = S, N = b; R !== 0 && N < this.length; N++) {
          var z = this.words[N] | 0;
          (z += R), (R = z >>> 26), (z &= 67108863), (this.words[N] = z);
        }
        return R !== 0 && ((this.words[N] = R), this.length++), this;
      }),
      (o.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (o.prototype.cmpn = function (h) {
        var m = h < 0;
        if (this.negative !== 0 && !m) return -1;
        if (this.negative === 0 && m) return 1;
        this._strip();
        var b;
        if (this.length > 1) b = 1;
        else {
          m && (h = -h), i(h <= 67108863, "Number is too big");
          var S = this.words[0] | 0;
          b = S === h ? 0 : S < h ? -1 : 1;
        }
        return this.negative !== 0 ? -b | 0 : b;
      }),
      (o.prototype.cmp = function (h) {
        if (this.negative !== 0 && h.negative === 0) return -1;
        if (this.negative === 0 && h.negative !== 0) return 1;
        var m = this.ucmp(h);
        return this.negative !== 0 ? -m | 0 : m;
      }),
      (o.prototype.ucmp = function (h) {
        if (this.length > h.length) return 1;
        if (this.length < h.length) return -1;
        for (var m = 0, b = this.length - 1; b >= 0; b--) {
          var S = this.words[b] | 0,
            R = h.words[b] | 0;
          if (S !== R) {
            S < R ? (m = -1) : S > R && (m = 1);
            break;
          }
        }
        return m;
      }),
      (o.prototype.gtn = function (h) {
        return this.cmpn(h) === 1;
      }),
      (o.prototype.gt = function (h) {
        return this.cmp(h) === 1;
      }),
      (o.prototype.gten = function (h) {
        return this.cmpn(h) >= 0;
      }),
      (o.prototype.gte = function (h) {
        return this.cmp(h) >= 0;
      }),
      (o.prototype.ltn = function (h) {
        return this.cmpn(h) === -1;
      }),
      (o.prototype.lt = function (h) {
        return this.cmp(h) === -1;
      }),
      (o.prototype.lten = function (h) {
        return this.cmpn(h) <= 0;
      }),
      (o.prototype.lte = function (h) {
        return this.cmp(h) <= 0;
      }),
      (o.prototype.eqn = function (h) {
        return this.cmpn(h) === 0;
      }),
      (o.prototype.eq = function (h) {
        return this.cmp(h) === 0;
      }),
      (o.red = function (h) {
        return new M(h);
      }),
      (o.prototype.toRed = function (h) {
        return (
          i(!this.red, "Already a number in reduction context"),
          i(this.negative === 0, "red works only with positives"),
          h.convertTo(this)._forceRed(h)
        );
      }),
      (o.prototype.fromRed = function () {
        return (
          i(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (o.prototype._forceRed = function (h) {
        return (this.red = h), this;
      }),
      (o.prototype.forceRed = function (h) {
        return (
          i(!this.red, "Already a number in reduction context"),
          this._forceRed(h)
        );
      }),
      (o.prototype.redAdd = function (h) {
        return (
          i(this.red, "redAdd works only with red numbers"),
          this.red.add(this, h)
        );
      }),
      (o.prototype.redIAdd = function (h) {
        return (
          i(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, h)
        );
      }),
      (o.prototype.redSub = function (h) {
        return (
          i(this.red, "redSub works only with red numbers"),
          this.red.sub(this, h)
        );
      }),
      (o.prototype.redISub = function (h) {
        return (
          i(this.red, "redISub works only with red numbers"),
          this.red.isub(this, h)
        );
      }),
      (o.prototype.redShl = function (h) {
        return (
          i(this.red, "redShl works only with red numbers"),
          this.red.shl(this, h)
        );
      }),
      (o.prototype.redMul = function (h) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, h),
          this.red.mul(this, h)
        );
      }),
      (o.prototype.redIMul = function (h) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, h),
          this.red.imul(this, h)
        );
      }),
      (o.prototype.redSqr = function () {
        return (
          i(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (o.prototype.redISqr = function () {
        return (
          i(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (o.prototype.redSqrt = function () {
        return (
          i(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (o.prototype.redInvm = function () {
        return (
          i(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (o.prototype.redNeg = function () {
        return (
          i(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (o.prototype.redPow = function (h) {
        return (
          i(this.red && !h.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, h)
        );
      });
    var W = { k256: null, p224: null, p192: null, p25519: null };
    function Z(h, m) {
      (this.name = h),
        (this.p = new o(m, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new o(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (Z.prototype._tmp = function () {
      var h = new o(null);
      return (h.words = new Array(Math.ceil(this.n / 13))), h;
    }),
      (Z.prototype.ireduce = function (h) {
        var m = h,
          b;
        do
          this.split(m, this.tmp),
            (m = this.imulK(m)),
            (m = m.iadd(this.tmp)),
            (b = m.bitLength());
        while (b > this.n);
        var S = b < this.n ? -1 : m.ucmp(this.p);
        return (
          S === 0
            ? ((m.words[0] = 0), (m.length = 1))
            : S > 0
            ? m.isub(this.p)
            : m.strip !== void 0
            ? m.strip()
            : m._strip(),
          m
        );
      }),
      (Z.prototype.split = function (h, m) {
        h.iushrn(this.n, 0, m);
      }),
      (Z.prototype.imulK = function (h) {
        return h.imul(this.k);
      });
    function U() {
      Z.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    n(U, Z),
      (U.prototype.split = function (h, m) {
        for (var b = 4194303, S = Math.min(h.length, 9), R = 0; R < S; R++)
          m.words[R] = h.words[R];
        if (((m.length = S), h.length <= 9)) {
          (h.words[0] = 0), (h.length = 1);
          return;
        }
        var N = h.words[9];
        for (m.words[m.length++] = N & b, R = 10; R < h.length; R++) {
          var z = h.words[R] | 0;
          (h.words[R - 10] = ((z & b) << 4) | (N >>> 22)), (N = z);
        }
        (N >>>= 22),
          (h.words[R - 10] = N),
          N === 0 && h.length > 10 ? (h.length -= 10) : (h.length -= 9);
      }),
      (U.prototype.imulK = function (h) {
        (h.words[h.length] = 0), (h.words[h.length + 1] = 0), (h.length += 2);
        for (var m = 0, b = 0; b < h.length; b++) {
          var S = h.words[b] | 0;
          (m += S * 977),
            (h.words[b] = m & 67108863),
            (m = S * 64 + ((m / 67108864) | 0));
        }
        return (
          h.words[h.length - 1] === 0 &&
            (h.length--, h.words[h.length - 1] === 0 && h.length--),
          h
        );
      });
    function B() {
      Z.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    n(B, Z);
    function ae() {
      Z.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    n(ae, Z);
    function fe() {
      Z.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    n(fe, Z),
      (fe.prototype.imulK = function (h) {
        for (var m = 0, b = 0; b < h.length; b++) {
          var S = (h.words[b] | 0) * 19 + m,
            R = S & 67108863;
          (S >>>= 26), (h.words[b] = R), (m = S);
        }
        return m !== 0 && (h.words[h.length++] = m), h;
      }),
      (o._prime = function (h) {
        if (W[h]) return W[h];
        var m;
        if (h === "k256") m = new U();
        else if (h === "p224") m = new B();
        else if (h === "p192") m = new ae();
        else if (h === "p25519") m = new fe();
        else throw new Error("Unknown prime " + h);
        return (W[h] = m), m;
      });
    function M(h) {
      if (typeof h == "string") {
        var m = o._prime(h);
        (this.m = m.p), (this.prime = m);
      } else
        i(h.gtn(1), "modulus must be greater than 1"),
          (this.m = h),
          (this.prime = null);
    }
    (M.prototype._verify1 = function (h) {
      i(h.negative === 0, "red works only with positives"),
        i(h.red, "red works only with red numbers");
    }),
      (M.prototype._verify2 = function (h, m) {
        i((h.negative | m.negative) === 0, "red works only with positives"),
          i(h.red && h.red === m.red, "red works only with red numbers");
      }),
      (M.prototype.imod = function (h) {
        return this.prime
          ? this.prime.ireduce(h)._forceRed(this)
          : (y(h, h.umod(this.m)._forceRed(this)), h);
      }),
      (M.prototype.neg = function (h) {
        return h.isZero() ? h.clone() : this.m.sub(h)._forceRed(this);
      }),
      (M.prototype.add = function (h, m) {
        this._verify2(h, m);
        var b = h.add(m);
        return b.cmp(this.m) >= 0 && b.isub(this.m), b._forceRed(this);
      }),
      (M.prototype.iadd = function (h, m) {
        this._verify2(h, m);
        var b = h.iadd(m);
        return b.cmp(this.m) >= 0 && b.isub(this.m), b;
      }),
      (M.prototype.sub = function (h, m) {
        this._verify2(h, m);
        var b = h.sub(m);
        return b.cmpn(0) < 0 && b.iadd(this.m), b._forceRed(this);
      }),
      (M.prototype.isub = function (h, m) {
        this._verify2(h, m);
        var b = h.isub(m);
        return b.cmpn(0) < 0 && b.iadd(this.m), b;
      }),
      (M.prototype.shl = function (h, m) {
        return this._verify1(h), this.imod(h.ushln(m));
      }),
      (M.prototype.imul = function (h, m) {
        return this._verify2(h, m), this.imod(h.imul(m));
      }),
      (M.prototype.mul = function (h, m) {
        return this._verify2(h, m), this.imod(h.mul(m));
      }),
      (M.prototype.isqr = function (h) {
        return this.imul(h, h.clone());
      }),
      (M.prototype.sqr = function (h) {
        return this.mul(h, h);
      }),
      (M.prototype.sqrt = function (h) {
        if (h.isZero()) return h.clone();
        var m = this.m.andln(3);
        if ((i(m % 2 === 1), m === 3)) {
          var b = this.m.add(new o(1)).iushrn(2);
          return this.pow(h, b);
        }
        for (var S = this.m.subn(1), R = 0; !S.isZero() && S.andln(1) === 0; )
          R++, S.iushrn(1);
        i(!S.isZero());
        var N = new o(1).toRed(this),
          z = N.redNeg(),
          I = this.m.subn(1).iushrn(1),
          d = this.m.bitLength();
        for (d = new o(2 * d * d).toRed(this); this.pow(d, I).cmp(z) !== 0; )
          d.redIAdd(z);
        for (
          var D = this.pow(d, S),
            ce = this.pow(h, S.addn(1).iushrn(1)),
            ie = this.pow(h, S),
            w = R;
          ie.cmp(N) !== 0;

        ) {
          for (var $ = ie, K = 0; $.cmp(N) !== 0; K++) $ = $.redSqr();
          i(K < w);
          var Y = this.pow(D, new o(1).iushln(w - K - 1));
          (ce = ce.redMul(Y)), (D = Y.redSqr()), (ie = ie.redMul(D)), (w = K);
        }
        return ce;
      }),
      (M.prototype.invm = function (h) {
        var m = h._invmp(this.m);
        return m.negative !== 0
          ? ((m.negative = 0), this.imod(m).redNeg())
          : this.imod(m);
      }),
      (M.prototype.pow = function (h, m) {
        if (m.isZero()) return new o(1).toRed(this);
        if (m.cmpn(1) === 0) return h.clone();
        var b = 4,
          S = new Array(1 << b);
        (S[0] = new o(1).toRed(this)), (S[1] = h);
        for (var R = 2; R < S.length; R++) S[R] = this.mul(S[R - 1], h);
        var N = S[0],
          z = 0,
          I = 0,
          d = m.bitLength() % 26;
        for (d === 0 && (d = 26), R = m.length - 1; R >= 0; R--) {
          for (var D = m.words[R], ce = d - 1; ce >= 0; ce--) {
            var ie = (D >> ce) & 1;
            if ((N !== S[0] && (N = this.sqr(N)), ie === 0 && z === 0)) {
              I = 0;
              continue;
            }
            (z <<= 1),
              (z |= ie),
              I++,
              !(I !== b && (R !== 0 || ce !== 0)) &&
                ((N = this.mul(N, S[z])), (I = 0), (z = 0));
          }
          d = 26;
        }
        return N;
      }),
      (M.prototype.convertTo = function (h) {
        var m = h.umod(this.m);
        return m === h ? m.clone() : m;
      }),
      (M.prototype.convertFrom = function (h) {
        var m = h.clone();
        return (m.red = null), m;
      }),
      (o.mont = function (h) {
        return new q(h);
      });
    function q(h) {
      M.call(this, h),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new o(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(q, M),
      (q.prototype.convertTo = function (h) {
        return this.imod(h.ushln(this.shift));
      }),
      (q.prototype.convertFrom = function (h) {
        var m = this.imod(h.mul(this.rinv));
        return (m.red = null), m;
      }),
      (q.prototype.imul = function (h, m) {
        if (h.isZero() || m.isZero())
          return (h.words[0] = 0), (h.length = 1), h;
        var b = h.imul(m),
          S = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          R = b.isub(S).iushrn(this.shift),
          N = R;
        return (
          R.cmp(this.m) >= 0
            ? (N = R.isub(this.m))
            : R.cmpn(0) < 0 && (N = R.iadd(this.m)),
          N._forceRed(this)
        );
      }),
      (q.prototype.mul = function (h, m) {
        if (h.isZero() || m.isZero()) return new o(0)._forceRed(this);
        var b = h.mul(m),
          S = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          R = b.isub(S).iushrn(this.shift),
          N = R;
        return (
          R.cmp(this.m) >= 0
            ? (N = R.isub(this.m))
            : R.cmpn(0) < 0 && (N = R.iadd(this.m)),
          N._forceRed(this)
        );
      }),
      (q.prototype.invm = function (h) {
        var m = this.imod(h._invmp(this.m).mul(this.r2));
        return m._forceRed(this);
      });
  })(r, cw);
})(fw);
var Re = fw.exports,
  dw = "bignumber/5.7.0",
  Yu = Re.BN,
  On = new Mt(dw),
  vd = {},
  Cv = 9007199254740991;
function SR(r) {
  return (
    r != null &&
    (or.isBigNumber(r) ||
      (typeof r == "number" && r % 1 === 0) ||
      (typeof r == "string" && !!r.match(/^-?[0-9]+$/)) ||
      Kr(r) ||
      typeof r == "bigint" ||
      qo(r))
  );
}
var Ov = !1,
  or = class r {
    constructor(e, t) {
      e !== vd &&
        On.throwError(
          "cannot call constructor directly; use BigNumber.from",
          Mt.errors.UNSUPPORTED_OPERATION,
          { operation: "new (BigNumber)" }
        ),
        (this._hex = t),
        (this._isBigNumber = !0),
        Object.freeze(this);
    }
    fromTwos(e) {
      return Mr(Be(this).fromTwos(e));
    }
    toTwos(e) {
      return Mr(Be(this).toTwos(e));
    }
    abs() {
      return this._hex[0] === "-" ? r.from(this._hex.substring(1)) : this;
    }
    add(e) {
      return Mr(Be(this).add(Be(e)));
    }
    sub(e) {
      return Mr(Be(this).sub(Be(e)));
    }
    div(e) {
      return (
        r.from(e).isZero() && oi("division-by-zero", "div"),
        Mr(Be(this).div(Be(e)))
      );
    }
    mul(e) {
      return Mr(Be(this).mul(Be(e)));
    }
    mod(e) {
      let t = Be(e);
      return t.isNeg() && oi("division-by-zero", "mod"), Mr(Be(this).umod(t));
    }
    pow(e) {
      let t = Be(e);
      return t.isNeg() && oi("negative-power", "pow"), Mr(Be(this).pow(t));
    }
    and(e) {
      let t = Be(e);
      return (
        (this.isNegative() || t.isNeg()) && oi("unbound-bitwise-result", "and"),
        Mr(Be(this).and(t))
      );
    }
    or(e) {
      let t = Be(e);
      return (
        (this.isNegative() || t.isNeg()) && oi("unbound-bitwise-result", "or"),
        Mr(Be(this).or(t))
      );
    }
    xor(e) {
      let t = Be(e);
      return (
        (this.isNegative() || t.isNeg()) && oi("unbound-bitwise-result", "xor"),
        Mr(Be(this).xor(t))
      );
    }
    mask(e) {
      return (
        (this.isNegative() || e < 0) && oi("negative-width", "mask"),
        Mr(Be(this).maskn(e))
      );
    }
    shl(e) {
      return (
        (this.isNegative() || e < 0) && oi("negative-width", "shl"),
        Mr(Be(this).shln(e))
      );
    }
    shr(e) {
      return (
        (this.isNegative() || e < 0) && oi("negative-width", "shr"),
        Mr(Be(this).shrn(e))
      );
    }
    eq(e) {
      return Be(this).eq(Be(e));
    }
    lt(e) {
      return Be(this).lt(Be(e));
    }
    lte(e) {
      return Be(this).lte(Be(e));
    }
    gt(e) {
      return Be(this).gt(Be(e));
    }
    gte(e) {
      return Be(this).gte(Be(e));
    }
    isNegative() {
      return this._hex[0] === "-";
    }
    isZero() {
      return Be(this).isZero();
    }
    toNumber() {
      try {
        return Be(this).toNumber();
      } catch {
        oi("overflow", "toNumber", this.toString());
      }
      return null;
    }
    toBigInt() {
      try {
        return BigInt(this.toString());
      } catch {}
      return On.throwError(
        "this platform does not support BigInt",
        Mt.errors.UNSUPPORTED_OPERATION,
        { value: this.toString() }
      );
    }
    toString() {
      return (
        arguments.length > 0 &&
          (arguments[0] === 10
            ? Ov ||
              ((Ov = !0),
              On.warn(
                "BigNumber.toString does not accept any parameters; base-10 is assumed"
              ))
            : arguments[0] === 16
            ? On.throwError(
                "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                Mt.errors.UNEXPECTED_ARGUMENT,
                {}
              )
            : On.throwError(
                "BigNumber.toString does not accept parameters",
                Mt.errors.UNEXPECTED_ARGUMENT,
                {}
              )),
        Be(this).toString(10)
      );
    }
    toHexString() {
      return this._hex;
    }
    toJSON(e) {
      return { type: "BigNumber", hex: this.toHexString() };
    }
    static from(e) {
      if (e instanceof r) return e;
      if (typeof e == "string")
        return e.match(/^-?0x[0-9a-f]+$/i)
          ? new r(vd, Qa(e))
          : e.match(/^-?[0-9]+$/)
          ? new r(vd, Qa(new Yu(e)))
          : On.throwArgumentError("invalid BigNumber string", "value", e);
      if (typeof e == "number")
        return (
          e % 1 && oi("underflow", "BigNumber.from", e),
          (e >= Cv || e <= -Cv) && oi("overflow", "BigNumber.from", e),
          r.from(String(e))
        );
      let t = e;
      if (typeof t == "bigint") return r.from(t.toString());
      if (qo(t)) return r.from(_r(t));
      if (t)
        if (t.toHexString) {
          let i = t.toHexString();
          if (typeof i == "string") return r.from(i);
        } else {
          let i = t._hex;
          if (
            (i == null && t.type === "BigNumber" && (i = t.hex),
            typeof i == "string" &&
              (Kr(i) || (i[0] === "-" && Kr(i.substring(1)))))
          )
            return r.from(i);
        }
      return On.throwArgumentError("invalid BigNumber value", "value", e);
    }
    static isBigNumber(e) {
      return !!(e && e._isBigNumber);
    }
  };
function Qa(r) {
  if (typeof r != "string") return Qa(r.toString(16));
  if (r[0] === "-")
    return (
      (r = r.substring(1)),
      r[0] === "-" && On.throwArgumentError("invalid hex", "value", r),
      (r = Qa(r)),
      r === "0x00" ? r : "-" + r
    );
  if ((r.substring(0, 2) !== "0x" && (r = "0x" + r), r === "0x")) return "0x00";
  for (
    r.length % 2 && (r = "0x0" + r.substring(2));
    r.length > 4 && r.substring(0, 4) === "0x00";

  )
    r = "0x" + r.substring(4);
  return r;
}
function Mr(r) {
  return or.from(Qa(r));
}
function Be(r) {
  let e = or.from(r).toHexString();
  return e[0] === "-"
    ? new Yu("-" + e.substring(3), 16)
    : new Yu(e.substring(2), 16);
}
function oi(r, e, t) {
  let i = { fault: r, operation: e };
  return (
    t != null && (i.value = t), On.throwError(r, Mt.errors.NUMERIC_FAULT, i)
  );
}
function xR(r) {
  return new Yu(r, 36).toString(16);
}
var Er = new Mt(dw),
  Ja = {},
  pw = or.from(0),
  gw = or.from(-1);
function mw(r, e, t, i) {
  let n = { fault: e, operation: t };
  return (
    i !== void 0 && (n.value = i), Er.throwError(r, Mt.errors.NUMERIC_FAULT, n)
  );
}
var Wa = "0";
for (; Wa.length < 256; ) Wa += Wa;
function Vd(r) {
  if (typeof r != "number")
    try {
      r = or.from(r).toNumber();
    } catch {}
  return typeof r == "number" && r >= 0 && r <= 256 && !(r % 1)
    ? "1" + Wa.substring(0, r)
    : Er.throwArgumentError("invalid decimal size", "decimals", r);
}
function wd(r, e) {
  e == null && (e = 0);
  let t = Vd(e);
  r = or.from(r);
  let i = r.lt(pw);
  i && (r = r.mul(gw));
  let n = r.mod(t).toString();
  for (; n.length < t.length - 1; ) n = "0" + n;
  n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  let o = r.div(t).toString();
  return t.length === 1 ? (r = o) : (r = o + "." + n), i && (r = "-" + r), r;
}
function Cn(r, e) {
  e == null && (e = 0);
  let t = Vd(e);
  (typeof r != "string" || !r.match(/^-?[0-9.]+$/)) &&
    Er.throwArgumentError("invalid decimal value", "value", r);
  let i = r.substring(0, 1) === "-";
  i && (r = r.substring(1)),
    r === "." && Er.throwArgumentError("missing value", "value", r);
  let n = r.split(".");
  n.length > 2 && Er.throwArgumentError("too many decimal points", "value", r);
  let o = n[0],
    c = n[1];
  for (o || (o = "0"), c || (c = "0"); c[c.length - 1] === "0"; )
    c = c.substring(0, c.length - 1);
  for (
    c.length > t.length - 1 &&
      mw("fractional component exceeds decimals", "underflow", "parseFixed"),
      c === "" && (c = "0");
    c.length < t.length - 1;

  )
    c += "0";
  let l = or.from(o),
    p = or.from(c),
    g = l.mul(t).add(p);
  return i && (g = g.mul(gw)), g;
}
var Ya = class r {
    constructor(e, t, i, n) {
      e !== Ja &&
        Er.throwError(
          "cannot use FixedFormat constructor; use FixedFormat.from",
          Mt.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.signed = t),
        (this.width = i),
        (this.decimals = n),
        (this.name = (t ? "" : "u") + "fixed" + String(i) + "x" + String(n)),
        (this._multiplier = Vd(n)),
        Object.freeze(this);
    }
    static from(e) {
      if (e instanceof r) return e;
      typeof e == "number" && (e = `fixed128x${e}`);
      let t = !0,
        i = 128,
        n = 18;
      if (typeof e == "string") {
        if (e !== "fixed")
          if (e === "ufixed") t = !1;
          else {
            let o = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            o || Er.throwArgumentError("invalid fixed format", "format", e),
              (t = o[1] !== "u"),
              (i = parseInt(o[2])),
              (n = parseInt(o[3]));
          }
      } else if (e) {
        let o = (c, l, p) =>
          e[c] == null
            ? p
            : (typeof e[c] !== l &&
                Er.throwArgumentError(
                  "invalid fixed format (" + c + " not " + l + ")",
                  "format." + c,
                  e[c]
                ),
              e[c]);
        (t = o("signed", "boolean", t)),
          (i = o("width", "number", i)),
          (n = o("decimals", "number", n));
      }
      return (
        i % 8 &&
          Er.throwArgumentError(
            "invalid fixed format width (not byte aligned)",
            "format.width",
            i
          ),
        n > 80 &&
          Er.throwArgumentError(
            "invalid fixed format (decimals too large)",
            "format.decimals",
            n
          ),
        new r(Ja, t, i, n)
      );
    }
  },
  Qu = class r {
    constructor(e, t, i, n) {
      e !== Ja &&
        Er.throwError(
          "cannot use FixedNumber constructor; use FixedNumber.from",
          Mt.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.format = n),
        (this._hex = t),
        (this._value = i),
        (this._isFixedNumber = !0),
        Object.freeze(this);
    }
    _checkFormat(e) {
      this.format.name !== e.format.name &&
        Er.throwArgumentError(
          "incompatible format; use fixedNumber.toFormat",
          "other",
          e
        );
    }
    addUnsafe(e) {
      this._checkFormat(e);
      let t = Cn(this._value, this.format.decimals),
        i = Cn(e._value, e.format.decimals);
      return r.fromValue(t.add(i), this.format.decimals, this.format);
    }
    subUnsafe(e) {
      this._checkFormat(e);
      let t = Cn(this._value, this.format.decimals),
        i = Cn(e._value, e.format.decimals);
      return r.fromValue(t.sub(i), this.format.decimals, this.format);
    }
    mulUnsafe(e) {
      this._checkFormat(e);
      let t = Cn(this._value, this.format.decimals),
        i = Cn(e._value, e.format.decimals);
      return r.fromValue(
        t.mul(i).div(this.format._multiplier),
        this.format.decimals,
        this.format
      );
    }
    divUnsafe(e) {
      this._checkFormat(e);
      let t = Cn(this._value, this.format.decimals),
        i = Cn(e._value, e.format.decimals);
      return r.fromValue(
        t.mul(this.format._multiplier).div(i),
        this.format.decimals,
        this.format
      );
    }
    floor() {
      let e = this.toString().split(".");
      e.length === 1 && e.push("0");
      let t = r.from(e[0], this.format),
        i = !e[1].match(/^(0*)$/);
      return (
        this.isNegative() && i && (t = t.subUnsafe(Pv.toFormat(t.format))), t
      );
    }
    ceiling() {
      let e = this.toString().split(".");
      e.length === 1 && e.push("0");
      let t = r.from(e[0], this.format),
        i = !e[1].match(/^(0*)$/);
      return (
        !this.isNegative() && i && (t = t.addUnsafe(Pv.toFormat(t.format))), t
      );
    }
    round(e) {
      e == null && (e = 0);
      let t = this.toString().split(".");
      if (
        (t.length === 1 && t.push("0"),
        (e < 0 || e > 80 || e % 1) &&
          Er.throwArgumentError("invalid decimal count", "decimals", e),
        t[1].length <= e)
      )
        return this;
      let i = r.from("1" + Wa.substring(0, e), this.format),
        n = IR.toFormat(this.format);
      return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
    }
    isZero() {
      return this._value === "0.0" || this._value === "0";
    }
    isNegative() {
      return this._value[0] === "-";
    }
    toString() {
      return this._value;
    }
    toHexString(e) {
      if (e == null) return this._hex;
      e % 8 && Er.throwArgumentError("invalid byte width", "width", e);
      let t = or
        .from(this._hex)
        .fromTwos(this.format.width)
        .toTwos(e)
        .toHexString();
      return Gi(t, e / 8);
    }
    toUnsafeFloat() {
      return parseFloat(this.toString());
    }
    toFormat(e) {
      return r.fromString(this._value, e);
    }
    static fromValue(e, t, i) {
      return (
        i == null && t != null && !SR(t) && ((i = t), (t = null)),
        t == null && (t = 0),
        i == null && (i = "fixed"),
        r.fromString(wd(e, t), Ya.from(i))
      );
    }
    static fromString(e, t) {
      t == null && (t = "fixed");
      let i = Ya.from(t),
        n = Cn(e, i.decimals);
      !i.signed &&
        n.lt(pw) &&
        mw("unsigned value cannot be negative", "overflow", "value", e);
      let o = null;
      i.signed
        ? (o = n.toTwos(i.width).toHexString())
        : ((o = n.toHexString()), (o = Gi(o, i.width / 8)));
      let c = wd(n, i.decimals);
      return new r(Ja, o, c, i);
    }
    static fromBytes(e, t) {
      t == null && (t = "fixed");
      let i = Ya.from(t);
      if (qt(e).length > i.width / 8) throw new Error("overflow");
      let n = or.from(e);
      i.signed && (n = n.fromTwos(i.width));
      let o = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
        c = wd(n, i.decimals);
      return new r(Ja, o, c, i);
    }
    static from(e, t) {
      if (typeof e == "string") return r.fromString(e, t);
      if (qo(e)) return r.fromBytes(e, t);
      try {
        return r.fromValue(e, 0, t);
      } catch (i) {
        if (i.code !== Mt.errors.INVALID_ARGUMENT) throw i;
      }
      return Er.throwArgumentError("invalid FixedNumber value", "value", e);
    }
    static isFixedNumber(e) {
      return !!(e && e._isFixedNumber);
    }
  },
  Pv = Qu.from(1),
  IR = Qu.from("0.5"),
  DR = "strings/5.7.0",
  yw = new Mt(DR),
  Xu;
(function (r) {
  (r.current = ""),
    (r.NFC = "NFC"),
    (r.NFD = "NFD"),
    (r.NFKC = "NFKC"),
    (r.NFKD = "NFKD");
})(Xu || (Xu = {}));
var Mo;
(function (r) {
  (r.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
    (r.BAD_PREFIX = "bad codepoint prefix"),
    (r.OVERRUN = "string overrun"),
    (r.MISSING_CONTINUE = "missing continuation byte"),
    (r.OUT_OF_RANGE = "out of UTF-8 range"),
    (r.UTF16_SURROGATE = "UTF-16 surrogate"),
    (r.OVERLONG = "overlong representation");
})(Mo || (Mo = {}));
function RR(r, e, t, i, n) {
  return yw.throwArgumentError(
    `invalid codepoint at offset ${e}; ${r}`,
    "bytes",
    t
  );
}
function vw(r, e, t, i, n) {
  if (r === Mo.BAD_PREFIX || r === Mo.UNEXPECTED_CONTINUE) {
    let o = 0;
    for (let c = e + 1; c < t.length && t[c] >> 6 === 2; c++) o++;
    return o;
  }
  return r === Mo.OVERRUN ? t.length - e - 1 : 0;
}
function CR(r, e, t, i, n) {
  return r === Mo.OVERLONG ? (i.push(n), 0) : (i.push(65533), vw(r, e, t));
}
Object.freeze({ error: RR, ignore: vw, replace: CR });
function bd(r, e = Xu.current) {
  e != Xu.current && (yw.checkNormalize(), (r = r.normalize(e)));
  let t = [];
  for (let i = 0; i < r.length; i++) {
    let n = r.charCodeAt(i);
    if (n < 128) t.push(n);
    else if (n < 2048) t.push((n >> 6) | 192), t.push((n & 63) | 128);
    else if ((n & 64512) == 55296) {
      i++;
      let o = r.charCodeAt(i);
      if (i >= r.length || (o & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      let c = 65536 + ((n & 1023) << 10) + (o & 1023);
      t.push((c >> 18) | 240),
        t.push(((c >> 12) & 63) | 128),
        t.push(((c >> 6) & 63) | 128),
        t.push((c & 63) | 128);
    } else
      t.push((n >> 12) | 224),
        t.push(((n >> 6) & 63) | 128),
        t.push((n & 63) | 128);
  }
  return qt(t);
}
function OR(r) {
  if (r.length % 4 !== 0) throw new Error("bad data");
  let e = [];
  for (let t = 0; t < r.length; t += 4)
    e.push(parseInt(r.substring(t, t + 4), 16));
  return e;
}
function _d(r, e) {
  e ||
    (e = function (n) {
      return [parseInt(n, 16)];
    });
  let t = 0,
    i = {};
  return (
    r.split(",").forEach((n) => {
      let o = n.split(":");
      (t += parseInt(o[0], 16)), (i[t] = e(o[1]));
    }),
    i
  );
}
function Mv(r) {
  let e = 0;
  return r.split(",").map((t) => {
    let i = t.split("-");
    i.length === 1 ? (i[1] = "0") : i[1] === "" && (i[1] = "1");
    let n = e + parseInt(i[0], 16);
    return (e = parseInt(i[1], 16)), { l: n, h: e };
  });
}
Mv(
  "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
),
  "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
    .split(",")
    .map((r) => parseInt(r, 16)),
  _d(
    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
  ),
  _d(
    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
  ),
  _d(
    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
    OR
  ),
  Mv(
    "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
  );
var ww = "hash/5.7.0";
function PR(r) {
  r = atob(r);
  let e = [];
  for (let t = 0; t < r.length; t++) e.push(r.charCodeAt(t));
  return qt(e);
}
function bw(r, e) {
  e == null && (e = 1);
  let t = [],
    i = t.forEach,
    n = function (o, c) {
      i.call(o, function (l) {
        c > 0 && Array.isArray(l) ? n(l, c - 1) : t.push(l);
      });
    };
  return n(r, e), t;
}
function MR(r) {
  let e = {};
  for (let t = 0; t < r.length; t++) {
    let i = r[t];
    e[i[0]] = i[1];
  }
  return e;
}
function NR(r) {
  let e = 0;
  function t() {
    return (r[e++] << 8) | r[e++];
  }
  let i = t(),
    n = 1,
    o = [0, 1];
  for (let W = 1; W < i; W++) o.push((n += t()));
  let c = t(),
    l = e;
  e += c;
  let p = 0,
    g = 0;
  function y() {
    return p == 0 && ((g = (g << 8) | r[e++]), (p = 8)), (g >> --p) & 1;
  }
  let v = 31,
    A = Math.pow(2, v),
    E = A >>> 1,
    P = E >> 1,
    T = A - 1,
    L = 0;
  for (let W = 0; W < v; W++) L = (L << 1) | y();
  let H = [],
    Q = 0,
    J = A;
  for (;;) {
    let W = Math.floor(((L - Q + 1) * n - 1) / J),
      Z = 0,
      U = i;
    for (; U - Z > 1; ) {
      let fe = (Z + U) >>> 1;
      W < o[fe] ? (U = fe) : (Z = fe);
    }
    if (Z == 0) break;
    H.push(Z);
    let B = Q + Math.floor((J * o[Z]) / n),
      ae = Q + Math.floor((J * o[Z + 1]) / n) - 1;
    for (; !((B ^ ae) & E); )
      (L = ((L << 1) & T) | y()),
        (B = (B << 1) & T),
        (ae = ((ae << 1) & T) | 1);
    for (; B & ~ae & P; )
      (L = (L & E) | ((L << 1) & (T >>> 1)) | y()),
        (B = (B << 1) ^ E),
        (ae = ((ae ^ E) << 1) | E | 1);
    (Q = B), (J = 1 + ae - B);
  }
  let G = i - 4;
  return H.map((W) => {
    switch (W - G) {
      case 3:
        return G + 65792 + ((r[l++] << 16) | (r[l++] << 8) | r[l++]);
      case 2:
        return G + 256 + ((r[l++] << 8) | r[l++]);
      case 1:
        return G + r[l++];
      default:
        return W - 1;
    }
  });
}
function TR(r) {
  let e = 0;
  return () => r[e++];
}
function FR(r) {
  return TR(NR(r));
}
function LR(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function BR(r, e) {
  let t = Array(r);
  for (let i = 0; i < r; i++) t[i] = 1 + e();
  return t;
}
function Nv(r, e) {
  let t = Array(r);
  for (let i = 0, n = -1; i < r; i++) t[i] = n += 1 + e();
  return t;
}
function UR(r, e) {
  let t = Array(r);
  for (let i = 0, n = 0; i < r; i++) t[i] = n += LR(e());
  return t;
}
function Zu(r, e) {
  let t = Nv(r(), r),
    i = r(),
    n = Nv(i, r),
    o = BR(i, r);
  for (let c = 0; c < i; c++) for (let l = 0; l < o[c]; l++) t.push(n[c] + l);
  return e ? t.map((c) => e[c]) : t;
}
function qR(r) {
  let e = [];
  for (;;) {
    let t = r();
    if (t == 0) break;
    e.push(zR(t, r));
  }
  for (;;) {
    let t = r() - 1;
    if (t < 0) break;
    e.push(kR(t, r));
  }
  return MR(bw(e));
}
function jR(r) {
  let e = [];
  for (;;) {
    let t = r();
    if (t == 0) break;
    e.push(t);
  }
  return e;
}
function _w(r, e, t) {
  let i = Array(r)
    .fill(void 0)
    .map(() => []);
  for (let n = 0; n < e; n++) UR(r, t).forEach((o, c) => i[c].push(o));
  return i;
}
function zR(r, e) {
  let t = 1 + e(),
    i = e(),
    n = jR(e),
    o = _w(n.length, 1 + r, e);
  return bw(
    o.map((c, l) => {
      let p = c[0],
        g = c.slice(1);
      return Array(n[l])
        .fill(void 0)
        .map((y, v) => {
          let A = v * i;
          return [p + v * t, g.map((E) => E + A)];
        });
    })
  );
}
function kR(r, e) {
  let t = 1 + e();
  return _w(t, 1 + r, e).map((i) => [i[0], i.slice(1)]);
}
function HR(r) {
  let e = Zu(r).sort((i, n) => i - n);
  return t();
  function t() {
    let i = [];
    for (;;) {
      let g = Zu(r, e);
      if (g.length == 0) break;
      i.push({ set: new Set(g), node: t() });
    }
    i.sort((g, y) => y.set.size - g.set.size);
    let n = r(),
      o = n % 3;
    n = (n / 3) | 0;
    let c = !!(n & 1);
    n >>= 1;
    let l = n == 1,
      p = n == 2;
    return { branches: i, valid: o, fe0f: c, save: l, check: p };
  }
}
function KR() {
  return FR(
    PR(
      "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
    )
  );
}
var ku = KR();
new Set(Zu(ku)), new Set(Zu(ku)), qR(ku), HR(ku), new Mt(ww);
var VR = new Uint8Array(32);
VR.fill(0);
var GR = `Ethereum Signed Message:
`;
function Ew(r) {
  return (
    typeof r == "string" && (r = bd(r)),
    Kd(vR([bd(GR), bd(String(r.length)), r]))
  );
}
var $R = "rlp/5.7.0";
new Mt($R);
var JR = "address/5.7.0",
  $a = new Mt(JR);
function Tv(r) {
  Kr(r, 20) || $a.throwArgumentError("invalid address", "address", r),
    (r = r.toLowerCase());
  let e = r.substring(2).split(""),
    t = new Uint8Array(40);
  for (let n = 0; n < 40; n++) t[n] = e[n].charCodeAt(0);
  let i = qt(Kd(t));
  for (let n = 0; n < 40; n += 2)
    i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()),
      (i[n >> 1] & 15) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
  return "0x" + e.join("");
}
var WR = 9007199254740991;
function YR(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
var Gd = {};
for (let r = 0; r < 10; r++) Gd[String(r)] = String(r);
for (let r = 0; r < 26; r++) Gd[String.fromCharCode(65 + r)] = String(10 + r);
var Fv = Math.floor(YR(WR));
function QR(r) {
  (r = r.toUpperCase()), (r = r.substring(4) + r.substring(0, 2) + "00");
  let e = r
    .split("")
    .map((i) => Gd[i])
    .join("");
  for (; e.length >= Fv; ) {
    let i = e.substring(0, Fv);
    e = (parseInt(i, 10) % 97) + e.substring(i.length);
  }
  let t = String(98 - (parseInt(e, 10) % 97));
  for (; t.length < 2; ) t = "0" + t;
  return t;
}
function XR(r) {
  let e = null;
  if (
    (typeof r != "string" &&
      $a.throwArgumentError("invalid address", "address", r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    r.substring(0, 2) !== "0x" && (r = "0x" + r),
      (e = Tv(r)),
      r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        e !== r &&
        $a.throwArgumentError("bad address checksum", "address", r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      r.substring(2, 4) !== QR(r) &&
        $a.throwArgumentError("bad icap checksum", "address", r),
        e = xR(r.substring(4));
      e.length < 40;

    )
      e = "0" + e;
    e = Tv("0x" + e);
  } else $a.throwArgumentError("invalid address", "address", r);
  return e;
}
var ZR = "properties/5.7.0";
new Mt(ZR);
function Ka(r, e, t) {
  Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
}
new Mt(ww);
var eC = new Uint8Array(32);
eC.fill(0), or.from(-1);
var tC = or.from(0),
  rC = or.from(1);
or.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
  Gi(rC.toHexString(), 32),
  Gi(tC.toHexString(), 32);
var zi = {},
  Ue = {},
  rc = Aw;
function Aw(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
Aw.equal = function (r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Md = { exports: {} };
typeof Object.create == "function"
  ? (Md.exports = function (r, e) {
      e &&
        ((r.super_ = e),
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (Md.exports = function (r, e) {
      if (e) {
        r.super_ = e;
        var t = function () {};
        (t.prototype = e.prototype),
          (r.prototype = new t()),
          (r.prototype.constructor = r);
      }
    });
var iC = rc,
  nC = Md.exports;
Ue.inherits = nC;
function sC(r, e) {
  return (r.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= r.length
    ? !1
    : (r.charCodeAt(e + 1) & 64512) === 56320;
}
function oC(r, e) {
  if (Array.isArray(r)) return r.slice();
  if (!r) return [];
  var t = [];
  if (typeof r == "string")
    if (e) {
      if (e === "hex")
        for (
          r = r.replace(/[^a-z0-9]+/gi, ""),
            r.length % 2 !== 0 && (r = "0" + r),
            n = 0;
          n < r.length;
          n += 2
        )
          t.push(parseInt(r[n] + r[n + 1], 16));
    } else
      for (var i = 0, n = 0; n < r.length; n++) {
        var o = r.charCodeAt(n);
        o < 128
          ? (t[i++] = o)
          : o < 2048
          ? ((t[i++] = (o >> 6) | 192), (t[i++] = (o & 63) | 128))
          : sC(r, n)
          ? ((o = 65536 + ((o & 1023) << 10) + (r.charCodeAt(++n) & 1023)),
            (t[i++] = (o >> 18) | 240),
            (t[i++] = ((o >> 12) & 63) | 128),
            (t[i++] = ((o >> 6) & 63) | 128),
            (t[i++] = (o & 63) | 128))
          : ((t[i++] = (o >> 12) | 224),
            (t[i++] = ((o >> 6) & 63) | 128),
            (t[i++] = (o & 63) | 128));
      }
  else for (n = 0; n < r.length; n++) t[n] = r[n] | 0;
  return t;
}
Ue.toArray = oC;
function aC(r) {
  for (var e = "", t = 0; t < r.length; t++) e += xw(r[t].toString(16));
  return e;
}
Ue.toHex = aC;
function Sw(r) {
  var e =
    (r >>> 24) |
    ((r >>> 8) & 65280) |
    ((r << 8) & 16711680) |
    ((r & 255) << 24);
  return e >>> 0;
}
Ue.htonl = Sw;
function cC(r, e) {
  for (var t = "", i = 0; i < r.length; i++) {
    var n = r[i];
    e === "little" && (n = Sw(n)), (t += Iw(n.toString(16)));
  }
  return t;
}
Ue.toHex32 = cC;
function xw(r) {
  return r.length === 1 ? "0" + r : r;
}
Ue.zero2 = xw;
function Iw(r) {
  return r.length === 7
    ? "0" + r
    : r.length === 6
    ? "00" + r
    : r.length === 5
    ? "000" + r
    : r.length === 4
    ? "0000" + r
    : r.length === 3
    ? "00000" + r
    : r.length === 2
    ? "000000" + r
    : r.length === 1
    ? "0000000" + r
    : r;
}
Ue.zero8 = Iw;
function uC(r, e, t, i) {
  var n = t - e;
  iC(n % 4 === 0);
  for (var o = new Array(n / 4), c = 0, l = e; c < o.length; c++, l += 4) {
    var p;
    i === "big"
      ? (p = (r[l] << 24) | (r[l + 1] << 16) | (r[l + 2] << 8) | r[l + 3])
      : (p = (r[l + 3] << 24) | (r[l + 2] << 16) | (r[l + 1] << 8) | r[l]),
      (o[c] = p >>> 0);
  }
  return o;
}
Ue.join32 = uC;
function hC(r, e) {
  for (
    var t = new Array(r.length * 4), i = 0, n = 0;
    i < r.length;
    i++, n += 4
  ) {
    var o = r[i];
    e === "big"
      ? ((t[n] = o >>> 24),
        (t[n + 1] = (o >>> 16) & 255),
        (t[n + 2] = (o >>> 8) & 255),
        (t[n + 3] = o & 255))
      : ((t[n + 3] = o >>> 24),
        (t[n + 2] = (o >>> 16) & 255),
        (t[n + 1] = (o >>> 8) & 255),
        (t[n] = o & 255));
  }
  return t;
}
Ue.split32 = hC;
function lC(r, e) {
  return (r >>> e) | (r << (32 - e));
}
Ue.rotr32 = lC;
function fC(r, e) {
  return (r << e) | (r >>> (32 - e));
}
Ue.rotl32 = fC;
function dC(r, e) {
  return (r + e) >>> 0;
}
Ue.sum32 = dC;
function pC(r, e, t) {
  return (r + e + t) >>> 0;
}
Ue.sum32_3 = pC;
function gC(r, e, t, i) {
  return (r + e + t + i) >>> 0;
}
Ue.sum32_4 = gC;
function mC(r, e, t, i, n) {
  return (r + e + t + i + n) >>> 0;
}
Ue.sum32_5 = mC;
function yC(r, e, t, i) {
  var n = r[e],
    o = r[e + 1],
    c = (i + o) >>> 0,
    l = (c < i ? 1 : 0) + t + n;
  (r[e] = l >>> 0), (r[e + 1] = c);
}
Ue.sum64 = yC;
function vC(r, e, t, i) {
  var n = (e + i) >>> 0,
    o = (n < e ? 1 : 0) + r + t;
  return o >>> 0;
}
Ue.sum64_hi = vC;
function wC(r, e, t, i) {
  var n = e + i;
  return n >>> 0;
}
Ue.sum64_lo = wC;
function bC(r, e, t, i, n, o, c, l) {
  var p = 0,
    g = e;
  (g = (g + i) >>> 0),
    (p += g < e ? 1 : 0),
    (g = (g + o) >>> 0),
    (p += g < o ? 1 : 0),
    (g = (g + l) >>> 0),
    (p += g < l ? 1 : 0);
  var y = r + t + n + c + p;
  return y >>> 0;
}
Ue.sum64_4_hi = bC;
function _C(r, e, t, i, n, o, c, l) {
  var p = e + i + o + l;
  return p >>> 0;
}
Ue.sum64_4_lo = _C;
function EC(r, e, t, i, n, o, c, l, p, g) {
  var y = 0,
    v = e;
  (v = (v + i) >>> 0),
    (y += v < e ? 1 : 0),
    (v = (v + o) >>> 0),
    (y += v < o ? 1 : 0),
    (v = (v + l) >>> 0),
    (y += v < l ? 1 : 0),
    (v = (v + g) >>> 0),
    (y += v < g ? 1 : 0);
  var A = r + t + n + c + p + y;
  return A >>> 0;
}
Ue.sum64_5_hi = EC;
function AC(r, e, t, i, n, o, c, l, p, g) {
  var y = e + i + o + l + g;
  return y >>> 0;
}
Ue.sum64_5_lo = AC;
function SC(r, e, t) {
  var i = (e << (32 - t)) | (r >>> t);
  return i >>> 0;
}
Ue.rotr64_hi = SC;
function xC(r, e, t) {
  var i = (r << (32 - t)) | (e >>> t);
  return i >>> 0;
}
Ue.rotr64_lo = xC;
function IC(r, e, t) {
  return r >>> t;
}
Ue.shr64_hi = IC;
function DC(r, e, t) {
  var i = (r << (32 - t)) | (e >>> t);
  return i >>> 0;
}
Ue.shr64_lo = DC;
var jo = {},
  Lv = Ue,
  RC = rc;
function Hu() {
  (this.pending = null),
    (this.pendingTotal = 0),
    (this.blockSize = this.constructor.blockSize),
    (this.outSize = this.constructor.outSize),
    (this.hmacStrength = this.constructor.hmacStrength),
    (this.padLength = this.constructor.padLength / 8),
    (this.endian = "big"),
    (this._delta8 = this.blockSize / 8),
    (this._delta32 = this.blockSize / 32);
}
(jo.BlockHash = Hu),
  (Hu.prototype.update = function (r, e) {
    if (
      ((r = Lv.toArray(r, e)),
      this.pending
        ? (this.pending = this.pending.concat(r))
        : (this.pending = r),
      (this.pendingTotal += r.length),
      this.pending.length >= this._delta8)
    ) {
      r = this.pending;
      var t = r.length % this._delta8;
      (this.pending = r.slice(r.length - t, r.length)),
        this.pending.length === 0 && (this.pending = null),
        (r = Lv.join32(r, 0, r.length - t, this.endian));
      for (var i = 0; i < r.length; i += this._delta32)
        this._update(r, i, i + this._delta32);
    }
    return this;
  }),
  (Hu.prototype.digest = function (r) {
    return this.update(this._pad()), RC(this.pending === null), this._digest(r);
  }),
  (Hu.prototype._pad = function () {
    var r = this.pendingTotal,
      e = this._delta8,
      t = e - ((r + this.padLength) % e),
      i = new Array(t + this.padLength);
    i[0] = 128;
    for (var n = 1; n < t; n++) i[n] = 0;
    if (((r <<= 3), this.endian === "big")) {
      for (var o = 8; o < this.padLength; o++) i[n++] = 0;
      (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = (r >>> 24) & 255),
        (i[n++] = (r >>> 16) & 255),
        (i[n++] = (r >>> 8) & 255),
        (i[n++] = r & 255);
    } else
      for (
        i[n++] = r & 255,
          i[n++] = (r >>> 8) & 255,
          i[n++] = (r >>> 16) & 255,
          i[n++] = (r >>> 24) & 255,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          o = 8;
        o < this.padLength;
        o++
      )
        i[n++] = 0;
    return i;
  });
var Oo = {},
  Qi = {},
  CC = Ue,
  $i = CC.rotr32;
function OC(r, e, t, i) {
  if (r === 0) return Dw(e, t, i);
  if (r === 1 || r === 3) return Cw(e, t, i);
  if (r === 2) return Rw(e, t, i);
}
Qi.ft_1 = OC;
function Dw(r, e, t) {
  return (r & e) ^ (~r & t);
}
Qi.ch32 = Dw;
function Rw(r, e, t) {
  return (r & e) ^ (r & t) ^ (e & t);
}
Qi.maj32 = Rw;
function Cw(r, e, t) {
  return r ^ e ^ t;
}
Qi.p32 = Cw;
function PC(r) {
  return $i(r, 2) ^ $i(r, 13) ^ $i(r, 22);
}
Qi.s0_256 = PC;
function MC(r) {
  return $i(r, 6) ^ $i(r, 11) ^ $i(r, 25);
}
Qi.s1_256 = MC;
function NC(r) {
  return $i(r, 7) ^ $i(r, 18) ^ (r >>> 3);
}
Qi.g0_256 = NC;
function TC(r) {
  return $i(r, 17) ^ $i(r, 19) ^ (r >>> 10);
}
Qi.g1_256 = TC;
var To = Ue,
  FC = jo,
  LC = Qi,
  Ed = To.rotl32,
  Va = To.sum32,
  BC = To.sum32_5,
  UC = LC.ft_1,
  Ow = FC.BlockHash,
  qC = [1518500249, 1859775393, 2400959708, 3395469782];
function Hi() {
  if (!(this instanceof Hi)) return new Hi();
  Ow.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.W = new Array(80));
}
To.inherits(Hi, Ow);
var jC = Hi;
(Hi.blockSize = 512),
  (Hi.outSize = 160),
  (Hi.hmacStrength = 80),
  (Hi.padLength = 64),
  (Hi.prototype._update = function (r, e) {
    for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
    for (; i < t.length; i++)
      t[i] = Ed(t[i - 3] ^ t[i - 8] ^ t[i - 14] ^ t[i - 16], 1);
    var n = this.h[0],
      o = this.h[1],
      c = this.h[2],
      l = this.h[3],
      p = this.h[4];
    for (i = 0; i < t.length; i++) {
      var g = ~~(i / 20),
        y = BC(Ed(n, 5), UC(g, o, c, l), p, t[i], qC[g]);
      (p = l), (l = c), (c = Ed(o, 30)), (o = n), (n = y);
    }
    (this.h[0] = Va(this.h[0], n)),
      (this.h[1] = Va(this.h[1], o)),
      (this.h[2] = Va(this.h[2], c)),
      (this.h[3] = Va(this.h[3], l)),
      (this.h[4] = Va(this.h[4], p));
  }),
  (Hi.prototype._digest = function (r) {
    return r === "hex" ? To.toHex32(this.h, "big") : To.split32(this.h, "big");
  });
var Fo = Ue,
  zC = jo,
  zo = Qi,
  kC = rc,
  bi = Fo.sum32,
  HC = Fo.sum32_4,
  KC = Fo.sum32_5,
  VC = zo.ch32,
  GC = zo.maj32,
  $C = zo.s0_256,
  JC = zo.s1_256,
  WC = zo.g0_256,
  YC = zo.g1_256,
  Pw = zC.BlockHash,
  QC = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
function Ki() {
  if (!(this instanceof Ki)) return new Ki();
  Pw.call(this),
    (this.h = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    (this.k = QC),
    (this.W = new Array(64));
}
Fo.inherits(Ki, Pw);
var Mw = Ki;
(Ki.blockSize = 512),
  (Ki.outSize = 256),
  (Ki.hmacStrength = 192),
  (Ki.padLength = 64),
  (Ki.prototype._update = function (r, e) {
    for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
    for (; i < t.length; i++)
      t[i] = HC(YC(t[i - 2]), t[i - 7], WC(t[i - 15]), t[i - 16]);
    var n = this.h[0],
      o = this.h[1],
      c = this.h[2],
      l = this.h[3],
      p = this.h[4],
      g = this.h[5],
      y = this.h[6],
      v = this.h[7];
    for (kC(this.k.length === t.length), i = 0; i < t.length; i++) {
      var A = KC(v, JC(p), VC(p, g, y), this.k[i], t[i]),
        E = bi($C(n), GC(n, o, c));
      (v = y),
        (y = g),
        (g = p),
        (p = bi(l, A)),
        (l = c),
        (c = o),
        (o = n),
        (n = bi(A, E));
    }
    (this.h[0] = bi(this.h[0], n)),
      (this.h[1] = bi(this.h[1], o)),
      (this.h[2] = bi(this.h[2], c)),
      (this.h[3] = bi(this.h[3], l)),
      (this.h[4] = bi(this.h[4], p)),
      (this.h[5] = bi(this.h[5], g)),
      (this.h[6] = bi(this.h[6], y)),
      (this.h[7] = bi(this.h[7], v));
  }),
  (Ki.prototype._digest = function (r) {
    return r === "hex" ? Fo.toHex32(this.h, "big") : Fo.split32(this.h, "big");
  });
var Nd = Ue,
  Nw = Mw;
function Pn() {
  if (!(this instanceof Pn)) return new Pn();
  Nw.call(this),
    (this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ]);
}
Nd.inherits(Pn, Nw);
var XC = Pn;
(Pn.blockSize = 512),
  (Pn.outSize = 224),
  (Pn.hmacStrength = 192),
  (Pn.padLength = 64),
  (Pn.prototype._digest = function (r) {
    return r === "hex"
      ? Nd.toHex32(this.h.slice(0, 7), "big")
      : Nd.split32(this.h.slice(0, 7), "big");
  });
var Tr = Ue,
  ZC = jo,
  eO = rc,
  Ji = Tr.rotr64_hi,
  Wi = Tr.rotr64_lo,
  Tw = Tr.shr64_hi,
  Fw = Tr.shr64_lo,
  is = Tr.sum64,
  Ad = Tr.sum64_hi,
  Sd = Tr.sum64_lo,
  tO = Tr.sum64_4_hi,
  rO = Tr.sum64_4_lo,
  iO = Tr.sum64_5_hi,
  nO = Tr.sum64_5_lo,
  Lw = ZC.BlockHash,
  sO = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ];
function Ei() {
  if (!(this instanceof Ei)) return new Ei();
  Lw.call(this),
    (this.h = [
      1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
      2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
      528734635, 4215389547, 1541459225, 327033209,
    ]),
    (this.k = sO),
    (this.W = new Array(160));
}
Tr.inherits(Ei, Lw);
var Bw = Ei;
(Ei.blockSize = 1024),
  (Ei.outSize = 512),
  (Ei.hmacStrength = 192),
  (Ei.padLength = 128),
  (Ei.prototype._prepareBlock = function (r, e) {
    for (var t = this.W, i = 0; i < 32; i++) t[i] = r[e + i];
    for (; i < t.length; i += 2) {
      var n = mO(t[i - 4], t[i - 3]),
        o = yO(t[i - 4], t[i - 3]),
        c = t[i - 14],
        l = t[i - 13],
        p = pO(t[i - 30], t[i - 29]),
        g = gO(t[i - 30], t[i - 29]),
        y = t[i - 32],
        v = t[i - 31];
      (t[i] = tO(n, o, c, l, p, g, y, v)),
        (t[i + 1] = rO(n, o, c, l, p, g, y, v));
    }
  }),
  (Ei.prototype._update = function (r, e) {
    this._prepareBlock(r, e);
    var t = this.W,
      i = this.h[0],
      n = this.h[1],
      o = this.h[2],
      c = this.h[3],
      l = this.h[4],
      p = this.h[5],
      g = this.h[6],
      y = this.h[7],
      v = this.h[8],
      A = this.h[9],
      E = this.h[10],
      P = this.h[11],
      T = this.h[12],
      L = this.h[13],
      H = this.h[14],
      Q = this.h[15];
    eO(this.k.length === t.length);
    for (var J = 0; J < t.length; J += 2) {
      var G = H,
        W = Q,
        Z = fO(v, A),
        U = dO(v, A),
        B = oO(v, A, E, P, T),
        ae = aO(v, A, E, P, T, L),
        fe = this.k[J],
        M = this.k[J + 1],
        q = t[J],
        h = t[J + 1],
        m = iO(G, W, Z, U, B, ae, fe, M, q, h),
        b = nO(G, W, Z, U, B, ae, fe, M, q, h);
      (G = hO(i, n)),
        (W = lO(i, n)),
        (Z = cO(i, n, o, c, l)),
        (U = uO(i, n, o, c, l, p));
      var S = Ad(G, W, Z, U),
        R = Sd(G, W, Z, U);
      (H = T),
        (Q = L),
        (T = E),
        (L = P),
        (E = v),
        (P = A),
        (v = Ad(g, y, m, b)),
        (A = Sd(y, y, m, b)),
        (g = l),
        (y = p),
        (l = o),
        (p = c),
        (o = i),
        (c = n),
        (i = Ad(m, b, S, R)),
        (n = Sd(m, b, S, R));
    }
    is(this.h, 0, i, n),
      is(this.h, 2, o, c),
      is(this.h, 4, l, p),
      is(this.h, 6, g, y),
      is(this.h, 8, v, A),
      is(this.h, 10, E, P),
      is(this.h, 12, T, L),
      is(this.h, 14, H, Q);
  }),
  (Ei.prototype._digest = function (r) {
    return r === "hex" ? Tr.toHex32(this.h, "big") : Tr.split32(this.h, "big");
  });
function oO(r, e, t, i, n) {
  var o = (r & t) ^ (~r & n);
  return o < 0 && (o += 4294967296), o;
}
function aO(r, e, t, i, n, o) {
  var c = (e & i) ^ (~e & o);
  return c < 0 && (c += 4294967296), c;
}
function cO(r, e, t, i, n) {
  var o = (r & t) ^ (r & n) ^ (t & n);
  return o < 0 && (o += 4294967296), o;
}
function uO(r, e, t, i, n, o) {
  var c = (e & i) ^ (e & o) ^ (i & o);
  return c < 0 && (c += 4294967296), c;
}
function hO(r, e) {
  var t = Ji(r, e, 28),
    i = Ji(e, r, 2),
    n = Ji(e, r, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function lO(r, e) {
  var t = Wi(r, e, 28),
    i = Wi(e, r, 2),
    n = Wi(e, r, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function fO(r, e) {
  var t = Ji(r, e, 14),
    i = Ji(r, e, 18),
    n = Ji(e, r, 9),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function dO(r, e) {
  var t = Wi(r, e, 14),
    i = Wi(r, e, 18),
    n = Wi(e, r, 9),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function pO(r, e) {
  var t = Ji(r, e, 1),
    i = Ji(r, e, 8),
    n = Tw(r, e, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function gO(r, e) {
  var t = Wi(r, e, 1),
    i = Wi(r, e, 8),
    n = Fw(r, e, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function mO(r, e) {
  var t = Ji(r, e, 19),
    i = Ji(e, r, 29),
    n = Tw(r, e, 6),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function yO(r, e) {
  var t = Wi(r, e, 19),
    i = Wi(e, r, 29),
    n = Fw(r, e, 6),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
var Td = Ue,
  Uw = Bw;
function Mn() {
  if (!(this instanceof Mn)) return new Mn();
  Uw.call(this),
    (this.h = [
      3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
      355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
      3675008525, 1694076839, 1203062813, 3204075428,
    ]);
}
Td.inherits(Mn, Uw);
var vO = Mn;
(Mn.blockSize = 1024),
  (Mn.outSize = 384),
  (Mn.hmacStrength = 192),
  (Mn.padLength = 128),
  (Mn.prototype._digest = function (r) {
    return r === "hex"
      ? Td.toHex32(this.h.slice(0, 12), "big")
      : Td.split32(this.h.slice(0, 12), "big");
  }),
  (Oo.sha1 = jC),
  (Oo.sha224 = XC),
  (Oo.sha256 = Mw),
  (Oo.sha384 = vO),
  (Oo.sha512 = Bw);
var qw = {},
  Ns = Ue,
  wO = jo,
  Ku = Ns.rotl32,
  Bv = Ns.sum32,
  Ga = Ns.sum32_3,
  Uv = Ns.sum32_4,
  jw = wO.BlockHash;
function ki() {
  if (!(this instanceof ki)) return new ki();
  jw.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.endian = "little");
}
Ns.inherits(ki, jw),
  (qw.ripemd160 = ki),
  (ki.blockSize = 512),
  (ki.outSize = 160),
  (ki.hmacStrength = 192),
  (ki.padLength = 64),
  (ki.prototype._update = function (r, e) {
    for (
      var t = this.h[0],
        i = this.h[1],
        n = this.h[2],
        o = this.h[3],
        c = this.h[4],
        l = t,
        p = i,
        g = n,
        y = o,
        v = c,
        A = 0;
      A < 80;
      A++
    ) {
      var E = Bv(Ku(Uv(t, qv(A, i, n, o), r[EO[A] + e], bO(A)), SO[A]), c);
      (t = c),
        (c = o),
        (o = Ku(n, 10)),
        (n = i),
        (i = E),
        (E = Bv(Ku(Uv(l, qv(79 - A, p, g, y), r[AO[A] + e], _O(A)), xO[A]), v)),
        (l = v),
        (v = y),
        (y = Ku(g, 10)),
        (g = p),
        (p = E);
    }
    (E = Ga(this.h[1], n, y)),
      (this.h[1] = Ga(this.h[2], o, v)),
      (this.h[2] = Ga(this.h[3], c, l)),
      (this.h[3] = Ga(this.h[4], t, p)),
      (this.h[4] = Ga(this.h[0], i, g)),
      (this.h[0] = E);
  }),
  (ki.prototype._digest = function (r) {
    return r === "hex"
      ? Ns.toHex32(this.h, "little")
      : Ns.split32(this.h, "little");
  });
function qv(r, e, t, i) {
  return r <= 15
    ? e ^ t ^ i
    : r <= 31
    ? (e & t) | (~e & i)
    : r <= 47
    ? (e | ~t) ^ i
    : r <= 63
    ? (e & i) | (t & ~i)
    : e ^ (t | ~i);
}
function bO(r) {
  return r <= 15
    ? 0
    : r <= 31
    ? 1518500249
    : r <= 47
    ? 1859775393
    : r <= 63
    ? 2400959708
    : 2840853838;
}
function _O(r) {
  return r <= 15
    ? 1352829926
    : r <= 31
    ? 1548603684
    : r <= 47
    ? 1836072691
    : r <= 63
    ? 2053994217
    : 0;
}
var EO = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ],
  AO = [
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ],
  SO = [
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ],
  xO = [
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ],
  IO = Ue,
  DO = rc;
function No(r, e, t) {
  if (!(this instanceof No)) return new No(r, e, t);
  (this.Hash = r),
    (this.blockSize = r.blockSize / 8),
    (this.outSize = r.outSize / 8),
    (this.inner = null),
    (this.outer = null),
    this._init(IO.toArray(e, t));
}
var RO = No;
(No.prototype._init = function (r) {
  r.length > this.blockSize && (r = new this.Hash().update(r).digest()),
    DO(r.length <= this.blockSize);
  for (var e = r.length; e < this.blockSize; e++) r.push(0);
  for (e = 0; e < r.length; e++) r[e] ^= 54;
  for (this.inner = new this.Hash().update(r), e = 0; e < r.length; e++)
    r[e] ^= 106;
  this.outer = new this.Hash().update(r);
}),
  (No.prototype.update = function (r, e) {
    return this.inner.update(r, e), this;
  }),
  (No.prototype.digest = function (r) {
    return this.outer.update(this.inner.digest()), this.outer.digest(r);
  }),
  (function (r) {
    var e = r;
    (e.utils = Ue),
      (e.common = jo),
      (e.sha = Oo),
      (e.ripemd = qw),
      (e.hmac = RO),
      (e.sha1 = e.sha.sha1),
      (e.sha256 = e.sha.sha256),
      (e.sha224 = e.sha.sha224),
      (e.sha384 = e.sha.sha384),
      (e.sha512 = e.sha.sha512),
      (e.ripemd160 = e.ripemd.ripemd160);
  })(zi);
function ko(r, e, t) {
  return (
    (t = {
      path: e,
      exports: {},
      require: function (i, n) {
        return CO(i, n ?? t.path);
      },
    }),
    r(t, t.exports),
    t.exports
  );
}
function CO() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var $d = zw;
function zw(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
zw.equal = function (r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Ai = ko(function (r, e) {
    var t = e;
    function i(c, l) {
      if (Array.isArray(c)) return c.slice();
      if (!c) return [];
      var p = [];
      if (typeof c != "string") {
        for (var g = 0; g < c.length; g++) p[g] = c[g] | 0;
        return p;
      }
      if (l === "hex") {
        (c = c.replace(/[^a-z0-9]+/gi, "")),
          c.length % 2 !== 0 && (c = "0" + c);
        for (var g = 0; g < c.length; g += 2)
          p.push(parseInt(c[g] + c[g + 1], 16));
      } else
        for (var g = 0; g < c.length; g++) {
          var y = c.charCodeAt(g),
            v = y >> 8,
            A = y & 255;
          v ? p.push(v, A) : p.push(A);
        }
      return p;
    }
    t.toArray = i;
    function n(c) {
      return c.length === 1 ? "0" + c : c;
    }
    t.zero2 = n;
    function o(c) {
      for (var l = "", p = 0; p < c.length; p++) l += n(c[p].toString(16));
      return l;
    }
    (t.toHex = o),
      (t.encode = function (c, l) {
        return l === "hex" ? o(c) : c;
      });
  }),
  Vr = ko(function (r, e) {
    var t = e;
    (t.assert = $d),
      (t.toArray = Ai.toArray),
      (t.zero2 = Ai.zero2),
      (t.toHex = Ai.toHex),
      (t.encode = Ai.encode);
    function i(p, g, y) {
      var v = new Array(Math.max(p.bitLength(), y) + 1);
      v.fill(0);
      for (var A = 1 << (g + 1), E = p.clone(), P = 0; P < v.length; P++) {
        var T,
          L = E.andln(A - 1);
        E.isOdd()
          ? (L > (A >> 1) - 1 ? (T = (A >> 1) - L) : (T = L), E.isubn(T))
          : (T = 0),
          (v[P] = T),
          E.iushrn(1);
      }
      return v;
    }
    t.getNAF = i;
    function n(p, g) {
      var y = [[], []];
      (p = p.clone()), (g = g.clone());
      for (var v = 0, A = 0, E; p.cmpn(-v) > 0 || g.cmpn(-A) > 0; ) {
        var P = (p.andln(3) + v) & 3,
          T = (g.andln(3) + A) & 3;
        P === 3 && (P = -1), T === 3 && (T = -1);
        var L;
        P & 1
          ? ((E = (p.andln(7) + v) & 7),
            (E === 3 || E === 5) && T === 2 ? (L = -P) : (L = P))
          : (L = 0),
          y[0].push(L);
        var H;
        T & 1
          ? ((E = (g.andln(7) + A) & 7),
            (E === 3 || E === 5) && P === 2 ? (H = -T) : (H = T))
          : (H = 0),
          y[1].push(H),
          2 * v === L + 1 && (v = 1 - v),
          2 * A === H + 1 && (A = 1 - A),
          p.iushrn(1),
          g.iushrn(1);
      }
      return y;
    }
    t.getJSF = n;
    function o(p, g, y) {
      var v = "_" + g;
      p.prototype[g] = function () {
        return this[v] !== void 0 ? this[v] : (this[v] = y.call(this));
      };
    }
    t.cachedProperty = o;
    function c(p) {
      return typeof p == "string" ? t.toArray(p, "hex") : p;
    }
    t.parseBytes = c;
    function l(p) {
      return new Re(p, "hex", "le");
    }
    t.intFromLE = l;
  }),
  Vu = Vr.getNAF,
  OO = Vr.getJSF,
  eh = Vr.assert;
function ns(r, e) {
  (this.type = r),
    (this.p = new Re(e.p, 16)),
    (this.red = e.prime ? Re.red(e.prime) : Re.mont(this.p)),
    (this.zero = new Re(0).toRed(this.red)),
    (this.one = new Re(1).toRed(this.red)),
    (this.two = new Re(2).toRed(this.red)),
    (this.n = e.n && new Re(e.n, 16)),
    (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var Bs = ns;
(ns.prototype.point = function () {
  throw new Error("Not implemented");
}),
  (ns.prototype.validate = function () {
    throw new Error("Not implemented");
  }),
  (ns.prototype._fixedNafMul = function (r, e) {
    eh(r.precomputed);
    var t = r._getDoubles(),
      i = Vu(e, 1, this._bitLength),
      n = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
    n /= 3;
    var o = [],
      c,
      l;
    for (c = 0; c < i.length; c += t.step) {
      l = 0;
      for (var p = c + t.step - 1; p >= c; p--) l = (l << 1) + i[p];
      o.push(l);
    }
    for (
      var g = this.jpoint(null, null, null),
        y = this.jpoint(null, null, null),
        v = n;
      v > 0;
      v--
    ) {
      for (c = 0; c < o.length; c++)
        (l = o[c]),
          l === v
            ? (y = y.mixedAdd(t.points[c]))
            : l === -v && (y = y.mixedAdd(t.points[c].neg()));
      g = g.add(y);
    }
    return g.toP();
  }),
  (ns.prototype._wnafMul = function (r, e) {
    var t = 4,
      i = r._getNAFPoints(t);
    t = i.wnd;
    for (
      var n = i.points,
        o = Vu(e, t, this._bitLength),
        c = this.jpoint(null, null, null),
        l = o.length - 1;
      l >= 0;
      l--
    ) {
      for (var p = 0; l >= 0 && o[l] === 0; l--) p++;
      if ((l >= 0 && p++, (c = c.dblp(p)), l < 0)) break;
      var g = o[l];
      eh(g !== 0),
        r.type === "affine"
          ? g > 0
            ? (c = c.mixedAdd(n[(g - 1) >> 1]))
            : (c = c.mixedAdd(n[(-g - 1) >> 1].neg()))
          : g > 0
          ? (c = c.add(n[(g - 1) >> 1]))
          : (c = c.add(n[(-g - 1) >> 1].neg()));
    }
    return r.type === "affine" ? c.toP() : c;
  }),
  (ns.prototype._wnafMulAdd = function (r, e, t, i, n) {
    var o = this._wnafT1,
      c = this._wnafT2,
      l = this._wnafT3,
      p = 0,
      g,
      y,
      v;
    for (g = 0; g < i; g++) {
      v = e[g];
      var A = v._getNAFPoints(r);
      (o[g] = A.wnd), (c[g] = A.points);
    }
    for (g = i - 1; g >= 1; g -= 2) {
      var E = g - 1,
        P = g;
      if (o[E] !== 1 || o[P] !== 1) {
        (l[E] = Vu(t[E], o[E], this._bitLength)),
          (l[P] = Vu(t[P], o[P], this._bitLength)),
          (p = Math.max(l[E].length, p)),
          (p = Math.max(l[P].length, p));
        continue;
      }
      var T = [e[E], null, null, e[P]];
      e[E].y.cmp(e[P].y) === 0
        ? ((T[1] = e[E].add(e[P])), (T[2] = e[E].toJ().mixedAdd(e[P].neg())))
        : e[E].y.cmp(e[P].y.redNeg()) === 0
        ? ((T[1] = e[E].toJ().mixedAdd(e[P])), (T[2] = e[E].add(e[P].neg())))
        : ((T[1] = e[E].toJ().mixedAdd(e[P])),
          (T[2] = e[E].toJ().mixedAdd(e[P].neg())));
      var L = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
        H = OO(t[E], t[P]);
      for (
        p = Math.max(H[0].length, p),
          l[E] = new Array(p),
          l[P] = new Array(p),
          y = 0;
        y < p;
        y++
      ) {
        var Q = H[0][y] | 0,
          J = H[1][y] | 0;
        (l[E][y] = L[(Q + 1) * 3 + (J + 1)]), (l[P][y] = 0), (c[E] = T);
      }
    }
    var G = this.jpoint(null, null, null),
      W = this._wnafT4;
    for (g = p; g >= 0; g--) {
      for (var Z = 0; g >= 0; ) {
        var U = !0;
        for (y = 0; y < i; y++) (W[y] = l[y][g] | 0), W[y] !== 0 && (U = !1);
        if (!U) break;
        Z++, g--;
      }
      if ((g >= 0 && Z++, (G = G.dblp(Z)), g < 0)) break;
      for (y = 0; y < i; y++) {
        var B = W[y];
        B !== 0 &&
          (B > 0
            ? (v = c[y][(B - 1) >> 1])
            : B < 0 && (v = c[y][(-B - 1) >> 1].neg()),
          v.type === "affine" ? (G = G.mixedAdd(v)) : (G = G.add(v)));
      }
    }
    for (g = 0; g < i; g++) c[g] = null;
    return n ? G : G.toP();
  });
function ai(r, e) {
  (this.curve = r), (this.type = e), (this.precomputed = null);
}
(ns.BasePoint = ai),
  (ai.prototype.eq = function () {
    throw new Error("Not implemented");
  }),
  (ai.prototype.validate = function () {
    return this.curve.validate(this);
  }),
  (ns.prototype.decodePoint = function (r, e) {
    r = Vr.toArray(r, e);
    var t = this.p.byteLength();
    if ((r[0] === 4 || r[0] === 6 || r[0] === 7) && r.length - 1 === 2 * t) {
      r[0] === 6
        ? eh(r[r.length - 1] % 2 === 0)
        : r[0] === 7 && eh(r[r.length - 1] % 2 === 1);
      var i = this.point(r.slice(1, 1 + t), r.slice(1 + t, 1 + 2 * t));
      return i;
    } else if ((r[0] === 2 || r[0] === 3) && r.length - 1 === t)
      return this.pointFromX(r.slice(1, 1 + t), r[0] === 3);
    throw new Error("Unknown point format");
  }),
  (ai.prototype.encodeCompressed = function (r) {
    return this.encode(r, !0);
  }),
  (ai.prototype._encode = function (r) {
    var e = this.curve.p.byteLength(),
      t = this.getX().toArray("be", e);
    return r
      ? [this.getY().isEven() ? 2 : 3].concat(t)
      : [4].concat(t, this.getY().toArray("be", e));
  }),
  (ai.prototype.encode = function (r, e) {
    return Vr.encode(this._encode(e), r);
  }),
  (ai.prototype.precompute = function (r) {
    if (this.precomputed) return this;
    var e = { doubles: null, naf: null, beta: null };
    return (
      (e.naf = this._getNAFPoints(8)),
      (e.doubles = this._getDoubles(4, r)),
      (e.beta = this._getBeta()),
      (this.precomputed = e),
      this
    );
  }),
  (ai.prototype._hasDoubles = function (r) {
    if (!this.precomputed) return !1;
    var e = this.precomputed.doubles;
    return e ? e.points.length >= Math.ceil((r.bitLength() + 1) / e.step) : !1;
  }),
  (ai.prototype._getDoubles = function (r, e) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    for (var t = [this], i = this, n = 0; n < e; n += r) {
      for (var o = 0; o < r; o++) i = i.dbl();
      t.push(i);
    }
    return { step: r, points: t };
  }),
  (ai.prototype._getNAFPoints = function (r) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (
      var e = [this], t = (1 << r) - 1, i = t === 1 ? null : this.dbl(), n = 1;
      n < t;
      n++
    )
      e[n] = e[n - 1].add(i);
    return { wnd: r, points: e };
  }),
  (ai.prototype._getBeta = function () {
    return null;
  }),
  (ai.prototype.dblp = function (r) {
    for (var e = this, t = 0; t < r; t++) e = e.dbl();
    return e;
  });
var Jd = ko(function (r) {
    typeof Object.create == "function"
      ? (r.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (r.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var i = function () {};
            (i.prototype = t.prototype),
              (e.prototype = new i()),
              (e.prototype.constructor = e);
          }
        });
  }),
  PO = Vr.assert;
function ui(r) {
  Bs.call(this, "short", r),
    (this.a = new Re(r.a, 16).toRed(this.red)),
    (this.b = new Re(r.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(r)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Jd(ui, Bs);
var MO = ui;
(ui.prototype._getEndomorphism = function (r) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var e, t;
    if (r.beta) e = new Re(r.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]), (e = e.toRed(this.red));
    }
    if (r.lambda) t = new Re(r.lambda, 16);
    else {
      var n = this._getEndoRoots(this.n);
      this.g.mul(n[0]).x.cmp(this.g.x.redMul(e)) === 0
        ? (t = n[0])
        : ((t = n[1]), PO(this.g.mul(t).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var o;
    return (
      r.basis
        ? (o = r.basis.map(function (c) {
            return { a: new Re(c.a, 16), b: new Re(c.b, 16) };
          }))
        : (o = this._getEndoBasis(t)),
      { beta: e, lambda: t, basis: o }
    );
  }
}),
  (ui.prototype._getEndoRoots = function (r) {
    var e = r === this.p ? this.red : Re.mont(r),
      t = new Re(2).toRed(e).redInvm(),
      i = t.redNeg(),
      n = new Re(3).toRed(e).redNeg().redSqrt().redMul(t),
      o = i.redAdd(n).fromRed(),
      c = i.redSub(n).fromRed();
    return [o, c];
  }),
  (ui.prototype._getEndoBasis = function (r) {
    for (
      var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
        t = r,
        i = this.n.clone(),
        n = new Re(1),
        o = new Re(0),
        c = new Re(0),
        l = new Re(1),
        p,
        g,
        y,
        v,
        A,
        E,
        P,
        T = 0,
        L,
        H;
      t.cmpn(0) !== 0;

    ) {
      var Q = i.div(t);
      (L = i.sub(Q.mul(t))), (H = c.sub(Q.mul(n)));
      var J = l.sub(Q.mul(o));
      if (!y && L.cmp(e) < 0) (p = P.neg()), (g = n), (y = L.neg()), (v = H);
      else if (y && ++T === 2) break;
      (P = L), (i = t), (t = L), (c = n), (n = H), (l = o), (o = J);
    }
    (A = L.neg()), (E = H);
    var G = y.sqr().add(v.sqr()),
      W = A.sqr().add(E.sqr());
    return (
      W.cmp(G) >= 0 && ((A = p), (E = g)),
      y.negative && ((y = y.neg()), (v = v.neg())),
      A.negative && ((A = A.neg()), (E = E.neg())),
      [
        { a: y, b: v },
        { a: A, b: E },
      ]
    );
  }),
  (ui.prototype._endoSplit = function (r) {
    var e = this.endo.basis,
      t = e[0],
      i = e[1],
      n = i.b.mul(r).divRound(this.n),
      o = t.b.neg().mul(r).divRound(this.n),
      c = n.mul(t.a),
      l = o.mul(i.a),
      p = n.mul(t.b),
      g = o.mul(i.b),
      y = r.sub(c).sub(l),
      v = p.add(g).neg();
    return { k1: y, k2: v };
  }),
  (ui.prototype.pointFromX = function (r, e) {
    (r = new Re(r, 16)), r.red || (r = r.toRed(this.red));
    var t = r.redSqr().redMul(r).redIAdd(r.redMul(this.a)).redIAdd(this.b),
      i = t.redSqrt();
    if (i.redSqr().redSub(t).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var n = i.fromRed().isOdd();
    return ((e && !n) || (!e && n)) && (i = i.redNeg()), this.point(r, i);
  }),
  (ui.prototype.validate = function (r) {
    if (r.inf) return !0;
    var e = r.x,
      t = r.y,
      i = this.a.redMul(e),
      n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
    return t.redSqr().redISub(n).cmpn(0) === 0;
  }),
  (ui.prototype._endoWnafMulAdd = function (r, e, t) {
    for (
      var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
      o < r.length;
      o++
    ) {
      var c = this._endoSplit(e[o]),
        l = r[o],
        p = l._getBeta();
      c.k1.negative && (c.k1.ineg(), (l = l.neg(!0))),
        c.k2.negative && (c.k2.ineg(), (p = p.neg(!0))),
        (i[o * 2] = l),
        (i[o * 2 + 1] = p),
        (n[o * 2] = c.k1),
        (n[o * 2 + 1] = c.k2);
    }
    for (var g = this._wnafMulAdd(1, i, n, o * 2, t), y = 0; y < o * 2; y++)
      (i[y] = null), (n[y] = null);
    return g;
  });
function Xt(r, e, t, i) {
  Bs.BasePoint.call(this, r, "affine"),
    e === null && t === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new Re(e, 16)),
        (this.y = new Re(t, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Jd(Xt, Bs.BasePoint),
  (ui.prototype.point = function (r, e, t) {
    return new Xt(this, r, e, t);
  }),
  (ui.prototype.pointFromJSON = function (r, e) {
    return Xt.fromJSON(this, r, e);
  }),
  (Xt.prototype._getBeta = function () {
    if (this.curve.endo) {
      var r = this.precomputed;
      if (r && r.beta) return r.beta;
      var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (r) {
        var t = this.curve,
          i = function (n) {
            return t.point(n.x.redMul(t.endo.beta), n.y);
          };
        (r.beta = e),
          (e.precomputed = {
            beta: null,
            naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(i),
            },
          });
      }
      return e;
    }
  }),
  (Xt.prototype.toJSON = function () {
    return this.precomputed
      ? [
          this.x,
          this.y,
          this.precomputed && {
            doubles: this.precomputed.doubles && {
              step: this.precomputed.doubles.step,
              points: this.precomputed.doubles.points.slice(1),
            },
            naf: this.precomputed.naf && {
              wnd: this.precomputed.naf.wnd,
              points: this.precomputed.naf.points.slice(1),
            },
          },
        ]
      : [this.x, this.y];
  }),
  (Xt.fromJSON = function (r, e, t) {
    typeof e == "string" && (e = JSON.parse(e));
    var i = r.point(e[0], e[1], t);
    if (!e[2]) return i;
    function n(c) {
      return r.point(c[0], c[1], t);
    }
    var o = e[2];
    return (
      (i.precomputed = {
        beta: null,
        doubles: o.doubles && {
          step: o.doubles.step,
          points: [i].concat(o.doubles.points.map(n)),
        },
        naf: o.naf && {
          wnd: o.naf.wnd,
          points: [i].concat(o.naf.points.map(n)),
        },
      }),
      i
    );
  }),
  (Xt.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC Point Infinity>"
      : "<EC Point x: " +
          this.x.fromRed().toString(16, 2) +
          " y: " +
          this.y.fromRed().toString(16, 2) +
          ">";
  }),
  (Xt.prototype.isInfinity = function () {
    return this.inf;
  }),
  (Xt.prototype.add = function (r) {
    if (this.inf) return r;
    if (r.inf) return this;
    if (this.eq(r)) return this.dbl();
    if (this.neg().eq(r)) return this.curve.point(null, null);
    if (this.x.cmp(r.x) === 0) return this.curve.point(null, null);
    var e = this.y.redSub(r.y);
    e.cmpn(0) !== 0 && (e = e.redMul(this.x.redSub(r.x).redInvm()));
    var t = e.redSqr().redISub(this.x).redISub(r.x),
      i = e.redMul(this.x.redSub(t)).redISub(this.y);
    return this.curve.point(t, i);
  }),
  (Xt.prototype.dbl = function () {
    if (this.inf) return this;
    var r = this.y.redAdd(this.y);
    if (r.cmpn(0) === 0) return this.curve.point(null, null);
    var e = this.curve.a,
      t = this.x.redSqr(),
      i = r.redInvm(),
      n = t.redAdd(t).redIAdd(t).redIAdd(e).redMul(i),
      o = n.redSqr().redISub(this.x.redAdd(this.x)),
      c = n.redMul(this.x.redSub(o)).redISub(this.y);
    return this.curve.point(o, c);
  }),
  (Xt.prototype.getX = function () {
    return this.x.fromRed();
  }),
  (Xt.prototype.getY = function () {
    return this.y.fromRed();
  }),
  (Xt.prototype.mul = function (r) {
    return (
      (r = new Re(r, 16)),
      this.isInfinity()
        ? this
        : this._hasDoubles(r)
        ? this.curve._fixedNafMul(this, r)
        : this.curve.endo
        ? this.curve._endoWnafMulAdd([this], [r])
        : this.curve._wnafMul(this, r)
    );
  }),
  (Xt.prototype.mulAdd = function (r, e, t) {
    var i = [this, e],
      n = [r, t];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, n)
      : this.curve._wnafMulAdd(1, i, n, 2);
  }),
  (Xt.prototype.jmulAdd = function (r, e, t) {
    var i = [this, e],
      n = [r, t];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, n, !0)
      : this.curve._wnafMulAdd(1, i, n, 2, !0);
  }),
  (Xt.prototype.eq = function (r) {
    return (
      this === r ||
      (this.inf === r.inf &&
        (this.inf || (this.x.cmp(r.x) === 0 && this.y.cmp(r.y) === 0)))
    );
  }),
  (Xt.prototype.neg = function (r) {
    if (this.inf) return this;
    var e = this.curve.point(this.x, this.y.redNeg());
    if (r && this.precomputed) {
      var t = this.precomputed,
        i = function (n) {
          return n.neg();
        };
      e.precomputed = {
        naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
        doubles: t.doubles && {
          step: t.doubles.step,
          points: t.doubles.points.map(i),
        },
      };
    }
    return e;
  }),
  (Xt.prototype.toJ = function () {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var r = this.curve.jpoint(this.x, this.y, this.curve.one);
    return r;
  });
function nr(r, e, t, i) {
  Bs.BasePoint.call(this, r, "jacobian"),
    e === null && t === null && i === null
      ? ((this.x = this.curve.one),
        (this.y = this.curve.one),
        (this.z = new Re(0)))
      : ((this.x = new Re(e, 16)),
        (this.y = new Re(t, 16)),
        (this.z = new Re(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Jd(nr, Bs.BasePoint),
  (ui.prototype.jpoint = function (r, e, t) {
    return new nr(this, r, e, t);
  }),
  (nr.prototype.toP = function () {
    if (this.isInfinity()) return this.curve.point(null, null);
    var r = this.z.redInvm(),
      e = r.redSqr(),
      t = this.x.redMul(e),
      i = this.y.redMul(e).redMul(r);
    return this.curve.point(t, i);
  }),
  (nr.prototype.neg = function () {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }),
  (nr.prototype.add = function (r) {
    if (this.isInfinity()) return r;
    if (r.isInfinity()) return this;
    var e = r.z.redSqr(),
      t = this.z.redSqr(),
      i = this.x.redMul(e),
      n = r.x.redMul(t),
      o = this.y.redMul(e.redMul(r.z)),
      c = r.y.redMul(t.redMul(this.z)),
      l = i.redSub(n),
      p = o.redSub(c);
    if (l.cmpn(0) === 0)
      return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var g = l.redSqr(),
      y = g.redMul(l),
      v = i.redMul(g),
      A = p.redSqr().redIAdd(y).redISub(v).redISub(v),
      E = p.redMul(v.redISub(A)).redISub(o.redMul(y)),
      P = this.z.redMul(r.z).redMul(l);
    return this.curve.jpoint(A, E, P);
  }),
  (nr.prototype.mixedAdd = function (r) {
    if (this.isInfinity()) return r.toJ();
    if (r.isInfinity()) return this;
    var e = this.z.redSqr(),
      t = this.x,
      i = r.x.redMul(e),
      n = this.y,
      o = r.y.redMul(e).redMul(this.z),
      c = t.redSub(i),
      l = n.redSub(o);
    if (c.cmpn(0) === 0)
      return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var p = c.redSqr(),
      g = p.redMul(c),
      y = t.redMul(p),
      v = l.redSqr().redIAdd(g).redISub(y).redISub(y),
      A = l.redMul(y.redISub(v)).redISub(n.redMul(g)),
      E = this.z.redMul(c);
    return this.curve.jpoint(v, A, E);
  }),
  (nr.prototype.dblp = function (r) {
    if (r === 0) return this;
    if (this.isInfinity()) return this;
    if (!r) return this.dbl();
    var e;
    if (this.curve.zeroA || this.curve.threeA) {
      var t = this;
      for (e = 0; e < r; e++) t = t.dbl();
      return t;
    }
    var i = this.curve.a,
      n = this.curve.tinv,
      o = this.x,
      c = this.y,
      l = this.z,
      p = l.redSqr().redSqr(),
      g = c.redAdd(c);
    for (e = 0; e < r; e++) {
      var y = o.redSqr(),
        v = g.redSqr(),
        A = v.redSqr(),
        E = y.redAdd(y).redIAdd(y).redIAdd(i.redMul(p)),
        P = o.redMul(v),
        T = E.redSqr().redISub(P.redAdd(P)),
        L = P.redISub(T),
        H = E.redMul(L);
      H = H.redIAdd(H).redISub(A);
      var Q = g.redMul(l);
      e + 1 < r && (p = p.redMul(A)), (o = T), (l = Q), (g = H);
    }
    return this.curve.jpoint(o, g.redMul(n), l);
  }),
  (nr.prototype.dbl = function () {
    return this.isInfinity()
      ? this
      : this.curve.zeroA
      ? this._zeroDbl()
      : this.curve.threeA
      ? this._threeDbl()
      : this._dbl();
  }),
  (nr.prototype._zeroDbl = function () {
    var r, e, t;
    if (this.zOne) {
      var i = this.x.redSqr(),
        n = this.y.redSqr(),
        o = n.redSqr(),
        c = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
      c = c.redIAdd(c);
      var l = i.redAdd(i).redIAdd(i),
        p = l.redSqr().redISub(c).redISub(c),
        g = o.redIAdd(o);
      (g = g.redIAdd(g)),
        (g = g.redIAdd(g)),
        (r = p),
        (e = l.redMul(c.redISub(p)).redISub(g)),
        (t = this.y.redAdd(this.y));
    } else {
      var y = this.x.redSqr(),
        v = this.y.redSqr(),
        A = v.redSqr(),
        E = this.x.redAdd(v).redSqr().redISub(y).redISub(A);
      E = E.redIAdd(E);
      var P = y.redAdd(y).redIAdd(y),
        T = P.redSqr(),
        L = A.redIAdd(A);
      (L = L.redIAdd(L)),
        (L = L.redIAdd(L)),
        (r = T.redISub(E).redISub(E)),
        (e = P.redMul(E.redISub(r)).redISub(L)),
        (t = this.y.redMul(this.z)),
        (t = t.redIAdd(t));
    }
    return this.curve.jpoint(r, e, t);
  }),
  (nr.prototype._threeDbl = function () {
    var r, e, t;
    if (this.zOne) {
      var i = this.x.redSqr(),
        n = this.y.redSqr(),
        o = n.redSqr(),
        c = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
      c = c.redIAdd(c);
      var l = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
        p = l.redSqr().redISub(c).redISub(c);
      r = p;
      var g = o.redIAdd(o);
      (g = g.redIAdd(g)),
        (g = g.redIAdd(g)),
        (e = l.redMul(c.redISub(p)).redISub(g)),
        (t = this.y.redAdd(this.y));
    } else {
      var y = this.z.redSqr(),
        v = this.y.redSqr(),
        A = this.x.redMul(v),
        E = this.x.redSub(y).redMul(this.x.redAdd(y));
      E = E.redAdd(E).redIAdd(E);
      var P = A.redIAdd(A);
      P = P.redIAdd(P);
      var T = P.redAdd(P);
      (r = E.redSqr().redISub(T)),
        (t = this.y.redAdd(this.z).redSqr().redISub(v).redISub(y));
      var L = v.redSqr();
      (L = L.redIAdd(L)),
        (L = L.redIAdd(L)),
        (L = L.redIAdd(L)),
        (e = E.redMul(P.redISub(r)).redISub(L));
    }
    return this.curve.jpoint(r, e, t);
  }),
  (nr.prototype._dbl = function () {
    var r = this.curve.a,
      e = this.x,
      t = this.y,
      i = this.z,
      n = i.redSqr().redSqr(),
      o = e.redSqr(),
      c = t.redSqr(),
      l = o.redAdd(o).redIAdd(o).redIAdd(r.redMul(n)),
      p = e.redAdd(e);
    p = p.redIAdd(p);
    var g = p.redMul(c),
      y = l.redSqr().redISub(g.redAdd(g)),
      v = g.redISub(y),
      A = c.redSqr();
    (A = A.redIAdd(A)), (A = A.redIAdd(A)), (A = A.redIAdd(A));
    var E = l.redMul(v).redISub(A),
      P = t.redAdd(t).redMul(i);
    return this.curve.jpoint(y, E, P);
  }),
  (nr.prototype.trpl = function () {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var r = this.x.redSqr(),
      e = this.y.redSqr(),
      t = this.z.redSqr(),
      i = e.redSqr(),
      n = r.redAdd(r).redIAdd(r),
      o = n.redSqr(),
      c = this.x.redAdd(e).redSqr().redISub(r).redISub(i);
    (c = c.redIAdd(c)), (c = c.redAdd(c).redIAdd(c)), (c = c.redISub(o));
    var l = c.redSqr(),
      p = i.redIAdd(i);
    (p = p.redIAdd(p)), (p = p.redIAdd(p)), (p = p.redIAdd(p));
    var g = n.redIAdd(c).redSqr().redISub(o).redISub(l).redISub(p),
      y = e.redMul(g);
    (y = y.redIAdd(y)), (y = y.redIAdd(y));
    var v = this.x.redMul(l).redISub(y);
    (v = v.redIAdd(v)), (v = v.redIAdd(v));
    var A = this.y.redMul(g.redMul(p.redISub(g)).redISub(c.redMul(l)));
    (A = A.redIAdd(A)), (A = A.redIAdd(A)), (A = A.redIAdd(A));
    var E = this.z.redAdd(c).redSqr().redISub(t).redISub(l);
    return this.curve.jpoint(v, A, E);
  }),
  (nr.prototype.mul = function (r, e) {
    return (r = new Re(r, e)), this.curve._wnafMul(this, r);
  }),
  (nr.prototype.eq = function (r) {
    if (r.type === "affine") return this.eq(r.toJ());
    if (this === r) return !0;
    var e = this.z.redSqr(),
      t = r.z.redSqr();
    if (this.x.redMul(t).redISub(r.x.redMul(e)).cmpn(0) !== 0) return !1;
    var i = e.redMul(this.z),
      n = t.redMul(r.z);
    return this.y.redMul(n).redISub(r.y.redMul(i)).cmpn(0) === 0;
  }),
  (nr.prototype.eqXToP = function (r) {
    var e = this.z.redSqr(),
      t = r.toRed(this.curve.red).redMul(e);
    if (this.x.cmp(t) === 0) return !0;
    for (var i = r.clone(), n = this.curve.redN.redMul(e); ; ) {
      if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
      if ((t.redIAdd(n), this.x.cmp(t) === 0)) return !0;
    }
  }),
  (nr.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC JPoint Infinity>"
      : "<EC JPoint x: " +
          this.x.toString(16, 2) +
          " y: " +
          this.y.toString(16, 2) +
          " z: " +
          this.z.toString(16, 2) +
          ">";
  }),
  (nr.prototype.isInfinity = function () {
    return this.z.cmpn(0) === 0;
  });
var Ju = ko(function (r, e) {
    var t = e;
    (t.base = Bs), (t.short = MO), (t.mont = null), (t.edwards = null);
  }),
  Wu = ko(function (r, e) {
    var t = e,
      i = Vr.assert;
    function n(l) {
      l.type === "short"
        ? (this.curve = new Ju.short(l))
        : l.type === "edwards"
        ? (this.curve = new Ju.edwards(l))
        : (this.curve = new Ju.mont(l)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = l.hash),
        i(this.g.validate(), "Invalid curve"),
        i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    t.PresetCurve = n;
    function o(l, p) {
      Object.defineProperty(t, l, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var g = new n(p);
          return (
            Object.defineProperty(t, l, {
              configurable: !0,
              enumerable: !0,
              value: g,
            }),
            g
          );
        },
      });
    }
    o("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: zi.sha256,
      gRed: !1,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
      ],
    }),
      o("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: zi.sha256,
        gRed: !1,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
        ],
      }),
      o("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: zi.sha256,
        gRed: !1,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      o("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: zi.sha384,
        gRed: !1,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
        ],
      }),
      o("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: zi.sha512,
        gRed: !1,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
        ],
      }),
      o("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: zi.sha256,
        gRed: !1,
        g: ["9"],
      }),
      o("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: zi.sha256,
        gRed: !1,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          "6666666666666666666666666666666666666666666666666666666666666658",
        ],
      });
    var c;
    try {
      c = null.crash();
    } catch {
      c = void 0;
    }
    o("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: zi.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda:
        "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3",
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15",
        },
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        c,
      ],
    });
  });
function ss(r) {
  if (!(this instanceof ss)) return new ss(r);
  (this.hash = r.hash),
    (this.predResist = !!r.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = r.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var e = Ai.toArray(r.entropy, r.entropyEnc || "hex"),
    t = Ai.toArray(r.nonce, r.nonceEnc || "hex"),
    i = Ai.toArray(r.pers, r.persEnc || "hex");
  $d(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ),
    this._init(e, t, i);
}
var jv = ss;
(ss.prototype._init = function (r, e, t) {
  var i = r.concat(e).concat(t);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var n = 0; n < this.V.length; n++) (this.K[n] = 0), (this.V[n] = 1);
  this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
}),
  (ss.prototype._hmac = function () {
    return new zi.hmac(this.hash, this.K);
  }),
  (ss.prototype._update = function (r) {
    var e = this._hmac().update(this.V).update([0]);
    r && (e = e.update(r)),
      (this.K = e.digest()),
      (this.V = this._hmac().update(this.V).digest()),
      r &&
        ((this.K = this._hmac().update(this.V).update([1]).update(r).digest()),
        (this.V = this._hmac().update(this.V).digest()));
  }),
  (ss.prototype.reseed = function (r, e, t, i) {
    typeof e != "string" && ((i = t), (t = e), (e = null)),
      (r = Ai.toArray(r, e)),
      (t = Ai.toArray(t, i)),
      $d(
        r.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      ),
      this._update(r.concat(t || [])),
      (this._reseed = 1);
  }),
  (ss.prototype.generate = function (r, e, t, i) {
    if (this._reseed > this.reseedInterval)
      throw new Error("Reseed is required");
    typeof e != "string" && ((i = t), (t = e), (e = null)),
      t && ((t = Ai.toArray(t, i || "hex")), this._update(t));
    for (var n = []; n.length < r; )
      (this.V = this._hmac().update(this.V).digest()), (n = n.concat(this.V));
    var o = n.slice(0, r);
    return this._update(t), this._reseed++, Ai.encode(o, e);
  });
var xd = Vr.assert;
function fr(r, e) {
  (this.ec = r),
    (this.priv = null),
    (this.pub = null),
    e.priv && this._importPrivate(e.priv, e.privEnc),
    e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Id = fr;
(fr.fromPublic = function (r, e, t) {
  return e instanceof fr ? e : new fr(r, { pub: e, pubEnc: t });
}),
  (fr.fromPrivate = function (r, e, t) {
    return e instanceof fr ? e : new fr(r, { priv: e, privEnc: t });
  }),
  (fr.prototype.validate = function () {
    var r = this.getPublic();
    return r.isInfinity()
      ? { result: !1, reason: "Invalid public key" }
      : r.validate()
      ? r.mul(this.ec.curve.n).isInfinity()
        ? { result: !0, reason: null }
        : { result: !1, reason: "Public key * N != O" }
      : { result: !1, reason: "Public key is not a point" };
  }),
  (fr.prototype.getPublic = function (r, e) {
    return (
      typeof r == "string" && ((e = r), (r = null)),
      this.pub || (this.pub = this.ec.g.mul(this.priv)),
      e ? this.pub.encode(e, r) : this.pub
    );
  }),
  (fr.prototype.getPrivate = function (r) {
    return r === "hex" ? this.priv.toString(16, 2) : this.priv;
  }),
  (fr.prototype._importPrivate = function (r, e) {
    (this.priv = new Re(r, e || 16)),
      (this.priv = this.priv.umod(this.ec.curve.n));
  }),
  (fr.prototype._importPublic = function (r, e) {
    if (r.x || r.y) {
      this.ec.curve.type === "mont"
        ? xd(r.x, "Need x coordinate")
        : (this.ec.curve.type === "short" ||
            this.ec.curve.type === "edwards") &&
          xd(r.x && r.y, "Need both x and y coordinate"),
        (this.pub = this.ec.curve.point(r.x, r.y));
      return;
    }
    this.pub = this.ec.curve.decodePoint(r, e);
  }),
  (fr.prototype.derive = function (r) {
    return (
      r.validate() || xd(r.validate(), "public point not validated"),
      r.mul(this.priv).getX()
    );
  }),
  (fr.prototype.sign = function (r, e, t) {
    return this.ec.sign(r, this, e, t);
  }),
  (fr.prototype.verify = function (r, e) {
    return this.ec.verify(r, e, this);
  }),
  (fr.prototype.inspect = function () {
    return (
      "<Key priv: " +
      (this.priv && this.priv.toString(16, 2)) +
      " pub: " +
      (this.pub && this.pub.inspect()) +
      " >"
    );
  });
var NO = Vr.assert;
function nh(r, e) {
  if (r instanceof nh) return r;
  this._importDER(r, e) ||
    (NO(r.r && r.s, "Signature without r or s"),
    (this.r = new Re(r.r, 16)),
    (this.s = new Re(r.s, 16)),
    r.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = r.recoveryParam));
}
var Gu = nh;
function TO() {
  this.place = 0;
}
function Dd(r, e) {
  var t = r[e.place++];
  if (!(t & 128)) return t;
  var i = t & 15;
  if (i === 0 || i > 4) return !1;
  for (var n = 0, o = 0, c = e.place; o < i; o++, c++)
    (n <<= 8), (n |= r[c]), (n >>>= 0);
  return n <= 127 ? !1 : ((e.place = c), n);
}
function zv(r) {
  for (var e = 0, t = r.length - 1; !r[e] && !(r[e + 1] & 128) && e < t; ) e++;
  return e === 0 ? r : r.slice(e);
}
nh.prototype._importDER = function (r, e) {
  r = Vr.toArray(r, e);
  var t = new TO();
  if (r[t.place++] !== 48) return !1;
  var i = Dd(r, t);
  if (i === !1 || i + t.place !== r.length || r[t.place++] !== 2) return !1;
  var n = Dd(r, t);
  if (n === !1) return !1;
  var o = r.slice(t.place, n + t.place);
  if (((t.place += n), r[t.place++] !== 2)) return !1;
  var c = Dd(r, t);
  if (c === !1 || r.length !== c + t.place) return !1;
  var l = r.slice(t.place, c + t.place);
  if (o[0] === 0)
    if (o[1] & 128) o = o.slice(1);
    else return !1;
  if (l[0] === 0)
    if (l[1] & 128) l = l.slice(1);
    else return !1;
  return (
    (this.r = new Re(o)), (this.s = new Re(l)), (this.recoveryParam = null), !0
  );
};
function Rd(r, e) {
  if (e < 128) {
    r.push(e);
    return;
  }
  var t = 1 + ((Math.log(e) / Math.LN2) >>> 3);
  for (r.push(t | 128); --t; ) r.push((e >>> (t << 3)) & 255);
  r.push(e);
}
nh.prototype.toDER = function (r) {
  var e = this.r.toArray(),
    t = this.s.toArray();
  for (
    e[0] & 128 && (e = [0].concat(e)),
      t[0] & 128 && (t = [0].concat(t)),
      e = zv(e),
      t = zv(t);
    !t[0] && !(t[1] & 128);

  )
    t = t.slice(1);
  var i = [2];
  Rd(i, e.length), (i = i.concat(e)), i.push(2), Rd(i, t.length);
  var n = i.concat(t),
    o = [48];
  return Rd(o, n.length), (o = o.concat(n)), Vr.encode(o, r);
};
var FO = function () {
    throw new Error("unsupported");
  },
  kw = Vr.assert;
function ci(r) {
  if (!(this instanceof ci)) return new ci(r);
  typeof r == "string" &&
    (kw(Object.prototype.hasOwnProperty.call(Wu, r), "Unknown curve " + r),
    (r = Wu[r])),
    r instanceof Wu.PresetCurve && (r = { curve: r }),
    (this.curve = r.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = r.curve.g),
    this.g.precompute(r.curve.n.bitLength() + 1),
    (this.hash = r.hash || r.curve.hash);
}
var LO = ci;
(ci.prototype.keyPair = function (r) {
  return new Id(this, r);
}),
  (ci.prototype.keyFromPrivate = function (r, e) {
    return Id.fromPrivate(this, r, e);
  }),
  (ci.prototype.keyFromPublic = function (r, e) {
    return Id.fromPublic(this, r, e);
  }),
  (ci.prototype.genKeyPair = function (r) {
    r || (r = {});
    for (
      var e = new jv({
          hash: this.hash,
          pers: r.pers,
          persEnc: r.persEnc || "utf8",
          entropy: r.entropy || FO(this.hash.hmacStrength),
          entropyEnc: (r.entropy && r.entropyEnc) || "utf8",
          nonce: this.n.toArray(),
        }),
        t = this.n.byteLength(),
        i = this.n.sub(new Re(2));
      ;

    ) {
      var n = new Re(e.generate(t));
      if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
    }
  }),
  (ci.prototype._truncateToN = function (r, e) {
    var t = r.byteLength() * 8 - this.n.bitLength();
    return (
      t > 0 && (r = r.ushrn(t)), !e && r.cmp(this.n) >= 0 ? r.sub(this.n) : r
    );
  }),
  (ci.prototype.sign = function (r, e, t, i) {
    typeof t == "object" && ((i = t), (t = null)),
      i || (i = {}),
      (e = this.keyFromPrivate(e, t)),
      (r = this._truncateToN(new Re(r, 16)));
    for (
      var n = this.n.byteLength(),
        o = e.getPrivate().toArray("be", n),
        c = r.toArray("be", n),
        l = new jv({
          hash: this.hash,
          entropy: o,
          nonce: c,
          pers: i.pers,
          persEnc: i.persEnc || "utf8",
        }),
        p = this.n.sub(new Re(1)),
        g = 0;
      ;
      g++
    ) {
      var y = i.k ? i.k(g) : new Re(l.generate(this.n.byteLength()));
      if (
        ((y = this._truncateToN(y, !0)), !(y.cmpn(1) <= 0 || y.cmp(p) >= 0))
      ) {
        var v = this.g.mul(y);
        if (!v.isInfinity()) {
          var A = v.getX(),
            E = A.umod(this.n);
          if (E.cmpn(0) !== 0) {
            var P = y.invm(this.n).mul(E.mul(e.getPrivate()).iadd(r));
            if (((P = P.umod(this.n)), P.cmpn(0) !== 0)) {
              var T = (v.getY().isOdd() ? 1 : 0) | (A.cmp(E) !== 0 ? 2 : 0);
              return (
                i.canonical &&
                  P.cmp(this.nh) > 0 &&
                  ((P = this.n.sub(P)), (T ^= 1)),
                new Gu({ r: E, s: P, recoveryParam: T })
              );
            }
          }
        }
      }
    }
  }),
  (ci.prototype.verify = function (r, e, t, i) {
    (r = this._truncateToN(new Re(r, 16))),
      (t = this.keyFromPublic(t, i)),
      (e = new Gu(e, "hex"));
    var n = e.r,
      o = e.s;
    if (
      n.cmpn(1) < 0 ||
      n.cmp(this.n) >= 0 ||
      o.cmpn(1) < 0 ||
      o.cmp(this.n) >= 0
    )
      return !1;
    var c = o.invm(this.n),
      l = c.mul(r).umod(this.n),
      p = c.mul(n).umod(this.n),
      g;
    return this.curve._maxwellTrick
      ? ((g = this.g.jmulAdd(l, t.getPublic(), p)),
        g.isInfinity() ? !1 : g.eqXToP(n))
      : ((g = this.g.mulAdd(l, t.getPublic(), p)),
        g.isInfinity() ? !1 : g.getX().umod(this.n).cmp(n) === 0);
  }),
  (ci.prototype.recoverPubKey = function (r, e, t, i) {
    kw((3 & t) === t, "The recovery param is more than two bits"),
      (e = new Gu(e, i));
    var n = this.n,
      o = new Re(r),
      c = e.r,
      l = e.s,
      p = t & 1,
      g = t >> 1;
    if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && g)
      throw new Error("Unable to find sencond key candinate");
    g
      ? (c = this.curve.pointFromX(c.add(this.curve.n), p))
      : (c = this.curve.pointFromX(c, p));
    var y = e.r.invm(n),
      v = n.sub(o).mul(y).umod(n),
      A = l.mul(y).umod(n);
    return this.g.mulAdd(v, c, A);
  }),
  (ci.prototype.getKeyRecoveryParam = function (r, e, t, i) {
    if (((e = new Gu(e, i)), e.recoveryParam !== null)) return e.recoveryParam;
    for (var n = 0; n < 4; n++) {
      var o;
      try {
        o = this.recoverPubKey(r, e, n);
      } catch {
        continue;
      }
      if (o.eq(t)) return n;
    }
    throw new Error("Unable to find valid recovery factor");
  });
var BO = ko(function (r, e) {
    var t = e;
    (t.version = "6.5.4"),
      (t.utils = Vr),
      (t.rand = function () {
        throw new Error("unsupported");
      }),
      (t.curve = Ju),
      (t.curves = Wu),
      (t.ec = LO),
      (t.eddsa = null);
  }),
  UO = BO.ec,
  qO = "signing-key/5.7.0",
  Fd = new Mt(qO),
  Cd = null;
function Vi() {
  return Cd || (Cd = new UO("secp256k1")), Cd;
}
var Ld = class {
  constructor(e) {
    Ka(this, "curve", "secp256k1"),
      Ka(this, "privateKey", _r(e)),
      bR(this.privateKey) !== 32 &&
        Fd.throwArgumentError(
          "invalid private key",
          "privateKey",
          "[[ REDACTED ]]"
        );
    let t = Vi().keyFromPrivate(qt(this.privateKey));
    Ka(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
      Ka(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")),
      Ka(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    let t = Vi().keyFromPublic(qt(this.publicKey)),
      i = Vi().keyFromPublic(qt(e));
    return "0x" + t.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    let t = Vi().keyFromPrivate(qt(this.privateKey)),
      i = qt(e);
    i.length !== 32 && Fd.throwArgumentError("bad digest length", "digest", e);
    let n = t.sign(i, { canonical: !0 });
    return lw({
      recoveryParam: n.recoveryParam,
      r: Gi("0x" + n.r.toString(16), 32),
      s: Gi("0x" + n.s.toString(16), 32),
    });
  }
  computeSharedSecret(e) {
    let t = Vi().keyFromPrivate(qt(this.privateKey)),
      i = Vi().keyFromPublic(qt(Hw(e)));
    return Gi("0x" + t.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
};
function jO(r, e) {
  let t = lw(e),
    i = { r: qt(t.r), s: qt(t.s) };
  return "0x" + Vi().recoverPubKey(qt(r), i, t.recoveryParam).encode("hex", !1);
}
function Hw(r, e) {
  let t = qt(r);
  if (t.length === 32) {
    let i = new Ld(t);
    return e ? "0x" + Vi().keyFromPrivate(t).getPublic(!0, "hex") : i.publicKey;
  } else {
    if (t.length === 33)
      return e ? _r(t) : "0x" + Vi().keyFromPublic(t).getPublic(!1, "hex");
    if (t.length === 65)
      return e ? "0x" + Vi().keyFromPublic(t).getPublic(!0, "hex") : _r(t);
  }
  return Fd.throwArgumentError(
    "invalid public or private key",
    "key",
    "[REDACTED]"
  );
}
var zO = "transactions/5.7.0";
new Mt(zO);
var kv;
(function (r) {
  (r[(r.legacy = 0)] = "legacy"),
    (r[(r.eip2930 = 1)] = "eip2930"),
    (r[(r.eip1559 = 2)] = "eip1559");
})(kv || (kv = {}));
function kO(r) {
  let e = Hw(r);
  return XR(Rv(Kd(Rv(e, 1)), 12));
}
function HO(r, e) {
  return kO(jO(qt(r), e));
}
var KO = "https://rpc.walletconnect.com/v1";
function VO(r, e, t, i, n, o) {
  return C(this, null, function* () {
    switch (t.t) {
      case "eip191":
        return GO(r, e, t.s);
      case "eip1271":
        return yield $O(r, e, t.s, i, n, o);
      default:
        throw new Error(
          `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`
        );
    }
  });
}
function GO(r, e, t) {
  return HO(Ew(e), t).toLowerCase() === r.toLowerCase();
}
function $O(r, e, t, i, n, o) {
  return C(this, null, function* () {
    try {
      let c = "0x1626ba7e",
        l = "0000000000000000000000000000000000000000000000000000000000000040",
        p = "0000000000000000000000000000000000000000000000000000000000000041",
        g = t.substring(2),
        y = Ew(e).substring(2),
        v = c + y + l + p + g,
        A = yield fetch(`${o || KO}/?chainId=${i}&projectId=${n}`, {
          method: "POST",
          body: JSON.stringify({
            id: JO(),
            jsonrpc: "2.0",
            method: "eth_call",
            params: [{ to: r, data: v }, "latest"],
          }),
        }),
        { result: E } = yield A.json();
      return E ? E.slice(0, c.length).toLowerCase() === c.toLowerCase() : !1;
    } catch (c) {
      return console.error("isValidEip1271Signature: ", c), !1;
    }
  });
}
function JO() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var WO = Object.defineProperty,
  YO = Object.defineProperties,
  QO = Object.getOwnPropertyDescriptors,
  Hv = Object.getOwnPropertySymbols,
  XO = Object.prototype.hasOwnProperty,
  ZO = Object.prototype.propertyIsEnumerable,
  Kv = (r, e, t) =>
    e in r
      ? WO(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  eP = (r, e) => {
    for (var t in e || (e = {})) XO.call(e, t) && Kv(r, t, e[t]);
    if (Hv) for (var t of Hv(e)) ZO.call(e, t) && Kv(r, t, e[t]);
    return r;
  },
  tP = (r, e) => YO(r, QO(e)),
  rP = "did:pkh:",
  Wd = (r) => r?.split(":"),
  Kw = (r) => {
    let e = r && Wd(r);
    if (e) return r.includes(rP) ? e[3] : e[1];
  },
  Yd = (r) => {
    let e = r && Wd(r);
    if (e) return e[2] + ":" + e[3];
  },
  ic = (r) => {
    let e = r && Wd(r);
    if (e) return e.pop();
  };
function Qd(r) {
  return C(this, null, function* () {
    let { cacao: e, projectId: t } = r,
      { s: i, p: n } = e,
      o = Xd(n, n.iss),
      c = ic(n.iss);
    return yield VO(c, o, i, Kw(n.iss), t);
  });
}
var Xd = (r, e) => {
  let t = `${r.domain} wants you to sign in with your Ethereum account:`,
    i = ic(e);
  if (!r.aud && !r.uri)
    throw new Error(
      "Either `aud` or `uri` is required to construct the message"
    );
  let n = r.statement || void 0,
    o = `URI: ${r.aud || r.uri}`,
    c = `Version: ${r.version}`,
    l = `Chain ID: ${Kw(e)}`,
    p = `Nonce: ${r.nonce}`,
    g = `Issued At: ${r.iat}`,
    y = r.resources
      ? `Resources:${r.resources
          .map(
            (A) => `
- ${A}`
          )
          .join("")}`
      : void 0,
    v = nc(r.resources);
  if (v) {
    let A = Xa(v);
    n = uP(n, A);
  }
  return [t, i, "", n, "", o, c, l, p, g, y].filter((A) => A != null).join(`
`);
};
function iP(r) {
  return Buffer.from(JSON.stringify(r)).toString("base64");
}
function nP(r) {
  return JSON.parse(Buffer.from(r, "base64").toString("utf-8"));
}
function Ts(r) {
  if (!r) throw new Error("No recap provided, value is undefined");
  if (!r.att) throw new Error("No `att` property found");
  let e = Object.keys(r.att);
  if (!(e != null && e.length))
    throw new Error("No resources found in `att` property");
  e.forEach((t) => {
    let i = r.att[t];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${t}`);
    if (typeof i != "object")
      throw new Error(`Resource must be an object: ${t}`);
    if (!Object.keys(i).length)
      throw new Error(`Resource object is empty: ${t}`);
    Object.keys(i).forEach((n) => {
      let o = i[n];
      if (!Array.isArray(o))
        throw new Error(
          `Ability limits ${n} must be an array of objects, found: ${o}`
        );
      if (!o.length)
        throw new Error(
          `Value of ${n} is empty array, must be an array with objects`
        );
      o.forEach((c) => {
        if (typeof c != "object")
          throw new Error(
            `Ability limits (${n}) must be an array of objects, found: ${c}`
          );
      });
    });
  });
}
function sP(r, e, t, i = {}) {
  return t?.sort((n, o) => n.localeCompare(o)), { att: { [r]: oP(e, t, i) } };
}
function oP(r, e, t = {}) {
  e = e?.sort((n, o) => n.localeCompare(o));
  let i = e.map((n) => ({ [`${r}/${n}`]: [t] }));
  return Object.assign({}, ...i);
}
function Vw(r) {
  return Ts(r), `urn:recap:${iP(r).replace(/=/g, "")}`;
}
function Xa(r) {
  let e = nP(r.replace("urn:recap:", ""));
  return Ts(e), e;
}
function Gw(r, e, t) {
  let i = sP(r, e, t);
  return Vw(i);
}
function aP(r) {
  return r && r.includes("urn:recap:");
}
function $w(r, e) {
  let t = Xa(r),
    i = Xa(e),
    n = cP(t, i);
  return Vw(n);
}
function cP(r, e) {
  Ts(r), Ts(e);
  let t = Object.keys(r.att)
      .concat(Object.keys(e.att))
      .sort((n, o) => n.localeCompare(o)),
    i = { att: {} };
  return (
    t.forEach((n) => {
      var o, c;
      Object.keys(((o = r.att) == null ? void 0 : o[n]) || {})
        .concat(Object.keys(((c = e.att) == null ? void 0 : c[n]) || {}))
        .sort((l, p) => l.localeCompare(p))
        .forEach((l) => {
          var p, g;
          i.att[n] = tP(eP({}, i.att[n]), {
            [l]:
              ((p = r.att[n]) == null ? void 0 : p[l]) ||
              ((g = e.att[n]) == null ? void 0 : g[l]),
          });
        });
    }),
    i
  );
}
function uP(r = "", e) {
  Ts(e);
  let t =
    "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (r.includes(t)) return r;
  let i = [],
    n = 0;
  Object.keys(e.att).forEach((l) => {
    let p = Object.keys(e.att[l]).map((v) => ({
      ability: v.split("/")[0],
      action: v.split("/")[1],
    }));
    p.sort((v, A) => v.action.localeCompare(A.action));
    let g = {};
    p.forEach((v) => {
      g[v.ability] || (g[v.ability] = []), g[v.ability].push(v.action);
    });
    let y = Object.keys(g).map(
      (v) => (n++, `(${n}) '${v}': '${g[v].join("', '")}' for '${l}'.`)
    );
    i.push(y.join(", ").replace(".,", "."));
  });
  let o = i.join(" "),
    c = `${t}${o}`;
  return `${r ? r + " " : ""}${c}`;
}
function Zd(r) {
  var e;
  let t = Xa(r);
  Ts(t);
  let i = (e = t.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((n) => n.split("/")[1]) : [];
}
function ep(r) {
  let e = Xa(r);
  Ts(e);
  let t = [];
  return (
    Object.values(e.att).forEach((i) => {
      Object.values(i).forEach((n) => {
        var o;
        (o = n?.[0]) != null && o.chains && t.push(n[0].chains);
      });
    }),
    [...new Set(t.flat())]
  );
}
function nc(r) {
  if (!r) return;
  let e = r?.[r.length - 1];
  return aP(e) ? e : void 0;
}
var Jw = "base10",
  dr = "base16",
  Bd = "base64pad",
  tp = "utf8",
  Ww = 0,
  Xi = 1,
  hP = 0,
  Vv = 1,
  Ud = 12,
  rp = 32;
function Yw() {
  let r = rh.generateKeyPair();
  return { privateKey: $t(r.secretKey, dr), publicKey: $t(r.publicKey, dr) };
}
function sh() {
  let r = (0, jd.randomBytes)(rp);
  return $t(r, dr);
}
function Qw(r, e) {
  let t = rh.sharedKey(ir(r, dr), ir(e, dr), !0),
    i = new Xv.HKDF(Za.SHA256, t).expand(rp);
  return $t(i, dr);
}
function Ho(r) {
  let e = (0, Za.hash)(ir(r, dr));
  return $t(e, dr);
}
function Fn(r) {
  let e = (0, Za.hash)(ir(r, tp));
  return $t(e, dr);
}
function lP(r) {
  return ir(`${r}`, Jw);
}
function Ko(r) {
  return Number($t(r, Jw));
}
function Xw(r) {
  let e = lP(typeof r.type < "u" ? r.type : Ww);
  if (Ko(e) === Xi && typeof r.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  let t = typeof r.senderPublicKey < "u" ? ir(r.senderPublicKey, dr) : void 0,
    i = typeof r.iv < "u" ? ir(r.iv, dr) : (0, jd.randomBytes)(Ud),
    n = new qd.ChaCha20Poly1305(ir(r.symKey, dr)).seal(i, ir(r.message, tp));
  return fP({ type: e, sealed: n, iv: i, senderPublicKey: t });
}
function Zw(r) {
  let e = new qd.ChaCha20Poly1305(ir(r.symKey, dr)),
    { sealed: t, iv: i } = sc(r.encoded),
    n = e.open(i, t);
  if (n === null) throw new Error("Failed to decrypt");
  return $t(n, tp);
}
function fP(r) {
  if (Ko(r.type) === Xi) {
    if (typeof r.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return $t(So([r.type, r.senderPublicKey, r.iv, r.sealed]), Bd);
  }
  return $t(So([r.type, r.iv, r.sealed]), Bd);
}
function sc(r) {
  let e = ir(r, Bd),
    t = e.slice(hP, Vv),
    i = Vv;
  if (Ko(t) === Xi) {
    let l = i + rp,
      p = l + Ud,
      g = e.slice(i, l),
      y = e.slice(l, p),
      v = e.slice(p);
    return { type: t, sealed: v, iv: y, senderPublicKey: g };
  }
  let n = i + Ud,
    o = e.slice(i, n),
    c = e.slice(n);
  return { type: t, sealed: c, iv: o };
}
function eb(r, e) {
  let t = sc(r);
  return ip({
    type: Ko(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? $t(t.senderPublicKey, dr) : void 0,
    receiverPublicKey: e?.receiverPublicKey,
  });
}
function ip(r) {
  let e = r?.type || Ww;
  if (e === Xi) {
    if (typeof r?.senderPublicKey > "u")
      throw new Error("missing sender public key");
    if (typeof r?.receiverPublicKey > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: r?.senderPublicKey,
    receiverPublicKey: r?.receiverPublicKey,
  };
}
function np(r) {
  return (
    r.type === Xi &&
    typeof r.senderPublicKey == "string" &&
    typeof r.receiverPublicKey == "string"
  );
}
var dP = "irn";
function oh(r) {
  return r?.relay || { protocol: dP };
}
function Vo(r) {
  let e = vv[r];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var pP = Object.defineProperty,
  gP = Object.defineProperties,
  mP = Object.getOwnPropertyDescriptors,
  Gv = Object.getOwnPropertySymbols,
  yP = Object.prototype.hasOwnProperty,
  vP = Object.prototype.propertyIsEnumerable,
  $v = (r, e, t) =>
    e in r
      ? pP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Jv = (r, e) => {
    for (var t in e || (e = {})) yP.call(e, t) && $v(r, t, e[t]);
    if (Gv) for (var t of Gv(e)) vP.call(e, t) && $v(r, t, e[t]);
    return r;
  },
  wP = (r, e) => gP(r, mP(e));
function bP(r, e = "-") {
  let t = {},
    i = "relay" + e;
  return (
    Object.keys(r).forEach((n) => {
      if (n.startsWith(i)) {
        let o = n.replace(i, ""),
          c = r[n];
        t[o] = c;
      }
    }),
    t
  );
}
function sp(r) {
  (r = r.includes("wc://") ? r.replace("wc://", "") : r),
    (r = r.includes("wc:") ? r.replace("wc:", "") : r);
  let e = r.indexOf(":"),
    t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0,
    i = r.substring(0, e),
    n = r.substring(e + 1, t).split("@"),
    o = typeof t < "u" ? r.substring(t) : "",
    c = Lo.parse(o),
    l = typeof c.methods == "string" ? c.methods.split(",") : void 0;
  return {
    protocol: i,
    topic: _P(n[0]),
    version: parseInt(n[1], 10),
    symKey: c.symKey,
    relay: bP(c),
    methods: l,
    expiryTimestamp: c.expiryTimestamp
      ? parseInt(c.expiryTimestamp, 10)
      : void 0,
  };
}
function _P(r) {
  return r.startsWith("//") ? r.substring(2) : r;
}
function EP(r, e = "-") {
  let t = "relay",
    i = {};
  return (
    Object.keys(r).forEach((n) => {
      let o = t + e + n;
      r[n] && (i[o] = r[n]);
    }),
    i
  );
}
function tb(r) {
  return (
    `${r.protocol}:${r.topic}@${r.version}?` +
    Lo.stringify(
      Jv(
        wP(Jv({ symKey: r.symKey }, EP(r.relay)), {
          expiryTimestamp: r.expiryTimestamp,
        }),
        r.methods ? { methods: r.methods.join(",") } : {}
      )
    )
  );
}
function Go(r) {
  let e = [];
  return (
    r.forEach((t) => {
      let [i, n] = t.split(":");
      e.push(`${i}:${n}`);
    }),
    e
  );
}
function AP(r) {
  let e = [];
  return (
    Object.values(r).forEach((t) => {
      e.push(...Go(t.accounts));
    }),
    e
  );
}
function SP(r, e) {
  let t = [];
  return (
    Object.values(r).forEach((i) => {
      Go(i.accounts).includes(e) && t.push(...i.methods);
    }),
    t
  );
}
function xP(r, e) {
  let t = [];
  return (
    Object.values(r).forEach((i) => {
      Go(i.accounts).includes(e) && t.push(...i.events);
    }),
    t
  );
}
function ah(r) {
  return r.includes(":");
}
function $o(r) {
  return ah(r) ? r.split(":")[0] : r;
}
function IP(r) {
  let e = {};
  return (
    r?.forEach((t) => {
      let [i, n] = t.split(":");
      e[i] || (e[i] = { accounts: [], chains: [], events: [] }),
        e[i].accounts.push(t),
        e[i].chains.push(`${i}:${n}`);
    }),
    e
  );
}
function op(r, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  let t = IP(e);
  for (let [i, n] of Object.entries(t))
    n.methods ? (n.methods = tc(n.methods, r)) : (n.methods = r),
      (n.events = ["chainChanged", "accountsChanged"]);
  return t;
}
var DP = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  RP = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function de(r, e) {
  let { message: t, code: i } = RP[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function ze(r, e) {
  let { message: t, code: i } = DP[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function Gr(r, e) {
  return Array.isArray(r) ? (typeof e < "u" && r.length ? r.every(e) : !0) : !1;
}
function Us(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function sr(r) {
  return typeof r > "u";
}
function Ft(r, e) {
  return e && sr(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function ap(r, e) {
  return e && sr(r) ? !0 : typeof r == "number" && !isNaN(r);
}
function rb(r, e) {
  let { requiredNamespaces: t } = e,
    i = Object.keys(r.namespaces),
    n = Object.keys(t),
    o = !0;
  return Ms(n, i)
    ? (i.forEach((c) => {
        let { accounts: l, methods: p, events: g } = r.namespaces[c],
          y = Go(l),
          v = t[c];
        (!Ms(Zv(c, v), y) || !Ms(v.methods, p) || !Ms(v.events, g)) && (o = !1);
      }),
      o)
    : !1;
}
function th(r) {
  return Ft(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function CP(r) {
  if (Ft(r, !1) && r.includes(":")) {
    let e = r.split(":");
    if (e.length === 3) {
      let t = e[0] + ":" + e[1];
      return !!e[2] && th(t);
    }
  }
  return !1;
}
function ib(r) {
  if (Ft(r, !1))
    try {
      return typeof new URL(r) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function nb(r) {
  var e;
  return (e = r?.proposer) == null ? void 0 : e.publicKey;
}
function sb(r) {
  return r?.topic;
}
function ob(r, e) {
  let t = null;
  return (
    Ft(r?.publicKey, !1) ||
      (t = de(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function Wv(r) {
  let e = !0;
  return Gr(r) ? r.length && (e = r.every((t) => Ft(t, !1))) : (e = !1), e;
}
function OP(r, e, t) {
  let i = null;
  return (
    Gr(e) && e.length
      ? e.forEach((n) => {
          i ||
            th(n) ||
            (i = ze(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${n} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : th(r) ||
        (i = ze(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    i
  );
}
function PP(r, e, t) {
  let i = null;
  return (
    Object.entries(r).forEach(([n, o]) => {
      if (i) return;
      let c = OP(n, Zv(n, o), `${e} ${t}`);
      c && (i = c);
    }),
    i
  );
}
function MP(r, e) {
  let t = null;
  return (
    Gr(r)
      ? r.forEach((i) => {
          t ||
            CP(i) ||
            (t = ze(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = ze(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function NP(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      let n = MP(i?.accounts, `${e} namespace`);
      n && (t = n);
    }),
    t
  );
}
function TP(r, e) {
  let t = null;
  return (
    Wv(r?.methods)
      ? Wv(r?.events) ||
        (t = ze(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = ze(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function ab(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      let n = TP(i, `${e}, namespace`);
      n && (t = n);
    }),
    t
  );
}
function cb(r, e, t) {
  let i = null;
  if (r && Us(r)) {
    let n = ab(r, e);
    n && (i = n);
    let o = PP(r, e, t);
    o && (i = o);
  } else
    i = de("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function ch(r, e) {
  let t = null;
  if (r && Us(r)) {
    let i = ab(r, e);
    i && (t = i);
    let n = NP(r, e);
    n && (t = n);
  } else
    t = de(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function cp(r) {
  return Ft(r.protocol, !0);
}
function ub(r, e) {
  let t = !1;
  return (
    e && !r
      ? (t = !0)
      : r &&
        Gr(r) &&
        r.length &&
        r.forEach((i) => {
          t = cp(i);
        }),
    t
  );
}
function hb(r) {
  return typeof r == "number";
}
function pr(r) {
  return typeof r < "u" && typeof r !== null;
}
function lb(r) {
  return !(
    !r ||
    typeof r != "object" ||
    !r.code ||
    !ap(r.code, !1) ||
    !r.message ||
    !Ft(r.message, !1)
  );
}
function fb(r) {
  return !(sr(r) || !Ft(r.method, !1));
}
function db(r) {
  return !(
    sr(r) ||
    (sr(r.result) && sr(r.error)) ||
    !ap(r.id, !1) ||
    !Ft(r.jsonrpc, !1)
  );
}
function pb(r) {
  return !(sr(r) || !Ft(r.name, !1));
}
function up(r, e) {
  return !(!th(e) || !AP(r).includes(e));
}
function gb(r, e, t) {
  return Ft(t, !1) ? SP(r, e).includes(t) : !1;
}
function mb(r, e, t) {
  return Ft(t, !1) ? xP(r, e).includes(t) : !1;
}
function hp(r, e, t) {
  let i = null,
    n = FP(r),
    o = LP(e),
    c = Object.keys(n),
    l = Object.keys(o),
    p = Yv(Object.keys(r)),
    g = Yv(Object.keys(e)),
    y = p.filter((v) => !g.includes(v));
  return (
    y.length &&
      (i = de(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${y.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    Ms(c, l) ||
      (i = de(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${l.toString()}`
      )),
    Object.keys(e).forEach((v) => {
      if (!v.includes(":") || i) return;
      let A = Go(e[v].accounts);
      A.includes(v) ||
        (i = de(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${v}
        Required: ${v}
        Approved: ${A.toString()}`
        ));
    }),
    c.forEach((v) => {
      i ||
        (Ms(n[v].methods, o[v].methods)
          ? Ms(n[v].events, o[v].events) ||
            (i = de(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${v}`
            ))
          : (i = de(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${v}`
            )));
    }),
    i
  );
}
function FP(r) {
  let e = {};
  return (
    Object.keys(r).forEach((t) => {
      var i;
      t.includes(":")
        ? (e[t] = r[t])
        : (i = r[t].chains) == null ||
          i.forEach((n) => {
            e[n] = { methods: r[t].methods, events: r[t].events };
          });
    }),
    e
  );
}
function Yv(r) {
  return [...new Set(r.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function LP(r) {
  let e = {};
  return (
    Object.keys(r).forEach((t) => {
      t.includes(":")
        ? (e[t] = r[t])
        : Go(r[t].accounts)?.forEach((n) => {
            e[n] = {
              accounts: r[t].accounts.filter((o) => o.includes(`${n}:`)),
              methods: r[t].methods,
              events: r[t].events,
            };
          });
    }),
    e
  );
}
function yb(r, e) {
  return ap(r, !1) && r <= e.max && r >= e.min;
}
function lp() {
  let r = ec();
  return new Promise((e) => {
    switch (r) {
      case Nr.browser:
        e(BP());
        break;
      case Nr.reactNative:
        e(UP());
        break;
      case Nr.node:
        e(qP());
        break;
      default:
        e(!0);
    }
  });
}
function BP() {
  return cs() && navigator?.onLine;
}
function UP() {
  return C(this, null, function* () {
    return Fs() && typeof global < "u" && global != null && global.NetInfo
      ? (yield global == null ? void 0 : global.NetInfo.fetch())?.isConnected
      : !0;
  });
}
function qP() {
  return !0;
}
function vb(r) {
  switch (ec()) {
    case Nr.browser:
      jP(r);
      break;
    case Nr.reactNative:
      zP(r);
      break;
    case Nr.node:
      break;
  }
}
function jP(r) {
  !Fs() &&
    cs() &&
    (window.addEventListener("online", () => r(!0)),
    window.addEventListener("offline", () => r(!1)));
}
function zP(r) {
  Fs() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    global?.NetInfo.addEventListener((e) => r(e?.isConnected));
}
var Od = {},
  os = class {
    static get(e) {
      return Od[e];
    }
    static set(e, t) {
      Od[e] = t;
    }
    static delete(e) {
      delete Od[e];
    }
  };
var zn = Je(An());
var HP =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  KP =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  VP = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function GP(r, e) {
  if (
    r === "__proto__" ||
    (r === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    $P(r);
    return;
  }
  return e;
}
function $P(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function oc(r, e = {}) {
  if (typeof r != "string") return r;
  if (r[0] === '"' && r[r.length - 1] === '"' && r.indexOf("\\") === -1)
    return r.slice(1, -1);
  let t = r.trim();
  if (t.length <= 9)
    switch (t.toLowerCase()) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return Number.NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
  if (!VP.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (HP.test(r) || KP.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, GP);
    }
    return JSON.parse(r);
  } catch (i) {
    if (e.strict) throw i;
    return r;
  }
}
function JP(r) {
  return !r || typeof r.then != "function" ? Promise.resolve(r) : r;
}
function Wt(r, ...e) {
  try {
    return JP(r(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function WP(r) {
  let e = typeof r;
  return r === null || (e !== "object" && e !== "function");
}
function YP(r) {
  let e = Object.getPrototypeOf(r);
  return !e || e.isPrototypeOf(Object);
}
function ac(r) {
  if (WP(r)) return String(r);
  if (YP(r) || Array.isArray(r)) return JSON.stringify(r);
  if (typeof r.toJSON == "function") return ac(r.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
var fp = "base64:";
function wb(r) {
  return typeof r == "string" ? r : fp + XP(r);
}
function bb(r) {
  return typeof r != "string" || !r.startsWith(fp) ? r : QP(r.slice(fp.length));
}
function QP(r) {
  return globalThis.Buffer
    ? Buffer.from(r, "base64")
    : Uint8Array.from(globalThis.atob(r), (e) => e.codePointAt(0));
}
function XP(r) {
  return globalThis.Buffer
    ? Buffer.from(r).toString("base64")
    : globalThis.btoa(String.fromCodePoint(...r));
}
function Ar(r) {
  return (
    (r &&
      r
        .split("?")[0]
        ?.replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")) ||
    ""
  );
}
function _b(...r) {
  return Ar(r.join(":"));
}
function cc(r) {
  return (r = Ar(r)), r ? r + ":" : "";
}
function Eb(r, e) {
  if (e === void 0) return !0;
  let t = 0,
    i = r.indexOf(":");
  for (; i > -1; ) t++, (i = r.indexOf(":", i + 1));
  return t <= e;
}
function Ab(r, e) {
  return e
    ? r.startsWith(e) && r[r.length - 1] !== "$"
    : r[r.length - 1] !== "$";
}
var ZP = "memory",
  e7 = () => {
    let r = new Map();
    return {
      name: ZP,
      getInstance: () => r,
      hasItem(e) {
        return r.has(e);
      },
      getItem(e) {
        return r.get(e) ?? null;
      },
      getItemRaw(e) {
        return r.get(e) ?? null;
      },
      setItem(e, t) {
        r.set(e, t);
      },
      setItemRaw(e, t) {
        r.set(e, t);
      },
      removeItem(e) {
        r.delete(e);
      },
      getKeys() {
        return [...r.keys()];
      },
      clear() {
        r.clear();
      },
      dispose() {
        r.clear();
      },
    };
  };
function Ib(r = {}) {
  let e = {
      mounts: { "": r.driver || e7() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (y) => {
      for (let v of e.mountpoints)
        if (y.startsWith(v))
          return {
            base: v,
            relativeKey: y.slice(v.length),
            driver: e.mounts[v],
          };
      return { base: "", relativeKey: y, driver: e.mounts[""] };
    },
    i = (y, v) =>
      e.mountpoints
        .filter((A) => A.startsWith(y) || (v && y.startsWith(A)))
        .map((A) => ({
          relativeBase: y.length > A.length ? y.slice(A.length) : void 0,
          mountpoint: A,
          driver: e.mounts[A],
        })),
    n = (y, v) => {
      if (e.watching) {
        v = Ar(v);
        for (let A of e.watchListeners) A(y, v);
      }
    },
    o = () =>
      C(this, null, function* () {
        if (!e.watching) {
          e.watching = !0;
          for (let y in e.mounts) e.unwatch[y] = yield Sb(e.mounts[y], n, y);
        }
      }),
    c = () =>
      C(this, null, function* () {
        if (e.watching) {
          for (let y in e.unwatch) yield e.unwatch[y]();
          (e.unwatch = {}), (e.watching = !1);
        }
      }),
    l = (y, v, A) => {
      let E = new Map(),
        P = (T) => {
          let L = E.get(T.base);
          return (
            L ||
              ((L = { driver: T.driver, base: T.base, items: [] }),
              E.set(T.base, L)),
            L
          );
        };
      for (let T of y) {
        let L = typeof T == "string",
          H = Ar(L ? T : T.key),
          Q = L ? void 0 : T.value,
          J = L || !T.options ? v : Me(Me({}, v), T.options),
          G = t(H);
        P(G).items.push({
          key: H,
          value: Q,
          relativeKey: G.relativeKey,
          options: J,
        });
      }
      return Promise.all([...E.values()].map((T) => A(T))).then((T) =>
        T.flat()
      );
    },
    p = {
      hasItem(y, v = {}) {
        y = Ar(y);
        let { relativeKey: A, driver: E } = t(y);
        return Wt(E.hasItem, A, v);
      },
      getItem(y, v = {}) {
        y = Ar(y);
        let { relativeKey: A, driver: E } = t(y);
        return Wt(E.getItem, A, v).then((P) => oc(P));
      },
      getItems(y, v = {}) {
        return l(y, v, (A) =>
          A.driver.getItems
            ? Wt(
                A.driver.getItems,
                A.items.map((E) => ({
                  key: E.relativeKey,
                  options: E.options,
                })),
                v
              ).then((E) =>
                E.map((P) => ({ key: _b(A.base, P.key), value: oc(P.value) }))
              )
            : Promise.all(
                A.items.map((E) =>
                  Wt(A.driver.getItem, E.relativeKey, E.options).then((P) => ({
                    key: E.key,
                    value: oc(P),
                  }))
                )
              )
        );
      },
      getItemRaw(y, v = {}) {
        y = Ar(y);
        let { relativeKey: A, driver: E } = t(y);
        return E.getItemRaw
          ? Wt(E.getItemRaw, A, v)
          : Wt(E.getItem, A, v).then((P) => bb(P));
      },
      setItem(E, P) {
        return C(this, arguments, function* (y, v, A = {}) {
          if (v === void 0) return p.removeItem(y);
          y = Ar(y);
          let { relativeKey: T, driver: L } = t(y);
          L.setItem &&
            (yield Wt(L.setItem, T, ac(v), A), L.watch || n("update", y));
        });
      },
      setItems(y, v) {
        return C(this, null, function* () {
          yield l(y, v, (A) =>
            C(this, null, function* () {
              if (A.driver.setItems)
                return Wt(
                  A.driver.setItems,
                  A.items.map((E) => ({
                    key: E.relativeKey,
                    value: ac(E.value),
                    options: E.options,
                  })),
                  v
                );
              A.driver.setItem &&
                (yield Promise.all(
                  A.items.map((E) =>
                    Wt(A.driver.setItem, E.relativeKey, ac(E.value), E.options)
                  )
                ));
            })
          );
        });
      },
      setItemRaw(E, P) {
        return C(this, arguments, function* (y, v, A = {}) {
          if (v === void 0) return p.removeItem(y, A);
          y = Ar(y);
          let { relativeKey: T, driver: L } = t(y);
          if (L.setItemRaw) yield Wt(L.setItemRaw, T, v, A);
          else if (L.setItem) yield Wt(L.setItem, T, wb(v), A);
          else return;
          L.watch || n("update", y);
        });
      },
      removeItem(A) {
        return C(this, arguments, function* (y, v = {}) {
          typeof v == "boolean" && (v = { removeMeta: v }), (y = Ar(y));
          let { relativeKey: E, driver: P } = t(y);
          P.removeItem &&
            (yield Wt(P.removeItem, E, v),
            (v.removeMeta || v.removeMata) &&
              (yield Wt(P.removeItem, E + "$", v)),
            P.watch || n("remove", y));
        });
      },
      getMeta(A) {
        return C(this, arguments, function* (y, v = {}) {
          typeof v == "boolean" && (v = { nativeOnly: v }), (y = Ar(y));
          let { relativeKey: E, driver: P } = t(y),
            T = Object.create(null);
          if (
            (P.getMeta && Object.assign(T, yield Wt(P.getMeta, E, v)),
            !v.nativeOnly)
          ) {
            let L = yield Wt(P.getItem, E + "$", v).then((H) => oc(H));
            L &&
              typeof L == "object" &&
              (typeof L.atime == "string" && (L.atime = new Date(L.atime)),
              typeof L.mtime == "string" && (L.mtime = new Date(L.mtime)),
              Object.assign(T, L));
          }
          return T;
        });
      },
      setMeta(y, v, A = {}) {
        return this.setItem(y + "$", v, A);
      },
      removeMeta(y, v = {}) {
        return this.removeItem(y + "$", v);
      },
      getKeys(A) {
        return C(this, arguments, function* (y, v = {}) {
          y = cc(y);
          let E = i(y, !0),
            P = [],
            T = [],
            L = !0;
          for (let Q of E) {
            Q.driver.flags?.maxDepth || (L = !1);
            let J = yield Wt(Q.driver.getKeys, Q.relativeBase, v);
            for (let G of J) {
              let W = Q.mountpoint + Ar(G);
              P.some((Z) => W.startsWith(Z)) || T.push(W);
            }
            P = [Q.mountpoint, ...P.filter((G) => !G.startsWith(Q.mountpoint))];
          }
          let H = v.maxDepth !== void 0 && !L;
          return T.filter((Q) => (!H || Eb(Q, v.maxDepth)) && Ab(Q, y));
        });
      },
      clear(A) {
        return C(this, arguments, function* (y, v = {}) {
          (y = cc(y)),
            yield Promise.all(
              i(y, !1).map((E) =>
                C(this, null, function* () {
                  if (E.driver.clear)
                    return Wt(E.driver.clear, E.relativeBase, v);
                  if (E.driver.removeItem) {
                    let P = yield E.driver.getKeys(E.relativeBase || "", v);
                    return Promise.all(P.map((T) => E.driver.removeItem(T, v)));
                  }
                })
              )
            );
        });
      },
      dispose() {
        return C(this, null, function* () {
          yield Promise.all(Object.values(e.mounts).map((y) => xb(y)));
        });
      },
      watch(y) {
        return C(this, null, function* () {
          return (
            yield o(),
            e.watchListeners.push(y),
            () =>
              C(this, null, function* () {
                (e.watchListeners = e.watchListeners.filter((v) => v !== y)),
                  e.watchListeners.length === 0 && (yield c());
              })
          );
        });
      },
      unwatch() {
        return C(this, null, function* () {
          (e.watchListeners = []), yield c();
        });
      },
      mount(y, v) {
        if (((y = cc(y)), y && e.mounts[y]))
          throw new Error(`already mounted at ${y}`);
        return (
          y &&
            (e.mountpoints.push(y),
            e.mountpoints.sort((A, E) => E.length - A.length)),
          (e.mounts[y] = v),
          e.watching &&
            Promise.resolve(Sb(v, n, y))
              .then((A) => {
                e.unwatch[y] = A;
              })
              .catch(console.error),
          p
        );
      },
      unmount(y, v = !0) {
        return C(this, null, function* () {
          (y = cc(y)),
            !(!y || !e.mounts[y]) &&
              (e.watching &&
                y in e.unwatch &&
                (e.unwatch[y]?.(), delete e.unwatch[y]),
              v && (yield xb(e.mounts[y])),
              (e.mountpoints = e.mountpoints.filter((A) => A !== y)),
              delete e.mounts[y]);
        });
      },
      getMount(y = "") {
        y = Ar(y) + ":";
        let v = t(y);
        return { driver: v.driver, base: v.base };
      },
      getMounts(y = "", v = {}) {
        return (
          (y = Ar(y)),
          i(y, v.parents).map((E) => ({ driver: E.driver, base: E.mountpoint }))
        );
      },
      keys: (y, v = {}) => p.getKeys(y, v),
      get: (y, v = {}) => p.getItem(y, v),
      set: (y, v, A = {}) => p.setItem(y, v, A),
      has: (y, v = {}) => p.hasItem(y, v),
      del: (y, v = {}) => p.removeItem(y, v),
      remove: (y, v = {}) => p.removeItem(y, v),
    };
  return p;
}
function Sb(r, e, t) {
  return r.watch ? r.watch((i, n) => e(i, t + n)) : () => {};
}
function xb(r) {
  return C(this, null, function* () {
    typeof r.dispose == "function" && (yield Wt(r.dispose));
  });
}
function qs(r) {
  return new Promise((e, t) => {
    (r.oncomplete = r.onsuccess = () => e(r.result)),
      (r.onabort = r.onerror = () => t(r.error));
  });
}
function pp(r, e) {
  let t,
    i = () => {
      if (t) return t;
      let n = indexedDB.open(r);
      return (
        (n.onupgradeneeded = () => n.result.createObjectStore(e)),
        (t = qs(n)),
        t.then(
          (o) => {
            o.onclose = () => (t = void 0);
          },
          () => {}
        ),
        t
      );
    };
  return (n, o) => i().then((c) => o(c.transaction(e, n).objectStore(e)));
}
var dp;
function uc() {
  return dp || (dp = pp("keyval-store", "keyval")), dp;
}
function gp(r, e = uc()) {
  return e("readonly", (t) => qs(t.get(r)));
}
function Db(r, e, t = uc()) {
  return t("readwrite", (i) => (i.put(e, r), qs(i.transaction)));
}
function Rb(r, e = uc()) {
  return e("readwrite", (t) => (t.delete(r), qs(t.transaction)));
}
function Cb(r = uc()) {
  return r("readwrite", (e) => (e.clear(), qs(e.transaction)));
}
function t7(r, e) {
  return (
    (r.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    qs(r.transaction)
  );
}
function Ob(r = uc()) {
  return r("readonly", (e) => {
    if (e.getAllKeys) return qs(e.getAllKeys());
    let t = [];
    return t7(e, (i) => t.push(i.key)).then(() => t);
  });
}
var r7 = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  i7 = (r) => {
    let e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, n) =>
      typeof n == "string" && n.match(/^\d+n$/)
        ? BigInt(n.substring(0, n.length - 1))
        : n
    );
  };
function Zi(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return i7(r);
  } catch {
    return r;
  }
}
function Sr(r) {
  return typeof r == "string" ? r : r7(r) || "";
}
var n7 = "idb-keyval",
  s7 = (r = {}) => {
    let e = r.base && r.base.length > 0 ? `${r.base}:` : "",
      t = (o) => e + o,
      i;
    return (
      r.dbName && r.storeName && (i = pp(r.dbName, r.storeName)),
      {
        name: n7,
        options: r,
        hasItem(o) {
          return C(this, null, function* () {
            return !(typeof (yield gp(t(o), i)) > "u");
          });
        },
        getItem(o) {
          return C(this, null, function* () {
            return (yield gp(t(o), i)) ?? null;
          });
        },
        setItem(o, c) {
          return Db(t(o), c, i);
        },
        removeItem(o) {
          return Rb(t(o), i);
        },
        getKeys() {
          return Ob(i);
        },
        clear() {
          return Cb(i);
        },
      }
    );
  },
  o7 = "WALLET_CONNECT_V2_INDEXED_DB",
  a7 = "keyvaluestorage",
  yp = class {
    constructor() {
      this.indexedDb = Ib({ driver: s7({ dbName: o7, storeName: a7 }) });
    }
    getKeys() {
      return C(this, null, function* () {
        return this.indexedDb.getKeys();
      });
    }
    getEntries() {
      return C(this, null, function* () {
        return (yield this.indexedDb.getItems(
          yield this.indexedDb.getKeys()
        )).map((e) => [e.key, e.value]);
      });
    }
    getItem(e) {
      return C(this, null, function* () {
        let t = yield this.indexedDb.getItem(e);
        if (t !== null) return t;
      });
    }
    setItem(e, t) {
      return C(this, null, function* () {
        yield this.indexedDb.setItem(e, Sr(t));
      });
    }
    removeItem(e) {
      return C(this, null, function* () {
        yield this.indexedDb.removeItem(e);
      });
    }
  },
  mp =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  uh = { exports: {} };
(function () {
  let r;
  function e() {}
  (r = e),
    (r.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (r.prototype.setItem = function (t, i) {
      this[t] = String(i);
    }),
    (r.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (r.prototype.clear = function () {
      let t = this;
      Object.keys(t).forEach(function (i) {
        (t[i] = void 0), delete t[i];
      });
    }),
    (r.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    r.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof mp < "u" && mp.localStorage
      ? (uh.exports = mp.localStorage)
      : typeof window < "u" && window.localStorage
      ? (uh.exports = window.localStorage)
      : (uh.exports = new e());
})();
function c7(r) {
  var e;
  return [r[0], Zi((e = r[1]) != null ? e : "")];
}
var vp = class {
    constructor() {
      this.localStorage = uh.exports;
    }
    getKeys() {
      return C(this, null, function* () {
        return Object.keys(this.localStorage);
      });
    }
    getEntries() {
      return C(this, null, function* () {
        return Object.entries(this.localStorage).map(c7);
      });
    }
    getItem(e) {
      return C(this, null, function* () {
        let t = this.localStorage.getItem(e);
        if (t !== null) return Zi(t);
      });
    }
    setItem(e, t) {
      return C(this, null, function* () {
        this.localStorage.setItem(e, Sr(t));
      });
    }
    removeItem(e) {
      return C(this, null, function* () {
        this.localStorage.removeItem(e);
      });
    }
  },
  u7 = "wc_storage_version",
  Pb = 1,
  h7 = (r, e, t) =>
    C(void 0, null, function* () {
      let i = u7,
        n = yield e.getItem(i);
      if (n && n >= Pb) {
        t(e);
        return;
      }
      let o = yield r.getKeys();
      if (!o.length) {
        t(e);
        return;
      }
      let c = [];
      for (; o.length; ) {
        let l = o.shift();
        if (!l) continue;
        let p = l.toLowerCase();
        if (
          p.includes("wc@") ||
          p.includes("walletconnect") ||
          p.includes("wc_") ||
          p.includes("wallet_connect")
        ) {
          let g = yield r.getItem(l);
          yield e.setItem(l, g), c.push(l);
        }
      }
      yield e.setItem(i, Pb), t(e), l7(r, c);
    }),
  l7 = (r, e) =>
    C(void 0, null, function* () {
      e.length &&
        e.forEach((t) =>
          C(void 0, null, function* () {
            yield r.removeItem(t);
          })
        );
    }),
  hh = class {
    constructor() {
      (this.initialized = !1),
        (this.setInitialized = (t) => {
          (this.storage = t), (this.initialized = !0);
        });
      let e = new vp();
      this.storage = e;
      try {
        let t = new yp();
        h7(e, t, this.setInitialized);
      } catch {
        this.initialized = !0;
      }
    }
    getKeys() {
      return C(this, null, function* () {
        return yield this.initialize(), this.storage.getKeys();
      });
    }
    getEntries() {
      return C(this, null, function* () {
        return yield this.initialize(), this.storage.getEntries();
      });
    }
    getItem(e) {
      return C(this, null, function* () {
        return yield this.initialize(), this.storage.getItem(e);
      });
    }
    setItem(e, t) {
      return C(this, null, function* () {
        return yield this.initialize(), this.storage.setItem(e, t);
      });
    }
    removeItem(e) {
      return C(this, null, function* () {
        return yield this.initialize(), this.storage.removeItem(e);
      });
    }
    initialize() {
      return C(this, null, function* () {
        this.initialized ||
          (yield new Promise((e) => {
            let t = setInterval(() => {
              this.initialized && (clearInterval(t), e());
            }, 20);
          }));
      });
    }
  };
var Nb = Je(An()),
  fh = Je(bo());
var Si = class {};
var wp = class extends Si {
    constructor(e) {
      super();
    }
  },
  Mb = fh.FIVE_SECONDS,
  Jo = { pulse: "heartbeat_pulse" },
  lh = class r extends wp {
    constructor(e) {
      super(e),
        (this.events = new Nb.EventEmitter()),
        (this.interval = Mb),
        (this.interval = e?.interval || Mb);
    }
    static init(e) {
      return C(this, null, function* () {
        let t = new r(e);
        return yield t.init(), t;
      });
    }
    init() {
      return C(this, null, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    initialize() {
      return C(this, null, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          (0, fh.toMiliseconds)(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(Jo.pulse);
    }
  };
var Ln = Je(Ep()),
  js = Je(Ep());
var S7 = { level: "info" },
  fc = "custom_context",
  Ip = 1e3 * 1024,
  Ap = class {
    constructor(e) {
      (this.nodeValue = e),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  gh = class {
    constructor(e) {
      (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      let t = new Ap(e);
      if (t.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
        );
      for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = t), (this.tail = t))
        : ((this.head = t), (this.tail = t)),
        this.lengthInNodes++,
        (this.sizeInBytes += t.size);
    }
    shift() {
      if (!this.head) return;
      let e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      let e = [],
        t = this.head;
      for (; t !== null; ) e.push(t.value), (t = t.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          let t = e.value;
          return (e = e.next), { done: !1, value: t };
        },
      };
    }
  },
  mh = class {
    constructor(e, t = Ip) {
      (this.level = e ?? "error"),
        (this.levelValue = Ln.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = t),
        (this.logs = new gh(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, t) {
      t === Ln.levels.values.error
        ? console.error(e)
        : t === Ln.levels.values.warn
        ? console.warn(e)
        : t === Ln.levels.values.debug
        ? console.debug(e)
        : t === Ln.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(Sr({ timestamp: new Date().toISOString(), log: e }));
      let t = typeof e == "string" ? JSON.parse(e).level : e.level;
      t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new gh(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      let t = this.getLogArray();
      return (
        t.push(Sr({ extraMetadata: e })),
        new Blob(t, { type: "application/json" })
      );
    }
  },
  Sp = class {
    constructor(e, t = Ip) {
      this.baseChunkLogger = new mh(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      let t = URL.createObjectURL(this.logsToBlob(e)),
        i = document.createElement("a");
      (i.href = t),
        (i.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        URL.revokeObjectURL(t);
    }
  },
  xp = class {
    constructor(e, t = Ip) {
      this.baseChunkLogger = new mh(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  },
  x7 = Object.defineProperty,
  I7 = Object.defineProperties,
  D7 = Object.getOwnPropertyDescriptors,
  jb = Object.getOwnPropertySymbols,
  R7 = Object.prototype.hasOwnProperty,
  C7 = Object.prototype.propertyIsEnumerable,
  zb = (r, e, t) =>
    e in r
      ? x7(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  yh = (r, e) => {
    for (var t in e || (e = {})) R7.call(e, t) && zb(r, t, e[t]);
    if (jb) for (var t of jb(e)) C7.call(e, t) && zb(r, t, e[t]);
    return r;
  },
  vh = (r, e) => I7(r, D7(e));
function zs(r) {
  return vh(yh({}, r), { level: r?.level || S7.level });
}
function O7(r, e = fc) {
  return r[e] || "";
}
function P7(r, e, t = fc) {
  return (r[t] = e), r;
}
function gr(r, e = fc) {
  let t = "";
  return (
    typeof r.bindings > "u" ? (t = O7(r, e)) : (t = r.bindings().context || ""),
    t
  );
}
function M7(r, e, t = fc) {
  let i = gr(r, t);
  return i.trim() ? `${i}/${e}` : e;
}
function mr(r, e, t = fc) {
  let i = M7(r, e, t),
    n = r.child({ context: i });
  return P7(n, i, t);
}
function N7(r) {
  var e, t;
  let i = new Sp((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: (0, Ln.default)(
      vh(yh({}, r.opts), {
        level: "trace",
        browser: vh(yh({}, (t = r.opts) == null ? void 0 : t.browser), {
          write: (n) => i.write(n),
        }),
      })
    ),
    chunkLoggerController: i,
  };
}
function T7(r) {
  var e;
  let t = new xp((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: (0, Ln.default)(vh(yh({}, r.opts), { level: "trace" }), t),
    chunkLoggerController: t,
  };
}
function kb(r) {
  return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string"
    ? { logger: r.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? N7(r)
    : T7(r);
}
var Hb = Je(An()),
  wh = class extends Si {
    constructor(e) {
      super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  };
var bh = class extends Si {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  _h = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  Eh = class extends Si {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  Ah = class extends Si {
    constructor(e) {
      super();
    }
  },
  Sh = class {
    constructor(e, t, i, n) {
      (this.core = e), (this.logger = t), (this.name = i);
    }
  };
var xh = class extends Si {
  constructor(e, t) {
    super(), (this.relayer = e), (this.logger = t);
  }
};
var Ih = class extends Si {
  constructor(e, t) {
    super(), (this.core = e), (this.logger = t);
  }
};
var Dh = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  Rh = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  };
var Ch = class {
  constructor(e) {
    (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
};
var Oh = class {
  constructor(e) {
    this.client = e;
  }
};
var gc = Je(o2()),
  v2 = Je(La()),
  w2 = Je(bo());
var a2 = "EdDSA",
  c2 = "JWT",
  Fp = ".",
  Lp = "base64url",
  u2 = "utf8",
  h2 = "utf8",
  l2 = ":",
  f2 = "did",
  d2 = "key",
  Bp = "base58btc",
  p2 = "z",
  g2 = "K36";
function Ph(r) {
  return $t(ir(Sr(r), u2), Lp);
}
function Mh(r) {
  let e = ir(g2, Bp),
    t = p2 + $t(So([e, r]), Bp);
  return [f2, d2, t].join(l2);
}
function W7(r) {
  return $t(r, Lp);
}
function m2(r) {
  return ir([Ph(r.header), Ph(r.payload)].join(Fp), h2);
}
function y2(r) {
  return [Ph(r.header), Ph(r.payload), W7(r.signature)].join(Fp);
}
function Up(r = (0, v2.randomBytes)(32)) {
  return gc.generateKeyPairFromSeed(r);
}
function b2(o, c, l, p) {
  return C(
    this,
    arguments,
    function* (r, e, t, i, n = (0, w2.fromMiliseconds)(Date.now())) {
      let g = { alg: a2, typ: c2 },
        y = Mh(i.publicKey),
        v = n + t,
        A = { iss: y, sub: r, aud: e, iat: n, exp: v },
        E = m2({ header: g, payload: A }),
        P = gc.sign(i.secretKey, E);
      return y2({ header: g, payload: A, signature: P });
    }
  );
}
var Ie = Je(bo());
var q2 = Je(An());
var Zt = {};
rr(Zt, {
  DEFAULT_ERROR: () => yc,
  IBaseJsonRpcProvider: () => zh,
  IEvents: () => bc,
  IJsonRpcConnection: () => Vp,
  IJsonRpcProvider: () => _c,
  INTERNAL_ERROR: () => Nh,
  INVALID_PARAMS: () => S2,
  INVALID_REQUEST: () => E2,
  METHOD_NOT_FOUND: () => A2,
  PARSE_ERROR: () => _2,
  RESERVED_ERROR_CODES: () => qp,
  SERVER_ERROR: () => mc,
  SERVER_ERROR_CODE_RANGE: () => Th,
  STANDARD_ERROR_MAP: () => hs,
  formatErrorMessage: () => B2,
  formatJsonRpcError: () => Un,
  formatJsonRpcRequest: () => rn,
  formatJsonRpcResult: () => ds,
  getBigIntRpcId: () => xi,
  getError: () => Lh,
  getErrorByCode: () => Bh,
  isHttpUrl: () => kh,
  isJsonRpcError: () => yr,
  isJsonRpcPayload: () => $p,
  isJsonRpcRequest: () => ea,
  isJsonRpcResponse: () => ps,
  isJsonRpcResult: () => $r,
  isJsonRpcValidationInvalid: () => DM,
  isLocalhostUrl: () => Gp,
  isNodeJs: () => L2,
  isReservedErrorCode: () => Fh,
  isServerErrorCode: () => X7,
  isValidDefaultRoute: () => qh,
  isValidErrorCode: () => x2,
  isValidLeadingWildcardRoute: () => EM,
  isValidRoute: () => _M,
  isValidTrailingWildcardRoute: () => AM,
  isValidWildcardRoute: () => jh,
  isWsUrl: () => Hh,
  parseConnectionError: () => vc,
  payloadId: () => tn,
  validateJsonRpcError: () => Z7,
});
var _2 = "PARSE_ERROR",
  E2 = "INVALID_REQUEST",
  A2 = "METHOD_NOT_FOUND",
  S2 = "INVALID_PARAMS",
  Nh = "INTERNAL_ERROR",
  mc = "SERVER_ERROR",
  qp = [-32700, -32600, -32601, -32602, -32603],
  Th = [-32e3, -32099],
  hs = {
    [_2]: { code: -32700, message: "Parse error" },
    [E2]: { code: -32600, message: "Invalid Request" },
    [A2]: { code: -32601, message: "Method not found" },
    [S2]: { code: -32602, message: "Invalid params" },
    [Nh]: { code: -32603, message: "Internal error" },
    [mc]: { code: -32e3, message: "Server error" },
  },
  yc = mc;
function X7(r) {
  return r <= Th[0] && r >= Th[1];
}
function Fh(r) {
  return qp.includes(r);
}
function x2(r) {
  return typeof r == "number";
}
function Lh(r) {
  return Object.keys(hs).includes(r) ? hs[r] : hs[yc];
}
function Bh(r) {
  let e = Object.values(hs).find((t) => t.code === r);
  return e || hs[yc];
}
function Z7(r) {
  if (typeof r.error.code > "u")
    return { valid: !1, error: "Missing code for JSON-RPC error" };
  if (typeof r.error.message > "u")
    return { valid: !1, error: "Missing message for JSON-RPC error" };
  if (!x2(r.error.code))
    return {
      valid: !1,
      error: `Invalid error code type for JSON-RPC: ${r.error.code}`,
    };
  if (Fh(r.error.code)) {
    let e = Bh(r.error.code);
    if (e.message !== hs[yc].message && r.error.message === e.message)
      return {
        valid: !1,
        error: `Invalid error code message for JSON-RPC: ${r.error.code}`,
      };
  }
  return { valid: !0 };
}
function vc(r, e, t) {
  return r.message.includes("getaddrinfo ENOTFOUND") ||
    r.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : r;
}
var xr = {};
rr(xr, { isNodeJs: () => L2 });
var F2 = Je(Kp());
kr(xr, Je(Kp()));
var L2 = F2.isNode;
kr(Zt, xr);
function tn(r = 3) {
  let e = Date.now() * Math.pow(10, r),
    t = Math.floor(Math.random() * Math.pow(10, r));
  return e + t;
}
function xi(r = 6) {
  return BigInt(tn(r));
}
function rn(r, e, t) {
  return { id: t || tn(), jsonrpc: "2.0", method: r, params: e };
}
function ds(r, e) {
  return { id: r, jsonrpc: "2.0", result: e };
}
function Un(r, e, t) {
  return { id: r, jsonrpc: "2.0", error: B2(e, t) };
}
function B2(r, e) {
  return typeof r > "u"
    ? Lh(Nh)
    : (typeof r == "string" &&
        (r = Object.assign(Object.assign({}, Lh(mc)), { message: r })),
      typeof e < "u" && (r.data = e),
      Fh(r.code) && (r = Bh(r.code)),
      r);
}
function _M(r) {
  return r.includes("*") ? jh(r) : !/\W/g.test(r);
}
function qh(r) {
  return r === "*";
}
function jh(r) {
  return qh(r)
    ? !0
    : !(
        !r.includes("*") ||
        r.split("*").length !== 2 ||
        r.split("*").filter((e) => e.trim() === "").length !== 1
      );
}
function EM(r) {
  return !qh(r) && jh(r) && !r.split("*")[0].trim();
}
function AM(r) {
  return !qh(r) && jh(r) && !r.split("*")[1].trim();
}
var bc = class {},
  Vp = class extends bc {
    constructor(e) {
      super();
    }
  },
  zh = class extends bc {
    constructor() {
      super();
    }
  },
  _c = class extends zh {
    constructor(e) {
      super();
    }
  };
var SM = "^https?:",
  xM = "^wss?:";
function IM(r) {
  let e = r.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function U2(r, e) {
  let t = IM(r);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function kh(r) {
  return U2(r, SM);
}
function Hh(r) {
  return U2(r, xM);
}
function Gp(r) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(r);
}
function $p(r) {
  return (
    typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0"
  );
}
function ea(r) {
  return $p(r) && "method" in r;
}
function ps(r) {
  return $p(r) && ($r(r) || yr(r));
}
function $r(r) {
  return "result" in r;
}
function yr(r) {
  return "error" in r;
}
function DM(r) {
  return "error" in r && r.valid === !1;
}
var Jr = class extends _c {
  constructor(e) {
    super(e),
      (this.events = new q2.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  connect() {
    return C(this, arguments, function* (e = this.connection) {
      yield this.open(e);
    });
  }
  disconnect() {
    return C(this, null, function* () {
      yield this.close();
    });
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  request(e, t) {
    return C(this, null, function* () {
      return this.requestStrict(
        rn(e.method, e.params || [], e.id || xi().toString()),
        t
      );
    });
  }
  requestStrict(e, t) {
    return C(this, null, function* () {
      return new Promise((i, n) =>
        C(this, null, function* () {
          if (!this.connection.connected)
            try {
              yield this.open();
            } catch (o) {
              n(o);
            }
          this.events.on(`${e.id}`, (o) => {
            yr(o) ? n(o.error) : i(o.result);
          });
          try {
            yield this.connection.send(e, t);
          } catch (o) {
            n(o);
          }
        })
      );
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      ps(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  open() {
    return C(this, arguments, function* (e = this.connection) {
      (this.connection === e && this.connection.connected) ||
        (this.connection.connected && this.close(),
        typeof e == "string" &&
          (yield this.connection.open(e), (e = this.connection)),
        (this.connection = this.setConnection(e)),
        yield this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"));
    });
  }
  close() {
    return C(this, null, function* () {
      yield this.connection.close();
    });
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
var K2 = Je(An());
var RM = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : z2(),
  CM = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  k2 = (r) => r.split("?")[0],
  H2 = 10,
  OM = RM(),
  Kh = class {
    constructor(e) {
      if (
        ((this.url = e),
        (this.events = new K2.EventEmitter()),
        (this.registering = !1),
        !Hh(e))
      )
        throw new Error(
          `Provided URL is not compatible with WebSocket connection: ${e}`
        );
      this.url = e;
    }
    get connected() {
      return typeof this.socket < "u";
    }
    get connecting() {
      return this.registering;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    open() {
      return C(this, arguments, function* (e = this.url) {
        yield this.register(e);
      });
    }
    close() {
      return C(this, null, function* () {
        return new Promise((e, t) => {
          if (typeof this.socket > "u") {
            t(new Error("Connection already closed"));
            return;
          }
          (this.socket.onclose = (i) => {
            this.onClose(i), e();
          }),
            this.socket.close();
        });
      });
    }
    send(e) {
      return C(this, null, function* () {
        typeof this.socket > "u" && (this.socket = yield this.register());
        try {
          this.socket.send(Sr(e));
        } catch (t) {
          this.onError(e.id, t);
        }
      });
    }
    register(e = this.url) {
      if (!Hh(e))
        throw new Error(
          `Provided URL is not compatible with WebSocket connection: ${e}`
        );
      if (this.registering) {
        let t = this.events.getMaxListeners();
        return (
          (this.events.listenerCount("register_error") >= t ||
            this.events.listenerCount("open") >= t) &&
            this.events.setMaxListeners(t + 1),
          new Promise((i, n) => {
            this.events.once("register_error", (o) => {
              this.resetMaxListeners(), n(o);
            }),
              this.events.once("open", () => {
                if ((this.resetMaxListeners(), typeof this.socket > "u"))
                  return n(
                    new Error("WebSocket connection is missing or invalid")
                  );
                i(this.socket);
              });
          })
        );
      }
      return (
        (this.url = e),
        (this.registering = !0),
        new Promise((t, i) => {
          let n = new URLSearchParams(e).get("origin"),
            o = (0, Zt.isReactNative)()
              ? { headers: { origin: n } }
              : { rejectUnauthorized: !Gp(e) },
            c = new OM(e, [], o);
          CM()
            ? (c.onerror = (l) => {
                let p = l;
                i(this.emitError(p.error));
              })
            : c.on("error", (l) => {
                i(this.emitError(l));
              }),
            (c.onopen = () => {
              this.onOpen(c), t(c);
            });
        })
      );
    }
    onOpen(e) {
      (e.onmessage = (t) => this.onPayload(t)),
        (e.onclose = (t) => this.onClose(t)),
        (this.socket = e),
        (this.registering = !1),
        this.events.emit("open");
    }
    onClose(e) {
      (this.socket = void 0),
        (this.registering = !1),
        this.events.emit("close", e);
    }
    onPayload(e) {
      if (typeof e.data > "u") return;
      let t = typeof e.data == "string" ? Zi(e.data) : e.data;
      this.events.emit("payload", t);
    }
    onError(e, t) {
      let i = this.parseError(t),
        n = i.message || i.toString(),
        o = Un(e, n);
      this.events.emit("payload", o);
    }
    parseError(e, t = this.url) {
      return vc(e, k2(t), "WS");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > H2 && this.events.setMaxListeners(H2);
    }
    emitError(e) {
      let t = this.parseError(
        new Error(
          e?.message || `WebSocket connection failed for host: ${k2(this.url)}`
        )
      );
      return this.events.emit("register_error", t), t;
    }
  };
var G3 = Je(x3()),
  $3 = Je(D3());
function cT(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n),
      c = o.charCodeAt(0);
    if (t[c] !== 255) throw new TypeError(o + " is ambiguous");
    t[c] = n;
  }
  var l = r.length,
    p = r.charAt(0),
    g = Math.log(l) / Math.log(256),
    y = Math.log(256) / Math.log(l);
  function v(P) {
    if (
      (P instanceof Uint8Array ||
        (ArrayBuffer.isView(P)
          ? (P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength))
          : Array.isArray(P) && (P = Uint8Array.from(P))),
      !(P instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (P.length === 0) return "";
    for (var T = 0, L = 0, H = 0, Q = P.length; H !== Q && P[H] === 0; )
      H++, T++;
    for (var J = ((Q - H) * y + 1) >>> 0, G = new Uint8Array(J); H !== Q; ) {
      for (
        var W = P[H], Z = 0, U = J - 1;
        (W !== 0 || Z < L) && U !== -1;
        U--, Z++
      )
        (W += (256 * G[U]) >>> 0), (G[U] = W % l >>> 0), (W = (W / l) >>> 0);
      if (W !== 0) throw new Error("Non-zero carry");
      (L = Z), H++;
    }
    for (var B = J - L; B !== J && G[B] === 0; ) B++;
    for (var ae = p.repeat(T); B < J; ++B) ae += r.charAt(G[B]);
    return ae;
  }
  function A(P) {
    if (typeof P != "string") throw new TypeError("Expected String");
    if (P.length === 0) return new Uint8Array();
    var T = 0;
    if (P[T] !== " ") {
      for (var L = 0, H = 0; P[T] === p; ) L++, T++;
      for (
        var Q = ((P.length - T) * g + 1) >>> 0, J = new Uint8Array(Q);
        P[T];

      ) {
        var G = t[P.charCodeAt(T)];
        if (G === 255) return;
        for (var W = 0, Z = Q - 1; (G !== 0 || W < H) && Z !== -1; Z--, W++)
          (G += (l * J[Z]) >>> 0),
            (J[Z] = G % 256 >>> 0),
            (G = (G / 256) >>> 0);
        if (G !== 0) throw new Error("Non-zero carry");
        (H = W), T++;
      }
      if (P[T] !== " ") {
        for (var U = Q - H; U !== Q && J[U] === 0; ) U++;
        for (var B = new Uint8Array(L + (Q - U)), ae = L; U !== Q; )
          B[ae++] = J[U++];
        return B;
      }
    }
  }
  function E(P) {
    var T = A(P);
    if (T) return T;
    throw new Error(`Non-${e} character`);
  }
  return { encode: v, decodeUnsafe: A, decode: E };
}
var uT = cT,
  hT = uT,
  J3 = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  lT = (r) => new TextEncoder().encode(r),
  fT = (r) => new TextDecoder().decode(r),
  h0 = class {
    constructor(e, t, i) {
      (this.name = e), (this.prefix = t), (this.baseEncode = i);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  l0 = class {
    constructor(e, t, i) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return W3(this, e);
    }
  },
  f0 = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return W3(this, e);
    }
    decode(e) {
      let t = e[0],
        i = this.decoders[t];
      if (i) return i.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  W3 = (r, e) =>
    new f0(
      Me(
        Me({}, r.decoders || { [r.prefix]: r }),
        e.decoders || { [e.prefix]: e }
      )
    ),
  d0 = class {
    constructor(e, t, i, n) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = i),
        (this.baseDecode = n),
        (this.encoder = new h0(e, t, i)),
        (this.decoder = new l0(e, t, n));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  rl = ({ name: r, prefix: e, encode: t, decode: i }) => new d0(r, e, t, i),
  Cc = ({ prefix: r, name: e, alphabet: t }) => {
    let { encode: i, decode: n } = hT(t, e);
    return rl({ prefix: r, name: e, encode: i, decode: (o) => J3(n(o)) });
  },
  dT = (r, e, t, i) => {
    let n = {};
    for (let y = 0; y < e.length; ++y) n[e[y]] = y;
    let o = r.length;
    for (; r[o - 1] === "="; ) --o;
    let c = new Uint8Array(((o * t) / 8) | 0),
      l = 0,
      p = 0,
      g = 0;
    for (let y = 0; y < o; ++y) {
      let v = n[r[y]];
      if (v === void 0) throw new SyntaxError(`Non-${i} character`);
      (p = (p << t) | v),
        (l += t),
        l >= 8 && ((l -= 8), (c[g++] = 255 & (p >> l)));
    }
    if (l >= t || 255 & (p << (8 - l)))
      throw new SyntaxError("Unexpected end of data");
    return c;
  },
  pT = (r, e, t) => {
    let i = e[e.length - 1] === "=",
      n = (1 << t) - 1,
      o = "",
      c = 0,
      l = 0;
    for (let p = 0; p < r.length; ++p)
      for (l = (l << 8) | r[p], c += 8; c > t; )
        (c -= t), (o += e[n & (l >> c)]);
    if ((c && (o += e[n & (l << (t - c))]), i))
      for (; (o.length * t) & 7; ) o += "=";
    return o;
  },
  ar = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    rl({
      prefix: e,
      name: r,
      encode(n) {
        return pT(n, i, t);
      },
      decode(n) {
        return dT(n, i, t, r);
      },
    }),
  gT = rl({
    prefix: "\0",
    name: "identity",
    encode: (r) => fT(r),
    decode: (r) => lT(r),
  }),
  mT = Object.freeze({ __proto__: null, identity: gT }),
  yT = ar({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  vT = Object.freeze({ __proto__: null, base2: yT }),
  wT = ar({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  bT = Object.freeze({ __proto__: null, base8: wT }),
  _T = Cc({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  ET = Object.freeze({ __proto__: null, base10: _T }),
  AT = ar({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  ST = ar({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  xT = Object.freeze({ __proto__: null, base16: AT, base16upper: ST }),
  IT = ar({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  DT = ar({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  RT = ar({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  CT = ar({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  OT = ar({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  PT = ar({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  MT = ar({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  NT = ar({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  TT = ar({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  FT = Object.freeze({
    __proto__: null,
    base32: IT,
    base32upper: DT,
    base32pad: RT,
    base32padupper: CT,
    base32hex: OT,
    base32hexupper: PT,
    base32hexpad: MT,
    base32hexpadupper: NT,
    base32z: TT,
  }),
  LT = Cc({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  BT = Cc({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  UT = Object.freeze({ __proto__: null, base36: LT, base36upper: BT }),
  qT = Cc({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  jT = Cc({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  zT = Object.freeze({ __proto__: null, base58btc: qT, base58flickr: jT }),
  kT = ar({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  HT = ar({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  KT = ar({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  VT = ar({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  GT = Object.freeze({
    __proto__: null,
    base64: kT,
    base64pad: HT,
    base64url: KT,
    base64urlpad: VT,
  }),
  Y3 = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  $T = Y3.reduce((r, e, t) => ((r[t] = e), r), []),
  JT = Y3.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function WT(r) {
  return r.reduce((e, t) => ((e += $T[t]), e), "");
}
function YT(r) {
  let e = [];
  for (let t of r) {
    let i = JT[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
var QT = rl({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: WT,
    decode: YT,
  }),
  XT = Object.freeze({ __proto__: null, base256emoji: QT }),
  ZT = Q3,
  R3 = 128,
  e9 = 127,
  t9 = ~e9,
  r9 = Math.pow(2, 31);
function Q3(r, e, t) {
  (e = e || []), (t = t || 0);
  for (var i = t; r >= r9; ) (e[t++] = (r & 255) | R3), (r /= 128);
  for (; r & t9; ) (e[t++] = (r & 255) | R3), (r >>>= 7);
  return (e[t] = r | 0), (Q3.bytes = t - i + 1), e;
}
var i9 = p0,
  n9 = 128,
  C3 = 127;
function p0(r, i) {
  var t = 0,
    i = i || 0,
    n = 0,
    o = i,
    c,
    l = r.length;
  do {
    if (o >= l)
      throw ((p0.bytes = 0), new RangeError("Could not decode varint"));
    (c = r[o++]),
      (t += n < 28 ? (c & C3) << n : (c & C3) * Math.pow(2, n)),
      (n += 7);
  } while (c >= n9);
  return (p0.bytes = o - i), t;
}
var s9 = Math.pow(2, 7),
  o9 = Math.pow(2, 14),
  a9 = Math.pow(2, 21),
  c9 = Math.pow(2, 28),
  u9 = Math.pow(2, 35),
  h9 = Math.pow(2, 42),
  l9 = Math.pow(2, 49),
  f9 = Math.pow(2, 56),
  d9 = Math.pow(2, 63),
  p9 = function (r) {
    return r < s9
      ? 1
      : r < o9
      ? 2
      : r < a9
      ? 3
      : r < c9
      ? 4
      : r < u9
      ? 5
      : r < h9
      ? 6
      : r < l9
      ? 7
      : r < f9
      ? 8
      : r < d9
      ? 9
      : 10;
  },
  g9 = { encode: ZT, decode: i9, encodingLength: p9 },
  X3 = g9,
  O3 = (r, e, t = 0) => (X3.encode(r, e, t), e),
  P3 = (r) => X3.encodingLength(r),
  g0 = (r, e) => {
    let t = e.byteLength,
      i = P3(r),
      n = i + P3(t),
      o = new Uint8Array(n + t);
    return O3(r, o, 0), O3(t, o, i), o.set(e, n), new m0(r, t, e, o);
  },
  m0 = class {
    constructor(e, t, i, n) {
      (this.code = e), (this.size = t), (this.digest = i), (this.bytes = n);
    }
  },
  Z3 = ({ name: r, code: e, encode: t }) => new y0(r, e, t),
  y0 = class {
    constructor(e, t, i) {
      (this.name = e), (this.code = t), (this.encode = i);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? g0(this.code, t)
          : t.then((i) => g0(this.code, i));
      } else throw Error("Unknown type, must be binary type");
    }
  },
  e_ = (r) => (e) =>
    C(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(r, e));
    }),
  m9 = Z3({ name: "sha2-256", code: 18, encode: e_("SHA-256") }),
  y9 = Z3({ name: "sha2-512", code: 19, encode: e_("SHA-512") }),
  v9 = Object.freeze({ __proto__: null, sha256: m9, sha512: y9 }),
  t_ = 0,
  w9 = "identity",
  r_ = J3,
  b9 = (r) => g0(t_, r_(r)),
  _9 = { code: t_, name: w9, encode: r_, digest: b9 },
  E9 = Object.freeze({ __proto__: null, identity: _9 });
new TextEncoder(), new TextDecoder();
var M3 = Me(
  Me(Me(Me(Me(Me(Me(Me(Me(Me({}, mT), vT), bT), ET), xT), FT), UT), zT), GT),
  XT
);
Me(Me({}, v9), E9);
function A9(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function i_(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
var N3 = i_(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  a0 = i_(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      let e = A9(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  S9 = Me(
    {
      utf8: N3,
      "utf-8": N3,
      hex: M3.base16,
      latin1: a0,
      ascii: a0,
      binary: a0,
    },
    M3
  );
function x9(r, e = "utf8") {
  let t = S9[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
var n_ = "wc",
  I9 = 2,
  M0 = "core",
  ys = `${n_}@2:${M0}:`,
  D9 = { name: M0, logger: "error" },
  R9 = { database: ":memory:" },
  C9 = "crypto",
  T3 = "client_ed25519_seed",
  O9 = Ie.ONE_DAY,
  P9 = "keychain",
  M9 = "0.3",
  N9 = "messages",
  T9 = "0.3",
  F9 = Ie.SIX_HOURS,
  L9 = "publisher",
  N0 = "irn",
  B9 = "error",
  s_ = "wss://relay.walletconnect.com",
  F3 = "wss://relay.walletconnect.org",
  U9 = "relayer",
  Ir = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  q9 = "_subscription",
  hi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  j9 = Ie.ONE_SECOND;
var z9 = "2.13.0",
  k9 = 1e4,
  H9 = "0.3",
  K9 = "WALLETCONNECT_CLIENT_ID",
  sn = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  };
var V9 = "subscription",
  G9 = "0.3",
  $9 = Ie.FIVE_SECONDS * 1e3,
  J9 = "pairing",
  W9 = "0.3";
var Dc = {
    wc_pairingDelete: {
      req: { ttl: Ie.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: Ie.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: Ie.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: Ie.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: Ie.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: Ie.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Ws = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Ii = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  Y9 = "history",
  Q9 = "0.3",
  X9 = "expirer",
  Wr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  Z9 = "0.3";
var c0 = "verify-api",
  Ys = "https://verify.walletconnect.com",
  v0 = "https://verify.walletconnect.org",
  eF = [Ys, v0],
  tF = "echo",
  rF = "https://echo.walletconnect.com",
  w0 = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        (this.keychain = new Map()),
        (this.name = P9),
        (this.version = M9),
        (this.initialized = !1),
        (this.storagePrefix = ys),
        (this.init = () =>
          C(this, null, function* () {
            if (!this.initialized) {
              let i = yield this.getKeyChain();
              typeof i < "u" && (this.keychain = i), (this.initialized = !0);
            }
          })),
        (this.has = (i) => (this.isInitialized(), this.keychain.has(i))),
        (this.set = (i, n) =>
          C(this, null, function* () {
            this.isInitialized(), this.keychain.set(i, n), yield this.persist();
          })),
        (this.get = (i) => {
          this.isInitialized();
          let n = this.keychain.get(i);
          if (typeof n > "u") {
            let { message: o } = de("NO_MATCHING_KEY", `${this.name}: ${i}`);
            throw new Error(o);
          }
          return n;
        }),
        (this.del = (i) =>
          C(this, null, function* () {
            this.isInitialized(), this.keychain.delete(i), yield this.persist();
          })),
        (this.core = e),
        (this.logger = mr(t, this.name));
    }
    get context() {
      return gr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    setKeyChain(e) {
      return C(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, kd(e));
      });
    }
    getKeyChain() {
      return C(this, null, function* () {
        let e = yield this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Hd(e) : void 0;
      });
    }
    persist() {
      return C(this, null, function* () {
        yield this.setKeyChain(this.keychain);
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  b0 = class {
    constructor(e, t, i) {
      (this.core = e),
        (this.logger = t),
        (this.name = C9),
        (this.initialized = !1),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (yield this.keychain.init(), (this.initialized = !0));
          })),
        (this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n))),
        (this.getClientId = () =>
          C(this, null, function* () {
            this.isInitialized();
            let n = yield this.getClientSeed(),
              o = Up(n);
            return Mh(o.publicKey);
          })),
        (this.generateKeyPair = () => {
          this.isInitialized();
          let n = Yw();
          return this.setPrivateKey(n.publicKey, n.privateKey);
        }),
        (this.signJWT = (n) =>
          C(this, null, function* () {
            this.isInitialized();
            let o = yield this.getClientSeed(),
              c = Up(o),
              l = sh();
            return yield b2(l, n, O9, c);
          })),
        (this.generateSharedKey = (n, o, c) => {
          this.isInitialized();
          let l = this.getPrivateKey(n),
            p = Qw(l, o);
          return this.setSymKey(p, c);
        }),
        (this.setSymKey = (n, o) =>
          C(this, null, function* () {
            this.isInitialized();
            let c = o || Ho(n);
            return yield this.keychain.set(c, n), c;
          })),
        (this.deleteKeyPair = (n) =>
          C(this, null, function* () {
            this.isInitialized(), yield this.keychain.del(n);
          })),
        (this.deleteSymKey = (n) =>
          C(this, null, function* () {
            this.isInitialized(), yield this.keychain.del(n);
          })),
        (this.encode = (n, o, c) =>
          C(this, null, function* () {
            this.isInitialized();
            let l = ip(c),
              p = Sr(o);
            if (np(l)) {
              let A = l.senderPublicKey,
                E = l.receiverPublicKey;
              n = yield this.generateSharedKey(A, E);
            }
            let g = this.getSymKey(n),
              { type: y, senderPublicKey: v } = l;
            return Xw({ type: y, symKey: g, message: p, senderPublicKey: v });
          })),
        (this.decode = (n, o, c) =>
          C(this, null, function* () {
            this.isInitialized();
            let l = eb(o, c);
            if (np(l)) {
              let p = l.receiverPublicKey,
                g = l.senderPublicKey;
              n = yield this.generateSharedKey(p, g);
            }
            try {
              let p = this.getSymKey(n),
                g = Zw({ symKey: p, encoded: o });
              return Zi(g);
            } catch (p) {
              this.logger.error(
                `Failed to decode message from topic: '${n}', clientId: '${yield this.getClientId()}'`
              ),
                this.logger.error(p);
            }
          })),
        (this.getPayloadType = (n) => {
          let o = sc(n);
          return Ko(o.type);
        }),
        (this.getPayloadSenderPublicKey = (n) => {
          let o = sc(n);
          return o.senderPublicKey ? $t(o.senderPublicKey, dr) : void 0;
        }),
        (this.core = e),
        (this.logger = mr(t, this.name)),
        (this.keychain = i || new w0(this.core, this.logger));
    }
    get context() {
      return gr(this.logger);
    }
    setPrivateKey(e, t) {
      return C(this, null, function* () {
        return yield this.keychain.set(e, t), e;
      });
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    getClientSeed() {
      return C(this, null, function* () {
        let e = "";
        try {
          e = this.keychain.get(T3);
        } catch {
          (e = sh()), yield this.keychain.set(T3, e);
        }
        return x9(e, "base16");
      });
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  _0 = class extends _h {
    constructor(e, t) {
      super(e, t),
        (this.logger = e),
        (this.core = t),
        (this.messages = new Map()),
        (this.name = N9),
        (this.version = T9),
        (this.initialized = !1),
        (this.storagePrefix = ys),
        (this.init = () =>
          C(this, null, function* () {
            if (!this.initialized) {
              this.logger.trace("Initialized");
              try {
                let i = yield this.getRelayerMessages();
                typeof i < "u" && (this.messages = i),
                  this.logger.debug(
                    `Successfully Restored records for ${this.name}`
                  ),
                  this.logger.trace({
                    type: "method",
                    method: "restore",
                    size: this.messages.size,
                  });
              } catch (i) {
                this.logger.debug(`Failed to Restore records for ${this.name}`),
                  this.logger.error(i);
              } finally {
                this.initialized = !0;
              }
            }
          })),
        (this.set = (i, n) =>
          C(this, null, function* () {
            this.isInitialized();
            let o = Fn(n),
              c = this.messages.get(i);
            return (
              typeof c > "u" && (c = {}),
              typeof c[o] < "u" ||
                ((c[o] = n), this.messages.set(i, c), yield this.persist()),
              o
            );
          })),
        (this.get = (i) => {
          this.isInitialized();
          let n = this.messages.get(i);
          return typeof n > "u" && (n = {}), n;
        }),
        (this.has = (i, n) => {
          this.isInitialized();
          let o = this.get(i),
            c = Fn(n);
          return typeof o[c] < "u";
        }),
        (this.del = (i) =>
          C(this, null, function* () {
            this.isInitialized(), this.messages.delete(i), yield this.persist();
          })),
        (this.logger = mr(e, this.name)),
        (this.core = t);
    }
    get context() {
      return gr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    setRelayerMessages(e) {
      return C(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, kd(e));
      });
    }
    getRelayerMessages() {
      return C(this, null, function* () {
        let e = yield this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Hd(e) : void 0;
      });
    }
    persist() {
      return C(this, null, function* () {
        yield this.setRelayerMessages(this.messages);
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  E0 = class extends Eh {
    constructor(e, t) {
      super(e, t),
        (this.relayer = e),
        (this.logger = t),
        (this.events = new zn.EventEmitter()),
        (this.name = L9),
        (this.queue = new Map()),
        (this.publishTimeout = (0, Ie.toMiliseconds)(Ie.ONE_MINUTE)),
        (this.failedPublishTimeout = (0, Ie.toMiliseconds)(Ie.ONE_SECOND)),
        (this.needsTransportRestart = !1),
        (this.publish = (i, n, o) =>
          C(this, null, function* () {
            var c;
            this.logger.debug("Publishing Payload"),
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { topic: i, message: n, opts: o },
              });
            let l = o?.ttl || F9,
              p = oh(o),
              g = o?.prompt || !1,
              y = o?.tag || 0,
              v = o?.id || xi().toString(),
              A = {
                topic: i,
                message: n,
                opts: { ttl: l, relay: p, prompt: g, tag: y, id: v },
              },
              E = `Failed to publish payload, please try again. id:${v} tag:${y}`,
              P = Date.now(),
              T,
              L = 1;
            try {
              for (; T === void 0; ) {
                if (Date.now() - P > this.publishTimeout) throw new Error(E);
                this.logger.trace(
                  { id: v, attempts: L },
                  `publisher.publish - attempt ${L}`
                ),
                  (T = yield yield Ls(
                    this.rpcPublish(i, n, l, p, g, y, v).catch((H) =>
                      this.logger.warn(H)
                    ),
                    this.publishTimeout,
                    E
                  )),
                  L++,
                  T ||
                    (yield new Promise((H) =>
                      setTimeout(H, this.failedPublishTimeout)
                    ));
              }
              this.relayer.events.emit(Ir.publish, A),
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: v, topic: i, message: n, opts: o },
                });
            } catch (H) {
              if (
                (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(H),
                (c = o?.internal) != null && c.throwOnFailedPublish)
              )
                throw H;
              this.queue.set(v, A);
            }
          })),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.relayer = e),
        (this.logger = mr(t, this.name)),
        this.registerEventListeners();
    }
    get context() {
      return gr(this.logger);
    }
    rpcPublish(e, t, i, n, o, c, l) {
      var p, g, y, v;
      let A = {
        method: Vo(n.protocol).publish,
        params: { topic: e, message: t, ttl: i, prompt: o, tag: c },
        id: l,
      };
      return (
        sr((p = A.params) == null ? void 0 : p.prompt) &&
          ((g = A.params) == null || delete g.prompt),
        sr((y = A.params) == null ? void 0 : y.tag) &&
          ((v = A.params) == null || delete v.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "message",
          direction: "outgoing",
          request: A,
        }),
        this.relayer.request(A)
      );
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach((e) =>
        C(this, null, function* () {
          let { topic: t, message: i, opts: n } = e;
          yield this.publish(t, i, n);
        })
      );
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(Jo.pulse, () => {
        if (this.needsTransportRestart) {
          (this.needsTransportRestart = !1),
            this.relayer.events.emit(Ir.connection_stalled);
          return;
        }
        this.checkQueue();
      }),
        this.relayer.on(Ir.message_ack, (e) => {
          this.removeRequestFromQueue(e.id.toString());
        });
    }
  },
  A0 = class {
    constructor() {
      (this.map = new Map()),
        (this.set = (e, t) => {
          let i = this.get(e);
          this.exists(e, t) || this.map.set(e, [...i, t]);
        }),
        (this.get = (e) => this.map.get(e) || []),
        (this.exists = (e, t) => this.get(e).includes(t)),
        (this.delete = (e, t) => {
          if (typeof t > "u") {
            this.map.delete(e);
            return;
          }
          if (!this.map.has(e)) return;
          let i = this.get(e);
          if (!this.exists(e, t)) return;
          let n = i.filter((o) => o !== t);
          if (!n.length) {
            this.map.delete(e);
            return;
          }
          this.map.set(e, n);
        }),
        (this.clear = () => {
          this.map.clear();
        });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  },
  iF = Object.defineProperty,
  nF = Object.defineProperties,
  sF = Object.getOwnPropertyDescriptors,
  L3 = Object.getOwnPropertySymbols,
  oF = Object.prototype.hasOwnProperty,
  aF = Object.prototype.propertyIsEnumerable,
  B3 = (r, e, t) =>
    e in r
      ? iF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Rc = (r, e) => {
    for (var t in e || (e = {})) oF.call(e, t) && B3(r, t, e[t]);
    if (L3) for (var t of L3(e)) aF.call(e, t) && B3(r, t, e[t]);
    return r;
  },
  u0 = (r, e) => nF(r, sF(e)),
  S0 = class extends xh {
    constructor(e, t) {
      super(e, t),
        (this.relayer = e),
        (this.logger = t),
        (this.subscriptions = new Map()),
        (this.topicMap = new A0()),
        (this.events = new zn.EventEmitter()),
        (this.name = V9),
        (this.version = G9),
        (this.pending = new Map()),
        (this.cached = []),
        (this.initialized = !1),
        (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
        (this.pollingInterval = 20),
        (this.storagePrefix = ys),
        (this.subscribeTimeout = (0, Ie.toMiliseconds)(Ie.ONE_MINUTE)),
        (this.restartInProgress = !1),
        (this.batchSubscribeTopicsLimit = 500),
        (this.pendingBatchMessages = []),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              this.registerEventListeners(),
              (this.clientId = yield this.relayer.core.crypto.getClientId()));
          })),
        (this.subscribe = (i, n) =>
          C(this, null, function* () {
            yield this.restartToComplete(),
              this.isInitialized(),
              this.logger.debug("Subscribing Topic"),
              this.logger.trace({
                type: "method",
                method: "subscribe",
                params: { topic: i, opts: n },
              });
            try {
              let o = oh(n),
                c = { topic: i, relay: o };
              this.pending.set(i, c);
              let l = yield this.rpcSubscribe(i, o);
              return (
                typeof l == "string" &&
                  (this.onSubscribe(l, c),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: i, opts: n },
                  })),
                l
              );
            } catch (o) {
              throw (
                (this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(o),
                o)
              );
            }
          })),
        (this.unsubscribe = (i, n) =>
          C(this, null, function* () {
            yield this.restartToComplete(),
              this.isInitialized(),
              typeof n?.id < "u"
                ? yield this.unsubscribeById(i, n.id, n)
                : yield this.unsubscribeByTopic(i, n);
          })),
        (this.isSubscribed = (i) =>
          C(this, null, function* () {
            if (this.topics.includes(i)) return !0;
            let n = `${this.pendingSubscriptionWatchLabel}_${i}`;
            return yield new Promise((o, c) => {
              let l = new Ie.Watch();
              l.start(n);
              let p = setInterval(() => {
                !this.pending.has(i) &&
                  this.topics.includes(i) &&
                  (clearInterval(p), l.stop(n), o(!0)),
                  l.elapsed(n) >= $9 &&
                    (clearInterval(p),
                    l.stop(n),
                    c(new Error("Subscription resolution timeout")));
              }, this.pollingInterval);
            }).catch(() => !1);
          })),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.start = () =>
          C(this, null, function* () {
            yield this.onConnect();
          })),
        (this.stop = () =>
          C(this, null, function* () {
            yield this.onDisconnect();
          })),
        (this.restart = () =>
          C(this, null, function* () {
            (this.restartInProgress = !0),
              yield this.restore(),
              yield this.reset(),
              (this.restartInProgress = !1);
          })),
        (this.relayer = e),
        (this.logger = mr(t, this.name)),
        (this.clientId = "");
    }
    get context() {
      return gr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.relayer.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    hasSubscription(e, t) {
      let i = !1;
      try {
        i = this.getSubscription(e).topic === t;
      } catch {}
      return i;
    }
    onEnable() {
      (this.cached = []), (this.initialized = !0);
    }
    onDisable() {
      (this.cached = this.values),
        this.subscriptions.clear(),
        this.topicMap.clear();
    }
    unsubscribeByTopic(e, t) {
      return C(this, null, function* () {
        let i = this.topicMap.get(e);
        yield Promise.all(
          i.map((n) =>
            C(this, null, function* () {
              return yield this.unsubscribeById(e, n, t);
            })
          )
        );
      });
    }
    unsubscribeById(e, t, i) {
      return C(this, null, function* () {
        this.logger.debug("Unsubscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: { topic: e, id: t, opts: i },
          });
        try {
          let n = oh(i);
          yield this.rpcUnsubscribe(e, t, n);
          let o = ze("USER_DISCONNECTED", `${this.name}, ${e}`);
          yield this.onUnsubscribe(e, t, o),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
        } catch (n) {
          throw (
            (this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(n),
            n)
          );
        }
      });
    }
    rpcSubscribe(e, t) {
      return C(this, null, function* () {
        let i = { method: Vo(t.protocol).subscribe, params: { topic: e } };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        try {
          return (yield yield Ls(
            this.relayer.request(i).catch((n) => this.logger.warn(n)),
            this.subscribeTimeout
          ))
            ? Fn(e + this.clientId)
            : null;
        } catch {
          this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(Ir.connection_stalled);
        }
        return null;
      });
    }
    rpcBatchSubscribe(e) {
      return C(this, null, function* () {
        if (!e.length) return;
        let t = e[0].relay,
          i = {
            method: Vo(t.protocol).batchSubscribe,
            params: { topics: e.map((n) => n.topic) },
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        try {
          return yield yield Ls(
            this.relayer.request(i).catch((n) => this.logger.warn(n)),
            this.subscribeTimeout
          );
        } catch {
          this.relayer.events.emit(Ir.connection_stalled);
        }
      });
    }
    rpcBatchFetchMessages(e) {
      return C(this, null, function* () {
        if (!e.length) return;
        let t = e[0].relay,
          i = {
            method: Vo(t.protocol).batchFetchMessages,
            params: { topics: e.map((o) => o.topic) },
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        let n;
        try {
          n = yield yield Ls(
            this.relayer.request(i).catch((o) => this.logger.warn(o)),
            this.subscribeTimeout
          );
        } catch {
          this.relayer.events.emit(Ir.connection_stalled);
        }
        return n;
      });
    }
    rpcUnsubscribe(e, t, i) {
      let n = {
        method: Vo(i.protocol).unsubscribe,
        params: { topic: e, id: t },
      };
      return (
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: n,
        }),
        this.relayer.request(n)
      );
    }
    onSubscribe(e, t) {
      this.setSubscription(e, u0(Rc({}, t), { id: e })),
        this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
      e.length &&
        e.forEach((t) => {
          this.setSubscription(t.id, Rc({}, t)), this.pending.delete(t.topic);
        });
    }
    onUnsubscribe(e, t, i) {
      return C(this, null, function* () {
        this.events.removeAllListeners(t),
          this.hasSubscription(t, e) && this.deleteSubscription(t, i),
          yield this.relayer.messages.del(e);
      });
    }
    setRelayerSubscriptions(e) {
      return C(this, null, function* () {
        yield this.relayer.core.storage.setItem(this.storageKey, e);
      });
    }
    getRelayerSubscriptions() {
      return C(this, null, function* () {
        return yield this.relayer.core.storage.getItem(this.storageKey);
      });
    }
    setSubscription(e, t) {
      this.logger.debug("Setting subscription"),
        this.logger.trace({
          type: "method",
          method: "setSubscription",
          id: e,
          subscription: t,
        }),
        this.addSubscription(e, t);
    }
    addSubscription(e, t) {
      this.subscriptions.set(e, Rc({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(sn.created, t);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"),
        this.logger.trace({ type: "method", method: "getSubscription", id: e });
      let t = this.subscriptions.get(e);
      if (!t) {
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(i);
      }
      return t;
    }
    deleteSubscription(e, t) {
      this.logger.debug("Deleting subscription"),
        this.logger.trace({
          type: "method",
          method: "deleteSubscription",
          id: e,
          reason: t,
        });
      let i = this.getSubscription(e);
      this.subscriptions.delete(e),
        this.topicMap.delete(i.topic, e),
        this.events.emit(sn.deleted, u0(Rc({}, i), { reason: t }));
    }
    persist() {
      return C(this, null, function* () {
        yield this.setRelayerSubscriptions(this.values),
          this.events.emit(sn.sync);
      });
    }
    reset() {
      return C(this, null, function* () {
        if (this.cached.length) {
          let e = Math.ceil(
            this.cached.length / this.batchSubscribeTopicsLimit
          );
          for (let t = 0; t < e; t++) {
            let i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
            yield this.batchFetchMessages(i), yield this.batchSubscribe(i);
          }
        }
        this.events.emit(sn.resubscribed);
      });
    }
    restore() {
      return C(this, null, function* () {
        try {
          let e = yield this.getRelayerSubscriptions();
          if (typeof e > "u" || !e.length) return;
          if (this.subscriptions.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (
              (this.logger.error(t),
              this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
              new Error(t))
            );
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored subscriptions for ${this.name}`
            ),
            this.logger.trace({
              type: "method",
              method: "restore",
              subscriptions: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    batchSubscribe(e) {
      return C(this, null, function* () {
        if (!e.length) return;
        let t = yield this.rpcBatchSubscribe(e);
        Gr(t) &&
          this.onBatchSubscribe(t.map((i, n) => u0(Rc({}, e[n]), { id: i })));
      });
    }
    batchFetchMessages(e) {
      return C(this, null, function* () {
        if (!e.length) return;
        this.logger.trace(
          `Fetching batch messages for ${e.length} subscriptions`
        );
        let t = yield this.rpcBatchFetchMessages(e);
        t &&
          t.messages &&
          (this.pendingBatchMessages = this.pendingBatchMessages.concat(
            t.messages
          ));
      });
    }
    onConnect() {
      return C(this, null, function* () {
        yield this.restart(), this.onEnable();
      });
    }
    onDisconnect() {
      this.onDisable();
    }
    checkPending() {
      return C(this, null, function* () {
        if (!this.initialized || !this.relayer.connected) return;
        let e = [];
        this.pending.forEach((t) => {
          e.push(t);
        }),
          yield this.batchSubscribe(e),
          this.pendingBatchMessages.length &&
            (yield this.relayer.handleBatchMessageEvents(
              this.pendingBatchMessages
            ),
            (this.pendingBatchMessages = []));
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(Jo.pulse, () =>
        C(this, null, function* () {
          yield this.checkPending();
        })
      ),
        this.events.on(sn.created, (e) =>
          C(this, null, function* () {
            let t = sn.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, data: e }),
              yield this.persist();
          })
        ),
        this.events.on(sn.deleted, (e) =>
          C(this, null, function* () {
            let t = sn.deleted;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, data: e }),
              yield this.persist();
          })
        );
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    restartToComplete() {
      return C(this, null, function* () {
        this.restartInProgress &&
          (yield new Promise((e) => {
            let t = setInterval(() => {
              this.restartInProgress || (clearInterval(t), e());
            }, this.pollingInterval);
          }));
      });
    }
  },
  cF = Object.defineProperty,
  U3 = Object.getOwnPropertySymbols,
  uF = Object.prototype.hasOwnProperty,
  hF = Object.prototype.propertyIsEnumerable,
  q3 = (r, e, t) =>
    e in r
      ? cF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  lF = (r, e) => {
    for (var t in e || (e = {})) uF.call(e, t) && q3(r, t, e[t]);
    if (U3) for (var t of U3(e)) hF.call(e, t) && q3(r, t, e[t]);
    return r;
  },
  x0 = class extends Ah {
    constructor(e) {
      super(e),
        (this.protocol = "wc"),
        (this.version = 2),
        (this.events = new zn.EventEmitter()),
        (this.name = U9),
        (this.transportExplicitlyClosed = !1),
        (this.initialized = !1),
        (this.connectionAttemptInProgress = !1),
        (this.connectionStatusPollingInterval = 20),
        (this.staleConnectionErrors = [
          "socket hang up",
          "stalled",
          "interrupted",
        ]),
        (this.hasExperiencedNetworkDisruption = !1),
        (this.requestsInFlight = new Map()),
        (this.heartBeatTimeout = (0, Ie.toMiliseconds)(
          Ie.THIRTY_SECONDS + Ie.ONE_SECOND
        )),
        (this.request = (t) =>
          C(this, null, function* () {
            var i, n;
            this.logger.debug("Publishing Request Payload");
            let o = t.id || xi().toString();
            yield this.toEstablishConnection();
            try {
              let c = this.provider.request(t);
              this.requestsInFlight.set(o, { promise: c, request: t }),
                this.logger.trace(
                  {
                    id: o,
                    method: t.method,
                    topic: (i = t.params) == null ? void 0 : i.topic,
                  },
                  "relayer.request - attempt to publish..."
                );
              let l = yield new Promise((p, g) =>
                C(this, null, function* () {
                  let y = () => {
                    g(
                      new Error(
                        `relayer.request - publish interrupted, id: ${o}`
                      )
                    );
                  };
                  this.provider.on(hi.disconnect, y);
                  let v = yield c;
                  this.provider.off(hi.disconnect, y), p(v);
                })
              );
              return (
                this.logger.trace(
                  {
                    id: o,
                    method: t.method,
                    topic: (n = t.params) == null ? void 0 : n.topic,
                  },
                  "relayer.request - published"
                ),
                l
              );
            } catch (c) {
              throw (this.logger.debug(`Failed to Publish Request: ${o}`), c);
            } finally {
              this.requestsInFlight.delete(o);
            }
          })),
        (this.resetPingTimeout = () => {
          if (Uo())
            try {
              clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var t, i, n;
                  (n =
                    (i = (t = this.provider) == null ? void 0 : t.connection) ==
                    null
                      ? void 0
                      : i.socket) == null || n.terminate();
                }, this.heartBeatTimeout));
            } catch (t) {
              this.logger.warn(t);
            }
        }),
        (this.onPayloadHandler = (t) => {
          this.onProviderPayload(t), this.resetPingTimeout();
        }),
        (this.onConnectHandler = () => {
          this.startPingTimeout(), this.events.emit(Ir.connect);
        }),
        (this.onDisconnectHandler = () => {
          this.onProviderDisconnect();
        }),
        (this.onProviderErrorHandler = (t) => {
          this.logger.error(t),
            this.events.emit(Ir.error, t),
            this.logger.info("Fatal socket error received, closing transport"),
            this.transportClose();
        }),
        (this.registerProviderListeners = () => {
          this.provider.on(hi.payload, this.onPayloadHandler),
            this.provider.on(hi.connect, this.onConnectHandler),
            this.provider.on(hi.disconnect, this.onDisconnectHandler),
            this.provider.on(hi.error, this.onProviderErrorHandler);
        }),
        (this.core = e.core),
        (this.logger =
          typeof e.logger < "u" && typeof e.logger != "string"
            ? mr(e.logger, this.name)
            : (0, js.default)(zs({ level: e.logger || B9 }))),
        (this.messages = new _0(this.logger, e.core)),
        (this.subscriber = new S0(this, this.logger)),
        (this.publisher = new E0(this, this.logger)),
        (this.relayUrl = e?.relayUrl || s_),
        (this.projectId = e.projectId),
        (this.bundleId = ew()),
        (this.provider = {});
    }
    init() {
      return C(this, null, function* () {
        this.logger.trace("Initialized"),
          this.registerEventListeners(),
          yield Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
          yield this.transportOpen();
        } catch {
          this.logger.warn(
            `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${F3}...`
          ),
            yield this.restartTransport(F3);
        }
        (this.initialized = !0),
          setTimeout(
            () =>
              C(this, null, function* () {
                this.subscriber.topics.length === 0 &&
                  this.subscriber.pending.size === 0 &&
                  (this.logger.info(
                    "No topics subscribed to after init, closing transport"
                  ),
                  yield this.transportClose(),
                  (this.transportExplicitlyClosed = !1));
              }),
            k9
          );
      });
    }
    get context() {
      return gr(this.logger);
    }
    get connected() {
      var e, t, i;
      return (
        ((i =
          (t = (e = this.provider) == null ? void 0 : e.connection) == null
            ? void 0
            : t.socket) == null
          ? void 0
          : i.readyState) === 1
      );
    }
    get connecting() {
      var e, t, i;
      return (
        ((i =
          (t = (e = this.provider) == null ? void 0 : e.connection) == null
            ? void 0
            : t.socket) == null
          ? void 0
          : i.readyState) === 0
      );
    }
    publish(e, t, i) {
      return C(this, null, function* () {
        this.isInitialized(),
          yield this.publisher.publish(e, t, i),
          yield this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now(),
          });
      });
    }
    subscribe(e, t) {
      return C(this, null, function* () {
        var i;
        this.isInitialized();
        let n =
            ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) ||
            "",
          o,
          c = (l) => {
            l.topic === e && (this.subscriber.off(sn.created, c), o());
          };
        return (
          yield Promise.all([
            new Promise((l) => {
              (o = l), this.subscriber.on(sn.created, c);
            }),
            new Promise((l) =>
              C(this, null, function* () {
                (n = (yield this.subscriber.subscribe(e, t)) || n), l();
              })
            ),
          ]),
          n
        );
      });
    }
    unsubscribe(e, t) {
      return C(this, null, function* () {
        this.isInitialized(), yield this.subscriber.unsubscribe(e, t);
      });
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    transportDisconnect() {
      return C(this, null, function* () {
        if (
          !this.hasExperiencedNetworkDisruption &&
          this.connected &&
          this.requestsInFlight.size > 0
        )
          try {
            yield Promise.all(
              Array.from(this.requestsInFlight.values()).map((e) => e.promise)
            );
          } catch (e) {
            this.logger.warn(e);
          }
        this.hasExperiencedNetworkDisruption || this.connected
          ? yield Ls(
              this.provider.disconnect(),
              2e3,
              "provider.disconnect()"
            ).catch(() => this.onProviderDisconnect())
          : this.onProviderDisconnect();
      });
    }
    transportClose() {
      return C(this, null, function* () {
        (this.transportExplicitlyClosed = !0), yield this.transportDisconnect();
      });
    }
    transportOpen(e) {
      return C(this, null, function* () {
        yield this.confirmOnlineStateOrThrow(),
          e &&
            e !== this.relayUrl &&
            ((this.relayUrl = e), yield this.transportDisconnect()),
          yield this.createProvider(),
          (this.connectionAttemptInProgress = !0),
          (this.transportExplicitlyClosed = !1);
        try {
          yield new Promise((t, i) =>
            C(this, null, function* () {
              let n = () => {
                this.provider.off(hi.disconnect, n),
                  i(
                    new Error(
                      "Connection interrupted while trying to subscribe"
                    )
                  );
              };
              this.provider.on(hi.disconnect, n),
                yield Ls(
                  this.provider.connect(),
                  (0, Ie.toMiliseconds)(Ie.ONE_MINUTE),
                  `Socket stalled when trying to connect to ${this.relayUrl}`
                ).catch((o) => {
                  i(o);
                }),
                yield this.subscriber.start(),
                (this.hasExperiencedNetworkDisruption = !1),
                t();
            })
          );
        } catch (t) {
          this.logger.error(t);
          let i = t;
          if (
            ((this.hasExperiencedNetworkDisruption = !0),
            !this.isConnectionStalled(i.message))
          )
            throw t;
        } finally {
          this.connectionAttemptInProgress = !1;
        }
      });
    }
    restartTransport(e) {
      return C(this, null, function* () {
        this.connectionAttemptInProgress ||
          ((this.relayUrl = e || this.relayUrl),
          yield this.confirmOnlineStateOrThrow(),
          yield this.transportClose(),
          yield this.transportOpen());
      });
    }
    confirmOnlineStateOrThrow() {
      return C(this, null, function* () {
        if (!(yield lp()))
          throw new Error(
            "No internet connection detected. Please restart your network and try again."
          );
      });
    }
    handleBatchMessageEvents(e) {
      return C(this, null, function* () {
        if (e?.length === 0) {
          this.logger.trace("Batch message events is empty. Ignoring...");
          return;
        }
        let t = e.sort((i, n) => i.publishedAt - n.publishedAt);
        this.logger.trace(`Batch of ${t.length} message events sorted`);
        for (let i of t)
          try {
            yield this.onMessageEvent(i);
          } catch (n) {
            this.logger.warn(n);
          }
        this.logger.trace(`Batch of ${t.length} message events processed`);
      });
    }
    startPingTimeout() {
      var e, t, i, n, o;
      if (Uo())
        try {
          (t = (e = this.provider) == null ? void 0 : e.connection) != null &&
            t.socket &&
            ((o =
              (n = (i = this.provider) == null ? void 0 : i.connection) == null
                ? void 0
                : n.socket) == null ||
              o.once("ping", () => {
                this.resetPingTimeout();
              })),
            this.resetPingTimeout();
        } catch (c) {
          this.logger.warn(c);
        }
    }
    isConnectionStalled(e) {
      return this.staleConnectionErrors.some((t) => e.includes(t));
    }
    createProvider() {
      return C(this, null, function* () {
        this.provider.connection && this.unregisterProviderListeners();
        let e = yield this.core.crypto.signJWT(this.relayUrl);
        (this.provider = new Jr(
          new Kh(
            rw({
              sdkVersion: z9,
              protocol: this.protocol,
              version: this.version,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
              auth: e,
              useOnCloseEvent: !0,
              bundleId: this.bundleId,
            })
          )
        )),
          this.registerProviderListeners();
      });
    }
    recordMessageEvent(e) {
      return C(this, null, function* () {
        let { topic: t, message: i } = e;
        yield this.messages.set(t, i);
      });
    }
    shouldIgnoreMessageEvent(e) {
      return C(this, null, function* () {
        let { topic: t, message: i } = e;
        if (!i || i.length === 0)
          return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!(yield this.subscriber.isSubscribed(t)))
          return (
            this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
            !0
          );
        let n = this.messages.has(t, i);
        return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
      });
    }
    onProviderPayload(e) {
      return C(this, null, function* () {
        if (
          (this.logger.debug("Incoming Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e,
          }),
          ea(e))
        ) {
          if (!e.method.endsWith(q9)) return;
          let t = e.params,
            { topic: i, message: n, publishedAt: o } = t.data,
            c = { topic: i, message: n, publishedAt: o };
          this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(lF({ type: "event", event: t.id }, c)),
            this.events.emit(t.id, c),
            yield this.acknowledgePayload(e),
            yield this.onMessageEvent(c);
        } else ps(e) && this.events.emit(Ir.message_ack, e);
      });
    }
    onMessageEvent(e) {
      return C(this, null, function* () {
        (yield this.shouldIgnoreMessageEvent(e)) ||
          (this.events.emit(Ir.message, e), yield this.recordMessageEvent(e));
      });
    }
    acknowledgePayload(e) {
      return C(this, null, function* () {
        let t = ds(e.id, !0);
        yield this.provider.connection.send(t);
      });
    }
    unregisterProviderListeners() {
      this.provider.off(hi.payload, this.onPayloadHandler),
        this.provider.off(hi.connect, this.onConnectHandler),
        this.provider.off(hi.disconnect, this.onDisconnectHandler),
        this.provider.off(hi.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout);
    }
    registerEventListeners() {
      return C(this, null, function* () {
        let e = yield lp();
        vb((t) =>
          C(this, null, function* () {
            e !== t &&
              ((e = t),
              t
                ? yield this.restartTransport().catch((i) =>
                    this.logger.error(i)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  yield this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          })
        );
      });
    }
    onProviderDisconnect() {
      return C(this, null, function* () {
        yield this.subscriber.stop(),
          this.requestsInFlight.clear(),
          clearTimeout(this.pingTimeout),
          this.events.emit(Ir.disconnect),
          (this.connectionAttemptInProgress = !1),
          !this.transportExplicitlyClosed &&
            setTimeout(
              () =>
                C(this, null, function* () {
                  yield this.transportOpen().catch((e) => this.logger.error(e));
                }),
              (0, Ie.toMiliseconds)(j9)
            );
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    toEstablishConnection() {
      return C(this, null, function* () {
        yield this.confirmOnlineStateOrThrow(),
          !this.connected &&
            (this.connectionAttemptInProgress &&
              (yield new Promise((e) => {
                let t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              })),
            yield this.transportOpen());
      });
    }
  },
  fF = Object.defineProperty,
  j3 = Object.getOwnPropertySymbols,
  dF = Object.prototype.hasOwnProperty,
  pF = Object.prototype.propertyIsEnumerable,
  z3 = (r, e, t) =>
    e in r
      ? fF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  k3 = (r, e) => {
    for (var t in e || (e = {})) dF.call(e, t) && z3(r, t, e[t]);
    if (j3) for (var t of j3(e)) pF.call(e, t) && z3(r, t, e[t]);
    return r;
  },
  on = class extends Sh {
    constructor(e, t, i, n = ys, o = void 0) {
      super(e, t, i, n),
        (this.core = e),
        (this.logger = t),
        (this.name = i),
        (this.map = new Map()),
        (this.version = H9),
        (this.cached = []),
        (this.initialized = !1),
        (this.storagePrefix = ys),
        (this.recentlyDeleted = []),
        (this.recentlyDeletedLimit = 200),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((c) => {
                this.getKey && c !== null && !sr(c)
                  ? this.map.set(this.getKey(c), c)
                  : nb(c)
                  ? this.map.set(c.id, c)
                  : sb(c) && this.map.set(c.topic, c);
              }),
              (this.cached = []),
              (this.initialized = !0));
          })),
        (this.set = (c, l) =>
          C(this, null, function* () {
            this.isInitialized(),
              this.map.has(c)
                ? yield this.update(c, l)
                : (this.logger.debug("Setting value"),
                  this.logger.trace({
                    type: "method",
                    method: "set",
                    key: c,
                    value: l,
                  }),
                  this.map.set(c, l),
                  yield this.persist());
          })),
        (this.get = (c) => (
          this.isInitialized(),
          this.logger.debug("Getting value"),
          this.logger.trace({ type: "method", method: "get", key: c }),
          this.getData(c)
        )),
        (this.getAll = (c) => (
          this.isInitialized(),
          c
            ? this.values.filter((l) =>
                Object.keys(c).every((p) => (0, G3.default)(l[p], c[p]))
              )
            : this.values
        )),
        (this.update = (c, l) =>
          C(this, null, function* () {
            this.isInitialized(),
              this.logger.debug("Updating value"),
              this.logger.trace({
                type: "method",
                method: "update",
                key: c,
                update: l,
              });
            let p = k3(k3({}, this.getData(c)), l);
            this.map.set(c, p), yield this.persist();
          })),
        (this.delete = (c, l) =>
          C(this, null, function* () {
            this.isInitialized(),
              this.map.has(c) &&
                (this.logger.debug("Deleting value"),
                this.logger.trace({
                  type: "method",
                  method: "delete",
                  key: c,
                  reason: l,
                }),
                this.map.delete(c),
                this.addToRecentlyDeleted(c),
                yield this.persist());
          })),
        (this.logger = mr(t, this.name)),
        (this.storagePrefix = n),
        (this.getKey = o);
    }
    get context() {
      return gr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
      this.recentlyDeleted.push(e),
        this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
          this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    setDataStore(e) {
      return C(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getDataStore() {
      return C(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    getData(e) {
      let t = this.map.get(e);
      if (!t) {
        if (this.recentlyDeleted.includes(e)) {
          let { message: n } = de(
            "MISSING_OR_INVALID",
            `Record was recently deleted - ${this.name}: ${e}`
          );
          throw (this.logger.error(n), new Error(n));
        }
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw (this.logger.error(i), new Error(i));
      }
      return t;
    }
    persist() {
      return C(this, null, function* () {
        yield this.setDataStore(this.values);
      });
    }
    restore() {
      return C(this, null, function* () {
        try {
          let e = yield this.getDataStore();
          if (typeof e > "u" || !e.length) return;
          if (this.map.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(t), new Error(t));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              value: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  I0 = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        (this.name = J9),
        (this.version = W9),
        (this.events = new zn.default()),
        (this.initialized = !1),
        (this.storagePrefix = ys),
        (this.ignoredPayloadTypes = [Xi]),
        (this.registeredMethods = []),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (yield this.pairings.init(),
              yield this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              (this.initialized = !0),
              this.logger.trace("Initialized"));
          })),
        (this.register = ({ methods: i }) => {
          this.isInitialized(),
            (this.registeredMethods = [
              ...new Set([...this.registeredMethods, ...i]),
            ]);
        }),
        (this.create = (i) =>
          C(this, null, function* () {
            this.isInitialized();
            let n = sh(),
              o = yield this.core.crypto.setSymKey(n),
              c = Jt(Ie.FIVE_MINUTES),
              l = { protocol: N0 },
              p = { topic: o, expiry: c, relay: l, active: !1 },
              g = tb({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: o,
                symKey: n,
                relay: l,
                expiryTimestamp: c,
                methods: i?.methods,
              });
            return (
              this.core.expirer.set(o, c),
              yield this.pairings.set(o, p),
              yield this.core.relayer.subscribe(o),
              { topic: o, uri: g }
            );
          })),
        (this.pair = (i) =>
          C(this, null, function* () {
            this.isInitialized(), this.isValidPair(i);
            let {
                topic: n,
                symKey: o,
                relay: c,
                expiryTimestamp: l,
                methods: p,
              } = sp(i.uri),
              g;
            if (
              this.pairings.keys.includes(n) &&
              ((g = this.pairings.get(n)), g.active)
            )
              throw new Error(
                `Pairing already exists: ${n}. Please try again with a new connection URI.`
              );
            let y = l || Jt(Ie.FIVE_MINUTES),
              v = { topic: n, relay: c, expiry: y, active: !1, methods: p };
            return (
              this.core.expirer.set(n, y),
              yield this.pairings.set(n, v),
              i.activatePairing && (yield this.activate({ topic: n })),
              this.events.emit(Ws.create, v),
              this.core.crypto.keychain.has(n) ||
                (yield this.core.crypto.setSymKey(o, n)),
              yield this.core.relayer.subscribe(n, { relay: c }),
              v
            );
          })),
        (this.activate = (n) =>
          C(this, [n], function* ({ topic: i }) {
            this.isInitialized();
            let o = Jt(Ie.THIRTY_DAYS);
            this.core.expirer.set(i, o),
              yield this.pairings.update(i, { active: !0, expiry: o });
          })),
        (this.ping = (i) =>
          C(this, null, function* () {
            this.isInitialized(), yield this.isValidPing(i);
            let { topic: n } = i;
            if (this.pairings.keys.includes(n)) {
              let o = yield this.sendRequest(n, "wc_pairingPing", {}),
                { done: c, resolve: l, reject: p } = Tn();
              this.events.once(Ne("pairing_ping", o), ({ error: g }) => {
                g ? p(g) : l();
              }),
                yield c();
            }
          })),
        (this.updateExpiry = (o) =>
          C(this, [o], function* ({ topic: i, expiry: n }) {
            this.isInitialized(), yield this.pairings.update(i, { expiry: n });
          })),
        (this.updateMetadata = (o) =>
          C(this, [o], function* ({ topic: i, metadata: n }) {
            this.isInitialized(),
              yield this.pairings.update(i, { peerMetadata: n });
          })),
        (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
        (this.disconnect = (i) =>
          C(this, null, function* () {
            this.isInitialized(), yield this.isValidDisconnect(i);
            let { topic: n } = i;
            this.pairings.keys.includes(n) &&
              (yield this.sendRequest(
                n,
                "wc_pairingDelete",
                ze("USER_DISCONNECTED")
              ),
              yield this.deletePairing(n));
          })),
        (this.sendRequest = (i, n, o) =>
          C(this, null, function* () {
            let c = rn(n, o),
              l = yield this.core.crypto.encode(i, c),
              p = Dc[n].req;
            return (
              this.core.history.set(i, c),
              this.core.relayer.publish(i, l, p),
              c.id
            );
          })),
        (this.sendResult = (i, n, o) =>
          C(this, null, function* () {
            let c = ds(i, o),
              l = yield this.core.crypto.encode(n, c),
              p = yield this.core.history.get(n, i),
              g = Dc[p.request.method].res;
            yield this.core.relayer.publish(n, l, g),
              yield this.core.history.resolve(c);
          })),
        (this.sendError = (i, n, o) =>
          C(this, null, function* () {
            let c = Un(i, o),
              l = yield this.core.crypto.encode(n, c),
              p = yield this.core.history.get(n, i),
              g = Dc[p.request.method]
                ? Dc[p.request.method].res
                : Dc.unregistered_method.res;
            yield this.core.relayer.publish(n, l, g),
              yield this.core.history.resolve(c);
          })),
        (this.deletePairing = (i, n) =>
          C(this, null, function* () {
            yield this.core.relayer.unsubscribe(i),
              yield Promise.all([
                this.pairings.delete(i, ze("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(i),
                n ? Promise.resolve() : this.core.expirer.del(i),
              ]);
          })),
        (this.cleanup = () =>
          C(this, null, function* () {
            let i = this.pairings.getAll().filter((n) => Yi(n.expiry));
            yield Promise.all(i.map((n) => this.deletePairing(n.topic)));
          })),
        (this.onRelayEventRequest = (i) => {
          let { topic: n, payload: o } = i;
          switch (o.method) {
            case "wc_pairingPing":
              return this.onPairingPingRequest(n, o);
            case "wc_pairingDelete":
              return this.onPairingDeleteRequest(n, o);
            default:
              return this.onUnknownRpcMethodRequest(n, o);
          }
        }),
        (this.onRelayEventResponse = (i) =>
          C(this, null, function* () {
            let { topic: n, payload: o } = i,
              c = (yield this.core.history.get(n, o.id)).request.method;
            switch (c) {
              case "wc_pairingPing":
                return this.onPairingPingResponse(n, o);
              default:
                return this.onUnknownRpcMethodResponse(c);
            }
          })),
        (this.onPairingPingRequest = (i, n) =>
          C(this, null, function* () {
            let { id: o } = n;
            try {
              this.isValidPing({ topic: i }),
                yield this.sendResult(o, i, !0),
                this.events.emit(Ws.ping, { id: o, topic: i });
            } catch (c) {
              yield this.sendError(o, i, c), this.logger.error(c);
            }
          })),
        (this.onPairingPingResponse = (i, n) => {
          let { id: o } = n;
          setTimeout(() => {
            $r(n)
              ? this.events.emit(Ne("pairing_ping", o), {})
              : yr(n) &&
                this.events.emit(Ne("pairing_ping", o), { error: n.error });
          }, 500);
        }),
        (this.onPairingDeleteRequest = (i, n) =>
          C(this, null, function* () {
            let { id: o } = n;
            try {
              this.isValidDisconnect({ topic: i }),
                yield this.deletePairing(i),
                this.events.emit(Ws.delete, { id: o, topic: i });
            } catch (c) {
              yield this.sendError(o, i, c), this.logger.error(c);
            }
          })),
        (this.onUnknownRpcMethodRequest = (i, n) =>
          C(this, null, function* () {
            let { id: o, method: c } = n;
            try {
              if (this.registeredMethods.includes(c)) return;
              let l = ze("WC_METHOD_UNSUPPORTED", c);
              yield this.sendError(o, i, l), this.logger.error(l);
            } catch (l) {
              yield this.sendError(o, i, l), this.logger.error(l);
            }
          })),
        (this.onUnknownRpcMethodResponse = (i) => {
          this.registeredMethods.includes(i) ||
            this.logger.error(ze("WC_METHOD_UNSUPPORTED", i));
        }),
        (this.isValidPair = (i) => {
          var n;
          if (!pr(i)) {
            let { message: c } = de(
              "MISSING_OR_INVALID",
              `pair() params: ${i}`
            );
            throw new Error(c);
          }
          if (!ib(i.uri)) {
            let { message: c } = de(
              "MISSING_OR_INVALID",
              `pair() uri: ${i.uri}`
            );
            throw new Error(c);
          }
          let o = sp(i.uri);
          if (!((n = o?.relay) != null && n.protocol)) {
            let { message: c } = de(
              "MISSING_OR_INVALID",
              "pair() uri#relay-protocol"
            );
            throw new Error(c);
          }
          if (!(o != null && o.symKey)) {
            let { message: c } = de("MISSING_OR_INVALID", "pair() uri#symKey");
            throw new Error(c);
          }
          if (
            o != null &&
            o.expiryTimestamp &&
            (0, Ie.toMiliseconds)(o?.expiryTimestamp) < Date.now()
          ) {
            let { message: c } = de(
              "EXPIRED",
              "pair() URI has expired. Please try again with a new connection URI."
            );
            throw new Error(c);
          }
        }),
        (this.isValidPing = (i) =>
          C(this, null, function* () {
            if (!pr(i)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `ping() params: ${i}`
              );
              throw new Error(o);
            }
            let { topic: n } = i;
            yield this.isValidPairingTopic(n);
          })),
        (this.isValidDisconnect = (i) =>
          C(this, null, function* () {
            if (!pr(i)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `disconnect() params: ${i}`
              );
              throw new Error(o);
            }
            let { topic: n } = i;
            yield this.isValidPairingTopic(n);
          })),
        (this.isValidPairingTopic = (i) =>
          C(this, null, function* () {
            if (!Ft(i, !1)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `pairing topic should be a string: ${i}`
              );
              throw new Error(n);
            }
            if (!this.pairings.keys.includes(i)) {
              let { message: n } = de(
                "NO_MATCHING_KEY",
                `pairing topic doesn't exist: ${i}`
              );
              throw new Error(n);
            }
            if (Yi(this.pairings.get(i).expiry)) {
              yield this.deletePairing(i);
              let { message: n } = de("EXPIRED", `pairing topic: ${i}`);
              throw new Error(n);
            }
          })),
        (this.core = e),
        (this.logger = mr(t, this.name)),
        (this.pairings = new on(
          this.core,
          this.logger,
          this.name,
          this.storagePrefix
        ));
    }
    get context() {
      return gr(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(Ir.message, (e) =>
        C(this, null, function* () {
          let { topic: t, message: i } = e;
          if (
            !this.pairings.keys.includes(t) ||
            this.ignoredPayloadTypes.includes(
              this.core.crypto.getPayloadType(i)
            )
          )
            return;
          let n = yield this.core.crypto.decode(t, i);
          try {
            ea(n)
              ? (this.core.history.set(t, n),
                this.onRelayEventRequest({ topic: t, payload: n }))
              : ps(n) &&
                (yield this.core.history.resolve(n),
                yield this.onRelayEventResponse({ topic: t, payload: n }),
                this.core.history.delete(t, n.id));
          } catch (o) {
            this.logger.error(o);
          }
        })
      );
    }
    registerExpirerEvents() {
      this.core.expirer.on(Wr.expired, (e) =>
        C(this, null, function* () {
          let { topic: t } = ih(e.target);
          t &&
            this.pairings.keys.includes(t) &&
            (yield this.deletePairing(t, !0),
            this.events.emit(Ws.expire, { topic: t }));
        })
      );
    }
  },
  D0 = class extends bh {
    constructor(e, t) {
      super(e, t),
        (this.core = e),
        (this.logger = t),
        (this.records = new Map()),
        (this.events = new zn.EventEmitter()),
        (this.name = Y9),
        (this.version = Q9),
        (this.cached = []),
        (this.initialized = !1),
        (this.storagePrefix = ys),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((i) => this.records.set(i.id, i)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          })),
        (this.set = (i, n, o) => {
          if (
            (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
              type: "method",
              method: "set",
              topic: i,
              request: n,
              chainId: o,
            }),
            this.records.has(n.id))
          )
            return;
          let c = {
            id: n.id,
            topic: i,
            request: { method: n.method, params: n.params || null },
            chainId: o,
            expiry: Jt(Ie.THIRTY_DAYS),
          };
          this.records.set(c.id, c),
            this.persist(),
            this.events.emit(Ii.created, c);
        }),
        (this.resolve = (i) =>
          C(this, null, function* () {
            if (
              (this.isInitialized(),
              this.logger.debug("Updating JSON-RPC response history record"),
              this.logger.trace({
                type: "method",
                method: "update",
                response: i,
              }),
              !this.records.has(i.id))
            )
              return;
            let n = yield this.getRecord(i.id);
            typeof n.response > "u" &&
              ((n.response = yr(i) ? { error: i.error } : { result: i.result }),
              this.records.set(n.id, n),
              this.persist(),
              this.events.emit(Ii.updated, n));
          })),
        (this.get = (i, n) =>
          C(this, null, function* () {
            return (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: n,
              }),
              yield this.getRecord(n)
            );
          })),
        (this.delete = (i, n) => {
          this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({ type: "method", method: "delete", id: n }),
            this.values.forEach((o) => {
              if (o.topic === i) {
                if (typeof n < "u" && o.id !== n) return;
                this.records.delete(o.id), this.events.emit(Ii.deleted, o);
              }
            }),
            this.persist();
        }),
        (this.exists = (i, n) =>
          C(this, null, function* () {
            return (
              this.isInitialized(),
              this.records.has(n) ? (yield this.getRecord(n)).topic === i : !1
            );
          })),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.logger = mr(t, this.name));
    }
    get context() {
      return gr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      let e = [];
      return (
        this.values.forEach((t) => {
          if (typeof t.response < "u") return;
          let i = {
            topic: t.topic,
            request: rn(t.request.method, t.request.params, t.id),
            chainId: t.chainId,
          };
          return e.push(i);
        }),
        e
      );
    }
    setJsonRpcRecords(e) {
      return C(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getJsonRpcRecords() {
      return C(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    getRecord(e) {
      this.isInitialized();
      let t = this.records.get(e);
      if (!t) {
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(i);
      }
      return t;
    }
    persist() {
      return C(this, null, function* () {
        yield this.setJsonRpcRecords(this.values), this.events.emit(Ii.sync);
      });
    }
    restore() {
      return C(this, null, function* () {
        try {
          let e = yield this.getJsonRpcRecords();
          if (typeof e > "u" || !e.length) return;
          if (this.records.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(t), new Error(t));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              records: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    registerEventListeners() {
      this.events.on(Ii.created, (e) => {
        let t = Ii.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e });
      }),
        this.events.on(Ii.updated, (e) => {
          let t = Ii.updated;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, record: e });
        }),
        this.events.on(Ii.deleted, (e) => {
          let t = Ii.deleted;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, record: e });
        }),
        this.core.heartbeat.on(Jo.pulse, () => {
          this.cleanup();
        });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = !1;
        this.records.forEach((t) => {
          (0, Ie.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
            (this.logger.info(`Deleting expired history log: ${t.id}`),
            this.records.delete(t.id),
            this.events.emit(Ii.deleted, t, !1),
            (e = !0));
        }),
          e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  R0 = class extends Ih {
    constructor(e, t) {
      super(e, t),
        (this.core = e),
        (this.logger = t),
        (this.expirations = new Map()),
        (this.events = new zn.EventEmitter()),
        (this.name = X9),
        (this.version = Z9),
        (this.cached = []),
        (this.initialized = !1),
        (this.storagePrefix = ys),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((i) => this.expirations.set(i.target, i)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          })),
        (this.has = (i) => {
          try {
            let n = this.formatTarget(i);
            return typeof this.getExpiration(n) < "u";
          } catch {
            return !1;
          }
        }),
        (this.set = (i, n) => {
          this.isInitialized();
          let o = this.formatTarget(i),
            c = { target: o, expiry: n };
          this.expirations.set(o, c),
            this.checkExpiry(o, c),
            this.events.emit(Wr.created, { target: o, expiration: c });
        }),
        (this.get = (i) => {
          this.isInitialized();
          let n = this.formatTarget(i);
          return this.getExpiration(n);
        }),
        (this.del = (i) => {
          if ((this.isInitialized(), this.has(i))) {
            let n = this.formatTarget(i),
              o = this.getExpiration(n);
            this.expirations.delete(n),
              this.events.emit(Wr.deleted, { target: n, expiration: o });
          }
        }),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.logger = mr(t, this.name));
    }
    get context() {
      return gr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e) {
      if (typeof e == "string") return nw(e);
      if (typeof e == "number") return sw(e);
      let { message: t } = de("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(t);
    }
    setExpirations(e) {
      return C(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getExpirations() {
      return C(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    persist() {
      return C(this, null, function* () {
        yield this.setExpirations(this.values), this.events.emit(Wr.sync);
      });
    }
    restore() {
      return C(this, null, function* () {
        try {
          let e = yield this.getExpirations();
          if (typeof e > "u" || !e.length) return;
          if (this.expirations.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(t), new Error(t));
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored expirations for ${this.name}`
            ),
            this.logger.trace({
              type: "method",
              method: "restore",
              expirations: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    getExpiration(e) {
      let t = this.expirations.get(e);
      if (!t) {
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw (this.logger.warn(i), new Error(i));
      }
      return t;
    }
    checkExpiry(e, t) {
      let { expiry: i } = t;
      (0, Ie.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
      this.expirations.delete(e),
        this.events.emit(Wr.expired, { target: e, expiration: t });
    }
    checkExpirations() {
      this.core.relayer.connected &&
        this.expirations.forEach((e, t) => this.checkExpiry(t, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(Jo.pulse, () => this.checkExpirations()),
        this.events.on(Wr.created, (e) => {
          let t = Wr.created;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, data: e }),
            this.persist();
        }),
        this.events.on(Wr.expired, (e) => {
          let t = Wr.expired;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, data: e }),
            this.persist();
        }),
        this.events.on(Wr.deleted, (e) => {
          let t = Wr.deleted;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, data: e }),
            this.persist();
        });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  C0 = class extends Dh {
    constructor(e, t) {
      super(e, t),
        (this.projectId = e),
        (this.logger = t),
        (this.name = c0),
        (this.initialized = !1),
        (this.queue = []),
        (this.verifyDisabled = !1),
        (this.init = (i) =>
          C(this, null, function* () {
            if (this.verifyDisabled || Fs() || !cs()) return;
            let n = this.getVerifyUrl(i?.verifyUrl);
            this.verifyUrl !== n && this.removeIframe(), (this.verifyUrl = n);
            try {
              yield this.createIframe();
            } catch (o) {
              this.logger.info(
                `Verify iframe failed to load: ${this.verifyUrl}`
              ),
                this.logger.info(o);
            }
            if (!this.initialized) {
              this.removeIframe(), (this.verifyUrl = v0);
              try {
                yield this.createIframe();
              } catch (o) {
                this.logger.info(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.info(o),
                  (this.verifyDisabled = !0);
              }
            }
          })),
        (this.register = (i) =>
          C(this, null, function* () {
            this.initialized
              ? this.sendPost(i.attestationId)
              : (this.addToQueue(i.attestationId), yield this.init());
          })),
        (this.resolve = (i) =>
          C(this, null, function* () {
            if (this.isDevEnv) return "";
            let n = this.getVerifyUrl(i?.verifyUrl),
              o;
            try {
              o = yield this.fetchAttestation(i.attestationId, n);
            } catch (c) {
              this.logger.info(
                `failed to resolve attestation: ${i.attestationId} from url: ${n}`
              ),
                this.logger.info(c),
                (o = yield this.fetchAttestation(i.attestationId, v0));
            }
            return o;
          })),
        (this.fetchAttestation = (i, n) =>
          C(this, null, function* () {
            this.logger.info(`resolving attestation: ${i} from url: ${n}`);
            let o = this.startAbortTimer(Ie.ONE_SECOND * 2),
              c = yield fetch(`${n}/attestation/${i}`, {
                signal: this.abortController.signal,
              });
            return clearTimeout(o), c.status === 200 ? yield c.json() : void 0;
          })),
        (this.addToQueue = (i) => {
          this.queue.push(i);
        }),
        (this.processQueue = () => {
          this.queue.length !== 0 &&
            (this.queue.forEach((i) => this.sendPost(i)), (this.queue = []));
        }),
        (this.sendPost = (i) => {
          var n;
          try {
            if (!this.iframe) return;
            (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"),
              this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
          } catch {}
        }),
        (this.createIframe = () =>
          C(this, null, function* () {
            let i,
              n = (o) => {
                o.data === "verify_ready" &&
                  (this.onInit(),
                  window.removeEventListener("message", n),
                  i());
              };
            yield Promise.race([
              new Promise((o) => {
                let c = document.getElementById(c0);
                if (c) return (this.iframe = c), this.onInit(), o();
                window.addEventListener("message", n);
                let l = document.createElement("iframe");
                (l.id = c0),
                  (l.src = `${this.verifyUrl}/${this.projectId}`),
                  (l.style.display = "none"),
                  document.body.append(l),
                  (this.iframe = l),
                  (i = o);
              }),
              new Promise((o, c) =>
                setTimeout(() => {
                  window.removeEventListener("message", n),
                    c("verify iframe load timeout");
                }, (0, Ie.toMiliseconds)(Ie.FIVE_SECONDS))
              ),
            ]);
          })),
        (this.onInit = () => {
          (this.initialized = !0), this.processQueue();
        }),
        (this.removeIframe = () => {
          this.iframe &&
            (this.iframe.remove(),
            (this.iframe = void 0),
            (this.initialized = !1));
        }),
        (this.getVerifyUrl = (i) => {
          let n = i || Ys;
          return (
            eF.includes(n) ||
              (this.logger.info(
                `verify url: ${n}, not included in trusted list, assigning default: ${Ys}`
              ),
              (n = Ys)),
            n
          );
        }),
        (this.logger = mr(t, this.name)),
        (this.verifyUrl = Ys),
        (this.abortController = new AbortController()),
        (this.isDevEnv = Uo() && process.env.IS_VITEST);
    }
    get context() {
      return gr(this.logger);
    }
    startAbortTimer(e) {
      return (
        (this.abortController = new AbortController()),
        setTimeout(() => this.abortController.abort(), (0, Ie.toMiliseconds)(e))
      );
    }
  },
  O0 = class extends Rh {
    constructor(e, t) {
      super(e, t),
        (this.projectId = e),
        (this.logger = t),
        (this.context = tF),
        (this.registerDeviceToken = (i) =>
          C(this, null, function* () {
            let {
                clientId: n,
                token: o,
                notificationType: c,
                enableEncrypted: l = !1,
              } = i,
              p = `${rF}/${this.projectId}/clients`;
            yield (0,
            $3.default)(p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: n, type: c, token: o, always_raw: l }) });
          })),
        (this.logger = mr(t, this.context));
    }
  },
  gF = Object.defineProperty,
  H3 = Object.getOwnPropertySymbols,
  mF = Object.prototype.hasOwnProperty,
  yF = Object.prototype.propertyIsEnumerable,
  K3 = (r, e, t) =>
    e in r
      ? gF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  V3 = (r, e) => {
    for (var t in e || (e = {})) mF.call(e, t) && K3(r, t, e[t]);
    if (H3) for (var t of H3(e)) yF.call(e, t) && K3(r, t, e[t]);
    return r;
  },
  P0 = class r extends wh {
    constructor(e) {
      var t;
      super(e),
        (this.protocol = n_),
        (this.version = I9),
        (this.name = M0),
        (this.events = new zn.EventEmitter()),
        (this.initialized = !1),
        (this.on = (c, l) => this.events.on(c, l)),
        (this.once = (c, l) => this.events.once(c, l)),
        (this.off = (c, l) => this.events.off(c, l)),
        (this.removeListener = (c, l) => this.events.removeListener(c, l)),
        (this.projectId = e?.projectId),
        (this.relayUrl = e?.relayUrl || s_),
        (this.customStoragePrefix =
          e != null && e.customStoragePrefix
            ? `:${e.customStoragePrefix}`
            : "");
      let i = zs({
          level:
            typeof e?.logger == "string" && e.logger ? e.logger : D9.logger,
        }),
        { logger: n, chunkLoggerController: o } = kb({
          opts: i,
          maxSizeInBytes: e?.maxLogBlobSizeInBytes,
          loggerOverride: e?.logger,
        });
      (this.logChunkController = o),
        (t = this.logChunkController) != null &&
          t.downloadLogsBlobInBrowser &&
          (window.downloadLogsBlobInBrowser = () =>
            C(this, null, function* () {
              var c, l;
              (c = this.logChunkController) != null &&
                c.downloadLogsBlobInBrowser &&
                ((l = this.logChunkController) == null ||
                  l.downloadLogsBlobInBrowser({
                    clientId: yield this.crypto.getClientId(),
                  }));
            })),
        (this.logger = mr(n, this.name)),
        (this.heartbeat = new lh()),
        (this.crypto = new b0(this, this.logger, e?.keychain)),
        (this.history = new D0(this, this.logger)),
        (this.expirer = new R0(this, this.logger)),
        (this.storage =
          e != null && e.storage
            ? e.storage
            : new hh(V3(V3({}, R9), e?.storageOptions))),
        (this.relayer = new x0({
          core: this,
          logger: this.logger,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
        })),
        (this.pairing = new I0(this, this.logger)),
        (this.verify = new C0(this.projectId || "", this.logger)),
        (this.echoClient = new O0(this.projectId || "", this.logger));
    }
    static init(e) {
      return C(this, null, function* () {
        let t = new r(e);
        yield t.initialize();
        let i = yield t.crypto.getClientId();
        return yield t.storage.setItem(K9, i), t;
      });
    }
    get context() {
      return gr(this.logger);
    }
    start() {
      return C(this, null, function* () {
        this.initialized || (yield this.initialize());
      });
    }
    getLogsBlob() {
      return C(this, null, function* () {
        var e;
        return (e = this.logChunkController) == null
          ? void 0
          : e.logsToBlob({ clientId: yield this.crypto.getClientId() });
      });
    }
    initialize() {
      return C(this, null, function* () {
        this.logger.trace("Initialized");
        try {
          yield this.crypto.init(),
            yield this.history.init(),
            yield this.expirer.init(),
            yield this.relayer.init(),
            yield this.heartbeat.init(),
            yield this.pairing.init(),
            (this.initialized = !0),
            this.logger.info("Core Initialization Success");
        } catch (e) {
          throw (
            (this.logger.warn(
              `Core Initialization Failure at epoch ${Date.now()}`,
              e
            ),
            this.logger.error(e.message),
            e)
          );
        }
      });
    }
  },
  o_ = P0;
var sl = Je(An()),
  He = Je(bo());
var h_ = "wc",
  l_ = 2,
  f_ = "client",
  K0 = `${h_}@${l_}:${f_}:`,
  T0 = {
    name: f_,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  };
var a_ = "WALLETCONNECT_DEEPLINK_CHOICE";
var vF = "proposal";
var V0 = "Proposal expired",
  wF = "session",
  na = He.SEVEN_DAYS,
  bF = "engine",
  Yr = {
    wc_sessionPropose: {
      req: { ttl: He.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: He.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: He.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: He.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: He.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: He.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: He.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: He.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: He.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: He.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: He.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: He.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: He.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: He.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: He.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: He.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: He.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: He.ONE_HOUR, prompt: !1, tag: 1117 },
    },
  },
  F0 = { min: He.FIVE_MINUTES, max: He.SEVEN_DAYS },
  kn = { idle: "IDLE", active: "ACTIVE" },
  _F = "request",
  EF = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
  AF = "wc";
var SF = "auth",
  xF = "authKeys",
  IF = "pairingTopics",
  DF = "requests",
  ol = `${AF}@${1.5}:${SF}:`,
  il = `${ol}:PUB_KEY`,
  RF = Object.defineProperty,
  CF = Object.defineProperties,
  OF = Object.getOwnPropertyDescriptors,
  c_ = Object.getOwnPropertySymbols,
  PF = Object.prototype.hasOwnProperty,
  MF = Object.prototype.propertyIsEnumerable,
  u_ = (r, e, t) =>
    e in r
      ? RF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Yt = (r, e) => {
    for (var t in e || (e = {})) PF.call(e, t) && u_(r, t, e[t]);
    if (c_) for (var t of c_(e)) MF.call(e, t) && u_(r, t, e[t]);
    return r;
  },
  Qs = (r, e) => CF(r, OF(e)),
  L0 = class extends Oh {
    constructor(e) {
      super(e),
        (this.name = bF),
        (this.events = new sl.default()),
        (this.initialized = !1),
        (this.requestQueue = { state: kn.idle, queue: [] }),
        (this.sessionRequestQueue = { state: kn.idle, queue: [] }),
        (this.requestQueueDelay = He.ONE_SECOND),
        (this.expectedPairingMethodMap = new Map()),
        (this.recentlyDeletedMap = new Map()),
        (this.recentlyDeletedLimit = 200),
        (this.init = () =>
          C(this, null, function* () {
            this.initialized ||
              (yield this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              this.registerPairingEvents(),
              this.client.core.pairing.register({ methods: Object.keys(Yr) }),
              (this.initialized = !0),
              setTimeout(() => {
                (this.sessionRequestQueue.queue =
                  this.getPendingSessionRequests()),
                  this.processSessionRequestQueue();
              }, (0, He.toMiliseconds)(this.requestQueueDelay)));
          })),
        (this.connect = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            let i = Qs(Yt({}, t), {
              requiredNamespaces: t.requiredNamespaces || {},
              optionalNamespaces: t.optionalNamespaces || {},
            });
            yield this.isValidConnect(i);
            let {
                pairingTopic: n,
                requiredNamespaces: o,
                optionalNamespaces: c,
                sessionProperties: l,
                relays: p,
              } = i,
              g = n,
              y,
              v = !1;
            try {
              g && (v = this.client.core.pairing.pairings.get(g).active);
            } catch (G) {
              throw (
                (this.client.logger.error(
                  `connect() -> pairing.get(${g}) failed`
                ),
                G)
              );
            }
            if (!g || !v) {
              let { topic: G, uri: W } =
                yield this.client.core.pairing.create();
              (g = G), (y = W);
            }
            if (!g) {
              let { message: G } = de(
                "NO_MATCHING_KEY",
                `connect() pairing topic: ${g}`
              );
              throw new Error(G);
            }
            let A = yield this.client.core.crypto.generateKeyPair(),
              E = Yr.wc_sessionPropose.req.ttl || He.FIVE_MINUTES,
              P = Jt(E),
              T = Yt(
                {
                  requiredNamespaces: o,
                  optionalNamespaces: c,
                  relays: p ?? [{ protocol: N0 }],
                  proposer: { publicKey: A, metadata: this.client.metadata },
                  expiryTimestamp: P,
                },
                l && { sessionProperties: l }
              ),
              { reject: L, resolve: H, done: Q } = Tn(E, V0);
            this.events.once(Ne("session_connect"), (Z) =>
              C(this, [Z], function* ({ error: G, session: W }) {
                if (G) L(G);
                else if (W) {
                  W.self.publicKey = A;
                  let U = Qs(Yt({}, W), {
                    requiredNamespaces: T.requiredNamespaces,
                    optionalNamespaces: T.optionalNamespaces,
                  });
                  yield this.client.session.set(W.topic, U),
                    yield this.setExpiry(W.topic, W.expiry),
                    g &&
                      (yield this.client.core.pairing.updateMetadata({
                        topic: g,
                        metadata: W.peer.metadata,
                      })),
                    H(U);
                }
              })
            );
            let J = yield this.sendRequest({
              topic: g,
              method: "wc_sessionPropose",
              params: T,
              throwOnFailedPublish: !0,
            });
            return (
              yield this.setProposal(J, Yt({ id: J }, T)),
              { uri: y, approval: Q }
            );
          })),
        (this.pair = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              return yield this.client.core.pairing.pair(t);
            } catch (i) {
              throw (this.client.logger.error("pair() failed"), i);
            }
          })),
        (this.approve = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidApprove(t);
            } catch (Q) {
              throw (
                (this.client.logger.error(
                  "approve() -> isValidApprove() failed"
                ),
                Q)
              );
            }
            let {
                id: i,
                relayProtocol: n,
                namespaces: o,
                sessionProperties: c,
                sessionConfig: l,
              } = t,
              p;
            try {
              p = this.client.proposal.get(i);
            } catch (Q) {
              throw (
                (this.client.logger.error(
                  `approve() -> proposal.get(${i}) failed`
                ),
                Q)
              );
            }
            let {
              pairingTopic: g,
              proposer: y,
              requiredNamespaces: v,
              optionalNamespaces: A,
            } = p;
            g = g || "";
            let E = yield this.client.core.crypto.generateKeyPair(),
              P = y.publicKey,
              T = yield this.client.core.crypto.generateSharedKey(E, P),
              L = Yt(
                Yt(
                  {
                    relay: { protocol: n ?? "irn" },
                    namespaces: o,
                    pairingTopic: g,
                    controller: {
                      publicKey: E,
                      metadata: this.client.metadata,
                    },
                    expiry: Jt(na),
                  },
                  c && { sessionProperties: c }
                ),
                l && { sessionConfig: l }
              );
            yield this.client.core.relayer.subscribe(T);
            let H = Qs(Yt({}, L), {
              topic: T,
              requiredNamespaces: v,
              optionalNamespaces: A,
              pairingTopic: g,
              acknowledged: !1,
              self: L.controller,
              peer: { publicKey: y.publicKey, metadata: y.metadata },
              controller: E,
            });
            yield this.client.session.set(T, H);
            try {
              yield this.sendResult({
                id: i,
                topic: g,
                result: {
                  relay: { protocol: n ?? "irn" },
                  responderPublicKey: E,
                },
                throwOnFailedPublish: !0,
              }),
                yield this.sendRequest({
                  topic: T,
                  method: "wc_sessionSettle",
                  params: L,
                  throwOnFailedPublish: !0,
                });
            } catch (Q) {
              throw (
                (this.client.logger.error(Q),
                this.client.session.delete(T, ze("USER_DISCONNECTED")),
                yield this.client.core.relayer.unsubscribe(T),
                Q)
              );
            }
            return (
              yield this.client.core.pairing.updateMetadata({
                topic: g,
                metadata: y.metadata,
              }),
              yield this.client.proposal.delete(i, ze("USER_DISCONNECTED")),
              yield this.client.core.pairing.activate({ topic: g }),
              yield this.setExpiry(T, Jt(na)),
              {
                topic: T,
                acknowledged: () =>
                  new Promise((Q) =>
                    setTimeout(() => Q(this.client.session.get(T)), 500)
                  ),
              }
            );
          })),
        (this.reject = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidReject(t);
            } catch (c) {
              throw (
                (this.client.logger.error("reject() -> isValidReject() failed"),
                c)
              );
            }
            let { id: i, reason: n } = t,
              o;
            try {
              o = this.client.proposal.get(i).pairingTopic;
            } catch (c) {
              throw (
                (this.client.logger.error(
                  `reject() -> proposal.get(${i}) failed`
                ),
                c)
              );
            }
            o &&
              (yield this.sendError({ id: i, topic: o, error: n }),
              yield this.client.proposal.delete(i, ze("USER_DISCONNECTED")));
          })),
        (this.update = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidUpdate(t);
            } catch (v) {
              throw (
                (this.client.logger.error("update() -> isValidUpdate() failed"),
                v)
              );
            }
            let { topic: i, namespaces: n } = t,
              { done: o, resolve: c, reject: l } = Tn(),
              p = tn(),
              g = xi().toString(),
              y = this.client.session.get(i).namespaces;
            return (
              this.events.once(Ne("session_update", p), ({ error: v }) => {
                v ? l(v) : c();
              }),
              yield this.client.session.update(i, { namespaces: n }),
              yield this.sendRequest({
                topic: i,
                method: "wc_sessionUpdate",
                params: { namespaces: n },
                throwOnFailedPublish: !0,
                clientRpcId: p,
                relayRpcId: g,
              }).catch((v) => {
                this.client.logger.error(v),
                  this.client.session.update(i, { namespaces: y }),
                  l(v);
              }),
              { acknowledged: o }
            );
          })),
        (this.extend = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidExtend(t);
            } catch (p) {
              throw (
                (this.client.logger.error("extend() -> isValidExtend() failed"),
                p)
              );
            }
            let { topic: i } = t,
              n = tn(),
              { done: o, resolve: c, reject: l } = Tn();
            return (
              this.events.once(Ne("session_extend", n), ({ error: p }) => {
                p ? l(p) : c();
              }),
              yield this.setExpiry(i, Jt(na)),
              this.sendRequest({
                topic: i,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: n,
                throwOnFailedPublish: !0,
              }).catch((p) => {
                l(p);
              }),
              { acknowledged: o }
            );
          })),
        (this.request = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidRequest(t);
            } catch (E) {
              throw (
                (this.client.logger.error(
                  "request() -> isValidRequest() failed"
                ),
                E)
              );
            }
            let {
                chainId: i,
                request: n,
                topic: o,
                expiry: c = Yr.wc_sessionRequest.req.ttl,
              } = t,
              l = this.client.session.get(o),
              p = tn(),
              g = xi().toString(),
              {
                done: y,
                resolve: v,
                reject: A,
              } = Tn(c, "Request expired. Please try again.");
            return (
              this.events.once(
                Ne("session_request", p),
                ({ error: E, result: P }) => {
                  E ? A(E) : v(P);
                }
              ),
              yield Promise.all([
                new Promise((E) =>
                  C(this, null, function* () {
                    yield this.sendRequest({
                      clientRpcId: p,
                      relayRpcId: g,
                      topic: o,
                      method: "wc_sessionRequest",
                      params: {
                        request: Qs(Yt({}, n), { expiryTimestamp: Jt(c) }),
                        chainId: i,
                      },
                      expiry: c,
                      throwOnFailedPublish: !0,
                    }).catch((P) => A(P)),
                      this.client.events.emit("session_request_sent", {
                        topic: o,
                        request: n,
                        chainId: i,
                        id: p,
                      }),
                      E();
                  })
                ),
                new Promise((E) =>
                  C(this, null, function* () {
                    var P;
                    if (!((P = l.sessionConfig) != null && P.disableDeepLink)) {
                      let T = yield aw(this.client.core.storage, a_);
                      ow({ id: p, topic: o, wcDeepLink: T });
                    }
                    E();
                  })
                ),
                y(),
              ]).then((E) => E[2])
            );
          })),
        (this.respond = (t) =>
          C(this, null, function* () {
            yield this.isInitialized(), yield this.isValidRespond(t);
            let { topic: i, response: n } = t,
              { id: o } = n;
            $r(n)
              ? yield this.sendResult({
                  id: o,
                  topic: i,
                  result: n.result,
                  throwOnFailedPublish: !0,
                })
              : yr(n) &&
                (yield this.sendError({ id: o, topic: i, error: n.error })),
              this.cleanupAfterResponse(t);
          })),
        (this.ping = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidPing(t);
            } catch (n) {
              throw (
                (this.client.logger.error("ping() -> isValidPing() failed"), n)
              );
            }
            let { topic: i } = t;
            if (this.client.session.keys.includes(i)) {
              let n = tn(),
                o = xi().toString(),
                { done: c, resolve: l, reject: p } = Tn();
              this.events.once(Ne("session_ping", n), ({ error: g }) => {
                g ? p(g) : l();
              }),
                yield Promise.all([
                  this.sendRequest({
                    topic: i,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: n,
                    relayRpcId: o,
                  }),
                  c(),
                ]);
            } else this.client.core.pairing.pairings.keys.includes(i) && (yield this.client.core.pairing.ping({ topic: i }));
          })),
        (this.emit = (t) =>
          C(this, null, function* () {
            yield this.isInitialized(), yield this.isValidEmit(t);
            let { topic: i, event: n, chainId: o } = t,
              c = xi().toString();
            yield this.sendRequest({
              topic: i,
              method: "wc_sessionEvent",
              params: { event: n, chainId: o },
              throwOnFailedPublish: !0,
              relayRpcId: c,
            });
          })),
        (this.disconnect = (t) =>
          C(this, null, function* () {
            yield this.isInitialized(), yield this.isValidDisconnect(t);
            let { topic: i } = t;
            if (this.client.session.keys.includes(i))
              yield this.sendRequest({
                topic: i,
                method: "wc_sessionDelete",
                params: ze("USER_DISCONNECTED"),
                throwOnFailedPublish: !0,
              }),
                yield this.deleteSession({ topic: i, emitEvent: !1 });
            else if (this.client.core.pairing.pairings.keys.includes(i))
              yield this.client.core.pairing.disconnect({ topic: i });
            else {
              let { message: n } = de(
                "MISMATCHED_TOPIC",
                `Session or pairing topic not found: ${i}`
              );
              throw new Error(n);
            }
          })),
        (this.find = (t) => (
          this.isInitialized(),
          this.client.session.getAll().filter((i) => rb(i, t))
        )),
        (this.getPendingSessionRequests = () =>
          this.client.pendingRequest.getAll()),
        (this.authenticate = (t) =>
          C(this, null, function* () {
            this.isInitialized(), this.isValidAuthenticate(t);
            let {
                chains: i,
                statement: n = "",
                uri: o,
                domain: c,
                nonce: l,
                type: p,
                exp: g,
                nbf: y,
                methods: v = [],
                expiry: A,
              } = t,
              E = [...(t.resources || [])],
              { topic: P, uri: T } = yield this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
              });
            this.client.logger.info({
              message: "Generated new pairing",
              pairing: { topic: P, uri: T },
            });
            let L = yield this.client.core.crypto.generateKeyPair(),
              H = Ho(L);
            if (
              (yield Promise.all([
                this.client.auth.authKeys.set(il, {
                  responseTopic: H,
                  publicKey: L,
                }),
                this.client.auth.pairingTopics.set(H, {
                  topic: H,
                  pairingTopic: P,
                }),
              ]),
              yield this.client.core.relayer.subscribe(H),
              this.client.logger.info(
                `sending request to new pairing topic: ${P}`
              ),
              v.length > 0)
            ) {
              let { namespace: h } = Bo(i[0]),
                m = Gw(h, "request", v);
              nc(E) && (m = $w(m, E.pop())), E.push(m);
            }
            let Q =
                A && A > Yr.wc_sessionAuthenticate.req.ttl
                  ? A
                  : Yr.wc_sessionAuthenticate.req.ttl,
              J = {
                authPayload: {
                  type: p ?? "caip122",
                  chains: i,
                  statement: n,
                  aud: o,
                  domain: c,
                  version: "1",
                  nonce: l,
                  iat: new Date().toISOString(),
                  exp: g,
                  nbf: y,
                  resources: E,
                },
                requester: { publicKey: L, metadata: this.client.metadata },
                expiryTimestamp: Jt(Q),
              },
              G = {
                eip155: {
                  chains: i,
                  methods: [...new Set(["personal_sign", ...v])],
                  events: ["chainChanged", "accountsChanged"],
                },
              },
              W = {
                requiredNamespaces: {},
                optionalNamespaces: G,
                relays: [{ protocol: "irn" }],
                proposer: { publicKey: L, metadata: this.client.metadata },
                expiryTimestamp: Jt(Yr.wc_sessionPropose.req.ttl),
              },
              { done: Z, resolve: U, reject: B } = Tn(Q, "Request expired"),
              ae = (b) =>
                C(this, [b], function* ({ error: h, session: m }) {
                  if ((this.events.off(Ne("session_request", M), fe), h)) B(h);
                  else if (m) {
                    (m.self.publicKey = L),
                      yield this.client.session.set(m.topic, m),
                      yield this.setExpiry(m.topic, m.expiry),
                      P &&
                        (yield this.client.core.pairing.updateMetadata({
                          topic: P,
                          metadata: m.peer.metadata,
                        }));
                    let S = this.client.session.get(m.topic);
                    yield this.deleteProposal(q), U({ session: S });
                  }
                }),
              fe = (h) =>
                C(this, null, function* () {
                  if (
                    (yield this.deletePendingAuthRequest(M, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    h.error)
                  ) {
                    let I = ze(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return h.error.code === I.code
                      ? void 0
                      : (this.events.off(Ne("session_connect"), ae),
                        B(h.error.message));
                  }
                  yield this.deleteProposal(q),
                    this.events.off(Ne("session_connect"), ae);
                  let { cacaos: m, responder: b } = h.result,
                    S = [],
                    R = [];
                  for (let I of m) {
                    (yield Qd({
                      cacao: I,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        I,
                        "Signature verification failed"
                      ),
                      B(
                        ze(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: d } = I,
                      D = nc(d.resources),
                      ce = [Yd(d.iss)],
                      ie = ic(d.iss);
                    if (D) {
                      let w = Zd(D),
                        $ = ep(D);
                      S.push(...w), ce.push(...$);
                    }
                    for (let w of ce) R.push(`${w}:${ie}`);
                  }
                  let N = yield this.client.core.crypto.generateSharedKey(
                      L,
                      b.publicKey
                    ),
                    z;
                  S.length > 0 &&
                    ((z = {
                      topic: N,
                      acknowledged: !0,
                      self: { publicKey: L, metadata: this.client.metadata },
                      peer: b,
                      controller: b.publicKey,
                      expiry: Jt(na),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: P,
                      namespaces: op([...new Set(S)], [...new Set(R)]),
                    }),
                    yield this.client.core.relayer.subscribe(N),
                    yield this.client.session.set(N, z),
                    (z = this.client.session.get(N))),
                    U({ auths: m, session: z });
                }),
              M = tn(),
              q = tn();
            this.events.once(Ne("session_connect"), ae),
              this.events.once(Ne("session_request", M), fe);
            try {
              yield Promise.all([
                this.sendRequest({
                  topic: P,
                  method: "wc_sessionAuthenticate",
                  params: J,
                  expiry: t.expiry,
                  throwOnFailedPublish: !0,
                  clientRpcId: M,
                }),
                this.sendRequest({
                  topic: P,
                  method: "wc_sessionPropose",
                  params: W,
                  expiry: Yr.wc_sessionPropose.req.ttl,
                  throwOnFailedPublish: !0,
                  clientRpcId: q,
                }),
              ]);
            } catch (h) {
              throw (
                (this.events.off(Ne("session_connect"), ae),
                this.events.off(Ne("session_request", M), fe),
                h)
              );
            }
            return (
              yield this.setProposal(q, Yt({ id: q }, W)),
              yield this.setAuthRequest(M, {
                request: Qs(Yt({}, J), { verifyContext: {} }),
                pairingTopic: P,
              }),
              { uri: T, response: Z }
            );
          })),
        (this.approveSessionAuthenticate = (t) =>
          C(this, null, function* () {
            this.isInitialized();
            let { id: i, auths: n } = t,
              o = this.getPendingAuthRequest(i);
            if (!o)
              throw new Error(
                `Could not find pending auth request with id ${i}`
              );
            let c = o.requester.publicKey,
              l = yield this.client.core.crypto.generateKeyPair(),
              p = Ho(c),
              g = { type: Xi, receiverPublicKey: c, senderPublicKey: l },
              y = [],
              v = [];
            for (let P of n) {
              if (
                !(yield Qd({ cacao: P, projectId: this.client.core.projectId }))
              ) {
                let J = ze(
                  "SESSION_SETTLEMENT_FAILED",
                  "Signature verification failed"
                );
                throw (
                  (yield this.sendError({
                    id: i,
                    topic: p,
                    error: J,
                    encodeOpts: g,
                  }),
                  new Error(J.message))
                );
              }
              let { p: T } = P,
                L = nc(T.resources),
                H = [Yd(T.iss)],
                Q = ic(T.iss);
              if (L) {
                let J = Zd(L),
                  G = ep(L);
                y.push(...J), H.push(...G);
              }
              for (let J of H) v.push(`${J}:${Q}`);
            }
            let A = yield this.client.core.crypto.generateSharedKey(l, c),
              E;
            return (
              y?.length > 0 &&
                ((E = {
                  topic: A,
                  acknowledged: !0,
                  self: { publicKey: l, metadata: this.client.metadata },
                  peer: { publicKey: c, metadata: o.requester.metadata },
                  controller: c,
                  expiry: Jt(na),
                  authentication: n,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: "",
                  namespaces: op([...new Set(y)], [...new Set(v)]),
                }),
                yield this.client.core.relayer.subscribe(A),
                yield this.client.session.set(A, E)),
              yield this.sendResult({
                topic: p,
                id: i,
                result: {
                  cacaos: n,
                  responder: { publicKey: l, metadata: this.client.metadata },
                },
                encodeOpts: g,
                throwOnFailedPublish: !0,
              }),
              yield this.client.auth.requests.delete(i, {
                message: "fullfilled",
                code: 0,
              }),
              yield this.client.core.pairing.activate({
                topic: o.pairingTopic,
              }),
              { session: E }
            );
          })),
        (this.rejectSessionAuthenticate = (t) =>
          C(this, null, function* () {
            yield this.isInitialized();
            let { id: i, reason: n } = t,
              o = this.getPendingAuthRequest(i);
            if (!o)
              throw new Error(
                `Could not find pending auth request with id ${i}`
              );
            let c = o.requester.publicKey,
              l = yield this.client.core.crypto.generateKeyPair(),
              p = Ho(c),
              g = { type: Xi, receiverPublicKey: c, senderPublicKey: l };
            yield this.sendError({ id: i, topic: p, error: n, encodeOpts: g }),
              yield this.client.auth.requests.delete(i, {
                message: "rejected",
                code: 0,
              }),
              yield this.client.proposal.delete(i, ze("USER_DISCONNECTED"));
          })),
        (this.formatAuthMessage = (t) => {
          this.isInitialized();
          let { request: i, iss: n } = t;
          return Xd(i, n);
        }),
        (this.cleanupDuplicatePairings = (t) =>
          C(this, null, function* () {
            if (t.pairingTopic)
              try {
                let i = this.client.core.pairing.pairings.get(t.pairingTopic),
                  n = this.client.core.pairing.pairings.getAll().filter((o) => {
                    var c, l;
                    return (
                      ((c = o.peerMetadata) == null ? void 0 : c.url) &&
                      ((l = o.peerMetadata) == null ? void 0 : l.url) ===
                        t.peer.metadata.url &&
                      o.topic &&
                      o.topic !== i.topic
                    );
                  });
                if (n.length === 0) return;
                this.client.logger.info(
                  `Cleaning up ${n.length} duplicate pairing(s)`
                ),
                  yield Promise.all(
                    n.map((o) =>
                      this.client.core.pairing.disconnect({ topic: o.topic })
                    )
                  ),
                  this.client.logger.info(
                    "Duplicate pairings clean up finished"
                  );
              } catch (i) {
                this.client.logger.error(i);
              }
          })),
        (this.deleteSession = (t) =>
          C(this, null, function* () {
            let {
                topic: i,
                expirerHasDeleted: n = !1,
                emitEvent: o = !0,
                id: c = 0,
              } = t,
              { self: l } = this.client.session.get(i);
            yield this.client.core.relayer.unsubscribe(i),
              yield this.client.session.delete(i, ze("USER_DISCONNECTED")),
              this.addToRecentlyDeleted(i, "session"),
              this.client.core.crypto.keychain.has(l.publicKey) &&
                (yield this.client.core.crypto.deleteKeyPair(l.publicKey)),
              this.client.core.crypto.keychain.has(i) &&
                (yield this.client.core.crypto.deleteSymKey(i)),
              n || this.client.core.expirer.del(i),
              this.client.core.storage
                .removeItem(a_)
                .catch((p) => this.client.logger.warn(p)),
              this.getPendingSessionRequests().forEach((p) => {
                p.topic === i &&
                  this.deletePendingSessionRequest(
                    p.id,
                    ze("USER_DISCONNECTED")
                  );
              }),
              o &&
                this.client.events.emit("session_delete", { id: c, topic: i });
          })),
        (this.deleteProposal = (t, i) =>
          C(this, null, function* () {
            yield Promise.all([
              this.client.proposal.delete(t, ze("USER_DISCONNECTED")),
              i ? Promise.resolve() : this.client.core.expirer.del(t),
            ]),
              this.addToRecentlyDeleted(t, "proposal");
          })),
        (this.deletePendingSessionRequest = (t, i, n = !1) =>
          C(this, null, function* () {
            yield Promise.all([
              this.client.pendingRequest.delete(t, i),
              n ? Promise.resolve() : this.client.core.expirer.del(t),
            ]),
              this.addToRecentlyDeleted(t, "request"),
              (this.sessionRequestQueue.queue =
                this.sessionRequestQueue.queue.filter((o) => o.id !== t)),
              n &&
                ((this.sessionRequestQueue.state = kn.idle),
                this.client.events.emit("session_request_expire", { id: t }));
          })),
        (this.deletePendingAuthRequest = (t, i, n = !1) =>
          C(this, null, function* () {
            yield Promise.all([
              this.client.auth.requests.delete(t, i),
              n ? Promise.resolve() : this.client.core.expirer.del(t),
            ]);
          })),
        (this.setExpiry = (t, i) =>
          C(this, null, function* () {
            this.client.session.keys.includes(t) &&
              (this.client.core.expirer.set(t, i),
              yield this.client.session.update(t, { expiry: i }));
          })),
        (this.setProposal = (t, i) =>
          C(this, null, function* () {
            this.client.core.expirer.set(t, Jt(Yr.wc_sessionPropose.req.ttl)),
              yield this.client.proposal.set(t, i);
          })),
        (this.setAuthRequest = (t, i) =>
          C(this, null, function* () {
            let { request: n, pairingTopic: o } = i;
            this.client.core.expirer.set(t, n.expiryTimestamp),
              yield this.client.auth.requests.set(t, {
                authPayload: n.authPayload,
                requester: n.requester,
                expiryTimestamp: n.expiryTimestamp,
                id: t,
                pairingTopic: o,
                verifyContext: n.verifyContext,
              });
          })),
        (this.setPendingSessionRequest = (t) =>
          C(this, null, function* () {
            let { id: i, topic: n, params: o, verifyContext: c } = t,
              l = o.request.expiryTimestamp || Jt(Yr.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(i, l),
              yield this.client.pendingRequest.set(i, {
                id: i,
                topic: n,
                params: o,
                verifyContext: c,
              });
          })),
        (this.sendRequest = (t) =>
          C(this, null, function* () {
            let {
                topic: i,
                method: n,
                params: o,
                expiry: c,
                relayRpcId: l,
                clientRpcId: p,
                throwOnFailedPublish: g,
              } = t,
              y = rn(n, o, p);
            if (cs() && EF.includes(n)) {
              let E = Fn(JSON.stringify(y));
              this.client.core.verify.register({ attestationId: E });
            }
            let v;
            try {
              v = yield this.client.core.crypto.encode(i, y);
            } catch (E) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendRequest() -> core.crypto.encode() for topic ${i} failed`
                ),
                E)
              );
            }
            let A = Yr[n].req;
            return (
              c && (A.ttl = c),
              l && (A.id = l),
              this.client.core.history.set(i, y),
              g
                ? ((A.internal = Qs(Yt({}, A.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  yield this.client.core.relayer.publish(i, v, A))
                : this.client.core.relayer
                    .publish(i, v, A)
                    .catch((E) => this.client.logger.error(E)),
              y.id
            );
          })),
        (this.sendResult = (t) =>
          C(this, null, function* () {
            let {
                id: i,
                topic: n,
                result: o,
                throwOnFailedPublish: c,
                encodeOpts: l,
              } = t,
              p = ds(i, o),
              g;
            try {
              g = yield this.client.core.crypto.encode(n, p, l);
            } catch (A) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendResult() -> core.crypto.encode() for topic ${n} failed`
                ),
                A)
              );
            }
            let y;
            try {
              y = yield this.client.core.history.get(n, i);
            } catch (A) {
              throw (
                (this.client.logger.error(
                  `sendResult() -> history.get(${n}, ${i}) failed`
                ),
                A)
              );
            }
            let v = Yr[y.request.method].res;
            c
              ? ((v.internal = Qs(Yt({}, v.internal), {
                  throwOnFailedPublish: !0,
                })),
                yield this.client.core.relayer.publish(n, g, v))
              : this.client.core.relayer
                  .publish(n, g, v)
                  .catch((A) => this.client.logger.error(A)),
              yield this.client.core.history.resolve(p);
          })),
        (this.sendError = (t) =>
          C(this, null, function* () {
            let { id: i, topic: n, error: o, encodeOpts: c } = t,
              l = Un(i, o),
              p;
            try {
              p = yield this.client.core.crypto.encode(n, l, c);
            } catch (v) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendError() -> core.crypto.encode() for topic ${n} failed`
                ),
                v)
              );
            }
            let g;
            try {
              g = yield this.client.core.history.get(n, i);
            } catch (v) {
              throw (
                (this.client.logger.error(
                  `sendError() -> history.get(${n}, ${i}) failed`
                ),
                v)
              );
            }
            let y = Yr[g.request.method].res;
            this.client.core.relayer.publish(n, p, y),
              yield this.client.core.history.resolve(l);
          })),
        (this.cleanup = () =>
          C(this, null, function* () {
            let t = [],
              i = [];
            this.client.session.getAll().forEach((n) => {
              let o = !1;
              Yi(n.expiry) && (o = !0),
                this.client.core.crypto.keychain.has(n.topic) || (o = !0),
                o && t.push(n.topic);
            }),
              this.client.proposal.getAll().forEach((n) => {
                Yi(n.expiryTimestamp) && i.push(n.id);
              }),
              yield Promise.all([
                ...t.map((n) => this.deleteSession({ topic: n })),
                ...i.map((n) => this.deleteProposal(n)),
              ]);
          })),
        (this.onRelayEventRequest = (t) =>
          C(this, null, function* () {
            this.requestQueue.queue.push(t), yield this.processRequestsQueue();
          })),
        (this.processRequestsQueue = () =>
          C(this, null, function* () {
            if (this.requestQueue.state === kn.active) {
              this.client.logger.info(
                "Request queue already active, skipping..."
              );
              return;
            }
            for (
              this.client.logger.info(
                `Request queue starting with ${this.requestQueue.queue.length} requests`
              );
              this.requestQueue.queue.length > 0;

            ) {
              this.requestQueue.state = kn.active;
              let t = this.requestQueue.queue.shift();
              if (t)
                try {
                  this.processRequest(t),
                    yield new Promise((i) => setTimeout(i, 300));
                } catch (i) {
                  this.client.logger.warn(i);
                }
            }
            this.requestQueue.state = kn.idle;
          })),
        (this.processRequest = (t) => {
          let { topic: i, payload: n } = t,
            o = n.method;
          if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: o }))
            switch (o) {
              case "wc_sessionPropose":
                return this.onSessionProposeRequest(i, n);
              case "wc_sessionSettle":
                return this.onSessionSettleRequest(i, n);
              case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(i, n);
              case "wc_sessionExtend":
                return this.onSessionExtendRequest(i, n);
              case "wc_sessionPing":
                return this.onSessionPingRequest(i, n);
              case "wc_sessionDelete":
                return this.onSessionDeleteRequest(i, n);
              case "wc_sessionRequest":
                return this.onSessionRequest(i, n);
              case "wc_sessionEvent":
                return this.onSessionEventRequest(i, n);
              case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateRequest(i, n);
              default:
                return this.client.logger.info(
                  `Unsupported request method ${o}`
                );
            }
        }),
        (this.onRelayEventResponse = (t) =>
          C(this, null, function* () {
            let { topic: i, payload: n } = t,
              o = (yield this.client.core.history.get(i, n.id)).request.method;
            switch (o) {
              case "wc_sessionPropose":
                return this.onSessionProposeResponse(i, n);
              case "wc_sessionSettle":
                return this.onSessionSettleResponse(i, n);
              case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(i, n);
              case "wc_sessionExtend":
                return this.onSessionExtendResponse(i, n);
              case "wc_sessionPing":
                return this.onSessionPingResponse(i, n);
              case "wc_sessionRequest":
                return this.onSessionRequestResponse(i, n);
              case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(i, n);
              default:
                return this.client.logger.info(
                  `Unsupported response method ${o}`
                );
            }
          })),
        (this.onRelayEventUnknownPayload = (t) => {
          let { topic: i } = t,
            { message: n } = de(
              "MISSING_OR_INVALID",
              `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`
            );
          throw new Error(n);
        }),
        (this.shouldIgnorePairingRequest = (t) => {
          let { topic: i, requestMethod: n } = t,
            o = this.expectedPairingMethodMap.get(i);
          return !o || o.includes(n)
            ? !1
            : !!(
                o.includes("wc_sessionAuthenticate") &&
                this.client.events.listenerCount("session_authenticate") > 0
              );
        }),
        (this.onSessionProposeRequest = (t, i) =>
          C(this, null, function* () {
            let { params: n, id: o } = i;
            try {
              this.isValidConnect(Yt({}, i.params));
              let c = n.expiryTimestamp || Jt(Yr.wc_sessionPropose.req.ttl),
                l = Yt({ id: o, pairingTopic: t, expiryTimestamp: c }, n);
              yield this.setProposal(o, l);
              let p = Fn(JSON.stringify(i)),
                g = yield this.getVerifyContext(p, l.proposer.metadata);
              this.client.events.emit("session_proposal", {
                id: o,
                params: l,
                verifyContext: g,
              });
            } catch (c) {
              yield this.sendError({ id: o, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.onSessionProposeResponse = (t, i) =>
          C(this, null, function* () {
            let { id: n } = i;
            if ($r(i)) {
              let { result: o } = i;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                result: o,
              });
              let c = this.client.proposal.get(n);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                proposal: c,
              });
              let l = c.proposer.publicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                selfPublicKey: l,
              });
              let p = o.responderPublicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                peerPublicKey: p,
              });
              let g = yield this.client.core.crypto.generateSharedKey(l, p);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                sessionTopic: g,
              });
              let y = yield this.client.core.relayer.subscribe(g);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                subscriptionId: y,
              }),
                yield this.client.core.pairing.activate({ topic: t });
            } else if (yr(i)) {
              yield this.client.proposal.delete(n, ze("USER_DISCONNECTED"));
              let o = Ne("session_connect");
              if (this.events.listenerCount(o) === 0)
                throw new Error(`emitting ${o} without any listeners, 954`);
              this.events.emit(Ne("session_connect"), { error: i.error });
            }
          })),
        (this.onSessionSettleRequest = (t, i) =>
          C(this, null, function* () {
            let { id: n, params: o } = i;
            try {
              this.isValidSessionSettleRequest(o);
              let {
                  relay: c,
                  controller: l,
                  expiry: p,
                  namespaces: g,
                  sessionProperties: y,
                  pairingTopic: v,
                  sessionConfig: A,
                } = i.params,
                E = Yt(
                  Yt(
                    {
                      topic: t,
                      relay: c,
                      expiry: p,
                      namespaces: g,
                      acknowledged: !0,
                      pairingTopic: v,
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      controller: l.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: l.publicKey, metadata: l.metadata },
                    },
                    y && { sessionProperties: y }
                  ),
                  A && { sessionConfig: A }
                );
              yield this.sendResult({
                id: i.id,
                topic: t,
                result: !0,
                throwOnFailedPublish: !0,
              });
              let P = Ne("session_connect");
              if (this.events.listenerCount(P) === 0)
                throw new Error(`emitting ${P} without any listeners 997`);
              this.events.emit(Ne("session_connect"), { session: E }),
                this.cleanupDuplicatePairings(E);
            } catch (c) {
              yield this.sendError({ id: n, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.onSessionSettleResponse = (t, i) =>
          C(this, null, function* () {
            let { id: n } = i;
            $r(i)
              ? (yield this.client.session.update(t, { acknowledged: !0 }),
                this.events.emit(Ne("session_approve", n), {}))
              : yr(i) &&
                (yield this.client.session.delete(t, ze("USER_DISCONNECTED")),
                this.events.emit(Ne("session_approve", n), { error: i.error }));
          })),
        (this.onSessionUpdateRequest = (t, i) =>
          C(this, null, function* () {
            let { params: n, id: o } = i;
            try {
              let c = `${t}_session_update`,
                l = os.get(c);
              if (l && this.isRequestOutOfSync(l, o)) {
                this.client.logger.info(
                  `Discarding out of sync request - ${o}`
                ),
                  this.sendError({
                    id: o,
                    topic: t,
                    error: ze("INVALID_UPDATE_REQUEST"),
                  });
                return;
              }
              this.isValidUpdate(Yt({ topic: t }, n));
              try {
                os.set(c, o),
                  yield this.client.session.update(t, {
                    namespaces: n.namespaces,
                  }),
                  yield this.sendResult({
                    id: o,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (p) {
                throw (os.delete(c), p);
              }
              this.client.events.emit("session_update", {
                id: o,
                topic: t,
                params: n,
              });
            } catch (c) {
              yield this.sendError({ id: o, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.isRequestOutOfSync = (t, i) =>
          parseInt(i.toString().slice(0, -3)) <=
          parseInt(t.toString().slice(0, -3))),
        (this.onSessionUpdateResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_update", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          $r(i)
            ? this.events.emit(Ne("session_update", n), {})
            : yr(i) &&
              this.events.emit(Ne("session_update", n), { error: i.error });
        }),
        (this.onSessionExtendRequest = (t, i) =>
          C(this, null, function* () {
            let { id: n } = i;
            try {
              this.isValidExtend({ topic: t }),
                yield this.setExpiry(t, Jt(na)),
                yield this.sendResult({
                  id: n,
                  topic: t,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.client.events.emit("session_extend", { id: n, topic: t });
            } catch (o) {
              yield this.sendError({ id: n, topic: t, error: o }),
                this.client.logger.error(o);
            }
          })),
        (this.onSessionExtendResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_extend", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          $r(i)
            ? this.events.emit(Ne("session_extend", n), {})
            : yr(i) &&
              this.events.emit(Ne("session_extend", n), { error: i.error });
        }),
        (this.onSessionPingRequest = (t, i) =>
          C(this, null, function* () {
            let { id: n } = i;
            try {
              this.isValidPing({ topic: t }),
                yield this.sendResult({
                  id: n,
                  topic: t,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.client.events.emit("session_ping", { id: n, topic: t });
            } catch (o) {
              yield this.sendError({ id: n, topic: t, error: o }),
                this.client.logger.error(o);
            }
          })),
        (this.onSessionPingResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_ping", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          setTimeout(() => {
            $r(i)
              ? this.events.emit(Ne("session_ping", n), {})
              : yr(i) &&
                this.events.emit(Ne("session_ping", n), { error: i.error });
          }, 500);
        }),
        (this.onSessionDeleteRequest = (t, i) =>
          C(this, null, function* () {
            let { id: n } = i;
            try {
              this.isValidDisconnect({ topic: t, reason: i.params }),
                yield Promise.all([
                  new Promise((o) => {
                    this.client.core.relayer.once(Ir.publish, () =>
                      C(this, null, function* () {
                        o(yield this.deleteSession({ topic: t, id: n }));
                      })
                    );
                  }),
                  this.sendResult({
                    id: n,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: ze("USER_DISCONNECTED"),
                  }),
                ]);
            } catch (o) {
              this.client.logger.error(o);
            }
          })),
        (this.onSessionRequest = (t, i) =>
          C(this, null, function* () {
            var n;
            let { id: o, params: c } = i;
            try {
              yield this.isValidRequest(Yt({ topic: t }, c));
              let l = Fn(JSON.stringify(rn("wc_sessionRequest", c, o))),
                p = this.client.session.get(t),
                g = yield this.getVerifyContext(l, p.peer.metadata),
                y = { id: o, topic: t, params: c, verifyContext: g };
              yield this.setPendingSessionRequest(y),
                (n = this.client.signConfig) != null && n.disableRequestQueue
                  ? this.emitSessionRequest(y)
                  : (this.addSessionRequestToSessionRequestQueue(y),
                    this.processSessionRequestQueue());
            } catch (l) {
              yield this.sendError({ id: o, topic: t, error: l }),
                this.client.logger.error(l);
            }
          })),
        (this.onSessionRequestResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_request", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          $r(i)
            ? this.events.emit(Ne("session_request", n), { result: i.result })
            : yr(i) &&
              this.events.emit(Ne("session_request", n), { error: i.error });
        }),
        (this.onSessionEventRequest = (t, i) =>
          C(this, null, function* () {
            let { id: n, params: o } = i;
            try {
              let c = `${t}_session_event_${o.event.name}`,
                l = os.get(c);
              if (l && this.isRequestOutOfSync(l, n)) {
                this.client.logger.info(
                  `Discarding out of sync request - ${n}`
                );
                return;
              }
              this.isValidEmit(Yt({ topic: t }, o)),
                this.client.events.emit("session_event", {
                  id: n,
                  topic: t,
                  params: o,
                }),
                os.set(c, n);
            } catch (c) {
              yield this.sendError({ id: n, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.onSessionAuthenticateResponse = (t, i) => {
          let { id: n } = i;
          this.client.logger.trace({
            type: "method",
            method: "onSessionAuthenticateResponse",
            topic: t,
            payload: i,
          }),
            $r(i)
              ? this.events.emit(Ne("session_request", n), { result: i.result })
              : yr(i) &&
                this.events.emit(Ne("session_request", n), { error: i.error });
        }),
        (this.onSessionAuthenticateRequest = (t, i) =>
          C(this, null, function* () {
            let { requester: n, authPayload: o, expiryTimestamp: c } = i.params,
              l = Fn(JSON.stringify(i)),
              p = yield this.getVerifyContext(l, this.client.metadata),
              g = {
                requester: n,
                pairingTopic: t,
                id: i.id,
                authPayload: o,
                verifyContext: p,
                expiryTimestamp: c,
              };
            yield this.setAuthRequest(i.id, { request: g, pairingTopic: t }),
              this.client.events.emit("session_authenticate", {
                topic: t,
                params: i.params,
                id: i.id,
              });
          })),
        (this.addSessionRequestToSessionRequestQueue = (t) => {
          this.sessionRequestQueue.queue.push(t);
        }),
        (this.cleanupAfterResponse = (t) => {
          this.deletePendingSessionRequest(t.response.id, {
            message: "fulfilled",
            code: 0,
          }),
            setTimeout(() => {
              (this.sessionRequestQueue.state = kn.idle),
                this.processSessionRequestQueue();
            }, (0, He.toMiliseconds)(this.requestQueueDelay));
        }),
        (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: i }) => {
          let n = this.client.core.history.pending;
          n.length > 0 &&
            n
              .filter(
                (o) => o.topic === t && o.request.method === "wc_sessionRequest"
              )
              .forEach((o) => {
                let c = o.request.id,
                  l = Ne("session_request", c);
                if (this.events.listenerCount(l) === 0)
                  throw new Error(`emitting ${l} without any listeners`);
                this.events.emit(Ne("session_request", o.request.id), {
                  error: i,
                });
              });
        }),
        (this.processSessionRequestQueue = () => {
          if (this.sessionRequestQueue.state === kn.active) {
            this.client.logger.info("session request queue is already active.");
            return;
          }
          let t = this.sessionRequestQueue.queue[0];
          if (!t) {
            this.client.logger.info("session request queue is empty.");
            return;
          }
          try {
            (this.sessionRequestQueue.state = kn.active),
              this.emitSessionRequest(t);
          } catch (i) {
            this.client.logger.error(i);
          }
        }),
        (this.emitSessionRequest = (t) => {
          this.client.events.emit("session_request", t);
        }),
        (this.onPairingCreated = (t) => {
          if (
            (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods),
            t.active)
          )
            return;
          let i = this.client.proposal
            .getAll()
            .find((n) => n.pairingTopic === t.topic);
          i &&
            this.onSessionProposeRequest(
              t.topic,
              rn(
                "wc_sessionPropose",
                {
                  requiredNamespaces: i.requiredNamespaces,
                  optionalNamespaces: i.optionalNamespaces,
                  relays: i.relays,
                  proposer: i.proposer,
                  sessionProperties: i.sessionProperties,
                },
                i.id
              )
            );
        }),
        (this.isValidConnect = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `connect() params: ${JSON.stringify(t)}`
              );
              throw new Error(p);
            }
            let {
              pairingTopic: i,
              requiredNamespaces: n,
              optionalNamespaces: o,
              sessionProperties: c,
              relays: l,
            } = t;
            if ((sr(i) || (yield this.isValidPairingTopic(i)), !ub(l, !0))) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `connect() relays: ${l}`
              );
              throw new Error(p);
            }
            !sr(n) &&
              Us(n) !== 0 &&
              this.validateNamespaces(n, "requiredNamespaces"),
              !sr(o) &&
                Us(o) !== 0 &&
                this.validateNamespaces(o, "optionalNamespaces"),
              sr(c) || this.validateSessionProps(c, "sessionProperties");
          })),
        (this.validateNamespaces = (t, i) => {
          let n = cb(t, "connect()", i);
          if (n) throw new Error(n.message);
        }),
        (this.isValidApprove = (t) =>
          C(this, null, function* () {
            if (!pr(t))
              throw new Error(
                de("MISSING_OR_INVALID", `approve() params: ${t}`).message
              );
            let {
              id: i,
              namespaces: n,
              relayProtocol: o,
              sessionProperties: c,
            } = t;
            this.checkRecentlyDeleted(i), yield this.isValidProposalId(i);
            let l = this.client.proposal.get(i),
              p = ch(n, "approve()");
            if (p) throw new Error(p.message);
            let g = hp(l.requiredNamespaces, n, "approve()");
            if (g) throw new Error(g.message);
            if (!Ft(o, !0)) {
              let { message: y } = de(
                "MISSING_OR_INVALID",
                `approve() relayProtocol: ${o}`
              );
              throw new Error(y);
            }
            sr(c) || this.validateSessionProps(c, "sessionProperties");
          })),
        (this.isValidReject = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `reject() params: ${t}`
              );
              throw new Error(o);
            }
            let { id: i, reason: n } = t;
            if (
              (this.checkRecentlyDeleted(i),
              yield this.isValidProposalId(i),
              !lb(n))
            ) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `reject() reason: ${JSON.stringify(n)}`
              );
              throw new Error(o);
            }
          })),
        (this.isValidSessionSettleRequest = (t) => {
          if (!pr(t)) {
            let { message: g } = de(
              "MISSING_OR_INVALID",
              `onSessionSettleRequest() params: ${t}`
            );
            throw new Error(g);
          }
          let { relay: i, controller: n, namespaces: o, expiry: c } = t;
          if (!cp(i)) {
            let { message: g } = de(
              "MISSING_OR_INVALID",
              "onSessionSettleRequest() relay protocol should be a string"
            );
            throw new Error(g);
          }
          let l = ob(n, "onSessionSettleRequest()");
          if (l) throw new Error(l.message);
          let p = ch(o, "onSessionSettleRequest()");
          if (p) throw new Error(p.message);
          if (Yi(c)) {
            let { message: g } = de("EXPIRED", "onSessionSettleRequest()");
            throw new Error(g);
          }
        }),
        (this.isValidUpdate = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `update() params: ${t}`
              );
              throw new Error(p);
            }
            let { topic: i, namespaces: n } = t;
            this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
            let o = this.client.session.get(i),
              c = ch(n, "update()");
            if (c) throw new Error(c.message);
            let l = hp(o.requiredNamespaces, n, "update()");
            if (l) throw new Error(l.message);
          })),
        (this.isValidExtend = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `extend() params: ${t}`
              );
              throw new Error(n);
            }
            let { topic: i } = t;
            this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
          })),
        (this.isValidRequest = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `request() params: ${t}`
              );
              throw new Error(p);
            }
            let { topic: i, request: n, chainId: o, expiry: c } = t;
            this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
            let { namespaces: l } = this.client.session.get(i);
            if (!up(l, o)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `request() chainId: ${o}`
              );
              throw new Error(p);
            }
            if (!fb(n)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `request() ${JSON.stringify(n)}`
              );
              throw new Error(p);
            }
            if (!gb(l, o, n.method)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `request() method: ${n.method}`
              );
              throw new Error(p);
            }
            if (c && !yb(c, F0)) {
              let { message: p } = de(
                "MISSING_OR_INVALID",
                `request() expiry: ${c}. Expiry must be a number (in seconds) between ${F0.min} and ${F0.max}`
              );
              throw new Error(p);
            }
          })),
        (this.isValidRespond = (t) =>
          C(this, null, function* () {
            var i;
            if (!pr(t)) {
              let { message: c } = de(
                "MISSING_OR_INVALID",
                `respond() params: ${t}`
              );
              throw new Error(c);
            }
            let { topic: n, response: o } = t;
            try {
              yield this.isValidSessionTopic(n);
            } catch (c) {
              throw (
                ((i = t?.response) != null &&
                  i.id &&
                  this.cleanupAfterResponse(t),
                c)
              );
            }
            if (!db(o)) {
              let { message: c } = de(
                "MISSING_OR_INVALID",
                `respond() response: ${JSON.stringify(o)}`
              );
              throw new Error(c);
            }
          })),
        (this.isValidPing = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `ping() params: ${t}`
              );
              throw new Error(n);
            }
            let { topic: i } = t;
            yield this.isValidSessionOrPairingTopic(i);
          })),
        (this.isValidEmit = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() params: ${t}`
              );
              throw new Error(l);
            }
            let { topic: i, event: n, chainId: o } = t;
            yield this.isValidSessionTopic(i);
            let { namespaces: c } = this.client.session.get(i);
            if (!up(c, o)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() chainId: ${o}`
              );
              throw new Error(l);
            }
            if (!pb(n)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(n)}`
              );
              throw new Error(l);
            }
            if (!mb(c, o, n.name)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(n)}`
              );
              throw new Error(l);
            }
          })),
        (this.isValidDisconnect = (t) =>
          C(this, null, function* () {
            if (!pr(t)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `disconnect() params: ${t}`
              );
              throw new Error(n);
            }
            let { topic: i } = t;
            yield this.isValidSessionOrPairingTopic(i);
          })),
        (this.isValidAuthenticate = (t) => {
          let { chains: i, uri: n, domain: o, nonce: c } = t;
          if (!Array.isArray(i) || i.length === 0)
            throw new Error("chains is required and must be a non-empty array");
          if (!Ft(n, !1)) throw new Error("uri is required parameter");
          if (!Ft(o, !1)) throw new Error("domain is required parameter");
          if (!Ft(c, !1)) throw new Error("nonce is required parameter");
          if ([...new Set(i.map((p) => Bo(p).namespace))].length > 1)
            throw new Error(
              "Multi-namespace requests are not supported. Please request single namespace only."
            );
          let { namespace: l } = Bo(i[0]);
          if (l !== "eip155")
            throw new Error(
              "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
            );
        }),
        (this.getVerifyContext = (t, i) =>
          C(this, null, function* () {
            let n = {
              verified: {
                verifyUrl: i.verifyUrl || Ys,
                validation: "UNKNOWN",
                origin: i.url || "",
              },
            };
            try {
              let o = yield this.client.core.verify.resolve({
                attestationId: t,
                verifyUrl: i.verifyUrl,
              });
              o &&
                ((n.verified.origin = o.origin),
                (n.verified.isScam = o.isScam),
                (n.verified.validation =
                  o.origin === new URL(i.url).origin ? "VALID" : "INVALID"));
            } catch (o) {
              this.client.logger.info(o);
            }
            return (
              this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n
            );
          })),
        (this.validateSessionProps = (t, i) => {
          Object.values(t).forEach((n) => {
            if (!Ft(n, !1)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `${i} must be in Record<string, string> format. Received: ${JSON.stringify(
                  n
                )}`
              );
              throw new Error(o);
            }
          });
        }),
        (this.getPendingAuthRequest = (t) => {
          let i = this.client.auth.requests.get(t);
          return typeof i == "object" ? i : void 0;
        }),
        (this.addToRecentlyDeleted = (t, i) => {
          if (
            (this.recentlyDeletedMap.set(t, i),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
          ) {
            let n = 0,
              o = this.recentlyDeletedLimit / 2;
            for (let c of this.recentlyDeletedMap.keys()) {
              if (n++ >= o) break;
              this.recentlyDeletedMap.delete(c);
            }
          }
        }),
        (this.checkRecentlyDeleted = (t) => {
          let i = this.recentlyDeletedMap.get(t);
          if (i) {
            let { message: n } = de(
              "MISSING_OR_INVALID",
              `Record was recently deleted - ${i}: ${t}`
            );
            throw new Error(n);
          }
        });
    }
    isInitialized() {
      return C(this, null, function* () {
        if (!this.initialized) {
          let { message: e } = de("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
        yield this.client.core.relayer.confirmOnlineStateOrThrow();
      });
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(Ir.message, (e) =>
        C(this, null, function* () {
          let { topic: t, message: i } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(il)
              ? this.client.auth.authKeys.get(il)
              : { responseTopic: void 0, publicKey: void 0 },
            o = yield this.client.core.crypto.decode(t, i, {
              receiverPublicKey: n,
            });
          try {
            ea(o)
              ? (this.client.core.history.set(t, o),
                this.onRelayEventRequest({ topic: t, payload: o }))
              : ps(o)
              ? (yield this.client.core.history.resolve(o),
                yield this.onRelayEventResponse({ topic: t, payload: o }),
                this.client.core.history.delete(t, o.id))
              : this.onRelayEventUnknownPayload({ topic: t, payload: o });
          } catch (c) {
            this.client.logger.error(c);
          }
        })
      );
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(Wr.expired, (e) =>
        C(this, null, function* () {
          let { topic: t, id: i } = ih(e.target);
          if (i && this.client.pendingRequest.keys.includes(i))
            return yield this.deletePendingSessionRequest(i, de("EXPIRED"), !0);
          if (i && this.client.auth.requests.keys.includes(i))
            return yield this.deletePendingAuthRequest(i, de("EXPIRED"), !0);
          t
            ? this.client.session.keys.includes(t) &&
              (yield this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
              this.client.events.emit("session_expire", { topic: t }))
            : i &&
              (yield this.deleteProposal(i, !0),
              this.client.events.emit("proposal_expire", { id: i }));
        })
      );
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(Ws.create, (e) =>
        this.onPairingCreated(e)
      ),
        this.client.core.pairing.events.on(Ws.delete, (e) => {
          this.addToRecentlyDeleted(e.topic, "pairing");
        });
    }
    isValidPairingTopic(e) {
      if (!Ft(e, !1)) {
        let { message: t } = de(
          "MISSING_OR_INVALID",
          `pairing topic should be a string: ${e}`
        );
        throw new Error(t);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        let { message: t } = de(
          "NO_MATCHING_KEY",
          `pairing topic doesn't exist: ${e}`
        );
        throw new Error(t);
      }
      if (Yi(this.client.core.pairing.pairings.get(e).expiry)) {
        let { message: t } = de("EXPIRED", `pairing topic: ${e}`);
        throw new Error(t);
      }
    }
    isValidSessionTopic(e) {
      return C(this, null, function* () {
        if (!Ft(e, !1)) {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `session topic should be a string: ${e}`
          );
          throw new Error(t);
        }
        if (
          (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))
        ) {
          let { message: t } = de(
            "NO_MATCHING_KEY",
            `session topic doesn't exist: ${e}`
          );
          throw new Error(t);
        }
        if (Yi(this.client.session.get(e).expiry)) {
          yield this.deleteSession({ topic: e });
          let { message: t } = de("EXPIRED", `session topic: ${e}`);
          throw new Error(t);
        }
        if (!this.client.core.crypto.keychain.has(e)) {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `session topic does not exist in keychain: ${e}`
          );
          throw (yield this.deleteSession({ topic: e }), new Error(t));
        }
      });
    }
    isValidSessionOrPairingTopic(e) {
      return C(this, null, function* () {
        if (
          (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
        )
          yield this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
          this.isValidPairingTopic(e);
        else if (Ft(e, !1)) {
          let { message: t } = de(
            "NO_MATCHING_KEY",
            `session or pairing topic doesn't exist: ${e}`
          );
          throw new Error(t);
        } else {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `session or pairing topic should be a string: ${e}`
          );
          throw new Error(t);
        }
      });
    }
    isValidProposalId(e) {
      return C(this, null, function* () {
        if (!hb(e)) {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `proposal id should be a number: ${e}`
          );
          throw new Error(t);
        }
        if (!this.client.proposal.keys.includes(e)) {
          let { message: t } = de(
            "NO_MATCHING_KEY",
            `proposal id doesn't exist: ${e}`
          );
          throw new Error(t);
        }
        if (Yi(this.client.proposal.get(e).expiryTimestamp)) {
          yield this.deleteProposal(e);
          let { message: t } = de("EXPIRED", `proposal id: ${e}`);
          throw new Error(t);
        }
      });
    }
  },
  B0 = class extends on {
    constructor(e, t) {
      super(e, t, vF, K0), (this.core = e), (this.logger = t);
    }
  },
  U0 = class extends on {
    constructor(e, t) {
      super(e, t, wF, K0), (this.core = e), (this.logger = t);
    }
  },
  q0 = class extends on {
    constructor(e, t) {
      super(e, t, _F, K0, (i) => i.id), (this.core = e), (this.logger = t);
    }
  },
  j0 = class extends on {
    constructor(e, t) {
      super(e, t, xF, ol, () => il), (this.core = e), (this.logger = t);
    }
  },
  z0 = class extends on {
    constructor(e, t) {
      super(e, t, IF, ol), (this.core = e), (this.logger = t);
    }
  },
  k0 = class extends on {
    constructor(e, t) {
      super(e, t, DF, ol, (i) => i.id), (this.core = e), (this.logger = t);
    }
  },
  H0 = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        (this.authKeys = new j0(this.core, this.logger)),
        (this.pairingTopics = new z0(this.core, this.logger)),
        (this.requests = new k0(this.core, this.logger));
    }
    init() {
      return C(this, null, function* () {
        yield this.authKeys.init(),
          yield this.pairingTopics.init(),
          yield this.requests.init();
      });
    }
  },
  nl = class r extends Ch {
    constructor(e) {
      super(e),
        (this.protocol = h_),
        (this.version = l_),
        (this.name = T0.name),
        (this.events = new sl.EventEmitter()),
        (this.on = (i, n) => this.events.on(i, n)),
        (this.once = (i, n) => this.events.once(i, n)),
        (this.off = (i, n) => this.events.off(i, n)),
        (this.removeListener = (i, n) => this.events.removeListener(i, n)),
        (this.removeAllListeners = (i) => this.events.removeAllListeners(i)),
        (this.connect = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.connect(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.pair = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.pair(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.approve = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.approve(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.reject = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.reject(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.update = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.update(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.extend = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.extend(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.request = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.request(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.respond = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.respond(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.ping = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.ping(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.emit = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.emit(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.disconnect = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.disconnect(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.find = (i) => {
          try {
            return this.engine.find(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        }),
        (this.getPendingSessionRequests = () => {
          try {
            return this.engine.getPendingSessionRequests();
          } catch (i) {
            throw (this.logger.error(i.message), i);
          }
        }),
        (this.authenticate = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.authenticate(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.formatAuthMessage = (i) => {
          try {
            return this.engine.formatAuthMessage(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        }),
        (this.approveSessionAuthenticate = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.approveSessionAuthenticate(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.rejectSessionAuthenticate = (i) =>
          C(this, null, function* () {
            try {
              return yield this.engine.rejectSessionAuthenticate(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.name = e?.name || T0.name),
        (this.metadata = e?.metadata || tw()),
        (this.signConfig = e?.signConfig);
      let t =
        typeof e?.logger < "u" && typeof e?.logger != "string"
          ? e.logger
          : (0, js.default)(zs({ level: e?.logger || T0.logger }));
      (this.core = e?.core || new o_(e)),
        (this.logger = mr(t, this.name)),
        (this.session = new U0(this.core, this.logger)),
        (this.proposal = new B0(this.core, this.logger)),
        (this.pendingRequest = new q0(this.core, this.logger)),
        (this.engine = new L0(this)),
        (this.auth = new H0(this.core, this.logger));
    }
    static init(e) {
      return C(this, null, function* () {
        let t = new r(e);
        return yield t.initialize(), t;
      });
    }
    get context() {
      return gr(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    initialize() {
      return C(this, null, function* () {
        this.logger.trace("Initialized");
        try {
          yield this.core.start(),
            yield this.session.init(),
            yield this.proposal.init(),
            yield this.pendingRequest.init(),
            yield this.engine.init(),
            yield this.auth.init(),
            this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
            this.logger.info("SignClient Initialization Success");
        } catch (e) {
          throw (
            (this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e)
          );
        }
      });
    }
  };
var __ = Je(An()),
  G0 = Je(p_());
var NF = Object.defineProperty,
  TF = Object.defineProperties,
  FF = Object.getOwnPropertyDescriptors,
  g_ = Object.getOwnPropertySymbols,
  LF = Object.prototype.hasOwnProperty,
  BF = Object.prototype.propertyIsEnumerable,
  m_ = (r, e, t) =>
    e in r
      ? NF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  y_ = (r, e) => {
    for (var t in e || (e = {})) LF.call(e, t) && m_(r, t, e[t]);
    if (g_) for (var t of g_(e)) BF.call(e, t) && m_(r, t, e[t]);
    return r;
  },
  v_ = (r, e) => TF(r, FF(e)),
  UF = { Accept: "application/json", "Content-Type": "application/json" },
  qF = "POST",
  w_ = { headers: UF, method: qF },
  b_ = 10,
  li = class {
    constructor(e, t = !1) {
      if (
        ((this.url = e),
        (this.disableProviderPing = t),
        (this.events = new __.EventEmitter()),
        (this.isAvailable = !1),
        (this.registering = !1),
        !kh(e))
      )
        throw new Error(
          `Provided URL is not compatible with HTTP connection: ${e}`
        );
      (this.url = e), (this.disableProviderPing = t);
    }
    get connected() {
      return this.isAvailable;
    }
    get connecting() {
      return this.registering;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    open() {
      return C(this, arguments, function* (e = this.url) {
        yield this.register(e);
      });
    }
    close() {
      return C(this, null, function* () {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose();
      });
    }
    send(e) {
      return C(this, null, function* () {
        this.isAvailable || (yield this.register());
        try {
          let t = Sr(e),
            i = yield (yield (0, G0.default)(
              this.url,
              v_(y_({}, w_), { body: t })
            )).json();
          this.onPayload({ data: i });
        } catch (t) {
          this.onError(e.id, t);
        }
      });
    }
    register() {
      return C(this, arguments, function* (e = this.url) {
        if (!kh(e))
          throw new Error(
            `Provided URL is not compatible with HTTP connection: ${e}`
          );
        if (this.registering) {
          let t = this.events.getMaxListeners();
          return (
            (this.events.listenerCount("register_error") >= t ||
              this.events.listenerCount("open") >= t) &&
              this.events.setMaxListeners(t + 1),
            new Promise((i, n) => {
              this.events.once("register_error", (o) => {
                this.resetMaxListeners(), n(o);
              }),
                this.events.once("open", () => {
                  if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                    return n(
                      new Error("HTTP connection is missing or invalid")
                    );
                  i();
                });
            })
          );
        }
        (this.url = e), (this.registering = !0);
        try {
          if (!this.disableProviderPing) {
            let t = Sr({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
            yield (0, G0.default)(e, v_(y_({}, w_), { body: t }));
          }
          this.onOpen();
        } catch (t) {
          let i = this.parseError(t);
          throw (this.events.emit("register_error", i), this.onClose(), i);
        }
      });
    }
    onOpen() {
      (this.isAvailable = !0),
        (this.registering = !1),
        this.events.emit("open");
    }
    onClose() {
      (this.isAvailable = !1),
        (this.registering = !1),
        this.events.emit("close");
    }
    onPayload(e) {
      if (typeof e.data > "u") return;
      let t = typeof e.data == "string" ? Zi(e.data) : e.data;
      this.events.emit("payload", t);
    }
    onError(e, t) {
      let i = this.parseError(t),
        n = i.message || i.toString(),
        o = Un(e, n);
      this.events.emit("payload", o);
    }
    parseError(e, t = this.url) {
      return vc(e, t, "HTTP");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > b_ && this.events.setMaxListeners(b_);
    }
  };
var O_ = Je(An());
var E_ = "error",
  jF = "wss://relay.walletconnect.com",
  zF = "wc",
  kF = "universal_provider",
  A_ = `${zF}@2:${kF}:`,
  HF = "https://rpc.walletconnect.com/v1/",
  Hn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" },
  Oc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Q0 = { exports: {} };
(function (r, e) {
  (function () {
    var t,
      i = "4.17.21",
      n = 200,
      o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      c = "Expected a function",
      l = "Invalid `variable` option passed into `_.template`",
      p = "__lodash_hash_undefined__",
      g = 500,
      y = "__lodash_placeholder__",
      v = 1,
      A = 2,
      E = 4,
      P = 1,
      T = 2,
      L = 1,
      H = 2,
      Q = 4,
      J = 8,
      G = 16,
      W = 32,
      Z = 64,
      U = 128,
      B = 256,
      ae = 512,
      fe = 30,
      M = "...",
      q = 800,
      h = 16,
      m = 1,
      b = 2,
      S = 3,
      R = 1 / 0,
      N = 9007199254740991,
      z = 17976931348623157e292,
      I = NaN,
      d = 4294967295,
      D = d - 1,
      ce = d >>> 1,
      ie = [
        ["ary", U],
        ["bind", L],
        ["bindKey", H],
        ["curry", J],
        ["curryRight", G],
        ["flip", ae],
        ["partial", W],
        ["partialRight", Z],
        ["rearg", B],
      ],
      w = "[object Arguments]",
      $ = "[object Array]",
      K = "[object AsyncFunction]",
      Y = "[object Boolean]",
      ue = "[object Date]",
      se = "[object DOMException]",
      oe = "[object Error]",
      le = "[object Function]",
      pe = "[object GeneratorFunction]",
      ne = "[object Map]",
      ve = "[object Number]",
      ht = "[object Null]",
      qe = "[object Object]",
      Di = "[object Promise]",
      lt = "[object Proxy]",
      Ke = "[object RegExp]",
      Kt = "[object Set]",
      Ve = "[object String]",
      We = "[object Symbol]",
      an = "[object Undefined]",
      Ge = "[object WeakMap]",
      ft = "[object WeakSet]",
      Fr = "[object ArrayBuffer]",
      ke = "[object DataView]",
      Xe = "[object Float32Array]",
      fi = "[object Float64Array]",
      Ze = "[object Int8Array]",
      et = "[object Int16Array]",
      di = "[object Int32Array]",
      tt = "[object Uint8Array]",
      rt = "[object Uint8ClampedArray]",
      pi = "[object Uint16Array]",
      it = "[object Uint32Array]",
      dt = /\b__p \+= '';/g,
      cn = /\b(__p \+=) '' \+/g,
      pt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      ot = /&(?:amp|lt|gt|quot|#39);/g,
      Ri = /[&<>"']/g,
      gt = RegExp(ot.source),
      mt = RegExp(Ri.source),
      un = /<%-([\s\S]+?)%>/g,
      yt = /<%([\s\S]+?)%>/g,
      at = /<%=([\s\S]+?)%>/g,
      hn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      vt = /^\w*$/,
      wt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      gi = /[\\^$.*+?()[\]{}|]/g,
      bt = RegExp(gi.source),
      nt = /^\s+/,
      ln = /\s/,
      _t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Et = /\{\n\/\* \[wrapped with (.+)\] \*/,
      fn = /,? & /,
      At = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      St = /[()=,{}\[\]\/\s]/,
      dn = /\\(\\)?/g,
      xt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      ct = /\w*$/,
      Ci = /^[-+]0x[0-9a-f]+$/i,
      Oi = /^0b[01]+$/i,
      Pi = /^\[object .+?Constructor\]$/,
      Mi = /^0o[0-7]+$/i,
      Ni = /^(?:0|[1-9]\d*)$/,
      Ti = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Kn = /($^)/,
      aa = /['\n\r\u2028\u2029\\]/g,
      Vn = "\\ud800-\\udfff",
      ca = "\\u0300-\\u036f",
      ua = "\\ufe20-\\ufe2f",
      ha = "\\u20d0-\\u20ff",
      Zs = ca + ua + ha,
      eo = "\\u2700-\\u27bf",
      to = "a-z\\xdf-\\xf6\\xf8-\\xff",
      la = "\\xac\\xb1\\xd7\\xf7",
      fa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      da = "\\u2000-\\u206f",
      pa =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      lg = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      fg = "\\ufe0e\\ufe0f",
      dg = la + fa + da + pa,
      dl = "['\u2019]",
      B_ = "[" + Vn + "]",
      pg = "[" + dg + "]",
      Pc = "[" + Zs + "]",
      gg = "\\d+",
      U_ = "[" + eo + "]",
      mg = "[" + to + "]",
      yg = "[^" + Vn + dg + gg + eo + to + lg + "]",
      pl = "\\ud83c[\\udffb-\\udfff]",
      q_ = "(?:" + Pc + "|" + pl + ")",
      vg = "[^" + Vn + "]",
      gl = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ml = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      ro = "[" + lg + "]",
      wg = "\\u200d",
      bg = "(?:" + mg + "|" + yg + ")",
      j_ = "(?:" + ro + "|" + yg + ")",
      _g = "(?:" + dl + "(?:d|ll|m|re|s|t|ve))?",
      Eg = "(?:" + dl + "(?:D|LL|M|RE|S|T|VE))?",
      Ag = q_ + "?",
      Sg = "[" + fg + "]?",
      z_ = "(?:" + wg + "(?:" + [vg, gl, ml].join("|") + ")" + Sg + Ag + ")*",
      k_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      H_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      xg = Sg + Ag + z_,
      K_ = "(?:" + [U_, gl, ml].join("|") + ")" + xg,
      V_ = "(?:" + [vg + Pc + "?", Pc, gl, ml, B_].join("|") + ")",
      G_ = RegExp(dl, "g"),
      $_ = RegExp(Pc, "g"),
      yl = RegExp(pl + "(?=" + pl + ")|" + V_ + xg, "g"),
      J_ = RegExp(
        [
          ro + "?" + mg + "+" + _g + "(?=" + [pg, ro, "$"].join("|") + ")",
          j_ + "+" + Eg + "(?=" + [pg, ro + bg, "$"].join("|") + ")",
          ro + "?" + bg + "+" + _g,
          ro + "+" + Eg,
          H_,
          k_,
          gg,
          K_,
        ].join("|"),
        "g"
      ),
      W_ = RegExp("[" + wg + Vn + Zs + fg + "]"),
      Y_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Q_ = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      X_ = -1,
      Ct = {};
    (Ct[Xe] =
      Ct[fi] =
      Ct[Ze] =
      Ct[et] =
      Ct[di] =
      Ct[tt] =
      Ct[rt] =
      Ct[pi] =
      Ct[it] =
        !0),
      (Ct[w] =
        Ct[$] =
        Ct[Fr] =
        Ct[Y] =
        Ct[ke] =
        Ct[ue] =
        Ct[oe] =
        Ct[le] =
        Ct[ne] =
        Ct[ve] =
        Ct[qe] =
        Ct[Ke] =
        Ct[Kt] =
        Ct[Ve] =
        Ct[Ge] =
          !1);
    var Dt = {};
    (Dt[w] =
      Dt[$] =
      Dt[Fr] =
      Dt[ke] =
      Dt[Y] =
      Dt[ue] =
      Dt[Xe] =
      Dt[fi] =
      Dt[Ze] =
      Dt[et] =
      Dt[di] =
      Dt[ne] =
      Dt[ve] =
      Dt[qe] =
      Dt[Ke] =
      Dt[Kt] =
      Dt[Ve] =
      Dt[We] =
      Dt[tt] =
      Dt[rt] =
      Dt[pi] =
      Dt[it] =
        !0),
      (Dt[oe] = Dt[le] = Dt[Ge] = !1);
    var Z_ = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      e6 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      t6 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      r6 = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      i6 = parseFloat,
      n6 = parseInt,
      Ig = typeof Oc == "object" && Oc && Oc.Object === Object && Oc,
      s6 = typeof self == "object" && self && self.Object === Object && self,
      er = Ig || s6 || Function("return this")(),
      vl = e && !e.nodeType && e,
      bs = vl && !0 && r && !r.nodeType && r,
      Dg = bs && bs.exports === vl,
      wl = Dg && Ig.process,
      Qr = (function () {
        try {
          var k = bs && bs.require && bs.require("util").types;
          return k || (wl && wl.binding && wl.binding("util"));
        } catch {}
      })(),
      Rg = Qr && Qr.isArrayBuffer,
      Cg = Qr && Qr.isDate,
      Og = Qr && Qr.isMap,
      Pg = Qr && Qr.isRegExp,
      Mg = Qr && Qr.isSet,
      Ng = Qr && Qr.isTypedArray;
    function Lr(k, ee, X) {
      switch (X.length) {
        case 0:
          return k.call(ee);
        case 1:
          return k.call(ee, X[0]);
        case 2:
          return k.call(ee, X[0], X[1]);
        case 3:
          return k.call(ee, X[0], X[1], X[2]);
      }
      return k.apply(ee, X);
    }
    function o6(k, ee, X, ye) {
      for (var xe = -1, $e = k == null ? 0 : k.length; ++xe < $e; ) {
        var Vt = k[xe];
        ee(ye, Vt, X(Vt), k);
      }
      return ye;
    }
    function Xr(k, ee) {
      for (
        var X = -1, ye = k == null ? 0 : k.length;
        ++X < ye && ee(k[X], X, k) !== !1;

      );
      return k;
    }
    function a6(k, ee) {
      for (var X = k == null ? 0 : k.length; X-- && ee(k[X], X, k) !== !1; );
      return k;
    }
    function Tg(k, ee) {
      for (var X = -1, ye = k == null ? 0 : k.length; ++X < ye; )
        if (!ee(k[X], X, k)) return !1;
      return !0;
    }
    function Gn(k, ee) {
      for (
        var X = -1, ye = k == null ? 0 : k.length, xe = 0, $e = [];
        ++X < ye;

      ) {
        var Vt = k[X];
        ee(Vt, X, k) && ($e[xe++] = Vt);
      }
      return $e;
    }
    function Mc(k, ee) {
      var X = k == null ? 0 : k.length;
      return !!X && io(k, ee, 0) > -1;
    }
    function bl(k, ee, X) {
      for (var ye = -1, xe = k == null ? 0 : k.length; ++ye < xe; )
        if (X(ee, k[ye])) return !0;
      return !1;
    }
    function Pt(k, ee) {
      for (
        var X = -1, ye = k == null ? 0 : k.length, xe = Array(ye);
        ++X < ye;

      )
        xe[X] = ee(k[X], X, k);
      return xe;
    }
    function $n(k, ee) {
      for (var X = -1, ye = ee.length, xe = k.length; ++X < ye; )
        k[xe + X] = ee[X];
      return k;
    }
    function _l(k, ee, X, ye) {
      var xe = -1,
        $e = k == null ? 0 : k.length;
      for (ye && $e && (X = k[++xe]); ++xe < $e; ) X = ee(X, k[xe], xe, k);
      return X;
    }
    function c6(k, ee, X, ye) {
      var xe = k == null ? 0 : k.length;
      for (ye && xe && (X = k[--xe]); xe--; ) X = ee(X, k[xe], xe, k);
      return X;
    }
    function El(k, ee) {
      for (var X = -1, ye = k == null ? 0 : k.length; ++X < ye; )
        if (ee(k[X], X, k)) return !0;
      return !1;
    }
    var u6 = Al("length");
    function h6(k) {
      return k.split("");
    }
    function l6(k) {
      return k.match(At) || [];
    }
    function Fg(k, ee, X) {
      var ye;
      return (
        X(k, function (xe, $e, Vt) {
          if (ee(xe, $e, Vt)) return (ye = $e), !1;
        }),
        ye
      );
    }
    function Nc(k, ee, X, ye) {
      for (var xe = k.length, $e = X + (ye ? 1 : -1); ye ? $e-- : ++$e < xe; )
        if (ee(k[$e], $e, k)) return $e;
      return -1;
    }
    function io(k, ee, X) {
      return ee === ee ? A6(k, ee, X) : Nc(k, Lg, X);
    }
    function f6(k, ee, X, ye) {
      for (var xe = X - 1, $e = k.length; ++xe < $e; )
        if (ye(k[xe], ee)) return xe;
      return -1;
    }
    function Lg(k) {
      return k !== k;
    }
    function Bg(k, ee) {
      var X = k == null ? 0 : k.length;
      return X ? xl(k, ee) / X : I;
    }
    function Al(k) {
      return function (ee) {
        return ee == null ? t : ee[k];
      };
    }
    function Sl(k) {
      return function (ee) {
        return k == null ? t : k[ee];
      };
    }
    function Ug(k, ee, X, ye, xe) {
      return (
        xe(k, function ($e, Vt, It) {
          X = ye ? ((ye = !1), $e) : ee(X, $e, Vt, It);
        }),
        X
      );
    }
    function d6(k, ee) {
      var X = k.length;
      for (k.sort(ee); X--; ) k[X] = k[X].value;
      return k;
    }
    function xl(k, ee) {
      for (var X, ye = -1, xe = k.length; ++ye < xe; ) {
        var $e = ee(k[ye]);
        $e !== t && (X = X === t ? $e : X + $e);
      }
      return X;
    }
    function Il(k, ee) {
      for (var X = -1, ye = Array(k); ++X < k; ) ye[X] = ee(X);
      return ye;
    }
    function p6(k, ee) {
      return Pt(ee, function (X) {
        return [X, k[X]];
      });
    }
    function qg(k) {
      return k && k.slice(0, Hg(k) + 1).replace(nt, "");
    }
    function Br(k) {
      return function (ee) {
        return k(ee);
      };
    }
    function Dl(k, ee) {
      return Pt(ee, function (X) {
        return k[X];
      });
    }
    function ga(k, ee) {
      return k.has(ee);
    }
    function jg(k, ee) {
      for (var X = -1, ye = k.length; ++X < ye && io(ee, k[X], 0) > -1; );
      return X;
    }
    function zg(k, ee) {
      for (var X = k.length; X-- && io(ee, k[X], 0) > -1; );
      return X;
    }
    function g6(k, ee) {
      for (var X = k.length, ye = 0; X--; ) k[X] === ee && ++ye;
      return ye;
    }
    var m6 = Sl(Z_),
      y6 = Sl(e6);
    function v6(k) {
      return "\\" + r6[k];
    }
    function w6(k, ee) {
      return k == null ? t : k[ee];
    }
    function no(k) {
      return W_.test(k);
    }
    function b6(k) {
      return Y_.test(k);
    }
    function _6(k) {
      for (var ee, X = []; !(ee = k.next()).done; ) X.push(ee.value);
      return X;
    }
    function Rl(k) {
      var ee = -1,
        X = Array(k.size);
      return (
        k.forEach(function (ye, xe) {
          X[++ee] = [xe, ye];
        }),
        X
      );
    }
    function kg(k, ee) {
      return function (X) {
        return k(ee(X));
      };
    }
    function Jn(k, ee) {
      for (var X = -1, ye = k.length, xe = 0, $e = []; ++X < ye; ) {
        var Vt = k[X];
        (Vt === ee || Vt === y) && ((k[X] = y), ($e[xe++] = X));
      }
      return $e;
    }
    function Tc(k) {
      var ee = -1,
        X = Array(k.size);
      return (
        k.forEach(function (ye) {
          X[++ee] = ye;
        }),
        X
      );
    }
    function E6(k) {
      var ee = -1,
        X = Array(k.size);
      return (
        k.forEach(function (ye) {
          X[++ee] = [ye, ye];
        }),
        X
      );
    }
    function A6(k, ee, X) {
      for (var ye = X - 1, xe = k.length; ++ye < xe; )
        if (k[ye] === ee) return ye;
      return -1;
    }
    function S6(k, ee, X) {
      for (var ye = X + 1; ye--; ) if (k[ye] === ee) return ye;
      return ye;
    }
    function so(k) {
      return no(k) ? I6(k) : u6(k);
    }
    function mi(k) {
      return no(k) ? D6(k) : h6(k);
    }
    function Hg(k) {
      for (var ee = k.length; ee-- && ln.test(k.charAt(ee)); );
      return ee;
    }
    var x6 = Sl(t6);
    function I6(k) {
      for (var ee = (yl.lastIndex = 0); yl.test(k); ) ++ee;
      return ee;
    }
    function D6(k) {
      return k.match(yl) || [];
    }
    function R6(k) {
      return k.match(J_) || [];
    }
    var C6 = function k(ee) {
        ee = ee == null ? er : oo.defaults(er.Object(), ee, oo.pick(er, Q_));
        var X = ee.Array,
          ye = ee.Date,
          xe = ee.Error,
          $e = ee.Function,
          Vt = ee.Math,
          It = ee.Object,
          Cl = ee.RegExp,
          O6 = ee.String,
          Zr = ee.TypeError,
          Fc = X.prototype,
          P6 = $e.prototype,
          ao = It.prototype,
          Lc = ee["__core-js_shared__"],
          Bc = P6.toString,
          st = ao.hasOwnProperty,
          M6 = 0,
          Kg = (function () {
            var s = /[^.]+$/.exec((Lc && Lc.keys && Lc.keys.IE_PROTO) || "");
            return s ? "Symbol(src)_1." + s : "";
          })(),
          Uc = ao.toString,
          N6 = Bc.call(It),
          T6 = er._,
          F6 = Cl(
            "^" +
              Bc.call(st)
                .replace(gi, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          qc = Dg ? ee.Buffer : t,
          Wn = ee.Symbol,
          jc = ee.Uint8Array,
          Vg = qc ? qc.allocUnsafe : t,
          zc = kg(It.getPrototypeOf, It),
          Gg = It.create,
          $g = ao.propertyIsEnumerable,
          kc = Fc.splice,
          Jg = Wn ? Wn.isConcatSpreadable : t,
          ma = Wn ? Wn.iterator : t,
          _s = Wn ? Wn.toStringTag : t,
          Hc = (function () {
            try {
              var s = Is(It, "defineProperty");
              return s({}, "", {}), s;
            } catch {}
          })(),
          L6 = ee.clearTimeout !== er.clearTimeout && ee.clearTimeout,
          B6 = ye && ye.now !== er.Date.now && ye.now,
          U6 = ee.setTimeout !== er.setTimeout && ee.setTimeout,
          Kc = Vt.ceil,
          Vc = Vt.floor,
          Ol = It.getOwnPropertySymbols,
          q6 = qc ? qc.isBuffer : t,
          Wg = ee.isFinite,
          j6 = Fc.join,
          z6 = kg(It.keys, It),
          Gt = Vt.max,
          cr = Vt.min,
          k6 = ye.now,
          H6 = ee.parseInt,
          Yg = Vt.random,
          K6 = Fc.reverse,
          Pl = Is(ee, "DataView"),
          ya = Is(ee, "Map"),
          Ml = Is(ee, "Promise"),
          co = Is(ee, "Set"),
          va = Is(ee, "WeakMap"),
          wa = Is(It, "create"),
          Gc = va && new va(),
          uo = {},
          V6 = Ds(Pl),
          G6 = Ds(ya),
          $6 = Ds(Ml),
          J6 = Ds(co),
          W6 = Ds(va),
          $c = Wn ? Wn.prototype : t,
          ba = $c ? $c.valueOf : t,
          Qg = $c ? $c.toString : t;
        function x(s) {
          if (Lt(s) && !De(s) && !(s instanceof Le)) {
            if (s instanceof ei) return s;
            if (st.call(s, "__wrapped__")) return X1(s);
          }
          return new ei(s);
        }
        var ho = (function () {
          function s() {}
          return function (a) {
            if (!Tt(a)) return {};
            if (Gg) return Gg(a);
            s.prototype = a;
            var u = new s();
            return (s.prototype = t), u;
          };
        })();
        function Jc() {}
        function ei(s, a) {
          (this.__wrapped__ = s),
            (this.__actions__ = []),
            (this.__chain__ = !!a),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (x.templateSettings = {
          escape: un,
          evaluate: yt,
          interpolate: at,
          variable: "",
          imports: { _: x },
        }),
          (x.prototype = Jc.prototype),
          (x.prototype.constructor = x),
          (ei.prototype = ho(Jc.prototype)),
          (ei.prototype.constructor = ei);
        function Le(s) {
          (this.__wrapped__ = s),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = d),
            (this.__views__ = []);
        }
        function Y6() {
          var s = new Le(this.__wrapped__);
          return (
            (s.__actions__ = Dr(this.__actions__)),
            (s.__dir__ = this.__dir__),
            (s.__filtered__ = this.__filtered__),
            (s.__iteratees__ = Dr(this.__iteratees__)),
            (s.__takeCount__ = this.__takeCount__),
            (s.__views__ = Dr(this.__views__)),
            s
          );
        }
        function Q6() {
          if (this.__filtered__) {
            var s = new Le(this);
            (s.__dir__ = -1), (s.__filtered__ = !0);
          } else (s = this.clone()), (s.__dir__ *= -1);
          return s;
        }
        function X6() {
          var s = this.__wrapped__.value(),
            a = this.__dir__,
            u = De(s),
            f = a < 0,
            _ = u ? s.length : 0,
            O = hA(0, _, this.__views__),
            F = O.start,
            j = O.end,
            V = j - F,
            te = f ? j : F - 1,
            re = this.__iteratees__,
            he = re.length,
            ge = 0,
            we = cr(V, this.__takeCount__);
          if (!u || (!f && _ == V && we == V)) return _1(s, this.__actions__);
          var Ee = [];
          e: for (; V-- && ge < we; ) {
            te += a;
            for (var Oe = -1, Ae = s[te]; ++Oe < he; ) {
              var Fe = re[Oe],
                je = Fe.iteratee,
                jr = Fe.type,
                br = je(Ae);
              if (jr == b) Ae = br;
              else if (!br) {
                if (jr == m) continue e;
                break e;
              }
            }
            Ee[ge++] = Ae;
          }
          return Ee;
        }
        (Le.prototype = ho(Jc.prototype)), (Le.prototype.constructor = Le);
        function Es(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.clear(); ++a < u; ) {
            var f = s[a];
            this.set(f[0], f[1]);
          }
        }
        function Z6() {
          (this.__data__ = wa ? wa(null) : {}), (this.size = 0);
        }
        function eE(s) {
          var a = this.has(s) && delete this.__data__[s];
          return (this.size -= a ? 1 : 0), a;
        }
        function tE(s) {
          var a = this.__data__;
          if (wa) {
            var u = a[s];
            return u === p ? t : u;
          }
          return st.call(a, s) ? a[s] : t;
        }
        function rE(s) {
          var a = this.__data__;
          return wa ? a[s] !== t : st.call(a, s);
        }
        function iE(s, a) {
          var u = this.__data__;
          return (
            (this.size += this.has(s) ? 0 : 1),
            (u[s] = wa && a === t ? p : a),
            this
          );
        }
        (Es.prototype.clear = Z6),
          (Es.prototype.delete = eE),
          (Es.prototype.get = tE),
          (Es.prototype.has = rE),
          (Es.prototype.set = iE);
        function pn(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.clear(); ++a < u; ) {
            var f = s[a];
            this.set(f[0], f[1]);
          }
        }
        function nE() {
          (this.__data__ = []), (this.size = 0);
        }
        function sE(s) {
          var a = this.__data__,
            u = Wc(a, s);
          if (u < 0) return !1;
          var f = a.length - 1;
          return u == f ? a.pop() : kc.call(a, u, 1), --this.size, !0;
        }
        function oE(s) {
          var a = this.__data__,
            u = Wc(a, s);
          return u < 0 ? t : a[u][1];
        }
        function aE(s) {
          return Wc(this.__data__, s) > -1;
        }
        function cE(s, a) {
          var u = this.__data__,
            f = Wc(u, s);
          return f < 0 ? (++this.size, u.push([s, a])) : (u[f][1] = a), this;
        }
        (pn.prototype.clear = nE),
          (pn.prototype.delete = sE),
          (pn.prototype.get = oE),
          (pn.prototype.has = aE),
          (pn.prototype.set = cE);
        function gn(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.clear(); ++a < u; ) {
            var f = s[a];
            this.set(f[0], f[1]);
          }
        }
        function uE() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Es(),
              map: new (ya || pn)(),
              string: new Es(),
            });
        }
        function hE(s) {
          var a = au(this, s).delete(s);
          return (this.size -= a ? 1 : 0), a;
        }
        function lE(s) {
          return au(this, s).get(s);
        }
        function fE(s) {
          return au(this, s).has(s);
        }
        function dE(s, a) {
          var u = au(this, s),
            f = u.size;
          return u.set(s, a), (this.size += u.size == f ? 0 : 1), this;
        }
        (gn.prototype.clear = uE),
          (gn.prototype.delete = hE),
          (gn.prototype.get = lE),
          (gn.prototype.has = fE),
          (gn.prototype.set = dE);
        function As(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.__data__ = new gn(); ++a < u; ) this.add(s[a]);
        }
        function pE(s) {
          return this.__data__.set(s, p), this;
        }
        function gE(s) {
          return this.__data__.has(s);
        }
        (As.prototype.add = As.prototype.push = pE), (As.prototype.has = gE);
        function yi(s) {
          var a = (this.__data__ = new pn(s));
          this.size = a.size;
        }
        function mE() {
          (this.__data__ = new pn()), (this.size = 0);
        }
        function yE(s) {
          var a = this.__data__,
            u = a.delete(s);
          return (this.size = a.size), u;
        }
        function vE(s) {
          return this.__data__.get(s);
        }
        function wE(s) {
          return this.__data__.has(s);
        }
        function bE(s, a) {
          var u = this.__data__;
          if (u instanceof pn) {
            var f = u.__data__;
            if (!ya || f.length < n - 1)
              return f.push([s, a]), (this.size = ++u.size), this;
            u = this.__data__ = new gn(f);
          }
          return u.set(s, a), (this.size = u.size), this;
        }
        (yi.prototype.clear = mE),
          (yi.prototype.delete = yE),
          (yi.prototype.get = vE),
          (yi.prototype.has = wE),
          (yi.prototype.set = bE);
        function Xg(s, a) {
          var u = De(s),
            f = !u && Rs(s),
            _ = !u && !f && es(s),
            O = !u && !f && !_ && go(s),
            F = u || f || _ || O,
            j = F ? Il(s.length, O6) : [],
            V = j.length;
          for (var te in s)
            (a || st.call(s, te)) &&
              !(
                F &&
                (te == "length" ||
                  (_ && (te == "offset" || te == "parent")) ||
                  (O &&
                    (te == "buffer" ||
                      te == "byteLength" ||
                      te == "byteOffset")) ||
                  wn(te, V))
              ) &&
              j.push(te);
          return j;
        }
        function Zg(s) {
          var a = s.length;
          return a ? s[Hl(0, a - 1)] : t;
        }
        function _E(s, a) {
          return cu(Dr(s), Ss(a, 0, s.length));
        }
        function EE(s) {
          return cu(Dr(s));
        }
        function Nl(s, a, u) {
          ((u !== t && !vi(s[a], u)) || (u === t && !(a in s))) && mn(s, a, u);
        }
        function _a(s, a, u) {
          var f = s[a];
          (!(st.call(s, a) && vi(f, u)) || (u === t && !(a in s))) &&
            mn(s, a, u);
        }
        function Wc(s, a) {
          for (var u = s.length; u--; ) if (vi(s[u][0], a)) return u;
          return -1;
        }
        function AE(s, a, u, f) {
          return (
            Yn(s, function (_, O, F) {
              a(f, _, u(_), F);
            }),
            f
          );
        }
        function e1(s, a) {
          return s && Li(a, Qt(a), s);
        }
        function SE(s, a) {
          return s && Li(a, Cr(a), s);
        }
        function mn(s, a, u) {
          a == "__proto__" && Hc
            ? Hc(s, a, {
                configurable: !0,
                enumerable: !0,
                value: u,
                writable: !0,
              })
            : (s[a] = u);
        }
        function Tl(s, a) {
          for (var u = -1, f = a.length, _ = X(f), O = s == null; ++u < f; )
            _[u] = O ? t : gf(s, a[u]);
          return _;
        }
        function Ss(s, a, u) {
          return (
            s === s &&
              (u !== t && (s = s <= u ? s : u),
              a !== t && (s = s >= a ? s : a)),
            s
          );
        }
        function ti(s, a, u, f, _, O) {
          var F,
            j = a & v,
            V = a & A,
            te = a & E;
          if ((u && (F = _ ? u(s, f, _, O) : u(s)), F !== t)) return F;
          if (!Tt(s)) return s;
          var re = De(s);
          if (re) {
            if (((F = fA(s)), !j)) return Dr(s, F);
          } else {
            var he = ur(s),
              ge = he == le || he == pe;
            if (es(s)) return S1(s, j);
            if (he == qe || he == w || (ge && !_)) {
              if (((F = V || ge ? {} : H1(s)), !j))
                return V ? tA(s, SE(F, s)) : eA(s, e1(F, s));
            } else {
              if (!Dt[he]) return _ ? s : {};
              F = dA(s, he, j);
            }
          }
          O || (O = new yi());
          var we = O.get(s);
          if (we) return we;
          O.set(s, F),
            vm(s)
              ? s.forEach(function (Ae) {
                  F.add(ti(Ae, a, u, Ae, s, O));
                })
              : mm(s) &&
                s.forEach(function (Ae, Fe) {
                  F.set(Fe, ti(Ae, a, u, Fe, s, O));
                });
          var Ee = te ? (V ? ef : Zl) : V ? Cr : Qt,
            Oe = re ? t : Ee(s);
          return (
            Xr(Oe || s, function (Ae, Fe) {
              Oe && ((Fe = Ae), (Ae = s[Fe])),
                _a(F, Fe, ti(Ae, a, u, Fe, s, O));
            }),
            F
          );
        }
        function xE(s) {
          var a = Qt(s);
          return function (u) {
            return t1(u, s, a);
          };
        }
        function t1(s, a, u) {
          var f = u.length;
          if (s == null) return !f;
          for (s = It(s); f--; ) {
            var _ = u[f],
              O = a[_],
              F = s[_];
            if ((F === t && !(_ in s)) || !O(F)) return !1;
          }
          return !0;
        }
        function r1(s, a, u) {
          if (typeof s != "function") throw new Zr(c);
          return Ra(function () {
            s.apply(t, u);
          }, a);
        }
        function Ea(s, a, u, f) {
          var _ = -1,
            O = Mc,
            F = !0,
            j = s.length,
            V = [],
            te = a.length;
          if (!j) return V;
          u && (a = Pt(a, Br(u))),
            f
              ? ((O = bl), (F = !1))
              : a.length >= n && ((O = ga), (F = !1), (a = new As(a)));
          e: for (; ++_ < j; ) {
            var re = s[_],
              he = u == null ? re : u(re);
            if (((re = f || re !== 0 ? re : 0), F && he === he)) {
              for (var ge = te; ge--; ) if (a[ge] === he) continue e;
              V.push(re);
            } else O(a, he, f) || V.push(re);
          }
          return V;
        }
        var Yn = C1(Fi),
          i1 = C1(Ll, !0);
        function IE(s, a) {
          var u = !0;
          return (
            Yn(s, function (f, _, O) {
              return (u = !!a(f, _, O)), u;
            }),
            u
          );
        }
        function Yc(s, a, u) {
          for (var f = -1, _ = s.length; ++f < _; ) {
            var O = s[f],
              F = a(O);
            if (F != null && (j === t ? F === F && !qr(F) : u(F, j)))
              var j = F,
                V = O;
          }
          return V;
        }
        function DE(s, a, u, f) {
          var _ = s.length;
          for (
            u = Ce(u),
              u < 0 && (u = -u > _ ? 0 : _ + u),
              f = f === t || f > _ ? _ : Ce(f),
              f < 0 && (f += _),
              f = u > f ? 0 : bm(f);
            u < f;

          )
            s[u++] = a;
          return s;
        }
        function n1(s, a) {
          var u = [];
          return (
            Yn(s, function (f, _, O) {
              a(f, _, O) && u.push(f);
            }),
            u
          );
        }
        function tr(s, a, u, f, _) {
          var O = -1,
            F = s.length;
          for (u || (u = gA), _ || (_ = []); ++O < F; ) {
            var j = s[O];
            a > 0 && u(j)
              ? a > 1
                ? tr(j, a - 1, u, f, _)
                : $n(_, j)
              : f || (_[_.length] = j);
          }
          return _;
        }
        var Fl = O1(),
          s1 = O1(!0);
        function Fi(s, a) {
          return s && Fl(s, a, Qt);
        }
        function Ll(s, a) {
          return s && s1(s, a, Qt);
        }
        function Qc(s, a) {
          return Gn(a, function (u) {
            return bn(s[u]);
          });
        }
        function xs(s, a) {
          a = Xn(a, s);
          for (var u = 0, f = a.length; s != null && u < f; ) s = s[Bi(a[u++])];
          return u && u == f ? s : t;
        }
        function o1(s, a, u) {
          var f = a(s);
          return De(s) ? f : $n(f, u(s));
        }
        function vr(s) {
          return s == null
            ? s === t
              ? an
              : ht
            : _s && _s in It(s)
            ? uA(s)
            : EA(s);
        }
        function Bl(s, a) {
          return s > a;
        }
        function RE(s, a) {
          return s != null && st.call(s, a);
        }
        function CE(s, a) {
          return s != null && a in It(s);
        }
        function OE(s, a, u) {
          return s >= cr(a, u) && s < Gt(a, u);
        }
        function Ul(s, a, u) {
          for (
            var f = u ? bl : Mc,
              _ = s[0].length,
              O = s.length,
              F = O,
              j = X(O),
              V = 1 / 0,
              te = [];
            F--;

          ) {
            var re = s[F];
            F && a && (re = Pt(re, Br(a))),
              (V = cr(re.length, V)),
              (j[F] =
                !u && (a || (_ >= 120 && re.length >= 120))
                  ? new As(F && re)
                  : t);
          }
          re = s[0];
          var he = -1,
            ge = j[0];
          e: for (; ++he < _ && te.length < V; ) {
            var we = re[he],
              Ee = a ? a(we) : we;
            if (
              ((we = u || we !== 0 ? we : 0), !(ge ? ga(ge, Ee) : f(te, Ee, u)))
            ) {
              for (F = O; --F; ) {
                var Oe = j[F];
                if (!(Oe ? ga(Oe, Ee) : f(s[F], Ee, u))) continue e;
              }
              ge && ge.push(Ee), te.push(we);
            }
          }
          return te;
        }
        function PE(s, a, u, f) {
          return (
            Fi(s, function (_, O, F) {
              a(f, u(_), O, F);
            }),
            f
          );
        }
        function Aa(s, a, u) {
          (a = Xn(a, s)), (s = $1(s, a));
          var f = s == null ? s : s[Bi(ii(a))];
          return f == null ? t : Lr(f, s, u);
        }
        function a1(s) {
          return Lt(s) && vr(s) == w;
        }
        function ME(s) {
          return Lt(s) && vr(s) == Fr;
        }
        function NE(s) {
          return Lt(s) && vr(s) == ue;
        }
        function Sa(s, a, u, f, _) {
          return s === a
            ? !0
            : s == null || a == null || (!Lt(s) && !Lt(a))
            ? s !== s && a !== a
            : TE(s, a, u, f, Sa, _);
        }
        function TE(s, a, u, f, _, O) {
          var F = De(s),
            j = De(a),
            V = F ? $ : ur(s),
            te = j ? $ : ur(a);
          (V = V == w ? qe : V), (te = te == w ? qe : te);
          var re = V == qe,
            he = te == qe,
            ge = V == te;
          if (ge && es(s)) {
            if (!es(a)) return !1;
            (F = !0), (re = !1);
          }
          if (ge && !re)
            return (
              O || (O = new yi()),
              F || go(s) ? j1(s, a, u, f, _, O) : aA(s, a, V, u, f, _, O)
            );
          if (!(u & P)) {
            var we = re && st.call(s, "__wrapped__"),
              Ee = he && st.call(a, "__wrapped__");
            if (we || Ee) {
              var Oe = we ? s.value() : s,
                Ae = Ee ? a.value() : a;
              return O || (O = new yi()), _(Oe, Ae, u, f, O);
            }
          }
          return ge ? (O || (O = new yi()), cA(s, a, u, f, _, O)) : !1;
        }
        function FE(s) {
          return Lt(s) && ur(s) == ne;
        }
        function ql(s, a, u, f) {
          var _ = u.length,
            O = _,
            F = !f;
          if (s == null) return !O;
          for (s = It(s); _--; ) {
            var j = u[_];
            if (F && j[2] ? j[1] !== s[j[0]] : !(j[0] in s)) return !1;
          }
          for (; ++_ < O; ) {
            j = u[_];
            var V = j[0],
              te = s[V],
              re = j[1];
            if (F && j[2]) {
              if (te === t && !(V in s)) return !1;
            } else {
              var he = new yi();
              if (f) var ge = f(te, re, V, s, a, he);
              if (!(ge === t ? Sa(re, te, P | T, f, he) : ge)) return !1;
            }
          }
          return !0;
        }
        function c1(s) {
          if (!Tt(s) || yA(s)) return !1;
          var a = bn(s) ? F6 : Pi;
          return a.test(Ds(s));
        }
        function LE(s) {
          return Lt(s) && vr(s) == Ke;
        }
        function BE(s) {
          return Lt(s) && ur(s) == Kt;
        }
        function UE(s) {
          return Lt(s) && pu(s.length) && !!Ct[vr(s)];
        }
        function u1(s) {
          return typeof s == "function"
            ? s
            : s == null
            ? Or
            : typeof s == "object"
            ? De(s)
              ? f1(s[0], s[1])
              : l1(s)
            : Pm(s);
        }
        function jl(s) {
          if (!Da(s)) return z6(s);
          var a = [];
          for (var u in It(s)) st.call(s, u) && u != "constructor" && a.push(u);
          return a;
        }
        function qE(s) {
          if (!Tt(s)) return _A(s);
          var a = Da(s),
            u = [];
          for (var f in s)
            (f == "constructor" && (a || !st.call(s, f))) || u.push(f);
          return u;
        }
        function zl(s, a) {
          return s < a;
        }
        function h1(s, a) {
          var u = -1,
            f = Rr(s) ? X(s.length) : [];
          return (
            Yn(s, function (_, O, F) {
              f[++u] = a(_, O, F);
            }),
            f
          );
        }
        function l1(s) {
          var a = rf(s);
          return a.length == 1 && a[0][2]
            ? V1(a[0][0], a[0][1])
            : function (u) {
                return u === s || ql(u, s, a);
              };
        }
        function f1(s, a) {
          return sf(s) && K1(a)
            ? V1(Bi(s), a)
            : function (u) {
                var f = gf(u, s);
                return f === t && f === a ? mf(u, s) : Sa(a, f, P | T);
              };
        }
        function Xc(s, a, u, f, _) {
          s !== a &&
            Fl(
              a,
              function (O, F) {
                if ((_ || (_ = new yi()), Tt(O))) jE(s, a, F, u, Xc, f, _);
                else {
                  var j = f ? f(af(s, F), O, F + "", s, a, _) : t;
                  j === t && (j = O), Nl(s, F, j);
                }
              },
              Cr
            );
        }
        function jE(s, a, u, f, _, O, F) {
          var j = af(s, u),
            V = af(a, u),
            te = F.get(V);
          if (te) {
            Nl(s, u, te);
            return;
          }
          var re = O ? O(j, V, u + "", s, a, F) : t,
            he = re === t;
          if (he) {
            var ge = De(V),
              we = !ge && es(V),
              Ee = !ge && !we && go(V);
            (re = V),
              ge || we || Ee
                ? De(j)
                  ? (re = j)
                  : jt(j)
                  ? (re = Dr(j))
                  : we
                  ? ((he = !1), (re = S1(V, !0)))
                  : Ee
                  ? ((he = !1), (re = x1(V, !0)))
                  : (re = [])
                : Ca(V) || Rs(V)
                ? ((re = j),
                  Rs(j) ? (re = _m(j)) : (!Tt(j) || bn(j)) && (re = H1(V)))
                : (he = !1);
          }
          he && (F.set(V, re), _(re, V, f, O, F), F.delete(V)), Nl(s, u, re);
        }
        function d1(s, a) {
          var u = s.length;
          if (u) return (a += a < 0 ? u : 0), wn(a, u) ? s[a] : t;
        }
        function p1(s, a, u) {
          a.length
            ? (a = Pt(a, function (O) {
                return De(O)
                  ? function (F) {
                      return xs(F, O.length === 1 ? O[0] : O);
                    }
                  : O;
              }))
            : (a = [Or]);
          var f = -1;
          a = Pt(a, Br(_e()));
          var _ = h1(s, function (O, F, j) {
            var V = Pt(a, function (te) {
              return te(O);
            });
            return { criteria: V, index: ++f, value: O };
          });
          return d6(_, function (O, F) {
            return ZE(O, F, u);
          });
        }
        function zE(s, a) {
          return g1(s, a, function (u, f) {
            return mf(s, f);
          });
        }
        function g1(s, a, u) {
          for (var f = -1, _ = a.length, O = {}; ++f < _; ) {
            var F = a[f],
              j = xs(s, F);
            u(j, F) && xa(O, Xn(F, s), j);
          }
          return O;
        }
        function kE(s) {
          return function (a) {
            return xs(a, s);
          };
        }
        function kl(s, a, u, f) {
          var _ = f ? f6 : io,
            O = -1,
            F = a.length,
            j = s;
          for (s === a && (a = Dr(a)), u && (j = Pt(s, Br(u))); ++O < F; )
            for (
              var V = 0, te = a[O], re = u ? u(te) : te;
              (V = _(j, re, V, f)) > -1;

            )
              j !== s && kc.call(j, V, 1), kc.call(s, V, 1);
          return s;
        }
        function m1(s, a) {
          for (var u = s ? a.length : 0, f = u - 1; u--; ) {
            var _ = a[u];
            if (u == f || _ !== O) {
              var O = _;
              wn(_) ? kc.call(s, _, 1) : Gl(s, _);
            }
          }
          return s;
        }
        function Hl(s, a) {
          return s + Vc(Yg() * (a - s + 1));
        }
        function HE(s, a, u, f) {
          for (var _ = -1, O = Gt(Kc((a - s) / (u || 1)), 0), F = X(O); O--; )
            (F[f ? O : ++_] = s), (s += u);
          return F;
        }
        function Kl(s, a) {
          var u = "";
          if (!s || a < 1 || a > N) return u;
          do a % 2 && (u += s), (a = Vc(a / 2)), a && (s += s);
          while (a);
          return u;
        }
        function Pe(s, a) {
          return cf(G1(s, a, Or), s + "");
        }
        function KE(s) {
          return Zg(mo(s));
        }
        function VE(s, a) {
          var u = mo(s);
          return cu(u, Ss(a, 0, u.length));
        }
        function xa(s, a, u, f) {
          if (!Tt(s)) return s;
          a = Xn(a, s);
          for (
            var _ = -1, O = a.length, F = O - 1, j = s;
            j != null && ++_ < O;

          ) {
            var V = Bi(a[_]),
              te = u;
            if (V === "__proto__" || V === "constructor" || V === "prototype")
              return s;
            if (_ != F) {
              var re = j[V];
              (te = f ? f(re, V, j) : t),
                te === t && (te = Tt(re) ? re : wn(a[_ + 1]) ? [] : {});
            }
            _a(j, V, te), (j = j[V]);
          }
          return s;
        }
        var y1 = Gc
            ? function (s, a) {
                return Gc.set(s, a), s;
              }
            : Or,
          GE = Hc
            ? function (s, a) {
                return Hc(s, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: vf(a),
                  writable: !0,
                });
              }
            : Or;
        function $E(s) {
          return cu(mo(s));
        }
        function ri(s, a, u) {
          var f = -1,
            _ = s.length;
          a < 0 && (a = -a > _ ? 0 : _ + a),
            (u = u > _ ? _ : u),
            u < 0 && (u += _),
            (_ = a > u ? 0 : (u - a) >>> 0),
            (a >>>= 0);
          for (var O = X(_); ++f < _; ) O[f] = s[f + a];
          return O;
        }
        function JE(s, a) {
          var u;
          return (
            Yn(s, function (f, _, O) {
              return (u = a(f, _, O)), !u;
            }),
            !!u
          );
        }
        function Zc(s, a, u) {
          var f = 0,
            _ = s == null ? f : s.length;
          if (typeof a == "number" && a === a && _ <= ce) {
            for (; f < _; ) {
              var O = (f + _) >>> 1,
                F = s[O];
              F !== null && !qr(F) && (u ? F <= a : F < a)
                ? (f = O + 1)
                : (_ = O);
            }
            return _;
          }
          return Vl(s, a, Or, u);
        }
        function Vl(s, a, u, f) {
          var _ = 0,
            O = s == null ? 0 : s.length;
          if (O === 0) return 0;
          a = u(a);
          for (
            var F = a !== a, j = a === null, V = qr(a), te = a === t;
            _ < O;

          ) {
            var re = Vc((_ + O) / 2),
              he = u(s[re]),
              ge = he !== t,
              we = he === null,
              Ee = he === he,
              Oe = qr(he);
            if (F) var Ae = f || Ee;
            else
              te
                ? (Ae = Ee && (f || ge))
                : j
                ? (Ae = Ee && ge && (f || !we))
                : V
                ? (Ae = Ee && ge && !we && (f || !Oe))
                : we || Oe
                ? (Ae = !1)
                : (Ae = f ? he <= a : he < a);
            Ae ? (_ = re + 1) : (O = re);
          }
          return cr(O, D);
        }
        function v1(s, a) {
          for (var u = -1, f = s.length, _ = 0, O = []; ++u < f; ) {
            var F = s[u],
              j = a ? a(F) : F;
            if (!u || !vi(j, V)) {
              var V = j;
              O[_++] = F === 0 ? 0 : F;
            }
          }
          return O;
        }
        function w1(s) {
          return typeof s == "number" ? s : qr(s) ? I : +s;
        }
        function Ur(s) {
          if (typeof s == "string") return s;
          if (De(s)) return Pt(s, Ur) + "";
          if (qr(s)) return Qg ? Qg.call(s) : "";
          var a = s + "";
          return a == "0" && 1 / s == -R ? "-0" : a;
        }
        function Qn(s, a, u) {
          var f = -1,
            _ = Mc,
            O = s.length,
            F = !0,
            j = [],
            V = j;
          if (u) (F = !1), (_ = bl);
          else if (O >= n) {
            var te = a ? null : sA(s);
            if (te) return Tc(te);
            (F = !1), (_ = ga), (V = new As());
          } else V = a ? [] : j;
          e: for (; ++f < O; ) {
            var re = s[f],
              he = a ? a(re) : re;
            if (((re = u || re !== 0 ? re : 0), F && he === he)) {
              for (var ge = V.length; ge--; ) if (V[ge] === he) continue e;
              a && V.push(he), j.push(re);
            } else _(V, he, u) || (V !== j && V.push(he), j.push(re));
          }
          return j;
        }
        function Gl(s, a) {
          return (
            (a = Xn(a, s)), (s = $1(s, a)), s == null || delete s[Bi(ii(a))]
          );
        }
        function b1(s, a, u, f) {
          return xa(s, a, u(xs(s, a)), f);
        }
        function eu(s, a, u, f) {
          for (
            var _ = s.length, O = f ? _ : -1;
            (f ? O-- : ++O < _) && a(s[O], O, s);

          );
          return u
            ? ri(s, f ? 0 : O, f ? O + 1 : _)
            : ri(s, f ? O + 1 : 0, f ? _ : O);
        }
        function _1(s, a) {
          var u = s;
          return (
            u instanceof Le && (u = u.value()),
            _l(
              a,
              function (f, _) {
                return _.func.apply(_.thisArg, $n([f], _.args));
              },
              u
            )
          );
        }
        function $l(s, a, u) {
          var f = s.length;
          if (f < 2) return f ? Qn(s[0]) : [];
          for (var _ = -1, O = X(f); ++_ < f; )
            for (var F = s[_], j = -1; ++j < f; )
              j != _ && (O[_] = Ea(O[_] || F, s[j], a, u));
          return Qn(tr(O, 1), a, u);
        }
        function E1(s, a, u) {
          for (var f = -1, _ = s.length, O = a.length, F = {}; ++f < _; ) {
            var j = f < O ? a[f] : t;
            u(F, s[f], j);
          }
          return F;
        }
        function Jl(s) {
          return jt(s) ? s : [];
        }
        function Wl(s) {
          return typeof s == "function" ? s : Or;
        }
        function Xn(s, a) {
          return De(s) ? s : sf(s, a) ? [s] : Q1(Ye(s));
        }
        var WE = Pe;
        function Zn(s, a, u) {
          var f = s.length;
          return (u = u === t ? f : u), !a && u >= f ? s : ri(s, a, u);
        }
        var A1 =
          L6 ||
          function (s) {
            return er.clearTimeout(s);
          };
        function S1(s, a) {
          if (a) return s.slice();
          var u = s.length,
            f = Vg ? Vg(u) : new s.constructor(u);
          return s.copy(f), f;
        }
        function Yl(s) {
          var a = new s.constructor(s.byteLength);
          return new jc(a).set(new jc(s)), a;
        }
        function YE(s, a) {
          var u = a ? Yl(s.buffer) : s.buffer;
          return new s.constructor(u, s.byteOffset, s.byteLength);
        }
        function QE(s) {
          var a = new s.constructor(s.source, ct.exec(s));
          return (a.lastIndex = s.lastIndex), a;
        }
        function XE(s) {
          return ba ? It(ba.call(s)) : {};
        }
        function x1(s, a) {
          var u = a ? Yl(s.buffer) : s.buffer;
          return new s.constructor(u, s.byteOffset, s.length);
        }
        function I1(s, a) {
          if (s !== a) {
            var u = s !== t,
              f = s === null,
              _ = s === s,
              O = qr(s),
              F = a !== t,
              j = a === null,
              V = a === a,
              te = qr(a);
            if (
              (!j && !te && !O && s > a) ||
              (O && F && V && !j && !te) ||
              (f && F && V) ||
              (!u && V) ||
              !_
            )
              return 1;
            if (
              (!f && !O && !te && s < a) ||
              (te && u && _ && !f && !O) ||
              (j && u && _) ||
              (!F && _) ||
              !V
            )
              return -1;
          }
          return 0;
        }
        function ZE(s, a, u) {
          for (
            var f = -1,
              _ = s.criteria,
              O = a.criteria,
              F = _.length,
              j = u.length;
            ++f < F;

          ) {
            var V = I1(_[f], O[f]);
            if (V) {
              if (f >= j) return V;
              var te = u[f];
              return V * (te == "desc" ? -1 : 1);
            }
          }
          return s.index - a.index;
        }
        function D1(s, a, u, f) {
          for (
            var _ = -1,
              O = s.length,
              F = u.length,
              j = -1,
              V = a.length,
              te = Gt(O - F, 0),
              re = X(V + te),
              he = !f;
            ++j < V;

          )
            re[j] = a[j];
          for (; ++_ < F; ) (he || _ < O) && (re[u[_]] = s[_]);
          for (; te--; ) re[j++] = s[_++];
          return re;
        }
        function R1(s, a, u, f) {
          for (
            var _ = -1,
              O = s.length,
              F = -1,
              j = u.length,
              V = -1,
              te = a.length,
              re = Gt(O - j, 0),
              he = X(re + te),
              ge = !f;
            ++_ < re;

          )
            he[_] = s[_];
          for (var we = _; ++V < te; ) he[we + V] = a[V];
          for (; ++F < j; ) (ge || _ < O) && (he[we + u[F]] = s[_++]);
          return he;
        }
        function Dr(s, a) {
          var u = -1,
            f = s.length;
          for (a || (a = X(f)); ++u < f; ) a[u] = s[u];
          return a;
        }
        function Li(s, a, u, f) {
          var _ = !u;
          u || (u = {});
          for (var O = -1, F = a.length; ++O < F; ) {
            var j = a[O],
              V = f ? f(u[j], s[j], j, u, s) : t;
            V === t && (V = s[j]), _ ? mn(u, j, V) : _a(u, j, V);
          }
          return u;
        }
        function eA(s, a) {
          return Li(s, nf(s), a);
        }
        function tA(s, a) {
          return Li(s, z1(s), a);
        }
        function tu(s, a) {
          return function (u, f) {
            var _ = De(u) ? o6 : AE,
              O = a ? a() : {};
            return _(u, s, _e(f, 2), O);
          };
        }
        function lo(s) {
          return Pe(function (a, u) {
            var f = -1,
              _ = u.length,
              O = _ > 1 ? u[_ - 1] : t,
              F = _ > 2 ? u[2] : t;
            for (
              O = s.length > 3 && typeof O == "function" ? (_--, O) : t,
                F && wr(u[0], u[1], F) && ((O = _ < 3 ? t : O), (_ = 1)),
                a = It(a);
              ++f < _;

            ) {
              var j = u[f];
              j && s(a, j, f, O);
            }
            return a;
          });
        }
        function C1(s, a) {
          return function (u, f) {
            if (u == null) return u;
            if (!Rr(u)) return s(u, f);
            for (
              var _ = u.length, O = a ? _ : -1, F = It(u);
              (a ? O-- : ++O < _) && f(F[O], O, F) !== !1;

            );
            return u;
          };
        }
        function O1(s) {
          return function (a, u, f) {
            for (var _ = -1, O = It(a), F = f(a), j = F.length; j--; ) {
              var V = F[s ? j : ++_];
              if (u(O[V], V, O) === !1) break;
            }
            return a;
          };
        }
        function rA(s, a, u) {
          var f = a & L,
            _ = Ia(s);
          function O() {
            var F = this && this !== er && this instanceof O ? _ : s;
            return F.apply(f ? u : this, arguments);
          }
          return O;
        }
        function P1(s) {
          return function (a) {
            a = Ye(a);
            var u = no(a) ? mi(a) : t,
              f = u ? u[0] : a.charAt(0),
              _ = u ? Zn(u, 1).join("") : a.slice(1);
            return f[s]() + _;
          };
        }
        function fo(s) {
          return function (a) {
            return _l(Cm(Rm(a).replace(G_, "")), s, "");
          };
        }
        function Ia(s) {
          return function () {
            var a = arguments;
            switch (a.length) {
              case 0:
                return new s();
              case 1:
                return new s(a[0]);
              case 2:
                return new s(a[0], a[1]);
              case 3:
                return new s(a[0], a[1], a[2]);
              case 4:
                return new s(a[0], a[1], a[2], a[3]);
              case 5:
                return new s(a[0], a[1], a[2], a[3], a[4]);
              case 6:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5]);
              case 7:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
            }
            var u = ho(s.prototype),
              f = s.apply(u, a);
            return Tt(f) ? f : u;
          };
        }
        function iA(s, a, u) {
          var f = Ia(s);
          function _() {
            for (var O = arguments.length, F = X(O), j = O, V = po(_); j--; )
              F[j] = arguments[j];
            var te = O < 3 && F[0] !== V && F[O - 1] !== V ? [] : Jn(F, V);
            if (((O -= te.length), O < u))
              return L1(s, a, ru, _.placeholder, t, F, te, t, t, u - O);
            var re = this && this !== er && this instanceof _ ? f : s;
            return Lr(re, this, F);
          }
          return _;
        }
        function M1(s) {
          return function (a, u, f) {
            var _ = It(a);
            if (!Rr(a)) {
              var O = _e(u, 3);
              (a = Qt(a)),
                (u = function (j) {
                  return O(_[j], j, _);
                });
            }
            var F = s(a, u, f);
            return F > -1 ? _[O ? a[F] : F] : t;
          };
        }
        function N1(s) {
          return vn(function (a) {
            var u = a.length,
              f = u,
              _ = ei.prototype.thru;
            for (s && a.reverse(); f--; ) {
              var O = a[f];
              if (typeof O != "function") throw new Zr(c);
              if (_ && !F && ou(O) == "wrapper") var F = new ei([], !0);
            }
            for (f = F ? f : u; ++f < u; ) {
              O = a[f];
              var j = ou(O),
                V = j == "wrapper" ? tf(O) : t;
              V &&
              of(V[0]) &&
              V[1] == (U | J | W | B) &&
              !V[4].length &&
              V[9] == 1
                ? (F = F[ou(V[0])].apply(F, V[3]))
                : (F = O.length == 1 && of(O) ? F[j]() : F.thru(O));
            }
            return function () {
              var te = arguments,
                re = te[0];
              if (F && te.length == 1 && De(re)) return F.plant(re).value();
              for (var he = 0, ge = u ? a[he].apply(this, te) : re; ++he < u; )
                ge = a[he].call(this, ge);
              return ge;
            };
          });
        }
        function ru(s, a, u, f, _, O, F, j, V, te) {
          var re = a & U,
            he = a & L,
            ge = a & H,
            we = a & (J | G),
            Ee = a & ae,
            Oe = ge ? t : Ia(s);
          function Ae() {
            for (var Fe = arguments.length, je = X(Fe), jr = Fe; jr--; )
              je[jr] = arguments[jr];
            if (we)
              var br = po(Ae),
                zr = g6(je, br);
            if (
              (f && (je = D1(je, f, _, we)),
              O && (je = R1(je, O, F, we)),
              (Fe -= zr),
              we && Fe < te)
            ) {
              var zt = Jn(je, br);
              return L1(s, a, ru, Ae.placeholder, u, je, zt, j, V, te - Fe);
            }
            var wi = he ? u : this,
              En = ge ? wi[s] : s;
            return (
              (Fe = je.length),
              j ? (je = AA(je, j)) : Ee && Fe > 1 && je.reverse(),
              re && V < Fe && (je.length = V),
              this && this !== er && this instanceof Ae && (En = Oe || Ia(En)),
              En.apply(wi, je)
            );
          }
          return Ae;
        }
        function T1(s, a) {
          return function (u, f) {
            return PE(u, s, a(f), {});
          };
        }
        function iu(s, a) {
          return function (u, f) {
            var _;
            if (u === t && f === t) return a;
            if ((u !== t && (_ = u), f !== t)) {
              if (_ === t) return f;
              typeof u == "string" || typeof f == "string"
                ? ((u = Ur(u)), (f = Ur(f)))
                : ((u = w1(u)), (f = w1(f))),
                (_ = s(u, f));
            }
            return _;
          };
        }
        function Ql(s) {
          return vn(function (a) {
            return (
              (a = Pt(a, Br(_e()))),
              Pe(function (u) {
                var f = this;
                return s(a, function (_) {
                  return Lr(_, f, u);
                });
              })
            );
          });
        }
        function nu(s, a) {
          a = a === t ? " " : Ur(a);
          var u = a.length;
          if (u < 2) return u ? Kl(a, s) : a;
          var f = Kl(a, Kc(s / so(a)));
          return no(a) ? Zn(mi(f), 0, s).join("") : f.slice(0, s);
        }
        function nA(s, a, u, f) {
          var _ = a & L,
            O = Ia(s);
          function F() {
            for (
              var j = -1,
                V = arguments.length,
                te = -1,
                re = f.length,
                he = X(re + V),
                ge = this && this !== er && this instanceof F ? O : s;
              ++te < re;

            )
              he[te] = f[te];
            for (; V--; ) he[te++] = arguments[++j];
            return Lr(ge, _ ? u : this, he);
          }
          return F;
        }
        function F1(s) {
          return function (a, u, f) {
            return (
              f && typeof f != "number" && wr(a, u, f) && (u = f = t),
              (a = _n(a)),
              u === t ? ((u = a), (a = 0)) : (u = _n(u)),
              (f = f === t ? (a < u ? 1 : -1) : _n(f)),
              HE(a, u, f, s)
            );
          };
        }
        function su(s) {
          return function (a, u) {
            return (
              (typeof a == "string" && typeof u == "string") ||
                ((a = ni(a)), (u = ni(u))),
              s(a, u)
            );
          };
        }
        function L1(s, a, u, f, _, O, F, j, V, te) {
          var re = a & J,
            he = re ? F : t,
            ge = re ? t : F,
            we = re ? O : t,
            Ee = re ? t : O;
          (a |= re ? W : Z), (a &= ~(re ? Z : W)), a & Q || (a &= ~(L | H));
          var Oe = [s, a, _, we, he, Ee, ge, j, V, te],
            Ae = u.apply(t, Oe);
          return of(s) && J1(Ae, Oe), (Ae.placeholder = f), W1(Ae, s, a);
        }
        function Xl(s) {
          var a = Vt[s];
          return function (u, f) {
            if (
              ((u = ni(u)), (f = f == null ? 0 : cr(Ce(f), 292)), f && Wg(u))
            ) {
              var _ = (Ye(u) + "e").split("e"),
                O = a(_[0] + "e" + (+_[1] + f));
              return (
                (_ = (Ye(O) + "e").split("e")), +(_[0] + "e" + (+_[1] - f))
              );
            }
            return a(u);
          };
        }
        var sA =
          co && 1 / Tc(new co([, -0]))[1] == R
            ? function (s) {
                return new co(s);
              }
            : _f;
        function B1(s) {
          return function (a) {
            var u = ur(a);
            return u == ne ? Rl(a) : u == Kt ? E6(a) : p6(a, s(a));
          };
        }
        function yn(s, a, u, f, _, O, F, j) {
          var V = a & H;
          if (!V && typeof s != "function") throw new Zr(c);
          var te = f ? f.length : 0;
          if (
            (te || ((a &= ~(W | Z)), (f = _ = t)),
            (F = F === t ? F : Gt(Ce(F), 0)),
            (j = j === t ? j : Ce(j)),
            (te -= _ ? _.length : 0),
            a & Z)
          ) {
            var re = f,
              he = _;
            f = _ = t;
          }
          var ge = V ? t : tf(s),
            we = [s, a, u, f, _, re, he, O, F, j];
          if (
            (ge && bA(we, ge),
            (s = we[0]),
            (a = we[1]),
            (u = we[2]),
            (f = we[3]),
            (_ = we[4]),
            (j = we[9] = we[9] === t ? (V ? 0 : s.length) : Gt(we[9] - te, 0)),
            !j && a & (J | G) && (a &= ~(J | G)),
            !a || a == L)
          )
            var Ee = rA(s, a, u);
          else
            a == J || a == G
              ? (Ee = iA(s, a, j))
              : (a == W || a == (L | W)) && !_.length
              ? (Ee = nA(s, a, u, f))
              : (Ee = ru.apply(t, we));
          var Oe = ge ? y1 : J1;
          return W1(Oe(Ee, we), s, a);
        }
        function U1(s, a, u, f) {
          return s === t || (vi(s, ao[u]) && !st.call(f, u)) ? a : s;
        }
        function q1(s, a, u, f, _, O) {
          return (
            Tt(s) && Tt(a) && (O.set(a, s), Xc(s, a, t, q1, O), O.delete(a)), s
          );
        }
        function oA(s) {
          return Ca(s) ? t : s;
        }
        function j1(s, a, u, f, _, O) {
          var F = u & P,
            j = s.length,
            V = a.length;
          if (j != V && !(F && V > j)) return !1;
          var te = O.get(s),
            re = O.get(a);
          if (te && re) return te == a && re == s;
          var he = -1,
            ge = !0,
            we = u & T ? new As() : t;
          for (O.set(s, a), O.set(a, s); ++he < j; ) {
            var Ee = s[he],
              Oe = a[he];
            if (f) var Ae = F ? f(Oe, Ee, he, a, s, O) : f(Ee, Oe, he, s, a, O);
            if (Ae !== t) {
              if (Ae) continue;
              ge = !1;
              break;
            }
            if (we) {
              if (
                !El(a, function (Fe, je) {
                  if (!ga(we, je) && (Ee === Fe || _(Ee, Fe, u, f, O)))
                    return we.push(je);
                })
              ) {
                ge = !1;
                break;
              }
            } else if (!(Ee === Oe || _(Ee, Oe, u, f, O))) {
              ge = !1;
              break;
            }
          }
          return O.delete(s), O.delete(a), ge;
        }
        function aA(s, a, u, f, _, O, F) {
          switch (u) {
            case ke:
              if (s.byteLength != a.byteLength || s.byteOffset != a.byteOffset)
                return !1;
              (s = s.buffer), (a = a.buffer);
            case Fr:
              return !(
                s.byteLength != a.byteLength || !O(new jc(s), new jc(a))
              );
            case Y:
            case ue:
            case ve:
              return vi(+s, +a);
            case oe:
              return s.name == a.name && s.message == a.message;
            case Ke:
            case Ve:
              return s == a + "";
            case ne:
              var j = Rl;
            case Kt:
              var V = f & P;
              if ((j || (j = Tc), s.size != a.size && !V)) return !1;
              var te = F.get(s);
              if (te) return te == a;
              (f |= T), F.set(s, a);
              var re = j1(j(s), j(a), f, _, O, F);
              return F.delete(s), re;
            case We:
              if (ba) return ba.call(s) == ba.call(a);
          }
          return !1;
        }
        function cA(s, a, u, f, _, O) {
          var F = u & P,
            j = Zl(s),
            V = j.length,
            te = Zl(a),
            re = te.length;
          if (V != re && !F) return !1;
          for (var he = V; he--; ) {
            var ge = j[he];
            if (!(F ? ge in a : st.call(a, ge))) return !1;
          }
          var we = O.get(s),
            Ee = O.get(a);
          if (we && Ee) return we == a && Ee == s;
          var Oe = !0;
          O.set(s, a), O.set(a, s);
          for (var Ae = F; ++he < V; ) {
            ge = j[he];
            var Fe = s[ge],
              je = a[ge];
            if (f) var jr = F ? f(je, Fe, ge, a, s, O) : f(Fe, je, ge, s, a, O);
            if (!(jr === t ? Fe === je || _(Fe, je, u, f, O) : jr)) {
              Oe = !1;
              break;
            }
            Ae || (Ae = ge == "constructor");
          }
          if (Oe && !Ae) {
            var br = s.constructor,
              zr = a.constructor;
            br != zr &&
              "constructor" in s &&
              "constructor" in a &&
              !(
                typeof br == "function" &&
                br instanceof br &&
                typeof zr == "function" &&
                zr instanceof zr
              ) &&
              (Oe = !1);
          }
          return O.delete(s), O.delete(a), Oe;
        }
        function vn(s) {
          return cf(G1(s, t, tm), s + "");
        }
        function Zl(s) {
          return o1(s, Qt, nf);
        }
        function ef(s) {
          return o1(s, Cr, z1);
        }
        var tf = Gc
          ? function (s) {
              return Gc.get(s);
            }
          : _f;
        function ou(s) {
          for (
            var a = s.name + "", u = uo[a], f = st.call(uo, a) ? u.length : 0;
            f--;

          ) {
            var _ = u[f],
              O = _.func;
            if (O == null || O == s) return _.name;
          }
          return a;
        }
        function po(s) {
          var a = st.call(x, "placeholder") ? x : s;
          return a.placeholder;
        }
        function _e() {
          var s = x.iteratee || wf;
          return (
            (s = s === wf ? u1 : s),
            arguments.length ? s(arguments[0], arguments[1]) : s
          );
        }
        function au(s, a) {
          var u = s.__data__;
          return mA(a) ? u[typeof a == "string" ? "string" : "hash"] : u.map;
        }
        function rf(s) {
          for (var a = Qt(s), u = a.length; u--; ) {
            var f = a[u],
              _ = s[f];
            a[u] = [f, _, K1(_)];
          }
          return a;
        }
        function Is(s, a) {
          var u = w6(s, a);
          return c1(u) ? u : t;
        }
        function uA(s) {
          var a = st.call(s, _s),
            u = s[_s];
          try {
            s[_s] = t;
            var f = !0;
          } catch {}
          var _ = Uc.call(s);
          return f && (a ? (s[_s] = u) : delete s[_s]), _;
        }
        var nf = Ol
            ? function (s) {
                return s == null
                  ? []
                  : ((s = It(s)),
                    Gn(Ol(s), function (a) {
                      return $g.call(s, a);
                    }));
              }
            : Ef,
          z1 = Ol
            ? function (s) {
                for (var a = []; s; ) $n(a, nf(s)), (s = zc(s));
                return a;
              }
            : Ef,
          ur = vr;
        ((Pl && ur(new Pl(new ArrayBuffer(1))) != ke) ||
          (ya && ur(new ya()) != ne) ||
          (Ml && ur(Ml.resolve()) != Di) ||
          (co && ur(new co()) != Kt) ||
          (va && ur(new va()) != Ge)) &&
          (ur = function (s) {
            var a = vr(s),
              u = a == qe ? s.constructor : t,
              f = u ? Ds(u) : "";
            if (f)
              switch (f) {
                case V6:
                  return ke;
                case G6:
                  return ne;
                case $6:
                  return Di;
                case J6:
                  return Kt;
                case W6:
                  return Ge;
              }
            return a;
          });
        function hA(s, a, u) {
          for (var f = -1, _ = u.length; ++f < _; ) {
            var O = u[f],
              F = O.size;
            switch (O.type) {
              case "drop":
                s += F;
                break;
              case "dropRight":
                a -= F;
                break;
              case "take":
                a = cr(a, s + F);
                break;
              case "takeRight":
                s = Gt(s, a - F);
                break;
            }
          }
          return { start: s, end: a };
        }
        function lA(s) {
          var a = s.match(Et);
          return a ? a[1].split(fn) : [];
        }
        function k1(s, a, u) {
          a = Xn(a, s);
          for (var f = -1, _ = a.length, O = !1; ++f < _; ) {
            var F = Bi(a[f]);
            if (!(O = s != null && u(s, F))) break;
            s = s[F];
          }
          return O || ++f != _
            ? O
            : ((_ = s == null ? 0 : s.length),
              !!_ && pu(_) && wn(F, _) && (De(s) || Rs(s)));
        }
        function fA(s) {
          var a = s.length,
            u = new s.constructor(a);
          return (
            a &&
              typeof s[0] == "string" &&
              st.call(s, "index") &&
              ((u.index = s.index), (u.input = s.input)),
            u
          );
        }
        function H1(s) {
          return typeof s.constructor == "function" && !Da(s) ? ho(zc(s)) : {};
        }
        function dA(s, a, u) {
          var f = s.constructor;
          switch (a) {
            case Fr:
              return Yl(s);
            case Y:
            case ue:
              return new f(+s);
            case ke:
              return YE(s, u);
            case Xe:
            case fi:
            case Ze:
            case et:
            case di:
            case tt:
            case rt:
            case pi:
            case it:
              return x1(s, u);
            case ne:
              return new f();
            case ve:
            case Ve:
              return new f(s);
            case Ke:
              return QE(s);
            case Kt:
              return new f();
            case We:
              return XE(s);
          }
        }
        function pA(s, a) {
          var u = a.length;
          if (!u) return s;
          var f = u - 1;
          return (
            (a[f] = (u > 1 ? "& " : "") + a[f]),
            (a = a.join(u > 2 ? ", " : " ")),
            s.replace(
              _t,
              `{
/* [wrapped with ` +
                a +
                `] */
`
            )
          );
        }
        function gA(s) {
          return De(s) || Rs(s) || !!(Jg && s && s[Jg]);
        }
        function wn(s, a) {
          var u = typeof s;
          return (
            (a = a ?? N),
            !!a &&
              (u == "number" || (u != "symbol" && Ni.test(s))) &&
              s > -1 &&
              s % 1 == 0 &&
              s < a
          );
        }
        function wr(s, a, u) {
          if (!Tt(u)) return !1;
          var f = typeof a;
          return (
            f == "number" ? Rr(u) && wn(a, u.length) : f == "string" && a in u
          )
            ? vi(u[a], s)
            : !1;
        }
        function sf(s, a) {
          if (De(s)) return !1;
          var u = typeof s;
          return u == "number" ||
            u == "symbol" ||
            u == "boolean" ||
            s == null ||
            qr(s)
            ? !0
            : vt.test(s) || !hn.test(s) || (a != null && s in It(a));
        }
        function mA(s) {
          var a = typeof s;
          return a == "string" ||
            a == "number" ||
            a == "symbol" ||
            a == "boolean"
            ? s !== "__proto__"
            : s === null;
        }
        function of(s) {
          var a = ou(s),
            u = x[a];
          if (typeof u != "function" || !(a in Le.prototype)) return !1;
          if (s === u) return !0;
          var f = tf(u);
          return !!f && s === f[0];
        }
        function yA(s) {
          return !!Kg && Kg in s;
        }
        var vA = Lc ? bn : Af;
        function Da(s) {
          var a = s && s.constructor,
            u = (typeof a == "function" && a.prototype) || ao;
          return s === u;
        }
        function K1(s) {
          return s === s && !Tt(s);
        }
        function V1(s, a) {
          return function (u) {
            return u == null ? !1 : u[s] === a && (a !== t || s in It(u));
          };
        }
        function wA(s) {
          var a = fu(s, function (f) {
              return u.size === g && u.clear(), f;
            }),
            u = a.cache;
          return a;
        }
        function bA(s, a) {
          var u = s[1],
            f = a[1],
            _ = u | f,
            O = _ < (L | H | U),
            F =
              (f == U && u == J) ||
              (f == U && u == B && s[7].length <= a[8]) ||
              (f == (U | B) && a[7].length <= a[8] && u == J);
          if (!(O || F)) return s;
          f & L && ((s[2] = a[2]), (_ |= u & L ? 0 : Q));
          var j = a[3];
          if (j) {
            var V = s[3];
            (s[3] = V ? D1(V, j, a[4]) : j), (s[4] = V ? Jn(s[3], y) : a[4]);
          }
          return (
            (j = a[5]),
            j &&
              ((V = s[5]),
              (s[5] = V ? R1(V, j, a[6]) : j),
              (s[6] = V ? Jn(s[5], y) : a[6])),
            (j = a[7]),
            j && (s[7] = j),
            f & U && (s[8] = s[8] == null ? a[8] : cr(s[8], a[8])),
            s[9] == null && (s[9] = a[9]),
            (s[0] = a[0]),
            (s[1] = _),
            s
          );
        }
        function _A(s) {
          var a = [];
          if (s != null) for (var u in It(s)) a.push(u);
          return a;
        }
        function EA(s) {
          return Uc.call(s);
        }
        function G1(s, a, u) {
          return (
            (a = Gt(a === t ? s.length - 1 : a, 0)),
            function () {
              for (
                var f = arguments, _ = -1, O = Gt(f.length - a, 0), F = X(O);
                ++_ < O;

              )
                F[_] = f[a + _];
              _ = -1;
              for (var j = X(a + 1); ++_ < a; ) j[_] = f[_];
              return (j[a] = u(F)), Lr(s, this, j);
            }
          );
        }
        function $1(s, a) {
          return a.length < 2 ? s : xs(s, ri(a, 0, -1));
        }
        function AA(s, a) {
          for (var u = s.length, f = cr(a.length, u), _ = Dr(s); f--; ) {
            var O = a[f];
            s[f] = wn(O, u) ? _[O] : t;
          }
          return s;
        }
        function af(s, a) {
          if (
            !(a === "constructor" && typeof s[a] == "function") &&
            a != "__proto__"
          )
            return s[a];
        }
        var J1 = Y1(y1),
          Ra =
            U6 ||
            function (s, a) {
              return er.setTimeout(s, a);
            },
          cf = Y1(GE);
        function W1(s, a, u) {
          var f = a + "";
          return cf(s, pA(f, SA(lA(f), u)));
        }
        function Y1(s) {
          var a = 0,
            u = 0;
          return function () {
            var f = k6(),
              _ = h - (f - u);
            if (((u = f), _ > 0)) {
              if (++a >= q) return arguments[0];
            } else a = 0;
            return s.apply(t, arguments);
          };
        }
        function cu(s, a) {
          var u = -1,
            f = s.length,
            _ = f - 1;
          for (a = a === t ? f : a; ++u < a; ) {
            var O = Hl(u, _),
              F = s[O];
            (s[O] = s[u]), (s[u] = F);
          }
          return (s.length = a), s;
        }
        var Q1 = wA(function (s) {
          var a = [];
          return (
            s.charCodeAt(0) === 46 && a.push(""),
            s.replace(wt, function (u, f, _, O) {
              a.push(_ ? O.replace(dn, "$1") : f || u);
            }),
            a
          );
        });
        function Bi(s) {
          if (typeof s == "string" || qr(s)) return s;
          var a = s + "";
          return a == "0" && 1 / s == -R ? "-0" : a;
        }
        function Ds(s) {
          if (s != null) {
            try {
              return Bc.call(s);
            } catch {}
            try {
              return s + "";
            } catch {}
          }
          return "";
        }
        function SA(s, a) {
          return (
            Xr(ie, function (u) {
              var f = "_." + u[0];
              a & u[1] && !Mc(s, f) && s.push(f);
            }),
            s.sort()
          );
        }
        function X1(s) {
          if (s instanceof Le) return s.clone();
          var a = new ei(s.__wrapped__, s.__chain__);
          return (
            (a.__actions__ = Dr(s.__actions__)),
            (a.__index__ = s.__index__),
            (a.__values__ = s.__values__),
            a
          );
        }
        function xA(s, a, u) {
          (u ? wr(s, a, u) : a === t) ? (a = 1) : (a = Gt(Ce(a), 0));
          var f = s == null ? 0 : s.length;
          if (!f || a < 1) return [];
          for (var _ = 0, O = 0, F = X(Kc(f / a)); _ < f; )
            F[O++] = ri(s, _, (_ += a));
          return F;
        }
        function IA(s) {
          for (
            var a = -1, u = s == null ? 0 : s.length, f = 0, _ = [];
            ++a < u;

          ) {
            var O = s[a];
            O && (_[f++] = O);
          }
          return _;
        }
        function DA() {
          var s = arguments.length;
          if (!s) return [];
          for (var a = X(s - 1), u = arguments[0], f = s; f--; )
            a[f - 1] = arguments[f];
          return $n(De(u) ? Dr(u) : [u], tr(a, 1));
        }
        var RA = Pe(function (s, a) {
            return jt(s) ? Ea(s, tr(a, 1, jt, !0)) : [];
          }),
          CA = Pe(function (s, a) {
            var u = ii(a);
            return (
              jt(u) && (u = t), jt(s) ? Ea(s, tr(a, 1, jt, !0), _e(u, 2)) : []
            );
          }),
          OA = Pe(function (s, a) {
            var u = ii(a);
            return jt(u) && (u = t), jt(s) ? Ea(s, tr(a, 1, jt, !0), t, u) : [];
          });
        function PA(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? ((a = u || a === t ? 1 : Ce(a)), ri(s, a < 0 ? 0 : a, f))
            : [];
        }
        function MA(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? ((a = u || a === t ? 1 : Ce(a)),
              (a = f - a),
              ri(s, 0, a < 0 ? 0 : a))
            : [];
        }
        function NA(s, a) {
          return s && s.length ? eu(s, _e(a, 3), !0, !0) : [];
        }
        function TA(s, a) {
          return s && s.length ? eu(s, _e(a, 3), !0) : [];
        }
        function FA(s, a, u, f) {
          var _ = s == null ? 0 : s.length;
          return _
            ? (u && typeof u != "number" && wr(s, a, u) && ((u = 0), (f = _)),
              DE(s, a, u, f))
            : [];
        }
        function Z1(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = u == null ? 0 : Ce(u);
          return _ < 0 && (_ = Gt(f + _, 0)), Nc(s, _e(a, 3), _);
        }
        function em(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = f - 1;
          return (
            u !== t && ((_ = Ce(u)), (_ = u < 0 ? Gt(f + _, 0) : cr(_, f - 1))),
            Nc(s, _e(a, 3), _, !0)
          );
        }
        function tm(s) {
          var a = s == null ? 0 : s.length;
          return a ? tr(s, 1) : [];
        }
        function LA(s) {
          var a = s == null ? 0 : s.length;
          return a ? tr(s, R) : [];
        }
        function BA(s, a) {
          var u = s == null ? 0 : s.length;
          return u ? ((a = a === t ? 1 : Ce(a)), tr(s, a)) : [];
        }
        function UA(s) {
          for (var a = -1, u = s == null ? 0 : s.length, f = {}; ++a < u; ) {
            var _ = s[a];
            f[_[0]] = _[1];
          }
          return f;
        }
        function rm(s) {
          return s && s.length ? s[0] : t;
        }
        function qA(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = u == null ? 0 : Ce(u);
          return _ < 0 && (_ = Gt(f + _, 0)), io(s, a, _);
        }
        function jA(s) {
          var a = s == null ? 0 : s.length;
          return a ? ri(s, 0, -1) : [];
        }
        var zA = Pe(function (s) {
            var a = Pt(s, Jl);
            return a.length && a[0] === s[0] ? Ul(a) : [];
          }),
          kA = Pe(function (s) {
            var a = ii(s),
              u = Pt(s, Jl);
            return (
              a === ii(u) ? (a = t) : u.pop(),
              u.length && u[0] === s[0] ? Ul(u, _e(a, 2)) : []
            );
          }),
          HA = Pe(function (s) {
            var a = ii(s),
              u = Pt(s, Jl);
            return (
              (a = typeof a == "function" ? a : t),
              a && u.pop(),
              u.length && u[0] === s[0] ? Ul(u, t, a) : []
            );
          });
        function KA(s, a) {
          return s == null ? "" : j6.call(s, a);
        }
        function ii(s) {
          var a = s == null ? 0 : s.length;
          return a ? s[a - 1] : t;
        }
        function VA(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = f;
          return (
            u !== t && ((_ = Ce(u)), (_ = _ < 0 ? Gt(f + _, 0) : cr(_, f - 1))),
            a === a ? S6(s, a, _) : Nc(s, Lg, _, !0)
          );
        }
        function GA(s, a) {
          return s && s.length ? d1(s, Ce(a)) : t;
        }
        var $A = Pe(im);
        function im(s, a) {
          return s && s.length && a && a.length ? kl(s, a) : s;
        }
        function JA(s, a, u) {
          return s && s.length && a && a.length ? kl(s, a, _e(u, 2)) : s;
        }
        function WA(s, a, u) {
          return s && s.length && a && a.length ? kl(s, a, t, u) : s;
        }
        var YA = vn(function (s, a) {
          var u = s == null ? 0 : s.length,
            f = Tl(s, a);
          return (
            m1(
              s,
              Pt(a, function (_) {
                return wn(_, u) ? +_ : _;
              }).sort(I1)
            ),
            f
          );
        });
        function QA(s, a) {
          var u = [];
          if (!(s && s.length)) return u;
          var f = -1,
            _ = [],
            O = s.length;
          for (a = _e(a, 3); ++f < O; ) {
            var F = s[f];
            a(F, f, s) && (u.push(F), _.push(f));
          }
          return m1(s, _), u;
        }
        function uf(s) {
          return s == null ? s : K6.call(s);
        }
        function XA(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? (u && typeof u != "number" && wr(s, a, u)
                ? ((a = 0), (u = f))
                : ((a = a == null ? 0 : Ce(a)), (u = u === t ? f : Ce(u))),
              ri(s, a, u))
            : [];
        }
        function ZA(s, a) {
          return Zc(s, a);
        }
        function e5(s, a, u) {
          return Vl(s, a, _e(u, 2));
        }
        function t5(s, a) {
          var u = s == null ? 0 : s.length;
          if (u) {
            var f = Zc(s, a);
            if (f < u && vi(s[f], a)) return f;
          }
          return -1;
        }
        function r5(s, a) {
          return Zc(s, a, !0);
        }
        function i5(s, a, u) {
          return Vl(s, a, _e(u, 2), !0);
        }
        function n5(s, a) {
          var u = s == null ? 0 : s.length;
          if (u) {
            var f = Zc(s, a, !0) - 1;
            if (vi(s[f], a)) return f;
          }
          return -1;
        }
        function s5(s) {
          return s && s.length ? v1(s) : [];
        }
        function o5(s, a) {
          return s && s.length ? v1(s, _e(a, 2)) : [];
        }
        function a5(s) {
          var a = s == null ? 0 : s.length;
          return a ? ri(s, 1, a) : [];
        }
        function c5(s, a, u) {
          return s && s.length
            ? ((a = u || a === t ? 1 : Ce(a)), ri(s, 0, a < 0 ? 0 : a))
            : [];
        }
        function u5(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? ((a = u || a === t ? 1 : Ce(a)),
              (a = f - a),
              ri(s, a < 0 ? 0 : a, f))
            : [];
        }
        function h5(s, a) {
          return s && s.length ? eu(s, _e(a, 3), !1, !0) : [];
        }
        function l5(s, a) {
          return s && s.length ? eu(s, _e(a, 3)) : [];
        }
        var f5 = Pe(function (s) {
            return Qn(tr(s, 1, jt, !0));
          }),
          d5 = Pe(function (s) {
            var a = ii(s);
            return jt(a) && (a = t), Qn(tr(s, 1, jt, !0), _e(a, 2));
          }),
          p5 = Pe(function (s) {
            var a = ii(s);
            return (
              (a = typeof a == "function" ? a : t), Qn(tr(s, 1, jt, !0), t, a)
            );
          });
        function g5(s) {
          return s && s.length ? Qn(s) : [];
        }
        function m5(s, a) {
          return s && s.length ? Qn(s, _e(a, 2)) : [];
        }
        function y5(s, a) {
          return (
            (a = typeof a == "function" ? a : t),
            s && s.length ? Qn(s, t, a) : []
          );
        }
        function hf(s) {
          if (!(s && s.length)) return [];
          var a = 0;
          return (
            (s = Gn(s, function (u) {
              if (jt(u)) return (a = Gt(u.length, a)), !0;
            })),
            Il(a, function (u) {
              return Pt(s, Al(u));
            })
          );
        }
        function nm(s, a) {
          if (!(s && s.length)) return [];
          var u = hf(s);
          return a == null
            ? u
            : Pt(u, function (f) {
                return Lr(a, t, f);
              });
        }
        var v5 = Pe(function (s, a) {
            return jt(s) ? Ea(s, a) : [];
          }),
          w5 = Pe(function (s) {
            return $l(Gn(s, jt));
          }),
          b5 = Pe(function (s) {
            var a = ii(s);
            return jt(a) && (a = t), $l(Gn(s, jt), _e(a, 2));
          }),
          _5 = Pe(function (s) {
            var a = ii(s);
            return (a = typeof a == "function" ? a : t), $l(Gn(s, jt), t, a);
          }),
          E5 = Pe(hf);
        function A5(s, a) {
          return E1(s || [], a || [], _a);
        }
        function S5(s, a) {
          return E1(s || [], a || [], xa);
        }
        var x5 = Pe(function (s) {
          var a = s.length,
            u = a > 1 ? s[a - 1] : t;
          return (u = typeof u == "function" ? (s.pop(), u) : t), nm(s, u);
        });
        function sm(s) {
          var a = x(s);
          return (a.__chain__ = !0), a;
        }
        function I5(s, a) {
          return a(s), s;
        }
        function uu(s, a) {
          return a(s);
        }
        var D5 = vn(function (s) {
          var a = s.length,
            u = a ? s[0] : 0,
            f = this.__wrapped__,
            _ = function (O) {
              return Tl(O, s);
            };
          return a > 1 ||
            this.__actions__.length ||
            !(f instanceof Le) ||
            !wn(u)
            ? this.thru(_)
            : ((f = f.slice(u, +u + (a ? 1 : 0))),
              f.__actions__.push({ func: uu, args: [_], thisArg: t }),
              new ei(f, this.__chain__).thru(function (O) {
                return a && !O.length && O.push(t), O;
              }));
        });
        function R5() {
          return sm(this);
        }
        function C5() {
          return new ei(this.value(), this.__chain__);
        }
        function O5() {
          this.__values__ === t && (this.__values__ = wm(this.value()));
          var s = this.__index__ >= this.__values__.length,
            a = s ? t : this.__values__[this.__index__++];
          return { done: s, value: a };
        }
        function P5() {
          return this;
        }
        function M5(s) {
          for (var a, u = this; u instanceof Jc; ) {
            var f = X1(u);
            (f.__index__ = 0),
              (f.__values__ = t),
              a ? (_.__wrapped__ = f) : (a = f);
            var _ = f;
            u = u.__wrapped__;
          }
          return (_.__wrapped__ = s), a;
        }
        function N5() {
          var s = this.__wrapped__;
          if (s instanceof Le) {
            var a = s;
            return (
              this.__actions__.length && (a = new Le(this)),
              (a = a.reverse()),
              a.__actions__.push({ func: uu, args: [uf], thisArg: t }),
              new ei(a, this.__chain__)
            );
          }
          return this.thru(uf);
        }
        function T5() {
          return _1(this.__wrapped__, this.__actions__);
        }
        var F5 = tu(function (s, a, u) {
          st.call(s, u) ? ++s[u] : mn(s, u, 1);
        });
        function L5(s, a, u) {
          var f = De(s) ? Tg : IE;
          return u && wr(s, a, u) && (a = t), f(s, _e(a, 3));
        }
        function B5(s, a) {
          var u = De(s) ? Gn : n1;
          return u(s, _e(a, 3));
        }
        var U5 = M1(Z1),
          q5 = M1(em);
        function j5(s, a) {
          return tr(hu(s, a), 1);
        }
        function z5(s, a) {
          return tr(hu(s, a), R);
        }
        function k5(s, a, u) {
          return (u = u === t ? 1 : Ce(u)), tr(hu(s, a), u);
        }
        function om(s, a) {
          var u = De(s) ? Xr : Yn;
          return u(s, _e(a, 3));
        }
        function am(s, a) {
          var u = De(s) ? a6 : i1;
          return u(s, _e(a, 3));
        }
        var H5 = tu(function (s, a, u) {
          st.call(s, u) ? s[u].push(a) : mn(s, u, [a]);
        });
        function K5(s, a, u, f) {
          (s = Rr(s) ? s : mo(s)), (u = u && !f ? Ce(u) : 0);
          var _ = s.length;
          return (
            u < 0 && (u = Gt(_ + u, 0)),
            gu(s) ? u <= _ && s.indexOf(a, u) > -1 : !!_ && io(s, a, u) > -1
          );
        }
        var V5 = Pe(function (s, a, u) {
            var f = -1,
              _ = typeof a == "function",
              O = Rr(s) ? X(s.length) : [];
            return (
              Yn(s, function (F) {
                O[++f] = _ ? Lr(a, F, u) : Aa(F, a, u);
              }),
              O
            );
          }),
          G5 = tu(function (s, a, u) {
            mn(s, u, a);
          });
        function hu(s, a) {
          var u = De(s) ? Pt : h1;
          return u(s, _e(a, 3));
        }
        function $5(s, a, u, f) {
          return s == null
            ? []
            : (De(a) || (a = a == null ? [] : [a]),
              (u = f ? t : u),
              De(u) || (u = u == null ? [] : [u]),
              p1(s, a, u));
        }
        var J5 = tu(
          function (s, a, u) {
            s[u ? 0 : 1].push(a);
          },
          function () {
            return [[], []];
          }
        );
        function W5(s, a, u) {
          var f = De(s) ? _l : Ug,
            _ = arguments.length < 3;
          return f(s, _e(a, 4), u, _, Yn);
        }
        function Y5(s, a, u) {
          var f = De(s) ? c6 : Ug,
            _ = arguments.length < 3;
          return f(s, _e(a, 4), u, _, i1);
        }
        function Q5(s, a) {
          var u = De(s) ? Gn : n1;
          return u(s, du(_e(a, 3)));
        }
        function X5(s) {
          var a = De(s) ? Zg : KE;
          return a(s);
        }
        function Z5(s, a, u) {
          (u ? wr(s, a, u) : a === t) ? (a = 1) : (a = Ce(a));
          var f = De(s) ? _E : VE;
          return f(s, a);
        }
        function e8(s) {
          var a = De(s) ? EE : $E;
          return a(s);
        }
        function t8(s) {
          if (s == null) return 0;
          if (Rr(s)) return gu(s) ? so(s) : s.length;
          var a = ur(s);
          return a == ne || a == Kt ? s.size : jl(s).length;
        }
        function r8(s, a, u) {
          var f = De(s) ? El : JE;
          return u && wr(s, a, u) && (a = t), f(s, _e(a, 3));
        }
        var i8 = Pe(function (s, a) {
            if (s == null) return [];
            var u = a.length;
            return (
              u > 1 && wr(s, a[0], a[1])
                ? (a = [])
                : u > 2 && wr(a[0], a[1], a[2]) && (a = [a[0]]),
              p1(s, tr(a, 1), [])
            );
          }),
          lu =
            B6 ||
            function () {
              return er.Date.now();
            };
        function n8(s, a) {
          if (typeof a != "function") throw new Zr(c);
          return (
            (s = Ce(s)),
            function () {
              if (--s < 1) return a.apply(this, arguments);
            }
          );
        }
        function cm(s, a, u) {
          return (
            (a = u ? t : a),
            (a = s && a == null ? s.length : a),
            yn(s, U, t, t, t, t, a)
          );
        }
        function um(s, a) {
          var u;
          if (typeof a != "function") throw new Zr(c);
          return (
            (s = Ce(s)),
            function () {
              return (
                --s > 0 && (u = a.apply(this, arguments)), s <= 1 && (a = t), u
              );
            }
          );
        }
        var lf = Pe(function (s, a, u) {
            var f = L;
            if (u.length) {
              var _ = Jn(u, po(lf));
              f |= W;
            }
            return yn(s, f, a, u, _);
          }),
          hm = Pe(function (s, a, u) {
            var f = L | H;
            if (u.length) {
              var _ = Jn(u, po(hm));
              f |= W;
            }
            return yn(a, f, s, u, _);
          });
        function lm(s, a, u) {
          a = u ? t : a;
          var f = yn(s, J, t, t, t, t, t, a);
          return (f.placeholder = lm.placeholder), f;
        }
        function fm(s, a, u) {
          a = u ? t : a;
          var f = yn(s, G, t, t, t, t, t, a);
          return (f.placeholder = fm.placeholder), f;
        }
        function dm(s, a, u) {
          var f,
            _,
            O,
            F,
            j,
            V,
            te = 0,
            re = !1,
            he = !1,
            ge = !0;
          if (typeof s != "function") throw new Zr(c);
          (a = ni(a) || 0),
            Tt(u) &&
              ((re = !!u.leading),
              (he = "maxWait" in u),
              (O = he ? Gt(ni(u.maxWait) || 0, a) : O),
              (ge = "trailing" in u ? !!u.trailing : ge));
          function we(zt) {
            var wi = f,
              En = _;
            return (f = _ = t), (te = zt), (F = s.apply(En, wi)), F;
          }
          function Ee(zt) {
            return (te = zt), (j = Ra(Fe, a)), re ? we(zt) : F;
          }
          function Oe(zt) {
            var wi = zt - V,
              En = zt - te,
              Mm = a - wi;
            return he ? cr(Mm, O - En) : Mm;
          }
          function Ae(zt) {
            var wi = zt - V,
              En = zt - te;
            return V === t || wi >= a || wi < 0 || (he && En >= O);
          }
          function Fe() {
            var zt = lu();
            if (Ae(zt)) return je(zt);
            j = Ra(Fe, Oe(zt));
          }
          function je(zt) {
            return (j = t), ge && f ? we(zt) : ((f = _ = t), F);
          }
          function jr() {
            j !== t && A1(j), (te = 0), (f = V = _ = j = t);
          }
          function br() {
            return j === t ? F : je(lu());
          }
          function zr() {
            var zt = lu(),
              wi = Ae(zt);
            if (((f = arguments), (_ = this), (V = zt), wi)) {
              if (j === t) return Ee(V);
              if (he) return A1(j), (j = Ra(Fe, a)), we(V);
            }
            return j === t && (j = Ra(Fe, a)), F;
          }
          return (zr.cancel = jr), (zr.flush = br), zr;
        }
        var s8 = Pe(function (s, a) {
            return r1(s, 1, a);
          }),
          o8 = Pe(function (s, a, u) {
            return r1(s, ni(a) || 0, u);
          });
        function a8(s) {
          return yn(s, ae);
        }
        function fu(s, a) {
          if (typeof s != "function" || (a != null && typeof a != "function"))
            throw new Zr(c);
          var u = function () {
            var f = arguments,
              _ = a ? a.apply(this, f) : f[0],
              O = u.cache;
            if (O.has(_)) return O.get(_);
            var F = s.apply(this, f);
            return (u.cache = O.set(_, F) || O), F;
          };
          return (u.cache = new (fu.Cache || gn)()), u;
        }
        fu.Cache = gn;
        function du(s) {
          if (typeof s != "function") throw new Zr(c);
          return function () {
            var a = arguments;
            switch (a.length) {
              case 0:
                return !s.call(this);
              case 1:
                return !s.call(this, a[0]);
              case 2:
                return !s.call(this, a[0], a[1]);
              case 3:
                return !s.call(this, a[0], a[1], a[2]);
            }
            return !s.apply(this, a);
          };
        }
        function c8(s) {
          return um(2, s);
        }
        var u8 = WE(function (s, a) {
            a =
              a.length == 1 && De(a[0])
                ? Pt(a[0], Br(_e()))
                : Pt(tr(a, 1), Br(_e()));
            var u = a.length;
            return Pe(function (f) {
              for (var _ = -1, O = cr(f.length, u); ++_ < O; )
                f[_] = a[_].call(this, f[_]);
              return Lr(s, this, f);
            });
          }),
          ff = Pe(function (s, a) {
            var u = Jn(a, po(ff));
            return yn(s, W, t, a, u);
          }),
          pm = Pe(function (s, a) {
            var u = Jn(a, po(pm));
            return yn(s, Z, t, a, u);
          }),
          h8 = vn(function (s, a) {
            return yn(s, B, t, t, t, a);
          });
        function l8(s, a) {
          if (typeof s != "function") throw new Zr(c);
          return (a = a === t ? a : Ce(a)), Pe(s, a);
        }
        function f8(s, a) {
          if (typeof s != "function") throw new Zr(c);
          return (
            (a = a == null ? 0 : Gt(Ce(a), 0)),
            Pe(function (u) {
              var f = u[a],
                _ = Zn(u, 0, a);
              return f && $n(_, f), Lr(s, this, _);
            })
          );
        }
        function d8(s, a, u) {
          var f = !0,
            _ = !0;
          if (typeof s != "function") throw new Zr(c);
          return (
            Tt(u) &&
              ((f = "leading" in u ? !!u.leading : f),
              (_ = "trailing" in u ? !!u.trailing : _)),
            dm(s, a, { leading: f, maxWait: a, trailing: _ })
          );
        }
        function p8(s) {
          return cm(s, 1);
        }
        function g8(s, a) {
          return ff(Wl(a), s);
        }
        function m8() {
          if (!arguments.length) return [];
          var s = arguments[0];
          return De(s) ? s : [s];
        }
        function y8(s) {
          return ti(s, E);
        }
        function v8(s, a) {
          return (a = typeof a == "function" ? a : t), ti(s, E, a);
        }
        function w8(s) {
          return ti(s, v | E);
        }
        function b8(s, a) {
          return (a = typeof a == "function" ? a : t), ti(s, v | E, a);
        }
        function _8(s, a) {
          return a == null || t1(s, a, Qt(a));
        }
        function vi(s, a) {
          return s === a || (s !== s && a !== a);
        }
        var E8 = su(Bl),
          A8 = su(function (s, a) {
            return s >= a;
          }),
          Rs = a1(
            (function () {
              return arguments;
            })()
          )
            ? a1
            : function (s) {
                return Lt(s) && st.call(s, "callee") && !$g.call(s, "callee");
              },
          De = X.isArray,
          S8 = Rg ? Br(Rg) : ME;
        function Rr(s) {
          return s != null && pu(s.length) && !bn(s);
        }
        function jt(s) {
          return Lt(s) && Rr(s);
        }
        function x8(s) {
          return s === !0 || s === !1 || (Lt(s) && vr(s) == Y);
        }
        var es = q6 || Af,
          I8 = Cg ? Br(Cg) : NE;
        function D8(s) {
          return Lt(s) && s.nodeType === 1 && !Ca(s);
        }
        function R8(s) {
          if (s == null) return !0;
          if (
            Rr(s) &&
            (De(s) ||
              typeof s == "string" ||
              typeof s.splice == "function" ||
              es(s) ||
              go(s) ||
              Rs(s))
          )
            return !s.length;
          var a = ur(s);
          if (a == ne || a == Kt) return !s.size;
          if (Da(s)) return !jl(s).length;
          for (var u in s) if (st.call(s, u)) return !1;
          return !0;
        }
        function C8(s, a) {
          return Sa(s, a);
        }
        function O8(s, a, u) {
          u = typeof u == "function" ? u : t;
          var f = u ? u(s, a) : t;
          return f === t ? Sa(s, a, t, u) : !!f;
        }
        function df(s) {
          if (!Lt(s)) return !1;
          var a = vr(s);
          return (
            a == oe ||
            a == se ||
            (typeof s.message == "string" &&
              typeof s.name == "string" &&
              !Ca(s))
          );
        }
        function P8(s) {
          return typeof s == "number" && Wg(s);
        }
        function bn(s) {
          if (!Tt(s)) return !1;
          var a = vr(s);
          return a == le || a == pe || a == K || a == lt;
        }
        function gm(s) {
          return typeof s == "number" && s == Ce(s);
        }
        function pu(s) {
          return typeof s == "number" && s > -1 && s % 1 == 0 && s <= N;
        }
        function Tt(s) {
          var a = typeof s;
          return s != null && (a == "object" || a == "function");
        }
        function Lt(s) {
          return s != null && typeof s == "object";
        }
        var mm = Og ? Br(Og) : FE;
        function M8(s, a) {
          return s === a || ql(s, a, rf(a));
        }
        function N8(s, a, u) {
          return (u = typeof u == "function" ? u : t), ql(s, a, rf(a), u);
        }
        function T8(s) {
          return ym(s) && s != +s;
        }
        function F8(s) {
          if (vA(s)) throw new xe(o);
          return c1(s);
        }
        function L8(s) {
          return s === null;
        }
        function B8(s) {
          return s == null;
        }
        function ym(s) {
          return typeof s == "number" || (Lt(s) && vr(s) == ve);
        }
        function Ca(s) {
          if (!Lt(s) || vr(s) != qe) return !1;
          var a = zc(s);
          if (a === null) return !0;
          var u = st.call(a, "constructor") && a.constructor;
          return typeof u == "function" && u instanceof u && Bc.call(u) == N6;
        }
        var pf = Pg ? Br(Pg) : LE;
        function U8(s) {
          return gm(s) && s >= -N && s <= N;
        }
        var vm = Mg ? Br(Mg) : BE;
        function gu(s) {
          return typeof s == "string" || (!De(s) && Lt(s) && vr(s) == Ve);
        }
        function qr(s) {
          return typeof s == "symbol" || (Lt(s) && vr(s) == We);
        }
        var go = Ng ? Br(Ng) : UE;
        function q8(s) {
          return s === t;
        }
        function j8(s) {
          return Lt(s) && ur(s) == Ge;
        }
        function z8(s) {
          return Lt(s) && vr(s) == ft;
        }
        var k8 = su(zl),
          H8 = su(function (s, a) {
            return s <= a;
          });
        function wm(s) {
          if (!s) return [];
          if (Rr(s)) return gu(s) ? mi(s) : Dr(s);
          if (ma && s[ma]) return _6(s[ma]());
          var a = ur(s),
            u = a == ne ? Rl : a == Kt ? Tc : mo;
          return u(s);
        }
        function _n(s) {
          if (!s) return s === 0 ? s : 0;
          if (((s = ni(s)), s === R || s === -R)) {
            var a = s < 0 ? -1 : 1;
            return a * z;
          }
          return s === s ? s : 0;
        }
        function Ce(s) {
          var a = _n(s),
            u = a % 1;
          return a === a ? (u ? a - u : a) : 0;
        }
        function bm(s) {
          return s ? Ss(Ce(s), 0, d) : 0;
        }
        function ni(s) {
          if (typeof s == "number") return s;
          if (qr(s)) return I;
          if (Tt(s)) {
            var a = typeof s.valueOf == "function" ? s.valueOf() : s;
            s = Tt(a) ? a + "" : a;
          }
          if (typeof s != "string") return s === 0 ? s : +s;
          s = qg(s);
          var u = Oi.test(s);
          return u || Mi.test(s)
            ? n6(s.slice(2), u ? 2 : 8)
            : Ci.test(s)
            ? I
            : +s;
        }
        function _m(s) {
          return Li(s, Cr(s));
        }
        function K8(s) {
          return s ? Ss(Ce(s), -N, N) : s === 0 ? s : 0;
        }
        function Ye(s) {
          return s == null ? "" : Ur(s);
        }
        var V8 = lo(function (s, a) {
            if (Da(a) || Rr(a)) {
              Li(a, Qt(a), s);
              return;
            }
            for (var u in a) st.call(a, u) && _a(s, u, a[u]);
          }),
          Em = lo(function (s, a) {
            Li(a, Cr(a), s);
          }),
          mu = lo(function (s, a, u, f) {
            Li(a, Cr(a), s, f);
          }),
          G8 = lo(function (s, a, u, f) {
            Li(a, Qt(a), s, f);
          }),
          $8 = vn(Tl);
        function J8(s, a) {
          var u = ho(s);
          return a == null ? u : e1(u, a);
        }
        var W8 = Pe(function (s, a) {
            s = It(s);
            var u = -1,
              f = a.length,
              _ = f > 2 ? a[2] : t;
            for (_ && wr(a[0], a[1], _) && (f = 1); ++u < f; )
              for (var O = a[u], F = Cr(O), j = -1, V = F.length; ++j < V; ) {
                var te = F[j],
                  re = s[te];
                (re === t || (vi(re, ao[te]) && !st.call(s, te))) &&
                  (s[te] = O[te]);
              }
            return s;
          }),
          Y8 = Pe(function (s) {
            return s.push(t, q1), Lr(Am, t, s);
          });
        function Q8(s, a) {
          return Fg(s, _e(a, 3), Fi);
        }
        function X8(s, a) {
          return Fg(s, _e(a, 3), Ll);
        }
        function Z8(s, a) {
          return s == null ? s : Fl(s, _e(a, 3), Cr);
        }
        function eS(s, a) {
          return s == null ? s : s1(s, _e(a, 3), Cr);
        }
        function tS(s, a) {
          return s && Fi(s, _e(a, 3));
        }
        function rS(s, a) {
          return s && Ll(s, _e(a, 3));
        }
        function iS(s) {
          return s == null ? [] : Qc(s, Qt(s));
        }
        function nS(s) {
          return s == null ? [] : Qc(s, Cr(s));
        }
        function gf(s, a, u) {
          var f = s == null ? t : xs(s, a);
          return f === t ? u : f;
        }
        function sS(s, a) {
          return s != null && k1(s, a, RE);
        }
        function mf(s, a) {
          return s != null && k1(s, a, CE);
        }
        var oS = T1(function (s, a, u) {
            a != null && typeof a.toString != "function" && (a = Uc.call(a)),
              (s[a] = u);
          }, vf(Or)),
          aS = T1(function (s, a, u) {
            a != null && typeof a.toString != "function" && (a = Uc.call(a)),
              st.call(s, a) ? s[a].push(u) : (s[a] = [u]);
          }, _e),
          cS = Pe(Aa);
        function Qt(s) {
          return Rr(s) ? Xg(s) : jl(s);
        }
        function Cr(s) {
          return Rr(s) ? Xg(s, !0) : qE(s);
        }
        function uS(s, a) {
          var u = {};
          return (
            (a = _e(a, 3)),
            Fi(s, function (f, _, O) {
              mn(u, a(f, _, O), f);
            }),
            u
          );
        }
        function hS(s, a) {
          var u = {};
          return (
            (a = _e(a, 3)),
            Fi(s, function (f, _, O) {
              mn(u, _, a(f, _, O));
            }),
            u
          );
        }
        var lS = lo(function (s, a, u) {
            Xc(s, a, u);
          }),
          Am = lo(function (s, a, u, f) {
            Xc(s, a, u, f);
          }),
          fS = vn(function (s, a) {
            var u = {};
            if (s == null) return u;
            var f = !1;
            (a = Pt(a, function (O) {
              return (O = Xn(O, s)), f || (f = O.length > 1), O;
            })),
              Li(s, ef(s), u),
              f && (u = ti(u, v | A | E, oA));
            for (var _ = a.length; _--; ) Gl(u, a[_]);
            return u;
          });
        function dS(s, a) {
          return Sm(s, du(_e(a)));
        }
        var pS = vn(function (s, a) {
          return s == null ? {} : zE(s, a);
        });
        function Sm(s, a) {
          if (s == null) return {};
          var u = Pt(ef(s), function (f) {
            return [f];
          });
          return (
            (a = _e(a)),
            g1(s, u, function (f, _) {
              return a(f, _[0]);
            })
          );
        }
        function gS(s, a, u) {
          a = Xn(a, s);
          var f = -1,
            _ = a.length;
          for (_ || ((_ = 1), (s = t)); ++f < _; ) {
            var O = s == null ? t : s[Bi(a[f])];
            O === t && ((f = _), (O = u)), (s = bn(O) ? O.call(s) : O);
          }
          return s;
        }
        function mS(s, a, u) {
          return s == null ? s : xa(s, a, u);
        }
        function yS(s, a, u, f) {
          return (
            (f = typeof f == "function" ? f : t), s == null ? s : xa(s, a, u, f)
          );
        }
        var xm = B1(Qt),
          Im = B1(Cr);
        function vS(s, a, u) {
          var f = De(s),
            _ = f || es(s) || go(s);
          if (((a = _e(a, 4)), u == null)) {
            var O = s && s.constructor;
            _
              ? (u = f ? new O() : [])
              : Tt(s)
              ? (u = bn(O) ? ho(zc(s)) : {})
              : (u = {});
          }
          return (
            (_ ? Xr : Fi)(s, function (F, j, V) {
              return a(u, F, j, V);
            }),
            u
          );
        }
        function wS(s, a) {
          return s == null ? !0 : Gl(s, a);
        }
        function bS(s, a, u) {
          return s == null ? s : b1(s, a, Wl(u));
        }
        function _S(s, a, u, f) {
          return (
            (f = typeof f == "function" ? f : t),
            s == null ? s : b1(s, a, Wl(u), f)
          );
        }
        function mo(s) {
          return s == null ? [] : Dl(s, Qt(s));
        }
        function ES(s) {
          return s == null ? [] : Dl(s, Cr(s));
        }
        function AS(s, a, u) {
          return (
            u === t && ((u = a), (a = t)),
            u !== t && ((u = ni(u)), (u = u === u ? u : 0)),
            a !== t && ((a = ni(a)), (a = a === a ? a : 0)),
            Ss(ni(s), a, u)
          );
        }
        function SS(s, a, u) {
          return (
            (a = _n(a)),
            u === t ? ((u = a), (a = 0)) : (u = _n(u)),
            (s = ni(s)),
            OE(s, a, u)
          );
        }
        function xS(s, a, u) {
          if (
            (u && typeof u != "boolean" && wr(s, a, u) && (a = u = t),
            u === t &&
              (typeof a == "boolean"
                ? ((u = a), (a = t))
                : typeof s == "boolean" && ((u = s), (s = t))),
            s === t && a === t
              ? ((s = 0), (a = 1))
              : ((s = _n(s)), a === t ? ((a = s), (s = 0)) : (a = _n(a))),
            s > a)
          ) {
            var f = s;
            (s = a), (a = f);
          }
          if (u || s % 1 || a % 1) {
            var _ = Yg();
            return cr(s + _ * (a - s + i6("1e-" + ((_ + "").length - 1))), a);
          }
          return Hl(s, a);
        }
        var IS = fo(function (s, a, u) {
          return (a = a.toLowerCase()), s + (u ? Dm(a) : a);
        });
        function Dm(s) {
          return yf(Ye(s).toLowerCase());
        }
        function Rm(s) {
          return (s = Ye(s)), s && s.replace(Ti, m6).replace($_, "");
        }
        function DS(s, a, u) {
          (s = Ye(s)), (a = Ur(a));
          var f = s.length;
          u = u === t ? f : Ss(Ce(u), 0, f);
          var _ = u;
          return (u -= a.length), u >= 0 && s.slice(u, _) == a;
        }
        function RS(s) {
          return (s = Ye(s)), s && mt.test(s) ? s.replace(Ri, y6) : s;
        }
        function CS(s) {
          return (s = Ye(s)), s && bt.test(s) ? s.replace(gi, "\\$&") : s;
        }
        var OS = fo(function (s, a, u) {
            return s + (u ? "-" : "") + a.toLowerCase();
          }),
          PS = fo(function (s, a, u) {
            return s + (u ? " " : "") + a.toLowerCase();
          }),
          MS = P1("toLowerCase");
        function NS(s, a, u) {
          (s = Ye(s)), (a = Ce(a));
          var f = a ? so(s) : 0;
          if (!a || f >= a) return s;
          var _ = (a - f) / 2;
          return nu(Vc(_), u) + s + nu(Kc(_), u);
        }
        function TS(s, a, u) {
          (s = Ye(s)), (a = Ce(a));
          var f = a ? so(s) : 0;
          return a && f < a ? s + nu(a - f, u) : s;
        }
        function FS(s, a, u) {
          (s = Ye(s)), (a = Ce(a));
          var f = a ? so(s) : 0;
          return a && f < a ? nu(a - f, u) + s : s;
        }
        function LS(s, a, u) {
          return (
            u || a == null ? (a = 0) : a && (a = +a),
            H6(Ye(s).replace(nt, ""), a || 0)
          );
        }
        function BS(s, a, u) {
          return (
            (u ? wr(s, a, u) : a === t) ? (a = 1) : (a = Ce(a)), Kl(Ye(s), a)
          );
        }
        function US() {
          var s = arguments,
            a = Ye(s[0]);
          return s.length < 3 ? a : a.replace(s[1], s[2]);
        }
        var qS = fo(function (s, a, u) {
          return s + (u ? "_" : "") + a.toLowerCase();
        });
        function jS(s, a, u) {
          return (
            u && typeof u != "number" && wr(s, a, u) && (a = u = t),
            (u = u === t ? d : u >>> 0),
            u
              ? ((s = Ye(s)),
                s &&
                (typeof a == "string" || (a != null && !pf(a))) &&
                ((a = Ur(a)), !a && no(s))
                  ? Zn(mi(s), 0, u)
                  : s.split(a, u))
              : []
          );
        }
        var zS = fo(function (s, a, u) {
          return s + (u ? " " : "") + yf(a);
        });
        function kS(s, a, u) {
          return (
            (s = Ye(s)),
            (u = u == null ? 0 : Ss(Ce(u), 0, s.length)),
            (a = Ur(a)),
            s.slice(u, u + a.length) == a
          );
        }
        function HS(s, a, u) {
          var f = x.templateSettings;
          u && wr(s, a, u) && (a = t), (s = Ye(s)), (a = mu({}, a, f, U1));
          var _ = mu({}, a.imports, f.imports, U1),
            O = Qt(_),
            F = Dl(_, O),
            j,
            V,
            te = 0,
            re = a.interpolate || Kn,
            he = "__p += '",
            ge = Cl(
              (a.escape || Kn).source +
                "|" +
                re.source +
                "|" +
                (re === at ? xt : Kn).source +
                "|" +
                (a.evaluate || Kn).source +
                "|$",
              "g"
            ),
            we =
              "//# sourceURL=" +
              (st.call(a, "sourceURL")
                ? (a.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++X_ + "]") +
              `
`;
          s.replace(ge, function (Ae, Fe, je, jr, br, zr) {
            return (
              je || (je = jr),
              (he += s.slice(te, zr).replace(aa, v6)),
              Fe &&
                ((j = !0),
                (he +=
                  `' +
__e(` +
                  Fe +
                  `) +
'`)),
              br &&
                ((V = !0),
                (he +=
                  `';
` +
                  br +
                  `;
__p += '`)),
              je &&
                (he +=
                  `' +
((__t = (` +
                  je +
                  `)) == null ? '' : __t) +
'`),
              (te = zr + Ae.length),
              Ae
            );
          }),
            (he += `';
`);
          var Ee = st.call(a, "variable") && a.variable;
          if (!Ee)
            he =
              `with (obj) {
` +
              he +
              `
}
`;
          else if (St.test(Ee)) throw new xe(l);
          (he = (V ? he.replace(dt, "") : he)
            .replace(cn, "$1")
            .replace(pt, "$1;")),
            (he =
              "function(" +
              (Ee || "obj") +
              `) {
` +
              (Ee
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (j ? ", __e = _.escape" : "") +
              (V
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              he +
              `return __p
}`);
          var Oe = Om(function () {
            return $e(O, we + "return " + he).apply(t, F);
          });
          if (((Oe.source = he), df(Oe))) throw Oe;
          return Oe;
        }
        function KS(s) {
          return Ye(s).toLowerCase();
        }
        function VS(s) {
          return Ye(s).toUpperCase();
        }
        function GS(s, a, u) {
          if (((s = Ye(s)), s && (u || a === t))) return qg(s);
          if (!s || !(a = Ur(a))) return s;
          var f = mi(s),
            _ = mi(a),
            O = jg(f, _),
            F = zg(f, _) + 1;
          return Zn(f, O, F).join("");
        }
        function $S(s, a, u) {
          if (((s = Ye(s)), s && (u || a === t))) return s.slice(0, Hg(s) + 1);
          if (!s || !(a = Ur(a))) return s;
          var f = mi(s),
            _ = zg(f, mi(a)) + 1;
          return Zn(f, 0, _).join("");
        }
        function JS(s, a, u) {
          if (((s = Ye(s)), s && (u || a === t))) return s.replace(nt, "");
          if (!s || !(a = Ur(a))) return s;
          var f = mi(s),
            _ = jg(f, mi(a));
          return Zn(f, _).join("");
        }
        function WS(s, a) {
          var u = fe,
            f = M;
          if (Tt(a)) {
            var _ = "separator" in a ? a.separator : _;
            (u = "length" in a ? Ce(a.length) : u),
              (f = "omission" in a ? Ur(a.omission) : f);
          }
          s = Ye(s);
          var O = s.length;
          if (no(s)) {
            var F = mi(s);
            O = F.length;
          }
          if (u >= O) return s;
          var j = u - so(f);
          if (j < 1) return f;
          var V = F ? Zn(F, 0, j).join("") : s.slice(0, j);
          if (_ === t) return V + f;
          if ((F && (j += V.length - j), pf(_))) {
            if (s.slice(j).search(_)) {
              var te,
                re = V;
              for (
                _.global || (_ = Cl(_.source, Ye(ct.exec(_)) + "g")),
                  _.lastIndex = 0;
                (te = _.exec(re));

              )
                var he = te.index;
              V = V.slice(0, he === t ? j : he);
            }
          } else if (s.indexOf(Ur(_), j) != j) {
            var ge = V.lastIndexOf(_);
            ge > -1 && (V = V.slice(0, ge));
          }
          return V + f;
        }
        function YS(s) {
          return (s = Ye(s)), s && gt.test(s) ? s.replace(ot, x6) : s;
        }
        var QS = fo(function (s, a, u) {
            return s + (u ? " " : "") + a.toUpperCase();
          }),
          yf = P1("toUpperCase");
        function Cm(s, a, u) {
          return (
            (s = Ye(s)),
            (a = u ? t : a),
            a === t ? (b6(s) ? R6(s) : l6(s)) : s.match(a) || []
          );
        }
        var Om = Pe(function (s, a) {
            try {
              return Lr(s, t, a);
            } catch (u) {
              return df(u) ? u : new xe(u);
            }
          }),
          XS = vn(function (s, a) {
            return (
              Xr(a, function (u) {
                (u = Bi(u)), mn(s, u, lf(s[u], s));
              }),
              s
            );
          });
        function ZS(s) {
          var a = s == null ? 0 : s.length,
            u = _e();
          return (
            (s = a
              ? Pt(s, function (f) {
                  if (typeof f[1] != "function") throw new Zr(c);
                  return [u(f[0]), f[1]];
                })
              : []),
            Pe(function (f) {
              for (var _ = -1; ++_ < a; ) {
                var O = s[_];
                if (Lr(O[0], this, f)) return Lr(O[1], this, f);
              }
            })
          );
        }
        function ex(s) {
          return xE(ti(s, v));
        }
        function vf(s) {
          return function () {
            return s;
          };
        }
        function tx(s, a) {
          return s == null || s !== s ? a : s;
        }
        var rx = N1(),
          ix = N1(!0);
        function Or(s) {
          return s;
        }
        function wf(s) {
          return u1(typeof s == "function" ? s : ti(s, v));
        }
        function nx(s) {
          return l1(ti(s, v));
        }
        function sx(s, a) {
          return f1(s, ti(a, v));
        }
        var ox = Pe(function (s, a) {
            return function (u) {
              return Aa(u, s, a);
            };
          }),
          ax = Pe(function (s, a) {
            return function (u) {
              return Aa(s, u, a);
            };
          });
        function bf(s, a, u) {
          var f = Qt(a),
            _ = Qc(a, f);
          u == null &&
            !(Tt(a) && (_.length || !f.length)) &&
            ((u = a), (a = s), (s = this), (_ = Qc(a, Qt(a))));
          var O = !(Tt(u) && "chain" in u) || !!u.chain,
            F = bn(s);
          return (
            Xr(_, function (j) {
              var V = a[j];
              (s[j] = V),
                F &&
                  (s.prototype[j] = function () {
                    var te = this.__chain__;
                    if (O || te) {
                      var re = s(this.__wrapped__),
                        he = (re.__actions__ = Dr(this.__actions__));
                      return (
                        he.push({ func: V, args: arguments, thisArg: s }),
                        (re.__chain__ = te),
                        re
                      );
                    }
                    return V.apply(s, $n([this.value()], arguments));
                  });
            }),
            s
          );
        }
        function cx() {
          return er._ === this && (er._ = T6), this;
        }
        function _f() {}
        function ux(s) {
          return (
            (s = Ce(s)),
            Pe(function (a) {
              return d1(a, s);
            })
          );
        }
        var hx = Ql(Pt),
          lx = Ql(Tg),
          fx = Ql(El);
        function Pm(s) {
          return sf(s) ? Al(Bi(s)) : kE(s);
        }
        function dx(s) {
          return function (a) {
            return s == null ? t : xs(s, a);
          };
        }
        var px = F1(),
          gx = F1(!0);
        function Ef() {
          return [];
        }
        function Af() {
          return !1;
        }
        function mx() {
          return {};
        }
        function yx() {
          return "";
        }
        function vx() {
          return !0;
        }
        function wx(s, a) {
          if (((s = Ce(s)), s < 1 || s > N)) return [];
          var u = d,
            f = cr(s, d);
          (a = _e(a)), (s -= d);
          for (var _ = Il(f, a); ++u < s; ) a(u);
          return _;
        }
        function bx(s) {
          return De(s) ? Pt(s, Bi) : qr(s) ? [s] : Dr(Q1(Ye(s)));
        }
        function _x(s) {
          var a = ++M6;
          return Ye(s) + a;
        }
        var Ex = iu(function (s, a) {
            return s + a;
          }, 0),
          Ax = Xl("ceil"),
          Sx = iu(function (s, a) {
            return s / a;
          }, 1),
          xx = Xl("floor");
        function Ix(s) {
          return s && s.length ? Yc(s, Or, Bl) : t;
        }
        function Dx(s, a) {
          return s && s.length ? Yc(s, _e(a, 2), Bl) : t;
        }
        function Rx(s) {
          return Bg(s, Or);
        }
        function Cx(s, a) {
          return Bg(s, _e(a, 2));
        }
        function Ox(s) {
          return s && s.length ? Yc(s, Or, zl) : t;
        }
        function Px(s, a) {
          return s && s.length ? Yc(s, _e(a, 2), zl) : t;
        }
        var Mx = iu(function (s, a) {
            return s * a;
          }, 1),
          Nx = Xl("round"),
          Tx = iu(function (s, a) {
            return s - a;
          }, 0);
        function Fx(s) {
          return s && s.length ? xl(s, Or) : 0;
        }
        function Lx(s, a) {
          return s && s.length ? xl(s, _e(a, 2)) : 0;
        }
        return (
          (x.after = n8),
          (x.ary = cm),
          (x.assign = V8),
          (x.assignIn = Em),
          (x.assignInWith = mu),
          (x.assignWith = G8),
          (x.at = $8),
          (x.before = um),
          (x.bind = lf),
          (x.bindAll = XS),
          (x.bindKey = hm),
          (x.castArray = m8),
          (x.chain = sm),
          (x.chunk = xA),
          (x.compact = IA),
          (x.concat = DA),
          (x.cond = ZS),
          (x.conforms = ex),
          (x.constant = vf),
          (x.countBy = F5),
          (x.create = J8),
          (x.curry = lm),
          (x.curryRight = fm),
          (x.debounce = dm),
          (x.defaults = W8),
          (x.defaultsDeep = Y8),
          (x.defer = s8),
          (x.delay = o8),
          (x.difference = RA),
          (x.differenceBy = CA),
          (x.differenceWith = OA),
          (x.drop = PA),
          (x.dropRight = MA),
          (x.dropRightWhile = NA),
          (x.dropWhile = TA),
          (x.fill = FA),
          (x.filter = B5),
          (x.flatMap = j5),
          (x.flatMapDeep = z5),
          (x.flatMapDepth = k5),
          (x.flatten = tm),
          (x.flattenDeep = LA),
          (x.flattenDepth = BA),
          (x.flip = a8),
          (x.flow = rx),
          (x.flowRight = ix),
          (x.fromPairs = UA),
          (x.functions = iS),
          (x.functionsIn = nS),
          (x.groupBy = H5),
          (x.initial = jA),
          (x.intersection = zA),
          (x.intersectionBy = kA),
          (x.intersectionWith = HA),
          (x.invert = oS),
          (x.invertBy = aS),
          (x.invokeMap = V5),
          (x.iteratee = wf),
          (x.keyBy = G5),
          (x.keys = Qt),
          (x.keysIn = Cr),
          (x.map = hu),
          (x.mapKeys = uS),
          (x.mapValues = hS),
          (x.matches = nx),
          (x.matchesProperty = sx),
          (x.memoize = fu),
          (x.merge = lS),
          (x.mergeWith = Am),
          (x.method = ox),
          (x.methodOf = ax),
          (x.mixin = bf),
          (x.negate = du),
          (x.nthArg = ux),
          (x.omit = fS),
          (x.omitBy = dS),
          (x.once = c8),
          (x.orderBy = $5),
          (x.over = hx),
          (x.overArgs = u8),
          (x.overEvery = lx),
          (x.overSome = fx),
          (x.partial = ff),
          (x.partialRight = pm),
          (x.partition = J5),
          (x.pick = pS),
          (x.pickBy = Sm),
          (x.property = Pm),
          (x.propertyOf = dx),
          (x.pull = $A),
          (x.pullAll = im),
          (x.pullAllBy = JA),
          (x.pullAllWith = WA),
          (x.pullAt = YA),
          (x.range = px),
          (x.rangeRight = gx),
          (x.rearg = h8),
          (x.reject = Q5),
          (x.remove = QA),
          (x.rest = l8),
          (x.reverse = uf),
          (x.sampleSize = Z5),
          (x.set = mS),
          (x.setWith = yS),
          (x.shuffle = e8),
          (x.slice = XA),
          (x.sortBy = i8),
          (x.sortedUniq = s5),
          (x.sortedUniqBy = o5),
          (x.split = jS),
          (x.spread = f8),
          (x.tail = a5),
          (x.take = c5),
          (x.takeRight = u5),
          (x.takeRightWhile = h5),
          (x.takeWhile = l5),
          (x.tap = I5),
          (x.throttle = d8),
          (x.thru = uu),
          (x.toArray = wm),
          (x.toPairs = xm),
          (x.toPairsIn = Im),
          (x.toPath = bx),
          (x.toPlainObject = _m),
          (x.transform = vS),
          (x.unary = p8),
          (x.union = f5),
          (x.unionBy = d5),
          (x.unionWith = p5),
          (x.uniq = g5),
          (x.uniqBy = m5),
          (x.uniqWith = y5),
          (x.unset = wS),
          (x.unzip = hf),
          (x.unzipWith = nm),
          (x.update = bS),
          (x.updateWith = _S),
          (x.values = mo),
          (x.valuesIn = ES),
          (x.without = v5),
          (x.words = Cm),
          (x.wrap = g8),
          (x.xor = w5),
          (x.xorBy = b5),
          (x.xorWith = _5),
          (x.zip = E5),
          (x.zipObject = A5),
          (x.zipObjectDeep = S5),
          (x.zipWith = x5),
          (x.entries = xm),
          (x.entriesIn = Im),
          (x.extend = Em),
          (x.extendWith = mu),
          bf(x, x),
          (x.add = Ex),
          (x.attempt = Om),
          (x.camelCase = IS),
          (x.capitalize = Dm),
          (x.ceil = Ax),
          (x.clamp = AS),
          (x.clone = y8),
          (x.cloneDeep = w8),
          (x.cloneDeepWith = b8),
          (x.cloneWith = v8),
          (x.conformsTo = _8),
          (x.deburr = Rm),
          (x.defaultTo = tx),
          (x.divide = Sx),
          (x.endsWith = DS),
          (x.eq = vi),
          (x.escape = RS),
          (x.escapeRegExp = CS),
          (x.every = L5),
          (x.find = U5),
          (x.findIndex = Z1),
          (x.findKey = Q8),
          (x.findLast = q5),
          (x.findLastIndex = em),
          (x.findLastKey = X8),
          (x.floor = xx),
          (x.forEach = om),
          (x.forEachRight = am),
          (x.forIn = Z8),
          (x.forInRight = eS),
          (x.forOwn = tS),
          (x.forOwnRight = rS),
          (x.get = gf),
          (x.gt = E8),
          (x.gte = A8),
          (x.has = sS),
          (x.hasIn = mf),
          (x.head = rm),
          (x.identity = Or),
          (x.includes = K5),
          (x.indexOf = qA),
          (x.inRange = SS),
          (x.invoke = cS),
          (x.isArguments = Rs),
          (x.isArray = De),
          (x.isArrayBuffer = S8),
          (x.isArrayLike = Rr),
          (x.isArrayLikeObject = jt),
          (x.isBoolean = x8),
          (x.isBuffer = es),
          (x.isDate = I8),
          (x.isElement = D8),
          (x.isEmpty = R8),
          (x.isEqual = C8),
          (x.isEqualWith = O8),
          (x.isError = df),
          (x.isFinite = P8),
          (x.isFunction = bn),
          (x.isInteger = gm),
          (x.isLength = pu),
          (x.isMap = mm),
          (x.isMatch = M8),
          (x.isMatchWith = N8),
          (x.isNaN = T8),
          (x.isNative = F8),
          (x.isNil = B8),
          (x.isNull = L8),
          (x.isNumber = ym),
          (x.isObject = Tt),
          (x.isObjectLike = Lt),
          (x.isPlainObject = Ca),
          (x.isRegExp = pf),
          (x.isSafeInteger = U8),
          (x.isSet = vm),
          (x.isString = gu),
          (x.isSymbol = qr),
          (x.isTypedArray = go),
          (x.isUndefined = q8),
          (x.isWeakMap = j8),
          (x.isWeakSet = z8),
          (x.join = KA),
          (x.kebabCase = OS),
          (x.last = ii),
          (x.lastIndexOf = VA),
          (x.lowerCase = PS),
          (x.lowerFirst = MS),
          (x.lt = k8),
          (x.lte = H8),
          (x.max = Ix),
          (x.maxBy = Dx),
          (x.mean = Rx),
          (x.meanBy = Cx),
          (x.min = Ox),
          (x.minBy = Px),
          (x.stubArray = Ef),
          (x.stubFalse = Af),
          (x.stubObject = mx),
          (x.stubString = yx),
          (x.stubTrue = vx),
          (x.multiply = Mx),
          (x.nth = GA),
          (x.noConflict = cx),
          (x.noop = _f),
          (x.now = lu),
          (x.pad = NS),
          (x.padEnd = TS),
          (x.padStart = FS),
          (x.parseInt = LS),
          (x.random = xS),
          (x.reduce = W5),
          (x.reduceRight = Y5),
          (x.repeat = BS),
          (x.replace = US),
          (x.result = gS),
          (x.round = Nx),
          (x.runInContext = k),
          (x.sample = X5),
          (x.size = t8),
          (x.snakeCase = qS),
          (x.some = r8),
          (x.sortedIndex = ZA),
          (x.sortedIndexBy = e5),
          (x.sortedIndexOf = t5),
          (x.sortedLastIndex = r5),
          (x.sortedLastIndexBy = i5),
          (x.sortedLastIndexOf = n5),
          (x.startCase = zS),
          (x.startsWith = kS),
          (x.subtract = Tx),
          (x.sum = Fx),
          (x.sumBy = Lx),
          (x.template = HS),
          (x.times = wx),
          (x.toFinite = _n),
          (x.toInteger = Ce),
          (x.toLength = bm),
          (x.toLower = KS),
          (x.toNumber = ni),
          (x.toSafeInteger = K8),
          (x.toString = Ye),
          (x.toUpper = VS),
          (x.trim = GS),
          (x.trimEnd = $S),
          (x.trimStart = JS),
          (x.truncate = WS),
          (x.unescape = YS),
          (x.uniqueId = _x),
          (x.upperCase = QS),
          (x.upperFirst = yf),
          (x.each = om),
          (x.eachRight = am),
          (x.first = rm),
          bf(
            x,
            (function () {
              var s = {};
              return (
                Fi(x, function (a, u) {
                  st.call(x.prototype, u) || (s[u] = a);
                }),
                s
              );
            })(),
            { chain: !1 }
          ),
          (x.VERSION = i),
          Xr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (s) {
              x[s].placeholder = x;
            }
          ),
          Xr(["drop", "take"], function (s, a) {
            (Le.prototype[s] = function (u) {
              u = u === t ? 1 : Gt(Ce(u), 0);
              var f = this.__filtered__ && !a ? new Le(this) : this.clone();
              return (
                f.__filtered__
                  ? (f.__takeCount__ = cr(u, f.__takeCount__))
                  : f.__views__.push({
                      size: cr(u, d),
                      type: s + (f.__dir__ < 0 ? "Right" : ""),
                    }),
                f
              );
            }),
              (Le.prototype[s + "Right"] = function (u) {
                return this.reverse()[s](u).reverse();
              });
          }),
          Xr(["filter", "map", "takeWhile"], function (s, a) {
            var u = a + 1,
              f = u == m || u == S;
            Le.prototype[s] = function (_) {
              var O = this.clone();
              return (
                O.__iteratees__.push({ iteratee: _e(_, 3), type: u }),
                (O.__filtered__ = O.__filtered__ || f),
                O
              );
            };
          }),
          Xr(["head", "last"], function (s, a) {
            var u = "take" + (a ? "Right" : "");
            Le.prototype[s] = function () {
              return this[u](1).value()[0];
            };
          }),
          Xr(["initial", "tail"], function (s, a) {
            var u = "drop" + (a ? "" : "Right");
            Le.prototype[s] = function () {
              return this.__filtered__ ? new Le(this) : this[u](1);
            };
          }),
          (Le.prototype.compact = function () {
            return this.filter(Or);
          }),
          (Le.prototype.find = function (s) {
            return this.filter(s).head();
          }),
          (Le.prototype.findLast = function (s) {
            return this.reverse().find(s);
          }),
          (Le.prototype.invokeMap = Pe(function (s, a) {
            return typeof s == "function"
              ? new Le(this)
              : this.map(function (u) {
                  return Aa(u, s, a);
                });
          })),
          (Le.prototype.reject = function (s) {
            return this.filter(du(_e(s)));
          }),
          (Le.prototype.slice = function (s, a) {
            s = Ce(s);
            var u = this;
            return u.__filtered__ && (s > 0 || a < 0)
              ? new Le(u)
              : (s < 0 ? (u = u.takeRight(-s)) : s && (u = u.drop(s)),
                a !== t &&
                  ((a = Ce(a)), (u = a < 0 ? u.dropRight(-a) : u.take(a - s))),
                u);
          }),
          (Le.prototype.takeRightWhile = function (s) {
            return this.reverse().takeWhile(s).reverse();
          }),
          (Le.prototype.toArray = function () {
            return this.take(d);
          }),
          Fi(Le.prototype, function (s, a) {
            var u = /^(?:filter|find|map|reject)|While$/.test(a),
              f = /^(?:head|last)$/.test(a),
              _ = x[f ? "take" + (a == "last" ? "Right" : "") : a],
              O = f || /^find/.test(a);
            _ &&
              (x.prototype[a] = function () {
                var F = this.__wrapped__,
                  j = f ? [1] : arguments,
                  V = F instanceof Le,
                  te = j[0],
                  re = V || De(F),
                  he = function (Fe) {
                    var je = _.apply(x, $n([Fe], j));
                    return f && ge ? je[0] : je;
                  };
                re &&
                  u &&
                  typeof te == "function" &&
                  te.length != 1 &&
                  (V = re = !1);
                var ge = this.__chain__,
                  we = !!this.__actions__.length,
                  Ee = O && !ge,
                  Oe = V && !we;
                if (!O && re) {
                  F = Oe ? F : new Le(this);
                  var Ae = s.apply(F, j);
                  return (
                    Ae.__actions__.push({ func: uu, args: [he], thisArg: t }),
                    new ei(Ae, ge)
                  );
                }
                return Ee && Oe
                  ? s.apply(this, j)
                  : ((Ae = this.thru(he)),
                    Ee ? (f ? Ae.value()[0] : Ae.value()) : Ae);
              });
          }),
          Xr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (s) {
              var a = Fc[s],
                u = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru",
                f = /^(?:pop|shift)$/.test(s);
              x.prototype[s] = function () {
                var _ = arguments;
                if (f && !this.__chain__) {
                  var O = this.value();
                  return a.apply(De(O) ? O : [], _);
                }
                return this[u](function (F) {
                  return a.apply(De(F) ? F : [], _);
                });
              };
            }
          ),
          Fi(Le.prototype, function (s, a) {
            var u = x[a];
            if (u) {
              var f = u.name + "";
              st.call(uo, f) || (uo[f] = []), uo[f].push({ name: a, func: u });
            }
          }),
          (uo[ru(t, H).name] = [{ name: "wrapper", func: t }]),
          (Le.prototype.clone = Y6),
          (Le.prototype.reverse = Q6),
          (Le.prototype.value = X6),
          (x.prototype.at = D5),
          (x.prototype.chain = R5),
          (x.prototype.commit = C5),
          (x.prototype.next = O5),
          (x.prototype.plant = M5),
          (x.prototype.reverse = N5),
          (x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = T5),
          (x.prototype.first = x.prototype.head),
          ma && (x.prototype[ma] = P5),
          x
        );
      },
      oo = C6();
    bs ? (((bs.exports = oo)._ = oo), (vl._ = oo)) : (er._ = oo);
  }.call(Oc));
})(Q0, Q0.exports);
var KF = Object.defineProperty,
  VF = Object.defineProperties,
  GF = Object.getOwnPropertyDescriptors,
  S_ = Object.getOwnPropertySymbols,
  $F = Object.prototype.hasOwnProperty,
  JF = Object.prototype.propertyIsEnumerable,
  x_ = (r, e, t) =>
    e in r
      ? KF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  ul = (r, e) => {
    for (var t in e || (e = {})) $F.call(e, t) && x_(r, t, e[t]);
    if (S_) for (var t of S_(e)) JF.call(e, t) && x_(r, t, e[t]);
    return r;
  },
  WF = (r, e) => VF(r, GF(e));
function ws(r, e, t) {
  var i;
  let n = Bo(r);
  return (
    ((i = e.rpcMap) == null ? void 0 : i[n.reference]) ||
    `${HF}?chainId=${n.namespace}:${n.reference}&projectId=${t}`
  );
}
function Xs(r) {
  return r.includes(":") ? r.split(":")[1] : r;
}
function P_(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function YF(r, e) {
  let t = Object.keys(e.namespaces).filter((n) => n.includes(r));
  if (!t.length) return [];
  let i = [];
  return (
    t.forEach((n) => {
      let o = e.namespaces[n].accounts;
      i.push(...o);
    }),
    i
  );
}
function $0(r = {}, e = {}) {
  let t = I_(r),
    i = I_(e);
  return Q0.exports.merge(t, i);
}
function I_(r) {
  var e, t, i, n;
  let o = {};
  if (!Us(r)) return o;
  for (let [c, l] of Object.entries(r)) {
    let p = ah(c) ? [c] : l.chains,
      g = l.methods || [],
      y = l.events || [],
      v = l.rpcMap || {},
      A = $o(c);
    o[A] = WF(ul(ul({}, o[A]), l), {
      chains: tc(p, (e = o[A]) == null ? void 0 : e.chains),
      methods: tc(g, (t = o[A]) == null ? void 0 : t.methods),
      events: tc(y, (i = o[A]) == null ? void 0 : i.events),
      rpcMap: ul(ul({}, v), (n = o[A]) == null ? void 0 : n.rpcMap),
    });
  }
  return o;
}
function QF(r) {
  return r.includes(":") ? r.split(":")[2] : r;
}
function D_(r) {
  let e = {};
  for (let [t, i] of Object.entries(r)) {
    let n = i.methods || [],
      o = i.events || [],
      c = i.accounts || [],
      l = ah(t) ? [t] : i.chains ? i.chains : P_(i.accounts);
    e[t] = { chains: l, methods: n, events: o, accounts: c };
  }
  return e;
}
function J0(r) {
  return typeof r == "number"
    ? r
    : r.includes("0x")
    ? parseInt(r, 16)
    : ((r = r.includes(":") ? r.split(":")[1] : r),
      isNaN(Number(r)) ? r : Number(r));
}
var M_ = {},
  Nt = (r) => M_[r],
  W0 = (r, e) => {
    M_[r] = e;
  },
  X0 = class {
    constructor(e) {
      (this.name = "polkadot"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(Hn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? e
            .filter((t) => t.split(":")[1] === this.chainId.toString())
            .map((t) => t.split(":")[2]) || []
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || ws(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  Z0 = class {
    constructor(e) {
      (this.name = "eip155"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.httpProviders = this.createHttpProviders()),
        (this.chainId = parseInt(this.getDefaultChain()));
    }
    request(e) {
      return C(this, null, function* () {
        switch (e.request.method) {
          case "eth_requestAccounts":
            return this.getAccounts();
          case "eth_accounts":
            return this.getAccounts();
          case "wallet_switchEthereumChain":
            return yield this.handleSwitchChain(e);
          case "eth_chainId":
            return parseInt(this.getDefaultChain());
        }
        return this.namespace.methods.includes(e.request.method)
          ? yield this.client.request(e)
          : this.getHttpProvider().request(e.request);
      });
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
        (this.chainId = parseInt(e)),
        this.events.emit(Hn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId.toString();
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    createHttpProvider(e, t) {
      let i =
        t ||
        ws(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = parseInt(Xs(t));
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    getHttpProvider() {
      let e = this.chainId,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    handleSwitchChain(e) {
      return C(this, null, function* () {
        var t, i;
        let n = e.request.params
          ? (t = e.request.params[0]) == null
            ? void 0
            : t.chainId
          : "0x0";
        n = n.startsWith("0x") ? n : `0x${n}`;
        let o = parseInt(n, 16);
        if (this.isChainApproved(o)) this.setDefaultChain(`${o}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
          yield this.client.request({
            topic: e.topic,
            request: { method: e.request.method, params: [{ chainId: n }] },
            chainId: (i = this.namespace.chains) == null ? void 0 : i[0],
          }),
            this.setDefaultChain(`${o}`);
        else
          throw new Error(
            `Failed to switch to chain 'eip155:${o}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
          );
        return null;
      });
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
  },
  eg = class {
    constructor(e) {
      (this.name = "solana"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(Hn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || ws(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  tg = class {
    constructor(e) {
      (this.name = "cosmos"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(
          Hn.DEFAULT_CHAIN_CHANGED,
          `${this.name}:${this.chainId}`
        );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || ws(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  rg = class {
    constructor(e) {
      (this.name = "cip34"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(
          Hn.DEFAULT_CHAIN_CHANGED,
          `${this.name}:${this.chainId}`
        );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          let i = this.getCardanoRPCUrl(t),
            n = Xs(t);
          e[n] = this.createHttpProvider(n, i);
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    getCardanoRPCUrl(e) {
      let t = this.namespace.rpcMap;
      if (t) return t[e];
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || this.getCardanoRPCUrl(e);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  ig = class {
    constructor(e) {
      (this.name = "elrond"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(Hn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || ws(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  ng = class {
    constructor(e) {
      (this.name = "multiversx"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.setHttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(Hn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || ws(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  sg = class {
    constructor(e) {
      (this.name = "near"),
        (this.namespace = e.namespace),
        (this.events = Nt("events")),
        (this.client = Nt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      if (((this.chainId = e), !this.httpProviders[e])) {
        let i = t || ws(`${this.name}:${e}`, this.namespace);
        if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
        this.setHttpProvider(e, i);
      }
      this.events.emit(
        Hn.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? e
            .filter((t) => t.split(":")[1] === this.chainId.toString())
            .map((t) => t.split(":")[2]) || []
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          e[t] = this.createHttpProvider(
            t,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getHttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    setHttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || ws(e, this.namespace);
      return typeof i > "u"
        ? void 0
        : new Jr(new li(i, Nt("disableProviderPing")));
    }
  },
  XF = Object.defineProperty,
  ZF = Object.defineProperties,
  eL = Object.getOwnPropertyDescriptors,
  R_ = Object.getOwnPropertySymbols,
  tL = Object.prototype.hasOwnProperty,
  rL = Object.prototype.propertyIsEnumerable,
  C_ = (r, e, t) =>
    e in r
      ? XF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  hl = (r, e) => {
    for (var t in e || (e = {})) tL.call(e, t) && C_(r, t, e[t]);
    if (R_) for (var t of R_(e)) rL.call(e, t) && C_(r, t, e[t]);
    return r;
  },
  Y0 = (r, e) => ZF(r, eL(e)),
  og = class r {
    constructor(e) {
      (this.events = new O_.default()),
        (this.rpcProviders = {}),
        (this.shouldAbortPairingAttempt = !1),
        (this.maxPairingAttempts = 10),
        (this.disableProviderPing = !1),
        (this.providerOpts = e),
        (this.logger =
          typeof e?.logger < "u" && typeof e?.logger != "string"
            ? e.logger
            : (0, js.default)(zs({ level: e?.logger || E_ }))),
        (this.disableProviderPing = e?.disableProviderPing || !1);
    }
    static init(e) {
      return C(this, null, function* () {
        let t = new r(e);
        return yield t.initialize(), t;
      });
    }
    request(e, t, i) {
      return C(this, null, function* () {
        let [n, o] = this.validateChain(t);
        if (!this.session)
          throw new Error("Please call connect() before request()");
        return yield this.getProvider(n).request({
          request: hl({}, e),
          chainId: `${n}:${o}`,
          topic: this.session.topic,
          expiry: i,
        });
      });
    }
    sendAsync(e, t, i, n) {
      let o = new Date().getTime();
      this.request(e, i, n)
        .then((c) => t(null, ds(o, c)))
        .catch((c) => t(c, void 0));
    }
    enable() {
      return C(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        return (
          this.session ||
            (yield this.connect({
              namespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            })),
          yield this.requestAccounts()
        );
      });
    }
    disconnect() {
      return C(this, null, function* () {
        var e;
        if (!this.session)
          throw new Error("Please call connect() before enable()");
        yield this.client.disconnect({
          topic: (e = this.session) == null ? void 0 : e.topic,
          reason: ze("USER_DISCONNECTED"),
        }),
          yield this.cleanup();
      });
    }
    connect(e) {
      return C(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (
          (this.setNamespaces(e),
          yield this.cleanupPendingPairings(),
          !e.skipPairing)
        )
          return yield this.pair(e.pairingTopic);
      });
    }
    authenticate(e) {
      return C(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(e), yield this.cleanupPendingPairings();
        let { uri: t, response: i } = yield this.client.authenticate(e);
        t && ((this.uri = t), this.events.emit("display_uri", t));
        let n = yield i();
        if (((this.session = n.session), this.session)) {
          let o = D_(this.session.namespaces);
          (this.namespaces = $0(this.namespaces, o)),
            this.persist("namespaces", this.namespaces),
            this.onConnect();
        }
        return n;
      });
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    get isWalletConnect() {
      return !0;
    }
    pair(e) {
      return C(this, null, function* () {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
          if (this.shouldAbortPairingAttempt)
            throw new Error("Pairing aborted");
          if (t >= this.maxPairingAttempts)
            throw new Error("Max auto pairing attempts reached");
          let { uri: i, approval: n } = yield this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
          });
          i && ((this.uri = i), this.events.emit("display_uri", i)),
            yield n()
              .then((o) => {
                this.session = o;
                let c = D_(o.namespaces);
                (this.namespaces = $0(this.namespaces, c)),
                  this.persist("namespaces", this.namespaces);
              })
              .catch((o) => {
                if (o.message !== V0) throw o;
                t++;
              });
        } while (!this.session);
        return this.onConnect(), this.session;
      });
    }
    setDefaultChain(e, t) {
      try {
        if (!this.session) return;
        let [i, n] = this.validateChain(e);
        this.getProvider(i).setDefaultChain(n, t);
      } catch (i) {
        if (!/Please call connect/.test(i.message)) throw i;
      }
    }
    cleanupPendingPairings() {
      return C(this, arguments, function* (e = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        let t = this.client.pairing.getAll();
        if (Gr(t)) {
          for (let i of t)
            e.deletePairings
              ? this.client.core.expirer.set(i.topic, 0)
              : yield this.client.core.relayer.subscriber.unsubscribe(i.topic);
          this.logger.info(`Inactive pairings cleared: ${t.length}`);
        }
      });
    }
    abortPairingAttempt() {
      this.shouldAbortPairingAttempt = !0;
    }
    checkStorage() {
      return C(this, null, function* () {
        if (
          ((this.namespaces = yield this.getFromStore("namespaces")),
          (this.optionalNamespaces =
            (yield this.getFromStore("optionalNamespaces")) || {}),
          this.client.session.length)
        ) {
          let e = this.client.session.keys.length - 1;
          (this.session = this.client.session.get(this.client.session.keys[e])),
            this.createProviders();
        }
      });
    }
    initialize() {
      return C(this, null, function* () {
        this.logger.trace("Initialized"),
          yield this.createClient(),
          yield this.checkStorage(),
          this.registerEventListeners();
      });
    }
    createClient() {
      return C(this, null, function* () {
        (this.client =
          this.providerOpts.client ||
          (yield nl.init({
            logger: this.providerOpts.logger || E_,
            relayUrl: this.providerOpts.relayUrl || jF,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name,
          }))),
          this.logger.trace("SignClient Initialized");
      });
    }
    createProviders() {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (!this.session)
        throw new Error(
          "Session not initialized. Please call connect() before enable()"
        );
      let e = [
        ...new Set(Object.keys(this.session.namespaces).map((t) => $o(t))),
      ];
      W0("client", this.client),
        W0("events", this.events),
        W0("disableProviderPing", this.disableProviderPing),
        e.forEach((t) => {
          if (!this.session) return;
          let i = YF(t, this.session),
            n = P_(i),
            o = $0(this.namespaces, this.optionalNamespaces),
            c = Y0(hl({}, o[t]), { accounts: i, chains: n });
          switch (t) {
            case "eip155":
              this.rpcProviders[t] = new Z0({ namespace: c });
              break;
            case "solana":
              this.rpcProviders[t] = new eg({ namespace: c });
              break;
            case "cosmos":
              this.rpcProviders[t] = new tg({ namespace: c });
              break;
            case "polkadot":
              this.rpcProviders[t] = new X0({ namespace: c });
              break;
            case "cip34":
              this.rpcProviders[t] = new rg({ namespace: c });
              break;
            case "elrond":
              this.rpcProviders[t] = new ig({ namespace: c });
              break;
            case "multiversx":
              this.rpcProviders[t] = new ng({ namespace: c });
              break;
            case "near":
              this.rpcProviders[t] = new sg({ namespace: c });
              break;
          }
        });
    }
    registerEventListeners() {
      if (typeof this.client > "u")
        throw new Error("Sign Client is not initialized");
      this.client.on("session_ping", (e) => {
        this.events.emit("session_ping", e);
      }),
        this.client.on("session_event", (e) => {
          let { params: t } = e,
            { event: i } = t;
          if (i.name === "accountsChanged") {
            let n = i.data;
            n && Gr(n) && this.events.emit("accountsChanged", n.map(QF));
          } else if (i.name === "chainChanged") {
            let n = t.chainId,
              o = t.event.data,
              c = $o(n),
              l = J0(n) !== J0(o) ? `${c}:${J0(o)}` : n;
            this.onChainChanged(l);
          } else this.events.emit(i.name, i.data);
          this.events.emit("session_event", e);
        }),
        this.client.on("session_update", ({ topic: e, params: t }) => {
          var i;
          let { namespaces: n } = t,
            o = (i = this.client) == null ? void 0 : i.session.get(e);
          (this.session = Y0(hl({}, o), { namespaces: n })),
            this.onSessionUpdate(),
            this.events.emit("session_update", { topic: e, params: t });
        }),
        this.client.on("session_delete", (e) =>
          C(this, null, function* () {
            yield this.cleanup(),
              this.events.emit("session_delete", e),
              this.events.emit(
                "disconnect",
                Y0(hl({}, ze("USER_DISCONNECTED")), { data: e.topic })
              );
          })
        ),
        this.on(Hn.DEFAULT_CHAIN_CHANGED, (e) => {
          this.onChainChanged(e, !0);
        });
    }
    getProvider(e) {
      if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
      return this.rpcProviders[e];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var t;
        this.getProvider(e).updateNamespace(
          (t = this.session) == null ? void 0 : t.namespaces[e]
        );
      });
    }
    setNamespaces(e) {
      let { namespaces: t, optionalNamespaces: i, sessionProperties: n } = e;
      t && Object.keys(t).length && (this.namespaces = t),
        i && Object.keys(i).length && (this.optionalNamespaces = i),
        (this.sessionProperties = n),
        this.persist("namespaces", t),
        this.persist("optionalNamespaces", i);
    }
    validateChain(e) {
      let [t, i] = e?.split(":") || ["", ""];
      if (!this.namespaces || !Object.keys(this.namespaces).length)
        return [t, i];
      if (
        t &&
        !Object.keys(this.namespaces || {})
          .map((c) => $o(c))
          .includes(t)
      )
        throw new Error(
          `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
        );
      if (t && i) return [t, i];
      let n = $o(Object.keys(this.namespaces)[0]),
        o = this.rpcProviders[n].getDefaultChain();
      return [n, o];
    }
    requestAccounts() {
      return C(this, null, function* () {
        let [e] = this.validateChain();
        return yield this.getProvider(e).requestAccounts();
      });
    }
    onChainChanged(e, t = !1) {
      if (!this.namespaces) return;
      let [i, n] = this.validateChain(e);
      n &&
        (t || this.getProvider(i).setDefaultChain(n),
        this.namespaces[i]
          ? (this.namespaces[i].defaultChain = n)
          : this.namespaces[`${i}:${n}`]
          ? (this.namespaces[`${i}:${n}`].defaultChain = n)
          : (this.namespaces[`${i}:${n}`] = { defaultChain: n }),
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", n));
    }
    onConnect() {
      this.createProviders(),
        this.events.emit("connect", { session: this.session });
    }
    cleanup() {
      return C(this, null, function* () {
        (this.session = void 0),
          (this.namespaces = void 0),
          (this.optionalNamespaces = void 0),
          (this.sessionProperties = void 0),
          this.persist("namespaces", void 0),
          this.persist("optionalNamespaces", void 0),
          this.persist("sessionProperties", void 0),
          yield this.cleanupPendingPairings({ deletePairings: !0 });
      });
    }
    persist(e, t) {
      this.client.core.storage.setItem(`${A_}/${e}`, t);
    }
    getFromStore(e) {
      return C(this, null, function* () {
        return yield this.client.core.storage.getItem(`${A_}/${e}`);
      });
    }
  },
  N_ = og;
var iL = "wc",
  nL = "ethereum_provider",
  sL = `${iL}@2:${nL}:`,
  oL = "https://rpc.walletconnect.com/v1/",
  cg = ["eth_sendTransaction", "personal_sign"],
  aL = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
  ],
  ug = ["chainChanged", "accountsChanged"],
  cL = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"],
  uL = Object.defineProperty,
  hL = Object.defineProperties,
  lL = Object.getOwnPropertyDescriptors,
  T_ = Object.getOwnPropertySymbols,
  fL = Object.prototype.hasOwnProperty,
  dL = Object.prototype.propertyIsEnumerable,
  F_ = (r, e, t) =>
    e in r
      ? uL(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  oa = (r, e) => {
    for (var t in e || (e = {})) fL.call(e, t) && F_(r, t, e[t]);
    if (T_) for (var t of T_(e)) dL.call(e, t) && F_(r, t, e[t]);
    return r;
  },
  ag = (r, e) => hL(r, lL(e));
function fl(r) {
  return Number(r[0].split(":")[1]);
}
function ll(r) {
  return `0x${r.toString(16)}`;
}
function pL(r) {
  let {
    chains: e,
    optionalChains: t,
    methods: i,
    optionalMethods: n,
    events: o,
    optionalEvents: c,
    rpcMap: l,
  } = r;
  if (!Gr(e)) throw new Error("Invalid chains");
  let p = {
      chains: e,
      methods: i || cg,
      events: o || ug,
      rpcMap: oa({}, e.length ? { [fl(e)]: l[fl(e)] } : {}),
    },
    g = o?.filter((E) => !ug.includes(E)),
    y = i?.filter((E) => !cg.includes(E));
  if (!t && !c && !n && !(g != null && g.length) && !(y != null && y.length))
    return { required: e.length ? p : void 0 };
  let v = (g?.length && y?.length) || !t,
    A = {
      chains: [...new Set(v ? p.chains.concat(t || []) : t)],
      methods: [...new Set(p.methods.concat(n != null && n.length ? n : aL))],
      events: [...new Set(p.events.concat(c != null && c.length ? c : cL))],
      rpcMap: l,
    };
  return { required: e.length ? p : void 0, optional: t.length ? A : void 0 };
}
var hg = class r {
    constructor() {
      (this.events = new L_.EventEmitter()),
        (this.namespace = "eip155"),
        (this.accounts = []),
        (this.chainId = 1),
        (this.STORAGE_KEY = sL),
        (this.on = (e, t) => (this.events.on(e, t), this)),
        (this.once = (e, t) => (this.events.once(e, t), this)),
        (this.removeListener = (e, t) => (
          this.events.removeListener(e, t), this
        )),
        (this.off = (e, t) => (this.events.off(e, t), this)),
        (this.parseAccount = (e) =>
          this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
        (this.signer = {}),
        (this.rpc = {});
    }
    static init(e) {
      return C(this, null, function* () {
        let t = new r();
        return yield t.initialize(e), t;
      });
    }
    request(e, t) {
      return C(this, null, function* () {
        return yield this.signer.request(
          e,
          this.formatChainId(this.chainId),
          t
        );
      });
    }
    sendAsync(e, t, i) {
      this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
    }
    get connected() {
      return this.signer.client
        ? this.signer.client.core.relayer.connected
        : !1;
    }
    get connecting() {
      return this.signer.client
        ? this.signer.client.core.relayer.connecting
        : !1;
    }
    enable() {
      return C(this, null, function* () {
        return (
          this.session || (yield this.connect()),
          yield this.request({ method: "eth_requestAccounts" })
        );
      });
    }
    connect(e) {
      return C(this, null, function* () {
        if (!this.signer.client)
          throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        let { required: t, optional: i } = pL(this.rpc);
        try {
          let n = yield new Promise((c, l) =>
            C(this, null, function* () {
              var p;
              this.rpc.showQrModal &&
                ((p = this.modal) == null ||
                  p.subscribeModal((g) => {
                    !g.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      l(
                        new Error("Connection request reset. Please try again.")
                      ));
                  })),
                yield this.signer
                  .connect(
                    ag(
                      oa(
                        { namespaces: oa({}, t && { [this.namespace]: t }) },
                        i && { optionalNamespaces: { [this.namespace]: i } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((g) => {
                    c(g);
                  })
                  .catch((g) => {
                    l(new Error(g.message));
                  });
            })
          );
          if (!n) return;
          let o = zd(n.namespaces, [this.namespace]);
          this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
            this.setAccounts(o),
            this.events.emit("connect", { chainId: ll(this.chainId) });
        } catch (n) {
          throw (this.signer.logger.error(n), n);
        } finally {
          this.modal && this.modal.closeModal();
        }
      });
    }
    authenticate(e) {
      return C(this, null, function* () {
        if (!this.signer.client)
          throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({ chains: e?.chains });
        try {
          let t = yield new Promise((n, o) =>
              C(this, null, function* () {
                var c;
                this.rpc.showQrModal &&
                  ((c = this.modal) == null ||
                    c.subscribeModal((l) => {
                      !l.open &&
                        !this.signer.session &&
                        (this.signer.abortPairingAttempt(),
                        o(
                          new Error(
                            "Connection request reset. Please try again."
                          )
                        ));
                    })),
                  yield this.signer
                    .authenticate(ag(oa({}, e), { chains: this.rpc.chains }))
                    .then((l) => {
                      n(l);
                    })
                    .catch((l) => {
                      o(new Error(l.message));
                    });
              })
            ),
            i = t.session;
          if (i) {
            let n = zd(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
              this.setAccounts(n),
              this.events.emit("connect", { chainId: ll(this.chainId) });
          }
          return t;
        } catch (t) {
          throw (this.signer.logger.error(t), t);
        } finally {
          this.modal && this.modal.closeModal();
        }
      });
    }
    disconnect() {
      return C(this, null, function* () {
        this.session && (yield this.signer.disconnect()), this.reset();
      });
    }
    get isWalletConnect() {
      return !0;
    }
    get session() {
      return this.signer.session;
    }
    registerEventListeners() {
      this.signer.on("session_event", (e) => {
        let { params: t } = e,
          { event: i } = t;
        i.name === "accountsChanged"
          ? ((this.accounts = this.parseAccounts(i.data)),
            this.events.emit("accountsChanged", this.accounts))
          : i.name === "chainChanged"
          ? this.setChainId(this.formatChainId(i.data))
          : this.events.emit(i.name, i.data),
          this.events.emit("session_event", e);
      }),
        this.signer.on("chainChanged", (e) => {
          let t = parseInt(e);
          (this.chainId = t),
            this.events.emit("chainChanged", ll(this.chainId)),
            this.persist();
        }),
        this.signer.on("session_update", (e) => {
          this.events.emit("session_update", e);
        }),
        this.signer.on("session_delete", (e) => {
          this.reset(),
            this.events.emit("session_delete", e),
            this.events.emit(
              "disconnect",
              ag(oa({}, ze("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED",
              })
            );
        }),
        this.signer.on("display_uri", (e) => {
          var t, i;
          this.rpc.showQrModal &&
            ((t = this.modal) == null || t.closeModal(),
            (i = this.modal) == null || i.openModal({ uri: e })),
            this.events.emit("display_uri", e);
        });
    }
    switchEthereumChain(e) {
      this.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: e.toString(16) }],
      });
    }
    isCompatibleChainId(e) {
      return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
    }
    formatChainId(e) {
      return `${this.namespace}:${e}`;
    }
    parseChainId(e) {
      return Number(e.split(":")[1]);
    }
    setChainIds(e) {
      let t = e
        .filter((i) => this.isCompatibleChainId(i))
        .map((i) => this.parseChainId(i));
      t.length &&
        ((this.chainId = t[0]),
        this.events.emit("chainChanged", ll(this.chainId)),
        this.persist());
    }
    setChainId(e) {
      if (this.isCompatibleChainId(e)) {
        let t = this.parseChainId(e);
        (this.chainId = t), this.switchEthereumChain(t);
      }
    }
    parseAccountId(e) {
      let [t, i, n] = e.split(":");
      return { chainId: `${t}:${i}`, address: n };
    }
    setAccounts(e) {
      (this.accounts = e
        .filter(
          (t) =>
            this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
        )
        .map((t) => this.parseAccountId(t).address)),
        this.events.emit("accountsChanged", this.accounts);
    }
    getRpcConfig(e) {
      var t, i;
      let n = (t = e?.chains) != null ? t : [],
        o = (i = e?.optionalChains) != null ? i : [],
        c = n.concat(o);
      if (!c.length)
        throw new Error(
          "No chains specified in either `chains` or `optionalChains`"
        );
      let l = n.length ? e?.methods || cg : [],
        p = n.length ? e?.events || ug : [],
        g = e?.optionalMethods || [],
        y = e?.optionalEvents || [],
        v = e?.rpcMap || this.buildRpcMap(c, e.projectId),
        A = e?.qrModalOptions || void 0;
      return {
        chains: n?.map((E) => this.formatChainId(E)),
        optionalChains: o.map((E) => this.formatChainId(E)),
        methods: l,
        events: p,
        optionalMethods: g,
        optionalEvents: y,
        rpcMap: v,
        showQrModal: !!(e != null && e.showQrModal),
        qrModalOptions: A,
        projectId: e.projectId,
        metadata: e.metadata,
      };
    }
    buildRpcMap(e, t) {
      let i = {};
      return (
        e.forEach((n) => {
          i[n] = this.getRpcUrl(n, t);
        }),
        i
      );
    }
    initialize(e) {
      return C(this, null, function* () {
        if (
          ((this.rpc = this.getRpcConfig(e)),
          (this.chainId = this.rpc.chains.length
            ? fl(this.rpc.chains)
            : fl(this.rpc.optionalChains)),
          (this.signer = yield N_.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storageOptions: e.storageOptions,
          })),
          this.registerEventListeners(),
          yield this.loadPersistedSession(),
          this.rpc.showQrModal)
        ) {
          let t;
          try {
            let { WalletConnectModal: i } = yield import("./chunk-FZ33IV4O.js");
            t = i;
          } catch {
            throw new Error(
              "To use QR modal, please install @walletconnect/modal package"
            );
          }
          if (t)
            try {
              this.modal = new t(
                oa({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
              );
            } catch (i) {
              throw (
                (this.signer.logger.error(i),
                new Error("Could not generate WalletConnectModal Instance"))
              );
            }
        }
      });
    }
    loadConnectOpts(e) {
      if (!e) return;
      let { chains: t, optionalChains: i, rpcMap: n } = e;
      t &&
        Gr(t) &&
        ((this.rpc.chains = t.map((o) => this.formatChainId(o))),
        t.forEach((o) => {
          this.rpc.rpcMap[o] = n?.[o] || this.getRpcUrl(o);
        })),
        i &&
          Gr(i) &&
          ((this.rpc.optionalChains = []),
          (this.rpc.optionalChains = i?.map((o) => this.formatChainId(o))),
          i.forEach((o) => {
            this.rpc.rpcMap[o] = n?.[o] || this.getRpcUrl(o);
          }));
    }
    getRpcUrl(e, t) {
      var i;
      return (
        ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) ||
        `${oL}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
      );
    }
    loadPersistedSession() {
      return C(this, null, function* () {
        if (this.session)
          try {
            let e = yield this.signer.client.core.storage.getItem(
                `${this.STORAGE_KEY}/chainId`
              ),
              t = this.session.namespaces[`${this.namespace}:${e}`]
                ? this.session.namespaces[`${this.namespace}:${e}`]
                : this.session.namespaces[this.namespace];
            this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
              this.setAccounts(t?.accounts);
          } catch (e) {
            this.signer.logger.error(
              "Failed to load persisted session, clearing state..."
            ),
              this.signer.logger.error(e),
              yield this.disconnect().catch((t) => this.signer.logger.warn(t));
          }
      });
    }
    reset() {
      (this.chainId = 1), (this.accounts = []);
    }
    persist() {
      this.session &&
        this.signer.client.core.storage.setItem(
          `${this.STORAGE_KEY}/chainId`,
          this.chainId
        );
    }
    parseAccounts(e) {
      return typeof e == "string" || e instanceof String
        ? [this.parseAccount(e)]
        : e.map((t) => this.parseAccount(t));
    }
  },
  mj = hg;
export {
  mj as EthereumProvider,
  cL as OPTIONAL_EVENTS,
  aL as OPTIONAL_METHODS,
  ug as REQUIRED_EVENTS,
  cg as REQUIRED_METHODS,
  hg as default,
};

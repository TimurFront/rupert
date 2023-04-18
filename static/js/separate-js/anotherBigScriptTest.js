// parcelRequire = function(e, r, t, n) {
//     var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
//     function f(t, n) {
//         if (!r[t]) {
//             if (!e[t]) {
//                 var i = "function" == typeof parcelRequire && parcelRequire;
//                 if (!n && i)
//                     return i(t, !0);
//                 if (o)
//                     return o(t, !0);
//                 if (u && "string" == typeof t)
//                     return u(t);
//                 var c = new Error("Cannot find module '" + t + "'");
//                 throw c.code = "MODULE_NOT_FOUND",
//                 c
//             }
//             p.resolve = function(r) {
//                 return e[t][1][r] || r
//             }
//             ,
//             p.cache = {};
//             var l = r[t] = new f.Module(t);
//             e[t][0].call(l.exports, p, l, l.exports, this)
//         }
//         return r[t].exports;
//         function p(e) {
//             return f(p.resolve(e))
//         }
//     }
//     f.isParcelRequire = !0,
//     f.Module = function(e) {
//         this.id = e,
//         this.bundle = f,
//         this.exports = {}
//     }
//     ,
//     f.modules = e,
//     f.cache = r,
//     f.parent = o,
//     f.register = function(r, t) {
//         e[r] = [function(e, r) {
//             r.exports = t
//         }
//         , {}]
//     }
//     ;
//     for (var c = 0; c < t.length; c++)
//         try {
//             f(t[c])
//         } catch (e) {
//             i || (i = e)
//         }
//     if (t.length) {
//         var l = f(t[t.length - 1]);
//         "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
//             return l
//         }) : n && (this[n] = l)
//     }
//     if (parcelRequire = f,
//     i)
//         throw i;
//     return f
// }({
//     "NVR6": [function(require, module, exports) {
//         function e(e, o) {
//             (null == o || o > e.length) && (o = e.length);
//             for (var l = 0, r = new Array(o); l < o; l++)
//                 r[l] = e[l];
//             return r
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "XfJI": [function(require, module, exports) {
//         var r = require("./arrayLikeToArray.js");
//         function e(e) {
//             if (Array.isArray(e))
//                 return r(e)
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {
//         "./arrayLikeToArray.js": "NVR6"
//     }],
//     "OMTj": [function(require, module, exports) {
//         function e(e) {
//             if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
//                 return Array.from(e)
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "UyFj": [function(require, module, exports) {
//         var r = require("./arrayLikeToArray.js");
//         function e(e, t) {
//             if (e) {
//                 if ("string" == typeof e)
//                     return r(e, t);
//                 var o = Object.prototype.toString.call(e).slice(8, -1);
//                 return "Object" === o && e.constructor && (o = e.constructor.name),
//                 "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? r(e, t) : void 0
//             }
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {
//         "./arrayLikeToArray.js": "NVR6"
//     }],
//     "wFNi": [function(require, module, exports) {
//         function e() {
//             throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "Fhqp": [function(require, module, exports) {
//         var e = require("./arrayWithoutHoles.js")
//           , r = require("./iterableToArray.js")
//           , o = require("./unsupportedIterableToArray.js")
//           , u = require("./nonIterableSpread.js");
//         function t(t) {
//             return e(t) || r(t) || o(t) || u()
//         }
//         module.exports = t,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {
//         "./arrayWithoutHoles.js": "XfJI",
//         "./iterableToArray.js": "OMTj",
//         "./unsupportedIterableToArray.js": "UyFj",
//         "./nonIterableSpread.js": "wFNi"
//     }],
//     "kPye": [function(require, module, exports) {
//         window.APP = {
//             is_transitioning: !1,
//             loaded_assets: [],
//             scroll_events: [],
//             resize_events: [],
//             rAF: {
//                 items: []
//             }
//         };
//     }
//     , {}],
//     "TgBN": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = exports.ScrollTrigger = void 0;
//         var e, t, r, n, o, i, s, a, l, c, u, f, p, d, h, g, v, m, x, y, b, w, T, k, C, O, M, S = 1, E = [], P = [], _ = Date.now, z = _(), A = 0, L = 1, R = function(e) {
//             return e
//         }, B = function() {
//             return "undefined" != typeof window
//         }, I = function() {
//             return e || B() && (e = window.gsap) && e.registerPlugin && e
//         }, N = function(e) {
//             return !!~s.indexOf(e)
//         }, F = function(e, t) {
//             return ~E.indexOf(e) && E[E.indexOf(e) + 1][t]
//         }, D = function(e, t) {
//             var r = t.s
//               , n = t.sc
//               , o = P.indexOf(e)
//               , i = n === ve.sc ? 1 : 2;
//             return !~o && (o = P.push(e) - 1),
//             P[o + i] || (P[o + i] = F(e, r) || (N(e) ? n : function(t) {
//                 return arguments.length ? e[r] = t : e[r]
//             }
//             ))
//         }, W = function(e) {
//             return F(e, "getBoundingClientRect") || (N(e) ? function() {
//                 return st.width = r.innerWidth,
//                 st.height = r.innerHeight,
//                 st
//             }
//             : function() {
//                 return be(e)
//             }
//             )
//         }, q = function(e, t, n) {
//             var o = n.d
//               , i = n.d2
//               , s = n.a;
//             return (s = F(e, "getBoundingClientRect")) ? function() {
//                 return s()[o]
//             }
//             : function() {
//                 return (t ? r["inner" + i] : e["client" + i]) || 0
//             }
//         }, H = function(e, t) {
//             return !t || ~E.indexOf(e) ? W(e) : function() {
//                 return st
//             }
//         }, X = function(e, t) {
//             var n = t.s
//               , s = t.d2
//               , a = t.d
//               , l = t.a;
//             return (n = "scroll" + s) && (l = F(e, n)) ? l() - W(e)()[a] : N(e) ? Math.max(o[n], i[n]) - (r["inner" + s] || o["client" + s] || i["client" + s]) : e[n] - e["offset" + s]
//         }, Y = function(e, t) {
//             for (var r = 0; r < b.length; r += 3)
//                 (!t || ~t.indexOf(b[r + 1])) && e(b[r], b[r + 1], b[r + 2])
//         }, j = function(e) {
//             return "string" == typeof e
//         }, V = function(e) {
//             return "function" == typeof e
//         }, U = function(e) {
//             return "number" == typeof e
//         }, Z = function(e) {
//             return "object" == typeof e
//         }, $ = function(e) {
//             return V(e) && e()
//         }, G = function(e, t) {
//             return function() {
//                 var r = $(e)
//                   , n = $(t);
//                 return function() {
//                     $(r),
//                     $(n)
//                 }
//             }
//         }, J = Math.abs, K = "scrollLeft", Q = "scrollTop", ee = "left", te = "top", re = "right", ne = "bottom", oe = "width", ie = "height", se = "Right", ae = "Left", le = "Top", ce = "Bottom", ue = "padding", fe = "margin", pe = "Width", de = "Height", he = "px", ge = {
//             s: K,
//             p: ee,
//             p2: ae,
//             os: re,
//             os2: se,
//             d: oe,
//             d2: pe,
//             a: "x",
//             sc: function(e) {
//                 return arguments.length ? r.scrollTo(e, ve.sc()) : r.pageXOffset || n[K] || o[K] || i[K] || 0
//             }
//         }, ve = {
//             s: Q,
//             p: te,
//             p2: le,
//             os: ne,
//             os2: ce,
//             d: ie,
//             d2: de,
//             a: "y",
//             op: ge,
//             sc: function(e) {
//                 return arguments.length ? r.scrollTo(ge.sc(), e) : r.pageYOffset || n[Q] || o[Q] || i[Q] || 0
//             }
//         }, me = function(e) {
//             return r.getComputedStyle(e)
//         }, xe = function(e) {
//             return e.style.position = "absolute" === me(e).position ? "absolute" : "relative"
//         }, ye = function(e, t) {
//             for (var r in t)
//                 r in e || (e[r] = t[r]);
//             return e
//         }, be = function(t, r) {
//             var n = r && "matrix(1, 0, 0, 1, 0, 0)" !== me(t)[v] && e.to(t, {
//                 x: 0,
//                 y: 0,
//                 xPercent: 0,
//                 yPercent: 0,
//                 rotation: 0,
//                 rotationX: 0,
//                 rotationY: 0,
//                 scale: 1,
//                 skewX: 0,
//                 skewY: 0
//             }).progress(1)
//               , o = t.getBoundingClientRect();
//             return n && n.progress(0).kill(),
//             o
//         }, we = function(e, t) {
//             var r = t.d2;
//             return e["offset" + r] || e["client" + r] || 0
//         }, Te = function(e) {
//             var t, r = [], n = e.labels, o = e.duration();
//             for (t in n)
//                 r.push(n[t] / o);
//             return r
//         }, ke = function(t) {
//             return function(r) {
//                 return e.utils.snap(Te(t), r)
//             }
//         }, Ce = function(e) {
//             return function(t, r) {
//                 var n, o = Te(e);
//                 if (o.sort(function(e, t) {
//                     return e - t
//                 }),
//                 r.direction > 0) {
//                     for (n = 0; n < o.length; n++)
//                         if (o[n] >= t)
//                             return o[n];
//                     return o.pop()
//                 }
//                 for (n = o.length; n--; )
//                     if (o[n] <= t)
//                         return o[n];
//                 return o[0]
//             }
//         }, Oe = function(e, t, r, n) {
//             return r.split(",").forEach(function(r) {
//                 return e(t, r, n)
//             })
//         }, Me = function(e, t, r) {
//             return e.addEventListener(t, r, {
//                 passive: !0
//             })
//         }, Se = function(e, t, r) {
//             return e.removeEventListener(t, r)
//         }, Ee = {
//             startColor: "green",
//             endColor: "red",
//             indent: 0,
//             fontSize: "16px",
//             fontWeight: "normal"
//         }, Pe = {
//             toggleActions: "play",
//             anticipatePin: 0
//         }, _e = {
//             top: 0,
//             left: 0,
//             center: .5,
//             bottom: 1,
//             right: 1
//         }, ze = function(e, t) {
//             if (j(e)) {
//                 var r = e.indexOf("=")
//                   , n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
//                 ~r && (e.indexOf("%") > r && (n *= t / 100),
//                 e = e.substr(0, r - 1)),
//                 e = n + (e in _e ? _e[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
//             }
//             return e
//         }, Ae = function(e, t, r, o, s, a, l) {
//             var c = s.startColor
//               , u = s.endColor
//               , f = s.fontSize
//               , p = s.indent
//               , d = s.fontWeight
//               , h = n.createElement("div")
//               , g = N(r) || "fixed" === F(r, "pinType")
//               , v = -1 !== e.indexOf("scroller")
//               , m = g ? i : r
//               , x = -1 !== e.indexOf("start")
//               , y = x ? c : u
//               , b = "border-color:" + y + ";font-size:" + f + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
//             return b += "position:" + (v && g ? "fixed;" : "absolute;"),
//             (v || !g) && (b += (o === ve ? re : ne) + ":" + (a + parseFloat(p)) + "px;"),
//             l && (b += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"),
//             h._isStart = x,
//             h.setAttribute("class", "gsap-marker-" + e),
//             h.style.cssText = b,
//             h.innerText = t || 0 === t ? e + "-" + t : e,
//             m.children[0] ? m.insertBefore(h, m.children[0]) : m.appendChild(h),
//             h._offset = h["offset" + o.op.d2],
//             Le(h, 0, o, x),
//             h
//         }, Le = function(t, r, n, o) {
//             var i = {
//                 display: "block"
//             }
//               , s = n[o ? "os2" : "p2"]
//               , a = n[o ? "p2" : "os2"];
//             t._isFlipped = o,
//             i[n.a + "Percent"] = o ? -100 : 0,
//             i[n.a] = o ? "1px" : 0,
//             i["border" + s + pe] = 1,
//             i["border" + a + pe] = 0,
//             i[n.p] = r + "px",
//             e.set(t, i)
//         }, Re = [], Be = {}, Ie = function() {
//             return c || (c = l(Je))
//         }, Ne = function() {
//             c || (c = l(Je),
//             A || Ye("scrollStart"),
//             A = _())
//         }, Fe = function() {
//             return !h && !k && !n.fullscreenElement && a.restart(!0)
//         }, De = {}, We = [], qe = [], He = function(n) {
//             var o, i = e.ticker.frame, s = [], a = 0;
//             if (M !== i || S) {
//                 for (Ue(); a < qe.length; a += 4)
//                     (o = r.matchMedia(qe[a]).matches) !== qe[a + 3] && (qe[a + 3] = o,
//                     o ? s.push(a) : Ue(1, qe[a]) || V(qe[a + 2]) && qe[a + 2]());
//                 for (Ve(),
//                 a = 0; a < s.length; a++)
//                     o = s[a],
//                     O = qe[o],
//                     qe[o + 2] = qe[o + 1](n);
//                 O = 0,
//                 t && Ze(0, 1),
//                 M = i,
//                 Ye("matchMedia")
//             }
//         }, Xe = function e() {
//             return Se(ft, "scrollEnd", e) || Ze(!0)
//         }, Ye = function(e) {
//             return De[e] && De[e].map(function(e) {
//                 return e()
//             }) || We
//         }, je = [], Ve = function(e) {
//             for (var t = 0; t < je.length; t += 4)
//                 e && je[t + 3] !== e || (je[t].style.cssText = je[t + 1],
//                 je[t + 2].uncache = 1)
//         }, Ue = function(e, t) {
//             var r;
//             for (m = 0; m < Re.length; m++)
//                 r = Re[m],
//                 t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()),
//                 r.revert()));
//             Ve(t),
//             t || Ye("revert")
//         }, Ze = function(e, t) {
//             if (!A || e) {
//                 var r = Ye("refreshInit");
//                 for (w && ft.sort(),
//                 t || Ue(),
//                 m = 0; m < Re.length; m++)
//                     Re[m].refresh();
//                 for (r.forEach(function(e) {
//                     return e && e.render && e.render(-1)
//                 }),
//                 m = Re.length; m--; )
//                     Re[m].scroll.rec = 0;
//                 a.pause(),
//                 Ye("refresh")
//             } else
//                 Me(ft, "scrollEnd", Xe)
//         }, $e = 0, Ge = 1, Je = function() {
//             var e = Re.length
//               , t = _()
//               , r = t - z >= 50
//               , n = e && Re[0].scroll();
//             if (Ge = $e > n ? -1 : 1,
//             $e = n,
//             r && (A && !g && t - A > 200 && (A = 0,
//             Ye("scrollEnd")),
//             p = z,
//             z = t),
//             Ge < 0) {
//                 for (m = e; m--; )
//                     Re[m] && Re[m].update(0, r);
//                 Ge = 1
//             } else
//                 for (m = 0; m < e; m++)
//                     Re[m] && Re[m].update(0, r);
//             c = 0
//         }, Ke = [ee, te, ne, re, fe + ce, fe + se, fe + le, fe + ae, "display", "flexShrink", "float", "zIndex"], Qe = Ke.concat([oe, ie, "boxSizing", "max" + pe, "max" + de, "position", fe, ue, ue + le, ue + se, ue + ce, ue + ae]), et = function(e, t, r) {
//             if (nt(r),
//             e.parentNode === t) {
//                 var n = t.parentNode;
//                 n && (n.insertBefore(e, t),
//                 n.removeChild(t))
//             }
//         }, tt = function(e, t, r, n) {
//             if (e.parentNode !== t) {
//                 for (var o, i = Ke.length, s = t.style, a = e.style; i--; )
//                     s[o = Ke[i]] = r[o];
//                 s.position = "absolute" === r.position ? "absolute" : "relative",
//                 "inline" === r.display && (s.display = "inline-block"),
//                 a[ne] = a[re] = "auto",
//                 s.overflow = "visible",
//                 s.boxSizing = "border-box",
//                 s[oe] = we(e, ge) + he,
//                 s[ie] = we(e, ve) + he,
//                 s[ue] = a[fe] = a[te] = a[ee] = "0",
//                 nt(n),
//                 a[oe] = a["max" + pe] = r[oe],
//                 a[ie] = a["max" + de] = r[ie],
//                 a[ue] = r[ue],
//                 e.parentNode.insertBefore(t, e),
//                 t.appendChild(e)
//             }
//         }, rt = /([A-Z])/g, nt = function(t) {
//             if (t) {
//                 var r, n, o = t.t.style, i = t.length, s = 0;
//                 for ((t.t._gsap || e.core.getCache(t.t)).uncache = 1; s < i; s += 2)
//                     n = t[s + 1],
//                     r = t[s],
//                     n ? o[r] = n : o[r] && o.removeProperty(r.replace(rt, "-$1").toLowerCase())
//             }
//         }, ot = function(e) {
//             for (var t = Qe.length, r = e.style, n = [], o = 0; o < t; o++)
//                 n.push(Qe[o], r[Qe[o]]);
//             return n.t = e,
//             n
//         }, it = function(e, t, r) {
//             for (var n, o = [], i = e.length, s = r ? 8 : 0; s < i; s += 2)
//                 n = e[s],
//                 o.push(n, n in t ? t[n] : e[s + 1]);
//             return o.t = e.t,
//             o
//         }, st = {
//             left: 0,
//             top: 0
//         }, at = function(e, t, r, n, s, a, l, c, f, p, d, h) {
//             if (V(e) && (e = e(c)),
//             j(e) && "max" === e.substr(0, 3) && (e = h + ("=" === e.charAt(4) ? ze("0" + e.substr(3), r) : 0)),
//             U(e))
//                 l && Le(l, r, n, !0);
//             else {
//                 V(t) && (t = t(c));
//                 var g, v, m, x = u(t)[0] || i, y = be(x) || {}, b = e.split(" ");
//                 y && (y.left || y.top) || "none" !== me(x).display || (m = x.style.display,
//                 x.style.display = "block",
//                 y = be(x),
//                 m ? x.style.display = m : x.style.removeProperty("display")),
//                 g = ze(b[0], y[n.d]),
//                 v = ze(b[1] || "0", r),
//                 e = y[n.p] - f[n.p] - p + g + s - v,
//                 l && Le(l, v, n, r - v < 20 || l._isStart && v > 20),
//                 r -= r - v
//             }
//             if (a) {
//                 var w = e + r
//                   , T = a._isStart;
//                 h = "scroll" + n.d2,
//                 Le(a, w, n, T && w > 20 || !T && (d ? Math.max(i[h], o[h]) : a.parentNode[h]) <= w + 1),
//                 d && (f = be(l),
//                 d && (a.style[n.op.p] = f[n.op.p] - n.op.m - a._offset + he))
//             }
//             return Math.round(e)
//         }, lt = /(?:webkit|moz|length|cssText|inset)/i, ct = function(t, r, n, o) {
//             if (t.parentNode !== r) {
//                 var s, a, l = t.style;
//                 if (r === i) {
//                     for (s in t._stOrig = l.cssText,
//                     a = me(t))
//                         +s || lt.test(s) || !a[s] || "string" != typeof l[s] || "0" === s || (l[s] = a[s]);
//                     l.top = n,
//                     l.left = o
//                 } else
//                     l.cssText = t._stOrig;
//                 e.core.getCache(t).uncache = 1,
//                 r.appendChild(t)
//             }
//         }, ut = function(t, r) {
//             var n, o, i = D(t, r), s = "_scroll" + r.p2, a = function r(a, l, c, u, f) {
//                 var p = r.tween
//                   , d = l.onComplete
//                   , h = {};
//                 return p && p.kill(),
//                 n = Math.round(c),
//                 l[s] = a,
//                 l.modifiers = h,
//                 h[s] = function(e) {
//                     return (e = Math.round(i())) !== n && e !== o && Math.abs(e - n) > 2 ? (p.kill(),
//                     r.tween = 0) : e = c + u * p.ratio + f * p.ratio * p.ratio,
//                     o = n,
//                     n = Math.round(e)
//                 }
//                 ,
//                 l.onComplete = function() {
//                     r.tween = 0,
//                     d && d.call(p)
//                 }
//                 ,
//                 p = r.tween = e.to(t, l)
//             };
//             return t[s] = i,
//             t.addEventListener("mousewheel", function() {
//                 return a.tween && a.tween.kill() && (a.tween = 0)
//             }),
//             a
//         };
//         ge.op = ve;
//         var ft = function() {
//             function c(r, n) {
//                 t || c.register(e) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
//                 this.init(r, n)
//             }
//             return c.prototype.init = function(t, s) {
//                 if (this.progress = this.start = 0,
//                 this.vars && this.kill(1),
//                 L) {
//                     var a, l, d, v, x, y, b, k, M, E, P, z, B, I, W, Y, $, G, K, Q, ee, te, re, ne, Te, Oe, _e, Le, Ie, De, We, qe, He, Ye, je, Ve, Ue, Ze = (t = ye(j(t) || U(t) || t.nodeType ? {
//                         trigger: t
//                     } : t, Pe)).horizontal ? ge : ve, $e = t, Je = $e.onUpdate, Ke = $e.toggleClass, Qe = $e.id, rt = $e.onToggle, st = $e.onRefresh, lt = $e.scrub, ft = $e.trigger, pt = $e.pin, dt = $e.pinSpacing, ht = $e.invalidateOnRefresh, gt = $e.anticipatePin, vt = $e.onScrubComplete, mt = $e.onSnapComplete, xt = $e.once, yt = $e.snap, bt = $e.pinReparent, wt = !lt && 0 !== lt, Tt = u(t.scroller || r)[0], kt = e.core.getCache(Tt), Ct = N(Tt), Ot = "pinType"in t ? "fixed" === t.pinType : Ct || "fixed" === F(Tt, "pinType"), Mt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], St = wt && t.toggleActions.split(" "), Et = "markers"in t ? t.markers : Pe.markers, Pt = Ct ? 0 : parseFloat(me(Tt)["border" + Ze.p2 + pe]) || 0, _t = this, zt = t.onRefreshInit && function() {
//                         return t.onRefreshInit(_t)
//                     }
//                     , At = q(Tt, Ct, Ze), Lt = H(Tt, Ct);
//                     _t.media = O,
//                     gt *= 45,
//                     Re.push(_t),
//                     _t.scroller = Tt,
//                     _t.scroll = D(Tt, Ze),
//                     x = _t.scroll(),
//                     _t.vars = t,
//                     s = s || t.animation,
//                     "refreshPriority"in t && (w = 1),
//                     kt.tweenScroll = kt.tweenScroll || {
//                         top: ut(Tt, ve),
//                         left: ut(Tt, ge)
//                     },
//                     _t.tweenTo = a = kt.tweenScroll[Ze.p],
//                     s && (s.vars.lazy = !1,
//                     s._initted || !1 !== s.vars.immediateRender && !1 !== t.immediateRender && s.render(0, !0, !0),
//                     _t.animation = s.pause(),
//                     s.scrollTrigger = _t,
//                     (qe = U(lt) && lt) && (We = e.to(s, {
//                         ease: "power3",
//                         duration: qe,
//                         onComplete: function() {
//                             return vt && vt(_t)
//                         }
//                     })),
//                     Ie = 0,
//                     Qe || (Qe = s.vars.id)),
//                     yt && (Z(yt) || (yt = {
//                         snapTo: yt
//                     }),
//                     "scrollBehavior"in i.style && e.set(Ct ? [i, o] : Tt, {
//                         scrollBehavior: "auto"
//                     }),
//                     d = V(yt.snapTo) ? yt.snapTo : "labels" === yt.snapTo ? ke(s) : "labelsDirectional" === yt.snapTo ? Ce(s) : e.utils.snap(yt.snapTo),
//                     He = yt.duration || {
//                         min: .1,
//                         max: 2
//                     },
//                     He = Z(He) ? f(He.min, He.max) : f(He, He),
//                     Ye = e.delayedCall(yt.delay || qe / 2 || .1, function() {
//                         if (Math.abs(_t.getVelocity()) < 10 && !g) {
//                             var e = s && !wt ? s.totalProgress() : _t.progress
//                               , t = (e - De) / (_() - p) * 1e3 || 0
//                               , r = J(t / 2) * t / .185
//                               , n = e + r
//                               , o = f(0, 1, d(n, _t))
//                               , i = _t.scroll()
//                               , l = Math.round(b + o * I)
//                               , c = a.tween;
//                             if (i <= k && i >= b && l !== i) {
//                                 if (c && !c._initted && c.data <= Math.abs(l - i))
//                                     return;
//                                 a(l, {
//                                     duration: He(J(.185 * Math.max(J(n - e), J(o - e)) / t / .05 || 0)),
//                                     ease: yt.ease || "power3",
//                                     data: Math.abs(l - i),
//                                     onComplete: function() {
//                                         Ie = De = s && !wt ? s.totalProgress() : _t.progress,
//                                         mt && mt(_t)
//                                     }
//                                 }, i, r * I, l - i - r * I)
//                             }
//                         } else
//                             _t.isActive && Ye.restart(!0)
//                     }).pause()),
//                     Qe && (Be[Qe] = _t),
//                     ft = _t.trigger = u(ft || pt)[0],
//                     pt = !0 === pt ? ft : u(pt)[0],
//                     j(Ke) && (Ke = {
//                         targets: ft,
//                         className: Ke
//                     }),
//                     pt && (!1 === dt || dt === fe || (dt = !(!dt && "flex" === me(pt.parentNode).display) && ue),
//                     _t.pin = pt,
//                     !1 !== t.force3D && e.set(pt, {
//                         force3D: !0
//                     }),
//                     (l = e.core.getCache(pt)).spacer ? W = l.pinState : (l.spacer = G = n.createElement("div"),
//                     G.setAttribute("class", "pin-spacer" + (Qe ? " pin-spacer-" + Qe : "")),
//                     l.pinState = W = ot(pt)),
//                     _t.spacer = G = l.spacer,
//                     Le = me(pt),
//                     ne = Le[dt + Ze.os2],
//                     Q = e.getProperty(pt),
//                     ee = e.quickSetter(pt, Ze.a, he),
//                     tt(pt, G, Le),
//                     $ = ot(pt)),
//                     Et && (B = Z(Et) ? ye(Et, Ee) : Ee,
//                     P = Ae("scroller-start", Qe, Tt, Ze, B, 0),
//                     z = Ae("scroller-end", Qe, Tt, Ze, B, 0, P),
//                     K = P["offset" + Ze.op.d2],
//                     M = Ae("start", Qe, Tt, Ze, B, K),
//                     E = Ae("end", Qe, Tt, Ze, B, K),
//                     Ot || (xe(Ct ? i : Tt),
//                     e.set([P, z], {
//                         force3D: !0
//                     }),
//                     Oe = e.quickSetter(P, Ze.a, he),
//                     _e = e.quickSetter(z, Ze.a, he))),
//                     _t.revert = function(e) {
//                         var t = !1 !== e || !_t.enabled
//                           , r = h;
//                         t !== v && (t && (Ve = Math.max(_t.scroll(), _t.scroll.rec || 0),
//                         je = _t.progress,
//                         Ue = s && s.progress()),
//                         M && [M, E, P, z].forEach(function(e) {
//                             return e.style.display = t ? "none" : "block"
//                         }),
//                         t && (h = 1),
//                         _t.update(t),
//                         h = r,
//                         pt && (t ? et(pt, G, W) : (!bt || !_t.isActive) && tt(pt, G, me(pt), Te)),
//                         v = t)
//                     }
//                     ,
//                     _t.refresh = function(r) {
//                         if (!h && _t.enabled)
//                             if (pt && r && A)
//                                 Me(c, "scrollEnd", Xe);
//                             else {
//                                 h = 1,
//                                 We && We.pause(),
//                                 ht && s && s.progress(0).invalidate(),
//                                 v || _t.revert();
//                                 for (var n, o, a, l, u, f, p, d, g, m = At(), w = Lt(), C = X(Tt, Ze), O = 0, S = 0, _ = t.end, L = t.endTrigger || ft, R = t.start || (0 !== t.start && ft ? pt ? "0 0" : "0 100%" : 0), B = ft && Math.max(0, Re.indexOf(_t)) || 0, N = B; N--; )
//                                     (p = Re[N].pin) && (p === ft || p === pt) && Re[N].revert();
//                                 for (b = at(R, ft, m, Ze, _t.scroll(), M, P, _t, w, Pt, Ot, C) || (pt ? -.001 : 0),
//                                 V(_) && (_ = _(_t)),
//                                 j(_) && !_.indexOf("+=") && (~_.indexOf(" ") ? _ = (j(R) ? R.split(" ")[0] : "") + _ : (O = ze(_.substr(2), m),
//                                 _ = j(R) ? R : b + O,
//                                 L = ft)),
//                                 k = Math.max(b, at(_ || (L ? "100% 0" : C), L, m, Ze, _t.scroll() + O, E, z, _t, w, Pt, Ot, C)) || -.001,
//                                 I = k - b || (b -= .01) && .001,
//                                 O = 0,
//                                 N = B; N--; )
//                                     (p = (f = Re[N]).pin) && f.start - f._pinPush < b && (n = f.end - f.start,
//                                     p === ft && (O += n),
//                                     p === pt && (S += n));
//                                 if (b += O,
//                                 k += O,
//                                 _t._pinPush = S,
//                                 M && O && ((n = {})[Ze.a] = "+=" + O,
//                                 e.set([M, E], n)),
//                                 pt)
//                                     n = me(pt),
//                                     l = Ze === ve,
//                                     a = _t.scroll(),
//                                     te = parseFloat(Q(Ze.a)) + S,
//                                     !C && k > 1 && ((Ct ? i : Tt).style["overflow-" + Ze.a] = "scroll"),
//                                     tt(pt, G, n),
//                                     $ = ot(pt),
//                                     o = be(pt, !0),
//                                     d = Ot && D(Tt, l ? ge : ve)(),
//                                     dt && ((Te = [dt + Ze.os2, I + S + he]).t = G,
//                                     (N = dt === ue ? we(pt, Ze) + I + S : 0) && Te.push(Ze.d, N + he),
//                                     nt(Te),
//                                     Ot && _t.scroll(Ve)),
//                                     Ot && ((u = {
//                                         top: o.top + (l ? a - b : d) + he,
//                                         left: o.left + (l ? d : a - b) + he,
//                                         boxSizing: "border-box",
//                                         position: "fixed"
//                                     })[oe] = u["max" + pe] = Math.ceil(o.width) + he,
//                                     u[ie] = u["max" + de] = Math.ceil(o.height) + he,
//                                     u[fe] = u[fe + le] = u[fe + se] = u[fe + ce] = u[fe + ae] = "0",
//                                     u[ue] = n[ue],
//                                     u[ue + le] = n[ue + le],
//                                     u[ue + se] = n[ue + se],
//                                     u[ue + ce] = n[ue + ce],
//                                     u[ue + ae] = n[ue + ae],
//                                     Y = it(W, u, bt)),
//                                     s ? (g = s._initted,
//                                     T(1),
//                                     s.progress(1, !0),
//                                     re = Q(Ze.a) - te + I + S,
//                                     I !== re && Y.splice(Y.length - 2, 2),
//                                     s.progress(0, !0),
//                                     g || s.invalidate(),
//                                     T(0)) : re = I;
//                                 else if (ft && _t.scroll())
//                                     for (o = ft.parentNode; o && o !== i; )
//                                         o._pinOffset && (b -= o._pinOffset,
//                                         k -= o._pinOffset),
//                                         o = o.parentNode;
//                                 for (N = 0; N < B; N++)
//                                     (f = Re[N].pin) && (f === ft || f === pt) && Re[N].revert(!1);
//                                 _t.start = b,
//                                 _t.end = k,
//                                 (x = y = _t.scroll()) < Ve && _t.scroll(Ve),
//                                 _t.revert(!1),
//                                 h = 0,
//                                 s && wt && s._initted && s.progress(Ue, !0).render(s.time(), !0, !0),
//                                 je !== _t.progress && (We && s.totalProgress(je, !0),
//                                 _t.progress = je,
//                                 _t.update()),
//                                 pt && dt && (G._pinOffset = Math.round(_t.progress * re)),
//                                 st && st(_t)
//                             }
//                     }
//                     ,
//                     _t.getVelocity = function() {
//                         return (_t.scroll() - y) / (_() - p) * 1e3 || 0
//                     }
//                     ,
//                     _t.update = function(e, t) {
//                         var r, n, o, l, c, f = _t.scroll(), d = e ? 0 : (f - b) / I, g = d < 0 ? 0 : d > 1 ? 1 : d || 0, v = _t.progress;
//                         if (t && (y = x,
//                         x = f,
//                         yt && (De = Ie,
//                         Ie = s && !wt ? s.totalProgress() : g)),
//                         gt && !g && pt && !h && !S && A && b < f + (f - y) / (_() - p) * gt && (g = 1e-4),
//                         g !== v && _t.enabled) {
//                             if (l = (c = (r = _t.isActive = !!g && g < 1) !== (!!v && v < 1)) || !!g != !!v,
//                             _t.direction = g > v ? 1 : -1,
//                             _t.progress = g,
//                             wt || (!We || h || S ? s && s.totalProgress(g, !!h) : (We.vars.totalProgress = g,
//                             We.invalidate().restart())),
//                             pt)
//                                 if (e && dt && (G.style[dt + Ze.os2] = ne),
//                                 Ot) {
//                                     if (l) {
//                                         if (o = !e && g > v && k + 1 > f && f + 1 >= X(Tt, Ze),
//                                         bt)
//                                             if (e || !r && !o)
//                                                 ct(pt, G);
//                                             else {
//                                                 var m = be(pt, !0)
//                                                   , w = f - b;
//                                                 ct(pt, i, m.top + (Ze === ve ? w : 0) + he, m.left + (Ze === ve ? 0 : w) + he)
//                                             }
//                                         nt(r || o ? Y : $),
//                                         re !== I && g < 1 && r || ee(te + (1 !== g || o ? 0 : re))
//                                     }
//                                 } else
//                                     ee(te + re * g);
//                             yt && !a.tween && !h && !S && Ye.restart(!0),
//                             Ke && (c || xt && g && (g < 1 || !C)) && u(Ke.targets).forEach(function(e) {
//                                 return e.classList[r || xt ? "add" : "remove"](Ke.className)
//                             }),
//                             Je && !wt && !e && Je(_t),
//                             l && !h ? (n = g && !v ? 0 : 1 === g ? 1 : 1 === v ? 2 : 3,
//                             wt && (o = !c && "none" !== St[n + 1] && St[n + 1] || St[n],
//                             s && ("complete" === o || "reset" === o || o in s) && ("complete" === o ? s.pause().totalProgress(1) : "reset" === o ? s.restart(!0).pause() : s[o]()),
//                             Je && Je(_t)),
//                             !c && C || (rt && c && rt(_t),
//                             Mt[n] && Mt[n](_t),
//                             xt && (1 === g ? _t.kill(!1, 1) : Mt[n] = 0),
//                             c || Mt[n = 1 === g ? 1 : 3] && Mt[n](_t))) : wt && Je && !h && Je(_t)
//                         }
//                         _e && (Oe(f + (P._isFlipped ? 1 : 0)),
//                         _e(f))
//                     }
//                     ,
//                     _t.enable = function() {
//                         _t.enabled || (_t.enabled = !0,
//                         Me(Tt, "resize", Fe),
//                         Me(Tt, "scroll", Ne),
//                         zt && Me(c, "refreshInit", zt),
//                         s && s.add ? e.delayedCall(.01, function() {
//                             return b || k || _t.refresh()
//                         }) && (I = .01) && (b = k = 0) : _t.refresh())
//                     }
//                     ,
//                     _t.disable = function(e, t) {
//                         if (_t.enabled && (!1 !== e && _t.revert(),
//                         _t.enabled = _t.isActive = !1,
//                         t || We && We.pause(),
//                         Ve = 0,
//                         l && (l.uncache = 1),
//                         zt && Se(c, "refreshInit", zt),
//                         Ye && (Ye.pause(),
//                         a.tween && a.tween.kill() && (a.tween = 0)),
//                         !Ct)) {
//                             for (var r = Re.length; r--; )
//                                 if (Re[r].scroller === Tt && Re[r] !== _t)
//                                     return;
//                             Se(Tt, "resize", Fe),
//                             Se(Tt, "scroll", Ne)
//                         }
//                     }
//                     ,
//                     _t.kill = function(e, t) {
//                         _t.disable(e, t),
//                         Qe && delete Be[Qe];
//                         var r = Re.indexOf(_t);
//                         Re.splice(r, 1),
//                         r === m && Ge > 0 && m--,
//                         s && (s.scrollTrigger = null,
//                         e && s.render(-1),
//                         t || s.kill()),
//                         M && [M, E, P, z].forEach(function(e) {
//                             return e.parentNode.removeChild(e)
//                         }),
//                         pt && (l && (l.uncache = 1),
//                         r = 0,
//                         Re.forEach(function(e) {
//                             return e.pin === pt && r++
//                         }),
//                         r || (l.spacer = 0))
//                     }
//                     ,
//                     _t.enable()
//                 } else
//                     this.update = this.refresh = this.kill = R
//             }
//             ,
//             c.register = function(p) {
//                 if (!t && (e = p || I(),
//                 B() && window.document && (r = window,
//                 n = document,
//                 o = n.documentElement,
//                 i = n.body),
//                 e && (u = e.utils.toArray,
//                 f = e.utils.clamp,
//                 T = e.core.suppressOverwrites || R,
//                 e.core.globals("ScrollTrigger", c),
//                 i))) {
//                     l = r.requestAnimationFrame || function(e) {
//                         return setTimeout(e, 16)
//                     }
//                     ,
//                     Me(r, "mousewheel", Ne),
//                     s = [r, n, o, i],
//                     Me(n, "scroll", Ne);
//                     var h, m = i.style, w = m.borderTop;
//                     m.borderTop = "1px solid #000",
//                     h = be(i),
//                     ve.m = Math.round(h.top + ve.sc()) || 0,
//                     ge.m = Math.round(h.left + ge.sc()) || 0,
//                     w ? m.borderTop = w : m.removeProperty("border-top"),
//                     d = setInterval(Ie, 200),
//                     e.delayedCall(.5, function() {
//                         return S = 0
//                     }),
//                     Me(n, "touchcancel", R),
//                     Me(i, "touchstart", R),
//                     Oe(Me, n, "pointerdown,touchstart,mousedown", function() {
//                         return g = 1
//                     }),
//                     Oe(Me, n, "pointerup,touchend,mouseup", function() {
//                         return g = 0
//                     }),
//                     v = e.utils.checkPrefix("transform"),
//                     Qe.push(v),
//                     t = _(),
//                     a = e.delayedCall(.2, Ze).pause(),
//                     b = [n, "visibilitychange", function() {
//                         var e = r.innerWidth
//                           , t = r.innerHeight;
//                         n.hidden ? (x = e,
//                         y = t) : x === e && y === t || Fe()
//                     }
//                     , n, "DOMContentLoaded", Ze, r, "load", function() {
//                         return A || Ze()
//                     }
//                     , r, "resize", Fe],
//                     Y(Me)
//                 }
//                 return t
//             }
//             ,
//             c.defaults = function(e) {
//                 for (var t in e)
//                     Pe[t] = e[t]
//             }
//             ,
//             c.kill = function() {
//                 L = 0,
//                 Re.slice(0).forEach(function(e) {
//                     return e.kill(1)
//                 })
//             }
//             ,
//             c.config = function(e) {
//                 "limitCallbacks"in e && (C = !!e.limitCallbacks);
//                 var t = e.syncInterval;
//                 t && clearInterval(d) || (d = t) && setInterval(Ie, t),
//                 "autoRefreshEvents"in e && (Y(Se) || Y(Me, e.autoRefreshEvents || "none"),
//                 k = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
//             }
//             ,
//             c.scrollerProxy = function(e, t) {
//                 var n = u(e)[0]
//                   , s = P.indexOf(n)
//                   , a = N(n);
//                 ~s && P.splice(s, a ? 6 : 2),
//                 a ? E.unshift(r, t, i, t, o, t) : E.unshift(n, t)
//             }
//             ,
//             c.matchMedia = function(e) {
//                 var t, n, o, i, s;
//                 for (n in e)
//                     o = qe.indexOf(n),
//                     i = e[n],
//                     O = n,
//                     "all" === n ? i() : (t = r.matchMedia(n)) && (t.matches && (s = i()),
//                     ~o ? (qe[o + 1] = G(qe[o + 1], i),
//                     qe[o + 2] = G(qe[o + 2], s)) : (o = qe.length,
//                     qe.push(n, i, s),
//                     t.addListener ? t.addListener(He) : t.addEventListener("change", He)),
//                     qe[o + 3] = t.matches),
//                     O = 0;
//                 return qe
//             }
//             ,
//             c.clearMatchMedia = function(e) {
//                 e || (qe.length = 0),
//                 (e = qe.indexOf(e)) >= 0 && qe.splice(e, 4)
//             }
//             ,
//             c
//         }();
//         exports.default = exports.ScrollTrigger = ft,
//         ft.version = "3.6.0",
//         ft.saveStyles = function(t) {
//             return t ? u(t).forEach(function(t) {
//                 if (t && t.style) {
//                     var r = je.indexOf(t);
//                     r >= 0 && je.splice(r, 4),
//                     je.push(t, t.style.cssText, e.core.getCache(t), O)
//                 }
//             }) : je
//         }
//         ,
//         ft.revert = function(e, t) {
//             return Ue(!e, t)
//         }
//         ,
//         ft.create = function(e, t) {
//             return new ft(e,t)
//         }
//         ,
//         ft.refresh = function(e) {
//             return e ? Fe() : Ze(!0)
//         }
//         ,
//         ft.update = Je,
//         ft.maxScroll = function(e, t) {
//             return X(e, t ? ge : ve)
//         }
//         ,
//         ft.getScrollFunc = function(e, t) {
//             return D(u(e)[0], t ? ge : ve)
//         }
//         ,
//         ft.getById = function(e) {
//             return Be[e]
//         }
//         ,
//         ft.getAll = function() {
//             return Re.slice(0)
//         }
//         ,
//         ft.isScrolling = function() {
//             return !!A
//         }
//         ,
//         ft.addEventListener = function(e, t) {
//             var r = De[e] || (De[e] = []);
//             ~r.indexOf(t) || r.push(t)
//         }
//         ,
//         ft.removeEventListener = function(e, t) {
//             var r = De[e]
//               , n = r && r.indexOf(t);
//             n >= 0 && r.splice(n, 1)
//         }
//         ,
//         ft.batch = function(t, r) {
//             var n, o = [], i = {}, s = r.interval || .016, a = r.batchMax || 1e9, l = function(t, r) {
//                 var n = []
//                   , o = []
//                   , i = e.delayedCall(s, function() {
//                     r(n, o),
//                     n = [],
//                     o = []
//                 }).pause();
//                 return function(e) {
//                     n.length || i.restart(!0),
//                     n.push(e.trigger),
//                     o.push(e),
//                     a <= n.length && i.progress(1)
//                 }
//             };
//             for (n in r)
//                 i[n] = "on" === n.substr(0, 2) && V(r[n]) && "onRefreshInit" !== n ? l(0, r[n]) : r[n];
//             return V(a) && (a = a(),
//             Me(ft, "refresh", function() {
//                 return a = r.batchMax()
//             })),
//             u(t).forEach(function(e) {
//                 var t = {};
//                 for (n in i)
//                     t[n] = i[n];
//                 t.trigger = e,
//                 o.push(ft.create(t))
//             }),
//             o
//         }
//         ,
//         ft.sort = function(e) {
//             return Re.sort(e || function(e, t) {
//                 return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
//             }
//             )
//         }
//         ,
//         I() && e.registerPlugin(ft);
//     }
//     , {}],
//     "pBGv": [function(require, module, exports) {

//         var t, e, n = module.exports = {};
//         function r() {
//             throw new Error("setTimeout has not been defined")
//         }
//         function o() {
//             throw new Error("clearTimeout has not been defined")
//         }
//         function i(e) {
//             if (t === setTimeout)
//                 return setTimeout(e, 0);
//             if ((t === r || !t) && setTimeout)
//                 return t = setTimeout,
//                 setTimeout(e, 0);
//             try {
//                 return t(e, 0)
//             } catch (n) {
//                 try {
//                     return t.call(null, e, 0)
//                 } catch (n) {
//                     return t.call(this, e, 0)
//                 }
//             }
//         }
//         function u(t) {
//             if (e === clearTimeout)
//                 return clearTimeout(t);
//             if ((e === o || !e) && clearTimeout)
//                 return e = clearTimeout,
//                 clearTimeout(t);
//             try {
//                 return e(t)
//             } catch (n) {
//                 try {
//                     return e.call(null, t)
//                 } catch (n) {
//                     return e.call(this, t)
//                 }
//             }
//         }
//         !function() {
//             try {
//                 t = "function" == typeof setTimeout ? setTimeout : r
//             } catch (n) {
//                 t = r
//             }
//             try {
//                 e = "function" == typeof clearTimeout ? clearTimeout : o
//             } catch (n) {
//                 e = o
//             }
//         }();
//         var c, s = [], l = !1, a = -1;
//         function f() {
//             l && c && (l = !1,
//             c.length ? s = c.concat(s) : a = -1,
//             s.length && h())
//         }
//         function h() {
//             if (!l) {
//                 var t = i(f);
//                 l = !0;
//                 for (var e = s.length; e; ) {
//                     for (c = s,
//                     s = []; ++a < e; )
//                         c && c[a].run();
//                     a = -1,
//                     e = s.length
//                 }
//                 c = null,
//                 l = !1,
//                 u(t)
//             }
//         }
//         function m(t, e) {
//             this.fun = t,
//             this.array = e
//         }
//         function p() {}
//         n.nextTick = function(t) {
//             var e = new Array(arguments.length - 1);
//             if (arguments.length > 1)
//                 for (var n = 1; n < arguments.length; n++)
//                     e[n - 1] = arguments[n];
//             s.push(new m(t,e)),
//             1 !== s.length || l || i(h)
//         }
//         ,
//         m.prototype.run = function() {
//             this.fun.apply(null, this.array)
//         }
//         ,
//         n.title = "browser",
//         n.env = {},
//         n.argv = [],
//         n.version = "",
//         n.versions = {},
//         n.on = p,
//         n.addListener = p,
//         n.once = p,
//         n.off = p,
//         n.removeListener = p,
//         n.removeAllListeners = p,
//         n.emit = p,
//         n.prependListener = p,
//         n.prependOnceListener = p,
//         n.listeners = function(t) {
//             return []
//         }
//         ,
//         n.binding = function(t) {
//             throw new Error("process.binding is not supported")
//         }
//         ,
//         n.cwd = function() {
//             return "/"
//         }
//         ,
//         n.chdir = function(t) {
//             throw new Error("process.chdir is not supported")
//         }
//         ,
//         n.umask = function() {
//             return 0
//         }
//         ;
//     }
//     , {}],
//     "B3oH": [function(require, module, exports) {
//         var define;
//         var global = arguments[3];
//         var process = require("process");
//         var t, e = arguments[3], o = require("process");
//         !function(e, o) {
//             "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof t && t.amd ? t("ASScroll", [], o) : "object" == typeof exports ? exports.ASScroll = o() : e.ASScroll = o()
//         }(window, function() {
//             return function(t) {
//                 var e = {};
//                 function o(n) {
//                     if (e[n])
//                         return e[n].exports;
//                     var r = e[n] = {
//                         i: n,
//                         l: !1,
//                         exports: {}
//                     };
//                     return t[n].call(r.exports, r, r.exports, o),
//                     r.l = !0,
//                     r.exports
//                 }
//                 return o.m = t,
//                 o.c = e,
//                 o.d = function(t, e, n) {
//                     o.o(t, e) || Object.defineProperty(t, e, {
//                         enumerable: !0,
//                         get: n
//                     })
//                 }
//                 ,
//                 o.r = function(t) {
//                     "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
//                         value: "Module"
//                     }),
//                     Object.defineProperty(t, "__esModule", {
//                         value: !0
//                     })
//                 }
//                 ,
//                 o.t = function(t, e) {
//                     if (1 & e && (t = o(t)),
//                     8 & e)
//                         return t;
//                     if (4 & e && "object" == typeof t && t && t.__esModule)
//                         return t;
//                     var n = Object.create(null);
//                     if (o.r(n),
//                     Object.defineProperty(n, "default", {
//                         enumerable: !0,
//                         value: t
//                     }),
//                     2 & e && "string" != typeof t)
//                         for (var r in t)
//                             o.d(n, r, function(e) {
//                                 return t[e]
//                             }
//                             .bind(null, r));
//                     return n
//                 }
//                 ,
//                 o.n = function(t) {
//                     var e = t && t.__esModule ? function() {
//                         return t.default
//                     }
//                     : function() {
//                         return t
//                     }
//                     ;
//                     return o.d(e, "a", e),
//                     e
//                 }
//                 ,
//                 o.o = function(t, e) {
//                     return Object.prototype.hasOwnProperty.call(t, e)
//                 }
//                 ,
//                 o.p = "",
//                 o(o.s = 60)
//             }([function(t, e) {
//                 var o = {
//                     html: document.documentElement,
//                     body: document.body,
//                     windowSize: {
//                         w: window.innerWidth,
//                         h: window.innerHeight
//                     }
//                 };
//                 t.exports = o
//             }
//             , function(t, e, o) {
//                 (function(e) {
//                     var o = function(t) {
//                         return t && t.Math == Math && t
//                     };
//                     t.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof e && e) || Function("return this")()
//                 }
//                 ).call(this, o(38))
//             }
//             , function(t, e) {
//                 t.exports = function(t) {
//                     try {
//                         return !!t()
//                     } catch (e) {
//                         return !0
//                     }
//                 }
//             }
//             , function(t, e) {
//                 t.exports = function(t) {
//                     return "object" == typeof t ? null !== t : "function" == typeof t
//                 }
//             }
//             , function(t, e) {
//                 var o = {}.hasOwnProperty;
//                 t.exports = function(t, e) {
//                     return o.call(t, e)
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(2);
//                 t.exports = !n(function() {
//                     return 7 != Object.defineProperty({}, 1, {
//                         get: function() {
//                             return 7
//                         }
//                     })[1]
//                 })
//             }
//             , function(t, e, o) {
//                 var n = o(5)
//                   , r = o(10)
//                   , i = o(7);
//                 t.exports = n ? function(t, e, o) {
//                     return r.f(t, e, i(1, o))
//                 }
//                 : function(t, e, o) {
//                     return t[e] = o,
//                     t
//                 }
//             }
//             , function(t, e) {
//                 t.exports = function(t, e) {
//                     return {
//                         enumerable: !(1 & t),
//                         configurable: !(2 & t),
//                         writable: !(4 & t),
//                         value: e
//                     }
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(17)
//                   , r = o(19);
//                 t.exports = function(t) {
//                     return n(r(t))
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(3);
//                 t.exports = function(t, e) {
//                     if (!n(t))
//                         return t;
//                     var o, r;
//                     if (e && "function" == typeof (o = t.toString) && !n(r = o.call(t)))
//                         return r;
//                     if ("function" == typeof (o = t.valueOf) && !n(r = o.call(t)))
//                         return r;
//                     if (!e && "function" == typeof (o = t.toString) && !n(r = o.call(t)))
//                         return r;
//                     throw TypeError("Can't convert object to primitive value")
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(5)
//                   , r = o(20)
//                   , i = o(21)
//                   , s = o(9)
//                   , l = Object.defineProperty;
//                 e.f = n ? l : function(t, e, o) {
//                     if (i(t),
//                     e = s(e, !0),
//                     i(o),
//                     r)
//                         try {
//                             return l(t, e, o)
//                         } catch (n) {}
//                     if ("get"in o || "set"in o)
//                         throw TypeError("Accessors not supported");
//                     return "value"in o && (t[e] = o.value),
//                     t
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(6);
//                 t.exports = function(t, e) {
//                     try {
//                         r(n, t, e)
//                     } catch (o) {
//                         n[t] = e
//                     }
//                     return e
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(24)
//                   , i = o(4)
//                   , s = o(25)
//                   , l = o(35)
//                   , c = o(54)
//                   , a = r("wks")
//                   , u = n.Symbol
//                   , h = c ? u : u && u.withoutSetter || s;
//                 t.exports = function(t) {
//                     return i(a, t) || (l && i(u, t) ? a[t] = u[t] : a[t] = h("Symbol." + t)),
//                     a[t]
//                 }
//             }
//             , function(t, e, o) {
//                 "use strict";
//                 var n = o(14)
//                   , r = o(2)
//                   , i = o(33)
//                   , s = o(3)
//                   , l = o(34)
//                   , c = o(29)
//                   , a = o(52)
//                   , u = o(53)
//                   , h = o(55)
//                   , f = o(12)
//                   , d = o(36)
//                   , p = f("isConcatSpreadable")
//                   , v = d >= 51 || !r(function() {
//                     var t = [];
//                     return t[p] = !1,
//                     t.concat()[0] !== t
//                 })
//                   , m = h("concat")
//                   , y = function(t) {
//                     if (!s(t))
//                         return !1;
//                     var e = t[p];
//                     return void 0 !== e ? !!e : i(t)
//                 };
//                 n({
//                     target: "Array",
//                     proto: !0,
//                     forced: !v || !m
//                 }, {
//                     concat: function(t) {
//                         var e, o, n, r, i, s = l(this), h = u(s, 0), f = 0;
//                         for (e = -1,
//                         n = arguments.length; e < n; e++)
//                             if (i = -1 === e ? s : arguments[e],
//                             y(i)) {
//                                 if (f + (r = c(i.length)) > 9007199254740991)
//                                     throw TypeError("Maximum allowed index exceeded");
//                                 for (o = 0; o < r; o++,
//                                 f++)
//                                     o in i && a(h, f, i[o])
//                             } else {
//                                 if (f >= 9007199254740991)
//                                     throw TypeError("Maximum allowed index exceeded");
//                                 a(h, f++, i)
//                             }
//                         return h.length = f,
//                         h
//                     }
//                 })
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(15).f
//                   , i = o(6)
//                   , s = o(40)
//                   , l = o(11)
//                   , c = o(45)
//                   , a = o(51);
//                 t.exports = function(t, e) {
//                     var o, u, h, f, d, p = t.target, v = t.global, m = t.stat;
//                     if (o = v ? n : m ? n[p] || l(p, {}) : (n[p] || {}).prototype)
//                         for (u in e) {
//                             if (f = e[u],
//                             h = t.noTargetGet ? (d = r(o, u)) && d.value : o[u],
//                             !a(v ? u : p + (m ? "." : "#") + u, t.forced) && void 0 !== h) {
//                                 if (typeof f == typeof h)
//                                     continue;
//                                 c(f, h)
//                             }
//                             (t.sham || h && h.sham) && i(f, "sham", !0),
//                             s(o, u, f, t)
//                         }
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(5)
//                   , r = o(16)
//                   , i = o(7)
//                   , s = o(8)
//                   , l = o(9)
//                   , c = o(4)
//                   , a = o(20)
//                   , u = Object.getOwnPropertyDescriptor;
//                 e.f = n ? u : function(t, e) {
//                     if (t = s(t),
//                     e = l(e, !0),
//                     a)
//                         try {
//                             return u(t, e)
//                         } catch (o) {}
//                     if (c(t, e))
//                         return i(!r.f.call(t, e), t[e])
//                 }
//             }
//             , function(t, e, o) {
//                 "use strict";
//                 var n = {}.propertyIsEnumerable
//                   , r = Object.getOwnPropertyDescriptor
//                   , i = r && !n.call({
//                     1: 2
//                 }, 1);
//                 e.f = i ? function(t) {
//                     var e = r(this, t);
//                     return !!e && e.enumerable
//                 }
//                 : n
//             }
//             , function(t, e, o) {
//                 var n = o(2)
//                   , r = o(18)
//                   , i = "".split;
//                 t.exports = n(function() {
//                     return !Object("z").propertyIsEnumerable(0)
//                 }) ? function(t) {
//                     return "String" == r(t) ? i.call(t, "") : Object(t)
//                 }
//                 : Object
//             }
//             , function(t, e) {
//                 var o = {}.toString;
//                 t.exports = function(t) {
//                     return o.call(t).slice(8, -1)
//                 }
//             }
//             , function(t, e) {
//                 t.exports = function(t) {
//                     if (null == t)
//                         throw TypeError("Can't call method on " + t);
//                     return t
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(5)
//                   , r = o(2)
//                   , i = o(39);
//                 t.exports = !n && !r(function() {
//                     return 7 != Object.defineProperty(i("div"), "a", {
//                         get: function() {
//                             return 7
//                         }
//                     }).a
//                 })
//             }
//             , function(t, e, o) {
//                 var n = o(3);
//                 t.exports = function(t) {
//                     if (!n(t))
//                         throw TypeError(String(t) + " is not an object");
//                     return t
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(23)
//                   , r = Function.toString;
//                 "function" != typeof n.inspectSource && (n.inspectSource = function(t) {
//                     return r.call(t)
//                 }
//                 ),
//                 t.exports = n.inspectSource
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(11)
//                   , i = n["__core-js_shared__"] || r("__core-js_shared__", {});
//                 t.exports = i
//             }
//             , function(t, e, o) {
//                 var n = o(44)
//                   , r = o(23);
//                 (t.exports = function(t, e) {
//                     return r[t] || (r[t] = void 0 !== e ? e : {})
//                 }
//                 )("versions", []).push({
//                     version: "3.6.5",
//                     mode: n ? "pure" : "global",
//                     copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
//                 })
//             }
//             , function(t, e) {
//                 var o = 0
//                   , n = Math.random();
//                 t.exports = function(t) {
//                     return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++o + n).toString(36)
//                 }
//             }
//             , function(t, e) {
//                 t.exports = {}
//             }
//             , function(t, e, o) {
//                 var n = o(47)
//                   , r = o(1)
//                   , i = function(t) {
//                     return "function" == typeof t ? t : void 0
//                 };
//                 t.exports = function(t, e) {
//                     return arguments.length < 2 ? i(n[t]) || i(r[t]) : n[t] && n[t][e] || r[t] && r[t][e]
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(4)
//                   , r = o(8)
//                   , i = o(49).indexOf
//                   , s = o(26);
//                 t.exports = function(t, e) {
//                     var o, l = r(t), c = 0, a = [];
//                     for (o in l)
//                         !n(s, o) && n(l, o) && a.push(o);
//                     for (; e.length > c; )
//                         n(l, o = e[c++]) && (~i(a, o) || a.push(o));
//                     return a
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(30)
//                   , r = Math.min;
//                 t.exports = function(t) {
//                     return t > 0 ? r(n(t), 9007199254740991) : 0
//                 }
//             }
//             , function(t, e) {
//                 var o = Math.ceil
//                   , n = Math.floor;
//                 t.exports = function(t) {
//                     return isNaN(t = +t) ? 0 : (t > 0 ? n : o)(t)
//                 }
//             }
//             , function(t, e) {
//                 t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
//             }
//             , function(t, e) {
//                 e.f = Object.getOwnPropertySymbols
//             }
//             , function(t, e, o) {
//                 var n = o(18);
//                 t.exports = Array.isArray || function(t) {
//                     return "Array" == n(t)
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(19);
//                 t.exports = function(t) {
//                     return Object(n(t))
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(2);
//                 t.exports = !!Object.getOwnPropertySymbols && !n(function() {
//                     return !String(Symbol())
//                 })
//             }
//             , function(t, e, o) {
//                 var n, r, i = o(1), s = o(56), l = i.process, c = l && l.versions, a = c && c.v8;
//                 a ? r = (n = a.split("."))[0] + n[1] : s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (r = n[1]),
//                 t.exports = r && +r
//             }
//             , function(t, e) {
//                 t.exports = function(t, e) {
//                     var o = null;
//                     return function() {
//                         clearTimeout(o);
//                         var n = arguments
//                           , r = this;
//                         o = setTimeout(function() {
//                             t.apply(r, n)
//                         }, e)
//                     }
//                 }
//             }
//             , function(t, e) {
//                 var o;
//                 o = function() {
//                     return this
//                 }();
//                 try {
//                     o = o || new Function("return this")()
//                 } catch (n) {
//                     "object" == typeof window && (o = window)
//                 }
//                 t.exports = o
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(3)
//                   , i = n.document
//                   , s = r(i) && r(i.createElement);
//                 t.exports = function(t) {
//                     return s ? i.createElement(t) : {}
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(6)
//                   , i = o(4)
//                   , s = o(11)
//                   , l = o(22)
//                   , c = o(41)
//                   , a = c.get
//                   , u = c.enforce
//                   , h = String(String).split("String");
//                 (t.exports = function(t, e, o, l) {
//                     var c = !!l && !!l.unsafe
//                       , a = !!l && !!l.enumerable
//                       , f = !!l && !!l.noTargetGet;
//                     "function" == typeof o && ("string" != typeof e || i(o, "name") || r(o, "name", e),
//                     u(o).source = h.join("string" == typeof e ? e : "")),
//                     t !== n ? (c ? !f && t[e] && (a = !0) : delete t[e],
//                     a ? t[e] = o : r(t, e, o)) : a ? t[e] = o : s(e, o)
//                 }
//                 )(Function.prototype, "toString", function() {
//                     return "function" == typeof this && a(this).source || l(this)
//                 })
//             }
//             , function(t, e, o) {
//                 var n, r, i, s = o(42), l = o(1), c = o(3), a = o(6), u = o(4), h = o(43), f = o(26), d = l.WeakMap;
//                 if (s) {
//                     var p = new d
//                       , v = p.get
//                       , m = p.has
//                       , y = p.set;
//                     n = function(t, e) {
//                         return y.call(p, t, e),
//                         e
//                     }
//                     ,
//                     r = function(t) {
//                         return v.call(p, t) || {}
//                     }
//                     ,
//                     i = function(t) {
//                         return m.call(p, t)
//                     }
//                 } else {
//                     var g = h("state");
//                     f[g] = !0,
//                     n = function(t, e) {
//                         return a(t, g, e),
//                         e
//                     }
//                     ,
//                     r = function(t) {
//                         return u(t, g) ? t[g] : {}
//                     }
//                     ,
//                     i = function(t) {
//                         return u(t, g)
//                     }
//                 }
//                 t.exports = {
//                     set: n,
//                     get: r,
//                     has: i,
//                     enforce: function(t) {
//                         return i(t) ? r(t) : n(t, {})
//                     },
//                     getterFor: function(t) {
//                         return function(e) {
//                             var o;
//                             if (!c(e) || (o = r(e)).type !== t)
//                                 throw TypeError("Incompatible receiver, " + t + " required");
//                             return o
//                         }
//                     }
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(1)
//                   , r = o(22)
//                   , i = n.WeakMap;
//                 t.exports = "function" == typeof i && /native code/.test(r(i))
//             }
//             , function(t, e, o) {
//                 var n = o(24)
//                   , r = o(25)
//                   , i = n("keys");
//                 t.exports = function(t) {
//                     return i[t] || (i[t] = r(t))
//                 }
//             }
//             , function(t, e) {
//                 t.exports = !1
//             }
//             , function(t, e, o) {
//                 var n = o(4)
//                   , r = o(46)
//                   , i = o(15)
//                   , s = o(10);
//                 t.exports = function(t, e) {
//                     for (var o = r(e), l = s.f, c = i.f, a = 0; a < o.length; a++) {
//                         var u = o[a];
//                         n(t, u) || l(t, u, c(e, u))
//                     }
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(27)
//                   , r = o(48)
//                   , i = o(32)
//                   , s = o(21);
//                 t.exports = n("Reflect", "ownKeys") || function(t) {
//                     var e = r.f(s(t))
//                       , o = i.f;
//                     return o ? e.concat(o(t)) : e
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(1);
//                 t.exports = n
//             }
//             , function(t, e, o) {
//                 var n = o(28)
//                   , r = o(31).concat("length", "prototype");
//                 e.f = Object.getOwnPropertyNames || function(t) {
//                     return n(t, r)
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(8)
//                   , r = o(29)
//                   , i = o(50)
//                   , s = function(t) {
//                     return function(e, o, s) {
//                         var l, c = n(e), a = r(c.length), u = i(s, a);
//                         if (t && o != o) {
//                             for (; a > u; )
//                                 if ((l = c[u++]) != l)
//                                     return !0
//                         } else
//                             for (; a > u; u++)
//                                 if ((t || u in c) && c[u] === o)
//                                     return t || u || 0;
//                         return !t && -1
//                     }
//                 };
//                 t.exports = {
//                     includes: s(!0),
//                     indexOf: s(!1)
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(30)
//                   , r = Math.max
//                   , i = Math.min;
//                 t.exports = function(t, e) {
//                     var o = n(t);
//                     return o < 0 ? r(o + e, 0) : i(o, e)
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(2)
//                   , r = /#|\.prototype\./
//                   , i = function(t, e) {
//                     var o = l[s(t)];
//                     return o == a || o != c && ("function" == typeof e ? n(e) : !!e)
//                 }
//                   , s = i.normalize = function(t) {
//                     return String(t).replace(r, ".").toLowerCase()
//                 }
//                   , l = i.data = {}
//                   , c = i.NATIVE = "N"
//                   , a = i.POLYFILL = "P";
//                 t.exports = i
//             }
//             , function(t, e, o) {
//                 "use strict";
//                 var n = o(9)
//                   , r = o(10)
//                   , i = o(7);
//                 t.exports = function(t, e, o) {
//                     var s = n(e);
//                     s in t ? r.f(t, s, i(0, o)) : t[s] = o
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(3)
//                   , r = o(33)
//                   , i = o(12)("species");
//                 t.exports = function(t, e) {
//                     var o;
//                     return r(t) && ("function" != typeof (o = t.constructor) || o !== Array && !r(o.prototype) ? n(o) && null === (o = o[i]) && (o = void 0) : o = void 0),
//                     new (void 0 === o ? Array : o)(0 === e ? 0 : e)
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(35);
//                 t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
//             }
//             , function(t, e, o) {
//                 var n = o(2)
//                   , r = o(12)
//                   , i = o(36)
//                   , s = r("species");
//                 t.exports = function(t) {
//                     return i >= 51 || !n(function() {
//                         var e = [];
//                         return (e.constructor = {})[s] = function() {
//                             return {
//                                 foo: 1
//                             }
//                         }
//                         ,
//                         1 !== e[t](Boolean).foo
//                     })
//                 }
//             }
//             , function(t, e, o) {
//                 var n = o(27);
//                 t.exports = n("navigator", "userAgent") || ""
//             }
//             , function(t, e, o) {
//                 var n = o(14)
//                   , r = o(58);
//                 n({
//                     target: "Object",
//                     stat: !0,
//                     forced: Object.assign !== r
//                 }, {
//                     assign: r
//                 })
//             }
//             , function(t, e, o) {
//                 "use strict";
//                 var n = o(5)
//                   , r = o(2)
//                   , i = o(59)
//                   , s = o(32)
//                   , l = o(16)
//                   , c = o(34)
//                   , a = o(17)
//                   , u = Object.assign
//                   , h = Object.defineProperty;
//                 t.exports = !u || r(function() {
//                     if (n && 1 !== u({
//                         b: 1
//                     }, u(h({}, "a", {
//                         enumerable: !0,
//                         get: function() {
//                             h(this, "b", {
//                                 value: 3,
//                                 enumerable: !1
//                             })
//                         }
//                     }), {
//                         b: 2
//                     })).b)
//                         return !0;
//                     var t = {}
//                       , e = {}
//                       , o = Symbol();
//                     return t[o] = 7,
//                     "abcdefghijklmnopqrst".split("").forEach(function(t) {
//                         e[t] = t
//                     }),
//                     7 != u({}, t)[o] || "abcdefghijklmnopqrst" != i(u({}, e)).join("")
//                 }) ? function(t, e) {
//                     for (var o = c(t), r = arguments.length, u = 1, h = s.f, f = l.f; r > u; )
//                         for (var d, p = a(arguments[u++]), v = h ? i(p).concat(h(p)) : i(p), m = v.length, y = 0; m > y; )
//                             d = v[y++],
//                             n && !f.call(p, d) || (o[d] = p[d]);
//                     return o
//                 }
//                 : u
//             }
//             , function(t, e, o) {
//                 var n = o(28)
//                   , r = o(31);
//                 t.exports = Object.keys || function(t) {
//                     return n(t, r)
//                 }
//             }
//             , function(t, e, o) {
//                 "use strict";
//                 o.r(e);
//                 var n = o(0)
//                   , r = o.n(n)
//                   , i = o(37)
//                   , s = o.n(i);
//                 function l() {
//                     if (!(this instanceof l))
//                         return new l;
//                     this.size = 0,
//                     this.uid = 0,
//                     this.selectors = [],
//                     this.selectorObjects = {},
//                     this.indexes = Object.create(this.indexes),
//                     this.activeIndexes = []
//                 }
//                 var c = window.document.documentElement
//                   , a = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.oMatchesSelector || c.msMatchesSelector;
//                 l.prototype.matchesSelector = function(t, e) {
//                     return a.call(t, e)
//                 }
//                 ,
//                 l.prototype.querySelectorAll = function(t, e) {
//                     return e.querySelectorAll(t)
//                 }
//                 ,
//                 l.prototype.indexes = [];
//                 var u = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
//                 l.prototype.indexes.push({
//                     name: "ID",
//                     selector: function(t) {
//                         var e;
//                         if (e = t.match(u))
//                             return e[0].slice(1)
//                     },
//                     element: function(t) {
//                         if (t.id)
//                             return [t.id]
//                     }
//                 });
//                 var h = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
//                 l.prototype.indexes.push({
//                     name: "CLASS",
//                     selector: function(t) {
//                         var e;
//                         if (e = t.match(h))
//                             return e[0].slice(1)
//                     },
//                     element: function(t) {
//                         var e = t.className;
//                         if (e) {
//                             if ("string" == typeof e)
//                                 return e.split(/\s/);
//                             if ("object" == typeof e && "baseVal"in e)
//                                 return e.baseVal.split(/\s/)
//                         }
//                     }
//                 });
//                 var f, d = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
//                 l.prototype.indexes.push({
//                     name: "TAG",
//                     selector: function(t) {
//                         var e;
//                         if (e = t.match(d))
//                             return e[0].toUpperCase()
//                     },
//                     element: function(t) {
//                         return [t.nodeName.toUpperCase()]
//                     }
//                 }),
//                 l.prototype.indexes.default = {
//                     name: "UNIVERSAL",
//                     selector: function() {
//                         return !0
//                     },
//                     element: function() {
//                         return [!0]
//                     }
//                 },
//                 f = "function" == typeof window.Map ? window.Map : function() {
//                     function t() {
//                         this.map = {}
//                     }
//                     return t.prototype.get = function(t) {
//                         return this.map[t + " "]
//                     }
//                     ,
//                     t.prototype.set = function(t, e) {
//                         this.map[t + " "] = e
//                     }
//                     ,
//                     t
//                 }();
//                 var p = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
//                 function v(t, e) {
//                     var o, n, r, i, s, l, c = (t = t.slice(0).concat(t.default)).length, a = e, u = [];
//                     do {
//                         if (p.exec(""),
//                         (r = p.exec(a)) && (a = r[3],
//                         r[2] || !a))
//                             for (o = 0; o < c; o++)
//                                 if (s = (l = t[o]).selector(r[1])) {
//                                     for (n = u.length,
//                                     i = !1; n--; )
//                                         if (u[n].index === l && u[n].key === s) {
//                                             i = !0;
//                                             break
//                                         }
//                                     i || u.push({
//                                         index: l,
//                                         key: s
//                                     });
//                                     break
//                                 }
//                     } while (r);
//                     return u
//                 }
//                 function m(t, e) {
//                     var o, n, r;
//                     for (o = 0,
//                     n = t.length; o < n; o++)
//                         if (r = t[o],
//                         e.isPrototypeOf(r))
//                             return r
//                 }
//                 function y(t, e) {
//                     return t.id - e.id
//                 }
//                 l.prototype.logDefaultIndexUsed = function() {}
//                 ,
//                 l.prototype.add = function(t, e) {
//                     var o, n, r, i, s, l, c, a, u = this.activeIndexes, h = this.selectors, d = this.selectorObjects;
//                     if ("string" == typeof t) {
//                         for (d[(o = {
//                             id: this.uid++,
//                             selector: t,
//                             data: e
//                         }).id] = o,
//                         c = v(this.indexes, t),
//                         n = 0; n < c.length; n++)
//                             i = (a = c[n]).key,
//                             (s = m(u, r = a.index)) || ((s = Object.create(r)).map = new f,
//                             u.push(s)),
//                             r === this.indexes.default && this.logDefaultIndexUsed(o),
//                             (l = s.map.get(i)) || (l = [],
//                             s.map.set(i, l)),
//                             l.push(o);
//                         this.size++,
//                         h.push(t)
//                     }
//                 }
//                 ,
//                 l.prototype.remove = function(t, e) {
//                     if ("string" == typeof t) {
//                         var o, n, r, i, s, l, c, a, u = this.activeIndexes, h = this.selectors = [], f = this.selectorObjects, d = {}, p = 1 === arguments.length;
//                         for (o = v(this.indexes, t),
//                         r = 0; r < o.length; r++)
//                             for (n = o[r],
//                             i = u.length; i--; )
//                                 if (l = u[i],
//                                 n.index.isPrototypeOf(l)) {
//                                     if (c = l.map.get(n.key))
//                                         for (s = c.length; s--; )
//                                             (a = c[s]).selector !== t || !p && a.data !== e || (c.splice(s, 1),
//                                             d[a.id] = !0);
//                                     break
//                                 }
//                         for (r in d)
//                             delete f[r],
//                             this.size--;
//                         for (r in f)
//                             h.push(f[r].selector)
//                     }
//                 }
//                 ,
//                 l.prototype.queryAll = function(t) {
//                     if (!this.selectors.length)
//                         return [];
//                     var e, o, n, r, i, s, l, c, a = {}, u = [], h = this.querySelectorAll(this.selectors.join(", "), t);
//                     for (e = 0,
//                     n = h.length; e < n; e++)
//                         for (i = h[e],
//                         o = 0,
//                         r = (s = this.matches(i)).length; o < r; o++)
//                             a[(c = s[o]).id] ? l = a[c.id] : (l = {
//                                 id: c.id,
//                                 selector: c.selector,
//                                 data: c.data,
//                                 elements: []
//                             },
//                             a[c.id] = l,
//                             u.push(l)),
//                             l.elements.push(i);
//                     return u.sort(y)
//                 }
//                 ,
//                 l.prototype.matches = function(t) {
//                     if (!t)
//                         return [];
//                     var e, o, n, r, i, s, l, c, a, u, h, f = this.activeIndexes, d = {}, p = [];
//                     for (e = 0,
//                     r = f.length; e < r; e++)
//                         if (c = (l = f[e]).element(t))
//                             for (o = 0,
//                             i = c.length; o < i; o++)
//                                 if (a = l.map.get(c[o]))
//                                     for (n = 0,
//                                     s = a.length; n < s; n++)
//                                         !d[h = (u = a[n]).id] && this.matchesSelector(t, u.selector) && (d[h] = !0,
//                                         p.push(u));
//                     return p.sort(y)
//                 }
//                 ;
//                 const g = {}
//                   , b = {}
//                   , S = ["mouseenter", "mouseleave"];
//                 function w(t) {
//                     void 0 === b[t] && (b[t] = [])
//                 }
//                 function x(t) {
//                     return "string" == typeof t ? document.querySelectorAll(t) : t
//                 }
//                 function E(t) {
//                     let e = function(t, e) {
//                         const o = [];
//                         let n = e;
//                         do {
//                             if (1 !== n.nodeType)
//                                 break;
//                             const e = t.matches(n);
//                             e.length && o.push({
//                                 delegatedTarget: n,
//                                 stack: e
//                             })
//                         } while (n = n.parentElement);
//                         return o
//                     }(g[t.type], t.target);
//                     if (e.length)
//                         for (let o = 0; o < e.length; o++)
//                             for (let n = 0; n < e[o].stack.length; n++)
//                                 -1 !== S.indexOf(t.type) ? (O(t, e[o].delegatedTarget),
//                                 t.target === e[o].delegatedTarget && e[o].stack[n].data(t)) : (O(t, e[o].delegatedTarget),
//                                 e[o].stack[n].data(t))
//                 }
//                 function O(t, e) {
//                     Object.defineProperty(t, "currentTarget", {
//                         configurable: !0,
//                         enumerable: !0,
//                         value: e
//                     })
//                 }
//                 function T(t) {
//                     return JSON.parse(JSON.stringify(t))
//                 }
//                 var k = new class {
//                     bindAll(t, e) {
//                         void 0 === e && (e = Object.getOwnPropertyNames(Object.getPrototypeOf(t)));
//                         for (let o = 0; o < e.length; o++)
//                             t[e[o]] = t[e[o]].bind(t)
//                     }
//                     on(t, e, o, n) {
//                         if ("function" == typeof e && void 0 === o)
//                             return w(t),
//                             void b[t].push(e);
//                         const r = t.split(" ");
//                         for (let i = 0; i < r.length; i++)
//                             if (e.nodeType && 1 === e.nodeType || e === window || e === document)
//                                 e.addEventListener(r[i], o, n);
//                             else {
//                                 e = x(e);
//                                 for (let t = 0; t < e.length; t++)
//                                     e[t].addEventListener(r[i], o, n)
//                             }
//                     }
//                     delegate(t, e, o) {
//                         const n = t.split(" ");
//                         for (let r = 0; r < n.length; r++) {
//                             let t = g[n[r]];
//                             void 0 === t && (t = new l,
//                             g[n[r]] = t,
//                             -1 !== S.indexOf(n[r]) ? document.addEventListener(n[r], E, !0) : document.addEventListener(n[r], E)),
//                             t.add(e, o)
//                         }
//                     }
//                     off(t, e, o) {
//                         if (void 0 === e)
//                             return void (b[t] = []);
//                         if ("function" == typeof e) {
//                             w(t);
//                             for (let o = 0; o < b[t].length; o++)
//                                 b[t][o] === e && b[t].splice(o, 1);
//                             return
//                         }
//                         const n = t.split(" ");
//                         for (let r = 0; r < n.length; r++) {
//                             const t = g[n[r]];
//                             if (void 0 === t || (t.remove(e, o),
//                             0 !== t.size))
//                                 if (void 0 === e.removeEventListener) {
//                                     e = x(e);
//                                     for (let t = 0; t < e.length; t++)
//                                         e[t].removeEventListener(n[r], o)
//                                 } else
//                                     e.removeEventListener(n[r], o);
//                             else
//                                 delete g[n[r]],
//                                 document.removeEventListener(n[r], E)
//                         }
//                     }
//                     emit(t, ...e) {
//                         !function(t, e) {
//                             if (b[t])
//                                 for (let o = 0; o < b[t].length; o++)
//                                     b[t][o](...e)
//                         }(t, e)
//                     }
//                     debugDelegated() {
//                         return T(g)
//                     }
//                     debugBus() {
//                         return T(b)
//                     }
//                 }
//                 ;
//                 function P(t, e) {
//                     for (var o = 0; o < e.length; o++) {
//                         var n = e[o];
//                         n.enumerable = n.enumerable || !1,
//                         n.configurable = !0,
//                         "value"in n && (n.writable = !0),
//                         Object.defineProperty(t, n.key, n)
//                     }
//                 }
//                 var L = function() {
//                     function t() {
//                         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
//                         !function(t, e) {
//                             if (!(t instanceof e))
//                                 throw new TypeError("Cannot call a class as a function")
//                         }(this, t),
//                         this.options = e,
//                         k.bindAll(this, ["onRaf"]),
//                         r.a.events = {
//                             RAF: 1,
//                             EXTERNALRAF: 2,
//                             SCROLL: 3,
//                             WHEEL: 4,
//                             COMBOSCROLL: 5,
//                             RESIZE: 6,
//                             TOUCHMOUSE: 7
//                         },
//                         this.addEvents()
//                     }
//                     var e, o, n;
//                     return e = t,
//                     (o = [{
//                         key: "addEvents",
//                         value: function() {
//                             var t = this;
//                             this.options.disableRaf || requestAnimationFrame(this.onRaf),
//                             this.options.disableResize || k.on("resize", window, s()(function() {
//                                 t.onResize()
//                             }, 150)),
//                             this.onScroll(),
//                             "ontouchstart"in document.documentElement && (r.a.isTouch = !0,
//                             this.detectMouse())
//                         }
//                     }, {
//                         key: "onRaf",
//                         value: function() {
//                             k.emit(r.a.events.RAF),
//                             this.options.disableRaf || requestAnimationFrame(this.onRaf)
//                         }
//                     }, {
//                         key: "onScroll",
//                         value: function() {
//                             k.on("wheel", window, function(t) {
//                                 k.emit(r.a.events.WHEEL, {
//                                     event: t
//                                 })
//                             }, {
//                                 passive: !1
//                             }),
//                             k.on("scroll", window, function(t) {
//                                 k.emit(r.a.events.SCROLL, {
//                                     event: t
//                                 })
//                             }, {
//                                 passive: !0
//                             })
//                         }
//                     }, {
//                         key: "onResize",
//                         value: function(t, e) {
//                             r.a.windowSize.w = t || window.innerWidth,
//                             r.a.windowSize.h = e || window.innerHeight,
//                             k.emit(r.a.events.RESIZE)
//                         }
//                     }, {
//                         key: "detectMouse",
//                         value: function() {
//                             window.addEventListener("mousemove", function t(e) {
//                                 (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) && (r.a.isTouch = !1,
//                                 k.emit(r.a.events.TOUCHMOUSE),
//                                 window.removeEventListener("mousemove", t))
//                             })
//                         }
//                     }]) && P(e.prototype, o),
//                     n && P(e, n),
//                     t
//                 }();
//                 o(13),
//                 o(57);
//                 function R(t, e) {
//                     for (var o = 0; o < e.length; o++) {
//                         var n = e[o];
//                         n.enumerable = n.enumerable || !1,
//                         n.configurable = !0,
//                         "value"in n && (n.writable = !0),
//                         Object.defineProperty(t, n.key, n)
//                     }
//                 }
//                 var M = function() {
//                     function t(e) {
//                         !function(t, e) {
//                             if (!(t instanceof e))
//                                 throw new TypeError("Cannot call a class as a function")
//                         }(this, t),
//                         k.bindAll(this, ["onMouseMove", "onMouseDown", "onMouseUp"]),
//                         this.smoothScroll = e,
//                         this.addHTML(),
//                         this.el = document.querySelector(this.smoothScroll.options.scrollbarEl),
//                         this.handle = document.querySelector(this.smoothScroll.options.scrollbarHandleEl),
//                         this.addStyles(),
//                         this.addEvents()
//                     }
//                     var e, o, n;
//                     return e = t,
//                     (o = [{
//                         key: "addEvents",
//                         value: function() {
//                             k.on("mousedown", this.handle, this.onMouseDown),
//                             k.on("mousemove", window, this.onMouseMove),
//                             k.on("mouseup", window, this.onMouseUp)
//                         }
//                     }, {
//                         key: "onResize",
//                         value: function() {
//                             this.scale = (-this.smoothScroll.maxScroll + r.a.windowSize.h) / r.a.windowSize.h,
//                             this.scale <= 1 ? this.handle.style.height = 0 : (this.trueSize = r.a.windowSize.h / this.scale,
//                             this.handleHeight = Math.max(this.trueSize, 40),
//                             this.handle.style.height = "".concat(this.handleHeight, "px"))
//                         }
//                     }, {
//                         key: "transform",
//                         value: function() {
//                             var t = -this.smoothScroll.scrollPos / -this.smoothScroll.maxScroll * (r.a.windowSize.h - this.handleHeight);
//                             this.handle.style.transform = "translate3d(0, ".concat(t, "px, 0)")
//                         }
//                     }, {
//                         key: "show",
//                         value: function() {
//                             this.el.classList.add("show")
//                         }
//                     }, {
//                         key: "hide",
//                         value: function() {
//                             this.el.classList.remove("show")
//                         }
//                     }, {
//                         key: "onMouseMove",
//                         value: function(t) {
//                             if (this.mouseDown) {
//                                 var e = r.a.windowSize.h + (this.trueSize - this.handleHeight);
//                                 this.smoothScroll.scrollPos = t.clientY / e * this.smoothScroll.maxScroll,
//                                 this.smoothScroll.syncScroll = !0,
//                                 k.emit(r.a.events.COMBOSCROLL, this.smoothScroll.scrollPos)
//                             }
//                         }
//                     }, {
//                         key: "onMouseDown",
//                         value: function() {
//                             this.mouseDown = !0,
//                             r.a.body.style.userSelect = "none",
//                             r.a.body.style["-ms-user-select"] = "none",
//                             this.el.classList.add("active")
//                         }
//                     }, {
//                         key: "onMouseUp",
//                         value: function() {
//                             this.mouseDown = !1,
//                             r.a.body.style.removeProperty("user-select"),
//                             r.a.body.style.removeProperty("-ms-user-select"),
//                             this.el.classList.remove("active")
//                         }
//                     }, {
//                         key: "addHTML",
//                         value: function() {
//                             if (!document.querySelector(this.smoothScroll.options.scrollbarEl)) {
//                                 var t = document.createElement("div");
//                                 t.classList.add(this.smoothScroll.options.scrollbarEl.substring(1)),
//                                 t.innerHTML = '<div class="'.concat(this.smoothScroll.options.scrollbarHandleEl.substring(1), '"><div></div></div>'),
//                                 document.body.appendChild(t)
//                             }
//                         }
//                     }, {
//                         key: "addStyles",
//                         value: function() {
//                             if (this.smoothScroll.options.disableNativeScrollbar || this.smoothScroll.options.scrollbarStyles) {
//                                 var t = "";
//                                 this.smoothScroll.options.disableNativeScrollbar && (t += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}"),
//                                 this.smoothScroll.options.scrollbarStyles && (t += "".concat(this.smoothScroll.options.scrollbarEl, " {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch ").concat(this.smoothScroll.options.scrollbarEl, " {display: none;}").concat(this.smoothScroll.options.scrollbarEl, " > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}").concat(this.smoothScroll.options.scrollbarEl, " > div > div:hover {opacity: 0.9;}").concat(this.smoothScroll.options.scrollbarEl, ":hover > div, ").concat(this.smoothScroll.options.scrollbarEl, ".show > div, ").concat(this.smoothScroll.options.scrollbarEl, ".active > div {visibility: visible;}").concat(this.smoothScroll.options.scrollbarEl, ".active > div > div {opacity: 0.9;}"));
//                                 var e = document.createElement("style");
//                                 e.type = "text/css",
//                                 e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
//                                 document.getElementsByTagName("head")[0].appendChild(e)
//                             }
//                         }
//                     }, {
//                         key: "destroy",
//                         value: function() {
//                             k.off("mousedown", this.handle, this.onMouseDown),
//                             window.removeEventListener("mousemove", this.onMouseMove),
//                             window.removeEventListener("mouseup", this.onMouseUp)
//                         }
//                     }]) && R(e.prototype, o),
//                     n && R(e, n),
//                     t
//                 }()
//                   , C = 10
//                   , j = 40
//                   , z = 800;
//                 var A = function(t) {
//                     var e = 0
//                       , o = 0
//                       , n = 0
//                       , r = 0;
//                     return "detail"in t && (o = t.detail),
//                     "wheelDelta"in t && (o = -t.wheelDelta / 120),
//                     "wheelDeltaY"in t && (o = -t.wheelDeltaY / 120),
//                     "wheelDeltaX"in t && (e = -t.wheelDeltaX / 120),
//                     "axis"in t && t.axis === t.HORIZONTAL_AXIS && (e = o,
//                     o = 0),
//                     n = e * C,
//                     r = o * C,
//                     "deltaY"in t && (r = t.deltaY),
//                     "deltaX"in t && (n = t.deltaX),
//                     (n || r) && t.deltaMode && (1 == t.deltaMode ? (n *= j,
//                     r *= j) : (n *= z,
//                     r *= z)),
//                     n && !e && (e = n < 1 ? -1 : 1),
//                     r && !o && (o = r < 1 ? -1 : 1),
//                     {
//                         spinX: e,
//                         spinY: o,
//                         pixelX: n,
//                         pixelY: r
//                     }
//                 };
//                 function F(t, e) {
//                     for (var o = 0; o < e.length; o++) {
//                         var n = e[o];
//                         n.enumerable = n.enumerable || !1,
//                         n.configurable = !0,
//                         "value"in n && (n.writable = !0),
//                         Object.defineProperty(t, n.key, n)
//                     }
//                 }
//                 var D = function() {
//                     function t() {
//                         var e = this
//                           , o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
//                         !function(t, e) {
//                             if (!(t instanceof e))
//                                 throw new TypeError("Cannot call a class as a function")
//                         }(this, t),
//                         this.options = o,
//                         this.scrollbarCheck = this.options.customScrollbar,
//                         k.bindAll(this, ["onScroll", "onRAF", "onResize", "toggleFixedContainer"]),
//                         this.scrollContainer = document.querySelector(this.options.element);
//                         var n = this.scrollContainer.querySelectorAll(this.options.innerElement);
//                         this.scrollTargets = n.length ? n : [this.scrollContainer.firstElementChild],
//                         this.scrollTargetsLength = this.scrollTargets.length,
//                         this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0,
//                         this.enabled = !1,
//                         this.render = !1,
//                         this.scrolling = !1,
//                         this.syncScroll = !1,
//                         this.deltaY = 0,
//                         this.wheeling = !1,
//                         this.wheel = !0,
//                         this.horizontalScroll = !1,
//                         this.touchScroll = !1,
//                         this.ease = r.a.isTouch ? this.options.touchEase : this.options.ease,
//                         this.delta = 1,
//                         this.time = this.startTime = performance.now(),
//                         r.a.isTouch && this.options.disableOnTouch ? (this.touchScroll = !0,
//                         document.documentElement.classList.add("asscroll-touch"),
//                         this.options.customScrollbar = !1,
//                         k.on("scroll", this.scrollContainer, function(t) {
//                             k.emit(r.a.events.SCROLL, {
//                                 event: t
//                             })
//                         }, {
//                             passive: !0
//                         })) : (r.a.isTouch && (this.options.customScrollbar = !1),
//                         this.smoothSetup()),
//                         k.on(r.a.events.TOUCHMOUSE, function() {
//                             e.options.disableOnTouch && (e.touchScroll = !1,
//                             e.options.customScrollbar = e.scrollbarCheck,
//                             e.smoothSetup(),
//                             e.onResize())
//                         }),
//                         k.on("mouseleave", document, function() {
//                             window.scrollTo(0, -e.scrollPos)
//                         }),
//                         k.on("keydown", window, function(t) {
//                             "ArrowUp" !== t.key && "ArrowDown" !== t.key && "PageUp" !== t.key && "PageDown" !== t.key && "Home" !== t.key && "End" !== t.key && "Tab" !== t.key || window.scrollTo(0, -e.scrollPos),
//                             "Tab" === t.key && e.toggleFixedContainer()
//                         }),
//                         k.delegate("click", 'a[href^="#"]', this.toggleFixedContainer),
//                         k.delegate("wheel", this.options.blockScrollClass, this.blockScrollEvent)
//                     }
//                     var e, o, n;
//                     return e = t,
//                     (o = [{
//                         key: "smoothSetup",
//                         value: function() {
//                             Object.assign(this.scrollContainer.style, {
//                                 position: "fixed",
//                                 top: "0px",
//                                 left: "0px",
//                                 width: "100%",
//                                 height: "100%",
//                                 contain: "content"
//                             }),
//                             this.options.customScrollbar && (this.scrollbar = new M(this)),
//                             k.on(r.a.events.RAF, this.onRAF),
//                             k.on(r.a.events.RESIZE, this.onResize)
//                         }
//                     }, {
//                         key: "onScroll",
//                         value: function(t) {
//                             var e = t.event;
//                             if (this.scrolling || (this.options.customScrollbar && this.scrollbar.show(),
//                             this.toggleIframes(),
//                             this.scrolling = !0),
//                             !r.a.isTouch && "wheel" === e.type)
//                                 return e.preventDefault(),
//                                 this.deltaY = A(e).pixelY,
//                                 this.wheeling = !0,
//                                 this.syncScroll = !0,
//                                 void (this.wheel = !0);
//                             this.touchScroll ? this.scrollPos = this.horizontalScroll ? -this.scrollContainer.scrollLeft : -this.scrollContainer.scrollTop : this.scrollPos = -window.scrollY,
//                             this.wheel = !1,
//                             r.a.isTouch && this.options.disableOnTouch && (this.smoothScrollPos = this.scrollPos),
//                             k.emit(r.a.events.COMBOSCROLL, this.scrollPos)
//                         }
//                     }, {
//                         key: "onRAF",
//                         value: function() {
//                             if (this.render) {
//                                 this.wheeling && (this.scrollPos += -1 * this.deltaY,
//                                 this.wheeling = !1,
//                                 k.emit(r.a.events.COMBOSCROLL, this.scrollPos)),
//                                 this.clamp(),
//                                 this.options.limitLerpRate && (this.time = .001 * performance.now(),
//                                 this.delta = Math.min(60 * (this.time - this.startTime), 1),
//                                 this.startTime = this.time),
//                                 Math.abs(this.scrollPos - this.smoothScrollPos) < .5 ? (this.smoothScrollPos = this.scrollPos,
//                                 this.syncScroll && (window.scrollTo(0, -this.scrollPos),
//                                 this.syncScroll = !1),
//                                 this.scrolling && (this.options.customScrollbar && this.scrollbar.hide(),
//                                 this.toggleIframes(!0),
//                                 this.scrolling = !1)) : this.smoothScrollPos += (this.scrollPos - this.smoothScrollPos) * this.ease * this.delta;
//                                 var t = this.horizontalScroll ? this.smoothScrollPos : 0
//                                   , e = this.horizontalScroll ? 0 : this.smoothScrollPos;
//                                 this.applyTransform(t, e),
//                                 this.options.customScrollbar && this.scrollbar.transform(),
//                                 k.emit(r.a.events.EXTERNALRAF, {
//                                     scrollPos: this.scrollPos,
//                                     smoothScrollPos: this.smoothScrollPos
//                                 })
//                             }
//                         }
//                     }, {
//                         key: "applyTransform",
//                         value: function(t, e) {
//                             for (var o = 0; o < this.scrollTargetsLength; o++)
//                                 this.scrollTargets[o].style.transform = "translate3d(".concat(t, "px, ").concat(e, "px, 0px)")
//                         }
//                     }, {
//                         key: "enable",
//                         value: function() {
//                             var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
//                               , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
//                               , o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
//                               , n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
//                             this.enabled || (this.enabled = !0,
//                             this.render = !0,
//                             this.horizontalScroll = n,
//                             o && (this.scrollTargets = o.length ? o : [o],
//                             this.scrollTargetsLength = this.scrollTargets.length),
//                             this.iframes = this.scrollContainer.querySelectorAll("iframe"),
//                             r.a.isTouch && this.options.disableOnTouch ? (r.a.body.style.removeProperty("height"),
//                             e && (this.scrollPos = this.smoothScrollPos = 0,
//                             this.scrollTo(0, !1))) : (e && (this.scrollPos = this.smoothScrollPos = 0,
//                             this.applyTransform(0, 0)),
//                             this.onResize()),
//                             t && this.scrollTo(this.prevScrollPos, !1),
//                             k.on(r.a.events.WHEEL, this.onScroll),
//                             k.on(r.a.events.SCROLL, this.onScroll))
//                         }
//                     }, {
//                         key: "disable",
//                         value: function() {
//                             var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
//                             this.enabled && (this.enabled = !1,
//                             t || (this.render = !1),
//                             k.off(r.a.events.WHEEL, this.onScroll),
//                             k.off(r.a.events.SCROLL, this.onScroll),
//                             this.prevScrollPos = this.scrollPos,
//                             r.a.body.style.height = "0px")
//                         }
//                     }, {
//                         key: "clamp",
//                         value: function() {
//                             this.scrollPos = Math.max(Math.min(this.scrollPos, 0), this.maxScroll)
//                         }
//                     }, {
//                         key: "scrollTo",
//                         value: function(t) {
//                             var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
//                             this.scrollPos = t,
//                             r.a.isTouch && this.options.disableOnTouch && (this.horizontalScroll ? this.scrollContainer.scrollTo(-this.scrollPos, 0) : this.scrollContainer.scrollTo(0, -this.scrollPos)),
//                             this.clamp(),
//                             this.syncScroll = !0,
//                             e && k.emit(r.a.events.COMBOSCROLL, this.scrollPos)
//                         }
//                     }, {
//                         key: "onResize",
//                         value: function() {
//                             if (this.scrollTargetsLength > 1) {
//                                 var t = this.scrollTargets[this.scrollTargetsLength - 1]
//                                   , e = window.getComputedStyle(t)
//                                   , o = parseFloat(this.horizontalScroll ? e.marginRight : e.marginBottom)
//                                   , n = t.getBoundingClientRect()
//                                   , i = this.horizontalScroll ? n.right : n.bottom;
//                                 this.scrollLength = i + o - this.smoothScrollPos
//                             } else
//                                 this.scrollLength = this.horizontalScroll ? this.scrollTargets[0].scrollWidth : this.scrollTargets[0].scrollHeight;
//                             var s = this.horizontalScroll ? r.a.windowSize.w : r.a.windowSize.h;
//                             this.maxScroll = this.scrollLength > s ? -(this.scrollLength - s) : 0,
//                             r.a.body.style.height = this.scrollLength + "px",
//                             this.options.customScrollbar && this.scrollbar.onResize()
//                         }
//                     }, {
//                         key: "toggleIframes",
//                         value: function(t) {
//                             for (var e = 0; e < this.iframes.length; e++)
//                                 this.iframes[e].style.pointerEvents = t ? "auto" : "none"
//                         }
//                     }, {
//                         key: "blockScrollEvent",
//                         value: function(t) {
//                             t.stopPropagation()
//                         }
//                     }, {
//                         key: "toggleFixedContainer",
//                         value: function() {
//                             var t = this;
//                             this.scrollContainer.style.position = "static";
//                             var e = this.smoothScrollPos;
//                             this.applyTransform(0, 0),
//                             requestAnimationFrame(function() {
//                                 t.scrollContainer.style.position = "fixed";
//                                 var o = t.horizontalScroll ? e : 0
//                                   , n = t.horizontalScroll ? 0 : e;
//                                 t.applyTransform(o, n)
//                             })
//                         }
//                     }]) && F(e.prototype, o),
//                     n && F(e, n),
//                     t
//                 }();
//                 function H(t, e) {
//                     for (var o = 0; o < e.length; o++) {
//                         var n = e[o];
//                         n.enumerable = n.enumerable || !1,
//                         n.configurable = !0,
//                         "value"in n && (n.writable = !0),
//                         Object.defineProperty(t, n.key, n)
//                     }
//                 }
//                 o.d(e, "default", function() {
//                     return I
//                 });
//                 var I = function() {
//                     function t() {
//                         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
//                           , o = e.element
//                           , n = void 0 === o ? ".asscroll-container" : o
//                           , r = e.innerElement
//                           , i = void 0 === r ? "[data-asscroll]" : r
//                           , s = e.ease
//                           , l = void 0 === s ? .075 : s
//                           , c = e.touchEase
//                           , a = void 0 === c ? 1 : c
//                           , u = e.customScrollbar
//                           , h = void 0 === u || u
//                           , f = e.scrollbarEl
//                           , d = void 0 === f ? ".asscrollbar" : f
//                           , p = e.scrollbarHandleEl
//                           , v = void 0 === p ? ".asscrollbar__handle" : p
//                           , m = e.scrollbarStyles
//                           , y = void 0 === m || m
//                           , g = e.disableNativeScrollbar
//                           , b = void 0 === g || g
//                           , S = e.disableOnTouch
//                           , w = void 0 === S || S
//                           , x = e.disableRaf
//                           , E = void 0 !== x && x
//                           , O = e.disableResize
//                           , T = void 0 !== O && O
//                           , P = e.limitLerpRate
//                           , R = void 0 === P || P
//                           , M = e.blockScrollClass
//                           , C = void 0 === M ? ".asscroll-block" : M;
//                         !function(t, e) {
//                             if (!(t instanceof e))
//                                 throw new TypeError("Cannot call a class as a function")
//                         }(this, t),
//                         k.bindAll(this, ["enable", "disable", "on", "scrollTo", "onRaf", "onResize"]),
//                         this.Events = new L({
//                             disableRaf: E,
//                             disableResize: T
//                         }),
//                         this.Scroll = new D({
//                             element: n,
//                             innerElement: i,
//                             ease: l,
//                             touchEase: a,
//                             customScrollbar: h,
//                             scrollbarEl: d,
//                             scrollbarHandleEl: v,
//                             scrollbarStyles: y,
//                             disableNativeScrollbar: b,
//                             disableOnTouch: w,
//                             limitLerpRate: R,
//                             blockScrollClass: C
//                         })
//                     }
//                     var e, o, n;
//                     return e = t,
//                     (o = [{
//                         key: "enable",
//                         value: function() {
//                             var t;
//                             (t = this.Scroll).enable.apply(t, arguments)
//                         }
//                     }, {
//                         key: "disable",
//                         value: function() {
//                             var t;
//                             (t = this.Scroll).disable.apply(t, arguments)
//                         }
//                     }, {
//                         key: "onRaf",
//                         value: function() {
//                             this.Events.onRaf()
//                         }
//                     }, {
//                         key: "onResize",
//                         value: function() {
//                             var t;
//                             (t = this.Events).onResize.apply(t, arguments)
//                         }
//                     }, {
//                         key: "on",
//                         value: function(t, e) {
//                             "scroll" === t && k.on(r.a.events.COMBOSCROLL, e),
//                             "raf" === t && k.on(r.a.events.EXTERNALRAF, e)
//                         }
//                     }, {
//                         key: "off",
//                         value: function(t, e) {
//                             "scroll" === t && k.off(r.a.events.COMBOSCROLL, e),
//                             "raf" === t && k.off(r.a.events.EXTERNALRAF, e)
//                         }
//                     }, {
//                         key: "scrollTo",
//                         value: function(t) {
//                             var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
//                             this.Scroll.scrollTo(-t, e)
//                         }
//                     }, {
//                         key: "scrollPos",
//                         get: function() {
//                             return this.Scroll.scrollPos
//                         }
//                     }, {
//                         key: "smoothScrollPos",
//                         get: function() {
//                             return this.Scroll.smoothScrollPos
//                         }
//                     }]) && H(e.prototype, o),
//                     n && H(e, n),
//                     t
//                 }()
//             }
//             ])
//         });
//     }
//     , {
//         "process": "pBGv"
//     }],
//     "QzAk": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = r(require("@babel/runtime/helpers/classCallCheck"))
//           , t = r(require("@babel/runtime/helpers/createClass"))
//           , a = require("gsap")
//           , l = r(require("gsap/ScrollTrigger"))
//           , n = r(require("@ashthornton/asscroll"))
//           , o = r(require("./Utils"));
//         function r(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         a.gsap.registerPlugin(l.default);
//         var i = {
//             instance: null,
//             onScrollCallback: null,
//             onRafCallback: null,
//             data: {}
//         }
//           , c = function() {
//             function a() {
//                 (0,
//                 e.default)(this, a)
//             }
//             return (0,
//             t.default)(a, null, [{
//                 key: "init",
//                 value: function() {
//                     if (i.instance = new n.default({
//                         disableRaf: !0,
//                         scrollbarStyles: !1,
//                         customScrollbar: !1
//                     }),
//                     i.data = {
//                         velocity: 0,
//                         prevScroll: 0,
//                         viewportHeight: window.innerHeight,
//                         viewportWidth: window.innerWidth,
//                         isTouch: o.default.isTouch(),
//                         wrapper: document.querySelector("[data-router-wrapper]"),
//                         view: null
//                     },
//                     i.data.isTouch) {
//                         window.APP.scroll_events.push(function() {
//                             var e = i.data.view.clientHeight - window.innerHeight
//                               , t = i.data.wrapper.scrollTop / e
//                               , a = isNaN(t) ? 0 : t;
//                             document.documentElement.style.setProperty("--scroll-value", Math.min(a, 100));
//                             var n = i.data.view.scrollTop / window.innerHeight;
//                             document.documentElement.style.setProperty("--viewport-scroll-value", Math.min(n, 1)),
//                             l.default.update()
//                         })
//                     } else
//                         l.default.scrollerProxy("[data-router-view]", {
//                             scrollTop: function(e) {
//                                 return a.get() ? arguments.length ? a.scrollTo(e) : -a.get().smoothScrollPos : 0
//                             },
//                             getBoundingClientRect: function() {
//                                 return {
//                                     top: 0,
//                                     left: 0,
//                                     width: i.data.viewportWidth,
//                                     height: i.data.viewportHeight
//                                 }
//                             }
//                         }),
//                         i.onRafCallback = function(e) {
//                             var t = e.smoothScrollPos;
//                             i.data.velocity = (t - i.data.prevScroll) / i.data.viewportHeight * 100,
//                             i.data.prevScroll = t,
//                             l.default.update();
//                             var n = Math.abs(a.get().Scroll.maxScroll)
//                               , o = Math.abs(t) / n
//                               , r = isNaN(o) ? 0 : o;
//                             document.documentElement.style.setProperty("--scroll-value", Math.min(r, 100));
//                             var c = Math.abs(t) / i.data.viewportHeight;
//                             document.documentElement.style.setProperty("--viewport-scroll-value", Math.min(c, 1)),
//                             Math.abs(i.data.velocity) > .5 ? document.body.classList.add("is-scrolling") : document.body.classList.remove("is-scrolling")
//                         }
//                         ,
//                         i.onScrollCallback = function() {
//                             window.APP.scroll_events.forEach(function(e) {
//                                 return e()
//                             })
//                         }
//                         ,
//                         i.instance.on("raf", i.onRafCallback),
//                         i.instance.on("scroll", i.onScrollCallback)
//                 }
//             }, {
//                 key: "get",
//                 value: function() {
//                     return i.instance
//                 }
//             }, {
//                 key: "getData",
//                 value: function() {
//                     return i.data
//                 }
//             }, {
//                 key: "enable",
//                 value: function() {
//                     var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
//                       , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
//                     i.instance.enable(e, t, document.querySelector("[data-router-view]"))
//                 }
//             }, {
//                 key: "disable",
//                 value: function() {
//                     i.instance.disable()
//                 }
//             }, {
//                 key: "onRaf",
//                 value: function() {
//                     i.instance.onRaf()
//                 }
//             }, {
//                 key: "onResize",
//                 value: function() {
//                     var e;
//                     i.data.viewportHeight = window.innerHeight,
//                     i.data.viewportWidth = window.innerWidth,
//                     null === (e = i.instance) || void 0 === e || e.onResize(i.data.viewportWidth, i.data.viewportHeight)
//                 }
//             }, {
//                 key: "scrollTo",
//                 value: function(e) {
//                     var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
//                     i.instance.scrollTo(e, t)
//                 }
//             }, {
//                 key: "updateView",
//                 value: function() {
//                     i.data.view = document.querySelector("[data-router-view]")
//                 }
//             }]),
//             a
//         }();
//         exports.default = c;
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "gsap": "TpQl",
//         "gsap/ScrollTrigger": "TgBN",
//         "@ashthornton/asscroll": "B3oH",
//         "./Utils": "FR9S"
//     }],
//     "PyXF": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.runRAF = i,
//         exports.stopRAF = u,
//         exports.clearRAFItems = c;
//         var e = n(require("./SmoothScroll"))
//           , r = n(require("./Utils"))
//           , t = require("gsap");
//         function n(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         r.default.isTouch() && document.querySelector("[data-router-wrapper]").addEventListener("scroll", function() {
//             window.APP.scroll_events.forEach(function(e) {
//                 return e()
//             })
//         }, {
//             passive: !0
//         });
//         var o = r.default.throttle(function() {
//             e.default.onResize(),
//             window.APP.resize_events.forEach(function(e) {
//                 return e()
//             })
//         }, 25);
//         function i() {
//             t.gsap.ticker.add(window.APP.rAF.callback)
//         }
//         function u() {
//             t.gsap.ticker.remove(window.APP.rAF.callback)
//         }
//         function c() {
//             window.APP.rAF.items.forEach(function(e) {
//                 return e.destroy()
//             }),
//             window.APP.rAF.items = []
//         }
//         window.addEventListener("resize", o),
//         window.APP.rAF.callback = function() {
//             e.default.onRaf(),
//             window.APP.rAF.items.length > 0 && window.APP.rAF.items.forEach(function(e) {
//                 return e.render()
//             })
//         }
//         ;
//     }
//     , {
//         "./SmoothScroll": "QzAk",
//         "./Utils": "FR9S",
//         "gsap": "TpQl"
//     }],
//     "CRQX": [function(require, module, exports) {
//         "use strict";
//         function t() {}
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0,
//         t.prototype = {
//             on: function(t, e, r) {
//                 var i = this.e || (this.e = {});
//                 return (i[t] || (i[t] = [])).push({
//                     fn: e,
//                     ctx: r
//                 }),
//                 this
//             },
//             once: function(t, e, r) {
//                 var i = this;
//                 function n() {
//                     i.off(t, n),
//                     e.apply(r, arguments)
//                 }
//                 return n._ = e,
//                 this.on(t, n, r)
//             },
//             emit: function(t) {
//                 for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, n = r.length; i < n; i++)
//                     r[i].fn.apply(r[i].ctx, e);
//                 return this
//             },
//             off: function(t, e) {
//                 var r = this.e || (this.e = {})
//                   , i = r[t]
//                   , n = [];
//                 if (i && e)
//                     for (var o = 0, s = i.length; o < s; o++)
//                         i[o].fn !== e && i[o].fn._ !== e && n.push(i[o]);
//                 return n.length ? r[t] = n : delete r[t],
//                 this
//             }
//         };
//         var e = t;
//         e.TinyEmitter = t;
//         var r = function(t) {
//             this.wrap = document.querySelector("[data-router-wrapper]"),
//             this.properties = t,
//             this.Transition = t.transition ? new t.transition.class(this.wrap,t.transition.name) : null
//         };
//         r.prototype.setup = function() {
//             this.onEnter && this.onEnter(),
//             this.onEnterCompleted && this.onEnterCompleted()
//         }
//         ,
//         r.prototype.add = function() {
//             this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
//         }
//         ,
//         r.prototype.update = function() {
//             document.title = this.properties.page.title
//         }
//         ,
//         r.prototype.show = function(t) {
//             var e = this;
//             return new Promise(function(r) {
//                 try {
//                     function i(t) {
//                         e.onEnterCompleted && e.onEnterCompleted(),
//                         r()
//                     }
//                     return e.update(),
//                     e.onEnter && e.onEnter(),
//                     Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(i) : i())
//                 } catch (t) {
//                     return Promise.reject(t)
//                 }
//             }
//             )
//         }
//         ,
//         r.prototype.hide = function(t) {
//             var e = this;
//             return new Promise(function(r) {
//                 try {
//                     function i(t) {
//                         e.onLeaveCompleted && e.onLeaveCompleted(),
//                         r()
//                     }
//                     return e.onLeave && e.onLeave(),
//                     Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(i) : i())
//                 } catch (t) {
//                     return Promise.reject(t)
//                 }
//             }
//             )
//         }
//         ;
//         var i = new window.DOMParser
//           , n = function(t, e) {
//             this.renderers = t,
//             this.transitions = e
//         };
//         n.prototype.getOrigin = function(t) {
//             var e = t.match(/(https?:\/\/[\w\-.]+)/);
//             return e ? e[1].replace(/https?:\/\//, "") : null
//         }
//         ,
//         n.prototype.getPathname = function(t) {
//             var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
//             return e ? e[1] : "/"
//         }
//         ,
//         n.prototype.getAnchor = function(t) {
//             var e = t.match(/(#.*)$/);
//             return e ? e[1] : null
//         }
//         ,
//         n.prototype.getParams = function(t) {
//             var e = t.match(/\?([\w_\-.=&]+)/);
//             if (!e)
//                 return null;
//             for (var r = e[1].split("&"), i = {}, n = 0; n < r.length; n++) {
//                 var o = r[n].split("=");
//                 i[o[0]] = o[1]
//             }
//             return i
//         }
//         ,
//         n.prototype.getDOM = function(t) {
//             return "string" == typeof t ? i.parseFromString(t, "text/html") : t
//         }
//         ,
//         n.prototype.getView = function(t) {
//             return t.querySelector("[data-router-view]")
//         }
//         ,
//         n.prototype.getSlug = function(t) {
//             return t.getAttribute("data-router-view")
//         }
//         ,
//         n.prototype.getRenderer = function(t) {
//             if (!this.renderers)
//                 return Promise.resolve(r);
//             if (t in this.renderers) {
//                 var e = this.renderers[t];
//                 return "function" != typeof e || r.isPrototypeOf(e) ? "function" == typeof e.then ? Promise.resolve(e).then(function(t) {
//                     return t.default
//                 }) : Promise.resolve(e) : Promise.resolve(e()).then(function(t) {
//                     return t.default
//                 })
//             }
//             return Promise.resolve(r)
//         }
//         ,
//         n.prototype.getTransition = function(t) {
//             return this.transitions ? t in this.transitions ? {
//                 class: this.transitions[t],
//                 name: t
//             } : "default"in this.transitions ? {
//                 class: this.transitions.default,
//                 name: "default"
//             } : null : null
//         }
//         ,
//         n.prototype.getProperties = function(t) {
//             var e = this.getDOM(t)
//               , r = this.getView(e)
//               , i = this.getSlug(r);
//             return {
//                 page: e,
//                 view: r,
//                 slug: i,
//                 renderer: this.getRenderer(i, this.renderers),
//                 transition: this.getTransition(i, this.transitions)
//             }
//         }
//         ,
//         n.prototype.getLocation = function(t) {
//             return {
//                 href: t,
//                 anchor: this.getAnchor(t),
//                 origin: this.getOrigin(t),
//                 params: this.getParams(t),
//                 pathname: this.getPathname(t)
//             }
//         }
//         ;
//         var o = function(t) {
//             function e(e) {
//                 var r = this;
//                 void 0 === e && (e = {});
//                 var i = e.renderers
//                   , o = e.transitions;
//                 t.call(this),
//                 this.Helpers = new n(i,o),
//                 this.Transitions = o,
//                 this.Contextual = !1,
//                 this.location = this.Helpers.getLocation(window.location.href),
//                 this.properties = this.Helpers.getProperties(document.cloneNode(!0)),
//                 this.popping = !1,
//                 this.running = !1,
//                 this.trigger = null,
//                 this.cache = new Map,
//                 this.cache.set(this.location.href, this.properties),
//                 this.properties.renderer.then(function(t) {
//                     r.From = new t(r.properties),
//                     r.From.setup()
//                 }),
//                 this._navigate = this.navigate.bind(this),
//                 window.addEventListener("popstate", this.popState.bind(this)),
//                 this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"),
//                 this.attach(this.links)
//             }
//             return t && (e.__proto__ = t),
//             (e.prototype = Object.create(t && t.prototype)).constructor = e,
//             e.prototype.attach = function(t) {
//                 for (var e = 0, r = t; e < r.length; e += 1)
//                     r[e].addEventListener("click", this._navigate)
//             }
//             ,
//             e.prototype.detach = function(t) {
//                 for (var e = 0, r = t; e < r.length; e += 1)
//                     r[e].removeEventListener("click", this._navigate)
//             }
//             ,
//             e.prototype.navigate = function(t) {
//                 if (!t.metaKey && !t.ctrlKey) {
//                     t.preventDefault();
//                     var e = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
//                     this.redirect(t.currentTarget.href, e, t.currentTarget)
//                 }
//             }
//             ,
//             e.prototype.redirect = function(t, e, r) {
//                 if (void 0 === e && (e = !1),
//                 void 0 === r && (r = "script"),
//                 this.trigger = r,
//                 !this.running && t !== this.location.href) {
//                     var i = this.Helpers.getLocation(t);
//                     this.Contextual = !1,
//                     e && (this.Contextual = this.Transitions.contextual[e].prototype,
//                     this.Contextual.name = e),
//                     i.origin !== this.location.origin || i.anchor && i.pathname === this.location.pathname ? window.location.href = t : (this.location = i,
//                     this.beforeFetch())
//                 }
//             }
//             ,
//             e.prototype.popState = function() {
//                 this.trigger = "popstate",
//                 this.Contextual = !1;
//                 var t = this.Helpers.getLocation(window.location.href);
//                 this.location.pathname !== t.pathname || !this.location.anchor && !t.anchor ? (this.popping = !0,
//                 this.location = t,
//                 this.beforeFetch()) : this.location = t
//             }
//             ,
//             e.prototype.pushState = function() {
//                 this.popping || window.history.pushState(this.location, "", this.location.href)
//             }
//             ,
//             e.prototype.fetch = function() {
//                 try {
//                     var t = this;
//                     return Promise.resolve(fetch(t.location.href, {
//                         mode: "same-origin",
//                         method: "GET",
//                         headers: {
//                             "X-Requested-With": "Highway"
//                         },
//                         credentials: "same-origin"
//                     })).then(function(e) {
//                         if (e.status >= 200 && e.status < 300)
//                             return e.text();
//                         window.location.href = t.location.href
//                     })
//                 } catch (t) {
//                     return Promise.reject(t)
//                 }
//             }
//             ,
//             e.prototype.beforeFetch = function() {
//                 try {
//                     var t = this;
//                     function e() {
//                         t.afterFetch()
//                     }
//                     t.pushState(),
//                     t.running = !0,
//                     t.emit("NAVIGATE_OUT", {
//                         from: {
//                             page: t.From.properties.page,
//                             view: t.From.properties.view
//                         },
//                         trigger: t.trigger,
//                         location: t.location
//                     });
//                     var r = {
//                         trigger: t.trigger,
//                         contextual: t.Contextual
//                     }
//                       , i = t.cache.has(t.location.href) ? Promise.resolve(t.From.hide(r)).then(function() {
//                         t.properties = t.cache.get(t.location.href)
//                     }) : Promise.resolve(Promise.all([t.fetch(), t.From.hide(r)])).then(function(e) {
//                         t.properties = t.Helpers.getProperties(e[0]),
//                         t.cache.set(t.location.href, t.properties)
//                     });
//                     return Promise.resolve(i && i.then ? i.then(e) : e())
//                 } catch (t) {
//                     return Promise.reject(t)
//                 }
//             }
//             ,
//             e.prototype.afterFetch = function() {
//                 try {
//                     var t = this;
//                     return Promise.resolve(t.properties.renderer).then(function(e) {
//                         return t.To = new e(t.properties),
//                         t.To.add(),
//                         t.emit("NAVIGATE_IN", {
//                             to: {
//                                 page: t.To.properties.page,
//                                 view: t.To.wrap.lastElementChild
//                             },
//                             trigger: t.trigger,
//                             location: t.location
//                         }),
//                         Promise.resolve(t.To.show({
//                             trigger: t.trigger,
//                             contextual: t.Contextual
//                         })).then(function() {
//                             t.popping = !1,
//                             t.running = !1,
//                             t.detach(t.links),
//                             t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"),
//                             t.attach(t.links),
//                             t.emit("NAVIGATE_END", {
//                                 to: {
//                                     page: t.To.properties.page,
//                                     view: t.To.wrap.lastElementChild
//                                 },
//                                 from: {
//                                     page: t.From.properties.page,
//                                     view: t.From.properties.view
//                                 },
//                                 trigger: t.trigger,
//                                 location: t.location
//                             }),
//                             t.From = t.To,
//                             t.trigger = null
//                         })
//                     })
//                 } catch (t) {
//                     return Promise.reject(t)
//                 }
//             }
//             ,
//             e
//         }(e)
//           , s = function(t, e) {
//             this.wrap = t,
//             this.name = e
//         };
//         s.prototype.show = function(t) {
//             var e = this
//               , r = t.trigger
//               , i = t.contextual
//               , n = this.wrap.lastElementChild
//               , o = this.wrap.firstElementChild;
//             return new Promise(function(t) {
//                 i ? (n.setAttribute("data-transition-in", i.name),
//                 n.removeAttribute("data-transition-out", i.name),
//                 i.in && i.in({
//                     to: n,
//                     from: o,
//                     trigger: r,
//                     done: t
//                 })) : (n.setAttribute("data-transition-in", e.name),
//                 n.removeAttribute("data-transition-out", e.name),
//                 e.in && e.in({
//                     to: n,
//                     from: o,
//                     trigger: r,
//                     done: t
//                 }))
//             }
//             )
//         }
//         ,
//         s.prototype.hide = function(t) {
//             var e = this
//               , r = t.trigger
//               , i = t.contextual
//               , n = this.wrap.firstElementChild;
//             return new Promise(function(t) {
//                 i ? (n.setAttribute("data-transition-out", i.name),
//                 n.removeAttribute("data-transition-in", i.name),
//                 i.out && i.out({
//                     from: n,
//                     trigger: r,
//                     done: t
//                 })) : (n.setAttribute("data-transition-out", e.name),
//                 n.removeAttribute("data-transition-in", e.name),
//                 e.out && e.out({
//                     from: n,
//                     trigger: r,
//                     done: t
//                 }))
//             }
//             )
//         }
//         ,
//         console.log("Highway v2.2.0");
//         var a = {
//             Core: o,
//             Helpers: n,
//             Renderer: r,
//             Transition: s
//         };
//         exports.default = a;
//     }
//     , {}],
//     "Vn4J": [function(require, module, exports) {
//         function e(e) {
//             return new Promise(function(n, t, r) {
//                 (r = new XMLHttpRequest).open("GET", e, r.withCredentials = !0),
//                 r.onload = function() {
//                     200 === r.status ? n() : t()
//                 }
//                 ,
//                 r.send()
//             }
//             )
//         }
//         function n(n) {
//             return window.fetch ? fetch(n, {
//                 credentials: "include"
//             }) : e(n)
//         }
//         var t, r = (t = document.createElement("link")).relList && t.relList.supports && t.relList.supports("prefetch") ? function(e) {
//             return new Promise(function(n, t, r) {
//                 (r = document.createElement("link")).rel = "prefetch",
//                 r.href = e,
//                 r.onload = n,
//                 r.onerror = t,
//                 document.head.appendChild(r)
//             }
//             )
//         }
//         : e, o = window.requestIdleCallback || function(e) {
//             var n = Date.now();
//             return setTimeout(function() {
//                 e({
//                     didTimeout: !1,
//                     timeRemaining: function() {
//                         return Math.max(0, 50 - (Date.now() - n))
//                     }
//                 })
//             }, 1)
//         }
//         , i = new Set;
//         function c(e, t, o) {
//             if (o = navigator.connection) {
//                 if (o.saveData)
//                     return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));
//                 if (/2g/.test(o.effectiveType))
//                     return Promise.reject(new Error("Cannot prefetch, network conditions are poor"))
//             }
//             return Promise.all([].concat(e).map(function(e) {
//                 if (!i.has(e))
//                     return i.add(e),
//                     (t ? n : r)(new URL(e,location.href).toString())
//             }))
//         }
//         exports.listen = function(e) {
//             if (e || (e = {}),
//             window.IntersectionObserver) {
//                 var n = function(e) {
//                     e = e || 1;
//                     var n = []
//                       , t = 0;
//                     function r() {
//                         t < e && n.length > 0 && (n.shift()(),
//                         t++)
//                     }
//                     return [function(e) {
//                         n.push(e) > 1 || r()
//                     }
//                     , function() {
//                         t--,
//                         r()
//                     }
//                     ]
//                 }(e.throttle || 1 / 0)
//                   , t = n[0]
//                   , r = n[1]
//                   , u = e.limit || 1 / 0
//                   , f = e.origins || [location.hostname]
//                   , a = e.ignores || []
//                   , s = e.delay || 0
//                   , l = []
//                   , h = e.timeoutFn || o
//                   , d = "function" == typeof e.hrefFn && e.hrefFn
//                   , m = new IntersectionObserver(function(n) {
//                     n.forEach(function(n) {
//                         if (n.isIntersecting)
//                             l.push((n = n.target).href),
//                             function(e, n) {
//                                 s ? setTimeout(e, s) : e()
//                             }(function() {
//                                 -1 !== l.indexOf(n.href) && (m.unobserve(n),
//                                 i.size < u && t(function() {
//                                     c(d ? d(n) : n.href, e.priority).then(r).catch(function(n) {
//                                         r(),
//                                         e.onError && e.onError(n)
//                                     })
//                                 }))
//                             });
//                         else {
//                             var o = l.indexOf((n = n.target).href);
//                             o > -1 && l.splice(o)
//                         }
//                     })
//                 }
//                 );
//                 return h(function() {
//                     (e.el || document).querySelectorAll("a").forEach(function(e) {
//                         f.length && !f.includes(e.hostname) || function e(n, t) {
//                             return Array.isArray(t) ? t.some(function(t) {
//                                 return e(n, t)
//                             }) : (t.test || t).call(t, n.href, n)
//                         }(e, a) || m.observe(e)
//                     })
//                 }, {
//                     timeout: e.timeout || 2e3
//                 }),
//                 function() {
//                     i.clear(),
//                     m.disconnect()
//                 }
//             }
//         }
//         ,
//         exports.prefetch = c;
//     }
//     , {}],
//     "mNyN": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.throwWarning = o,
//         exports.throwError = e,
//         exports.generateUUID = t,
//         exports.isPowerOf2 = x,
//         exports.lerp = n;
//         let r = 0;
//         function o() {
//             if (!(r > 100)) {
//                 if (100 === r)
//                     console.warn("Curtains: too many warnings thrown, stop logging.");
//                 else {
//                     const r = Array.prototype.slice.call(arguments);
//                     console.warn.apply(console, r)
//                 }
//                 r++
//             }
//         }
//         function e() {
//             const r = Array.prototype.slice.call(arguments);
//             console.error.apply(console, r)
//         }
//         function t() {
//             return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, r=>{
//                 let o = 16 * Math.random() | 0;
//                 return ("x" === r ? o : 3 & o | 8).toString(16).toUpperCase()
//             }
//             )
//         }
//         function x(r) {
//             return 0 == (r & r - 1)
//         }
//         function n(r, o, e) {
//             return (1 - e) * r + e * o
//         }
//     }
//     , {}],
//     "wcBW": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Scene = void 0;
//         var e = require("../utils/utils.js");
//         class s {
//             constructor(s) {
//                 this.type = "Scene",
//                 s && "Renderer" === s.type ? s.gl || (0,
//                 e.throwError)(this.type + ": Renderer WebGL context is undefined", s) : (0,
//                 e.throwError)(this.type + ": Renderer not passed as first argument", s),
//                 this.renderer = s,
//                 this.gl = s.gl,
//                 this.initStacks()
//             }
//             initStacks() {
//                 this.stacks = {
//                     pingPong: [],
//                     renderTargets: [],
//                     opaque: [],
//                     transparent: [],
//                     renderPasses: [],
//                     scenePasses: []
//                 }
//             }
//             resetPlaneStacks() {
//                 this.stacks.pingPong = [],
//                 this.stacks.renderTargets = [],
//                 this.stacks.opaque = [],
//                 this.stacks.transparent = [];
//                 for (let e = 0; e < this.renderer.planes.length; e++)
//                     this.addPlane(this.renderer.planes[e])
//             }
//             resetShaderPassStacks() {
//                 this.stacks.scenePasses = [],
//                 this.stacks.renderPasses = [];
//                 for (let e = 0; e < this.renderer.shaderPasses.length; e++)
//                     this.renderer.shaderPasses[e].index = e,
//                     this.renderer.shaderPasses[e]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[e]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[e]);
//                 0 === this.stacks.scenePasses.length && (this.renderer.state.scenePassIndex = null)
//             }
//             addToRenderTargetsStack(e) {
//                 const s = this.renderer.planes.filter(s=>"PingPongPlane" !== s.type && s.target && s.uuid !== e.uuid);
//                 let t = -1;
//                 if (e.target._depth) {
//                     for (let r = s.length - 1; r >= 0; r--)
//                         if (s[r].target.uuid === e.target.uuid) {
//                             t = r + 1;
//                             break
//                         }
//                 } else
//                     t = s.findIndex(s=>s.target.uuid === e.target.uuid);
//                 t = Math.max(0, t),
//                 s.splice(t, 0, e),
//                 e.target._depth ? (s.sort((e,s)=>e.index - s.index),
//                 s.sort((e,s)=>s.renderOrder - e.renderOrder)) : (s.sort((e,s)=>s.index - e.index),
//                 s.sort((e,s)=>e.renderOrder - s.renderOrder)),
//                 s.sort((e,s)=>e.target.index - s.target.index),
//                 this.stacks.renderTargets = s
//             }
//             addToRegularPlaneStack(e) {
//                 const s = this.renderer.planes.filter(s=>"PingPongPlane" !== s.type && !s.target && s._transparent === e._transparent && s.uuid !== e.uuid);
//                 let t = -1;
//                 for (let r = s.length - 1; r >= 0; r--)
//                     if (s[r]._geometry.definition.id === e._geometry.definition.id) {
//                         t = r + 1;
//                         break
//                     }
//                 return t = Math.max(0, t),
//                 s.splice(t, 0, e),
//                 s.sort((e,s)=>e.index - s.index),
//                 s
//             }
//             addPlane(e) {
//                 if ("PingPongPlane" === e.type)
//                     this.stacks.pingPong.push(e);
//                 else if (e.target)
//                     this.addToRenderTargetsStack(e);
//                 else if (e._transparent) {
//                     const s = this.addToRegularPlaneStack(e);
//                     s.sort((e,s)=>s.relativeTranslation.z - e.relativeTranslation.z),
//                     s.sort((e,s)=>s.renderOrder - e.renderOrder),
//                     this.stacks.transparent = s
//                 } else {
//                     const s = this.addToRegularPlaneStack(e);
//                     s.sort((e,s)=>s.renderOrder - e.renderOrder),
//                     this.stacks.opaque = s
//                 }
//             }
//             removePlane(e) {
//                 "PingPongPlane" === e.type ? this.stacks.pingPong = this.stacks.pingPong.filter(s=>s.uuid !== e.uuid) : e.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter(s=>s.uuid !== e.uuid) : e._transparent ? this.stacks.transparent = this.stacks.transparent.filter(s=>s.uuid !== e.uuid) : this.stacks.opaque = this.stacks.opaque.filter(s=>s.uuid !== e.uuid)
//             }
//             setPlaneRenderOrder(e) {
//                 if ("ShaderPass" === e.type)
//                     this.sortShaderPassStack(e._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
//                 else if ("PingPongPlane" === e.type)
//                     return;
//                 if (e.target)
//                     e.target._depth ? (this.stacks.renderTargets.sort((e,s)=>e.index - s.index),
//                     this.stacks.renderTargets.sort((e,s)=>s.renderOrder - e.renderOrder)) : (this.stacks.renderTargets.sort((e,s)=>s.index - e.index),
//                     this.stacks.renderTargets.sort((e,s)=>e.renderOrder - s.renderOrder)),
//                     this.stacks.renderTargets.sort((e,s)=>e.target.index - s.target.index);
//                 else {
//                     const s = e._transparent ? this.stacks.transparent : this.stacks.opaque
//                       , t = this.stacks.scenePasses.find((e,s)=>e._isScenePass && !e._depth && 0 === s);
//                     !this.renderer.depth || t ? (s.sort((e,s)=>s.index - e.index),
//                     e._transparent && s.sort((e,s)=>e.relativeTranslation.z - s.relativeTranslation.z),
//                     s.sort((e,s)=>e.renderOrder - s.renderOrder)) : (s.sort((e,s)=>e.index - s.index),
//                     e._transparent && s.sort((e,s)=>s.relativeTranslation.z - e.relativeTranslation.z),
//                     s.sort((e,s)=>s.renderOrder - e.renderOrder))
//                 }
//             }
//             addShaderPass(e) {
//                 e._isScenePass ? (this.stacks.scenePasses.push(e),
//                 this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(e),
//                 this.sortShaderPassStack(this.stacks.renderPasses))
//             }
//             removeShaderPass(e) {
//                 this.resetShaderPassStacks()
//             }
//             sortShaderPassStack(e) {
//                 e.sort((e,s)=>e.index - s.index),
//                 e.sort((e,s)=>e.renderOrder - s.renderOrder)
//             }
//             enableShaderPass() {
//                 this.stacks.scenePasses.length && 0 === this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0,
//                 this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
//             }
//             drawRenderPasses() {
//                 this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0,
//                 this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
//                 for (let e = 0; e < this.stacks.renderPasses.length; e++)
//                     this.stacks.renderPasses[e]._startDrawing(),
//                     this.renderer.clearDepth()
//             }
//             drawScenePasses() {
//                 for (let e = 0; e < this.stacks.scenePasses.length; e++)
//                     this.stacks.scenePasses[e]._startDrawing()
//             }
//             drawPingPongStack() {
//                 for (let e = 0; e < this.stacks.pingPong.length; e++) {
//                     const s = this.stacks.pingPong[e];
//                     s && s._startDrawing()
//                 }
//             }
//             drawStack(e) {
//                 for (let s = 0; s < this.stacks[e].length; s++) {
//                     const t = this.stacks[e][s];
//                     t && t._startDrawing()
//                 }
//             }
//             draw() {
//                 this.drawPingPongStack(),
//                 this.enableShaderPass(),
//                 this.drawStack("renderTargets"),
//                 this.drawRenderPasses(),
//                 this.drawStack("transparent"),
//                 this.drawStack("opaque"),
//                 this.drawScenePasses()
//             }
//         }
//         exports.Scene = s;
//     }
//     , {
//         "../utils/utils.js": "mNyN"
//     }],
//     "OAxy": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.CacheManager = void 0;
//         class e {
//             constructor() {
//                 this.geometries = [],
//                 this.clear()
//             }
//             clear() {
//                 this.textures = [],
//                 this.programs = []
//             }
//             getGeometryFromID(e) {
//                 return this.geometries.find(r=>r.id === e)
//             }
//             addGeometry(e, r, t) {
//                 this.geometries.push({
//                     id: e,
//                     vertices: r,
//                     uvs: t
//                 })
//             }
//             isSameShader(e, r) {
//                 return 0 === e.localeCompare(r)
//             }
//             getProgramFromShaders(e, r) {
//                 return this.programs.find(t=>this.isSameShader(t.vsCode, e) && this.isSameShader(t.fsCode, r))
//             }
//             addProgram(e) {
//                 this.programs.push(e)
//             }
//             getTextureFromSource(e) {
//                 const r = "string" == typeof e ? e : e.src;
//                 return this.textures.find(e=>e.source && e.source.src === r)
//             }
//             addTexture(e) {
//                 this.getTextureFromSource(e.source) || this.textures.push(e)
//             }
//             removeTexture(e) {
//                 this.textures = this.textures.filter(r=>r.uuid !== e.uuid)
//             }
//         }
//         exports.CacheManager = e;
//     }
//     , {}],
//     "qZdS": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.CallbackQueueManager = void 0;
//         class e {
//             constructor() {
//                 this.clear()
//             }
//             clear() {
//                 this.queue = []
//             }
//             add(e, t=!1) {
//                 const u = {
//                     callback: e,
//                     keep: t,
//                     timeout: null
//                 };
//                 return u.timeout = setTimeout(()=>{
//                     this.queue.push(u)
//                 }
//                 , 0),
//                 u
//             }
//             execute() {
//                 this.queue.map(e=>{
//                     e.callback && e.callback(),
//                     clearTimeout(this.queue.timeout)
//                 }
//                 ),
//                 this.queue = this.queue.filter(e=>e.keep)
//             }
//         }
//         exports.CallbackQueueManager = e;
//     }
//     , {}],
//     "pNJo": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Renderer = void 0;
//         var e = require("./Scene.js")
//           , t = require("../utils/CacheManager.js")
//           , s = require("../utils/CallbackQueueManager.js")
//           , i = require("../utils/utils.js");
//         class n {
//             constructor({alpha: e, antialias: t, premultipliedAlpha: s, depth: n, failIfMajorPerformanceCaveat: r, preserveDrawingBuffer: h, stencil: a, container: l, pixelRatio: o, renderingScale: g, production: d, onError: c, onContextLost: u, onContextRestored: _, onDisposed: x, onSceneChange: f}) {
//                 this.type = "Renderer",
//                 this.alpha = e,
//                 this.antialias = t,
//                 this.premultipliedAlpha = s,
//                 this.depth = n,
//                 this.failIfMajorPerformanceCaveat = r,
//                 this.preserveDrawingBuffer = h,
//                 this.stencil = a,
//                 this.container = l,
//                 this.pixelRatio = o,
//                 this._renderingScale = g,
//                 this.production = d,
//                 this.onError = c,
//                 this.onContextLost = u,
//                 this.onContextRestored = _,
//                 this.onDisposed = x,
//                 this.onSceneChange = f,
//                 this.initState(),
//                 this.canvas = document.createElement("canvas");
//                 const p = {
//                     alpha: this.alpha,
//                     premultipliedAlpha: this.premultipliedAlpha,
//                     antialias: this.antialias,
//                     depth: this.depth,
//                     failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
//                     preserveDrawingBuffer: this.preserveDrawingBuffer,
//                     stencil: this.stencil
//                 };
//                 if (this.gl = this.canvas.getContext("webgl2", p),
//                 this._isWebGL2 = !!this.gl,
//                 this.gl || (this.gl = this.canvas.getContext("webgl", p) || this.canvas.getContext("experimental-webgl", p)),
//                 !this.gl)
//                     return this.production || (0,
//                     i.throwWarning)(this.type + ": WebGL context could not be created"),
//                     this.state.isActive = !1,
//                     void (this.onError && this.onError());
//                 this.initRenderer()
//             }
//             initState() {
//                 this.state = {
//                     isActive: !0,
//                     isContextLost: !0,
//                     drawingEnabled: !0,
//                     forceRender: !1,
//                     currentProgramID: null,
//                     currentGeometryID: null,
//                     forceBufferUpdate: !1,
//                     depthTest: null,
//                     cullFace: null,
//                     frameBufferID: null,
//                     scenePassIndex: null,
//                     activeTexture: null,
//                     unpackAlignment: null,
//                     flipY: null,
//                     premultiplyAlpha: null
//                 }
//             }
//             initCallbackQueueManager() {
//                 this.nextRender = new s.CallbackQueueManager
//             }
//             initRenderer() {
//                 this.planes = [],
//                 this.renderTargets = [],
//                 this.shaderPasses = [],
//                 this.state.isContextLost = !1,
//                 this.initCallbackQueueManager(),
//                 this.setBlendFunc(),
//                 this.setDepthTest(!0),
//                 this.cache = new t.CacheManager,
//                 this.scene = new e.Scene(this),
//                 this.getExtensions(),
//                 this._contextLostHandler = this.contextLost.bind(this),
//                 this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1),
//                 this._contextRestoredHandler = this.contextRestored.bind(this),
//                 this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
//             }
//             getExtensions() {
//                 this.extensions = [],
//                 this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"),
//                 this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"),
//                 this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"),
//                 this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"),
//                 this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"),
//                 this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"),
//                 this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"),
//                 this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"),
//                 this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"),
//                 this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"),
//                 this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"),
//                 this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"),
//                 this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"),
//                 this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"),
//                 this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
//             }
//             contextLost(e) {
//                 this.state.isContextLost = !0,
//                 this.state.isActive && (e.preventDefault(),
//                 this.nextRender.add(()=>this.onContextLost && this.onContextLost()))
//             }
//             restoreContext() {
//                 this.state.isActive && (this.initState(),
//                 this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (this.gl || this.production ? this.extensions.WEBGL_lose_context || this.production || (0,
//                 i.throwWarning)(this.type + ": Could not restore the context because the restore context extension is not defined") : (0,
//                 i.throwWarning)(this.type + ": Could not restore the context because the context is not defined"),
//                 this.onError && this.onError()))
//             }
//             isContextexFullyRestored() {
//                 let e = !0;
//                 for (let t = 0; t < this.renderTargets.length; t++) {
//                     this.renderTargets[t].textures[0]._canDraw || (e = !1);
//                     break
//                 }
//                 if (e)
//                     for (let t = 0; t < this.planes.length; t++) {
//                         if (!this.planes[t]._canDraw) {
//                             e = !1;
//                             break
//                         }
//                         for (let s = 0; s < this.planes[t].textures.length; s++)
//                             if (!this.planes[t].textures[s]._canDraw) {
//                                 e = !1;
//                                 break
//                             }
//                     }
//                 if (e)
//                     for (let t = 0; t < this.shaderPasses.length; t++) {
//                         if (!this.shaderPasses[t]._canDraw) {
//                             e = !1;
//                             break
//                         }
//                         for (let s = 0; s < this.shaderPasses[t].textures.length; s++)
//                             if (!this.shaderPasses[t].textures[s]._canDraw) {
//                                 e = !1;
//                                 break
//                             }
//                     }
//                 return e
//             }
//             contextRestored() {
//                 this.getExtensions(),
//                 this.setBlendFunc(),
//                 this.setDepthTest(!0),
//                 this.cache.clear(),
//                 this.scene.initStacks();
//                 for (let t = 0; t < this.renderTargets.length; t++)
//                     this.renderTargets[t]._restoreContext();
//                 for (let t = 0; t < this.planes.length; t++)
//                     this.planes[t]._restoreContext();
//                 for (let t = 0; t < this.shaderPasses.length; t++)
//                     this.shaderPasses[t]._restoreContext();
//                 const e = this.nextRender.add(()=>{
//                     this.isContextexFullyRestored() && (e.keep = !1,
//                     this.state.isContextLost = !1,
//                     this.onContextRestored && this.onContextRestored(),
//                     this.onSceneChange(),
//                     this.needRender())
//                 }
//                 , !0)
//             }
//             setPixelRatio(e) {
//                 this.pixelRatio = e
//             }
//             setSize() {
//                 if (!this.gl)
//                     return;
//                 const e = this.container.getBoundingClientRect();
//                 this._boundingRect = {
//                     width: e.width * this.pixelRatio,
//                     height: e.height * this.pixelRatio,
//                     top: e.top * this.pixelRatio,
//                     left: e.left * this.pixelRatio
//                 };
//                 const t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
//                   , s = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//                 if (t && s) {
//                     this._boundingRect.top = function(e) {
//                         let t = 0;
//                         for (; e && !isNaN(e.offsetTop); )
//                             t += e.offsetTop - e.scrollTop,
//                             e = e.offsetParent;
//                         return t
//                     }(this.container) * this.pixelRatio
//                 }
//                 this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px",
//                 this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px",
//                 this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale),
//                 this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale),
//                 this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
//             }
//             resize() {
//                 for (let e = 0; e < this.planes.length; e++)
//                     this.planes[e]._canDraw && this.planes[e].resize();
//                 for (let e = 0; e < this.shaderPasses.length; e++)
//                     this.shaderPasses[e]._canDraw && this.shaderPasses[e].resize();
//                 for (let e = 0; e < this.renderTargets.length; e++)
//                     this.renderTargets[e].resize();
//                 this.needRender()
//             }
//             clear() {
//                 this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
//             }
//             clearDepth() {
//                 this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
//             }
//             clearColor() {
//                 this.gl.clear(this.gl.COLOR_BUFFER_BIT)
//             }
//             bindFrameBuffer(e, t) {
//                 let s = null;
//                 e ? (s = e.index) !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer),
//                 this.gl.viewport(0, 0, e._size.width, e._size.height),
//                 e._shouldClear && !t && this.clear()) : null !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null),
//                 this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)),
//                 this.state.frameBufferID = s
//             }
//             setDepthTest(e) {
//                 e && !this.state.depthTest ? (this.state.depthTest = e,
//                 this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e,
//                 this.gl.disable(this.gl.DEPTH_TEST))
//             }
//             setBlendFunc() {
//                 this.gl.enable(this.gl.BLEND),
//                 this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
//             }
//             setFaceCulling(e) {
//                 if (this.state.cullFace !== e)
//                     if (this.state.cullFace = e,
//                     "none" === e)
//                         this.gl.disable(this.gl.CULL_FACE);
//                     else {
//                         const t = "front" === e ? this.gl.FRONT : this.gl.BACK;
//                         this.gl.enable(this.gl.CULL_FACE),
//                         this.gl.cullFace(t)
//                     }
//             }
//             useProgram(e) {
//                 null !== this.state.currentProgramID && this.state.currentProgramID === e.id || (this.gl.useProgram(e.program),
//                 this.state.currentProgramID = e.id)
//             }
//             removePlane(e) {
//                 this.gl && (this.planes = this.planes.filter(t=>t.uuid !== e.uuid),
//                 this.scene.removePlane(e),
//                 e = null,
//                 this.gl && this.clear(),
//                 this.onSceneChange())
//             }
//             removeRenderTarget(e) {
//                 if (!this.gl)
//                     return;
//                 let t = this.planes.find(t=>"PingPongPlane" !== t.type && t.target && t.target.uuid === e.uuid);
//                 for (let s = 0; s < this.planes.length; s++)
//                     this.planes[s].target && this.planes[s].target.uuid === e.uuid && (this.planes[s].target = null);
//                 this.renderTargets = this.renderTargets.filter(t=>t.uuid !== e.uuid);
//                 for (let s = 0; s < this.renderTargets.length; s++)
//                     this.renderTargets[s].index = s;
//                 e = null,
//                 this.gl && this.clear(),
//                 t && this.scene.resetPlaneStacks(),
//                 this.onSceneChange()
//             }
//             removeShaderPass(e) {
//                 this.gl && (this.shaderPasses = this.shaderPasses.filter(t=>t.uuid !== e.uuid),
//                 this.scene.removeShaderPass(e),
//                 e = null,
//                 this.gl && this.clear(),
//                 this.onSceneChange())
//             }
//             enableDrawing() {
//                 this.state.drawingEnabled = !0
//             }
//             disableDrawing() {
//                 this.state.drawingEnabled = !1
//             }
//             needRender() {
//                 this.state.forceRender = !0
//             }
//             render() {
//                 this.gl && (this.clear(),
//                 this.state.currentGeometryID = null,
//                 this.scene.draw())
//             }
//             deletePrograms() {
//                 for (let e = 0; e < this.cache.programs.length; e++) {
//                     const t = this.cache.programs[e];
//                     this.gl.deleteProgram(t.program)
//                 }
//             }
//             dispose() {
//                 if (!this.gl)
//                     return;
//                 for (this.state.isActive = !1; this.planes.length > 0; )
//                     this.removePlane(this.planes[0]);
//                 for (; this.shaderPasses.length > 0; )
//                     this.removeShaderPass(this.shaderPasses[0]);
//                 for (; this.renderTargets.length > 0; )
//                     this.removeRenderTarget(this.renderTargets[0]);
//                 let e = this.nextRender.add(()=>{
//                     0 === this.planes.length && 0 === this.shaderPasses.length && 0 === this.renderTargets.length && (e.keep = !1,
//                     this.deletePrograms(),
//                     this.clear(),
//                     this.canvas.removeEventListener("webgllost", this._contextLostHandler, !1),
//                     this.canvas.removeEventListener("webglrestored", this._contextRestoredHandler, !1),
//                     this.gl && this.extensions.WEBGL_lose_context && this.extensions.WEBGL_lose_context.loseContext(),
//                     this.canvas.width = this.canvas.width,
//                     this.gl = null,
//                     this.container.removeChild(this.canvas),
//                     this.container = null,
//                     this.canvas = null,
//                     this.onDisposed && this.onDisposed())
//                 }
//                 , !0)
//             }
//         }
//         exports.Renderer = n;
//     }
//     , {
//         "./Scene.js": "wcBW",
//         "../utils/CacheManager.js": "OAxy",
//         "../utils/CallbackQueueManager.js": "qZdS",
//         "../utils/utils.js": "mNyN"
//     }],
//     "la6z": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.ScrollManager = void 0;
//         class s {
//             constructor({xOffset: s=0, yOffset: t=0, lastXDelta: e=0, lastYDelta: l=0, shouldWatch: i=!0, onScroll: a=(()=>{}
//             )}={}) {
//                 this.xOffset = s,
//                 this.yOffset = t,
//                 this.lastXDelta = e,
//                 this.lastYDelta = l,
//                 this.shouldWatch = i,
//                 this.onScroll = a,
//                 this.handler = this.scroll.bind(this, !0),
//                 this.shouldWatch && window.addEventListener("scroll", this.handler, {
//                     passive: !0
//                 })
//             }
//             scroll() {
//                 this.updateScrollValues(window.pageXOffset, window.pageYOffset)
//             }
//             updateScrollValues(s, t) {
//                 const e = this.xOffset;
//                 this.xOffset = s,
//                 this.lastXDelta = e - this.xOffset;
//                 const l = this.yOffset;
//                 this.yOffset = t,
//                 this.lastYDelta = l - this.yOffset,
//                 this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
//             }
//             dispose() {
//                 this.shouldWatch && window.removeEventListener("scroll", this.handler, {
//                     passive: !0
//                 })
//             }
//         }
//         exports.ScrollManager = s;
//     }
//     , {}],
//     "Qp9X": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Curtains = void 0;
//         var e = require("./Renderer.js")
//           , t = require("../utils/ScrollManager.js")
//           , r = require("../utils/utils.js");
//         const i = "8.0.3";
//         class s {
//             constructor({container: e, alpha: t=!0, premultipliedAlpha: i=!1, antialias: s=!0, depth: n=!0, failIfMajorPerformanceCaveat: a=!0, preserveDrawingBuffer: o=!1, stencil: l=!1, autoResize: h=!0, autoRender: d=!0, watchScroll: c=!0, pixelRatio: p=window.devicePixelRatio || 1, renderingScale: u=1, production: _=!1}={}) {
//                 this.type = "Curtains",
//                 this._autoResize = h,
//                 this._autoRender = d,
//                 this._watchScroll = c,
//                 this.pixelRatio = p,
//                 u = isNaN(u) ? 1 : parseFloat(u),
//                 this._renderingScale = Math.max(.25, Math.min(1, u)),
//                 this.premultipliedAlpha = i,
//                 this.alpha = t,
//                 this.antialias = s,
//                 this.depth = n,
//                 this.failIfMajorPerformanceCaveat = a,
//                 this.preserveDrawingBuffer = o,
//                 this.stencil = l,
//                 this.production = _,
//                 this.errors = !1,
//                 e ? this.setContainer(e) : this.production || (0,
//                 r.throwWarning)(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
//             }
//             setContainer(e) {
//                 if (e)
//                     if ("string" == typeof e)
//                         if (e = document.getElementById(e))
//                             this.container = e;
//                         else {
//                             let e = document.createElement("div");
//                             e.setAttribute("id", "curtains-canvas"),
//                             document.body.appendChild(e),
//                             this.container = e,
//                             this.production || (0,
//                             r.throwWarning)('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
//                         }
//                     else
//                         e instanceof Element && (this.container = e);
//                 else {
//                     let e = document.createElement("div");
//                     e.setAttribute("id", "curtains-canvas"),
//                     document.body.appendChild(e),
//                     this.container = e,
//                     this.production || (0,
//                     r.throwWarning)('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
//                 }
//                 this._initCurtains()
//             }
//             _initCurtains() {
//                 this.planes = [],
//                 this.renderTargets = [],
//                 this.shaderPasses = [],
//                 this._initRenderer(),
//                 this.gl && (this._initScroll(),
//                 this._setSize(),
//                 this._addListeners(),
//                 this.container.appendChild(this.canvas),
//                 console.log("curtains.js - v" + i),
//                 this._animationFrameID = null,
//                 this._autoRender && this._animate())
//             }
//             _initRenderer() {
//                 this.renderer = new e.Renderer({
//                     alpha: this.alpha,
//                     antialias: this.antialias,
//                     premultipliedAlpha: this.premultipliedAlpha,
//                     depth: this.depth,
//                     failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
//                     preserveDrawingBuffer: this.preserveDrawingBuffer,
//                     stencil: this.stencil,
//                     container: this.container,
//                     pixelRatio: this.pixelRatio,
//                     renderingScale: this._renderingScale,
//                     production: this.production,
//                     onError: ()=>this._onRendererError(),
//                     onContextLost: ()=>this._onRendererContextLost(),
//                     onContextRestored: ()=>this._onRendererContextRestored(),
//                     onDisposed: ()=>this._onRendererDisposed(),
//                     onSceneChange: ()=>this._keepSync()
//                 }),
//                 this.gl = this.renderer.gl,
//                 this.canvas = this.renderer.canvas
//             }
//             restoreContext() {
//                 this.renderer.restoreContext()
//             }
//             _animate() {
//                 this.render(),
//                 this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
//             }
//             enableDrawing() {
//                 this.renderer.enableDrawing()
//             }
//             disableDrawing() {
//                 this.renderer.disableDrawing()
//             }
//             needRender() {
//                 this.renderer.needRender()
//             }
//             nextRender(e, t=!1) {
//                 return this.renderer.nextRender.add(e, t)
//             }
//             clear() {
//                 this.renderer && this.renderer.clear()
//             }
//             clearDepth() {
//                 this.renderer && this.renderer.clearDepth()
//             }
//             clearColor() {
//                 this.renderer && this.renderer.clearColor()
//             }
//             isWebGL2() {
//                 return !!this.gl && this.renderer._isWebGL2
//             }
//             render() {
//                 this.renderer.nextRender.execute(),
//                 (this.renderer.state.drawingEnabled || this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1),
//                 this._onRenderCallback && this._onRenderCallback(),
//                 this.renderer.render())
//             }
//             _addListeners() {
//                 this._resizeHandler = null,
//                 this._autoResize && (this._resizeHandler = this.resize.bind(this, !0),
//                 window.addEventListener("resize", this._resizeHandler, !1))
//             }
//             setPixelRatio(e, t) {
//                 this.pixelRatio = parseFloat(Math.max(e, 1)) || 1,
//                 this.renderer.setPixelRatio(e),
//                 this.resize(t)
//             }
//             _setSize() {
//                 this.renderer.setSize(),
//                 this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset,
//                 this._scrollManager.yOffset = window.pageYOffset)
//             }
//             getBoundingRect() {
//                 return this.renderer._boundingRect
//             }
//             resize(e) {
//                 this.gl && (this._setSize(),
//                 this.renderer.resize(),
//                 this.nextRender(()=>{
//                     this._onAfterResizeCallback && e && this._onAfterResizeCallback()
//                 }
//                 ))
//             }
//             _initScroll() {
//                 this._scrollManager = new t.ScrollManager({
//                     xOffset: window.pageXOffset,
//                     yOffset: window.pageYOffset,
//                     lastXDelta: 0,
//                     lastYDelta: 0,
//                     shouldWatch: this._watchScroll,
//                     onScroll: (e,t)=>this._updateScroll(e, t)
//                 })
//             }
//             _updateScroll(e, t) {
//                 for (let r = 0; r < this.planes.length; r++)
//                     this.planes[r].watchScroll && this.planes[r].updateScrollPosition(e, t);
//                 this.renderer.needRender(),
//                 this._onScrollCallback && this._onScrollCallback()
//             }
//             updateScrollValues(e, t) {
//                 this._scrollManager.updateScrollValues(e, t)
//             }
//             getScrollDeltas() {
//                 return {
//                     x: this._scrollManager.lastXDelta,
//                     y: this._scrollManager.lastYDelta
//                 }
//             }
//             getScrollValues() {
//                 return {
//                     x: this._scrollManager.xOffset,
//                     y: this._scrollManager.yOffset
//                 }
//             }
//             _keepSync() {
//                 this.planes = this.renderer.planes,
//                 this.shaderPasses = this.renderer.shaderPasses,
//                 this.renderTargets = this.renderer.renderTargets
//             }
//             lerp(e, t, i) {
//                 return (0,
//                 r.lerp)(e, t, i)
//             }
//             onAfterResize(e) {
//                 return e && (this._onAfterResizeCallback = e),
//                 this
//             }
//             onError(e) {
//                 return e && (this._onErrorCallback = e),
//                 this
//             }
//             _onRendererError() {
//                 setTimeout(()=>{
//                     this._onErrorCallback && !this.errors && this._onErrorCallback(),
//                     this.errors = !0
//                 }
//                 , 0)
//             }
//             onContextLost(e) {
//                 return e && (this._onContextLostCallback = e),
//                 this
//             }
//             _onRendererContextLost() {
//                 this._onContextLostCallback && this._onContextLostCallback()
//             }
//             onContextRestored(e) {
//                 return e && (this._onContextRestoredCallback = e),
//                 this
//             }
//             _onRendererContextRestored() {
//                 this._onContextRestoredCallback && this._onContextRestoredCallback()
//             }
//             onRender(e) {
//                 return e && (this._onRenderCallback = e),
//                 this
//             }
//             onScroll(e) {
//                 return e && (this._onScrollCallback = e),
//                 this
//             }
//             dispose() {
//                 this.renderer.dispose()
//             }
//             _onRendererDisposed() {
//                 this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID),
//                 this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1),
//                 this._scrollManager && this._scrollManager.dispose()
//             }
//         }
//         exports.Curtains = s;
//     }
//     , {
//         "./Renderer.js": "pNJo",
//         "../utils/ScrollManager.js": "la6z",
//         "../utils/utils.js": "mNyN"
//     }],
//     "PneJ": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Uniforms = void 0;
//         var e = require("../utils/utils.js");
//         class t {
//             constructor(t, a, i) {
//                 if (this.type = "Uniforms",
//                 t && "Renderer" === t.type ? t.gl || (0,
//                 e.throwError)(this.type + ": Renderer WebGL context is undefined", t) : (0,
//                 e.throwError)(this.type + ": Renderer not passed as first argument", t),
//                 this.renderer = t,
//                 this.gl = t.gl,
//                 this.program = a,
//                 this.uniforms = {},
//                 i)
//                     for (const e in i) {
//                         const t = i[e];
//                         this.uniforms[e] = {
//                             name: t.name,
//                             type: t.type,
//                             value: t.value.clone && "function" == typeof t.value.clone ? t.value.clone() : t.value,
//                             update: null
//                         }
//                     }
//             }
//             handleUniformSetting(t) {
//                 switch (t.type) {
//                 case "1i":
//                     t.update = this.setUniform1i.bind(this);
//                     break;
//                 case "1iv":
//                     t.update = this.setUniform1iv.bind(this);
//                     break;
//                 case "1f":
//                     t.update = this.setUniform1f.bind(this);
//                     break;
//                 case "1fv":
//                     t.update = this.setUniform1fv.bind(this);
//                     break;
//                 case "2i":
//                     t.update = this.setUniform2i.bind(this);
//                     break;
//                 case "2iv":
//                     t.update = this.setUniform2iv.bind(this);
//                     break;
//                 case "2f":
//                     t.update = this.setUniform2f.bind(this);
//                     break;
//                 case "2fv":
//                     t.update = this.setUniform2fv.bind(this);
//                     break;
//                 case "3i":
//                     t.update = this.setUniform3i.bind(this);
//                     break;
//                 case "3iv":
//                     t.update = this.setUniform3iv.bind(this);
//                     break;
//                 case "3f":
//                     t.update = this.setUniform3f.bind(this);
//                     break;
//                 case "3fv":
//                     t.update = this.setUniform3fv.bind(this);
//                     break;
//                 case "4i":
//                     t.update = this.setUniform4i.bind(this);
//                     break;
//                 case "4iv":
//                     t.update = this.setUniform4iv.bind(this);
//                     break;
//                 case "4f":
//                     t.update = this.setUniform4f.bind(this);
//                     break;
//                 case "4fv":
//                     t.update = this.setUniform4fv.bind(this);
//                     break;
//                 case "mat2":
//                     t.update = this.setUniformMatrix2fv.bind(this);
//                     break;
//                 case "mat3":
//                     t.update = this.setUniformMatrix3fv.bind(this);
//                     break;
//                 case "mat4":
//                     t.update = this.setUniformMatrix4fv.bind(this);
//                     break;
//                 default:
//                     this.renderer.production || (0,
//                     e.throwWarning)(this.type + ": This uniform type is not handled : ", t.type)
//                 }
//             }
//             setInternalFormat(e) {
//                 "Vec2" === e.value.type ? (e._internalFormat = "Vec2",
//                 e.lastValue = e.value.clone()) : "Vec3" === e.value.type ? (e._internalFormat = "Vec3",
//                 e.lastValue = e.value.clone()) : "Mat4" === e.value.type ? (e._internalFormat = "Mat4",
//                 e.lastValue = e.value.clone()) : "Quat" === e.value.type ? (e._internalFormat = "Quat",
//                 e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array",
//                 e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat",
//                 e.lastValue = e.value) : (e._internalFormat = "float",
//                 e.lastValue = e.value)
//             }
//             setUniforms() {
//                 if (this.uniforms)
//                     for (const t in this.uniforms) {
//                         let a = this.uniforms[t];
//                         a.location = this.gl.getUniformLocation(this.program, a.name),
//                         a._internalFormat || this.setInternalFormat(a),
//                         a.type || ("Vec2" === a._internalFormat ? a.type = "2f" : "Vec3" === a._internalFormat ? a.type = "3f" : "Mat4" === a._internalFormat ? a.type = "mat4" : "array" === a._internalFormat ? 4 === a.value.length ? (a.type = "4f",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a 4f (array of 4 floats) uniform type")) : 3 === a.value.length ? (a.type = "3f",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a 3f (array of 3 floats) uniform type")) : 2 === a.value.length && (a.type = "2f",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a 2f (array of 2 floats) uniform type")) : "mat" === a._internalFormat ? 16 === a.value.length ? (a.type = "mat4",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a mat4 (4x4 matrix array) uniform type")) : 9 === a.value.length ? (a.type = "mat3",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a mat3 (3x3 matrix array) uniform type")) : 4 === a.value.length && (a.type = "mat2",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (a.type = "1f",
//                         this.renderer.production || (0,
//                         e.throwWarning)(this.type + ": No uniform type declared for " + a.name + ", applied a 1f (float) uniform type"))),
//                         this.handleUniformSetting(a),
//                         a.update && a.update(a)
//                     }
//             }
//             updateUniforms() {
//                 if (this.uniforms)
//                     for (const e in this.uniforms) {
//                         const t = this.uniforms[e];
//                         let a = !1;
//                         "Vec2" === t._internalFormat ? t.value.equals(t.lastValue) || (a = !0,
//                         t.lastValue.copy(t.value)) : "Vec3" === t._internalFormat ? t.value.equals(t.lastValue) || (a = !0,
//                         t.lastValue.copy(t.value)) : "Quat" === t._internalFormat ? t.value.equals(t.lastValue) || (a = !0,
//                         t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (a = !0,
//                         t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (a = !0,
//                         t.lastValue = t.value),
//                         a && t.update && t.update(t)
//                     }
//             }
//             setUniform1i(e) {
//                 this.gl.uniform1i(e.location, e.value)
//             }
//             setUniform1iv(e) {
//                 this.gl.uniform1iv(e.location, e.value)
//             }
//             setUniform1f(e) {
//                 this.gl.uniform1f(e.location, e.value)
//             }
//             setUniform1fv(e) {
//                 this.gl.uniform1fv(e.location, e.value)
//             }
//             setUniform2i(e) {
//                 "Vec2" === e._internalFormat ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
//             }
//             setUniform2iv(e) {
//                 "Vec2" === e._internalFormat ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
//             }
//             setUniform2f(e) {
//                 "Vec2" === e._internalFormat ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
//             }
//             setUniform2fv(e) {
//                 "Vec2" === e._internalFormat ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
//             }
//             setUniform3i(e) {
//                 "Vec3" === e._internalFormat ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
//             }
//             setUniform3iv(e) {
//                 "Vec3" === e._internalFormat ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
//             }
//             setUniform3f(e) {
//                 "Vec3" === e._internalFormat ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
//             }
//             setUniform3fv(e) {
//                 "Vec3" === e._internalFormat ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
//             }
//             setUniform4i(e) {
//                 "Quat" === e._internalFormat ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
//             }
//             setUniform4iv(e) {
//                 "Quat" === e._internalFormat ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
//             }
//             setUniform4f(e) {
//                 "Quat" === e._internalFormat ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
//             }
//             setUniform4fv(e) {
//                 "Quat" === e._internalFormat ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
//             }
//             setUniformMatrix2fv(e) {
//                 this.gl.uniformMatrix2fv(e.location, !1, e.value)
//             }
//             setUniformMatrix3fv(e) {
//                 this.gl.uniformMatrix3fv(e.location, !1, e.value)
//             }
//             setUniformMatrix4fv(e) {
//                 "Mat4" === e._internalFormat ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
//             }
//         }
//         exports.Uniforms = t;
//     }
//     , {
//         "../utils/utils.js": "mNyN"
//     }],
//     "YG53": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         const e = "\nprecision mediump float;\n";
//         var t = e.replace(/\n/g, "");
//         exports.default = t;
//     }
//     , {}],
//     "Dsxp": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         const e = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n";
//         var t = e.replace(/\n/g, "");
//         exports.default = t;
//     }
//     , {}],
//     "BQQl": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         const e = "\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n";
//         var r = e.replace(/\n/g, "");
//         exports.default = r;
//     }
//     , {}],
//     "Mr8e": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = u(require("./chunks/precision.medium.glsl.js"))
//           , t = u(require("./chunks/default.attributes.glsl.js"))
//           , r = u(require("./chunks/default.varyings.glsl.js"));
//         function u(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         const i = e.default + t.default + r.default + "\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n";
//         var n = i.replace(/\n/g, "");
//         exports.default = n;
//     }
//     , {
//         "./chunks/precision.medium.glsl.js": "YG53",
//         "./chunks/default.attributes.glsl.js": "Dsxp",
//         "./chunks/default.varyings.glsl.js": "BQQl"
//     }],
//     "itSy": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = u(require("./chunks/precision.medium.glsl.js"))
//           , r = u(require("./chunks/default.varyings.glsl.js"));
//         function u(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         const l = e.default + r.default + "\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n";
//         var s = l.replace(/\n/g, "");
//         exports.default = s;
//     }
//     , {
//         "./chunks/precision.medium.glsl.js": "YG53",
//         "./chunks/default.varyings.glsl.js": "BQQl"
//     }],
//     "M2QH": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = s(require("./chunks/precision.medium.glsl.js"))
//           , t = s(require("./chunks/default.attributes.glsl.js"))
//           , r = s(require("./chunks/default.varyings.glsl.js"));
//         function s(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         const u = e.default + t.default + r.default + "\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n";
//         var n = u.replace(/\n/g, "");
//         exports.default = n;
//     }
//     , {
//         "./chunks/precision.medium.glsl.js": "YG53",
//         "./chunks/default.attributes.glsl.js": "Dsxp",
//         "./chunks/default.varyings.glsl.js": "BQQl"
//     }],
//     "URQZ": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = u(require("./chunks/precision.medium.glsl.js"))
//           , r = u(require("./chunks/default.varyings.glsl.js"));
//         function u(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         const t = e.default + r.default + "\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n";
//         var n = t.replace(/\n/g, "");
//         exports.default = n;
//     }
//     , {
//         "./chunks/precision.medium.glsl.js": "YG53",
//         "./chunks/default.varyings.glsl.js": "BQQl"
//     }],
//     "lFfO": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Program = void 0;
//         var e = require("./Uniforms.js")
//           , r = require("../utils/utils.js")
//           , t = h(require("../shaders/plane.vertex.glsl.js"))
//           , s = h(require("../shaders/plane.fragment.glsl.js"))
//           , i = h(require("../shaders/shaderpass.vertex.glsl.js"))
//           , a = h(require("../shaders/shaderpass.fragment.glsl.js"));
//         function h(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         class o {
//             constructor(e, {parent: h, vertexShader: o, fragmentShader: d}={}) {
//                 this.type = "Program",
//                 e && "Renderer" === e.type ? e.gl || (0,
//                 r.throwError)(this.type + ": Renderer WebGL context is undefined", e) : (0,
//                 r.throwError)(this.type + ": Renderer not passed as first argument", e),
//                 this.renderer = e,
//                 this.gl = this.renderer.gl,
//                 this.parent = h,
//                 this.defaultVsCode = "Plane" === this.parent.type ? t.default : i.default,
//                 this.defaultFsCode = "Plane" === this.parent.type ? s.default : a.default,
//                 o ? this.vsCode = o : (this.renderer.production || "Plane" !== this.parent.type || (0,
//                 r.throwWarning)(this.parent.type + ": No vertex shader provided, will use a default one"),
//                 this.vsCode = this.defaultVsCode),
//                 d ? this.fsCode = d : (this.renderer.production || (0,
//                 r.throwWarning)(this.parent.type + ": No fragment shader provided, will use a default one"),
//                 this.fsCode = this.defaultFsCode),
//                 this.compiled = !0,
//                 this.setupProgram()
//             }
//             createShader(e, t) {
//                 const s = this.gl.createShader(t);
//                 if (this.gl.shaderSource(s, e),
//                 this.gl.compileShader(s),
//                 !this.renderer.production && !this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
//                     const e = t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
//                     let i = this.gl.getShaderSource(s).split("\n");
//                     for (let r = 0; r < i.length; r++)
//                         i[r] = r + 1 + ": " + i[r];
//                     return i = i.join("\n"),
//                     (0,
//                     r.throwWarning)(this.type + ": Errors occurred while compiling the", e, ":\n", this.gl.getShaderInfoLog(s)),
//                     (0,
//                     r.throwError)(i),
//                     (0,
//                     r.throwWarning)(this.type + ": Will use a default", e),
//                     this.createShader(t === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, t)
//                 }
//                 return s
//             }
//             useNewShaders() {
//                 this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER),
//                 this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER),
//                 this.vertexShader && this.fragmentShader || this.renderer.production || (0,
//                 r.throwWarning)(this.type + ": Unable to find or compile the vertex or fragment shader")
//             }
//             setupProgram() {
//                 let e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
//                 e ? (this.vertexShader = e.vertexShader,
//                 this.fragmentShader = e.fragmentShader,
//                 this.activeTextures = e.activeTextures,
//                 this.createProgram()) : (this.useNewShaders(),
//                 this.compiled && this.createProgram())
//             }
//             createProgram() {
//                 if (this.id = this.renderer.cache.programs.length,
//                 this.program = this.gl.createProgram(),
//                 this.gl.attachShader(this.program, this.vertexShader),
//                 this.gl.attachShader(this.program, this.fragmentShader),
//                 this.gl.linkProgram(this.program),
//                 !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
//                     return (0,
//                     r.throwWarning)(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)),
//                     (0,
//                     r.throwWarning)(this.type + ": Will use default vertex and fragment shaders"),
//                     this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER),
//                     this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER),
//                     void this.createProgram();
//                 if (this.gl.deleteShader(this.vertexShader),
//                 this.gl.deleteShader(this.fragmentShader),
//                 !this.activeUniforms) {
//                     this.activeUniforms = {
//                         textures: [],
//                         textureMatrices: []
//                     };
//                     const e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
//                     for (let r = 0; r < e; r++) {
//                         const e = this.gl.getActiveUniform(this.program, r);
//                         e.type === this.gl.SAMPLER_2D && this.activeUniforms.textures.push(e.name),
//                         e.type === this.gl.FLOAT_MAT4 && "uMVMatrix" !== e.name && "uPMatrix" !== e.name && this.activeUniforms.textureMatrices.push(e.name)
//                     }
//                 }
//                 this.renderer.cache.addProgram(this)
//             }
//             createUniforms(r) {
//                 this.uniformsManager = new e.Uniforms(this.renderer,this.program,r),
//                 this.setUniforms()
//             }
//             setUniforms() {
//                 this.renderer.useProgram(this),
//                 this.uniformsManager.setUniforms()
//             }
//             updateUniforms() {
//                 this.renderer.useProgram(this),
//                 this.uniformsManager.updateUniforms()
//             }
//         }
//         exports.Program = o;
//     }
//     , {
//         "./Uniforms.js": "PneJ",
//         "../utils/utils.js": "mNyN",
//         "../shaders/plane.vertex.glsl.js": "Mr8e",
//         "../shaders/plane.fragment.glsl.js": "itSy",
//         "../shaders/shaderpass.vertex.glsl.js": "M2QH",
//         "../shaders/shaderpass.fragment.glsl.js": "URQZ"
//     }],
//     "z1rH": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Geometry = void 0;
//         var t = require("../utils/utils.js");
//         class i {
//             constructor(i, {program: e=null, width: s=1, height: r=1}={}) {
//                 this.type = "Geometry",
//                 i && "Renderer" === i.type ? i.gl || (0,
//                 t.throwError)(this.type + ": Renderer WebGL context is undefined", i) : (0,
//                 t.throwError)(this.type + ": Renderer not passed as first argument", i),
//                 this.renderer = i,
//                 this.gl = this.renderer.gl,
//                 this.definition = {
//                     id: s * r + s,
//                     width: s,
//                     height: r
//                 },
//                 this.setDefaultAttributes(),
//                 this.setVerticesUVs()
//             }
//             restoreContext(t) {
//                 this.program = null,
//                 this.setDefaultAttributes(),
//                 this.setVerticesUVs(),
//                 this.setProgram(t)
//             }
//             setDefaultAttributes() {
//                 this.attributes = {
//                     vertexPosition: {
//                         name: "aVertexPosition",
//                         size: 3
//                     },
//                     textureCoord: {
//                         name: "aTextureCoord",
//                         size: 3
//                     }
//                 }
//             }
//             setVerticesUVs() {
//                 const t = this.renderer.cache.getGeometryFromID(this.definition.id);
//                 t ? (this.attributes.vertexPosition.array = t.vertices,
//                 this.attributes.textureCoord.array = t.uvs) : (this.computeVerticesUVs(),
//                 this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
//             }
//             setProgram(t) {
//                 this.program = t.program,
//                 this.initAttributes(),
//                 this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(),
//                 this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(),
//                 this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)),
//                 this.initializeBuffers()
//             }
//             initAttributes() {
//                 for (const t in this.attributes)
//                     this.attributes[t].location = this.gl.getAttribLocation(this.program, this.attributes[t].name),
//                     this.attributes[t].buffer = this.gl.createBuffer(),
//                     this.attributes[t].numberOfItems = this.definition.width * this.definition.height * this.attributes[t].size * 2
//             }
//             computeVerticesUVs() {
//                 this.attributes.vertexPosition.array = [],
//                 this.attributes.textureCoord.array = [];
//                 const t = this.attributes.vertexPosition.array
//                   , i = this.attributes.textureCoord.array;
//                 for (let e = 0; e < this.definition.height; e++) {
//                     const s = e / this.definition.height;
//                     for (let e = 0; e < this.definition.width; e++) {
//                         const r = e / this.definition.width;
//                         i.push(r),
//                         i.push(s),
//                         i.push(0),
//                         t.push(2 * (r - .5)),
//                         t.push(2 * (s - .5)),
//                         t.push(0),
//                         i.push(r + 1 / this.definition.width),
//                         i.push(s),
//                         i.push(0),
//                         t.push(2 * (r + 1 / this.definition.width - .5)),
//                         t.push(2 * (s - .5)),
//                         t.push(0),
//                         i.push(r),
//                         i.push(s + 1 / this.definition.height),
//                         i.push(0),
//                         t.push(2 * (r - .5)),
//                         t.push(2 * (s + 1 / this.definition.height - .5)),
//                         t.push(0),
//                         i.push(r),
//                         i.push(s + 1 / this.definition.height),
//                         i.push(0),
//                         t.push(2 * (r - .5)),
//                         t.push(2 * (s + 1 / this.definition.height - .5)),
//                         t.push(0),
//                         i.push(r + 1 / this.definition.width),
//                         i.push(s),
//                         i.push(0),
//                         t.push(2 * (r + 1 / this.definition.width - .5)),
//                         t.push(2 * (s - .5)),
//                         t.push(0),
//                         i.push(r + 1 / this.definition.width),
//                         i.push(s + 1 / this.definition.height),
//                         i.push(0),
//                         t.push(2 * (r + 1 / this.definition.width - .5)),
//                         t.push(2 * (s + 1 / this.definition.height - .5)),
//                         t.push(0)
//                     }
//                 }
//             }
//             initializeBuffers() {
//                 if (this.attributes) {
//                     for (const t in this.attributes)
//                         this.gl.enableVertexAttribArray(this.attributes[t].location),
//                         this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[t].buffer),
//                         this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[t].array), this.gl.STATIC_DRAW),
//                         this.gl.vertexAttribPointer(this.attributes[t].location, this.attributes[t].size, this.gl.FLOAT, !1, 0, 0);
//                     this.renderer.state.currentGeometryID = this.definition.id
//                 }
//             }
//             bindBuffers() {
//                 if (this._vao)
//                     this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
//                 else
//                     for (const t in this.attributes)
//                         this.gl.enableVertexAttribArray(this.attributes[t].location),
//                         this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[t].buffer),
//                         this.gl.vertexAttribPointer(this.attributes[t].location, this.attributes[t].size, this.gl.FLOAT, !1, 0, 0);
//                 this.renderer.state.currentGeometryID = this.definition.id
//             }
//             draw() {
//                 this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
//             }
//             dispose() {
//                 this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao));
//                 for (const t in this.attributes)
//                     this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[t].buffer),
//                     this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW),
//                     this.gl.deleteBuffer(this.attributes[t].buffer);
//                 this.attributes = null,
//                 this.renderer.state.currentGeometryID = null
//             }
//         }
//         exports.Geometry = i;
//     }
//     , {
//         "../utils/utils.js": "mNyN"
//     }],
//     "crJy": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Mat4 = void 0;
//         class e {
//             constructor(e=new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) {
//                 this.type = "Mat4",
//                 this.elements = e
//             }
//             setFromArray(e) {
//                 for (let t = 0; t < this.elements.length; t++)
//                     this.elements[t] = e[t];
//                 return this
//             }
//             copy(e) {
//                 const t = e.elements;
//                 return this.elements[0] = t[0],
//                 this.elements[1] = t[1],
//                 this.elements[2] = t[2],
//                 this.elements[3] = t[3],
//                 this.elements[4] = t[4],
//                 this.elements[5] = t[5],
//                 this.elements[6] = t[6],
//                 this.elements[7] = t[7],
//                 this.elements[8] = t[8],
//                 this.elements[9] = t[9],
//                 this.elements[10] = t[10],
//                 this.elements[11] = t[11],
//                 this.elements[12] = t[12],
//                 this.elements[13] = t[13],
//                 this.elements[14] = t[14],
//                 this.elements[15] = t[15],
//                 this
//             }
//             clone() {
//                 return (new e).copy(this)
//             }
//             multiply(t) {
//                 const s = this.elements
//                   , n = t.elements;
//                 let l = new e;
//                 return l.elements[0] = n[0] * s[0] + n[1] * s[4] + n[2] * s[8] + n[3] * s[12],
//                 l.elements[1] = n[0] * s[1] + n[1] * s[5] + n[2] * s[9] + n[3] * s[13],
//                 l.elements[2] = n[0] * s[2] + n[1] * s[6] + n[2] * s[10] + n[3] * s[14],
//                 l.elements[3] = n[0] * s[3] + n[1] * s[7] + n[2] * s[11] + n[3] * s[15],
//                 l.elements[4] = n[4] * s[0] + n[5] * s[4] + n[6] * s[8] + n[7] * s[12],
//                 l.elements[5] = n[4] * s[1] + n[5] * s[5] + n[6] * s[9] + n[7] * s[13],
//                 l.elements[6] = n[4] * s[2] + n[5] * s[6] + n[6] * s[10] + n[7] * s[14],
//                 l.elements[7] = n[4] * s[3] + n[5] * s[7] + n[6] * s[11] + n[7] * s[15],
//                 l.elements[8] = n[8] * s[0] + n[9] * s[4] + n[10] * s[8] + n[11] * s[12],
//                 l.elements[9] = n[8] * s[1] + n[9] * s[5] + n[10] * s[9] + n[11] * s[13],
//                 l.elements[10] = n[8] * s[2] + n[9] * s[6] + n[10] * s[10] + n[11] * s[14],
//                 l.elements[11] = n[8] * s[3] + n[9] * s[7] + n[10] * s[11] + n[11] * s[15],
//                 l.elements[12] = n[12] * s[0] + n[13] * s[4] + n[14] * s[8] + n[15] * s[12],
//                 l.elements[13] = n[12] * s[1] + n[13] * s[5] + n[14] * s[9] + n[15] * s[13],
//                 l.elements[14] = n[12] * s[2] + n[13] * s[6] + n[14] * s[10] + n[15] * s[14],
//                 l.elements[15] = n[12] * s[3] + n[13] * s[7] + n[14] * s[11] + n[15] * s[15],
//                 l
//             }
//             getInverse() {
//                 const t = this.elements
//                   , s = new e
//                   , n = s.elements;
//                 let l = t[0]
//                   , m = t[1]
//                   , i = t[2]
//                   , r = t[3]
//                   , h = t[4]
//                   , o = t[5]
//                   , c = t[6]
//                   , y = t[7]
//                   , u = t[8]
//                   , x = t[9]
//                   , p = t[10]
//                   , a = t[11]
//                   , z = t[12]
//                   , w = t[13]
//                   , M = t[14]
//                   , d = t[15]
//                   , g = l * o - m * h
//                   , v = l * c - i * h
//                   , F = l * y - r * h
//                   , f = m * c - i * o
//                   , A = m * y - r * o
//                   , O = i * y - r * c
//                   , _ = u * w - x * z
//                   , b = u * M - p * z
//                   , j = u * d - a * z
//                   , I = x * M - p * w
//                   , P = x * d - a * w
//                   , k = p * d - a * M
//                   , q = g * k - v * P + F * I + f * j - A * b + O * _;
//                 return q ? (q = 1 / q,
//                 n[0] = (o * k - c * P + y * I) * q,
//                 n[1] = (i * P - m * k - r * I) * q,
//                 n[2] = (w * O - M * A + d * f) * q,
//                 n[3] = (p * A - x * O - a * f) * q,
//                 n[4] = (c * j - h * k - y * b) * q,
//                 n[5] = (l * k - i * j + r * b) * q,
//                 n[6] = (M * F - z * O - d * v) * q,
//                 n[7] = (u * O - p * F + a * v) * q,
//                 n[8] = (h * P - o * j + y * _) * q,
//                 n[9] = (m * j - l * P - r * _) * q,
//                 n[10] = (z * A - w * F + d * g) * q,
//                 n[11] = (x * F - u * A - a * g) * q,
//                 n[12] = (o * b - h * I - c * _) * q,
//                 n[13] = (l * I - m * b + i * _) * q,
//                 n[14] = (w * v - z * f - M * g) * q,
//                 n[15] = (u * f - x * v + p * g) * q,
//                 s) : null
//             }
//             scale(e) {
//                 let t = this.elements;
//                 return t[0] *= e.x,
//                 t[1] *= e.x,
//                 t[2] *= e.x,
//                 t[3] *= e.x,
//                 t[4] *= e.y,
//                 t[5] *= e.y,
//                 t[6] *= e.y,
//                 t[7] *= e.y,
//                 t[8] *= e.z,
//                 t[9] *= e.z,
//                 t[10] *= e.z,
//                 t[11] *= e.z,
//                 this
//             }
//             compose(e, t, s) {
//                 let n = this.elements;
//                 const l = t.elements[0]
//                   , m = t.elements[1]
//                   , i = t.elements[2]
//                   , r = t.elements[3]
//                   , h = l + l
//                   , o = m + m
//                   , c = i + i
//                   , y = l * h
//                   , u = l * o
//                   , x = l * c
//                   , p = m * o
//                   , a = m * c
//                   , z = i * c
//                   , w = r * h
//                   , M = r * o
//                   , d = r * c
//                   , g = s.x
//                   , v = s.y
//                   , F = s.z;
//                 return n[0] = (1 - (p + z)) * g,
//                 n[1] = (u + d) * g,
//                 n[2] = (x - M) * g,
//                 n[3] = 0,
//                 n[4] = (u - d) * v,
//                 n[5] = (1 - (y + z)) * v,
//                 n[6] = (a + w) * v,
//                 n[7] = 0,
//                 n[8] = (x + M) * F,
//                 n[9] = (a - w) * F,
//                 n[10] = (1 - (y + p)) * F,
//                 n[11] = 0,
//                 n[12] = e.x,
//                 n[13] = e.y,
//                 n[14] = e.z,
//                 n[15] = 1,
//                 this
//             }
//             composeFromOrigin(e, t, s, n) {
//                 let l = this.elements;
//                 const m = t.elements[0]
//                   , i = t.elements[1]
//                   , r = t.elements[2]
//                   , h = t.elements[3]
//                   , o = m + m
//                   , c = i + i
//                   , y = r + r
//                   , u = m * o
//                   , x = m * c
//                   , p = m * y
//                   , a = i * c
//                   , z = i * y
//                   , w = r * y
//                   , M = h * o
//                   , d = h * c
//                   , g = h * y
//                   , v = s.x
//                   , F = s.y
//                   , f = s.z
//                   , A = n.x
//                   , O = n.y
//                   , _ = n.z
//                   , b = (1 - (a + w)) * v
//                   , j = (x + g) * v
//                   , I = (p - d) * v
//                   , P = (x - g) * F
//                   , k = (1 - (u + w)) * F
//                   , q = (z + M) * F
//                   , B = (p + d) * f
//                   , C = (z - M) * f
//                   , D = (1 - (u + a)) * f;
//                 return l[0] = b,
//                 l[1] = j,
//                 l[2] = I,
//                 l[3] = 0,
//                 l[4] = P,
//                 l[5] = k,
//                 l[6] = q,
//                 l[7] = 0,
//                 l[8] = B,
//                 l[9] = C,
//                 l[10] = D,
//                 l[11] = 0,
//                 l[12] = e.x + A - (b * A + P * O + B * _),
//                 l[13] = e.y + O - (j * A + k * O + C * _),
//                 l[14] = e.z + _ - (I * A + q * O + D * _),
//                 l[15] = 1,
//                 this
//             }
//         }
//         exports.Mat4 = e;
//     }
//     , {}],
//     "xSjB": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Vec2 = void 0;
//         class t {
//             constructor(t=0, s=t) {
//                 this.type = "Vec2",
//                 this._x = t,
//                 this._y = s
//             }
//             get x() {
//                 return this._x
//             }
//             get y() {
//                 return this._y
//             }
//             set x(t) {
//                 const s = t !== this._x;
//                 this._x = t,
//                 s && this._onChangeCallback && this._onChangeCallback()
//             }
//             set y(t) {
//                 const s = t !== this._y;
//                 this._y = t,
//                 s && this._onChangeCallback && this._onChangeCallback()
//             }
//             onChange(t) {
//                 return t && (this._onChangeCallback = t),
//                 this
//             }
//             set(t, s) {
//                 return this._x = t,
//                 this._y = s,
//                 this
//             }
//             add(t) {
//                 return this._x += t.x,
//                 this._y += t.y,
//                 this
//             }
//             addScalar(t) {
//                 return this._x += t,
//                 this._y += t,
//                 this
//             }
//             sub(t) {
//                 return this._x -= t.x,
//                 this._y -= t.y,
//                 this
//             }
//             subScalar(t) {
//                 return this._x -= t,
//                 this._y -= t,
//                 this
//             }
//             multiply(t) {
//                 return this._x *= t.x,
//                 this._y *= t.y,
//                 this
//             }
//             multiplyScalar(t) {
//                 return this._x *= t,
//                 this._y *= t,
//                 this
//             }
//             copy(t) {
//                 return this._x = t.x,
//                 this._y = t.y,
//                 this
//             }
//             clone() {
//                 return new t(this._x,this._y)
//             }
//             sanitizeNaNValuesWith(t) {
//                 return this._x = isNaN(this._x) ? t.x : parseFloat(this._x),
//                 this._y = isNaN(this._y) ? t.y : parseFloat(this._y),
//                 this
//             }
//             max(t) {
//                 return this._x = Math.max(this._x, t.x),
//                 this._y = Math.max(this._y, t.y),
//                 this
//             }
//             min(t) {
//                 return this._x = Math.min(this._x, t.x),
//                 this._y = Math.min(this._y, t.y),
//                 this
//             }
//             equals(t) {
//                 return this._x === t.x && this._y === t.y
//             }
//             normalize() {
//                 let t = this._x * this._x + this._y * this._y;
//                 return t > 0 && (t = 1 / Math.sqrt(t)),
//                 this._x *= t,
//                 this._y *= t,
//                 this
//             }
//             dot(t) {
//                 return this._x * t.x + this._y * t.y
//             }
//         }
//         exports.Vec2 = t;
//     }
//     , {}],
//     "u8ZQ": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Vec3 = void 0;
//         class t {
//             constructor(t=0, s=t, i=t) {
//                 this.type = "Vec3",
//                 this._x = t,
//                 this._y = s,
//                 this._z = i
//             }
//             get x() {
//                 return this._x
//             }
//             get y() {
//                 return this._y
//             }
//             get z() {
//                 return this._z
//             }
//             set x(t) {
//                 const s = t !== this._x;
//                 this._x = t,
//                 s && this._onChangeCallback && this._onChangeCallback()
//             }
//             set y(t) {
//                 const s = t !== this._y;
//                 this._y = t,
//                 s && this._onChangeCallback && this._onChangeCallback()
//             }
//             set z(t) {
//                 const s = t !== this._z;
//                 this._z = t,
//                 s && this._onChangeCallback && this._onChangeCallback()
//             }
//             onChange(t) {
//                 return t && (this._onChangeCallback = t),
//                 this
//             }
//             set(t, s, i) {
//                 return this._x = t,
//                 this._y = s,
//                 this._z = i,
//                 this
//             }
//             add(t) {
//                 return this._x += t.x,
//                 this._y += t.y,
//                 this._z += t.z,
//                 this
//             }
//             addScalar(t) {
//                 return this._x += t,
//                 this._y += t,
//                 this._z += t,
//                 this
//             }
//             sub(t) {
//                 return this._x -= t.x,
//                 this._y -= t.y,
//                 this._z -= t.z,
//                 this
//             }
//             subScalar(t) {
//                 return this._x -= t,
//                 this._y -= t,
//                 this._z -= t,
//                 this
//             }
//             multiply(t) {
//                 return this._x *= t.x,
//                 this._y *= t.y,
//                 this._z *= t.z,
//                 this
//             }
//             multiplyScalar(t) {
//                 return this._x *= t,
//                 this._y *= t,
//                 this._z *= t,
//                 this
//             }
//             copy(t) {
//                 return this._x = t.x,
//                 this._y = t.y,
//                 this._z = t.z,
//                 this
//             }
//             clone() {
//                 return new t(this._x,this._y,this._z)
//             }
//             sanitizeNaNValuesWith(t) {
//                 return this._x = isNaN(this._x) ? t.x : parseFloat(this._x),
//                 this._y = isNaN(this._y) ? t.y : parseFloat(this._y),
//                 this._z = isNaN(this._z) ? t.z : parseFloat(this._z),
//                 this
//             }
//             max(t) {
//                 return this._x = Math.max(this._x, t.x),
//                 this._y = Math.max(this._y, t.y),
//                 this._z = Math.max(this._z, t.z),
//                 this
//             }
//             min(t) {
//                 return this._x = Math.min(this._x, t.x),
//                 this._y = Math.min(this._y, t.y),
//                 this._z = Math.min(this._z, t.z),
//                 this
//             }
//             equals(t) {
//                 return this._x === t.x && this._y === t.y && this._z === t.z
//             }
//             normalize() {
//                 let t = this._x * this._x + this._y * this._y + this._z * this._z;
//                 return t > 0 && (t = 1 / Math.sqrt(t)),
//                 this._x *= t,
//                 this._y *= t,
//                 this._z *= t,
//                 this
//             }
//             dot(t) {
//                 return this._x * t.x + this._y * t.y + this._z * t.z
//             }
//             applyMat4(t) {
//                 const s = this._x
//                   , i = this._y
//                   , h = this._z
//                   , _ = t.elements;
//                 let e = _[3] * s + _[7] * i + _[11] * h + _[15];
//                 return e = e || 1,
//                 this._x = (_[0] * s + _[4] * i + _[8] * h + _[12]) / e,
//                 this._y = (_[1] * s + _[5] * i + _[9] * h + _[13]) / e,
//                 this._z = (_[2] * s + _[6] * i + _[10] * h + _[14]) / e,
//                 this
//             }
//             applyQuat(t) {
//                 const s = this._x
//                   , i = this._y
//                   , h = this._z
//                   , _ = t.elements[0]
//                   , e = t.elements[1]
//                   , a = t.elements[2]
//                   , r = t.elements[3]
//                   , n = r * s + e * h - a * i
//                   , x = r * i + a * s - _ * h
//                   , y = r * h + _ * i - e * s
//                   , l = -_ * s - e * i - a * h;
//                 return this._x = n * r + l * -_ + x * -a - y * -e,
//                 this._y = x * r + l * -e + y * -_ - n * -a,
//                 this._z = y * r + l * -a + n * -e - x * -_,
//                 this
//             }
//             project(t) {
//                 return this.applyMat4(t.viewMatrix).applyMat4(t.projectionMatrix),
//                 this
//             }
//             unproject(t) {
//                 return this.applyMat4(t.projectionMatrix.getInverse()).applyMat4(t.worldMatrix),
//                 this
//             }
//         }
//         exports.Vec3 = t;
//     }
//     , {}],
//     "eenL": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Texture = void 0;
//         var e = require("../math/Mat4.js")
//           , t = require("../math/Vec2.js")
//           , i = require("../math/Vec3.js")
//           , s = require("../utils/utils.js");
//         const r = new t.Vec2
//           , a = new i.Vec3
//           , h = new e.Mat4;
//         class o {
//             constructor(i, {isFBOTexture: r=!1, fromTexture: a=!1, loader: h, sampler: o, floatingPoint: n="none", premultiplyAlpha: l=!1, anisotropy: p=1, generateMipmap: _=null, wrapS: d, wrapT: u, minFilter: m, magFilter: g}={}) {
//                 if (this.type = "Texture",
//                 (i = i && i.renderer || i) && "Renderer" === i.type ? i.gl || (0,
//                 s.throwError)(this.type + ": Renderer WebGL context is undefined", i) : (0,
//                 s.throwError)(this.type + ": Renderer not passed as first argument", i),
//                 this.renderer = i,
//                 this.gl = this.renderer.gl,
//                 this.uuid = (0,
//                 s.generateUUID)(),
//                 this._globalParameters = {
//                     unpackAlignment: 4,
//                     flipY: !r,
//                     premultiplyAlpha: l,
//                     floatingPoint: n,
//                     type: this.gl.UNSIGNED_BYTE,
//                     internalFormat: this.gl.RGBA,
//                     format: this.gl.RGBA
//                 },
//                 this.parameters = {
//                     anisotropy: p,
//                     generateMipmap: _,
//                     wrapS: d || this.gl.CLAMP_TO_EDGE,
//                     wrapT: u || this.gl.CLAMP_TO_EDGE,
//                     minFilter: m || this.gl.LINEAR,
//                     magFilter: g || this.gl.LINEAR,
//                     _shouldUpdate: !0
//                 },
//                 this._initState(),
//                 this.sourceType = r ? "fbo" : "empty",
//                 this._samplerName = o,
//                 this._sampler = {
//                     isActive: !1,
//                     isTextureBound: !1,
//                     texture: this.gl.createTexture()
//                 },
//                 this._textureMatrix = {
//                     matrix: new e.Mat4,
//                     isActive: !1
//                 },
//                 this._size = {
//                     width: 1,
//                     height: 1
//                 },
//                 this.scale = new t.Vec2(1),
//                 this.scale.onChange(()=>this.resize()),
//                 this.offset = new t.Vec2,
//                 this.offset.onChange(()=>this.resize()),
//                 this._loader = h,
//                 this._sourceLoaded = !1,
//                 this._uploaded = !1,
//                 this._willUpdate = !1,
//                 this.shouldUpdate = !1,
//                 this._forceUpdate = !1,
//                 this.userData = {},
//                 this._canDraw = !1,
//                 a)
//                     return this._copyOnInit = !0,
//                     void (this._copiedFrom = a);
//                 this._copyOnInit = !1,
//                 this._initTexture()
//             }
//             _initState() {
//                 this._state = {
//                     anisotropy: 1,
//                     generateMipmap: !1,
//                     wrapS: null,
//                     wrapT: null,
//                     minFilter: null,
//                     magFilter: this.gl.LINEAR
//                 }
//             }
//             _initTexture() {
//                 this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
//                 "empty" === this.sourceType && (this._updateGlobalTexParameters(),
//                 this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])),
//                 this._canDraw = !0)
//             }
//             _restoreFromTexture() {
//                 this._copyOnInit || this._initTexture(),
//                 this._parent && (this._setTextureUniforms(),
//                 this._setSize()),
//                 this.copy(this._copiedFrom),
//                 this._canDraw = !0
//             }
//             _restoreContext() {
//                 if (this._canDraw = !1,
//                 this._sampler.isActive = !1,
//                 this._initState(),
//                 this._state.generateMipmap = !1,
//                 this.parameters._shouldUpdate = !0,
//                 this._copiedFrom) {
//                     const e = this.renderer.nextRender.add(()=>{
//                         this._copiedFrom._canDraw && (this._restoreFromTexture(),
//                         e.keep = !1)
//                     }
//                     , !0)
//                 } else
//                     this._initTexture(),
//                     this._parent && this._setParent(),
//                     this.source && (this.setSource(this.source),
//                     "image" === this.sourceType ? this.renderer.cache.addTexture(this) : this.needUpdate()),
//                     this._canDraw = !0
//             }
//             addParent(e) {
//                 !e || "Plane" !== e.type && "PingPongPlane" !== e.type && "ShaderPass" !== e.type && "RenderTarget" !== e.type ? this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent") : (this._parent = e,
//                 this.index = this._parent.textures.length,
//                 this._parent.textures.push(this),
//                 this._setParent())
//             }
//             _setParent() {
//                 if (this._sampler.name = this._samplerName || "uSampler" + this.index,
//                 this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index,
//                 this._parent._program) {
//                     if (!this._parent._program.compiled)
//                         return void (this.renderer.production || (0,
//                         s.throwWarning)(this.type + ": Unable to create the texture because the program is not valid"));
//                     if (this._setTextureUniforms(),
//                     this._copyOnInit) {
//                         const e = this.renderer.nextRender.add(()=>{
//                             this._copiedFrom._canDraw && this._copiedFrom._uploaded && (this.copy(this._copiedFrom),
//                             e.keep = !1)
//                         }
//                         , !0);
//                         return
//                     }
//                     this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
//                         width: this._parent._boundingRect.document.width,
//                         height: this._parent._boundingRect.document.height
//                     },
//                     this._setSize()
//                 } else
//                     "RenderTarget" === this._parent.type && (this._size = {
//                         width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
//                         height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
//                     },
//                     this._upload(),
//                     this._updateTexParameters(),
//                     this._canDraw = !0)
//             }
//             hasParent() {
//                 return !!this._parent
//             }
//             _setTextureUniforms() {
//                 const e = this._parent._program.activeUniforms;
//                 for (let t = 0; t < e.textures.length; t++)
//                     if (e.textures[t] === this._sampler.name) {
//                         this._sampler.isActive = !0,
//                         this.renderer.useProgram(this._parent._program),
//                         this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name),
//                         e.textureMatrices.find(e=>e === this._textureMatrix.name) && (this._textureMatrix.isActive = !0,
//                         this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name)),
//                         this.gl.uniform1i(this._sampler.location, this.index)
//                     }
//             }
//             copy(e) {
//                 e && "Texture" === e.type ? (this._globalParameters = e._globalParameters,
//                 this.parameters = e.parameters,
//                 this._state = e._state,
//                 this._size = e._size,
//                 !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(),
//                 this._sourceLoaded = e._sourceLoaded,
//                 !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(),
//                 this._uploaded = e._uploaded,
//                 this.sourceType = e.sourceType,
//                 this.source = e.source,
//                 this._videoFrameCallbackID = e._videoFrameCallbackID,
//                 this._sampler.texture = e._sampler.texture,
//                 this._copiedFrom = e,
//                 !this._parent || !this._parent._program || this._canDraw && this._textureMatrix.matrix || (this._setSize(),
//                 this._canDraw = !0),
//                 this.renderer.needRender()) : this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Unable to set the texture from texture:", e)
//             }
//             setSource(e) {
//                 this._sourceLoaded || this.renderer.nextRender.add(()=>this._onSourceLoadedCallback && this._onSourceLoadedCallback());
//                 const t = this.renderer.cache.getTextureFromSource(e);
//                 if (t && t.uuid !== this.uuid)
//                     return this._uploaded || (this.renderer.nextRender.add(()=>this._onSourceUploadedCallback && this._onSourceUploadedCallback()),
//                     this._uploaded = !0),
//                     this.copy(t),
//                     void this.resize();
//                 this.source = e,
//                 "empty" === this.sourceType && ("IMG" === e.tagName.toUpperCase() ? this.sourceType = "image" : "VIDEO" === e.tagName.toUpperCase() ? (this.sourceType = "video",
//                 this.shouldUpdate = !0) : "CANVAS" === e.tagName.toUpperCase() ? (this.sourceType = "canvas",
//                 this._willUpdate = !0,
//                 this.shouldUpdate = !0) : this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": this HTML tag could not be converted into a texture:", e.tagName)),
//                 this._size = {
//                     width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
//                     height: this.source.naturalHeight || this.source.height || this.source.videoHeight
//                 },
//                 this._sourceLoaded = !0,
//                 this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
//                 this.resize(),
//                 "image" === this.sourceType && (this.parameters.generateMipmap = this.parameters.generateMipmap || null === this.parameters.generateMipmap,
//                 this.parameters._shouldUpdate = this.parameters.generateMipmap,
//                 this._state.generateMipmap = !1,
//                 this._upload()),
//                 this.renderer.needRender()
//             }
//             _updateGlobalTexParameters() {
//                 this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment),
//                 this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment),
//                 this.renderer.state.flipY !== this._globalParameters.flipY && "empty" !== this.sourceType && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY),
//                 this.renderer.state.flipY = this._globalParameters.flipY),
//                 this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && "empty" !== this.sourceType && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha),
//                 this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha),
//                 "half-float" === this._globalParameters.floatingPoint ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F,
//                 this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": could not use half-float textures because the extension is not available") : "float" === this._globalParameters.floatingPoint && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F,
//                 this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": could not use float textures because the extension is not available"))
//             }
//             _updateTexParameters() {
//                 this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(this),
//                 this.parameters.wrapS !== this._state.wrapS && (this.renderer._isWebGL2 || (0,
//                 s.isPowerOf2)(this._size.width) && (0,
//                 s.isPowerOf2)(this._size.height) || (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
//                 this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"),
//                 this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
//                 this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS),
//                 this._state.wrapS = this.parameters.wrapS),
//                 this.parameters.wrapT !== this._state.wrapT && (this.renderer._isWebGL2 || (0,
//                 s.isPowerOf2)(this._size.width) && (0,
//                 s.isPowerOf2)(this._size.height) || (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
//                 this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"),
//                 this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
//                 this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT),
//                 this._state.wrapT = this.parameters.wrapT),
//                 this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (this.renderer._isWebGL2 || (0,
//                 s.isPowerOf2)(this._size.width) && (0,
//                 s.isPowerOf2)(this._size.height) ? this.gl.generateMipmap(this.gl.TEXTURE_2D) : this.parameters.generateMipmap = !1,
//                 this._state.generateMipmap = this.parameters.generateMipmap),
//                 this.parameters.minFilter !== this._state.minFilter && (this.renderer._isWebGL2 || (0,
//                 s.isPowerOf2)(this._size.width) && (0,
//                 s.isPowerOf2)(this._size.height) || (this.parameters.minFilter = this.gl.LINEAR),
//                 this.parameters.generateMipmap || null === this.parameters.generateMipmap || (this.parameters.minFilter = this.gl.LINEAR),
//                 this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"),
//                 this.parameters.minFilter = this.gl.LINEAR),
//                 this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter),
//                 this._state.minFilter = this.parameters.minFilter),
//                 this.parameters.magFilter !== this._state.magFilter && (this.renderer._isWebGL2 || (0,
//                 s.isPowerOf2)(this._size.width) && (0,
//                 s.isPowerOf2)(this._size.height) || (this.parameters.magFilter = this.gl.LINEAR),
//                 this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"),
//                 this.parameters.magFilter = this.gl.LINEAR),
//                 this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter),
//                 this._state.magFilter = this.parameters.magFilter);
//                 const e = this.renderer.extensions.EXT_texture_filter_anisotropic;
//                 if (e && this.parameters.anisotropy !== this._state.anisotropy) {
//                     const t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
//                     this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)),
//                     this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy),
//                     this._state.anisotropy = this.parameters.anisotropy
//                 }
//             }
//             setWrapS(e) {
//                 this.parameters.wrapS !== e && (this.parameters.wrapS = e,
//                 this.parameters._shouldUpdate = !0)
//             }
//             setWrapT(e) {
//                 this.parameters.wrapT !== e && (this.parameters.wrapT = e,
//                 this.parameters._shouldUpdate = !0)
//             }
//             setMinFilter(e) {
//                 this.parameters.minFilter !== e && (this.parameters.minFilter = e,
//                 this.parameters._shouldUpdate = !0)
//             }
//             setMagFilter(e) {
//                 this.parameters.magFilter !== e && (this.parameters.magFilter = e,
//                 this.parameters._shouldUpdate = !0)
//             }
//             setAnisotropy(e) {
//                 e = isNaN(e) ? this.parameters.anisotropy : e,
//                 this.parameters.anisotropy !== e && (this.parameters.anisotropy = e,
//                 this.parameters._shouldUpdate = !0)
//             }
//             needUpdate() {
//                 this._forceUpdate = !0
//             }
//             _videoFrameCallback() {
//                 this._willUpdate = !0,
//                 this.source.requestVideoFrameCallback(()=>this._videoFrameCallback())
//             }
//             _upload() {
//                 this._updateGlobalTexParameters(),
//                 this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : "fbo" === this.sourceType && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null),
//                 this._uploaded || (this.renderer.nextRender.add(()=>this._onSourceUploadedCallback && this._onSourceUploadedCallback()),
//                 this._uploaded = !0)
//             }
//             _getSizes() {
//                 if ("fbo" === this.sourceType)
//                     return {
//                         parentWidth: this._parent._boundingRect.document.width,
//                         parentHeight: this._parent._boundingRect.document.height,
//                         sourceWidth: this._parent._boundingRect.document.width,
//                         sourceHeight: this._parent._boundingRect.document.height,
//                         xOffset: 0,
//                         yOffset: 0
//                     };
//                 const e = this._parent.scale ? r.set(this._parent.scale.x, this._parent.scale.y) : r.set(1, 1)
//                   , t = this._parent._boundingRect.document.width * e.x
//                   , i = this._parent._boundingRect.document.height * e.y
//                   , s = this._size.width
//                   , a = this._size.height
//                   , h = s / a
//                   , o = t / i;
//                 let n = 0
//                   , l = 0;
//                 return o > h ? l = Math.min(0, i - t * (1 / h)) : o < h && (n = Math.min(0, t - i * h)),
//                 {
//                     parentWidth: t,
//                     parentHeight: i,
//                     sourceWidth: s,
//                     sourceHeight: a,
//                     xOffset: n,
//                     yOffset: l
//                 }
//             }
//             setScale(e) {
//                 e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.scale).max(r.set(.001, .001)),
//                 e.equals(this.scale) || (this.scale.copy(e),
//                 this.resize())) : this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
//             }
//             setOffset(e) {
//                 e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.offset),
//                 e.equals(this.offset) || (this.offset.copy(e),
//                 this.resize())) : this.renderer.production || (0,
//                 s.throwWarning)(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale)
//             }
//             _setSize() {
//                 if (this._parent && this._parent._program) {
//                     const e = this._getSizes();
//                     this._updateTextureMatrix(e)
//                 }
//             }
//             resize() {
//                 "fbo" === this.sourceType ? (this._size = {
//                     width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
//                     height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
//                 },
//                 this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
//                 this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
//                     width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
//                     height: this.source.naturalHeight || this.source.height || this.source.videoHeight
//                 }),
//                 this._setSize()
//             }
//             _updateTextureMatrix(e) {
//                 const t = a.set(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
//                 t.x /= this.scale.x,
//                 t.y /= this.scale.y,
//                 this._textureMatrix.matrix = h.setFromArray([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]),
//                 this._updateMatrixUniform()
//             }
//             _updateMatrixUniform() {
//                 this._textureMatrix.isActive && (this.renderer.useProgram(this._parent._program),
//                 this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements))
//             }
//             _onSourceLoaded(e) {
//                 this.setSource(e),
//                 "image" === this.sourceType && this.renderer.cache.addTexture(this)
//             }
//             _bindTexture() {
//                 this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
//                 this.renderer.state.activeTexture = this.index),
//                 this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
//                 this._sampler.isTextureBound || (this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D),
//                 this._sampler.isTextureBound && this.renderer.needRender()))
//             }
//             _draw() {
//                 this._sampler.isActive && (this._bindTexture(this),
//                 "video" === this.sourceType && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0),
//                 (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1,
//                 this._upload()),
//                 "video" === this.sourceType && (this._willUpdate = !1),
//                 this._forceUpdate = !1),
//                 this.parameters._shouldUpdate && (this._updateTexParameters(),
//                 this.parameters._shouldUpdate = !1)
//             }
//             onSourceLoaded(e) {
//                 return e && (this._onSourceLoadedCallback = e),
//                 this
//             }
//             onSourceUploaded(e) {
//                 return e && (this._onSourceUploadedCallback = e),
//                 this
//             }
//             _dispose(e=!1) {
//                 "video" === this.sourceType || "image" === this.sourceType && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this),
//                 this.source = null) : "canvas" === this.sourceType && (this.source.width = this.source.width,
//                 this.source = null),
//                 this._parent = null,
//                 this.gl && !this._copiedFrom && (e || "image" !== this.sourceType || !this.renderer.state.isActive) && (this._canDraw = !1,
//                 this.renderer.cache.removeTexture(this),
//                 this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
//                 this.gl.bindTexture(this.gl.TEXTURE_2D, null),
//                 this.gl.deleteTexture(this._sampler.texture))
//             }
//         }
//         exports.Texture = o;
//     }
//     , {
//         "../math/Mat4.js": "crJy",
//         "../math/Vec2.js": "xSjB",
//         "../math/Vec3.js": "u8ZQ",
//         "../utils/utils.js": "mNyN"
//     }],
//     "VBgA": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.TextureLoader = void 0;
//         var e = require("../core/Texture.js")
//           , t = require("../utils/utils.js");
//         class r {
//             constructor(e, r="anonymous") {
//                 this.type = "TextureLoader",
//                 (e = e && e.renderer || e) && "Renderer" === e.type ? e.gl || (0,
//                 t.throwError)(this.type + ": Renderer WebGL context is undefined", e) : (0,
//                 t.throwError)(this.type + ": Renderer not passed as first argument", e),
//                 this.renderer = e,
//                 this.gl = this.renderer.gl,
//                 this.crossOrigin = r,
//                 this.elements = []
//             }
//             _addElement(e, t, r, a) {
//                 const s = {
//                     source: e,
//                     texture: t,
//                     load: this._sourceLoaded.bind(this, e, t, r),
//                     error: this._sourceLoadError.bind(this, e, a)
//                 };
//                 return this.elements.push(s),
//                 s
//             }
//             _sourceLoadError(e, t, r) {
//                 t && t(e, r)
//             }
//             _sourceLoaded(e, t, r) {
//                 t._sourceLoaded || (t._onSourceLoaded(e),
//                 this._parent && (this._increment && this._increment(),
//                 this.renderer.nextRender.add(()=>this._parent._onLoadingCallback && this._parent._onLoadingCallback(t)))),
//                 r && r(t)
//             }
//             _getSourceType(e) {
//                 let t;
//                 return "string" == typeof e ? null !== e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg)$/) ? t = "image" : null !== e.match(/\.(webm|mp4|ogg|mov)$/) && (t = "video") : "IMG" === e.tagName.toUpperCase() ? t = "image" : "VIDEO" === e.tagName.toUpperCase() ? t = "video" : "CANVAS" === e.tagName.toUpperCase() && (t = "canvas"),
//                 t
//             }
//             _createImage(e) {
//                 if ("string" != typeof e && e.hasAttribute("crossOrigin"))
//                     return e;
//                 {
//                     const t = new Image;
//                     return t.crossOrigin = this.crossOrigin,
//                     "string" == typeof e ? t.src = e : (t.src = e.src,
//                     e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))),
//                     t
//                 }
//             }
//             _createVideo(e) {
//                 if ("string" == typeof e || null === e.getAttribute("crossOrigin")) {
//                     const t = document.createElement("video");
//                     return t.crossOrigin = this.crossOrigin,
//                     "string" == typeof e ? t.src = e : (t.src = e.src,
//                     e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))),
//                     t
//                 }
//                 return e
//             }
//             loadSource(e, t, r, a) {
//                 switch (this._getSourceType(e)) {
//                 case "image":
//                     this.loadImage(e, t, r, a);
//                     break;
//                 case "video":
//                     this.loadVideo(e, t, r, a);
//                     break;
//                 case "canvas":
//                     this.loadCanvas(e, t, r);
//                     break;
//                 default:
//                     this._sourceLoadError(e, a, "this source could not be converted into a texture: " + e)
//                 }
//             }
//             loadSources(e, t, r, a) {
//                 for (let s = 0; s < e.length; s++)
//                     this.loadSource(e[s], t, r, a)
//             }
//             loadImage(t, r={}, a, s) {
//                 const o = this.renderer.cache.getTextureFromSource(t);
//                 let i = Object.assign({}, r);
//                 if (this._parent && (i = Object.assign(i, this._parent._texturesOptions)),
//                 i.loader = this,
//                 o) {
//                     i.sampler = "string" != typeof t && t.hasAttribute("data-sampler") ? t.getAttribute("data-sampler") : i.sampler,
//                     i.fromTexture = o;
//                     const r = new e.Texture(this.renderer,i);
//                     return this._sourceLoaded(o.source, r, a),
//                     void (this._parent && this._addToParent(r, o.source, "image"))
//                 }
//                 const d = this._createImage(t);
//                 i.sampler = d.hasAttribute("data-sampler") ? d.getAttribute("data-sampler") : i.sampler;
//                 const n = new e.Texture(this.renderer,i)
//                   , l = this._addElement(d, n, a, s);
//                 d.complete ? this._sourceLoaded(d, n, a) : d.decode ? d.decode().then(this._sourceLoaded.bind(this, d, n, a)).catch(()=>{
//                     d.addEventListener("load", l.load, !1),
//                     d.addEventListener("error", l.error, !1)
//                 }
//                 ) : (d.addEventListener("load", l.load, !1),
//                 d.addEventListener("error", l.error, !1)),
//                 this._parent && this._addToParent(n, d, "image")
//             }
//             loadImages(e, t, r, a) {
//                 for (let s = 0; s < e.length; s++)
//                     this.loadImage(e[s], t, r, a)
//             }
//             loadVideo(t, r={}, a, s) {
//                 const o = this._createVideo(t);
//                 o.preload = !0,
//                 o.muted = !0,
//                 o.loop = !0,
//                 o.setAttribute("playsinline", ""),
//                 o.crossOrigin = this.crossOrigin;
//                 let i = Object.assign({}, r);
//                 this._parent && (i = Object.assign(r, this._parent._texturesOptions)),
//                 i.loader = this,
//                 i.sampler = o.hasAttribute("data-sampler") ? o.getAttribute("data-sampler") : i.sampler;
//                 const d = new e.Texture(this.renderer,i)
//                   , n = this._addElement(o, d, a, s);
//                 o.addEventListener("canplaythrough", n.load, !1),
//                 o.addEventListener("error", n.error, !1),
//                 o.readyState >= o.HAVE_FUTURE_DATA && a && this._sourceLoaded(o, d, a),
//                 o.load(),
//                 this._addToParent && this._addToParent(d, o, "video"),
//                 "requestVideoFrameCallback"in HTMLVideoElement.prototype && (n.videoFrameCallback = d._videoFrameCallback.bind(d),
//                 d._videoFrameCallbackID = o.requestVideoFrameCallback(n.videoFrameCallback))
//             }
//             loadVideos(e, t, r, a) {
//                 for (let s = 0; s < e.length; s++)
//                     this.loadVideo(e[s], t, r, a)
//             }
//             loadCanvas(t, r={}, a) {
//                 let s = Object.assign({}, r);
//                 this._parent && (s = Object.assign(r, this._parent._texturesOptions)),
//                 s.loader = this,
//                 s.sampler = t.hasAttribute("data-sampler") ? t.getAttribute("data-sampler") : s.sampler;
//                 const o = new e.Texture(this.renderer,s);
//                 this._addElement(t, o, a, null),
//                 this._sourceLoaded(t, o, a),
//                 this._parent && this._addToParent(o, t, "canvas")
//             }
//             loadCanvases(e, t, r) {
//                 for (let a = 0; a < e.length; a++)
//                     this.loadCanvas(e[a], t, r)
//             }
//             _removeSource(e) {
//                 const t = this.elements.find(t=>t.texture.uuid === e.uuid);
//                 t && ("image" === e.sourceType ? t.source.removeEventListener("load", t.load, !1) : "video" === e.sourceType && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID),
//                 t.source.removeEventListener("canplaythrough", t.load, !1),
//                 t.source.pause(),
//                 t.source.removeAttribute("src"),
//                 t.source.load()),
//                 t.source.removeEventListener("error", t.error, !1))
//             }
//         }
//         exports.TextureLoader = r;
//     }
//     , {
//         "../core/Texture.js": "eenL",
//         "../utils/utils.js": "mNyN"
//     }],
//     "xLQc": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.PlaneTextureLoader = void 0;
//         var e = require("./TextureLoader.js")
//           , s = require("../utils/utils.js");
//         class t extends e.TextureLoader {
//             constructor(e, t, {sourcesLoaded: o=0, sourcesToLoad: r=0, complete: i=!1, onComplete: a=(()=>{}
//             )}={}) {
//                 super(e, t.crossOrigin),
//                 this.type = "PlaneTextureLoader",
//                 this._parent = t,
//                 "Plane" !== this._parent.type && "PingPongPlane" !== this._parent.type && "ShaderPass" !== this._parent.type && ((0,
//                 s.throwWarning)(this.type + ": Wrong parent type assigned to this loader"),
//                 this._parent = null),
//                 this.sourcesLoaded = o,
//                 this.sourcesToLoad = r,
//                 this.complete = i,
//                 this.onComplete = a
//             }
//             _setLoaderSize(e) {
//                 this.sourcesToLoad = e,
//                 0 === this.sourcesToLoad && (this.complete = !0,
//                 this.renderer.nextRender.add(()=>this.onComplete && this.onComplete()))
//             }
//             _increment() {
//                 this.sourcesLoaded++,
//                 this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0,
//                 this.renderer.nextRender.add(()=>this.onComplete && this.onComplete()))
//             }
//             _addSourceToParent(e, s) {
//                 if ("image" === s) {
//                     const s = this._parent.images;
//                     !s.find(s=>s.src === e.src) && s.push(e)
//                 } else if ("video" === s) {
//                     const s = this._parent.videos;
//                     !s.find(s=>s.src === e.src) && s.push(e)
//                 } else if ("canvas" === s) {
//                     const s = this._parent.canvases;
//                     !s.find(s=>s.isSameNode(e)) && s.push(e)
//                 }
//             }
//             _addToParent(e, s, t) {
//                 this._addSourceToParent(s, t),
//                 this._parent && e.addParent(this._parent)
//             }
//         }
//         exports.PlaneTextureLoader = t;
//     }
//     , {
//         "./TextureLoader.js": "VBgA",
//         "../utils/utils.js": "mNyN"
//     }],
//     "ORG2": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Mesh = void 0;
//         var e = require("./Program.js")
//           , t = require("./Geometry.js")
//           , r = require("./Texture.js")
//           , s = require("../loaders/PlaneTextureLoader.js")
//           , i = require("../utils/utils.js");
//         class n {
//             constructor(r, s="Mesh", {vertexShaderID: n, fragmentShaderID: a, vertexShader: o, fragmentShader: h, uniforms: d={}, widthSegments: l=1, heightSegments: u=1, renderOrder: g, depthTest: c=!0, cullFace: p="back", texturesOptions: m={}, crossOrigin: _="anonymous"}={}) {
//                 this.type = s,
//                 (r = r && r.renderer || r) && "Renderer" === r.type || ((0,
//                 i.throwError)(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", r),
//                 setTimeout(()=>{
//                     this._onErrorCallback && this._onErrorCallback()
//                 }
//                 , 0)),
//                 this.renderer = r,
//                 this.gl = this.renderer.gl,
//                 this.gl || (this.renderer.production || (0,
//                 i.throwError)(this.type + ": Unable to create a " + this.type + " because the Renderer WebGl context is not defined"),
//                 setTimeout(()=>{
//                     this._onErrorCallback && this._onErrorCallback()
//                 }
//                 , 0)),
//                 this._canDraw = !1,
//                 this.renderOrder = g,
//                 this._depthTest = c,
//                 this.cullFace = p,
//                 "back" !== this.cullFace && "front" !== this.cullFace && "none" !== this.cullFace && (this.cullFace = "back"),
//                 this.textures = [],
//                 m = Object.assign({
//                     premultiplyAlpha: !1,
//                     anisotropy: 1,
//                     floatingPoint: "none",
//                     wrapS: this.gl.CLAMP_TO_EDGE,
//                     wrapT: this.gl.CLAMP_TO_EDGE,
//                     minFilter: this.gl.LINEAR,
//                     magFilter: this.gl.LINEAR
//                 }, m),
//                 this._texturesOptions = m,
//                 this.crossOrigin = _,
//                 !o && n && document.getElementById(n) && (o = document.getElementById(n).innerHTML),
//                 !h && a && document.getElementById(a) && (h = document.getElementById(a).innerHTML),
//                 this._initMesh(),
//                 l = parseInt(l),
//                 u = parseInt(u),
//                 this._geometry = new t.Geometry(this.renderer,{
//                     width: l,
//                     height: u
//                 }),
//                 this._program = new e.Program(this.renderer,{
//                     parent: this,
//                     vertexShader: o,
//                     fragmentShader: h
//                 }),
//                 this._program.compiled ? (this._program.createUniforms(d),
//                 this.uniforms = this._program.uniformsManager.uniforms,
//                 this._geometry.setProgram(this._program),
//                 this.renderer.onSceneChange()) : this.renderer.nextRender.add(()=>this._onErrorCallback && this._onErrorCallback())
//             }
//             _initMesh() {
//                 this.uuid = (0,
//                 i.generateUUID)(),
//                 this.loader = new s.PlaneTextureLoader(this.renderer,this,{
//                     sourcesLoaded: 0,
//                     initSourcesToLoad: 0,
//                     complete: !1,
//                     onComplete: ()=>{
//                         this._onReadyCallback && this._onReadyCallback(),
//                         this.renderer.needRender()
//                     }
//                 }),
//                 this.images = [],
//                 this.videos = [],
//                 this.canvases = [],
//                 this.userData = {},
//                 this._canDraw = !0
//             }
//             _restoreContext() {
//                 this._canDraw = !1,
//                 this._matrices && (this._matrices = null),
//                 this._program = new e.Program(this.renderer,{
//                     parent: this,
//                     vertexShader: this._program.vsCode,
//                     fragmentShader: this._program.fsCode
//                 }),
//                 this._program.compiled && (this._geometry.restoreContext(this._program),
//                 this._program.createUniforms(this.uniforms),
//                 this.uniforms = this._program.uniformsManager.uniforms,
//                 this._programRestored())
//             }
//             setRenderTarget(e) {
//                 e && "RenderTarget" === e.type ? ("Plane" === this.type && this.renderer.scene.removePlane(this),
//                 this.target = e,
//                 "Plane" === this.type && this.renderer.scene.addPlane(this)) : this.renderer.production || (0,
//                 i.throwWarning)(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e)
//             }
//             setRenderOrder(e=0) {
//                 (e = isNaN(e) ? this.renderOrder : parseInt(e)) !== this.renderOrder && (this.renderOrder = e,
//                 this.renderer.scene.setPlaneRenderOrder(this))
//             }
//             createTexture(e={}) {
//                 const t = new r.Texture(this.renderer,Object.assign(this._texturesOptions, e));
//                 return t.addParent(this),
//                 t
//             }
//             addTexture(e) {
//                 e && "Texture" === e.type ? e.addParent(this) : this.renderer.production || (0,
//                 i.throwWarning)(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture")
//             }
//             loadSources(e, t={}, r, s) {
//                 for (let i = 0; i < e.length; i++)
//                     this.loadSource(e[i], t, r, s)
//             }
//             loadSource(e, t={}, r, s) {
//                 this.loader.loadSource(e, Object.assign(this._texturesOptions, t), e=>{
//                     r && r(e)
//                 }
//                 , (e,t)=>{
//                     this.renderer.production || (0,
//                     i.throwWarning)(this.type + ": this HTML tag could not be converted into a texture:", e.tagName),
//                     s && s(e, t)
//                 }
//                 )
//             }
//             loadImage(e, t={}, r, s) {
//                 this.loader.loadImage(e, Object.assign(this._texturesOptions, t), e=>{
//                     r && r(e)
//                 }
//                 , (e,t)=>{
//                     this.renderer.production || (0,
//                     i.throwWarning)(this.type + ": There has been an error:\n", t, "\nwhile loading this image:\n", e),
//                     s && s(e, t)
//                 }
//                 )
//             }
//             loadVideo(e, t={}, r, s) {
//                 this.loader.loadVideo(e, Object.assign(this._texturesOptions, t), e=>{
//                     r && r(e)
//                 }
//                 , (e,t)=>{
//                     this.renderer.production || (0,
//                     i.throwWarning)(this.type + ": There has been an error:\n", t, "\nwhile loading this video:\n", e),
//                     s && s(e, t)
//                 }
//                 )
//             }
//             loadCanvas(e, t={}, r) {
//                 this.loader.loadCanvas(e, Object.assign(this._texturesOptions, t), e=>{
//                     r && r(e)
//                 }
//                 )
//             }
//             loadImages(e, t={}, r, s) {
//                 for (let i = 0; i < e.length; i++)
//                     this.loadImage(e[i], t, r, s)
//             }
//             loadVideos(e, t={}, r, s) {
//                 for (let i = 0; i < e.length; i++)
//                     this.loadVideo(e[i], t, r, s)
//             }
//             loadCanvases(e, t={}, r) {
//                 for (let s = 0; s < e.length; s++)
//                     this.loadCanvas(e[s], t, r)
//             }
//             playVideos() {
//                 for (let e = 0; e < this.textures.length; e++) {
//                     const t = this.textures[e];
//                     if ("video" === t.sourceType) {
//                         const e = t.source.play();
//                         void 0 !== e && e.catch(e=>{
//                             this.renderer.production || (0,
//                             i.throwWarning)(this.type + ": Could not play the video : ", e)
//                         }
//                         )
//                     }
//                 }
//             }
//             _draw() {
//                 this.renderer.setDepthTest(this._depthTest),
//                 this.renderer.setFaceCulling(this.cullFace),
//                 this._program.updateUniforms(),
//                 this._geometry.bindBuffers(),
//                 this.renderer.state.forceBufferUpdate = !1;
//                 for (let e = 0; e < this.textures.length; e++)
//                     if (this.textures[e]._draw(),
//                     !this.textures[e]._sampler.isTextureBound)
//                         return;
//                 this._geometry.draw(),
//                 this.renderer.state.activeTexture = null,
//                 this._onAfterRenderCallback && this._onAfterRenderCallback()
//             }
//             onError(e) {
//                 return e && (this._onErrorCallback = e),
//                 this
//             }
//             onLoading(e) {
//                 return e && (this._onLoadingCallback = e),
//                 this
//             }
//             onReady(e) {
//                 return e && (this._onReadyCallback = e),
//                 this
//             }
//             onRender(e) {
//                 return e && (this._onRenderCallback = e),
//                 this
//             }
//             onAfterRender(e) {
//                 return e && (this._onAfterRenderCallback = e),
//                 this
//             }
//             remove() {
//                 this._canDraw = !1,
//                 this.target && this.renderer.bindFrameBuffer(null),
//                 this._dispose(),
//                 "Plane" === this.type ? this.renderer.removePlane(this) : "ShaderPass" === this.type && (this.target && (this.target._shaderPass = null,
//                 this.target.remove(),
//                 this.target = null),
//                 this.renderer.removeShaderPass(this))
//             }
//             _dispose() {
//                 if (this.gl) {
//                     this._geometry && this._geometry.dispose(),
//                     this.target && "ShaderPass" === this.type && (this.renderer.removeRenderTarget(this.target),
//                     this.textures.shift());
//                     for (let e = 0; e < this.textures.length; e++)
//                         this.textures[e]._dispose();
//                     this.textures = []
//                 }
//             }
//         }
//         exports.Mesh = n;
//     }
//     , {
//         "./Program.js": "lFfO",
//         "./Geometry.js": "z1rH",
//         "./Texture.js": "eenL",
//         "../loaders/PlaneTextureLoader.js": "xLQc",
//         "../utils/utils.js": "mNyN"
//     }],
//     "ebt3": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.DOMMesh = void 0;
//         var e = require("./Mesh.js")
//           , t = require("../math/Vec2.js")
//           , i = require("../utils/utils.js");
//         const s = new t.Vec2
//           , n = new t.Vec2;
//         class r extends e.Mesh {
//             constructor(e, t, s="DOMMesh", {widthSegments: n, heightSegments: r, renderOrder: h, depthTest: o, cullFace: d, uniforms: c, vertexShaderID: u, fragmentShaderID: a, vertexShader: l, fragmentShader: g, texturesOptions: m, crossOrigin: R}={}) {
//                 super(e, s, {
//                     widthSegments: n,
//                     heightSegments: r,
//                     renderOrder: h,
//                     depthTest: o,
//                     cullFace: d,
//                     uniforms: c,
//                     vertexShaderID: u = u || t && t.getAttribute("data-vs-id"),
//                     fragmentShaderID: a = a || t && t.getAttribute("data-fs-id"),
//                     vertexShader: l,
//                     fragmentShader: g,
//                     texturesOptions: m,
//                     crossOrigin: R
//                 }),
//                 this.htmlElement = t,
//                 this.htmlElement && 0 !== this.htmlElement.length || this.renderer.production || (0,
//                 i.throwWarning)(this.type + ": The HTML element you specified does not currently exists in the DOM"),
//                 this._setDocumentSizes()
//             }
//             _setDocumentSizes() {
//                 let e = this.htmlElement.getBoundingClientRect();
//                 this._boundingRect || (this._boundingRect = {}),
//                 this._boundingRect.document = {
//                     width: e.width * this.renderer.pixelRatio,
//                     height: e.height * this.renderer.pixelRatio,
//                     top: e.top * this.renderer.pixelRatio,
//                     left: e.left * this.renderer.pixelRatio
//                 }
//             }
//             getBoundingRect() {
//                 return {
//                     width: this._boundingRect.document.width,
//                     height: this._boundingRect.document.height,
//                     top: this._boundingRect.document.top,
//                     left: this._boundingRect.document.left,
//                     right: this._boundingRect.document.left + this._boundingRect.document.width,
//                     bottom: this._boundingRect.document.top + this._boundingRect.document.height
//                 }
//             }
//             resize() {
//                 this._setDocumentSizes(),
//                 "Plane" === this.type && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
//                 this._setWorldSizes(),
//                 this._applyWorldPositions());
//                 for (let e = 0; e < this.textures.length; e++)
//                     this.textures[e].resize();
//                 this.renderer.nextRender.add(()=>this._onAfterResizeCallback && this._onAfterResizeCallback())
//             }
//             mouseToPlaneCoords(e) {
//                 const t = this.scale ? this.scale : n.set(1, 1)
//                   , i = s.set((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2)
//                   , r = this._boundingRect.document.width * t.x / this.renderer.pixelRatio
//                   , h = this._boundingRect.document.height * t.y / this.renderer.pixelRatio
//                   , o = (this._boundingRect.document.top + i.y) / this.renderer.pixelRatio
//                   , d = (this._boundingRect.document.left + i.x) / this.renderer.pixelRatio;
//                 return s.set((e.x - d) / r * 2 - 1, 1 - (e.y - o) / h * 2)
//             }
//             onAfterResize(e) {
//                 return e && (this._onAfterResizeCallback = e),
//                 this
//             }
//         }
//         exports.DOMMesh = r;
//     }
//     , {
//         "./Mesh.js": "ORG2",
//         "../math/Vec2.js": "xSjB",
//         "../utils/utils.js": "mNyN"
//     }],
//     "ZlUS": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Camera = void 0;
//         var t = require("../math/Vec3.js")
//           , i = require("../math/Mat4.js");
//         class s {
//             constructor({fov: s=50, near: e=.1, far: h=150, width: a, height: o, pixelRatio: r=1}={}) {
//                 this.position = new t.Vec3,
//                 this.projectionMatrix = new i.Mat4,
//                 this.worldMatrix = new i.Mat4,
//                 this.viewMatrix = new i.Mat4,
//                 this._shouldUpdate = !1,
//                 this.setSize(),
//                 this.setPerspective(s, e, h, a, o, r)
//             }
//             setFov(t) {
//                 t = isNaN(t) ? this.fov : parseFloat(t),
//                 (t = Math.max(1, Math.min(t, 179))) !== this.fov && (this.fov = t,
//                 this.setPosition(),
//                 this._shouldUpdate = !0),
//                 this.setCSSPerspective()
//             }
//             setNear(t) {
//                 t = isNaN(t) ? this.near : parseFloat(t),
//                 (t = Math.max(t, .01)) !== this.near && (this.near = t,
//                 this._shouldUpdate = !0)
//             }
//             setFar(t) {
//                 t = isNaN(t) ? this.far : parseFloat(t),
//                 (t = Math.max(t, 50)) !== this.far && (this.far = t,
//                 this._shouldUpdate = !0)
//             }
//             setPixelRatio(t) {
//                 t !== this.pixelRatio && (this._shouldUpdate = !0),
//                 this.pixelRatio = t
//             }
//             setSize(t, i) {
//                 t === this.width && i === this.height || (this._shouldUpdate = !0),
//                 this.width = t,
//                 this.height = i
//             }
//             setPerspective(t, i, s, e, h, a) {
//                 this.setPixelRatio(a),
//                 this.setSize(e, h),
//                 this.setFov(t),
//                 this.setNear(i),
//                 this.setFar(s),
//                 this._shouldUpdate && this.updateProjectionMatrix()
//             }
//             setPosition() {
//                 this.position.set(0, 0, 1),
//                 this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]),
//                 this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
//             }
//             setCSSPerspective() {
//                 this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / Math.tan(.5 * this.fov * Math.PI / 180)
//             }
//             getScreenRatiosFromFov(t=0) {
//                 const i = this.position.z;
//                 t < i ? t -= i : t += i;
//                 const s = this.fov * Math.PI / 180
//                   , e = 2 * Math.tan(s / 2) * Math.abs(t);
//                 return {
//                     width: e * this.width / this.height,
//                     height: e
//                 }
//             }
//             updateProjectionMatrix() {
//                 const t = this.width / this.height
//                   , i = this.near * Math.tan(Math.PI / 180 * .5 * this.fov)
//                   , s = 2 * i
//                   , e = t * s
//                   , h = -.5 * e
//                   , a = h + e
//                   , o = i - s
//                   , r = 2 * this.near / (a - h)
//                   , p = 2 * this.near / (i - o)
//                   , n = (a + h) / (a - h)
//                   , d = (i + o) / (i - o)
//                   , M = -(this.far + this.near) / (this.far - this.near)
//                   , l = -2 * this.far * this.near / (this.far - this.near);
//                 this.projectionMatrix.setFromArray([r, 0, 0, 0, 0, p, 0, 0, n, d, M, -1, 0, 0, l, 0])
//             }
//             forceUpdate() {
//                 this._shouldUpdate = !0
//             }
//             cancelUpdate() {
//                 this._shouldUpdate = !1
//             }
//         }
//         exports.Camera = s;
//     }
//     , {
//         "../math/Vec3.js": "u8ZQ",
//         "../math/Mat4.js": "crJy"
//     }],
//     "s8oc": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Quat = void 0;
//         class e {
//             constructor(e=new Float32Array([0, 0, 0, 1]), s="XYZ") {
//                 this.type = "Quat",
//                 this.elements = e,
//                 this.axisOrder = s
//             }
//             setFromArray(e) {
//                 return this.elements[0] = e[0],
//                 this.elements[1] = e[1],
//                 this.elements[2] = e[2],
//                 this.elements[3] = e[3],
//                 this
//             }
//             setAxisOrder(e) {
//                 switch (e = e.toUpperCase()) {
//                 case "XYZ":
//                 case "YXZ":
//                 case "ZXY":
//                 case "ZYX":
//                 case "YZX":
//                 case "XZY":
//                     this.axisOrder = e;
//                     break;
//                 default:
//                     this.axisOrder = "XYZ"
//                 }
//                 return this
//             }
//             copy(e) {
//                 return this.elements = e.elements,
//                 this.axisOrder = e.axisOrder,
//                 this
//             }
//             clone() {
//                 return (new e).copy(this)
//             }
//             equals(e) {
//                 return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
//             }
//             setFromVec3(e) {
//                 const s = .5 * e.x
//                   , t = .5 * e.y
//                   , i = .5 * e.z
//                   , h = Math.cos(s)
//                   , r = Math.cos(t)
//                   , n = Math.cos(i)
//                   , l = Math.sin(s)
//                   , m = Math.sin(t)
//                   , a = Math.sin(i);
//                 return "XYZ" === this.axisOrder ? (this.elements[0] = l * r * n + h * m * a,
//                 this.elements[1] = h * m * n - l * r * a,
//                 this.elements[2] = h * r * a + l * m * n,
//                 this.elements[3] = h * r * n - l * m * a) : "YXZ" === this.axisOrder ? (this.elements[0] = l * r * n + h * m * a,
//                 this.elements[1] = h * m * n - l * r * a,
//                 this.elements[2] = h * r * a - l * m * n,
//                 this.elements[3] = h * r * n + l * m * a) : "ZXY" === this.axisOrder ? (this.elements[0] = l * r * n - h * m * a,
//                 this.elements[1] = h * m * n + l * r * a,
//                 this.elements[2] = h * r * a + l * m * n,
//                 this.elements[3] = h * r * n - l * m * a) : "ZYX" === this.axisOrder ? (this.elements[0] = l * r * n - h * m * a,
//                 this.elements[1] = h * m * n + l * r * a,
//                 this.elements[2] = h * r * a - l * m * n,
//                 this.elements[3] = h * r * n + l * m * a) : "YZX" === this.axisOrder ? (this.elements[0] = l * r * n + h * m * a,
//                 this.elements[1] = h * m * n + l * r * a,
//                 this.elements[2] = h * r * a - l * m * n,
//                 this.elements[3] = h * r * n - l * m * a) : "XZY" === this.axisOrder && (this.elements[0] = l * r * n - h * m * a,
//                 this.elements[1] = h * m * n - l * r * a,
//                 this.elements[2] = h * r * a + l * m * n,
//                 this.elements[3] = h * r * n + l * m * a),
//                 this
//             }
//         }
//         exports.Quat = e;
//     }
//     , {}],
//     "OsP7": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.Plane = void 0;
//         var t = require("./DOMMesh.js")
//           , e = require("../camera/Camera.js")
//           , i = require("../math/Mat4.js")
//           , s = require("../math/Vec2.js")
//           , r = require("../math/Vec3.js")
//           , n = require("../math/Quat.js")
//           , a = require("../utils/utils.js");
//         const o = new s.Vec2
//           , h = new r.Vec3
//           , l = new r.Vec3
//           , d = new r.Vec3
//           , c = new r.Vec3
//           , g = new r.Vec3
//           , u = new r.Vec3
//           , p = new r.Vec3
//           , _ = new r.Vec3
//           , m = new n.Quat
//           , w = new r.Vec3(.5,.5,0)
//           , b = new r.Vec3
//           , R = new r.Vec3
//           , y = new r.Vec3
//           , x = new r.Vec3
//           , f = new s.Vec2;
//         class M extends t.DOMMesh {
//             constructor(t, i, {widthSegments: s, heightSegments: r, renderOrder: n=0, depthTest: a, cullFace: o, uniforms: h, vertexShaderID: l, fragmentShaderID: d, vertexShader: c, fragmentShader: g, texturesOptions: u, crossOrigin: p, alwaysDraw: _=!1, visible: m=!0, transparent: w=!1, drawCheckMargins: b={
//                 top: 0,
//                 right: 0,
//                 bottom: 0,
//                 left: 0
//             }, autoloadSources: R=!0, watchScroll: y=!0, fov: x=50}={}) {
//                 super(t, i, "Plane", {
//                     widthSegments: s,
//                     heightSegments: r,
//                     renderOrder: n,
//                     depthTest: a,
//                     cullFace: o,
//                     uniforms: h,
//                     vertexShaderID: l,
//                     fragmentShaderID: d,
//                     vertexShader: c,
//                     fragmentShader: g,
//                     texturesOptions: u,
//                     crossOrigin: p
//                 }),
//                 this.index = this.renderer.planes.length,
//                 this.target = null,
//                 this.alwaysDraw = _,
//                 this._shouldDraw = !0,
//                 this.visible = m,
//                 this._transparent = w,
//                 this.drawCheckMargins = b,
//                 this.autoloadSources = R,
//                 this.watchScroll = y,
//                 this._updateMVMatrix = !1,
//                 this.camera = new e.Camera({
//                     fov: x,
//                     width: this.renderer._boundingRect.width,
//                     height: this.renderer._boundingRect.height,
//                     pixelRatio: this.renderer.pixelRatio
//                 }),
//                 this._program.compiled && (this._initPlane(),
//                 this.renderer.scene.addPlane(this),
//                 this.renderer.planes.push(this))
//             }
//             _programRestored() {
//                 this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]),
//                 this._initMatrices(),
//                 this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
//                 this._setWorldSizes(),
//                 this._applyWorldPositions(),
//                 this.renderer.scene.addPlane(this);
//                 for (let t = 0; t < this.textures.length; t++)
//                     this.textures[t]._parent = this,
//                     this.textures[t]._restoreContext();
//                 this._canDraw = !0
//             }
//             _initPlane() {
//                 this._initTransformValues(),
//                 this._initPositions(),
//                 this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
//                 this._initSources()
//             }
//             _initTransformValues() {
//                 this.rotation = new r.Vec3,
//                 this.rotation.onChange(()=>this._applyRotation()),
//                 this.quaternion = new n.Quat,
//                 this.relativeTranslation = new r.Vec3,
//                 this.relativeTranslation.onChange(()=>this._setTranslation()),
//                 this._translation = new r.Vec3,
//                 this.scale = new r.Vec3(1),
//                 this.scale.onChange(()=>{
//                     this.scale.z = 1,
//                     this._applyScale()
//                 }
//                 ),
//                 this.transformOrigin = new r.Vec3(.5,.5,0),
//                 this.transformOrigin.onChange(()=>{
//                     this._setWorldTransformOrigin(),
//                     this._updateMVMatrix = !0
//                 }
//                 )
//             }
//             resetPlane(t) {
//                 this._initTransformValues(),
//                 this._setWorldTransformOrigin(),
//                 null !== t && t ? (this.htmlElement = t,
//                 this.updatePosition()) : t || this.renderer.production || (0,
//                 a.throwWarning)(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
//             }
//             removeRenderTarget() {
//                 this.target && (this.renderer.scene.removePlane(this),
//                 this.target = null,
//                 this.renderer.scene.addPlane(this))
//             }
//             _initPositions() {
//                 this._initMatrices(),
//                 this._setWorldSizes(),
//                 this._applyWorldPositions()
//             }
//             _initMatrices() {
//                 const t = new i.Mat4;
//                 this._matrices = {
//                     world: {
//                         matrix: t
//                     },
//                     modelView: {
//                         name: "uMVMatrix",
//                         matrix: t,
//                         location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
//                     },
//                     projection: {
//                         name: "uPMatrix",
//                         matrix: t,
//                         location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
//                     },
//                     modelViewProjection: {
//                         matrix: t
//                     }
//                 }
//             }
//             _setPerspectiveMatrix() {
//                 this.camera._shouldUpdate && (this.renderer.useProgram(this._program),
//                 this.gl.uniformMatrix4fv(this._matrices.projection.location, !1, this._matrices.projection.matrix.elements)),
//                 this.camera.cancelUpdate()
//             }
//             setPerspective(t, e, i) {
//                 this.camera.setPerspective(t, e, i, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio),
//                 this.renderer.state.isContextLost && this.camera.forceUpdate(),
//                 this._matrices.projection.matrix = this.camera.projectionMatrix,
//                 this.camera._shouldUpdate && (this._setWorldSizes(),
//                 this._applyWorldPositions(),
//                 this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective),
//                 this._updateMVMatrix = this.camera._shouldUpdate
//             }
//             _setMVMatrix() {
//                 this._updateMVMatrix && (this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin),
//                 this._matrices.world.matrix.scale({
//                     x: this._boundingRect.world.width,
//                     y: this._boundingRect.world.height,
//                     z: 1
//                 }),
//                 this._matrices.modelView.matrix.copy(this._matrices.world.matrix),
//                 this._matrices.modelView.matrix.elements[14] -= this.camera.position.z,
//                 this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix),
//                 this.alwaysDraw || this._shouldDrawCheck(),
//                 this.renderer.useProgram(this._program),
//                 this.gl.uniformMatrix4fv(this._matrices.modelView.location, !1, this._matrices.modelView.matrix.elements)),
//                 this._updateMVMatrix = !1
//             }
//             _setWorldTransformOrigin() {
//                 this._boundingRect.world.transformOrigin = new r.Vec3((2 * this.transformOrigin.x - 1) * this._boundingRect.world.width,-(2 * this.transformOrigin.y - 1) * this._boundingRect.world.height,this.transformOrigin.z)
//             }
//             _documentToWorldSpace(t) {
//                 return l.set(t.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -t.y * this.renderer.pixelRatio / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height, t.z)
//             }
//             _setWorldSizes() {
//                 const t = this.camera.getScreenRatiosFromFov();
//                 this._boundingRect.world = {
//                     width: this._boundingRect.document.width / this.renderer._boundingRect.width * t.width / 2,
//                     height: this._boundingRect.document.height / this.renderer._boundingRect.height * t.height / 2,
//                     ratios: t
//                 },
//                 this._setWorldTransformOrigin()
//             }
//             _setWorldPosition() {
//                 const t = this._boundingRect.document.width / 2 + this._boundingRect.document.left
//                   , e = this._boundingRect.document.height / 2 + this._boundingRect.document.top
//                   , i = this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left
//                   , s = this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top;
//                 this._boundingRect.world.top = (s - e) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height,
//                 this._boundingRect.world.left = (t - i) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width
//             }
//             setScale(t) {
//                 t.type && "Vec2" === t.type ? (t.sanitizeNaNValuesWith(this.scale).max(o.set(.001, .001)),
//                 t.x === this.scale.x && t.y === this.scale.y || (this.scale.set(t.x, t.y, 1),
//                 this._applyScale())) : this.renderer.production || (0,
//                 a.throwWarning)(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", t)
//             }
//             _applyScale() {
//                 for (let t = 0; t < this.textures.length; t++)
//                     this.textures[t].resize();
//                 this._updateMVMatrix = !0
//             }
//             setRotation(t) {
//                 t.type && "Vec3" === t.type ? (t.sanitizeNaNValuesWith(this.rotation),
//                 t.equals(this.rotation) || (this.rotation.copy(t),
//                 this._applyRotation())) : this.renderer.production || (0,
//                 a.throwWarning)(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", t)
//             }
//             _applyRotation() {
//                 this.quaternion.setFromVec3(this.rotation),
//                 this._updateMVMatrix = !0
//             }
//             setTransformOrigin(t) {
//                 t.type && "Vec3" === t.type ? (t.sanitizeNaNValuesWith(this.transformOrigin),
//                 t.equals(this.transformOrigin) || (this.transformOrigin.copy(t),
//                 this._setWorldTransformOrigin(),
//                 this._updateMVMatrix = !0)) : this.renderer.production || (0,
//                 a.throwWarning)(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", t)
//             }
//             _setTranslation() {
//                 let t = h.set(0, 0, 0);
//                 this.relativeTranslation.equals(t) || (t = this._documentToWorldSpace(this.relativeTranslation)),
//                 this._translation.set(this._boundingRect.world.left + t.x, this._boundingRect.world.top + t.y, this.relativeTranslation.z / this.camera.CSSPerspective),
//                 this._updateMVMatrix = !0
//             }
//             setRelativeTranslation(t) {
//                 t.type && "Vec3" === t.type ? (t.sanitizeNaNValuesWith(this.relativeTranslation),
//                 t.equals(this.relativeTranslation) || (this.relativeTranslation.copy(t),
//                 this._setTranslation())) : this.renderer.production || (0,
//                 a.throwWarning)(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", t)
//             }
//             _applyWorldPositions() {
//                 this._setWorldPosition(),
//                 this._setTranslation()
//             }
//             updatePosition() {
//                 this._setDocumentSizes(),
//                 this._applyWorldPositions()
//             }
//             updateScrollPosition(t, e) {
//                 (t || e) && (this._boundingRect.document.top += e * this.renderer.pixelRatio,
//                 this._boundingRect.document.left += t * this.renderer.pixelRatio,
//                 this._applyWorldPositions())
//             }
//             _getIntersection(t, e) {
//                 let i = e.clone().sub(t)
//                   , s = t.clone();
//                 for (; s.z > -1; )
//                     s.add(i);
//                 return s
//             }
//             _getNearPlaneIntersections(t, e, i) {
//                 const s = this._matrices.modelViewProjection.matrix;
//                 if (1 === i.length)
//                     0 === i[0] ? (e[0] = this._getIntersection(e[1], p.set(.95, 1, 0).applyMat4(s)),
//                     e.push(this._getIntersection(e[3], _.set(-1, -.95, 0).applyMat4(s)))) : 1 === i[0] ? (e[1] = this._getIntersection(e[0], p.set(-.95, 1, 0).applyMat4(s)),
//                     e.push(this._getIntersection(e[2], _.set(1, -.95, 0).applyMat4(s)))) : 2 === i[0] ? (e[2] = this._getIntersection(e[3], p.set(-.95, -1, 0).applyMat4(s)),
//                     e.push(this._getIntersection(e[1], _.set(1, .95, 0).applyMat4(s)))) : 3 === i[0] && (e[3] = this._getIntersection(e[2], p.set(.95, -1, 0).applyMat4(s)),
//                     e.push(this._getIntersection(e[0], _.set(-1, .95, 0).applyMat4(s))));
//                 else if (2 === i.length)
//                     0 === i[0] && 1 === i[1] ? (e[0] = this._getIntersection(e[3], p.set(-1, -.95, 0).applyMat4(s)),
//                     e[1] = this._getIntersection(e[2], _.set(1, -.95, 0).applyMat4(s))) : 1 === i[0] && 2 === i[1] ? (e[1] = this._getIntersection(e[0], p.set(-.95, 1, 0).applyMat4(s)),
//                     e[2] = this._getIntersection(e[3], _.set(-.95, -1, 0).applyMat4(s))) : 2 === i[0] && 3 === i[1] ? (e[2] = this._getIntersection(e[1], p.set(1, .95, 0).applyMat4(s)),
//                     e[3] = this._getIntersection(e[0], _.set(-1, .95, 0).applyMat4(s))) : 0 === i[0] && 3 === i[1] && (e[0] = this._getIntersection(e[1], p.set(.95, 1, 0).applyMat4(s)),
//                     e[3] = this._getIntersection(e[2], _.set(.95, -1, 0).applyMat4(s)));
//                 else if (3 === i.length) {
//                     let r = 0;
//                     for (let e = 0; e < t.length; e++)
//                         i.includes(e) || (r = e);
//                     e = [e[r]],
//                     0 === r ? (e.push(this._getIntersection(e[0], p.set(-.95, 1, 0).applyMat4(s))),
//                     e.push(this._getIntersection(e[0], _.set(-1, .95, 0).applyMat4(s)))) : 1 === r ? (e.push(this._getIntersection(e[0], p.set(.95, 1, 0).applyMat4(s))),
//                     e.push(this._getIntersection(e[0], _.set(1, .95, 0).applyMat4(s)))) : 2 === r ? (e.push(this._getIntersection(e[0], p.set(.95, -1, 0).applyMat4(s))),
//                     e.push(this._getIntersection(e[0], _.set(1, -.95, 0).applyMat4(s)))) : 3 === r && (e.push(this._getIntersection(e[0], p.set(-.95, -1, 0).applyMat4(s))),
//                     e.push(this._getIntersection(e[0], _.set(-1.95, 0).applyMat4(s))))
//                 } else
//                     for (let r = 0; r < t.length; r++)
//                         e[r][0] = 1e4,
//                         e[r][1] = 1e4;
//                 return e
//             }
//             _getWorldCoords() {
//                 const t = [d.set(-1, 1, 0), c.set(1, 1, 0), g.set(1, -1, 0), u.set(-1, -1, 0)];
//                 let e = []
//                   , i = [];
//                 for (let o = 0; o < t.length; o++) {
//                     const s = t[o].applyMat4(this._matrices.modelViewProjection.matrix);
//                     e.push(s),
//                     Math.abs(s.z) > 1 && i.push(o)
//                 }
//                 i.length && (e = this._getNearPlaneIntersections(t, e, i));
//                 let s = 1 / 0
//                   , r = -1 / 0
//                   , n = 1 / 0
//                   , a = -1 / 0;
//                 for (let o = 0; o < e.length; o++) {
//                     const t = e[o];
//                     t.x < s && (s = t.x),
//                     t.x > r && (r = t.x),
//                     t.y < n && (n = t.y),
//                     t.y > a && (a = t.y)
//                 }
//                 return {
//                     top: a,
//                     right: r,
//                     bottom: n,
//                     left: s
//                 }
//             }
//             _computeWebGLBoundingRect() {
//                 const t = this._getWorldCoords();
//                 let e = {
//                     top: 1 - (t.top + 1) / 2,
//                     right: (t.right + 1) / 2,
//                     bottom: 1 - (t.bottom + 1) / 2,
//                     left: (t.left + 1) / 2
//                 };
//                 e.width = e.right - e.left,
//                 e.height = e.bottom - e.top,
//                 this._boundingRect.worldToDocument = {
//                     width: e.width * this.renderer._boundingRect.width,
//                     height: e.height * this.renderer._boundingRect.height,
//                     top: e.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
//                     left: e.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
//                     right: e.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + e.width * this.renderer._boundingRect.width,
//                     bottom: e.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + e.height * this.renderer._boundingRect.height
//                 }
//             }
//             getWebGLBoundingRect() {
//                 return this._matrices.modelViewProjection ? (this._boundingRect.worldToDocument && !this.alwaysDraw || this._computeWebGLBoundingRect(),
//                 this._boundingRect.worldToDocument) : this._boundingRect.document
//             }
//             _getWebGLDrawRect() {
//                 return this._computeWebGLBoundingRect(),
//                 {
//                     top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
//                     right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
//                     bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
//                     left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
//                 }
//             }
//             _shouldDrawCheck() {
//                 const t = this._getWebGLDrawRect();
//                 Math.round(t.right) <= this.renderer._boundingRect.left || Math.round(t.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(t.bottom) <= this.renderer._boundingRect.top || Math.round(t.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1,
//                 this.renderer.nextRender.add(()=>this._onLeaveViewCallback && this._onLeaveViewCallback())) : (this._shouldDraw || this.renderer.nextRender.add(()=>this._onReEnterViewCallback && this._onReEnterViewCallback()),
//                 this._shouldDraw = !0)
//             }
//             isDrawn() {
//                 return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
//             }
//             enableDepthTest(t) {
//                 this._depthTest = t
//             }
//             _initSources() {
//                 let t = 0;
//                 if (this.autoloadSources) {
//                     const e = [];
//                     for (let t = 0; t < this.htmlElement.getElementsByTagName("img").length; t++)
//                         e.push(this.htmlElement.getElementsByTagName("img")[t]);
//                     e.length > 0 && this.loadImages(e);
//                     const i = [];
//                     for (let t = 0; t < this.htmlElement.getElementsByTagName("video").length; t++)
//                         i.push(this.htmlElement.getElementsByTagName("video")[t]);
//                     i.length > 0 && this.loadVideos(i);
//                     const s = [];
//                     for (let t = 0; t < this.htmlElement.getElementsByTagName("canvas").length; t++)
//                         s.push(this.htmlElement.getElementsByTagName("canvas")[t]);
//                     s.length > 0 && this.loadCanvases(s),
//                     t = e.length + i.length + s.length
//                 }
//                 this.loader._setLoaderSize(t),
//                 this._canDraw = !0
//             }
//             _startDrawing() {
//                 this._canDraw && (this._onRenderCallback && this._onRenderCallback(),
//                 this.target ? this.renderer.bindFrameBuffer(this.target) : null === this.renderer.state.scenePassIndex && this.renderer.bindFrameBuffer(null),
//                 this._setPerspectiveMatrix(),
//                 this._setMVMatrix(),
//                 (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
//             }
//             mouseToPlaneCoords(t) {
//                 if (m.setAxisOrder(this.quaternion.axisOrder),
//                 m.equals(this.quaternion) && w.equals(this.transformOrigin))
//                     return super.mouseToPlaneCoords(t);
//                 {
//                     const e = {
//                         x: t.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio) * 2 - 1,
//                         y: 2 * (1 - t.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
//                     }
//                       , i = this.camera.position.clone()
//                       , s = b.set(e.x, e.y, -.5);
//                     s.unproject(this.camera),
//                     s.sub(i).normalize();
//                     const r = R.set(0, 0, -1);
//                     r.applyQuat(this.quaternion).normalize();
//                     const n = x.set(0, 0, 0)
//                       , a = r.dot(s);
//                     if (Math.abs(a) >= 1e-4) {
//                         const t = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix)
//                           , e = this._boundingRect.world.transformOrigin.clone().add(this._translation)
//                           , o = y.set(this._translation.x - e.x, this._translation.y - e.y, this._translation.z - e.z);
//                         o.applyQuat(this.quaternion),
//                         e.add(o);
//                         const h = r.dot(e.clone().sub(i)) / a;
//                         n.copy(i.add(s.multiplyScalar(h))),
//                         n.applyMat4(t)
//                     } else
//                         n.set(1 / 0, 1 / 0, 1 / 0);
//                     return f.set(n.x, n.y)
//                 }
//             }
//             onReEnterView(t) {
//                 return t && (this._onReEnterViewCallback = t),
//                 this
//             }
//             onLeaveView(t) {
//                 return t && (this._onLeaveViewCallback = t),
//                 this
//             }
//         }
//         exports.Plane = M;
//     }
//     , {
//         "./DOMMesh.js": "ebt3",
//         "../camera/Camera.js": "ZlUS",
//         "../math/Mat4.js": "crJy",
//         "../math/Vec2.js": "xSjB",
//         "../math/Vec3.js": "u8ZQ",
//         "../math/Quat.js": "s8oc",
//         "../utils/utils.js": "mNyN"
//     }],
//     "uniD": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.RenderTarget = void 0;
//         var e = require("../core/Texture.js")
//           , t = require("../utils/utils.js");
//         class r {
//             constructor(e, {shaderPass: r, depth: s=!1, clear: i=!0, minWidth: h=1024, minHeight: n=1024, texturesOptions: d={}}={}) {
//                 this.type = "RenderTarget",
//                 (e = e && e.renderer || e) && "Renderer" === e.type ? e.gl || (0,
//                 t.throwError)(this.type + ": Renderer WebGL context is undefined", e) : (0,
//                 t.throwError)(this.type + ": Renderer not passed as first argument", e),
//                 this.renderer = e,
//                 this.gl = this.renderer.gl,
//                 this.index = this.renderer.renderTargets.length,
//                 this._shaderPass = r,
//                 this._depth = s,
//                 this._shouldClear = i,
//                 this._minSize = {
//                     width: h * this.renderer.pixelRatio,
//                     height: n * this.renderer.pixelRatio
//                 },
//                 d = Object.assign({
//                     sampler: "uRenderTexture",
//                     isFBOTexture: !0,
//                     premultiplyAlpha: !1,
//                     anisotropy: 1,
//                     generateMipmap: !1,
//                     floatingPoint: "none",
//                     wrapS: this.gl.CLAMP_TO_EDGE,
//                     wrapT: this.gl.CLAMP_TO_EDGE,
//                     minFilter: this.gl.LINEAR,
//                     magFilter: this.gl.LINEAR
//                 }, d),
//                 this._texturesOptions = d,
//                 this.userData = {},
//                 this.uuid = (0,
//                 t.generateUUID)(),
//                 this.renderer.renderTargets.push(this),
//                 this.renderer.onSceneChange(),
//                 this._initRenderTarget()
//             }
//             _initRenderTarget() {
//                 this._setSize(),
//                 this.textures = [],
//                 this._createFrameBuffer()
//             }
//             _restoreContext() {
//                 this._setSize(),
//                 this._createFrameBuffer()
//             }
//             _setSize() {
//                 this._shaderPass && this._shaderPass._isScenePass ? this._size = {
//                     width: this.renderer._boundingRect.width,
//                     height: this.renderer._boundingRect.height
//                 } : this._size = {
//                     width: Math.max(this._minSize.width, this.renderer._boundingRect.width),
//                     height: Math.max(this._minSize.height, this.renderer._boundingRect.height)
//                 }
//             }
//             resize() {
//                 this._shaderPass && (this._setSize(),
//                 this.textures[0].resize(),
//                 this.renderer.bindFrameBuffer(this, !0),
//                 this._depth && this._bindDepthBuffer(),
//                 this.renderer.bindFrameBuffer(null))
//             }
//             _bindDepthBuffer() {
//                 this._depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer),
//                 this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._size.width, this._size.height),
//                 this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this._depthBuffer))
//             }
//             _createFrameBuffer() {
//                 if (this._frameBuffer = this.gl.createFramebuffer(),
//                 this.renderer.bindFrameBuffer(this, !0),
//                 this.textures.length)
//                     this.textures[0]._parent = this,
//                     this.textures[0]._restoreContext();
//                 else {
//                     new e.Texture(this.renderer,this._texturesOptions).addParent(this)
//                 }
//                 this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0]._sampler.texture, 0),
//                 this._depth && (this._depthBuffer = this.gl.createRenderbuffer(),
//                 this._bindDepthBuffer()),
//                 this.renderer.bindFrameBuffer(null)
//             }
//             getTexture() {
//                 return this.textures[0]
//             }
//             remove() {
//                 this._shaderPass ? this.renderer.production || (0,
//                 t.throwWarning)(this.type + ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:", this._shaderPass) : (this._dispose(),
//                 this.renderer.removeRenderTarget(this))
//             }
//             _dispose() {
//                 this._frameBuffer && (this.gl.deleteFramebuffer(this._frameBuffer),
//                 this._frameBuffer = null),
//                 this._depthBuffer && (this.gl.deleteRenderbuffer(this._depthBuffer),
//                 this._depthBuffer = null),
//                 this.textures[0]._dispose(),
//                 this.textures = []
//             }
//         }
//         exports.RenderTarget = r;
//     }
//     , {
//         "../core/Texture.js": "eenL",
//         "../utils/utils.js": "mNyN"
//     }],
//     "EQsX": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.ShaderPass = void 0;
//         var e = require("../core/DOMMesh.js")
//           , r = require("./RenderTarget.js")
//           , s = require("../core/Texture.js");
//         class t extends e.DOMMesh {
//             constructor(e, {widthSegments: r, heightSegments: s, renderOrder: t, depthTest: a, cullFace: h, uniforms: n, vertexShaderID: i, fragmentShaderID: d, vertexShader: c, fragmentShader: u, texturesOptions: o, crossOrigin: l, depth: g=!1, clear: x=!0, renderTarget: _}={}) {
//                 super(e, e.container, "ShaderPass", {
//                     widthSegments: 1,
//                     heightSegments: 1,
//                     renderOrder: t,
//                     depthTest: a,
//                     cullFace: "back",
//                     uniforms: n,
//                     vertexShaderID: i,
//                     fragmentShaderID: d,
//                     vertexShader: c,
//                     fragmentShader: u,
//                     texturesOptions: o,
//                     crossOrigin: l
//                 }),
//                 this._isScenePass = !0,
//                 this.index = this.renderer.shaderPasses.length,
//                 this.renderOrder = 0,
//                 this._depth = g,
//                 this._shouldClear = x,
//                 this.target = _,
//                 this.target && (this._isScenePass = !1,
//                 this._shouldClear = this.target._shouldClear),
//                 this._program.compiled && (this._initShaderPass(),
//                 this.renderer.shaderPasses.push(this),
//                 this.renderer.nextRender.add(()=>{
//                     this.renderer.scene.addShaderPass(this)
//                 }
//                 ))
//             }
//             _programRestored() {
//                 this._isScenePass ? this.renderer.scene.stacks.scenePasses.push(this.index) : this.renderer.scene.stacks.renderPasses.push(this.index);
//                 for (let e = 0; e < this.textures.length; e++)
//                     this.textures[e]._parent = this,
//                     this.textures[e]._restoreContext();
//                 this._canDraw = !0
//             }
//             _initShaderPass() {
//                 this.target ? (this.setRenderTarget(this.target),
//                 this.target._shaderPass = this) : this._createFrameBuffer(),
//                 new s.Texture(this.renderer,{
//                     sampler: "uRenderTexture",
//                     isFBOTexture: !0,
//                     fromTexture: this.target.getTexture()
//                 }).addParent(this),
//                 this.loader._setLoaderSize(0),
//                 this._canDraw = !0,
//                 this.renderer.needRender()
//             }
//             _createFrameBuffer() {
//                 const e = new r.RenderTarget(this.renderer,{
//                     shaderPass: this,
//                     clear: this._shouldClear,
//                     depth: this._depth,
//                     texturesOptions: this._texturesOptions
//                 });
//                 this.setRenderTarget(e)
//             }
//             _startDrawing() {
//                 this._canDraw && (this._onRenderCallback && this._onRenderCallback(),
//                 this._isScenePass ? this.renderer.state.scenePassIndex + 1 < this.renderer.scene.stacks.scenePasses.length ? (this.renderer.bindFrameBuffer(this.renderer.scene.stacks.scenePasses[this.renderer.state.scenePassIndex + 1].target),
//                 this.renderer.state.scenePassIndex++) : this.renderer.bindFrameBuffer(null) : null === this.renderer.state.scenePassIndex && this.renderer.bindFrameBuffer(null),
//                 this.renderer.state.forceBufferUpdate = !0,
//                 this._draw())
//             }
//         }
//         exports.ShaderPass = t;
//     }
//     , {
//         "../core/DOMMesh.js": "ebt3",
//         "./RenderTarget.js": "uniD",
//         "../core/Texture.js": "eenL"
//     }],
//     "b9q3": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.PingPongPlane = void 0;
//         var e = require("../core/Plane.js")
//           , t = require("../framebuffers/RenderTarget.js");
//         class s extends e.Plane {
//             constructor(e, s, {sampler: r="uPingPongTexture", widthSegments: a, heightSegments: n, renderOrder: i, depthTest: h, cullFace: d, uniforms: o, vertexShaderID: l, fragmentShaderID: P, vertexShader: u, fragmentShader: g, texturesOptions: c, crossOrigin: p, alwaysDraw: x, visible: w, transparent: f, drawCheckMargins: m, autoloadSources: R, watchScroll: S, fov: _}={}) {
//                 super(e, s, {
//                     widthSegments: a,
//                     heightSegments: n,
//                     renderOrder: i,
//                     depthTest: !1,
//                     cullFace: d,
//                     uniforms: o,
//                     vertexShaderID: l,
//                     fragmentShaderID: P,
//                     vertexShader: u,
//                     fragmentShader: g,
//                     texturesOptions: c,
//                     crossOrigin: p,
//                     alwaysDraw: x,
//                     visible: w,
//                     transparent: f,
//                     drawCheckMargins: m,
//                     autoloadSources: !1,
//                     watchScroll: S,
//                     fov: _
//                 }),
//                 this.renderer.scene.removePlane(this),
//                 this.type = "PingPongPlane",
//                 this.renderer.scene.addPlane(this),
//                 this.readPass = new t.RenderTarget(e,{
//                     depth: !1,
//                     clear: !1,
//                     texturesOptions: c
//                 }),
//                 this.writePass = new t.RenderTarget(e,{
//                     depth: !1,
//                     clear: !1,
//                     texturesOptions: c
//                 });
//                 this.createTexture({
//                     sampler: r
//                 });
//                 let v = 0;
//                 this.readPass.getTexture().onSourceUploaded(()=>{
//                     v++,
//                     this._checkIfReady(v)
//                 }
//                 ),
//                 this.writePass.getTexture().onSourceUploaded(()=>{
//                     v++,
//                     this._checkIfReady(v)
//                 }
//                 ),
//                 this.setRenderTarget(this.readPass),
//                 this._onRenderCallback = (()=>{
//                     this.readPass && this.writePass && this.textures[0] && this.textures[0]._uploaded && this.setRenderTarget(this.writePass),
//                     this._onPingPongRenderCallback && this._onPingPongRenderCallback()
//                 }
//                 ),
//                 this._onAfterRenderCallback = (()=>{
//                     this.readPass && this.writePass && this.textures[0] && this.textures[0]._uploaded && this._swapPasses(),
//                     this._onPingPongAfterRenderCallback && this._onPingPongAfterRenderCallback()
//                 }
//                 )
//             }
//             _checkIfReady(e) {
//                 2 === e && this.renderer.nextRender.add(()=>{
//                     this.textures[0].copy(this.target.getTexture())
//                 }
//                 )
//             }
//             _swapPasses() {
//                 const e = this.readPass;
//                 this.readPass = this.writePass,
//                 this.writePass = e,
//                 this.textures[0].copy(this.readPass.getTexture())
//             }
//             getTexture() {
//                 return this.textures[0]
//             }
//             onRender(e) {
//                 return e && (this._onPingPongRenderCallback = e),
//                 this
//             }
//             onAfterRender(e) {
//                 return e && (this._onPingPongAfterRenderCallback = e),
//                 this
//             }
//             remove() {
//                 this.target = null,
//                 this.renderer.bindFrameBuffer(null),
//                 this.writePass && (this.writePass.remove(),
//                 this.writePass = null),
//                 this.readPass && (this.readPass.remove(),
//                 this.readPass = null),
//                 super.remove()
//             }
//         }
//         exports.PingPongPlane = s;
//     }
//     , {
//         "../core/Plane.js": "OsP7",
//         "../framebuffers/RenderTarget.js": "uniD"
//     }],
//     "li4y": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.FXAAPass = void 0;
//         var e = require("../framebuffers/ShaderPass.js");
//         class r extends e.ShaderPass {
//             constructor(e, {renderOrder: r, depthTest: n, texturesOptions: t, crossOrigin: u, depth: a, clear: i, renderTarget: o}={}) {
//                 super(e, {
//                     fragmentShader: "\n            precision mediump float;\n            \n            varying vec3 vVertexPosition;\n            varying vec2 vTextureCoord;\n        \n            uniform sampler2D uRenderTexture;\n            \n            uniform vec2 uResolution;\n            \n            #define FXAA_REDUCE_MIN   (1.0/128.0)\n            #define FXAA_REDUCE_MUL   (1.0/8.0)\n            #define FXAA_SPAN_MAX     8.0\n            \n            void main() {\n                vec2 res = 1.0 / uResolution;\n            \n                vec3 rgbNW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, -1.0) * res)).xyz;\n                vec3 rgbNE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, -1.0) * res)).xyz;\n                vec3 rgbSW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, 1.0) * res)).xyz;\n                vec3 rgbSE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, 1.0) * res)).xyz;\n                vec4 rgbaM = texture2D(uRenderTexture, vTextureCoord.xy * res);\n                vec3 rgbM = rgbaM.xyz;\n                vec3 luma = vec3(0.299, 0.587, 0.114);\n            \n                float lumaNW = dot(rgbNW, luma);\n                float lumaNE = dot(rgbNE, luma);\n                float lumaSW = dot(rgbSW, luma);\n                float lumaSE = dot(rgbSE, luma);\n                float lumaM  = dot(rgbM,  luma);\n                float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n                float lumaMax = max(lumaM, max(max(lumaNW, lumaNE) , max(lumaSW, lumaSE)));\n            \n                vec2 dir;\n                dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n                dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n            \n                float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n            \n                float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n                dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n                      max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                            dir * rcpDirMin)) * res;\n                vec4 rgbA = (1.0/2.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (1.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (2.0/3.0 - 0.5)));\n                vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (0.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (3.0/3.0 - 0.5)));\n                float lumaB = dot(rgbB, vec4(luma, 0.0));\n            \n                if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n                    gl_FragColor = rgbA;\n                } else {\n                    gl_FragColor = rgbB;\n                }\n            }\n        ",
//                     uniforms: {
//                         resolution: {
//                             name: "uResolution",
//                             type: "2f",
//                             value: [0, 0]
//                         }
//                     },
//                     renderOrder: r,
//                     depthTest: n,
//                     texturesOptions: t,
//                     crossOrigin: u,
//                     depth: a,
//                     clear: i,
//                     renderTarget: o
//                 }),
//                 this.uniforms.resolution.value = [this.renderer._boundingRect.width, this.renderer._boundingRect.height],
//                 this._onAfterResizeCallback = (()=>{
//                     this.uniforms.resolution.value = [this.renderer._boundingRect.width, this.renderer._boundingRect.height],
//                     this._onFXAAPassAfterResizeCallback && this._onFXAAPassAfterResizeCallback()
//                 }
//                 )
//             }
//             onAfterResize(e) {
//                 return e && (this._onFXAAPassAfterResizeCallback = e),
//                 this
//             }
//         }
//         exports.FXAAPass = r;
//     }
//     , {
//         "../framebuffers/ShaderPass.js": "EQsX"
//     }],
//     "aeXH": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         Object.defineProperty(exports, "Curtains", {
//             enumerable: !0,
//             get: function() {
//                 return e.Curtains
//             }
//         }),
//         Object.defineProperty(exports, "Plane", {
//             enumerable: !0,
//             get: function() {
//                 return r.Plane
//             }
//         }),
//         Object.defineProperty(exports, "Texture", {
//             enumerable: !0,
//             get: function() {
//                 return t.Texture
//             }
//         }),
//         Object.defineProperty(exports, "RenderTarget", {
//             enumerable: !0,
//             get: function() {
//                 return n.RenderTarget
//             }
//         }),
//         Object.defineProperty(exports, "ShaderPass", {
//             enumerable: !0,
//             get: function() {
//                 return u.ShaderPass
//             }
//         }),
//         Object.defineProperty(exports, "TextureLoader", {
//             enumerable: !0,
//             get: function() {
//                 return a.TextureLoader
//             }
//         }),
//         Object.defineProperty(exports, "Vec2", {
//             enumerable: !0,
//             get: function() {
//                 return o.Vec2
//             }
//         }),
//         Object.defineProperty(exports, "Vec3", {
//             enumerable: !0,
//             get: function() {
//                 return s.Vec3
//             }
//         }),
//         Object.defineProperty(exports, "Mat4", {
//             enumerable: !0,
//             get: function() {
//                 return i.Mat4
//             }
//         }),
//         Object.defineProperty(exports, "Quat", {
//             enumerable: !0,
//             get: function() {
//                 return c.Quat
//             }
//         }),
//         Object.defineProperty(exports, "PingPongPlane", {
//             enumerable: !0,
//             get: function() {
//                 return f.PingPongPlane
//             }
//         }),
//         Object.defineProperty(exports, "FXAAPass", {
//             enumerable: !0,
//             get: function() {
//                 return P.FXAAPass
//             }
//         });
//         var e = require("./core/Curtains.js")
//           , r = require("./core/Plane.js")
//           , t = require("./core/Texture.js")
//           , n = require("./framebuffers/RenderTarget.js")
//           , u = require("./framebuffers/ShaderPass.js")
//           , a = require("./loaders/TextureLoader.js")
//           , o = require("./math/Vec2.js")
//           , s = require("./math/Vec3.js")
//           , i = require("./math/Mat4.js")
//           , c = require("./math/Quat.js")
//           , f = require("./extras/PingPongPlane.js")
//           , P = require("./extras/FXAAPass.js");
//     }
//     , {
//         "./core/Curtains.js": "Qp9X",
//         "./core/Plane.js": "OsP7",
//         "./core/Texture.js": "eenL",
//         "./framebuffers/RenderTarget.js": "uniD",
//         "./framebuffers/ShaderPass.js": "EQsX",
//         "./loaders/TextureLoader.js": "VBgA",
//         "./math/Vec2.js": "xSjB",
//         "./math/Vec3.js": "u8ZQ",
//         "./math/Mat4.js": "crJy",
//         "./math/Quat.js": "s8oc",
//         "./extras/PingPongPlane.js": "b9q3",
//         "./extras/FXAAPass.js": "li4y"
//     }],
//     "Nmvz": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = exports.VelocityTracker = void 0;
//         var t, r, e, i, n, o, s, a, c, u = function() {
//             return t || "undefined" != typeof window && (t = window.gsap)
//         }, p = {}, f = function(t) {
//             return Math.round(1e4 * t) / 1e4
//         }, h = function(t) {
//             return c(t).id
//         }, g = function(t) {
//             return p[h("string" == typeof t ? e(t)[0] : t)]
//         }, v = function(t) {
//             var r, e = n;
//             if (t - s >= .05)
//                 for (a = s,
//                 s = t; e; )
//                     ((r = e.g(e.t, e.p)) !== e.v1 || t - e.t1 > .2) && (e.v2 = e.v1,
//                     e.v1 = r,
//                     e.t2 = e.t1,
//                     e.t1 = t),
//                     e = e._next
//         }, l = {
//             deg: 360,
//             rad: 2 * Math.PI
//         }, d = function() {
//             (t = u()) && (e = t.utils.toArray,
//             i = t.utils.getUnit,
//             c = t.core.getCache,
//             o = t.ticker,
//             r = 1)
//         }, _ = function(t, r, e, n) {
//             this.t = t,
//             this.p = r,
//             this.g = t._gsap.get,
//             this.rCap = l[e || i(this.g(t, r))],
//             this.v1 = this.v2 = 0,
//             this.t1 = this.t2 = o.time,
//             n && (this._next = n,
//             n._prev = this)
//         }, k = function() {
//             function i(t, i) {
//                 r || d(),
//                 this.target = e(t)[0],
//                 p[h(this.target)] = this,
//                 this._props = {},
//                 i && this.add(i)
//             }
//             i.register = function(r) {
//                 t = r,
//                 d()
//             }
//             ;
//             var c = i.prototype;
//             return c.get = function(t, r) {
//                 var e, i, n = this._props[t] || console.warn("Not tracking " + t + " velocity.");
//                 return e = parseFloat(r ? n.v1 : n.g(n.t, n.p)) - parseFloat(n.v2),
//                 (i = n.rCap) && (e %= i) !== e % (i / 2) && (e = e < 0 ? e + i : e - i),
//                 f(e / ((r ? n.t1 : o.time) - n.t2))
//             }
//             ,
//             c.getAll = function() {
//                 var t, r = {}, e = this._props;
//                 for (t in e)
//                     r[t] = this.get(t);
//                 return r
//             }
//             ,
//             c.isTracking = function(t) {
//                 return t in this._props
//             }
//             ,
//             c.add = function(t, r) {
//                 t in this._props || (n || (o.add(v),
//                 s = a = o.time),
//                 n = this._props[t] = new _(this.target,t,r,n))
//             }
//             ,
//             c.remove = function(t) {
//                 var r, e, i = this._props[t];
//                 i && (r = i._prev,
//                 e = i._next,
//                 r && (r._next = e),
//                 e ? e._prev = r : n === i && (o.remove(v),
//                 n = 0),
//                 delete this._props[t])
//             }
//             ,
//             c.kill = function(t) {
//                 for (var r in this._props)
//                     this.remove(r);
//                 t || delete p[h(this.target)]
//             }
//             ,
//             i.track = function(t, n, o) {
//                 r || d();
//                 for (var s, a, c = [], u = e(t), p = n.split(","), f = (o || "").split(","), h = u.length; h--; ) {
//                     for (s = g(u[h]) || new i(u[h]),
//                     a = p.length; a--; )
//                         s.add(p[a], f[a] || f[0]);
//                     c.push(s)
//                 }
//                 return c
//             }
//             ,
//             i.untrack = function(t, r) {
//                 var i = (r || "").split(",");
//                 e(t).forEach(function(t) {
//                     var r = g(t);
//                     r && (i.length ? i.forEach(function(t) {
//                         return r.remove(t)
//                     }) : r.kill(1))
//                 })
//             }
//             ,
//             i.isTracking = function(t, r) {
//                 var e = g(t);
//                 return e && e.isTracking(r)
//             }
//             ,
//             i.getVelocity = function(t, r) {
//                 var e = g(t);
//                 return e && e.isTracking(r) ? e.get(r) : console.warn("Not tracking velocity of " + r)
//             }
//             ,
//             i
//         }();
//         exports.default = exports.VelocityTracker = k,
//         k.getByTarget = g,
//         u() && t.registerPlugin(k);
//     }
//     , {}],
//     "h7Qv": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         Object.defineProperty(exports, "VelocityTracker", {
//             enumerable: !0,
//             get: function() {
//                 return p.VelocityTracker
//             }
//         }),
//         exports.default = exports.InertiaPlugin = void 0;
//         var t, e, r, n, i, o, a, s, c, u, f, l, p = require("./utils/VelocityTracker.js"), g = p.VelocityTracker.getByTarget, d = function() {
//             return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
//         }, v = function(t) {
//             return "string" == typeof t
//         }, m = function(t) {
//             return "number" == typeof t
//         }, y = function(t) {
//             return "object" == typeof t
//         }, h = function(t) {
//             return "function" == typeof t
//         }, x = 1, k = Array.isArray, T = function(t) {
//             return t
//         }, w = 1e10, P = 1 / w, _ = .05, F = function(t) {
//             return Math.round(1e4 * t) / 1e4
//         }, N = function(t, e, r) {
//             for (var n in e)
//                 n in t || n === r || (t[n] = e[n]);
//             return t
//         }, b = function t(e) {
//             var r, n, i = {};
//             for (r in e)
//                 i[r] = y(n = e[r]) ? t(n) : n;
//             return i
//         }, M = function(t, e, r, n, i) {
//             var o, a, s, c, u = e.length, f = 0, l = w;
//             if (y(t)) {
//                 for (; u--; ) {
//                     for (s in o = e[u],
//                     a = 0,
//                     t)
//                         a += (c = o[s] - t[s]) * c;
//                     a < l && (f = u,
//                     l = a)
//                 }
//                 if ((i || w) < w && i < Math.sqrt(l))
//                     return t
//             } else
//                 for (; u--; )
//                     (a = (o = e[u]) - t) < 0 && (a = -a),
//                     a < l && o >= n && o <= r && (f = u,
//                     l = a);
//             return e[f]
//         }, O = function(t, e, r, n, i, o) {
//             if ("auto" === t.end)
//                 return t;
//             var a, s, c = t.end;
//             if (r = isNaN(r) ? w : r,
//             n = isNaN(n) ? -w : n,
//             y(e)) {
//                 if (a = e.calculated ? e : (h(c) ? c(e) : M(e, c, r, n, o)) || e,
//                 !e.calculated) {
//                     for (s in a)
//                         e[s] = a[s];
//                     e.calculated = !0
//                 }
//                 a = a[i]
//             } else
//                 a = h(c) ? c(e) : k(c) ? M(e, c, r, n, o) : parseFloat(c);
//             return a > r ? a = r : a < n && (a = n),
//             {
//                 max: a,
//                 min: a,
//                 unitFactor: t.unitFactor
//             }
//         }, V = function(t, e, r) {
//             return isNaN(t[e]) ? r : +t[e]
//         }, j = function(t, e) {
//             return e * _ * t / u
//         }, A = function(t, e, r) {
//             return Math.abs((e - t) * u / r / _)
//         }, E = {
//             resistance: 1,
//             checkpoint: 1,
//             preventOvershoot: 1,
//             linkedProps: 1,
//             radius: 1,
//             duration: 1
//         }, I = function(t, e, r, n) {
//             if (e.linkedProps) {
//                 var i, o, a, s, c, u, f = e.linkedProps.split(","), l = {};
//                 for (i = 0; i < f.length; i++)
//                     (a = e[o = f[i]]) && (s = m(a.velocity) ? a.velocity : (c = c || g(t)) && c.isTracking(o) ? c.get(o) : 0,
//                     u = Math.abs(s / V(a, "resistance", n)),
//                     l[o] = parseFloat(r(t, o)) + j(s, u));
//                 return l
//             }
//         }, R = function(t, e, r, i, a, s) {
//             if (void 0 === r && (r = 10),
//             void 0 === i && (i = .2),
//             void 0 === a && (a = 1),
//             void 0 === s && (s = 0),
//             v(t) && (t = n(t)[0]),
//             !t)
//                 return 0;
//             var u, p, d, h, x, k, T, _, F, M, R = 0, q = w, B = e.inertia || e, C = c(t).get, U = V(B, "resistance", o.resistance);
//             for (u in M = I(t, B, C, U),
//             B)
//                 E[u] || (p = B[u],
//                 y(p) || ((_ = _ || g(t)) && _.isTracking(u) ? p = m(p) ? {
//                     velocity: p
//                 } : {
//                     velocity: _.get(u)
//                 } : (h = +p || 0,
//                 d = Math.abs(h / U))),
//                 y(p) && (h = m(p.velocity) ? p.velocity : (_ = _ || g(t)) && _.isTracking(u) ? _.get(u) : 0,
//                 d = f(i, r, Math.abs(h / V(p, "resistance", U))),
//                 k = (x = parseFloat(C(t, u)) || 0) + j(h, d),
//                 "end"in p && (p = O(p, M && u in M ? M : k, p.max, p.min, u, B.radius),
//                 s && (l === e && (l = B = b(e)),
//                 B[u] = N(p, B[u], "end"))),
//                 "max"in p && k > +p.max + P ? (F = p.unitFactor || o.unitFactors[u] || 1,
//                 (T = x > p.max && p.min !== p.max || h * F > -15 && h * F < 45 ? i + .1 * (r - i) : A(x, p.max, h)) + a < q && (q = T + a)) : "min"in p && k < +p.min - P && (F = p.unitFactor || o.unitFactors[u] || 1,
//                 (T = x < p.min && p.min !== p.max || h * F > -45 && h * F < 15 ? i + .1 * (r - i) : A(x, p.min, h)) + a < q && (q = T + a)),
//                 T > R && (R = T)),
//                 d > R && (R = d));
//             return R > q && (R = q),
//             R > r ? r : R < i ? i : R
//         }, q = function() {
//             (t = d()) && (r = t.parseEase,
//             n = t.utils.toArray,
//             a = t.utils.getUnit,
//             c = t.core.getCache,
//             f = t.utils.clamp,
//             i = r("power3"),
//             u = i(.05),
//             s = t.core.PropTween,
//             t.config({
//                 resistance: 100,
//                 unitFactors: {
//                     time: 1e3,
//                     totalTime: 1e3,
//                     progress: 1e3,
//                     totalProgress: 1e3
//                 }
//             }),
//             o = t.config(),
//             t.registerPlugin(p.VelocityTracker),
//             e = 1)
//         }, B = {
//             version: "3.6.0",
//             name: "inertia",
//             register: function(e) {
//                 t = e,
//                 q()
//             },
//             init: function(t, r, n, i, c) {
//                 e || q();
//                 var u = g(t);
//                 if ("auto" === r) {
//                     if (!u)
//                         return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
//                     r = u.getAll()
//                 }
//                 this.target = t,
//                 this.tween = n,
//                 l = r;
//                 var f, p, d, v, k, w, P, _, F, N = t._gsap, b = N.get, M = r.duration, A = y(M), B = r.preventOvershoot || A && 0 === M.overshoot, C = V(r, "resistance", o.resistance), U = m(M) ? M : R(t, r, A && M.max || 10, A && M.min || .2, A && "overshoot"in M ? +M.overshoot : B ? 0 : 1, !0);
//                 for (f in r = l,
//                 l = 0,
//                 F = I(t, r, b, C),
//                 r)
//                     E[f] || (p = r[f],
//                     h(p) && (p = p(i, t, c)),
//                     m(p) ? k = p : y(p) && !isNaN(p.velocity) ? k = +p.velocity : u && u.isTracking(f) ? k = u.get(f) : console.warn("ERROR: No velocity was defined for " + t + " property: " + f),
//                     w = j(k, U),
//                     _ = 0,
//                     d = b(t, f),
//                     v = a(d),
//                     d = parseFloat(d),
//                     y(p) && (P = d + w,
//                     "end"in p && (p = O(p, F && f in F ? F : P, p.max, p.min, f, r.radius)),
//                     "max"in p && +p.max < P ? B || p.preventOvershoot ? w = p.max - d : _ = p.max - d - w : "min"in p && +p.min > P && (B || p.preventOvershoot ? w = p.min - d : _ = p.min - d - w)),
//                     this._props.push(f),
//                     this._pt = new s(this._pt,t,f,d,0,T,0,N.set(t, f, this)),
//                     this._pt.u = v || 0,
//                     this._pt.c1 = w,
//                     this._pt.c2 = _);
//                 return n.duration(U),
//                 x
//             },
//             render: function(t, e) {
//                 var r = e._pt;
//                 for (t = i(e.tween._time / e.tween._dur); r; )
//                     r.set(r.t, r.p, F(r.s + r.c1 * t + r.c2 * t * t) + r.u, r.d, t),
//                     r = r._next
//             }
//         };
//         exports.default = exports.InertiaPlugin = B,
//         "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t) {
//             return B[t] = p.VelocityTracker[t]
//         }),
//         d() && t.registerPlugin(B);
//     }
//     , {
//         "./utils/VelocityTracker.js": "Nmvz"
//     }],
//     "mbMG": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = a(require("@babel/runtime/helpers/classCallCheck"))
//           , n = a(require("@babel/runtime/helpers/createClass"))
//           , r = a(require("@babel/runtime/helpers/defineProperty"))
//           , t = require("curtainsjs")
//           , u = a(require("./Utils"));
//         function a(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var i = function() {
//             function r() {
//                 (0,
//                 e.default)(this, r)
//             }
//             return (0,
//             n.default)(r, null, [{
//                 key: "init",
//                 value: function() {
//                     r.createInstance(),
//                     r.createTextureLoader(),
//                     r.setupListeners(),
//                     window.APP.rAF.items.push(r)
//                 }
//             }, {
//                 key: "createInstance",
//                 value: function() {
//                     r.instance = new t.Curtains({
//                         container: "curtains-wrapper",
//                         pixelRatio: Math.min(1.5, window.devicePixelRatio),
//                         autoRender: !1,
//                         watchScroll: !1,
//                         antialias: !1,
//                         premultipliedAlpha: !0
//                     })
//                 }
//             }, {
//                 key: "render",
//                 value: function() {
//                     r.isRunning && (r.instance.render(),
//                     console.log("curtains rendering"))
//                 }
//             }, {
//                 key: "pause",
//                 value: function() {
//                     r.instance && (r.isRunning = !1)
//                 }
//             }, {
//                 key: "resume",
//                 value: function() {
//                     r.instance && (r.isRunning = !0)
//                 }
//             }, {
//                 key: "destroy",
//                 value: function() {
//                     r.instance.dispose(),
//                     r.instance = null,
//                     window.APP.rAF.items = window.APP.rAF.items.filter(function(e) {
//                         return e !== r
//                     })
//                 }
//             }, {
//                 key: "removeShaderPasses",
//                 value: function() {
//                     r.instance.shaderPasses.forEach(function(e) {
//                         return e.remove()
//                     })
//                 }
//             }, {
//                 key: "removePlanes",
//                 value: function() {
//                     r.instance.planes.forEach(function(e) {
//                         return e.remove()
//                     })
//                 }
//             }, {
//                 key: "setupListeners",
//                 value: function() {
//                     r.instance.onScroll(function() {}).onRender(function() {}).onContextLost(function() {
//                         r.instance.restoreContext()
//                     })
//                 }
//             }, {
//                 key: "createTextureLoader",
//                 value: function() {
//                     r.textureLoader = new t.TextureLoader(r.instance)
//                 }
//             }, {
//                 key: "preloadTextures",
//                 value: function() {
//                     return new Promise(function(e) {
//                         var n = [{
//                             url: "/images/homepage/carousel/01.jpg",
//                             gallery: "homepage"
//                         }, {
//                             url: "/images/homepage/carousel/02.jpg",
//                             gallery: "homepage"
//                         }, {
//                             url: "/images/homepage/carousel/03.jpg",
//                             gallery: "homepage"
//                         }, {
//                             url: "/images/wines/01.jpg",
//                             gallery: "products"
//                         }, {
//                             url: "/images/wines/02.jpg",
//                             gallery: "products"
//                         }, {
//                             url: "/images/wines/03.jpg",
//                             gallery: "products"
//                         }, {
//                             url: "/images/displacement.jpg",
//                             gallery: "displacement"
//                         }].map(function(e) {
//                             return e.url = u.default.replaceImageFormat(e.url),
//                             e
//                         })
//                           , t = n.map(function(e) {
//                             return e.url
//                         })
//                           , a = 0;
//                         r.textureLoader.loadSources(t, {}, function(u) {
//                             u.setMinFilter(r.instance.gl.LINEAR_MIPMAP_NEAREST);
//                             var i = n.find(function(e) {
//                                 return u.source.src.indexOf(e.url) > -1
//                             }).gallery;
//                             if (r.textures[i].push(u),
//                             ++a === t.length) {
//                                 for (var s = 0, o = Object.values(r.textures); s < o.length; s++) {
//                                     o[s].sort(function(e, n) {
//                                         return e.source.src < n.source.src ? -1 : e.source.src > n.source.src ? 1 : 0
//                                     })
//                                 }
//                                 e()
//                             }
//                         })
//                     }
//                     )
//                 }
//             }, {
//                 key: "setupDebug",
//                 value: function() {
//                     document.addEventListener("keyup", function(e) {
//                         "KeyA" === e.code && (r.isRunning ? (console.log("playing, pause"),
//                         r.pause()) : (console.log("paused, resuming"),
//                         r.resume()))
//                     })
//                 }
//             }]),
//             r
//         }();
//         exports.default = i,
//         (0,
//         r.default)(i, "instance", null),
//         (0,
//         r.default)(i, "textureLoader", void 0),
//         (0,
//         r.default)(i, "isRunning", !1),
//         (0,
//         r.default)(i, "watchPosition", !1),
//         (0,
//         r.default)(i, "touchScroller", document.querySelector("[data-router-wrapper]")),
//         (0,
//         r.default)(i, "textures", {
//             homepage: [],
//             products: [],
//             displacement: []
//         });
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/defineProperty": "IxO8",
//         "curtainsjs": "aeXH",
//         "./Utils": "FR9S"
//     }],
//     "yyjT": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = t(require("@babel/runtime/helpers/classCallCheck"))
//           , r = t(require("@babel/runtime/helpers/createClass"));
//         function t(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var a = function() {
//             function t() {
//                 (0,
//                 e.default)(this, t)
//             }
//             return (0,
//             r.default)(t, null, [{
//                 key: "createContext",
//                 value: function(e) {
//                     var r = e.getContext("webgl");
//                     return e.width = e.clientWidth,
//                     e.height = e.clientHeight,
//                     r.viewport(0, 0, r.canvas.width, r.canvas.height),
//                     r
//                 }
//             }, {
//                 key: "createShader",
//                 value: function(e, r, t) {
//                     var a = e["".concat(r.toUpperCase(), "_SHADER")]
//                       , n = e.createShader(a);
//                     if (e.shaderSource(n, t),
//                     e.compileShader(n),
//                     e.getShaderParameter(n, e.COMPILE_STATUS))
//                         return n;
//                     console.warn(e.getShaderInfoLog(n)),
//                     e.deleteShader(n)
//                 }
//             }, {
//                 key: "createProgram",
//                 value: function(e, r, t) {
//                     var a = e.createProgram();
//                     if (e.attachShader(a, r),
//                     e.attachShader(a, t),
//                     e.linkProgram(a),
//                     e.getProgramParameter(a, e.LINK_STATUS))
//                         return a;
//                     console.warn(e.getProgramInfoLog(a)),
//                     e.deleteProgram(a)
//                 }
//             }, {
//                 key: "createFullsizeAttribs",
//                 value: function(e, r) {
//                     var t = e.createBuffer();
//                     e.bindBuffer(e.ARRAY_BUFFER, t);
//                     e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), e.STATIC_DRAW);
//                     var a = e.getAttribLocation(r, "a_position");
//                     e.enableVertexAttribArray(a);
//                     var n = e.FLOAT;
//                     e.vertexAttribPointer(a, 2, n, !1, 0, 0);
//                     var i = e.createBuffer();
//                     e.bindBuffer(e.ARRAY_BUFFER, i);
//                     e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 2, 0, 0, 2]), e.STATIC_DRAW);
//                     var o = e.getAttribLocation(r, "a_uv");
//                     e.enableVertexAttribArray(o),
//                     e.vertexAttribPointer(o, 2, n, !1, 0, 0)
//                 }
//             }, {
//                 key: "createFullsizeTexture",
//                 value: function(e, r, t) {
//                     var a = e.getAttribLocation(r, "a_texture_coord");
//                     e.enableVertexAttribArray(a);
//                     var n = e.createBuffer();
//                     e.bindBuffer(e.ARRAY_BUFFER, n);
//                     e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 2, 0, 0, 2]), e.STATIC_DRAW),
//                     e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0);
//                     var i = e.createTexture();
//                     return e.bindTexture(e.TEXTURE_2D, i),
//                     e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
//                     e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
//                     e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
//                     e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
//                     e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
//                     e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
//                     i
//                 }
//             }, {
//                 key: "render",
//                 value: function(e) {
//                     e.clear(e.COLOR_BUFFER_BIT),
//                     e.drawArrays(e.TRIANGLES, 0, 3)
//                 }
//             }, {
//                 key: "destroy",
//                 value: function(e) {
//                     e.getExtension("WEBGL_lose_context").loseContext()
//                 }
//             }]),
//             t
//         }();
//         exports.default = a;
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW"
//     }],
//     "aDqt": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.getText = F,
//         exports.splitInnerHTML = C,
//         exports.emojiSafeSplit = E,
//         exports.emojiExp = void 0;
//         var D = /(^\s+|\s+$)/g
//           , u = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
//         function F(D) {
//             var u = D.nodeType
//               , C = "";
//             if (1 === u || 9 === u || 11 === u) {
//                 if ("string" == typeof D.textContent)
//                     return D.textContent;
//                 for (D = D.firstChild; D; D = D.nextSibling)
//                     C += F(D)
//             } else if (3 === u || 4 === u)
//                 return D.nodeValue;
//             return C
//         }
//         function C(D, u, F) {
//             for (var C = D.firstChild, B = []; C; )
//                 3 === C.nodeType ? B.push.apply(B, E((C.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), u, F)) : "br" === (C.nodeName + "").toLowerCase() ? B[B.length - 1] += "<br>" : B.push(C.outerHTML),
//                 C = C.nextSibling;
//             return B
//         }
//         function E(F, C, E) {
//             if (F += "",
//             E && (F = F.replace(D, "")),
//             C && "" !== C)
//                 return F.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(C);
//             for (var B, A, e = [], t = F.length, r = 0; r < t; r++)
//                 ((A = F.charAt(r)).charCodeAt(0) >= 55296 && A.charCodeAt(0) <= 56319 || F.charCodeAt(r + 1) >= 65024 && F.charCodeAt(r + 1) <= 65039) && (B = ((F.substr(r, 12).split(u) || [])[1] || "").length || 2,
//                 A = F.substr(r, B),
//                 e.emoji = 1,
//                 r += B - 1),
//                 e.push(">" === A ? "&gt;" : "<" === A ? "&lt;" : A);
//             return e
//         }
//         exports.emojiExp = u;
//     }
//     , {}],
//     "BtuU": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = exports.SplitText = void 0;
//         var e, t, i, n = require("./utils/strings.js"), s = /(?:\r|\n|\t\t)/g, r = /(?:\s\s+)/g, l = function() {
//             e = document,
//             t = window,
//             i = 1
//         }, o = 1, a = function(e) {
//             return t.getComputedStyle(e)
//         }, p = Array.isArray, d = [].slice, h = function(t, i) {
//             var n;
//             return p(t) ? t : "string" == (n = typeof t) && !i && t ? d.call(e.querySelectorAll(t), 0) : t && "object" === n && "length"in t ? d.call(t, 0) : t ? [t] : []
//         }, f = function(e) {
//             return "absolute" === e.position || !0 === e.absolute
//         }, c = function(e, t) {
//             for (var i, n = t.length; --n > -1; )
//                 if (i = t[n],
//                 e.substr(0, i.length) === i)
//                     return i.length
//         }, u = " style='position:relative;display:inline-block;'", g = function(e, t) {
//             void 0 === e && (e = "");
//             var i = ~e.indexOf("++")
//               , n = 1;
//             return i && (e = e.split("++").join("")),
//             function() {
//                 return "<" + t + u + (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
//             }
//         }, x = function e(t, i, n) {
//             var s = t.nodeType;
//             if (1 === s || 9 === s || 11 === s)
//                 for (t = t.firstChild; t; t = t.nextSibling)
//                     e(t, i, n);
//             else
//                 3 !== s && 4 !== s || (t.nodeValue = t.nodeValue.split(i).join(n))
//         }, y = function(e, t) {
//             for (var i = t.length; --i > -1; )
//                 e.push(t[i])
//         }, _ = function(e, t, i) {
//             for (var n; e && e !== t; ) {
//                 if (n = e._next || e.nextSibling)
//                     return n.textContent.charAt(0) === i;
//                 e = e.parentNode || e._parent
//             }
//         }, v = function e(t) {
//             var i, n, s = h(t.childNodes), r = s.length;
//             for (i = 0; i < r; i++)
//                 (n = s[i])._isSplit ? e(n) : i && n.previousSibling && 3 === n.previousSibling.nodeType ? (n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue,
//                 t.removeChild(n)) : 3 !== n.nodeType && (t.insertBefore(n.firstChild, n),
//                 t.removeChild(n))
//         }, b = function(e, t) {
//             return parseFloat(t[e]) || 0
//         }, C = function(t, i, n, s, r, l, o) {
//             var p, d, h, c, u, g, C, S, N, T, m, w, L = a(t), A = b("paddingLeft", L), B = -999, W = b("borderBottomWidth", L) + b("borderTopWidth", L), E = b("borderLeftWidth", L) + b("borderRightWidth", L), H = b("paddingTop", L) + b("paddingBottom", L), j = b("paddingLeft", L) + b("paddingRight", L), O = b("fontSize", L) * (i.lineThreshold || .2), M = L.textAlign, R = [], V = [], k = [], F = i.wordDelimiter || " ", q = i.tag ? i.tag : i.span ? "span" : "div", D = i.type || i.split || "chars,words,lines", P = r && ~D.indexOf("lines") ? [] : null, z = ~D.indexOf("words"), G = ~D.indexOf("chars"), I = f(i), J = i.linesClass, K = ~(J || "").indexOf("++"), Q = [];
//             for (K && (J = J.split("++").join("")),
//             h = (d = t.getElementsByTagName("*")).length,
//             u = [],
//             p = 0; p < h; p++)
//                 u[p] = d[p];
//             if (P || I)
//                 for (p = 0; p < h; p++)
//                     ((g = (c = u[p]).parentNode === t) || I || G && !z) && (w = c.offsetTop,
//                     P && g && Math.abs(w - B) > O && ("BR" !== c.nodeName || 0 === p) && (C = [],
//                     P.push(C),
//                     B = w),
//                     I && (c._x = c.offsetLeft,
//                     c._y = w,
//                     c._w = c.offsetWidth,
//                     c._h = c.offsetHeight),
//                     P && ((c._isSplit && g || !G && g || z && g || !z && c.parentNode.parentNode === t && !c.parentNode._isSplit) && (C.push(c),
//                     c._x -= A,
//                     _(c, t, F) && (c._wordEnd = !0)),
//                     "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === p) && P.push([])));
//             for (p = 0; p < h; p++)
//                 if (g = (c = u[p]).parentNode === t,
//                 "BR" !== c.nodeName)
//                     if (I && (N = c.style,
//                     z || g || (c._x += c.parentNode._x,
//                     c._y += c.parentNode._y),
//                     N.left = c._x + "px",
//                     N.top = c._y + "px",
//                     N.position = "absolute",
//                     N.display = "block",
//                     N.width = c._w + 1 + "px",
//                     N.height = c._h + "px"),
//                     !z && G)
//                         if (c._isSplit)
//                             for (c._next = d = c.nextSibling,
//                             c.parentNode.appendChild(c); d && 3 === d.nodeType && " " === d.textContent; )
//                                 c._next = d.nextSibling,
//                                 c.parentNode.appendChild(d),
//                                 d = d.nextSibling;
//                         else
//                             c.parentNode._isSplit ? (c._parent = c.parentNode,
//                             !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0),
//                             c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && Q.push(c.nextSibling),
//                             c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling,
//                             c.parentNode.removeChild(c),
//                             u.splice(p--, 1),
//                             h--) : g || (w = !c.nextSibling && _(c.parentNode, t, F),
//                             c.parentNode._parent && c.parentNode._parent.appendChild(c),
//                             w && c.parentNode.appendChild(e.createTextNode(" ")),
//                             "span" === q && (c.style.display = "inline"),
//                             R.push(c));
//                     else
//                         c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? V.push(c) : G && !c._isSplit && ("span" === q && (c.style.display = "inline"),
//                         R.push(c));
//                 else
//                     P || I ? (c.parentNode && c.parentNode.removeChild(c),
//                     u.splice(p--, 1),
//                     h--) : z || t.appendChild(c);
//             for (p = Q.length; --p > -1; )
//                 Q[p].parentNode.removeChild(Q[p]);
//             if (P) {
//                 for (I && (T = e.createElement(q),
//                 t.appendChild(T),
//                 m = T.offsetWidth + "px",
//                 w = T.offsetParent === t ? 0 : t.offsetLeft,
//                 t.removeChild(T)),
//                 N = t.style.cssText,
//                 t.style.cssText = "display:none;"; t.firstChild; )
//                     t.removeChild(t.firstChild);
//                 for (S = " " === F && (!I || !z && !G),
//                 p = 0; p < P.length; p++) {
//                     for (C = P[p],
//                     (T = e.createElement(q)).style.cssText = "display:block;text-align:" + M + ";position:" + (I ? "absolute;" : "relative;"),
//                     J && (T.className = J + (K ? p + 1 : "")),
//                     k.push(T),
//                     h = C.length,
//                     d = 0; d < h; d++)
//                         "BR" !== C[d].nodeName && (c = C[d],
//                         T.appendChild(c),
//                         S && c._wordEnd && T.appendChild(e.createTextNode(" ")),
//                         I && (0 === d && (T.style.top = c._y + "px",
//                         T.style.left = A + w + "px"),
//                         c.style.top = "0px",
//                         w && (c.style.left = c._x - w + "px")));
//                     0 === h ? T.innerHTML = "&nbsp;" : z || G || (v(T),
//                     x(T, String.fromCharCode(160), " ")),
//                     I && (T.style.width = m,
//                     T.style.height = c._h + "px"),
//                     t.appendChild(T)
//                 }
//                 t.style.cssText = N
//             }
//             I && (o > t.clientHeight && (t.style.height = o - H + "px",
//             t.clientHeight < o && (t.style.height = o + W + "px")),
//             l > t.clientWidth && (t.style.width = l - j + "px",
//             t.clientWidth < l && (t.style.width = l + E + "px"))),
//             y(n, R),
//             z && y(s, V),
//             y(r, k)
//         }, S = function(t, i, l, o) {
//             var a, p, d, h, u, g, y, _, v = i.tag ? i.tag : i.span ? "span" : "div", b = ~(i.type || i.split || "chars,words,lines").indexOf("chars"), C = f(i), S = i.wordDelimiter || " ", N = " " !== S ? "" : C ? "&#173; " : " ", T = "</" + v + ">", m = 1, w = i.specialChars ? "function" == typeof i.specialChars ? i.specialChars : c : null, L = e.createElement("div"), A = t.parentNode;
//             for (A.insertBefore(L, t),
//             L.textContent = t.nodeValue,
//             A.removeChild(t),
//             t = L,
//             y = -1 !== (a = (0,
//             n.getText)(t)).indexOf("<"),
//             !1 !== i.reduceWhiteSpace && (a = a.replace(r, " ").replace(s, "")),
//             y && (a = a.split("<").join("{{LT}}")),
//             u = a.length,
//             p = (" " === a.charAt(0) ? N : "") + l(),
//             d = 0; d < u; d++)
//                 if (g = a.charAt(d),
//                 w && (_ = w(a.substr(d), i.specialChars)))
//                     g = a.substr(d, _ || 1),
//                     p += b && " " !== g ? o() + g + "</" + v + ">" : g,
//                     d += _ - 1;
//                 else if (g === S && a.charAt(d - 1) !== S && d) {
//                     for (p += m ? T : "",
//                     m = 0; a.charAt(d + 1) === S; )
//                         p += N,
//                         d++;
//                     d === u - 1 ? p += N : ")" !== a.charAt(d + 1) && (p += N + l(),
//                     m = 1)
//                 } else
//                     "{" === g && "{{LT}}" === a.substr(d, 6) ? (p += b ? o() + "{{LT}}</" + v + ">" : "{{LT}}",
//                     d += 5) : g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || a.charCodeAt(d + 1) >= 65024 && a.charCodeAt(d + 1) <= 65039 ? (h = ((a.substr(d, 12).split(n.emojiExp) || [])[1] || "").length || 2,
//                     p += b && " " !== g ? o() + a.substr(d, h) + "</" + v + ">" : a.substr(d, h),
//                     d += h - 1) : p += b && " " !== g ? o() + g + "</" + v + ">" : g;
//             t.outerHTML = p + (m ? T : ""),
//             y && x(A, "{{LT}}", "<")
//         }, N = function e(t, i, n, s) {
//             var r, l, o = h(t.childNodes), p = o.length, d = f(i);
//             if (3 !== t.nodeType || p > 1) {
//                 for (i.absolute = !1,
//                 r = 0; r < p; r++)
//                     (l = o[r])._next = l._isFirst = l._parent = l._wordEnd = null,
//                     (3 !== l.nodeType || /\S+/.test(l.nodeValue)) && (d && 3 !== l.nodeType && "inline" === a(l).display && (l.style.display = "inline-block",
//                     l.style.position = "relative"),
//                     l._isSplit = !0,
//                     e(l, i, n, s));
//                 return i.absolute = d,
//                 void (t._isSplit = !0)
//             }
//             S(t, i, n, s)
//         }, T = function() {
//             function e(e, t) {
//                 i || l(),
//                 this.elements = h(e),
//                 this.chars = [],
//                 this.words = [],
//                 this.lines = [],
//                 this._originals = [],
//                 this.vars = t || {},
//                 o && this.split(t)
//             }
//             var t = e.prototype;
//             return t.split = function(e) {
//                 this.isSplit && this.revert(),
//                 this.vars = e = e || this.vars,
//                 this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
//                 for (var t, i, n, s = this.elements.length, r = e.tag ? e.tag : e.span ? "span" : "div", l = g(e.wordsClass, r), o = g(e.charsClass, r); --s > -1; )
//                     n = this.elements[s],
//                     this._originals[s] = n.innerHTML,
//                     t = n.clientHeight,
//                     i = n.clientWidth,
//                     N(n, e, l, o),
//                     C(n, e, this.chars, this.words, this.lines, i, t);
//                 return this.chars.reverse(),
//                 this.words.reverse(),
//                 this.lines.reverse(),
//                 this.isSplit = !0,
//                 this
//             }
//             ,
//             t.revert = function() {
//                 var e = this._originals;
//                 if (!e)
//                     throw "revert() call wasn't scoped properly.";
//                 return this.elements.forEach(function(t, i) {
//                     return t.innerHTML = e[i]
//                 }),
//                 this.chars = [],
//                 this.words = [],
//                 this.lines = [],
//                 this.isSplit = !1,
//                 this
//             }
//             ,
//             e.create = function(t, i) {
//                 return new e(t,i)
//             }
//             ,
//             e
//         }();
//         exports.default = exports.SplitText = T,
//         T.version = "3.6.0";
//     }
//     , {
//         "./utils/strings.js": "aDqt"
//     }],
//     "GG82": [function(require, module, exports) {
//         module.exports = "#define GLSLIFY 1\nattribute vec2 a_position;\nattribute vec2 a_uv;\nattribute vec2 a_texture_coord;\n\nvarying vec2 v_uv;\nvarying vec2 v_texture_coord;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  v_uv = a_uv;\n  v_texture_coord = a_texture_coord;\n}\n";
//     }
//     , {}],
//     "DUMT": [function(require, module, exports) {
//         module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform float u_transition;\nuniform vec2 u_resolution;\nuniform sampler2D u_texture0;\nuniform vec2 u_texture0Size;\nuniform sampler2D u_texture1;\nuniform vec2 u_texture1Size;\nuniform sampler2D u_displacementTexture;\nuniform vec2 u_displacementTextureSize;\n\nvarying vec2 v_uv;\nvarying vec2 v_texture_coord;\n\nvec2 Cover(vec2 uv, vec2 screenSize, vec2 imageSize) {\n  vec2 s = screenSize;\n  vec2 i = imageSize;\n\n  float rs = s.x / s.y;\n  float ri = i.x / i.y;\n\n  vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);\n  vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;\n  vec2 st = uv * s / new + offset;\n\n  return st;\n}\n\nvoid main() {\n  vec3 color = vec3(0.0);\n\n  vec2 displacementUV = Cover(v_texture_coord, u_resolution, u_displacementTextureSize);\n  displacementUV = (displacementUV - 0.5) * 0.4 + 0.5;\n  float displacement = texture2D(u_displacementTexture, displacementUV).r;\n\n  vec2 uv0 = Cover((v_texture_coord - 0.5)*mix(1.0, 0.7, u_transition) + 0.5, u_resolution, u_texture0Size);\n  uv0.y += u_transition*displacement;\n  vec2 uv1 = Cover((v_texture_coord - 0.5)*mix(0.7, 1.0, u_transition) + 0.5, u_resolution, u_texture1Size);\n  uv1.y += (1.0 - u_transition)*displacement;\n\n  vec3 tex0 = texture2D(u_texture0, uv0).rgb;\n  vec3 tex1 = texture2D(u_texture1, uv1).rgb;\n\n  color = mix(tex0, tex1, u_transition);\n\n  gl_FragColor = vec4(color, 1.0);\n}\n";
//     }
//     , {}],
//     "fi2O": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = u(require("@babel/runtime/helpers/toConsumableArray"))
//           , t = u(require("@babel/runtime/helpers/classCallCheck"))
//           , n = u(require("@babel/runtime/helpers/createClass"))
//           , a = u(require("@babel/runtime/helpers/defineProperty"))
//           , r = u(require("./WebGLUtils"))
//           , i = require("gsap")
//           , l = u(require("gsap/SplitText"))
//           , o = u(require("./Utils"));
//         function u(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         i.gsap.registerPlugin(l.default);
//         var s = function() {
//             function a() {
//                 (0,
//                 t.default)(this, a)
//             }
//             return (0,
//             n.default)(a, null, [{
//                 key: "init",
//                 value: function() {
//                     var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-webgl-carousel]";
//                     return new Promise(function(t) {
//                         var n = a;
//                         n.images.length || (console.warn("No images loaded to the GPU"),
//                         console.log("Init complete"),
//                         t()),
//                         n.state.init && (console.warn("Already initialized"),
//                         console.log("Init complete"),
//                         t()),
//                         n.container = document.querySelector(e),
//                         n.container || (console.warn("Unable to initialize WebGLCarousel. Container does not exist."),
//                         console.log("Init complete"),
//                         t()),
//                         n.dpr = Math.min(1.5, window.devicePixelRatio),
//                         n.createCanvas(),
//                         n.createContext(),
//                         n.createProgram(),
//                         n.createUniforms(),
//                         n.loadTexturesToGPU(),
//                         n.createUI(),
//                         n.createTimelines(),
//                         n.setState(),
//                         n.onResize(),
//                         n.setListeners(),
//                         n.setObserver(),
//                         n.ui.totalEl.textContent = String(n.textures.length).padStart(2, "0"),
//                         i.gsap.ticker.add(n.render),
//                         n.resume(),
//                         n.setAutoplayFn(),
//                         console.log("Init complete"),
//                         t()
//                     }
//                     )
//                 }
//             }, {
//                 key: "render",
//                 value: function() {
//                     var e = a;
//                     e.state.running && e.state.inViewport && (e.gl.uniform1f(e.uniforms.u_transition.location, e.uniforms.u_transition.value),
//                     r.default.render(e.gl),
//                     console.log("Carousel rendering"))
//                 }
//             }, {
//                 key: "destroy",
//                 value: function() {
//                     var e, t, n = a;
//                     n.state.init ? (n.state.init = !1,
//                     n.removeListeners(),
//                     i.gsap.ticker.remove(n.render),
//                     r.default.destroy(n.gl),
//                     null === (e = n.autoplayFn) || void 0 === e || e.kill(),
//                     n.autoplayFn = null,
//                     null === (t = n.slideChangeTimeline) || void 0 === t || t.kill(),
//                     n.slideChangeTimeline = null,
//                     Object.keys(n.timelines).forEach(function(e) {
//                         n.timelines[e].map(function(e) {
//                             return e.kill(),
//                             e = null
//                         })
//                     }),
//                     n.container.removeChild(n.canvas)) : console.warn("Cannot call the destroy() method because the component hasn't been initialized")
//                 }
//             }, {
//                 key: "resume",
//                 value: function() {
//                     a.state.running = !0
//                 }
//             }, {
//                 key: "pause",
//                 value: function() {
//                     a.state.running = !1
//                 }
//             }, {
//                 key: "createCanvas",
//                 value: function() {
//                     var e = a;
//                     e.canvas = document.createElement("canvas"),
//                     e.canvas.style.position = "absolute",
//                     e.canvas.style.top = 0,
//                     e.canvas.style.left = 0,
//                     e.container.appendChild(e.canvas)
//                 }
//             }, {
//                 key: "createContext",
//                 value: function() {
//                     var e = a;
//                     e.gl = r.default.createContext(e.canvas)
//                 }
//             }, {
//                 key: "createProgram",
//                 value: function() {
//                     var e = a
//                       , t = r.default.createShader(e.gl, "vertex", require("../../shaders/carousel.vertex.glsl"))
//                       , n = r.default.createShader(e.gl, "fragment", require("../../shaders/carousel.fragment.glsl"));
//                     e.program = r.default.createProgram(e.gl, t, n),
//                     e.gl.useProgram(e.program),
//                     r.default.createFullsizeAttribs(e.gl, e.program)
//                 }
//             }, {
//                 key: "createUI",
//                 value: function() {
//                     var t = a;
//                     t.ui = {
//                         pagerEl: t.container.querySelector("[data-carousel-pager]"),
//                         currentEl: t.container.querySelector("[data-carousel-current]"),
//                         nextEl: t.container.querySelector("[data-carousel-next]"),
//                         totalEl: t.container.querySelector("[data-carousel-total]"),
//                         buttons: (0,
//                         e.default)(t.container.querySelectorAll("[data-carousel-nav]"))
//                     }
//                 }
//             }, {
//                 key: "setState",
//                 value: function() {
//                     var e = a;
//                     e.state = {
//                         currentTextureIndex: 0,
//                         animating: !1,
//                         running: !1,
//                         init: !0,
//                         inViewport: !1,
//                         isAutoplay: void 0 !== e.container.dataset.webglCarouselAutoplay
//                     }
//                 }
//             }, {
//                 key: "createUniforms",
//                 value: function() {
//                     var e = a;
//                     e.uniforms = {
//                         u_transition: {
//                             location: e.gl.getUniformLocation(e.program, "u_transition"),
//                             value: 0
//                         },
//                         u_resolution: {
//                             location: e.gl.getUniformLocation(e.program, "u_resolution"),
//                             value: [e.canvas.clientWidth, e.canvas.clientHeight]
//                         },
//                         u_texture0: {
//                             location: e.gl.getUniformLocation(e.program, "u_texture0"),
//                             value: null
//                         },
//                         u_texture0Size: {
//                             location: e.gl.getUniformLocation(e.program, "u_texture0Size"),
//                             value: [0, 0]
//                         },
//                         u_texture1: {
//                             location: e.gl.getUniformLocation(e.program, "u_texture1"),
//                             value: null
//                         },
//                         u_texture1Size: {
//                             location: e.gl.getUniformLocation(e.program, "u_texture1Size"),
//                             value: [0, 0]
//                         },
//                         u_displacementTexture: {
//                             location: e.gl.getUniformLocation(e.program, "u_displacementTexture"),
//                             value: null
//                         },
//                         u_displacementTextureSize: {
//                             location: e.gl.getUniformLocation(e.program, "u_displacementTextureSize"),
//                             value: [0, 0]
//                         }
//                     }
//                 }
//             }, {
//                 key: "loadTexture",
//                 value: function(e) {
//                     return new Promise(function(t) {
//                         var n = new Image;
//                         n.src = e,
//                         n.decode().then(function() {
//                             return t(n)
//                         })
//                     }
//                     )
//                 }
//             }, {
//                 key: "loadTextures",
//                 value: function() {
//                     var e = a;
//                     if (!e.images.length)
//                         return new Promise(function(t) {
//                             var n = e.textureURLs.map(function(t) {
//                                 return e.loadTexture(t.url)
//                             });
//                             Promise.all(n).then(function(t) {
//                                 e.images = t
//                             }).then(function() {
//                                 return e.loadTexture("/images/displacement.jpg")
//                             }).then(function(n) {
//                                 e.displacementImage = n,
//                                 console.log("Textures loaded"),
//                                 t()
//                             })
//                         }
//                         );
//                     console.warn("Textures already loaded")
//                 }
//             }, {
//                 key: "loadTexturesToGPU",
//                 value: function() {
//                     var e = a
//                       , t = e.container.dataset.webglCarousel
//                       , n = e.images.filter(function(n) {
//                         return e.textureURLs.find(function(e) {
//                             var a = e.url
//                               , r = e.gallery;
//                             return n.src.indexOf(a) > -1 && r === t
//                         })
//                     });
//                     e.textures = n.map(function(t) {
//                         return r.default.createFullsizeTexture(e.gl, e.program, t)
//                     }),
//                     e.gl.uniform2f(e.uniforms.u_texture0Size.location, e.images[0].width, e.images[0].height),
//                     e.gl.uniform2f(e.uniforms.u_texture1Size.location, e.images[1].width, e.images[1].height),
//                     e.gl.activeTexture(e.gl.TEXTURE0),
//                     e.gl.bindTexture(e.gl.TEXTURE_2D, e.textures[0]),
//                     e.gl.uniform1i(e.uniforms.u_texture0.location, 0),
//                     e.gl.activeTexture(e.gl.TEXTURE1),
//                     e.gl.bindTexture(e.gl.TEXTURE_2D, e.textures[1]),
//                     e.gl.uniform1i(e.uniforms.u_texture1.location, 1),
//                     e.gl.uniform2f(e.uniforms.u_displacementTextureSize.location, e.displacementImage.width, e.displacementImage.height),
//                     e.gl.activeTexture(e.gl.TEXTURE2);
//                     var i = r.default.createFullsizeTexture(e.gl, e.program, e.displacementImage);
//                     e.gl.bindTexture(e.gl.TEXTURE_2D, i),
//                     e.gl.uniform1i(e.uniforms.u_displacementTexture.location, 2)
//                 }
//             }, {
//                 key: "setCanvasSize",
//                 value: function() {
//                     var e = a;
//                     e.canvas.width = e.container.clientWidth * e.dpr,
//                     e.canvas.height = e.container.clientHeight * e.dpr,
//                     e.canvas.style.width = "".concat(e.container.clientWidth, "px"),
//                     e.canvas.style.height = "".concat(e.container.clientHeight, "px"),
//                     e.gl.viewport(0, 0, e.canvas.width, e.canvas.height)
//                 }
//             }, {
//                 key: "setListeners",
//                 value: function() {
//                     var e = a;
//                     window.addEventListener("resize", e.onResize, {
//                         passive: !0
//                     }),
//                     e.ui.buttons.forEach(function(t) {
//                         t.addEventListener("click", e.onButtonClick, {
//                             passive: !0
//                         })
//                     })
//                 }
//             }, {
//                 key: "removeListeners",
//                 value: function() {
//                     var e = a;
//                     window.removeEventListener("resize", e.onResize, {
//                         passive: !0
//                     }),
//                     e.ui.buttons.forEach(function(t) {
//                         t.removeEventListener("click", e.onButtonClick, {
//                             passive: !0
//                         })
//                     })
//                 }
//             }, {
//                 key: "setObserver",
//                 value: function() {
//                     var e = a;
//                     e.observer = new IntersectionObserver(function(t) {
//                         e.state.inViewport = t[0].isIntersecting
//                     }
//                     ,{
//                         threshold: 0
//                     }),
//                     e.observer.observe(e.container)
//                 }
//             }, {
//                 key: "createTimelines",
//                 value: function() {
//                     var t = a;
//                     t.timelines = {
//                         in: [],
//                         out: []
//                     };
//                     var n = (0,
//                     e.default)(t.container.querySelectorAll("[data-carousel-title]"))
//                       , r = (0,
//                     e.default)(t.container.querySelectorAll("[data-carousel-content]"))
//                       , o = (0,
//                     e.default)(t.container.querySelectorAll("[data-carousel-cta]"));
//                     n.forEach(function(n, a) {
//                         new l.default(n,{
//                             type: "chars,words",
//                             charsClass: "char",
//                             wordsClass: "word"
//                         });
//                         var u = (0,
//                         e.default)(n.children)
//                           , s = new i.gsap.timeline({
//                             paused: !0,
//                             onStart: function() {
//                                 i.gsap.set([n.parentNode, r[a], o[a]], {
//                                     display: "block"
//                                 }),
//                                 i.gsap.set([r[a], o[a]], {
//                                     opacity: 0
//                                 })
//                             }
//                         });
//                         u.forEach(function(e) {
//                             var t = e.querySelectorAll(".char");
//                             s.fromTo(t, {
//                                 opacity: 0
//                             }, {
//                                 opacity: 1,
//                                 duration: 1.4,
//                                 stagger: .1
//                             }, "<")
//                         }),
//                         s.to([r[a], o[a]], {
//                             opacity: 1,
//                             stagger: .15,
//                             duration: 1.2
//                         }, "<0.5"),
//                         t.timelines.in.push(s);
//                         var c = new i.gsap.timeline({
//                             paused: !0,
//                             onComplete: function() {
//                                 i.gsap.set([n.parentNode, r[a], o[a]], {
//                                     clearProps: "all"
//                                 })
//                             }
//                         });
//                         u.forEach(function(e) {
//                             var t = e.querySelectorAll(".char");
//                             c.to(t, {
//                                 opacity: 0,
//                                 stagger: {
//                                     amount: .3
//                                 }
//                             }, "<")
//                         }),
//                         c.to([r[a], o[a]], {
//                             opacity: 0,
//                             stagger: .15
//                         }, "<"),
//                         t.timelines.out.push(c)
//                     })
//                 }
//             }, {
//                 key: "onButtonClick",
//                 value: function(e) {
//                     var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], l = a;
//                     if (!l.state.animating) {
//                         r || null === (t = l.autoplayFn) || void 0 === t || t.kill();
//                         var o = Number(null !== (n = null == e ? void 0 : e.currentTarget.dataset.carouselNav) && void 0 !== n ? n : 1)
//                           , u = l.state.currentTextureIndex
//                           , s = l.state.currentTextureIndex + o;
//                         s >= l.textures.length && (s = 0),
//                         s < 0 && (s = l.textures.length - 1),
//                         l.slideChangeTimeline = new i.gsap.timeline({
//                             onStart: function() {
//                                 l.state.animating = !0,
//                                 l.ui.nextEl.textContent = String(s + 1).padStart(2, "0"),
//                                 l.gl.activeTexture(l.gl.TEXTURE1),
//                                 l.gl.bindTexture(l.gl.TEXTURE_2D, l.textures[s]),
//                                 l.gl.uniform1i(l.uniforms.u_texture1.location, 1)
//                             },
//                             onComplete: function() {
//                                 l.uniforms.u_transition.value = 0,
//                                 l.state.currentTextureIndex = s,
//                                 l.gl.activeTexture(l.gl.TEXTURE0),
//                                 l.gl.bindTexture(l.gl.TEXTURE_2D, l.textures[s]),
//                                 l.gl.uniform1i(l.uniforms.u_texture0.location, 0),
//                                 l.ui.currentEl.textContent = String(s + 1).padStart(2, "0"),
//                                 i.gsap.set(l.ui.pagerEl, {
//                                     clearProps: "transform"
//                                 }),
//                                 l.state.animating = !1,
//                                 l.setAutoplayFn()
//                             }
//                         }),
//                         l.slideChangeTimeline.add(l.timelines.out[u].restart()).to(l.ui.pagerEl, {
//                             yPercent: -50,
//                             duration: 1.8,
//                             ease: "power3.inOut"
//                         }, "<").to(l.uniforms.u_transition, {
//                             value: 1,
//                             duration: 1.8,
//                             ease: "sine.inOut"
//                         }, "<0.1").add(l.timelines.in[s].restart(), "<0.7")
//                     }
//                 }
//             }, {
//                 key: "setAutoplayFn",
//                 value: function() {
//                     var e = a;
//                     e.state.isAutoplay && (e.autoplayFn = i.gsap.delayedCall(8, function() {
//                         e.onButtonClick(null, !0)
//                     }))
//                 }
//             }, {
//                 key: "onResize",
//                 value: function() {
//                     var e = a;
//                     e.setCanvasSize(),
//                     e.gl.uniform2f(e.uniforms.u_resolution.location, e.canvas.clientWidth, e.canvas.clientHeight)
//                 }
//             }]),
//             a
//         }();
//         exports.default = s,
//         (0,
//         a.default)(s, "textureURLs", [{
//             url: "/images/homepage/carousel/01.jpg",
//             gallery: "homepage"
//         }, {
//             url: "/images/homepage/carousel/02.jpg",
//             gallery: "homepage"
//         }, {
//             url: "/images/homepage/carousel/03.jpg",
//             gallery: "homepage"
//         }, {
//             url: "/images/wines/01.jpg",
//             gallery: "products"
//         }, {
//             url: "/images/wines/02.jpg",
//             gallery: "products"
//         }, {
//             url: "/images/wines/03.jpg",
//             gallery: "products"
//         }].map(function(e) {
//             var t = e.url;
//             return {
//                 gallery: e.gallery,
//                 url: o.default.replaceImageFormat(t)
//             }
//         })),
//         (0,
//         a.default)(s, "images", []),
//         (0,
//         a.default)(s, "state", {
//             currentTextureIndex: 0,
//             animating: !1,
//             running: !1,
//             init: !1,
//             inViewport: !1,
//             isAutoplay: !1
//         }),
//         (0,
//         a.default)(s, "autoplayFn", null);
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/defineProperty": "IxO8",
//         "./WebGLUtils": "yyjT",
//         "gsap": "TpQl",
//         "gsap/SplitText": "BtuU",
//         "./Utils": "FR9S",
//         "../../shaders/carousel.vertex.glsl": "GG82",
//         "../../shaders/carousel.fragment.glsl": "DUMT"
//     }],
//     "aJcg": [function(require, module, exports) {
//         module.exports = "#define GLSLIFY 1\n// those are the mandatory attributes that the lib sets\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\n// those are mandatory uniforms that the lib sets and that contain our model view and projection matrix\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\n// our texture matrix that will handle image cover\nuniform mat4 uTextureMatrix0;\n\nuniform float u_Scale;\nuniform vec2 u_PlaneScreenOffset;\nuniform float u_FullscreenAnim;\nuniform vec2 u_Resolution;\n\n// pass your vertex and texture coords to the fragment shader\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\nvarying vec2 vPlaneMouseOffset;\n\nfloat Circle(in vec2 st, in float radius, in float blur){\n  return 1. - smoothstep(radius - (radius*blur), radius+(radius*blur), dot(st,st) * 4.0);\n}\n\nvoid main() {\n  vec2 textureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;\n  vec3 vertexPosition = aVertexPosition;\n\n  // Wave distortion\n  vec2 distortCoord = textureCoord - 0.5;\n  // distortCoord.x *= u_Resolution.x / u_Resolution.y;\n  float distort = Circle(distortCoord, u_FullscreenAnim * 10.0, .4) * u_FullscreenAnim;\n  vertexPosition.z += sqrt(distort)*0.2;\n\n  vertexPosition.xy *= u_Scale;\n  vertexPosition.xy += u_PlaneScreenOffset;\n\n  gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n  // set the varyings\n  // here we use our texture matrix to calculate the accurate texture coords\n  vTextureCoord = textureCoord;\n  vVertexPosition = vertexPosition;\n}\n";
//     }
//     , {}],
//     "ZNLJ": [function(require, module, exports) {
//         module.exports = "precision highp float;\n#define GLSLIFY 1\n\n// get our varyings\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\n// the uniform we declared inside our javascript\nuniform float u_Hide;\nuniform float u_TextureScale;\nuniform vec2 u_TextureParallax;\n\n// our texture sampler (default name, to use a different name please refer to the documentation)\nuniform sampler2D uSampler0;\n\nvoid main() {\n  // get our texture coords from our varying\n  vec2 textureCoord = vTextureCoord - 0.5;\n\n  vec2 parallax = u_TextureParallax*vec2(-1.0, 1.0)*0.0018;\n  vec3 color = texture2D(uSampler0, textureCoord * mix(0.8, 1.0, u_TextureScale) + 0.5 + parallax).rgb;\n\n  // The color to use on every non-opened image\n  vec3 hideColor = vec3(0.0);\n\n  color = mix(color, hideColor, u_Hide);\n\n  gl_FragColor = vec4(color, 1.0);\n}\n";
//     }
//     , {}],
//     "uHUM": [function(require, module, exports) {
//         module.exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uRenderTexture;\nuniform sampler2D u_DisplacementTexture;\n\nuniform vec2 u_Resolution;\nuniform float u_IntroProgress;\nuniform float u_IntroMaskSize;\nuniform float u_OverlayVisibility;\n\nfloat Circle(in vec2 st, in float radius, in float blur){\n  return 1. - smoothstep(radius - (radius*blur), radius+(radius*blur), dot(st,st) * 4.0);\n}\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvoid main() {\n    vec2 textCoords = vTextureCoord;\n\n    // Displacement texture to, guess what, displace the outputs\n    vec4 displacement = texture2D(u_DisplacementTexture, textCoords);\n\n    // Circular imask with some displacement applied\n    // float introMask = Circle(textCoords - vec2(0.5) + displacement.r, u_IntroMaskSize * 14., 0.1);\n    // float introMask = Circle(textCoords - vec2(0.5), u_IntroMaskSize * 4., 0.2);\n\n    // 1. Zoom the image from 0.8 to 1.0\n    float introZoom = 0.8 + u_IntroProgress*0.2;\n\n    // 2. Apply some displacement on the image from 0.08 to 0.0\n    float displace = displacement.g*(0.2 - 0.2*u_IntroProgress);\n\n    // 3. Calculate the ST of the texture\n    vec2 stOutput = (textCoords * 2.0 - 1.0) * introZoom + displace;\n\n    // 4. Get the texture\n    vec4 img = texture2D(uRenderTexture, stOutput * 0.5 + 0.5);\n\n    /**\n     * Set the output lower layer\n     */\n    // vec3 lowerLayer = img.rgb * introMask;\n    vec3 lowerLayer = img.rgb;\n\n    // Blue overlay color\n    vec3 overlayColor = vec3(12., 29., 50.) / 255.;\n\n    // BW\n    vec3 lowerLayerBW = vec3((lowerLayer.r + lowerLayer.g + lowerLayer.b) / 3.);\n\n    // Apply overlay\n    lowerLayer = blendOverlay(lowerLayerBW, overlayColor, 0.5);\n\n    /**\n     * Set the output upper layer\n     */\n    // float upperLayerMask = Circle(\n    //     (textCoords * vec2(-.7, -.6) - vec2(0.5) + displacement.r * (.55 + .25 * u_OverlayVisibility)),\n    //     14. * u_OverlayVisibility,\n    //     .1 * u_OverlayVisibility\n    // );\n\n    vec3 upperLayer = img.rgb;\n\n    // The final color is a combination of the lower and upper layers\n    // vec3 color = blendNormal(lowerLayer, upperLayer, upperLayerMask);\n    vec3 color = blendNormal(lowerLayer, upperLayer, u_OverlayVisibility);\n\n    gl_FragColor = vec4(color, 1.0);\n}\n";
//     }
//     , {}],
//     "sNO3": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = h(require("@babel/runtime/helpers/toConsumableArray"))
//           , t = h(require("@babel/runtime/helpers/classCallCheck"))
//           , a = h(require("@babel/runtime/helpers/createClass"))
//           , n = require("curtainsjs")
//           , i = require("gsap")
//           , s = require("gsap/InertiaPlugin")
//           , r = h(require("./Utils"))
//           , o = h(require("./CurtainsManager"))
//           , l = h(require("./SmoothScroll"))
//           , u = h(require("./WebGLCarousel"));
//         function h(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         i.gsap.registerPlugin(s.InertiaPlugin);
//         var d = function() {
//             function h() {
//                 (0,
//                 t.default)(this, h)
//             }
//             return (0,
//             a.default)(h, [{
//                 key: "init",
//                 value: function() {
//                     var e = this;
//                     this.wrapper = document.querySelector("[data-webgl-gallery]"),
//                     this.isActive = !!this.wrapper,
//                     this.isActive && (this.isTouch = r.default.isTouch(),
//                     o.default.init(),
//                     o.default.resume(),
//                     this._setUI(),
//                     this._setState(),
//                     this._addPostProcess(),
//                     this._loadImages(),
//                     this._addListeners(),
//                     o.default.instance.onAfterResize(function() {
//                         return e._reset()
//                     }))
//                 }
//             }, {
//                 key: "destroy",
//                 value: function() {
//                     this.isActive && (this._removeListeners(),
//                     o.default.destroy())
//                 }
//             }, {
//                 key: "_setState",
//                 value: function() {
//                     this.state = {
//                         fullscreen: !1,
//                         loadedImages: 0,
//                         hoveredPlane: null,
//                         offset: new n.Vec2,
//                         prevOffset: new n.Vec2,
//                         deltaOffset: new n.Vec2,
//                         pointer: new n.Vec2,
//                         deltaPointer: new n.Vec2
//                     }
//                 }
//             }, {
//                 key: "_setUI",
//                 value: function() {
//                     this.ui = {
//                         preloader: document.querySelector("[data-webgl-gallery-preloader]"),
//                         counter: document.querySelector("[data-webgl-loading-counter]"),
//                         track: this.wrapper.querySelector("[data-webgl-gallery-track]"),
//                         lines: (0,
//                         e.default)(this.wrapper.querySelectorAll("[data-webgl-gallery-line]")),
//                         planes: (0,
//                         e.default)(this.wrapper.querySelectorAll("[data-webgl-gallery-plane]")),
//                         closeBtn: document.querySelector("[data-webgl-gallery-close]")
//                     }
//                 }
//             }, {
//                 key: "setGalleryLink",
//                 value: function() {
//                     if (document.querySelector("[data-webgl-gallery]")) {
//                         var e = document.querySelector("[data-gallery-link]");
//                         (new i.gsap.timeline).to(e, {
//                             duration: .4,
//                             autoAlpha: 0
//                         }).call(function() {
//                             e.setAttribute("href", "/"),
//                             e.removeAttribute("data-transition"),
//                             e.setAttribute("aria-label", "Close image gallery"),
//                             i.gsap.set("[data-gallery-link-open]", {
//                                 autoAlpha: 0
//                             }),
//                             i.gsap.set("[data-gallery-link-close]", {
//                                 autoAlpha: 1
//                             })
//                         }).to(e, {
//                             duration: .6,
//                             autoAlpha: 1
//                         })
//                     }
//                 }
//             }, {
//                 key: "resetGalleryLink",
//                 value: function() {
//                     var e = document.querySelector("[data-gallery-link]");
//                     "/gallery" !== e.getAttribute("href") && (new i.gsap.timeline).to(e, {
//                         duration: .4,
//                         autoAlpha: 0
//                     }).call(function() {
//                         e.setAttribute("href", "/gallery"),
//                         e.setAttribute("data-transition", "gallery"),
//                         e.setAttribute("aria-label", "Open image gallery"),
//                         i.gsap.set("[data-gallery-link-open]", {
//                             autoAlpha: 1
//                         }),
//                         i.gsap.set("[data-gallery-link-close]", {
//                             autoAlpha: 0
//                         })
//                     }).to(e, {
//                         duration: .6,
//                         autoAlpha: 1
//                     })
//                 }
//             }, {
//                 key: "_reset",
//                 value: function() {
//                     i.gsap.killTweensOf(this.state.offset),
//                     this.state.offset.set(0, 0),
//                     o.default.instance.updateScrollValues(0, 0);
//                     for (var e = 0; e < this.webglPlanes.length; e++)
//                         this.webglPlanes[e].relativeTranslation.set(0, 0, 0)
//                 }
//             }, {
//                 key: "_loadImages",
//                 value: function() {
//                     var e = this;
//                     this.webglPlanes = new Array(this.ui.planes.length);
//                     var t = {
//                         vertexShader: require("../../shaders/gallery.vertex.glsl"),
//                         fragmentShader: require("../../shaders/gallery.fragment.glsl"),
//                         autoloadSources: !1,
//                         widthSegments: 20,
//                         heightSegments: 20,
//                         uniforms: {
//                             scale: {
//                                 name: "u_Scale",
//                                 type: "1f",
//                                 value: 1
//                             },
//                             textureScale: {
//                                 name: "u_TextureScale",
//                                 type: "1f",
//                                 value: 0
//                             },
//                             textureParallax: {
//                                 name: "u_TextureParallax",
//                                 type: "2f",
//                                 value: new n.Vec2(0,0)
//                             },
//                             hide: {
//                                 name: "u_Hide",
//                                 type: "1f",
//                                 value: 0
//                             },
//                             planeScreenOffset: {
//                                 name: "u_PlaneScreenOffset",
//                                 type: "2f",
//                                 value: new n.Vec2(0,0)
//                             },
//                             fullscreenAnim: {
//                                 name: "u_FullscreenAnim",
//                                 type: "1f",
//                                 value: 0
//                             },
//                             resolution: {
//                                 name: "u_Resolution",
//                                 type: "2f",
//                                 value: new n.Vec2(0,0)
//                             }
//                         }
//                     }
//                       , a = new RegExp(/(\d+)\.(jpg|webp)/)
//                       , s = this.ui.planes.map(function(e) {
//                         return r.default.replaceImageFormat(e.dataset.src)
//                     })
//                       , l = r.default.arrayChunk(s, 15)
//                       , u = 0;
//                     !function s(r) {
//                         var h = 0;
//                         o.default.textureLoader.loadSources(r, {}, function(d) {
//                             var c = a.exec(d.source.src)[1]
//                               , p = e.ui.planes.findIndex(function(e) {
//                                 return e.dataset.src.indexOf(c) > -1
//                             })
//                               , f = e.ui.planes[p].children[0];
//                             t.uniforms.resolution.value.x = d.source.width,
//                             t.uniforms.resolution.value.y = d.source.height;
//                             var v = new n.Plane(o.default.instance,f,t)
//                               , g = f.parentNode.parentNode
//                               , m = g.clientHeight
//                               , y = g.clientWidth
//                               , w = parseInt(f.parentNode.dataset.row)
//                               , _ = f.parentNode.offsetLeft
//                               , b = m * (.5 + w)
//                               , P = f.clientWidth
//                               , k = parseFloat(getComputedStyle(f.parentNode).padding);
//                             v.userData.minX = -1 * (_ + P / 2 + 2 * k),
//                             v.userData.maxX = y - _ - P / 2,
//                             v.userData.minY = -b,
//                             v.userData.maxY = m * (e.ui.lines.length - 1 - w + .5),
//                             v.userData.rowIndex = w,
//                             v.addTexture(d),
//                             e.webglPlanes[e.state.loadedImages] = v,
//                             h++,
//                             e.state.loadedImages++,
//                             e.ui.counter.textContent = "".concat(parseInt(e.state.loadedImages / e.ui.planes.length * 100), "%"),
//                             e.state.loadedImages === e.webglPlanes.length && (new i.gsap.timeline).to(e.ui.preloader, {
//                                 delay: 1,
//                                 autoAlpha: 0
//                             }).to(e.shaderPass.uniforms.introMaskSize, {
//                                 value: 1,
//                                 duration: 4
//                             }, ">-0.2").to(e.shaderPass.uniforms.introProgress, {
//                                 value: 1,
//                                 duration: 2
//                             }, "<"),
//                             h === r.length && l[++u] && s(l[u])
//                         }, function(e, t) {
//                             return console.log(t)
//                         })
//                     }(l[0])
//                 }
//             }, {
//                 key: "_addListeners",
//                 value: function() {
//                     var e = this;
//                     this.events = {
//                         pointerdown: this.isTouch ? "touchstart" : "pointerdown",
//                         pointermove: this.isTouch ? "touchmove" : "pointermove",
//                         pointerup: this.isTouch ? "touchend" : "pointerup"
//                     },
//                     this._firstPointerDownCb = function() {
//                         return e._onFirstPointerDown()
//                     }
//                     ,
//                     this._pointerdownCb = function(t) {
//                         return e._onPointerdown(t)
//                     }
//                     ,
//                     this._pointerupCb = function(t) {
//                         return e._onPointerup(t)
//                     }
//                     ,
//                     this._dragCb = function(t) {
//                         return e._onDrag(t)
//                     }
//                     ,
//                     this._closeClickCb = function() {
//                         return e._onCloseClick()
//                     }
//                     ,
//                     this._checkHoverCb = function(t) {
//                         return e._checkHover(t)
//                     }
//                     ,
//                     this.wrapper.addEventListener(this.events.pointerdown, this._firstPointerDownCb, {
//                         passive: !0,
//                         once: !0
//                     }),
//                     this.wrapper.addEventListener(this.events.pointerdown, this._pointerdownCb, {
//                         passive: !0
//                     }),
//                     this.ui.closeBtn.addEventListener("click", this._closeClickCb),
//                     s.InertiaPlugin.track(this.state.offset, "x,y")
//                 }
//             }, {
//                 key: "_removeListeners",
//                 value: function() {
//                     this.wrapper.removeEventListener(this.events.pointerdown, this._firstPointerDownCb, {
//                         passive: !0,
//                         once: !0
//                     }),
//                     this.wrapper.removeEventListener(this.events.pointerdown, this._pointerdownCb, {
//                         passive: !0
//                     }),
//                     this.ui.closeBtn.removeEventListener("click", this._closeClickCb),
//                     s.InertiaPlugin.untrack(this.state.offset)
//                 }
//             }, {
//                 key: "_enableDrag",
//                 value: function() {
//                     this.wrapper.addEventListener(this.events.pointermove, this._dragCb, {
//                         passive: !0
//                     }),
//                     this.wrapper.addEventListener(this.events.pointerup, this._pointerupCb, {
//                         passive: !0
//                     })
//                 }
//             }, {
//                 key: "_disableDrag",
//                 value: function() {
//                     this.wrapper.removeEventListener(this.events.pointermove, this._dragCb, {
//                         passive: !0
//                     }),
//                     this.wrapper.removeEventListener(this.events.pointerup, this._pointerupCb, {
//                         passive: !0
//                     })
//                 }
//             }, {
//                 key: "_onPointerdown",
//                 value: function(e) {
//                     if (this.isTouch && this._checkHover(e),
//                     this.state.deltaPointer.set(0, 0),
//                     i.gsap.killTweensOf(this.state.offset),
//                     this._enableDrag(),
//                     this.isTouch) {
//                         var t = e.touches[0];
//                         this.state.pointer.set(t.clientX, t.clientY)
//                     } else
//                         this.state.pointer.set(e.clientX, e.clientY)
//                 }
//             }, {
//                 key: "_onFirstPointerDown",
//                 value: function() {
//                     (new i.gsap.timeline).to("[data-webgl-gallery-instructions]", {
//                         autoAlpha: 0,
//                         duration: .7
//                     }).to(this.shaderPass.uniforms.overlayVisibility, {
//                         value: 1,
//                         duration: 4
//                     }, "<0.2")
//                 }
//             }, {
//                 key: "_onPointerup",
//                 value: function(e) {
//                     var t = this;
//                     this._disableDrag(),
//                     i.gsap.fromTo(this.state.offset, {
//                         x: "+=0",
//                         y: "+=0"
//                     }, {
//                         inertia: {
//                             x: "auto",
//                             y: "auto",
//                             duration: {
//                                 min: .5,
//                                 max: 1.3
//                             }
//                         },
//                         onUpdate: function() {
//                             return t._updatePosition()
//                         }
//                     });
//                     var a = new n.Vec2;
//                     this.state.deltaPointer.equals(a) && (this._checkHover(e),
//                     this._openImage())
//                 }
//             }, {
//                 key: "_onDrag",
//                 value: function(e) {
//                     if (this.isTouch) {
//                         var t = e.touches[0];
//                         this.state.deltaPointer.set(this.state.pointer.x - t.clientX, this.state.pointer.y - t.clientY),
//                         this.state.pointer.set(t.clientX, t.clientY)
//                     } else
//                         this.state.deltaPointer.set(this.state.pointer.x - e.clientX, this.state.pointer.y - e.clientY),
//                         this.state.pointer.set(e.clientX, e.clientY);
//                     this.state.offset.add(this.state.deltaPointer),
//                     this._updatePosition()
//                 }
//             }, {
//                 key: "_onCloseClick",
//                 value: function() {
//                     this.currentOpenTimeline.pause(),
//                     this._closeImage()
//                 }
//             }, {
//                 key: "_checkHover",
//                 value: function(e) {
//                     if (this.isTouch) {
//                         var t = e.touches[0] || e.changedTouches[0];
//                         this.state.pointer.set(t.clientX, t.clientY)
//                     } else
//                         this.state.pointer.set(e.clientX, e.clientY);
//                     for (var a = 0; a < this.state.loadedImages; a++) {
//                         var i = this.webglPlanes[a]
//                           , s = i.mouseToPlaneCoords(new n.Vec2(this.state.pointer.x - i.relativeTranslation.x,this.state.pointer.y - i.relativeTranslation.y));
//                         s.x < 1 && s.x > -1 && s.y < 1 && s.y > -1 && this.state.hoveredPlane !== i && (this.state.hoveredPlane = i)
//                     }
//                 }
//             }, {
//                 key: "_openImage",
//                 value: function() {
//                     var e = this
//                       , t = this.state.hoveredPlane.htmlElement
//                       , a = t.clientWidth > t.clientHeight
//                       , s = 1.74;
//                     l.default.getData().viewportWidth < 1024 && (s = a ? 1.08 : 1.85);
//                     var r = this.state.hoveredPlane.mouseToPlaneCoords(new n.Vec2(window.innerWidth / 2 - this.state.hoveredPlane.relativeTranslation.x,window.innerHeight / 2 - this.state.hoveredPlane.relativeTranslation.y));
//                     this.unhoveredPlanes = this.webglPlanes.filter(function(t) {
//                         return t !== e.state.hoveredPlane
//                     });
//                     var u = new i.gsap.timeline;
//                     this.unhoveredPlanes.forEach(function(e) {
//                         u.to(e.uniforms.hide, {
//                             value: 1,
//                             duration: .65
//                         }, "<")
//                     }),
//                     l.default.getData().viewportWidth < 1024 && u.to(["[data-primary-nav-button]", "[data-secondary-nav-button]"], {
//                         autoAlpha: 0
//                     }, "<");
//                     var h = new i.gsap.timeline({
//                         onStart: function() {
//                             i.gsap.killTweensOf(e.state.offset),
//                             e.state.fullscreen = !0,
//                             e.state.hoveredPlane.setRenderOrder(9999),
//                             e.wrapper.removeEventListener(e.events.pointerdown, e._pointerdownCb, {
//                                 passive: !0
//                             }),
//                             e.wrapper.removeEventListener(e.events.pointerup, e._pointerupCb, {
//                                 passive: !0
//                             }),
//                             e.wrapper.removeEventListener(e.events.pointermove, e._dragCb, {
//                                 passive: !0
//                             })
//                         },
//                         onComplete: function() {
//                             o.default.instance.disableDrawing()
//                         }
//                     });
//                     h.to(this.state.hoveredPlane.uniforms.planeScreenOffset.value, {
//                         x: r.x,
//                         y: r.y,
//                         duration: 1.6,
//                         ease: "expo.inOut"
//                     }, "<").add(u, "<").to(this.state.hoveredPlane.uniforms.scale, {
//                         value: s,
//                         duration: 1.4,
//                         ease: "expo.inOut"
//                     }, "<0.2").to(this.state.hoveredPlane.uniforms.fullscreenAnim, {
//                         value: 1,
//                         duration: 2.5,
//                         ease: "sine.inOut"
//                     }, "<0.4").to(this.state.hoveredPlane.uniforms.textureScale, {
//                         value: 1,
//                         duration: 1.5
//                     }, "<0.55").fromTo(this.ui.closeBtn, {
//                         rotation: -35
//                     }, {
//                         autoAlpha: 1,
//                         duration: .6,
//                         rotation: 0
//                     }, ">-0.5"),
//                     this.currentOpenTimeline = h
//                 }
//             }, {
//                 key: "_closeImage",
//                 value: function() {
//                     var e = this
//                       , t = new i.gsap.timeline({
//                         onStart: function() {
//                             o.default.instance.enableDrawing()
//                         },
//                         onComplete: function() {
//                             e.state.fullscreen = !1,
//                             e.state.hoveredPlane.setRenderOrder(),
//                             e.wrapper.addEventListener(e.events.pointerdown, e._pointerdownCb, {
//                                 passive: !0
//                             }),
//                             e.wrapper.addEventListener(e.events.pointerup, e._pointerupCb, {
//                                 passive: !0
//                             })
//                         }
//                     })
//                       , a = new i.gsap.timeline;
//                     this.unhoveredPlanes.forEach(function(e) {
//                         a.to(e.uniforms.hide, {
//                             value: 0,
//                             duration: .4
//                         }, "<")
//                     }),
//                     l.default.getData().viewportWidth < 1024 && a.to(["[data-primary-nav-button]", "[data-secondary-nav-button]"], {
//                         autoAlpha: 1
//                     }, "<"),
//                     t.to(this.ui.closeBtn, {
//                         autoAlpha: 0,
//                         duration: .5
//                     }).to(this.state.hoveredPlane.uniforms.planeScreenOffset.value, {
//                         x: 0,
//                         y: 0,
//                         duration: 1.4,
//                         ease: "expo.inOut"
//                     }, "<").to(this.state.hoveredPlane.uniforms.fullscreenAnim, {
//                         value: 0,
//                         duration: .85,
//                         ease: "sine.inOut"
//                     }, "<").to(this.state.hoveredPlane.uniforms.scale, {
//                         value: 1,
//                         duration: 1.4,
//                         ease: "expo.inOut"
//                     }, "<").to(this.state.hoveredPlane.uniforms.textureScale, {
//                         value: 0,
//                         duration: .85,
//                         ease: "sine.inOut"
//                     }, "<0.4").add(a, ">-0.5")
//                 }
//             }, {
//                 key: "_updatePosition",
//                 value: function() {
//                     this.state.deltaOffset.set(this.state.offset.x - this.state.prevOffset.x, this.state.offset.y - this.state.prevOffset.y),
//                     this.state.prevOffset.set(this.state.offset.x, this.state.offset.y),
//                     o.default.instance.updateScrollValues(this.state.offset.x, this.state.offset.y);
//                     for (var e = 0; e < this.webglPlanes.length; e++) {
//                         var t = this.webglPlanes[e]
//                           , a = t.userData.minX + this.state.offset.x - t.relativeTranslation.x
//                           , n = this.state.offset.x + t.userData.maxX - t.relativeTranslation.x
//                           , i = t.userData.minY + this.state.offset.y - t.relativeTranslation.y
//                           , s = this.state.offset.y + t.userData.maxY - t.relativeTranslation.y;
//                         a > 0 && (t.relativeTranslation.x += this.ui.lines[t.userData.rowIndex].clientWidth),
//                         n < 0 && (t.relativeTranslation.x -= this.ui.lines[t.userData.rowIndex].clientWidth),
//                         i > 0 && (t.relativeTranslation.y += this.ui.track.clientHeight),
//                         s < 0 && (t.relativeTranslation.y -= this.ui.track.clientHeight)
//                     }
//                 }
//             }, {
//                 key: "_addPostProcess",
//                 value: function() {
//                     var e = {
//                         fragmentShader: require("../../shaders/gallery-postprocess.fragment.glsl"),
//                         uniforms: {
//                             resolution: {
//                                 name: "u_Resolution",
//                                 type: "2f",
//                                 value: new n.Vec2(window.innerWidth,window.innerHeight)
//                             },
//                             introProgress: {
//                                 name: "u_IntroProgress",
//                                 type: "1f",
//                                 value: 0
//                             },
//                             introMaskSize: {
//                                 name: "u_IntroMaskSize",
//                                 type: "1f",
//                                 value: 0
//                             },
//                             overlayVisibility: {
//                                 name: "u_OverlayVisibility",
//                                 type: "1f",
//                                 value: 0
//                             }
//                         }
//                     };
//                     this.shaderPass = new n.ShaderPass(o.default.instance,e),
//                     this.shaderPass.loadSource(u.default.displacementImage, {
//                         sampler: "u_DisplacementTexture"
//                     })
//                 }
//             }, {
//                 key: "hidePageLinks",
//                 value: function() {
//                     document.body.classList.contains("page-gallery") && i.gsap.to([".c-header__shop-link", "[data-bottom-right-switch-color]"], {
//                         autoAlpha: 0,
//                         duration: .65
//                     })
//                 }
//             }, {
//                 key: "showPageLinks",
//                 value: function() {
//                     document.body.classList.contains("page-gallery") && i.gsap.to([".c-header__shop-link", "[data-bottom-right-switch-color]"], {
//                         autoAlpha: 1,
//                         duration: .65
//                     })
//                 }
//             }]),
//             h
//         }()
//           , c = new d
//           , p = c;
//         exports.default = p;
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "curtainsjs": "aeXH",
//         "gsap": "TpQl",
//         "gsap/InertiaPlugin": "h7Qv",
//         "./Utils": "FR9S",
//         "./CurtainsManager": "mbMG",
//         "./SmoothScroll": "QzAk",
//         "./WebGLCarousel": "fi2O",
//         "../../shaders/gallery.vertex.glsl": "aJcg",
//         "../../shaders/gallery.fragment.glsl": "ZNLJ",
//         "../../shaders/gallery-postprocess.fragment.glsl": "uHUM"
//     }],
//     "OUZ9": [function(require, module, exports) {
//         function e(e) {
//             if (Array.isArray(e))
//                 return e
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "vKPt": [function(require, module, exports) {
//         function e(e, l) {
//             var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
//             if (null != r) {
//                 var t, o, u = [], n = !0, a = !1;
//                 try {
//                     for (r = r.call(e); !(n = (t = r.next()).done) && (u.push(t.value),
//                     !l || u.length !== l); n = !0)
//                         ;
//                 } catch (d) {
//                     a = !0,
//                     o = d
//                 } finally {
//                     try {
//                         n || null == r.return || r.return()
//                     } finally {
//                         if (a)
//                             throw o
//                     }
//                 }
//                 return u
//             }
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "Rom6": [function(require, module, exports) {
//         function e() {
//             throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "HETk": [function(require, module, exports) {
//         var e = require("./arrayWithHoles.js")
//           , r = require("./iterableToArrayLimit.js")
//           , o = require("./unsupportedIterableToArray.js")
//           , t = require("./nonIterableRest.js");
//         function u(u, s) {
//             return e(u) || r(u, s) || o(u, s) || t()
//         }
//         module.exports = u,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {
//         "./arrayWithHoles.js": "OUZ9",
//         "./iterableToArrayLimit.js": "vKPt",
//         "./unsupportedIterableToArray.js": "UyFj",
//         "./nonIterableRest.js": "Rom6"
//     }],
//     "wAOS": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = s(require("@babel/runtime/helpers/slicedToArray"))
//           , t = s(require("@babel/runtime/helpers/toConsumableArray"))
//           , r = s(require("@babel/runtime/helpers/classCallCheck"))
//           , o = s(require("@babel/runtime/helpers/createClass"))
//           , a = require("gsap")
//           , l = s(require("gsap/SplitText"))
//           , c = s(require("gsap/ScrollTrigger"))
//           , n = s(require("./SmoothScroll"))
//           , i = s(require("./Utils"));
//         function s(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         a.gsap.registerPlugin(l.default);
//         var u = function() {
//             function l() {
//                 (0,
//                 r.default)(this, l)
//             }
//             return (0,
//             o.default)(l, null, [{
//                 key: "init",
//                 value: function() {
//                     var r, o = (0,
//                     t.default)(document.querySelectorAll("[data-onscroll]")), l = document.querySelector("[data-top-left-switch-color]"), s = document.querySelector("[data-top-center-switch-color]"), u = (0,
//                     t.default)(document.querySelectorAll("[data-top-right-switch-color]")), d = document.querySelector("[data-top-right-2-switch-color]"), g = document.querySelector("[data-bottom-left-switch-color]"), h = document.querySelector("[data-bottom-right-switch-color]");
//                     i.default.isTouch() || c.default.scrollerProxy("[data-router-view]", {
//                         scrollTop: function(e) {
//                             return n.default.get() ? arguments.length ? n.default.scrollTo(e) : -n.default.get().smoothScrollPos : 0
//                         },
//                         getBoundingClientRect: function() {
//                             return {
//                                 top: 0,
//                                 left: 0,
//                                 width: window.innerWidth,
//                                 height: window.innerHeight
//                             }
//                         }
//                     });
//                     var f = i.default.isTouch() ? "[data-router-wrapper]" : "[data-router-view]";
//                     o.forEach(function(o) {
//                         var n = o.dataset.onscroll.split(" ")
//                           , p = (0,
//                         e.default)(n, 3)
//                           , b = p[0]
//                           , w = p[1]
//                           , m = p[2];
//                         switch (b) {
//                         case "homepage-carousel":
//                             var y = o.querySelectorAll(".js-webgl-carousel-band");
//                             (r = new a.gsap.timeline).fromTo(y, {
//                                 scaleY: 0
//                             }, {
//                                 scaleY: 1,
//                                 stagger: .15,
//                                 ease: "sine.in"
//                             }),
//                             c.default.create({
//                                 animation: r,
//                                 trigger: o,
//                                 scrub: !0,
//                                 start: function() {
//                                     return "bottom ".concat(.99 * window.innerHeight)
//                                 },
//                                 end: function() {
//                                     return "bottom ".concat(.3 * window.innerHeight)
//                                 },
//                                 scroller: f,
//                                 onUpdate: function(e) {
//                                     var t = e.progress >= .045 ? "white" : "blue-light"
//                                       , r = e.progress >= .045 ? "blue-light" : "white";
//                                     g.classList.replace("color-".concat(t), "color-".concat(r)),
//                                     t = e.progress >= .045 ? "white" : "blue-light",
//                                     r = e.progress >= .045 ? "blue-light" : "white",
//                                     h.classList.replace("color-".concat(t), "color-".concat(r)),
//                                     t = e.progress >= .605 ? "white" : "blue-light",
//                                     r = e.progress >= .605 ? "blue-light" : "white",
//                                     s.classList.replace("color-".concat(t), "color-".concat(r)),
//                                     t = e.progress >= .465 ? "white" : "blue-light",
//                                     r = e.progress >= .465 ? "blue-light" : "white",
//                                     l.classList.replace("color-".concat(t), "color-".concat(r)),
//                                     t = e.progress >= .745 ? "white" : "blue-light",
//                                     r = e.progress >= .745 ? "blue-light" : "white",
//                                     u.forEach(function(e) {
//                                         e.classList.replace("color-".concat(t), "color-".concat(r))
//                                     }),
//                                     t = e.progress >= .735 ? "white" : "blue-light",
//                                     r = e.progress >= .735 ? "blue-light" : "white",
//                                     d.classList.replace("color-".concat(t), "color-".concat(r))
//                                 }
//                             });
//                             break;
//                         case "parallax":
//                             (r = new a.gsap.timeline).fromTo(o, {
//                                 yPercent: "".concat(100 * parseFloat(w))
//                             }, {
//                                 yPercent: "".concat(-100 * parseFloat(m)),
//                                 ease: "none"
//                             }),
//                             c.default.create({
//                                 animation: r,
//                                 trigger: o,
//                                 scrub: !0,
//                                 start: function() {
//                                     return "top ".concat(window.innerHeight)
//                                 },
//                                 end: function() {
//                                     return "bottom top"
//                                 },
//                                 scroller: f
//                             });
//                             break;
//                         case "parallax-x":
//                             (r = new a.gsap.timeline).fromTo(o, {
//                                 xPercent: "".concat(100 * parseFloat(w))
//                             }, {
//                                 xPercent: "".concat(-100 * parseFloat(m)),
//                                 ease: "none"
//                             }),
//                             c.default.create({
//                                 animation: r,
//                                 trigger: o,
//                                 scrub: !0,
//                                 start: function() {
//                                     return "top 100%+=500px"
//                                 },
//                                 end: function() {
//                                     return "bottom top"
//                                 },
//                                 scroller: f
//                             });
//                             break;
//                         case "sliding-text":
//                             (r = new a.gsap.timeline).fromTo(o, {
//                                 xPercent: 0
//                             }, {
//                                 xPercent: -100,
//                                 ease: "none"
//                             }),
//                             c.default.create({
//                                 animation: r,
//                                 trigger: "[data-product-hero]",
//                                 scrub: !0,
//                                 start: function() {
//                                     return "top top"
//                                 },
//                                 end: function() {
//                                     return "bottom ".concat(.15 * -window.innerHeight)
//                                 },
//                                 scroller: f
//                             }),
//                             o.classList.add("is-visible");
//                             break;
//                         case "switch-nav-color":
//                             var v = function(e) {
//                                 return e.getAttribute("class").match(/color-[^\s]*/gm)[0]
//                             };
//                             [h, g, l, s].concat((0,
//                             t.default)(u), [d]).forEach(function(e) {
//                                 var t = e.getBoundingClientRect()
//                                   , r = t.height
//                                   , a = t.top
//                                   , l = w;
//                                 c.default.create({
//                                     trigger: o,
//                                     start: function() {
//                                         return "top ".concat(a + r / 2)
//                                     },
//                                     onEnter: function() {
//                                         var t = v(e)
//                                           , r = "dark-to-light" === l ? "color-white" : "color-blue-light";
//                                         e.classList.replace(t, r)
//                                     },
//                                     onLeaveBack: function() {
//                                         var t = v(e)
//                                           , r = "dark-to-light" === l ? "color-blue-light" : "color-white";
//                                         e.classList.replace(t, r)
//                                     },
//                                     scroller: f
//                                 })
//                             });
//                             break;
//                         case "horizontal-gallery":
//                             var q = o.querySelector("[data-horizontal-gallery-track]")
//                               , x = (0,
//                             t.default)(o.querySelectorAll("[data-horizontal-gallery-block]"))
//                               , S = (0,
//                             t.default)(o.querySelectorAll("[data-gallery-parallax]"));
//                             (r = new a.gsap.timeline).fromTo(q, {
//                                 "--translate": 0
//                             }, {
//                                 "--translate": .975,
//                                 ease: "none"
//                             }),
//                             S.forEach(function(t) {
//                                 var o = t.dataset.galleryParallax.split(" ")
//                                   , a = (0,
//                                 e.default)(o, 2)
//                                   , l = a[0]
//                                   , c = a[1];
//                                 r.fromTo(t, {
//                                     xPercent: 100 * (l || 1)
//                                 }, {
//                                     ease: "none",
//                                     xPercent: -100 * (c || 1)
//                                 }, "<")
//                             });
//                             var k = i.default.isTouch() ? "fixed" : "transform";
//                             c.default.create({
//                                 animation: r,
//                                 pinType: k,
//                                 trigger: o,
//                                 scrub: !0,
//                                 pin: !0,
//                                 start: function() {
//                                     return "top top"
//                                 },
//                                 end: function() {
//                                     var e = x.reduce(function(e, t) {
//                                         return e + t.clientWidth
//                                     }, 0);
//                                     return "+=".concat(e)
//                                 },
//                                 scroller: f
//                             })
//                         }
//                     }),
//                     c.default.refresh()
//                 }
//             }, {
//                 key: "destroy",
//                 value: function() {
//                     c.default.getAll().forEach(function(e) {
//                         return e.kill()
//                     })
//                 }
//             }, {
//                 key: "refresh",
//                 value: function() {
//                     c.default.refresh()
//                 }
//             }]),
//             l
//         }();
//         exports.default = u;
//     }
//     , {
//         "@babel/runtime/helpers/slicedToArray": "HETk",
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "gsap": "TpQl",
//         "gsap/SplitText": "BtuU",
//         "gsap/ScrollTrigger": "TgBN",
//         "./SmoothScroll": "QzAk",
//         "./Utils": "FR9S"
//     }],
//     "VNxj": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = i(require("@babel/runtime/helpers/toConsumableArray"))
//           , t = i(require("@babel/runtime/helpers/classCallCheck"))
//           , r = i(require("@babel/runtime/helpers/createClass"))
//           , o = i(require("./SmoothScroll"))
//           , a = require("gsap");
//         function i(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var n = function() {
//             function i() {
//                 var e = this;
//                 (0,
//                 t.default)(this, i),
//                 this.hoverCb = function(t) {
//                     return e._onMouseenter(t.currentTarget)
//                 }
//                 ,
//                 this.leaveCb = function(t) {
//                     return e._onMouseleave(t.currentTarget)
//                 }
//             }
//             return (0,
//             r.default)(i, [{
//                 key: "update",
//                 value: function() {
//                     this.targets = (0,
//                     e.default)(document.querySelectorAll("[data-hover]")),
//                     this._addListeners()
//                 }
//             }, {
//                 key: "destroy",
//                 value: function() {
//                     this._removeListeners()
//                 }
//             }, {
//                 key: "_addListeners",
//                 value: function() {
//                     var e = this;
//                     this.targets.forEach(function(t) {
//                         t.addEventListener("mouseenter", e.hoverCb, {
//                             passive: !0
//                         }),
//                         t.addEventListener("mouseleave", e.leaveCb, {
//                             passive: !0
//                         })
//                     })
//                 }
//             }, {
//                 key: "_removeListeners",
//                 value: function() {
//                     var e = this;
//                     this.targets.forEach(function(t) {
//                         t.removeEventListener("mouseenter", e.hoverCb, {
//                             passive: !0
//                         }),
//                         t.removeEventListener("mouseleave", e.leaveCb, {
//                             passive: !0
//                         })
//                     })
//                 }
//             }, {
//                 key: "_onMouseenter",
//                 value: function(e) {
//                     if (!(o.default.getData().viewportWidth < 1024))
//                         switch (e.dataset.hover) {
//                         case "page-footer":
//                             this._pageFooterHover(e)
//                         }
//                 }
//             }, {
//                 key: "_onMouseleave",
//                 value: function(e) {
//                     if (!(o.default.getData().viewportWidth < 1024))
//                         switch (e.dataset.hover) {
//                         case "page-footer":
//                             this._pageFooterLeave(e)
//                         }
//                 }
//             }, {
//                 key: "_pageFooterHover",
//                 value: function(e) {
//                     var t = e.querySelector("[data-page-footer-image]")
//                       , r = t.querySelector("img")
//                       , o = new a.gsap.timeline;
//                     a.gsap.isTweening(t) ? o.to(t, {
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//                         duration: .8,
//                         overwrite: !0
//                     }) : o.fromTo(t, {
//                         clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
//                     }, {
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//                         duration: .8,
//                         overwrite: !0
//                     }),
//                     o.to(t, {
//                         opacity: 1,
//                         duration: 1
//                     }, "<").to(r, {
//                         scale: 1,
//                         duration: .85,
//                         overwrite: !0
//                     }, "<")
//                 }
//             }, {
//                 key: "_pageFooterLeave",
//                 value: function(e) {
//                     var t = e.querySelector("[data-page-footer-image]")
//                       , r = t.querySelector("img");
//                     (new a.gsap.timeline).to(t, {
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//                         duration: .6,
//                         overwrite: !0
//                     }).to(t, {
//                         opacity: 0,
//                         duration: .6
//                     }, "<").to(r, {
//                         scale: 1.2,
//                         duration: .65,
//                         overwrite: !0
//                     }, "<")
//                 }
//             }]),
//             i
//         }()
//           , s = new n
//           , u = s;
//         exports.default = u;
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "./SmoothScroll": "QzAk",
//         "gsap": "TpQl"
//     }],
//     "AkAO": [function(require, module, exports) {
//         function e(o, t) {
//             return module.exports = e = Object.setPrototypeOf || function(e, o) {
//                 return e.__proto__ = o,
//                 e
//             }
//             ,
//             module.exports.default = module.exports,
//             module.exports.__esModule = !0,
//             e(o, t)
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "d4H2": [function(require, module, exports) {
//         var e = require("./setPrototypeOf.js");
//         function o(o, t) {
//             if ("function" != typeof t && null !== t)
//                 throw new TypeError("Super expression must either be null or a function");
//             o.prototype = Object.create(t && t.prototype, {
//                 constructor: {
//                     value: o,
//                     writable: !0,
//                     configurable: !0
//                 }
//             }),
//             t && e(o, t)
//         }
//         module.exports = o,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {
//         "./setPrototypeOf.js": "AkAO"
//     }],
//     "b9XL": [function(require, module, exports) {
//         function o(e) {
//             return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (module.exports = o = function(o) {
//                 return typeof o
//             }
//             ,
//             module.exports.default = module.exports,
//             module.exports.__esModule = !0) : (module.exports = o = function(o) {
//                 return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
//             }
//             ,
//             module.exports.default = module.exports,
//             module.exports.__esModule = !0),
//             o(e)
//         }
//         module.exports = o,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "E7HD": [function(require, module, exports) {
//         function e(e) {
//             if (void 0 === e)
//                 throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//             return e
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "pxk2": [function(require, module, exports) {
//         var e = require("@babel/runtime/helpers/typeof").default
//           , t = require("./assertThisInitialized.js");
//         function o(o, r) {
//             return !r || "object" !== e(r) && "function" != typeof r ? t(o) : r
//         }
//         module.exports = o,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {
//         "@babel/runtime/helpers/typeof": "b9XL",
//         "./assertThisInitialized.js": "E7HD"
//     }],
//     "UJE0": [function(require, module, exports) {
//         function e(o) {
//             return module.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
//                 return e.__proto__ || Object.getPrototypeOf(e)
//             }
//             ,
//             module.exports.default = module.exports,
//             module.exports.__esModule = !0,
//             e(o)
//         }
//         module.exports = e,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "agGE": [function(require, module, exports) {
//         function e(e, o, t, n, r, u, i) {
//             try {
//                 var d = e[u](i)
//                   , l = d.value
//             } catch (s) {
//                 return void t(s)
//             }
//             d.done ? o(l) : Promise.resolve(l).then(n, r)
//         }
//         function o(o) {
//             return function() {
//                 var t = this
//                   , n = arguments;
//                 return new Promise(function(r, u) {
//                     var i = o.apply(t, n);
//                     function d(o) {
//                         e(i, r, u, d, l, "next", o)
//                     }
//                     function l(o) {
//                         e(i, r, u, d, l, "throw", o)
//                     }
//                     d(void 0)
//                 }
//                 )
//             }
//         }
//         module.exports = o,
//         module.exports.default = module.exports,
//         module.exports.__esModule = !0;
//     }
//     , {}],
//     "QVnC": [function(require, module, exports) {
//         var define;
//         var t, r = function(t) {
//             "use strict";
//             var r, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
//             function u(t, r, e) {
//                 return Object.defineProperty(t, r, {
//                     value: e,
//                     enumerable: !0,
//                     configurable: !0,
//                     writable: !0
//                 }),
//                 t[r]
//             }
//             try {
//                 u({}, "")
//             } catch (P) {
//                 u = function(t, r, e) {
//                     return t[r] = e
//                 }
//             }
//             function h(t, r, e, n) {
//                 var o = r && r.prototype instanceof d ? r : d
//                   , i = Object.create(o.prototype)
//                   , a = new G(n || []);
//                 return i._invoke = function(t, r, e) {
//                     var n = l;
//                     return function(o, i) {
//                         if (n === p)
//                             throw new Error("Generator is already running");
//                         if (n === y) {
//                             if ("throw" === o)
//                                 throw i;
//                             return F()
//                         }
//                         for (e.method = o,
//                         e.arg = i; ; ) {
//                             var a = e.delegate;
//                             if (a) {
//                                 var c = j(a, e);
//                                 if (c) {
//                                     if (c === v)
//                                         continue;
//                                     return c
//                                 }
//                             }
//                             if ("next" === e.method)
//                                 e.sent = e._sent = e.arg;
//                             else if ("throw" === e.method) {
//                                 if (n === l)
//                                     throw n = y,
//                                     e.arg;
//                                 e.dispatchException(e.arg)
//                             } else
//                                 "return" === e.method && e.abrupt("return", e.arg);
//                             n = p;
//                             var u = f(t, r, e);
//                             if ("normal" === u.type) {
//                                 if (n = e.done ? y : s,
//                                 u.arg === v)
//                                     continue;
//                                 return {
//                                     value: u.arg,
//                                     done: e.done
//                                 }
//                             }
//                             "throw" === u.type && (n = y,
//                             e.method = "throw",
//                             e.arg = u.arg)
//                         }
//                     }
//                 }(t, e, a),
//                 i
//             }
//             function f(t, r, e) {
//                 try {
//                     return {
//                         type: "normal",
//                         arg: t.call(r, e)
//                     }
//                 } catch (P) {
//                     return {
//                         type: "throw",
//                         arg: P
//                     }
//                 }
//             }
//             t.wrap = h;
//             var l = "suspendedStart"
//               , s = "suspendedYield"
//               , p = "executing"
//               , y = "completed"
//               , v = {};
//             function d() {}
//             function g() {}
//             function m() {}
//             var w = {};
//             w[i] = function() {
//                 return this
//             }
//             ;
//             var L = Object.getPrototypeOf
//               , x = L && L(L(N([])));
//             x && x !== e && n.call(x, i) && (w = x);
//             var b = m.prototype = d.prototype = Object.create(w);
//             function E(t) {
//                 ["next", "throw", "return"].forEach(function(r) {
//                     u(t, r, function(t) {
//                         return this._invoke(r, t)
//                     })
//                 })
//             }
//             function _(t, r) {
//                 var e;
//                 this._invoke = function(o, i) {
//                     function a() {
//                         return new r(function(e, a) {
//                             !function e(o, i, a, c) {
//                                 var u = f(t[o], t, i);
//                                 if ("throw" !== u.type) {
//                                     var h = u.arg
//                                       , l = h.value;
//                                     return l && "object" == typeof l && n.call(l, "__await") ? r.resolve(l.__await).then(function(t) {
//                                         e("next", t, a, c)
//                                     }, function(t) {
//                                         e("throw", t, a, c)
//                                     }) : r.resolve(l).then(function(t) {
//                                         h.value = t,
//                                         a(h)
//                                     }, function(t) {
//                                         return e("throw", t, a, c)
//                                     })
//                                 }
//                                 c(u.arg)
//                             }(o, i, e, a)
//                         }
//                         )
//                     }
//                     return e = e ? e.then(a, a) : a()
//                 }
//             }
//             function j(t, e) {
//                 var n = t.iterator[e.method];
//                 if (n === r) {
//                     if (e.delegate = null,
//                     "throw" === e.method) {
//                         if (t.iterator.return && (e.method = "return",
//                         e.arg = r,
//                         j(t, e),
//                         "throw" === e.method))
//                             return v;
//                         e.method = "throw",
//                         e.arg = new TypeError("The iterator does not provide a 'throw' method")
//                     }
//                     return v
//                 }
//                 var o = f(n, t.iterator, e.arg);
//                 if ("throw" === o.type)
//                     return e.method = "throw",
//                     e.arg = o.arg,
//                     e.delegate = null,
//                     v;
//                 var i = o.arg;
//                 return i ? i.done ? (e[t.resultName] = i.value,
//                 e.next = t.nextLoc,
//                 "return" !== e.method && (e.method = "next",
//                 e.arg = r),
//                 e.delegate = null,
//                 v) : i : (e.method = "throw",
//                 e.arg = new TypeError("iterator result is not an object"),
//                 e.delegate = null,
//                 v)
//             }
//             function O(t) {
//                 var r = {
//                     tryLoc: t[0]
//                 };
//                 1 in t && (r.catchLoc = t[1]),
//                 2 in t && (r.finallyLoc = t[2],
//                 r.afterLoc = t[3]),
//                 this.tryEntries.push(r)
//             }
//             function k(t) {
//                 var r = t.completion || {};
//                 r.type = "normal",
//                 delete r.arg,
//                 t.completion = r
//             }
//             function G(t) {
//                 this.tryEntries = [{
//                     tryLoc: "root"
//                 }],
//                 t.forEach(O, this),
//                 this.reset(!0)
//             }
//             function N(t) {
//                 if (t) {
//                     var e = t[i];
//                     if (e)
//                         return e.call(t);
//                     if ("function" == typeof t.next)
//                         return t;
//                     if (!isNaN(t.length)) {
//                         var o = -1
//                           , a = function e() {
//                             for (; ++o < t.length; )
//                                 if (n.call(t, o))
//                                     return e.value = t[o],
//                                     e.done = !1,
//                                     e;
//                             return e.value = r,
//                             e.done = !0,
//                             e
//                         };
//                         return a.next = a
//                     }
//                 }
//                 return {
//                     next: F
//                 }
//             }
//             function F() {
//                 return {
//                     value: r,
//                     done: !0
//                 }
//             }
//             return g.prototype = b.constructor = m,
//             m.constructor = g,
//             g.displayName = u(m, c, "GeneratorFunction"),
//             t.isGeneratorFunction = function(t) {
//                 var r = "function" == typeof t && t.constructor;
//                 return !!r && (r === g || "GeneratorFunction" === (r.displayName || r.name))
//             }
//             ,
//             t.mark = function(t) {
//                 return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
//                 u(t, c, "GeneratorFunction")),
//                 t.prototype = Object.create(b),
//                 t
//             }
//             ,
//             t.awrap = function(t) {
//                 return {
//                     __await: t
//                 }
//             }
//             ,
//             E(_.prototype),
//             _.prototype[a] = function() {
//                 return this
//             }
//             ,
//             t.AsyncIterator = _,
//             t.async = function(r, e, n, o, i) {
//                 void 0 === i && (i = Promise);
//                 var a = new _(h(r, e, n, o),i);
//                 return t.isGeneratorFunction(e) ? a : a.next().then(function(t) {
//                     return t.done ? t.value : a.next()
//                 })
//             }
//             ,
//             E(b),
//             u(b, c, "Generator"),
//             b[i] = function() {
//                 return this
//             }
//             ,
//             b.toString = function() {
//                 return "[object Generator]"
//             }
//             ,
//             t.keys = function(t) {
//                 var r = [];
//                 for (var e in t)
//                     r.push(e);
//                 return r.reverse(),
//                 function e() {
//                     for (; r.length; ) {
//                         var n = r.pop();
//                         if (n in t)
//                             return e.value = n,
//                             e.done = !1,
//                             e
//                     }
//                     return e.done = !0,
//                     e
//                 }
//             }
//             ,
//             t.values = N,
//             G.prototype = {
//                 constructor: G,
//                 reset: function(t) {
//                     if (this.prev = 0,
//                     this.next = 0,
//                     this.sent = this._sent = r,
//                     this.done = !1,
//                     this.delegate = null,
//                     this.method = "next",
//                     this.arg = r,
//                     this.tryEntries.forEach(k),
//                     !t)
//                         for (var e in this)
//                             "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
//                 },
//                 stop: function() {
//                     this.done = !0;
//                     var t = this.tryEntries[0].completion;
//                     if ("throw" === t.type)
//                         throw t.arg;
//                     return this.rval
//                 },
//                 dispatchException: function(t) {
//                     if (this.done)
//                         throw t;
//                     var e = this;
//                     function o(n, o) {
//                         return c.type = "throw",
//                         c.arg = t,
//                         e.next = n,
//                         o && (e.method = "next",
//                         e.arg = r),
//                         !!o
//                     }
//                     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
//                         var a = this.tryEntries[i]
//                           , c = a.completion;
//                         if ("root" === a.tryLoc)
//                             return o("end");
//                         if (a.tryLoc <= this.prev) {
//                             var u = n.call(a, "catchLoc")
//                               , h = n.call(a, "finallyLoc");
//                             if (u && h) {
//                                 if (this.prev < a.catchLoc)
//                                     return o(a.catchLoc, !0);
//                                 if (this.prev < a.finallyLoc)
//                                     return o(a.finallyLoc)
//                             } else if (u) {
//                                 if (this.prev < a.catchLoc)
//                                     return o(a.catchLoc, !0)
//                             } else {
//                                 if (!h)
//                                     throw new Error("try statement without catch or finally");
//                                 if (this.prev < a.finallyLoc)
//                                     return o(a.finallyLoc)
//                             }
//                         }
//                     }
//                 },
//                 abrupt: function(t, r) {
//                     for (var e = this.tryEntries.length - 1; e >= 0; --e) {
//                         var o = this.tryEntries[e];
//                         if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
//                             var i = o;
//                             break
//                         }
//                     }
//                     i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
//                     var a = i ? i.completion : {};
//                     return a.type = t,
//                     a.arg = r,
//                     i ? (this.method = "next",
//                     this.next = i.finallyLoc,
//                     v) : this.complete(a)
//                 },
//                 complete: function(t, r) {
//                     if ("throw" === t.type)
//                         throw t.arg;
//                     return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
//                     this.method = "return",
//                     this.next = "end") : "normal" === t.type && r && (this.next = r),
//                     v
//                 },
//                 finish: function(t) {
//                     for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                         var e = this.tryEntries[r];
//                         if (e.finallyLoc === t)
//                             return this.complete(e.completion, e.afterLoc),
//                             k(e),
//                             v
//                     }
//                 },
//                 catch: function(t) {
//                     for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                         var e = this.tryEntries[r];
//                         if (e.tryLoc === t) {
//                             var n = e.completion;
//                             if ("throw" === n.type) {
//                                 var o = n.arg;
//                                 k(e)
//                             }
//                             return o
//                         }
//                     }
//                     throw new Error("illegal catch attempt")
//                 },
//                 delegateYield: function(t, e, n) {
//                     return this.delegate = {
//                         iterator: N(t),
//                         resultName: e,
//                         nextLoc: n
//                     },
//                     "next" === this.method && (this.arg = r),
//                     v
//                 }
//             },
//             t
//         }("object" == typeof module ? module.exports : {});
//         try {
//             regeneratorRuntime = r
//         } catch (e) {
//             Function("r", "regeneratorRuntime = r")(r)
//         }
//     }
//     , {}],
//     "PMvg": [function(require, module, exports) {
//         module.exports = require("regenerator-runtime");
//     }
//     , {
//         "regenerator-runtime": "QVnC"
//     }],
//     "JZPE": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.expose = a,
//         exports.proxy = g,
//         exports.transfer = m,
//         exports.windowEndpoint = h,
//         exports.wrap = c,
//         exports.transferHandlers = exports.releaseProxy = exports.proxyMarker = exports.createEndpoint = void 0;
//         const e = Symbol("Comlink.proxy");
//         exports.proxyMarker = e;
//         const t = Symbol("Comlink.endpoint");
//         exports.createEndpoint = t;
//         const n = Symbol("Comlink.releaseProxy");
//         exports.releaseProxy = n;
//         const r = new WeakSet
//           , s = new Map([["proxy", {
//             canHandle: t=>t && t[e],
//             serialize(e) {
//                 const {port1: t, port2: n} = new MessageChannel;
//                 return a(e, t),
//                 [n, [n]]
//             },
//             deserialize: e=>(e.start(),
//             c(e))
//         }], ["throw", {
//             canHandle: e=>r.has(e),
//             serialize(e) {
//                 const t = e instanceof Error;
//                 let n = e;
//                 return t && (n = {
//                     isError: t,
//                     message: e.message,
//                     stack: e.stack
//                 }),
//                 [n, []]
//             },
//             deserialize(e) {
//                 if (e.isError)
//                     throw Object.assign(new Error, e);
//                 throw e
//             }
//         }]]);
//         function a(e, t=self) {
//             t.addEventListener("message", function n(s) {
//                 if (!s || !s.data)
//                     return;
//                 const {id: o, type: c, path: p} = Object.assign({
//                     path: []
//                 }, s.data)
//                   , u = (s.data.argumentList || []).map(x);
//                 let d;
//                 try {
//                     const t = p.slice(0, -1).reduce((e,t)=>e[t], e)
//                       , n = p.reduce((e,t)=>e[t], e);
//                     switch (c) {
//                     case 0:
//                         d = n;
//                         break;
//                     case 1:
//                         t[p.slice(-1)[0]] = x(s.data.value),
//                         d = !0;
//                         break;
//                     case 2:
//                         d = n.apply(t, u);
//                         break;
//                     case 3:
//                         d = g(new n(...u));
//                         break;
//                     case 4:
//                         {
//                             const {port1: t, port2: n} = new MessageChannel;
//                             a(e, n),
//                             d = m(t, [t])
//                         }
//                         break;
//                     case 5:
//                         d = void 0
//                     }
//                 } catch (l) {
//                     d = l,
//                     r.add(l)
//                 }
//                 Promise.resolve(d).catch(e=>(r.add(e),
//                 e)).then(e=>{
//                     const [r,s] = y(e);
//                     t.postMessage(Object.assign(Object.assign({}, r), {
//                         id: o
//                     }), s),
//                     5 === c && (t.removeEventListener("message", n),
//                     i(t))
//                 }
//                 )
//             }),
//             t.start && t.start()
//         }
//         function o(e) {
//             return "MessagePort" === e.constructor.name
//         }
//         function i(e) {
//             o(e) && e.close()
//         }
//         function c(e, t) {
//             return u(e, [], t)
//         }
//         function p(e) {
//             if (e)
//                 throw new Error("Proxy has been released and is not useable")
//         }
//         function u(e, r=[], s=function() {}
//         ) {
//             let a = !1;
//             const o = new Proxy(s,{
//                 get(t, s) {
//                     if (p(a),
//                     s === n)
//                         return ()=>b(e, {
//                             type: 5,
//                             path: r.map(e=>e.toString())
//                         }).then(()=>{
//                             i(e),
//                             a = !0
//                         }
//                         );
//                     if ("then" === s) {
//                         if (0 === r.length)
//                             return {
//                                 then: ()=>o
//                             };
//                         const t = b(e, {
//                             type: 0,
//                             path: r.map(e=>e.toString())
//                         }).then(x);
//                         return t.then.bind(t)
//                     }
//                     return u(e, [...r, s])
//                 },
//                 set(t, n, s) {
//                     p(a);
//                     const [o,i] = y(s);
//                     return b(e, {
//                         type: 1,
//                         path: [...r, n].map(e=>e.toString()),
//                         value: o
//                     }, i).then(x)
//                 },
//                 apply(n, s, o) {
//                     p(a);
//                     const i = r[r.length - 1];
//                     if (i === t)
//                         return b(e, {
//                             type: 4
//                         }).then(x);
//                     if ("bind" === i)
//                         return u(e, r.slice(0, -1));
//                     const [c,d] = l(o);
//                     return b(e, {
//                         type: 2,
//                         path: r.map(e=>e.toString()),
//                         argumentList: c
//                     }, d).then(x)
//                 },
//                 construct(t, n) {
//                     p(a);
//                     const [s,o] = l(n);
//                     return b(e, {
//                         type: 3,
//                         path: r.map(e=>e.toString()),
//                         argumentList: s
//                     }, o).then(x)
//                 }
//             });
//             return o
//         }
//         function d(e) {
//             return Array.prototype.concat.apply([], e)
//         }
//         function l(e) {
//             const t = e.map(y);
//             return [t.map(e=>e[0]), d(t.map(e=>e[1]))]
//         }
//         exports.transferHandlers = s;
//         const f = new WeakMap;
//         function m(e, t) {
//             return f.set(e, t),
//             e
//         }
//         function g(t) {
//             return Object.assign(t, {
//                 [e]: !0
//             })
//         }
//         function h(e, t=self, n="*") {
//             return {
//                 postMessage: (t,r)=>e.postMessage(t, n, r),
//                 addEventListener: t.addEventListener.bind(t),
//                 removeEventListener: t.removeEventListener.bind(t)
//             }
//         }
//         function y(e) {
//             for (const [t,n] of s)
//                 if (n.canHandle(e)) {
//                     const [r,s] = n.serialize(e);
//                     return [{
//                         type: 3,
//                         name: t,
//                         value: r
//                     }, s]
//                 }
//             return [{
//                 type: 0,
//                 value: e
//             }, f.get(e) || []]
//         }
//         function x(e) {
//             switch (e.type) {
//             case 3:
//                 return s.get(e.name).deserialize(e.value);
//             case 0:
//                 return e.value
//             }
//         }
//         function b(e, t, n) {
//             return new Promise(r=>{
//                 const s = v();
//                 e.addEventListener("message", function t(n) {
//                     n.data && n.data.id && n.data.id === s && (e.removeEventListener("message", t),
//                     r(n.data))
//                 }),
//                 e.start && e.start(),
//                 e.postMessage(Object.assign({
//                     id: s
//                 }, t), n)
//             }
//             )
//         }
//         function v() {
//             return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
//         }
//     }
//     , {}],
//     "X7im": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = l(require("@babel/runtime/helpers/asyncToGenerator"))
//           , r = l(require("@babel/runtime/helpers/toConsumableArray"))
//           , t = l(require("@babel/runtime/helpers/classCallCheck"))
//           , n = l(require("@babel/runtime/helpers/createClass"))
//           , a = l(require("@babel/runtime/regenerator"))
//           , u = i(require("comlink"))
//           , s = l(require("./Utils"));
//         function o() {
//             if ("function" != typeof WeakMap)
//                 return null;
//             var e = new WeakMap;
//             return o = function() {
//                 return e
//             }
//             ,
//             e
//         }
//         function i(e) {
//             if (e && e.__esModule)
//                 return e;
//             if (null === e || "object" != typeof e && "function" != typeof e)
//                 return {
//                     default: e
//                 };
//             var r = o();
//             if (r && r.has(e))
//                 return r.get(e);
//             var t = {}
//               , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
//             for (var a in e)
//                 if (Object.prototype.hasOwnProperty.call(e, a)) {
//                     var u = n ? Object.getOwnPropertyDescriptor(e, a) : null;
//                     u && (u.get || u.set) ? Object.defineProperty(t, a, u) : t[a] = e[a]
//                 }
//             return t.default = e,
//             r && r.set(e, t),
//             t
//         }
//         function l(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var c = function() {
//             function o() {
//                 (0,
//                 t.default)(this, o),
//                 this.targets = (0,
//                 r.default)(document.querySelectorAll("[data-lazy]")),
//                 this.worker = null,
//                 this._setupObserver()
//             }
//             return (0,
//             n.default)(o, [{
//                 key: "_setupObserver",
//                 value: function() {
//                     var e = this
//                       , r = new IntersectionObserver(function(t) {
//                         t.forEach(function(t) {
//                             t.isIntersecting && (r.unobserve(t.target),
//                             e._loadAsset({
//                                 source: t.target
//                             }))
//                         })
//                     }
//                     ,{
//                         threshold: 0
//                     });
//                     this.targets.forEach(function(e) {
//                         return r.observe(e)
//                     })
//                 }
//             }, {
//                 key: "_setupWorker",
//                 value: function() {
//                     var r = (0,
//                     e.default)(a.default.mark(function e() {
//                         var r;
//                         return a.default.wrap(function(e) {
//                             for (; ; )
//                                 switch (e.prev = e.next) {
//                                 case 0:
//                                     return r = u.wrap(new Worker(document.location.origin + "/worker.js")),
//                                     e.next = 3,
//                                     new r;
//                                 case 3:
//                                     this.worker = e.sent;
//                                 case 4:
//                                 case "end":
//                                     return e.stop()
//                                 }
//                         }, e, this)
//                     }));
//                     return function() {
//                         return r.apply(this, arguments)
//                     }
//                 }()
//             }, {
//                 key: "_loadAsset",
//                 value: function() {
//                     var r = (0,
//                     e.default)(a.default.mark(function r(t) {
//                         var n, u, o, i = this;
//                         return a.default.wrap(function(r) {
//                             for (; ; )
//                                 switch (r.prev = r.next) {
//                                 case 0:
//                                     if (n = t.source,
//                                     u = s.default.replaceImageFormat(n.dataset.lazy),
//                                     o = function() {
//                                         var r = (0,
//                                         e.default)(a.default.mark(function e() {
//                                             var r, t, s;
//                                             return a.default.wrap(function(e) {
//                                                 for (; ; )
//                                                     switch (e.prev = e.next) {
//                                                     case 0:
//                                                         if (!i._assetAlreadyLoaded({
//                                                             url: u
//                                                         })) {
//                                                             e.next = 5;
//                                                             break
//                                                         }
//                                                         r = i._getLoadedAsset({
//                                                             url: u
//                                                         }),
//                                                         n.setAttribute("src", r.blob),
//                                                         e.next = 10;
//                                                         break;
//                                                     case 5:
//                                                         return e.next = 7,
//                                                         i.worker.loadImage(u);
//                                                     case 7:
//                                                         t = e.sent,
//                                                         s = URL.createObjectURL(t),
//                                                         "IMG" === n.nodeName && (n.setAttribute("src", s),
//                                                         n.decode().then(function() {
//                                                             i._addToLoadedAssets({
//                                                                 url: u,
//                                                                 blob: s
//                                                             }),
//                                                             URL.revokeObjectURL(t)
//                                                         }));
//                                                     case 10:
//                                                     case "end":
//                                                         return e.stop()
//                                                     }
//                                             }, e)
//                                         }));
//                                         return function() {
//                                             return r.apply(this, arguments)
//                                         }
//                                     }(),
//                                     this.worker) {
//                                         r.next = 10;
//                                         break
//                                     }
//                                     return r.next = 6,
//                                     this._setupWorker();
//                                 case 6:
//                                     return r.next = 8,
//                                     o();
//                                 case 8:
//                                     r.next = 12;
//                                     break;
//                                 case 10:
//                                     return r.next = 12,
//                                     o();
//                                 case 12:
//                                 case "end":
//                                     return r.stop()
//                                 }
//                         }, r, this)
//                     }));
//                     return function(e) {
//                         return r.apply(this, arguments)
//                     }
//                 }()
//             }, {
//                 key: "_addToLoadedAssets",
//                 value: function(e) {
//                     var r = e.url
//                       , t = e.blob;
//                     if (!r)
//                         throw new Error("Asset URL is not specified");
//                     if (!t)
//                         throw new Error("Asset Blob is not specified");
//                     window.APP.loaded_assets.push({
//                         url: r,
//                         blob: t
//                     })
//                 }
//             }, {
//                 key: "_assetAlreadyLoaded",
//                 value: function(e) {
//                     var r = e.url;
//                     return !!window.APP.loaded_assets.filter(function(e) {
//                         return e.url === r
//                     }).length
//                 }
//             }, {
//                 key: "_getLoadedAsset",
//                 value: function(e) {
//                     var r = e.url;
//                     return window.APP.loaded_assets.filter(function(e) {
//                         return e.url === r
//                     })[0]
//                 }
//             }]),
//             o
//         }();
//         exports.default = c;
//     }
//     , {
//         "@babel/runtime/helpers/asyncToGenerator": "agGE",
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/regenerator": "PMvg",
//         "comlink": "JZPE",
//         "./Utils": "FR9S"
//     }],
//     "ZJ21": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = a(require("@babel/runtime/helpers/classCallCheck"))
//           , t = a(require("@babel/runtime/helpers/createClass"))
//           , r = a(require("@babel/runtime/helpers/inherits"))
//           , u = a(require("@babel/runtime/helpers/possibleConstructorReturn"))
//           , n = a(require("@babel/runtime/helpers/getPrototypeOf"))
//           , l = a(require("@dogstudio/highway"))
//           , o = a(require("../../global/LazyLoad"));
//         function a(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         function i(e) {
//             var t = f();
//             return function() {
//                 var r, l = (0,
//                 n.default)(e);
//                 if (t) {
//                     var o = (0,
//                     n.default)(this).constructor;
//                     r = Reflect.construct(l, arguments, o)
//                 } else
//                     r = l.apply(this, arguments);
//                 return (0,
//                 u.default)(this, r)
//             }
//         }
//         function f() {
//             if ("undefined" == typeof Reflect || !Reflect.construct)
//                 return !1;
//             if (Reflect.construct.sham)
//                 return !1;
//             if ("function" == typeof Proxy)
//                 return !0;
//             try {
//                 return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
//                 !0
//             } catch (e) {
//                 return !1
//             }
//         }
//         var c = function(u) {
//             (0,
//             r.default)(l, u);
//             var n = i(l);
//             function l() {
//                 return (0,
//                 e.default)(this, l),
//                 n.apply(this, arguments)
//             }
//             return (0,
//             t.default)(l, [{
//                 key: "onEnter",
//                 value: function() {}
//             }, {
//                 key: "onLeave",
//                 value: function() {}
//             }, {
//                 key: "onEnterCompleted",
//                 value: function() {
//                     new o.default
//                 }
//             }, {
//                 key: "onLeaveCompleted",
//                 value: function() {}
//             }]),
//             l
//         }(l.default.Renderer)
//           , s = c;
//         exports.default = s;
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/inherits": "d4H2",
//         "@babel/runtime/helpers/possibleConstructorReturn": "pxk2",
//         "@babel/runtime/helpers/getPrototypeOf": "UJE0",
//         "@dogstudio/highway": "CRQX",
//         "../../global/LazyLoad": "X7im"
//     }],
//     "XQmT": [function(require, module, exports) {
//         var define;
//         var global = arguments[3];
//         var t, e = arguments[3];
//         !function(e, o) {
//             "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof t && t.amd ? t(o) : (e = e || self).Preload = o()
//         }(this, function() {
//             "use strict";
//             function t(t, e) {
//                 const o = new XMLHttpRequest;
//                 o.open("GET", t, !0),
//                 o.responseType = "blob";
//                 const s = this.getItemByUrl(t);
//                 s.xhr = o,
//                 o.onprogress = (t=>{
//                     if (!t.lengthComputable)
//                         return !1;
//                     s.completion = parseInt(t.loaded / t.total * 100),
//                     s.downloaded = t.loaded,
//                     s.total = t.total,
//                     this.updateProgressBar(s)
//                 }
//                 ),
//                 o.onload = (t=>{
//                     const n = t.target.response.type
//                       , r = t.target.responseURL;
//                     if (s.fileName = r.substring(r.lastIndexOf("/") + 1),
//                     s.type = n,
//                     s.status = o.status,
//                     404 == o.status)
//                         s.blobUrl = s.size = null,
//                         s.error = !0,
//                         this.onerror(s);
//                     else {
//                         const e = new Blob([t.target.response],{
//                             type: n
//                         });
//                         s.blobUrl = URL.createObjectURL(e),
//                         s.size = e.size,
//                         s.error = !1
//                     }
//                     e(s)
//                 }
//                 ),
//                 o.send()
//             }
//             function e(t) {
//                 let e = 0
//                   , o = this.stepped ? 100 * this.state.length : 0
//                   , s = 0;
//                 for (const r of this.state)
//                     r.completion && s++,
//                     this.stepped ? r.completion && (e += r.completion) : this._readyForComputation ? (e += r.downloaded,
//                     o += r.total) : e = o = 0;
//                 this._readyForComputation = s == this.state.length;
//                 const n = parseInt(e / o * 100);
//                 isNaN(n) || this.onprogress({
//                     progress: n,
//                     item: t
//                 })
//             }
//             function o(t) {
//                 for (var e of this.state)
//                     if (e.url == t)
//                         return e
//             }
//             function s(t) {
//                 return new Promise((e,o)=>{
//                     this.loaded = t.length;
//                     for (let s of t)
//                         this.state.push({
//                             url: s
//                         }),
//                         this.preloadOne(s, t=>{
//                             this.onfetched(t),
//                             this.loaded--,
//                             0 == this.loaded && (this.oncomplete(this.state),
//                             e(this.state))
//                         }
//                         )
//                 }
//                 )
//             }
//             function n() {
//                 for (var t of this.state)
//                     t.completion < 100 && (t.xhr.abort(),
//                     t.status = 0);
//                 return this.oncancel(this.state),
//                 this.state
//             }
//             return function(r) {
//                 return {
//                     state: [],
//                     loaded: !1,
//                     stepped: r && r.stepped || !0,
//                     onprogress: ()=>{}
//                     ,
//                     oncomplete: ()=>{}
//                     ,
//                     onfetched: ()=>{}
//                     ,
//                     onerror: ()=>{}
//                     ,
//                     oncancel: ()=>{}
//                     ,
//                     fetch: s,
//                     updateProgressBar: e,
//                     preloadOne: t,
//                     getItemByUrl: o,
//                     cancel: n
//                 }
//             }
//         });
//     }
//     , {}],
//     "zRAF": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = n(require("@babel/runtime/helpers/classCallCheck"))
//           , t = n(require("@babel/runtime/helpers/createClass"))
//           , r = n(require("preload-it"))
//           , o = n(require("./Utils"));
//         function n(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var s = function() {
//             function n() {
//                 var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
//                   , o = t.onProgress
//                   , s = void 0 === o ? function() {}
//                 : o
//                   , i = t.onComplete
//                   , a = void 0 === i ? function() {}
//                 : i
//                   , d = t.onFetched
//                   , l = void 0 === d ? function() {}
//                 : d
//                   , u = t.onError
//                   , h = void 0 === u ? function() {}
//                 : u;
//                 (0,
//                 e.default)(this, n),
//                 this.preloader = (0,
//                 r.default)(),
//                 this.progress = 0,
//                 this.onProgress = s,
//                 this.onComplete = a,
//                 this.onFetched = l,
//                 this.onError = h,
//                 this.preloader.oncomplete = this._onComplete.bind(this),
//                 this.preloader.onprogress = this._onProgress.bind(this),
//                 this.preloader.onfetched = this._onFetched.bind(this),
//                 this.preloader.onerror = this._onError.bind(this)
//             }
//             return (0,
//             t.default)(n, [{
//                 key: "load",
//                 value: function() {
//                     var e = this
//                       , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
//                     this.assets = t;
//                     var r = this.assets.map(function(e) {
//                         var t = e.dataset.preload || e.dataset.preloadBg;
//                         return o.default.replaceImageFormat(t)
//                     });
//                     return new Promise(function(t) {
//                         r.length > 0 ? e.preloader.fetch(r).then(function() {
//                             t()
//                         }) : (e.onComplete(),
//                         t())
//                     }
//                     )
//                 }
//             }, {
//                 key: "_onProgress",
//                 value: function(e) {
//                     this.progress = e.progress,
//                     this.onProgress(e)
//                 }
//             }, {
//                 key: "_onComplete",
//                 value: function() {
//                     this.onComplete()
//                 }
//             }, {
//                 key: "_onFetched",
//                 value: function(e) {
//                     var t = this
//                       , r = new RegExp(/([\w+-]+)\.(jpg|png|webp|avif)/).exec(e.url)
//                       , o = this.assets.find(function(e) {
//                         return e.dataset.preload ? e.dataset.preload.indexOf(r[1]) > -1 : e.dataset.preloadBg ? e.dataset.preloadBg.indexOf(r[1]) > -1 : void 0
//                     });
//                     o.dataset.preload && (o.setAttribute("src", e.blobUrl),
//                     o.decode().then(function() {
//                         return t.onFetched(e)
//                     }),
//                     o.removeAttribute("data-preload")),
//                     o.dataset.preloadBg && (o.style.backgroundImage = "url(".concat(e.blobUrl, ")"),
//                     this.onFetched(e),
//                     o.removeAttribute("data-preload-bg"))
//                 }
//             }, {
//                 key: "_onError",
//                 value: function(e) {
//                     this.onError(e)
//                 }
//             }]),
//             n
//         }();
//         exports.default = s;
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "preload-it": "XQmT",
//         "./Utils": "FR9S"
//     }],
//     "x4nj": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = i(require("@babel/runtime/helpers/toConsumableArray"))
//           , r = i(require("@babel/runtime/helpers/classCallCheck"))
//           , t = i(require("@babel/runtime/helpers/createClass"))
//           , a = require("gsap")
//           , l = require("gsap/SplitText");
//         function i(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         a.gsap.registerPlugin(l.SplitText);
//         var o = function() {
//             function i() {
//                 (0,
//                 r.default)(this, i)
//             }
//             return (0,
//             t.default)(i, null, [{
//                 key: "runHeroAnimation",
//                 value: function() {
//                     var r = document.querySelector("[data-page-hero-title]")
//                       , t = document.querySelector("[data-page-hero-title-mobile]");
//                     if (r || t) {
//                         var i = (0,
//                         e.default)(r.children);
//                         new l.SplitText(r,{
//                             type: "chars",
//                             charsClass: "char"
//                         });
//                         var o = new a.gsap.timeline;
//                         o.add("start").call(function() {
//                             r.classList.remove("o-0"),
//                             null == t || t.classList.remove("o-0")
//                         });
//                         var u = new a.gsap.timeline;
//                         if (i.forEach(function(e) {
//                             var r = e.querySelectorAll(".char");
//                             u.fromTo(r, {
//                                 opacity: 0
//                             }, {
//                                 opacity: 1,
//                                 duration: 1.4,
//                                 stagger: .1
//                             }, "<0.05")
//                         }),
//                         o.add(u, "start+=0.05"),
//                         t) {
//                             var n = (0,
//                             e.default)(t.children)
//                               , s = new a.gsap.timeline;
//                             new l.SplitText(t,{
//                                 type: "chars",
//                                 charsClass: "char"
//                             }),
//                             n.forEach(function(e) {
//                                 var r = e.querySelectorAll(".char");
//                                 s.fromTo(r, {
//                                     opacity: 0
//                                 }, {
//                                     opacity: 1,
//                                     duration: 1.4,
//                                     stagger: .1
//                                 }, "<0.05")
//                             }),
//                             o.add(s, "start+=0.05")
//                         }
//                         o.fromTo("[data-page-hero-copy]", {
//                             opacity: 0
//                         }, {
//                             opacity: 1,
//                             duration: 1.2
//                         }, "<0.5")
//                     }
//                 }
//             }]),
//             i
//         }();
//         exports.default = o;
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "gsap": "TpQl",
//         "gsap/SplitText": "BtuU"
//     }],
//     "spbt": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = u(require("@babel/runtime/helpers/toConsumableArray"))
//           , t = u(require("@babel/runtime/helpers/classCallCheck"))
//           , i = u(require("@babel/runtime/helpers/createClass"))
//           , n = require("gsap")
//           , s = require("gsap/SplitText")
//           , o = u(require("./SmoothScroll"))
//           , a = u(require("./CurtainsManager"))
//           , r = u(require("./WebGLCarousel"))
//           , l = u(require("./Utils"));
//         function u(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         n.gsap.registerPlugin(s.SplitText);
//         var c = function() {
//             function u() {
//                 var e = this;
//                 (0,
//                 t.default)(this, u),
//                 this.isTransitioning = !1,
//                 this.isOpen = !1,
//                 this._menuBtnClickCb = function() {
//                     return e._onClick()
//                 }
//                 ,
//                 this._linkHoverCb = function(t) {
//                     return e._onHover(t)
//                 }
//                 ,
//                 this._linkLeaveCb = function(t) {
//                     return e._onLeave(t)
//                 }
//             }
//             return (0,
//             i.default)(u, [{
//                 key: "init",
//                 value: function() {
//                     this.container = document.querySelector("[data-primary-nav]"),
//                     this.button = document.querySelector("[data-primary-nav-button]"),
//                     this.logo = document.querySelector(".c-header__logo-wrapper"),
//                     this.secNavButton = document.querySelector("[data-secondary-nav-button]"),
//                     this.hideLinks = document.querySelectorAll(".js-hide-on-nav-open"),
//                     this.nav = document.querySelector("[data-primary-nav]"),
//                     this.links = (0,
//                     e.default)(document.querySelectorAll(".js-main-nav-link")),
//                     this.fadeInOnOpen = document.querySelectorAll("[data-primary-nav-fadein]"),
//                     this.backgrounds = (0,
//                     e.default)(this.container.querySelectorAll("[data-nav-bg]")),
//                     new s.SplitText(this.container.querySelectorAll(".c-navigation__link-title"),{
//                         type: "chars",
//                         charsClass: "char"
//                     }),
//                     this.setupListeners()
//                 }
//             }, {
//                 key: "setupListeners",
//                 value: function() {
//                     var e = this;
//                     this.button.addEventListener("click", this._menuBtnClickCb),
//                     this.links.forEach(function(t) {
//                         t.addEventListener("mouseenter", e._linkHoverCb),
//                         t.addEventListener("mouseleave", e._linkLeaveCb)
//                     })
//                 }
//             }, {
//                 key: "removeListeners",
//                 value: function() {
//                     var e = this;
//                     this.button.removeEventListener("click", this._menuBtnClickCb),
//                     this.links.forEach(function(t) {
//                         t.removeEventListener("mouseenter", e._linkHoverCb),
//                         t.removeEventListener("mouseleave", e._linkLeaveCb)
//                     })
//                 }
//             }, {
//                 key: "hardReset",
//                 value: function() {
//                     this.isOpen = !1,
//                     n.gsap.set([this.button, this.logo, this.nav, this.links, this.fadeInOnOpen], {
//                         clearProps: "all"
//                     }),
//                     n.gsap.to([].concat((0,
//                     e.default)(this.hideLinks), [this.secNavButton]), {
//                         autoAlpha: 1,
//                         duration: .5
//                     }),
//                     this.backgrounds.forEach(function(e) {
//                         return e.classList.remove("is-visible")
//                     }),
//                     this.button.classList.remove("is-active"),
//                     document.documentElement.style.setProperty("--scrollbar-visibility", 1),
//                     document.documentElement.classList.remove("nav-open")
//                 }
//             }, {
//                 key: "_onClick",
//                 value: function() {
//                     this.isTransitioning || (this.isOpen ? this.close() : this.open())
//                 }
//             }, {
//                 key: "_onHover",
//                 value: function(e) {
//                     if (!(window.innerWidth < 1024)) {
//                         var t = this.links.findIndex(function(t) {
//                             return e.currentTarget === t
//                         });
//                         this.backgrounds[t].classList.add("is-visible")
//                     }
//                 }
//             }, {
//                 key: "_onLeave",
//                 value: function() {
//                     window.innerWidth < 1024 || this.backgrounds.forEach(function(e) {
//                         e.classList.remove("is-visible")
//                     })
//                 }
//             }, {
//                 key: "open",
//                 value: function() {
//                     var t = this;
//                     new n.gsap.timeline({
//                         onStart: function() {
//                             t.isOpen = !0,
//                             t.isTransitioning = !0,
//                             t.button.classList.add("is-active"),
//                             t.container.scrollTo(0, 0),
//                             document.documentElement.classList.add("nav-open"),
//                             l.default.isTouch() || o.default.disable()
//                         },
//                         onComplete: function() {
//                             t.isTransitioning = !1,
//                             r.default.pause(),
//                             a.default.pause()
//                         }
//                     }).set([this.button, this.logo], {
//                         color: "#fff"
//                     }).set(this.nav, {
//                         visibility: "visible"
//                     }).to(document.documentElement, {
//                         duration: .5,
//                         "--scrollbar-visibility": 0
//                     }).fromTo(this.nav, {
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
//                     }, {
//                         duration: .6,
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
//                     }, "<").fromTo(this.links, {
//                         opacity: 0,
//                         xPercent: 5
//                     }, {
//                         opacity: 1,
//                         xPercent: 0,
//                         stagger: .15,
//                         duration: .8
//                     }, "<0.2").to([].concat((0,
//                     e.default)(this.hideLinks), [this.secNavButton]), {
//                         autoAlpha: 0,
//                         duration: .45,
//                         stagger: .1
//                     }, "<").fromTo(this.fadeInOnOpen, {
//                         opacity: 0
//                     }, {
//                         opacity: 1
//                     }, "<0.2")
//                 }
//             }, {
//                 key: "close",
//                 value: function() {
//                     var t = this
//                       , i = new n.gsap.timeline({
//                         onStart: function() {
//                             t.isTransitioning = !0,
//                             t.button.classList.remove("is-active"),
//                             window.APP.is_transitioning || r.default.resume(),
//                             document.documentElement.classList.remove("nav-open"),
//                             a.default.resume()
//                         },
//                         onComplete: function() {
//                             t.isOpen = !1,
//                             t.isTransitioning = !1,
//                             n.gsap.set(t.nav, {
//                                 clearProps: "visibility"
//                             }),
//                             window.APP.is_transitioning || l.default.isTouch() || o.default.enable(!0, !1)
//                         }
//                     });
//                     return i.set([this.button, this.logo], {
//                         clearProps: "color"
//                     }),
//                     window.APP.is_transitioning || i.to(document.documentElement, {
//                         duration: .5,
//                         "--scrollbar-visibility": 1
//                     }),
//                     i.fromTo(this.nav, {
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
//                     }, {
//                         clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
//                     }, "<").to([].concat((0,
//                     e.default)(this.hideLinks), [this.secNavButton]), {
//                         autoAlpha: 1,
//                         duration: .5
//                     }, "<0.3"),
//                     i
//                 }
//             }]),
//             u
//         }()
//           , d = new c
//           , h = d;
//         exports.default = h;
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "gsap": "TpQl",
//         "gsap/SplitText": "BtuU",
//         "./SmoothScroll": "QzAk",
//         "./CurtainsManager": "mbMG",
//         "./WebGLCarousel": "fi2O",
//         "./Utils": "FR9S"
//     }],
//     "FC3G": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = y(require("@babel/runtime/helpers/toConsumableArray"))
//           , t = y(require("@babel/runtime/helpers/classCallCheck"))
//           , r = y(require("@babel/runtime/helpers/createClass"))
//           , l = y(require("@babel/runtime/helpers/inherits"))
//           , a = y(require("@babel/runtime/helpers/possibleConstructorReturn"))
//           , u = y(require("@babel/runtime/helpers/getPrototypeOf"))
//           , n = y(require("@dogstudio/highway"))
//           , o = y(require("../../global/AssetLoader"))
//           , i = y(require("../../global/GlobalAnimations"))
//           , s = y(require("../../global/SmoothScroll"))
//           , f = y(require("../../global/WebGLCarousel"))
//           , d = y(require("../../global/WebGLGallery"))
//           , c = y(require("../../global/PrimaryNav"))
//           , p = require("gsap")
//           , b = y(require("../../global/Utils"));
//         function y(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         function h(e) {
//             var t = m();
//             return function() {
//                 var r, l = (0,
//                 u.default)(e);
//                 if (t) {
//                     var n = (0,
//                     u.default)(this).constructor;
//                     r = Reflect.construct(l, arguments, n)
//                 } else
//                     r = l.apply(this, arguments);
//                 return (0,
//                 a.default)(this, r)
//             }
//         }
//         function m() {
//             if ("undefined" == typeof Reflect || !Reflect.construct)
//                 return !1;
//             if (Reflect.construct.sham)
//                 return !1;
//             if ("function" == typeof Proxy)
//                 return !0;
//             try {
//                 return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
//                 !0
//             } catch (e) {
//                 return !1
//             }
//         }
//         var v = document.querySelectorAll("[data-page-transitions-overlay]")
//           , q = function(a) {
//             (0,
//             l.default)(n, a);
//             var u = h(n);
//             function n() {
//                 return (0,
//                 t.default)(this, n),
//                 u.apply(this, arguments)
//             }
//             return (0,
//             r.default)(n, [{
//                 key: "in",
//                 value: function(t) {
//                     var r = t.from
//                       , l = t.to
//                       , a = t.done;
//                     f.default.destroy(),
//                     r.remove(),
//                     (new o.default).load((0,
//                     e.default)(l.querySelectorAll("[data-preload], [data-preload-bg]"))).then(function() {
//                         s.default.updateView(),
//                         s.default.enable(),
//                         f.default.init("[data-webgl-carousel]")
//                     }).then(function() {
//                         var e = new p.gsap.timeline({
//                             delay: .1,
//                             onStart: function() {
//                                 document.documentElement.style.setProperty("--scrollbar-visibility", 1),
//                                 d.default.setGalleryLink(),
//                                 p.gsap.delayedCall(.35, function() {
//                                     i.default.runHeroAnimation(),
//                                     f.default.state.init && f.default.timelines.in[0].restart()
//                                 })
//                             }
//                         });
//                         return e.call(function() {
//                             b.default.isTouch() && (window.dispatchEvent(new Event("resize")),
//                             document.querySelector("[data-router-wrapper]").scrollTo(0, 0))
//                         }).fromTo(v, {
//                             autoAlpha: 1
//                         }, {
//                             autoAlpha: 0,
//                             duration: .5
//                         }, "<0.1"),
//                         e
//                     }).then(function() {
//                         return a()
//                     })
//                 }
//             }, {
//                 key: "out",
//                 value: function(e) {
//                     var t = e.done
//                       , r = new p.gsap.timeline({
//                         onStart: function() {
//                             return f.default.pause()
//                         },
//                         onComplete: function() {
//                             d.default.resetGalleryLink(),
//                             t()
//                         }
//                     });
//                     c.default.isOpen && r.add(function() {
//                         return c.default.close()
//                     }),
//                     r.to(v, {
//                         autoAlpha: 1,
//                         duration: .5
//                     }, "<")
//                 }
//             }]),
//             n
//         }(n.default.Transition)
//           , g = q;
//         exports.default = g;
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/inherits": "d4H2",
//         "@babel/runtime/helpers/possibleConstructorReturn": "pxk2",
//         "@babel/runtime/helpers/getPrototypeOf": "UJE0",
//         "@dogstudio/highway": "CRQX",
//         "../../global/AssetLoader": "zRAF",
//         "../../global/GlobalAnimations": "x4nj",
//         "../../global/SmoothScroll": "QzAk",
//         "../../global/WebGLCarousel": "fi2O",
//         "../../global/WebGLGallery": "sNO3",
//         "../../global/PrimaryNav": "spbt",
//         "gsap": "TpQl",
//         "../../global/Utils": "FR9S"
//     }],
//     "XGZU": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e, t, r, a = g(require("@babel/runtime/helpers/toConsumableArray")), l = g(require("@babel/runtime/helpers/classCallCheck")), n = g(require("@babel/runtime/helpers/createClass")), u = g(require("@babel/runtime/helpers/inherits")), o = g(require("@babel/runtime/helpers/possibleConstructorReturn")), i = g(require("@babel/runtime/helpers/getPrototypeOf")), s = g(require("@dogstudio/highway")), d = g(require("../../global/AssetLoader")), f = g(require("../../global/GlobalAnimations")), c = g(require("../../global/SmoothScroll")), p = g(require("../../global/WebGLCarousel")), b = g(require("../../global/WebGLGallery")), h = g(require("../../global/PrimaryNav")), m = require("gsap"), y = g(require("../../global/Utils"));
//         function g(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         function v(e) {
//             var t = q();
//             return function() {
//                 var r, a = (0,
//                 i.default)(e);
//                 if (t) {
//                     var l = (0,
//                     i.default)(this).constructor;
//                     r = Reflect.construct(a, arguments, l)
//                 } else
//                     r = a.apply(this, arguments);
//                 return (0,
//                 o.default)(this, r)
//             }
//         }
//         function q() {
//             if ("undefined" == typeof Reflect || !Reflect.construct)
//                 return !1;
//             if (Reflect.construct.sham)
//                 return !1;
//             if ("function" == typeof Proxy)
//                 return !0;
//             try {
//                 return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
//                 !0
//             } catch (e) {
//                 return !1
//             }
//         }
//         var w = function(o) {
//             (0,
//             u.default)(s, o);
//             var i = v(s);
//             function s() {
//                 return (0,
//                 l.default)(this, s),
//                 i.apply(this, arguments)
//             }
//             return (0,
//             n.default)(s, [{
//                 key: "in",
//                 value: function(l) {
//                     var n = l.from
//                       , u = l.to
//                       , o = l.done;
//                     n.remove();
//                     var i, s = new m.gsap.timeline({
//                         onStart: function() {
//                             return document.documentElement.classList.remove("nav-open")
//                         },
//                         onComplete: function() {
//                             return b.default.resetGalleryLink()
//                         },
//                         paused: !0
//                     });
//                     switch (t) {
//                     case 0:
//                         i = "end";
//                         break;
//                     case h.default.links.length - 1:
//                         i = "start";
//                         break;
//                     default:
//                         i = t
//                     }
//                     s.to(h.default.links, {
//                         opacity: 0,
//                         duration: .75,
//                         stagger: {
//                             from: i,
//                             each: -.04,
//                             grid: [h.default.links.length, 1],
//                             axis: "y"
//                         }
//                     }, "<").to("[data-primary-nav-fadein]", {
//                         opacity: 0,
//                         duration: .75
//                     }, "<"),
//                     Promise.all([s.play(), (new d.default).load((0,
//                     a.default)(u.querySelectorAll("[data-preload], [data-preload-bg]")))]).then(function() {
//                         c.default.updateView(),
//                         c.default.enable(),
//                         document.documentElement.style.setProperty("--scrollbar-visibility", 1),
//                         p.default.init("[data-webgl-carousel]")
//                     }).then(function() {
//                         var t = new m.gsap.timeline({
//                             onStart: function() {
//                                 b.default.setGalleryLink(),
//                                 m.gsap.delayedCall(.35, function() {
//                                     f.default.runHeroAnimation(),
//                                     p.default.state.init && p.default.timelines.in[0].restart()
//                                 })
//                             },
//                             onComplete: function() {
//                                 h.default.hardReset(),
//                                 h.default.setupListeners(),
//                                 m.gsap.set(r, {
//                                     clearProps: "opacity"
//                                 })
//                             }
//                         });
//                         return t.call(function() {
//                             y.default.isTouch() && (window.dispatchEvent(new Event("resize")),
//                             document.querySelector("[data-router-wrapper]").scrollTo(0, 0))
//                         }),
//                         "/wines" === e.getAttribute("href") ? t.add(h.default.close(), "<0.2") : t.to(h.default.nav, {
//                             autoAlpha: 0,
//                             duration: .75
//                         }, "<0.2"),
//                         t
//                     }).then(function() {
//                         return o()
//                     })
//                 }
//             }, {
//                 key: "out",
//                 value: function(a) {
//                     var l = a.trigger
//                       , n = a.done;
//                     e = l,
//                     t = h.default.links.findIndex(function(t) {
//                         return t.children[0] === e
//                     }),
//                     r = e.querySelectorAll(".char"),
//                     h.default.removeListeners(),
//                     p.default.destroy(),
//                     n()
//                 }
//             }]),
//             s
//         }(s.default.Transition)
//           , k = w;
//         exports.default = k;
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/inherits": "d4H2",
//         "@babel/runtime/helpers/possibleConstructorReturn": "pxk2",
//         "@babel/runtime/helpers/getPrototypeOf": "UJE0",
//         "@dogstudio/highway": "CRQX",
//         "../../global/AssetLoader": "zRAF",
//         "../../global/GlobalAnimations": "x4nj",
//         "../../global/SmoothScroll": "QzAk",
//         "../../global/WebGLCarousel": "fi2O",
//         "../../global/WebGLGallery": "sNO3",
//         "../../global/PrimaryNav": "spbt",
//         "gsap": "TpQl",
//         "../../global/Utils": "FR9S"
//     }],
//     "Vc49": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = s(require("@babel/runtime/helpers/classCallCheck"))
//           , t = s(require("@babel/runtime/helpers/createClass"))
//           , r = s(require("@babel/runtime/helpers/inherits"))
//           , l = s(require("@babel/runtime/helpers/possibleConstructorReturn"))
//           , o = s(require("@babel/runtime/helpers/getPrototypeOf"))
//           , n = s(require("@dogstudio/highway"))
//           , u = s(require("../../global/WebGLGallery"))
//           , a = s(require("../../global/SmoothScroll"))
//           , i = require("gsap")
//           , c = s(require("../../global/Utils"));
//         function s(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         function f(e) {
//             var t = p();
//             return function() {
//                 var r, n = (0,
//                 o.default)(e);
//                 if (t) {
//                     var u = (0,
//                     o.default)(this).constructor;
//                     r = Reflect.construct(n, arguments, u)
//                 } else
//                     r = n.apply(this, arguments);
//                 return (0,
//                 l.default)(this, r)
//             }
//         }
//         function p() {
//             if ("undefined" == typeof Reflect || !Reflect.construct)
//                 return !1;
//             if (Reflect.construct.sham)
//                 return !1;
//             if ("function" == typeof Proxy)
//                 return !0;
//             try {
//                 return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
//                 !0
//             } catch (e) {
//                 return !1
//             }
//         }
//         var d = document.querySelectorAll("[data-page-transitions-overlay]")
//           , h = function(l) {
//             (0,
//             r.default)(n, l);
//             var o = f(n);
//             function n() {
//                 return (0,
//                 e.default)(this, n),
//                 o.apply(this, arguments)
//             }
//             return (0,
//             t.default)(n, [{
//                 key: "in",
//                 value: function(e) {
//                     var t = e.from
//                       , r = e.done;
//                     t.remove(),
//                     new i.gsap.timeline({
//                         onStart: function() {
//                             c.default.isTouch() && (window.dispatchEvent(new Event("resize")),
//                             document.querySelector("[data-router-wrapper]").scrollTo(0, 0)),
//                             u.default.setGalleryLink(),
//                             a.default.enable()
//                         },
//                         onComplete: function() {
//                             return r()
//                         },
//                         delay: .2
//                     }).fromTo(d, {
//                         autoAlpha: 1
//                     }, {
//                         autoAlpha: 0,
//                         duration: .5
//                     })
//                 }
//             }, {
//                 key: "out",
//                 value: function(e) {
//                     var t = e.done;
//                     new i.gsap.timeline({
//                         onComplete: function() {
//                             u.default.resetGalleryLink(),
//                             t()
//                         }
//                     }).fromTo(d, {
//                         autoAlpha: 1,
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
//                     }, {
//                         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
//                     })
//                 }
//             }]),
//             n
//         }(n.default.Transition)
//           , y = h;
//         exports.default = y;
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/inherits": "d4H2",
//         "@babel/runtime/helpers/possibleConstructorReturn": "pxk2",
//         "@babel/runtime/helpers/getPrototypeOf": "UJE0",
//         "@dogstudio/highway": "CRQX",
//         "../../global/WebGLGallery": "sNO3",
//         "../../global/SmoothScroll": "QzAk",
//         "gsap": "TpQl",
//         "../../global/Utils": "FR9S"
//     }],
//     "PkYH": [function(require, module, exports) {
//         "use strict";
//         var e = g(require("@dogstudio/highway"))
//           , t = require("gsap")
//           , a = g(require("quicklink/dist/quicklink.js"))
//           , o = g(require("../global/Cursor"))
//           , l = g(require("../global/SmoothScroll"))
//           , i = g(require("../global/WebGLGallery"))
//           , r = g(require("../global/ScrollAnimations"))
//           , n = g(require("../global/HoverManager"))
//           , u = g(require("../global/Utils"))
//           , s = g(require("./renderers/pages"))
//           , d = g(require("./transitions/default"))
//           , c = g(require("./transitions/menuToPage"))
//           , f = g(require("./transitions/gallery"));
//         function g(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var h = document.querySelectorAll("\n  [data-bottom-right-switch-color],\n  [data-bottom-left-switch-color],\n  [data-top-center-switch-color],\n  [data-top-right-switch-color],\n  [data-top-right-2-switch-color],\n  [data-top-left-switch-color]")
//           , p = function() {
//             h.forEach(function(e) {
//                 return e.classList.replace("color-blue-light", "color-white")
//             })
//         }
//           , w = new e.default.Core({
//             renderers: {
//                 page: s.default
//             },
//             transitions: {
//                 default: d.default,
//                 contextual: {
//                     menuToPage: c.default,
//                     gallery: f.default
//                 }
//             }
//         });
//         w.on("NAVIGATE_OUT", function() {
//             window.APP.is_transitioning = !0,
//             p(),
//             o.default.destroy(),
//             o.default.onMouseleave(),
//             u.default.isTouch() || l.default.disable(),
//             n.default.destroy(),
//             i.default.showPageLinks(),
//             document.documentElement.style.setProperty("--scrollbar-visibility", 0)
//         }),
//         w.on("NAVIGATE_IN", function(e) {
//             var t = e.to;
//             document.body.setAttribute("class", t.page.body.className),
//             r.default.destroy(),
//             i.default.hidePageLinks(),
//             i.default.destroy()
//         }),
//         w.on("NAVIGATE_END", function(e) {
//             var u = e.to
//               , s = e.location;
//             a.default.listen({
//                 el: u.view
//             }),
//             window.APP.is_transitioning = !1,
//             o.default.update(),
//             i.default.init(),
//             r.default.init(),
//             n.default.update(),
//             t.gsap.delayedCall(.1, function() {
//                 l.default.onResize(),
//                 r.default.refresh()
//             }),
//             window.gtag && window.gtag("config", "UA-199974766-1", {
//                 page_path: s.pathname,
//                 page_title: u.page.title,
//                 page_location: s.href
//             })
//         });
//     }
//     , {
//         "@dogstudio/highway": "CRQX",
//         "gsap": "TpQl",
//         "quicklink/dist/quicklink.js": "Vn4J",
//         "../global/Cursor": "nId4",
//         "../global/SmoothScroll": "QzAk",
//         "../global/WebGLGallery": "sNO3",
//         "../global/ScrollAnimations": "wAOS",
//         "../global/HoverManager": "VNxj",
//         "../global/Utils": "FR9S",
//         "./renderers/pages": "ZJ21",
//         "./transitions/default": "FC3G",
//         "./transitions/menuToPage": "XGZU",
//         "./transitions/gallery": "Vc49"
//     }],
//     "DrEm": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = o(require("@babel/runtime/helpers/classCallCheck"))
//           , t = o(require("@babel/runtime/helpers/createClass"))
//           , i = require("gsap")
//           , n = o(require("./SmoothScroll"))
//           , s = o(require("./Utils"));
//         function o(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         var a = function() {
//             function o() {
//                 (0,
//                 e.default)(this, o),
//                 this.isTransitioning = !1,
//                 this.isOpen = !1
//             }
//             return (0,
//             t.default)(o, [{
//                 key: "init",
//                 value: function() {
//                     this.button = document.querySelector("[data-secondary-nav-button]"),
//                     this.icon = this.button.querySelector(".js-sec-nav-icon"),
//                     this.nav = document.querySelector("[data-secondary-nav]"),
//                     this.links = this.nav.querySelectorAll(".js-sec-nav-link"),
//                     this.bg = document.querySelector(".js-sec-nav-bg"),
//                     this._setupListeners()
//                 }
//             }, {
//                 key: "_setupMatchMedia",
//                 value: function() {
//                     var e = this;
//                     this.mq = window.matchMedia("(min-width: 1024px)");
//                     this.mq.addEventListener("change", function(t) {
//                         t.matches && e.isOpen && e._close()
//                     })
//                 }
//             }, {
//                 key: "_setupListeners",
//                 value: function() {
//                     var e = this;
//                     this.button.addEventListener("pointerdown", function() {
//                         return e._onClick()
//                     })
//                 }
//             }, {
//                 key: "_onClick",
//                 value: function() {
//                     this.isTransitioning || (this.isOpen ? this._close() : this._open())
//                 }
//             }, {
//                 key: "_open",
//                 value: function() {
//                     var e = this;
//                     new i.gsap.timeline({
//                         onStart: function() {
//                             s.default.isTouch() || n.default.disable(),
//                             e.isOpen = !0,
//                             e.isTransitioning = !0,
//                             e.button.classList.add("is-active"),
//                             e.bg.classList.add("is-visible"),
//                             document.documentElement.classList.add("nav-open")
//                         },
//                         onComplete: function() {
//                             e.isTransitioning = !1
//                         }
//                     }).set(this.icon, {
//                         transformOrigin: "center center"
//                     }).set(this.links, {
//                         display: "block"
//                     }).to(this.icon, {
//                         rotation: "+=135"
//                     }).fromTo(this.links, {
//                         autoAlpha: 0,
//                         yPercent: -15
//                     }, {
//                         autoAlpha: 1,
//                         yPercent: 0,
//                         stagger: .1
//                     }, "<")
//                 }
//             }, {
//                 key: "_close",
//                 value: function() {
//                     var e = this;
//                     new i.gsap.timeline({
//                         onStart: function() {
//                             s.default.isTouch() || n.default.enable(!0, !1),
//                             e.isOpen = !1,
//                             e.isTransitioning = !0,
//                             e.button.classList.remove("is-active"),
//                             e.bg.classList.remove("is-visible"),
//                             document.documentElement.classList.remove("nav-open")
//                         },
//                         onComplete: function() {
//                             e.isTransitioning = !1
//                         }
//                     }).to(this.icon, {
//                         rotation: "+=135"
//                     }).to(this.links, {
//                         yPercent: -15,
//                         autoAlpha: 0,
//                         stagger: .1
//                     }, "<")
//                 }
//             }]),
//             o
//         }()
//           , r = new a
//           , u = r;
//         exports.default = u;
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "gsap": "TpQl",
//         "./SmoothScroll": "QzAk",
//         "./Utils": "FR9S"
//     }],
//     "lyKV": [function(require, module, exports) {
//         var define;
//         var global = arguments[3];
//         var e, t = arguments[3];
//         !function() {
//             "use strict";
//             var n = function() {
//                 this.init()
//             };
//             n.prototype = {
//                 init: function() {
//                     var e = this || o;
//                     return e._counter = 1e3,
//                     e._html5AudioPool = [],
//                     e.html5PoolSize = 10,
//                     e._codecs = {},
//                     e._howls = [],
//                     e._muted = !1,
//                     e._volume = 1,
//                     e._canPlayEvent = "canplaythrough",
//                     e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null,
//                     e.masterGain = null,
//                     e.noAudio = !1,
//                     e.usingWebAudio = !0,
//                     e.autoSuspend = !0,
//                     e.ctx = null,
//                     e.autoUnlock = !0,
//                     e._setup(),
//                     e
//                 },
//                 volume: function(e) {
//                     var t = this || o;
//                     if (e = parseFloat(e),
//                     t.ctx || l(),
//                     void 0 !== e && e >= 0 && e <= 1) {
//                         if (t._volume = e,
//                         t._muted)
//                             return t;
//                         t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, o.ctx.currentTime);
//                         for (var n = 0; n < t._howls.length; n++)
//                             if (!t._howls[n]._webAudio)
//                                 for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
//                                     var a = t._howls[n]._soundById(r[i]);
//                                     a && a._node && (a._node.volume = a._volume * e)
//                                 }
//                         return t
//                     }
//                     return t._volume
//                 },
//                 mute: function(e) {
//                     var t = this || o;
//                     t.ctx || l(),
//                     t._muted = e,
//                     t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, o.ctx.currentTime);
//                     for (var n = 0; n < t._howls.length; n++)
//                         if (!t._howls[n]._webAudio)
//                             for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
//                                 var a = t._howls[n]._soundById(r[i]);
//                                 a && a._node && (a._node.muted = !!e || a._muted)
//                             }
//                     return t
//                 },
//                 stop: function() {
//                     for (var e = this || o, t = 0; t < e._howls.length; t++)
//                         e._howls[t].stop();
//                     return e
//                 },
//                 unload: function() {
//                     for (var e = this || o, t = e._howls.length - 1; t >= 0; t--)
//                         e._howls[t].unload();
//                     return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(),
//                     e.ctx = null,
//                     l()),
//                     e
//                 },
//                 codecs: function(e) {
//                     return (this || o)._codecs[e.replace(/^x-/, "")]
//                 },
//                 _setup: function() {
//                     var e = this || o;
//                     if (e.state = e.ctx && e.ctx.state || "suspended",
//                     e._autoSuspend(),
//                     !e.usingWebAudio)
//                         if ("undefined" != typeof Audio)
//                             try {
//                                 void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
//                             } catch (t) {
//                                 e.noAudio = !0
//                             }
//                         else
//                             e.noAudio = !0;
//                     try {
//                         (new Audio).muted && (e.noAudio = !0)
//                     } catch (t) {}
//                     return e.noAudio || e._setupCodecs(),
//                     e
//                 },
//                 _setupCodecs: function() {
//                     var e = this || o
//                       , t = null;
//                     try {
//                         t = "undefined" != typeof Audio ? new Audio : null
//                     } catch (a) {
//                         return e
//                     }
//                     if (!t || "function" != typeof t.canPlayType)
//                         return e;
//                     var n = t.canPlayType("audio/mpeg;").replace(/^no$/, "")
//                       , r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g)
//                       , i = r && parseInt(r[0].split("/")[1], 10) < 33;
//                     return e._codecs = {
//                         mp3: !(i || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
//                         mpeg: !!n,
//                         opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
//                         ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
//                         oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
//                         wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
//                         aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
//                         caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
//                         m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
//                         m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
//                         mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
//                         weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
//                         webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
//                         dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
//                         flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
//                     },
//                     e
//                 },
//                 _unlockAudio: function() {
//                     var e = this || o;
//                     if (!e._audioUnlocked && e.ctx) {
//                         e._audioUnlocked = !1,
//                         e.autoUnlock = !1,
//                         e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0,
//                         e.unload()),
//                         e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
//                         var t = function(n) {
//                             for (; e._html5AudioPool.length < e.html5PoolSize; )
//                                 try {
//                                     var o = new Audio;
//                                     o._unlocked = !0,
//                                     e._releaseHtml5Audio(o)
//                                 } catch (n) {
//                                     e.noAudio = !0;
//                                     break
//                                 }
//                             for (var r = 0; r < e._howls.length; r++)
//                                 if (!e._howls[r]._webAudio)
//                                     for (var i = e._howls[r]._getSoundIds(), a = 0; a < i.length; a++) {
//                                         var s = e._howls[r]._soundById(i[a]);
//                                         s && s._node && !s._node._unlocked && (s._node._unlocked = !0,
//                                         s._node.load())
//                                     }
//                             e._autoResume();
//                             var u = e.ctx.createBufferSource();
//                             u.buffer = e._scratchBuffer,
//                             u.connect(e.ctx.destination),
//                             void 0 === u.start ? u.noteOn(0) : u.start(0),
//                             "function" == typeof e.ctx.resume && e.ctx.resume(),
//                             u.onended = function() {
//                                 u.disconnect(0),
//                                 e._audioUnlocked = !0,
//                                 document.removeEventListener("touchstart", t, !0),
//                                 document.removeEventListener("touchend", t, !0),
//                                 document.removeEventListener("click", t, !0);
//                                 for (var n = 0; n < e._howls.length; n++)
//                                     e._howls[n]._emit("unlock")
//                             }
//                         };
//                         return document.addEventListener("touchstart", t, !0),
//                         document.addEventListener("touchend", t, !0),
//                         document.addEventListener("click", t, !0),
//                         e
//                     }
//                 },
//                 _obtainHtml5Audio: function() {
//                     var e = this || o;
//                     if (e._html5AudioPool.length)
//                         return e._html5AudioPool.pop();
//                     var t = (new Audio).play();
//                     return t && "undefined" != typeof Promise && (t instanceof Promise || "function" == typeof t.then) && t.catch(function() {
//                         console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
//                     }),
//                     new Audio
//                 },
//                 _releaseHtml5Audio: function(e) {
//                     var t = this || o;
//                     return e._unlocked && t._html5AudioPool.push(e),
//                     t
//                 },
//                 _autoSuspend: function() {
//                     var e = this;
//                     if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && o.usingWebAudio) {
//                         for (var t = 0; t < e._howls.length; t++)
//                             if (e._howls[t]._webAudio)
//                                 for (var n = 0; n < e._howls[t]._sounds.length; n++)
//                                     if (!e._howls[t]._sounds[n]._paused)
//                                         return e;
//                         return e._suspendTimer && clearTimeout(e._suspendTimer),
//                         e._suspendTimer = setTimeout(function() {
//                             if (e.autoSuspend) {
//                                 e._suspendTimer = null,
//                                 e.state = "suspending";
//                                 var t = function() {
//                                     e.state = "suspended",
//                                     e._resumeAfterSuspend && (delete e._resumeAfterSuspend,
//                                     e._autoResume())
//                                 };
//                                 e.ctx.suspend().then(t, t)
//                             }
//                         }, 3e4),
//                         e
//                     }
//                 },
//                 _autoResume: function() {
//                     var e = this;
//                     if (e.ctx && void 0 !== e.ctx.resume && o.usingWebAudio)
//                         return "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer),
//                         e._suspendTimer = null) : "suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state ? (e.ctx.resume().then(function() {
//                             e.state = "running";
//                             for (var t = 0; t < e._howls.length; t++)
//                                 e._howls[t]._emit("resume")
//                         }),
//                         e._suspendTimer && (clearTimeout(e._suspendTimer),
//                         e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0),
//                         e
//                 }
//             };
//             var o = new n
//               , r = function(e) {
//                 e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
//             };
//             r.prototype = {
//                 init: function(e) {
//                     var t = this;
//                     return o.ctx || l(),
//                     t._autoplay = e.autoplay || !1,
//                     t._format = "string" != typeof e.format ? e.format : [e.format],
//                     t._html5 = e.html5 || !1,
//                     t._muted = e.mute || !1,
//                     t._loop = e.loop || !1,
//                     t._pool = e.pool || 5,
//                     t._preload = "boolean" != typeof e.preload && "metadata" !== e.preload || e.preload,
//                     t._rate = e.rate || 1,
//                     t._sprite = e.sprite || {},
//                     t._src = "string" != typeof e.src ? e.src : [e.src],
//                     t._volume = void 0 !== e.volume ? e.volume : 1,
//                     t._xhr = {
//                         method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
//                         headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
//                         withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials
//                     },
//                     t._duration = 0,
//                     t._state = "unloaded",
//                     t._sounds = [],
//                     t._endTimers = {},
//                     t._queue = [],
//                     t._playLock = !1,
//                     t._onend = e.onend ? [{
//                         fn: e.onend
//                     }] : [],
//                     t._onfade = e.onfade ? [{
//                         fn: e.onfade
//                     }] : [],
//                     t._onload = e.onload ? [{
//                         fn: e.onload
//                     }] : [],
//                     t._onloaderror = e.onloaderror ? [{
//                         fn: e.onloaderror
//                     }] : [],
//                     t._onplayerror = e.onplayerror ? [{
//                         fn: e.onplayerror
//                     }] : [],
//                     t._onpause = e.onpause ? [{
//                         fn: e.onpause
//                     }] : [],
//                     t._onplay = e.onplay ? [{
//                         fn: e.onplay
//                     }] : [],
//                     t._onstop = e.onstop ? [{
//                         fn: e.onstop
//                     }] : [],
//                     t._onmute = e.onmute ? [{
//                         fn: e.onmute
//                     }] : [],
//                     t._onvolume = e.onvolume ? [{
//                         fn: e.onvolume
//                     }] : [],
//                     t._onrate = e.onrate ? [{
//                         fn: e.onrate
//                     }] : [],
//                     t._onseek = e.onseek ? [{
//                         fn: e.onseek
//                     }] : [],
//                     t._onunlock = e.onunlock ? [{
//                         fn: e.onunlock
//                     }] : [],
//                     t._onresume = [],
//                     t._webAudio = o.usingWebAudio && !t._html5,
//                     void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(),
//                     o._howls.push(t),
//                     t._autoplay && t._queue.push({
//                         event: "play",
//                         action: function() {
//                             t.play()
//                         }
//                     }),
//                     t._preload && "none" !== t._preload && t.load(),
//                     t
//                 },
//                 load: function() {
//                     var e = null;
//                     if (o.noAudio)
//                         this._emit("loaderror", null, "No audio support.");
//                     else {
//                         "string" == typeof this._src && (this._src = [this._src]);
//                         for (var t = 0; t < this._src.length; t++) {
//                             var n, r;
//                             if (this._format && this._format[t])
//                                 n = this._format[t];
//                             else {
//                                 if ("string" != typeof (r = this._src[t])) {
//                                     this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
//                                     continue
//                                 }
//                                 (n = /^data:audio\/([^;,]+);/i.exec(r)) || (n = /\.([^.]+)$/.exec(r.split("?", 1)[0])),
//                                 n && (n = n[1].toLowerCase())
//                             }
//                             if (n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),
//                             n && o.codecs(n)) {
//                                 e = this._src[t];
//                                 break
//                             }
//                         }
//                         if (e)
//                             return this._src = e,
//                             this._state = "loading",
//                             "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (this._html5 = !0,
//                             this._webAudio = !1),
//                             new i(this),
//                             this._webAudio && s(this),
//                             this;
//                         this._emit("loaderror", null, "No codec support for selected audio sources.")
//                     }
//                 },
//                 play: function(e, t) {
//                     var n = this
//                       , r = null;
//                     if ("number" == typeof e)
//                         r = e,
//                         e = null;
//                     else {
//                         if ("string" == typeof e && "loaded" === n._state && !n._sprite[e])
//                             return null;
//                         if (void 0 === e && (e = "__default",
//                         !n._playLock)) {
//                             for (var i = 0, a = 0; a < n._sounds.length; a++)
//                                 n._sounds[a]._paused && !n._sounds[a]._ended && (i++,
//                                 r = n._sounds[a]._id);
//                             1 === i ? e = null : r = null
//                         }
//                     }
//                     var s = r ? n._soundById(r) : n._inactiveSound();
//                     if (!s)
//                         return null;
//                     if (r && !e && (e = s._sprite || "__default"),
//                     "loaded" !== n._state) {
//                         s._sprite = e,
//                         s._ended = !1;
//                         var u = s._id;
//                         return n._queue.push({
//                             event: "play",
//                             action: function() {
//                                 n.play(u)
//                             }
//                         }),
//                         u
//                     }
//                     if (r && !s._paused)
//                         return t || n._loadQueue("play"),
//                         s._id;
//                     n._webAudio && o._autoResume();
//                     var d = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3)
//                       , _ = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - d)
//                       , l = 1e3 * _ / Math.abs(s._rate)
//                       , c = n._sprite[e][0] / 1e3
//                       , p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
//                     s._sprite = e,
//                     s._ended = !1;
//                     var f = function() {
//                         s._paused = !1,
//                         s._seek = d,
//                         s._start = c,
//                         s._stop = p,
//                         s._loop = !(!s._loop && !n._sprite[e][2])
//                     };
//                     if (!(d >= p)) {
//                         var h = s._node;
//                         if (n._webAudio) {
//                             var m = function() {
//                                 n._playLock = !1,
//                                 f(),
//                                 n._refreshBuffer(s);
//                                 var e = s._muted || n._muted ? 0 : s._volume;
//                                 h.gain.setValueAtTime(e, o.ctx.currentTime),
//                                 s._playStart = o.ctx.currentTime,
//                                 void 0 === h.bufferSource.start ? s._loop ? h.bufferSource.noteGrainOn(0, d, 86400) : h.bufferSource.noteGrainOn(0, d, _) : s._loop ? h.bufferSource.start(0, d, 86400) : h.bufferSource.start(0, d, _),
//                                 l !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l)),
//                                 t || setTimeout(function() {
//                                     n._emit("play", s._id),
//                                     n._loadQueue()
//                                 }, 0)
//                             };
//                             "running" === o.state && "interrupted" !== o.ctx.state ? m() : (n._playLock = !0,
//                             n.once("resume", m),
//                             n._clearTimer(s._id))
//                         } else {
//                             var v = function() {
//                                 h.currentTime = d,
//                                 h.muted = s._muted || n._muted || o._muted || h.muted,
//                                 h.volume = s._volume * o.volume(),
//                                 h.playbackRate = s._rate;
//                                 try {
//                                     var r = h.play();
//                                     if (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (n._playLock = !0,
//                                     f(),
//                                     r.then(function() {
//                                         n._playLock = !1,
//                                         h._unlocked = !0,
//                                         t || (n._emit("play", s._id),
//                                         n._loadQueue())
//                                     }).catch(function() {
//                                         n._playLock = !1,
//                                         n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
//                                         s._ended = !0,
//                                         s._paused = !0
//                                     })) : t || (n._playLock = !1,
//                                     f(),
//                                     n._emit("play", s._id),
//                                     n._loadQueue()),
//                                     h.playbackRate = s._rate,
//                                     h.paused)
//                                         return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
//                                     "__default" !== e || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l) : (n._endTimers[s._id] = function() {
//                                         n._ended(s),
//                                         h.removeEventListener("ended", n._endTimers[s._id], !1)
//                                     }
//                                     ,
//                                     h.addEventListener("ended", n._endTimers[s._id], !1))
//                                 } catch (i) {
//                                     n._emit("playerror", s._id, i)
//                                 }
//                             };
//                             "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === h.src && (h.src = n._src,
//                             h.load());
//                             var A = window && window.ejecta || !h.readyState && o._navigator.isCocoonJS;
//                             if (h.readyState >= 3 || A)
//                                 v();
//                             else {
//                                 n._playLock = !0;
//                                 var y = function() {
//                                     v(),
//                                     h.removeEventListener(o._canPlayEvent, y, !1)
//                                 };
//                                 h.addEventListener(o._canPlayEvent, y, !1),
//                                 n._clearTimer(s._id)
//                             }
//                         }
//                         return s._id
//                     }
//                     n._ended(s)
//                 },
//                 pause: function(e) {
//                     var t = this;
//                     if ("loaded" !== t._state || t._playLock)
//                         return t._queue.push({
//                             event: "pause",
//                             action: function() {
//                                 t.pause(e)
//                             }
//                         }),
//                         t;
//                     for (var n = t._getSoundIds(e), o = 0; o < n.length; o++) {
//                         t._clearTimer(n[o]);
//                         var r = t._soundById(n[o]);
//                         if (r && !r._paused && (r._seek = t.seek(n[o]),
//                         r._rateSeek = 0,
//                         r._paused = !0,
//                         t._stopFade(n[o]),
//                         r._node))
//                             if (t._webAudio) {
//                                 if (!r._node.bufferSource)
//                                     continue;
//                                 void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
//                                 t._cleanBuffer(r._node)
//                             } else
//                                 isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
//                         arguments[1] || t._emit("pause", r ? r._id : null)
//                     }
//                     return t
//                 },
//                 stop: function(e, t) {
//                     var n = this;
//                     if ("loaded" !== n._state || n._playLock)
//                         return n._queue.push({
//                             event: "stop",
//                             action: function() {
//                                 n.stop(e)
//                             }
//                         }),
//                         n;
//                     for (var o = n._getSoundIds(e), r = 0; r < o.length; r++) {
//                         n._clearTimer(o[r]);
//                         var i = n._soundById(o[r]);
//                         i && (i._seek = i._start || 0,
//                         i._rateSeek = 0,
//                         i._paused = !0,
//                         i._ended = !0,
//                         n._stopFade(o[r]),
//                         i._node && (n._webAudio ? i._node.bufferSource && (void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0),
//                         n._cleanBuffer(i._node)) : isNaN(i._node.duration) && i._node.duration !== 1 / 0 || (i._node.currentTime = i._start || 0,
//                         i._node.pause(),
//                         i._node.duration === 1 / 0 && n._clearSound(i._node))),
//                         t || n._emit("stop", i._id))
//                     }
//                     return n
//                 },
//                 mute: function(e, t) {
//                     var n = this;
//                     if ("loaded" !== n._state || n._playLock)
//                         return n._queue.push({
//                             event: "mute",
//                             action: function() {
//                                 n.mute(e, t)
//                             }
//                         }),
//                         n;
//                     if (void 0 === t) {
//                         if ("boolean" != typeof e)
//                             return n._muted;
//                         n._muted = e
//                     }
//                     for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
//                         var a = n._soundById(r[i]);
//                         a && (a._muted = e,
//                         a._interval && n._stopFade(a._id),
//                         n._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, o.ctx.currentTime) : a._node && (a._node.muted = !!o._muted || e),
//                         n._emit("mute", a._id))
//                     }
//                     return n
//                 },
//                 volume: function() {
//                     var e, t, n, r = this, i = arguments;
//                     if (0 === i.length)
//                         return r._volume;
//                     if (1 === i.length || 2 === i.length && void 0 === i[1] ? r._getSoundIds().indexOf(i[0]) >= 0 ? t = parseInt(i[0], 10) : e = parseFloat(i[0]) : i.length >= 2 && (e = parseFloat(i[0]),
//                     t = parseInt(i[1], 10)),
//                     !(void 0 !== e && e >= 0 && e <= 1))
//                         return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
//                     if ("loaded" !== r._state || r._playLock)
//                         return r._queue.push({
//                             event: "volume",
//                             action: function() {
//                                 r.volume.apply(r, i)
//                             }
//                         }),
//                         r;
//                     void 0 === t && (r._volume = e),
//                     t = r._getSoundIds(t);
//                     for (var a = 0; a < t.length; a++)
//                         (n = r._soundById(t[a])) && (n._volume = e,
//                         i[2] || r._stopFade(t[a]),
//                         r._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, o.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * o.volume()),
//                         r._emit("volume", n._id));
//                     return r
//                 },
//                 fade: function(e, t, n, r) {
//                     var i = this;
//                     if ("loaded" !== i._state || i._playLock)
//                         return i._queue.push({
//                             event: "fade",
//                             action: function() {
//                                 i.fade(e, t, n, r)
//                             }
//                         }),
//                         i;
//                     e = Math.min(Math.max(0, parseFloat(e)), 1),
//                     t = Math.min(Math.max(0, parseFloat(t)), 1),
//                     n = parseFloat(n),
//                     i.volume(e, r);
//                     for (var a = i._getSoundIds(r), s = 0; s < a.length; s++) {
//                         var u = i._soundById(a[s]);
//                         if (u) {
//                             if (r || i._stopFade(a[s]),
//                             i._webAudio && !u._muted) {
//                                 var d = o.ctx.currentTime
//                                   , _ = d + n / 1e3;
//                                 u._volume = e,
//                                 u._node.gain.setValueAtTime(e, d),
//                                 u._node.gain.linearRampToValueAtTime(t, _)
//                             }
//                             i._startFadeInterval(u, e, t, n, a[s], void 0 === r)
//                         }
//                     }
//                     return i
//                 },
//                 _startFadeInterval: function(e, t, n, o, r, i) {
//                     var a = this
//                       , s = t
//                       , u = n - t
//                       , d = Math.abs(u / .01)
//                       , _ = Math.max(4, d > 0 ? o / d : o)
//                       , l = Date.now();
//                     e._fadeTo = n,
//                     e._interval = setInterval(function() {
//                         var r = (Date.now() - l) / o;
//                         l = Date.now(),
//                         s += u * r,
//                         s = Math.round(100 * s) / 100,
//                         s = u < 0 ? Math.max(n, s) : Math.min(n, s),
//                         a._webAudio ? e._volume = s : a.volume(s, e._id, !0),
//                         i && (a._volume = s),
//                         (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval),
//                         e._interval = null,
//                         e._fadeTo = null,
//                         a.volume(n, e._id),
//                         a._emit("fade", e._id))
//                     }, _)
//                 },
//                 _stopFade: function(e) {
//                     var t = this._soundById(e);
//                     return t && t._interval && (this._webAudio && t._node.gain.cancelScheduledValues(o.ctx.currentTime),
//                     clearInterval(t._interval),
//                     t._interval = null,
//                     this.volume(t._fadeTo, e),
//                     t._fadeTo = null,
//                     this._emit("fade", e)),
//                     this
//                 },
//                 loop: function() {
//                     var e, t, n, o = arguments;
//                     if (0 === o.length)
//                         return this._loop;
//                     if (1 === o.length) {
//                         if ("boolean" != typeof o[0])
//                             return !!(n = this._soundById(parseInt(o[0], 10))) && n._loop;
//                         e = o[0],
//                         this._loop = e
//                     } else
//                         2 === o.length && (e = o[0],
//                         t = parseInt(o[1], 10));
//                     for (var r = this._getSoundIds(t), i = 0; i < r.length; i++)
//                         (n = this._soundById(r[i])) && (n._loop = e,
//                         this._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e,
//                         e && (n._node.bufferSource.loopStart = n._start || 0,
//                         n._node.bufferSource.loopEnd = n._stop)));
//                     return this
//                 },
//                 rate: function() {
//                     var e, t, n, r = this, i = arguments;
//                     if (0 === i.length)
//                         t = r._sounds[0]._id;
//                     else if (1 === i.length) {
//                         r._getSoundIds().indexOf(i[0]) >= 0 ? t = parseInt(i[0], 10) : e = parseFloat(i[0])
//                     } else
//                         2 === i.length && (e = parseFloat(i[0]),
//                         t = parseInt(i[1], 10));
//                     if ("number" != typeof e)
//                         return (n = r._soundById(t)) ? n._rate : r._rate;
//                     if ("loaded" !== r._state || r._playLock)
//                         return r._queue.push({
//                             event: "rate",
//                             action: function() {
//                                 r.rate.apply(r, i)
//                             }
//                         }),
//                         r;
//                     void 0 === t && (r._rate = e),
//                     t = r._getSoundIds(t);
//                     for (var a = 0; a < t.length; a++)
//                         if (n = r._soundById(t[a])) {
//                             r.playing(t[a]) && (n._rateSeek = r.seek(t[a]),
//                             n._playStart = r._webAudio ? o.ctx.currentTime : n._playStart),
//                             n._rate = e,
//                             r._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, o.ctx.currentTime) : n._node && (n._node.playbackRate = e);
//                             var s = r.seek(t[a])
//                               , u = 1e3 * ((r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1e3 - s) / Math.abs(n._rate);
//                             !r._endTimers[t[a]] && n._paused || (r._clearTimer(t[a]),
//                             r._endTimers[t[a]] = setTimeout(r._ended.bind(r, n), u)),
//                             r._emit("rate", n._id)
//                         }
//                     return r
//                 },
//                 seek: function() {
//                     var e, t, n = this, r = arguments;
//                     if (0 === r.length)
//                         t = n._sounds[0]._id;
//                     else if (1 === r.length) {
//                         n._getSoundIds().indexOf(r[0]) >= 0 ? t = parseInt(r[0], 10) : n._sounds.length && (t = n._sounds[0]._id,
//                         e = parseFloat(r[0]))
//                     } else
//                         2 === r.length && (e = parseFloat(r[0]),
//                         t = parseInt(r[1], 10));
//                     if (void 0 === t)
//                         return n;
//                     if ("number" == typeof e && ("loaded" !== n._state || n._playLock))
//                         return n._queue.push({
//                             event: "seek",
//                             action: function() {
//                                 n.seek.apply(n, r)
//                             }
//                         }),
//                         n;
//                     var i = n._soundById(t);
//                     if (i) {
//                         if (!("number" == typeof e && e >= 0)) {
//                             if (n._webAudio) {
//                                 var a = n.playing(t) ? o.ctx.currentTime - i._playStart : 0
//                                   , s = i._rateSeek ? i._rateSeek - i._seek : 0;
//                                 return i._seek + (s + a * Math.abs(i._rate))
//                             }
//                             return i._node.currentTime
//                         }
//                         var u = n.playing(t);
//                         u && n.pause(t, !0),
//                         i._seek = e,
//                         i._ended = !1,
//                         n._clearTimer(t),
//                         n._webAudio || !i._node || isNaN(i._node.duration) || (i._node.currentTime = e);
//                         var d = function() {
//                             n._emit("seek", t),
//                             u && n.play(t, !0)
//                         };
//                         if (u && !n._webAudio) {
//                             var _ = function() {
//                                 n._playLock ? setTimeout(_, 0) : d()
//                             };
//                             setTimeout(_, 0)
//                         } else
//                             d()
//                     }
//                     return n
//                 },
//                 playing: function(e) {
//                     if ("number" == typeof e) {
//                         var t = this._soundById(e);
//                         return !!t && !t._paused
//                     }
//                     for (var n = 0; n < this._sounds.length; n++)
//                         if (!this._sounds[n]._paused)
//                             return !0;
//                     return !1
//                 },
//                 duration: function(e) {
//                     var t = this._duration
//                       , n = this._soundById(e);
//                     return n && (t = this._sprite[n._sprite][1] / 1e3),
//                     t
//                 },
//                 state: function() {
//                     return this._state
//                 },
//                 unload: function() {
//                     for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
//                         t[n]._paused || e.stop(t[n]._id),
//                         e._webAudio || (e._clearSound(t[n]._node),
//                         t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
//                         t[n]._node.removeEventListener(o._canPlayEvent, t[n]._loadFn, !1),
//                         t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
//                         o._releaseHtml5Audio(t[n]._node)),
//                         delete t[n]._node,
//                         e._clearTimer(t[n]._id);
//                     var r = o._howls.indexOf(e);
//                     r >= 0 && o._howls.splice(r, 1);
//                     var i = !0;
//                     for (n = 0; n < o._howls.length; n++)
//                         if (o._howls[n]._src === e._src || e._src.indexOf(o._howls[n]._src) >= 0) {
//                             i = !1;
//                             break
//                         }
//                     return a && i && delete a[e._src],
//                     o.noAudio = !1,
//                     e._state = "unloaded",
//                     e._sounds = [],
//                     e = null,
//                     null
//                 },
//                 on: function(e, t, n, o) {
//                     var r = this["_on" + e];
//                     return "function" == typeof t && r.push(o ? {
//                         id: n,
//                         fn: t,
//                         once: o
//                     } : {
//                         id: n,
//                         fn: t
//                     }),
//                     this
//                 },
//                 off: function(e, t, n) {
//                     var o = this["_on" + e]
//                       , r = 0;
//                     if ("number" == typeof t && (n = t,
//                     t = null),
//                     t || n)
//                         for (r = 0; r < o.length; r++) {
//                             var i = n === o[r].id;
//                             if (t === o[r].fn && i || !t && i) {
//                                 o.splice(r, 1);
//                                 break
//                             }
//                         }
//                     else if (e)
//                         this["_on" + e] = [];
//                     else {
//                         var a = Object.keys(this);
//                         for (r = 0; r < a.length; r++)
//                             0 === a[r].indexOf("_on") && Array.isArray(this[a[r]]) && (this[a[r]] = [])
//                     }
//                     return this
//                 },
//                 once: function(e, t, n) {
//                     return this.on(e, t, n, 1),
//                     this
//                 },
//                 _emit: function(e, t, n) {
//                     for (var o = this["_on" + e], r = o.length - 1; r >= 0; r--)
//                         o[r].id && o[r].id !== t && "load" !== e || (setTimeout(function(e) {
//                             e.call(this, t, n)
//                         }
//                         .bind(this, o[r].fn), 0),
//                         o[r].once && this.off(e, o[r].fn, o[r].id));
//                     return this._loadQueue(e),
//                     this
//                 },
//                 _loadQueue: function(e) {
//                     if (this._queue.length > 0) {
//                         var t = this._queue[0];
//                         t.event === e && (this._queue.shift(),
//                         this._loadQueue()),
//                         e || t.action()
//                     }
//                     return this
//                 },
//                 _ended: function(e) {
//                     var t = e._sprite;
//                     if (!this._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
//                         return setTimeout(this._ended.bind(this, e), 100),
//                         this;
//                     var n = !(!e._loop && !this._sprite[t][2]);
//                     if (this._emit("end", e._id),
//                     !this._webAudio && n && this.stop(e._id, !0).play(e._id),
//                     this._webAudio && n) {
//                         this._emit("play", e._id),
//                         e._seek = e._start || 0,
//                         e._rateSeek = 0,
//                         e._playStart = o.ctx.currentTime;
//                         var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
//                         this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), r)
//                     }
//                     return this._webAudio && !n && (e._paused = !0,
//                     e._ended = !0,
//                     e._seek = e._start || 0,
//                     e._rateSeek = 0,
//                     this._clearTimer(e._id),
//                     this._cleanBuffer(e._node),
//                     o._autoSuspend()),
//                     this._webAudio || n || this.stop(e._id, !0),
//                     this
//                 },
//                 _clearTimer: function(e) {
//                     if (this._endTimers[e]) {
//                         if ("function" != typeof this._endTimers[e])
//                             clearTimeout(this._endTimers[e]);
//                         else {
//                             var t = this._soundById(e);
//                             t && t._node && t._node.removeEventListener("ended", this._endTimers[e], !1)
//                         }
//                         delete this._endTimers[e]
//                     }
//                     return this
//                 },
//                 _soundById: function(e) {
//                     for (var t = 0; t < this._sounds.length; t++)
//                         if (e === this._sounds[t]._id)
//                             return this._sounds[t];
//                     return null
//                 },
//                 _inactiveSound: function() {
//                     this._drain();
//                     for (var e = 0; e < this._sounds.length; e++)
//                         if (this._sounds[e]._ended)
//                             return this._sounds[e].reset();
//                     return new i(this)
//                 },
//                 _drain: function() {
//                     var e = this._pool
//                       , t = 0
//                       , n = 0;
//                     if (!(this._sounds.length < e)) {
//                         for (n = 0; n < this._sounds.length; n++)
//                             this._sounds[n]._ended && t++;
//                         for (n = this._sounds.length - 1; n >= 0; n--) {
//                             if (t <= e)
//                                 return;
//                             this._sounds[n]._ended && (this._webAudio && this._sounds[n]._node && this._sounds[n]._node.disconnect(0),
//                             this._sounds.splice(n, 1),
//                             t--)
//                         }
//                     }
//                 },
//                 _getSoundIds: function(e) {
//                     if (void 0 === e) {
//                         for (var t = [], n = 0; n < this._sounds.length; n++)
//                             t.push(this._sounds[n]._id);
//                         return t
//                     }
//                     return [e]
//                 },
//                 _refreshBuffer: function(e) {
//                     return e._node.bufferSource = o.ctx.createBufferSource(),
//                     e._node.bufferSource.buffer = a[this._src],
//                     e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
//                     e._node.bufferSource.loop = e._loop,
//                     e._loop && (e._node.bufferSource.loopStart = e._start || 0,
//                     e._node.bufferSource.loopEnd = e._stop || 0),
//                     e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime),
//                     this
//                 },
//                 _cleanBuffer: function(e) {
//                     var t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
//                     if (o._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null,
//                     e.bufferSource.disconnect(0),
//                     t))
//                         try {
//                             e.bufferSource.buffer = o._scratchBuffer
//                         } catch (n) {}
//                     return e.bufferSource = null,
//                     this
//                 },
//                 _clearSound: function(e) {
//                     /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
//                 }
//             };
//             var i = function(e) {
//                 this._parent = e,
//                 this.init()
//             };
//             i.prototype = {
//                 init: function() {
//                     var e = this._parent;
//                     return this._muted = e._muted,
//                     this._loop = e._loop,
//                     this._volume = e._volume,
//                     this._rate = e._rate,
//                     this._seek = 0,
//                     this._paused = !0,
//                     this._ended = !0,
//                     this._sprite = "__default",
//                     this._id = ++o._counter,
//                     e._sounds.push(this),
//                     this.create(),
//                     this
//                 },
//                 create: function() {
//                     var e = this._parent
//                       , t = o._muted || this._muted || this._parent._muted ? 0 : this._volume;
//                     return e._webAudio ? (this._node = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(),
//                     this._node.gain.setValueAtTime(t, o.ctx.currentTime),
//                     this._node.paused = !0,
//                     this._node.connect(o.masterGain)) : o.noAudio || (this._node = o._obtainHtml5Audio(),
//                     this._errorFn = this._errorListener.bind(this),
//                     this._node.addEventListener("error", this._errorFn, !1),
//                     this._loadFn = this._loadListener.bind(this),
//                     this._node.addEventListener(o._canPlayEvent, this._loadFn, !1),
//                     this._endFn = this._endListener.bind(this),
//                     this._node.addEventListener("ended", this._endFn, !1),
//                     this._node.src = e._src,
//                     this._node.preload = !0 === e._preload ? "auto" : e._preload,
//                     this._node.volume = t * o.volume(),
//                     this._node.load()),
//                     this
//                 },
//                 reset: function() {
//                     var e = this._parent;
//                     return this._muted = e._muted,
//                     this._loop = e._loop,
//                     this._volume = e._volume,
//                     this._rate = e._rate,
//                     this._seek = 0,
//                     this._rateSeek = 0,
//                     this._paused = !0,
//                     this._ended = !0,
//                     this._sprite = "__default",
//                     this._id = ++o._counter,
//                     this
//                 },
//                 _errorListener: function() {
//                     this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0),
//                     this._node.removeEventListener("error", this._errorFn, !1)
//                 },
//                 _loadListener: function() {
//                     var e = this._parent;
//                     e._duration = Math.ceil(10 * this._node.duration) / 10,
//                     0 === Object.keys(e._sprite).length && (e._sprite = {
//                         __default: [0, 1e3 * e._duration]
//                     }),
//                     "loaded" !== e._state && (e._state = "loaded",
//                     e._emit("load"),
//                     e._loadQueue()),
//                     this._node.removeEventListener(o._canPlayEvent, this._loadFn, !1)
//                 },
//                 _endListener: function() {
//                     var e = this._parent;
//                     e._duration === 1 / 0 && (e._duration = Math.ceil(10 * this._node.duration) / 10,
//                     e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration),
//                     e._ended(this)),
//                     this._node.removeEventListener("ended", this._endFn, !1)
//                 }
//             };
//             var a = {}
//               , s = function(e) {
//                 var t = e._src;
//                 if (a[t])
//                     return e._duration = a[t].duration,
//                     void _(e);
//                 if (/^data:[^;]+;base64,/.test(t)) {
//                     for (var n = atob(t.split(",")[1]), o = new Uint8Array(n.length), r = 0; r < n.length; ++r)
//                         o[r] = n.charCodeAt(r);
//                     d(o.buffer, e)
//                 } else {
//                     var i = new XMLHttpRequest;
//                     i.open(e._xhr.method, t, !0),
//                     i.withCredentials = e._xhr.withCredentials,
//                     i.responseType = "arraybuffer",
//                     e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(t) {
//                         i.setRequestHeader(t, e._xhr.headers[t])
//                     }),
//                     i.onload = function() {
//                         var t = (i.status + "")[0];
//                         "0" === t || "2" === t || "3" === t ? d(i.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + i.status + ".")
//                     }
//                     ,
//                     i.onerror = function() {
//                         e._webAudio && (e._html5 = !0,
//                         e._webAudio = !1,
//                         e._sounds = [],
//                         delete a[t],
//                         e.load())
//                     }
//                     ,
//                     u(i)
//                 }
//             }
//               , u = function(e) {
//                 try {
//                     e.send()
//                 } catch (t) {
//                     e.onerror()
//                 }
//             }
//               , d = function(e, t) {
//                 var n = function() {
//                     t._emit("loaderror", null, "Decoding audio data failed.")
//                 }
//                   , r = function(e) {
//                     e && t._sounds.length > 0 ? (a[t._src] = e,
//                     _(t, e)) : n()
//                 };
//                 "undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(e).then(r).catch(n) : o.ctx.decodeAudioData(e, r, n)
//             }
//               , _ = function(e, t) {
//                 t && !e._duration && (e._duration = t.duration),
//                 0 === Object.keys(e._sprite).length && (e._sprite = {
//                     __default: [0, 1e3 * e._duration]
//                 }),
//                 "loaded" !== e._state && (e._state = "loaded",
//                 e._emit("load"),
//                 e._loadQueue())
//             }
//               , l = function() {
//                 if (o.usingWebAudio) {
//                     try {
//                         "undefined" != typeof AudioContext ? o.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
//                     } catch (i) {
//                         o.usingWebAudio = !1
//                     }
//                     o.ctx || (o.usingWebAudio = !1);
//                     var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform)
//                       , t = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
//                       , n = t ? parseInt(t[1], 10) : null;
//                     if (e && n && n < 9) {
//                         var r = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
//                         o._navigator && !r && (o.usingWebAudio = !1)
//                     }
//                     o.usingWebAudio && (o.masterGain = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(),
//                     o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime),
//                     o.masterGain.connect(o.ctx.destination)),
//                     o._setup()
//                 }
//             };
//             "function" == typeof e && e.amd && e([], function() {
//                 return {
//                     Howler: o,
//                     Howl: r
//                 }
//             }),
//             "undefined" != typeof exports && (exports.Howler = o,
//             exports.Howl = r),
//             void 0 !== t ? (t.HowlerGlobal = n,
//             t.Howler = o,
//             t.Howl = r,
//             t.Sound = i) : "undefined" != typeof window && (window.HowlerGlobal = n,
//             window.Howler = o,
//             window.Howl = r,
//             window.Sound = i)
//         }(),
//         function() {
//             "use strict";
//             var e;
//             HowlerGlobal.prototype._pos = [0, 0, 0],
//             HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
//             HowlerGlobal.prototype.stereo = function(e) {
//                 if (!this.ctx || !this.ctx.listener)
//                     return this;
//                 for (var t = this._howls.length - 1; t >= 0; t--)
//                     this._howls[t].stereo(e);
//                 return this
//             }
//             ,
//             HowlerGlobal.prototype.pos = function(e, t, n) {
//                 return this.ctx && this.ctx.listener ? (t = "number" != typeof t ? this._pos[1] : t,
//                 n = "number" != typeof n ? this._pos[2] : n,
//                 "number" != typeof e ? this._pos : (this._pos = [e, t, n],
//                 void 0 !== this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, .1),
//                 this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, .1),
//                 this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, .1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]),
//                 this)) : this
//             }
//             ,
//             HowlerGlobal.prototype.orientation = function(e, t, n, o, r, i) {
//                 if (!this.ctx || !this.ctx.listener)
//                     return this;
//                 var a = this._orientation;
//                 return t = "number" != typeof t ? a[1] : t,
//                 n = "number" != typeof n ? a[2] : n,
//                 o = "number" != typeof o ? a[3] : o,
//                 r = "number" != typeof r ? a[4] : r,
//                 i = "number" != typeof i ? a[5] : i,
//                 "number" != typeof e ? a : (this._orientation = [e, t, n, o, r, i],
//                 void 0 !== this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1),
//                 this.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1),
//                 this.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1),
//                 this.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, .1),
//                 this.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, .1),
//                 this.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(e, t, n, o, r, i),
//                 this)
//             }
//             ,
//             Howl.prototype.init = (e = Howl.prototype.init,
//             function(t) {
//                 return this._orientation = t.orientation || [1, 0, 0],
//                 this._stereo = t.stereo || null,
//                 this._pos = t.pos || null,
//                 this._pannerAttr = {
//                     coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
//                     coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
//                     coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
//                     distanceModel: void 0 !== t.distanceModel ? t.distanceModel : "inverse",
//                     maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
//                     panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
//                     refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
//                     rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1
//                 },
//                 this._onstereo = t.onstereo ? [{
//                     fn: t.onstereo
//                 }] : [],
//                 this._onpos = t.onpos ? [{
//                     fn: t.onpos
//                 }] : [],
//                 this._onorientation = t.onorientation ? [{
//                     fn: t.onorientation
//                 }] : [],
//                 e.call(this, t)
//             }
//             ),
//             Howl.prototype.stereo = function(e, n) {
//                 var o = this;
//                 if (!o._webAudio)
//                     return o;
//                 if ("loaded" !== o._state)
//                     return o._queue.push({
//                         event: "stereo",
//                         action: function() {
//                             o.stereo(e, n)
//                         }
//                     }),
//                     o;
//                 var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
//                 if (void 0 === n) {
//                     if ("number" != typeof e)
//                         return o._stereo;
//                     o._stereo = e,
//                     o._pos = [e, 0, 0]
//                 }
//                 for (var i = o._getSoundIds(n), a = 0; a < i.length; a++) {
//                     var s = o._soundById(i[a]);
//                     if (s) {
//                         if ("number" != typeof e)
//                             return s._stereo;
//                         s._stereo = e,
//                         s._pos = [e, 0, 0],
//                         s._node && (s._pannerAttr.panningModel = "equalpower",
//                         s._panner && s._panner.pan || t(s, r),
//                         "spatial" === r ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
//                         s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
//                         s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(e, 0, 0) : s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
//                         o._emit("stereo", s._id)
//                     }
//                 }
//                 return o
//             }
//             ,
//             Howl.prototype.pos = function(e, n, o, r) {
//                 var i = this;
//                 if (!i._webAudio)
//                     return i;
//                 if ("loaded" !== i._state)
//                     return i._queue.push({
//                         event: "pos",
//                         action: function() {
//                             i.pos(e, n, o, r)
//                         }
//                     }),
//                     i;
//                 if (n = "number" != typeof n ? 0 : n,
//                 o = "number" != typeof o ? -.5 : o,
//                 void 0 === r) {
//                     if ("number" != typeof e)
//                         return i._pos;
//                     i._pos = [e, n, o]
//                 }
//                 for (var a = i._getSoundIds(r), s = 0; s < a.length; s++) {
//                     var u = i._soundById(a[s]);
//                     if (u) {
//                         if ("number" != typeof e)
//                             return u._pos;
//                         u._pos = [e, n, o],
//                         u._node && (u._panner && !u._panner.pan || t(u, "spatial"),
//                         void 0 !== u._panner.positionX ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
//                         u._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime),
//                         u._panner.positionZ.setValueAtTime(o, Howler.ctx.currentTime)) : u._panner.setPosition(e, n, o)),
//                         i._emit("pos", u._id)
//                     }
//                 }
//                 return i
//             }
//             ,
//             Howl.prototype.orientation = function(e, n, o, r) {
//                 var i = this;
//                 if (!i._webAudio)
//                     return i;
//                 if ("loaded" !== i._state)
//                     return i._queue.push({
//                         event: "orientation",
//                         action: function() {
//                             i.orientation(e, n, o, r)
//                         }
//                     }),
//                     i;
//                 if (n = "number" != typeof n ? i._orientation[1] : n,
//                 o = "number" != typeof o ? i._orientation[2] : o,
//                 void 0 === r) {
//                     if ("number" != typeof e)
//                         return i._orientation;
//                     i._orientation = [e, n, o]
//                 }
//                 for (var a = i._getSoundIds(r), s = 0; s < a.length; s++) {
//                     var u = i._soundById(a[s]);
//                     if (u) {
//                         if ("number" != typeof e)
//                             return u._orientation;
//                         u._orientation = [e, n, o],
//                         u._node && (u._panner || (u._pos || (u._pos = i._pos || [0, 0, -.5]),
//                         t(u, "spatial")),
//                         void 0 !== u._panner.orientationX ? (u._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime),
//                         u._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime),
//                         u._panner.orientationZ.setValueAtTime(o, Howler.ctx.currentTime)) : u._panner.setOrientation(e, n, o)),
//                         i._emit("orientation", u._id)
//                     }
//                 }
//                 return i
//             }
//             ,
//             Howl.prototype.pannerAttr = function() {
//                 var e, n, o, r = arguments;
//                 if (!this._webAudio)
//                     return this;
//                 if (0 === r.length)
//                     return this._pannerAttr;
//                 if (1 === r.length) {
//                     if ("object" != typeof r[0])
//                         return (o = this._soundById(parseInt(r[0], 10))) ? o._pannerAttr : this._pannerAttr;
//                     e = r[0],
//                     void 0 === n && (e.pannerAttr || (e.pannerAttr = {
//                         coneInnerAngle: e.coneInnerAngle,
//                         coneOuterAngle: e.coneOuterAngle,
//                         coneOuterGain: e.coneOuterGain,
//                         distanceModel: e.distanceModel,
//                         maxDistance: e.maxDistance,
//                         refDistance: e.refDistance,
//                         rolloffFactor: e.rolloffFactor,
//                         panningModel: e.panningModel
//                     }),
//                     this._pannerAttr = {
//                         coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : this._coneInnerAngle,
//                         coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : this._coneOuterAngle,
//                         coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : this._coneOuterGain,
//                         distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : this._distanceModel,
//                         maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : this._maxDistance,
//                         refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : this._refDistance,
//                         rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : this._rolloffFactor,
//                         panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : this._panningModel
//                     })
//                 } else
//                     2 === r.length && (e = r[0],
//                     n = parseInt(r[1], 10));
//                 for (var i = this._getSoundIds(n), a = 0; a < i.length; a++)
//                     if (o = this._soundById(i[a])) {
//                         var s = o._pannerAttr;
//                         s = {
//                             coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : s.coneInnerAngle,
//                             coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : s.coneOuterAngle,
//                             coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : s.coneOuterGain,
//                             distanceModel: void 0 !== e.distanceModel ? e.distanceModel : s.distanceModel,
//                             maxDistance: void 0 !== e.maxDistance ? e.maxDistance : s.maxDistance,
//                             refDistance: void 0 !== e.refDistance ? e.refDistance : s.refDistance,
//                             rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : s.rolloffFactor,
//                             panningModel: void 0 !== e.panningModel ? e.panningModel : s.panningModel
//                         };
//                         var u = o._panner;
//                         u ? (u.coneInnerAngle = s.coneInnerAngle,
//                         u.coneOuterAngle = s.coneOuterAngle,
//                         u.coneOuterGain = s.coneOuterGain,
//                         u.distanceModel = s.distanceModel,
//                         u.maxDistance = s.maxDistance,
//                         u.refDistance = s.refDistance,
//                         u.rolloffFactor = s.rolloffFactor,
//                         u.panningModel = s.panningModel) : (o._pos || (o._pos = this._pos || [0, 0, -.5]),
//                         t(o, "spatial"))
//                     }
//                 return this
//             }
//             ,
//             Sound.prototype.init = function(e) {
//                 return function() {
//                     var t = this._parent;
//                     this._orientation = t._orientation,
//                     this._stereo = t._stereo,
//                     this._pos = t._pos,
//                     this._pannerAttr = t._pannerAttr,
//                     e.call(this),
//                     this._stereo ? t.stereo(this._stereo) : this._pos && t.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
//                 }
//             }(Sound.prototype.init),
//             Sound.prototype.reset = function(e) {
//                 return function() {
//                     var t = this._parent;
//                     return this._orientation = t._orientation,
//                     this._stereo = t._stereo,
//                     this._pos = t._pos,
//                     this._pannerAttr = t._pannerAttr,
//                     this._stereo ? t.stereo(this._stereo) : this._pos ? t.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0),
//                     this._panner = void 0,
//                     t._refreshBuffer(this)),
//                     e.call(this)
//                 }
//             }(Sound.prototype.reset);
//             var t = function(e, t) {
//                 "spatial" === (t = t || "spatial") ? (e._panner = Howler.ctx.createPanner(),
//                 e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle,
//                 e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle,
//                 e._panner.coneOuterGain = e._pannerAttr.coneOuterGain,
//                 e._panner.distanceModel = e._pannerAttr.distanceModel,
//                 e._panner.maxDistance = e._pannerAttr.maxDistance,
//                 e._panner.refDistance = e._pannerAttr.refDistance,
//                 e._panner.rolloffFactor = e._pannerAttr.rolloffFactor,
//                 e._panner.panningModel = e._pannerAttr.panningModel,
//                 void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime),
//                 e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime),
//                 e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
//                 void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime),
//                 e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime),
//                 e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(),
//                 e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
//                 e._panner.connect(e._node),
//                 e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
//             }
//         }();
//     }
//     , {}],
//     "mERb": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.default = void 0;
//         var e = l(require("@babel/runtime/helpers/classCallCheck"))
//           , t = l(require("@babel/runtime/helpers/createClass"))
//           , n = l(require("@babel/runtime/helpers/defineProperty"))
//           , a = require("howler")
//           , u = require("gsap")
//           , o = require("gsap/DrawSVGPlugin");
//         function l(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         u.gsap.registerPlugin(o.DrawSVGPlugin);
//         var r = function() {
//             function n() {
//                 (0,
//                 e.default)(this, n)
//             }
//             return (0,
//             t.default)(n, null, [{
//                 key: "preloadMusic",
//                 value: function() {
//                     return new Promise(function(e) {
//                         n.sound = new a.Howl({
//                             src: "/music/music.mp3",
//                             volume: n.maxVolume,
//                             loop: !0,
//                             autoplay: !1,
//                             preload: !1
//                         }),
//                         n.sound.once("load", function() {
//                             n.soundButton.classList.add("is-visible"),
//                             e()
//                         }),
//                         n.sound.load()
//                     }
//                     )
//                 }
//             }, {
//                 key: "init",
//                 value: function() {
//                     n.sound.play(),
//                     n.createTimeline(),
//                     n.soundButton.addEventListener("click", function() {
//                         n.canInteract && (0 === n.sound.volume() ? n.fadeIn() : n.fadeOut())
//                     })
//                 }
//             }, {
//                 key: "fadeIn",
//                 value: function() {
//                     u.gsap.to(n.paths, {
//                         scaleY: function(e) {
//                             return n.scaleValues.start[e]
//                         },
//                         ease: "none",
//                         onStart: function() {
//                             n.canInteract = !1,
//                             n.sound.fade(0, n.maxVolume, 500)
//                         },
//                         onComplete: function() {
//                             n.createTimeline(),
//                             n.canInteract = !0
//                         }
//                     })
//                 }
//             }, {
//                 key: "fadeOut",
//                 value: function() {
//                     n.sound.fade(n.maxVolume, 0, 500),
//                     n.timeline.kill(),
//                     u.gsap.to(n.paths, {
//                         scaleY: .1,
//                         onStart: function() {
//                             return n.canInteract = !1
//                         },
//                         onComplete: function() {
//                             return n.canInteract = !0
//                         }
//                     })
//                 }
//             }, {
//                 key: "createTimeline",
//                 value: function() {
//                     n.timeline = u.gsap.timeline();
//                     var e = u.gsap.utils.random(.3, 1.2, .01, !0);
//                     n.paths.forEach(function(t, a) {
//                         u.gsap.set(t, {
//                             transformOrigin: "center bottom"
//                         });
//                         var o = u.gsap.fromTo(t, {
//                             scaleY: n.scaleValues.start[a]
//                         }, {
//                             scaleY: n.scaleValues.end[a],
//                             ease: "none",
//                             duration: e(),
//                             repeat: -1,
//                             yoyo: !0
//                         });
//                         n.timeline.add(o, "<")
//                     })
//                 }
//             }]),
//             n
//         }();
//         exports.default = r,
//         (0,
//         n.default)(r, "soundButton", document.querySelector("[data-audio-button]")),
//         (0,
//         n.default)(r, "paths", r.soundButton.querySelectorAll(".sound-line")),
//         (0,
//         n.default)(r, "maxVolume", .08),
//         (0,
//         n.default)(r, "scaleValues", {
//             start: [.4, .7, .85, .55],
//             end: [.6, .2, .55, .35]
//         }),
//         (0,
//         n.default)(r, "sound", void 0),
//         (0,
//         n.default)(r, "timeline", void 0),
//         (0,
//         n.default)(r, "canInteract", !0);
//     }
//     , {
//         "@babel/runtime/helpers/classCallCheck": "fcMS",
//         "@babel/runtime/helpers/createClass": "P8NW",
//         "@babel/runtime/helpers/defineProperty": "IxO8",
//         "howler": "lyKV",
//         "gsap": "TpQl",
//         "gsap/DrawSVGPlugin": "XBJy"
//     }],
//     "ee8x": [function(require, module, exports) {
//         "use strict";
//         Object.defineProperty(exports, "__esModule", {
//             value: !0
//         }),
//         exports.render = m;
//         var e = g(require("@babel/runtime/helpers/toConsumableArray"));
//         require("./global/Globals");
//         var t = require("./global/GlobalEvents");
//         require("./highway/index");
//         var a = g(require("quicklink/dist/quicklink.js"))
//           , r = g(require("./global/ScrollAnimations"))
//           , l = g(require("./global/GlobalAnimations"))
//           , n = g(require("./global/SmoothScroll"))
//           , o = g(require("./global/PrimaryNav"))
//           , u = g(require("./global/SecondaryNav"))
//           , i = g(require("./global/WebGLGallery"))
//           , d = g(require("./global/WebGLCarousel"))
//           , s = g(require("./global/AudioManager"))
//           , c = g(require("./global/AssetLoader"))
//           , f = g(require("./global/HoverManager"))
//           , p = require("gsap");
//         function g(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         }
//         function m() {
//             return new Promise(function(g) {
//                 document.documentElement.classList.remove("has-intro"),
//                 r.default.init(),
//                 l.default.runHeroAnimation(),
//                 n.default.init(),
//                 n.default.updateView(),
//                 n.default.enable(),
//                 o.default.init(),
//                 u.default.init(),
//                 i.default.setGalleryLink(),
//                 i.default.hidePageLinks(),
//                 f.default.update();
//                 var m = {
//                     value: 0
//                 }
//                   , b = document.querySelector("[data-intro-counter]")
//                   , q = new p.gsap.timeline({
//                     paused: !0
//                 });
//                 q.to(m, {
//                     value: 99,
//                     duration: .5,
//                     snap: {
//                         value: 1
//                     },
//                     onUpdate: function() {
//                         b.textContent = "".concat(String(m.value).padStart(2, "0"), "%")
//                     }
//                 });
//                 var v = new Promise(function(t) {
//                     new c.default({
//                         onComplete: function() {
//                             return t()
//                         }
//                     }).load((0,
//                     e.default)(document.querySelectorAll("[data-preload], [data-preload-bg]")))
//                 }
//                 );
//                 Promise.all([v, s.default.preloadMusic(), q.play(), d.default.loadTextures()]).then(function() {
//                     return d.default.init()
//                 }).then(function() {
//                     b.textContent = "100%",
//                     i.default.init(),
//                     a.default.listen(),
//                     s.default.init(),
//                     (0,
//                     t.runRAF)();
//                     var e = document.querySelector(".js-consent-target")
//                       , r = document.querySelector("[data-intro-overlay]");
//                     p.gsap.to(r, {
//                         clipPath: "polygon(0% 101%, 100% 101%, 100% 101%, 0% 101%)",
//                         duration: 1.5,
//                         ease: "expo.inOut",
//                         onStart: function() {
//                             e.parentNode.removeChild(e),
//                             d.default.state.init && p.gsap.delayedCall(.6, function() {
//                                 return d.default.timelines.in[0].restart()
//                             })
//                         },
//                         onComplete: function() {
//                             r.parentNode.removeChild(r),
//                             g()
//                         }
//                     })
//                 })
//             }
//             )
//         }
//     }
//     , {
//         "@babel/runtime/helpers/toConsumableArray": "Fhqp",
//         "./global/Globals": "kPye",
//         "./global/GlobalEvents": "PyXF",
//         "./highway/index": "PkYH",
//         "quicklink/dist/quicklink.js": "Vn4J",
//         "./global/ScrollAnimations": "wAOS",
//         "./global/GlobalAnimations": "x4nj",
//         "./global/SmoothScroll": "QzAk",
//         "./global/PrimaryNav": "spbt",
//         "./global/SecondaryNav": "DrEm",
//         "./global/WebGLGallery": "sNO3",
//         "./global/WebGLCarousel": "fi2O",
//         "./global/AudioManager": "mERb",
//         "./global/AssetLoader": "zRAF",
//         "./global/HoverManager": "VNxj",
//         "gsap": "TpQl"
//     }]
// }, {}, [], null)

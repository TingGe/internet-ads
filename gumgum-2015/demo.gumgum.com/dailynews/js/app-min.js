if (function (e, t) {
    function n(e) {
      var t = e.length, n = ct.type(e);
      return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e) {
      var t = kt[e] = {};
      return ct.each(e.match(ft) || [], function (e, n) {
        t[n] = !0
      }), t
    }

    function r(e, n, i, r) {
      if (ct.acceptData(e)) {
        var o, s, a = ct.expando, l = e.nodeType, u = l ? ct.cache : e, c = l ? e[a] : e[a] && a;
        if (c && u[c] && (r || u[c].data) || i !== t || "string" != typeof n)return c || (c = l ? e[a] = tt.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {toJSON: ct.noop}), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), s = u[c], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[ct.camelCase(n)] = i), "string" == typeof n ? (o = s[n], null == o && (o = s[ct.camelCase(n)])) : o = s, o
      }
    }

    function o(e, t, n) {
      if (ct.acceptData(e)) {
        var i, r, o = e.nodeType, a = o ? ct.cache : e, l = o ? e[ct.expando] : ct.expando;
        if (a[l]) {
          if (t && (i = n ? a[l] : a[l].data)) {
            ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in i ? t = [t] : (t = ct.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
            for (; r--;)delete i[t[r]];
            if (n ? !s(i) : !ct.isEmptyObject(i))return
          }
          (n || (delete a[l].data, s(a[l]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
        }
      }
    }

    function $(e, n, i) {
      if (i === t && 1 === e.nodeType) {
        var r = "data-" + n.replace(Nt, "-$1").toLowerCase();
        if (i = e.getAttribute(r), "string" == typeof i) {
          try {
            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? ct.parseJSON(i) : i
          } catch (o) {
          }
          ct.data(e, n, i)
        } else i = t
      }
      return i
    }

    function s(e) {
      var t;
      for (t in e)if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
      return !0
    }

    function a() {
      return !0
    }

    function l() {
      return !1
    }

    function u() {
      try {
        return G.activeElement
      } catch (e) {
      }
    }

    function c(e, t) {
      do e = e[t]; while (e && 1 !== e.nodeType);
      return e
    }

    function p(e, t, n) {
      if (ct.isFunction(t))return ct.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n
      });
      if (t.nodeType)return ct.grep(e, function (e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (Rt.test(t))return ct.filter(t, e, n);
        t = ct.filter(t, e)
      }
      return ct.grep(e, function (e) {
        return ct.inArray(e, t) >= 0 !== n
      })
    }

    function f(e) {
      var t = Xt.split("|"), n = e.createDocumentFragment();
      if (n.createElement)for (; t.length;)n.createElement(t.pop());
      return n
    }

    function d(e, t) {
      return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
      return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }

    function m(e) {
      var t = on.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
      for (var n, i = 0; null != (n = e[i]); i++)ct._data(n, "globalEval", !t || ct._data(t[i], "globalEval"))
    }

    function y(e, t) {
      if (1 === t.nodeType && ct.hasData(e)) {
        var n, i, r, o = ct._data(e), s = ct._data(t, o), a = o.events;
        if (a) {
          delete s.handle, s.events = {};
          for (n in a)for (i = 0, r = a[n].length; r > i; i++)ct.event.add(t, n, a[n][i])
        }
        s.data && (s.data = ct.extend({}, s.data))
      }
    }

    function v(e, t) {
      var n, i, r;
      if (1 === t.nodeType) {
        if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
          r = ct._data(t);
          for (i in r.events)ct.removeEvent(t, i, r.handle);
          t.removeAttribute(ct.expando)
        }
        "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
      }
    }

    function b(e, n) {
      var i, r, o = 0, s = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
      if (!s)for (s = [], i = e.childNodes || e; null != (r = i[o]); o++)!n || ct.nodeName(r, n) ? s.push(r) : ct.merge(s, b(r, n));
      return n === t || n && ct.nodeName(e, n) ? ct.merge([e], s) : s
    }

    function x(e) {
      tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
      if (t in e)return t;
      for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = kn.length; r--;)if (t = kn[r] + n, t in e)return t;
      return i
    }

    function C(e, t) {
      return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }

    function T(e, t) {
      for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (o[s] = ct._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (o[s] = ct._data(i, "olddisplay", N(i.nodeName)))) : o[s] || (r = C(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display"))));
      for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
      return e
    }

    function E(e, t, n) {
      var i = vn.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function k(e, t, n, i, r) {
      for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ct.css(e, n + En[o], !0, r)), i ? ("content" === n && (s -= ct.css(e, "padding" + En[o], !0, r)), "margin" !== n && (s -= ct.css(e, "border" + En[o] + "Width", !0, r))) : (s += ct.css(e, "padding" + En[o], !0, r), "padding" !== n && (s += ct.css(e, "border" + En[o] + "Width", !0, r)));
      return s
    }

    function S(e, t, n) {
      var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = pn(e), s = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
      if (0 >= r || null == r) {
        if (r = fn(e, t, o), (0 > r || null == r) && (r = e.style[t]), bn.test(r))return r;
        i = s && (ct.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
      }
      return r + k(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function N(e) {
      var t = G, n = wn[e];
      return n || (n = D(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = D(e, t), cn.detach()), wn[e] = n), n
    }

    function D(e, t) {
      var n = ct(t.createElement(e)).appendTo(t.body), i = ct.css(n[0], "display");
      return n.remove(), i
    }

    function j(e, t, n, i) {
      var r;
      if (ct.isArray(t))ct.each(t, function (t, r) {
        n || Nn.test(e) ? i(e, r) : j(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
      }); else if (n || "object" !== ct.type(t))i(e, t); else for (r in t)j(e + "[" + r + "]", t[r], n, i)
    }

    function A(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, r = 0, o = t.toLowerCase().match(ft) || [];
        if (ct.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function L(e, n, i, r) {
      function o(l) {
        var u;
        return s[l] = !0, ct.each(e[l] || [], function (e, l) {
          var c = l(n, i, r);
          return "string" != typeof c || a || s[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), o(c), !1)
        }), u
      }

      var s = {}, a = e === In;
      return o(n.dataTypes[0]) || !s["*"] && o("*")
    }

    function H(e, n) {
      var i, r, o = ct.ajaxSettings.flatOptions || {};
      for (r in n)n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
      return i && ct.extend(!0, e, i), e
    }

    function F(e, n, i) {
      for (var r, o, s, a, l = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
      if (o)for (a in l)if (l[a] && l[a].test(o)) {
        u.unshift(a);
        break
      }
      if (u[0]in i)s = u[0]; else {
        for (a in i) {
          if (!u[0] || e.converters[a + " " + u[0]]) {
            s = a;
            break
          }
          r || (r = a)
        }
        s = s || r
      }
      return s ? (s !== u[0] && u.unshift(s), i[s]) : t
    }

    function M(e, t, n, i) {
      var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
      if (c[1])for (s in e.converters)u[s.toLowerCase()] = e.converters[s];
      for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
        if (s = u[l + " " + o] || u["* " + o], !s)for (r in u)if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
          s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
          break
        }
        if (s !== !0)if (s && e["throws"])t = s(t); else try {
          t = s(t)
        } catch (p) {
          return {state: "parsererror", error: s ? p : "No conversion from " + l + " to " + o}
        }
      }
      return {state: "success", data: t}
    }

    function P() {
      try {
        return new e.XMLHttpRequest
      } catch (t) {
      }
    }

    function O() {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {
      }
    }

    function q() {
      return setTimeout(function () {
        Zn = t
      }), Zn = ct.now()
    }

    function _(e, t, n) {
      for (var i, r = (oi[t] || []).concat(oi["*"]), o = 0, s = r.length; s > o; o++)if (i = r[o].call(n, t, e))return i
    }

    function B(e, t, n) {
      var i, r, o = 0, s = ri.length, a = ct.Deferred().always(function () {
        delete l.elem
      }), l = function () {
        if (r)return !1;
        for (var t = Zn || q(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(o);
        return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
      }, u = a.promise({
        elem: e,
        props: ct.extend({}, t),
        opts: ct.extend(!0, {specialEasing: {}}, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Zn || q(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0, i = t ? u.tweens.length : 0;
          if (r)return this;
          for (r = !0; i > n; n++)u.tweens[n].run(1);
          return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
        }
      }), c = u.props;
      for (W(c, u.opts.specialEasing); s > o; o++)if (i = ri[o].call(u, e, c, u.opts))return i;
      return ct.map(c, _, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(e, t) {
      var n, i, r, o, s;
      for (n in e)if (i = ct.camelCase(n), r = t[i], o = e[n], ct.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ct.cssHooks[i], s && "expand"in s) {
        o = s.expand(o), delete e[i];
        for (n in o)n in e || (e[n] = o[n], t[n] = r)
      } else t[i] = r
    }

    function R(e, t, n) {
      var i, r, o, s, a, l, u = this, c = {}, p = e.style, f = e.nodeType && C(e), d = ct._data(e, "fxshow");
      n.queue || (a = ct._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
        a.unqueued || l()
      }), a.unqueued++, u.always(function () {
        u.always(function () {
          a.unqueued--, ct.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (i in t)if (r = t[i], ti.exec(r)) {
        if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show"))continue;
        c[i] = d && d[i] || ct.style(e, i)
      }
      if (!ct.isEmptyObject(c)) {
        d ? "hidden"in d && (f = d.hidden) : d = ct._data(e, "fxshow", {}), o && (d.hidden = !f), f ? ct(e).show() : u.done(function () {
          ct(e).hide()
        }), u.done(function () {
          var t;
          ct._removeData(e, "fxshow");
          for (t in c)ct.style(e, t, c[t])
        });
        for (i in c)s = _(f ? d[i] : 0, i, u), i in d || (d[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function z(e, t, n, i, r) {
      return new z.prototype.init(e, t, n, i, r)
    }

    function I(e, t) {
      var n, i = {height: e}, r = 0;
      for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = En[r], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function U(e) {
      return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var X, Q, V = typeof t, J = e.location, G = e.document, Y = G.documentElement, K = e.jQuery, Z = e.$, et = {}, tt = [], nt = "1.10.1", it = tt.concat, rt = tt.push, ot = tt.slice, st = tt.indexOf, at = et.toString, lt = et.hasOwnProperty, ut = nt.trim, ct = function (e, t) {
      return new ct.fn.init(e, t, Q)
    }, pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ft = /\S+/g, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, gt = /^[\],:{}\s]*$/, yt = /(?:^|:|,)(?:\s*\[)+/g, vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xt = /^-ms-/, wt = /-([\da-z])/gi, Ct = function (e, t) {
      return t.toUpperCase()
    }, Tt = function (e) {
      (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Et(), ct.ready())
    }, Et = function () {
      G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Tt, !1), e.removeEventListener("load", Tt, !1)) : (G.detachEvent("onreadystatechange", Tt), e.detachEvent("onload", Tt))
    };
    ct.fn = ct.prototype = {
      jquery: nt, constructor: ct, init: function (e, n, i) {
        var r, o;
        if (!e)return this;
        if ("string" == typeof e) {
          if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !r || !r[1] && n)return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
          if (r[1]) {
            if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), mt.test(r[1]) && ct.isPlainObject(n))for (r in n)ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
            return this
          }
          if (o = G.getElementById(r[2]), o && o.parentNode) {
            if (o.id !== r[2])return i.find(e);
            this.length = 1, this[0] = o
          }
          return this.context = G, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
      }, selector: "", length: 0, toArray: function () {
        return ot.call(this)
      }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
      }, pushStack: function (e) {
        var t = ct.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      }, each: function (e, t) {
        return ct.each(this, e, t)
      }, ready: function (e) {
        return ct.ready.promise().done(e), this
      }, slice: function () {
        return this.pushStack(ot.apply(this, arguments))
      }, first: function () {
        return this.eq(0)
      }, last: function () {
        return this.eq(-1)
      }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      }, map: function (e) {
        return this.pushStack(ct.map(this, function (t, n) {
          return e.call(t, n, t)
        }))
      }, end: function () {
        return this.prevObject || this.constructor(null)
      }, push: rt, sort: [].sort, splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
      var e, n, i, r, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)if (null != (o = arguments[l]))for (r in o)e = a[r], i = o[r], a !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, s = e && ct.isArray(e) ? e : []) : s = e && ct.isPlainObject(e) ? e : {}, a[r] = ct.extend(c, s, i)) : i !== t && (a[r] = i));
      return a
    }, ct.extend({
      expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
        return e.$ === ct && (e.$ = Z), t && e.jQuery === ct && (e.jQuery = K), ct
      }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? ct.readyWait++ : ct.ready(!0)
      }, ready: function (e) {
        if (e === !0 ? !--ct.readyWait : !ct.isReady) {
          if (!G.body)return setTimeout(ct.ready);
          ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (X.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
        }
      }, isFunction: function (e) {
        return "function" === ct.type(e)
      }, isArray: Array.isArray || function (e) {
        return "array" === ct.type(e)
      }, isWindow: function (e) {
        return null != e && e == e.window
      }, isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
      }, isPlainObject: function (e) {
        var n;
        if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e))return !1;
        try {
          if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf"))return !1
        } catch (i) {
          return !1
        }
        if (ct.support.ownLast)for (n in e)return lt.call(e, n);
        for (n in e);
        return n === t || lt.call(e, n)
      }, isEmptyObject: function (e) {
        var t;
        for (t in e)return !1;
        return !0
      }, error: function (e) {
        throw Error(e)
      }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var i = mt.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = ct.buildFragment([e], t, r), r && ct(r).remove(), ct.merge([], i.childNodes))
      }, parseJSON: function (n) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && gt.test(n.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
      }, parseXML: function (n) {
        var i, r;
        if (!n || "string" != typeof n)return null;
        try {
          e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
        } catch (o) {
          i = t
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
      }, noop: function () {
      }, globalEval: function (t) {
        t && ct.trim(t) && (e.execScript || function (t) {
          e.eval.call(e, t)
        })(t)
      }, camelCase: function (e) {
        return e.replace(xt, "ms-").replace(wt, Ct)
      }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }, each: function (e, t, i) {
        var r, o = 0, s = e.length, a = n(e);
        if (i) {
          if (a)for (; s > o && (r = t.apply(e[o], i), r !== !1); o++); else for (o in e)if (r = t.apply(e[o], i), r === !1)break
        } else if (a)for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++); else for (o in e)if (r = t.call(e[o], o, e[o]), r === !1)break;
        return e
      }, trim: ut && !ut.call("﻿ ") ? function (e) {
        return null == e ? "" : ut.call(e)
      } : function (e) {
        return null == e ? "" : (e + "").replace(dt, "")
      }, makeArray: function (e, t) {
        var i = t || [];
        return null != e && (n(Object(e)) ? ct.merge(i, "string" == typeof e ? [e] : e) : rt.call(i, e)), i
      }, inArray: function (e, t, n) {
        var i;
        if (t) {
          if (st)return st.call(t, e, n);
          for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
        }
        return -1
      }, merge: function (e, n) {
        var i = n.length, r = e.length, o = 0;
        if ("number" == typeof i)for (; i > o; o++)e[r++] = n[o]; else for (; n[o] !== t;)e[r++] = n[o++];
        return e.length = r, e
      }, grep: function (e, t, n) {
        var i, r = [], o = 0, s = e.length;
        for (n = !!n; s > o; o++)i = !!t(e[o], o), n !== i && r.push(e[o]);
        return r
      }, map: function (e, t, i) {
        var r, o = 0, s = e.length, a = n(e), l = [];
        if (a)for (; s > o; o++)r = t(e[o], o, i), null != r && (l[l.length] = r); else for (o in e)r = t(e[o], o, i), null != r && (l[l.length] = r);
        return it.apply([], l)
      }, guid: 1, proxy: function (e, n) {
        var i, r, o;
        return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (i = ot.call(arguments, 2), r = function () {
          return e.apply(n || this, i.concat(ot.call(arguments)))
        }, r.guid = e.guid = e.guid || ct.guid++, r) : t
      }, access: function (e, n, i, r, o, s, a) {
        var l = 0, u = e.length, c = null == i;
        if ("object" === ct.type(i)) {
          o = !0;
          for (l in i)ct.access(e, n, l, i[l], !0, s, a)
        } else if (r !== t && (o = !0, ct.isFunction(r) || (a = !0), c && (a ? (n.call(e, r), n = null) : (c = n, n = function (e, t, n) {
            return c.call(ct(e), n)
          })), n))for (; u > l; l++)n(e[l], i, a ? r : r.call(e[l], l, n(e[l], i)));
        return o ? e : c ? n.call(e) : u ? n(e[0], i) : s
      }, now: function () {
        return (new Date).getTime()
      }, swap: function (e, t, n, i) {
        var r, o, s = {};
        for (o in t)s[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)e.style[o] = s[o];
        return r
      }
    }), ct.ready.promise = function (t) {
      if (!X)if (X = ct.Deferred(), "complete" === G.readyState)setTimeout(ct.ready); else if (G.addEventListener)G.addEventListener("DOMContentLoaded", Tt, !1), e.addEventListener("load", Tt, !1); else {
        G.attachEvent("onreadystatechange", Tt), e.attachEvent("onload", Tt);
        var n = !1;
        try {
          n = null == e.frameElement && G.documentElement
        } catch (i) {
        }
        n && n.doScroll && function r() {
          if (!ct.isReady) {
            try {
              n.doScroll("left")
            } catch (e) {
              return setTimeout(r, 50)
            }
            Et(), ct.ready()
          }
        }()
      }
      return X.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
      et["[object " + t + "]"] = t.toLowerCase()
    }), Q = ct(G), function (e, t) {
      function n(e, t, n, i) {
        var r, o, s, a, l, u, c, p, f, d;
        if ((t ? t.ownerDocument || t : U) !== O && P(t), t = t || O, n = n || [], !e || "string" != typeof e)return n;
        if (1 !== (a = t.nodeType) && 9 !== a)return [];
        if (_ && !i) {
          if (r = Tt.exec(e))if (s = r[1]) {
            if (9 === a) {
              if (o = t.getElementById(s), !o || !o.parentNode)return n;
              if (o.id === s)return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && z(t, o) && o.id === s)return n.push(o), n
          } else {
            if (r[2])return ot.apply(n, t.getElementsByTagName(e)), n;
            if ((s = r[3]) && N.getElementsByClassName && t.getElementsByClassName)return ot.apply(n, t.getElementsByClassName(s)), n
          }
          if (N.qsa && (!B || !B.test(e))) {
            if (p = c = I, f = t, d = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
              for (u = m(e), (c = t.getAttribute("id")) ? p = c.replace(St, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)u[l] = p + g(u[l]);
              f = yt.test(e) && t.parentNode || t, d = u.join(",")
            }
            if (d)try {
              return ot.apply(n, f.querySelectorAll(d)), n
            } catch (h) {
            } finally {
              c || t.removeAttribute("id")
            }
          }
        }
        return E(e.replace(ht, "$1"), t, n, i)
      }

      function i(e) {
        return Ct.test(e + "")
      }

      function r() {
        function e(n, i) {
          return t.push(n += " ") > j.cacheLength && delete e[t.shift()], e[n] = i
        }

        var t = [];
        return e
      }

      function o(e) {
        return e[I] = !0, e
      }

      function s(e) {
        var t = O.createElement("div");
        try {
          return !!e(t)
        } catch (n) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function a(e, t, n) {
        e = e.split("|");
        for (var i, r = e.length, o = n ? null : t; r--;)(i = j.attrHandle[e[r]]) && i !== t || (j.attrHandle[e[r]] = o)
      }

      function l(e, t) {
        var n = e.getAttributeNode(t);
        return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
      }

      function u(e, t) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }

      function c(e) {
        return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
      }

      function p(e, t) {
        var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || et) - (~e.sourceIndex || et);
        if (i)return i;
        if (n)for (; n = n.nextSibling;)if (n === t)return -1;
        return e ? 1 : -1
      }

      function f(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e
        }
      }

      function d(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function h(e) {
        return o(function (t) {
          return t = +t, o(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
          })
        })
      }

      function m(e, t) {
        var i, r, o, s, a, l, u, c = J[e + " "];
        if (c)return t ? 0 : c.slice(0);
        for (a = e, l = [], u = j.preFilter; a;) {
          (!i || (r = mt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = gt.exec(a)) && (i = r.shift(), o.push({
            value: i,
            type: r[0].replace(ht, " ")
          }), a = a.slice(i.length));
          for (s in j.filter)!(r = wt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
            value: i,
            type: s,
            matches: r
          }), a = a.slice(i.length));
          if (!i)break
        }
        return t ? a.length : a ? n.error(e) : J(e, l).slice(0)
      }

      function g(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
        return i
      }

      function y(e, t, n) {
        var i = t.dir, r = n && "parentNode" === i, o = Q++;
        return t.first ? function (t, n, o) {
          for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
        } : function (t, n, s) {
          var a, l, u, c = X + " " + o;
          if (s) {
            for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, s))return !0
          } else for (; t = t[i];)if (1 === t.nodeType || r)if (u = t[I] || (t[I] = {}), (l = u[i]) && l[0] === c) {
            if ((a = l[1]) === !0 || a === D)return a === !0
          } else if (l = u[i] = [c], l[1] = e(t, n, s) || D, l[1] === !0)return !0
        }
      }

      function v(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
          return !0
        } : e[0]
      }

      function b(e, t, n, i, r) {
        for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
        return s
      }

      function x(e, t, n, i, r, s) {
        return i && !i[I] && (i = x(i)), r && !r[I] && (r = x(r, s)), o(function (o, s, a, l) {
          var u, c, p, f = [], d = [], h = s.length, m = o || T(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? m : b(m, f, e, a, l), y = n ? r || (o ? e : h || i) ? [] : s : g;
          if (n && n(g, y, a, l), i)for (u = b(y, d), i(u, [], a, l), c = u.length; c--;)(p = u[c]) && (y[d[c]] = !(g[d[c]] = p));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], c = y.length; c--;)(p = y[c]) && u.push(g[c] = p);
                r(null, y = [], u, l)
              }
              for (c = y.length; c--;)(p = y[c]) && (u = r ? at.call(o, p) : f[c]) > -1 && (o[u] = !(s[u] = p))
            }
          } else y = b(y === s ? y.splice(h, y.length) : y), r ? r(null, s, y, l) : ot.apply(s, y)
        })
      }

      function w(e) {
        for (var t, n, i, r = e.length, o = j.relative[e[0].type], s = o || j.relative[" "], a = o ? 1 : 0, l = y(function (e) {
          return e === t
        }, s, !0), u = y(function (e) {
          return at.call(t, e) > -1
        }, s, !0), c = [function (e, n, i) {
          return !o && (i || n !== F) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
        }]; r > a; a++)if (n = j.relative[e[a].type])c = [y(v(c), n)]; else {
          if (n = j.filter[e[a].type].apply(null, e[a].matches), n[I]) {
            for (i = ++a; r > i && !j.relative[e[i].type]; i++);
            return x(a > 1 && v(c), a > 1 && g(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ht, "$1"), n, i > a && w(e.slice(a, i)), r > i && w(e = e.slice(i)), r > i && g(e))
          }
          c.push(n)
        }
        return v(c)
      }

      function C(e, t) {
        var i = 0, r = t.length > 0, s = e.length > 0, a = function (o, a, l, u, c) {
          var p, f, d, h = [], m = 0, g = "0", y = o && [], v = null != c, x = F, w = o || s && j.find.TAG("*", c && a.parentNode || a), C = X += null == x ? 1 : Math.random() || .1;
          for (v && (F = a !== O && a, D = i); null != (p = w[g]); g++) {
            if (s && p) {
              for (f = 0; d = e[f++];)if (d(p, a, l)) {
                u.push(p);
                break
              }
              v && (X = C, D = ++i)
            }
            r && ((p = !d && p) && m--, o && y.push(p))
          }
          if (m += g, r && g !== m) {
            for (f = 0; d = t[f++];)d(y, h, a, l);
            if (o) {
              if (m > 0)for (; g--;)y[g] || h[g] || (h[g] = it.call(u));
              h = b(h)
            }
            ot.apply(u, h), v && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(u)
          }
          return v && (X = C, F = x), y
        };
        return r ? o(a) : a
      }

      function T(e, t, i) {
        for (var r = 0, o = t.length; o > r; r++)n(e, t[r], i);
        return i
      }

      function E(e, t, n, i) {
        var r, o, s, a, l, u = m(e);
        if (!i && 1 === u.length) {
          if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && N.getById && 9 === t.nodeType && _ && j.relative[o[1].type]) {
            if (t = (j.find.ID(s.matches[0].replace(Nt, $t), t) || [])[0], !t)return n;
            e = e.slice(o.shift().value.length)
          }
          for (r = wt.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !j.relative[a = s.type]);)if ((l = j.find[a]) && (i = l(s.matches[0].replace(Nt, $t), yt.test(o[0].type) && t.parentNode || t))) {
            if (o.splice(r, 1), e = i.length && g(o), !e)return ot.apply(n, i), n;
            break
          }
        }
        return H(e, u)(i, t, !_, n, yt.test(e)), n
      }

      function k() {
      }

      var S, N, D, j, A, L, H, F, M, P, O, q, _, B, W, R, z, I = "sizzle" + -new Date, U = e.document, X = 0, Q = 0, V = r(), J = r(), G = r(), Y = !1, K = function () {
        return 0
      }, Z = typeof t, et = 1 << 31, tt = {}.hasOwnProperty, nt = [], it = nt.pop, rt = nt.push, ot = nt.push, st = nt.slice, at = nt.indexOf || function (e) {
          for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
          return -1
        }, lt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ut = "[\\x20\\t\\r\\n\\f]", pt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ft = pt.replace("w", "w#"), $ = "\\[" + ut + "*(" + pt + ")" + ut + "*(?:([*^$|!~]?=)" + ut + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ft + ")|)|)" + ut + "*\\]", dt = ":(" + pt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", ht = RegExp("^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$", "g"), mt = RegExp("^" + ut + "*," + ut + "*"), gt = RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"), yt = RegExp(ut + "*[+~]"), vt = RegExp("=" + ut + "*([^\\]'\"]*)" + ut + "*\\]", "g"), bt = RegExp(dt), xt = RegExp("^" + ft + "$"), wt = {
        ID: RegExp("^#(" + pt + ")"),
        CLASS: RegExp("^\\.(" + pt + ")"),
        TAG: RegExp("^(" + pt.replace("w", "w*") + ")"),
        ATTR: RegExp("^" + $),
        PSEUDO: RegExp("^" + dt),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ut + "*(even|odd|(([+-]|)(\\d*)n|)" + ut + "*(?:([+-]|)" + ut + "*(\\d+)|))" + ut + "*\\)|)", "i"),
        bool: RegExp("^(?:" + lt + ")$", "i"),
        needsContext: RegExp("^" + ut + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ut + "*((?:-\\d)?\\d*)" + ut + "*\\)|)(?=[^-]|$)", "i")
      }, Ct = /^[^{]+\{\s*\[native \w/, Tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Et = /^(?:input|select|textarea|button)$/i, kt = /^h\d$/i, St = /'|\\/g, Nt = RegExp("\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)", "ig"), $t = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
      };
      try {
        ot.apply(nt = st.call(U.childNodes), U.childNodes), nt[U.childNodes.length].nodeType
      } catch (Dt) {
        ot = {
          apply: nt.length ? function (e, t) {
            rt.apply(e, st.call(t))
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }
      L = n.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      }, N = n.support = {}, P = n.setDocument = function (e) {
        var n = e ? e.ownerDocument || e : U, r = n.parentWindow;
        return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, q = n.documentElement, _ = !L(n), r && r.frameElement && r.attachEvent("onbeforeunload", function () {
          P()
        }), N.attributes = s(function (e) {
          return e.innerHTML = "<a href='#'></a>", a("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")), a(lt, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
        }), N.input = s(function (e) {
          return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }), a("value", c, N.attributes && N.input), N.getElementsByTagName = s(function (e) {
          return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
        }), N.getElementsByClassName = s(function (e) {
          return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
        }), N.getById = s(function (e) {
          return q.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
        }), N.getById ? (j.find.ID = function (e, t) {
          if (typeof t.getElementById !== Z && _) {
            var n = t.getElementById(e);
            return n && n.parentNode ? [n] : []
          }
        }, j.filter.ID = function (e) {
          var t = e.replace(Nt, $t);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }) : (delete j.find.ID, j.filter.ID = function (e) {
          var t = e.replace(Nt, $t);
          return function (e) {
            var n = typeof e.getAttributeNode !== Z && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), j.find.TAG = N.getElementsByTagName ? function (e, n) {
          return typeof n.getElementsByTagName !== Z ? n.getElementsByTagName(e) : t
        } : function (e, t) {
          var n, i = [], r = 0, o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[r++];)1 === n.nodeType && i.push(n);
            return i
          }
          return o
        }, j.find.CLASS = N.getElementsByClassName && function (e, n) {
            return typeof n.getElementsByClassName !== Z && _ ? n.getElementsByClassName(e) : t
          }, W = [], B = [], (N.qsa = i(n.querySelectorAll)) && (s(function (e) {
          e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || B.push("\\[" + ut + "*(?:value|" + lt + ")"), e.querySelectorAll(":checked").length || B.push(":checked")
        }), s(function (e) {
          var t = n.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && B.push("[*^$]=" + ut + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
        })), (N.matchesSelector = i(R = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && s(function (e) {
          N.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), W.push("!=", dt)
        }), B = B.length && RegExp(B.join("|")), W = W.length && RegExp(W.join("|")), z = i(q.contains) || q.compareDocumentPosition ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function (e, t) {
          if (t)for (; t = t.parentNode;)if (t === e)return !0;
          return !1
        }, N.sortDetached = s(function (e) {
          return 1 & e.compareDocumentPosition(n.createElement("div"))
        }), K = q.compareDocumentPosition ? function (e, t) {
          if (e === t)return Y = !0, 0;
          var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
          return i ? 1 & i || !N.sortDetached && t.compareDocumentPosition(e) === i ? e === n || z(U, e) ? -1 : t === n || z(U, t) ? 1 : M ? at.call(M, e) - at.call(M, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : function (e, t) {
          var i, r = 0, o = e.parentNode, s = t.parentNode, a = [e], l = [t];
          if (e === t)return Y = !0, 0;
          if (!o || !s)return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : M ? at.call(M, e) - at.call(M, t) : 0;
          if (o === s)return p(e, t);
          for (i = e; i = i.parentNode;)a.unshift(i);
          for (i = t; i = i.parentNode;)l.unshift(i);
          for (; a[r] === l[r];)r++;
          return r ? p(a[r], l[r]) : a[r] === U ? -1 : l[r] === U ? 1 : 0
        }, n) : O
      }, n.matches = function (e, t) {
        return n(e, null, null, t)
      }, n.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== O && P(e), t = t.replace(vt, "='$1']"), !(!N.matchesSelector || !_ || W && W.test(t) || B && B.test(t)))try {
          var i = R.call(e, t);
          if (i || N.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
        } catch (r) {
        }
        return n(t, O, null, [e]).length > 0
      }, n.contains = function (e, t) {
        return (e.ownerDocument || e) !== O && P(e), z(e, t)
      }, n.attr = function (e, n) {
        (e.ownerDocument || e) !== O && P(e);
        var i = j.attrHandle[n.toLowerCase()], r = i && tt.call(j.attrHandle, n.toLowerCase()) ? i(e, n, !_) : t;
        return r === t ? N.attributes || !_ ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
      }, n.error = function (e) {
        throw Error("Syntax error, unrecognized expression: " + e)
      }, n.uniqueSort = function (e) {
        var t, n = [], i = 0, r = 0;
        if (Y = !N.detectDuplicates, M = !N.sortStable && e.slice(0), e.sort(K), Y) {
          for (; t = e[r++];)t === e[r] && (i = n.push(r));
          for (; i--;)e.splice(n[i], 1)
        }
        return e
      }, A = n.getText = function (e) {
        var t, n = "", i = 0, r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent)return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling)n += A(e)
          } else if (3 === r || 4 === r)return e.nodeValue
        } else for (; t = e[i]; i++)n += A(t);
        return n
      }, j = n.selectors = {
        cacheLength: 50,
        createPseudo: o,
        match: wt,
        attrHandle: {},
        find: {},
        relative: {
          ">": {dir: "parentNode", first: !0},
          " ": {dir: "parentNode"},
          "+": {dir: "previousSibling", first: !0},
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(Nt, $t), e[3] = (e[4] || e[5] || "").replace(Nt, $t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
          }, PSEUDO: function (e) {
            var n, i = !e[5] && e[2];
            return wt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && bt.test(i) && (n = m(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Nt, $t).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          }, CLASS: function (e) {
            var t = V[e + " "];
            return t || (t = RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) && V(e, function (e) {
                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Z && e.getAttribute("class") || "")
              })
          }, ATTR: function (e, t, i) {
            return function (r) {
              var o = n.attr(r, e);
              return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
            }
          }, CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
            return 1 === i && 0 === r ? function (e) {
              return !!e.parentNode
            } : function (t, n, l) {
              var u, c, p, f, d, h, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !l && !a;
              if (g) {
                if (o) {
                  for (; m;) {
                    for (p = t; p = p[m];)if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return !1;
                    h = m = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [s ? g.firstChild : g.lastChild], s && v) {
                  for (c = g[I] || (g[I] = {}), u = c[e] || [], d = u[0] === X && u[1], f = u[0] === X && u[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (f = d = 0) || h.pop();)if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [X, d, f];
                    break
                  }
                } else if (v && (u = (t[I] || (t[I] = {}))[e]) && u[0] === X)f = u[1]; else for (; (p = ++d && p && p[m] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[I] || (p[I] = {}))[e] = [X, f]), p !== t)););
                return f -= r, f === i || 0 === f % i && f / i >= 0
              }
            }
          }, PSEUDO: function (e, t) {
            var i, r = j.pseudos[e] || j.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
            return r[I] ? r(t) : r.length > 1 ? (i = [e, e, "", t], j.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
              for (var i, o = r(e, t), s = o.length; s--;)i = at.call(e, o[s]), e[i] = !(n[i] = o[s])
            }) : function (e) {
              return r(e, 0, i)
            }) : r
          }
        },
        pseudos: {
          not: o(function (e) {
            var t = [], n = [], i = H(e.replace(ht, "$1"));
            return i[I] ? o(function (e, t, n, r) {
              for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
            }) : function (e, r, o) {
              return t[0] = e, i(t, null, o, n), !n.pop()
            }
          }), has: o(function (e) {
            return function (t) {
              return n(e, t).length > 0
            }
          }), contains: o(function (e) {
            return function (t) {
              return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
            }
          }), lang: o(function (e) {
            return xt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Nt, $t).toLowerCase(), function (t) {
              var n;
              do if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
          }), target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          }, root: function (e) {
            return e === q
          }, focus: function (e) {
            return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          }, enabled: function (e) {
            return e.disabled === !1
          }, disabled: function (e) {
            return e.disabled === !0
          }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
          }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
            return !0
          }, parent: function (e) {
            return !j.pseudos.empty(e)
          }, header: function (e) {
            return kt.test(e.nodeName)
          }, input: function (e) {
            return Et.test(e.nodeName)
          }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          }, text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
          }, first: h(function () {
            return [0]
          }), last: h(function (e, t) {
            return [t - 1]
          }), eq: h(function (e, t, n) {
            return [0 > n ? n + t : n]
          }), even: h(function (e, t) {
            for (var n = 0; t > n; n += 2)e.push(n);
            return e
          }), odd: h(function (e, t) {
            for (var n = 1; t > n; n += 2)e.push(n);
            return e
          }), lt: h(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
            return e
          }), gt: h(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; t > ++i;)e.push(i);
            return e
          })
        }
      };
      for (S in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})j.pseudos[S] = f(S);
      for (S in{submit: !0, reset: !0})j.pseudos[S] = d(S);
      H = n.compile = function (e, t) {
        var n, i = [], r = [], o = G[e + " "];
        if (!o) {
          for (t || (t = m(e)), n = t.length; n--;)o = w(t[n]), o[I] ? i.push(o) : r.push(o);
          o = G(e, C(r, i))
        }
        return o
      }, j.pseudos.nth = j.pseudos.eq, k.prototype = j.filters = j.pseudos, j.setFilters = new k, N.sortStable = I.split("").sort(K).join("") === I, P(), [0, 0].sort(K), N.detectDuplicates = Y, ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(e);
    var kt = {};
    ct.Callbacks = function (e) {
      e = "string" == typeof e ? kt[e] || i(e) : ct.extend({}, e);
      var n, r, o, s, a, l, u = [], c = !e.once && [], p = function (t) {
        for (r = e.memory && t, o = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;
          break
        }
        n = !1, u && (c ? c.length && p(c.shift()) : r ? u = [] : f.disable())
      }, f = {
        add: function () {
          if (u) {
            var t = u.length;
            !function i(t) {
              ct.each(t, function (t, n) {
                var r = ct.type(n);
                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
              })
            }(arguments), n ? s = u.length : r && (l = t, p(r))
          }
          return this
        }, remove: function () {
          return u && ct.each(arguments, function (e, t) {
            for (var i; (i = ct.inArray(t, u, i)) > -1;)u.splice(i, 1), n && (s >= i && s--, a >= i && a--)
          }), this
        }, has: function (e) {
          return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
        }, empty: function () {
          return u = [], s = 0, this
        }, disable: function () {
          return u = c = r = t, this
        }, disabled: function () {
          return !u
        }, lock: function () {
          return c = t, r || f.disable(), this
        }, locked: function () {
          return !c
        }, fireWith: function (e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], !u || o && !c || (n ? c.push(t) : p(t)), this
        }, fire: function () {
          return f.fireWith(this, arguments), this
        }, fired: function () {
          return !!o
        }
      };
      return f
    }, ct.extend({
      Deferred: function (e) {
        var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]], n = "pending", i = {
          state: function () {
            return n
          }, always: function () {
            return r.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return ct.Deferred(function (n) {
              ct.each(t, function (t, o) {
                var s = o[0], a = ct.isFunction(e[t]) && e[t];
                r[o[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? ct.extend(e, i) : i
          }
        }, r = {};
        return i.pipe = i.then, ct.each(t, function (e, o) {
          var s = o[2], a = o[3];
          i[o[1]] = s.add, a && s.add(function () {
            n = a
          }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
            return r[o[0] + "With"](this === r ? i : this, arguments), this
          }, r[o[0] + "With"] = s.fireWith
        }), i.promise(r), e && e.call(r, r), r
      }, when: function (e) {
        var t = 0, n = ot.call(arguments), i = n.length, r = 1 !== i || e && ct.isFunction(e.promise) ? i : 0, o = 1 === r ? e : ct.Deferred(), s = function (e, t, n) {
          return function (i) {
            t[e] = this, n[e] = arguments.length > 1 ? ot.call(arguments) : i, n === a ? o.notifyWith(t, n) : --r || o.resolveWith(t, n)
          }
        }, a, l, u;
        if (i > 1)for (a = Array(i), l = Array(i), u = Array(i); i > t; t++)n[t] && ct.isFunction(n[t].promise) ? n[t].promise().done(s(t, u, n)).fail(o.reject).progress(s(t, l, a)) : --r;
        return r || o.resolveWith(u, n), o.promise()
      }
    }), ct.support = function (t) {
      var n, i, r, o, s, a, l, u, c, p = G.createElement("div");
      if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], i = p.getElementsByTagName("a")[0], !i || !i.style || !n.length)return t;
      o = G.createElement("select"), a = o.appendChild(G.createElement("option")), r = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!r.value, t.optSelected = a.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
      try {
        delete p.test
      } catch (f) {
        t.deleteExpando = !1
      }
      r = G.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(r), t.appendChecked = r.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
        t.noCloneEvent = !1
      }), p.cloneNode(!0).click());
      for (c in{
        submit: !0,
        change: !0,
        focusin: !0
      })p.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || p.attributes[l].expando === !1;
      p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
      for (c in ct(t))break;
      return t.ownLast = "0" !== c, ct(function () {
        var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = G.getElementsByTagName("body")[0];
        s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = p.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {zoom: 1} : {}, function () {
          t.boxSizing = 4 === p.offsetWidth
        }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {width: "4px"}).width, i = p.appendChild(G.createElement("div")), i.style.cssText = p.style.cssText = o, i.style.marginRight = i.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== V && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = p = r = i = null)
      }), n = o = s = a = i = r = null, t
    }({});
    var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Nt = /([A-Z])/g;
    ct.extend({
      cache: {},
      noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
      hasData: function (e) {
        return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !s(e)
      },
      data: function (e, t, n) {
        return r(e, t, n)
      },
      removeData: function (e, t) {
        return o(e, t)
      },
      _data: function (e, t, n) {
        return r(e, t, n, !0)
      },
      _removeData: function (e, t) {
        return o(e, t, !0)
      },
      acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
        var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
        return !t || t !== !0 && e.getAttribute("classid") === t
      }
    }), ct.fn.extend({
      data: function (e, n) {
        var i, r, o = null, s = 0, a = this[0];
        if (e === t) {
          if (this.length && (o = ct.data(a), 1 === a.nodeType && !ct._data(a, "parsedAttrs"))) {
            for (i = a.attributes; i.length > s; s++)r = i[s].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), $(a, r, o[r]));
            ct._data(a, "parsedAttrs", !0)
          }
          return o
        }
        return "object" == typeof e ? this.each(function () {
          ct.data(this, e)
        }) : arguments.length > 1 ? this.each(function () {
          ct.data(this, e, n)
        }) : a ? $(a, e, ct.data(a, e)) : null
      }, removeData: function (e) {
        return this.each(function () {
          ct.removeData(this, e)
        })
      }
    }), ct.extend({
      queue: function (e, n, i) {
        var r;
        return e ? (n = (n || "fx") + "queue", r = ct._data(e, n), i && (!r || ct.isArray(i) ? r = ct._data(e, n, ct.makeArray(i)) : r.push(i)), r || []) : t
      }, dequeue: function (e, t) {
        t = t || "fx";
        var n = ct.queue(e, t), i = n.length, r = n.shift(), o = ct._queueHooks(e, t), s = function () {
          ct.dequeue(e, t)
        };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return ct._data(e, n) || ct._data(e, n, {
            empty: ct.Callbacks("once memory").add(function () {
              ct._removeData(e, t + "queue"), ct._removeData(e, n)
            })
          })
      }
    }), ct.fn.extend({
      queue: function (e, n) {
        var i = 2;
        return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
          var t = ct.queue(this, e, n);
          ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
        })
      }, dequeue: function (e) {
        return this.each(function () {
          ct.dequeue(this, e)
        })
      }, delay: function (e, t) {
        return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
          var i = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(i)
          }
        })
      }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
      }, promise: function (e, n) {
        var i, r = 1, o = ct.Deferred(), s = this, a = this.length, l = function () {
          --r || o.resolveWith(s, [s])
        };
        for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;)i = ct._data(s[a], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
        return l(), o.promise(n)
      }
    });
    var $t, Dt, jt = /[\t\r\n\f]/g, At = /\r/g, Lt = /^(?:input|select|textarea|button|object)$/i, Ht = /^(?:a|area)$/i, Ft = /^(?:checked|selected)$/i, Mt = ct.support.getSetAttribute, Pt = ct.support.input;
    ct.fn.extend({
      attr: function (e, t) {
        return ct.access(this, ct.attr, e, t, arguments.length > 1)
      }, removeAttr: function (e) {
        return this.each(function () {
          ct.removeAttr(this, e)
        })
      }, prop: function (e, t) {
        return ct.access(this, ct.prop, e, t, arguments.length > 1)
      }, removeProp: function (e) {
        return e = ct.propFix[e] || e, this.each(function () {
          try {
            this[e] = t, delete this[e]
          } catch (n) {
          }
        })
      }, addClass: function (e) {
        var t, n, i, r, o, s = 0, a = this.length, l = "string" == typeof e && e;
        if (ct.isFunction(e))return this.each(function (t) {
          ct(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(ft) || []; a > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
          for (o = 0; r = t[o++];)0 > i.indexOf(" " + r + " ") && (i += r + " ");
          n.className = ct.trim(i)
        }
        return this
      }, removeClass: function (e) {
        var t, n, i, r, o, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (ct.isFunction(e))return this.each(function (t) {
          ct(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(ft) || []; a > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
          for (o = 0; r = t[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
          n.className = e ? ct.trim(i) : ""
        }
        return this
      }, toggleClass: function (e, t) {
        var n = typeof e, i = "boolean" == typeof t;
        return this.each(ct.isFunction(e) ? function (n) {
          ct(this).toggleClass(e.call(this, n, this.className, t), t)
        } : function () {
          if ("string" === n)for (var r, o = 0, s = ct(this), a = t, l = e.match(ft) || []; r = l[o++];)a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r); else(n === V || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
        })
      }, hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0)return !0;
        return !1
      }, val: function (e) {
        var n, i, r, o = this[0];
        return arguments.length ? (r = ct.isFunction(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = r ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
            return null == e ? "" : e + ""
          })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, o, "value") !== t || (this.value = o))
        })) : o ? (i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get"in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)) : void 0
      }
    }), ct.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ct.find.attr(e, "value");
            return null != t ? t : e.text
          }
        }, select: {
          get: function (e) {
            for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
              if (t = ct(n).val(), o)return t;
              s.push(t)
            }
            return s
          }, set: function (e, t) {
            for (var n, i, r = e.options, o = ct.makeArray(t), s = r.length; s--;)i = r[s], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }, attr: function (e, n, i) {
        var r, o, s = e.nodeType;
        return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === V ? ct.prop(e, n, i) : (1 === s && ct.isXMLDoc(e) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? Dt : $t)), i === t ? r && "get"in r && null !== (o = r.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== i ? r && "set"in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ct.removeAttr(e, n), t)) : void 0
      }, removeAttr: function (e, t) {
        var n, i, r = 0, o = t && t.match(ft);
        if (o && 1 === e.nodeType)for (; n = o[r++];)i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Pt && Mt || !Ft.test(n) ? e[i] = !1 : e[ct.camelCase("default-" + n)] = e[i] = !1 : ct.attr(e, n, ""), e.removeAttribute(Mt ? n : i)
      }, attrHooks: {
        type: {
          set: function (e, t) {
            if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, i) {
        var r, o, s, a = e.nodeType;
        return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !ct.isXMLDoc(e), s && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== t ? o && "set"in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get"in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
      }, propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ct.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }
    }), Dt = {
      set: function (e, t, n) {
        return t === !1 ? ct.removeAttr(e, n) : Pt && Mt || !Ft.test(n) ? e.setAttribute(!Mt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
      }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
      var i = ct.expr.attrHandle[n] || ct.find.attr;
      ct.expr.attrHandle[n] = Pt && Mt || !Ft.test(n) ? function (e, n, r) {
        var o = ct.expr.attrHandle[n], s = r ? t : (ct.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
        return ct.expr.attrHandle[n] = o, s
      } : function (e, n, i) {
        return i ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
      }
    }), Pt && Mt || (ct.attrHooks.value = {
      set: function (e, n, i) {
        return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : $t && $t.set(e, n, i)
      }
    }), Mt || ($t = {
      set: function (e, n, i) {
        var r = e.getAttributeNode(i);
        return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
      }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, i) {
      var r;
      return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }, ct.valHooks.button = {
      get: function (e, n) {
        var i = e.getAttributeNode(n);
        return i && i.specified ? i.value : t
      }, set: $t.set
    }, ct.attrHooks.contenteditable = {
      set: function (e, t, n) {
        $t.set(e, "" === t ? !1 : t, n)
      }
    }, ct.each(["width", "height"], function (e, n) {
      ct.attrHooks[n] = {
        set: function (e, i) {
          return "" === i ? (e.setAttribute(n, "auto"), i) : t
        }
      }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
      ct.propHooks[t] = {
        get: function (e) {
          return e.getAttribute(t, 4)
        }
      }
    }), ct.support.style || (ct.attrHooks.style = {
      get: function (e) {
        return e.style.cssText || t
      }, set: function (e, t) {
        return e.style.cssText = t + ""
      }
    }), ct.support.optSelected || (ct.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function () {
      ct.valHooks[this] = {
        set: function (e, n) {
          return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
        }
      }, ct.support.checkOn || (ct.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var Ot = /^(?:input|select|textarea)$/i, qt = /^key/, _t = /^(?:mouse|contextmenu)|click/, Bt = /^(?:focusinfocus|focusoutblur)$/, Wt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
      global: {},
      add: function (e, n, i, r, o) {
        var s, a, l, u, c, p, f, d, h, m, g, y = ct._data(e);
        if (y) {
          for (i.handler && (u = i, i = u.handler, o = u.selector), i.guid || (i.guid = ct.guid++), (a = y.events) || (a = y.events = {}), (p = y.handle) || (p = y.handle = function (e) {
            return typeof ct === V || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(p.elem, arguments)
          }, p.elem = e), n = (n || "").match(ft) || [""], l = n.length; l--;)s = Wt.exec(n[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h && (c = ct.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ct.event.special[h] || {}, f = ct.extend({
            type: h,
            origType: g,
            data: r,
            handler: i,
            guid: i.guid,
            selector: o,
            needsContext: o && ct.expr.match.needsContext.test(o),
            namespace: m.join(".")
          }, u), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, r, m, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ct.event.global[h] = !0);
          e = null
        }
      },
      remove: function (e, t, n, i, r) {
        var o, s, a, l, u, c, p, f, d, h, m, g = ct.hasData(e) && ct._data(e);
        if (g && (c = g.events)) {
          for (t = (t || "").match(ft) || [""], u = t.length; u--;)if (a = Wt.exec(t[u]) || [], d = m = a[1], h = (a[2] || "").split(".").sort(), d) {
            for (p = ct.event.special[d] || {}, d = (i ? p.delegateType : p.bindType) || d, f = c[d] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;)s = f[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, p.remove && p.remove.call(e, s));
            l && !f.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || ct.removeEvent(e, d, g.handle), delete c[d])
          } else for (d in c)ct.event.remove(e, d + t[u], n, i, !0);
          ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
        }
      },
      trigger: function (n, i, r, o) {
        var s, a, l, u, c, p, f, d = [r || G], h = lt.call(n, "type") ? n.type : n, m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
        if (l = p = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Bt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[h] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
          if (!o && !c.noBubble && !ct.isWindow(r)) {
            for (u = c.delegateType || h, Bt.test(u + h) || (l = l.parentNode); l; l = l.parentNode)d.push(l), p = l;
            p === (r.ownerDocument || G) && d.push(p.defaultView || p.parentWindow || e)
          }
          for (f = 0; (l = d[f++]) && !n.isPropagationStopped();)n.type = f > 1 ? u : c.bindType || h, s = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && ct.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
          if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), i) === !1) && ct.acceptData(r) && a && r[h] && !ct.isWindow(r)) {
            p = r[a], p && (r[a] = null), ct.event.triggered = h;
            try {
              r[h]()
            } catch (g) {
            }
            ct.event.triggered = t, p && (r[a] = p)
          }
          return n.result
        }
      },
      dispatch: function (e) {
        e = ct.event.fix(e);
        var n, i, r, o, s, a = [], l = ot.call(arguments), u = (ct._data(this, "events") || {})[e.type] || [], c = ct.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
          for (a = ct.event.handlers.call(this, e, u), n = 0; (o = a[n++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, s = 0; (r = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function (e, n) {
        var i, r, o, s, a = [], l = n.delegateCount, u = e.target;
        if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
          for (o = [], s = 0; l > s; s++)r = n[s], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? ct(i, this).index(u) >= 0 : ct.find(i, this, null, [u]).length), o[i] && o.push(r);
          o.length && a.push({elem: u, handlers: o})
        }
        return n.length > l && a.push({elem: this, handlers: n.slice(l)}), a
      },
      fix: function (e) {
        if (e[ct.expando])return e;
        var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
        for (s || (this.fixHooks[r] = s = _t.test(r) ? this.mouseHooks : qt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ct.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
        return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "), filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, n) {
          var i, r, o, s = n.button, a = n.fromElement;
          return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
        }
      },
      special: {
        load: {noBubble: !0}, focus: {
          trigger: function () {
            if (this !== u() && this.focus)try {
              return this.focus(), !1
            } catch (e) {
            }
          }, delegateType: "focusin"
        }, blur: {
          trigger: function () {
            return this === u() && this.blur ? (this.blur(), !1) : t
          }, delegateType: "focusout"
        }, click: {
          trigger: function () {
            return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
          }, _default: function (e) {
            return ct.nodeName(e.target, "a")
          }
        }, beforeunload: {
          postDispatch: function (e) {
            e.result !== t && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function (e, t, n, i) {
        var r = ct.extend(new ct.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        i ? ct.event.trigger(r, null, t) : ct.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
      }
    }, ct.removeEvent = G.removeEventListener ? function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
      var i = "on" + t;
      e.detachEvent && (typeof e[i] === V && (e[i] = null), e.detachEvent(i, n))
    }, ct.Event = function (e, n) {
      return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : l) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
    }, ct.Event.prototype = {
      isDefaultPrevented: l,
      isPropagationStopped: l,
      isImmediatePropagationStopped: l,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = a, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = a, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = a, this.stopPropagation()
      }
    }, ct.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
      ct.event.special[e] = {
        delegateType: t, bindType: t, handle: function (e) {
          var n, i = this, r = e.relatedTarget, o = e.handleObj;
          return (!r || r !== i && !ct.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
      setup: function () {
        return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
          var n = e.target, i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
          i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function (e) {
            e._submit_bubble = !0
          }), ct._data(i, "submitBubbles", !0))
        }), t)
      }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
      }, teardown: function () {
        return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
      }
    }), ct.support.changeBubbles || (ct.event.special.change = {
      setup: function () {
        return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
          "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), ct.event.add(this, "click._change", function (e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
        })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
          var t = e.target;
          Ot.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
            !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
          }), ct._data(t, "changeBubbles", !0))
        }), t)
      }, handle: function (e) {
        var n = e.target;
        return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
      }, teardown: function () {
        return ct.event.remove(this, "._change"), !Ot.test(this.nodeName)
      }
    }), ct.support.focusinBubbles || ct.each({focus: "focusin", blur: "focusout"}, function (e, t) {
      var n = 0, i = function (e) {
        ct.event.simulate(t, e.target, ct.event.fix(e), !0)
      };
      ct.event.special[t] = {
        setup: function () {
          0 === n++ && G.addEventListener(e, i, !0)
        }, teardown: function () {
          0 === --n && G.removeEventListener(e, i, !0)
        }
      }
    }), ct.fn.extend({
      on: function (e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
          "string" != typeof n && (i = i || n, n = t);
          for (s in e)this.on(s, n, i, e[s], o);
          return this
        }
        if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1)r = l; else if (!r)return this;
        return 1 === o && (a = r, r = function (e) {
          return ct().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = ct.guid++)), this.each(function () {
          ct.event.add(this, e, r, i, n)
        })
      }, one: function (e, t, n, i) {
        return this.on(e, t, n, i, 1)
      }, off: function (e, n, i) {
        var r, o;
        if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ct(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (o in e)this.off(o, n, e[o]);
          return this
        }
        return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = l), this.each(function () {
          ct.event.remove(this, e, i, n)
        })
      }, trigger: function (e, t) {
        return this.each(function () {
          ct.event.trigger(e, t, this)
        })
      }, triggerHandler: function (e, n) {
        var i = this[0];
        return i ? ct.event.trigger(e, n, i, !0) : t
      }
    });
    var Rt = /^.[^:#\[\.,]*$/, zt = /^(?:parents|prev(?:Until|All))/, It = ct.expr.match.needsContext, Ut = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    ct.fn.extend({
      find: function (e) {
        var t, n = [], i = this, r = i.length;
        if ("string" != typeof e)return this.pushStack(ct(e).filter(function () {
          for (t = 0; r > t; t++)if (ct.contains(i[t], this))return !0
        }));
        for (t = 0; r > t; t++)ct.find(e, i[t], n);
        return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
      }, has: function (e) {
        var t, n = ct(e, this), i = n.length;
        return this.filter(function () {
          for (t = 0; i > t; t++)if (ct.contains(this, n[t]))return !0
        })
      }, not: function (e) {
        return this.pushStack(p(this, e || [], !0))
      }, filter: function (e) {
        return this.pushStack(p(this, e || [], !1))
      }, is: function (e) {
        return !!p(this, "string" == typeof e && It.test(e) ? ct(e) : e || [], !1).length
      }, closest: function (e, t) {
        for (var n, i = 0, r = this.length, o = [], s = It.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
          n = o.push(n);
          break
        }
        return this.pushStack(o.length > 1 ? ct.unique(o) : o)
      }, index: function (e) {
        return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }, add: function (e, t) {
        var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e), i = ct.merge(this.get(), n);
        return this.pushStack(ct.unique(i))
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), ct.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      }, parents: function (e) {
        return ct.dir(e, "parentNode")
      }, parentsUntil: function (e, t, n) {
        return ct.dir(e, "parentNode", n)
      }, next: function (e) {
        return c(e, "nextSibling")
      }, prev: function (e) {
        return c(e, "previousSibling")
      }, nextAll: function (e) {
        return ct.dir(e, "nextSibling")
      }, prevAll: function (e) {
        return ct.dir(e, "previousSibling")
      }, nextUntil: function (e, t, n) {
        return ct.dir(e, "nextSibling", n)
      }, prevUntil: function (e, t, n) {
        return ct.dir(e, "previousSibling", n)
      }, siblings: function (e) {
        return ct.sibling((e.parentNode || {}).firstChild, e)
      }, children: function (e) {
        return ct.sibling(e.firstChild)
      }, contents: function (e) {
        return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
      }
    }, function (e, t) {
      ct.fn[e] = function (n, i) {
        var r = ct.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && (Ut[e] || (r = ct.unique(r)), zt.test(e) && (r = r.reverse())), this.pushStack(r)
      }
    }), ct.extend({
      filter: function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ct.find.matchesSelector(i, e) ? [i] : [] : ct.find.matches(e, ct.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      }, dir: function (e, n, i) {
        for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ct(o).is(i));)1 === o.nodeType && r.push(o), o = o[n];
        return r
      }, sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
      }
    });
    var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Qt = / jQuery\d+="(?:null|\d+)"/g, Vt = RegExp("<(?:" + Xt + ")[\\s/>]", "i"), Jt = /^\s+/, Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Yt = /<([\w:]+)/, Kt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, ln = f(G), un = ln.appendChild(G.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ct.fn.extend({
      text: function (e) {
        return ct.access(this, function (e) {
          return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
        }, null, e, arguments.length)
      }, append: function () {
        return this.domManip(arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = d(this, e);
            t.appendChild(e)
          }
        })
      }, prepend: function () {
        return this.domManip(arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = d(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      }, before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      }, after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      }, remove: function (e, t) {
        for (var n, i = e ? ct.filter(e, this) : this, r = 0; null != (n = i[r]); r++)t || 1 !== n.nodeType || ct.cleanData(b(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n));
        return this
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ct.cleanData(b(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
          e.options && ct.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
          return ct.clone(this, e, t)
        })
      }, html: function (e) {
        return ct.access(this, function (e) {
          var n = this[0] || {}, i = 0, r = this.length;
          if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(Qt, "") : t;
          if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Vt.test(e) || !ct.support.leadingWhitespace && Jt.test(e) || an[(Yt.exec(e) || ["", ""])[1].toLowerCase()])) {
            e = e.replace(Gt, "<$1></$2>");
            try {
              for (; r > i; i++)n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(b(n, !1)), n.innerHTML = e);
              n = 0
            } catch (o) {
            }
          }
          n && this.empty().append(e)
        }, null, e, arguments.length)
      }, replaceWith: function () {
        var e = ct.map(this, function (e) {
          return [e.nextSibling, e.parentNode]
        }), t = 0;
        return this.domManip(arguments, function (n) {
          var i = e[t++], r = e[t++];
          r && (i && i.parentNode !== r && (i = this.nextSibling), ct(this).remove(), r.insertBefore(n, i))
        }, !0), t ? this : this.remove()
      }, detach: function (e) {
        return this.remove(e, !0)
      }, domManip: function (e, t, n) {
        e = it.apply([], e);
        var i, r, o, s, a, l, u = 0, c = this.length, p = this, f = c - 1, d = e[0], g = ct.isFunction(d);
        if (g || !(1 >= c || "string" != typeof d || ct.support.checkClone) && nn.test(d))return this.each(function (i) {
          var r = p.eq(i);
          g && (e[0] = d.call(this, i, r.html())), r.domManip(e, t, n)
        });
        if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
          for (s = ct.map(b(l, "script"), h), o = s.length; c > u; u++)r = l, u !== f && (r = ct.clone(r, !0, !0), o && ct.merge(s, b(r, "script"))), t.call(this[u], r, u);
          if (o)for (a = s[s.length - 1].ownerDocument, ct.map(s, m), u = 0; o > u; u++)r = s[u], rn.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(a, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(sn, "")));
          l = i = null
        }
        return this
      }
    }), ct.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      ct.fn[e] = function (e) {
        for (var n, i = 0, r = [], o = ct(e), s = o.length - 1; s >= i; i++)n = i === s ? this : this.clone(!0), ct(o[i])[t](n), rt.apply(r, n.get());
        return this.pushStack(r)
      }
    }), ct.extend({
      clone: function (e, t, n) {
        var i, r, o, s, a, l = ct.contains(e.ownerDocument, e);
        if (ct.support.html5Clone || ct.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(o = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))for (i = b(o), a = b(e), s = 0; null != (r = a[s]); ++s)i[s] && v(r, i[s]);
        if (t)if (n)for (a = a || b(e), i = i || b(o), s = 0; null != (r = a[s]); s++)y(r, i[s]); else y(e, o);
        return i = b(o, "script"), i.length > 0 && g(i, !l && b(e, "script")), i = a = r = null, o
      }, buildFragment: function (e, t, n, i) {
        for (var r, o, s, a, l, u, c, p = e.length, d = f(t), h = [], m = 0; p > m; m++)if (o = e[m], o || 0 === o)if ("object" === ct.type(o))ct.merge(h, o.nodeType ? [o] : o); else if (Zt.test(o)) {
          for (a = a || d.appendChild(t.createElement("div")), l = (Yt.exec(o) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], r = c[0]; r--;)a = a.lastChild;
          if (!ct.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ct.support.tbody)for (o = "table" !== l || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;)ct.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
          for (ct.merge(h, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
          a = d.lastChild
        } else h.push(t.createTextNode(o));
        for (a && d.removeChild(a), ct.support.appendChecked || ct.grep(b(h, "input"), x), m = 0; o = h[m++];)if ((!i || -1 === ct.inArray(o, i)) && (s = ct.contains(o.ownerDocument, o), a = b(d.appendChild(o), "script"), s && g(a), n))for (r = 0; o = a[r++];)rn.test(o.type || "") && n.push(o);
        return a = null, d
      }, cleanData: function (e, t) {
        for (var n, i, r, o, s = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[s]); s++)if ((t || ct.acceptData(n)) && (r = n[a], o = r && l[r])) {
          if (o.events)for (i in o.events)c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
          l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== V ? n.removeAttribute(a) : n[a] = null, tt.push(r))
        }
      }, _evalUrl: function (e) {
        return ct.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
      }
    }), ct.fn.extend({
      wrapAll: function (e) {
        if (ct.isFunction(e))return this.each(function (t) {
          ct(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
          var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      }, wrapInner: function (e) {
        return this.each(ct.isFunction(e) ? function (t) {
          ct(this).wrapInner(e.call(this, t))
        } : function () {
          var t = ct(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      }, wrap: function (e) {
        var t = ct.isFunction(e);
        return this.each(function (n) {
          ct(this).wrapAll(t ? e.call(this, n) : e)
        })
      }, unwrap: function () {
        return this.parent().each(function () {
          ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
        }).end()
      }
    });
    var cn, pn, fn, dn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, mn = /^(top|right|bottom|left)$/, gn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = RegExp("^(" + pt + ")(.*)$", "i"), bn = RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"), xn = RegExp("^([+-])=(" + pt + ")", "i"), wn = {BODY: "block"}, Cn = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    }, Tn = {
      letterSpacing: 0,
      fontWeight: 400
    }, En = ["Top", "Right", "Bottom", "Left"], kn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
      css: function (e, n) {
        return ct.access(this, function (e, n, i) {
          var r, o, s = {}, a = 0;
          if (ct.isArray(n)) {
            for (o = pn(e), r = n.length; r > a; a++)s[n[a]] = ct.css(e, n[a], !1, o);
            return s
          }
          return i !== t ? ct.style(e, n, i) : ct.css(e, n)
        }, e, n, arguments.length > 1)
      }, show: function () {
        return T(this, !0)
      }, hide: function () {
        return T(this)
      }, toggle: function (e) {
        var t = "boolean" == typeof e;
        return this.each(function () {
          (t ? e : C(this)) ? ct(this).show() : ct(this).hide()
        })
      }
    }), ct.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = fn(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": ct.support.cssFloat ? "cssFloat" : "styleFloat"},
      style: function (e, n, i, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, s, a, l = ct.camelCase(n), u = e.style;
          if (n = ct.cssProps[l] || (ct.cssProps[l] = w(u, l)), a = ct.cssHooks[n] || ct.cssHooks[l], i === t)return a && "get"in a && (o = a.get(e, !1, r)) !== t ? o : u[n];
          if (s = typeof i, "string" === s && (o = xn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ct.cssNumber[l] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set"in a && (i = a.set(e, i, r)) === t)))try {
            u[n] = i
          } catch (c) {
          }
        }
      },
      css: function (e, n, i, r) {
        var o, s, a, l = ct.camelCase(n);
        return n = ct.cssProps[l] || (ct.cssProps[l] = w(e.style, l)), a = ct.cssHooks[n] || ct.cssHooks[l], a && "get"in a && (s = a.get(e, !0, i)), s === t && (s = fn(e, n, r)), "normal" === s && n in Tn && (s = Tn[n]), "" === i || i ? (o = parseFloat(s), i === !0 || ct.isNumeric(o) ? o || 0 : s) : s
      }
    }), e.getComputedStyle ? (pn = function (t) {
      return e.getComputedStyle(t, null)
    }, fn = function (e, n, i) {
      var r, o, s, a = i || pn(e), l = a ? a.getPropertyValue(n) || a[n] : t, u = e.style;
      return a && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), bn.test(l) && yn.test(n) && (r = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = o, u.maxWidth = s)), l
    }) : G.documentElement.currentStyle && (pn = function (e) {
      return e.currentStyle
    }, fn = function (e, n, i) {
      var r, o, s, a = i || pn(e), l = a ? a[n] : t, u = e.style;
      return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (r = u.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, s && (o.left = s)), "" === l ? "auto" : l
    }), ct.each(["height", "width"], function (e, n) {
      ct.cssHooks[n] = {
        get: function (e, i, r) {
          return i ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, Cn, function () {
            return S(e, n, r)
          }) : S(e, n, r) : t
        }, set: function (e, t, i) {
          var r = i && pn(e);
          return E(e, t, i ? k(e, n, i, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r), r) : 0)
        }
      }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
      get: function (e, t) {
        return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      }, set: function (e, t) {
        var n = e.style, i = e.currentStyle, r = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = i && i.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = dn.test(o) ? o.replace(dn, r) : o + " " + r)
      }
    }), ct(function () {
      ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
        get: function (e, n) {
          return n ? ct.swap(e, {display: "inline-block"}, fn, [e, "marginRight"]) : t
        }
      }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, n) {
        ct.cssHooks[n] = {
          get: function (e, i) {
            return i ? (i = fn(e, n), bn.test(i) ? ct(e).position()[n] + "px" : i) : t
          }
        }
      })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) {
      return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function (e) {
      return !ct.expr.filters.hidden(e)
    }), ct.each({margin: "", padding: "", border: "Width"}, function (e, t) {
      ct.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + En[i] + t] = o[i] || o[i - 2] || o[0];
          return r
        }
      }, yn.test(e) || (ct.cssHooks[e + t].set = E)
    });
    var Sn = /%20/g, Nn = /\[\]$/, $n = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, jn = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
      serialize: function () {
        return ct.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          var e = ct.prop(this, "elements");
          return e ? ct.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !ct(this).is(":disabled") && jn.test(this.nodeName) && !Dn.test(e) && (this.checked || !tn.test(e))
        }).map(function (e, t) {
          var n = ct(this).val();
          return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
            return {name: t.name, value: e.replace($n, "\r\n")}
          }) : {name: t.name, value: n.replace($n, "\r\n")}
        }).get()
      }
    }), ct.param = function (e, n) {
      var i, r = [], o = function (e, t) {
        t = ct.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e))ct.each(e, function () {
        o(this.name, this.value)
      }); else for (i in e)j(i, e[i], n, o);
      return r.join("&").replace(Sn, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
      ct.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), ct.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
      }, unbind: function (e, t) {
        return this.off(e, null, t)
      }, delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    });
    var An, Ln, Hn = ct.now(), Fn = /\?/, Mn = /#.*$/, Pn = /([?&])_=[^&]*/, On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _n = /^(?:GET|HEAD)$/, Bn = /^\/\//, Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Rn = ct.fn.load, zn = {}, In = {}, Un = "*/".concat("*");
    try {
      Ln = J.href
    } catch (Xn) {
      Ln = G.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    An = Wn.exec(Ln.toLowerCase()) || [], ct.fn.load = function (e, n, i) {
      if ("string" != typeof e && Rn)return Rn.apply(this, arguments);
      var r, o, s, a = this, l = e.indexOf(" ");
      return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ct.ajax({
        url: e,
        type: s,
        dataType: "html",
        data: n
      }).done(function (e) {
        o = arguments, a.html(r ? ct("<div>").append(ct.parseHTML(e)).find(r) : e)
      }).complete(i && function (e, t) {
          a.each(i, o || [e.responseText, t, e])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      ct.fn[t] = function (e) {
        return this.on(t, e)
      }
    }), ct.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ln,
        type: "GET",
        isLocal: qn.test(An[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Un,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /xml/, html: /html/, json: /json/},
        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
        converters: {"* text": String, "text html": !0, "text json": ct.parseJSON, "text xml": ct.parseXML},
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (e, t) {
        return t ? H(H(e, ct.ajaxSettings), t) : H(ct.ajaxSettings, e)
      },
      ajaxPrefilter: A(zn),
      ajaxTransport: A(In),
      ajax: function (e, n) {
        function i(e, n, i, r) {
          var o, p, v, b, w, T = n;
          2 !== x && (x = 2, l && clearTimeout(l), c = t, a = r || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = F(f, C, i)), b = M(f, b, C, o), o ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (ct.etag[s] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, v = b.error, o = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", o ? m.resolveWith(d, [p, T, C]) : m.rejectWith(d, [C, T, v]), C.statusCode(y), y = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? p : v]), g.fireWith(d, [C, T]), u && (h.trigger("ajaxComplete", [C, f]), --ct.active || ct.event.trigger("ajaxStop")))
        }

        "object" == typeof e && (n = e, e = t), n = n || {};
        var r, o, s, a, l, u, c, p, f = ct.ajaxSetup({}, n), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? ct(d) : ct.event, m = ct.Deferred(), g = ct.Callbacks("once memory"), y = f.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", C = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!p)for (p = {}; t = On.exec(a);)p[t[1].toLowerCase()] = t[2];
              t = p[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function () {
            return 2 === x ? a : null
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || (e = b[n] = b[n] || e, v[e] = t), this
          },
          overrideMimeType: function (e) {
            return x || (f.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)if (2 > x)for (t in e)y[t] = [y[t], e[t]]; else C.always(e[C.status]);
            return this
          },
          abort: function (e) {
            var t = e || w;
            return c && c.abort(t), i(0, t), this
          }
        };
        if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Ln) + "").replace(Mn, "").replace(Bn, An[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(ft) || [""], null == f.crossDomain && (r = Wn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === An[1] && r[2] === An[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (An[3] || ("http:" === An[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), L(zn, f, n, C), 2 === x)return C;
        u = f.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_n.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (Fn.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pn.test(s) ? s.replace(Pn, "$1_=" + Hn++) : s + (Fn.test(s) ? "&" : "?") + "_=" + Hn++)), f.ifModified && (ct.lastModified[s] && C.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && C.setRequestHeader("If-None-Match", ct.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : f.accepts["*"]);
        for (o in f.headers)C.setRequestHeader(o, f.headers[o]);
        if (f.beforeSend && (f.beforeSend.call(d, C, f) === !1 || 2 === x))return C.abort();
        w = "abort";
        for (o in{success: 1, error: 1, complete: 1})C[o](f[o]);
        if (c = L(In, f, n, C)) {
          C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function () {
            C.abort("timeout")
          }, f.timeout));
          try {
            x = 1, c.send(v, i)
          } catch (T) {
            if (!(2 > x))throw T;
            i(-1, T)
          }
        } else i(-1, "No Transport");
        return C
      },
      getJSON: function (e, t, n) {
        return ct.get(e, t, n, "json")
      },
      getScript: function (e, n) {
        return ct.get(e, t, n, "script")
      }
    }), ct.each(["get", "post"], function (e, n) {
      ct[n] = function (e, i, r, o) {
        return ct.isFunction(i) && (o = o || r, r = i, i = t), ct.ajax({
          url: e,
          type: n,
          dataType: o,
          data: i,
          success: r
        })
      }
    }), ct.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /(?:java|ecma)script/},
      converters: {
        "text script": function (e) {
          return ct.globalEval(e), e
        }
      }
    }), ct.ajaxPrefilter("script", function (e) {
      e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var n, i = G.head || ct("head")[0] || G.documentElement;
        return {
          send: function (t, r) {
            n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
              (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
            }, i.insertBefore(n, i.firstChild)
          }, abort: function () {
            n && n.onload(t, !0)
          }
        }
      }
    });
    var Qn = [], Vn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var e = Qn.pop() || ct.expando + "_" + Hn++;
        return this[e] = !0, e
      }
    }), ct.ajaxPrefilter("json jsonp", function (n, i, r) {
      var o, s, a, l = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
      return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vn, "$1" + o) : n.jsonp !== !1 && (n.url += (Fn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
        return a || ct.error(o + " was not called"), a[0]
      }, n.dataTypes[0] = "json", s = e[o], e[o] = function () {
        a = arguments
      }, r.always(function () {
        e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, Qn.push(o)), a && ct.isFunction(s) && s(a[0]), a = s = t
      }), "script") : t
    });
    var Jn, Gn, Yn = 0, Kn = e.ActiveXObject && function () {
        var e;
        for (e in Jn)Jn[e](t, !0)
      };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
      return !this.isLocal && P() || O()
    } : P, Gn = ct.ajaxSettings.xhr(), ct.support.cors = !!Gn && "withCredentials"in Gn, Gn = ct.support.ajax = !!Gn, Gn && ct.ajaxTransport(function (n) {
      if (!n.crossDomain || ct.support.cors) {
        var i;
        return {
          send: function (r, o) {
            var s, a, l = n.xhr();
            if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (a in n.xhrFields)l[a] = n.xhrFields[a];
            n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (a in r)l.setRequestHeader(a, r[a])
            } catch (u) {
            }
            l.send(n.hasContent && n.data || null), i = function (e, r) {
              var a, u, c, p;
              try {
                if (i && (r || 4 === l.readyState))if (i = t, s && (l.onreadystatechange = ct.noop, Kn && delete Jn[s]), r)4 !== l.readyState && l.abort(); else {
                  p = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                  try {
                    c = l.statusText
                  } catch (f) {
                    c = ""
                  }
                  a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                }
              } catch (d) {
                r || o(-1, d)
              }
              p && o(a, c, p, u)
            }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Yn, Kn && (Jn || (Jn = {}, ct(e).unload(Kn)), Jn[s] = i), l.onreadystatechange = i) : i()
          }, abort: function () {
            i && i(t, !0)
          }
        }
      }
    });
    var Zn, ei, ti = /^(?:toggle|show|hide)$/, ni = RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"), ii = /queueHooks$/, ri = [R], oi = {
      "*": [function (e, t) {
        var n = this.createTween(e, t), i = n.cur(), r = ni.exec(t), o = r && r[3] || (ct.cssNumber[e] ? "" : "px"), s = (ct.cssNumber[e] || "px" !== o && +i) && ni.exec(ct.css(n.elem, e)), a = 1, l = 20;
        if (s && s[3] !== o) {
          o = o || s[3], r = r || [], s = +i || 1;
          do a = a || ".5", s /= a, ct.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
        }
        return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
      }]
    };
    ct.Animation = ct.extend(B, {
      tweener: function (e, t) {
        ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, i = 0, r = e.length; r > i; i++)n = e[i], oi[n] = oi[n] || [], oi[n].unshift(t)
      }, prefilter: function (e, t) {
        t ? ri.unshift(e) : ri.push(e)
      }
    }), ct.Tween = z, z.prototype = {
      constructor: z, init: function (e, t, n, i, r, o) {
        this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
      }, cur: function () {
        var e = z.propHooks[this.prop];
        return e && e.get ? e.get(this) : z.propHooks._default.get(this)
      }, run: function (e) {
        var t, n = z.propHooks[this.prop];
        return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
      }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
        }, set: function (e) {
          ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, ct.each(["toggle", "show", "hide"], function (e, t) {
      var n = ct.fn[t];
      ct.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
      }
    }), ct.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(C).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
      }, animate: function (e, t, n, i) {
        var r = ct.isEmptyObject(e), o = ct.speed(t, n, i), s = function () {
          var t = B(this, ct.extend({}, e), o);
          (r || ct._data(this, "finish")) && t.stop(!0)
        };
        return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
      }, stop: function (e, n, i) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(i)
        };
        return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
          var t = !0, n = null != e && e + "queueHooks", o = ct.timers, s = ct._data(this);
          if (n)s[n] && s[n].stop && r(s[n]); else for (n in s)s[n] && s[n].stop && ii.test(n) && r(s[n]);
          for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
          (t || !i) && ct.dequeue(this, e)
        })
      }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
          var t, n = ct._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ct.timers, s = i ? i.length : 0;
          for (n.finish = !0, ct.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; s > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), ct.each({
      slideDown: I("show"),
      slideUp: I("hide"),
      slideToggle: I("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
      ct.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), ct.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? ct.extend({}, e) : {
        complete: n || !n && t || ct.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !ct.isFunction(t) && t
      };
      return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
      }, i
    }, ct.easing = {
      linear: function (e) {
        return e
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    }, ct.timers = [], ct.fx = z.prototype.init, ct.fx.tick = function () {
      var e, n = ct.timers, i = 0;
      for (Zn = ct.now(); n.length > i; i++)e = n[i], e() || n[i] !== e || n.splice(i--, 1);
      n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function (e) {
      e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function () {
      ei || (ei = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function () {
      clearInterval(ei), ei = null
    }, ct.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) {
      return ct.grep(ct.timers, function (t) {
        return e === t.elem
      }).length
    }), ct.fn.offset = function (e) {
      if (arguments.length)return e === t ? this : this.each(function (t) {
        ct.offset.setOffset(this, e, t)
      });
      var n, i, r = {top: 0, left: 0}, o = this[0], s = o && o.ownerDocument;
      return s ? (n = s.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (r = o.getBoundingClientRect()), i = U(s), {
        top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
        left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
      }) : r) : void 0
    }, ct.offset = {
      setOffset: function (e, t, n) {
        var i = ct.css(e, "position");
        "static" === i && (e.style.position = "relative");
        var r = ct(e), o = r.offset(), s = ct.css(e, "top"), a = ct.css(e, "left"), l = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [s, a]) > -1, u = {}, c = {}, p, f;
        l ? (c = r.position(), p = c.top, f = c.left) : (p = parseFloat(s) || 0, f = parseFloat(a) || 0), ct.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : r.css(u)
      }
    }, ct.fn.extend({
      position: function () {
        if (this[0]) {
          var e, t, n = {top: 0, left: 0}, i = this[0];
          return "fixed" === ct.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - n.top - ct.css(i, "marginTop", !0),
            left: t.left - n.left - ct.css(i, "marginLeft", !0)
          }
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent || Y; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");)e = e.offsetParent;
          return e || Y
        })
      }
    }), ct.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
      var i = /Y/.test(n);
      ct.fn[e] = function (r) {
        return ct.access(this, function (e, r, o) {
          var s = U(e);
          return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? ct(s).scrollLeft() : o, i ? o : ct(s).scrollTop()) : e[r] = o, t)
        }, e, r, arguments.length, null)
      }
    }), ct.each({Height: "height", Width: "width"}, function (e, n) {
      ct.each({padding: "inner" + e, content: n, "": "outer" + e}, function (i, r) {
        ct.fn[r] = function (r, o) {
          var s = arguments.length && (i || "boolean" != typeof r), a = i || (r === !0 || o === !0 ? "margin" : "border");
          return ct.access(this, function (n, i, r) {
            var o;
            return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ct.css(n, i, a) : ct.style(n, i, r, a)
          }, n, s ? r : t, s, null)
        }
      })
    }), ct.fn.size = function () {
      return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
      return ct
    }))
  }(window), !jQuery)
  throw new Error("Bootstrap requires jQuery");

+function ($) {
  "use strict";
  function e() {
    var e = document.createElement("bootstrap"), t = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var n in t)if (void 0 !== e.style[n])return {end: t[n]}
  }

  $.fn.emulateTransitionEnd = function (e) {
    var t = !1, n = this;
    $(this).one($.support.transition.end, function () {
      t = !0
    });
    var i = function () {
      t || $(n).trigger($.support.transition.end)
    };
    return setTimeout(i, e), this
  }, $(function () {
    $.support.transition = e()
  })
}(window.jQuery),
+function ($) {
"use strict";
var e = '[data-dismiss="alert"]', t = function (t) {
  $(t).on("click", e, this.close)
};
t.prototype.close = function (e) {
  function t() {
    r.trigger("closed.bs.alert").remove()
  }

  var n = $(this), i = n.attr("data-target");
  i || (i = n.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
  var r = $(i);
  e && e.preventDefault(), r.length || (r = n.hasClass("alert") ? n : n.parent()), r.trigger(e = $.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), $.support.transition && r.hasClass("fade") ? r.one($.support.transition.end, t).emulateTransitionEnd(150) : t())
};
var n = $.fn.alert;
$.fn.alert = function (e) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.alert");
    i || n.data("bs.alert", i = new t(this)), "string" == typeof e && i[e].call(n)
  })
}, $.fn.alert.Constructor = t, $.fn.alert.noConflict = function () {
  return $.fn.alert = n, this
}, $(document).on("click.bs.alert.data-api", e, t.prototype.close)
}(window.jQuery),
+function ($) {
"use strict";
var e = function (t, n) {
  this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, n)
};
e.DEFAULTS = {loadingText: "loading..."}, e.prototype.setState = function (e) {
  var t = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", r = n.data();
  e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function () {
    "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
  }, 0)
}, e.prototype.toggle = function () {
  var e = this.$element.closest('[data-toggle="buttons"]');
  if (e.length) {
    var t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
    "radio" === t.prop("type") && e.find(".active").removeClass("active")
  }
  this.$element.toggleClass("active")
};
var t = $.fn.button;
$.fn.button = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.button"), r = "object" == typeof t && t;
    i || n.data("bs.button", i = new e(this, r)), "toggle" == t ? i.toggle() : t && i.setState(t)
  })
}, $.fn.button.Constructor = e, $.fn.button.noConflict = function () {
  return $.fn.button = t, this
}, $(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
  var t = $(e.target);
  t.hasClass("btn") || (t = t.closest(".btn")), t.button("toggle"), e.preventDefault()
})
}(window.jQuery),
+function ($) {
"use strict";
var e = function (e, t) {
  this.$element = $(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this))
};
e.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, e.prototype.cycle = function (e) {
  return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this
}, e.prototype.getActiveIndex = function () {
  return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
}, e.prototype.to = function (e) {
  var t = this, n = this.getActiveIndex();
  return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid", function () {
    t.to(e)
  }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", $(this.$items[e]))
}, e.prototype.pause = function (e) {
  return e || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition.end && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, e.prototype.next = function () {
  return this.sliding ? void 0 : this.slide("next")
}, e.prototype.prev = function () {
  return this.sliding ? void 0 : this.slide("prev")
}, e.prototype.slide = function (e, t) {
  var n = this.$element.find(".item.active"), i = t || n[e](), r = this.interval, o = "next" == e ? "left" : "right", s = "next" == e ? "first" : "last", a = this;
  if (!i.length) {
    if (!this.options.wrap)return;
    i = this.$element.find(".item")[s]()
  }
  this.sliding = !0, r && this.pause();
  var l = $.Event("slide.bs.carousel", {relatedTarget: i[0], direction: o});
  if (!i.hasClass("active")) {
    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
        var e = $(a.$indicators.children()[a.getActiveIndex()]);
        e && e.addClass("active")
      })), $.support.transition && this.$element.hasClass("slide")) {
      if (this.$element.trigger(l), l.isDefaultPrevented())return;
      i.addClass(e), i[0].offsetWidth, n.addClass(o), i.addClass(o), n.one($.support.transition.end, function () {
        i.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function () {
          a.$element.trigger("slid")
        }, 0)
      }).emulateTransitionEnd(600)
    } else {
      if (this.$element.trigger(l), l.isDefaultPrevented())return;
      n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
    }
    return r && this.cycle(), this
  }
};
var t = $.fn.carousel;
$.fn.carousel = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.carousel"), r = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t), o = "string" == typeof t ? t : r.slide;
    i || n.data("bs.carousel", i = new e(this, r)), "number" == typeof t ? i.to(t) : o ? i[o]() : r.interval && i.pause().cycle()
  })
}, $.fn.carousel.Constructor = e, $.fn.carousel.noConflict = function () {
  return $.fn.carousel = t, this
}, $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
  var t = $(this), n, i = $(t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), r = $.extend({}, i.data(), t.data()), o = t.attr("data-slide-to");
  o && (r.interval = !1), i.carousel(r), (o = t.attr("data-slide-to")) && i.data("bs.carousel").to(o), e.preventDefault()
}), $(window).on("load", function () {
  $('[data-ride="carousel"]').each(function () {
    var e = $(this);
    e.carousel(e.data())
  })
})
}(window.jQuery),
+function ($) {
"use strict";
var e = function (t, n) {
  this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
};
e.DEFAULTS = {toggle: !0}, e.prototype.dimension = function () {
  var e = this.$element.hasClass("width");
  return e ? "width" : "height"
}, e.prototype.show = function () {
  if (!this.transitioning && !this.$element.hasClass("in")) {
    var e = $.Event("show.bs.collapse");
    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
      var t = this.$parent && this.$parent.find("> .panel > .in");
      if (t && t.length) {
        var n = t.data("bs.collapse");
        if (n && n.transitioning)return;
        t.collapse("hide"), n || t.data("bs.collapse", null)
      }
      var i = this.dimension();
      this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
      var r = function () {
        this.$element.removeClass("collapsing").addClass("in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
      };
      if (!$.support.transition)return r.call(this);
      var o = $.camelCase(["scroll", i].join("-"));
      this.$element.one($.support.transition.end, $.proxy(r, this)).emulateTransitionEnd(350)[i](this.$element[0][o])
    }
  }
}, e.prototype.hide = function () {
  if (!this.transitioning && this.$element.hasClass("in")) {
    var e = $.Event("hide.bs.collapse");
    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
      var t = this.dimension();
      this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
      var n = function () {
        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
      };
      return $.support.transition ? void this.$element[t](0).one($.support.transition.end, $.proxy(n, this)).emulateTransitionEnd(350) : n.call(this)
    }
  }
}, e.prototype.toggle = function () {
  this[this.$element.hasClass("in") ? "hide" : "show"]()
};
var t = $.fn.collapse;
$.fn.collapse = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.collapse"), r = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t);
    i || n.data("bs.collapse", i = new e(this, r)), "string" == typeof t && i[t]()
  })
}, $.fn.collapse.Constructor = e, $.fn.collapse.noConflict = function () {
  return $.fn.collapse = t, this
}, $(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (e) {
  var t = $(this), n, i = t.attr("data-target") || e.preventDefault() || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), r = $(i), o = r.data("bs.collapse"), s = o ? "toggle" : t.data(), a = t.attr("data-parent"), l = a && $(a);
  o && o.transitioning || (l && l.find('[data-toggle=collapse][data-parent="' + a + '"]').not(t).addClass("collapsed"), t[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(s)
})
}(window.jQuery),
+function ($) {
"use strict";
function e() {
  $(n).remove(), $(i).each(function (e) {
    var n = t($(this));
    n.hasClass("open") && (n.trigger(e = $.Event("hide.bs.dropdown")), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown"))
  })
}

function t(e) {
  var t = e.attr("data-target");
  t || (t = e.attr("href"), t = t && /#/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
  var n = t && $(t);
  return n && n.length ? n : e.parent()
}

var n = ".dropdown-backdrop", i = "[data-toggle=dropdown]", r = function (e) {
  var t = $(e).on("click.bs.dropdown", this.toggle)
};
r.prototype.toggle = function (n) {
  var i = $(this);
  if (!i.is(".disabled, :disabled")) {
    var r = t(i), o = r.hasClass("open");
    if (e(), !o) {
      if ("ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", e), r.trigger(n = $.Event("show.bs.dropdown")), n.isDefaultPrevented())return;
      r.toggleClass("open").trigger("shown.bs.dropdown"), i.focus()
    }
    return !1
  }
}, r.prototype.keydown = function (e) {
  if (/(38|40|27)/.test(e.keyCode)) {
    var n = $(this);
    if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
      var r = t(n), o = r.hasClass("open");
      if (!o || o && 27 == e.keyCode)return 27 == e.which && r.find(i).focus(), n.click();
      var s = $("[role=menu] li:not(.divider):visible a", r);
      if (s.length) {
        var a = s.index(s.filter(":focus"));
        38 == e.keyCode && a > 0 && a--, 40 == e.keyCode && a < s.length - 1 && a++, ~a || (a = 0), s.eq(a).focus()
      }
    }
  }
};
var o = $.fn.dropdown;
$.fn.dropdown = function (e) {
  return this.each(function () {
    var t = $(this), n = t.data("dropdown");
    n || t.data("dropdown", n = new r(this)), "string" == typeof e && n[e].call(t)
  })
}, $.fn.dropdown.Constructor = r, $.fn.dropdown.noConflict = function () {
  return $.fn.dropdown = o, this
}, $(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
  e.stopPropagation()
}).on("click.bs.dropdown.data-api", i, r.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown)
}(window.jQuery),
+function ($) {
"use strict";
var e = function (e, t) {
  this.options = t, this.$element = $(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
};
e.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, e.prototype.toggle = function (e) {
  return this[this.isShown ? "hide" : "show"](e)
}, e.prototype.show = function (e) {
  var t = this, n = $.Event("show.bs.modal", {relatedTarget: e});
  this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.backdrop(function () {
    var n = $.support.transition && t.$element.hasClass("fade");
    t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus();
    var i = $.Event("shown.bs.modal", {relatedTarget: e});
    n ? t.$element.find(".modal-dialog").one($.support.transition.end, function () {
      t.$element.focus().trigger(i)
    }).emulateTransitionEnd(300) : t.$element.focus().trigger(i)
  }))
}, e.prototype.hide = function (e) {
  e && e.preventDefault(), e = $.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
}, e.prototype.enforceFocus = function () {
  $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function (e) {
    this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
  }, this))
}, e.prototype.escape = function () {
  this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", $.proxy(function (e) {
    27 == e.which && this.hide()
  }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
}, e.prototype.hideModal = function () {
  var e = this;
  this.$element.hide(), this.backdrop(function () {
    e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
  })
}, e.prototype.removeBackdrop = function () {
  this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, e.prototype.backdrop = function (e) {
  var t = this, n = this.$element.hasClass("fade") ? "fade" : "";
  if (this.isShown && this.options.backdrop) {
    var i = $.support.transition && n;
    if (this.$backdrop = $('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", $.proxy(function (e) {
        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
      }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
    i ? this.$backdrop.one($.support.transition.end, e).emulateTransitionEnd(150) : e()
  } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
};
var t = $.fn.modal;
$.fn.modal = function (t, n) {
  return this.each(function () {
    var i = $(this), r = i.data("bs.modal"), o = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t);
    r || i.data("bs.modal", r = new e(this, o)), "string" == typeof t ? r[t](n) : o.show && r.show(n)
  })
}, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function () {
  return $.fn.modal = t, this
}, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
  var t = $(this), n = t.attr("href"), i = $(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), r = i.data("modal") ? "toggle" : $.extend({remote: !/#/.test(n) && n}, i.data(), t.data());
  e.preventDefault(), i.modal(r, this).one("hide", function () {
    t.is(":visible") && t.focus()
  })
}), $(document).on("show.bs.modal", ".modal", function () {
  $(document.body).addClass("modal-open")
}).on("hidden.bs.modal", ".modal", function () {
  $(document.body).removeClass("modal-open")
})
}(window.jQuery),
+function ($) {
"use strict";
var e = function (e, t) {
  this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
};
e.DEFAULTS = {
  animation: !0,
  placement: "top",
  selector: !1,
  template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  container: !1
}, e.prototype.init = function (e, t, n) {
  this.enabled = !0, this.type = e, this.$element = $(t), this.options = this.getOptions(n);
  for (var i = this.options.trigger.split(" "), r = i.length; r--;) {
    var o = i[r];
    if ("click" == o)this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this)); else if ("manual" != o) {
      var s = "hover" == o ? "mouseenter" : "focus", a = "hover" == o ? "mouseleave" : "blur";
      this.$element.on(s + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.leave, this))
    }
  }
  this.options.selector ? this._options = $.extend({}, this.options, {
    trigger: "manual",
    selector: ""
  }) : this.fixTitle()
}, e.prototype.getDefaults = function () {
  return e.DEFAULTS
}, e.prototype.getOptions = function (e) {
  return e = $.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
    show: e.delay,
    hide: e.delay
  }), e
}, e.prototype.getDelegateOptions = function () {
  var e = {}, t = this.getDefaults();
  return this._options && $.each(this._options, function (n, i) {
    t[n] != i && (e[n] = i)
  }), e
}, e.prototype.enter = function (e) {
  var t = e instanceof this.constructor ? e : $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
  return clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function () {
    "in" == t.hoverState && t.show()
  }, t.options.delay.show)) : t.show()
}, e.prototype.leave = function (e) {
  var t = e instanceof this.constructor ? e : $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
  return clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function () {
    "out" == t.hoverState && t.hide()
  }, t.options.delay.hide)) : t.hide()
}, e.prototype.show = function () {
  var e = $.Event("show.bs." + this.type);
  if (this.hasContent() && this.enabled) {
    if (this.$element.trigger(e), e.isDefaultPrevented())return;
    var t = this.tip();
    this.setContent(), this.options.animation && t.addClass("fade");
    var n = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, r = i.test(n);
    r && (n = n.replace(i, "") || "top"), t.detach().css({
      top: 0,
      left: 0,
      display: "block"
    }).addClass(n), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element);
    var o = this.getPosition(), s = t[0].offsetWidth, a = t[0].offsetHeight;
    if (r) {
      var l = this.$element.parent(), u = n, c = document.documentElement.scrollTop || document.body.scrollTop, p = "body" == this.options.container ? window.innerWidth : l.outerWidth(), f = "body" == this.options.container ? window.innerHeight : l.outerHeight(), d = "body" == this.options.container ? 0 : l.offset().left;
      n = "bottom" == n && o.top + o.height + a - c > f ? "top" : "top" == n && o.top - c - a < 0 ? "bottom" : "right" == n && o.right + s > p ? "left" : "left" == n && o.left - s < d ? "right" : n, t.removeClass(u).addClass(n)
    }
    var h = this.getCalculatedOffset(n, o, s, a);
    this.applyPlacement(h, n), this.$element.trigger("shown.bs." + this.type)
  }
}, e.prototype.applyPlacement = function (e, t) {
  var n, i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
  isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, i.offset(e).addClass("in");
  var l = i[0].offsetWidth, u = i[0].offsetHeight;
  if ("top" == t && u != o && (n = !0, e.top = e.top + o - u), /bottom|top/.test(t)) {
    var c = 0;
    e.left < 0 && (c = -2 * e.left, e.left = 0, i.offset(e), l = i[0].offsetWidth, u = i[0].offsetHeight), this.replaceArrow(c - r + l, l, "left")
  } else this.replaceArrow(u - o, u, "top");
  n && i.offset(e)
}, e.prototype.replaceArrow = function (e, t, n) {
  this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
}, e.prototype.setContent = function () {
  var e = this.tip(), t = this.getTitle();
  e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
}, e.prototype.hide = function () {
  function e() {
    "in" != t.hoverState && n.detach()
  }

  var t = this, n = this.tip(), i = $.Event("hide.bs." + this.type);
  return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? n.one($.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this)
}, e.prototype.fixTitle = function () {
  var e = this.$element;
  (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
}, e.prototype.hasContent = function () {
  return this.getTitle()
}, e.prototype.getPosition = function () {
  var e = this.$element[0];
  return $.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
    width: e.offsetWidth,
    height: e.offsetHeight
  }, this.$element.offset())
}, e.prototype.getCalculatedOffset = function (e, t, n, i) {
  return "bottom" == e ? {top: t.top + t.height, left: t.left + t.width / 2 - n / 2} : "top" == e ? {
    top: t.top - i,
    left: t.left + t.width / 2 - n / 2
  } : "left" == e ? {top: t.top + t.height / 2 - i / 2, left: t.left - n} : {
    top: t.top + t.height / 2 - i / 2,
    left: t.left + t.width
  }
}, e.prototype.getTitle = function () {
  var e, t = this.$element, n = this.options;
  return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
}, e.prototype.tip = function () {
  return this.$tip = this.$tip || $(this.options.template)
}, e.prototype.arrow = function () {
  return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, e.prototype.validate = function () {
  this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
}, e.prototype.enable = function () {
  this.enabled = !0
}, e.prototype.disable = function () {
  this.enabled = !1
}, e.prototype.toggleEnabled = function () {
  this.enabled = !this.enabled
}, e.prototype.toggle = function (e) {
  var t = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
  t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
}, e.prototype.destroy = function () {
  this.hide().$element.off("." + this.type).removeData("bs." + this.type)
};
var t = $.fn.tooltip;
$.fn.tooltip = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.tooltip"), r = "object" == typeof t && t;
    i || n.data("bs.tooltip", i = new e(this, r)), "string" == typeof t && i[t]()
  })
}, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function () {
  return $.fn.tooltip = t, this
}
}(window.jQuery),
+function ($) {
"use strict";
var e = function (e, t) {
  this.init("popover", e, t)
};
if (!$.fn.tooltip)throw new Error("Popover requires tooltip.js");
e.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
  placement: "right",
  trigger: "click",
  content: "",
  template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), e.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
  return e.DEFAULTS
}, e.prototype.setContent = function () {
  var e = this.tip(), t = this.getTitle(), n = this.getContent();
  e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
}, e.prototype.hasContent = function () {
  return this.getTitle() || this.getContent()
}, e.prototype.getContent = function () {
  var e = this.$element, t = this.options;
  return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
}, e.prototype.arrow = function () {
  return this.$arrow = this.$arrow || this.tip().find(".arrow")
}, e.prototype.tip = function () {
  return this.$tip || (this.$tip = $(this.options.template)), this.$tip
};
var t = $.fn.popover;
$.fn.popover = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.popover"), r = "object" == typeof t && t;
    i || n.data("bs.popover", i = new e(this, r)), "string" == typeof t && i[t]()
  })
}, $.fn.popover.Constructor = e, $.fn.popover.noConflict = function () {
  return $.fn.popover = t, this
}
}(window.jQuery),
+function ($) {
"use strict";
function e(t, n) {
  var i, r = $.proxy(this.process, this);
  this.$element = $($(t).is("body") ? window : t), this.$body = $("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r), this.options = $.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || (i = $(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = $([]), this.targets = $([]), this.activeTarget = null, this.refresh(), this.process()
}

e.DEFAULTS = {offset: 10}, e.prototype.refresh = function () {
  var e = this.$element[0] == window ? "offset" : "position";
  this.offsets = $([]), this.targets = $([]);
  var t = this, n = this.$body.find(this.selector).map(function () {
    var n = $(this), i = n.data("target") || n.attr("href"), r = /^#\w/.test(i) && $(i);
    return r && r.length && [[r[e]().top + (!$.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), i]] || null
  }).sort(function (e, t) {
    return e[0] - t[0]
  }).each(function () {
    t.offsets.push(this[0]), t.targets.push(this[1])
  })
}, e.prototype.process = function () {
  var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), i = this.offsets, r = this.targets, o = this.activeTarget, s;
  if (e >= n)return o != (s = r.last()[0]) && this.activate(s);
  for (s = i.length; s--;)o != r[s] && e >= i[s] && (!i[s + 1] || e <= i[s + 1]) && this.activate(r[s])
}, e.prototype.activate = function (e) {
  this.activeTarget = e, $(this.selector).parents(".active").removeClass("active");
  var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = $(t).parents("li").addClass("active");
  n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
};
var t = $.fn.scrollspy;
$.fn.scrollspy = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.scrollspy"), r = "object" == typeof t && t;
    i || n.data("bs.scrollspy", i = new e(this, r)), "string" == typeof t && i[t]()
  })
}, $.fn.scrollspy.Constructor = e, $.fn.scrollspy.noConflict = function () {
  return $.fn.scrollspy = t, this
}, $(window).on("load", function () {
  $('[data-spy="scroll"]').each(function () {
    var e = $(this);
    e.scrollspy(e.data())
  })
})
}(window.jQuery),
+function ($) {
"use strict";
var e = function (e) {
  this.element = $(e)
};
e.prototype.show = function () {
  var e = this.element, t = e.closest("ul:not(.dropdown-menu)"), n = e.attr("data-target");
  if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
    var i = t.find(".active:last a")[0], r = $.Event("show.bs.tab", {relatedTarget: i});
    if (e.trigger(r), !r.isDefaultPrevented()) {
      var o = $(n);
      this.activate(e.parent("li"), t), this.activate(o, o.parent(), function () {
        e.trigger({type: "shown.bs.tab", relatedTarget: i})
      })
    }
  }
}, e.prototype.activate = function (e, t, n) {
  function i() {
    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
  }

  var r = t.find("> .active"), o = n && $.support.transition && r.hasClass("fade");
  o ? r.one($.support.transition.end, i).emulateTransitionEnd(150) : i(), r.removeClass("in")
};
var t = $.fn.tab;
$.fn.tab = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.tab");
    i || n.data("bs.tab", i = new e(this)), "string" == typeof t && i[t]()
  })
}, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function () {
  return $.fn.tab = t, this
}, $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
  e.preventDefault(), $(this).tab("show")
})
}(window.jQuery),
+function ($) {
"use strict";
var e = function (t, n) {
  this.options = $.extend({}, e.DEFAULTS, n), this.$window = $(window).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(t), this.affixed = this.unpin = null, this.checkPosition()
};
e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {offset: 0}, e.prototype.checkPositionWithEventLoop = function () {
  setTimeout($.proxy(this.checkPosition, this), 1)
}, e.prototype.checkPosition = function () {
  if (this.$element.is(":visible")) {
    var t = $(document).height(), n = this.$window.scrollTop(), i = this.$element.offset(), r = this.options.offset, o = r.top, s = r.bottom;
    "object" != typeof r && (s = o = r), "function" == typeof o && (o = r.top()), "function" == typeof s && (s = r.bottom());
    var a = null != this.unpin && n + this.unpin <= i.top ? !1 : null != s && i.top + this.$element.height() >= t - s ? "bottom" : null != o && o >= n ? "top" : !1;
    this.affixed !== a && (this.unpin && this.$element.css("top", ""), this.affixed = a, this.unpin = "bottom" == a ? i.top - n : null, this.$element.removeClass(e.RESET).addClass("affix" + (a ? "-" + a : "")), "bottom" == a && this.$element.offset({top: document.body.offsetHeight - s - this.$element.height()}))
  }
};
var t = $.fn.affix;
$.fn.affix = function (t) {
  return this.each(function () {
    var n = $(this), i = n.data("bs.affix"), r = "object" == typeof t && t;
    i || n.data("bs.affix", i = new e(this, r)), "string" == typeof t && i[t]()
  })
}, $.fn.affix.Constructor = e, $.fn.affix.noConflict = function () {
  return $.fn.affix = t, this
}, $(window).on("load", function () {
  $('[data-spy="affix"]').each(function () {
    var e = $(this), t = e.data();
    t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), e.affix(t)
  })
})
}(window.jQuery),

window.Modernizr = function (e, t, n) {
function i(e) {
  y.cssText = e
}

function r(e, t) {
  return i(w.join(e + ";") + (t || ""))
}

function o(e, t) {
  return typeof e === t
}

function s(e, t) {
  return !!~("" + e).indexOf(t)
}

function a(e, t) {
  for (var i in e) {
    var r = e[i];
    if (!s(r, "-") && y[r] !== n)return "pfx" == t ? r : !0
  }
  return !1
}

function l(e, t, i) {
  for (var r in e) {
    var s = t[e[r]];
    if (s !== n)return i === !1 ? e[r] : o(s, "function") ? s.bind(i || t) : s
  }
  return !1
}

function u(e, t, n) {
  var i = e.charAt(0).toUpperCase() + e.slice(1), r = (e + " " + T.join(i + " ") + i).split(" ");
  return o(t, "string") || o(t, "undefined") ? a(r, t) : (r = (e + " " + E.join(i + " ") + i).split(" "), l(r, t, n))
}

function c() {
  f.input = function (n) {
    for (var i = 0, r = n.length; r > i; i++)D[n[i]] = n[i]in v;
    return D.list && (D.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), D
  }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (e) {
    for (var i = 0, r, o, s, a = e.length; a > i; i++)v.setAttribute("type", o = e[i]), r = "text" !== v.type, r && (v.value = b, v.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && v.style.WebkitAppearance !== n ? (h.appendChild(v), s = t.defaultView, r = s.getComputedStyle && "textfield" !== s.getComputedStyle(v, null).WebkitAppearance && 0 !== v.offsetHeight, h.removeChild(v)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? v.checkValidity && v.checkValidity() === !1 : v.value != b)), N[e[i]] = !!r;
    return N
  }("search tel url email datetime date month week time datetime-local number range color".split(" "))
}

var p = "2.6.2", f = {}, d = !0, h = t.documentElement, m = "modernizr", g = t.createElement(m), y = g.style, v = t.createElement("input"), b = ":)", x = {}.toString, w = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", T = C.split(" "), E = C.toLowerCase().split(" "), k = {svg: "http://www.w3.org/2000/svg"}, S = {}, N = {}, D = {}, j = [], A = j.slice, L, H = function (e, n, i, r) {
  var o, s, a, l, u = t.createElement("div"), c = t.body, p = c || t.createElement("body");
  if (parseInt(i, 10))for (; i--;)a = t.createElement("div"), a.id = r ? r[i] : m + (i + 1), u.appendChild(a);
  return o = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), u.id = m, (c ? u : p).innerHTML += o, p.appendChild(u), c || (p.style.background = "", p.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(p)), s = n(u, e), c ? u.parentNode.removeChild(u) : (p.parentNode.removeChild(p), h.style.overflow = l), !!s
}, F = function (t) {
  var n = e.matchMedia || e.msMatchMedia;
  if (n)return n(t).matches;
  var i;
  return H("@media " + t + " { #" + m + " { position: absolute; } }", function (t) {
    i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
  }), i
}, M = function () {
  function e(e, r) {
    r = r || t.createElement(i[e] || "div"), e = "on" + e;
    var s = e in r;
    return s || (r.setAttribute || (r = t.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""), s = o(r[e], "function"), o(r[e], "undefined") || (r[e] = n), r.removeAttribute(e))), r = null, s
  }

  var i = {select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img"};
  return e
}(), P = {}.hasOwnProperty, O;
O = o(P, "undefined") || o(P.call, "undefined") ? function (e, t) {
  return t in e && o(e.constructor.prototype[t], "undefined")
} : function (e, t) {
  return P.call(e, t)
}, Function.prototype.bind || (Function.prototype.bind = function (e) {
  var t = this;
  if ("function" != typeof t)throw new TypeError;
  var n = A.call(arguments, 1), i = function () {
    if (this instanceof i) {
      var r = function () {
      };
      r.prototype = t.prototype;
      var o = new r, s = t.apply(o, n.concat(A.call(arguments)));
      return Object(s) === s ? s : o
    }
    return t.apply(e, n.concat(A.call(arguments)))
  };
  return i
}), S.flexbox = function () {
  return u("flexWrap")
}, S.canvas = function () {
  var e = t.createElement("canvas");
  return !!e.getContext && !!e.getContext("2d")
}, S.canvastext = function () {
  return !!f.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function")
}, S.webgl = function () {
  return !!e.WebGLRenderingContext
}, S.touch = function () {
  var n;
  return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : H(["@media (", w.join("touch-enabled),("), m, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
    n = 9 === e.offsetTop
  }), n
}, S.geolocation = function () {
  return "geolocation"in navigator
}, S.postmessage = function () {
  return !!e.postMessage
}, S.websqldatabase = function () {
  return !!e.openDatabase
}, S.indexedDB = function () {
  return !!u("indexedDB", e)
}, S.hashchange = function () {
  return M("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
}, S.history = function () {
  return !!e.history && !!history.pushState
}, S.draganddrop = function () {
  var e = t.createElement("div");
  return "draggable"in e || "ondragstart"in e && "ondrop"in e
}, S.websockets = function () {
  return "WebSocket"in e || "MozWebSocket"in e
}, S.rgba = function () {
  return i("background-color:rgba(150,255,150,.5)"), s(y.backgroundColor, "rgba")
}, S.hsla = function () {
  return i("background-color:hsla(120,40%,100%,.5)"), s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
}, S.multiplebgs = function () {
  return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
}, S.backgroundsize = function () {
  return u("backgroundSize")
}, S.borderimage = function () {
  return u("borderImage")
}, S.borderradius = function () {
  return u("borderRadius")
}, S.boxshadow = function () {
  return u("boxShadow")
}, S.textshadow = function () {
  return "" === t.createElement("div").style.textShadow
}, S.opacity = function () {
  return r("opacity:.55"), /^0.55$/.test(y.opacity)
}, S.cssanimations = function () {
  return u("animationName")
}, S.csscolumns = function () {
  return u("columnCount")
}, S.cssgradients = function () {
  var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
  return i((e + "-webkit- ".split(" ").join(t + e) + w.join(n + e)).slice(0, -e.length)), s(y.backgroundImage, "gradient")
}, S.cssreflections = function () {
  return u("boxReflect")
}, S.csstransforms = function () {
  return !!u("transform")
}, S.csstransforms3d = function () {
  var e = !!u("perspective");
  return e && "webkitPerspective"in h.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
    e = 9 === t.offsetLeft && 3 === t.offsetHeight
  }), e
}, S.csstransitions = function () {
  return u("transition")
}, S.fontface = function () {
  var e;
  return H('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
    var r = t.getElementById("smodernizr"), o = r.sheet || r.styleSheet, s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
    e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
  }), e
}, S.generatedcontent = function () {
  var e;
  return H(["#", m, "{font:0/0 a}#", m, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
    e = t.offsetHeight >= 3
  }), e
}, S.video = function () {
  var e = t.createElement("video"), n = !1;
  try {
    (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
  } catch (i) {
  }
  return n
}, S.audio = function () {
  var e = t.createElement("audio"), n = !1;
  try {
    (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
  } catch (i) {
  }
  return n
}, S.localstorage = function () {
  try {
    return localStorage.setItem(m, m), localStorage.removeItem(m), !0
  } catch (e) {
    return !1
  }
}, S.sessionstorage = function () {
  try {
    return sessionStorage.setItem(m, m), sessionStorage.removeItem(m), !0
  } catch (e) {
    return !1
  }
}, S.webworkers = function () {
  return !!e.Worker
}, S.applicationcache = function () {
  return !!e.applicationCache
}, S.svg = function () {
  return !!t.createElementNS && !!t.createElementNS(k.svg, "svg").createSVGRect
}, S.inlinesvg = function () {
  var e = t.createElement("div");
  return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == k.svg
}, S.smil = function () {
  return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(k.svg, "animate")))
}, S.svgclippaths = function () {
  return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(k.svg, "clipPath")))
};
for (var q in S)O(S, q) && (L = q.toLowerCase(), f[L] = S[q](), j.push((f[L] ? "" : "no-") + L));
return f.input || c(), f.addTest = function (e, t) {
  if ("object" == typeof e)for (var i in e)O(e, i) && f.addTest(i, e[i]); else {
    if (e = e.toLowerCase(), f[e] !== n)return f;
    t = "function" == typeof t ? t() : t, "undefined" != typeof d && d && (h.className += " " + (t ? "" : "no-") + e), f[e] = t
  }
  return f
}, i(""), g = v = null, function (e, t) {
  function n(e, t) {
    var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
  }

  function i() {
    var e = y.elements;
    return "string" == typeof e ? e.split(" ") : e
  }

  function r(e) {
    var t = m[e[d]];
    return t || (t = {}, h++, e[d] = h, m[h] = t), t
  }

  function o(e, n, i) {
    if (n || (n = t), g)return n.createElement(e);
    i || (i = r(n));
    var o;
    return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), o.canHaveChildren && !c.test(e) ? i.frag.appendChild(o) : o
  }

  function s(e, n) {
    if (e || (e = t), g)return e.createDocumentFragment();
    n = n || r(e);
    for (var o = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++)o.createElement(a[s]);
    return o
  }

  function a(e, t) {
    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
      return y.shivMethods ? o(n, e, t) : t.createElem(n)
    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(y, t.frag)
  }

  function l(e) {
    e || (e = t);
    var i = r(e);
    return y.shivCSS && !f && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), g || a(e, i), e
  }

  var u = e.html5 || {}, c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, d = "_html5shiv", h = 0, m = {}, g;
  !function () {
    try {
      var e = t.createElement("a");
      e.innerHTML = "<xyz></xyz>", f = "hidden"in e, g = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
    } catch (n) {
      f = !0, g = !0
    }
  }();
  var y = {
    elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
    shivCSS: u.shivCSS !== !1,
    supportsUnknownElements: g,
    shivMethods: u.shivMethods !== !1,
    type: "default",
    shivDocument: l,
    createElement: o,
    createDocumentFragment: s
  };
  e.html5 = y, l(t)
}(this, t), f._version = p, f._prefixes = w, f._domPrefixes = E, f._cssomPrefixes = T, f.mq = F, f.hasEvent = M, f.testProp = function (e) {
  return a([e])
}, f.testAllProps = u, f.testStyles = H, f.prefixed = function (e, t, n) {
  return t ? u(e, t, n) : u(e, "pfx")
}, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + j.join(" ") : ""), f
}(this, this.document),
function (e, t, n) {
function i(e) {
  return "[object Function]" == h.call(e)
}

function r(e) {
  return "string" == typeof e
}

function o() {
}

function s(e) {
  return !e || "loaded" == e || "complete" == e || "uninitialized" == e
}

function a() {
  var e = m.shift();
  g = 1, e ? e.t ? f(function () {
    ("c" == e.t ? N.injectCss : N.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
  }, 0) : (e(), a()) : g = 0
}

function l(e, n, i, r, o, l, u) {
  function c(t) {
    if (!h && s(p.readyState) && (x.r = h = 1, !g && a(), p.onload = p.onreadystatechange = null, t)) {
      "img" != e && f(function () {
        b.removeChild(p)
      }, 50);
      for (var i in E[n])E[n].hasOwnProperty(i) && E[n][i].onload()
    }
  }

  var u = u || N.errorTimeout, p = t.createElement(e), h = 0, y = 0, x = {t: i, s: n, e: o, a: l, x: u};
  1 === E[n] && (y = 1, E[n] = []), "object" == e ? p.data = n : (p.src = n, p.type = e), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function () {
    c.call(this, y)
  }, m.splice(r, 0, x), "img" != e && (y || 2 === E[n] ? (b.insertBefore(p, v ? null : d), f(c, u)) : E[n].push(p))
}

function u(e, t, n, i, o) {
  return g = 0, t = t || "j", r(e) ? l("c" == t ? w : x, e, t, this.i++, n, i, o) : (m.splice(this.i++, 0, e), 1 == m.length && a()), this
}

function c() {
  var e = N;
  return e.loader = {load: u, i: 0}, e
}

var p = t.documentElement, f = e.setTimeout, d = t.getElementsByTagName("script")[0], h = {}.toString, m = [], g = 0, y = "MozAppearance"in p.style, v = y && !!t.createRange().compareNode, b = v ? p : d.parentNode, p = e.opera && "[object Opera]" == h.call(e.opera), p = !!t.attachEvent && !p, x = y ? "object" : p ? "script" : "img", w = p ? "script" : x, C = Array.isArray || function (e) {
    return "[object Array]" == h.call(e)
  }, T = [], E = {}, k = {
  timeout: function (e, t) {
    return t.length && (e.timeout = t[0]), e
  }
}, S, N;
N = function (e) {
  function t(e) {
    var e = e.split("!"), t = T.length, n = e.pop(), i = e.length, n = {url: n, origUrl: n, prefixes: e}, r, o, s;
    for (o = 0; i > o; o++)s = e[o].split("="), (r = k[s.shift()]) && (n = r(n, s));
    for (o = 0; t > o; o++)n = T[o](n);
    return n
  }

  function s(e, r, o, s, a) {
    var l = t(e), u = l.autoCallback;
    l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = i(r) ? r : r[e] || r[s] || r[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, r, o, s, a) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(r) || i(u)) && o.load(function () {
      c(), r && r(l.origUrl, a, s), u && u(l.origUrl, a, s), E[l.url] = 2
    })))
  }

  function a(e, t) {
    function n(e, n) {
      if (e) {
        if (r(e))n || (u = function () {
          var e = [].slice.call(arguments);
          c.apply(this, e), p()
        }), s(e, u, t, 0, a); else if (Object(e) === e)for (d in f = function () {
          var t = 0, n;
          for (n in e)e.hasOwnProperty(n) && t++;
          return t
        }(), e)e.hasOwnProperty(d) && (!n && !--f && (i(u) ? u = function () {
          var e = [].slice.call(arguments);
          c.apply(this, e), p()
        } : u[d] = function (e) {
          return function () {
            var t = [].slice.call(arguments);
            e && e.apply(this, t), p()
          }
        }(c[d])), s(e[d], u, t, d, a))
      } else!n && p()
    }

    var a = !!e.test, l = e.load || e.both, u = e.callback || o, c = u, p = e.complete || o, f, d;
    n(a ? e.yep : e.nope, !!l), l && n(l)
  }

  var l, u, p = this.yepnope.loader;
  if (r(e))s(e, 0, p, 0); else if (C(e))for (l = 0; l < e.length; l++)u = e[l], r(u) ? s(u, 0, p, 0) : C(u) ? N(u) : Object(u) === u && a(u, p); else Object(e) === e && a(e, p)
}, N.addPrefix = function (e, t) {
  k[e] = t
}, N.addFilter = function (e) {
  T.push(e)
}, N.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", S = function () {
  t.removeEventListener("DOMContentLoaded", S, 0), t.readyState = "complete"
}, 0)), e.yepnope = c(), e.yepnope.executeStack = a, e.yepnope.injectJs = function (e, n, i, r, l, u) {
  var c = t.createElement("script"), p, h, r = r || N.errorTimeout;
  c.src = e;
  for (h in i)c.setAttribute(h, i[h]);
  n = u ? a : n || o, c.onreadystatechange = c.onload = function () {
    !p && s(c.readyState) && (p = 1, n(), c.onload = c.onreadystatechange = null)
  }, f(function () {
    p || (p = 1, n(1))
  }, r), l ? c.onload() : d.parentNode.insertBefore(c, d)
}, e.yepnope.injectCss = function (e, n, i, r, s, l) {
  var r = t.createElement("link"), u, n = l ? a : n || o;
  r.href = e, r.rel = "stylesheet", r.type = "text/css";
  for (u in i)r.setAttribute(u, i[u]);
  s || (d.parentNode.insertBefore(r, d), f(n, 0))
}
}(this, document),
Modernizr.load = function () {
yepnope.apply(window, [].slice.call(arguments, 0))
},
window.matchMedia = window.matchMedia ||
  function (e, t) {
  var n, i = e.documentElement, r = i.firstElementChild || i.firstChild, o = e.createElement("body"), s = e.createElement("div");
  return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", o.style.background = "none", o.appendChild(s), function (e) {
    return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(o, r), n = 42 == s.offsetWidth, i.removeChild(o), {
      matches: n,
      media: e
    }
  }
}(document),
  function (e) {
function t() {
  x(!0)
}

if (e.respond = {}, respond.update = function () {
  }, respond.mediaQueriesSupported = e.matchMedia && e.matchMedia("only all").matches, !respond.mediaQueriesSupported) {
  var n = e.document, i = n.documentElement, r = [], o = [], s = [], a = {}, l = 30, u = n.getElementsByTagName("head")[0] || i, c = n.getElementsByTagName("base")[0], p = u.getElementsByTagName("link"), f = [], d = function () {
    for (var t = p, n = t.length, i = 0, r, o, s, l; n > i; i++)r = t[i], o = r.href, s = r.media, l = r.rel && "stylesheet" === r.rel.toLowerCase(), o && l && !a[o] && (r.styleSheet && r.styleSheet.rawCssText ? (m(r.styleSheet.rawCssText, o, s), a[o] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(o) && !c || o.replace(RegExp.$1, "").split("/")[0] === e.location.host) && f.push({
      href: o,
      media: s
    }));
    h()
  }, h = function () {
    if (f.length) {
      var e = f.shift();
      w(e.href, function (t) {
        m(t, e.href, e.media), a[e.href] = !0, h()
      })
    }
  }, m = function (e, t, n) {
    var i = e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi), s = i && i.length || 0, t = t.substring(0, t.lastIndexOf("/")), a = function (e) {
      return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + t + "$2$3")
    }, l = !s && n, u = 0, c, p, f, d, h;
    for (t.length && (t += "/"), l && (s = 1); s > u; u++)for (c = 0, l ? (p = n, o.push(a(e))) : (p = i[u].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, o.push(RegExp.$2 && a(RegExp.$2))), d = p.split(","), h = d.length; h > c; c++)f = d[c], r.push({
      media: f.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
      rules: o.length - 1,
      hasquery: f.indexOf("(") > -1,
      minw: f.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
      maxw: f.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
    });
    x()
  }, g, y, v = function () {
    var e, t = n.createElement("div"), r = n.body, o = !1;
    return t.style.cssText = "position:absolute;font-size:1em;width:1em", r || (r = o = n.createElement("body"), r.style.background = "none"), r.appendChild(t), i.insertBefore(r, i.firstChild), e = t.offsetWidth, o ? i.removeChild(r) : r.removeChild(t), e = b = parseFloat(e)
  }, b, x = function (e) {
    var t = "clientWidth", a = i[t], c = "CSS1Compat" === n.compatMode && a || n.body[t] || a, f = {}, d = p[p.length - 1], h = (new Date).getTime();
    if (e && g && l > h - g)return clearTimeout(y), void(y = setTimeout(x, l));
    g = h;
    for (var m in r) {
      var w = r[m], C = w.minw, T = w.maxw, E = null === C, k = null === T, S = "em";
      C && (C = parseFloat(C) * (C.indexOf(S) > -1 ? b || v() : 1)), T && (T = parseFloat(T) * (T.indexOf(S) > -1 ? b || v() : 1)), w.hasquery && (E && k || !(E || c >= C) || !(k || T >= c)) || (f[w.media] || (f[w.media] = []), f[w.media].push(o[w.rules]))
    }
    for (var m in s)s[m] && s[m].parentNode === u && u.removeChild(s[m]);
    for (var m in f) {
      var N = n.createElement("style"), D = f[m].join("\n");
      N.type = "text/css", N.media = m, u.insertBefore(N, d.nextSibling), N.styleSheet ? N.styleSheet.cssText = D : N.appendChild(n.createTextNode(D)), s.push(N)
    }
  }, w = function (e, t) {
    var n = C();
    n && (n.open("GET", e, !0), n.onreadystatechange = function () {
      4 != n.readyState || 200 != n.status && 304 != n.status || t(n.responseText)
    }, 4 != n.readyState && n.send(null))
  }, C = function () {
    var e = !1;
    try {
      e = new XMLHttpRequest
    } catch (t) {
      e = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return function () {
      return e
    }
  }();
  d(), respond.update = d, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
}
}(this),
  $(document).ready(function () {});
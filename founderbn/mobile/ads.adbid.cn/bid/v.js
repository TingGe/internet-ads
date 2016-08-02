//origin       http://ads.adbid.cn/bid/?v=1&sid=555d4d917484d63ba810_b5a0a2826d13b25e4846_1450707577c89f18b56742&pub=555d4d917484d63ba810&slt=b5a0a2826d13b25e4846&rid=1450707577c89f18b56742&var=&pic=0&mpic=0&scw=980&doc=http%3A%2F%2F114.215.114.158%2Fggj.html&top=http%3A%2F%2F114.215.114.158%2Fggj.html&ref=&mac=&hash=A::&sch=1739&ori=0&title=&erv

(function(data) {
  function verify() {
    if (data.ad && data.ad.verify) {
      var t = new Image;
      t.setAttribute("src", data.ad.verify), t.style.cssText = "width:1px;height:1px;display:none;", div.appendChild(t)
    }
  }
  var adPlayer = {
      compile: function(t) {
        var e = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          },
          i = /\\|'|\r|\n|\u2028|\u2029/g,
          o = function(t) {
            return "\\" + e[t]
          },
          n = /<%=([\s\S]+?)%>|<%-([\s\S]+?)%>|<%([\s\S]+?)%>|$/g,
          a = 0,
          r = "__p+='";
        t.replace(n, function(e, n, d, s, l) {
          return r += t.slice(a, l).replace(i, o), a = l + e.length, n ? r += "'+\n((__t=(" + n + "))==null?'':escape(__t))+\n'" : d ? r += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : s && (r += "';\n" + s + "\n__p+='"), e
        }), r = 'var __t,__p ="",escape=function(s){return ("" + s).replace(/&|<|>|"|\'|`/g, function (m) { return {"&": "&amp;", "<": "&lt;", ">": "&gt;", \'"\': "&quot;", "\'": "&#x27;", "`": "&#x60;"}[m];})};with(obj||{}){\n' + r + "';\n}\nreturn __p;\n";
        var d;
        try {
          d = new Function("obj", r)
        } catch (s) {
          throw s.source = r, s
        }
        return d.source = "function(obj){\n" + r + "}", d
      },
      deentitize: function(t) {
        if (t.length)
          for (var e = function(t) {
              return t = t.replace(/&quot;/g, '"'), t = t.replace(/&apos;/g, "'"), t = t.replace(/&amp;/g, "&")
            }, i = t.length - 1; i >= 0; i--) {
            var o = t[i];
            o.type && "text" === o.type && (o.title = e(o.title || ""), o.text = e(o.text || ""))
          }
      },
      popup: function(t, e) {
        var i = window.open("", "_blank", e);
        i.document.write(t), setTimeout(function() {
          i && window && (i.focus(), window.blur())
        }, 250)
      },
      _setDoc: function(t, e) {
        t.setAttribute("data-srcdoc", e);
        var i = "javascript: try{document.charset= 'UTF-8';window.frameElement.getAttribute('data-srcdoc');}catch(e){document.write('<script>document.domain=\\'" + document.domain + "\\';document.write(window.frameElement.getAttribute(\\'data-srcdoc\\'))<\/script>')}";
        t.setAttribute("src", i);
        try {
          t.contentWindow && (t.contentWindow.location = i)
        } catch (o) {}
      },
      _closePos: function(t) {
        return t.position ? t.position.split(",") : ["bottom", "right"]
      },
      createIframe: function(t) {
        var e = document.createElement("iframe");
        return this._setDoc(e, t), e.setAttribute("seamless", ""), e.setAttribute("scrolling", "no"), e.setAttribute("frameborder", "no", 0), e.setAttribute("border", 0), e.setAttribute("marginwidth", 0), e.setAttribute("marginheight", 0), e.setAttribute("allowtransparency", !0), e.style.cssText = "width:100%;height:100%;background-color:transparent;", e
      },
      getStyle: function(t) {
        var e = "display:block;box-sizing:border-box;border:0;padding:0;margin:0;z-index:2147483647;";
        if (e += "mobile" === t.type || "mstatic" === t.type ? "font-size:16px;overflow:hidden;width:100%;height:" + t.userDefine.mobileHeight + "px;position: relative;" : "width:" + t.style.width + t.style.widthunit + ";height:" + t.style.height + t.style.heightunit + ";", "fixed" === t.type || "mobile" === t.type) {
          e += "position:fixed;background-color:transparent;";
          var i = t.style ? this._closePos(t.style) : ["bottom", "right"];
          "center" === i[1] ? (e += "mobile" === t.type ? "left: 0px; right: 0px;" : "left:50%;margin-left:-" + +t.style.width / 2 + (t.style.widthunit += ";"), e += i[0] + ":0px;") : e += i[0] + ":0px;" + i[1] + ":0px;", "fixed" === t.type && (e += "top" === i[0] ? "_position:absolute;_top:expression(offsetParent.scrollTop);" : "_position:absolute;_bottom:auto;_top:expression(eval((document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)));")
        } else e += "position:relative;";
        return e
      },
      closeStyle: function(t) {
        var e = t.style && t.style.close ? this._closePos(t.style.close) : ["bottom", "right"],
          i = "";
        if ("mobile" === t.type) {
          i = "position:absolute;right:5px;margin:0;padding:0;z-index:999;";
          var o = "url(" + t.$host + "/mobile-black-close.png) no-repeat;";
          if (t.report) {
            var n = "#777",
              a = "#ddd";
            t.template && "black" === t.template && (n = "#eee", a = "#555");
            var r = "border:1px dashed " + n + ";";
            i += "background-color:" + a + "; opacity:0.6;color:" + n + ";top:0.125em;width:1.2em;height:1.2em;line-height:1.2em;text-align:center;border-radius:0.6em;font-weight:bold;" + r
          } else t.style.template && "black" === t.style.template && (o = "url(" + t.$host + "/mobile-white-close.png) no-repeat;"), i += "top:50%;margin-top:-0.8em;width:1.6em;height:1.6em;color:transparent;background:" + o + ";background-size:26px"
        } else {
          var d = t.ad && t.ad.length && t.ad[0] && t.ad[0].adID && "bd" === t.ad[0].adID.split("-")[0] && t.pinfo && /12|15/.test(t.pinfo),
            s = d ? "/close_16.png" : "/cl_rt.png",
            l = d ? "width: 16px; height: 16px;" : "width: 20px; height: 20px;";
          i = l + "display: block; position: absolute; cursor: pointer; z-index: 100; background: url(" + t.$host + s + ") no-repeat;", i += ("bottom" === e[0] ? "bottom:0px;" : "top:0px;") + e[1] + ":0px;"
        }
        return i
      },
      getUserDefineSize: function(t) {
        var e = {},
          i = t.size ? /(\d+)(\:|x|\*)(\d+)$/.exec(t.size) : null,
          o = e.mobileWidth = +t.scw;
        i && "100" === i[1] && "%" === t.style.widthunit ? e.mobileHeight = +i[3] : e.mobileHeight = i ? o / +i[1] * +i[3] : o / 20 * 3, e.widthunit = "px", e.heightunit = "px";
        var n = o / 20 * 3;
        if (n !== e.mobileHeight) {
          var a, r, d = e.mobileHeight;
          2.5 > o / d ? (a = o / 4800 * 35, r = 1e3) : (a = 1e3, r = d / 1536 * 35);
          var s = a > r ? r : a;
          e.isDefine = !0, e.fontSize = s
        }
        return e
      },
      mediaReportStyle: function(t, e) {
        var i = "position:absolute;z-index:999;";
        if (t.isMobile) {
          var o, n = t.template || "default",
            a = "#777;",
            r = "#ddd;";
          "black" === n && (a = "#eee;", r = "#555;"), o = t.adType && 0 === t.adType.indexOf("txt") ? "border:1px dashed " + a : "border:1px solid " + r, a = "color:" + a, r = "background-color:" + r, i += "position:absolute;bottom:0.13em;opacity:0.6;text-decoration:none;right:5px;width:1.2em;height:1.2em;line-height:1.2em;border-radius:0.6em;font-family:tahoma,arial,'Hiragino Sans GB',font-weight:bold;text-align:center;" + r + a + o
        } else {
          var d = t.style.close || {},
            s = d.position && t.style.close.position.split(",") || ["bottom", "right"],
            l = t.ad.length && t.ad[0] && "bd" === t.ad[0].adID.split("-")[0] && t.pinfo && /12|15/.test(t.pinfo) ? !0 : !1,
            p = l ? "width:16px; height:16px;background-size:16px;" : "width:20px; height:20px;background-size:20px;",
            c = l ? "/complain_16.png" : "/ad_rt.png";
          i += p + ("bottom" === s[0] ? "bottom:0px;" : "top:0px;") + (s[1] + ":" + (t.style.close ? "18px" : 0)) + ";color:transparent;display:block;border:0;padding:0px;margin:0px;cursor:pointer;z-index:100;;background: url(" + t.$host + c + ") no-repeat;"
        }
        return i
      }
    },
    outDivCss = "";
  if ("sdk" !== data.origin && (data.userDefine = adPlayer.getUserDefineSize(data), outDivCss = adPlayer.getStyle(data)), data.ad && data.ad.scriptParams)
    for (var obj = {}, params = data.ad.scriptParams.split("&"), i = params.length - 1; i >= 0; i--) "" !== params[i] && params[i].indexOf("=") > -1 && (obj[params[i].split("=")[0]] = params[i].split("=")[1]);
  var div = document.createElement("div");
  if (div.setAttribute("id", data.adId + "_0"), div.style.cssText = outDivCss, "sdk" === data.origin) document.body.appendChild(div);
  else {
    var script = document.getElementById(data.adId);
    script.parentNode.insertBefore(div, script)
  }
  window.loader || (window.loader = {
    state: 0,
    tasks: [],
    add: function(t) {
      this.tasks.push(t)
    },
    exec: function() {
      !this.state && this.tasks.length && (this.state = 1, this.tasks.shift()())
    },
    finish: function() {
      this.state = 0, this.tasks.length > 0 && this.exec()
    }
  });
  var yzid = obj && obj.yzid || "ada42775";
  window.loader.add(function(t, e) {
    return function() {
      var i, o, n;
      i = document.createElement("div"), i.setAttribute("id", e + "_xz"), t.appendChild(i), o = document.createElement("script"), o.text = "var youziDivId = '" + e + "_xz';var yzId = '" + yzid + "';var autoSize = true;", t.appendChild(o), n = document.createElement("script"), n.setAttribute("src", "http://api.adxiaozi.com:8085/static/youzi.js"), n.onload = n.onreadystatechange = function() {
        (!this.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, window.loader.finish())
      }, t.appendChild(n), verify()
    }
  }(div, data.adId)), window.loader.exec();
  var yz_nofill = function() {
    var t = document.getElementById(data.adId + "_0");
    if (t) {
      var e = document.createElement("script");
      e.setAttribute("charset", "utf-8"), e.src = data.$host + data.bid + "&skip=bdmjs", t.parentNode ? (t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t)) : document.body.insertBefore(e, document.body.children.item(0))
    }
  };
  window.addEventListener && window.addEventListener("message", function(t) {
    t && t.data && t.data.nofill && yz_nofill && yz_nofill()
  }), ! function(t) {
    if (t && t.ad && (!t.isMobile || !t.pinfo || /21|22|23|26|27/.test(t.pinfo))) {
      /mImagePlus|imagePlus|popup|couplet/.test(t.type) || (t.report = adPlayer.mediaReportStyle(t));
      var e = document.getElementById(t.adId + "_0"),
        i = t.adId.split("_")[1],
        o = t.$host,
        n = t.ip,
        a = window !== a ? window.location.toString() : window.top.location.toString(),
        r = document.createElement("a");
      (t.ad.length && t.ad[0] && t.ad[0].adID && "bd" === t.ad[0].adID.split("-")[0] && t.pinfo && /12|15/.test(t.pinfo) || t.isMobile) && (r.href = "http://pro.cn/complain.html?slot=" + i + "&host=" + o + "&ip=" + n + "&top=" + encodeURIComponent(a), r.target = "_blank"), r.innerHTML = t.isMobile ? "<b>?</b>" : "", r.style.cssText = t.report, e.appendChild(r)
    }
  }(data), data.style.close && ! function(t) {
    var e = document.getElementById(t.adId + "_0"),
      i = adPlayer.closeStyle(t),
      o = document.createElement("div");
    o.style.cssText = i, t.report && t.isMobile && (o.innerHTML = "&#215;"), o.onclick = function() {
      return e.parentNode.removeChild(div), !1
    }, e.appendChild(o)
  }(data);
})({
  "ad": {
    "type": "script",
    "scriptParams": "&yzid=adf8a636",
    "dsp": "bdmjs",
    "verify": "http://ads.adbid.cn/verify?v=YzcyREpqbl9iN1d2U0cxd2hnUTRDWjF6ODhFeyJ2aWV3VGltZSI6MTQ1MDcwNzU3NjM1MCwiZHNwSUQiOiJiZG1qcyIsInVwdklEIjoiN2QyYjQwY2ZhODdhNmNlNyIsInNsb3RJRCI6ImI1YTBhMjgyNmQxM2IyNWU0ODQ2IiwidmFycyI6IiIsInB1YklEIjoiNTU1ZDRkOTE3NDg0ZDYzYmE4MTAiLCJvcmlnaW4iOiJ3ZWIifQ"
  },
  "$host": "http://ads.adbid.cn",
  "bid": "/bid/?v=1&sid=555d4d917484d63ba810_b5a0a2826d13b25e4846_1450707577c89f18b56742&pub=555d4d917484d63ba810&slt=b5a0a2826d13b25e4846&rid=1450707577c89f18b56742&var=&pic=0&mpic=0&scw=980&doc=http%3A%2F%2F114.215.114.158%2Fggj.html&top=http%3A%2F%2F114.215.114.158%2Fggj.html&ref=&mac=&hash=A::&sch=1739&ori=0&title=&erv=",
  "adId": "555d4d917484d63ba810_b5a0a2826d13b25e4846_1450707577c89f18b56742",
  "trueType": "script",
  "kw": [],
  "pinfo": 21,
  "doc": "http://114.215.114.158/ggj.html",
  "ip": "1.12.28.93",
  "isMobile": true,
  "scw": "980",
  "uid": "56780779efab6310009b2a7a",
  "type": "mstatic",
  "adType": ["txt", "img", "flash", "iframe"],
  "template": "moren",
  "row": 1,
  "col": 1,
  "size": "tabg_gchf_gahf1_20:3",
  "style": {
    "background": {
      "color": "#ffffff"
    },
    "backgroundTransparent": false,
    "border": {
      "width": 1,
      "color": "#000000",
      "style": "solid"
    },
    "close": null,
    "width": 100,
    "height": 70,
    "widthunit": "%",
    "heightunit": "px",
    "titleOnly": false,
    "title": {
      "color": "#0000FF",
      "fontSize": 10,
      "length": 10,
      "lineHeight": 18,
      "display": "block",
      "hover": "#0000FF"
    },
    "text": {
      "color": "#444444",
      "fontSize": 9,
      "length": 30,
      "lineHeight": 16.2,
      "display": "block"
    },
    "surl": {
      "color": "#008000",
      "fontSize": 9,
      "length": 10,
      "lineHeight": 16.2,
      "display": "block"
    },
    "noBorder": false,
    "isInline": false,
    "ieSixSize": false
  }
})

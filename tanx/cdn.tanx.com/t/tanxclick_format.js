/**
 * 代码翻译：听歌
 * 电子邮件：505253293@163.com
 * 个人主页：https://github.com/TingGe
 * 代码地址：http://cdn.tanx.com/t/tanxclick.js
 * 文档地址：无
 *
 * @fileoverview Tanx SSP 客户端 点击监测 javascript 代码。
 */

!function(item, levels) {
  /**
   * @param {Event} event
   * @return {undefined}
   */
  function onTouchStart(event) {
    var pos = update(event);
    /** @type {number} */
    endTime = new Date - 0;
    highlight_element = event.target;
    i = pos.x;
    y = pos.y;
  }
  /**
   * @param {Event} event
   * @return {undefined}
   */
  function onload(event) {
    var a = update(event);
    if (!(highlight_element != event.target || (Math.abs(a.x - i) > 6 || Math.abs(a.y - y) > 6)) && (endTime ? (el.mc = new Date - endTime, endTime = 0) : el.mc = 0, el.ex = i, el.ey = y, el.ml = 0, el.mox = 0, el.moy = 0, el.aml = 0, el.dt = 0, el.st = 0, el.mdx = i, el.mdy = y, link = parse(event))) {
      var _position = (link.getAttribute("href", 2).match(/http:\/\/([^\/]+)/i) || ["", ""])[1];
      init(_position);
    }
  }
  /**
   * @param {Event} event
   * @return {undefined}
   */
  function onTouchMove(event) {
    /** @type {number} */
    var width = (new Date).getTime();
    /** @type {number} */
    var i = width - n;
    if (i > 5E3 ? el.mt = configList = [] : el.dt += i, n = width, configList.length < 5) {
      var a = update(event);
      var x1 = a.x;
      var y1 = a.y;
      if (Math.abs(x1 - x2) > 10 || Math.abs(y1 - y2) > 10) {
        x2 = x1;
        y2 = y1;
        configList.push(x1 + "," + y1);
      }
    }
  }
  /**
   * @param {Event} event
   * @return {undefined}
   */
  function handleEvent(event) {
    var e = event || window.event;
    onTouchMove(e);
    /** @type {number} */
    endTime = 0;
  }
  /**
   * @param {Event} e
   * @return {undefined}
   */
  function handler(e) {
    var def;
    var event = e || window.event;
    if (null === el.ex || null === el.ey) {
      def = update(event);
      el.ex = def.x;
      el.ey = def.y;
    }
    if (null === el.ml) {
      /** @type {number} */
      el.ml = 1;
    } else {
      el.ml++;
    }
    var result = parse(event);
    if (result) {
      /** @type {number} */
      startTime = new Date - 0;
      def = update(event);
      el.mox = def.x;
      el.moy = def.y;
      if (null === el.aml) {
        /** @type {number} */
        el.aml = 1;
      } else {
        el.aml++;
      }
    }
  }
  /**
   * @param {Event} event
   * @return {?}
   */
  function parse(event) {
    var link = event.srcElement ? event.srcElement : event.target;
    if ("A" != link.tagName.toUpperCase()) {
      /** @type {number} */
      var c = 5;
      for (;c > 0;c--) {
        if (link = link.parentNode, !link || !link.tagName) {
          return null;
        }
        if ("A" == link.tagName.toUpperCase()) {
          break;
        }
      }
      if ("A" != link.tagName.toUpperCase()) {
        return null;
      }
    }
    return "undefined" == typeof link.href ? null : "A" == link.tagName.toUpperCase() && 0 !== link.getAttribute("href", 2).indexOf("http") ? null : link;
  }
  /**
   * @param {Event} event
   * @return {?}
   */
  function update(event) {
    var ev = event || window.event;
    if (hasTouch) {
      try {
        return{
          x : event.changedTouches[0].pageX,
          y : event.changedTouches[0].pageY
        };
      } catch (b) {
      }
    }
    return ev.pageX || ev.pageY ? {
      x : ev.pageX,
      y : ev.pageY
    } : {
      x : ev.clientX + document.body.scrollLeft - document.body.clientLeft,
      y : ev.clientY + document.body.scrollTop - document.body.clientTop
    };
  }
  /**
   * @param {Event} e
   * @return {undefined}
   */
  function fn(e) {
    var event = e || window.event;
    /** @type {number} */
    endTime = new Date - 0;
    /** @type {number} */
    el.st = endTime - startTime;
    var pos = update(event);
    el.mdx = pos.x;
    el.mdy = pos.y;
    if (4 == event.button) {
      done(event);
    }
    if (2 == event.button) {
      done(event);
    }
  }
  /**
   * @param {Event} e
   * @return {undefined}
   */
  function done(e) {
    if (endTime) {
      /** @type {number} */
      el.mc = new Date - endTime;
      /** @type {number} */
      endTime = 0;
    } else {
      /** @type {number} */
      el.mc = 0;
    }
    try {
      var event = e || window.event;
      if (link = parse(event), !link) {
        return;
      }
      var _position = (link.getAttribute("href", 2).match(/http:\/\/([^\/]+)/i) || ["", ""])[1];
      init(_position);
    } catch (d) {
    }
  }
  /**
   * @param {string} position
   * @return {undefined}
   */
  function init(position) {
    /** @type {Array} */
    var hash = [1];
    hash.push(el.ex + "," + el.ey);
    hash.push(el.ml);
    hash.push(el.mox + "," + el.moy);
    hash.push(el.aml);
    hash.push(el.mt.join("-"));
    hash.push(el.dt);
    hash.push(el.st);
    hash.push(el.mdx + "," + el.mdy);
    hash.push(el.mc);
    hash.push(el.hl);
    hash.push(el.brws_w + "x" + el.brws_h);
    /** @type {string} */
    hash = hash.join("_");
    /** @type {string} */
    hash = hash + "|" + make(hash);
    var path;
    /** @type {number} */
    var i = 0;
    for (;i < levels.length;i++) {
      if (path = keys[levels[i]]) {
        /** @type {number} */
        var originalId = (new Date).getTime();
        /** @type {Image} */
        item.img = new Image;
        /** @type {number} */
        item.img.id = originalId;
        /** @type {boolean} */
        var h = "https:" === location.protocol;
        /** @type {string} */
        var url = decodeURIComponent(path);
        if (h) {
          if (/^http:\/\//i.test(url)) {
            /** @type {string} */
            url = url.replace(/^http:\/\//i, "https://");
          }
        }
        if ("tanxdspv" == levels[i]) {
          url += "&d_r=" + position + "_" + (new Date).getTime().toString().substr(4) + "&tr=" + hash;
        }
        /** @type {string} */
        item.img.src = url;
      }
    }
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function make(a) {
    var c;
    /** @type {number} */
    var hash = 0;
    if (0 === a.length) {
      return hash;
    }
    /** @type {number} */
    k = 0;
    for (;k < a.length;k++) {
      c = a.charCodeAt(k);
      hash = (hash << 5) - hash + c;
    }
    return(hash >>> 0).toString(16);
  }
  if (!item.__tanxclick_bind__) {
    /** @type {boolean} */
    item.__tanxclick_bind__ = true;
    var link;
    /** @type {(HTMLElement|null)} */
    var element = document.body;
    /** @type {Array.<string>} */
    var namespaces = location.href.split("?");
    namespaces.shift();
    /** @type {Array.<string>} */
    var KEYWORDS = (namespaces.join("?") || "").split("&");
    var keys = {};
    /** @type {number} */
    var k = 0;
    for (;k < KEYWORDS.length;k++) {
      /** @type {Array.<string>} */
      var array = KEYWORDS[k].split("=");
      keys[array[0]] = keys[array[0]] || array[1];
    }
    /** @type {boolean} */
    var u = !(!window.attachEvent || window.opera);
    /** @type {boolean} */
    var v = false;
    var context = window.external;
    try {
      /** @type {boolean} */
      v = void 0 !== (context && context.GetObject);
    } catch (x) {
    }
    var highlight_element;
    var i;
    var y;
    /** @type {boolean} */
    var hasTouch = "ontouchstart" in window;
    if (!v && hasTouch) {
      document.addEventListener("touchstart", onTouchStart, false);
      document.addEventListener("touchend", onload, false);
    } else {
      if (u) {
        element.attachEvent("onclick", done);
        element.attachEvent("onmousemove", handleEvent);
        element.attachEvent("onmouseover", handler);
        element.attachEvent("onmousedown", fn);
      } else {
        element.addEventListener("click", done, false);
        element.addEventListener("mousemove", handleEvent, false);
        element.addEventListener("mouseover", handler, false);
        element.addEventListener("mousedown", fn, false);
      }
    }
    var el = {
      v : 1,
      ex : null,
      ey : null,
      ml : null,
      mox : null,
      moy : null,
      aml : null,
      mt : [],
      dt : 0,
      st : null,
      mdx : null,
      mdy : null,
      mc : null,
      hl : window.history.length,
      brws_w : null,
      brws_h : null
    };
    /** @type {number} */
    var a = el.brws_w = element.clientWidth || 0;
    /** @type {number} */
    var b = el.brws_h = element.clientHeight || 0;
    if (!(a && b)) {
      setTimeout(function() {
        /** @type {number} */
        el.brws_w = element.clientWidth;
        /** @type {number} */
        el.brws_h = element.clientHeight;
      }, 20);
    }
    /** @type {number} */
    var endTime = 0;
    /** @type {number} */
    var startTime = 0;
    /** @type {Array} */
    var configList = [];
    /** @type {number} */
    var x2 = 0;
    /** @type {number} */
    var y2 = 0;
    /** @type {number} */
    var n = (new Date).getTime();
  }
}(window, ["tanxdspv", "tanxclick"]);

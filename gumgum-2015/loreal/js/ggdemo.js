cogtu = {};

cogtu.msie = false;

cogtu.inited = false;

var container = document.createElement('div');
container.style.border = 'none';
container.style.margin = 0;
container.style.padding = 0;
container.style.background = 'none';
container.style.position = 'static';
document.body.appendChild(container);

cogtu.Container = container;

cogtu.init = function () {
  if (!cogtu.inited) {
    cogtu.Ads = [];
    window.addEventListener('resize', cogtu.reposition);
    cogtu.sto = setInterval(cogtu.reposition, 1000);
    cogtu.inited = true;
  }
};

cogtu.tokenize = function (s, o) {
  var tr = function (t, k) {
    return encodeURIComponent(o[k] || k);
  };
  return s.replace(/\$\{([^\}]+)\}/g, tr);
};
cogtu.pxorpc = function (s, u) {
  return ~~s ? s + 'px' : s;
};
cogtu.offset = function (el) {
  var width = el.offsetWidth,
    height = el.offsetHeight,
    top = 0, left = 0,
    rect = false, w = window, d = document, de = d.documentElement, b = d.body;
  if (el.getBoundingClientRect) {
    try {
      rect = el.getBoundingClientRect();
      top = ~~(rect.top) + Math.max(w.pageYOffset || 0, de.scrollTop, b.scrollTop, 0) - Math.max(de.clientTop, b.clientTop, 0);
      left = ~~(rect.left) + Math.max(w.pageXOffset || 0, de.scrollLeft, b.scrollLeft, 0) - Math.max(de.clientLeft, b.clientLeft, 0);
    } catch (e) {
      rect = false;
      top = 0;
      left = 0;
    }
  }
  if (!rect) {
    do {
      top += el.offsetTop;
      left += el.offsetLeft;
    } while ((el = el.offsetParent));
  }
  return {
    top: top,
    t: top,
    bottom: top + height,
    b: top + height,
    left: left,
    l: left,
    right: left + width,
    r: left + width,
    height: height,
    h: height,
    width: width,
    w: width
  };
};
cogtu.inView = function (el) {
  var w = window, d = window.document, de = document.documentElement, b = d.body, eo = cogtu.offset(el),
    st = parseInt(b.scrollTop || de.scrollTop, 10), sb = st + de.clientHeight;
  return (eo.t > st && eo.b < sb) || (eo.t > st && eo.t < sb) ||
    (eo.b < sb && eo.b > st) || (eo.t < st && eo.b > sb);
};
cogtu.reposition = function () {
  cogtu.Ads.forEach(function (_this) {
    _this.position();
  });
};
cogtu.getTarget = function (target) {
  switch (true) {
    case (typeof target == 'string' && /\.[jpe?g|png|gif]/.test(target)):
      return document.querySelector('img[src="' + target + '"]');
    case (target.tagName && target.tagName.toUpperCase() == 'IMG'):
      return target;
    default:
      return false;
  }
};
cogtu.getEI = function (element) {
    var offset = {left:0,top:0};
    var node = element;
    while(node){
      offset.left += node.offsetLeft;
      offset.top += node.offsetTop;
      node = node.offsetParent;
    }

  return {
    h: element.height,
    w: element.width,
    left: offset.left + parseInt(getComputedStyle(element, null).borderLeftWidth,10),
    top: offset.top + parseInt(getComputedStyle(element, null).borderTopWidth,10)
  };
};

// Cogtu ADs
cogtu.Ad = function (target, file, size, options, undefined) {
  cogtu.init();
  var thiz = this;

  options.inview = true;
  options.housing = true;
  options.click = false;
  this.options = options;

  this.target = cogtu.getTarget(target);
  this.shown = false;
  if (!this.target || this.target.length < 1 || undefined === this.target) return {};
  if (this.options.minw && this.options.minw > this.target.width()) return {};
  this.size = (size instanceof Array) ? {w: ~~(size[0]), h: ~~(size[1])} : size;
  this.adcode = this.adurl = cogtu.tokenize(file, this.target);
  if (cogtu.msie) this.adcode = this.adcode.replace(/<object/, '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
  if (this.adcode === false) return {};
  this.ad = this.buildAd();
  if (this.options.inview) {
    this.interval = setInterval(function () {
      if (cogtu.inView(thiz.target)) {
        clearInterval(thiz.interval);
        cogtu.Container.appendChild(thiz.ad);
        thiz.shown = true;
      }
    }, 250);
  } else {
    cogtu.Container.appendChild(this.ad);
    this.shown = true;
  }
  cogtu.Ads.push(this);
  this.position();
  //this.target.data('Ad', this);
  return this;
};
cogtu.Ad.prototype.buildAd = function () {
  var tmp, cll,
    ad = document.createElement('div'),
    thiz = this,
    html = [],
    bg = "images/bg/trans.gif",
    onClick = function () {
      switch (true) {
        case typeof (thiz.options.click) === 'function':
          thiz.options.click.call(thiz);
          break;
        case typeof(thiz.options.click) === 'string':
          window.open(cogtu.tokenize(thiz.options.click, thiz.target), '_cogtu_ad');
          break;
        default:
          alert('Ad click!');
          break;
      }
      return false;
    };
  ad.style.position = 'absolute';
  ad.style.margin = 0;
  ad.style.padding = 0;
  ad.style.visibility = 'hidden';

  cll = document.createElement('div');
  cll.style.zIndex = 101;
  cll.style.top = 0;
  cll.style.left = 0;
  cll.style.position = 'absolute';
  cll.style.cursor = 'pointer';
  cll.style.background = 'transparent url(images/bg/trans.gif) repeat scroll 0 0';

  tmp = this.options;

  html.push('<div style="position:relative;height:100%;width:100%;background:transparent;color:inherit;font:normal normal normal 12px/0.5 Arial;margin-top:0px;opacity:' + (tmp.opacity || 1) + ';">');
  if (tmp.adsby !== false) html.push('<a href="#" style="position:absolute;bottom:' + cogtu.pxorpc(tmp.adsbyBottom || 'auto') + ';top:' + cogtu.pxorpc(tmp.adsbyTop || 'auto') + ';left:' + cogtu.pxorpc(tmp.adsbyLeft || 'auto') + ';right:' + cogtu.pxorpc(tmp.adsbyRight || 'auto') + ';color:' + (tmp.adsbyColor || '#000') + ';font:normal normal ' + (tmp.adsbySize || '10') + '/1 Arial;text-decoration:none;z-index:102;">' + (tmp.adsbyTxt || ' ') + '</a>');
  if (tmp.close !== false) {
    if (/\.(gif|png|jpg|jpeg)$/.test(tmp.closeBtn)) tmp.closeBtn = '<img class="clsbtn" src="' + tmp.closeBtn + '" style="position:absolute;top:' + cogtu.pxorpc(tmp.closeTop || 'auto') + ';bottom:' + cogtu.pxorpc(tmp.closeBottom || 'auto') + ';right:' + cogtu.pxorpc(tmp.closeRight || 'auto') + ';z-index:103;">';
    else if (!!tmp.closeBtn) tmp.closeBtn = '<div class="clsbtn" style="position:absolute;top:' + cogtu.pxorpc(tmp.closeTop || 'auto') + ';bottom:' + cogtu.pxorpc(tmp.closeBottom || 'auto') + ';right:' + cogtu.pxorpc(tmp.closeRight || 'auto') + ';font:normal 10px/10px Arial;z-index:103;">' + tmp.closeBtn + '</div>';
    else tmp.closeBtn = '<img class="clsbtn" src="http://c.cogtu.com/ads/com/cogtu/housing-h2-close.gif" style="position:absolute;top:' + cogtu.pxorpc(tmp.closeTop || 'auto') + ';bottom:' + cogtu.pxorpc(tmp.closeBottom || 'auto') + ';right:' + cogtu.pxorpc(tmp.closeRight || 'auto') + ';z-index:103;" />';
    html.push(tmp.closeBtn);
  }
  html.push(this.adcode);
  html.push('</div>');
  ad.innerHTML = html.join('');
  ad.style.top = 0;
  ad.style.right = 0;

  cll.style.width = '100%';
  cll.style.height = '100%';

  //if (this.options.style.clc) closeBtn.html(this.options.style.clc);
  //if (this.options.style.clt) closeBtn.css('top',this.options.style.clt);
  ad.style.zIndex = 100;
  if (this.options.click) {
    if (this.options.directClick) ad.click(onClick);
    else {
      cll.click(onClick);
      ad.append(cll);
    }
  }
  ad.querySelector(".clsbtn").addEventListener("click", function () {
    thiz.closeDemo();
  });
  return ad;
};
cogtu.Ad.prototype.closeDemo = function () {
  cogtu.Ads.splice(cogtu.Ads.indexOf(this), 1);
  this.ad.remove();
  this.ad = null;
};
cogtu.Ad.prototype.position = function () {
  if (!this.shown) return;
  var ts = cogtu.getEI(this.target),
    ad = this.ad, pos, fpos = {}, adts;

  var ad_style = getComputedStyle(ad, null) || ad.style;
  adts = {
    w: parseInt(ad_style.borderLeftWidth, 10) + parseInt(ad_style.borderRightWidth, 10) + parseInt(ad_style.paddingLeft, 10) + parseInt(ad_style.paddingRight, 10) + parseInt(ad_style.width, 10),
    h: parseInt(ad_style.borderWidth, 10) + parseInt(ad_style.borderBottomWidth, 10) + parseInt(ad_style.paddingTop, 10) + parseInt(ad_style.paddingBottom, 10) + parseInt(ad_style.height, 10)
  };

  pos = this.options.position;
  switch (pos.x) {
    case 'l':
      fpos.left = ts.left;
      break;
    case 'r':
      fpos.left = ts.left + ts.w - adts.w;
      break;
    case 'c':
      fpos.left = ts.left + (ts.w - adts.w) / 2;
      break;
    default:
      fpos.left = ~~pos.x > 0 ? (ts.left + ~~pos.x) : (ts.left + ts.w - adts.w + ~~pos.x);
      break;
  }
  switch (pos.y) {
    case 't':
      fpos.top = ts.top;
      break;
    case 'b':
      fpos.top = ts.top + ts.h - adts.h;
      break;
    case 'm':
      fpos.top = ts.top + (ts.h - adts.h) / 2;
      break;
    default:
      fpos.top = ~~pos.y > 0 ? (ts.top + ~~pos.y) : (ts.top + ts.h - adts.h + ~~pos.y);
      break;
  }
  if (ts.h * ts.w > 1000)
    ad.style.left = fpos.left + "px";
    ad.style.top = fpos.top + "px";
    var width = parseInt(this.size.w, 10) || parseInt(this.target.width, 10);
    ad.style.width = width + "px";
    var height = parseInt(this.size.h, 10) || parseInt(this.target.height, 10);
    ad.style.height = height + "px";
    ad.style.visibility = 'visible';
};
cogtu.Ad.prototype.show = function () {
  this.shown = true;
};
cogtu.Ad.prototype.hide = function () {
  this.shown = false;
};

CogtuAd = cogtu.Ad;

window.onload = function () {
  if (window.noautoad) return;

  var img = document.querySelector('img[src="fashionstylemag_com/8c59f63b1072b73ba237aa1adc3b2c47_sm3kjj.jpg"]');

  var ad = {
      c: 'loreal',
      u: '<div id="CTUID" style="display:block;width:100%;height:125px" onclick="window.open(\'http://www.lorealparisusa.com/en/products/hair/hair-color/hubs/ombre\')"><iframe onload="this.contentWindow.document.onclick=this.parentNode.onclick" src="html5/index.html" width="100%" height="100%" frameborder="0"></iframe></a>',
      s: [false, 125],
      x: 'l',
      y: 'b',
      ops: {
        click: false,
        closeBtn: 'images/RM_29x31.png',
        closeBottom: 86,
        closeRight: 2,
        adsbyTxt: '',
        adsbyColor: '#fff',
        adsbyBottom: 101,
        adsbyRight: 31
      }
    },
    thiz = this;

  if (!ad.click) ad.click = false;
  if (!ad.ops) ad.ops = {};
  if (ad.click && /^http/.test(ad.click)) ad.click = ad.click.replace(/\{([^\}]+)\}/g, function (t, k) {
    return encodeURIComponent(thiz[k] || k);
  });
  ad.u = !/^</.test(ad.u) ? (ad.u + (!/\?/.test(ad.u) ? '?' : '&') + 't=' + (+new Date())) : ad.u;
  ad.ops.position = {x: ad.x, y: ad.y};
  ad.ops.click = ad.click;
  
  (new CogtuAd(img, ad.u, ad.s, ad.ops));
};

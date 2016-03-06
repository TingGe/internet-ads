(function () {
  var NATIVE = {
    conflist: [],
    exposureOids: [],
    rlMap: [],
    apUrlMap: [],
    isAndroidApp: [],
    CONST: {
      MIN_LOADCOUNT: 1,
      MAX_LOADCOUNT: 10,
      ACTTYPE_DOWNLOAD: 35,
      AD_ACTITON_TYPE: {
        URL: 0,
        APP: 1,
        PHONE: 18
      },
      PRODUCT_TYPE: {
        OPEN_APP: 12,
        MYAPP: 5,
        IOSAPP: 19
      }
    },
    init: function (cfgs) {
      var _s = NATIVE,
        req = _s.getReqCond(cfgs),
        posid = cfgs.posid || cfgs.placement_id,
        count = cfgs.count,
        appid = cfgs.appid || cfgs.app_id,
        onComplete = cfgs.onComplete;
      if (!_s.checkLoadCondition(posid, count, onComplete))
        return;
      _s.conflist.push({
        posId: posid,
        count: count,
        platform: "mobile",
        onComplete: function (o) {
          _s.callback(posid, o, cfgs);
        },
        context: {
          appid: appid,
          common: req
        }
      });
    },
    checkLoadCondition: function (posid, count, onComplete) {
      if (!posid || !posid.match(/^\d+$/))
        return false;
      if (!count || !commUtil.isInteger(count) || count < NATIVE.CONST.MIN_LOADCOUNT || count > NATIVE.CONST.MAX_LOADCOUNT)
        return false;
      if (!onComplete || typeof onComplete != "function")
        return false;
      return true;
    },
    getReqCond: function (cfgs) {
      var _s = NATIVE;
      var ua = navigator.userAgent || '',
        muidtype = cfgs.muidtype || cfgs.muid_type,
        muid = cfgs.muid,
        obj = {
          c_os: '',
          c_hl: navigator.language,
          url: document.location.href,
          sdk_src: 'mobile_union_js',
          tmpallpt: true
        };
      ua = ua.toLowerCase();
      if (/android|adr/.test(ua)) {
        obj.c_os = 'android';
      } else if (/ios|iphone|ipad|itouch/.test(ua)) {
        obj.c_os = 'ios';
      }
      if (muidtype && commUtil.isValidMuidtype(muidtype) && muid && commUtil.isValidMuid(muid)) {
        obj.muidtype = parseInt(muidtype);
        obj.muid = muid;
      }
      if (commUtil.webpEnabled) {
        obj.webp = '1';
      }
      return obj;
    },
    loadAd: function (pid) {
      var _s = NATIVE,
        req = [];
      for (var i = 0; i < _s.conflist.length; i++) {
        if (pid == _s.conflist[i].posId) {
          req.push(_s.conflist[i]);
          break;
        }
      }
      GDT.load(req);
    },
    checkAndLoadNativeAd: function () {
      var _s = NATIVE;
      if (_s.conflist && _s.conflist.length > 0 && !_s.qbsLoaded) {
        commUtil.loadJS("http://qzonestyle.gtimg.cn/qzone/biz/comm/js/qbs.js", function () {
          _s.qbsLoaded = true;
          GDT.load(_s.conflist);
        });
      }
    },
    isAppAd: function (adData) {
      if (adData && (adData.acttype == NATIVE.CONST.AD_ACTITON_TYPE.APP || adData.producttype == NATIVE.CONST.PRODUCT_TYPE.IOSAPP || adData.producttype == NATIVE.CONST.PRODUCT_TYPE.OPEN_APP || adData.producttype == NATIVE.CONST.PRODUCT_TYPE.MYAPP)) {
        return true;
      } else {
        return false;
      }
    },
    callback: function (posid, data, cfgs) {
      var _s = NATIVE;
      var contentObj = {};
      var adList = [];
      if (data.ret && data.data && data.data.length > 0) {
        var dataList = data.data;
        for (var i = 0; i < dataList.length; i++) {
          var adObj = {};
          var elm = dataList[i];
          _s.rlMap[elm.cl + posid] = elm.rl;
          _s.apUrlMap[elm.cl + posid] = elm.apurl;
          if (_s.isAppAd(elm) && elm.producttype == _s.CONST.PRODUCT_TYPE.OPEN_APP) {
            _s.isAndroidApp[elm.cl] = true;
          }
          adObj.advertisement_id = elm.cl;
          adObj.is_app = _s.isAppAd(elm);
          adObj.icon_url = elm.img2 || "";
          adObj.img_url = elm.img || "";
          adObj.description = elm.desc || "";
          if (adObj.is_app) {
            adObj.app_name = elm.txt || "";
            adObj.app_score = elm.ext && elm.ext.appscore || -1;
            if (elm.price && elm.price != '-') {
              adObj.app_price = Number(elm.price);
            } else {
              adObj.app_price = -1;
            }
            adObj.download_count = elm.ext && elm.ext.alist && elm.ext.alist[2025] && elm.ext.alist[2025].aid && elm.ext.alist[2025].aid.total || -1;
          } else {
            adObj.title = elm.txt || "";
          }
          adList.push(adObj);
        }
      }
      contentObj = {
        data: adList,
        ret: data.ret
      }
      cfgs.onComplete && cfgs.onComplete(contentObj);
    },
    doExpose: function (obj) {
      if (obj && obj.placement_id && obj.advertisement_id) {
        var apurl = NATIVE.apUrlMap[obj.advertisement_id + obj.placement_id];
        if (!NATIVE.exposureOids[apurl]) {
          GDT.view(obj.placement_id, obj.advertisement_id);
          NATIVE.exposureOids[obj.advertisement_id] = true;
        }
      }
    },
    doClick: function (obj) {
      var url,
        _s = NATIVE;
      if (obj && obj.s && obj.advertisement_id && obj.placement_id) {
        url = _s.rlMap[obj.advertisement_id + obj.placement_id] + "&s=" + obj.s;
        if (_s.isAndroidApp[obj.advertisement_id]) {
          url = url + "&acttype=" + _s.CONST.ACTTYPE_DOWNLOAD;
          window.open(url);
        } else {
          window.open(url);
        }
      }
    }
  };
  var GDTH = {
    posid: '',
    apurl: '',
    tplType: '',
    posw: 300,
    posh: 250,
    needMask: false,
    adType: '',
    bannerbox: {},
    tbsWebviewValidateValue: 0,
    webviewType: 0,
    missExpose: false,
    tbsLoaded: false,
    posborder: 4,
    adDomain: 'http://qzonestyle.gtimg.cn',
    onClose: function () {},
    onFail: function () {},
    posDomain: '',
    postNum: '',
    init: function (obj) {
      GDTH.cfgs = obj;
      var cfg = obj;
      obj.adType = obj.type;
      GDTH.filltype = cfg.filltype || cfg.fill_type;
      GDTH.adType = cfg.adType;
      GDTH.posDomain = encodeURIComponent(document.location.protocol + '//' + document.location.host);
      GDTH.postNum = Math.random();
      GDTH.posid = cfg.posid || cfg.placement_id;
      GDTH.initPlatform();
      if (cfg.adType == 'banner') {
        GDTH.initBanner(obj);
      } else if (cfg.adType == 'interstitial') {
        GDTH.initInter(obj);
      } else if (cfg.adType == 'native') {
        NATIVE.init(obj);
      }
      commUtil.debugTest();
    },
    initPlatform: function () {
      GDTH.platform = 'web';
      if (navigator.userAgent.search('QQ/') !== -1) {
        GDTH.platform = 'mqq';
        var _js = document.createElement('script');
        _js.src = 'http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152';
        document.body.appendChild(_js);
      } else if (navigator.userAgent.search('Qzone') !== -1) {
        if (!window.QZAppExternal || !QZAppExternal.getPlatform) {
          var _js = document.createElement('script');
          _js.src = 'http://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js';
          document.body.appendChild(_js);
        }
        GDTH.platform = 'mqzone';
        GDTH.isHybrid = true;
      } else {
        GDTH.isHybrid = false;
      }
    },
    initBanner: function (obj) {
      var _s = GDTH;
      var bwidth = [640, 480, 320, 240];
      var bheight = [100, 75, 50, 38];
      var w = 480;
      var h = 75;
      var os = GDTH.getOs();
      if (window.screen) {
        w = window.screen.width;
        h = window.screen.height;
        if (os == 'ios') {
          w *= window.devicePixelRatio;
          h *= window.devicePixelRatio;
        }
      } else if (document.body) {
        var pixdevice = window.devicePixelRatio || 1;
        w = document.body.clientWidth * pixdevice;
        h = document.body.clientHeight * pixdevice;
      }
      if (w < h) {
        var swap = h;
        h = w;
        w = swap;
      }
      if (w > bwidth[0]) {
        _s.bannerbox.posw = bwidth[0];
        _s.bannerbox.posh = bheight[0];
      } else if (w > bwidth[1]) {
        _s.bannerbox.posw = bwidth[1];
        _s.bannerbox.posh = bheight[1];
      } else if (w > bwidth[2]) {
        _s.bannerbox.posw = bwidth[2];
        _s.bannerbox.posh = bheight[2];
      } else {
        _s.bannerbox.posw = bwidth[3];
        _s.bannerbox.posh = bheight[3];
      }
      _s.posw = _s.bannerbox.posw;
      _s.posh = _s.bannerbox.posh;
      _s.renderBannerWindow(obj);
    },
    getOs: function () {
      var ua = navigator.userAgent || '';
      ua = ua.toLowerCase();
      if (/android|adr/.test(ua)) {
        return 'android';
      } else if (/ios|iphone|ipad|itouch/.test(ua)) {
        return 'ios';
      }
      return 'uncondi';
    },
    loadGDT: function () {
      GDTH.renderWindow({}, GDTH.posw, GDTH.posh, GDTH.zIndex);
    },
    getWidthHeight: function () {
      var _dw = document.body.clientWidth || 640;
      var _dh = document.body.clientHeight || 100;
      if (_dw > _dh) {
        var swap = _dw;
        _dw = _dh;
        _dh = swap;
      }
      var _s = GDTH;
      _s.inter_posw = 300;
      _s.inter_posh = 250;
      if (_s.inter_posw * 2 < _dw) {
        _s.inter_posw *= 2;
        _s.inter_posh *= 2;
      }
    },
    renderBannerWindow: function (cfg) {
      GDTH.posborder = 0;
      GDTH.renderWindow(cfg, 0, 0, 1, 'http://qzonestyle.gtimg.cn/qzone/biz/res/tmpl/banner.html');
    },
    checkParam: function (val) {
      var valid = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]");
      return !valid.test(val);
    },
    getUid: function () {
      var sid = commUtil.getParameter('sid');
      var openid = commUtil.getParameter('openid');
      var openkey = commUtil.getParameter('openkey');
      var re = '';
      if (sid && commUtil.checkParam(sid)) {
        re += '&sid=' + encodeURIComponent(sid);
      }
      if (openid && commUtil.checkParam(openid)) {
        re += '&openid=' + encodeURIComponent(openid);
      }
      if (openkey && commUtil.checkParam(openkey)) {
        re += '&openkey=' + encodeURIComponent(openkey);
      }
      return re;
    },
    renderWindow: function (cfgs, width, height, zIndex, htmlurl) {
      var wTmpl = '<div class="gdth_popup_floater"></div><div class="gdth_popup_wrap" style="margin:0 auto;position:relative;{OTHER}">\
                           {CLOSEDIV}\
                           <iframe id="{IFRID}" style="position:static !important;' +
          'display:block !important;margin:0 !important;padding:0 !important;visibility:visible !important;float:none !important;border-width:0 !important;width:{W};height:{H};"\
                            scrolling=no frameBorder=0 marginHeight=0 margin' +
          'Width=0 allowTransparency=true \
                            src="{HTMLURL}#{PARAM}"></iframe>{LOGO}\
                    </div>';
      var _s = GDTH;
      if (!htmlurl) {
        htmlurl = 'http://qzonestyle.gtimg.cn/qzone/biz/res/tmpl/interstitial.html';
      }
      _s.zIndex = zIndex;
      var appid = cfgs.appid || cfgs.app_id,
        muidtype = cfgs.muidtype || cfgs.muid_type,
        muid = cfgs.muid,
        posid = cfgs.posid || cfgs.placement_id;
      var taglist = cfgs.taglist || cfgs.tag_list;
      var posclass = cfgs.posclass || cfgs.pos_class;
      var pwinw = _s.inter_posw;
      var pwinh = _s.inter_posh;
      if (cfgs.adType == 'banner') {
        pwinw = _s.posw;
        pwinh = _s.posh;
      }
      var params = '_spoint=' + GDTH._spoint + '&posid=' + encodeURIComponent(posid) + '&posh=' + pwinh + '&posw=' + pwinw + '&posdomain=' + _s.posDomain + '&postnum=' + _s.postNum + '&adtype=' + encodeURIComponent(cfgs.adType) + '&ishybrid=' + GDTH.isHybrid + '&platform=' + GDTH.platform + '&posclass=' + encodeURIComponent(posclass);
      if (appid && appid != 'undefined') {
        params += '&appid=' + encodeURIComponent(appid);
      }
      if (taglist && taglist != 'undefined') {
        params += '&taglist=' + encodeURIComponent(taglist);
      }
      if (muidtype && muidtype != 'undefined' && muid && muid != 'undefined') {
        params += '&muidtype=' + encodeURIComponent(muidtype) + '&muid=' + encodeURIComponent(muid);
      }
      var __w = document.body.clientWidth || document.body.offsetWidth;
      var __h = document.body.clientHeight || document.body.offsetHeight;
      params += '&win_w=' + __w;
      params += '&win_h=' + __h;
      var cid = cfgs.containerid || cfgs.container_id;
      var conw = 0,
        conh = 0;
      if (cid) {
        _s.container = commUtil.$('#' + cid);
        if (!adTools.checkIsHidden(_s.container)) {
          conw = '' + _s.container.clientWidth;
          conh = '' + _s.container.clientHeight;
          CONST.BANNER_IFRAME_WIDTH = _s.container.clientWidth;
          conw = conw.replace(/px/, '');
          conh = conh.replace(/px/, '');
          if (conw.indexOf('%') != -1)
            conw = 0;
          if (conh.indexOf('%') != -1)
            conh = 0;
          conw && (params += '&conw=' + conw) && (__w = conw);
          conh && (params += '&conh=' + conh);
        }
      }
      var scale = (__w / 320) || 1;
      _s.scale = scale;
      params += '&scale=' + scale;
      params += '&conw=' + conw;
      var visiturl = document.location.href;
      params += '&visiturl=' + encodeURIComponent(visiturl);
      params += '&iframeheight=' + CONST.BANNER_IFRAME_HEIGHT;
      params += '&iframewidth=' + CONST.BANNER_IFRAME_WIDTH;
      wTmpl = wTmpl.replace(/{HTMLURL}/, htmlurl).replace(/{PARAM}/, params + _s.getUid());
      var wrap = document.createElement('div');
      wrap.setAttribute('style', 'display:none');
      wrap.id = 'gdt_banner_popup_wrap';
      if (cfgs.adType == 'banner') {
        wrap.innerHTML = wTmpl.replace(/{OTHER}/, 'max-width:1280px;').replace(/{W}/, '100%').replace(/{IFRID}/, 'gdt_banner_ifr').replace(/{LOGO}/, '').replace(/{H}/, '').replace(/{CLOSEDIV}/, '');
        var fixed = (cfgs.position == 'fixed')
          ? 'position:fixed'
          : '';
        if (cid && commUtil.$('#' + cid)) {
          fixed = '';
          commUtil.$('#' + cid).appendChild(wrap);
        } else {
          var dom = commUtil.$('#gdt-' + _s.posid);
          dom.parentNode.insertBefore(wrap, dom);
        }
        wrap.setAttribute('style', fixed + ';left:0px;bottom:0;width:100%;display:none');
      } else {
        var close_wh = 'width:30px;height: 30px;';
        var h_wrap = document.createElement('div');
        h_wrap.id = 'gdt_inter_popup_wrap';
        if (_s.inter_posw == 600 || _s.inter_posw == 500) {
          close_wh = 'width:60px;height: 60px;';
        }
        _s.btn_pos = 9;
        if (_s.inter_posw == 600) {
          _s.btn_pos = 18;
        }
        wTmpl = wTmpl.replace(/{OTHER}/, 'display: inline-block;"  id="gdth_popup_wrap').replace(/{W}/, _s.inter_posw + 'px').replace(/{H}/, _s.inter_posh + 'px').replace(/{LOGO}/, '<div id="gdt_logo" style="background-image:url(http://qzonestyle.gtimg.cn/qzone/biz/res/tmpl/imgs/gdt_logo.png);width:34px;height:26px;position: absolute;right: ' + _s.btn_pos + 'px;bottom: 0;"><i ></i></div>').replace(/{IFRID}/, 'gdt_ifr').replace(/{CLOSEDIV}/, '<a href="javascript:" style="' + close_wh + 'position: absolute;right:4px;top:5px;text-indent: -9999px;overflow: hidden;z-index: 100;" onclick="GDT.closeWindow(this)" class="icon_close">关闭</a>');
        h_wrap.innerHTML = wTmpl;
        h_wrap.style.display = 'none';
        document.body.appendChild(h_wrap);
      }
      if (window.postMessage) {
        GDTH.initPostMsg();
      } else if (cfgs.adType == 'banner') {
        GDTH.showBannerWin();
      }
    },
    initPostMsg: function () {
      if (GDTH.bindPostMsg)
        return;
      GDTH.bindPostMsg = true;
      commUtil.addEvent(window, 'message', function (evt) {
        if (!evt.origin || evt.origin != GDTH.adDomain)
          return;
        if (!evt || !evt.data)
          return;
        var ext = (typeof evt.data == 'string')
          ? JSON.parse(evt.data)
          : evt.data;
        if (!re && !ext)
          return;
        var re = ext.result;
        if (re == 'fail') {
          GDTH.closeWindow();
          GDTH.IntersCb.onFail && GDTH.IntersCb.onFail();
        } else if (re == 'success') {
          GDTH.showBannerWin();
        } else if (ext.op) {
          if (ext.op == 'checkToLoadTBS') {
            if (tbsTool.isTBSsupported()) {
              tbsTool.tbsLoad();
            }
          } else if (ext.op == 'mqzoneclick') {
            commUtil.pingHot('mqzoneclicked');
            QZAppExternal.callSchema(function (data) {}, {
              url: "mqzone://arouse/webview?source=push&url=" + ext.url + '&safari=0&version=1'
            });
          } else if (ext.op === 'mclick') {
            var isApp = ext.isApp;
            window.mqq && mqq.ui && mqq.ui.openUrl({
              url: decodeURIComponent(ext.url),
              target: (isApp
                ? 2
                : 1),
              style: 3
            });
          } else if (ext.op === 'androidAppOtherClick') {
            location.href = decodeURIComponent(ext.url);
          } else if (ext.op === 'loaededad') {
            GDTH.adready = true;
            GDTH.IntersCb.onInterstitialLoaded();
            commUtil.$('#gdt_logo').style.right = GDTH.btn_pos + 'px';
            commUtil.$('.gdth_popup_floater').style.marginBottom = -this.inter_posh / 2 + 'px';
          } else if (ext.op == 'showbigsize') {
            GDTH.adready = true;
            GDTH.IntersCb.onInterstitialLoaded();
            commUtil.$('#gdt_ifr').style.width = '580px';
            commUtil.$('#gdt_ifr').style.height = '900px';
            commUtil.$('#gdt_logo').style.right = '0';
            commUtil.$('.gdth_popup_floater').style.marginBottom = '-450px';
            GDTH.fixFullAdPos(290, 450);
            window.addEventListener('orientationchange', function (e) {
              GDTH.fixFullAdPos(290, 450);
            })
          } else if (ext.op == 'checkHidden') {
            var adType = ext.type;
            var posid = ext.posid;
            var flag = ext.flag;
            var elm = adTools.getBaseNode(adType);
            logicExpose.checkHidden(elm, posid, adType, flag);
          } else if (ext.op == 'exposeCheck') {
            var adType = ext.type;
            var posid = ext.posid;
            var apurl = ext.apurl;
            var tplType = ext.tplType;
            logicExpose.prepare(adType, posid, apurl, tplType, imgState);
          } else if (ext.op == 'getImgStatus') {
            var adType = ext.type;
            var posid = ext.posid;
            var imgState = ext.isImgComplete;
            logicExpose.imgExposeCheck(adType, posid, apurl, tplType, imgState);
          } else if (ext.op == 'showBanner') {
            GDTH.showBannerWin();
          }
        }
      });
    },
    posWinW: 0,
    posWinH: 0,
    fixNormalAdPos: function () {
      var wrap = commUtil.$('#gdt_inter_popup_wrap');
      if (!wrap)
        return;
      wrap.style.textAlign = 'center';
      wrap.querySelector('.gdth_popup_floater').style.height = '50%';
      wrap.querySelector('.gdth_popup_floater').style.position = 'relative';
      var _m = this.inter_posh || 250;
      wrap.querySelector('.gdth_popup_floater').style.marginBottom = -_m / 2 + 'px';
    },
    fixFullAdPos: function (pw, ph) {
      var ori = window.orientation || screen.orientation;
      if (ori && (ori == 90 || ori == -90 || ori == 270)) {
        commUtil.$('#gdth_popup_wrap').style.webkitTransform = 'rotate(-90deg)';
      } else {
        commUtil.$('#gdth_popup_wrap').style.webkitTransform = '';
      }
      var win_w = document.body.clientWidth;
      var win_h = document.body.clientHeight;
      var tar_x = win_w / 2 - pw;
      var tar_y = win_h / 2 - ph;
    },
    getParameter: function (name, cancelBubble) {
      var r = new RegExp("(\\?|#|&)" + name + "=([^&#]*)(&|#|$)");
      var m = location.href.match(r);
      if ((!m || m == "") && !cancelBubble)
        m = window.location.href.match(r);
      return (!m
        ? ""
        : m[2]);
    },
    windowShowing: false,
    showWindow: function () {
      if (GDTH.windowShowing || !GDTH.adready)
        return;
      GDTH.windowShowing = true;
      GDTH.needMask && GDTH.showMask(GDTH.zIndex - 1);
      commUtil.$('#gdt_inter_popup_wrap').setAttribute('style', 'position: absolute;overflow: hidden;width: 100%;height: 100%;left: 0;top: 0;z-index:' + GDTH.zIndex);
      var ifr = commUtil.$("#gdt_ifr");
      ifr.contentWindow.postMessage(JSON.stringify({op: 'exp'}), GDTH.adDomain);
      GDTH.fixNormalAdPos();
    },
    showBannerWin: function () {
      var iframeHeight = GDTH.scale * CONST.BANNER_IFRAME_HEIGHT;
      commUtil.$('#gdt_banner_popup_wrap').style.display = '';
      commUtil.$('#gdt_banner_ifr').style.height = iframeHeight + 'px';
      commUtil.$('#gdt_banner_popup_wrap').style.height = iframeHeight + 'px';
      GDTH.showedBannerWindow = true;
    },
    closeWindow: function (_s) {
      var dom = commUtil.$('#gdt_inter_popup_wrap');
      dom.setAttribute('style', 'display:none;');
      commUtil.pingHot('close_inters');
      GDTH.hideMask();
      GDTH.IntersCb.onClose && GDTH.IntersCb.onClose();
      GDTH.windowShowing = false;
    },
    MASKID: 'gdt_mask',
    showMask: function (zIndex) {
      var mask = GDTH.MASKID;
      if (commUtil.$('#' + mask))
        return;
      var dom = document.createElement('div');
      dom.id = mask;
      dom.setAttribute('style', 'display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;background-color:black;opacity:.70;-moz-opacity:0.7;filter:alpha(opacity=70);z-index:' + zIndex);
      document.body.appendChild(dom);
    },
    hideMask: function () {
      var dom = commUtil.$('#' + GDTH.MASKID);
      dom && dom.parentNode.removeChild(dom);
    },
    IntersCb: {
      onClose: function () {},
      onInterstitialLoaded: function () {}
    },
    initInter: function (obj) {
      var supportPostMsg = !!(window.postMessage);
      var cfg = obj;
      GDTH.zIndex = cfg.zIndex || cfg.z_index || 9999;
      GDTH.getWidthHeight();
      GDTH.needMask = !!(cfg.showmask || cfg.show_mask);
      var loadWhenInit = cfg.load;
      GDTH.IntersCb.onClose = cfg.onClose;
      GDTH.IntersCb.onInterstitialLoaded = cfg.onInterstitialLoaded;
      GDTH.renderWindow(cfg, GDTH.inter_posw, GDTH.inter_posh, GDTH.zIndex);
    },
    collectDPI: function () {
      window.setTimeout(function () {
        var _w = window.screen.width || 10000;
        var _f = 4;
        if (_w < 100) {
          _f = 1;
        } else if (_w < 300) {
          _f = 2;
        } else if (_w < 600) {
          _f = 3;
        }
        var _d = '' + window.devicePixelRatio;
        if (_d) {
          _d = _d.replace(/\./g, '_');
        }
        commUtil.pingHot('screen' + _f + '.dpi' + _d);
        var ourl = 'ns';
        if (window.URL && URL.createObjectURL) {
          ourl = 'ss';
        }
        commUtil.pingHot(ourl + '.' + GDTH.getOs());
      }, 500);
    }
  };
  var CONST = {
    VALID_VISUAL_DISTANCE: 40,
    BANNER_IFRAME_HEIGHT: 50,
    BANNER_IFRAME_WIDTH: document.body.clientWidth || document.body.offsetWidth
  };
  var commUtil = (function () {
    var mod = {};
    mod.webpEnabled = false;
    mod.loadJS = function (url, callback) {
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement('script');
      script.onload = script.onreadystatechange = script.onerror = function () {
        if (script && script.readyState && /^(?!(?:loaded|complete)$)/.test(script.readyState))
          return;
        script.onload = script.onreadystatechange = script.onerror = null;
        script.src = '';
        script.parentNode.removeChild(script);
        script = null;
        if (callback) {
          callback();
        }
      };
      script.charset = "utf-8";
      script.src = url;
      try {
        head.appendChild(script);
      } catch (exp) {}
    }
    mod.getParameter = function (name, cancelBubble) {
      var r = new RegExp("(\\?|#|&)" + name + "=([^&#]*)(&|#|$)");
      var m = location.href.match(r);
      if ((!m || m == "") && !cancelBubble)
        m = window.location.href.match(r);
      return (!m
        ? ""
        : m[2]);
    }
    mod.checkParam = function (val) {
      var valid = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]");
      return !valid.test(val);
    }
    mod.pingHot = function (tag, opts) {
      opts = opts || {};
      purl = [
        'http://pinghot.qq.com/pingd',
        '?dm=gdt.qq.com.hot',
        '&url=',
        escape(location.pathname),
        '&tt=-',
        '&hottag=h5_inter.' + tag,
        '&hotx=' + (opts.x || 9999),
        '&hoty=' + (opts.y || 9999),
        '&rand=',
        Math.random()
      ].join('');
      var i = new Image();
      i.src = purl;
    }
    mod.extendIframe = function (h, w) {
      var _f = commUtil.$('#gdt_ifr');
      _f.width = w + 'px';
      _f.height = h + 'px';
      _f.style.width = w + 'px';
      _f.style.height = h + 'px';
    }
    mod.addEvent = function (elm, type, cb) {
      if (window.attachEvent) {
        elm.attachEvent('on' + type, cb);
      } else {
        elm.addEventListener(type, cb, false);
      }
    }
    mod.$ = function (wrap) {
      return document.querySelector(wrap);
    }
    mod.isInteger = function (obj) {
      return typeof obj === 'number' && obj % 1 === 0
    }
    mod.isValidMuid = function (val) {
      var valid = new RegExp("[^a-f0-9]");
      return !valid.test(val);
    }
    mod.isValidMuidtype = function (val) {
      if (parseInt(val)) {
        var valid = new RegExp("[^1-3]");
        return !valid.test(val);
      }
      return false;
    }

    // 判断是否支持 webp 格式图片
    mod.checkWebp = function (cb) {
      var image = new Image();
      image.onerror = function () {
        mod.webpEnabled = false;
        cb && cb();
      };
      image.onload = function () {
        mod.webpEnabled = true;
        cb && cb();
      };
      image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';
    }

    mod.debugTest = function () {
      var divObj = document.createElement("div");
      divObj.style.position = "fixed";
      divObj.style.backgroundColor = 'gray';
      var first = document.body.firstChild;
      document.body.insertBefore(divObj, first);
      GDTH.divObj = divObj;
      GDTH.divObj.innerHTML = '';
    }
    mod.log = function (str) {
      GDTH.divObj.innerHTML += str + '</br>';
    }
    return mod;
  })();
  var exposeCheck = (function () {
    var a = {},
      expose = {};
    a.init = function (apurl, windowClientHeight, posid) {
      expose.apurl = apurl;
      expose.windowClientHeight = windowClientHeight;
      expose.posid = posid;
    }
    a.check = function (posTop, posid) {
      if (posid == expose.posid) {
        var visualDistance = parseInt(window.pageYOffset) + parseInt(expose.windowClientHeight) - parseInt(posTop);
        if (document.readyState == 'complete') {
          if (visualDistance > CONST.VALID_VISUAL_DISTANCE) {
            return true;
          } else {
            return false;
          }
        } else {
          setTimeout(function () {
            a.check(posTop, posid);
          }, 50);
        }
      }
    }
    return a;
  })();
  var logicExpose = (function () {
    var mod = {};
    var _s = GDTH;
    mod.bindScroll = {};
    mod.posTop = 0;
    mod.tbsAdInfo = {};
    mod.prepare = function (adType, posid, apurl, tplType, imgState) {
      mod.posid = posid;
      mod.apurl = apurl;
      if (tbsTool.isTBSsupported()) {
        tbsTool.tbsAdInfo.adtype = adType;
        tbsTool.tbsAdInfo.posid = posid;
        tbsTool.tbsAdInfo.apurl = apurl;
        if (_s.tbsLoaded && _s.webviewType == 1) {
          tbsTool.tbsExposeCheck();
        } else if (_s.tbsLoaded && _s.webviewType == 2 && _s.missExpose) {
          logicExpose.doExpose(adType, posid, apurl);
          _s.missExpose = false;
        } else if (!_s.tbsLoaded) {
          tbsTool.tbsLoad();
        }
      } else {
        mod.initExpose(adType, posid, apurl, tplType, imgState);
        commUtil.addEvent(document, 'scroll', function () {
          mod.scrollFunc(adType, posid, apurl, tplType, imgState);
        });
        mod.bindScroll[posid] = true;
      }
    }
    mod.checkHidden = function (elm, id, adType, flag) {
      var hiddenStatus;
      var isHidden = adTools.checkIsHidden(elm);
      if (isHidden) {
        hiddenStatus = "true";
      } else {
        hiddenStatus = "false";
      }
      if (hiddenStatus) {
        adTools.postHiddenStatus(adType, hiddenStatus, id, flag);
      }
    },
    mod.initExpose = function (adType, posid, apurl, tplType, imgState) {
      if (document.readyState == 'complete') {
        var windowClientHeight = document.documentElement.clientHeight;
        exposeCheck.init(apurl, windowClientHeight, posid);
        mod.commonExposeCheck(adType, posid, apurl, tplType, imgState);
      } else {
        setTimeout(function () {
          mod.initExpose(adType, posid, apurl, tplType, imgState);
        }, 50);
      }
    }
    mod.calculateElmTop = function (adType) {
      var elm = adTools.getBaseNode(adType);
      var posTop = elm.offsetTop;
      return posTop;
    }
    mod.commonExposeCheck = function (adType, posid, apurl, tplType, imgState) {
      if (tplType && tplType == 'tplImg' && !imgState) {
        adTools.postMessage(adType, {
          op: 'checkImg',
          id: posid
        }, _s.adDomain);
        mod.imgExposeCheck(adType, posid, apurl, tplType, imgState);
      } else {
        mod.doExposeCheck(adType, posid, apurl, tplType);
      }
    }
    mod.imgExposeCheck = function (adType, posid, apurl, tplType, imgState) {
      if (imgState && mod.posid == posid) {
        if (!apurl) {
          apurl = mod.apurl;
        }
        mod.doExposeCheck(adType, posid, apurl, tplType);
      } else {
        setTimeout(arguments.callee, 50);
      }
    }
    mod.doExposeCheck = function (adType, posid, apurl, tplType) {
      var posTop = mod.calculateElmTop(adType);
      if (exposeCheck.check(posTop, posid)) {
        mod.doExpose(adType, posid, apurl);
      }
    }
    mod.doExpose = function (adType, posid, apurl) {
      if (mod.bindScroll[posid]) {
        document.removeEventListener('scroll', mod.scrollFunc, false);
        mod.bindScroll[posid] = false;
      }
      adTools.postMessage(adType, {
        op: 'doExpose',
        apurl: apurl,
        id: posid
      }, _s.adDomain);
    }
    mod.scrollFunc = function (adType, posid, apurl, tplType, imgState) {
      if (_s.handler) {
        _s.handler = null;
      }
      mod.bundleSetTimeout(adType, posid, apurl, tplType, imgState);
    }
    mod.bundleSetTimeout = function (adType, posid, apurl, tplType, imgState) {
      _s.handler = window.setTimeout(function () {
        mod.commonExposeCheck(adType, posid, apurl, tplType, imgState);
      }, 50);
    }
    return mod;
  })();
  var tbsTool = (function () {
    var mod = {},
      _s = GDTH;
    mod.tbsAdInfo = {};
    mod.isTBSsupported = function () {
      var ua = navigator.userAgent;
      if (ua.indexOf("TBS") !== -1 && typeof window.tbsJs !== undefined && tbsJs.isTbsJsapiEnabled()) {
        return true;
      } else {
        return false;
      }
    }
    mod.tbsExposeCheck = function () {
      if (mod.tbsAdInfo.adtype && mod.tbsAdInfo.posid && mod.tbsAdInfo.apurl) {
        var posTop = logicExpose.calculateElmTop(mod.tbsAdInfo.adtype);
        if ((_s.tbsWebviewValidateValue > CONST.VALID_VISUAL_DISTANCE) && (_s.tbsWebviewValidateValue - posTop > CONST.VALID_VISUAL_DISTANCE)) {
          logicExpose.doExpose(mod.tbsAdInfo.adtype, mod.tbsAdInfo.posid, mod.tbsAdInfo.apurl);
        }
      }
    }
    mod.tbsReady = function () {
      try {
        tbs.event.onwebviewvalidate(function (ret) {
          var webviewType = typeof ret.webview_type !== "undefined"
            ? ret.webview_type
            : "-1";
          if (webviewType === "-1" || webviewType === "1") {
            _s.tbsWebviewValidateValue = ret.value;
            _s.webviewType = 1;
            mod.tbsExposeCheck();
          } else if (webviewType === "2") {
            _s.webviewType = 2;
            if (mod.tbsAdInfo.adtype && mod.tbsAdInfo.posid && mod.tbsAdInfo.apurl) {
              logicExpose.doExpose(mod.tbsAdInfo.adtype, mod.tbsAdInfo.posid, mod.tbsAdInfo.apurl);
            } else {
              _s.missExpose = true;
            }
          }
        });
      } catch (e) {}
    }
    mod.tbsLoad = function () {
      commUtil.loadJS("http://res.imtt.qq.com/tbs/tbs.js", function () {
        _s.tbsLoaded = true;
        tbsTool.tbsReady();
      });
    }
    return mod;
  })();
  var adTools = (function () {
    var mod = {},
      _s = GDTH;
    mod.getBaseNode = function (adType) {
      var elm;
      if (adType == "banner") {
        elm = commUtil.$('#gdt_banner_popup_wrap');
      } else {
        elm = commUtil.$('#gdt_inter_popup_wrap');
      }
      return elm;
    }
    mod.getIfr = function (adType) {
      var ifr;
      if (adType == "banner") {
        ifr = commUtil.$('#gdt_banner_ifr');
      } else {
        ifr = commUtil.$('#gdt_ifr');
      }
      return ifr;
    }
    mod.checkIsHidden = function (elm) {
      var isHidden = false;
      while (elm != document) {
        if (elm != document && elm.style.display != "none" && elm.style.visibility != "hidden" && elm.style.visibility != "collapse") {
          elm = elm.parentNode;
        } else if (elm.style.display == "none" || elm.style.visibility == "hidden" || elm.style.visibility == "collapse") {
          isHidden = true;
          break;
        }
      }
      return isHidden;
    }
    mod.postHiddenStatus = function (adType, hiddenStatus, id, flag) {
      var scale,
        showedBanner;
      if (GDTH.container && !mod.checkIsHidden(GDTH.container)) {
        var conw = '' + GDTH.container.clientWidth;
        scale = (conw / 320) || 1;
      }
      if (GDTH.showedBannerWindow) {
        showedBanner = GDTH.showedBannerWindow;
      }
      mod.postMessage(adType, {
        isAdHidden: hiddenStatus,
        scale: scale,
        showedBanner: showedBanner,
        id: id,
        flag: flag
      }, GDTH.adDomain);
    }
    mod.postMessage = function (adType, contentObj, domain) {
      var ifr = adTools.getIfr(adType);
      ifr.contentWindow && ifr.contentWindow.postMessage(JSON.stringify(contentObj), domain);
    }
    return mod;
  })();
  window.GDT = {
    loadGDT: GDTH.loadGDT,
    closeWindow: GDTH.closeWindow,
    showWindow: GDTH.showWindow,
    log: function () {
      console.log(window.TencentGDT);
      console.log(document.location.href);
      console.log(document.head.querySelector('[name=viewport]'));
    },
    init: function (obj) {
      var arrs = window.TencentGDT;
      if (obj) {
        GDTH.init(obj);
      } else {
        for (var i = 0, len = arrs.length; i < len; i++) {
          GDTH.init(arrs[i]);
        }
      }
      NATIVE.checkAndLoadNativeAd();
    }
  };
  GDTH._spoint =+ new Date;
  window.TencentGDT.NATIVE = {
    loadAd: NATIVE.loadAd,
    loadCallback: NATIVE.callback,
    doExpose: NATIVE.doExpose,
    doClick: NATIVE.doClick
  }
  var arrs = window.TencentGDT;
  var initAdEntry = function () {
    if (arrs && arrs.length) {
      arrs = arrs.sort(function (a, b) {
        if (a.type && a.type == 'banner')
          return -1;
        return 1;
      });
      if (arrs[0].type && arrs[0].type != 'banner') {
        for (var i = 0, len = arrs.length; i < len; i++) {
          GDTH.init(arrs[i]);
        }
        NATIVE.checkAndLoadNativeAd();
        return;
      }

      // origin
      //var wanbaurl = 'http://qzonestyle.gtimg.cn/qzone/qzact/act/game/ad/index.js?v=20141119';
      //var wanbaifr = 'http://qzs.qq.com/qzone/qzact/act/game/ad/proxy/index.html';
      //var domain = 'http://qzs.qq.com';
      var wanbaurl = 'http://qzonestyle.gtimg.cn/qzone/qzact/act/game/ad/index.js?v=20141119';
      var wanbaifr = 'http://qzs.qq.com/qzone/qzact/act/game/ad/proxy/index.html';
      var domain = 'http://qzs.qq.com';

      if (arrs[0].appflag === 1) {
        var d = document.createElement('script');
        d.src = wanbaurl;
        d.onload = function () {
          wanbaAd && wanbaAd.init && wanbaAd.init(arrs);
        };
        document.body.appendChild(d);
      } else {
        window.addEventListener('message', function (evt) {
          if (evt.origin && evt.origin == domain) {
            if (!evt.data)
              return;
            var d = (typeof evt.data == 'string')
              ? JSON.parse(evt.data)
              : evt.data;
            if (d.appflag !== 1 && d.appflag !== 0)
              return;
            if (d && d.appflag === 0) {
              for (var i = 0, len = arrs.length; i < len; i++) {
                GDTH.init(arrs[i]);
              }
              NATIVE.checkAndLoadNativeAd();
            } else {
              var d = document.createElement('script');
              d.src = wanbaurl;
              d.onload = function () {
                wanbaAd && wanbaAd.init && wanbaAd.init(arrs);
              };
              document.body.appendChild(d);
            }
          }
        });
        var ifr = document.createElement('iframe');
        ifr.style = 'width:0;height:0;display:none;';
        ifr.width = 0;
        ifr.height = 0;
        ifr.frameBorder = 0;
        ifr.src = wanbaifr;
        document.body.appendChild(ifr);
        return;
      }
    }
  }
  var init = function () {
    if (window.jsInited) {
      return;
    }
    window.jsInited = true;
    commUtil.checkWebp(initAdEntry);
  }
  init();
})();

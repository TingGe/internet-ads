
define(function(require,exports,module){var modUtil=require("./util");function pingHot(tag,opts){opts=opts||{};purl=['http://pinghot.qq.com/pingd','?dm=e.qq.com.hot','&url=',escape(location.pathname),'&tt=-','&hottag=h5_inter.'+tag,'&hotx='+(opts.x||9999),'&hoty='+(opts.y||9999),'&rand=',Math.random()].join('');var i=new Image();i.src=purl;}
function getReqCond(){var ua=navigator.userAgent||'';ua=ua.toLowerCase();var obj={c_os:'',c_hl:navigator.language}
if(/android|adr/.test(ua)){obj.c_os='android';}else if(/ios|iphone|ipad|itouch/.test(ua)){obj.c_os='ios';}else{pingHot('uncondi');}
return obj;}
function sendMessageToParent(contentObj,domain){if(window.postMessage){window.parent&&window.parent.postMessage(JSON.stringify(contentObj),domain);}}
function rptcode(ret,domain,cgi,duration){var url,type,time;var rate=100;if(Math.random()>1/rate){return;}
if(ret==500){type=3;}else{typeof ret==='undefied'&&(ret=51);type=ret>=50?2:1;}
url='http://c.isdspeed.qq.com/code.cgi?domain='+domain+'&cgi='+cgi+'&code='+ret+'&rate='+rate;url+='&type='+type+'&time='+(duration||0);var rep=new Image();rep.src=url;}
function _filterAPPDesc(tplData){var desc=tplData.desc;tplData.descDn="";tplData.isFromFeedsAd=false;if(desc.length>14){var tail=desc.length>28?28:desc.length;tplData.descDn=desc.substring(14,tail);tplData.desc=desc.substring(0,14);tplData.isFromFeedsAd=true;}}
function addVisibilityEvent(changeFunction){var visibilityChange;if(typeof document.hidden!=="undefined"){visibilityChange="visibilitychange";}else if(typeof document.mozHidden!=="undefined"){visibilityChange="mozvisibilitychange";}else if(typeof document.msHidden!=="undefined"){visibilityChange="msvisibilitychange";}else if(typeof document.webkitHidden!=="undefined"){visibilityChange="webkitvisibilitychange";}
modUtil.addEvent(document,visibilityChange,changeFunction);}
function antiSpam(ele,callback){var _s=this;this.touchInfo={};if(window.attachEvent){ele.attachEvent('ontouchstart',function(evt){_s.onTouchStart(evt,callback);});ele.attachEvent('ontouchend',function(evt){_s.onTouchEnd(evt,callback);});}else{ele.addEventListener('touchstart',function(evt){_s.onTouchStart(evt,callback);},false);ele.addEventListener('touchend',function(evt){_s.onTouchEnd(evt,callback);},false);ele.addEventListener('touchcancel',function(evt){_s.onTouchCancel(evt);},false);}};antiSpam.prototype={onTouchCancel:function(evt){pingHot('cancel');},onTouchStart:function(evt,callback){var touches=evt.changedTouches;this.touchInfo.startx=touches[0].pageX;this.touchInfo.starty=touches[0].pageY;this.touchInfo.preclick=new Date().getTime();if(callback){callback();}},onTouchEnd:function(evt,callback){var touches=evt.changedTouches;this.touchInfo.endx=touches[0].pageX;this.touchInfo.endy=touches[0].pageY;this.touchInfo.postclick=new Date().getTime();if(callback){callback();}},getAntiSpamInfo:function(objInfo){var info=(typeof objInfo=='string')?JSON.parse(objInfo):objInfo;var obj={};var clickedtime=new Date().getTime();if(this.touchInfo.preclick&&this.touchInfo.postclick){obj.g=''+(this.touchInfo.postclick-this.touchInfo.preclick);}else{obj.g="-999";}
if(this.touchInfo.preclick){obj.ec=''+(clickedtime-this.touchInfo.preclick);this.touchInfo.preclick='';}else{obj.ec="-999";}
if(this.touchInfo.postclick){obj.sc=''+(clickedtime-this.touchInfo.postclick);this.touchInfo.postclick='';}else{obj.sc="-999";}
if(this.touchInfo.startx){obj.aa=''+this.touchInfo.startx;this.touchInfo.startx='';}else if(info.pageX){obj.aa=''+info.pageX;}else{obj.aa="-999";}
if(this.touchInfo.starty){obj.ab=''+this.touchInfo.starty;this.touchInfo.starty='';}else if(info.pageY){obj.ab=''+info.pageY;}else{obj.ab="-999";}
if(this.touchInfo.endy){obj.bb=''+this.touchInfo.endy;this.touchInfo.endy='';}else if(info.pageY){obj.bb=''+info.pageY;}else{obj.bb="-999";}
if(this.touchInfo.endx){obj.ba=''+this.touchInfo.endx;this.touchInfo.endx='';}else if(info.pageX){obj.ba=''+info.pageX;}else{obj.ba="-999";}
obj.f="0";if(info.playBeginTime){obj.p=""+(new Date().getTime()-info.playBeginTime);}else{obj.p='-999';}
obj.d='0';if(info.closeBtnDisplayed){obj.x="1";}else{obj.x="0";}
if(info.isClickThrough){obj.ct=info.isClickThrough;}
return encodeURIComponent(JSON.stringify(obj));}}
function checkToLoadTBS(domain){sendMessageToParent({op:"checkToLoadTBS"},domain)}
function purl(re,pwindowurl){if(!!pwindowurl)return false;if(pwindowurl.indexOf('#')){return pwindowurl+'&gdt_result='+re;}else{return pwindowurl+'#gdt_result='+re;}}
var mod={pingHot:pingHot,getReqCond:getReqCond,sendMessageToParent:sendMessageToParent,rptcode:rptcode,filterAPPDesc:_filterAPPDesc,addVisibilityEvent:addVisibilityEvent,antiSpam:antiSpam,purl:purl,checkToLoadTBS:checkToLoadTBS};return mod;});

define(function(require,exports,module){function _$(container){return document.querySelector(container);}
var tmpl=(function(){var cache={};function tmpl(str,data){var fn=!/\W/.test(str)?cache[str]=cache[str]||tmpl(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+
str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")
+"');}var out=p.join('');return p.join('');");return data?fn(data):fn;};return tmpl;})();function getParameter(name,cancelBubble){var r=new RegExp("(\\?|#|&)"+name+"=([^&#]*)(&|#|$)");var m=location.href.match(r);if((!m||m=="")&&!cancelBubble)m=window.location.href.match(r);return(!m?"":m[2]);}
function checkParam(val){var valid=new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~£¡@#£¤¡­¡­&*£¨£©¡ª|{}¡¾¡¿¡®£»£º¡±¡°'¡££¬¡¢£¿]");return!valid.test(val);}
function setGlobal(key,value){window.TencentGDT[key]=value;}
function getGlobal(key){if(window.TencentGDT)
return window.TencentGDT[key];return null;}
function loadJS(url,callback,opts){var q,insertNode,loadedList,onLoaded;opts=opts||{};charset=opts.charset||'';loadedList=getGlobal('loadJS');if(loadedList&&(url in loadedList)){callback();return;}
q=document.createElement("script");if(callback){onLoaded=function(){var loadedList=getGlobal('loadJS');!loadedList&&(loadedList={});loadedList[url]=1;setGlobal('loadJS',loadedList);callback();q=null;url=null;};if(window.ActiveXObject){q.onreadystatechange=function(){var v=this.readyState;if("loaded"===v||"complete"===v){onLoaded();onLoaded=null;}};}else{q.onload=onLoaded;}}
q.charset=charset;q.src=url;insertNode=opts.insertNode||(document.getElementsByTagName("head")[0].firstChild);insertNode.parentNode.insertBefore(q,insertNode);}
function imgLoad(img,cb,ecb){if(!img){return;}
if(img.complete){cb();return;}
img.onload=function(){cb();img.onload=null;};if(ecb){img.onerror=function(){ecb();img.onerror=null;};}}
function addEvent(elm,type,cb){if(window.attachEvent){elm.attachEvent('on'+type,cb);}else{elm.addEventListener(type,cb,false);}}
function getByteLen(val){var len=0;for(var i=0;i<val.length;i++){if(val[i].match(/[^x00-xff]/ig)!=null)
len+=2;else
len+=1;}
return len;}
function getDeviceOS(){var ua=navigator.userAgent||'';ua=ua.toLowerCase();if(/android|adr/.test(ua)){return'android';}else if(/ios|iphone|ipad|itouch/.test(ua)){return'ios';}
return null;}
function contains(arr,obj){var i=arr.length;while(i--){if(arr[i]===obj){return true;}}
return false;}
var mod={$:_$,tmpl:tmpl,loadJS:loadJS,getParameter:getParameter,checkParam:checkParam,imgLoad:imgLoad,addEvent:addEvent,getByteLen:getByteLen,getDeviceOS:getDeviceOS,contains:contains};return mod;});
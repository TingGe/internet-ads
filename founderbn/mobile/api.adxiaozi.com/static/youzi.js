// origin http://api.adxiaozi.com:8085/static/youzi.js
(function() {
    if (!document.body) {
        return setTimeout(arguments.callee, 50)
    }

    var adPosition = window.youziPostion || "";
    var yzid = window.yzId;
    var w;
    var h;
    var yzClose = window.yzClose || false;
    var autoSize = window.autoSize || false;

    function newScript(url, isBody) {
        var container = isBody ? document.body : (document.head || document.getElementsByTagName('head')[0]);
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = url;
        container.insertBefore(script, container.firstChild);
    }

	/*
    if ((yzid + '') === 'addac335') {
        newScript('http://c3.moogos.com/js/_jssdk.js?aid=sd639aeb&channelId=ac1f1b2a', true);
        return;
    }
    else if ((yzid + '') === 'ad8a8023') {
        newScript('http://c3.moogos.com/js/_jssdk.js?aid=scca5724&channelId=ac1f1b2a', true);
        return;
    }
	*/

    if (autoSize === true) {
        w = document.body.clientWidth;
        h = parseInt(w * (90 / 580))
    } else {
        w = window.yzWidth || 580;
        h = window.yzHeight || 90
    }
    var js_version = "3.0.0";
    var tp = "2";
    var hasLogo = 0;
    var adDomName = window.youziDivId || "youzi_adContainer";
    var adContainer = document.getElementById(adDomName);
    if (!adContainer) {
        adContainer = document.createElement("div");
        adContainer.setAttribute("id", adDomName);
        var style = adContainer.style;
        style.margin = "0 auto";
        if (adPosition !== "") {
            style.position = "fixed";
            style.left = "0px";
            style.right = "0px";
            if (adPosition === "top") {
                style.top = "0px"
            } else if (adPosition === "middle") {
                style.top = "50%";
                style.marginTop = -(h / 2) + "px"
            } else if (adPosition === "bottom") {
                style.bottom = "0px"
            }
        } else {
            style.position = "relative"
        }
        style.width = w + "px";
        style.height = h + "px";
        style.zIndex = 2147483647;
        document.body.insertBefore(adContainer, document.body.children[0])
    } else {
        adContainer.style.margin = "auto"
    }
    if (yzClose) {
        var closeName = adDomName + "_close";
        closeDom = document.createElement("div");
        closeDom.setAttribute("id", closeName);
        var closeStyle = closeDom.style;
        closeStyle.backgroundImage = "url(http://static.googleadsserving.cn/pagead/images/x_button_blue2.png)";
        closeStyle.backgroundRepeat = "no-repeat";
        closeStyle.backgroundSize = "100%";
        closeStyle.position = "absolute";
        closeStyle.fontSize = "30px";
        closeStyle.right = "0px";
        closeStyle.top = "0px";
        closeStyle.color = "gray";
        closeStyle.width = 30 + "px";
        closeStyle.height = 30 + "px";
        adContainer.appendChild(closeDom);
        closeDom.onclick = function() {
            adContainer.innerHTML = ""
        }
    }
    window.preload = function() {
        var url = "http://api.adxiaozi.com:8085/request3/" + "?yzid=" + yzid + "&w=" + w + "&h=" + h + "&jsv=" + js_version + "&tp=" + tp + "&logo=" + hasLogo;
        var page = document.createElement("iframe");
        page.setAttribute("src", url);
        page.setAttribute("seamless", "");
        page.setAttribute("scrolling", "no");
        page.setAttribute("frameborder", 0);
        page.setAttribute("marginwidth", 0);
        page.setAttribute("marginheight", 0);
        page.setAttribute("allowtransparency", true);
        page.style.cssText = "width:" + w + "px;height:" + h + "px;display:block;";
        adContainer.appendChild(page)
    };
    setTimeout(preload, 1);
    window.youziPostion = "";
    window.yzWidth = "";
    window.yzHeight = "";
    window.autoSize = false;
    window.youziDivId = ""
})();

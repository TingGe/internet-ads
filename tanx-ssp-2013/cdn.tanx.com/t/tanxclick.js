(function() {
    function a(e) {
        var d = (location.href.split("?")[1] || "").split("&"),
        b = {},
        h = window;
        for (var g = 0; g < d.length; g++) {
            var f = d[g].split("=");
            b[f[0]] = b[f[0]] || f[1]
        }
        function j(o) {
            try {
                var o = o || event;
                var m = o.srcElement ? o.srcElement: o.target;
                if (m.tagName.toUpperCase() != "A") {
                    for (var l = 5; l > 0; l--) {
                        m = m.parentNode;
                        if (m.tagName.toUpperCase() == "A") {
                            break
                        }
                    }
                    if (m.tagName.toUpperCase() != "A") {
                        return
                    }
                }
                if (typeof m.href == "undefined") {
                    return
                }
                if (m.tagName.toUpperCase() == "A" && m.getAttribute("href", 2).indexOf("http") != 0) {
                    return
                }
                if (!b[e]) {
                    return
                }
                var c = (m.getAttribute("href", 2).match(/http:\/\/([^\/]+)/i) || ["", ""])[1];
                var n = (new Date()).getTime();
                h.img = new Image();
                h.img.id = n;
                h.img.src = decodeURIComponent(b[e]) + "&d_r=" + c + "_" + (new Date()).getTime().toString().substr(9)
            } catch(k) {}
        }
        if ( !! (window.attachEvent && !window.opera)) {
            h.document.body.attachEvent("onclick", j)
        } else {
            h.document.body.addEventListener("click", j, false)
        }
    }
    a("tanxclick");
    a("tanxdspv")
})();
var alimama_source = "1";
var alimama_jstype = "NORMAL";
var alimama_config = [6, 6, 20, 10000, 2, 1, "sc1", "mc1", "http://z.alimama.com/alimama.php", "http://z.alimama.com/alimamal.php", 4973, 0.9, 10, 10, [4, 8, 12], [12, 14, 16], "tc1", 20, "tksc1", 10, "0-0-0", "http://t.alimama.com/alimama.php", "http://t.alimama.com/alimamal.php"];
function alimama_show_sync(bdzflag) {
    var securityUtil = (function() {
        var b = "0123456789ABCDEF";
        var a = function(e) {
            var c = b.substr(e & 15, 1);
            while (e > 15) {
                e >>= 4;
                c = b.substr(e & 15, 1) + c
            }
            return c
        };
        return {
            $version: "1.2",
            encodeHTML: function(c) {
                if (c == null || c.length == 0) {
                    return c
                }
                var f = "";
                var d = c.length;
                for ($cnt = 0; $cnt < d; $cnt++) {
                    var e = c.charCodeAt($cnt);
                    if ((e >= 97 && e <= 122) || (e >= 65 && e <= 90) || (e >= 48 && e <= 57) || e == 32 || e == 44 || e == 46) {
                        f += c.charAt($cnt)
                    } else {
                        f += "&#" + e + ";"
                    }
                }
                return f
            },
            encodeJS: function(c) {
                if (c == null || c.length == 0) {
                    return c
                }
                $out = "";
                $len = c.length;
                for ($cnt = 0; $cnt < $len; $cnt++) {
                    $c = c.charCodeAt($cnt);
                    if (($c >= 97 && $c <= 122) || ($c >= 65 && $c <= 90) || ($c >= 48 && $c <= 57) || $c == 32 || $c == 44 || $c == 46) {
                        $out += c.charAt($cnt)
                    } else {
                        if ($c <= 127) {
                            $hex = a($c);
                            if ($hex.length < 2) {
                                "0" + $hex
                            }
                            $out += "\\x" + $hex
                        } else {
                            $hex = a($c);
                            while ($hex.length < 4) {
                                $hex = "0" + $hex
                            }
                            $out += "\\u" + $hex
                        }
                    }
                }
                return $out
            },
            secureURI: function(c) {
                $uriLC = c.toLowerCase();
                if ($uriLC.indexOf("http://") == 0 || $uriLC.indexOf("https://") == 0 || $uriLC.indexOf("/") == 0 || $uriLC.indexOf("./") == 0) {
                    return c
                } else {
                    return "./" + c
                }
            }
        }
    })();
    var boutputstr = "";
    var $bud = "undefined";
    var $bif = true;
    try {
        $bif = (self.location != top.location)
    } catch(err) {}
    var $bof = false;
    var $bmw = bgetMaxWindowInControl();
    var $bus = bgetUnitsOfMaxWindow();
    var $bmd = $bmw.document;
    var $bcu = null;
    var $burl = "";
    var bcl = null;
    var bconfig = alimama_config;
    var bss = false;
    var bparamsMap = {
        jt: {
            n: ["alimama_jstype"],
            i: [],
            e: [],
            t: ""
        },
        pf: {
            n: ["alimama_source"],
            i: [],
            e: [],
            t: ""
        },
        w: {
            n: ["alimama_width"],
            i: [],
            e: [],
            t: ""
        },
        h: {
            n: ["alimama_height"],
            i: [],
            e: [],
            t: ""
        },
        sz: {
            n: ["alimama_sizecode"],
            i: [],
            e: [],
            t: ""
        },
        i: {
            n: ["alimama_pid"],
            i: [],
            e: [],
            t: ""
        },
        rp: {
            n: ["alimama_referpid"],
            i: [],
            e: [],
            t: ""
        },
        refpos: {
            n: ["alimama_refpos"],
            i: [],
            e: [],
            t: ""
        },
        t: {
            n: ["alimama_type"],
            i: [],
            e: [],
            t: ""
        },
        dt: {
            n: ["alimama_displaytype"],
            i: [],
            e: [],
            t: ""
        },
        tc: {
            n: ["alimama_titlecolor"],
            i: [],
            e: [],
            t: "c"
        },
        dc: {
            n: ["alimama_descolor"],
            i: [],
            e: [],
            t: "c"
        },
        bgc: {
            n: ["alimama_bgcolor"],
            i: [],
            e: [],
            t: "c"
        },
        bdc: {
            n: ["alimama_bordercolor"],
            i: [],
            e: [],
            t: "c"
        },
        lc: {
            n: ["alimama_linkcolor"],
            i: [],
            e: [],
            t: "c"
        },
        bmc: {
            n: ["alimama_bottomcolor"],
            i: [],
            e: [],
            t: "c"
        },
        as: {
            n: ["alimama_anglesize"],
            i: [],
            e: [],
            t: ""
        },
        bgp: {
            n: ["alimama_bgpic"],
            i: [],
            e: [],
            t: ""
        },
        ic: {
            n: ["alimama_icon"],
            i: [],
            e: [],
            t: ""
        },
        cid: {
            n: ["alimama_containerid"],
            i: [],
            e: [],
            t: ""
        },
        flt: {
            n: ["alimama_underfilter"],
            i: [],
            e: [],
            t: ""
        },
        tlul: {
            n: ["alimama_underline"],
            i: [],
            e: [],
            t: ""
        },
        tlfs: {
            n: ["alimama_fontsize"],
            i: [],
            e: [],
            t: ""
        },
        async: {
            n: ["alimama_async"],
            i: [],
            e: [],
            t: ""
        }
    };
    var bpid = bgetValueByUrlKey("i");
    function alimama_getImgPosition(cn) {
        function bgetx(co) {
            var cl = 0;
            try {
                if (typeof co.offsetParent != "undefined" && co.offsetParent) {
                    while (typeof co.offsetParent != "undefined" && co.offsetParent) {
                        if (typeof co.offsetLeft != "undefined" && co.offsetLeft) {
                            cl += co.offsetLeft
                        }
                        co = co.offsetParent
                    }
                } else {
                    if (co.x) {
                        cl += co.x
                    }
                }
            } catch(err) {
                cl = 0
            }
            return cl
        }
        function bgety(co) {
            var ct = 0;
            try {
                if (typeof co.offsetParent != "undefined" && co.offsetParent) {
                    while (typeof co.offsetParent != "undefined" && co.offsetParent) {
                        if (typeof co.offsetTop != "undefined" && co.offsetTop) {
                            ct += co.offsetTop
                        }
                        co = co.offsetParent
                    }
                } else {
                    if (co.y) {
                        ct += co.y
                    }
                }
            } catch(err) {
                ct = 0
            }
            return ct
        }
        var cx = 0;
        var cy = 0;
        try {
            var ci = document.getElementById(cn);
            var cw = window;
            cx = bgetx(ci);
            cy = bgety(ci);
            var i = 0;
            if (cw.parent.window && typeof cw.parent.window != "undefined" && cw != cw.parent) {
                while (cw.location != window.top.location) {
                    cx += bgetx.call(cw.parent, cw.frameElement);
                    cy += bgety.call(cw.parent, cw.frameElement);
                    cw = cw.parent.window
                }
            }
        } catch(err) {
            cx = 0;
            cy = 0
        }
        return [cx, cy]
    }
    function bgetMaxWindowInControl() {
        if (navigator.userAgent.toLowerCase().indexOf("opera") > -1) {
            return window
        }
        var cx;
        try {
            cx = top.document.location;
            return top
        } catch(err) {
            $bof = true
        }
        var cwd = window;
        while (cwd != cwd.parent) {
            var cp = cwd.parent;
            try {
                cx = cp.document.location
            } catch(err) {
                return cwd
            }
            cwd = cp
        }
        return cwd
    }
    function bgetUnitsOfMaxWindow() {
        if (!$bmw.alimama_adunits) {
            $bmw.alimama_adunits = []
        }
        return $bmw.alimama_adunits
    }
    function bpreRun() {
        if (typeof alimama_height == "undefined") {
            alimama_height = 0
        }
        if (typeof alimama_width == "undefined") {
            alimama_width = 0
        }
        var cw = window;
        if (alimama_type == "i") {
            if (typeof(alimama_sizecode) == "undefined") {
                alimama_sizecode = "99"
            }
        }
        baddUnit()
    }
    function baddUnit() {
        var ct = new Date();
        var cs = ct.getTime();
        var cu = {};
        cu.w = window;
        cu.pid = bpid;
        cu.t = cs;
        cu.tp = alimama_type;
        cu.sz = bgetValueByUrlKey("sz");
        if (!$bus[bpid]) {
            $bus[bpid] = []
        }
        try {
            $bus[bpid].push(cu)
        } catch(err) {}
        $bcu = cu
    }
    function bgetValueByUrlKey(ck) {
        var cr = null;
        var co = bparamsMap[ck];
        var cw = window;
        for (var i = 0; i < co.n.length; i++) {
            if (cw[co.n[i]]) {
                var cv = cw[co.n[i]];
                if (co.t && co.t == "c") {
                    if (cv.indexOf("#") === 0) {
                        cv = cv.substr(1)
                    }
                }
                cr = cv;
                break
            }
        }
        return cr
    }
    function binitQuery() {
        if (typeof bpid == $bud) {
            bpid = ""
        }
        if (!bpid) {
            bpid = ""
        }
        $burl = "?i=" + bpid
    }
    function bappendPageUrl() {
        baddParaByKVAllowEmptyValue("u", bencodeUrl(bgetPageUrl()))
    }
    function bappendFrameUrl() {
        var cf = "-1";
        if ($bif) {
            var cw = window;
            var cd = document;
            var cfw = 1;
            var cfh = 1;
            if (cw.innerHeight) {
                cfw = cw.innerWidth;
                cfh = cw.innerHeight
            } else {
                if (cd.documentElement && cd.documentElement.clientHeight) {
                    cfw = cd.documentElement.clientWidth;
                    cfh = cd.documentElement.clientHeight
                } else {
                    if (cd.body) {
                        cfw = cd.body.clientWidth;
                        cfh = cd.body.clientHeight
                    }
                }
            }
            if (cfh > 2 * alimama_height || cfw > 2 * alimama_width) {
                cf = bencodeUrl(cw.location.href)
            }
        }
        baddParaByKeyValue("fu", cf)
    }
    function bgetPageUrl() {
        if ($bof && $bmd.referrer) {
            return $bmd.referrer
        }
        return $bmd.location.href
    }
    function bencodeUrl(cs) {
        if (typeof encodeURIComponent == "function") {
            return encodeURIComponent(cs.toString())
        } else {
            return bencodeUtf8(cs.toString())
        }
    }
    function bencodeUtf8(cs) {
        var cr = "";
        for (var i = 0; i < cs.length; i++) {
            var c = cs.charCodeAt(i);
            if (c < 128) {
                if (c == 46 || c == 40 || c == 41 || (c > 47 && c < 58) || (c > 64 && c < 91) || (c > 96 && c < 123)) {
                    cr += cs.charAt(i)
                } else {
                    cr += bhex(c)
                }
            } else {
                if (127 < c && c < 2048) {
                    cr += bhex((c >> 6) | 192);
                    cr += bhex((c & 63) | 128)
                } else {
                    if (2047 < c && c < 65536) {
                        cr += bhex((c >> 12) | 224);
                        cr += bhex(((c >> 6) & 63) | 128);
                        cr += bhex((c & 63) | 128)
                    } else {
                        if (65535 < c && c < 2097152) {
                            cr += bhex((c >> 18) | 240);
                            cr += bhex(((c >> 12) & 63) | 128);
                            cr += bhex(((c >> 6) & 63) | 128);
                            cr += bhex((c & 63) | 128)
                        } else {
                            if (2097151 < c && c < 67108864) {
                                cr += bhex((c >> 24) | 248);
                                cr += bhex(((c >> 18) & 63) | 128);
                                cr += bhex(((c >> 12) & 63) | 128);
                                cr += bhex(((c >> 6) & 63) | 128);
                                cr += bhex((c & 63) | 128)
                            } else {
                                if (67108863 < c && c < 2147483648) {
                                    cr += bhex((c >> 30) | 252);
                                    cr += bhex(((c >> 24) & 63) | 128);
                                    cr += bhex(((c >> 18) & 63) | 128);
                                    cr += bhex(((c >> 12) & 63) | 128);
                                    cr += bhex(((c >> 6) & 63) | 128);
                                    cr += bhex((c & 63) | 128)
                                }
                            }
                        }
                    }
                }
            }
        }
        return cr
    }
    function bhex(c) {
        var cx = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        if (c < 256) {
            return "%" + cx[c >> 4] + cx[c & 15]
        } else {
            return bhex(c >> 8) + bhex(c & 15)
        }
    }
    function bisfiress() {
        var cr = "";
        var c = navigator.userAgent.toLowerCase();
        try {
            var ct = location.href;
            try {
                ct = top.location.href
            } catch(err) {
                ct = $bmd.referrer
            }
            if (c.indexOf("firefox/ss") > -1 && ct.indexOf("alimamapid=")) {
                if (ct.substr(ct.indexOf("alimamapid=") + 11) == bpid) {
                    cr = "1";
                    bss = true
                } else {
                    cr = "0"
                }
            } else {
                cr = "0"
            }
        } catch(err) {
            cr = "0"
        }
        baddParaByKeyValue("iss", cr)
    }
    function baddParaByKeyValue(ck, cv) {
        if (!ck || (!cv && cv !== 0) || ck === "" || (cv === "" && typeof cv == "string")) {
            return
        }
        $burl = $burl + "&" + ck + "=" + cv
    }
    function baddParaByKVAllowEmptyValue(ck, cv) {
        if (!ck || ck === "") {
            return
        }
        if (!cv) {
            cv = ""
        }
        $burl = $burl + "&" + ck + "=" + cv
    }
    function baddParaByUrlKey(ck) {
        baddParaByKeyValue(ck, bgetValueByUrlKey(ck))
    }
    function baddParaByUKAllowEmptyValue(ck) {
        baddParaByKVAllowEmptyValue(ck, bgetValueByUrlKey(ck))
    }
    function bappendScreenInfo() {
        var cw = window;
        var cx = 0;
        var cy = 0;
        try {
            cx = cw.screen.width;
            cy = cw.screen.height
        } catch(err) {}
        baddParaByKVAllowEmptyValue("re", cx + "x" + cy)
    }
    function bappendQueryKey() {
        var cu = bgetPageUrl();
        var ck = bgetQueryKeyFromUrl(cu);
        if (ck === "") {
            var cr = bgetPageReferrer();
            ck = bgetQueryKeyFromUrl(cr)
        }
        baddParaByKeyValue("k", ck)
    }
    function bgetQueryKeyFromUrl(cu) {
        var cs = ["wd", "p", "q", "keyword", "kw", "w", "key", "word", "query", "q1", "name"];
        if (cu !== "" && cu !== null) {
            for (var i = 0; i < cs.length; i++) {
                var cr = new RegExp("[^1-9a-zA-Z]" + cs[i] + "=([^&]*)");
                var ck = cu.match(cr);
                if (ck !== null) {
                    cr = new RegExp("^[0-9]*$");
                    if (ck[1].match(cr) === null) {
                        return ck[1]
                    }
                }
            }
        }
        return ""
    }
    function bgetPageReferrer() {
        var cr = "";
        try {
            cr = $bmd.referrer
        } catch(err) {}
        if (cr === null) {
            cr = ""
        }
        return cr
    }
    function bappendPageTitle() {
        var ct = "";
        try {
            ct = $bmd.title
        } catch(err) {}
        ct = bencodeUrl(ct);
        baddParaByKeyValue("tt", ct)
    }
    function bappendPageReferrer() {
        var cr = bgetPageReferrer();
        cr = bencodeUrl(cr);
        baddParaByKVAllowEmptyValue("r", cr)
    }
    function bappendStatImg() {
        $bcu.i = Math.random();
        var cn = "alimamatmpf" + $bcu.i;
        var cs = "<img name='" + cn + "' id='" + cn + "' style='width:0px;height:0px;padding:0px;margin:0px;border:0px;vertical-align:baseline;' border=0 />";
        if (typeof alimama_containerid == "string") {
            try {
                document.getElementById(alimama_containerid).innerHTML += cs
            } catch(err) {}
        } else {
            if (bdzflag == 1) {
                boutputstr += cs
            } else {
                document.write(cs)
            }
        }
        var cp = alimama_getImgPosition(cn);
        baddParaByKeyValue("sx", cp[0]);
        baddParaByKeyValue("sy", cp[1]);
        try {
            var ci = document.getElementById(cn);
            if (ci) {
                ci.parentNode.removeChild(ci)
            }
        } catch(err) {}
    }
    function bappendAbcFlag() {
        var ca = Math.floor(Math.random() * 10000) + 10001;
        try {
            if ($bmw && $bmw.alimama_data.sid) {
                ca = $bmw.alimama_data.sid
            } else {
                ca = ca - 10001;
                $bmw.alimama_data.sid = ca
            }
        } catch(err) {}
        baddParaByKeyValue("ac", ca)
    }
    function bappendBrowserInfo() {
        var cs = window.screen;
        var ct = new Date();
        baddParaByKeyValue("cah", cs.availHeight);
        baddParaByKeyValue("caw", cs.availWidth);
        baddParaByKeyValue("ccd", cs.colorDepth);
        baddParaByKeyValue("ctz", -ct.getTimezoneOffset() / 60);
        baddParaByKeyValue("chl", history.length);
        if (navigator.javaEnabled()) {
            baddParaByKeyValue("cja", 1)
        }
        if (navigator.plugins) {
            baddParaByKeyValue("cpl", navigator.plugins.length)
        }
        if (navigator.mimeTypes) {
            baddParaByKeyValue("cmm", navigator.mimeTypes.length)
        }
    }
    function bappendClientInfo() {
        baddParaByKeyValue("cbh", $bmd.body ? $bmd.body.clientHeight: -1);
        baddParaByKeyValue("cbw", $bmd.body ? $bmd.body.clientWidth: -1)
    }
    function bappendFlashVersion() {
        var cv = "-1";
        var cn = navigator;
        if (cn.plugins && cn.plugins.length) {
            for (var i = 0; i < cn.plugins.length; i++) {
                if (cn.plugins[i].name.indexOf("Shockwave Flash") != -1) {
                    cv = cn.plugins[i].description.split("Shockwave Flash ")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var j = 10; j >= 2; j--) {
                    try {
                        var cf = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + j + "');");
                        if (cf) {
                            cv = j + ".0";
                            break
                        }
                    } catch(err) {}
                }
            }
        }
        if (cv != "-1") {
            cv = cv.substring(0, cv.indexOf(".") + 2)
        }
        baddParaByKeyValue("cf", cv)
    }
    function bappendRandomPr() {
        var ct = 0;
        var cn = 16;
        var cs = 0;
        for (var i = 1; i <= cn; i++) {
            var cx = Math.random();
            var cy = Math.random();
            if ((Math.pow(cx, 2) + Math.pow(cy, 2)) <= 1) {
                ct++
            }
            if (i <= 12) {
                cs = cs + cx
            }
        }
        var ck = "pr" + String.fromCharCode(97 + ct);
        var cv = (Math.round(cs * bconfig[10]) | (($bmd.body ? $bmd.body.clientWidth: 0) << 16));
        baddParaByKeyValue(ck, cv);
        baddParaByKeyValue("cas", ck)
    }
    function bappendSessionID() {
        var cu, cc = "",
        cgn, cgm, i, cl = location,
        cg = "",
        cna = "",
        cks = [],
        cre = /(^\s*)|(\s*$)/g,
        cali = /(mmstat.com|alimama.com|alibaba.com|taobao.com|alipay.com|koubei.com|alisoft.com)$/;
        function cp(cs, cn) {
            var cr = "",
            cw = 1,
            i;
            cw = Math.floor(cs.length / cn);
            if (cw == 1) {
                cr = cs.substr(0, cn)
            } else {
                for (i = 0; i < cn; i++) {
                    cr += cs.substr(i * cw, 1)
                }
            }
            return cr
        }
        if (cali.test(document.domain)) {
            cks = document.cookie.split(";");
            for (i = 0; i < cks.length; i++) {
                cks[i] = cks[i].replace(cre, "");
                if (cks[i].indexOf("cna=") === 0) {
                    cna = cks[i].substr(4, 24);
                    break
                }
            }
        }
        if (cna === "") {
            cu = (cl.search.length > 9) ? cl.search: ((cl.pathname.length > 9) ? cl.pathname: cl.href).substr(1);
            cks = document.cookie.split(";");
            for (i = 0; i < cks.length; i++) {
                if (cks[i].split("=").length > 1) {
                    cc += cks[i].split("=")[1]
                }
            }
            if (cc.length < 16) {
                cc += "0123456789abcdef"
            }
            cna = cp(cu, 8) + cp(cc, 16)
        }
        for (i = 1; i <= 32; i++) {
            cgn = Math.floor(Math.random() * 16);
            if (cna && i <= cna.length) {
                cgm = cna.charCodeAt(i - 1);
                cgn = (cgn + cgm) % 16
            }
            cg += cgn.toString(16)
        }
        baddParaByKeyValue("cg", cg)
    }
    function boutput() {
        var ci = "alimamaf" + $bcu.i;
        $burl = bconfig[8] + $burl;
        $burl = $burl.substring(0, 2048);
        var cs = "";
        if (alimama_type == "e" || alimama_type == "i") {
            document.write("<script type='text/javascript' charset='gbk' src='" + securityUtil.encodeHTML($burl) + "'><\/script>")
        }
    }
    function bclearData() {
        var cm = bparamsMap;
        var cw = window;
        for (var co in cm) {
            if (bdzflag == 1) {
                if (co == "w" || co == "h") {
                    continue
                }
            }
            var cn = cm[co].n;
            if (cn) {
                for (var i = 0; i < cn.length; i++) {
                    if (typeof cw[cn[i]] != $bud && cn[i] != "alimama_referpid") {
                        cw[cn[i]] = null
                    }
                }
            }
        }
    }
    function binitClientInfo() {
        if (bcl) {
            return
        }
        bcl = {};
        var cu = navigator.userAgent.toLowerCase();
        bcl.isOpera = (cu.indexOf("opera") > -1);
        bcl.isIE = (!bcl.isOpera && cu.indexOf("msie") > -1);
        bcl.isFF = (!bcl.isOpera && !bcl.isIE && cu.indexOf("firefox") > -1);
        bcl.addEvent = function(o, c, h) {
            if (this.isIE) {
                o.attachEvent("on" + c, h)
            } else {
                o.addEventListener(c, h, false)
            }
        }
    }
    function bappendTaobaoUserName() {
        var ch = location.host;
        if ( - 1 < ch.lastIndexOf("taobao.com") && 10 === ch.length - ch.lastIndexOf("taobao.com")) {
            var cs = document.cookie.split(";");
            for (var i = 0; i < cs.length; i++) {
                var ckv = cs[i].split("=");
                if ( - 1 < ckv[0].lastIndexOf("tracknick") && 9 === ckv[0].length - ckv[0].lastIndexOf("tracknick")) {
                    if (ckv.length > 1) {
                        baddParaByKeyValue("uid", ckv[1]);
                        return
                    }
                }
            }
        }
    }
    function bappendKgbInfo() {
        if (typeof(alimama_p4p_kw) == "string") {
            baddParaByKeyValue("p4p_kw", bencodeUrl(alimama_p4p_kw));
            alimama_p4p_kw = null
        }
        if (typeof(alimama_p4p_ai) == "string") {
            if (alimama_p4p_ai == "1" || alimama_p4p_ai == "2" || alimama_p4p_ai == "3") {
                baddParaByKeyValue("p4p_ai", alimama_p4p_ai);
                alimama_p4p_ai = null
            }
        } else {
            baddParaByKeyValue("p4p_ai", "1")
        }
    }
    function bRun() {
        binitClientInfo();
        binitQuery();
        baddParaByUKAllowEmptyValue("w");
        baddParaByUKAllowEmptyValue("h");
        bappendScreenInfo();
        baddParaByUKAllowEmptyValue("sz");
        bappendSessionID();
        bappendRandomPr();
        bappendBrowserInfo();
        bappendFlashVersion();
        $bcu.s = $burl;
        $bcu.s = $bcu.s + "&u=" + bencodeUrl(bgetPageUrl()) + "&r=" + bencodeUrl(bgetPageReferrer());
        try {
            baddParaByKeyValue("dx", $bmw.alimama_data[bconfig[7]])
        } catch(err) {}
        bappendAbcFlag();
        bappendClientInfo();
        bisfiress();
        baddParaByUrlKey("rp");
        baddParaByUrlKey("refpos");
        baddParaByUrlKey("t");
        baddParaByUrlKey("tc");
        baddParaByUrlKey("dc");
        baddParaByUrlKey("bgc");
        baddParaByUrlKey("bdc");
        baddParaByUrlKey("lc");
        baddParaByUrlKey("bmc");
        baddParaByUrlKey("as");
        baddParaByUrlKey("bgp");
        baddParaByUrlKey("ic");
        baddParaByUrlKey("tlul");
        baddParaByUrlKey("tlfs");
        baddParaByUrlKey("pf");
        bappendTaobaoUserName();
        bappendKgbInfo();
        bappendStatImg();
        bappendPageUrl();
        bappendQueryKey();
        bappendPageTitle();
        bappendPageReferrer();
        bappendFrameUrl();
        $bcu.q = $burl;
        boutput();
        bclearData()
    }
    bpreRun();
    bRun();
    return boutputstr
} (function() {
    window.alimama_refpos = (function() {
        var d = "";
        var c = ("&" + location.search.substring(1)).split("&refpos=");
        if (c[1]) {
            var b = c[1].split("&")[0].split(",");
            if (b[1]) {
                var a = b[1]
            }
            if (a && a != "null") {
                d = a
            }
        }
        if (d === "") {
            if (alimama_type == "2" || alimama_type == "j") {
                if (window.alimama_displaytype == "a" || window.alimama_displaytype == "c") {
                    d = "b"
                } else {
                    if (window.alimama_displaytype == "b") {
                        d = "e"
                    } else {
                        d = "a"
                    }
                }
            } else {
                d = "null"
            }
        }
        return "," + d + ",null"
    })();
    if (window.alimama_type && (alimama_type == "i" || alimama_type == "k")) {
        alimama_config[8] = alimama_config[21];
        alimama_config[9] = alimama_config[22]
    }
    if (typeof alimama_type == "undefined") {
        return
    } else {
        alimama_show_sync()
    }
})();
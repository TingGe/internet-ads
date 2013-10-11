/*pub-1|2013-05-23 18:12:04*/
KSLITE.declare("inf-main", ["inf-chk", "inf-request", "inf-fix"],
function(b, a) {
    a.run = function(c) {
        var r = ["mm_10952120_3512753_11517284", "mm_13210812_3478214_11398254", "mm_26536274_2790730_10822171", "mm_30232185_2681387_10175348", "mm_26632216_3300745_10762414", "mm_16541061_2238701_8762633", "mm_26487320_3338624_11485907", "mm_27653702_3394292_10921073", "mm_29394861_2683020_11049028", "mm_29939982_2606882_11297524", "mm_26632169_2503481_9453365", "mm_17017390_2264736_8819855", "mm_10982364_973726_9024533", "mm_15191080_2147689_9068851", "mm_10982364_973726_8930541", "mm_12987374_1803472_8806272", "mm_12761813_1803788_9565220", "mm_10032051_2374052_11499455", "mm_26051537_2367569_9275045", "mm_10989163_978818_9703958", "mm_34022157_3453867_11479730", "mm_10989163_978818_9703958", "mm_15191080_2147689_9020420", "mm_12229823_1573806_8666134", "mm_14616170_2082030_9472861", "mm_14616170_2082030_9000281", "mm_14507507_3437277_11435524", "mm_14507507_3437277_11435526", "mm_14507507_3437277_11435528", "mm_26632229_2944637_10161867", "mm_26632229_2944637_10038243", "mm_10982364_973726_8372451", "mm_26051537_2367569_9302515"];
        var f = false;
        var q = false;
        var e;
        if (c.type == "a" || c.type == "b" || c.type == "j" || c.type == e || c.type == 2) {
            q = true
        }
        for (var j = 0,
        l = r.length; j < l; j++) {
            if (r[j] == c.pid) {
                f = true;
                break
            }
        }
        if (/1$|2$|3$|4$|8$|9$/.test(c.pid)) {
            f = true
        }
        if (c.pid == "mm_26051537_2367569_9302507" || c.pid == "mm_26051537_2367569_9179968") {
            f = false
        }
        if (q && f) {
            var m = window["document"],
            t = m["createElement"]("script"),
            k = m["getElementsByTagName"]("head")[0];
            t.charset = "gbk";
            /*-- 原代码 --*/
            //t.src = "http://p.tanx.com/ex?i=" + c.pid;
            /*-- 本地代码 --*/
            t.src = "./p.tanx.com/ex.js?i=" + c.pid;
            k["insertBefore"](t, k.firstChild);
            return false
        }
        var o = b("inf-request");
        var n = b("inf-chk").Def;
        var g = b("inf-fix").fix(c);
        n(g,                                           
        function() {
            o.getRequest(g,
            function(d) {
                KSLITE.provide(["inf-distype-" + d.t.distype],
                function() {
                    b("inf-distype-" + d.t.distype).display(d)
                })
            })
        })
    }
});
KSLITE.declare("inf-cur", [],
function(d, b) {
    var g = window,
    f = document,
    c = {},
    a = {},
    e = {};
    c.ali = ["taobao.com", "alimama.com", "alibaba.com", "alipay.com", "alisoft.com", "linezing.com", "tanx.com", "mmstat.com", "etao.com"];
    c.kws = ["wd", "p", "q", "keyword", "kw", "w", "key", "word", "query", "name"];
    c.zmax = 6;
    c.alimama = "http://z.alimama.com/alimama.php";
    c.alimamal = "http://z.alimama.com/alimamal.php";
    c.ecpm = "http://t.alimama.com/alimama.php";
    c.ecpml = "http://t.alimama.com/alimamal.php";
    c.tl = {
        maxl: 10,
        maxc: 10,
        tc: [4, 8, 12],
        ts: [12, 14, 16],
        zmax: 20,
        tc1: "tc1"
    };
    c.schmax = 10;
    c.tk = {
        tksc: "tksc1"
    };
    c.richcnt = "0-0-0";
    c.rseed = 4973;
    c.limit = 0.9;
    c.sc = "sc1";
    c.mc = "mc1";
    e.data = {};
    e.units = [];
    e.p1 = [];
    e.p2 = [];
    e.ali = (function() {
        var j, k = f.domain.split("."),
        l = c.ali,
        h;
        if (k.length > 1) {
            h = "@" + k[k.length - 2] + "." + k[k.length - 1];
            if (("@" + l.join("@")).indexOf(h) > -1) {
                return true
            }
        }
        return false
    })();
    e.bof = (function() {
        try {
            var h = top.document.location;
            return false
        } catch(i) {
            return true
        }
    })();
    e.frm = (function() {
        var h = true;
        try {
            h = (self.location != top.location)
        } catch(i) {}
        return h
    })();
    e.cw = window;
    e.mw = window;
    e.cd = e.cw.document;
    e.md = e.mw.document;
    e.u = function() {
        if (e.bof && e.md.referrer) {
            return e.md.referrer
        }
        if (e.frm) {
            try {
                return top.document.location.href
            } catch(h) {
                return e.md.referrer
            }
        }
        return e.md.location.href
    } ();
    e.r = (function() {
        var i = "";
        try {
            i = top.document.referrer
        } catch(h) {}
        if (i === null) {
            i = ""
        }
        return i
    })();
    e.dx = function() {
        return e.data[c.sc]
    };
    a.one = function(h) {
        return f.getElementById(h)
    };
    a.after = function(j, o) {
        var h, m, l, n, k = 0;
        if (!j || !o) {
            return
        }
        h = f.createElement("div");
        h.innerHTML = o;
        m = j.parentNode;
        l = j.nextSibling;
        while (h.childNodes.length !== 0 && k < 5) {
            n = h.childNodes[0];
            if (l) {
                m.insertBefore(n, l)
            } else {
                m.appendChild(n)
            }
            k++
        }
        h = null
    };
    a.pos = function(h, p) {
        function m(i) {
            return i.offsetParent ? i.offsetLeft + m(i.offsetParent) : i.offsetLeft
        }
        function k(i) {
            return i.offsetParent ? i.offsetTop + k(i.offsetParent) : i.offsetTop
        }
        var r = a.one(h),
        l = m(r),
        j = k(r),
        n = g,
        o = 0;
        if (p) {
            try {
                if (n.parent.window && typeof n.parent.window != "undefined" && n != n.parent) {
                    while (n.location != window.top.location && o < 3) {
                        l += m.call(n.parent, n.frameElement);
                        j += k.call(n.parent, n.frameElement);
                        n = n.parent.window;
                        o++
                    }
                }
            } catch(q) {}
        }
        return [l, j]
    };
    c.zone = {};
    c.zone._m = "a";
    c.zone._ac = document.getElementsByTagName("body")[0];
    a.put = function(i) {
        var j = c.zone._m,
        h = c.zone._ac;
        if (j == "a") {
            a.after(h, i)
        } else {
            if (j == "c") {
                h.innerHTML = i
            } else {
                f.write(i)
            }
        }
    };
    a.bencodeUtf8 = function(j) {
        var k = "";
        for (var h = 0; h < j.length; h++) {
            var l = j.charCodeAt(h);
            if (l < 128) {
                if (l == 46 || l == 40 || l == 41 || (l > 47 && l < 58) || (l > 64 && l < 91) || (l > 96 && l < 123)) {
                    k += j.charAt(h)
                } else {
                    k += bhex(l)
                }
            } else {
                if (127 < l && l < 2048) {
                    k += bhex((l >> 6) | 192);
                    k += bhex((l & 63) | 128)
                } else {
                    if (2047 < l && l < 65536) {
                        k += bhex((l >> 12) | 224);
                        k += bhex(((l >> 6) & 63) | 128);
                        k += bhex((l & 63) | 128)
                    } else {
                        if (65535 < l && l < 2097152) {
                            k += bhex((l >> 18) | 240);
                            k += bhex(((l >> 12) & 63) | 128);
                            k += bhex(((l >> 6) & 63) | 128);
                            k += bhex((l & 63) | 128)
                        } else {
                            if (2097151 < l && l < 67108864) {
                                k += bhex((l >> 24) | 248);
                                k += bhex(((l >> 18) & 63) | 128);
                                k += bhex(((l >> 12) & 63) | 128);
                                k += bhex(((l >> 6) & 63) | 128);
                                k += bhex((l & 63) | 128)
                            } else {
                                if (67108863 < l && l < 2147483648) {
                                    k += bhex((l >> 30) | 252);
                                    k += bhex(((l >> 24) & 63) | 128);
                                    k += bhex(((l >> 18) & 63) | 128);
                                    k += bhex(((l >> 12) & 63) | 128);
                                    k += bhex(((l >> 6) & 63) | 128);
                                    k += bhex((l & 63) | 128)
                                }
                            }
                        }
                    }
                }
            }
        }
        return k
    };
    a.bencodeUrl = function(h) {
        if (typeof encodeURIComponent == "function") {
            return encodeURIComponent(h.toString())
        } else {
            return a.bencodeUtf8(h.toString())
        }
    };
    a.p2s = function(n, l, h) {
        if (!h) {
            h = {}
        }
        var o = function(u, t) {
            var w = 0;
            var q = /[^\x00-\xff]/;
            for (var s = 0; s < u.length; s++) {
                var r = u.charAt(s);
                var v = 1;
                if (q.test(r)) {
                    v = 2
                }
                w = w + v;
                if (w > t * 2) {
                    return u.substr(0, s)
                }
            }
            return u
        };
        var m = [];
        for (var p in n) {
            var j = n[p];
            var i = p.split("_");
            if (i.length < 2) {
                break
            }
            var k = i[1];
            if (k == "i") {
                if (/[\D]/.test(j)) {
                    j = 0
                }
                m.push(l + "_" + i[0] + "=" + j)
            } else {
                if (k == "c") {
                    if (j.indexOf("#") === 0) {
                        j = j.substr(1)
                    }
                    if (/[^0-9a-fA-F]/.test(j) || j.toString().length != 6) {
                        j = "FFFFFF"
                    }
                    m.push(l + "_" + i[0] + "=" + j)
                } else {
                    if (k == "s") {
                        if (h[i[0]]) {
                            j = o(j, h[i[0]])
                        } else {
                            j = o(j, 10)
                        }
                        m.push(l + "_" + i[0] + "=" + a.bencodeUrl(j))
                    }
                }
            }
        }
        return m
    };
    a.baddUnit = function(k) {
        var i = new Date();
        var j = i.getTime();
        var h = {};
        h.w = window;
        h.pid = k.p.pid;
        h.t = j;
        h.tp = k.p.type;
        h.sz = k.p.sizecode;
        e.units.push(h)
    };
    a.baddCount = function(l, k) {
        var h = 0;
        for (var j = 0; j < e.units.length; j++) {
            if (e.units[j].pid == k.p.pid) {
                h += 1
            }
            if (h > 1) {
                return
            }
        }
        if (!e.data[l]) {
            e.data[l] = 1
        } else {
            e.data[l]++
        }
    };
    b.C = c;
    b.U = a;
    b.R = e
});
KSLITE.declare("inf-antifraud", ["inf-cur"],
function(j, r) {
    var d = j("inf-cur");
    var f = window,
    s = document,
    n = {},
    m = d.C,
    b = m.zone,
    e = d.U,
    h = d.R,
    i = Math;
    function k() {
        var u = "",
        t = "",
        w, x, A, B, z = location,
        v = "";
        function y(E, G) {
            var F = "",
            C = 1,
            D;
            C = Math.floor(E.length / G);
            if (C == 1) {
                F = E.substr(0, G)
            } else {
                for (D = 0; D < G; D++) {
                    F += E.substr(D * C, 1)
                }
            }
            return F
        }
        if (h.ali) {
            w = (" " + s.cookie).split(";");
            for (x = 0; x < w.length; x++) {
                if (w[x].indexOf(" cna=") === 0) {
                    t = w[x].substr(5, 24);
                    break
                }
            }
        }
        if (t === "") {
            cu = (z.search.length > 9) ? z.search: ((z.pathname.length > 9) ? z.pathname: z.href).substr(1);
            w = document.cookie.split(";");
            for (x = 0; x < w.length; x++) {
                if (w[x].split("=").length > 1) {
                    v += w[x].split("=")[1]
                }
            }
            if (v.length < 16) {
                v += "0123456789abcdef"
            }
            t = y(cu, 8) + y(v, 16)
        }
        for (x = 1; x <= 32; x++) {
            A = i.floor(i.random() * 16);
            if (t && x <= t.length) {
                B = t.charCodeAt(x - 1);
                A = (A + B) % 16
            }
            u += A.toString(16)
        }
        return "cg=" + u
    }
    function o() {
        var t = i.floor(i.random() * 10000) + 10001;
        try {
            if (h.sid) {
                t = h.sid
            } else {
                t = t - 10001;
                h.sid = t
            }
        } catch(u) {}
        return "ac=" + t
    }
    function g() {
        var x = 0,
        A = 16,
        y = 0,
        u, t, v, B, w, z = m[0] || 4973;
        for (v = 1; v <= A; v++) {
            u = i.random();
            t = i.random();
            if ((i.pow(u, 2) + i.pow(t, 2)) <= 1) {
                x++
            }
            if (v <= 12) {
                y = y + u
            }
        }
        B = "pr" + String.fromCharCode(97 + x);
        w = (i.round(y * z) | ((h.md.body ? h.md.body.clientWidth: 0) << 16));
        return B + "=" + w + "&cas=" + B
    }
    function l() {
        var u, t = 1,
        v = -1;
        if (h.md) {
            u = h.md.body;
            t = u.clientHeight;
            v = u.clientWidth
        }
        return "cbh=" + t + "&cbw=" + v
    }
    function a() {
        var t, x, w = "mm_ti_",
        u = "<img name='" + w + "' id='" + w + "' style='width:0px;height:0px;padding:0px;margin:0px;border:0px;vertical-align:baseline;' border=0 />";
        e.put(u);
        x = e.pos(w, true);
        try {
            t = e.one(w);
            if (t) {
                t.parentNode.removeChild(t)
            }
        } catch(v) {}
        return "sx=" + x[0] + "&sy=" + x[1]
    }
    function c() {
        var v = f.screen,
        t = 0,
        z = 0,
        u = 0,
        x = 0,
        y = 0;
        try {
            t = v.width;
            z = v.height;
            u = v.availHeight;
            x = v.availWidth;
            y = v.colorDepth
        } catch(w) {}
        return "re=" + t + "x" + z + "&cah=" + u + "&caw=" + x + "&ccd=" + y
    }
    function q() {
        var t = "-1",
        y = navigator,
        v, u;
        if (y.plugins && y.plugins.length) {
            for (v = 0; v < y.plugins.length; v++) {
                if (y.plugins[v].name.indexOf("Shockwave Flash") != -1) {
                    t = y.plugins[v].description.split("Shockwave Flash ")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (u = 10; u >= 2; u--) {
                    try {
                        var w = new Function("return new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + u + "');");
                        if (w) {
                            t = u + ".0";
                            break
                        }
                    } catch(x) {}
                }
            }
        }
        if (t != "-1") {
            t = t.substring(0, t.indexOf(".") + 2)
        }
        return "cf=" + t
    }
    function p() {
        var t = [],
        u = navigator;
        t.push("ctz=" + ( - ((new Date()).getTimezoneOffset() / 60)));
        t.push("chl=" + history.length);
        t.push("cja=" + (u.javaEnabled() ? "1": "0"));
        t.push("cpl=" + (u.plugins ? u.plugins.length: 0));
        t.push("cmm=" + (u.mimeTypes ? u.mimeTypes.length: 0));
        t.push(q());
        return t.join("&")
    }
    n.get = function() {
        if (!n.f) {
            n.f = [c(), p()].join("&")
        }
        return [n.f, k(), o(), g(), l(), a()]
    };
    r.Def = n
});
KSLITE.declare("inf-pageinfo", ["inf-cur"],
function(l, t) {
    var b = l("inf-cur");
    var f = window,
    u = document,
    i = {},
    p = b.C,
    a = p.zone,
    e = b.U,
    h = b.R,
    g = encodeURIComponent;
    function j() {
        var x = "0",
        z = "alimamapid=",
        w = navigator.userAgent.toLowerCase(),
        v;
        try {
            v = top.location.href
        } catch(y) {
            v = h.md.referrer
        }
        if (w.indexOf("fox/ss") > -1 && v.indexOf(z) > -1 && v.substr(v.indexOf(z) + z.length) == p.zone.i) {
            x = "1"
        }
        return "iss=" + x
    }
    function n() {
        var x = location.host,
        w, v, y;
        if ( - 1 < x.lastIndexOf("taobao.com") && 10 === x.length - x.lastIndexOf("taobao.com")) {
            w = u.cookie;
            if (w) {
                w = (" " + w).split(";");
                for (v = 0; v < w.length; v++) {
                    y = w[v].split("=");
                    if (y[0].indexOf(" tracknick") === 0) {
                        return y[1] ? "uid=" + y[1] : ""
                    }
                }
            }
        }
        return ""
    }
    function q() {
        var v = h.dx();
        return "dx=" + (v ? v: "")
    }
    function m() {
        return "u=" + g(h.u)
    }
    function r() {
        return "r=" + g(h.r)
    }
    function s(w) {
        var y = p.kws,
        x, z, v;
        if (w) {
            for (x = 0; x < y.length; x++) {
                z = new RegExp("[^1-9a-zA-Z]" + y[x] + "=([^&]*)");
                v = w.match(z);
                if (v) {
                    z = new RegExp("^[0-9]*$");
                    if (v[1].match(z) === null) {
                        return v[1]
                    }
                }
            }
        }
        return ""
    }
    function k() {
        var v = s(h.u);
        if (v === "" && h.r) {
            v = s(h.r)
        }
        return "k=" + v
    }
    function o() {
        var v = "";
        try {
            v = h.md.title
        } catch(w) {}
        return "tt=" + g(v)
    }
    function d(y) {
        var x = "-1",
        w = 1,
        v = 1;
        if (h.frm) {
            if (f.innerHeight) {
                w = f.innerWidth;
                v = f.innerHeight
            } else {
                if (u.documentElement && u.documentElement.clientHeight) {
                    w = u.documentElement.clientWidth;
                    v = u.documentElement.clientHeight
                } else {
                    if (u.body) {
                        w = u.body.clientWidth;
                        v = u.body.clientHeight
                    }
                }
            }
            if (v > 2 * y.p.height || w > 2 * y.p.width) {
                x = g(f.location.href)
            }
        }
        return "fu=" + x
    }
    function c() {
        var w = "",
        v = "",
        y, z, D, E, C = location,
        x = "",
        A = Math;
        function B(H, J) {
            var I = "",
            F = 1,
            G;
            F = Math.floor(H.length / J);
            if (F == 1) {
                I = H.substr(0, J)
            } else {
                for (G = 0; G < J; G++) {
                    I += H.substr(G * F, 1)
                }
            }
            return I
        }
        if (h.ali) {
            y = (" " + u.cookie).split(";");
            for (z = 0; z < y.length; z++) {
                if (y[z].indexOf(" cna=") === 0) {
                    v = y[z].substr(5, 24);
                    break
                }
            }
        }
        if (v === "") {
            cu = (C.search.length > 9) ? C.search: ((C.pathname.length > 9) ? C.pathname: C.href).substr(1);
            y = document.cookie.split(";");
            for (z = 0; z < y.length; z++) {
                if (y[z].split("=").length > 1) {
                    x += y[z].split("=")[1]
                }
            }
            if (x.length < 16) {
                x += "abcdef0123456789"
            }
            v = B(cu, 8) + B(x, 16)
        }
        for (z = 1; z <= 32; z++) {
            D = A.floor(A.random() * 16);
            if (v && z <= v.length) {
                E = v.charCodeAt(z - 1);
                D = (D + E) % 16
            }
            w += D.toString(16)
        }
        return "pageid=" + w
    }
    i.get = function(w) {
        var v;
        if (!i.f) {
            i.f = [j(), m(), k(), o(), r(), d(w), c()].join("&");
            v = n();
            if (v) {
                i.f = v + "&" + i.f
            }
        }
        return [q(), i.f]
    };
    t.Def = i
});
KSLITE.declare("inf-request", ["inf-antifraud", "inf-pageinfo", "inf-cur"],
function(b, a) {
    a.getRequest = function(h, f) {
        var i = b("inf-cur");
        i.R.p1 = b("inf-antifraud").Def.get();
        i.R.p2 = i.R.p2.length ? i.R.p2: b("inf-pageinfo").Def.get(h);
        var g = [];
        function e(m, l, j) {
            if ((!m || m === "") || (!l || l === "")) {
                return
            } else {
                j.push(m + "=" + l)
            }
        }
        KSLITE.provide(["inf-type-" + h.p.type],
        function() {
            g = b("inf-type-" + h.p.type).getP(h)
        });
        var c = [];
        e("i", h.p.pid, c);
        e("w", h.p.width, c);
        e("h", h.p.height, c);
        e("sz", h.p.sizecode, c);
        if (g.length) {
            c.push(g.join("&"))
        }
        c.push(i.R.p1.join("&"));
        e("rp", h.p.referpid, c);
        e("refpos", h.p.refpos, c);
        e("t", h.p.type, c);
        e("tc", h.p.titlecolor, c);
        e("dc", h.p.descolor, c);
        e("bgc", h.p.bgcolor, c);
        e("bdc", h.p.bordercolor, c);
        e("lc", h.p.linkcolor, c);
        e("bmc", h.p.bottomcolor, c);
        e("as", h.p.anglesize, c);
        e("bgp", h.p.bgpic, c);
        e("ic", h.p.icon, c);
        e("tlul", h.p.underline, c);
        e("tlfs", h.p.fontsize, c);
        var d = 2;
        switch (h.t.distype) {
        case "float_win":
            e("distype", 1, c);
            break;
        case "float_couplet":
            if (h.t.disfloat == "left") {
                d = 3
            }
            if (h.t.disfloat == "right") {
                d = 4
            }
            e("distype", d, c);
            break
        }
        if (typeof(h.p.custom) == "string") {
            e("ctm", i.U.bencodeUrl(h.p.custom), c)
        }
        e("pf", h.p.pf || "1", c);
        if (typeof(h.p.p4p_kw) == "string") {
            e("p4p_kw", i.U.bencodeUrl(h.p.p4p_kw), c)
        }
        if (typeof(h.p.p4p_ai) == "string") {
            if (h.p.p4p_ai == "1" || h.p.p4p_ai == "2" || h.p.p4p_ai == "3") {
                e("p4p_ai", h.p.p4p_ai, c)
            }
        } else {
            e("p4p_ai", "1", c)
        }
        c.push(i.R.p2.join("&"));
        h.url += c.join("&");
        f(h)
    }
});
KSLITE.declare("inf-chk", ["inf-cur"],
function(b, a) {
    a.Def = function(e, d) {
        var f = b("inf-cur");
        e.url = f.C.alimama + "?";
        if (e.p.type && (e.p.type == "i")) {
            e.url = f.C.ecpm + "?"
        } (function() {
            if (typeof e.p.height == "undefined") {
                e.p.height = 0
            }
            if (typeof e.p.width == "undefined") {
                e.p.width = 0
            }
        })();
        function c(k) {
            var j = true;
            var g = 0;
            for (var h = 0; h < f.R.units.length; h++) {
                if (f.R.units[h].pid == k.p.pid) {
                    g += 1
                }
                if (g > 1) {
                    j = false
                }
            }
            return j
        }
        KSLITE.provide(["inf-type-" + e.p.type],
        function() {
            var g = b("inf-type-" + e.p.type);
            f.U.baddUnit(e);
            g.prerun(e);
            if (c(e) && g.chk(e)) {
                d()
            }
        })
    }
});
KSLITE.declare("inf-fix", [],
function(b, a) {
    a.fix = function(d) {
        var c = {};
        c.p = d;
        c.url = "";
        c.adiframe = {};
        c.adiframe.id = "tanx-a-" + c.p.pid;
        c.adiframe.css = "";
        c.t = {};
        c.btl = {
            l: 1,
            c: 1,
            s: 12,
            n: 4
        };
        c.p.type = c.p.type ? c.p.type: 2;
        if (c.p.type == "j") {
            c.p.limit = 0.1
        }
        if (c.p.type == "a" || c.p.type == "b" || c.p.type == "j") {
            c.p.type = 2
        }
        c.t.distype = "default";
        c.t.disfloat = "double";
        if (c.p.type == 2 && (c.p.displaytype == "a" || c.p.displaytype == "c")) {
            c.t.distype = "float_win"
        }
        if (c.p.type == 2 && c.p.displaytype == "b") {
            c.t.distype = "float_couplet"
        }
        if (c.p.type == 2 && c.p.displaytype == "b-left") {
            c.t.distype = "float_couplet";
            c.t.disfloat = "left"
        }
        if (c.p.type == 2 && c.p.displaytype == "b-right") {
            c.t.distype = "float_couplet";
            c.t.disfloat = "right"
        }
        if (c.p.type == "i") {
            c.t.distype = "script"
        }
        c.bcl = {};
        c.p.refpos = (function(e) {
            var i = "";
            var h = ("&" + location.search.substring(1)).split("&refpos=");
            if (h[1]) {
                var g = h[1].split("&")[0].split(",");
                if (g[1]) {
                    var f = g[1]
                }
                if (f && f != "null" && (f == "b" || f == "e")) {
                    i = f
                }
            }
            if (i === "") {
                if (e.type == "2" || e.type == "j") {
                    if (e.displaytype == "a" || e.displaytype == "c") {
                        i = "b"
                    } else {
                        if (e.displaytype == "b") {
                            i = "e"
                        } else {
                            i = "a"
                        }
                    }
                } else {
                    i = "null"
                }
            }
            return "," + i + ",null"
        })(c.p);
        return c
    }
});
KSLITE.declare("inf-type-2", ["inf-cur"],
function(b, a) {
    var c = b("inf-cur");
    a.chk = function(e) {
        var d = true;
        if (c.R.data[c.C.sc] > c.C.zmax) {
            d = false
        }
        return d
    };
    a.prerun = function(i) {
        if (c.C.alimama != "http://z.alimama.com/docom.php") {
            var h = i.p.limit || c.C.limit;
            var k = {
                "11": [760, 90],
                "12": [468, 60],
                "14": [728, 90],
                "15": [950, 90],
                "16": [658, 60],
                "13": [250, 60],
                "21": [120, 600],
                "22": [120, 240],
                "23": [160, 600],
                "31": [180, 250],
                "32": [250, 300],
                "33": [360, 190],
                "34": [250, 250],
                "35": [200, 200],
                "36": [336, 280],
                "37": [300, 250],
                "38": [290, 200]
            };
            var j = i.p.width;
            var f = i.p.height;
            var e = i.p.sizecode;
            if (k[e]) {
                var d = k[e][0];
                var g = k[e][1];
                if (d * h > j) {
                    i.p.pf = "0";
                    i.p.width = Math.round(d * h)
                }
                if (g * h > f) {
                    i.p.pf = "0";
                    i.p.height = Math.round(g * h)
                }
            }
        }
        c.U.baddCount(c.C.sc, i)
    };
    a.getP = function(d) {
        return []
    }
});
KSLITE.declare("inf-type-i", ["inf-cur"],
function(c, b) {
    function a(f) {
        return true
    }
    function d(f) {
        return
    }
    function e(f) {
        return []
    }
    b.chk = a;
    b.prerun = d;
    b.getP = e
});
KSLITE.declare("inf-distype-default", ["inf-distype-iframe"],
function(b, a) {
    a.display = function(c) {
        b("inf-distype-iframe").display(c)
    }
});
KSLITE.declare("inf-distype-iframe", [],
function(b, a) {
    a.display = function(e) {
        if (typeof e.p.underfilter == "number") {
            e.adiframe.css += "position:relative;width:" + e.p.width + "px; height:" + e.p.height + "px;"
        } else {
            if (e.p.type == "f" && e.p.width === 0) {
                e.adiframe.css += "width:100%; height:" + e.p.height + "px;"
            } else {
                e.adiframe.css += "width:" + e.p.width + "px; height:" + e.p.height + "px; "
            }
        }
        e.adiframe.css += "border:0;";
        var c = 0;
        d();
        function d() {
            var f = document.getElementById(e.adiframe.id);
            if (!f && c < 5) {
                c++;
                setTimeout(function() {
                    d()
                },
                c * 500);
                return
            }
            if (!f) {
                return
            }
            f.marginWidth = 0;
            f.marginHeight = 0;
            f.scrolling = "no";
            f.src = e.url;
            f.frameBorder = 0;
            f.style.cssText = e.adiframe.css;
            f = document.getElementById(e.adiframe.id + "_clone");
            if (f) {
                f.marginWidth = 0;
                f.marginHeight = 0;
                f.scrolling = "no";
                f.src = e.url;
                f.frameBorder = 0;
                f.style.cssText = e.adiframe.css
            }
            f = undefined
        }
    }
});
KSLITE.declare("inf-distype-script", [],
function(b, a) {
    a.display = function(e) {
        var d = document.createElement("script"),
        f = document,
        c = f.getElementsByTagName("head")[0];
        d.charset = "gbk";
        d.async = true;
        d.src = e.url;
        c.insertBefore(d, c.firstChild)
    }
});
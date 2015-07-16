# 学习 Gumgum 的javascript代码 #

## 系统概览 ##

### 总体的逻辑架构 ###

![逻辑架构]()

## 广告投放系统 ##

### 系统概览 ###

#### 逻辑架构 ####

![逻辑架构]()

#### 时序略图 ####

![时序略图]()

### Gumgum的系统入口 ###

做为Gumgum的系统入口，需要在网站(如[demo.gumgum.com](http://demo.gumgum.com/dailynews/index.html#ggad=UvWNj-3VcH7p9DPtdSLg-fajd1ONNIq7clqN41uXnL9CktCrsSZxlcYnRBIHcUk5YMyKNTFaDlAEyHg0SKs71w))上嵌入Gumgum的广告调度代码。如：

    <script>ggv2id="ggumtest"</script>
    <script src="//g2.gumgum.com/javascripts/ggv2.js"></script>


以上广告代码中的关键信息意义如下：

- ggv2id： 广告位编号
- ggv2.js：Gumgum的广告前端系统入口点

### Gumgum的广告前端系统 ###

#### 前端系统入口点（ggv2.js） ####

Gumgum的广告前端系统的入口点（ggv2.js）中,代码结构如下：

    if (!window.GUMGUM) {…}
    if (window.GUMGUM) {…}
    if (window.GUMGUM) {…}

意义如下：

- GUMGUM
- GUMGUM.slots
- GUMGUM.ggv2

入口方法,在GUMGUM.ggv2部分中

    if (errorCB()) {
      self.onReady(success);
    }

### 常规的广告调度系统（http://g2.gumgum.com/services/get） ###

提供常规广告调度服务的URL地址是http://g2.gumgum.com/services/get，负责接收由GUMGUM广告前端系统发起的广告调度请求，进行广告调度。

#### 广告调度请求的参数 ####

**GET参数**

- callback:"GUMGUM.startServices"
- pubdata:"{"t":"ggumtest","v":1,"r":"release-912-24-gb86d974","fs":true,"rf":"","pu":"http://demo.gumgum.com/dailynews/index.html#ggad=UvWNj-3VcH7p9DPtdSLg-fajd1ONNIq7clqN41uXnL9CktCrsSZxlcYnRBIHcUk5YMyKNTFaDlAEyHg0SKs71w/","ce":true,"vp":{"ii":false,"w":490,"h":765},"sc":{"w":1600,"h":900,"d":1}}"
- bf："b8ec5468aa3bdceffae5d6423254db161a18be59"
- lt:"1436782376784"
- to:"-480"
- eAdBuyId:"UvWNj-3VcH7p9DPtdSLg-fajd1ONNIq7clqN41uXnL9CktCrsSZxlcYnRBIHcUk5YMyKNTFaDlAEyHg0SKs71w/"
- _1436782376785:""
	
**Cookie参数**


#### 广告调度请求的响应 ####

GUMGUM广告调度系统(http://g2.gumgum.com/services/get)响应的内容格式如下：

    GUMGUM.startServices({
      "ins": {"active": true},
      "at": {"ot": 70, "zo": 10, "of": false, "mh": 200, "sf": true, "mw": 250, "tr": 0, "ps": false},
      "pxs": {
        "qac": "p-00TsOkvHvnsZU",
        "vrt": "ENTERTAINMENT",
        "dom": "demo.gumgum.com",
        "bluekaiIdSwap": true,
        "c3": 1,
        "liveramp": true,
        "vst": "3866771e-5ad5-4759-8641-ea88d9c56014",
        "exelate": true,
        "c2": "15039634",
        "quantcast": true, 
        "visitorId": "3866771e-5ad5-4759-8641-ea88d9c56014",
        "qsg": "Entertainment.ggumtest",
        "tid": "ggumtest",
        "comscore": true,
        "bluekai": true,
        "lmt": 6,
        "partner_uuid": "3866771e-5ad5-4759-8641-ea88d9c56014"
      },
      "ads": {"coverage": 1},
      "nat": {
        "plc": [
            {
              "id": 10, 
              "cs": "body > .container > p:nth-child(2)"
            }, {
              "id": 15,
              "cs": "#feed .feed_item:nth-child(1)"
            }
        ], 
        "active": true
      },
      "pag": {"css": "#fake_fix { position: inherit; }", "pvid": "02369117-b052-49ab-a94e-3f153f089241", "js": ""}
    });

GUMGUM.startServices是在前端系统入口点（ggv2.js）脚本中定义的回调函数，负责将“data”字段中的iframe标签文本输出到页面中，向舞女页面发起请求。舞女页面是整个系统的神来之笔，后文会使用一个比较大的篇幅专题分析。

主要定义的是：

- GUMGUM.startServices
- quantcast:位于旧金山，经营代理定向显示广告的新创公司，[官网](http://www.quantcast.com)
- media6:
- across33: 33Across公司，社会化广告服务
- bluekai:美国著名在线数据拍卖平台，[官网](http://www.bluekai.com/)
- bluekaiIdSwap
- bluekaiBuyer
- comscore:美国知名的互联网统计公司、互联网流量跟踪分析公司和市场调研公司，[官网](http://www.comscore.com/)
- comscoreMobile
- jug
- exelate：尼尔森
- exelateRtd
- datonicsBuyer
- flite:基于云端媒体广告平台是美国的一家知名的互联网媒体广告投放服务平台,[官网](http://flite.com/)
- dvbot
- digitrust
- partner_uuid


## 学习后记 ##

### 域名整理 ###

- demo.gumgum.com: 模拟媒体网页
- g2.gumgum.com： 访客在广告上的行为监测（ad）、广告资源（assets）、前端投放JS（javascripts）、广告调度（services）
- pixel.quantserve.com:监测服务、广告定向，[官网](https://www.quantserve.com/)
- tags.bluekai.com:BlueKai的Ad Exchange
- b.scorecardresearch.com: 第三方监测域名,[官网](http://www.scorecardresearch.com/Home.aspx)
- loadus.exelator.com:DMP及广告定向数据公司,[官网](http://exelate.com/)
- idsync.rlcdn.com:未知
- ib.mookie1.com：未知，[官网](http://www.mookie1.com)
- exelate.d.chango.com：Chango的广告再定位服务
- das.uk.experian.com：在线广告偏好,参见[网站](http://das.uk.experian.com/experianoptout/)
- p.univide.com：未知
- www.bkrtx.com：BlueKai的js
- c.gumgum.com：广告素材包（模版+广告创意）
- js.moatads.com:存储Moatads的js,品牌分析，[官网](http://www.moat.com/)
- v4.moatads.com：Moatads的数据采集Server
- s.moatads.com：存储Moatads的swf
- ads.gumgum.com： 存储GumGum Ad Information页的样式
- gumgum.com：存储GumGum Ad Information页的字体库




### 代码评点 ###


### 参考引用 ###

- 

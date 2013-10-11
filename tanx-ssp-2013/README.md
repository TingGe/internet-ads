# 学习TANX SSP的javascript代码 #

## 系统概览 ##

### 总体的逻辑架构 ###

![逻辑架构](http://tech.peigong.tk/assets/images/projects/tanx-ssp/logical-framework.png)

## 广告投放系统 ##

### 系统概览 ###

#### 逻辑架构 ####

![逻辑架构](http://tech.peigong.tk/assets/images/projects/tanx-ssp/ali-ad-system.png)

#### 时序略图 ####

![时序略图](http://tech.peigong.tk/assets/images/projects/tanx-ssp/ali-ad-system-sequence.png)

### TANX SSP的系统入口 ###

做为TANX SSP的系统入口，需要在网站(如[有问必答](http://www.120ask.com/zxmrk/28/28109815.htm))上嵌入阿里妈妈的广告调度代码。如：

    <script type="text/javascript">
        alimama_pid="mm_37227883_3484494_11371704";
        alimama_width=300;
        alimama_height=250;
    </script>
    <script src="http://a.alimama.cn/inf.js" type="text/javascript"></script>

以上广告代码中的关键信息意义如下：

- alimama_pid： 广告位编号
- alimama_width：广告位的宽度
- alimama_height：广告位的高度
- inf.js：阿里妈妈的广告前端系统入口点

### 阿里妈妈的广告前端系统 ###

#### 前端系统入口点（inf.js） ####

阿里妈妈的广告前端系统的入口点（inf.js）中，首先对包和模块进行定义。代码如下：

    var l = {
        lt_pkgs: {
            inf: "http://a.alimama.cn/",
            packages: "http://a.alimama.cn/inf/"
        },
        lt_v: "1.1.5",
        lt_t: "20130523.js"
    };

意义如下：

- lt_pkgs：包路径信息。
- lt_v：版本 如 1.1.5。
- lt_t：时间戳比如 20101129.js

参见kslite框架开发团队的github项目[etaoux/kslite](https://github.com/etaoux/kslite)

kslite框架会根据包和模块的定义，异步加载模块的入口点（inf/main.js）。

#### 模块入口点（inf/main.js） ####

kslite框架加载模块入口点（inf/main.js）脚本时，会携带参数。如下：

**GET参数**

- _t：20130523.js，向服务器要求指定构建版本的脚本文件。

在模块的入口点（inf/main.js）脚本中，负责向常规广告调度系统发出广告调度请求。

### 常规的广告调度系统（http://p.tanx.com/ex） ###

提供常规广告调度服务的URL地址是http://p.tanx.com/ex，负责接收由阿里妈妈广告前端系统发起的广告调度请求，进行常规的、不限于TANX SSP的广告调度。

#### 广告调度请求的参数 ####

**GET参数**

- 参数i：广告位编号，如mm_37227883_3484494_11371704。

**Cookie参数**

- cna：域为.tanx.com，路径为/，过期时间是25年以后。值如mqEwCpEPWVYCAfKFf3xLEFf3。

当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。

#### 广告调度请求的响应 ####

在接收到以广告位编号为主要参数的调度请求后，调度系统根据特定的广告调度逻辑，确定是否为该广告位提供TANX服务，然后回复特定分支的200 OK响应。

200 OK中定义TANX服务的关键数据如下：

    var o = { 
    		... ...
    		sd : "toruk.tanx.com" 
    	}, 
    	p = { 
        	c : 'gbk', 
        	s : 'http://cdn.tanx.com/t/tanxssp.js' 
    	}; 

主要定义的是：

- TANX调度服务器域名的定义。
- TANX服务的入口点脚本（tanxssp.js）

这一设计，为广告流量的灵活分配提供了可能性，可以用于小流量测试、负载分担、单一化系统职责等各种场景。

#### 加载TANX服务的入口点脚本（tanxssp.js） ####

广告调度请求的200 OK响应会执行程序，加载TANX SSP的广告前端系统的入口点脚本（tanxssp.js）。

**Cookie参数**

- cna：域为.tanx.com，路径为/，过期时间是25年以后。值如mqEwCpEPWVYCAfKFf3xLEFf3。

如果浏览器客户端存在TANX域的Cookie，在加载入口点时携带Cookie信息。如果没有，则不必携带。

### TANX SSP的广告前端系统 ###

#### 系统的入口点（tanxssp.js） ####

如同阿里妈妈的入口点脚本，TANX SSP的入口点（tanxssp.js）也首先对模块和包进行了定义。如：

    var l = {
        lt_pkgs: {
            tanxssp: "http://cdn.tanx.com/t/",
            charset: "gbk"
        },
        lt_v: "1.0.0",
        lt_t: "20130516.js"
    };

与其不同的是，对同步加载时需要的模块入口点地址也进行了定义。如：

    var a = "http://cdn.tanx.com/t/tanxssp/main.js?_t=20130516";

kslite框架会异步或同步的加载模块的入口文件（tanxssp/main.js）。

#### 模块的入口点（tanxssp/main.js） ####

加载模块入口点（tanxssp/main.js）脚本时携带参数。如下：

**GET参数**

- _t：20130523.js，向服务器要求指定构建版本的脚本文件。

**Cookie参数**

- cna：域为.tanx.com，路径为/，过期时间是25年以后。值如mqEwCpEPWVYCAfKFf3xLEFf3。

当客户端存有TANX域的Cookie时，携带Cookie参数。没有Cookie，则不必携带。

在模块的入口点（tanxssp/main.js）脚本中，负责组装广告请求参数，向TANX广告调度系统(http://toruk.tanx.com/ex)发出广告调度请求。

同时，在模块的入口点（tanxssp/main.js）脚本中，也定义了TANX广告调度服务响应后，用于回调执行的函数。如：

    var k = "jsonp_callback_" + parseInt(Math.random() * 100000, 10);
    window[k] = function(s) {... ...}

### TANX广告调度系统(http://toruk.tanx.com/ex) ###

提供TANX广告调度服务的URL地址是http://toruk.tanx.com/ex，负责接收由TANX广告前端系统发起的广告调度请求。

这里的toruk.tanx.com，是由常规广告调度服务器投放TANX SSP广告时，在200OK的响应中确定的TANX广告调度服务使用的域名。

#### 广告调度请求的参数 ####

**Cookie参数**

- cna：域为.tanx.com，路径为，过期时间是25年以后。值如mqEwCpEPWVYCAfKFf3xLEFf3。

当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。

**GET参数**

- i：广告位编号，如mm_37227883_3484494_11371704。
- cb：在客户端收到TANX广告调度的响应后，需要执行的回调函数名。在模块的入口点（tanxssp/main.js）脚本中定义，通过JSONP实现跨域通信，如jsonp_callback_5021。
- callback：
- userid：
- o：
- f：
- n：
- re：访问者屏幕的尺寸（宽x高）
- r：
- cah：900
- caw：1440
- ccd：24
- ctz：8
- chl：2
- cja：1
- cpl：23
- cmm：75
- cf：11.4
- cg：a885a4d6b1a8c5c3e3c8c4415cc956c5
- ac：6990
- prl：93285121
- j：
- cas：prl
- cbh：3412
- cbw：1423
- dx：1
- u：当前访问页面的URL地址，如http://www.120ask.com/zxmrk/28/28109815.htm。
- pf
- k：
- tt：当前访问页面的title，如"月经期间如何丰胸 帮您免费 快速问医生 有问必答网"。

#### 广告调度请求的响应 ####

TANX广告调度系统(http://toruk.tanx.com/ex)响应的内容格式如下：

    jsonp_callback_5021({
        "pid":"mm_37227883_3484494_11371704",
        "acookie":"1","width":"300","height":"250",
        "distype":"1","webwidth":"","adboardtype":"98","fvs":"","title":"",
        "clickurl":"",
        "data":"<iframe scrolling=\"no\" height=250 frameborder=\"0\" width=300 
        style=\"border: 0pt none;\" marginheight=\"0\" allowtransparency=\"true\" 
        marginwidth=\"0\" border=\"0\" 
        src=\"http:\/\/strip.taobaocdn.com\/tfscom\/T1vEk0XatbXXbMsGbX.html?
        name=itemdsp&url=www.120ask.com&iswt=1&pid=tt_37227883_3484494_11371704
        &refpos=,n,i&adx_type=0&pvid=ac17d84c7c3c51a9b39900000012325a_0
        &tanxdspv=http%3A%2F%2Frdstat.tanx.com%2Ftrd%3F%26f%3D%26k%3Da09e279ad7f7a12a
        %26p%3Dmm_37227883_3484494_11371704%26pvid%3D0af6086e0820519ec01b0000000560d8\"
        ><\/iframe>",
        "icon":"1","feedback":"","unregist":""
    });

jsonp_callback_5021是在模块的入口点（tanxssp/main.js）脚本中定义的回调函数，负责将“data”字段中的iframe标签文本输出到页面中，向舞女页面发起请求。舞女页面是整个系统的神来之笔，后文会使用一个比较大的篇幅专题分析。

### 业务管理系统 ###

虽然这里只是从前端代码的角度分析整个系统，但是不分析业务管理系统，这个分析就是不完整的。

业务管理系统不外乎两个方向，一个是媒体管理方向，一个是广告管理方向。下面对这两个系统的职责作个简单的分析，不进行深入探讨。

#### 媒体管理系统 ####

估计系统是使用的是c.tanx.com(原域名：c.alimama.com）这个网站进行媒体管理的。

系统的主要职责如下：

- 获取各种样式的广告位代码。嵌入到网站上，作为整个系统的入口。
- 查看在媒体、广告位上投放广告情况的报表。
- 对在媒体上、广告位上投放的广告进行干预

#### 广告管理系统 ####

橱窗推广的广告管理系统应该不是独立的，而是与淘宝网店系统（www.taobao.com）集成在一起的。

系统主要职责如下：

- 淘宝店主通知系统把自己的指定商品进行橱窗推广。
- 设定投放的排期，以及计划的价格和投放量。
- 系统对外提供接口服务，提供需要投放广告的商品的数据。

## 橱窗展示系统 ##

### 脱衣舞橱窗展示系统 ###

漫长的文档看到这里，就像83版《西游记》西梁女国那一集，太师引领着唐僧穿过秩序井然的皇家庭院，突然间闯入女王的寝宫，看到了御床上活色生香、温情脉脉的女王。然而，更让人激动不已的，这里竟然是此行的目的地。

这个系统设计的太高明、太复杂、太有灵性，无法用一个简单的词汇命名，恰好阿里系的架构师们使用了strip.taobaocdn.com域名，姑且就命名为脱衣舞橱窗展示系统吧。

把脱衣舞舞女与女王相提并论，似乎唐突佳人。但是，这里的舞女页面比女王更加顾盼多情、长袖善舞。更了不起的是，你无法记住每一个舞女页面的名字（如T1vEk0XatbXXbMsGbX.html），因为这都是由系统生成出来的，而这个系统必然会有可视化的管理系统去管理。

### 系统概览 ###

#### 逻辑架构 ####

![逻辑架构](http://tech.peigong.tk/assets/images/projects/tanx-ssp/taobao-show.png)

#### 时序略图 ####

![时序略图](http://tech.peigong.tk/assets/images/projects/tanx-ssp/taobao-show-sequence.png)

### 舞女页面 ###

舞女页面是一个纯静态的HTML页面(地址如：http://strip.taobaocdn.com/tfscom/T1vEk0XatbXXbMsGbX.html），存储在CDN加速的静态服务器上（strip.taobaocdn.com），由一个系统拼装生成。

在前端系统执行回调函数，向舞女页面发起请求时，会携带一组参数。

舞女页面上的javascript的程序，负责解析使用这一组参数。

**GET参数列表**

- name：itemdsp
- url：www.120ask.com
- iswt：1
- pid：tt_37227883_3484494_11371704
- refpos：,n,i
- adx_type：0
- pvid：ac17d84c7c3c51a9b39900000012325a_0
- tanxdspv：http://rdstat.tanx.com/trd?&f=&k=a09e279ad7f7a12a&p=mm_37227883_3484494_11371704&pvid=ac1797214e9e51a9b39900000018dcd6

舞女页面一手接住前端系统抛来的参数，另一手魔术般的调用淘宝的商品数据服务，将系统中需要展示的橱窗商品在广告位上一一展示出来。

### 淘宝商品信息的数据服务 ###

淘宝商品信息数据服务URL的域名是tns.simba.taobao.com，接收舞女页面的请求参数，根据一个业务逻辑，把客户端需要展示的淘宝商品数据返回给舞女页面。

#### 淘宝商品数据服务的请求 ####

**GET参数**

- name：itemdsp
- count：10
- o：j
- p4p：在舞女页面上定义的回调函数名，服务器端的响应会调用这个函数，处理商品数据。如tbcc_p4p_c2013_5_108621_13700760834161370076083497。
- url：www.120ask.com
- iswt：1
- pid：tt_37227883_3484494_11371704
- refpos：,n,i
- adx_type：0
- pvid：ac17d84c7c3c51a9b39900000012325a_0
- tanxdspv：http://rdstat.tanx.com/trd?&f=&k=a09e279ad7f7a12a&p=mm_37227883_3484494_11371704&pvid=ac1797214e9e51a9b39900000018dcd6
- refpid：tt_37227883_3484494_11371704

**Cookie参数**

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.taobao.com，路径为/，过期时间为25年后。
- rdc：P3XUVZqJJhYLY4KiJHnfTK6UAKxdyp9LBUsbuR6TnOrUehYWBL3GaKKgLuzZERZb，域为.simba.taobao.com，路径为/，过期时间是一个会话周期。如果有此cookie，则携带此参数。没有这个cookie则不必携带。

当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。

#### 淘宝商品数据服务的响应 ####

    tbcc_p4p_c2013_5_108621_13700760834161370076083497 = [{
        "CUSTOMERID": "",
        "TITLE": "\u82cf\u5b89\u771fSwise\u6b63\u54c1\uff01\u6b27\u6839\u7eb1\u4e0a\u8863 
                    \u767d\u8272\u77ed\u8896t\u6064",
        "DESC": "null",
        "URL": "",
        "RESOURCEID": "23639392129",
        "GOODSPRICE": 24900,
        "REDKEY": "",
        "LOCATION": "\u6d59\u6c5f \u676d\u5dde",
        "TBGOODSLINK": "http:\/\/img03.taobaocdn.com\/bao\/uploaded\/i3\/13892021309981906
                    \/T1ZdV2XAFdXXXXXXXX_!!0-item_pic.jpg_sum.jpg",
        "WANGWANGID": "swise\u65d7\u8230\u5e97",
        "EURL": "http:\/\/redirect.simba.taobao.com\/rd?w=mmp4ptest
                &f=http%3A%2F%2Ftao.etao.com%2Fauction%3Fkeyword%3DT%25D0%25F4%26catid%3D50000671
                %26refpid%3Dmm_37227883_3484494_11371704%26digest%3DB41CA84DF7A1F6A5BA9B11A299A4E52F
                %26crtid%3D207543981%26itemid%3D23639392129%26adgrid%3D194389084
                %26eurl%3Dhttp%253A%252F%252Fclick.simba.taobao.com%252Fcc_im%253Fp%253D%2526s%253D101579514
                %2526k%253D288%2526e%253DqXhvVZ1o4lINKsYj8kZeljogOpoXgh03d2ByUOsMbpVCqy%25252BUFBA5jyzOsW4Yd
                u3h21TcM78lZnZxuhrp93p%25252BzmTJuUEeDdZBMu33MUNq72RaC9QIzaMM3a0HSq4LDODxZYVuqHIwgPNzp
                BcBlCh4A0bg0OxrKYkVV9N9YGVqKZDu4YRXY287eUTmrkbeHdEX4g8ojjF7O6GxFvFGRnXPFlSkghrhkAJhGLy4mUa5y9
                ubk8MdSNDD%25252BmWprP1HRmiZRKsdofWb05R4yNH69PRxiz5jEdah9ftU&k=edce2b64d0a4b4b1",
        "CP": "",
        "DISPLAY_RESOLUTION": "80*80",
        "RANKSCORE": "",
        "ISPREPAY": "1",
        "MATCHTYPE": "",
        "PRICE": "",
        "GRADE": "54545",
        "ISMALL": "1",
        "ADGEXTENSION": "location:\u6d59\u6c5f \u676d\u5dde;expire:2524579200;postage:0.00;isSupportVip:0;
                vipDiscountRate:goldCard~100$platinaCard~100$diamondCard~100;isPostFree:1;ordinaryPostFee:0;
                isCommend:0;spuId:216512255;skuPrice:null;isNew:1",
        "SELLEREXTENSION": "manjiusong:1;creditPay:1;vertical3C:0;verticalGame:0;sevendaysRefundment:1;matchScore:4.8;
                serviceScore:4.8;speedScore:4.8;realDescribe:1;genuineGuarantee:1;cod:0",
        "ISHK": "0",
        "ISGLOBAL": "0",
        "SELL": "1813"
    }, ... ... ]

### 淘宝商品特征的数据服务 ###

淘宝商品特征数据服务的URL是http://show.re.taobao.com/feature.htm，接收舞女页面的请求参数，根据一个业务逻辑，把客户端需要展示的淘宝商品数据返回给舞女页面。

如果广告投放的淘宝商品是一组促销的商品，则请求这个服务，获取实时的促销信息。如果不是促销的商品，则不需要请求这个实时的服务。

#### 淘宝商品数据服务的请求 ####

**GET参数**

- cb：在舞女页面上定义的回调函数名，服务器端的响应会调用这个函数，处理商品数据。如tbcc_items_discounts_1369909156781。
- auction_ids：需要获取实时数据的商品ID列表。如23639392129,17612793758,22441192364,17246494252,15176525473,22153008087,18419365960,18506205369,17190124163,23844364520
- feature_names：需要获取的实时数据的字段，如promoPrice,promoOtherNeed

**Cookie参数**

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.taobao.com，路径为/，过期时间为25年后。

当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。

#### 淘宝商品数据服务的响应 ####

    如tbcc_items_discounts_1369909156781([{
        "promoOtherNeed": "",
        "promoPrice": "",
        "auction_id": "22441192364"
    }, ... ...])

### 舞女养成系统 ###

如果只是上述这些，那么我们可以说架构设计的合理、程序设计的水平高，但是还不至于让我们大肆褒扬，不至于让我们花如此大的篇幅分析学习。

我们看到了舞台上表演，舞女一手接过观众抛上来的参数，一手把参数抛给藏在背后的助手，接过助手抛回的衣服，迅速更衣换上。有时甚至还需要助手抛回活的鸽子、燃烧的火焰。

舞台上的这一切，都让人目炫神迷，赞叹不已。然而，你再一次买票来看的时候，却发现舞台上换人了。一样的动人，不一样的风情。如此许多次，你都不能记住他们每个人的名字。

你不禁要疑惑，幕布后面到底有多少神乎其技的美女？有什么样的一个养成系统在支撑这样层出不穷的表演？

#### 舞女的前台 ####

舞女的前台是CDN加速的静态服务器（strip.taobaocdn.com），所有对舞女页面的访问都是通过这里进行的。

这里存放着诸多的舞女页面，大约5分钟会与舞女的后台进行同步，及时反映出新增和修改。

#### 舞女的后台 ####

舞女的后台是CDN的源服务器，所有对页面的新增和修改，都是首先在这里进行，然后CDN会自动同步到舞女的前台。

#### 舞蹈学院 ####

样式、功能等各各不同的舞女页面都是通过系统自动化生成的，而不是人工制作的。这个自动化的系统可以称为舞蹈学院。

舞蹈学院的出现，意味着阿里系的架构师们很好的解决了下面的一系列问题：

- 拥有了自主设计的javascript模块依赖关系管理框架，如[etaoux/kslite](https://github.com/etaoux/kslite)，[seajs/seajs](https://github.com/seajs/seajs)。
- 使用了具备模块依赖关系管理能力的自动构建工具。
- 设计开发了使用人工设计的材料（代码片断）自动拼装HTML的程序。
- 使用了完善的JSDOC的工具和方法。
- 使用了完善的自动化单元测试的工具和方法。
- 各个代码片断的原始文件完成了良好的组织。
- 对开发团队也进行了良好的训练和组织。

#### 舞蹈学院管理系统 ####

这样一个庞大的自动化构建和拼装系统，没有一个可视化的管理系统是不可思议的。


## 广告点击分析系统 ##

### 逻辑架构 ###

![逻辑架构](http://tech.peigong.tk/assets/images/projects/tanx-ssp/ad-click-stat.png)

### 广告点击分析前端系统 ###

#### 加载前端系统文件 ####

广告点击分析前端系统的URL地址是http://cdn.tanx.com/t/tanxclick.js。

在加载的时候，可以带有参数。列表如下：

**Cookie参数**

- cna：域为.tanx.com，路径为/，过期时间是25年以后。值如mqEwCpEPWVYCAfKFf3xLEFf3。

当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。


#### 前端系统文件的响应 ####

前端系统文件中，虽然只有区区几十行代码，但是承担了点击行为分析在浏览器客户端上的工作。

目测是在body上注册了点击事件。当用户点击的时候，进行一些统计行为。

### 点击重定向统计分析 ###

进行点击重定向统计分析的URL地址是：http://rdstat.tanx.com/trd。

当用户在点击广告进行重定向跳转的时候，发出统计请求。参数如下：

**Cookie参数**

- cna：域为.tanx.com，路径为/，过期时间是25年以后。值如mqEwCpEPWVYCAfKFf3xLEFf3。

当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。

**GET参数**

- f：
- k：a09e279ad7f7a12a
- p：mm_37227883_3484494_11371704
- pvid：ac1797214e9e51a9b39900000018dcd6
- d_r：redirect.simba.taobao.com_6899

### 点击重定向统计计数 ###

提供点击重定向统计计数服务的URL地址是：http://redirect.simba.taobao.com/rd。当用户点击广告的时候，负责进行点击的统计计数，并根据参数跳转至最终的着陆页面（landingpage）。

点击跳转时的参数如下：

**Cookie参数**

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.taobao.com，路径均为/，过期时间是25年以后。
- rdc：P3XUVZqJJhYLY4KiJHnfTK6UAKxdyp9LBUsbuR6TnOrUehYWBL3GaKKgLuzZERZb，域为.simba.taobao.com，路径均为/，过期时间是一个会话周期。如果有此cookie，则携带此参数。没有这个cookie则不必携带。

**GET参数**

- w：mmp4ptest
- f：着陆页面的URL地址，如http://tao.etao.com/auction?keyword=%C5%A3%D7%D0%BF%E3&catid=162205&refpid=tt_37227883_3484494_11371704&digest=E4F72AA836C280635D4B68077272D06E&crtid=204145027&itemid=19743755977&adgrid=191281107&eurl=http%3A%2F%2Fclick.simba.taobao.com%2Fcc_im%3Fp%3D%26s%3D110631805%26k%3D280%26e%3DZWZhqM4zvWg7cV%252Bisqn22t8bSgKjIMeIJv0WlAX%252BtYtQbbruHRRnvg59GO4ZnjechSzD2MI9ae0VcWHyHmjBU7uAJG68Oxh9pxE1ZBFsqdzEfoDg798s3B%252Bogj9kofCvUDUUDqa8gXYHDX7zWtfaOqb5dFReHwaR8UTulyn1o2Q4RXgcXpj38XMwXMmOtz2P0ksqglpB1x5n3laIHMmWXhdz%252BXgtQUth%252B3oHmwlYJqWdUREbe1MRAqlvZDS33RA0xc3vCBcBeda%252Fm6b4moZYyw%253D%253D&refpos=222_102680_25,n,i
- k：edce2b64d0a4b4b1
- pvid：ac17d84c7c3c51a9b39900000012325a_0
- p：广告位编号，如tt_37227883_3484494_11371704

如果还没有cookie的rdc的参数，则写cookie如下：

- rdc：sDMW0YXGMN%2Fx%2BvLWrRkUNK6UAKxdyp9LBUsbuR6TnOrUehYWBL3GaKKgLuzZERZb，/，.simba.taobao.com，一个会话周期

## 阿里系的Cookie灯塔 ##

### 系统概览 ###

#### 逻辑架构 ####

![逻辑架构](http://tech.peigong.tk/assets/images/projects/tanx-ssp/ali-cookie-beacon.png)

#### 时序略图 ####

![时序略图](http://tech.peigong.tk/assets/images/projects/tanx-ssp/ali-cookie-beacon-sequence.png)

### 阿里系的灯塔入口 ###

TANX前端系统的模块入口点（tanxssp/main.js）脚本在完成了广告任务后，还负有为阿里系的产品识别用户的重要职责。

如果发现客户端还没有用户Cookie标识，则创建一个隐身的iframe，去加载阿里系的Cookie灯塔入口（http://cdn.tanx.com/t/acookie/acbeacon2.html）。

灯塔入口的响应是一个纯粹的HTML文件，负责创建一组img标签，请求TANX、淘宝和阿里妈妈的Cookie标识服务。

### TANX系统的Cookie标识服务 ###

TANX系统的Cookie标识服务地址是：http://acookie.tanx.com/1.gif。

#### 请求Cookie服务 ####

在请求时携带一组参数，列表如下：

**GET参数**

- cache：39
- pre：http://www.120ask.com/zxmrk/28/28109815.htm

#### 阿里妈妈统计平台中转 ####

在请求的过程中，302跳转至统一的Cookie服务平台（阿里妈妈统计平台中转，http://hz.mmstat.com/a）。

跳转时携带一组参数，如下：

**GET参数**

- XzOzGe85AA：2054790862
- K9g5CWjDh9：pQenF85FcLPkh5KHRNXHUpLjoRVRrrFwlDdEobZ5amZ40M9ELRJ7N7w2YdmxOxd4fC0poqjSu6GXZd67y2T7LxuEby5LrhnUXL2Jr6vaUp2BT-iFnvURy31Ka-5se17I4RGFKNwWSwXtcXXz9qtG1g__

阿里妈妈统计平台会写下如下的一组cookie标识：

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.mmstat.com，路径为/，过期时间为25年以后。
- ac_session：mqEwCpEPWVYCAfKFf3xLEFf3_1370076058_1，域为.mmstat.com，路径为/，过期时间为一个会话周期。

#### 跳转回最初的请求 ####

在阿里妈妈统计平台在写下cookie标识后，携带一组参数，再302跳转回最初的TANX Cookie服务地址（http://acookie.tanx.com/1.gif）。

参数如下：

**GET参数**

- cache：546
- pre：http://www.120ask.com/zxmrk/28/28109815.htm
- XzOzGe85AA：1951151388
- a3G4ApKGeL：ywhlurt-xX8LiWFSVw3T7ZlX7vEJe5yCfUrOuLDawE0_

TANX Cookie服务会写下如下的cookie标识：

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.tanx.com，路径为/，过期时间为25年以后。

### 淘宝系统的Cookie标识服务 ###

淘宝系统的Cookie标识服务地址是：http://acookie.taobao.com/1.gif。

#### 请求Cookie服务 ####

在请求时携带一组参数，列表如下：

**GET参数**

- cache：546
- pre：http://www.120ask.com/zxmrk/28/28109815.htm

#### 阿里妈妈统计平台中转 ####

在请求的过程中，302跳转至统一的Cookie服务平台（阿里妈妈统计平台中转，http://hz.mmstat.com/a）。

跳转时携带一组参数，如下：

**GET参数**

- XzOzGe85AA：1448955166
- K9g5CWjDh9：fn.BCSv-Gb2yypgynY4HgfcEFPHD4y4BngjHq-AGw8X-5JPeAQ0vHAMGF2jRFPENJi8DokZDamOueFHo5mOI-H9JL5PV7h.PODbi9MStM3vVXPKPT50U77iozVcz0y0pT5RdBZVKtJbm6kngnH25WQ__

**Cookie参数**

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.mmstat.com，路径为/，过期时间为25年以后。
- ac_session：mqEwCpEPWVYCAfKFf3xLEFf3_1370076058_1，域为.mmstat.com，路径为/，过期时间为一个会话周期。

阿里妈妈统计平台会写下如下的cookie标识：

- ac_session：mqEwCpEPWVYCAfKFf3xLEFf3_1370076061_2，域为.mmstat.com，路径为/，过期时间为一个会话周期。

#### 跳转回最初的请求 ####

在阿里妈妈统计平台在写下cookie标识后，携带一组参数，再302跳转回最初的淘宝Cookie服务地址（http://acookie.taobao.com/1.gif）。

参数如下：

**GET参数**

- cache：546
- pre：http://www.120ask.com/zxmrk/28/28109815.htm
- XzOzGe85AA：895282041
- a3G4ApKGeL：Aw5aWvwYEK.tZE-0ecjMOxKY73ASRCO4cPGbgChnZSg_

淘宝Cookie服务会写下如下的cookie标识：

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.taobao.com，路径为/，过期时间为25年以后。
- sc：8e249d1d，域为.acookie.taobao.com，路径为/，过期时间为一个会话周期。
- linezing_session：f4718b0ec8f7a4569b93c684_1370076062_1，域为.acookie.taobao.com，路径为/，过期时间为一个会话周期。

### 阿里妈妈系统的Cookie标识服务 ###

淘宝系统的Cookie标识服务地址是：http://acookie.alimama.com/1.gif。

#### 请求Cookie服务 ####

在请求时携带一组参数，列表如下：

**GET参数**

- cache：546
- pre：http://www.120ask.com/zxmrk/28/28109815.htm

#### 阿里妈妈统计平台中转 ####

在请求的过程中，302跳转至统一的Cookie服务平台（阿里妈妈统计平台中转，http://hz.mmstat.com/a）。

跳转时携带一组参数，如下：

**GET参数**

- XzOzGe85AA：1521901734
- K9g5CWjDh9：brdpYvU0Q0K-m3lpaFBdlf-MRUhoOSYqLOyFOibOKpyXscmeV9lAgjthKGSAgdREEtNT7ubH.Y9Oh-7S5SwzNH0zW1R0fSEsj53LMc8tYLPPVCiinE8L-nIrO0-hlvr589umMUli2WMig2IEPKL44Q__

**Cookie参数**

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.mmstat.com，路径为/，过期时间为25年以后。
- ac_session：mqEwCpEPWVYCAfKFf3xLEFf3_1370076058_1，域为.mmstat.com，路径为/，过期时间为一个会话周期。

阿里妈妈统计平台会写下如下的cookie标识：

- ac_session：mqEwCpEPWVYCAfKFf3xLEFf3_1370076061_2，域为.mmstat.com，路径为/，过期时间为一个会话周期。

#### 跳转回最初的请求 ####

在阿里妈妈统计平台在写下cookie标识后，携带一组参数，再302跳转回最初的阿里妈妈Cookie服务地址（http://acookie.alimama.com/1.gif）。

参数如下：

**GET参数**

- cache：546
- pre：http://www.120ask.com/zxmrk/28/28109815.htm
- XzOzGe85AA：1922922509
- a3G4ApKGeL：yRA2RMr5506V9xuekIeOaPbr8-P069UHRL-HX.fuJ.I_

阿里妈妈Cookie服务会写下如下的cookie标识：

- cna：mqEwCpEPWVYCAfKFf3xLEFf3，域为.alimama.com，路径为/，过期时间为25年以后。

## 静态文件资源服务 ##

### 逻辑架构 ###

![逻辑架构](http://tech.peigong.tk/assets/images/projects/tanx-ssp/static-server.png)

### 设计意图分析 ###

img.alimama.cn存储系统中核心的静态的文件，比如通用图标、默认广告图片等。其他的产品图片，以及舞女页面的样式需要的图片资源等，分布在4台以上的服务器上。这些服务器都是使用了CDN加速的。

10个淘宝商品的图片等资源分布在4个域名的服务器下，使浏览器可以并行的同时加载图片，而不必加载完一张图片，再加载下一张。

以一张淘宝商品的图片地址（http://img01.taobaocdn.com/bao/uploaded/i1/1014142759/T2Njj8XbJXXXXXXXXX_!!1014142759.jpg_250x250.jpg）为例分析，大约知道以下设计意图：

- 除了商品上传的图片外，其他有关商品的静态文件资源，也是分布存储在几个域名的服务器下的。
- 有与img01.taobaocdn.com对应的i1目录，说明这些资源即可以分布在4台服务器上，也可以合并存储在同一台服务器上，有良好的伸缩性。


## 学习后记 ##

### 外围系统 ###

- log.mmstat.com和dt.tongji.linezing.com是在一淘的着陆页上观察到的，在整体的阿里系系统中肯定也是很重要的统计系统。虽然跟本次分析有丝丝楼缕的关系，因为不是本次分析的主题，所以不做深入分析。
- t.alimama.com和z.alimama.com这两个域名，只在系统代码中看到，并没有观察到发出请求，所以不好分析给出评论。但是，网上纷传这是收集用户信息的。网上姑枉传之，我们姑枉听之吧，不做进一步的深入分析了。

### 代码评点 ###

- 阿里系广告前端系统的设计水平，以及整体系统的架构水平，已经与google等国际水平毫不逊色。
- 有3个或3个以上的javascript架构师，以及他们领导的开发团队，参与了系统的开发。如[seajs/seajs](https://github.com/seajs/seajs)、[etaoux/kslite](https://github.com/etaoux/kslite)、[kissyteam/kissy](https://github.com/kissyteam/kissy)。
- 可能是由于并购等历史原因，团队协作并不理想，或者说没有达到天衣无缝的默契。
- 希望阿里系的架构师们能够打破隔阂、通力协作，像Booch、Rumbaugh和Jacobson对UML的贡献一样，为阿里系、也为中国，贡献一个统一的javascript架构。

### 参考引用 ###

- [TANX SSP 橱窗推广](http://c.tanx.com/)
- [www.rtbchina.com](http://www.rtbchina.com)
- [SOSO百科的TANX SSP词条](http://baike.soso.com/v59874706.htm)
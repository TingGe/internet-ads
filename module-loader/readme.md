module-loader
=============

——模块加载和依赖管理

宗旨
--

通过研究国内外异步加载的JavaScript类库(或框架)，期望在广告投放脚本中实现适合第三方内容的轻巧的Loader。

广告投放脚本满足以下特性:

-   按需加载

-   无阻塞加载

-   动态依赖关系管理

-   颗粒化模块管理

意义
--

广告前端系统由三部分组成：页面广告埋点代码(又称广告位代码)、广告投放脚本和广告创意脚本。

-   页面广告埋点代码，标识广告位、设置浏览器端广告信息、加载广告投放脚本。

-   广告投放脚本，收集浏览器端与广告有关的信息，发送广告调度请求、按需加载广告创意脚本，提供一些通用的工具函数。

-   广告创意脚本，加载广告物料、广告展示和发送计数请求。

在上述过程中，按需和无阻塞可运用于加载广告投放脚本、按需加载广告创意脚本、加载广告物料中；动态依赖与模块管理可用于广告投放脚本和广告创意脚本具体实现中。

原则
--

第三方广告代码要求

1.  必须稳定

2.  足够小

3.  结构化

4.  无限可扩展

(取自淘宝李穆《[tbad-f2e-2010-review][7]》)

[7]: <http://www.slideshare.net/leneli/tbad-f2e-2010-review>

业界调研
----

前端的模块化构建可分为两大类。

一类是以 Dojo、YUI3、国内的 KISSY 等类库为代表的大教堂模式。在大教堂模式下，所有组件都是颗粒化、模块化的，各组件之间层层分级、环环相扣。

另一类是以 jQuery、RequireJS、国内的 Sea.js、OzJS
等类库为基础的集市模式。在集市模式下，所有组件彼此独立、职责单一，各组件通过组合松耦合在一起，协同完成开发。

这两类模块化构建方式各有应用场景。从长远来看，小而美更具备宽容性和竞争力，更能形成有活力的生态圈。

(取自淘宝王保平《[前端模块化开发的价值][5]》)

[5]: <https://github.com/seajs/seajs/issues/547>

1.  Google的ga.js
 
2.  YUI3内嵌的Loader

3.  [kissyLite][6]，是kissy的一个支持有限方法的子集。目标是用1.5k代码支持可扩展的包管理和模块化管理。

[6]: <https://github.com/etaoux/kslite>

4.  [SeaJs][3]，遵循 [CMD][1] 规范，可以像 [Node.js][2] 一般书写模块代码。

[1]: <https://github.com/cmdjs/specification/blob/master/draft/module.md>

[2]: <http://nodejs.org/>

[3]: <http://seajs.org/>

5.  RequireJS

6. 司徒正美：[我得模块加载系统 v5](http://www.cnblogs.com/rubylouvre/archive/2011/04/12/2011175.html) 

7.  LabJS

8.  [Do.js][4]

[4]: <https://github.com/kejun/Do>

9.  In.js

业界牛人
----

业界牛人主要是工作零碎时间整理而成。

1.  [limu的砖篮儿][8]- 李穆（李牧）. 一淘前端高级技术专家

[8]: <limu.iteye.com>

1.  [岁月如歌][9] - 王保平（玉伯）. 淘宝开源框架[KISSY][10]、[SeaJs][11]主要作者

[9]: <http://lifesinger.wordpress.com/>

[10]: <http://github.com/kissyteam/kissy>

[11]: <https://github.com/seajs>


1.  [Ruby's Louvre](http://www.cnblogs.com/rubylouvre/archive/2011/04/12/2011175.html)-司徒正美

1.  [小电灯][12]- 明城. 前淘宝网前端工程师

[12]: <http://www.gracecode.com/>

1.  [{focus: web}][13] - 承玉. 淘宝网前端架构组成员

[13]: <http://yiminghe.javaeye.com/>

1.  [@Jayli][14]- 李晶（拔赤）. 淘宝网北京团队前端工程师

[14]: <http://jayli.github.io/blog/>

1.  [十年踪迹][15] - 月影

[15]: <http://www.silverna.org/blog/>

1.  [Hi,I'm Adam Lu.][16] - 鲁超伍. 百度北京团队前端工程师

[16]: <http://adamlu.com/>

更多牛人可参见[我的新浪博客][17]

[17]: <http://blog.sina.com.cn/tinggebar>

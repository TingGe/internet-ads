模块加载器SeaJS
==========

研究体会
----

1.  Sea.js，核心代码在module.js中，其定义了define、request、exports、module和use等。

2.  在广告投放脚本中实现类似SeaJS的Loader，需评估其意义和面临的问题。

3.  广告前端系统快速变得相当复杂，亟需某种结构和依赖关系管理，减少冗余，用一种简单的方式优化最终结果

    广告前端系统的“复杂”：

    -   各种定制化需求，增量式的成长，使发布版本由61K 快速“荣升”为 1M(含图片、swf等资源)。

    -   各广告创意脚本中出现大量冗余代码

    -   3套源码 x 3种代码状态 x (7+6)种输出，带来大量开发、测试工作任务

        （虽然通过各版本独立构建实现了快速响应，但是频繁的并行开发，造成正常版本上线周期一再延迟）

    -   现有的“兼容并包式”的Ant自动构建，不足以实现互联网广告前端系统的广告创意脚本级构建

4.  在广告投放脚本中实现类似SeaJS的Loader，预期会面临的问题：

    -   对现有广告投放脚本的影响，包括文件大小(预期发布版会在7~21k之间)、加载及运行性能

    -   广告投放脚本文件大小不断增加(发布版24k)，需将一些通用的工具函数抽离   

    -   挑战了广告投放脚本与调度系统、实现脚本之间的接口，需采用类似代码

            //加载一个模块
            seajs.use('./a');

            //加载一个模块，在加载完成时，执行回调
            seajs.use('./a', function(a) {
            	a.doSomething();
            });

            //加载多个模块，在加载完成时，执行回调
            seajs.use(['./a', './b'], function(a, b) {
            	a.doSomething();
            	b.doSomething();
            });

    -   现有广告创意脚本重构，需采用类似代码

            //所有模块都通过 define 来定义
            define(function(require, exports, module) {             
            	//通过 require 引入依赖
            	var $ = require('jquery');
            	var Spinning = require('./spinning');

            	//通过 exports 对外提供接口
            	exports.doSomething = ...

            	//或者通过 module.exports 提供整个接口
            	module.exports = ...
            });

    -   广告投放脚本中，考虑如在调度响应前预加载部分广告创意脚本的方式是否可行及对性能的影响

5. [高质量的提问](https://github.com/seajs/seajs/blob/master/CONTRIBUTING.md)，不光有助于问题的快速解决。

源码解读
----
-   [岁月如歌][1]
[1]:<https://github.com/lifesinger/lifesinger.github.com/issues>

-   [Sea.js 源码解析][2]
[2]:<https://github.com/lifesinger/lifesinger.github.com/issues/170>

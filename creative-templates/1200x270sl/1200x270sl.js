define(["cc/mustache", "cc/templets/meta", "cc/dataservice"], function(require, exports) {
    var mustache = require("cc/mustache");
    var meta = require("cc/templets/meta");
    var dataservice = require("cc/dataservice");

    var css = ".global{font-size:12px;font-family:Arial;overflow:hidden;width:966px;border:2px solid #CBCBCB}" +
        ".global,.global a,.global img,.global ul,.global li,.global h2{padding:0;margin:0;text-decoration:none;list-style:none}" +
        ".global em{font-style:normal;padding-left:33px;color:#fff}" +
        ".global img{border:none}" +
        ".global{padding:5px 10px 10px 10px}" +
        ".global .content{}" +
        ".global .hd{height:36px;line-height:36px;border-bottom:2px solid #0d6c8e}" +
        ".global .hd h2{font-family:'微软雅黑';font-size:22px;color:#055f81;padding-left:9px}" +
        ".global .hd .keywords{float:right}" +
        ".global .hd .keywords a{font-family:'宋体';font-size:12px;color:#666;padding:0 10px}" +
        ".global .frames{padding-left:5px;margin-right:-14px;margin-bottom:4px}" +
        ".frames .item{float:left;_display:inline;width:180px;height:180px;margin-top:14px;margin-right:14px;position:relative;}" +
        ".frames .item a{display:line-block;text-decoration:none;color:#f1f0f0}" +
        ".frames .item .detail{width:180px;position:absolute;left:0;bottom:0}" +
        ".frames .item .detail .mask{position:absolute;left:0;bottom:0;display:inline-block;height:25px;line-height:25px;background:#000;filter:alpha(opacity=60);opacity:0.6;width:100%;color:#fff}" +
        ".frames .item .intro{position:absolute;left:0;bottom:0;height:25px;line-height:25px;width:100%;overflow:hidden}" +
        ".frames .item span{display:inline-block;color:#fff}" +
        ".item .detail .title{float:left;padding-left:33px;width:75px;overflow:hidden;*padding-top:1px!important}" +
        ".item .detail .price{float:right;width:40px;text-align:center;padding:0 8px;background:#004565}" +
        ".picbox{display:table-cell;*display:block;width:180px;height:180px;font:normal 12px/1.5 arial;vertical-align:middle;text-align:center;*font-size:87.3px;overflow:hidden;}" +
        ".picbox img{vertical-align:middle;border:none;}" +
        ".logo{float:left}" +
        ".keywords{float:right}" +
        ".frame:after,.hd:after,.intro:after{content:\"\020\";display:block;height:0;clear:both;}" +
        ".frame,.hd,.intro{zoom:1;}";

    var template = "" +
        '{{#data}}' +
        '<div id="{{uid}}-ds1" class="{{uid}}-global" style="display: block;">' +
          '{{#ds1}}' +
          '<div class="{{uid}}-hd">' +
            '{{#style}}' +
            '<h2 class="{{uid}}-logo">' +
              '精品促销' +
            '</h2>' +
            '{{/style}}' +
            '<div class="{{uid}}-keywords" id="{{uid}}-ds1-keywords">' +
              '{{#keywords}}' +
              '<a href="{{ds_clickurl}}" target="_blank" title="{{ds_title}}">' +
                '{{ds_title}}' +
              '</a>' +
              '{{/keywords}}' +
            '</div>' +
          '</div>' +
          '<ul class="{{uid}}-frames">' +
            '{{#items}}' +
            '<li class="{{uid}}-item">' +
              '<a class="{{uid}}-picbox" href="{{ds_clickurl}}" target="_blank" title="{{ds_title}}">' +
                '{{#ds_img}}' +
                '<img src="{{src}}">' +
                '{{/ds_img}}' +
              '</a>' +
              '<div class="{{uid}}-detail">' +
                '<span class="{{uid}}-mask">' +
                '</span>' +
                '<div class="{{uid}}-intro">' +
                  '<span class="{{uid}}-title">' +
                    '{{ds_title}}' +
                  '</span>' +
                  '<span class="{{uid}}-price">' +
                    '{{ds_price}}' +
                  '</span>' +
                '</div>' +
              '</div>' +
            '</li>' +
            '{{/items}}' +
          '</ul>' +
          '{{/ds1}}' +
        '</div>' +
        '{{/data}}';

    exports.render = function($c, fn) {
        dataservice.getData($c, "ds1", function() {
            
            
            $c.sHTML = mustache.to_html(template, $c);
            $c.renderer.render($c);
            $c.css = css;
            meta.attachStyle($c);
            fn();
        });
    };

});
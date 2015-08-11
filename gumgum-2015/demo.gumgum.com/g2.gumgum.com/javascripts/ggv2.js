/* 原脚本： http://g2.gumgum.com/javascripts/ggv2.js */

if (!window.GUMGUM) {
  (function(global, doc, a) {
    /**
     * @param {Object} o
     * @return {?}
     */
    function compile(o) {
      /**
       * @param {Object} type
       * @param {number} opt_attributes
       * @param {number} expectedNumberOfNonCommentArgs
       * @return {undefined}
       */
      function createDom(type, opt_attributes, expectedNumberOfNonCommentArgs) {
        for (;0 < expectedNumberOfNonCommentArgs--;) {
          type[i](opt_attributes);
        }
      }
      /**
       * @param {number} num
       * @param {number} cnt
       * @return {?}
       */
      function success(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      /**
       * @param {number} reviver
       * @param {number} parent
       * @param {number} dataAndEvents
       * @return {?}
       */
      function parse(reviver, parent, dataAndEvents) {
        return reviver ^ parent ^ dataAndEvents;
      }
      /**
       * @param {number} obj
       * @param {number} key
       * @return {?}
       */
      function callback(obj, key) {
        /** @type {number} */
        var aa = (key & 65535) + (obj & 65535);
        /** @type {number} */
        var Z = (key >>> 16) + (obj >>> 16) + (aa >>> 16);
        return(Z & 65535) << 16 | aa & 65535;
      }
      /** @type {string} */
      var hex_tab = "0123456789abcdef";
      return function(c) {
        /** @type {Array} */
        var tmp_arr = [];
        /** @type {number} */
        var b = c[_length] * 4;
        var srcByte;
        /** @type {number} */
        var a = 0;
        for (;a < b;a++) {
          /** @type {number} */
          srcByte = c[a >> 2] >> (3 - a % 4) * 8;
          tmp_arr[i](hex_tab.charAt(srcByte >> 4 & 15) + hex_tab.charAt(srcByte & 15));
        }
        return tmp_arr.join("");
      }(function(c, a) {
        var name;
        var key;
        var parent;
        var node;
        var context;
        var r = c[_length];
        /** @type {number} */
        var v = 1732584193;
        /** @type {number} */
        var basis = 4023233417;
        /** @type {number} */
        var value = 2562383102;
        /** @type {number} */
        var nodes = 271733878;
        /** @type {number} */
        var iterator = 3285377520;
        /** @type {Array} */
        var ul = [];
        createDom(ul, 1518500249, 20);
        createDom(ul, 1859775393, 20);
        createDom(ul, 2400959708, 20);
        createDom(ul, 3395469782, 20);
        c[a >> 5] |= 128 << 24 - a % 32;
        /** @type {number} */
        c[(a + 65 >> 9 << 4) + 15] = a;
        /** @type {number} */
        var n = 0;
        for (;n < r;n += 16) {
          name = v;
          key = basis;
          parent = value;
          node = nodes;
          context = iterator;
          /** @type {number} */
          var i = 0;
          /** @type {Array} */
          var tokens = [];
          for (;i < 80;i++) {
            tokens[i] = i < 16 ? c[i + n] : success(tokens[i - 3] ^ tokens[i - 8] ^ tokens[i - 14] ^ tokens[i - 16], 1);
            var all = function(y, endpoint, dataAndEvents, deepDataAndEvents, x) {
              /** @type {number} */
              var at = (x & 65535) + (y & 65535) + (endpoint & 65535) + (dataAndEvents & 65535) + (deepDataAndEvents & 65535);
              /** @type {number} */
              var ar = (x >>> 16) + (y >>> 16) + (endpoint >>> 16) + (dataAndEvents >>> 16) + (deepDataAndEvents >>> 16) + (at >>> 16);
              return(ar & 65535) << 16 | at & 65535;
            }(i < 20 ? function(x, y, z) {
              return x & y ^ ~x & z;
            }(key, parent, node) : i < 40 ? parse(key, parent, node) : i < 60 ? function(x, y, z) {
              return x & y ^ x & z ^ y & z;
            }(key, parent, node) : parse(key, parent, node), context, ul[i], tokens[i], success(name, 5));
            context = node;
            node = parent;
            parent = success(key, 30);
            key = name;
            name = all;
          }
          v = callback(v, name);
          basis = callback(basis, key);
          value = callback(value, parent);
          nodes = callback(nodes, node);
          iterator = callback(iterator, context);
        }
        return[v, basis, value, nodes, iterator];
      }(function(a) {
        /** @type {Array} */
        var binarray = [];
        /** @type {number} */
        var U = 255;
        /** @type {number} */
        var padLength = a[_length] * 8;
        /** @type {number} */
        var i = 0;
        for (;i < padLength;i += 8) {
          binarray[i >> 5] |= (a.charCodeAt(i / 8) & U) << 24 - i % 32;
        }
        return binarray;
      }(o).slice(), o[_length] * 8));
    }
    /** @type {null} */
    var name = null;
    /** @type {boolean} */
    var value = false;
    /** @type {boolean} */
    var _true = true;
    /** @type {string} */
    var _length = "length";
    /** @type {string} */
    var i = "push";
    /** @type {string} */
    var k = "style";
    /** @type {string} */
    var attr = "width";
    /** @type {string} */
    var partName = "height";
    /** @type {string} */
    var property = "display";
    /** @type {string} */
    var prop = "className";
    /** @type {string} */
    var id = "innerHTML";
    /** @type {string} */
    var parentNode = "parentNode";
    /** @type {string} */
    var key = "top";
    /** @type {string} */
    var index = "left";
    /** @type {string} */
    var subkey = "zIndex";
    /** @type {string} */
    var none = "none";
    /** @type {string} */
    var visibility = "visibility";
    /** @type {string} */
    var HIDDEN = "hidden";
    /** @type {string} */
    var implementation = "offsetWidth";
    /** @type {string} */
    var val = "offsetHeight";
    /** @type {string} */
    var opacity = "opacity";
    /** @type {string} */
    var getTimezoneOffset = "getTimezoneOffset";
    /** @type {string} */
    var method = "getAttribute";
    /** @type {string} */
    var _src = "src";
    /** @type {string} */
    var rp = "replace";
    /** @type {string} */
    var _toLowerCase = "toLowerCase";
    /**
     * @param {Object} object
     * @param {number} keepData
     * @return {?}
     */
    var hasOwnProperty = function(object, keepData) {
      return Object.prototype.hasOwnProperty.call(object, keepData);
    };
    /**
     * @param {string} val
     * @return {?}
     */
    var done = function(val) {
      return global.encodeURIComponent(val);
    };
    /**
     * @return {?}
     */
    var info = function() {
      return+new Date;
    };
    /** @type {Location} */
    var l = global.location;
    /** @type {(Navigator|null)} */
    var nav = global.navigator;
    /** @type {(Screen|null)} */
    var _screen = global.screen;
    /** @type {function (this:Window, (Function|null|string), number, ...[*]): number} */
    var _setTimeout = global.setTimeout;
    /** @type {function (this:Window, (null|number|undefined)): ?} */
    var parseFloat = global.clearInterval;
    var ss;
    var bulk;
    var start;
    var view;
    var description;
    (function(name, global, definition) {
      global[name] = definition();
    })("bean", global, function(name, params) {
      name = name || "bean";
      params = params || this;
      /** @type {Window} */
      var win = window;
      var fn = params[name];
      /** @type {RegExp} */
      var r = /[^\.]*(?=\..*)\.|.*/;
      /** @type {RegExp} */
      var nameRegex = /\..*/;
      /** @type {string} */
      var addEvent = "addEventListener";
      /** @type {string} */
      var removeEvent = "removeEventListener";
      /** @type {HTMLDocument} */
      var doc = document || {};
      /** @type {Element} */
      var root = doc.documentElement || {};
      var W3C_MODEL = root[addEvent];
      /** @type {string} */
      var eventSupport = W3C_MODEL ? addEvent : "attachEvent";
      var ONE = {};
      /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
      var __slice = Array.prototype.slice;
      /**
       * @param {string} str
       * @param {string} del
       * @return {?}
       */
      var f = function(str, del) {
        return str.split(del || " ");
      };
      /**
       * @param {Function} o
       * @return {?}
       */
      var isString = function(o) {
        return typeof o == "string";
      };
      /**
       * @param {Object} o
       * @return {?}
       */
      var isFunction = function(o) {
        return typeof o == "function";
      };
      /** @type {string} */
      var standardNativeEvents = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ";
      /** @type {string} */
      var w3cNativeEvents = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online     afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ";
      var special = function(hash, o, i) {
        /** @type {number} */
        i = 0;
        for (;i < o[_length];i++) {
          if (o[i]) {
            /** @type {number} */
            hash[o[i]] = 1;
          }
        }
        return hash;
      }({}, f(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : "")));
      var customEvents = function() {
        /** @type {function (?, Node): ?} */
        var isAncestor = "compareDocumentPosition" in root ? function(b, a) {
          return a.compareDocumentPosition && (a.compareDocumentPosition(b) & 16) === 16;
        } : "contains" in root ? function(element, container) {
          return container = container.nodeType === 9 || container === window ? root : container, container !== element && container.contains(element);
        } : function(element, container) {
          for (;element = element[parentNode];) {
            if (element === container) {
              return 1;
            }
          }
          return 0;
        };
        /**
         * @param {Object} event
         * @return {?}
         */
        var check = function(event) {
          var related = event.relatedTarget;
          return related ? related !== this && (related.prefix !== "xul" && (!/document/.test(this.toString()) && !isAncestor(related, this))) : related == null;
        };
        return{
          mouseenter : {
            base : "mouseover",
            /** @type {function (Object): ?} */
            condition : check
          },
          mouseleave : {
            base : "mouseout",
            /** @type {function (Object): ?} */
            condition : check
          },
          mousewheel : {
            base : /Firefox/.test(nav.userAgent) ? "DOMMouseScroll" : "mousewheel"
          }
        };
      }();
      var Event = function() {
        var result = f("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName");
        var r = result.concat(f("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement"));
        var event = r.concat(f("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis"));
        var aL = result.concat(f("char charCode key keyCode keyIdentifier keyLocation location"));
        var obj = result.concat(f("data"));
        var stateProps = result.concat(f("touches targetTouches changedTouches scale rotation"));
        var messageProps = result.concat(f("data origin source"));
        var touchProps = result.concat(f("state"));
        /** @type {RegExp} */
        var manipulation_rcheckableType = /over|out/;
        /** @type {Array} */
        var typeFixers = [{
          reg : /key/i,
          /**
           * @param {Object} event
           * @param {?} newEvent
           * @return {?}
           */
          fix : function(event, newEvent) {
            return newEvent.keyCode = event.keyCode || event.which, aL;
          }
        }, {
          reg : /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
          /**
           * @param {Object} event
           * @param {Event} newEvent
           * @param {string} type
           * @return {?}
           */
          fix : function(event, newEvent, type) {
            /** @type {boolean} */
            newEvent.rightClick = event.which === 3 || event.button === 2;
            newEvent.pos = {
              x : 0,
              y : 0
            };
            if (event.pageX || event.pageY) {
              newEvent.clientX = event.pageX;
              newEvent.clientY = event.pageY;
            } else {
              if (event.clientX || event.clientY) {
                newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft;
                newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop;
              }
            }
            return manipulation_rcheckableType.test(type) && (newEvent.relatedTarget = event.relatedTarget || event[(type == "mouseover" ? "from" : "to") + "Element"]), r;
          }
        }, {
          reg : /mouse.*(wheel|scroll)/i,
          /**
           * @return {?}
           */
          fix : function() {
            return event;
          }
        }, {
          reg : /^text/i,
          /**
           * @return {?}
           */
          fix : function() {
            return obj;
          }
        }, {
          reg : /^touch|^gesture/i,
          /**
           * @return {?}
           */
          fix : function() {
            return stateProps;
          }
        }, {
          reg : /^message$/i,
          /**
           * @return {?}
           */
          fix : function() {
            return messageProps;
          }
        }, {
          reg : /^popstate$/i,
          /**
           * @return {?}
           */
          fix : function() {
            return touchProps;
          }
        }, {
          reg : /.*/,
          /**
           * @return {?}
           */
          fix : function() {
            return result;
          }
        }];
        var typeFixerMap = {};
        /**
         * @param {Object} event
         * @param {Object} e
         * @param {?} isNative
         * @return {undefined}
         */
        var Event = function(event, e, isNative) {
          if (!arguments[_length]) {
            return;
          }
          event = event || ((e.ownerDocument || (e.document || e)).parentWindow || win).event;
          /** @type {Object} */
          this.originalEvent = event;
          this.isNative = isNative;
          /** @type {boolean} */
          this.isBean = true;
          if (!event) {
            return;
          }
          var type = event.type;
          var el = event.target || event.srcElement;
          var i;
          var c;
          var p;
          var props;
          var fixer;
          this.target = el && el.nodeType === 3 ? el[parentNode] : el;
          if (isNative) {
            fixer = typeFixerMap[type];
            if (!fixer) {
              /** @type {number} */
              i = 0;
              c = typeFixers[_length];
              for (;i < c;i++) {
                if (typeFixers[i].reg.test(type)) {
                  typeFixerMap[type] = fixer = typeFixers[i].fix;
                  break;
                }
              }
            }
            props = fixer(event, this, type);
            i = props[_length];
            for (;i--;) {
              if (!((p = props[i]) in this)) {
                if (p in event) {
                  this[p] = event[p];
                }
              }
            }
          }
        };
        return Event.prototype.preventDefault = function() {
          if (this.originalEvent.preventDefault) {
            this.originalEvent.preventDefault();
          } else {
            /** @type {boolean} */
            this.originalEvent.returnValue = false;
          }
        }, Event.prototype.stopPropagation = function() {
          if (this.originalEvent.stopPropagation) {
            this.originalEvent.stopPropagation();
          } else {
            /** @type {boolean} */
            this.originalEvent.cancelBubble = true;
          }
        }, Event.prototype.stop = function() {
          this.preventDefault();
          this.stopPropagation();
          /** @type {boolean} */
          this.stopped = true;
        }, Event.prototype.stopImmediatePropagation = function() {
          if (this.originalEvent.stopImmediatePropagation) {
            this.originalEvent.stopImmediatePropagation();
          }
          /**
           * @return {?}
           */
          this.isImmediatePropagationStopped = function() {
            return true;
          };
        }, Event.prototype.isImmediatePropagationStopped = function() {
          return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped();
        }, Event.prototype.clone = function(dataAndEvents) {
          var ne = new Event(this, this.element, this.isNative);
          return ne.currentTarget = dataAndEvents, ne;
        }, Event;
      }();
      /**
       * @param {Element} element
       * @param {?} isNative
       * @return {?}
       */
      var targetElement = function(element, isNative) {
        return!W3C_MODEL && (!isNative && (element === doc || element === win)) ? root : element;
      };
      var RegEntry = function() {
        /**
         * @param {?} element
         * @param {Function} fn
         * @param {Function} condition
         * @param {boolean} f
         * @return {?}
         */
        var wrappedHandler = function(element, fn, condition, f) {
          /**
           * @param {boolean} event
           * @param {Object} args
           * @return {?}
           */
          var dispatch = function(event, args) {
            return fn.apply(element, f ? __slice.call(args, event ? 0 : 1).concat(f) : args);
          };
          /**
           * @param {Object} event
           * @param {?} eventElement
           * @return {?}
           */
          var findTarget = function(event, eventElement) {
            return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement;
          };
          /** @type {function (Object): ?} */
          var handler = condition ? function(event) {
            var target = findTarget(event, this);
            if (condition.apply(target, arguments)) {
              return event && (event.currentTarget = target), dispatch(event, arguments);
            }
          } : function(event) {
            return fn.__beanDel && (event = event.clone(findTarget(event))), dispatch(event, arguments);
          };
          return handler.__beanDel = fn.__beanDel, handler;
        };
        /**
         * @param {Element} element
         * @param {Object} type
         * @param {Function} handler
         * @param {string} original
         * @param {?} namespaces
         * @param {boolean} args
         * @param {string} root
         * @return {undefined}
         */
        var RegEntry = function(element, type, handler, original, namespaces, args, root) {
          var customType = customEvents[type];
          var isNative;
          if (type == "unload") {
            handler = once(removeListener, element, type, handler, original);
          }
          if (customType) {
            if (customType.condition) {
              handler = wrappedHandler(element, handler, customType.condition, args);
            }
            type = customType.base || type;
          }
          this.isNative = isNative = special[type] && !!element[eventSupport];
          this.customType = !W3C_MODEL && (!isNative && type);
          /** @type {Element} */
          this.element = element;
          /** @type {Object} */
          this.type = type;
          /** @type {string} */
          this.original = original;
          this.namespaces = namespaces;
          this.eventType = W3C_MODEL || isNative ? type : "propertychange";
          this.target = targetElement(element, isNative);
          /** @type {boolean} */
          this[eventSupport] = !!this.target[eventSupport];
          /** @type {string} */
          this.root = root;
          this.handler = wrappedHandler(element, handler, null, args);
        };
        return RegEntry.prototype.inNamespaces = function(c) {
          var i;
          var j;
          /** @type {number} */
          var behavior = 0;
          if (!c) {
            return true;
          }
          if (!this.namespaces) {
            return false;
          }
          i = c[_length];
          for (;i--;) {
            j = this.namespaces[_length];
            for (;j--;) {
              if (c[i] == this.namespaces[j]) {
                behavior++;
              }
            }
          }
          return c[_length] === behavior;
        }, RegEntry.prototype.matches = function(checkElement, checkOriginal, checkHandler) {
          return this.element === checkElement && ((!checkOriginal || this.original === checkOriginal) && (!checkHandler || this.handler === checkHandler));
        }, RegEntry;
      }();
      var registry = function() {
        var map = {};
        /**
         * @param {string} element
         * @param {string} type
         * @param {Function} original
         * @param {?} handler
         * @param {boolean} root
         * @param {Function} fn
         * @return {undefined}
         */
        var forAll = function(element, type, original, handler, root, fn) {
          /** @type {string} */
          var pfx = root ? "r" : "$";
          if (!type || type == "*") {
            var t;
            for (t in map) {
              if (t.charAt(0) == pfx) {
                forAll(element, t.substr(1), original, handler, root, fn);
              }
            }
          } else {
            /** @type {number} */
            var i = 0;
            var num;
            var list = map[pfx + type];
            /** @type {boolean} */
            var all = element == "*";
            if (!list) {
              return;
            }
            num = list[_length];
            for (;i < num;i++) {
              if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) {
                return;
              }
            }
          }
        };
        /**
         * @param {Object} property
         * @param {number} keepData
         * @param {Function} original
         * @param {boolean} root
         * @return {?}
         */
        var has = function(property, keepData, original, root) {
          var i;
          var c = map[(root ? "r" : "$") + keepData];
          if (c) {
            i = c[_length];
            for (;i--;) {
              if (!c[i].root && c[i].matches(property, original, null)) {
                return true;
              }
            }
          }
          return false;
        };
        /**
         * @param {string} element
         * @param {string} type
         * @param {Function} original
         * @param {boolean} recurring
         * @return {?}
         */
        var get = function(element, type, original, recurring) {
          /** @type {Array} */
          var listeners = [];
          return forAll(element, type, original, null, recurring, function(e) {
            return listeners[i](e);
          }), listeners;
        };
        /**
         * @param {Object} entry
         * @return {?}
         */
        var put = function(entry) {
          /** @type {boolean} */
          var aQ = !entry.root && !this.has(entry.element, entry.type, null, false);
          /** @type {string} */
          var objUid = (entry.root ? "r" : "$") + entry.type;
          return(map[objUid] || (map[objUid] = []))[i](entry), aQ;
        };
        /**
         * @param {Object} entry
         * @return {undefined}
         */
        var del = function(entry) {
          forAll(entry.element, entry.type, null, entry.handler, entry.root, function(entry, c, end) {
            return c.splice(end, 1), entry.removed = true, c[_length] === 0 && delete map[(entry.root ? "r" : "$") + entry.type], false;
          });
        };
        /**
         * @return {?}
         */
        var entries = function() {
          var key;
          /** @type {Array} */
          var values = [];
          for (key in map) {
            if (key.charAt(0) == "$") {
              /** @type {Array} */
              values = values.concat(map[key]);
            }
          }
          return values;
        };
        return{
          /** @type {function (Object, number, Function, boolean): ?} */
          has : has,
          /** @type {function (string, string, Function, boolean): ?} */
          get : get,
          /** @type {function (Object): ?} */
          put : put,
          /** @type {function (Object): undefined} */
          del : del,
          /** @type {function (): ?} */
          entries : entries
        };
      }();
      var selectorEngine;
      /**
       * @param {Function} e
       * @return {undefined}
       */
      var setSelectorEngine = function(e) {
        if (arguments[_length]) {
          /** @type {Function} */
          selectorEngine = e;
        } else {
          /** @type {Function} */
          selectorEngine = doc.querySelectorAll ? function(selector, element) {
            return element.querySelectorAll(selector);
          } : function() {
            throw new Error("Bean: No selector engine installed");
          };
        }
      };
      /**
       * @param {Object} event
       * @param {string} type
       * @return {undefined}
       */
      var rootListener = function(event, type) {
        if (!W3C_MODEL && (type && (event && event.propertyName != "_on" + type))) {
          return;
        }
        var events = registry.get(this, type || event.type, null, false);
        var entries = events[_length];
        /** @type {number} */
        var i = 0;
        event = new Event(event, this, true);
        if (type) {
          /** @type {string} */
          event.type = type;
        }
        for (;i < entries && !event.isImmediatePropagationStopped();i++) {
          if (!events[i].removed) {
            events[i].handler.call(this, event);
          }
        }
      };
      /** @type {Function} */
      var listener = W3C_MODEL ? function(element, type, add) {
        element[add ? addEvent : removeEvent](type, rootListener, false);
      } : function(element, type, recurring, custom) {
        var entry;
        if (recurring) {
          registry.put(entry = new RegEntry(element, custom || type, function(mapper) {
            rootListener.call(element, mapper, custom);
          }, rootListener, null, null, true));
          if (custom) {
            if (element["_on" + custom] == null) {
              /** @type {number} */
              element["_on" + custom] = 0;
            }
          }
          entry.target.attachEvent("on" + entry.eventType, entry.handler);
        } else {
          entry = registry.get(element, custom || type, rootListener, true)[0];
          if (entry) {
            entry.target.detachEvent("on" + entry.eventType, entry.handler);
            registry.del(entry);
          }
        }
      };
      /**
       * @param {Function} rm
       * @param {Element} element
       * @param {Object} type
       * @param {Function} fn
       * @param {string} originalFn
       * @return {?}
       */
      var once = function(rm, element, type, fn, originalFn) {
        return function() {
          fn.apply(this, arguments);
          rm(element, type, originalFn);
        };
      };
      /**
       * @param {string} element
       * @param {Object} orgType
       * @param {?} handler
       * @param {Error} l
       * @return {undefined}
       */
      var removeListener = function(element, orgType, handler, l) {
        var type = orgType && orgType[rp](nameRegex, "");
        var handlers = registry.get(element, type, null, false);
        var removed = {};
        var i;
        var c;
        /** @type {number} */
        i = 0;
        c = handlers[_length];
        for (;i < c;i++) {
          if (!handler || handlers[i].original === handler) {
            if (handlers[i].inNamespaces(l)) {
              registry.del(handlers[i]);
              if (!removed[handlers[i].eventType]) {
                if (handlers[i][eventSupport]) {
                  removed[handlers[i].eventType] = {
                    t : handlers[i].eventType,
                    c : handlers[i].type
                  };
                }
              }
            }
          }
        }
        for (i in removed) {
          if (!registry.has(element, removed[i].t, null, false)) {
            listener(element, removed[i].t, false, removed[i].c);
          }
        }
      };
      /**
       * @param {Object} selector
       * @param {Function} fn
       * @return {?}
       */
      var delegate = function(selector, fn) {
        /**
         * @param {Object} target
         * @param {Object} root
         * @return {?}
         */
        var findTarget = function(target, root) {
          var i;
          var array = isString(selector) ? selectorEngine(selector, root) : selector;
          for (;target && target !== root;target = target[parentNode]) {
            i = array[_length];
            for (;i--;) {
              if (array[i] === target) {
                return target;
              }
            }
          }
        };
        /**
         * @param {Event} e
         * @return {undefined}
         */
        var handler = function(e) {
          var match = findTarget(e.target, this);
          if (match) {
            fn.apply(match, arguments);
          }
        };
        return handler.__beanDel = {
          /** @type {function (Object, Object): ?} */
          ft : findTarget,
          selector : selector
        }, handler;
      };
      /** @type {function (boolean, string, ?): undefined} */
      var fireListener = W3C_MODEL ? function(isNative, type, element) {
        /** @type {(Event|null)} */
        var evt = doc.createEvent(isNative ? "HTMLEvents" : "UIEvents");
        evt[isNative ? "initEvent" : "initUIEvent"](type, true, true, win, 1);
        element.dispatchEvent(evt);
      } : function(isNative, type, element) {
        element = targetElement(element, isNative);
        if (isNative) {
          element.fireEvent("on" + type, doc.createEventObject());
        } else {
          element["_on" + type]++;
        }
      };
      /**
       * @param {string} element
       * @param {Object} typeSpec
       * @param {?} fn
       * @return {?}
       */
      var off = function(element, typeSpec, fn) {
        var isTypeStr = isString(typeSpec);
        var k;
        var type;
        var a;
        var i;
        if (isTypeStr && typeSpec.indexOf(" ") > 0) {
          typeSpec = f(typeSpec);
          i = typeSpec[_length];
          for (;i--;) {
            off(element, typeSpec[i], fn);
          }
          return element;
        }
        type = isTypeStr && typeSpec[rp](nameRegex, "");
        if (type) {
          if (customEvents[type]) {
            type = customEvents[type].base;
          }
        }
        if (!typeSpec || isTypeStr) {
          if (a = isTypeStr && typeSpec[rp](r, "")) {
            a = f(a, ".");
          }
          removeListener(element, type, fn, a);
        } else {
          if (isFunction(typeSpec)) {
            removeListener(element, null, typeSpec);
          } else {
            for (k in typeSpec) {
              if (typeSpec.hasOwnProperty(k)) {
                off(element, k, typeSpec[k]);
              }
            }
          }
        }
        return element;
      };
      /**
       * @param {string} element
       * @param {Object} events
       * @param {Object} selector
       * @param {Object} fn
       * @return {?}
       */
      var on = function(element, events, selector, fn) {
        var originalFn;
        var type;
        var c;
        var k;
        var args;
        var entry;
        var aL;
        if (selector === a && typeof events == "object") {
          for (type in events) {
            if (events.hasOwnProperty(type)) {
              on.call(this, element, type, events[type]);
            }
          }
          return;
        }
        if (isFunction(selector)) {
          /** @type {Array.<?>} */
          args = __slice.call(arguments, 3);
          fn = originalFn = selector;
        } else {
          /** @type {Object} */
          originalFn = fn;
          /** @type {Array.<?>} */
          args = __slice.call(arguments, 4);
          fn = delegate(selector, originalFn, selectorEngine);
        }
        c = f(events);
        if (this === ONE) {
          fn = once(off, element, events, fn, originalFn);
        }
        k = c[_length];
        for (;k--;) {
          aL = registry.put(entry = new RegEntry(element, c[k][rp](nameRegex, ""), fn, originalFn, f(c[k][rp](r, ""), "."), args, false));
          if (entry[eventSupport]) {
            if (aL) {
              listener(element, entry.eventType, true, entry.customType);
            }
          }
        }
        return element;
      };
      /**
       * @param {Array} context
       * @param {string} events
       * @param {Function} selector
       * @param {?} delfn
       * @return {?}
       */
      var add = function(context, events, selector, delfn) {
        return on.apply(null, isString(selector) ? [context, selector, events, delfn].concat(arguments[_length] > 3 ? __slice.call(arguments, 5) : []) : __slice.call(arguments));
      };
      /**
       * @return {?}
       */
      var one = function() {
        return on.apply(ONE, arguments);
      };
      /**
       * @param {undefined} element
       * @param {Text} type
       * @param {(Array|number)} args
       * @return {?}
       */
      var fire = function(element, type, args) {
        var o = f(type);
        var c;
        var j;
        var handler;
        var a;
        var handlers;
        c = o[_length];
        for (;c--;) {
          type = o[c][rp](nameRegex, "");
          if (a = o[c][rp](r, "")) {
            a = f(a, ".");
          }
          if (!a && (!args && element[eventSupport])) {
            fireListener(special[type], type, element);
          } else {
            handlers = registry.get(element, type, null, false);
            /** @type {Array} */
            args = [false].concat(args);
            /** @type {number} */
            j = 0;
            handler = handlers[_length];
            for (;j < handler;j++) {
              if (handlers[j].inNamespaces(a)) {
                handlers[j].handler.apply(element, args);
              }
            }
          }
        }
        return element;
      };
      /**
       * @param {?} element
       * @param {string} from
       * @param {string} type
       * @return {?}
       */
      var clone = function(element, from, type) {
        var handlers = registry.get(from, type, null, false);
        var handler = handlers[_length];
        /** @type {number} */
        var j = 0;
        var args;
        var self;
        for (;j < handler;j++) {
          if (handlers[j].original) {
            /** @type {Array} */
            args = [element, handlers[j].type];
            if (self = handlers[j].handler.__beanDel) {
              args[i](self.selector);
            }
            args[i](handlers[j].original);
            on.apply(null, args);
          }
        }
        return element;
      };
      var bean = {
        /** @type {function (string, Object, Object, Object): ?} */
        on : on,
        /** @type {function (Array, string, Function, ?): ?} */
        add : add,
        /** @type {function (): ?} */
        one : one,
        /** @type {function (string, Object, ?): ?} */
        off : off,
        /** @type {function (string, Object, ?): ?} */
        remove : off,
        /** @type {function (?, string, string): ?} */
        clone : clone,
        /** @type {function (undefined, Text, (Array|number)): ?} */
        fire : fire,
        Event : Event,
        /** @type {function (Function): undefined} */
        setSelectorEngine : setSelectorEngine,
        /**
         * @return {?}
         */
        noConflict : function() {
          return params[name] = fn, this;
        }
      };
      if (win.attachEvent) {
        /**
         * @return {undefined}
         */
        var cleanup = function() {
          var i;
          var entries = registry.entries();
          for (i in entries) {
            if (entries[i].type) {
              if (entries[i].type !== "unload") {
                off(entries[i].element, entries[i].type);
              }
            }
          }
          win.detachEvent("onunload", cleanup);
          if (win.CollectGarbage) {
            win.CollectGarbage();
          }
        };
        win.attachEvent("onunload", cleanup);
      }
      return setSelectorEngine(), bean;
    });
    view = bean.noConflict();
    /** @type {null} */
    window.bean = name;
    (function(dataAndEvents, deepDataAndEvents) {
      /**
       * @param {number} source
       * @param {number} target
       * @param {number} pos
       * @return {?}
       */
      function interpolate(source, target, pos) {
        return(source + (target - source) * pos).toFixed(3);
      }
      /**
       * @param {string} str
       * @param {number} expectedNumberOfNonCommentArgs
       * @param {number} c
       * @return {?}
       */
      function s(str, expectedNumberOfNonCommentArgs, c) {
        return str.substr(expectedNumberOfNonCommentArgs, c || 1);
      }
      /**
       * @param {?} source
       * @param {?} elem
       * @param {number} pos
       * @return {?}
       */
      function color(source, elem, pos) {
        /** @type {number} */
        var l = 2;
        var j;
        var c;
        var tmp;
        /** @type {Array} */
        var v = [];
        /** @type {Array} */
        var qs = [];
        for (;j = 3, c = arguments[l - 1], l--;) {
          if (s(c, 0) == "r") {
            c = c.match(/\d+/g);
            for (;j--;) {
              v[i](~~c[j]);
            }
          } else {
            if (c[_length] == 4) {
              /** @type {string} */
              c = "#" + s(c, 1) + s(c, 1) + s(c, 2) + s(c, 2) + s(c, 3) + s(c, 3);
            }
            for (;j--;) {
              v[i](parseInt(s(c, 1 + j * 2, 2), 16));
            }
          }
        }
        for (;j--;) {
          /** @type {number} */
          tmp = ~~(v[j + 3] + (v[j] - v[j + 3]) * pos);
          qs[i](tmp < 0 ? 0 : tmp > 255 ? 255 : tmp);
        }
        return "rgb(" + qs.join(",") + ")";
      }
      /**
       * @param {Object} prop
       * @return {?}
       */
      function parse(prop) {
        /** @type {number} */
        var p = parseFloat(prop);
        var q = prop[rp](/^[\-\d\.]+/, "");
        return isNaN(p) ? {
          v : q,
          /** @type {function (?, ?, number): ?} */
          f : color,
          u : ""
        } : {
          v : p,
          /** @type {function (number, number, number): ?} */
          f : interpolate,
          u : q
        };
      }
      /**
       * @param {string} models
       * @return {?}
       */
      function reset(models) {
        var options;
        var result = {};
        /** @type {string} */
        var letter = map[_length];
        var v;
        /** @type {string} */
        parseEl.innerHTML = '<div style="' + models + '"></div>';
        options = parseEl.childNodes[0][k];
        for (;letter--;) {
          if (v = options[map[letter]]) {
            result[map[letter]] = parse(v);
          }
        }
        return result;
      }
      /** @type {Element} */
      var parseEl = doc.createElement("div");
      /** @type {Array.<string>} */
      var map = "backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
      /**
       * @param {(Element|string)} el
       * @param {string} id
       * @param {Object} opts
       * @return {undefined}
       */
      start = function(el, id, opts) {
        el = typeof el == "string" ? doc.getElementById(el) : el;
        opts = opts || {};
        var target = reset(id);
        var comp = el.currentStyle ? el.currentStyle : getComputedStyle(el, name);
        var prop;
        var current = {};
        var at = info();
        var n = opts.duration || 200;
        var e = at + n;
        var scrollIntervalId;
        var easing = opts.easing || function(pos) {
            return-Math.cos(pos * Math.PI) / 2 + 0.5;
          };
        for (prop in target) {
          current[prop] = parse(comp[prop]);
        }
        /** @type {number} */
        scrollIntervalId = global.setInterval(function() {
          var sz = info();
          /** @type {number} */
          var pos = sz > e ? 1 : (sz - at) / n;
          for (prop in target) {
            el[k][prop] = target[prop].f(current[prop].v, target[prop].v, easing(pos)) + target[prop].u;
          }
          if (sz > e) {
            clearInterval(scrollIntervalId);
            if (opts.after) {
              opts.after();
            }
          }
        }, 10);
      };
    })();
    (function(doc) {
      /**
       * @return {undefined}
       */
      function ready() {
        /** @type {number} */
        R = 1;
        /** @type {number} */
        var evtName = 0;
        var eventListeners = listeners[_length];
        for (;evtName < eventListeners;evtName++) {
          listeners[evtName]();
        }
      }
      /** @type {number} */
      var R = 0;
      /** @type {Array} */
      var listeners = [];
      /** @type {Element} */
      var testEl = doc.createElement("a");
      if (/^loade|c/.test(doc.readyState)) {
        /** @type {number} */
        R = 1;
      }
      if (doc.addEventListener) {
        doc.addEventListener("DOMContentLoaded", function completed() {
          doc.removeEventListener("DOMContentLoaded", completed, false);
          ready();
        }, false);
      }
      if (testEl.doScroll) {
        doc.attachEvent("onreadystatechange", function done() {
          if (/^c/.test(doc.readyState)) {
            doc.detachEvent("onreadystatechange", done);
            ready();
          }
        });
      }
      /** @type {function (?): undefined} */
      var fn = testEl.doScroll ? function(e) {
        if (self != top) {
          if (!R) {
            listeners[i](e);
          } else {
            e();
          }
        } else {
          (function() {
            try {
              testEl.doScroll("left");
            } catch (aa) {
              return _setTimeout(function() {
                fn(e);
              }, 50);
            }
            e();
          })();
        }
      } : function(e) {
        if (R) {
          e();
        } else {
          listeners[i](e);
        }
      };
      /** @type {function (?): undefined} */
      bulk = fn;
    })(document);
    !function(element, f) {
      /**
       * @param {Object} o
       * @param {?} var_args
       * @return {?}
       */
      function extend(o, var_args) {
        noop[proto] = this[proto];
        var supr = this;
        var prototype = new noop;
        /** @type {boolean} */
        var isFunction = typeof o == f;
        var _constructor = isFunction ? o : this;
        var _methods = isFunction ? {} : o;
        /**
         * @return {undefined}
         */
        var fn = function() {
          if (this.initialize) {
            this.initialize.apply(this, arguments);
          } else {
            if (!var_args) {
              if (unfoldSoak(o)) {
                supr.apply(this, arguments);
              }
            }
            _constructor.apply(this, arguments);
          }
        };
        /**
         * @param {Object} o
         * @return {?}
         */
        fn.methods = function(o) {
          process(prototype, o, supr);
          fn[proto] = prototype;
          return this;
        };
        /** @type {function (): undefined} */
        fn.methods.call(fn, _methods).prototype.constructor = fn;
        /** @type {(Function|null)} */
        fn.extend = arguments.callee;
        /** @type {function (?, ?): ?} */
        fn[proto].implement = fn.statics = function(key, value) {
          key = typeof key == "string" ? function() {
            var flags = {};
            flags[key] = value;
            return flags;
          }() : key;
          process(this, key, supr);
          return this;
        };
        return fn;
      }
      /**
       * @param {Object} src
       * @param {Object} prop
       * @param {Object} supr
       * @return {undefined}
       */
      function process(src, prop, supr) {
        var name;
        for (name in prop) {
          if (hasOwnProperty(prop, name)) {
            src[name] = typeof prop[name] == f && (typeof supr[proto][name] == f && fnTest.test(prop[name])) ? wrap(name, prop[name], supr) : prop[name];
          }
        }
      }
      /**
       * @param {string} k
       * @param {Function} matcherFunction
       * @param {Object} supr
       * @return {?}
       */
      function wrap(k, matcherFunction, supr) {
        return function() {
          var tmp = this.supr;
          this.supr = supr[proto][k];
          var result = matcherFunction.apply(this, arguments);
          this.supr = tmp;
          return result;
        };
      }
      /**
       * @param {string} o
       * @return {?}
       */
      function klass(o) {
        return extend.call(typeof o == f ? o : noop, o, 1);
      }
      /** @type {RegExp} */
      var fnTest = /xyz/.test(function() {
        xyz;
      }) ? /\bsupr\b/ : /.*/;
      /**
       * @return {undefined}
       */
      var noop = function() {
      };
      /** @type {string} */
      var proto = "prototype";
      /**
       * @param {Object} o
       * @return {?}
       */
      var unfoldSoak = function(o) {
        return typeof o === f;
      };
      if (typeof module != "undefined" && module.exports) {
        /** @type {function (string): ?} */
        module.exports = klass;
      } else {
        var className = element.klass;
        /**
         * @return {?}
         */
        klass.noConflict = function() {
          element.klass = className;
          return this;
        };
        /** @type {function (string): ?} */
        element.klass = klass;
      }
    }(global, "function");
    description = klass.noConflict();
    /** @type {null} */
    window.klass = name;
    global.GUMGUM = function(self) {
      var Math = global.Math;
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      var floor = Math.floor;
      var nativeRandom = Math.random;
      /**
       * @param {(number|string)} value
       * @return {?}
       */
      var _parseInt = function(value) {
        return parseInt(value, 10);
      };
      var format;
      var makeArray;
      var inArray;
      var error;
      var serialize;
      var obj = {
        /**
         * @param {?} param
         * @return {?}
         */
        "boolean" : function(param) {
          return String(param);
        },
        /**
         * @return {?}
         */
        "null" : function() {
          return "null";
        },
        /**
         * @param {?} number
         * @return {?}
         */
        number : function(number) {
          return isFinite(number) ? String(number) : "null";
        },
        /**
         * @param {Object} a
         * @return {?}
         */
        array : function(a) {
          /** @type {Array} */
          var types = [];
          var prev;
          var method;
          var el;
          /** @type {number} */
          method = 0;
          for (;method < a[_length];method++) {
            if ((prev = obj[typeof(el = a[method])]) && typeof(el = prev(el)) === "string") {
              types[i](el);
            }
          }
          return "[" + types.join(",") + "]";
        },
        /**
         * @param {Object} map
         * @return {?}
         */
        object : function(map) {
          var key;
          var string;
          /** @type {Array} */
          var fns = [];
          if (map) {
            if (map instanceof Array) {
              return obj.array(map);
            }
            for (key in map) {
              if (hasOwnProperty(map, key)) {
                if ((string = obj[typeof map[key]]) && typeof string(map[key]) === "string") {
                  fns[i](obj.string(key) + ":" + string(map[key]));
                }
              }
            }
          }
          return typeof fns !== "undefined" ? "{" + fns.join(",") + "}" : "null";
        },
        /**
         * @param {Object} b
         * @return {?}
         */
        string : function(b) {
          if (/["\\\x00-\x1f]/.test(b)) {
            b = b[rp](/([\x00-\x1f\\"])/g, function(dataAndEvents, key) {
              var i = key.charCodeAt();
              var $cookies = {
                "\b" : "\\b",
                "\t" : "\\t",
                "\n" : "\\n",
                "\f" : "\\f",
                "\r" : "\\r",
                '"' : '\\"',
                "\\" : "\\\\"
              };
              if ($cookies[key]) {
                return $cookies[key];
              }
              return "\\u00" + floor(i / 16).toString(16) + (i % 16).toString(16);
            });
          }
          return'"' + b + '"';
        }
      };
      /** @type {boolean} */
      var opt_path = "FormData" in global;
      /** @type {string} */
      var _version = "release-912-24-gb86d974";
      var apply;
      /** @type {boolean} */
      var ret = value;
      /** @type {Array} */
      var c = [];
      var clear;
      var createElement;
      var _addNode;
      var success;
      var render;
      var byId;
      var jQuery;
      var query;
      var find;
      var $;
      var fn;
      var next;
      var data;
      var _getStyle;
      var css;
      var draw;
      var getOffset;
      var size;
      var style;
      var normalize;
      var contains;
      var filter;
      var setup;
      /** @type {number} */
      var callback_counter = 0;
      var seal;
      var callback;
      var cache;
      var camelize;
      var load;
      var loadScript;
      var onload;
      var request;
      var d;
      var search;
      var send;
      /** @type {Element} */
      var docEl = doc.documentElement;
      var body;
      var test;
      var init;
      var _document = global.ggv2id;
      /** @type {string} */
      var root = "/g2.gumgum.com";
      /** @type {boolean} */
      var match = "classid" in doc.createElement("object");
      var ieVersion = match ? _parseInt(nav.userAgent.toLowerCase().split("msie")[1]) : 0;
      /** @type {string} */
      var result = match ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' : "";
      /** @type {string} */
      var compassResult = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABV0RVh0Q3JlYXRpb24gVGltZQA5LzExLzE0F13cFAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAADDSURBVCiRpZPbDYMwDEUPmYARYAIYIZuUOYIIIhWdAzZgBEYgE5QRGKE/SUUj0hZx/2z5XNt5JDh1ph+AEpCtrjcCdaZPgRlYdKMqgGQH3lydDQ12YOFSo25UlQQgocEB6DUKN2qoApg702cREKAUgHSdjgyeEdAC0u8cG+1IFpC6UVviM38avEFwp70zyNyoMeW6UasPRNB5+jHyZO6P1AfXdj4JfhiIL6AFcuLXOAtgiTm3ul6Jv4Pl2tveFQyc/FUvDUZjULjkGSAAAAAASUVORK5CYII=";
      /** @type {number} */
      var count = 10001;
      /**
       * @return {undefined}
       */
      var noop = function() {
      };
      /** @type {(Console|{log: function (): undefined})} */
      var console = global.console || {
          /** @type {function (): undefined} */
          log : noop
        };
      /** @type {boolean} */
      var values = value;
      var input;
      /** @type {Date} */
      var against = new Date;
      /** @type {string} */
      var allCallbacks = "abcdefghijklmnopqrstuvwxyz";
      var E = allCallbacks[~~(nativeRandom() * allCallbacks[_length])] + +against;
      var update;
      /** @type {number} */
      var mw = 550;
      /** @type {number} */
      var mh = 550;
      var model = {
        data : {
          mfs : false,
          mw : mw,
          mh : mh,
          mcs : {
            margin : 5
          }
        }
      };
      var headers = {};
      /**
       * @param {string} item
       * @param {Function} html
       * @return {?}
       */
      var log = function(item, html) {
        var key = item && (item.split && item.split(".")[0]);
        /** @type {string} */
        var reply = ", visit http://gumgum.com/faq for more information.";
        if (!key) {
          return console.log("Your GumGum event name needs to be a valid string" + reply, item);
        }
        if (!html.call) {
          return console.log('Your GumGum event handler for "' + item + '" cannot be executed' + reply);
        }
        /** @type {boolean} */
        self.subs[key] = node;
        view.on(input, "gumgum." + item, html);
      };
      /**
       * @return {undefined}
       */
      var once = function() {
        var points = global.ggevents;
        /**
         * @param {Object} map
         * @return {undefined}
         */
        var on = function(map) {
          var name;
          for (name in map) {
            if (hasOwnProperty(map, name)) {
              log(name, map[name]);
            }
          }
        };
        if (points && points instanceof Array) {
          for (;points.length;) {
            on(points.shift());
          }
          /**
           * @param {Object} element
           * @return {?}
           */
          points.push = function(element) {
            return element && on(element);
          };
        } else {
          once(global.ggevents = []);
        }
      };
      /** @type {Array} */
      self.Stack = [];
      self.trackingId = _document;
      /** @type {string} */
      self.revision = _version;
      /** @type {string} */
      self.baseUrl = root;
      self.Bean = view;
      self.Klass = description;
      self.Emile = start;
      /** @type {function (Object, number): ?} */
      self.has = hasOwnProperty;
      /** @type {function (string): ?} */
      self.euc = done;
      /** @type {function (): ?} */
      self.getTS = info;
      /** @type {boolean} */
      self.msie = match;
      self.ieVersion = ieVersion;
      /** @type {string} */
      self.swfcid = result;
      self.infoModalOps = model;
      /** @type {string} */
      self.greyCB = compassResult;
      /** @type {number} */
      headers[key] = headers[index] = 0;
      /** @type {number} */
      self.highestZindex = 0;
      self.dtCredentials = {
        member : "YcXr87z2lpbB"
      };
      /**
       * @return {?}
       */
      self.getDigiTrustID = function() {
        var args = global.DigiTrust && global.DigiTrust.getIdentitySync ? global.DigiTrust.getIdentitySync(self.dtCredentials) : {};
        return args.identity ? args.identity.id : "";
      };
      self.subs = {};
      /** @type {function (string): ?} */
      self.newEl = createElement = function(element) {
        return doc.createElement(element);
      };
      /** @type {function (Object, ?): ?} */
      self.addNode = _addNode = function(obj, el) {
        return obj.appendChild(el);
      };
      /** @type {function (Object, Object): ?} */
      self.rmNode = success = function(s, el) {
        s = s ? s : el[parentNode];
        return s ? s.removeChild(el) : name;
      };
      /** @type {function (string, ?): ?} */
      self.onError = callback = function(method, result) {
        /** @type {number} */
        var key = 0;
        /** @type {Array} */
        var qs = [];
        /** @type {null} */
        var t = name;
        var el = createElement("img");
        for (key in result) {
          if (hasOwnProperty(result, key)) {
            qs[i](key.toUpperCase() + ":" + result[key]);
          }
        }
        t = {
          tid : _document,
          pu : done(l.href),
          msg : (method || "other") + ":" + done(qs.join(";"))
        };
        /** @type {string} */
        el[_src] = root + "/error/js?trackingId=" + t.tid + "&pageUrl=" + t.pu + "&message=" + t.msg;
        return value;
      };
      /**
       * @return {?}
       */
      global.assetsFailure = function() {
        return value;
      };
      /** @type {function (?, Function): ?} */
      self.bindCtx = cache = function(value, handler) {
        return function() {
          handler.apply(value, makeArray(arguments));
        };
      };
      test = function() {
        try {
          /** @type {(Navigator|null)} */
          var options = nav;
          /** @type {(Screen|null)} */
          var result = _screen;
          /** @type {(PluginArray|null)} */
          var _plugins = options.plugins;
          /** @type {Array} */
          var qs = [];
          /** @type {null} */
          var info = name;
          /** @type {number} */
          var type = 0;
          /** @type {number} */
          var key = 0;
          /** @type {null} */
          var map = name;
          /** @type {null} */
          var val = name;
          /**
           * @param {string} type
           * @return {?}
           */
          var runTest = function(type) {
            var result;
            try {
              result = global[type];
            } catch (bv) {
              /** @type {boolean} */
              result = value;
            }
            return result;
          };
          if (_plugins[_length]) {
            for (type in _plugins) {
              if (hasOwnProperty(_plugins, type) && ((map = _plugins[type]) && map.name)) {
                /** @type {Array} */
                info = [];
                for (key in map) {
                  if (hasOwnProperty(map, key) && ((val = map[key]) && val.type)) {
                    info[i](val.type + "~" + val.suffixes);
                  }
                }
                qs[i](map.name + "::" + info.join(","));
              }
            }
          }
         return[options.userAgent, options.platform, options.product, options.productSub, options.vendor, options.vendorSub, [result[partName], result[attr], result.colorDepth, result.pixelDepth, global.devicePixelRatio].join("x"), (new Date)[getTimezoneOffset](), !!global.console, !!runTest("sessionStorage"), !!runTest("localStorage"), !!runTest("indexedDB"), qs.join(";")].join("###");
        } catch (expectationResult) {
          return callback("getBF", expectationResult) || "BF-ERROR";
        }
      }();
      self.sbf = test = compile(test);

      self.flashEnabled = values = function() {
        /** @type {null} */
        var t = name;
        /** @type {string} */
        var undef = "undefined";
        /** @type {string} */
        var SHOCKWAVE_FLASH = "Shockwave Flash";
        /** @type {string} */
        var FLASH_MIME_TYPE = "application/x-shockwave-flash";
        /** @type {(Navigator|null)} */
        var nav = global.navigator;
        /** @type {boolean} */
        var ret = value;
        if (typeof nav.plugins !== undef && typeof nav.plugins[SHOCKWAVE_FLASH] === "object") {
          if (nav.plugins[SHOCKWAVE_FLASH].description && !(typeof nav.mimeTypes !== undef && (nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin))) {
            /** @type {boolean} */
            ret = _true;
          }
        } else {
          if (typeof global.ActiveXObject !== undef) {
            try {
              /** @type {ActiveXObject} */
              t = new global.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
              if (t && t.GetVariable("$version")) {
                /** @type {boolean} */
                ret = _true;
              }
            } catch (bm) {
            }
          }
        }
        return ret;
      }();
      /** @type {function (): ?} */
      self.reportAd = update = function() {
        var e = this;
        var data = e.data;
        var E = data.ab || (data.i || data.ai);
        var path = e.m || (data.m || (data.ad || data.am));
        var that = model;
        /** @type {string} */
        var pathStr = opt_path ? '<label style="line-height:19px">Attachment <input type="file" name="attachment" class="gg-att"></label>' : "";
        /**
         * @param {Object} self
         * @return {undefined}
         */
        var callback = function(self) {
          var codeSegments = find.call(self, "input[type=hidden],textarea");
          var data = {};
          var field;
          var i;
          if (!opt_path) {
            /** @type {number} */
            i = 0;
            for (;i < codeSegments.length;i++) {
              field = codeSegments[i];
              data[field.name] = field.value;
            }
            data = serialize(data);
          } else {
            /** @type {FormData} */
            data = new FormData(self);
          }
          send({
            url : self.action,
            postData : data,
            noCT : node,
            /**
             * @param {Object} res
             * @return {undefined}
             */
            callback : function(res) {
              /** @type {*} */
              var callbacks = JSON.parse(res.response);
              var failuresLink;
              if (callbacks.success) {
                /** @type {string} */
                self.innerHTML = '<strong style="display:block;text-align:center;font-size:24px">Thank you for your feedback</strong>';
              } else {
                failuresLink = fn('<strong style="color:red">' + callbacks.error + "</strong>");
                _addNode(self, failuresLink);
                _setTimeout(function() {
                  success(self, failuresLink);
                }, 3E3);
              }
            }
          });
        };
        /**
         * @return {undefined}
         */
        var render = function() {
          var form = byId("ggreport" + E);
          var input = createElement("input");
          var el = createElement("input");
          input.setAttribute("type", "hidden");
          el.setAttribute("type", "hidden");
          input.setAttribute("name", "markup");
          el.setAttribute("name", "originalMarkup");
          el.value = path;
          input.value = v;
          _addNode(form, input);
          _addNode(form, el);
          view.on(form, "submit", function(types) {
            types.preventDefault();
            callback(this);
          });
        };
        var doc = e.container || e.element;
        var v = _addNode(createElement("div"), doc.cloneNode(node));
        var iframe = jQuery.call(doc, "iframe");
        var l;
        var entityType;
        var params;
        if (iframe.length) {
          l = iframe[0][method](type);
          if (!l || l === "about:blank") {
            params = iframe[0].contentDocument || (iframe[0].contentWindow && iframe[0].contentWindow.document || "");
            if (params) {
              params = jQuery.call(params, "html");
              params = params[0][id];
            }
          }
        }
        v = v[id][rp](/<iframe(.*)iframe>/i, "<iframe><html>" + params + "</html></iframe>");
        entityType = '                <div style="background:#DCDCDD;border:1px solid #cfcfd0;border-top:none;border-left:none;padding:20px;">                    <img src="/c.gumgum.com/images/logo/all300.png" alt="GumGum" width="225" height="57" style="display:block;margin:0 auto 10px;">                    <form action="//g2.gumgum.com/ad/report" id="ggreport_ADID_" method="POST" enctype="multipart/form-data">                       <input type="hidden" name="pageUrl" value="_PAGEURL_">                       <input type="hidden" name="adId" value="_ADID_">                       <input type="hidden" name="trackingId" value="_TRACKINGID_">                       <input type="hidden" name="user" value="_REPORTER_">                       <div style="margin:3px 0;">                           <textarea name="comments" rows="10" placeholder="Write a brief description of the problem" style="display:block;width:98%;border:1px solid #BBB;padding:1%;background:#e9e9e9"></textarea>                       </div>                       _FILE_                       <div style="text-align:right">                           <input type="submit" value="send" style="cursor:pointer;background:#CFCFD0;padding:7px;border:1px solid #BBB;border-top:none;border-left:none">                       </div>                    </form>                </div>'[rp](/_PAGEURL_/,
          global.location.href)[rp](/_FILE_/, pathStr)[rp](/_ADID_/gi, E)[rp](/_TRACKINGID_/, _document)[rp](/_REPORTER_/, self.BD ? self.BD.username : "");
        /** @type {boolean} */
        that.data.mfs = false;
        /** @type {string} */
        that.data.mcc = compassResult;
        that.data.mcs = {
          margin : "10px"
        };
        init.call(that, entityType, true, render);
        return value;
      };
      /** @type {function (Object): ?} */
      self.resetHTML = $ = function(b) {
        return b[rp](/_CLEARCSS_/g, "margin:0;padding:0;position:static;outline:0;background:transparent none;border:none;overflow:visible;visibility:visible;filter:alpha(opacity=100);opacity:1;box-sizing:content-box;-moz-box-sizing:content-box;text-decoration:none;font:normal 12px/1 arial;text-shadow:none;box-shadow:none;color:#000;text-align:left;vertical-align:top;float:none;max-width:none;max-height:none");
      };
      /** @type {function (Object, Array, string): ?} */
      self.tpl = data = function(elem, el, out) {
        /**
         * @param {?} defaultValue
         * @param {number} k
         * @return {?}
         */
        var getValue = function(defaultValue, k) {
          return el[k] === a ? out : el[k];
        };
        /**
         * @param {?} val
         * @param {number} i
         * @return {?}
         */
        var setter = function(val, i) {
          return el[i] === a ? out : parseFloat(el[i]).toFixed(2);
        };
        if (out === a) {
          /** @type {string} */
          out = "N/A";
        }
        return $(elem)[rp](/\{:([\w]+):\}/g, getValue)[rp](/\{#([\w]+)#\}/g, setter);
      };
      /** @type {function (HTMLElement): ?} */
      self.inDOM = clear = function(element) {
        return element.parentNode && contains(docEl || body, element);
      };
      /** @type {function (Object, number): ?} */
      self.parseHTML = fn = function(c, key) {
        var a = createElement("div");
        /** @type {null} */
        var result = name;
        key = key || 0;
        c = $(c);
        if (/\x3c!--iframe--\x3e/im.test(c)) {
          c = c[rp](/\r|\f|\n|^\s*|\s*$/ig, "").split("\x3c!--iframe--\x3e");
          if (c[_length] === 3) {
            a[id] = c[0] + '<div class="gumgum-iframe-placeholder"></div>' + c[2];
            next(c[1], query.call(a, "gumgum-iframe-placeholder")[0], node);
          } else {
            throw "Invalid --iframe-- separators";
          }
        } else {
          /** @type {Object} */
          a[id] = c;
        }
        if (a && a.children[key]) {
          result = success(a, a.children[key]);
        } else {
          throw "Invalid parseHTML return Node";
        }
        /** @type {null} */
        a = name;
        return result;
      };
      /** @type {function (Error, Object, boolean): ?} */
      self.iframeHTML = next = function(elem, el, event) {
        var iframe = createElement("iframe");
        /** @type {number} */
        iframe.allowTransparency = 1;
        /** @type {number} */
        iframe.frameBorder = 0;
        /** @type {string} */
        iframe.scrolling = "no";
        /** @type {string} */
        iframe[_src] = "about:blank";
        /** @type {string} */
        iframe[attr] = "100%";
        /** @type {string} */
        iframe[partName] = "100%";
        elem = $(elem);
        if (el && !el.nodeType) {
          el = [find(el) || [value]][0];
        }
        if (!el) {
          return value;
        }
        if (event && el[parentNode]) {
          el[parentNode].replaceChild(iframe, el);
        } else {
          _addNode(el, iframe);
        }
        _setTimeout(function() {
          var win = iframe.contentWindow;
          win.GUMGUM = self;
          win.document.open("text/html", "replace");
          win.document.write('<!DOCTYPE html><br style="display:none;"><style>*{padding:0;margin:0;background:transparent none;border:none;font-size:0}</style>' + elem);
          _setTimeout(function() {
            win.document.close();
          }, 50);
        }, 50);
        return iframe;
      };
      if (!doc.querySelectorAll) {
        ss = doc.createStyleSheet();
      }
      /** @type {function (Object): ?} */
      self.bySelector = find = function(query) {
        return doc.querySelectorAll ? makeArray(doc.querySelectorAll(query)) : function(b) {
          var a = doc.all;
          /** @type {Array} */
          var contact = [];
          /** @type {number} */
          var method = 0;
          /** @type {number} */
          var c = 0;
          var methods = b[rp](/\[for\b/gi, "[htmlFor").split(",");
          method = methods[_length];
          for (;method--;) {
            ss.addRule(methods[method], "k:v");
            c = a[_length];
            for (;c--;) {
              if (a[c].currentStyle.k) {
                contact[i](a[c]);
              }
            }
            ss.removeRule(0);
          }
          return contact;
        }(query);
      };
      /** @type {function (string): ?} */
      self.byId = byId = function(id) {
        return doc.getElementById(id);
      };
      /** @type {function (string): ?} */
      self.byTag = jQuery = function(tag) {
        var context = this;
        return context.getElementsByTagName ? context.getElementsByTagName(tag) : context.all ? tag === "*" ? context.all : context.all.tags(tag) : doc.getElementsByTagName("*");
      };
      /** @type {function (?): ?} */
      self.byClass = query = function(query) {
        var doc = this;
        return doc.getElementsByClassName ? makeArray(doc.getElementsByClassName(query)) : function(existingFn) {
          /** @type {number} */
          var key = 0;
          var result = jQuery.call(doc, "*");
          var existingType = result[_length];
          /** @type {Array} */
          var match = [];
          /** @type {number} */
          key = 0;
          for (;key < existingType;key++) {
            if (result[key] && ("className" in result[key] && ~result[key][prop].indexOf(existingFn))) {
              match[i](result[key]);
            }
          }
          return match;
        }.call(doc, query);
      };
      /** @type {function (Object): ?} */
      self.shrinkURL = seal = function(object) {
        try {
          return object[rp](/^(http(s:)|http:)\/\//, "$2");
        } catch (bk) {
          return object;
        }
      };
      /** @type {function (string): ?} */
      self.getType = format = function(obj) {
        var class2type = {
          "[object Boolean]" : "boolean",
          "[object Number]" : "number",
          "[object String]" : "string",
          "[object Function]" : "function",
          "[object Array]" : "array",
          "[object Date]" : "date",
          "[object RegExp]" : "regexp",
          "[object Object]" : "object"
        };
        return obj === name ? String(obj) : class2type[Object.prototype.toString.call(obj)] || "object";
      };
      /** @type {function (Object): ?} */
      self.toArray = makeArray = function(array) {
        if (!array[_length]) {
          return[];
        }
        return!match ? Array.prototype.slice.call(array, 0) : function(element) {
          var OWNER_DOCUMENT;
          var current = element[_length];
          var doc;
          /** @type {Array} */
          var callbacks = [];
          /** @type {number} */
          OWNER_DOCUMENT = 0;
          for (;OWNER_DOCUMENT < current && (doc = element[OWNER_DOCUMENT]);OWNER_DOCUMENT++) {
            callbacks[i](doc);
          }
          return callbacks;
        }(array);
      };
      /** @type {function (Object, ?): ?} */
      self.inArray = inArray = function(c, elem) {
        /** @type {number} */
        var i = 0;
        var r = c[_length];
        for (;i < r;i++) {
          if (c[i] === elem) {
            return i;
          }
        }
        return-1;
      };
      /** @type {function (?): ?} */
      self.toJSON = error = function(result) {
        try {
          return(obj[typeof result] || obj.number)(result);
        } catch (expectationResult) {
          return callback("toJSON", expectationResult);
        }
      };
      /** @type {function (Object): ?} */
      self.serialize = serialize = function(object) {
        /** @type {Array} */
        var tagNameArr = [];
        var key;
        for (key in object) {
          if (hasOwnProperty(object, key)) {
            tagNameArr.push(encodeURIComponent(key) + "=" + encodeURIComponent(object[key]));
          }
        }
        return tagNameArr.join("&");
      };
      /** @type {function (string, ?, string): ?} */
      self.getJSONP = search = function(filename, data, elements) {
        /** @type {string} */
        var unlock = "cb" + callback_counter++;
        elements = elements || "jsonp";
        filename += (filename.indexOf("?") > -1 ? "&" : "?") + elements + "=GUMGUM.jsonp." + unlock;
        self.jsonp[unlock] = data;
        loadScript(filename, input, function() {
          delete self.jsonp[unlock];
        }, value);
        return _true;
      };
      self.jsonp = {};
      /** @type {function (Object): ?} */
      self.xhr = send = function(options) {
        var uri = options.url || false;
        var onSuccess = options.success || (options.callback || noop);
        var onerror = options.error || function(xhr) {
            callback("xhr", {
              url : uri,
              req : xhr.statusText
            });
            return;
          };
        var complete = options.done || noop;
        var postData = options.postData || name;
        var feature = options.headers || {};
        /** @type {string} */
        var key = "withCredentials";
        /** @type {number} */
        var br = 1;
        /**
         * @return {?}
         */
        var createCORSRequest = function() {
          /** @type {XMLHttpRequest} */
          var v = new XMLHttpRequest;
          if (!(key in v) && typeof global.XDomainRequest !== a) {
            /** @type {XDomainRequest} */
            v = new global.XDomainRequest;
            /** @type {number} */
            br = 0;
          }
          return v;
        };
        var xhr = createCORSRequest();
        /** @type {string} */
        var method = postData ? "POST" : "GET";
        var type;
        if (!xhr || !uri) {
          return;
        }
        if (br) {
          xhr.open(method, uri, node);
        } else {
          xhr.open(method, uri);
        }
        xhr[key] = options[key] || value;
        if (method === "POST" && !options.noCT) {
          xhr.setRequestHeader("Content-type", "multipart/form-data");
        }
        for (type in feature) {
          if (hasOwnProperty(feature, type)) {
            xhr.setRequestHeader(type, feature[_src]);
          }
        }
        /**
         * @return {undefined}
         */
        xhr.onload = function() {
          onSuccess(xhr);
          complete(xhr);
        };
        /**
         * @return {undefined}
         */
        xhr.onerror = function() {
          onerror(xhr);
          complete(xhr);
        };
        return xhr.send(postData);
      };
      /** @type {function (string, HTMLElement, string, boolean): undefined} */
      self.loadScript = loadScript = function(name, options, callback, failure) {
        load(name, {
          parent : options,
          callback : callback,
          preserve : failure,
          type : "script"
        });
      };
      /** @type {function (string, HTMLElement, Function, ?): undefined} */
      self.loadImg = onload = function(evt, e, callback, event) {
        load(evt, {
          parent : e,
          /** @type {Function} */
          callback : callback,
          preserve : event,
          type : "img"
        });
      };
      /** @type {function (string, HTMLElement, string): undefined} */
      self.loadHtml = self.loadHTML = request = function(error, c, callback) {
        load(error, {
          parent : c,
          callback : callback,
          type : "html"
        });
      };
      /** @type {function ((Object|string), ?): undefined} */
      self.loadPixels = d = function(c, opts) {
        /** @type {number} */
        var i = 0;
        /** @type {null} */
        var v = name;
        var n = c ? c[_length] : 0;
        for (;i < n && (v = c[i]);i++) {
          if (v.u && (!opts.evt || opts.evt && v.e === opts.evt)) {
            load(v.u[rp](/GGUID/ig, opts.gguid || i), {
              parent : opts.parent || input,
              type : v.t
            });
          }
        }
      };
      /** @type {function (string, Object): ?} */
      self.loadObj = load = function(src, opt_attributes) {
        /** @type {null} */
        var el = name;
        var opts = opt_attributes || {};
        var suiteView = opts.parent || input;
        var close = opts.callback || value;
        var targetNode = opts.preserve === value ? value : _true;
        var type = opts.type || value;
        var ms = opts.delay || 10;
        /** @type {string} */

        var time = opts.cb !== value ? (src.indexOf("?") > -1 ? "&" : "?") + "_" + info() : "";
        /**
         * @param {Object} e
         * @return {undefined}
         */
        var listener = function(e) {
          if (e && e.type === "error") {
            callback("loadObj", {
              msg : done(src) + " failed to load."
            });
          }
          /** @type {null} */
          el.onload = el.onreadystatechange = el.onerror = name;
          if ("clearAttributes" in el) {
            el.clearAttributes();
          }
          for (;el.lastChild;) {
            success(el, el.lastChild);
          }
          if (el[parentNode] && !targetNode) {
            success(value, el);
          }
          fail();
        };
        /**
         * @return {?}
         */
        var fail = function() {
          return close && "call" in close ? close() : _true;
        };
        /**
         * @param {string} status
         * @return {undefined}
         */
        var ready = function(status) {
          if (!(status = el.readyState) || (status === "complete" || (status === "loaded" || status === 4))) {
            listener();
          }
        };
        /**
         * @return {undefined}
         */
        var after = function() {
          el[_src] = src + time;
          iframe(suiteView, el);
        };
        if (!type) {
          return false;
        }
        switch(_true) {
          case type === "h" || type === "html":
            try {
              src = match && i < 10 ? src[rp](/<script /gi, "<script defer=true ") : src;
              _addNode(suiteView, fn(src));
              return fail();
            } catch (expectationResult) {
              return callback("loadHTML", expectationResult);
            }
            break;
          case type === "i" || type === "img":
            el = createElement("img");
            break;
          case type === "s" || (type === "scr" || type === "script"):
            el = doc.createElementNS ? doc.createElementNS(doc.head && doc.head.namespaceURI || "http://www.w3.org/1999/xhtml", "script") : createElement("script");
            el.setAttribute("async", _true);
            el.setAttribute("data-cfasync", value);
            el.setAttribute("type", "text/javascript");
            break;
          default:
            el = createElement("iframe");
            /** @type {boolean} */
            targetNode = node;
            break;
        }
        /** @type {string} */
        el[k][property] = none;
        /** @type {function (string): undefined} */
        el.onload = el.onreadystatechange = el.onerror = ready;
        _setTimeout(after, ms);
        return _true;
      };
      /** @type {function (Object, Object): undefined} */
      self.setStyle = css = function(element, map) {
        var key;
        var j;
        var val;
        var subLn;
        if (!element) {
          return;
        }
        try {
          if (format(element) !== "array" && element[_length]) {
            element = makeArray(element);
          }
          if (format(element) !== "array") {
            /** @type {Array} */
            element = [element];
          }
          subLn = element[_length];
          /** @type {number} */
          j = 0;
          for (;j < subLn;j++) {
            if ("tagName" in element[j]) {
              for (key in map) {
                if (hasOwnProperty(map, key)) {
                  key = key.indexOf("-") > -1 ? camelize(key, value) : key;
                  switch(_true) {
                    case key === subkey:
                      ;
                    case key === "zoom":
                      ;
                    case key === opacity:
                      ;
                    case isNaN(map[key]):
                      val = map[key];
                      break;
                    default:
                      val = map[key] + "px";
                  }
                  element[j][k][key] = val;
                }
              }
            }
          }
        } catch (expectationResult) {
          callback("setStyle", expectationResult);
        }
      };
      /** @type {function (string, string): ?} */
      self.getStyle = _getStyle = function(el, prop) {
        try {
          if (!(el = el && el.tagName ? el : typeof el === "string" ? doc.getElementById(el) : value)) {
            return name;
          }
          var g = global.getComputedStyle ? doc.defaultView.getComputedStyle(el, name).getPropertyValue(prop) : el.currentStyle ? el.currentStyle[camelize(prop)] : name;
          g = !global.getComputedStyle && /border-\w+-width/gi.test(prop) ? g[rp](/thin|medium|thick/, 0) : g;
          return/width|height/gi.test(prop) ? _parseInt(g) : g;
        } catch (expectationResult) {
          callback("getStyle", expectationResult);
        }
      };
      /** @type {function (Object): ?} */
      self.getWH = draw = function(obj) {
        /** @type {null} */
        var _height = name;
        /** @type {null} */
        var _width = name;
        if ("setInterval" in obj) {
          _width = min(docEl.clientWidth || 9E6, global.innerWidth || 9E6);
          _height = min(docEl.clientHeight || 9E6, global.innerHeight || 9E6);
        } else {
          if (obj.nodeType === 9) {
            _width = max(docEl.clientWidth, docEl[implementation], docEl.scrollWidth);
            _height = max(docEl.clientHeight, docEl[val], docEl.scrollHeight);
          } else {
            _height = _getStyle(obj, "height") || obj[val];
            _width = _getStyle(obj, "width") || obj[implementation];
          }
        }
        return{
          width : _parseInt(_width),
          height : _parseInt(_height)
        };
      };
      /** @type {function (Element): ?} */
      self.getOffset = getOffset = function(obj) {
        /** @type {null} */
        var result = name;
        /** @type {number} */
        var curtop = 0;
        /** @type {number} */
        var curleft = 0;
        var zi = size(obj);
        if (obj.getBoundingClientRect) {
          try {
            result = obj.getBoundingClientRect();
          } catch (bl) {
            /** @type {boolean} */
            result = value;
          }
          if (result) {
            return{
              top : floor(round(result[key]) + max(global.pageYOffset || 0, docEl.scrollTop, body.scrollTop, 0) - max(docEl.clientTop, body.clientTop, 0)) + headers[key],
              left : floor(round(result[index]) + max(global.pageXOffset || 0, docEl.scrollLeft, body.scrollLeft, 0) - max(docEl.clientLeft, body.clientLeft, 0)) + headers[index],
              height : floor(result[partName] || obj[val]),
              width : floor(result[attr] || obj[implementation]),
              zIndex : zi
            };
          }
        }
        do {
          curtop += obj.offsetTop;
          curleft += obj.offsetLeft;
        } while (obj = obj.offsetParent);
        return{
          top : ~~curtop,
          left : ~~curleft,
          height : ~~obj[val],
          width : ~~obj[implementation],
          zIndex : zi
        };
      };
      /** @type {function (Element): ?} */
      self.getZindex = size = function(elem) {
        /** @type {Element} */
        var el = elem;
        /** @type {number} */
        var val = 0;
        try {
          if (!self.AT || !self.AT.zIndexOffset) {
            return count;
          }
          do {
            val = _getStyle(el, "z-index");
          } while ((el = el[parentNode]) && (el !== body && (val === "auto" || val === 0)));
        } catch (expectationResult) {
          callback("getZindex", expectationResult);
        }
        return self.AT.zIndexOffset + _parseInt(~~val);
      };
      /** @type {function (Object): ?} */
      self.getImageSrc = style = function(element) {
        return element && (element.currentSrc || (element[_src] || element[method](type))) || "";
      };
      /** @type {function (Element, boolean): ?} */
      self.getHighestZindex = normalize = function(root, dataAndEvents) {
        if (!dataAndEvents && self.highestZindex) {
          return self.highestZindex;
        }
        root = root || body;
        var el;
        var value;
        var i;
        /** @type {number} */
        var max = 1;
        var nodes = root.childNodes;
        var len = nodes.length;
        try {
          /** @type {number} */
          i = 0;
          for (;i < len;i++) {
            el = nodes[i];
            if (el.nodeType !== 1 || !filter(el)) {
              continue;
            }
            /** @type {number} */
            value = ~~_getStyle(el, "z-index");
            if (value > max) {
              /** @type {number} */
              max = value;
            }
            if (el.childNodes.length && (value = normalize(el, _true)) > max) {
              max = value;
            }
          }
        } catch (expectationResult) {
          callback("getHighestZindex", expectationResult);
        }
        return self.highestZindex = max;
      };
      /** @type {function (Object, Object): ?} */
      self.containsEl = contains = function(container, element) {
        /** @type {string} */
        var cdp = "compareDocumentPosition";
        if (cdp in docEl) {
          return(container[cdp](element) & 16) === 16;
        } else {
          if ("contains" in docEl) {
            return container !== element && container.contains(element);
          } else {
            for (;element = element[parentNode];) {
              if (element === container) {
                return node;
              }
            }
          }
        }
        return value;
      };
      /** @type {function (Object, boolean): ?} */
      self.caseCSS = camelize = function(str, target) {
        return target ? str[rp](/([A-Z]{1})/g, function(dataAndEvents, m1) {
          return m1 ? "-" + m1[_toLowerCase]() : dataAndEvents;
        }) : str[rp](/-([a-z]{1})/g, function(failed, result) {
          return result ? result.toUpperCase() : failed;
        });
      };
      /** @type {function (Object): ?} */
      self.isElementVisible = filter = function(el) {
        try {
          /** @type {number} */
          var alpha1 = ~~((_getStyle(el, opacity) || 1) * 100);
          /** @type {number} */
          var alpha2 = ~~(el[k].filter || "alpha(opacity=100)").match(/alpha\(opacity=(\d+)\)/)[1];
          /** @type {boolean} */
          var current = _true;
          var epsilon = self.AT && self.AT.minOpaque ? self.AT.minOpaque : 70;
          /** @type {boolean} */
          var referenceElement = _getStyle(el, visibility) !== HIDDEN;
          /** @type {boolean} */
          var drawTicks = _getStyle(el, property) !== none;
          if (alpha1 < epsilon || alpha2 < epsilon) {
            /** @type {boolean} */
            current = value;
          }
          return current && (referenceElement && drawTicks);
        } catch (expectationResult) {
          callback("isElementVisible", expectationResult);
          return _true;
        }
      };
      /** @type {function (Element, Object): ?} */
      self.evp = setup = function(data, item) {
        item = item || draw(global);
        var value;
        var r;
        var height;
        var length;
        var deleteCount;
        var w2;
        var right;
        var left;
        var targetWidth;
        var result = getOffset(data);
        /** @type {number} */
        var tmp_i = parseInt(self.bodyEl.scrollTop || docEl.scrollTop, 10);
        /** @type {number} */
        var h = parseInt(self.bodyEl.scrollLeft || docEl.scrollLeft, 10);
        var itemPart = item[partName];
        var v = item[attr];
        if (result[key] > tmp_i + itemPart || result[index] > h + v) {
          /** @type {number} */
          value = 0;
        } else {
          if (result[key] > tmp_i && (result[key] + result[partName] < tmp_i + itemPart && (result[index] > h && result[index] + result[attr] < h + v))) {
            /** @type {number} */
            value = 100;
          } else {
            length = max(0, tmp_i - result[key]);
            deleteCount = max(0, result[key] + result[partName] - (tmp_i + itemPart));
            /** @type {number} */
            w2 = result[partName] - (length + deleteCount);
            /** @type {number} */
            r = w2 / (result[partName] / 100);
            right = max(0, h - result[index]);
            left = max(0, result[index] + result[attr] - (h + v));
            /** @type {number} */
            targetWidth = result[attr] - (right + left);
            /** @type {number} */
            height = targetWidth / (result[attr] / 100);
            value = round(min(r, height) * (max(r, height) / 100));
          }
        }
        return value;
      };
      /** @type {function (number, ?, ?): ?} */
      self.openModal = init = function(type, allBindingsAccessor, valueAccessor) {
        try {
          /** @type {null} */
          var options = name;
          var browserEvent = this;
          var token = body;
          var settings = browserEvent.data || {};
          var bu = settings.mfs || value;
          var bo = self.AT && self.AT.tweakOverflow;
          /** @type {null} */
          var result = name;
          /** @type {null} */
          var child = name;
          /** @type {null} */
          var el = name;
          if (self.closeModal) {
            return value;
          }
          if (self[type] && self[type].openAd) {
            return self[type].openAd();
          }
          options = {
            html : function() {
              var data;
              if (allBindingsAccessor) {
                /** @type {number} */
                data = type;
              } else {
                if (/swf/i.test(type)) {
                  data = '<object _CID_ id="_T_" name="_T_" width="100%" height="100%" data="_U_" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" background="transparent" style="background:transparent"><param name="wmode" value="transparent"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="movie" value="_U_"></object>'[rp](/_T_/g, info())[rp](/_CID_/g, result);
                } else {
                  data = '<iframe name="ggmodal" frameborder="0" scroll="no" scrolling="no" allowTransparency="allowTransparency" src="_U_" width="100%" height="100%"></iframe>'[rp](/_U_/g, type);
                }
              }
              return data;
            }(),
            of : [token[k].overflow, docEl[k].overflow],
            mw : settings.mw ? settings.mw : "100%",
            mh : settings.mh ? settings.mh : "100%",
            mc : settings.mcc ? settings.mcc : "/c.gumgum.com/ads/com/gumgum/close-rs.png",
            zi : normalize(name, _true) + 11
          };
          if (bo) {
            /** @type {string} */
            token[k].overflow = HIDDEN;
            if (!!match) {
              /** @type {string} */
              docEl[k].overflow = HIDDEN;
            }
          }
          /**
           * @param {Event} data
           * @return {undefined}
           */
          self.closeModal = function(data) {
            data.stopPropagation();
            if (bo) {
              token[k].overflow = options.of[0];
              if (!!match) {
                docEl[k].overflow = options.of[1];
              }
            }
            view.remove(el, "click");
            success(input, result);
            /** @type {null} */
            self.closeModal = name;
            /** @type {null} */
            options = name;
          };
          result = fn('<div style="_CLEARCSS_"><div style="_CLEARCSS_;position:absolute;width:100%;height:100%">' + options.html + "</div></div>");
          /** @type {string} */
          result[prop] = "GGModal_" + (settings.uid || "StandAlone");
          css(result, {
            position : "fixed",
            zIndex : options.zi,
            top : 0,
            bottom : 0,
            left : 0,
            right : 0,
            background : "transparent url(/c.gumgum.com/ads/com/gumgum/bg/black85.png) repeat scroll 0 0",
            _top : 'expression(eval(document.compatMode && document.compatMode=="CSS1Compat") ? documentElement.scrollTop +(documentElement.clientHeight-window.clientHeight) : document.body.scrollTop +(document.body.clientHeight-window.clientHeight))'
          });
          if (!!settings.mos) {
            css(result, settings.mos);
          }
          child = result.childNodes[0];
          if (!bu && (~~options.mw && ~~options.mh)) {
            css(child, {
              left : "50%",
              top : "50%",
              width : options.mw,
              height : options.mh,
              marginLeft : -(options.mw / 2),
              marginTop : -(options.mh / 2)
            });
          }
          if (!!settings.mss) {
            css(child, settings.mss);
          }
          el = fn('<div style="_CLEARCSS_;position:absolute;top:0;right:0"></div>');
          options.clb = $('<img src="' + options.mc + '" style="_CLEARCSS_;display:block;padding:0;margin:0;border:none;cursor:pointer" />');
          if (settings.mcd) {
            el[id] = $('<span style="_CLEARCSS_;display:block;height:15px;min-width:15px;text-align:center;font:bold 13px/15px monospace;color:#fff;background:#000;border-radius:12px;border:2px solid #fff">&nbsp;</span>');
            /** @type {number} */
            options.to = 0;
            /**
             * @return {undefined}
             */
            options.st = function() {
              if (options.to >= settings.mcd) {
                parseFloat(options.iv);
                el[id] = options.clb;
                view.add(el, "click", self.closeModal);
              } else {
                /** @type {number} */
                el.children[0][id] = (settings.mcd - options.to) / 1E3;
                options.to += 1E3;
                /** @type {number} */
                options.iv = _setTimeout(options.st, 1E3);
              }
            };
            options.st();
          } else {
            el[id] = options.clb;
            view.add(el, "click", self.closeModal);
          }
          if (!!settings.mcs) {
            css(el, settings.mcs);
          }
          _addNode(child, el);
          _addNode(input, result);
          if (valueAccessor) {
            valueAccessor();
          }
          input.focus();
          return value;
        } catch (expectationResult) {
          return!callback("openModal", expectationResult);
        }
      };
      self.container = input = fn('<div style="_CLEARCSS_" id="_GGID_"><br style="display:none"><style>html ._GGID_ *{_CLEARCSS_}@media \x00screen {html ._GGID_ *{-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)" !important}}</style></div>'[rp](/_GGID_/g, E));
      once();
      /** @type {function (boolean): undefined} */
      self.onReady = apply = function(fn) {
        if (fn === _true) {
          ret = _true;
          /** @type {number} */
          var ext = 0;
          for (;ext < c[_length];ext++) {
            c[ext]();
          }
        } else {
          if (fn.call && fn.apply) {
            if (ret) {
              fn();
            } else {
              c.push(fn);
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      render = function() {
        body = body || (doc.body || (jQuery.call(doc, "body")[0] || jQuery.call(doc, "div")[0]));
        if (body) {
          _addNode(body, input);
          self.bodyEl = body;
          if (_getStyle(body, "position") === "static") {
            headers[key] = _getStyle(body, "border-top-width");
            headers[index] = _getStyle(body, "border-left-width");
          } else {
            /** @type {number} */
            headers[key] = _parseInt(_getStyle(body, "margin-top")) * -1;
            /** @type {number} */
            headers[index] = _parseInt(_getStyle(body, "margin-left")) * -1;
          }
          apply(_true);
        } else {
          _setTimeout(render, 100);
        }
      };
      bulk(render);
      return self;
    }({});
  })(window, document);
}

if (window.GUMGUM) {
  (function(self, global, d) {
    if (self.slots) {
      return;
    }
    /** @type {number} */
    self.slots = 1;
    /** @type {boolean} */
    var e = true;
    /** @type {boolean} */
    var result = false;
    /** @type {null} */
    var name = null;
    /** @type {string} */
    var prop = "length";
    /** @type {string} */
    var key = "top";
    /** @type {string} */
    var w = "width";
    /** @type {string} */
    var i = "height";
    /** @type {string} */
    var ontype = "getTime";
    /** @type {string} */
    var part = "getTimezoneOffset";
    /** @type {string} */
    var ev = "mouseenter mouseleave";
    var getLocation = self.euc;
    var compile = self.tpl;
    var cb = self.addNode;
    var callback = self.loadObj;
    var len = self.flashEnabled;
    var url = self.baseUrl;
    var log = self.getJSONP;
    var extend = self.bindCtx;
    var tab = self.evp;
    var $ = self.Bean;
    /** @type {null} */
    var output = name;
    /** @type {null} */
    var options = name;
    /** @type {null} */
    var next = name;
    /** @type {null} */
    var init = name;
    /** @type {null} */
    var fn = name;
    /** @type {null} */
    var info = name;
    /** @type {(Navigator|null)} */
    var nav = top.navigator;
    /** @type {(Console|{log: function (): undefined})} */
    var console = global.console || {
        /**
         * @return {undefined}
         */
        log : function() {
        }
      };
    var cl = self.newEl("div");
    /** @type {string} */
    var origin = global.location.href;
    /** @type {(Array.<string>|boolean)} */
    var deps = origin.match(/#ggslotad=(.+)&ggslot=(.+)$/) || result;
    var ret = self.getWH(global);
    var templates = {};
    $.on(global, "resize", function() {
      ret = self.getWH(global);
      $.fire(global, "slot.scroll");
    });
    try {
      options = {
        pu : getLocation(top.location.href),
        ru : getLocation(top.document.referrer),
        ce : nav.cookieEnabled,
        fs : len,
        bf : self.sbf
      };
    } catch (total) {
      console.log("GumGum Slot Ad", "Initialize", total);
      return{
        /**
         * @return {undefined}
         */
        display : function() {
        }
      };
    }
    /**
     * @return {?}
     */
    output = function() {
      var charset = self.getDigiTrustID();
      return charset ? "&dt=" + charset : "";
    };
    /**
     * @param {Object} item
     * @param {boolean} event
     * @return {undefined}
     */
    next = function(item, event) {
      var o = options;
      /** @type {Date} */
      var cur = new Date;
      var content = url + "/slot?si={:slot:}&pu={:pu:}&ru={:ru:}&ce={:ce:}&fs={:fs:}&bf={:bf:}&lt={:lt:}&to={:to:}" + output();
      if (deps[prop]) {
        if (~~deps[2] === item.slot) {
          o.eid = deps[1];
          content += o.eid ? "&eAdBuyId={:eid:}" : "";
        }
      } else {
        o.id = item.id;
        content += item.id ? "&adBuyId={:id:}" : "";
      }
      o.slot = item.slot;
      o.lt = cur[ontype]();
      o.to = cur[part]();
      log(compile(content, o), function(dataAndEvents) {
        new info(dataAndEvents, o, event);
      }, "cb");
    };
    info = new self.Klass({
      /**
       * @param {Object} data
       * @param {Object} options
       * @param {Element} element
       * @return {undefined}
       */
      initialize : function(data, options, element) {
        var module = this;
        if (!data || (!options || !element)) {
          return;
        }
        /** @type {boolean} */
        module.isHovered = result;
        /** @type {Object} */
        module.data = data;
        module.adid = data.ad ? data.ad.i : result;
        /** @type {Object} */
        module.options = options;
        /** @type {Element} */
        module.container = element;
        module.build();
        module.firePixels();
        module.getEventResources("IMPRESSION");
        module.setHoverTracking();
        module.getAdmin();
      },
      /**
       * @return {undefined}
       */
      build : function() {
        var msg = this;
        var data = msg.data;
        var point = data.ad || data.pb;
        var el = msg.container;
        var path = point.m;
        if (point) {
          if (point.ii && !/\x3c!--iframe--\x3e/im.test(path)) {
            msg.adUnit = self.iframeHTML(path, el);
          } else {
            msg.adUnit = self.parseHTML("<div style='display:block;width:100%;height:100%'>" + path + "</div>");
            cb(el, msg.adUnit);
          }
          cb(el, self.parseHTML('<img src="/c.gumgum.com/images/pixel.gif" class="ad-standalone-img" style="display:none;visibility:hidden;">'));
          if (self.subs.slot) {
            $.fire(self.container, "gumgum.slot.load", {
              container : el,
              ad : self.getOffset(msg.adUnit)
            });
          }
          msg.triggerImpression();
        }
        if (data.ad) {
          /**
           * @return {undefined}
           */
          templates[msg.data.ad.i] = function() {
            if (!data.viewable50 && tab(msg.adUnit, ret) >= 50) {
              msg.triggerViewability(50);
            }
            if (!data.viewable100 && tab(msg.adUnit, ret) === 100) {
              msg.triggerViewability(100);
            }
          };
          $.on(global, "slot.scroll", templates[msg.data.ad.i]);
          $.on(global, "scroll", function() {
            $.fire(global, "slot.scroll");
          });
          templates[msg.data.ad.i]();
        }
      },
      /**
       * @return {undefined}
       */
      firePixels : function() {
        /** @type {number} */
        var i = 0;
        /** @type {null} */
        var options = name;
        var self = this;
        var d = self.data;
        var tag = d.pxs;
        if (tag && (tag.scr && tag.scr[prop])) {
          tag = tag.scr;
          for (;i < tag[prop];i++) {
            options = tag[i];
            callback(options.u, {
              parent : self.container,
              type : options.t,
              delay : options.d
            });
          }
        }
      },
      /**
       * @return {undefined}
       */
      setHoverTracking : function() {
        var me = this;
        /** @type {boolean} */
        me.hoverTO = result;
        if (me.adid && me.adUnit) {
          $.add(me.container, ev, extend(me, me.onMouseHover));
        }
      },
      /**
       * @param {Event} event
       * @return {undefined}
       */
      onMouseHover : function(event) {
        var self = this;
        if (self.isHovered) {
          $.off(self.container, ev);
        } else {
          if (event.type === "mouseenter" || event.type === "mouseover") {
            /** @type {number} */
            self.hoverTO = global.setTimeout(extend(self, self.triggerHoverEvent), 500);
          } else {
            if (event.type === "mouseleave" || event.type === "mouseover") {
              global.clearTimeout(self.hoverTO);
            }
          }
        }
      },
      /**
       * @return {undefined}
       */
      triggerHoverEvent : function() {
        var that = this;
        var options = that.options;
        options.t = self.trackingId;
        options.ab = that.data.ad.i;
        self.loadImg(url + compile("/ad/hover.gif?t={:t:}&ab={:ab:}&pu={:pu:}&bf={:bf:}", options), that.container);
        /** @type {boolean} */
        that.isHovered = e;
        $.off(that.container, ev);
      },
      /**
       * @return {undefined}
       */
      triggerImpression : function() {
        var me = this;
        var result = me.data.ad;
        if (result && self.has(result, "ipu")) {
          callback(result.ipu, {
            type : "image",
            parent : me.container
          });
        }
      },
      /**
       * @param {number} opt_attributes
       * @return {?}
       */
      triggerViewability : function(opt_attributes) {
        opt_attributes = opt_attributes || 50;
        var elem = this;
        var a = elem.data;
        var options = elem.options;
        var data;
        options.t = self.trackingId;
        options.ab = elem.data.ad.i;
        data = url + compile("/ad/viewable" + opt_attributes + "?t={:t:}&ab={:ab:}&pu={:pu:}&bf={:bf:}", options);
        global.setTimeout(function() {
          if (a.viewable100 && opt_attributes === 100 || a.viewable50 && opt_attributes === 50) {
            return result;
          }
          if (tab(elem.adUnit, ret) < opt_attributes) {
            return;
          }
          self.loadImg(data);
          if (opt_attributes >= 50) {
            /** @type {boolean} */
            a.viewable50 = e;
          }
          if (opt_attributes === 100) {
            $.off(global, "scroll slot.scroll", templates[options.ab]);
            /** @type {boolean} */
            a.viewable100 = e;
          }
        }, 1E3);
        return e;
      },
      /**
       * @param {string} string
       * @return {undefined}
       */
      getEventResources : function(string) {
        /** @type {number} */
        var i = 0;
        /** @type {null} */
        var options = name;
        var self = this;
        var o = self.data;
        var data = o.scr;
        if (data && data[prop]) {
          for (;i < data[prop];i++) {
            options = data[i];
            if (options.e === string && options.u) {
              callback(options.u, {
                parent : self.container,
                type : options.t,
                delay : options.d
              });
            }
          }
        }
      },
      /**
       * @return {undefined}
       */
      getAdmin : function() {
        var options = this;
        var data = options.data;
        if (data.bdg) {
          data.bdg.pb = data.pb;
          data.bdg.m = data.ad && data.ad.m || "";
          self.Stack.push({
            type : "SlotBadge",
            data : data.bdg,
            unit : options.container
          });
          if (!self.BD && (!self.pubdata && data.bdg.slot)) {
            init(data.bdg.slot.t);
          }
        }
      }
    });
    /**
     * @param {Object} type
     * @return {undefined}
     */
    init = function(type) {
      /** @type {string} */
      var myUrl = location.href;
      var data = self.getWH(global);
      var query = self.pubdata = self.toJSON({
        t : type,
        v : 1,
        r : self.revision,
        fs : len,
        rf : getLocation(d.referrer),
        pu : getLocation(myUrl),
        ce : navigator.cookieEnabled,
        vp : {
          ii : global[key] && top !== global,
          w : data[w],
          h : data[i]
        },
        sc : {
          w : global.screen[w],
          h : global.screen[i],
          d : global.devicePixelRatio || 1
        }
      });
      log(url + "/badge/main?pubdata=" + query, function(ev) {
        if (ev.bdg && !self.BD) {
          self.loadScript(url + "/javascripts/ggadmin.js", self.gContainer, function() {
            self.startBadges(ev.bdg);
          }, result);
        }
      }, "callback");
    };
    /**
     * @param {Object} e
     * @return {?}
     */
    self.display = function(e) {
      var pos = self.byTag.call(d, "script");
      var start = pos[pos[prop] - 1];
      var end = e.container || start.parentNode;
      return start && end ? next(e, end) : result;
    };
    /**
     * @return {undefined}
     */
    fn = function() {
      /** @type {string} */
      var attributeName = "data-gg-slot";
      /** @type {number} */
      var i = 0;
      /** @type {null} */
      var element = name;
      /** @type {null} */
      var child = name;
      var res = self.bySelector("[" + attributeName + "]");
      cb(self.bodyEl, cl);
      for (;i < res[prop];i++) {
        element = res[i];
        if (element.dataset && element.dataset.ggSlot) {
          /** @type {number} */
          child = ~~element.dataset.ggSlot;
          delete element.dataset.ggSlot;
        } else {
          /** @type {number} */
          child = ~~element.getAttribute(attributeName);
          element.removeAttribute(attributeName);
        }
        if (child) {
          next({
            slot : child
          }, res[i]);
        }
      }
    };
    self.onReady(fn);
    global.GumGumAd = global.GUMGUM;
  })(GUMGUM, window, document);
}

if (window.GUMGUM) {
  (function(self, global, doc, no) {
    /**
     * @param {string} message
     * @return {undefined}
     */
    function CustomError(message) {
      /** @type {string} */
      this.name = "GumGum Error";
      /** @type {string} */
      this.message = message;
    }
    if (self.ggv2) {
      return;
    }
    /** @type {number} */
    self.ggv2 = 1;
    /** @type {null} */
    var context = null;
    /** @type {boolean} */
    var element = false;
    /** @type {boolean} */
    var _true = true;
    /** @type {string} */
    var _length = "length";
    /** @type {string} */
    var method = "push";
    /** @type {string} */
    var id = "style";
    /** @type {string} */
    var _width = "width";
    /** @type {string} */
    var _height = "height";
    /** @type {string} */
    var path = "display";
    /** @type {string} */
    var prop = "className";
    /** @type {string} */
    var propertyName = "innerHTML";
    /** @type {string} */
    var parentNode = "parentNode";
    /** @type {string} */
    var _top = "top";
    /** @type {string} */
    var k = "left";
    /** @type {string} */
    var RIGHT = "right";
    /** @type {string} */
    var bottom = "bottom";
    /** @type {string} */
    var val = "block";
    /** @type {string} */
    var lt = "none";
    /** @type {string} */
    var visibility = "visibility";
    /** @type {string} */
    var rootProperty = "zIndex";
    /** @type {string} */
    var undef = "hidden";
    /** @type {string} */
    var width = "offsetWidth";
    /** @type {string} */
    var d = "offsetHeight";
    /** @type {string} */
    var o = "opacity";
    /** @type {string} */
    var VISIBLE = "visible";
    /** @type {string} */
    var i = "overflow";
    /** @type {string} */
    var field = "getTime";
    /** @type {string} */
    var getTimezoneOffset = "getTimezoneOffset";
    /** @type {string} */
    var replace = "replace";
    /** @type {string} */
    var cssprop = "toLowerCase";
    /** @type {string} */
    var idx = "data";
    /** @type {string} */
    var _container = "container";
    /** @type {string} */
    var name = "element";
    /** @type {string} */
    var test = "cacheImages";
    /** @type {string} */
    var op = "cacheImagesIndex";
    /** @type {string} */
    var j = "cacheImagesNatural";
    var math = global.Math;
    var toVLQSigned = math.max;
    var floor = math.floor;
    var addClass = math.random;
    var ceil = math.ceil;
    var abs = math.abs;
    var validate = self.getType;
    var _toJSON = self.toJSON;
    var option = self.newEl;
    var append = self.addNode;
    var _setTimeout = self.rmNode;
    var locate = self.inDOM;
    var is = self.byId;
    var _bySelector = self.bySelector;
    var _ = self.byTag;
    var $ = self.parseHTML;
    var max = self.iframeHTML;
    var equal = self.tpl;
    var getComputedStyle = self.getStyle;
    var css = self.setStyle;
    var _getWH = self.getWH;
    var empty = self.getOffset;
    var text = self.getImageSrc;
    var w = self.getHighestZindex;
    var filter = self.containsEl;
    var prepend = self.isElementVisible;
    var extend = self.evp;
    var createElement = self.shrinkURL;
    var cb = self.onError;
    var cp = self.getJSONP;
    var successCallback = self.getDigiTrustID;
    var _loadScript = self.loadScript;
    var _loadImg = self.loadImg;
    var trigger = self.loadObj;
    var proxy = self.loadHTML;
    var result = self.reportAd;
    var openModal = self.openModal;
    /** @type {string} */
    var param = global.ggaffid ? "&ai=" + encodeURIComponent(global.ggaffid) : "";
    var _baseUrl = self.baseUrl;
    var currentTarget = self.sbf;
    /** @type {Element} */
    var documentElement = doc.documentElement;
    var _flashEnabled = self.flashEnabled;
    var target = self[_container];
    var messages = self.ieVersion;
    var from = self.infoModalMinHeight;
    var to = self.infoModalMinWidth;
    var item = self.infoModalOps;
    /** @type {string} */
    var event = "/c.gumgum.com/ads/com/gumgum/gumgum-info.html";
    var ele = self.msie;
    var r = self.revision;
    /** @type {number} */
    var end = 850;
    var remaining = self.swfcid;
    var ggv2id = global.ggv2id;
    /** @type {string} */
    var av = '<img src="/c.gumgum.com/images/pixel.gif" class="ad-standalone-img" alt="gumgum-verify" style="pointer-events:none!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;opacity:0!important;filter:alpha(opacity=0);z-index:-1" />';
    /** @type {null} */
    var stats = context;
    /** @type {number} */
    var zi = 2147483640;
    var tick;
    var start;
    var scroll;
    var log;
    var stop;
    var walk;
    var update;
    var done;
    var callback;
    var remove;
    var report;
    var _parse;
    var handle;
    var ready;
    var create;
    var success;
    var init;
    var load;
    var errorCB;
    var fix;
    var run;
    var setup;
    /**
     * @return {undefined}
     */
    var n = function() {
    };
    /**
     * @param {?} obj
     * @param {number} prop
     * @return {?}
     */
    var hasOwn = function(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    var fn = self.euc;
    var getTime = self.getTS;
    /** @type {(Navigator|null)} */
    var nav = global.navigator;
    /** @type {Location} */
    var location = global.location;
    /** @type {string} */
    var protocol = location.protocol;
    /** @type {boolean} */
    var a9 = protocol === "https:";
    /** @type {function (this:Window, (Function|null|string), number, ...[*]): number} */
    var next = global.setTimeout;
    /** @type {function (this:Window, (null|number|undefined)): ?} */
    var _clearTimeout = global.clearTimeout;
    /** @type {function (this:Window, (Function|null|string), number, ...[*]): number} */
    var require = global.setInterval;
    /** @type {function (this:Window, (null|number|undefined)): ?} */
    var isUndefinedOrNull = global.clearInterval;
    /**
     * @return {undefined}
     */
    var noop = function() {
    };
    /** @type {(Console|{log: function (): undefined, warn: function (): undefined})} */
    var results = global.console || {
        /** @type {function (): undefined} */
        log : noop,
        /** @type {function (): undefined} */
        warn : noop
      };
    /** @type {string} */
    var route = no;
    /** @type {string} */
    var timestamp = no;
    /** @type {boolean} */
    var openElement = _true;
    var array = {};
    var plugins = {};
    var elements = {};
    var args;
    var parent;
    var options;
    var Image;
    var Player;
    var cs = self.Emile;
    var el = self.Bean;
    var len = self.Klass;
    /** @type {Error} */
    CustomError.prototype = new Error;
    /** @type {function (string): undefined} */
    CustomError.prototype.constructor = CustomError;
    /**
     * @return {?}
     */
    errorCB = function() {
      if (!ggv2id) {
        throw new CustomError("ggv2id variable not set");
      }
      return _true;
    };
    /**
     * @param {?} qualifier
     * @param {?} event
     * @return {?}
     */
    fix = function(qualifier, event) {
      /** @type {boolean} */
      var result = element;
      switch(_true) {
        case /js.moatads.com/.test(qualifier):
          result = event.moat;
          break;
        default:
          result = event.fallback || target;
      }
      return result;
    };
    /**
     * @param {?} parameters
     * @param {Array} o
     * @param {Object} opt_attributes
     * @return {undefined}
     */
    run = function(parameters, o, opt_attributes) {
      var i;
      var list = _.call(parameters, "iframe");
      /**
       * @param {Event} e
       * @return {undefined}
       */
      var start = function(e) {
        var t = e.target;
        var w = t.contentWindow;
        /**
         * @param {?} width
         * @return {?}
         */
        var fill = function(width) {
          return css(t, width);
        };
        var text = self.bindCtx(item, value);
        var out;
        i = addClass().toString(36).substring(2);
        try {
          out = new URL(e.target.src);
          w.postMessage({
            ggt : i
          }, out.origin);
          /** @type {Array} */
          plugins[i] = o;
          elements[i] = opt_attributes || {};
          /** @type {function (?): ?} */
          elements[i][id] = fill;
          elements[i].openModal = text;
        } catch (err) {
          cb("createPostMessageConnection", err.message);
        }
      };
      /** @type {number} */
      var j = 0;
      var n = list.length;
      var ev;
      setup();
      for (;j < n;j++) {
        ev = list[j];
        if (ev.src && ev.src !== "about:blank") {
          el.on(ev, "load", start);
        }
      }
    };
    /**
     * @return {undefined}
     */
    setup = function() {
      /** @type {function (): undefined} */
      setup = n;
      el.on(global, "message", function(elem) {
        var options = elem.data;
        var key = options && options.ggt;
        var index = options && options.fn;
        var applyArgs = options && options.params || [];
        if (plugins[key] && elements[key][index]) {
          elements[key][index].apply(context, applyArgs);
        }
      });
    };
    /**
     * @param {Array} el
     * @param {Object} data
     * @return {?}
     */
    scroll = function(el, data) {
      var types = stats || _getWH(global);
      /** @type {number} */
      var _scrollTop = parseInt(self.bodyEl.scrollTop || documentElement.scrollTop, 10);
      /** @type {number} */
      var _scrollLeft = parseInt(self.bodyEl.scrollLeft || documentElement.scrollLeft, 10);
      var ts = types[_height];
      var idx = types[_width];
      var t = _scrollTop + ts;
      var determinant = _scrollLeft + idx;
      var a = data[_top];
      var v = data[k];
      var x = data[_height] || 1;
      var d = data[_width];
      var c = a + x;
      var u = v + d;
      /** @type {boolean} */
      var program = a > _scrollTop && a < t;
      /** @type {boolean} */
      var inverse = c > _scrollTop && c < t;
      /** @type {boolean} */
      var param = c > t && a < _scrollTop;
      /** @type {boolean} */
      var err = v > _scrollLeft && v < determinant;
      /** @type {boolean} */
      var err2 = u > _scrollLeft && u < determinant;
      /** @type {boolean} */
      var common = v < _scrollLeft && u > determinant;
      var base = options.inViewRatio;
      var by2 = v + d * base;
      var integer = a + x * base;
      if (!prepend(el)) {
        return element;
      }
      if (inverse && err2) {
        return _true;
      }
      if (!base || base > 1) {
        return(program || inverse) && (err || err2);
      }
      if ((param || common) && (by2 < determinant && integer < _scrollTop)) {
        return _true;
      }
      return by2 > _scrollLeft && by2 < determinant && (integer > _scrollTop && integer < t);
    };
    /**
     * @param {Array} data
     * @param {Object} e
     * @return {?}
     */
    done = function(data, e) {
      /** @type {null} */
      var i = context;
      /** @type {boolean} */
      var selectElement = element;
      /** @type {null} */
      var item = context;
      /** @type {null} */
      var current = context;
      /**
       * @param {string} index
       * @return {?}
       */
      var callback = function(index) {
        /** @type {Array} */
        var string = [];
        try {
          string = _bySelector(index);
        } catch (bR) {
          if (!array[index]) {
            /** @type {string} */
            array[index] = 'GumGum: invalid CSS selector: "' + index + '"';
            results.warn(array[index]);
          }
        }
        return string;
      };
      if (typeof data === "string") {
        /** @type {Array} */
        data = [data];
      }
      current = callback(data.join(","));
      /** @type {number} */
      i = 0;
      for (;i < current[_length] && (item = current[i]);i += 1) {
        if (filter(item, e)) {
          /** @type {boolean} */
          selectElement = _true;
          break;
        }
      }
      return selectElement;
    };
    /** @type {function (): ?} */
    self.reloadInScreen = remove = function() {
      if (!errorCB()) {
        return;
      }
      if (openElement && (timestamp !== no && (timestamp = getTime() - timestamp) < 3E3)) {
        cb("reloadInScreen", {
          message : "reload inscreen called " + timestamp + "ms ago"
        });
      }
      timestamp = getTime();
      el.fire(target, "inscreen.badge.close");
      if (route) {
        self[route].closeAd(_true);
      }
      var type = is("PassbackWrapperA");
      if (type && filter(target, type)) {
        _setTimeout(context, type);
      }
      _loadScript(self.baseUrl + "/services/get?callback=GUMGUM.startServices&product=IN_SCREEN&pubdata=" + self.pubdata + "&bf=" + self.sbf + "&lt=" + getTime() + "&to=" + (new Date).getTimezoneOffset() + self.affiliateId, target, context, element);
      return element;
    };

    /**
     * @return {undefined}
     */
    success = function() {
      /** @type {string} */
      var current = location.href;
      var data = stats = self.getWH(global);
      var _pubdata = {
        t : ggv2id, //广告位id
        v : 1, //
        r : r, //脚本版本号
        fs : _flashEnabled, //浏览器是否支持flash插件
        rf : fn(doc.referrer), //编码后的当前文档来源URL
        pu : fn(current), //编码后的当前页完整URL
        ce : nav.cookieEnabled, // 浏览器是否启用cookies
        vp : {
          ii : global[_top] && top !== global,//判断当前窗口否在一个iframe中
          w : data[_width], //可见区域宽度
          h : data[_height] //可见区域高度
        },
        sc : {
          w : global.screen[_width], //设备宽
          h : global.screen[_height], //设备高
          d : global.devicePixelRatio || 1 //设备像素比
        }
      };
      /** @type {Date} */
      var _timestamp = new Date;
      var _eAdBuyId = (current.match(/#ggad=(.+)$/) || [context, element])[1];
      var fix = successCallback();
      if (fix) {
        e.dt = fix;
      }
      /** @type {boolean} */
      item[idx].mfs = data[_width] < to || data[_height] < from;
      if (param) {
        e.ai = global.ggaffid;
      }
      self.pubdata = _toJSON(_pubdata);
      _loadScript(_baseUrl + "/services/get?callback=GUMGUM.startServices&pubdata=" + self.pubdata + "&bf=" + currentTarget + "&lt=" + +_timestamp + "&to=" + _timestamp[getTimezoneOffset]() + (_eAdBuyId ? "&eAdBuyId=" + _eAdBuyId : ""), target, context, element);
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.startServices = function(data) {
      /** @type {boolean} */
      var bL = !options && (!!data.ads || !!data.trk);
      var bK = data.nat && data.nat.active;
      /** @type {string} */
      var _deviceType = data.pag && data.pag.mobile ? "mobile" : "desktop";
      //Todo:?
      if (data.spa && data.spa.active) {
        self.saad = new Player(data.spa);
      }
      if (data.spa && data.spa.bdg) {
        self.Stack.push({
          type : "SponsoredAccessBadge",
          data : data.spa
        });
      }

      if (bK) {
        handle(data.nat);
      }
      if (data.ins) {
        init(data.ins, data);
      }
      if (data.ads && !parent) {
        report(data.ads);
      }
      if (data.pxs && !args) {
        load(data.pxs, _deviceType);
      }
      if (data.pag) {
        if (data.pag.css) {
          proxy('<div id="GG_PAG" style="display:none"><br style="display:block"><style>' + data.pag.css[replace](/GGID/g, target.id) + "</style></div>", target);
        }
        if (data.pag.js) {
          proxy("\x3c!--iframe--\x3e<script>(function (win, doc, G, undef) {" + data.pag.js[replace](/GGID/g, target.id) + "}(top, top.document, top.GUMGUM));\x3c/script>\x3c!--iframe--\x3e", target);
        }
      }
      self.pvid = data.pag && data.pag.pvid || (self.pvid || "0-0");
      if (data.bdg && !self.BD) {
        _loadScript(_baseUrl + "/javascripts/ggadmin.js", target, function() {
          self.startBadges(data.bdg);
          if (bL) {
            create(data.at);
          }
          if (bK) {
            self.renderNativeAd = ready;
          }
        }, element);
      } else {
        if (bL) {
          create(data.at);
        }
      }
    };
    /**
     * @param {string} cs
     * @return {?}
     */
    _parse = function(cs) {
      /** @type {number} */
      var i = 0;
      var map = cs.split(",");
      /** @type {number} */
      var resp = 0;
      for (;i < map[_length];i++) {
        try {
          resp = _bySelector(map[i])[0];
          if (resp) {
            return resp;
          }
        } catch (bM) {
          continue;
        }
      }
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    handle = function(data) {
      /** @type {null} */
      var i = context;
      /** @type {string} */
      var _location = location.href;
      /** @type {null} */
      var n = context;
      /** @type {null} */
      var obj = context;
      var _eAdBuyId = (_location.match(/#ggad=(.+)$/) || [context, element])[1];
      var result = {
        lt : getTime(),
        to : +(new Date).getTimezoneOffset(),
        pu : fn(_location),
        ru : doc.referrer,
        ce : nav.cookieEnabled,
        fs : _flashEnabled,
        bf : currentTarget,
        forced : _eAdBuyId ? "&eAdBuyId=" + _eAdBuyId : ""
      };
      /**
       * @param {string} obj
       * @return {undefined}
       */
      var get = function(obj) {
        if (obj && (obj.id && obj.cs)) {
          result.ni = obj.id;
          self.xhr({
            url : _location + equal("/native/imp?ni={:ni:}&pu={:pu:}&ru={:ru:}&ce={:ce:}&fs={:fs:}&bf={:bf:}&lt={:lt:}&to={:to:}{:forced:}", result),
            /** @type {function (XMLHttpRequest): undefined} */
            success : done,
            withCredentials : _true
          });
        }
      };
      /**
       * @param {XMLHttpRequest} errors
       * @return {undefined}
       */
      var done = function(errors) {
        try {
          ready(JSON.parse(errors.responseText));
        } catch (modelData) {
          cb("NativeAdCallback", modelData);
        }
      };
      if (data.plc && (n = data.plc[_length])) {
        /** @type {number} */
        i = 0;
        for (;i < n && (obj = data.plc[i]);i++) {
          if (_parse(obj.cs)) {
            get(obj);
          }
        }
      }
    };
    /**
     * @param {string} params
     * @return {?}
     */
    ready = function(params) {
      var options = params.ad;
      /** @type {null} */
      var t = context;
      /** @type {null} */
      var e = context;
      var id = "GGNA_" + getTime();
      /** @type {string} */
      var timeoutKey = "native";
      var value = options.cs;
      if (!(options && (value && options.am))) {
        if (params.bdg) {
          self.Stack.push({
            type : "NativeBadge",
            data : params.bdg
          });
        }
        return element;
      }
      t = _parse(value);
      if (!t) {
        return element;
      }
      try {
        e = $(options.am.replace(/GGUID/g, id));
        e.id = id;
        e[prop] += " ggnative";
        el.one(e, "click", "[href], [onclick]", function() {
          _loadImg(options.cu, e, element, _true);
        });
        if (self.subs[timeoutKey]) {
          el.fire(target, "gumgum.native.load", {
            ad : empty(e)
          });
        }
        if (params.pxs && params.pxs.scr) {
          self.loadPixels(params.pxs && params.pxs.scr, {
            gguid : id
          });
        }
        if (params.scr) {
          self.loadPixels(params.scr, {
            gguid : id,
            evt : "IMPRESSION"
          });
        }
        if (params.bdg) {
          params.unit = e;
          self.Stack.push({
            type : "NativeBadge",
            data : params
          });
        }
        return t[parentNode].insertBefore(e, t.nextSibling);
      } catch (modelData) {
        cb("renderNativeAd", modelData);
      }
    };
    /**
     * @param {boolean} item
     * @param {Object} bindingContext
     * @return {undefined}
     */
    init = function(item, bindingContext) {
      var i = "ad_is_" + getTime();
      var data = item ? item.ad : context;
      /** @type {null} */
      var origContext = context;
      /** @type {null} */
      var container = context;
      /** @type {null} */
      var a = context;
      /** @type {null} */
      var options = context;
      /** @type {null} */
      var val = context;
      /** @type {null} */
      var j = context;
      /** @type {null} */
      var nodes = context;
      var result = {
        t : ggv2id,
        ab : data ? data.i : context,
        pv : bindingContext.pag && bindingContext.pag.pvid,
        pu : fn(location.href),
        bf : currentTarget
      };
      var done = {};
      /**
       * @param {Object} e
       * @param {(Object|string)} element
       * @return {undefined}
       */
      var start = function(e, element) {
        var s = getComputedStyle(self.isad, "width");
        var elements = element ? getComputedStyle(element, "width") : 0;
        var json = s > elements ? self.isad : element;
        if (e && e.type === "resize") {
          stats = _getWH(global);
        }
        if (!done[50] && self.evp(json, stats) >= 50) {
          onComplete(50, json);
        }
        if (!done[100] && self.evp(json, stats) === 100) {
          onComplete(100, json);
        }
      };
      /**
       * @param {number} id
       * @param {?} event
       * @return {undefined}
       */
      var onComplete = function(id, event) {
        var data = result;
        var missing;
        /** @type {boolean} */
        done[id] = _true;
        data.pct = id || 50;
        missing = _baseUrl + equal("/ad/viewable{:pct:}?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + param, data);
        next(function() {
          if (extend(event, stats) < data.pct) {
            return;
          }
          _loadImg(missing);
          if (data.pct === 100) {
            el.off(global, "inscreen.scroll inscreen.resize", start);
          }
        }, 1E3);
      };
      if (data && data.m) {
        origContext = item.zi || zi - 2;
        container = $('<span id="' + i + '_CONTAINER" style="position:fixed;bottom:0;left:0;right:0;width:100%">' + av + "</span>");
        append(target, container);
        a = data.m[replace](/GGUID/g, i);
        if (data.ii && !/\x3c!--iframe--\x3e/im.test(a)) {
          options = max(a, container);
        } else {
          options = append(container, $(a));
        }
        if (ele && (messages < 10 && !data.h)) {
          nodes = container.lastElementChild || container.childNodes[container.childNodes.length - 1];
          /** @type {number} */
          data.h = nodes && nodes.nodeType === 1 ? parseInt(nodes[id][key], 10) : 100;
        }
        if (data.h) {
          /** @type {string} */
          container[id][_height] = data.h + "px";
        }
        container[id].zIndex = origContext;
        if (self.subs.inscreen) {
          el.fire(target, "gumgum.inscreen.load", {
            ad : empty(container)
          });
        }
        (function(route) {
          return route && (self[route] && (self[route].closeAd && self[route].closeAd(_true)));
        })(route);
        route = i;
        self[i] = {};
        self[i].el = self.isad = container;
        /**
         * @param {boolean} _true
         * @return {undefined}
         */
        self[i].closeAd = function(_true) {
          if (!_true) {
            _loadImg(_baseUrl + equal("/ad/close?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + param, result));
          }
          el.off(container, "inscreen");
          if (filter(target, self[i].el)) {
            _setTimeout(target, self[i].el);
          }
          self[i] = self.isad = no;
          /** @type {string} */
          route = no;
          if (self.subs.inscreen) {
            el.fire(target, "gumgum.inscreen.close", {});
          }
        };
        /**
         * @return {?}
         */
        self[i].triggerHover = function() {
          if (!self.isad) {
            return element;
          }
          _loadImg(_baseUrl + equal("/ad/hover.gif?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + param, result), container);
          /** @type {boolean} */
          self[i].isHovered = true;
          el.off(container, "mouseenter mouseleave");
        };
        el.on(container, "mouseenter", function() {
          if (!self[i].isHovered) {
            /** @type {number} */
            self[i].hoverTO = next(self[i].triggerHover, 500);
          }
        });
        el.on(container, "mouseleave", function() {
          _clearTimeout(self[i].hoverTO);
        });
        el.on(self.isad, "inscreen.ad.report", function() {
          result.call({
            data : data,
            element : self[i].el
          });
        });
        /**
         * @param {(Object|boolean|number|string)} message
         * @param {(Object|boolean|number|string)} context
         * @return {undefined}
         */
        self[i].showInfo = function(message, context) {
          _loadImg(_baseUrl + equal("/ad/info?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + param, result));
          openModal.call(context || item, message || event);
        };
        if (data.ipu) {
          trigger(data.ipu, {
            parent : target,
            type : "img",
            delay : data.id,
            _true : element
          });
        }
        if (item.asc && (item.asc.scr && item.asc.scr[ii])) {
          nodes = item.asc.scr;
          /** @type {number} */
          j = 0;
          for (;j < nodes[ii];j++) {
            if (nodes[j].e === "IMPRESSION" && nodes[j].u) {
              nodes[j].p = fix(nodes[j].u, {
                moat : self.isad
              });
              trigger(nodes[j].u[replace](/GGUID/ig, i), {
                parent : nodes[j].p,
                type : nodes[j].t,
                delay : nodes[j].d
              });
            }
          }
        }
        el.on(global, "inscreen.scroll inscreen.resize", start, options);
        el.on(global, "scroll resize", function(v) {
          el.fire(global, "inscreen." + v.type, v);
        });
        el.fire(global, "inscreen.scroll", {});
      }
      if (item.pxs && (item.pxs.scr && item.pxs.scr[ii])) {
        nodes = item.pxs.scr;
        /** @type {number} */
        j = 0;
        for (;j < nodes[ii];j++) {
          if (nodes[j].u) {
            trigger(nodes[j].u[replace](/GGUID/ig, i), {
              parent : target,
              type : nodes[j].t
            });
          }
        }
      }
      if (item.bdg) {
        val = item.ad && item.ad.m || "";
        self.Stack.push({
          type : "InScreenBadge",
          data : item.bdg,
          unit : self.isad,
          om : val
        });
        /** @type {boolean} */
        openElement = element;
      }
    };
    /**
     * @param {Object} data
     * @param {string} key
     * @return {undefined}
     */
    load = function(data, key) {
      /**
       * @param {Object} message
       * @return {undefined}
       */
      var log = function(message) {
        /** @type {string} */
        var val = "/pixel.quantserve.com/pixel/" + message.qac + ".gif?labels=" + message.qsg;
        _loadImg(val, args[_container]);
        args.log[method](val);
      };
      /**
       * @return {undefined}
       */
      var onLoad = function() {
        var result;
        var i;
        var href;
        var ret;
        var b7;
        var win;
        var b3;
        /** @type {Array} */
        var results = [];
        var val = "//map.media6degrees.com/orbserv/aopix?pixId=1927&cb=" + floor(addClass() * 9999999999);
        /** @type {number} */
        b7 = 0;
        for (;3 > b7;++b7) {
          switch(b7) {
            case 0:
              /** @type {string} */
              ret = "top";
              /** @type {Window} */
              win = top;
              break;
            case 1:
              /** @type {string} */
              ret = "par";
              win = parent;
              break;
            case 2:
              /** @type {string} */
              ret = "win";
              /** @type {Window} */
              win = window;
              break;
          }
          /** @type {number} */
          href = 0;
          for (;2 > href;++href) {
            /** @type {string} */
            result = "";
            try {
              /** @type {string} */
              result = encodeURIComponent(0 === href ? win.location.href : win.document.referrer);
            } catch (b5) {
            }
            /** @type {number} */
            b3 = 0;
            /** @type {number} */
            i = 0;
            for (;results[ii] > i;++i) {
              if (result === results[i]) {
                /** @type {number} */
                b3 = 1;
                break;
              }
            }
            if (1 > b3) {
              /** @type {string} */
              results[results[ii]] = result;
              val += "&" + ret + (0 === href ? "Href=" : "Refer=") + result;
            }
          }
        }
        _loadImg(val, args[_container]);
        args.log[method](val);
      };
      /**
       * @return {undefined}
       */
      var run = function() {
        var cache = option("iframe");
        var chunk = addClass();
        /** @type {string} */
        cache[id][visibility] = undef;
        /** @type {string} */
        cache[id][_width] = "1px";
        /** @type {string} */
        cache[id][_height] = "1px";
        /** @type {boolean} */
        cache.frameborder = element;
        append(args[_container], cache);
        args.log[method](cache.src = "//dp2.33across.com/ps/?tt=iframe&pid=242&cgn=16066&_=" + chunk);
      };
      /**
       * @param {?} e
       * @param {?} values
       * @param {?} message
       * @param {?} fn
       * @param {number} _url
       * @return {undefined}
       */
      var _load = function(e, values, message, fn, _url) {
        var last = $('<iframe name="__bkframe" style="_CLEARCSS_" height="0" width="0" frameborder="0"></iframe>');
        var data = {
          desktop : {
            u : "/www.bkrtx.com/js/bk-static.js",
            /**
             * @return {undefined}
             */
            c : function() {
              /** @type {string} */
              var i = "bk_addPageCtx";
              if (global[i]) {
                global[i]("vertical", e);
                global[i]("trackingId", values);
                global[i]("domain", message);
                global[i]("visitorId", fn);
                global.bk_doJSTag("4651.html", _url || 4);
              }
            }
          },
          mobile : {
            u : "//tags.bkrtx.com/js/bk-coretag.js",
            /**
             * @return {undefined}
             */
            c : function() {
              /** @type {boolean} */
              global.bk_allow_multiple_calls = _true;
              /** @type {boolean} */
              global.bk_use_multiple_iframes = _true;
              /** @type {boolean} */
              global.bk_send_statid_payload = _true;
              global.bk_doJSTag(11598, _url || 3);
            }
          }
        };
        append(args[_container], last);
        next(function() {
          _loadScript(data[key].u, args[_container], data[key].c);
        }, 250);
      };
      /**
       * @return {undefined}
       */
      var ready = function() {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var firingIndex = 0;
        /** @type {null} */
        var current = context;
        /** @type {null} */
        var list = context;
        /** @type {Array} */
        var ret = [];
        _loadScript("/tags.bluekai.com/site/14833?ret=js", args[_container], function() {
          if (!(global.bk_results && (current = global.bk_results.campaigns))) {
            return;
          }
          for (;i < current[ii];i++) {
            /** @type {number} */
            firingIndex = 0;
            list = current[i].categories;
            for (;list && firingIndex < list[ii];firingIndex++) {
              if (list[firingIndex].categoryID) {
                ret[method]("id=" + list[firingIndex].categoryID);
              }
            }
          }
          if (ret[ii]) {
            _loadImg("/g2.gumgum.com/bluekai/categories?" + ret.join("&"), args[_container]);
          }
        });
      };
      /**
       * @param {string} extra
       * @return {undefined}
       */
      var trigger = function(extra) {
        if (extra) {
          _loadImg("/tags.bluekai.com/site/15333.gif?id=" + extra, args[_container]);
        }
      };
      /**
       * @return {undefined}
       */
      var onload = function() {
        var last = $('<iframe name="_rlcdn" width=0 height=0 frameborder=0 src="http://rc.rlcdn.com/366098.html"></iframe>');
        append(args[_container], last);
      };
      /**
       * @return {undefined}
       */
      var inject = function() {
        _loadScript("/loadus.exelator.com/load/p?p=233&g=001&j=d", args[_container]);
      };
      /**
       * @return {undefined}
       */
      var getDeps = function() {
        _loadScript("//loadr.exelator.com/load/?p=104&g=810&j=0", args[_container]);
      };
      /**
       * @param {Object} config
       * @return {undefined}
       */
      var listener = function(config) {
        /** @type {string} */
        var view = doc.referrer;
        var originalEvent = {
          c1 : 8,
          c2 : config.c2,
          c3 : config.c3,
          c4 : fn(ggv2id),
          c7 : fn(location.href),
          c8 : fn(("" + doc.title)[replace](/\s{2,}/g, "").substring(0, 1024)),
          c9 : fn(view)
        };
        _loadImg(equal("/b.scorecardresearch.com/p?c1={:c1:}&c2={:c2:}&c3={:c3:}&c4={:c4:}&c7={:c7:}&c8={:c8:}&c9={:c9:}&cv=2.0&cj=1&ns__t=" + getTime(), originalEvent), args[_container]);
      };
      /**
       * @param {Object} collection
       * @return {undefined}
       */
      var process = function(collection) {
        /** @type {number} */
        collection.c1 = 8;
        _loadImg(equal("/b.scorecardresearch.com/p?c1={:c1:}&c2={:c2:}&c3={:c3:}&ns_ap_it=b&rn=" + getTime(), collection), args[_container]);
      };
      /**
       * @return {undefined}
       */
      var req = function() {
        _loadImg("/fei.pro-market.net/engine?site=134602;size=1x1;mimetype=img;", args[_container]);
      };
      /**
       * @return {undefined}
       */
      var load = function() {
        /** @type {string} */
        var k = "bc493968-5e59-406d-ad27-2698a5771d21";
        /** @type {Window} */
        var root = global;
        /** @type {string} */
        var email = "";
        /** @type {null} */
        var match = context;
        /** @type {string} */
        var ret = "http:";
        /** @type {function (string): string} */
        var escape = encodeURIComponent;
        /** @type {number} */
        var cy = 0;
        /** @type {Element} */
        var script = doc.createElement("script");
        root.FLITE = root.FLITE || {};
        root.FLITE.config = root.FLITE.config || {};
        root.FLITE.config[k] = root.FLITE.config[k] || {};
        root.FLITE.config[k].cb = addClass();
        /** @type {number} */
        root.FLITE.config[k].ts = +new Date;
        try {
          /** @type {string} */
          email = top === self && top.location ? top.location.href : doc.referrer || (top.location && top.location.href || "");
        } catch (b9) {
          /** @type {number} */
          cy = 1;
        }
        try {
          /** @type {string} */
          ret = location && location.protocol === "https:" ? location.protocol : ret;
        } catch (b9) {
          cy += 2;
        }
        try {
          /** @type {(Array.<string>|null)} */
          match = email.match(new RegExp("[A-Za-z]+:[/][/][A-Za-z0-9.-]+"));
        } catch (b9) {
          cy += 4;
        }
        /** @type {string} */
        script.src = [ret, "//r.flite.com/syndication/uscript.js?i=", escape(k), "&v=3", "&x=us", cy, "&cb=", root.FLITE.config[k].cb, "&d=", escape(match && match[0] || email)].join("");
        append(args[_container], script);
      };
      /**
       * @return {undefined}
       */
      var clear = function() {
        _loadScript("//cdn.doubleverify.com/dvtp_src.js?ctx=1241058&cmp=2285192&sid=gumgum&plc=22851921&num=&adid=&advid=1241059&adsrv=0&region=30&btreg=&btadsrv=&crt=&crtname=&chnl=&unit=&pid=&uid=&dvtagver=6.1.src", args[_container]);
      };
      /**
       * @return {undefined}
       */
      var loaded = function() {
        _loadScript("//cdn.digitru.st/prod/v1/dt.js", target, function() {
          global.DigiTrust.getIdentityAsync(self.dtCredentials, function(opts) {
            /** @type {string} */
            var data = "/visitor/digitrust?id={:id:}&version={:version:}&domain={:domain:}&created={:created:}&modified={:modified:}&lastRead={:lastRead:}&optout={:optout:}";
            var fn;
            if (opts && opts.success) {
              fn = opts.identity;
              fn.optout = fn.privacy.optout;
              _loadImg(_baseUrl + equal(data, fn));
              return;
            }
            return cb("startDigitrust", opts.error);
          });
        }, element);
      };
      /**
       * @param {string} newTagName
       * @return {undefined}
       */
      var checkPending = function(newTagName) {
        _loadImg("/idsync.rlcdn.com/395736.gif?partner_uid=" + newTagName, args[_container]);
      };
      /**
       * @param {?} self
       * @return {undefined}
       */
      var callback = function(self) {
        if (self.cs) {
          listener(self.cs);
        }
        if (self.scr && self.scr[ii]) {
          fn(self.scr);
        }
      };
      /**
       * @param {(Array|Int8Array|Uint8Array)} range
       * @return {undefined}
       */
      var fn = function(range) {
        /** @type {number} */
        var idx = 0;
        var self;
        for (;self = range[idx++];) {
          trigger(self.u, {
            parent : target,
            type : self.t
          });
        }
      };
      self.PXS = args = {};
      /** @type {function (?): undefined} */
      args.triggerAssetPixels = callback;
      /** @type {Array} */
      args.log = [];
      args[_container] = $('<div id="GG_PXS" style="display:none"></div>');
      append(target, args[_container]);

      if (data.quantcast) {
        log(data);
      }

      if (data.media6) {
        onLoad();
      }
      if (data.across33) {
        run();
      }
      if (data.bluekai) {
        _load(data.vrt, data.tid, data.dom, data.vst, data.lmt);
      }
      if (data.bluekaiIdSwap) {
        trigger(data.visitorId);
      }
      if (data.bluekaiBuyer) {
        ready();
      }
      if (data.comscore) {
        listener(data);
      }
      if (data.comscoreMobile) {
        process(data);
      }
      if (data.jug) {
        onload(data);
      }
      if (data.exelate) {
        inject();
      }
      if (data.exelateRtd) {
        getDeps();
      }
      if (data.datonicsBuyer) {
        req();
      }
      if (data.flite) {
        load();
      }
      if (data.dvbot) {
        clear();
      }
      if (data.digitrust) {
        loaded();
      }
      if (data.partner_uuid) {
        checkPending(data.partner_uuid);
      }
    };
    /**
     * @param {Object} settings
     * @return {undefined}
     */
    create = function(settings) {
      var data = stats || _getWH(global);
      options = {};
      /** @type {number} */
      options.tick = 0;
      options.zIndexOffset = settings.zo || element;
      options.safe = settings.sf;
      options.pscan = settings.ps || element;
      /** @type {number} */
      options.minHeight = ~~settings.mh || 150;
      /** @type {number} */
      options.minWidth = ~~settings.mw || 150;
      options.minOpaque = settings.ot || 80;
      options.tweakOverflow = settings.of;
      /** @type {number} */
      options.foundImages = 0;
      options[test] = {};
      options[op] = {};
      options[j] = {};
      /** @type {null} */
      options.scanTimeout = context;
      options.inViewRatio = settings.tr || 0;
      options.vpDimension = {
        w : data[_width],
        h : data[_height]
      };
      /** @type {number} */
      options.UUID = 0;
      options.classInclude = settings.ci || element;
      options.classExclude = settings.ce || element;
      /**
       * @param {Object} node
       * @param {Object} container
       * @return {?}
       */
      update = function(node, container) {
        var path = text(node);
        var index = createElement(path);
        var newWidth = container[_width];
        var newHeight = container[_height];
        var value = node.naturalWidth;
        var val = node.naturalHeight;
        /** @type {null} */
        var o = context;
        /** @type {null} */
        var obj = context;
        if (value === no || val === no) {
          o = options[j][index];
          if (!o) {
            /** @type {Image} */
            obj = new Image;
            obj.src = path;
            o = {};
            o[_width] = obj[_width];
            o[_height] = obj[_height];
          }
          value = o[_width];
          val = o[_height];
          options[j][index] = o;
        }
        return value >= options.minWidth && val >= options.minHeight && (!isNaN(newWidth) && !isNaN(newHeight) && (newWidth >= options.minWidth && newHeight >= options.minHeight && (!(newWidth === 160 && newHeight === 600) && (!(newWidth === 180 && newHeight === 150) && (!(newWidth === 200 && newHeight === 200) && (!(newWidth === 250 && newHeight === 250) && (!(newWidth === 300 && newHeight === 250) && (!(newWidth === 300 && newHeight === 600) && !(newWidth === 336 && newHeight === 280)))))))));
      };
      /**
       * @param {Object} result
       * @return {?}
       */
      log = function(result) {
        return result[prop].indexOf("ggnoads") > -1 || (text(result).indexOf("ggnoads") > -1 || done([".ggnoads", ".picappoverlay"], result));
      };
      /**
       * @param {Array} ui
       * @return {?}
       */
      stop = function(ui) {
        var i = createElement(text(ui));
        return options[test][i] ? options[test][i].id : ++options.UUID;
      };
      /** @type {function (?, string): undefined} */
      options.requestAssetsNew = callback = function(c, style) {
        var data = stats || _getWH(global);
        /** @type {string} */
        var path = location.href;
        var n = {
          v : "1.1",
          pv : self.pvid,
          r : r,
          t : ggv2id,
          a : [c],
          rf : doc.referrer,
          p : createElement(path),
          fs : _flashEnabled,
          ce : nav.cookieEnabled,
          ac : parent ? parent.occurrences : {},
          vp : {
            ii : global[_top] && top !== global,
            w : data[_width],
            h : data[_height]
          },
          sc : {
            w : global.screen[_width],
            h : global.screen[_height],
            d : global.devicePixelRatio || 1
          }
        };
        var _eAdBuyId = (path.match(/#ggad=(.+)$/) || [context, element])[1];
        /** @type {string} */
        var curPunc = parseInt(style, 10) > 0 ? "&adBuyId=" + style : _eAdBuyId ? "&eAdBuyId=" + _eAdBuyId : "";
        var dt = successCallback();
        /** @type {Date} */
        var _timestamp = new Date;
        var val;
        if (dt) {
          n.dt = dt;
        }
        if (options.inViewRatio) {
          n.tr = options.inViewRatio;
        }
        if (param) {
          n.ai = global.ggaffid;
        }
        /** @type {string} */
        self.affiliateId = self.affIdParam = param || "";
        n = fn(parseFloat(n));
        cp(_baseUrl + "/assets/new?assets=" + n + "&bf=" + currentTarget + "&lt=" + +_timestamp + "&to=" + _timestamp[getTimezoneOffset]() + curPunc, function(ioArgs) {
          /** @type {boolean} */
          var target = !!(_eAdBuyId || (curPunc || style));
          /** @type {null} */
          var obj = context;
          /** @type {(boolean|string)} */
          var result = target || (parent ? parent.servedAds < ceil(options.foundImages * parent.coverage) ? _true : "blocked" : _true);
          if (ioArgs) {
            if (target && ioArgs.ads[0]) {
              /** @type {number} */
              ioArgs.ads[0].forced = 1;
            }
            if (parent && (ioArgs.ads && result !== "blocked")) {
              obj = new Image(ioArgs.ads);
            }
            if (ioArgs.bdg) {
              val = ioArgs.ads && (ioArgs.ads[0] && ioArgs.ads[0].ad) || "";
              /** @type {boolean} */
              ioArgs.bdg[0].thrott = result === "blocked";
              self.Stack.push({
                type : "InImageBadge",
                data : ioArgs.bdg[0],
                om : val
              });
            }
            if (ioArgs.pxs) {
              args.triggerAssetPixels(ioArgs.pxs);
            }
          }
        }, "callback");
      };
      /**
       * @param {Object} b
       * @param {Object} data
       * @return {?}
       */
      walk = function(b, data) {
        var element = b.img;
        var el = element[parentNode];
        /** @type {null} */
        var self = context;
        var tileSize = options.vpDimension;
        var form;
        self = {
          i : b.id,
          u : createElement(text(element)),
          w : data[_width],
          h : data[_height],
          x : data[k],
          y : data[_top],
          lt : lt,
          af : data[_top] + data[_height] < tileSize.h && data[k] + data[_width] < tileSize.w
        };
        if (el.tagName[cssprop]() === "a" && (form = el.href || el.getAttribute("href"))) {
          self.lu = createElement(form);
          if (el.host !== doc.domain) {
            /** @type {string} */
            self.lt = "out";
          }
          if (el.host === doc.domain) {
            /** @type {string} */
            self.lt = "in";
          }
          if (/\.(jpg|gif|png|jpeg)/i.test(form)) {
            /** @type {string} */
            self.lt = "image";
          }
          if (form === (text(element) || text(el))) {
            /** @type {string} */
            self.lt = "self";
          }
        }
        if (!!element.title) {
          self.it = ("" + element.title)[replace](/\s{2,}/g, "").substring(0, 1024);
        }
        if (!!element.alt) {
          self.ia = ("" + element.alt)[replace](/\s{2,}/g, "").substring(0, 1024);
        }
        return self;
      };
      /**
       * @return {undefined}
       */
      tick = function() {
        /** @type {null} */
        var a = context;
        /** @type {null} */
        var e = context;
        /** @type {null} */
        var img = context;
        /** @type {null} */
        var i = context;
        /** @type {null} */
        var json = context;
        /** @type {null} */
        var data = context;
        /** @type {null} */
        var node = context;
        /** @type {null} */
        var last = context;
        /** @type {null} */
        var origContext = context;
        /** @type {null} */
        var c = context;
        /** @type {null} */
        var o = context;
        /** @type {null} */
        var _i = context;
        /** @type {null} */
        var _ref3 = context;
        /**
         * @param {Object} e
         * @return {?}
         */
        var fn = function(e) {
          var err = options.classInclude;
          var json = options.classExclude;
          return err && !done(err, e) || !err && (json && done(json, e));
        };
        options.tick = getTime();
        stats = _getWH(global);
        _clearTimeout(options.scanTimeout);
        a = _.call(self.bodyEl, "img");
        /** @type {number} */
        _i = 0;
        _ref3 = a[_length];
        for (;_i < _ref3;_i++) {
          e = a[_i];
          if (e[_width] <= 100 || e[_height] <= 100) {
            continue;
          }
          json = empty(e);
          if (!json || (json[_width] < 100 || (json[_height] < 100 || (json[_top] < 0 || json[k] < 0)))) {
            continue;
          }
          img = text(e);
          i = createElement(img);
          if (!img || !i) {
            continue;
          }
          if (filter(target, e)) {
            continue;
          }
          if (done([".ggnative"], e)) {
            continue;
          }
          data = options[test][i];
          if (data) {
            node = data.img;
            /** @type {boolean} */
            last = node === e;
            /** @type {boolean} */
            origContext = data.src === text(e);
            /** @type {boolean} */
            o = abs(json[_width] - data.ofs[_width]) < 5 && abs(json[_height] - data.ofs[_height]) < 5;
            c = locate(node) && prepend(node);
            if (last && (origContext && (o && (c && (log(e) === data.ggnoad && fn(e) === data.classr))))) {
              data.ofs = json;
              data.tick = options.tick;
            }
          } else {
            if (update(e, json) && scroll(e, json)) {
              data = {
                src : img,
                srcmin : i,
                img : e,
                ofs : json,
                id : stop(e),
                ggnoad : !!log(e),
                classr : !!fn(e),
                tick : options.tick
              };
              if (data.ggnoad || data.classr) {
                self.Stack.push({
                  type : "InImageBadge",
                  data : {
                    i : data.id,
                    ggnoad : data.ggnoad,
                    classr : data.classr
                  }
                });
              } else {
                data.reqdata = walk(data, json);
                callback(data.reqdata);
                options.foundImages++;
              }
              options[op][data.id] = data;
              options[test][i] = data;
            }
          }
        }
        next(start, 50);
        if (options.UUID < 100) {
          /** @type {number} */
          options.scanTimeout = next(tick, end);
        }
      };
      /**
       * @return {undefined}
       */
      start = function() {
        /** @type {null} */
        var i = context;
        /** @type {null} */
        var obj = context;
        for (i in options[test]) {
          if (hasOwn(options[test], i)) {
            obj = options[test][i];
            if (obj.tick && obj.tick < options.tick) {
              if (obj.ad) {
                obj.ad.remove();
              }
              if (obj.badge) {
                obj.badge.remove();
              }
              delete options[test][obj.srcmin];
              delete options[j][obj.srcmin];
              delete options[op][i];
            } else {
              if (obj.ad) {
                obj.ad.setPosition(obj.ofs);
              }
              if (obj.badge) {
                obj.badge.setPosition(obj.ofs);
              }
            }
          }
        }
      };
      self.AT = options;
      tick();
    };
    /**
     * @param {Object} details
     * @return {undefined}
     */
    report = function(details) {
      parent = {};
      parent.coverage = details.coverage || 0;
      /** @type {number} */
      parent.servedAds = 0;
      parent.occurrences = {};
      self.ADS = parent;
    };
    Player = new len({
      /**
       * @param {Object} val
       * @return {undefined}
       */
      initialize : function(val) {
        var exports = this;
        if (val.mobile) {
          /** @type {string} */
          val.md = "overlay";
        }
        /** @type {Object} */
        exports[idx] = val;
        /** @type {number} */
        exports.pollCount = 0;
        /** @type {number} */
        exports.pollTO = require(function() {
          exports.pollSelector();
        }, 50);
      },
      /**
       * @param {string} eventData
       * @param {Array} obj
       * @param {Object} e
       * @return {undefined}
       */
      triggerEvent : function(eventData, obj, e) {
        var plugins = this;
        var data = plugins[idx];
        /** @type {Date} */
        var _timestamp = new Date;
        var params = {};
        /** @type {Array} */
        var tagNameArr = [];
        /** @type {number} */
        var key = 0;
        e = e || {};
        e.type = e.type || "img";
        params.t = t;
        /** @type {string} */
        params.p = location.href;
        params.a = data.ai;
        params.s = data.s;
        params.lt = _timestamp[field]();
        params.to = _timestamp[getTimezoneOffset]();
        params.pv = self.pvid;
        if (obj) {
          for (key in obj) {
            if (hasOwn(obj, key)) {
              params[key] = obj[key];
            }
          }
        }
        for (key in params) {
          if (hasOwn(params, key)) {
            tagNameArr.push(fn(key) + "=" + fn(params[key]));
          }
        }
        trigger(_baseUrl + eventData + "?" + tagNameArr.join("&"), e);
      },
      /**
       * @return {?}
       */
      pollSelector : function() {
        var options = this;
        var obj = options[idx];
        var ol = obj.cs;
        /** @type {null} */
        var list = context;
        list = slice(ol);
        if (list && list[ii]) {
          isUndefinedOrNull(options.pollTO);
          options.elements = list;
          options.tries = obj.tr || 3;
          options.cache = {
            elements : {},
            placeholders : {}
          };
          options.showUI();
        } else {
          if (++options.pollCount > 25) {
            isUndefinedOrNull(options.pollTO);
          }
        }
        return _true;
      },
      /**
       * @return {undefined}
       */
      showUI : function() {
        var m = this;
        var msg = m[idx];
        var t = msg.mobile ? slice("body > :first-child")[0] : m.elements[0];
        /** @type {Date} */
        var modified = new Date;
        var key = "GGSA" + modified[field]();
        /** @type {null} */
        var obj = context;
        /** @type {null} */
        var result = context;
        /** @type {string} */
        var position = msg.md === "replace" ? "static" : "absolute";
        var bS = msg.zi || w() + 9;
        var vlq = toVLQSigned(t.scrollWidth, t[width]);
        var bR = toVLQSigned(t.scrollHeight, t[d]);
        /** @type {string} */
        obj = '<div id="_ID_" style="position:' + position + ";z-index:" + bS + ";width:" + vlq + "px;height:" + bR + 'px">' + '<br style="display:none">' + "<style>" + "#_ID_{text-align:center;background:transparent url(/c.gumgum.com/ads/com/gumgum/bg/white85.png);position:absolute;font:normal 14px/1 arial}" + "#_ID_-body{display:block;width:100%;height:auto}#_ID_-sponsor,#_ID_-content{padding-top:1em}" + "#_ID_-header{margin-bottom:1em;padding:1em 2em 0}" + "#_ID_-header span{display:inline-block;width:32.5%;border:1px solid #ccc;text-align:center;vertical-align:middle;font-size:inherit}" +
          "#_ID_-skip{margin-bottom:1em;opacity:0;filter:alpha(opacity=0);transition:all 1s;-wekbit-transition:all 1s;-moz-transition:all 1s}" + "#_ID_-skip button{border:1px solid #ccc;padding:0.5em 1em;color:#444;background:rgba(249,249,249,.5)}" + "#_ID_-skip._ss{opacity:1;filter:alpha(opacity=100)}" + "#_ID_-skip._ss button:hover{border:1px solid #9f9f9f;color:#000;background:#fff}" + "#_ID_-sponsor{margin-bottom:1em}" + "#_ID_-sponsor *{font:bold 1.4em/1 arial;color:#555}" + "#_ID_-content{margin-bottom:1em}" +
          "html body .gumgum-blur{filter:blur(3px)!important;-webkit-filter:blur(3px)!important;-moz-filter:blur(3px)!important;-o-filter:blur(3px)!important;-ms-filter:blur(3px)!important;filter:url(/c.gumgum.com/ads/com/gumgum/bg/blur.svg#blur)!important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3')!important}" + "</style>" + '<div id="_ID_-body">' + '<div id="_ID_-header">' + '<span></span><span style="border:0 none">Sponsored Video</span><span></span>' + '<div id="_ID_-sponsor"></div>' +
          '<div id="_ID_-skip"></div>' + "</div>" + '<div id="_ID_-content">' + msg.am + "</div>" + "</div>" + "</div>";
        obj = obj[replace](/_ID_/g, key);
        result = $(obj);
        t[parentNode].insertBefore(result, t);
        if (msg.md === "replace") {
          m.hideContent();
        } else {
          t[prop] += " gumgum-blur";
        }
        m.id = key;
        m[name] = result;
        el.on(m[name], "sa.ad.report", function() {
          result.call(m);
        });
        Player.viewability = self.bindCtx(m, m.checkViewability);
        el.on(global, "sa.viewability", Player.viewability);
        el.on(global, "scroll resize", function() {
          el.fire(global, "sa.viewability");
        });
        m.addSponsor();
        m.triggerEvent("/sa/view");
      },
      /**
       * @return {undefined}
       */
      addSponsor : function() {
        var args = this;
        var next = args[idx];
        /** @type {null} */
        var result = context;
        var results = is(args.id + "-sponsor");
        if (next.zhm) {
          append(results, $(next.zhm));
        } else {
          /** @type {string} */
          result = "";
          if (next.zlu) {
            result += "<img src='" + next.zlu + "'>";
          }
          if (next.zmt) {
            result += "<p style='width:90%;margin:1em auto 0;color:" + (next.zmc || "#444") + "'>" + next.zmt + "</p>";
          }
          /** @type {string} */
          results[propertyName] = result;
        }
        el.fire(global, "sa.viewability");
      },
      /**
       * @return {undefined}
       */
      skipAd : function() {
        var that = this;
        that.triggerEvent("/sa/skip");
        that.grantAccess();
      },
      /**
       * @return {undefined}
       */
      hideContent : function() {
        var api = this;
        /** @type {null} */
        var method = context;
        /** @type {null} */
        var el = context;
        /** @type {null} */
        var i = context;
        var options = api.cache;
        var elems = api.elements;
        var elem = elems[ii];
        var dummy = $('<div style="_CLEARCSS_"></div>');
        /** @type {number} */
        method = 0;
        for (;method < elem;method++) {
          el = elems[method];
          i = "" + (new Date)[field]() + addClass() * addClass();
          options.elements[i] = el;
          options.placeholders[i] = dummy.cloneNode(_true);
          el[parentNode].replaceChild(options.placeholders[i], el);
        }
      },
      /**
       * @return {undefined}
       */
      showContent : function() {
        var opts = this;
        /** @type {null} */
        var key = context;
        /** @type {null} */
        var el = context;
        /** @type {null} */
        var item = context;
        var options = opts.cache;
        var obj = options.placeholders;
        var items = options.elements;
        for (key in obj) {
          if (hasOwn(obj, key)) {
            el = obj[key];
            item = items[key];
            if (el[parentNode]) {
              el[parentNode].replaceChild(item, el);
            }
            /** @type {null} */
            obj[key] = context;
          }
        }
      },
      /**
       * @return {?}
       */
      grantAccess : function() {
        var props = this;
        var prop = props[idx];
        var val = props[name];
        var current = props.elements[props.elements[ii] - 1];
        _setTimeout(context, val);
        if (prop.md === "replace") {
          props.showContent();
        }
        if (prop.lm && (current && current[parentNode])) {
          props.showLeaveBehind(current);
        }
        el.off(global, "sa");
        /** @type {null} */
        self.saad = context;
        return _true;
      },
      /**
       * @param {HTMLElement} t
       * @return {undefined}
       */
      showLeaveBehind : function(t) {
        var expected = this;
        var obj = expected[idx];
        /** @type {Date} */
        var _timestamp = new Date;
        /** @type {null} */
        var cur = context;
        cur = $(obj.lm);
        if (obj.lc) {
          el.add(cur, "click", function(deepDataAndEvents) {
            expected.clickLeaveBehind(deepDataAndEvents);
          });
        }
        t[parentNode].insertBefore(cur, t.nextSibling);
        expected.event_info.lt = _timestamp[field]();
        expected.event_info.to = _timestamp[getTimezoneOffset]();
        _loadImg(_baseUrl + equal("/sa/leavebehind/view?t={:tid:}&p={:pu:}&a={:ai:}&lt={:lt:}&to={:to:}", expected.event_info));
      },
      /**
       * @param {Event} deepDataAndEvents
       * @return {?}
       */
      clickLeaveBehind : function(deepDataAndEvents) {
        var expected = this;
        /** @type {Date} */
        var _timestamp = new Date;
        deepDataAndEvents.stop();
        expected.event_info.lt = _timestamp[field]();
        expected.event_info.to = _timestamp[getTimezoneOffset]();
        _loadImg(_baseUrl + equal("/sa/leavebehind/click?t={:tid:}&p={:pu:}&a={:ai:}&lt={:lt:}&to={:to:}", expected.event_info));
        return window.open(expected[idx].lc, "ggsalbclick");
      },
      /**
       * @param {Object} e
       * @return {undefined}
       */
      checkViewability : function(e) {
        var obj = this;
        var address0 = _.call(obj[name], "div")[0];
        var property = obj[idx];
        if (e && e.type === "resize") {
          stats = self.getWH(global);
        }
        if (!property.viewable50 && extend(address0, stats) >= 50) {
          next(function() {
            if (extend(address0, stats) < 50) {
              return;
            }
            obj.triggerEvent("/ad/viewable50", context);
            /** @type {boolean} */
            property.viewable50 = _true;
          }, 1E3);
        }
        if (!property.viewable100 && extend(address0, stats) === 100) {
          next(function() {
            if (extend(address0, stats) < 100) {
              return;
            }
            obj.triggerEvent("/ad/viewable100", context, {
              delay : 1E3
            });
            /** @type {boolean} */
            property.viewable100 = _true;
            el.off(global, "sa.viewability", Player.viewability);
          }, 1E3);
        }
      }
    });
    Image = (new len({
      /**
       * @param {Object} data
       * @return {?}
       */
      initialize : function(data) {
        var item = this;
        /** @type {null} */
        var origContext = context;
        /** @type {null} */
        var index = context;
        /** @type {null} */
        var result = context;
        /** @type {null} */
        var attrs = context;
        /** @type {null} */
        var o = context;
        if (validate(data) !== "array" || !(data = data[0])) {
          return element;
        }
        if (!data.ad) {
          return element;
        }
        item.asset = origContext = options[op][data.i];
        if (!origContext) {
          return cb("noImageFound", {
            message : "No image found (" + data.u + ")"
          });
        }
        index = "ad_ii_" + getTime();
        origContext.ad = this;
        self[index] = item;
        data.cs = attrs = data.cs || {};
        item.styles = {
          body : {
            MozOpacity : (attrs.trn || 85) / 100,
            WebkitOpacity : (attrs.trn || 85) / 100,
            zoom : 1,
            filter : "alpha(opacity=" + (attrs.trn || 85) + ")",
            opacity : (attrs.trn || 85) / 100,
            backgroundColor : attrs.bgc || "#fff",
            zIndex : 1,
            font : "normal 0px/0 Arial"
          },
          closeContent : attrs.cbi || "x",
          close : {
            color : attrs.cbc || "#000",
            top : attrs.cbt || (attrs.cbb ? "auto" : 5),
            right : attrs.cbr || (attrs.cbl ? "auto" : 5),
            bottom : attrs.cbb || "auto",
            left : attrs.cbl || "auto",
            height : attrs.cbh || 10,
            width : attrs.cbw || "auto",
            zIndex : 3,
            cursor : "pointer"
          },
          adsByContent : attrs.abi || "Ads by GumGum",
          adsBy : {
            color : attrs.abc || "#000",
            top : isNaN(attrs.abt) ? attrs.abb ? "auto" : 5 : attrs.abt,
            right : attrs.abr || "auto",
            bottom : attrs.abb || "auto",
            left : (attrs.abl === 999 ? context : attrs.abl) || (attrs.abr ? "auto" : 5),
            height : attrs.abh || 10,
            width : attrs.abw || "auto",
            zIndex : 2,
            cursor : "pointer"
          }
        };
        data.ad = data.ad[replace](/GGSWFCID/ig, remaining)[replace](/GGUID/ig, index);
        data.uid = index;
        /** @type {Object} */
        item[idx] = data;
        item.build();
        run(item[name], index, {
          closeAd : self.bindCtx(item, item.closeAd),
          showInfo : self.bindCtx(item, item.showInfo)
        });
        result = data.scr;
        if (result && result[_length]) {
          /** @type {number} */
          attrs = 0;
          for (;attrs < result[_length];attrs++) {
            o = result[attrs];
            if (o.u && o.e === "IMPRESSION") {
              o.p = fix(o.u, {
                moat : item[name].firstChild
              });
              trigger(o.u[replace](/GGUID/ig, index), {
                parent : o.p,
                type : o.t,
                delay : o.d
              });
            }
          }
        }
        if (!data.forced) {
          parent.servedAds++;
        }
        if (parent.occurrences[data.ab]) {
          parent.occurrences[data.ab]++;
        } else {
          /** @type {number} */
          parent.occurrences[data.ab] = 1;
        }
        append(target, item[name]);
        if (data.ipu) {
          trigger(data.ipu, {
            parent : item[name],
            type : "img",
            delay : data.id,
            _true : _true
          });
        }
      }
    })).methods({
        /**
         * @param {Event} deepDataAndEvents
         * @return {?}
         */
        openAd : function(deepDataAndEvents) {
          if (deepDataAndEvents) {
            deepDataAndEvents.preventDefault();
          }
          var o = this;
          var p = o[idx];
          var tiles = p.scr;
          var i = p.du;
          var index;
          var options;
          if (!i) {
            return element;
          }
          if (tiles && tiles[_length]) {
            /** @type {number} */
            index = 0;
            for (;index < tiles[_length];index++) {
              options = tiles[index];
              if (options.u && options.e === "CLICK") {
                trigger(options.u[replace](/GGUID/ig, p.uid), {
                  parent : target,
                  type : options.t
                });
              }
            }
          }
          if (p.modal) {
            openModal.call(o, i);
          } else {
            global.open(i);
          }
          return element;
        },
        /**
         * @param {Object} _true
         * @return {undefined}
         */
        closeAd : function(_true) {
          var item = this;
          var data = item[idx];
          var passes = item.asset.img;
          /** @type {string} */
          var current = location.href;
          var tileSize = options.vpDimension;
          var stats = empty(passes);
          /** @type {Date} */
          var _timestamp = new Date;
          var n = {
            t : ggv2id,
            u : createElement(text(passes)),
            ab : data.ab,
            pv : self.pvid,
            seq : data.i,
            pu : current,
            af : stats[_top] + stats[_height] < tileSize.h && stats[k] + stats[_width] < tileSize.w
          };
          var originalEvent;
          if (options.inViewRatio) {
            n.tr = options.inViewRatio;
          }
          originalEvent = {
            dt : fn(parseFloat(n)),
            lt : +_timestamp,
            to : _timestamp[getTimezoneOffset](),
            pu : fn(current),
            bf : currentTarget
          };
          if (_true) {
            _true.preventDefault();
          }
          if (!data.forced) {
            _loadImg(_baseUrl + equal("/ad/close?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + param, originalEvent), item[name]);
          }
          if (data.uid && self[data.uid]) {
            delete self[data.uid];
          }
          item.remove();
          /** @type {null} */
          item.asset.ad = context;
        },
        /**
         * @param {(Object|boolean|number|string)} message
         * @param {(Object|boolean|number|string)} context
         * @return {undefined}
         */
        showInfo : function(message, context) {
          var result = this;
          var res = result[idx];
          var passes = result.asset.img;
          /** @type {string} */
          var current = location.href;
          var tileSize = options.vpDimension;
          var data = empty(passes);
          /** @type {Date} */
          var _timestamp = new Date;
          var n = {
            t : ggv2id,
            u : createElement(text(passes)),
            ab : res.ab,
            pv : self.pvid,
            seq : res.i,
            pu : current,
            af : data[_top] + data[_height] < tileSize.h && data[k] + data[_width] < tileSize.w
          };
          var originalEvent;
          if (options.inViewRatio) {
            n.tr = options.inViewRatio;
          }
          originalEvent = {
            dt : fn(parseFloat(n)),
            lt : +_timestamp,
            to : _timestamp[getTimezoneOffset](),
            pu : fn(current),
            bf : currentTarget
          };
          if (!res.forced) {
            _loadImg(_baseUrl + equal("/ad/info?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + param, originalEvent), result[name]);
          }
          openModal.call(context || item, message || event);
        },
        /**
         * @param {Node} deepDataAndEvents
         * @return {?}
         */
        eventParams : function(deepDataAndEvents) {
          var item = this;
          var c = item[idx];
          var passes = deepDataAndEvents || item.asset.img;
          /** @type {string} */
          var current = location.href;
          var tileSize = options.vpDimension;
          var stats = empty(passes);
          /** @type {Date} */
          var _timestamp = new Date;
          var data = {
            pu : current,
            t : ggv2id,
            u : createElement(text(passes)),
            ab : c.ab,
            seq : c.i,
            pv : self.pvid,
            af : stats[_top] + stats[_height] < tileSize.h && stats[k] + stats[_width] < tileSize.w
          };
          var pu = {};
          if (options.inViewRatio) {
            data.tr = options.inViewRatio;
          }
          if (c.r) {
            /** @type {string} */
            data.r = "" + c.r;
          }
          pu = {
            dt : fn(parseFloat(data)),
            lt : +_timestamp,
            to : _timestamp[getTimezoneOffset](),
            pu : fn(current),
            bf : currentTarget
          };
          return pu;
        },
        /**
         * @param {Node} deepDataAndEvents
         * @return {?}
         */
        triggerHover : function(deepDataAndEvents) {
          var events = this;
          var event = events[idx];
          var previous = events[name];
          var originalEvent = events.eventParams(deepDataAndEvents);
          /** @type {null} */
          var self = context;
          self = _baseUrl + equal("/ad/hover.gif?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + (event.forced ? "&f=true" : "") + param, originalEvent, context, element);
          trigger(self, {
            type : "img",
            parent : previous,
            delay : event.id
          });
          /** @type {boolean} */
          events.isHovered = _true;
          return _true;
        },
        /**
         * @param {number} opt_attributes
         * @return {?}
         */
        triggerViewability : function(opt_attributes) {
          opt_attributes = opt_attributes || 50;
          var out = this;
          var data = out.data;
          var originalEvent = out.eventParams();
          var missing = _baseUrl + equal("/ad/viewable" + opt_attributes + ".gif?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + (data.forced ? "&f=true" : "") + param, originalEvent, context, element);
          next(function() {
            if (data.viewable100 && opt_attributes === 100 || data.viewable50 && opt_attributes === 50) {
              return;
            }
            if (extend(out[name], stats) < opt_attributes) {
              return;
            }
            if (opt_attributes >= 50) {
              /** @type {boolean} */
              data.viewable50 = _true;
            }
            if (opt_attributes === 100) {
              /** @type {boolean} */
              data.viewable100 = _true;
            }
            _loadImg(missing);
          }, 1E3);
          return _true;
        },
        /**
         * @return {?}
         */
        build : function() {
          var event = this;
          var data = event[idx];
          var o = data.adhs;
          var img = event.asset.img;
          /** @type {null} */
          var obj = context;
          /** @type {null} */
          var b2 = context;
          /** @type {null} */
          var i = context;
          /** @type {null} */
          var node = context;
          /** @type {null} */
          var c = context;
          /** @type {null} */
          var b = context;
          if (!o) {
            return cb("ads.build", {
              message : "Ad without adhs: " + data.ab
            });
          }
          if (!o.adf) {
            o.adf = {};
          }
          event[name] = obj = $(('            <span id="GGADGGUID" style="_CLEARCSS_;position:absolute;overflow:hidden;left:-9999px;top:-9999px"><span id="GGUID_CONTAINER" style="_CLEARCSS_;position:relative;display:inline-block;*display:block;width:100%;height:100%">               ' + av + '               <span id="GGUID_CLOSE" style="_CLEARCSS_;position:absolute;z-index:103;cursor:pointer" title="Close Ad"></span>               <span id="GGUID_ATTRIBUTION" style="_CLEARCSS_;position:absolute;z-index:102;"></span>               <span id="GGUID_BODY" style="_CLEARCSS_;display:block;z-index:101"></span>            </span></span>')[replace](/GGUID/g,
            data.uid));
          b = _.call(obj, "span");
          b2 = b[0];
          i = b[1];
          node = b[2];
          c = b[3];
          if (data.ii || /\x3c!--iframe--\x3e/im.test(data.ad)) {
            /** @type {number} */
            c.style.fontSize = 0;
          }
          if (data.ii && !/\x3c!--iframe--\x3e/im.test(data.ad)) {
            b = max(data.ad, c);
            /** @type {(number|string)} */
            b[_height] = !o.adf.assettall ? data.add.h * (data.add.s || 1) : "100%";
            /** @type {(number|string)} */
            b[_width] = !o.adf.assetwide ? data.add.w * (data.add.s || 1) : "100%";
          } else {
            append(c, $(data.ad));
          }
          data.adp = {
            x : ("" + o.adp.x)[cssprop](),
            y : ("" + o.adp.y)[cssprop]()
          };
          if (o.adf.assetwide) {
            obj[id][_width] = img[width] + "px";
          }
          if (o.adf.assettall) {
            obj[id][_height] = img[d] + "px";
          }
          if (o.adf.animated) {
            event.requireAnimation = o.adf.animated;
          }
          if (b = ~~o.adf.rounded) {
            css(obj, {
              MozBorderRadius : b,
              WebkitBorderRadius : b,
              KhtmlBorderRadius : b,
              borderRadius : b
            });
          }
          if (b = o.adf.opacity) {
            css(obj, {
              opacity : b,
              filter : "alpha(opacity=" + b * 100 + ")"
            });
          }
          if (o.ads) {
            css(obj, o.ads);
          }
          if (o.atc) {
            node[propertyName] = o.atc[replace](/GGUID/ig, data.uid);
          }
          if (o.atp) {
            css(node, o.atp);
          }
          if (o.clc) {
            i[propertyName] = o.clc[replace](/GGUID/ig, data.uid);
          }
          if (o.clp) {
            css(i, o.clp);
          }
          if (b = data.cs) {
            if (b.abc) {
              node[id].color = b.abc;
            }
            if (b.cbc) {
              i[id].color = b.cbc;
            }
            if (b.trn) {
              /** @type {number} */
              obj[id].opacity = b.trn / 100;
              /** @type {string} */
              obj[id].filter = "alpha(opacity=" + b.trn + ")";
            }
          }
          if (data.du && !/GGNOCLICK/i.test(data.ad)) {
            el.add(c, "click", function(deepDataAndEvents) {
              event.openAd(deepDataAndEvents);
            });
          }
          el.add(i, "click", function(_true) {
            event.closeAd(_true);
          });
          el.add(c, "mouseenter", function() {
            if (!event.isHovered) {
              /** @type {number} */
              event.hoverTO = next(self.bindCtx(event, event.triggerHover), 500);
            } else {
              el.off(c, "mouseenter mouseleave");
            }
          });
          el.add(c, "mouseleave", function() {
            _clearTimeout(event.hoverTO);
          });
          el.on(event.asset, "inimage.ad.report", function() {
            var data = options.cacheImages[event.asset.srcmin].ad;
            result.call({
              data : data[idx],
              element : data[name],
              container : is(data[idx].uid + "_CONTAINER")
            });
          });
        },
        /**
         * @param {number} height
         * @return {?}
         */
        setHeight : function(height) {
          var obj = this;
          /** @type {number} */
          height = parseInt(height, 10);
          return height && ((obj.data.adH = height) && (obj.setPosition(obj.asset.ofs) && css(obj[name], {
              height : height + "px"
            })));
        },
        /**
         * @param {Object} data
         * @return {?}
         */
        setPosition : function(data) {
          var options = this;
          var option = options[idx];
          var value = options[name];
          var p = option.adp;
          var position = options.requireAnimation;
          var min = options.adW || value[width];
          var max = option.adH || (options.adH || value[d]);
          var result;
          var dim;
          var params;
          if (min && max) {
            options.adW = min;
            options.adH = max;
          }
          params = _.call(value, "span");
          if (position && ((result = params[0][width]) && (dim = params[0][d]))) {
            /** @type {string} */
            value[id][i] = undef;
            /** @type {string} */
            value[id][_width] = result + "px";
            /** @type {string} */
            value[id][_height] = dim + "px";
            switch(position) {
              case o:
                result = {
                  start : ["opacity", "0"],
                  end : "opacity:1"
                };
                break;
              case k:
                result = {
                  start : ["marginLeft", "-100%"],
                  end : "margin-left:0"
                };
                break;
              case RIGHT:
                result = {
                  start : ["marginLeft", "100%"],
                  end : "margin-left:0"
                };
                break;
              case _top:
                result = {
                  start : ["marginTop", "-100%"],
                  end : "margin-top:0"
                };
                break;
              case bottom:
                result = {
                  start : ["marginTop", "100%"],
                  end : "margin-top:0"
                };
                break;
              default:
                result = {
                  start : ["marginTop", "100%"],
                  end : "margin-top:0"
                };
                break;
            }
            params[0][id][result.start[0]] = result.start[1];
            new cs(params[0], result.end, {
              duration : 900,
              /**
               * @return {undefined}
               */
              after : function() {
                /** @type {string} */
                params[1][id][path] = val;
                /** @type {string} */
                params[2][id][path] = val;
                /** @type {string} */
                value[id][i] = VISIBLE;
              }
            });
            /** @type {boolean} */
            options.requireAnimation = element;
          }
          result = {};

          switch(p.x) {
            case "l":
              result[k] = data[k];
              break;
            case "r":
              /** @type {number} */
              result[k] = data[k] + data[type] - min;
              break;
            case "c":
              result[k] = data[k] + (data[type] - min) / 2;
              break;
            default:
              result[k] = ~~p.x > 0 ? data[k] + ~~p.x : data[k] + data[type] - min + ~~p.x;
              break;
          }
          switch(p.y) {
            case "t":
              result[_top] = data[_top];
              break;
            case "b":
              /** @type {number} */
              result[_top] = data[_top] + data[_height] - max;
              break;
            case "m":
              result[_top] = data[_top] + (data[_height] - max) / 2;
              break;
            default:
              result[_top] = ~~p.y > 0 ? data[_top] + ~~p.y : data[_top] + data[_height] - max + ~~p.y;
              break;
          }
          css(value, {
            zIndex : data[rootProperty],
            left : result[k],
            top : result[_top],
            display : val,
            visibility : VISIBLE
          });
          if (self.subs.inimage && !options.emitted) {
            /** @type {boolean} */
            options.emitted = _true;
            el.fire(target, "gumgum.inimage.load", {
              image : options.asset.img,
              ad : empty(value)
            });
          }
          if (!option.viewable50 && extend(value, stats) >= 50) {
            options.triggerViewability(50);
          }
          if (!option.viewable100 && extend(value, stats) === 100) {
            options.triggerViewability(100);
          }
          return _true;
        },
        /**
         * @return {undefined}
         */
        remove : function() {
          var data = this;
          el.off(data[name], "viewable");
          _setTimeout(target, data[name]);
          if (!data[idx].forced) {
            parent.servedAds--;
          }
          delete data.asset.ad;
          if (self.subs.inimage) {
            el.fire(target, "gumgum.inimage.close", {
              image : data.asset.img
            });
          }
        }
      });

    // 入口方法
    if (errorCB()) {
      self.onReady(success);
    }
  })(GUMGUM, window, document);
}

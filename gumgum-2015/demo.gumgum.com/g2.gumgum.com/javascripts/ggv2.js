/*! GumGum - 2014 (c) */
if (!window.GUMGUM) {
  (function (H, h, A) {
    var x = null,
      M = false,
      v = true,
      P = "length",
      i = "push",
      O = "style",
      e = "width",
      z = "height",
      b = "display",
      q = "className",
      u = "innerHTML",
      f = "parentNode",
      B = "top",
      t = "left",
      j = "zIndex",
      D = "none",
      g = "visibility",
      K = "hidden",
      L = "offsetWidth",
      I = "offsetHeight",
      o = "opacity",
      C = "getTimezoneOffset",
      G = "getAttribute",
      N = "src",
      Q = "replace",
      k = "toLowerCase",

    // isType
    d = function (R, S) {
      return Object.prototype.hasOwnProperty.call(R, S)
    },
    // encode
    c = function (R) {
      return H.encodeURIComponent(R)
    },
    // timestamp
    w = function () {
      return +new Date()
    },

    n = H.location,
    F = H.navigator,
    m = H.screen,
    s = H.setTimeout,
    E = H.clearInterval,
    r,
    l,
    p,
    y,
    J;

    (function (S, R, T) {
      R[S] = T()
    })("bean", H, function (aD, an) {
      aD = aD || "bean",
      an = an || this;
      var au = window,
        ap = an[aD],
        az = /[^\.]*(?=\..*)\.|.*/,
        ao = /\..*/,
        at = "addEventListener",
        am = "removeEventListener",
        aH = document || {},
        aC = aH.documentElement || {},
        aw = aC[at],
        aF = aw ? at : "attachEvent",
        aA = {},
        ar = Array.prototype.slice,

      aE = function (T, S) {
        return T.split(S || " ")
      },
      al = function (S) {
        return typeof S == "string"
      },
      av = function (S) {
        return typeof S == "function"
      },
      aB = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ", ai = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online     afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",
      aG = function (T, S, aJ) {
        for (aJ = 0; aJ < S[P]; aJ++) {
          S[aJ] && (T[S[aJ]] = 1)
        }
        return T
      }({}, aE(aB + (aw ? ai : ""))),
      ak = function () {
        var T = "compareDocumentPosition" in aC ? function (aK, aJ) {
          return aJ.compareDocumentPosition && (aJ.compareDocumentPosition(aK) & 16) === 16
        } : "contains" in aC ? function (aK, aJ) {
          return aJ = aJ.nodeType === 9 || aJ === window ? aC : aJ, aJ !== aK && aJ.contains(aK)
        } : function (aK, aJ) {
          while (aK = aK[f]) {
            if (aK === aJ) {
              return 1
            }
          }
          return 0
        },
        S = function (aJ) {
          var aK = aJ.relatedTarget;
          return aK ? aK !== this && aK.prefix !== "xul" && !/document/.test(this.toString()) && !T(aK, this) : aK == null
        };
        return {
          mouseenter: {base: "mouseover", condition: S},
          mouseleave: {base: "mouseout", condition: S},
          mousewheel: {base: /Firefox/.test(F.userAgent) ? "DOMMouseScroll" : "mousewheel"}
        }
      }(),
      ad = function () {
        var aN = aE("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
          aR = aN.concat(aE("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
          S = aR.concat(aE("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
          aL = aN.concat(aE("char charCode key keyCode keyIdentifier keyLocation location")),
          aS = aN.concat(aE("data")),
          aJ = aN.concat(aE("touches targetTouches changedTouches scale rotation")),
          aQ = aN.concat(aE("data origin source")),
          aK = aN.concat(aE("state")),
          aO = /over|out/,
          aM = [{
                reg: /key/i,
                fix: function (aU, aT) {
                  return aT.keyCode = aU.keyCode || aU.which, aL
                }
              }, {
              reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i, fix: function (aU, aV, aT) {
                aV.rightClick = aU.which === 3 || aU.button === 2, aV.pos = {x: 0, y: 0};
                if (aU.pageX || aU.pageY) {
                  aV.clientX = aU.pageX, aV.clientY = aU.pageY
                } else {
                  if (aU.clientX || aU.clientY) {
                    aV.clientX = aU.clientX + aH.body.scrollLeft + aC.scrollLeft, aV.clientY = aU.clientY + aH.body.scrollTop + aC.scrollTop
                  }
                }
                return aO.test(aT) && (aV.relatedTarget = aU.relatedTarget || aU[(aT == "mouseover" ? "from" : "to") + "Element"]), aR
              }
            }, {
              reg: /mouse.*(wheel|scroll)/i, fix: function () {
                return S
              }
            }, {
              reg: /^text/i, fix: function () {
                return aS
              }
            }, {
              reg: /^touch|^gesture/i, fix: function () {
                return aJ
              }
            }, {
              reg: /^message$/i, fix: function () {
                return aQ
              }
            }, {
              reg: /^popstate$/i, fix: function () {
                return aK
              }
            }, {
              reg: /.*/, fix: function () {
                return aN
              }
            }],
          T = {},
          aP = function (aY, a1, aT) {
          if (!arguments[P]) {
            return
          }
          aY = aY || ((a1.ownerDocument || a1.document || a1).parentWindow || au).event, this.originalEvent = aY, this.isNative = aT, this.isBean = !0;
          if (!aY) {
            return
          }
          var aW = aY.type, a2 = aY.target || aY.srcElement, aU, a0, aZ, aX, aV;
          this.target = a2 && a2.nodeType === 3 ? a2[f] : a2;
          if (aT) {
            aV = T[aW];
            if (!aV) {
              for (aU = 0, a0 = aM[P]; aU < a0; aU++) {
                if (aM[aU].reg.test(aW)) {
                  T[aW] = aV = aM[aU].fix;
                  break
                }
              }
            }
            aX = aV(aY, this, aW);
            for (aU = aX[P]; aU--;) {
              !((aZ = aX[aU]) in this) && aZ in aY && (this[aZ] = aY[aZ])
            }
          }
        };
        return aP.prototype.preventDefault = function () {
          this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
        }, aP.prototype.stopPropagation = function () {
          this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
        }, aP.prototype.stop = function () {
          this.preventDefault(), this.stopPropagation(), this.stopped = !0
        }, aP.prototype.stopImmediatePropagation = function () {
          this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function () {
            return !0
          }
        }, aP.prototype.isImmediatePropagationStopped = function () {
          return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
        }, aP.prototype.clone = function (aU) {
          var aT = new aP(this, this.element, this.isNative);
          return aT.currentTarget = aU, aT
        }, aP
      }(), U = function (T, S) {
        return !aw && !S && (T === aH || T === au) ? aC : T
      }, aj = function () {
        var T = function (aN, aK, aP, aM) {
          var aJ = function (aR, aQ) {
            return aK.apply(aN, aM ? ar.call(aQ, aR ? 0 : 1).concat(aM) : aQ)
          }, aL = function (aR, aQ) {
            return aK.__beanDel ? aK.__beanDel.ft(aR.target, aN) : aQ
          }, aO = aP ? function (aR) {
            var aQ = aL(aR, this);
            if (aP.apply(aQ, arguments)) {
              return aR && (aR.currentTarget = aQ), aJ(aR, arguments)
            }
          } : function (aQ) {
            return aK.__beanDel && (aQ = aQ.clone(aL(aQ))), aJ(aQ, arguments)
          };
          return aO.__beanDel = aK.__beanDel, aO
        }, S = function (aQ, aL, aJ, aM, aR, aK, aP) {
          var aO = ak[aL], aN;
          aL == "unload" && (aJ = ah(W, aQ, aL, aJ, aM)), aO && (aO.condition && (aJ = T(aQ, aJ, aO.condition, aK)), aL = aO.base || aL), this.isNative = aN = aG[aL] && !!aQ[aF], this.customType = !aw && !aN && aL, this.element = aQ, this.type = aL, this.original = aM, this.namespaces = aR, this.eventType = aw || aN ? aL : "propertychange", this.target = U(aQ, aN), this[aF] = !!this.target[aF], this.root = aP, this.handler = T(aQ, aJ, null, aK)
        };
        return S.prototype.inNamespaces = function (aL) {
          var aJ, aM, aK = 0;
          if (!aL) {
            return !0
          }
          if (!this.namespaces) {
            return !1
          }
          for (aJ = aL[P]; aJ--;) {
            for (aM = this.namespaces[P]; aM--;) {
              aL[aJ] == this.namespaces[aM] && aK++
            }
          }
          return aL[P] === aK
        }, S.prototype.matches = function (aK, aJ, aL) {
          return this.element === aK && (!aJ || this.original === aJ) && (!aL || this.handler === aL)
        }, S
      }(), R = function () {
        var aL = {}, T = function (aR, aO, aT, aZ, aQ, aY) {
          var aX = aQ ? "r" : "$";
          if (!aO || aO == "*") {
            for (var aV in aL) {
              aV.charAt(0) == aX && T(aR, aV.substr(1), aT, aZ, aQ, aY)
            }
          } else {
            var aS = 0, aW, aU = aL[aX + aO], aP = aR == "*";
            if (!aU) {
              return
            }
            for (aW = aU[P]; aS < aW; aS++) {
              if ((aP || aU[aS].matches(aR, aT, aZ)) && !aY(aU[aS], aU, aS, aO)) {
                return
              }
            }
          }
        }, aN = function (aP, aT, aR, aO) {
          var aQ, aS = aL[(aO ? "r" : "$") + aT];
          if (aS) {
            for (aQ = aS[P]; aQ--;) {
              if (!aS[aQ].root && aS[aQ].matches(aP, aR, null)) {
                return !0
              }
            }
          }
          return !1
        }, aK = function (aR, aS, aQ, aO) {
          var aP = [];
          return T(aR, aS, aQ, null, aO, function (aT) {
            return aP[i](aT)
          }), aP
        }, S = function (aO) {
          var aQ = !aO.root && !this.has(aO.element, aO.type, null, !1), aP = (aO.root ? "r" : "$") + aO.type;
          return (aL[aP] || (aL[aP] = []))[i](aO), aQ
        }, aJ = function (aO) {
          T(aO.element, aO.type, null, aO.handler, aO.root, function (aP, aR, aQ) {
            return aR.splice(aQ, 1), aP.removed = !0, aR[P] === 0 && delete aL[(aP.root ? "r" : "$") + aP.type], !1
          })
        }, aM = function () {
          var aO, aP = [];
          for (aO in aL) {
            aO.charAt(0) == "$" && (aP = aP.concat(aL[aO]))
          }
          return aP
        };
        return {has: aN, get: aK, put: S, del: aJ, entries: aM}
      }(), X, af = function (S) {
        arguments[P] ? X = S : X = aH.querySelectorAll ? function (aJ, T) {
          return T.querySelectorAll(aJ)
        } : function () {
          throw new Error("Bean: No selector engine installed")
        }
      }, ax = function (aK, T) {
        if (!aw && T && aK && aK.propertyName != "_on" + T) {
          return
        }
        var aL = R.get(this, T || aK.type, null, !1), aJ = aL[P], S = 0;
        aK = new ad(aK, this, !0), T && (aK.type = T);
        for (; S < aJ && !aK.isImmediatePropagationStopped(); S++) {
          aL[S].removed || aL[S].handler.call(this, aK)
        }
      }, Z = aw ? function (T, S, aJ) {
        T[aJ ? at : am](S, ax, !1)
      } : function (aK, T, aL, aJ) {
        var S;
        aL ? (R.put(S = new aj(aK, aJ || T, function (aM) {
          ax.call(aK, aM, aJ)
        }, ax, null, null, !0)), aJ && aK["_on" + aJ] == null && (aK["_on" + aJ] = 0), S.target.attachEvent("on" + S.eventType, S.handler)) : (S = R.get(aK, aJ || T, ax, !0)[0], S && (S.target.detachEvent("on" + S.eventType, S.handler), R.del(S)))
      }, ah = function (aK, T, aL, aJ, S) {
        return function () {
          aJ.apply(this, arguments), aK(T, aL, S)
        }
      }, W = function (aM, aP, aJ, S) {
        var aK = aP && aP[Q](ao, ""), T = R.get(aM, aK, null, !1), aO = {}, aN, aL;
        for (aN = 0, aL = T[P]; aN < aL; aN++) {
          (!aJ || T[aN].original === aJ) && T[aN].inNamespaces(S) && (R.del(T[aN]), !aO[T[aN].eventType] && T[aN][aF] && (aO[T[aN].eventType] = {
            t: T[aN].eventType,
            c: T[aN].type
          }))
        }
        for (aN in aO) {
          R.has(aM, aO[aN].t, null, !1) || Z(aM, aO[aN].t, !1, aO[aN].c)
        }
      }, Y = function (aJ, S) {
        var aK = function (aM, aO) {
          var aN, aL = al(aJ) ? X(aJ, aO) : aJ;
          for (; aM && aM !== aO; aM = aM[f]) {
            for (aN = aL[P]; aN--;) {
              if (aL[aN] === aM) {
                return aM
              }
            }
          }
        }, T = function (aM) {
          var aL = aK(aM.target, this);
          aL && S.apply(aL, arguments)
        };
        return T.__beanDel = {ft: aK, selector: aJ}, T
      }, aI = aw ? function (aK, T, aJ) {
        var S = aH.createEvent(aK ? "HTMLEvents" : "UIEvents");
        S[aK ? "initEvent" : "initUIEvent"](T, !0, !0, au, 1), aJ.dispatchEvent(S)
      } : function (T, S, aJ) {
        aJ = U(aJ, T), T ? aJ.fireEvent("on" + S, aH.createEventObject()) : aJ["_on" + S]++
      }, ae = function (aM, aJ, aO) {
        var aK = al(aJ), aN, T, S, aL;
        if (aK && aJ.indexOf(" ") > 0) {
          aJ = aE(aJ);
          for (aL = aJ[P]; aL--;) {
            ae(aM, aJ[aL], aO)
          }
          return aM
        }
        T = aK && aJ[Q](ao, ""), T && ak[T] && (T = ak[T].base);
        if (!aJ || aK) {
          if (S = aK && aJ[Q](az, "")) {
            S = aE(S, ".")
          }
          W(aM, T, aO, S)
        } else {
          if (av(aJ)) {
            W(aM, null, aJ)
          } else {
            for (aN in aJ) {
              aJ.hasOwnProperty(aN) && ae(aM, aN, aJ[aN])
            }
          }
        }
        return aM
      }, V = function (aN, aR, aJ, S) {
        var T, aQ, aO, aM, aK, aP, aL;
        if (aJ === A && typeof aR == "object") {
          for (aQ in aR) {
            aR.hasOwnProperty(aQ) && V.call(this, aN, aQ, aR[aQ])
          }
          return
        }
        av(aJ) ? (aK = ar.call(arguments, 3), S = T = aJ) : (T = S, aK = ar.call(arguments, 4), S = Y(aJ, T, X)), aO = aE(aR), this === aA && (S = ah(ae, aN, aR, S, T));
        for (aM = aO[P]; aM--;) {
          aL = R.put(aP = new aj(aN, aO[aM][Q](ao, ""), S, T, aE(aO[aM][Q](az, ""), "."), aK, !1)), aP[aF] && aL && Z(aN, aP.eventType, !0, aP.customType)
        }
        return aN
      }, ab = function (aJ, S, aK, T) {
        return V.apply(null, al(aK) ? [aJ, aK, S, T].concat(arguments[P] > 3 ? ar.call(arguments, 5) : []) : ar.call(arguments))
      }, ag = function () {
        return V.apply(aA, arguments)
      }, ay = function (aM, aP, aJ) {
        var S = aE(aP), T, aO, aN, aL, aK;
        for (T = S[P]; T--;) {
          aP = S[T][Q](ao, "");
          if (aL = S[T][Q](az, "")) {
            aL = aE(aL, ".")
          }
          if (!aL && !aJ && aM[aF]) {
            aI(aG[aP], aP, aM)
          } else {
            aK = R.get(aM, aP, null, !1), aJ = [!1].concat(aJ);
            for (aO = 0, aN = aK[P]; aO < aN; aO++) {
              aK[aO].inNamespaces(aL) && aK[aO].handler.apply(aM, aJ)
            }
          }
        }
        return aM
      }, ac = function (aM, aJ, aO) {
        var aL = R.get(aJ, aO, null, !1), T = aL[P], aK = 0, aN, S;
        for (; aK < T; aK++) {
          aL[aK].original && (aN = [aM, aL[aK].type], (S = aL[aK].handler.__beanDel) && aN[i](S.selector), aN[i](aL[aK].original), V.apply(null, aN))
        }
        return aM
      }, aa = {
        on: V,
        add: ab,
        one: ag,
        off: ae,
        remove: ae,
        clone: ac,
        fire: ay,
        Event: ad,
        setSelectorEngine: af,
        noConflict: function () {
          return an[aD] = ap, this
        }
      };
      if (au.attachEvent) {
        var aq = function () {
          var T, S = R.entries();
          for (T in S) {
            S[T].type && S[T].type !== "unload" && ae(S[T].element, S[T].type)
          }
          au.detachEvent("onunload", aq), au.CollectGarbage && au.CollectGarbage()
        };
        au.attachEvent("onunload", aq)
      }
      return af(), aa
    });

    y = bean.noConflict();

    window.bean = x;

    (function (U, Z) {
      var S = h.createElement("div"), T = ("backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex").split(" ");

      function V(ac, ab, aa) {
        return (ac + (ab - ac) * aa).toFixed(3)
      }

      function R(ab, ac, aa) {
        return ab.substr(ac, aa || 1)
      }

      function X(af, ab, ai) {
        var ad = 2, ae, aa, ac, ah = [], ag = [];
        while (ae = 3, aa = arguments[ad - 1], ad--) {
          if (R(aa, 0) == "r") {
            aa = aa.match(/\d+/g);
            while (ae--) {
              ah[i](~~aa[ae])
            }
          } else {
            if (aa[P] == 4) {
              aa = "#" + R(aa, 1) + R(aa, 1) + R(aa, 2) + R(aa, 2) + R(aa, 3) + R(aa, 3)
            }
            while (ae--) {
              ah[i](parseInt(R(aa, 1 + ae * 2, 2), 16))
            }
          }
        }
        while (ae--) {
          ac = ~~(ah[ae + 3] + (ah[ae] - ah[ae + 3]) * ai);
          ag[i](ac < 0 ? 0 : ac > 255 ? 255 : ac)
        }
        return "rgb(" + ag.join(",") + ")"
      }

      function Y(aa) {
        var ab = parseFloat(aa), ac = aa[Q](/^[\-\d\.]+/, "");
        return isNaN(ab) ? {v: ac, f: X, u: ""} : {v: ab, f: V, u: ac}
      }

      function W(aa) {
        var ab, ae = {}, ac = T[P], ad;
        S.innerHTML = '<div style="' + aa + '"></div>';
        ab = S.childNodes[0][O];
        while (ac--) {
          if (ad = ab[T[ac]]) {
            ae[T[ac]] = Y(ad)
          }
        }
        return ae
      }

      p = function (ac, af, ai) {
        ac = typeof ac == "string" ? h.getElementById(ac) : ac;
        ai = ai || {};
        var aa = W(af), ab = ac.currentStyle ? ac.currentStyle : getComputedStyle(ac, x), ag, al = {}, ae = w(), ah = ai.duration || 200, aj = ae + ah, ad, ak = ai.easing || function (am) {
            return (-Math.cos(am * Math.PI) / 2) + 0.5
          };
        for (ag in aa) {
          al[ag] = Y(ab[ag])
        }
        ad = H.setInterval(function () {
          var an = w(), am = an > aj ? 1 : (an - ae) / ah;
          for (ag in aa) {
            ac[O][ag] = aa[ag].f(al[ag].v, aa[ag].v, ak(am)) + aa[ag].u
          }
          if (an > aj) {
            clearInterval(ad);
            ai.after && ai.after()
          }
        }, 10)
      }
    })();

    (function (S) {
      function W() {
        R = 1;
        for (var Z = 0, aa = X[P]; Z < aa; Z++) {
          X[Z]()
        }
      }

      var R = 0, X = [], Y = S.createElement("a");
      /^loade|c/.test(S.readyState) && (R = 1);
      S.addEventListener && S.addEventListener("DOMContentLoaded", function U() {
        S.removeEventListener("DOMContentLoaded", U, !1);
        W()
      }, !1);
      Y.doScroll && S.attachEvent("onreadystatechange", function T() {
        /^c/.test(S.readyState) && (S.detachEvent("onreadystatechange", T), W())
      });
      var V = Y.doScroll ? function (Z) {
        self != top ? !R ? X[i](Z) : Z() : function () {
          try {
            Y.doScroll("left")
          } catch (aa) {
            return s(function () {
              V(Z)
            }, 50)
          }
          Z()
        }()
      } : function (Z) {
        R ? Z() : X[i](Z)
      };
      l = V
    })(document);

    !function (ab, aa) {
      function S(ae, aj) {
        Y[X] = this[X];
        var ai = this, ah = new Y, ag = typeof ae == aa, af = ag ? ae : this, ad = ag ? {} : ae, ac = function () {
          this.initialize ? this.initialize.apply(this, arguments) : (aj || W(ae) && ai.apply(this, arguments), af.apply(this, arguments))
        };
        ac.methods = function (ak) {
          T(ah, ak, ai), ac[X] = ah;
          return this
        }, ac.methods.call(ac, ad).prototype.constructor = ac, ac.extend = arguments.callee, ac[X].implement = ac.statics = function (al, ak) {
          al = typeof al == "string" ? function () {
            var am = {};
            am[al] = ak;
            return am
          }() : al, T(this, al, ai);
          return this
        };
        return ac
      }

      function T(ac, af, ae) {
        for (var ad in af) {
          d(af, ad) && (ac[ad] = typeof af[ad] == aa && typeof ae[X][ad] == aa && Z.test(af[ad]) ? U(ad, af[ad], ae) : af[ad])
        }
      }

      function U(ad, ac, ae) {
        return function () {
          var ag = this.supr;
          this.supr = ae[X][ad];
          var af = ac.apply(this, arguments);
          this.supr = ag;
          return af
        }
      }

      function V(ac) {
        return S.call(typeof ac == aa ? ac : Y, ac, 1)
      }

      var Z = /xyz/.test(function () {
        xyz
      }) ? /\bsupr\b/ : /.*/, Y = function () {
      }, X = "prototype", W = function (ac) {
        return typeof ac === aa
      };
      if (typeof module != "undefined" && module.exports) {
        module.exports = V
      } else {
        var R = ab.klass;
        V.noConflict = function () {
          ab.klass = R;
          return this
        }, ab.klass = V
      }
    }(H, "function");

    J = klass.noConflict();

    window.klass = x;
    function a(V) {
      function T(Y, U, Z) {
        while (0 < Z--) {
          Y[i](U)
        }
      }

      function S(Y, U) {
        return (Y << U) | (Y >>> (32 - U))
      }

      function W(Y, U, Z) {
        return Y ^ U ^ Z
      }

      function R(Y, U) {
        var aa = (U & 65535) + (Y & 65535), Z = (U >>> 16) + (Y >>> 16) + (aa >>> 16);
        return ((Z & 65535) << 16) | (aa & 65535)
      }

      var X = "0123456789abcdef";
      return (function (U) {
        var ab = [], aa = U[P] * 4, Z;
        for (var Y = 0; Y < aa; Y++) {
          Z = U[Y >> 2] >> ((3 - (Y % 4)) * 8);
          ab[i](X.charAt((Z >> 4) & 15) + X.charAt(Z & 15))
        }
        return ab.join("")
      }((function (ao, an) {
        var am, al, ak, aj, ai, ah = ao[P], ad = 1732584193, ac = 4023233417, ab = 2562383102, aa = 271733878, Z = 3285377520, Y = [];
        T(Y, 1518500249, 20);
        T(Y, 1859775393, 20);
        T(Y, 2400959708, 20);
        T(Y, 3395469782, 20);
        ao[an >> 5] |= 128 << (24 - (an % 32));
        ao[(((an + 65) >> 9) << 4) + 15] = an;
        for (var ag = 0; ag < ah; ag += 16) {
          am = ad;
          al = ac;
          ak = ab;
          aj = aa;
          ai = Z;
          for (var af = 0, U = []; af < 80; af++) {
            U[af] = af < 16 ? ao[af + ag] : S(U[af - 3] ^ U[af - 8] ^ U[af - 14] ^ U[af - 16], 1);
            var ae = (function (aq, ap, aw, av, au) {
              var at = (au & 65535) + (aq & 65535) + (ap & 65535) + (aw & 65535) + (av & 65535), ar = (au >>> 16) + (aq >>> 16) + (ap >>> 16) + (aw >>> 16) + (av >>> 16) + (at >>> 16);
              return ((ar & 65535) << 16) | (at & 65535)
            })(af < 20 ? (function (ar, aq, ap) {
              return (ar & aq) ^ (~ar & ap)
            }(al, ak, aj)) : af < 40 ? W(al, ak, aj) : af < 60 ? (function (ar, aq, ap) {
              return (ar & aq) ^ (ar & ap) ^ (aq & ap)
            }(al, ak, aj)) : W(al, ak, aj), ai, Y[af], U[af], S(am, 5));
            ai = aj;
            aj = ak;
            ak = S(al, 30);
            al = am;
            am = ae
          }
          ad = R(ad, am);
          ac = R(ac, al);
          ab = R(ab, ak);
          aa = R(aa, aj);
          Z = R(Z, ai)
        }
        return [ad, ac, ab, aa, Z]
      }((function (aa) {
        var Y = [], U = 255, ab = aa[P] * 8;
        for (var Z = 0; Z < ab; Z += 8) {
          Y[Z >> 5] |= (aa.charCodeAt(Z / 8) & U) << (24 - (Z % 32))
        }
        return Y
      }(V)).slice(), V[P] * 8))))
    }

    H.GUMGUM = (function (aP) {
      var bi = H.Math,
        ae = bi.max,
        bg = bi.min,
        aq = bi.round,
        aE = bi.floor,
        aS = bi.random,
        aR = function (bj) {
        return parseInt(bj, 10)
      },
        ai,
        at,
        ah,
        al,
        R,
        aH = {
        "boolean": function (bj) {
          return String(bj)
        }, "null": function () {
          return "null"
        }, number: function (bj) {
          return isFinite(bj) ? String(bj) : "null"
        }, array: function (bj) {
          var bk = [], bn, bm, bl;
          for (bm = 0; bm < bj[P]; bm++) {
            if ((bn = aH[typeof(bl = bj[bm])]) && typeof(bl = bn(bl)) === "string") {
              bk[i](bl)
            }
          }
          return "[" + bk.join(",") + "]"
        }, object: function (bj) {
          var bl, bm, bk = [];
          if (bj) {
            if (bj instanceof Array) {
              return aH.array(bj)
            }
            for (bl in bj) {
              if (d(bj, bl)) {
                if ((bm = aH[typeof bj[bl]]) && typeof bm(bj[bl]) === "string") {
                  bk[i](aH.string(bl) + ":" + bm(bj[bl]))
                }
              }
            }
          }
          return typeof bk !== "undefined" ? "{" + bk.join(",") + "}" : "null"
        }, string: function (bj) {
          if (/["\\\x00-\x1f]/.test(bj)) {
            bj = bj[Q](/([\x00-\x1f\\"])/g, function (bl, bk) {
              var bn = bk.charCodeAt(), bm = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
              };
              if (bm[bk]) {
                return bm[bk]
              }
              return "\\u00" + aE(bn / 16).toString(16) + (bn % 16).toString(16)
            })
          }
          return '"' + bj + '"'
        }
      },
        X = "FormData" in H,
        bf = "release-912-24-gb86d974",
        aN,
        aI = M,
        bc = [],
        aY,
        az, ag, T, V, av, a1, af, aB, ap, aQ, aL, aO, aW, am, W, a9, aU, a3, aZ, a5, U, a6, a7 = 0, Z, Y, aj, aw, au, a4, a2, ak, ac, a8, a0,
        ad = h.documentElement,
        aA, aD, ay,
        aK = H.ggv2id,
        //bd = "//g2.gumgum.com",
        bd = "/g2.gumgum.com",
        aT = "classid" in h.createElement("object"),
        ax = aT ? aR(F.userAgent.toLowerCase().split("msie")[1]) : 0,
        aG = aT ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' : "",
        aJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABV0RVh0Q3JlYXRpb24gVGltZQA5LzExLzE0F13cFAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAADDSURBVCiRpZPbDYMwDEUPmYARYAIYIZuUOYIIIhWdAzZgBEYgE5QRGKE/SUUj0hZx/2z5XNt5JDh1ph+AEpCtrjcCdaZPgRlYdKMqgGQH3lydDQ12YOFSo25UlQQgocEB6DUKN2qoApg702cREKAUgHSdjgyeEdAC0u8cG+1IFpC6UVviM38avEFwp70zyNyoMeW6UasPRNB5+jHyZO6P1AfXdj4JfhiIL6AFcuLXOAtgiTm3ul6Jv4Pl2tveFQyc/FUvDUZjULjkGSAAAAAASUVORK5CYII=",
        aV = 10001,
        an = function () {
      },
        ar = H.console || {log: an},
        aM = M, ab,
        bb = new Date(),
        ao = "abcdefghijklmnopqrstuvwxyz",
        ba = ao[~~(aS() * ao[P])] + (+bb), S,
        aX = 550,
        be = 550,
        aC = {
          data: {
            mfs: false,
            mw: aX,
            mh: be,
            mcs: {margin: 5}
          }
        },
        aa = {},
        aF = function (bk, bj) {
          var bl = bk && bk.split && bk.split(".")[0], bm = ", visit http://gumgum.com/faq for more information.";
          if (!bl) {
            return ar.log("Your GumGum event name needs to be a valid string" + bm, bk)
          }
          if (!bj.call) {
            return ar.log('Your GumGum event handler for "' + bk + '" cannot be executed' + bm)
          }
          aP.subs[bl] = v;
          y.on(ab, "gumgum." + bk, bj)
        },
        bh = function () {
          var bj = H.ggevents, bk = function (bl) {
            var bm;
            for (bm in bl) {
              if (d(bl, bm)) {
                aF(bm, bl[bm])
              }
            }
          };
          if (bj && bj instanceof Array) {
            while (bj.length) {
              bk(bj.shift())
            }
            bj.push = function (bl) {
              return bl && bk(bl)
            }
          } else {
            bh(H.ggevents = [])
          }
        };
      aP.Stack = [];
      aP.trackingId = aK;
      aP.revision = bf;
      aP.baseUrl = bd;
      aP.Bean = y;
      aP.Klass = J;
      aP.Emile = p;
      aP.has = d;
      aP.euc = c;
      aP.getTS = w;
      aP.msie = aT;
      aP.ieVersion = ax;
      aP.swfcid = aG;
      aP.infoModalOps = aC;
      aP.greyCB = aJ;
      aa[B] = aa[t] = 0;
      aP.highestZindex = 0;
      aP.dtCredentials = {member: "YcXr87z2lpbB"};
      aP.getDigiTrustID = function () {
        var bj = (H.DigiTrust && H.DigiTrust.getIdentitySync) ? H.DigiTrust.getIdentitySync(aP.dtCredentials) : {};
        return (bj.identity ? bj.identity.id : "")
      };
      aP.subs = {};
      aP.newEl = (az = function (bj) {
        return h.createElement(bj)
      });
      aP.addNode = (ag = function (bj, bk) {
        return bj.appendChild(bk)
      });
      aP.rmNode = (T = function (bj, bk) {
        bj = bj ? bj : bk[f];
        return bj ? bj.removeChild(bk) : x
      });
      aP.onError = (Y = function (bj, bk) {
        var bn = 0, bo = [], bm = x, bl = az("img");
        for (bn in bk) {
          if (d(bk, bn)) {
            bo[i](bn.toUpperCase() + ":" + bk[bn])
          }
        }
        bm = {tid: aK, pu: c(n.href), msg: (bj || "other") + ":" + c(bo.join(";"))};
        bl[N] = bd + "/error/js?trackingId=" + bm.tid + "&pageUrl=" + bm.pu + "&message=" + bm.msg;
        return M
      });
      H.assetsFailure = function () {
        return M
      };
      aP.bindCtx = (aj = function (bj, bk) {
        return function () {
          bk.apply(bj, at(arguments))
        }
      });
      aD = (function () {
        try {
          var bl = F, bt = m, bj = bl.plugins, bq = [], bm = x, bs = 0, bn = 0, bk = x, bp = x, br = function (bu) {
            var bw;
            try {
              bw = H[bu]
            } catch (bv) {
              bw = M
            }
            return bw
          };
          if (bj[P]) {
            for (bs in bj) {
              if (d(bj, bs) && (bk = bj[bs]) && bk.name) {
                bm = [];
                for (bn in bk) {
                  if (d(bk, bn) && (bp = bk[bn]) && bp.type) {
                    bm[i](bp.type + "~" + bp.suffixes)
                  }
                }
                bq[i](bk.name + "::" + bm.join(","))
              }
            }
          }
          return [bl.userAgent, bl.platform, bl.product, bl.productSub, bl.vendor, bl.vendorSub, [bt[z], bt[e], bt.colorDepth, bt.pixelDepth, H.devicePixelRatio].join("x"), (new Date())[C](), !!H.console, !!br("sessionStorage"), !!br("localStorage"), !!br("indexedDB"), bq.join(";")].join("###")
        } catch (bo) {
          return Y("getBF", bo) || "BF-ERROR"
        }
      })();
      aP.sbf = (aD = a(aD));
      aP.flashEnabled = (aM = (function () {
        var bk = x, bj = "undefined", bp = "Shockwave Flash", bo = "application/x-shockwave-flash", bn = H.navigator, bl = M;
        if (typeof bn.plugins !== bj && typeof bn.plugins[bp] === "object") {
          if (bn.plugins[bp].description && !(typeof bn.mimeTypes !== bj && bn.mimeTypes[bo] && !bn.mimeTypes[bo].enabledPlugin)) {
            bl = v
          }
        } else {
          if (typeof H.ActiveXObject !== bj) {
            try {
              bk = new H.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
              if (bk && bk.GetVariable("$version")) {
                bl = v
              }
            } catch (bm) {
            }
          }
        }
        return bl
      })());
      aP.reportAd = (S = function () {
        var bv = this, br = bv.data, bw = br.ab || br.i || br.ai, bu = bv.m || br.m || br.ad || br.am, bm = aC, bs = X ? '<label style="line-height:19px">Attachment <input type="file" name="attachment" class="gg-att"></label>' : "", bp = function (bA) {
          var bx = aB.call(bA, "input[type=hidden],textarea"), by = {}, bB, bz;
          if (!X) {
            for (bz = 0; bz < bx.length; bz++) {
              bB = bx[bz];
              by[bB.name] = bB.value
            }
            by = R(by)
          } else {
            by = new FormData(bA)
          }
          a0({
            url: bA.action, postData: by, noCT: v, callback: function (bE) {
              var bD = JSON.parse(bE.response), bC;
              if (bD.success) {
                bA.innerHTML = '<strong style="display:block;text-align:center;font-size:24px">Thank you for your feedback</strong>'
              } else {
                bC = aQ('<strong style="color:red">' + bD.error + "</strong>");
                ag(bA, bC);
                s(function () {
                  T(bA, bC)
                }, 3000)
              }
            }
          })
        }, bk = function () {
          var by = av("ggreport" + bw), bz = az("input"), bx = az("input");
          bz.setAttribute("type", "hidden");
          bx.setAttribute("type", "hidden");
          bz.setAttribute("name", "markup");
          bx.setAttribute("name", "originalMarkup");
          bx.value = bu;
          bz.value = bl;
          ag(by, bz);
          ag(by, bx);
          y.on(by, "submit", function (bA) {
            bA.preventDefault();
            bp(this)
          })
        }, bq = bv.container || bv.element, bl = ag(az("div"), bq.cloneNode(v)), bo = a1.call(bq, "iframe"), bj, bt, bn;
        if (bo.length) {
          bj = bo[0][G](N);
          if (!bj || bj === "about:blank") {
            bn = bo[0].contentDocument || (bo[0].contentWindow && bo[0].contentWindow.document) || "";
            if (bn) {
              bn = a1.call(bn, "html");
              bn = bn[0][u]
            }
          }
        }
        bl = bl[u][Q](/<iframe(.*)iframe>/i, "<iframe><html>" + bn + "</html></iframe>");
        bt = ('                <div style="background:#DCDCDD;border:1px solid #cfcfd0;border-top:none;border-left:none;padding:20px;">                    <img src="//c.gumgum.com/images/logo/all300.png" alt="GumGum" width="225" height="57" style="display:block;margin:0 auto 10px;">                    <form action="//g2.gumgum.com/ad/report" id="ggreport_ADID_" method="POST" enctype="multipart/form-data">                       <input type="hidden" name="pageUrl" value="_PAGEURL_">                       <input type="hidden" name="adId" value="_ADID_">                       <input type="hidden" name="trackingId" value="_TRACKINGID_">                       <input type="hidden" name="user" value="_REPORTER_">                       <div style="margin:3px 0;">                           <textarea name="comments" rows="10" placeholder="Write a brief description of the problem" style="display:block;width:98%;border:1px solid #BBB;padding:1%;background:#e9e9e9"></textarea>                       </div>                       _FILE_                       <div style="text-align:right">                           <input type="submit" value="send" style="cursor:pointer;background:#CFCFD0;padding:7px;border:1px solid #BBB;border-top:none;border-left:none">                       </div>                    </form>                </div>')[Q](/_PAGEURL_/, H.location.href)[Q](/_FILE_/, bs)[Q](/_ADID_/gi, bw)[Q](/_TRACKINGID_/, aK)[Q](/_REPORTER_/, (aP.BD ? aP.BD.username : ""));
        bm.data.mfs = false;
        bm.data.mcc = aJ;
        bm.data.mcs = {margin: "10px"};
        ay.call(bm, bt, true, bk);
        return M
      });
      aP.resetHTML = (ap = function (bj) {
        return bj[Q](/_CLEARCSS_/g, "margin:0;padding:0;position:static;outline:0;background:transparent none;border:none;overflow:visible;visibility:visible;filter:alpha(opacity=100);opacity:1;box-sizing:content-box;-moz-box-sizing:content-box;text-decoration:none;font:normal 12px/1 arial;text-shadow:none;box-shadow:none;color:#000;text-align:left;vertical-align:top;float:none;max-width:none;max-height:none")
      });
      aP.tpl = (aO = function (bk, bn, bm) {
        var bl = function (bo, bp) {
          return bn[bp] === A ? bm : bn[bp]
        }, bj = function (bo, bp) {
          return bn[bp] === A ? bm : parseFloat(bn[bp]).toFixed(2)
        };
        if (bm === A) {
          bm = "N/A"
        }
        return ap(bk)[Q](/\{:([\w]+):\}/g, bl)[Q](/\{#([\w]+)#\}/g, bj)
      });
      aP.inDOM = (aY = function (bj) {
        return bj.parentNode && a5(ad || aA, bj)
      });
      aP.parseHTML = (aQ = function (bk, bl) {
        var bj = az("div"), bm = x;
        bl = bl || 0;
        bk = ap(bk);
        if (/<!--iframe-->/im.test(bk)) {
          bk = bk[Q](/\r|\f|\n|^\s*|\s*$/ig, "").split("<!--iframe-->");
          if (bk[P] === 3) {
            bj[u] = (bk[0] + '<div class="gumgum-iframe-placeholder"></div>' + bk[2]);
            aL(bk[1], af.call(bj, "gumgum-iframe-placeholder")[0], v)
          } else {
            throw"Invalid --iframe-- separators"
          }
        } else {
          bj[u] = bk
        }
        if (bj && bj.children[bl]) {
          bm = T(bj, bj.children[bl])
        } else {
          throw"Invalid parseHTML return Node"
        }
        bj = x;
        return bm
      });
      aP.iframeHTML = (aL = function (bl, bm, bk) {
        var bj = az("iframe");
        bj.allowTransparency = 1;
        bj.frameBorder = 0;
        bj.scrolling = "no";
        bj[N] = "about:blank";
        bj[e] = "100%";
        bj[z] = "100%";
        bl = ap(bl);
        if (bm && !bm.nodeType) {
          bm = [aB(bm) || [M]][0]
        }
        if (!bm) {
          return M
        }
        if (bk && bm[f]) {
          bm[f].replaceChild(bj, bm)
        } else {
          ag(bm, bj)
        }
        s(function () {
          var bn = bj.contentWindow;
          bn.GUMGUM = aP;
          bn.document.open("text/html", "replace");
          bn.document.write('<!DOCTYPE html><br style="display:none;"><style>*{padding:0;margin:0;background:transparent none;border:none;font-size:0}</style>' + bl);
          s(function () {
            bn.document.close()
          }, 50)
        }, 50);
        return bj
      });
      if (!h.querySelectorAll) {
        r = h.createStyleSheet()
      }
      aP.bySelector = (aB = function (bj) {
        return h.querySelectorAll ? at(h.querySelectorAll(bj)) : (function (bo) {
          var bk = h.all, bp = [], bm = 0, bl = 0, bn = bo[Q](/\[for\b/gi, "[htmlFor").split(",");
          for (bm = bn[P]; bm--;) {
            r.addRule(bn[bm], "k:v");
            for (bl = bk[P]; bl--;) {
              if (bk[bl].currentStyle.k) {
                bp[i](bk[bl])
              }
            }
            r.removeRule(0)
          }
          return bp
        })(bj)
      });
      aP.byId = (av = function (bj) {
        return h.getElementById(bj)
      });
      aP.byTag = (a1 = function (bj) {
        var bk = this;
        return bk.getElementsByTagName ? bk.getElementsByTagName(bj) : (bk.all ? ((bj === "*") ? bk.all : bk.all.tags(bj)) : h.getElementsByTagName("*"))
      });
      aP.byClass = (af = function (bj) {
        var bk = this;
        return bk.getElementsByClassName ? at(bk.getElementsByClassName(bj)) : (function (bn) {
          var bm = 0, bo = a1.call(bk, "*"), bl = bo[P], bp = [];
          for (bm = 0; bm < bl; bm++) {
            if (bo[bm] && "className" in bo[bm] && ~bo[bm][q].indexOf(bn)) {
              bp[i](bo[bm])
            }
          }
          return bp
        }).call(bk, bj)
      });
      aP.shrinkURL = (Z = function (bj) {
        try {
          return bj[Q](/^(http(s:)|http:)\/\//, "$2")
        } catch (bk) {
          return bj
        }
      });
      aP.getType = (ai = function (bk) {
        var bj = {
          "[object Boolean]": "boolean",
          "[object Number]": "number",
          "[object String]": "string",
          "[object Function]": "function",
          "[object Array]": "array",
          "[object Date]": "date",
          "[object RegExp]": "regexp",
          "[object Object]": "object"
        };
        return bk === x ? String(bk) : bj[Object.prototype.toString.call(bk)] || "object"
      });
      aP.toArray = (at = function (bj) {
        if (!bj[P]) {
          return []
        }
        return !aT ? Array.prototype.slice.call(bj, 0) : (function (bl) {
          var bn, bo = bl[P], bm, bk = [];
          for (bn = 0; bn < bo && (bm = bl[bn]); bn++) {
            bk[i](bm)
          }
          return bk
        })(bj)
      });
      aP.inArray = (ah = function (bj, bm) {
        for (var bl = 0, bk = bj[P]; bl < bk; bl++) {
          if (bj[bl] === bm) {
            return bl
          }
        }
        return -1
      });
      aP.toJSON = (al = function (bj) {
        try {
          return (aH[typeof bj] || aH.number)(bj)
        } catch (bk) {
          return Y("toJSON", bk)
        }
      });
      aP.serialize = (R = function (bk) {
        var bl = [], bj;
        for (bj in bk) {
          if (d(bk, bj)) {
            bl.push(encodeURIComponent(bj) + "=" + encodeURIComponent(bk[bj]))
          }
        }
        return bl.join("&")
      });
      aP.getJSONP = (a8 = function (bk, bj, bl) {
        var bm = "cb" + (a7++);
        bl = bl || "jsonp";
        bk += ((bk.indexOf("?") > -1) ? "&" : "?") + bl + "=GUMGUM.jsonp." + bm;
        aP.jsonp[bm] = bj;
        a4(bk, ab, function () {
          delete aP.jsonp[bm]
        }, M);
        return v
      });
      aP.jsonp = {};
      aP.xhr = (a0 = function (bn) {
        var bk = bn.url || false, bv = bn.success || bn.callback || an, bs = bn.error || function (bw) {
            Y("xhr", {url: bk, req: bw.statusText});
            return
          }, bq = bn.done || an, bl = bn.postData || x, bm = bn.headers || {}, bo = "withCredentials", br = 1, bp = function () {
          var bw = new XMLHttpRequest();
          if (!(bo in bw) && (typeof H.XDomainRequest !== A)) {
            bw = new H.XDomainRequest();
            br = 0
          }
          return bw
        }, bt = bp(), bj = bl ? "POST" : "GET", bu;
        if (!bt || !bk) {
          return
        }
        if (br) {
          bt.open(bj, bk, v)
        } else {
          bt.open(bj, bk)
        }
        bt[bo] = bn[bo] || M;
        if (bj === "POST" && !bn.noCT) {
          bt.setRequestHeader("Content-type", "multipart/form-data")
        }
        for (bu in bm) {
          if (d(bm, bu)) {
            bt.setRequestHeader(bu, bm[bu])
          }
        }
        bt.onload = function () {
          bv(bt);
          bq(bt)
        };
        bt.onerror = function () {
          bs(bt);
          bq(bt)
        };
        return bt.send(bl)
      });
      aP.loadScript = (a4 = function (bj, bl, bm, bk) {
        au(bj, {parent: bl, callback: bm, preserve: bk, type: "script"})
      });
      aP.loadImg = (a2 = function (bj, bl, bm, bk) {
        au(bj, {parent: bl, callback: bm, preserve: bk, type: "img"})
      });
      aP.loadHtml = aP.loadHTML = (ak = function (bk, bj, bl) {
        au(bk, {parent: bj, callback: bl, type: "html"})
      });
      aP.loadPixels = (ac = function (bn, bm) {
        var bl = 0, bk = x, bj = bn ? bn[P] : 0;
        for (; bl < bj && (bk = bn[bl]); bl++) {
          if (bk.u && (!bm.evt || (bm.evt && bk.e === bm.evt))) {
            au(bk.u[Q](/GGUID/ig, bm.gguid || bl), {parent: bm.parent || ab, type: bk.t})
          }
        }
      });
      aP.loadObj = (au = function (bn, bj) {
        var bp = x, bo = bj || {}, bt = bo.parent || ab, bx = bo.callback || M, bs = (bo.preserve === M) ? M : v, br = bo.type || M, bm = bo.delay || 10, bw = bo.cb !== M ? ((bn.indexOf("?") > -1) ? "&" : "?") + "_" + (w()) : "", bl = function (by) {
          if (by && by.type === "error") {
            Y("loadObj", {msg: c(bn) + " failed to load."})
          }
          bp.onload = bp.onreadystatechange = bp.onerror = x;
          if ("clearAttributes" in bp) {
            bp.clearAttributes()
          }
          while (bp.lastChild) {
            T(bp, bp.lastChild)
          }
          if (bp[f] && !bs) {
            T(M, bp)
          }
          bv()
        }, bv = function () {
          return (bx && "call" in bx) ? bx() : v
        }, bk = function (by) {
          if (!(by = bp.readyState) || by === "complete" || by === "loaded" || by === 4) {
            bl()
          }
        }, bu = function () {
          bp[N] = bn + bw;
          ag(bt, bp)
        };
        if (!br) {
          return false
        }
        switch (v) {
          case ((br === "h" || br === "html")):
            try {
              bn = (aT && ax < 10 ? bn[Q](/<script /gi, "<script defer=true ") : bn);
              ag(bt, aQ(bn));
              return bv()
            } catch (bq) {
              return Y("loadHTML", bq)
            }
            break;
          case ((br === "i" || br === "img")):
            bp = az("img");
            break;
          case ((br === "s" || br === "scr" || br === "script")):
            bp = h.createElementNS ? h.createElementNS((h.head && h.head.namespaceURI) || "http://www.w3.org/1999/xhtml", "script") : az("script");
            bp.setAttribute("async", v);
            bp.setAttribute("data-cfasync", M);
            bp.setAttribute("type", "text/javascript");
            break;
          default:
            bp = az("iframe");
            bs = v;
            break
        }
        bp[O][b] = D;
        bp.onload = (bp.onreadystatechange = (bp.onerror = bk));
        s(bu, bm);
        return v
      });
      aP.setStyle = (am = function (bm, bn) {
        var bj, bp, bo, bl;
        if (!bm) {
          return
        }
        try {
          if (ai(bm) !== "array" && bm[P]) {
            bm = at(bm)
          }
          if (ai(bm) !== "array") {
            bm = [bm]
          }
          bl = bm[P];
          for (bp = 0; bp < bl; bp++) {
            if ("tagName" in bm[bp]) {
              for (bj in bn) {
                if (d(bn, bj)) {
                  bj = (bj.indexOf("-") > -1) ? aw(bj, M) : bj;
                  switch (v) {
                    case bj === j:
                    case bj === "zoom":
                    case bj === o:
                    case isNaN(bn[bj]):
                      bo = bn[bj];
                      break;
                    default:
                      bo = bn[bj] + "px"
                  }
                  bm[bp][O][bj] = bo
                }
              }
            }
          }
        } catch (bk) {
          Y("setStyle", bk)
        }
      });
      aP.getStyle = (aW = function (bk, bm) {
        try {
          if (!(bk = ((bk && bk.tagName) ? bk : (typeof bk === "string") ? h.getElementById(bk) : M))) {
            return x
          }
          var bl = H.getComputedStyle ? h.defaultView.getComputedStyle(bk, x).getPropertyValue(bm) : (bk.currentStyle ? bk.currentStyle[aw(bm)] : x);
          bl = (!H.getComputedStyle && /border-\w+-width/gi.test(bm)) ? bl[Q](/thin|medium|thick/, 0) : bl;
          return /width|height/gi.test(bm) ? aR(bl) : bl
        } catch (bj) {
          Y("getStyle", bj)
        }
      });
      aP.getWH = (W = function (bl) {
        var bj = x, bk = x;
        if ("setInterval" in bl) {
          bk = bg(ad.clientWidth || 9000000, H.innerWidth || 9000000);
          bj = bg(ad.clientHeight || 9000000, H.innerHeight || 9000000)
        } else {
          if (bl.nodeType === 9) {
            bk = ae(ad.clientWidth, ad[L], ad.scrollWidth);
            bj = ae(ad.clientHeight, ad[I], ad.scrollHeight)
          } else {
            bj = aW(bl, "height") || bl[I];
            bk = aW(bl, "width") || bl[L]
          }
        }
        return {width: aR(bk), height: aR(bj)}
      });
      aP.getOffset = (a9 = function (bj) {
        var bk = x, bn = 0, bm = 0, bo = aU(bj);
        if (bj.getBoundingClientRect) {
          try {
            bk = bj.getBoundingClientRect()
          } catch (bl) {
            bk = M
          }
          if (bk) {
            return {
              top: aE(aq(bk[B]) + ae(H.pageYOffset || 0, ad.scrollTop, aA.scrollTop, 0) - ae(ad.clientTop, aA.clientTop, 0)) + aa[B],
              left: aE(aq(bk[t]) + ae(H.pageXOffset || 0, ad.scrollLeft, aA.scrollLeft, 0) - ae(ad.clientLeft, aA.clientLeft, 0)) + aa[t],
              height: aE(bk[z] || bj[I]),
              width: aE(bk[e] || bj[L]),
              zIndex: bo
            }
          }
        }
        do {
          bn += bj.offsetTop;
          bm += bj.offsetLeft
        } while ((bj = bj.offsetParent));
        return {top: ~~bn, left: ~~bm, height: ~~bj[I], width: ~~bj[L], zIndex: bo}
      });
      aP.getZindex = (aU = function (bl) {
        var bm = bl, bk = 0;
        try {
          if (!aP.AT || !aP.AT.zIndexOffset) {
            return aV
          }
          do {
            bk = aW(bm, "z-index")
          } while ((bm = bm[f]) && bm !== aA && (bk === "auto" || bk === 0))
        } catch (bj) {
          Y("getZindex", bj)
        }
        return aP.AT.zIndexOffset + aR(~~bk)
      });
      aP.getImageSrc = (a3 = function (bj) {
        return (bj && (bj.currentSrc || bj[N] || bj[G](N))) || ""
      });
      aP.getHighestZindex = (aZ = function (bn, bj) {
        if (!bj && aP.highestZindex) {
          return aP.highestZindex
        }
        bn = bn || aA;
        var bl, br, bo, bq = 1, bm = bn.childNodes, bk = bm.length;
        try {
          for (bo = 0; bo < bk; bo++) {
            bl = bm[bo];
            if (bl.nodeType !== 1 || !U(bl)) {
              continue
            }
            br = ~~(aW(bl, "z-index"));
            if (br > bq) {
              bq = br
            }
            if (bl.childNodes.length && (br = aZ(bl, v)) > bq) {
              bq = br
            }
          }
        } catch (bp) {
          Y("getHighestZindex", bp)
        }
        return (aP.highestZindex = bq)
      });
      aP.containsEl = (a5 = function (bj, bk) {
        var bl = "compareDocumentPosition";
        if (bl in ad) {
          return (bj[bl](bk) & 16) === 16
        } else {
          if ("contains" in ad) {
            return bj !== bk && bj.contains(bk)
          } else {
            while ((bk = bk[f])) {
              if (bk === bj) {
                return v
              }
            }
          }
        }
        return M
      });
      aP.caseCSS = (aw = function (bk, bj) {
        return bj ? bk[Q](/([A-Z]{1})/g, function (bl, bm) {
          return bm ? "-" + bm[k]() : bl
        }) : bk[Q](/-([a-z]{1})/g, function (bl, bm) {
          return bm ? bm.toUpperCase() : bl
        })
      });
      aP.isElementVisible = (U = function (bm) {
        try {
          var bl = ~~((aW(bm, o) || 1) * 100), bk = ~~((bm[O].filter || "alpha(opacity=100)").match(/alpha\(opacity=(\d+)\)/)[1]), bo = v, bn = (aP.AT && aP.AT.minOpaque ? aP.AT.minOpaque : 70), bq = (aW(bm, g) !== K), bp = (aW(bm, b) !== D);
          if (bl < bn || bk < bn) {
            bo = M
          }
          return (bo && bq && bp)
        } catch (bj) {
          Y("isElementVisible", bj);
          return v
        }
      });
      aP.evp = (a6 = function (bs, bq) {
        bq = bq || W(H);
        var bx, bw, bp, bt, bl, by, bo, bv, bu, bk = a9(bs), bn = parseInt(aP.bodyEl.scrollTop || ad.scrollTop, 10), br = parseInt(aP.bodyEl.scrollLeft || ad.scrollLeft, 10), bj = bq[z], bm = bq[e];
        if (bk[B] > (bn + bj) || bk[t] > (br + bm)) {
          bx = 0
        } else {
          if (bk[B] > bn && (bk[B] + bk[z]) < (bn + bj) && bk[t] > br && (bk[t] + bk[e]) < (br + bm)) {
            bx = 100
          } else {
            bt = ae(0, bn - bk[B]);
            bl = ae(0, (bk[B] + bk[z]) - (bn + bj));
            by = bk[z] - (bt + bl);
            bw = by / (bk[z] / 100);
            bo = ae(0, br - bk[t]);
            bv = ae(0, (bk[t] + bk[e]) - (br + bm));
            bu = bk[e] - (bo + bv);
            bp = bu / (bk[e] / 100);
            bx = aq(bg(bw, bp) * (ae(bw, bp) / 100))
          }
        }
        return bx
      });
      aP.openModal = (ay = function (bk, bs, bm) {
        try {
          var bp = x, br = this, bl = aA, bn = br.data || {}, bu = bn.mfs || M, bo = aP.AT && aP.AT.tweakOverflow, bj = x, bq = x, bv = x;
          if (aP.closeModal) {
            return M
          }
          if (aP[bk] && aP[bk].openAd) {
            return aP[bk].openAd()
          }
          bp = {
            html: (function () {
              var bw;
              if (bs) {
                bw = bk
              } else {
                if (/swf/i.test(bk)) {
                  bw = ('<object _CID_ id="_T_" name="_T_" width="100%" height="100%" data="_U_" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" background="transparent" style="background:transparent"><param name="wmode" value="transparent"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="movie" value="_U_"></object>')[Q](/_T_/g, (w()))[Q](/_CID_/g, aG)
                } else {
                  bw = ('<iframe name="ggmodal" frameborder="0" scroll="no" scrolling="no" allowTransparency="allowTransparency" src="_U_" width="100%" height="100%"></iframe>')[Q](/_U_/g, bk)
                }
              }
              return bw
            }()),
            of: [bl[O].overflow, ad[O].overflow],
            mw: bn.mw ? bn.mw : "100%",
            mh: bn.mh ? bn.mh : "100%",
            mc: bn.mcc ? bn.mcc : "//c.gumgum.com/ads/com/gumgum/close-rs.png",
            zi: aZ(x, v) + 11
          };
          if (bo) {
            bl[O].overflow = K;
            if (!!aT) {
              ad[O].overflow = K
            }
          }
          aP.closeModal = function (bw) {
            bw.stopPropagation();
            if (bo) {
              bl[O].overflow = bp.of[0];
              if (!!aT) {
                ad[O].overflow = bp.of[1]
              }
            }
            y.remove(bv, "click");
            T(ab, bj);
            aP.closeModal = x;
            bp = x
          };
          bj = aQ('<div style="_CLEARCSS_"><div style="_CLEARCSS_;position:absolute;width:100%;height:100%">' + (bp.html) + "</div></div>");
          bj[q] = "GGModal_" + (bn.uid || "StandAlone");
          am(bj, {
            position: "fixed",
            zIndex: bp.zi,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "transparent url(//c.gumgum.com/ads/com/gumgum/bg/black85.png) repeat scroll 0 0",
            _top: 'expression(eval(document.compatMode && document.compatMode=="CSS1Compat") ? documentElement.scrollTop +(documentElement.clientHeight-window.clientHeight) : document.body.scrollTop +(document.body.clientHeight-window.clientHeight))'
          });
          if (!!bn.mos) {
            am(bj, bn.mos)
          }
          bq = bj.childNodes[0];
          if (!bu && ~~bp.mw && ~~bp.mh) {
            am(bq, {
              left: "50%",
              top: "50%",
              width: bp.mw,
              height: bp.mh,
              marginLeft: -(bp.mw / 2),
              marginTop: -(bp.mh / 2)
            })
          }
          if (!!bn.mss) {
            am(bq, bn.mss)
          }
          bv = aQ('<div style="_CLEARCSS_;position:absolute;top:0;right:0"></div>');
          bp.clb = ap('<img src="' + bp.mc + '" style="_CLEARCSS_;display:block;padding:0;margin:0;border:none;cursor:pointer" />');
          if (bn.mcd) {
            bv[u] = ap('<span style="_CLEARCSS_;display:block;height:15px;min-width:15px;text-align:center;font:bold 13px/15px monospace;color:#fff;background:#000;border-radius:12px;border:2px solid #fff">&nbsp;</span>');
            bp.to = 0;
            bp.st = function () {
              if (bp.to >= bn.mcd) {
                E(bp.iv);
                bv[u] = bp.clb;
                y.add(bv, "click", aP.closeModal)
              } else {
                bv.children[0][u] = (bn.mcd - bp.to) / 1000;
                bp.to += 1000;
                bp.iv = s(bp.st, 1000)
              }
            };
            bp.st()
          } else {
            bv[u] = bp.clb;
            y.add(bv, "click", aP.closeModal)
          }
          if (!!bn.mcs) {
            am(bv, bn.mcs)
          }
          ag(bq, bv);
          ag(ab, bj);
          if (bm) {
            bm()
          }
          ab.focus();
          return M
        } catch (bt) {
          return !Y("openModal", bt)
        }
      });
      aP.container = (ab = aQ('<div style="_CLEARCSS_" id="_GGID_"><br style="display:none"><style>html ._GGID_ *{_CLEARCSS_}@media \0screen {html ._GGID_ *{-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)" !important}}</style></div>'[Q](/_GGID_/g, ba)));
      bh();
      aP.onReady = (aN = function (bk) {
        if (bk === v) {
          aI = v;
          for (var bj = 0; bj < bc[P]; bj++) {
            bc[bj]()
          }
        } else {
          if (bk.call && bk.apply) {
            if (aI) {
              bk()
            } else {
              bc.push(bk)
            }
          }
        }
      });
      V = function () {
        aA = aA || h.body || a1.call(h, "body")[0] || a1.call(h, "div")[0];
        if (aA) {
          ag(aA, ab);
          aP.bodyEl = aA;
          if (aW(aA, "position") === "static") {
            aa[B] = aW(aA, "border-top-width");
            aa[t] = aW(aA, "border-left-width")
          } else {
            aa[B] = aR(aW(aA, "margin-top")) * -1;
            aa[t] = aR(aW(aA, "margin-left")) * -1
          }
          aN(v)
        } else {
          s(V, 100)
        }
      };
      l(V);
      return aP
    })({})
  })(window, document)
}

if (window.GUMGUM) {
  (function (f, B, d) {
    if (f.slots) {
      return
    }
    f.slots = 1;
    var o = true, F = false, q = null, J = "length", x = "top", c = "width", v = "height", K = "getTime", y = "getTimezoneOffset", w = "mouseenter mouseleave", a = f.euc, D = f.tpl, I = f.addNode, C = f.loadObj, n = f.flashEnabled, b = f.baseUrl, p = f.getJSONP, m = f.bindCtx, A = f.evp, t = f.Bean, L = q, k = q, r = q, u = q, h = q, e = q, g = top.navigator, l = B.console || {
        log: function () {
        }
      }, z = f.newEl("div"), i = B.location.href, s = i.match(/#ggslotad=(.+)&ggslot=(.+)$/) || F, H = f.getWH(B), j = {};
    t.on(B, "resize", function () {
      H = f.getWH(B);
      t.fire(B, "slot.scroll")
    });
    try {
      k = {pu: a(top.location.href), ru: a(top.document.referrer), ce: g.cookieEnabled, fs: n, bf: f.sbf}
    } catch (E) {
      l.log("GumGum Slot Ad", "Initialize", E);
      return {
        display: function () {
        }
      }
    }
    L = function () {
      var G = f.getDigiTrustID();
      return G ? "&dt=" + G : ""
    };
    r = function (N, G) {
      var P = k, M = new Date(), O = b + "/slot?si={:slot:}&pu={:pu:}&ru={:ru:}&ce={:ce:}&fs={:fs:}&bf={:bf:}&lt={:lt:}&to={:to:}" + L();
      if (s[J]) {
        if (~~s[2] === N.slot) {
          P.eid = s[1];
          O += (P.eid ? "&eAdBuyId={:eid:}" : "")
        }
      } else {
        P.id = N.id;
        O += (N.id ? "&adBuyId={:id:}" : "")
      }
      P.slot = N.slot;
      P.lt = M[K]();
      P.to = M[y]();
      p(D(O, P), function (Q) {
        new e(Q, P, G)
      }, "cb")
    };
    e = new f.Klass({
      initialize: function (O, M, G) {
        var N = this;
        if (!O || !M || !G) {
          return
        }
        N.isHovered = F;
        N.data = O;
        N.adid = O.ad ? O.ad.i : F;
        N.options = M;
        N.container = G;
        N.build();
        N.firePixels();
        N.getEventResources("IMPRESSION");
        N.setHoverTracking();
        N.getAdmin()
      }, build: function () {
        var O = this, P = O.data, N = (P.ad || P.pb), G = O.container, M = N.m;
        if (N) {
          if (N.ii && !/<!--iframe-->/im.test(M)) {
            O.adUnit = f.iframeHTML(M, G)
          } else {
            O.adUnit = f.parseHTML("<div style='display:block;width:100%;height:100%'>" + M + "</div>");
            I(G, O.adUnit)
          }
          I(G, f.parseHTML('<img src="//c.gumgum.com/images/pixel.gif" class="ad-standalone-img" style="display:none;visibility:hidden;">'));
          if (f.subs.slot) {
            t.fire(f.container, "gumgum.slot.load", {container: G, ad: f.getOffset(O.adUnit)})
          }
          O.triggerImpression()
        }
        if (P.ad) {
          j[O.data.ad.i] = function () {
            if (!P.viewable50 && A(O.adUnit, H) >= 50) {
              O.triggerViewability(50)
            }
            if (!P.viewable100 && A(O.adUnit, H) === 100) {
              O.triggerViewability(100)
            }
          };
          t.on(B, "slot.scroll", j[O.data.ad.i]);
          t.on(B, "scroll", function () {
            t.fire(B, "slot.scroll")
          });
          j[O.data.ad.i]()
        }
      }, firePixels: function () {
        var M = 0, G = q, N = this, O = N.data, P = O.pxs;
        if (P && P.scr && P.scr[J]) {
          P = P.scr;
          for (; M < P[J]; M++) {
            G = P[M];
            C(G.u, {parent: N.container, type: G.t, delay: G.d})
          }
        }
      }, setHoverTracking: function () {
        var G = this;
        G.hoverTO = F;
        if (G.adid && G.adUnit) {
          t.add(G.container, w, m(G, G.onMouseHover))
        }
      }, onMouseHover: function (G) {
        var M = this;
        if (M.isHovered) {
          t.off(M.container, w)
        } else {
          if (G.type === "mouseenter" || G.type === "mouseover") {
            M.hoverTO = B.setTimeout(m(M, M.triggerHoverEvent), 500)
          } else {
            if (G.type === "mouseleave" || G.type === "mouseover") {
              B.clearTimeout(M.hoverTO)
            }
          }
        }
      }, triggerHoverEvent: function () {
        var G = this, M = G.options;
        M.t = f.trackingId;
        M.ab = G.data.ad.i;
        f.loadImg(b + D("/ad/hover?t={:t:}&ab={:ab:}&pu={:pu:}&bf={:bf:}", M), G.container);
        G.isHovered = o;
        t.off(G.container, w)
      }, triggerImpression: function () {
        var M = this, G = M.data.ad;
        if (G && f.has(G, "ipu")) {
          C(G.ipu, {type: "image", parent: M.container})
        }
      }, triggerViewability: function (O) {
        O = O || 50;
        var M = this, N = M.data, P = M.options, G;
        P.t = f.trackingId;
        P.ab = M.data.ad.i;
        G = b + D("/ad/viewable" + O + "?t={:t:}&ab={:ab:}&pu={:pu:}&bf={:bf:}", P);
        B.setTimeout(function () {
          if ((N.viewable100 && O === 100) || (N.viewable50 && O === 50)) {
            return F
          }
          if (A(M.adUnit, H) < O) {
            return
          }
          f.loadImg(G);
          if (O >= 50) {
            N.viewable50 = o
          }
          if (O === 100) {
            t.off(B, "scroll slot.scroll", j[P.ab]);
            N.viewable100 = o
          }
        }, 1000);
        return o
      }, getEventResources: function (G) {
        var N = 0, M = q, O = this, P = O.data, Q = P.scr;
        if (Q && Q[J]) {
          for (; N < Q[J]; N++) {
            M = Q[N];
            if (M.e === G && M.u) {
              C(M.u, {parent: O.container, type: M.t, delay: M.d})
            }
          }
        }
      }, getAdmin: function () {
        var G = this, M = G.data;
        if (M.bdg) {
          M.bdg.pb = M.pb;
          M.bdg.m = (M.ad && M.ad.m) || "";
          f.Stack.push({type: "SlotBadge", data: M.bdg, unit: G.container});
          if (!f.BD && !f.pubdata && M.bdg.slot) {
            u(M.bdg.slot.t)
          }
        }
      }
    });
    u = function (G) {
      var M = location.href, O = f.getWH(B), N = f.pubdata = f.toJSON({
        t: G,
        v: 1,
        r: f.revision,
        fs: n,
        rf: a(d.referrer),
        pu: a(M),
        ce: navigator.cookieEnabled,
        vp: {ii: (B[x] && top !== B), w: O[c], h: O[v]},
        sc: {w: B.screen[c], h: B.screen[v], d: B.devicePixelRatio || 1}
      });
      p(b + "/badge/main?pubdata=" + N, function (P) {
        if (P.bdg && !f.BD) {
          f.loadScript(b + "/javascripts/ggadmin.js", f.gContainer, function () {
            f.startBadges(P.bdg)
          }, F)
        }
      }, "callback")
    };
    f.display = function (N) {
      var G = f.byTag.call(d, "script"), M = G[G[J] - 1], O = N.container || M.parentNode;
      return (M && O) ? r(N, O) : F
    };
    h = function () {
      var P = "data-gg-slot", N = 0, O = q, G = q, M = f.bySelector("[" + P + "]");
      I(f.bodyEl, z);
      for (; N < M[J]; N++) {
        O = M[N];
        if (O.dataset && O.dataset.ggSlot) {
          G = ~~(O.dataset.ggSlot);
          delete O.dataset.ggSlot
        } else {
          G = ~~(O.getAttribute(P));
          O.removeAttribute(P)
        }
        if (G) {
          r({slot: G}, M[N])
        }
      }
    };
    f.onReady(h);
    B.GumGumAd = B.GUMGUM
  }(GUMGUM, window, document))
}

if (window.GUMGUM) {
  (function (bo, aQ, bq, aE) {
    if (bo.ggv2) {
      return
    }
    bo.ggv2 = 1;
    var O = null, bb = false, ag = true, bu = "length", x = "push", y = "style", aV = "width", bh = "height", a = "display", aK = "className", aC = "innerHTML", aN = "parentNode", aS = "top", ap = "left", az = "right", aO = "bottom", e = "block", B = "none", S = "visibility", l = "zIndex", Y = "hidden", d = "offsetWidth", bG = "offsetHeight", bt = "opacity", ad = "visible", ac = "overflow", s = "getTime", bz = "getTimezoneOffset", C = "replace", q = "toLowerCase", aT = "data", an = "container", aM = "element", bp = "cacheImages", F = "cacheImagesIndex", bl = "cacheImagesNatural", aL = aQ.Math, V = aL.max, br = aL.floor, aW = aL.random, L = aL.ceil, ae = aL.abs, Q = bo.getType, bi = bo.toJSON, al = bo.newEl, am = bo.addNode, aU = bo.rmNode, c = bo.inDOM, aq = bo.byId, T = bo.bySelector, a0 = bo.byTag, aP = bo.parseHTML, bk = bo.iframeHTML, aJ = bo.tpl, bc = bo.getStyle, X = bo.setStyle, aF = bo.getWH, bH = bo.getOffset, af = bo.getImageSrc, a3 = bo.getHighestZindex, K = bo.containsEl, bI = bo.isElementVisible, p = bo.evp, N = bo.shrinkURL, bd = bo.onError, b = bo.getJSONP, u = bo.getDigiTrustID, E = bo.loadScript, D = bo.loadImg, g = bo.loadObj, H = bo.loadHTML, a5 = bo.reportAd, J = bo.openModal, bE = aQ.ggaffid ? ("&ai=" + encodeURIComponent(aQ.ggaffid)) : "", ax = bo.baseUrl, bA = bo.sbf, aH = bq.documentElement, at = bo.flashEnabled, bf = bo[an], a6 = bo.ieVersion, j = bo.infoModalMinHeight, ak = bo.infoModalMinWidth, W = bo.infoModalOps, w = "//c.gumgum.com/ads/com/gumgum/gumgum-info.html", R = bo.msie, i = bo.revision, aw = 850, f = bo.swfcid, bm = aQ.ggv2id, av = '<img src="//c.gumgum.com/images/pixel.gif" class="ad-standalone-img" alt="gumgum-verify" style="pointer-events:none!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;opacity:0!important;filter:alpha(opacity=0);z-index:-1" />', a4 = O, v = 2147483640, P, bw, bj, aA, bC, aD, aY, bF, a2, I, ay, aR, a7, au, m, be, ao, by, ah, a1, ab, r, n = function () {
    }, bx = function (G, bJ) {
      return Object.prototype.hasOwnProperty.call(G, bJ)
    }, bs = bo.euc, bg = bo.getTS, h = aQ.navigator, aI = aQ.location, aj = aI.protocol, a9 = (aj === "https:"), aG = aQ.setTimeout, bv = aQ.clearTimeout, ar = aQ.setInterval, bn = aQ.clearInterval, aX = function () {
    }, ba = aQ.console || {
        log: aX,
        warn: aX
      }, o = aE, t = aE, Z = ag, k = {}, ai = {}, z = {}, bB, A, aB, U, bD, aZ = bo.Emile, a8 = bo.Bean, M = bo.Klass;

    function aa(G) {
      this.name = "GumGum Error";
      this.message = G
    }

    aa.prototype = new Error();
    aa.prototype.constructor = aa;
    ah = function () {
      if (!bm) {
        throw new aa("ggv2id variable not set")
      }
      return ag
    };
    a1 = function (bK, bJ) {
      var G = bb;
      switch (ag) {
        case /js.moatads.com/.test(bK):
          G = bJ.moat;
          break;
        default:
          G = bJ.fallback || bf
      }
      return G
    };
    ab = function (bQ, bM, bJ) {
      var bK, bN = a0.call(bQ, "iframe"), G = function (bR) {
        var bV = bR.target, bT = bV.contentWindow, bU = function (bY) {
          return X(bV, bY)
        }, bS = bo.bindCtx(W, J), bX;
        bK = aW().toString(36).substring(2);
        try {
          bX = new URL(bR.target.src);
          bT.postMessage({ggt: bK}, bX.origin);
          ai[bK] = bM;
          z[bK] = bJ || {};
          z[bK][y] = bU;
          z[bK].openModal = bS
        } catch (bW) {
          bd("createPostMessageConnection", bW.message)
        }
      }, bO = 0, bL = bN.length, bP;
      r();
      for (; bO < bL; bO++) {
        bP = bN[bO];
        if (bP.src && bP.src !== "about:blank") {
          a8.on(bP, "load", G)
        }
      }
    };
    r = function () {
      r = n;
      a8.on(aQ, "message", function (G) {
        var bL = G.data, bJ = (bL && bL.ggt), bK = (bL && bL.fn), bM = (bL && bL.params) || [];
        if (ai[bJ] && z[bJ][bK]) {
          z[bJ][bK].apply(O, bM)
        }
      })
    };
    bj = function (b5, bR) {
      var bK = a4 || aF(aQ), bJ = parseInt(bo.bodyEl.scrollTop || aH.scrollTop, 10), bY = parseInt(bo.bodyEl.scrollLeft || aH.scrollLeft, 10), b3 = bK[bh], bP = bK[aV], bS = bJ + b3, bZ = bY + bP, bL = bR[aS], G = bR[ap], b4 = bR[bh] || 1, bO = bR[aV], bW = bL + b4, bV = G + bO, bQ = (bL > bJ && bL < bS), b2 = (bW > bJ && bW < bS), bX = (bW > bS && bL < bJ), b0 = (G > bY && G < bZ), bU = (bV > bY && bV < bZ), bN = (G < bY && bV > bZ), bM = aB.inViewRatio, b1 = G + (bO * bM), bT = bL + (b4 * bM);
      if (!bI(b5)) {
        return bb
      }
      if (b2 && bU) {
        return ag
      }
      if (!bM || bM > 1) {
        return (bQ || b2) && (b0 || bU)
      }
      if ((bX || bN) && (b1 < bZ && bT < bJ)) {
        return ag
      }
      return ((b1 > bY && b1 < bZ) && (bT > bJ && bT < bS))
    };
    bF = function (bL, bK) {
      var bM = O, bO = bb, bJ = O, bN = O, G = function (bP) {
        var bQ = [];
        try {
          bQ = T(bP)
        } catch (bR) {
          if (!k[bP]) {
            k[bP] = 'GumGum: invalid CSS selector: "' + bP + '"';
            ba.warn(k[bP])
          }
        }
        return bQ
      };
      if (typeof bL === "string") {
        bL = [bL]
      }
      bN = G(bL.join(","));
      for (bM = 0; bM < bN[bu] && (bJ = bN[bM]); bM += 1) {
        if (K(bJ, bK)) {
          bO = ag;
          break
        }
      }
      return bO
    };
    bo.reloadInScreen = (I = function () {
      if (!ah()) {
        return
      }
      if (Z && t !== aE && (t = (bg() - t)) < 3000) {
        bd("reloadInScreen", {message: "reload inscreen called " + t + "ms ago"})
      }
      t = bg();
      a8.fire(bf, "inscreen.badge.close");
      if (o) {
        bo[o].closeAd(ag)
      }
      var G = aq("PassbackWrapperA");
      if (G && K(bf, G)) {
        aU(O, G)
      }
      E(bo.baseUrl + "/services/get?callback=GUMGUM.startServices&product=IN_SCREEN&pubdata=" + bo.pubdata + "&bf=" + bo.sbf + "&lt=" + (bg()) + "&to=" + (new Date().getTimezoneOffset()) + bo.affiliateId, bf, O, bb);
      return bb
    });
    be = function () {
      var G = aI.href, bN = (a4 = bo.getWH(aQ)), bL = {
        t: bm,
        v: 1,
        r: i,
        fs: at,
        rf: bs(bq.referrer),
        pu: bs(G),
        ce: h.cookieEnabled,
        vp: {ii: (aQ[aS] && top !== aQ), w: bN[aV], h: bN[bh]},
        sc: {w: aQ.screen[aV], h: aQ.screen[bh], d: aQ.devicePixelRatio || 1}
      }, bK = new Date(), bM = (G.match(/#ggad=(.+)$/) || [O, bb])[1], bJ = u();
      if (bJ) {
        bL.dt = bJ
      }
      W[aT].mfs = (bN[aV] < ak || bN[bh] < j);
      if (bE) {
        bL.ai = aQ.ggaffid
      }
      bo.pubdata = bi(bL);

      // 调度 IN-IMAGE 广告
      E(ax + "/services/get?callback=GUMGUM.startServices&pubdata=" + bo.pubdata + "&bf=" + bA + "&lt=" + (+bK) + "&to=" + (bK[bz]()) + (bM ? "&eAdBuyId=" + bM : ""), bf, O, bb)
    };
    bo.startServices = function (G) {
      var bL = (!aB && (!!G.ads || !!G.trk)), bK = G.nat && G.nat.active, bJ = (G.pag && G.pag.mobile) ? "mobile" : "desktop";
      if (G.spa && G.spa.active) {
        bo.saad = new bD(G.spa)
      }
      if (G.spa && G.spa.bdg) {
        bo.Stack.push({type: "SponsoredAccessBadge", data: G.spa})
      }
      if (bK) {
        a7(G.nat)
      }
      if (G.ins) {
        ao(G.ins, G)
      }
      if (G.ads && !A) {
        ay(G.ads)
      }
      if (G.pxs && !bB) {
        by(G.pxs, bJ)
      }
      if (G.pag) {
        if (G.pag.css) {
          H('<div id="GG_PAG" style="display:none"><br style="display:block"><style>' + G.pag.css[C](/GGID/g, bf.id) + "</style></div>", bf)
        }
        if (G.pag.js) {
          H("<!--iframe--><script>(function (win, doc, G, undef) {" + G.pag.js[C](/GGID/g, bf.id) + "}(top, top.document, top.GUMGUM));<\/script><!--iframe-->", bf)
        }
      }
      bo.pvid = (G.pag && G.pag.pvid) || bo.pvid || "0-0";
      if (G.bdg && !bo.BD) {
        E(ax + "/javascripts/ggadmin.js", bf, function () {
          bo.startBadges(G.bdg);
          if (bL) {
            m(G.at)
          }
          if (bK) {
            bo.renderNativeAd = au
          }
        }, bb)
      } else {
        if (bL) {
          m(G.at)
        }
      }
    };
    aR = function (G) {
      var bJ = 0, bL = G.split(","), bK = 0;
      for (; bJ < bL[bu]; bJ++) {
        try {
          bK = T(bL[bJ])[0];
          if (bK) {
            return bK
          }
        } catch (bM) {
          continue
        }
      }
    };
    a7 = function (bM) {
      var bK = O, G = aI.href, bO = O, bN = O, bJ = (G.match(/#ggad=(.+)$/) || [O, bb])[1], bL = {
        lt: bg(),
        to: +(new Date().getTimezoneOffset()),
        pu: bs(G),
        ru: bq.referrer,
        ce: h.cookieEnabled,
        fs: at,
        bf: bA,
        forced: bJ ? "&eAdBuyId=" + bJ : ""
      }, bP = function (bR) {
        if (bR && bR.id && bR.cs) {
          bL.ni = bR.id;
          bo.xhr({
            url: ax + aJ("/native/imp?ni={:ni:}&pu={:pu:}&ru={:ru:}&ce={:ce:}&fs={:fs:}&bf={:bf:}&lt={:lt:}&to={:to:}{:forced:}", bL),
            success: bQ,
            withCredentials: ag
          })
        }
      }, bQ = function (bR) {
        try {
          au(JSON.parse(bR.responseText))
        } catch (bS) {
          bd("NativeAdCallback", bS)
        }
      };
      if (bM.plc && (bO = bM.plc[bu])) {
        for (bK = 0; bK < bO && (bN = bM.plc[bK]); bK++) {
          if (aR(bN.cs)) {
            bP(bN)
          }
        }
      }
    };
    au = function (bP) {
      var bO = bP.ad, G = O, bN = O, bJ = "GGNA_" + bg(), bL = "native", bK = bO.cs;
      if (!(bO && bK && bO.am)) {
        if (bP.bdg) {
          bo.Stack.push({type: "NativeBadge", data: bP.bdg})
        }
        return bb
      }
      G = aR(bK);
      if (!G) {
        return bb
      }
      try {
        bN = aP(bO.am.replace(/GGUID/g, bJ));
        bN.id = bJ;
        bN[aK] += " ggnative";
        a8.one(bN, "click", "[href], [onclick]", function () {
          D(bO.cu, bN, bb, ag)
        });
        if (bo.subs[bL]) {
          a8.fire(bf, "gumgum.native.load", {ad: bH(bN)})
        }
        if (bP.pxs && bP.pxs.scr) {
          bo.loadPixels(bP.pxs && bP.pxs.scr, {gguid: bJ})
        }
        if (bP.scr) {
          bo.loadPixels(bP.scr, {gguid: bJ, evt: "IMPRESSION"})
        }
        if (bP.bdg) {
          bP.unit = bN;
          bo.Stack.push({type: "NativeBadge", data: bP})
        }
        return G[aN].insertBefore(bN, G.nextSibling)
      } catch (bM) {
        bd("renderNativeAd", bM)
      }
    };
    ao = function (G, bV) {
      var bQ = "ad_is_" + (bg()), bS = G ? G.ad : O, bR = O, bJ = O, bO = O, bW = O, bN = O, bT = O, bM = O, bP = {
        t: bm,
        ab: bS ? bS.i : O,
        pv: bV.pag && bV.pag.pvid,
        pu: bs(aI.href),
        bf: bA
      }, bK = {}, bU = function (bY, bZ) {
        var b0 = bc(bo.isad, "width"), bX = bZ ? bc(bZ, "width") : 0, b1 = b0 > bX ? bo.isad : bZ;
        if (bY && bY.type === "resize") {
          a4 = aF(aQ)
        }
        if (!bK[50] && bo.evp(b1, a4) >= 50) {
          bL(50, b1)
        }
        if (!bK[100] && bo.evp(b1, a4) === 100) {
          bL(100, b1)
        }
      }, bL = function (bZ, bY) {
        var b0 = bP, bX;
        bK[bZ] = ag;
        b0.pct = bZ || 50;
        bX = ax + aJ("/ad/viewable{:pct:}?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + bE, b0);
        aG(function () {
          if (p(bY, a4) < b0.pct) {
            return
          }
          D(bX);
          if (b0.pct === 100) {
            a8.off(aQ, "inscreen.scroll inscreen.resize", bU)
          }
        }, 1000)
      };
      if (bS && bS.m) {
        bR = G.zi || (v - 2);
        bJ = aP('<span id="' + bQ + '_CONTAINER" style="position:fixed;bottom:0;left:0;right:0;width:100%">' + av + "</span>");
        am(bf, bJ);
        bO = bS.m[C](/GGUID/g, bQ);
        if (bS.ii && !/<!--iframe-->/im.test(bO)) {
          bW = bk(bO, bJ)
        } else {
          bW = am(bJ, aP(bO))
        }
        if (R && a6 < 10 && !bS.h) {
          bM = bJ.lastElementChild || bJ.childNodes[bJ.childNodes.length - 1];
          bS.h = (bM && bM.nodeType === 1) ? parseInt(bM[y][bh], 10) : 100
        }
        if (bS.h) {
          bJ[y][bh] = bS.h + "px"
        }
        bJ[y].zIndex = bR;
        if (bo.subs.inscreen) {
          a8.fire(bf, "gumgum.inscreen.load", {ad: bH(bJ)})
        }
        (function (bX) {
          return bX && bo[bX] && bo[bX].closeAd && bo[bX].closeAd(ag)
        })(o);
        o = bQ;
        bo[bQ] = {};
        bo[bQ].el = (bo.isad = bJ);
        bo[bQ].closeAd = function (bX) {
          if (!bX) {
            D(ax + aJ("/ad/close?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + bE, bP))
          }
          a8.off(bJ, "inscreen");
          if (K(bf, bo[bQ].el)) {
            aU(bf, bo[bQ].el)
          }
          bo[bQ] = bo.isad = aE;
          o = aE;
          if (bo.subs.inscreen) {
            a8.fire(bf, "gumgum.inscreen.close", {})
          }
        };
        bo[bQ].triggerHover = function () {
          if (!bo.isad) {
            return bb
          }
          D(ax + aJ("/ad/hover?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + bE, bP), bJ);
          bo[bQ].isHovered = true;
          a8.off(bJ, "mouseenter mouseleave")
        };
        a8.on(bJ, "mouseenter", function () {
          if (!bo[bQ].isHovered) {
            bo[bQ].hoverTO = aG(bo[bQ].triggerHover, 500)
          }
        });
        a8.on(bJ, "mouseleave", function () {
          bv(bo[bQ].hoverTO)
        });
        a8.on(bo.isad, "inscreen.ad.report", function () {
          a5.call({data: bS, element: bo[bQ].el})
        });
        bo[bQ].showInfo = function (bX, bY) {
          D(ax + aJ("/ad/info?t={:t:}&ab={:ab:}&pv={:pv:}&pu={:pu:}&bf={:bf:}" + bE, bP));
          J.call(bY || W, bX || w)
        };
        if (bS.ipu) {
          g(bS.ipu, {parent: bf, type: "img", delay: bS.id, preserve: bb})
        }
        if (G.asc && G.asc.scr && G.asc.scr[bu]) {
          bM = G.asc.scr;
          for (bT = 0; bT < bM[bu]; bT++) {
            if (bM[bT].e === "IMPRESSION" && bM[bT].u) {
              bM[bT].p = a1(bM[bT].u, {moat: bo.isad});
              g(bM[bT].u[C](/GGUID/ig, bQ), {parent: bM[bT].p, type: bM[bT].t, delay: bM[bT].d})
            }
          }
        }
        a8.on(aQ, "inscreen.scroll inscreen.resize", bU, bW);
        a8.on(aQ, "scroll resize", function (bX) {
          a8.fire(aQ, "inscreen." + bX.type, bX)
        });
        a8.fire(aQ, "inscreen.scroll", {})
      }
      if (G.pxs && G.pxs.scr && G.pxs.scr[bu]) {
        bM = G.pxs.scr;
        for (bT = 0; bT < bM[bu]; bT++) {
          if (bM[bT].u) {
            g(bM[bT].u[C](/GGUID/ig, bQ), {parent: bf, type: bM[bT].t})
          }
        }
      }
      if (G.bdg) {
        bN = (G.ad && G.ad.m) || "";
        bo.Stack.push({type: "InScreenBadge", data: G.bdg, unit: bo.isad, om: bN});
        Z = bb
      }
    };
    by = function (bS, b0) {
      var bO = function (b3) {
        var b2 = "//pixel.quantserve.com/pixel/" + b3.qac + ".gif?labels=" + b3.qsg;
        D(b2, bB[an]);
        bB.log[x](b2)
      }, bJ = function () {
        var cb, ca, b9, b8, b7, b6, b3, b4 = [], b2 = "//map.media6degrees.com/orbserv/aopix?pixId=1927&cb=" + br(aW() * 9999999999);
        for (b7 = 0; 3 > b7; ++b7) {
          switch (b7) {
            case 0:
              b8 = "top";
              b6 = top;
              break;
            case 1:
              b8 = "par";
              b6 = parent;
              break;
            case 2:
              b8 = "win";
              b6 = window;
              break
          }
          for (b9 = 0; 2 > b9; ++b9) {
            cb = "";
            try {
              cb = encodeURIComponent((0 === b9) ? b6.location.href : b6.document.referrer)
            } catch (b5) {
            }
            b3 = 0;
            for (ca = 0; b4[bu] > ca; ++ca) {
              if (cb === b4[ca]) {
                b3 = 1;
                break
              }
            }
            if (1 > b3) {
              b4[b4[bu]] = cb;
              b2 += "&" + b8 + ((0 === b9) ? "Href=" : "Refer=") + cb
            }
          }
        }
        D(b2, bB[an]);
        bB.log[x](b2)
      }, bU = function () {
        var b3 = al("iframe"), b2 = aW();
        b3[y][S] = Y;
        b3[y][aV] = "1px";
        b3[y][bh] = "1px";
        b3.frameborder = bb;
        am(bB[an], b3);
        bB.log[x](b3.src = ("//dp2.33across.com/ps/?tt=iframe&pid=242&cgn=16066&_=" + b2))
      }, bK = function (b3, b5, b7, b4, b8) {
        var b6 = aP('<iframe name="__bkframe" style="_CLEARCSS_" height="0" width="0" frameborder="0"></iframe>'), b2 = {
          desktop: {
            u: "//www.bkrtx.com/js/bk-static.js",
            c: function () {
              var b9 = "bk_addPageCtx";
              if (aQ[b9]) {
                aQ[b9]("vertical", b3);
                aQ[b9]("trackingId", b5);
                aQ[b9]("domain", b7);
                aQ[b9]("visitorId", b4);
                aQ.bk_doJSTag(4651, b8 || 4)
              }
            }
          }, mobile: {
            u: "//tags.bkrtx.com/js/bk-coretag.js", c: function () {
              aQ.bk_allow_multiple_calls = ag;
              aQ.bk_use_multiple_iframes = ag;
              aQ.bk_send_statid_payload = ag;
              aQ.bk_doJSTag(11598, b8 || 3)
            }
          }
        };
        am(bB[an], b6);
        aG(function () {
          E(b2[b0].u, bB[an], b2[b0].c)
        }, 250)
      }, bZ = function () {
        var b3 = 0, b4 = 0, b5 = O, b6 = O, b2 = [];
        E("http" + (a9 ? "s://s" : "://") + "tags.bluekai.com/site/14833?ret=js", bB[an], function () {
          if (!(aQ.bk_results && (b5 = aQ.bk_results.campaigns))) {
            return
          }
          for (; b3 < b5[bu]; b3++) {
            for (b4 = 0, b6 = b5[b3].categories; b6 && b4 < b6[bu]; b4++) {
              if (b6[b4].categoryID) {
                b2[x]("id=" + b6[b4].categoryID)
              }
            }
          }
          if (b2[bu]) {
            D("//g2.gumgum.com/bluekai/categories?" + b2.join("&"), bB[an])
          }
        })
      }, bR = function (b2) {
        if (b2) {
          D("http" + (a9 ? "s://s" : "://") + "tags.bluekai.com/site/15333?id=" + b2, bB[an])
        }
      }, G = function () {
        var b2 = aP('<iframe name="_rlcdn" width=0 height=0 frameborder=0 src="http://rc.rlcdn.com/366098.html"></iframe>');
        am(bB[an], b2)
      }, bW = function () {
        E("//loadus.exelator.com/load/?p=233&g=001&j=d", bB[an])
      }, bT = function () {
        E("//loadr.exelator.com/load/?p=104&g=810&j=0", bB[an])
      }, bQ = function (b2) {
        var b3 = bq.referrer, b4 = {
          c1: 8,
          c2: b2.c2,
          c3: b2.c3,
          c4: bs(bm),
          c7: bs(aI.href),
          c8: bs(("" + bq.title)[C](/\s{2,}/g, "").substring(0, 1024)),
          c9: bs(b3)
        };
        D(aJ("http" + (a9 ? "s://sb" : "://b") + ".scorecardresearch.com/p?c1={:c1:}&c2={:c2:}&c3={:c3:}&c4={:c4:}&c7={:c7:}&c8={:c8:}&c9={:c9:}&cv=2.0&cj=1&ns__t=" + (bg()), b4), bB[an])
      }, b1 = function (b2) {
        b2.c1 = 8;
        D(aJ("http" + (a9 ? "s://sb" : "://b") + ".scorecardresearch.com/p?c1={:c1:}&c2={:c2:}&c3={:c3:}&ns_ap_it=b&rn=" + (bg()), b2), bB[an])
      }, bL = function () {
        D("//fei.pro-market.net/engine?site=134602;size=1x1;mimetype=img;", bB[an])
      }, bP = function () {
        var b7 = "bc493968-5e59-406d-ad27-2698a5771d21", b3 = aQ, b2 = "", b4 = O, ca = "http:", b6 = encodeURIComponent, b8 = 0, b5 = bq.createElement("script");
        b3.FLITE = b3.FLITE || {};
        b3.FLITE.config = b3.FLITE.config || {};
        b3.FLITE.config[b7] = b3.FLITE.config[b7] || {};
        b3.FLITE.config[b7].cb = aW();
        b3.FLITE.config[b7].ts = (+new Date());
        try {
          b2 = (top === self && top.location) ? top.location.href : bq.referrer || (top.location && top.location.href) || ""
        } catch (b9) {
          b8 = 1
        }
        try {
          ca = aI && aI.protocol === "https:" ? aI.protocol : ca
        } catch (b9) {
          b8 += 2
        }
        try {
          b4 = b2.match(new RegExp("[A-Za-z]+:[/][/][A-Za-z0-9.-]+"))
        } catch (b9) {
          b8 += 4
        }
        b5.src = [ca, "//r.flite.com/syndication/uscript.js?i=", b6(b7), "&v=3", "&x=us", b8, "&cb=", b3.FLITE.config[b7].cb, "&d=", b6((b4 && b4[0]) || b2)].join("");
        am(bB[an], b5)
      }, bN = function () {
        E("//cdn.doubleverify.com/dvtp_src.js?ctx=1241058&cmp=2285192&sid=gumgum&plc=22851921&num=&adid=&advid=1241059&adsrv=0&region=30&btreg=&btadsrv=&crt=&crtname=&chnl=&unit=&pid=&uid=&dvtagver=6.1.src", bB[an])
      }, bM = function () {
        E("//cdn.digitru.st/prod/v1/dt.js", bf, function () {
          aQ.DigiTrust.getIdentityAsync(bo.dtCredentials, function (b2) {
            var b3 = "/visitor/digitrust?id={:id:}&version={:version:}&domain={:domain:}&created={:created:}&modified={:modified:}&lastRead={:lastRead:}&optout={:optout:}", b4;
            if (b2 && b2.success) {
              b4 = b2.identity;
              b4.optout = b4.privacy.optout;
              D(ax + aJ(b3, b4));
              return
            }
            return bd("startDigitrust", b2.error)
          })
        }, bb)
      }, bV = function (b2) {
        D("//idsync.rlcdn.com/395736.gif?partner_uid=" + b2, bB[an])
      }, bX = function (b2) {
        if (b2.cs) {
          bQ(b2.cs)
        }
        if (b2.scr && b2.scr[bu]) {
          bY(b2.scr)
        }
      }, bY = function (b4) {
        for (var b3 = 0, b2; (b2 = b4[b3++]);) {
          g(b2.u, {parent: bf, type: b2.t})
        }
      };
      bo.PXS = (bB = {});
      bB.triggerAssetPixels = bX;
      bB.log = [];
      bB[an] = aP('<div id="GG_PXS" style="display:none"></div>');
      am(bf, bB[an]);
      if (bS.quantcast) {
        bO(bS)
      }
      if (bS.media6) {
        bJ()
      }
      if (bS.across33) {
        bU()
      }
      if (bS.bluekai) {
        bK(bS.vrt, bS.tid, bS.dom, bS.vst, bS.lmt)
      }
      if (bS.bluekaiIdSwap) {
        bR(bS.visitorId)
      }
      if (bS.bluekaiBuyer) {
        bZ()
      }
      if (bS.comscore) {
        bQ(bS)
      }
      if (bS.comscoreMobile) {
        b1(bS)
      }
      if (bS.jug) {
        G(bS)
      }
      if (bS.exelate) {
        bW()
      }
      if (bS.exelateRtd) {
        bT()
      }
      if (bS.datonicsBuyer) {
        bL()
      }
      if (bS.flite) {
        bP()
      }
      if (bS.dvbot) {
        bN()
      }
      if (bS.digitrust) {
        bM()
      }
      if (bS.partner_uuid) {
        bV(bS.partner_uuid)
      }
    };
    m = function (G) {
      var bJ = a4 || aF(aQ);
      aB = {};
      aB.tick = 0;
      aB.zIndexOffset = G.zo || bb;
      aB.safe = G.sf;
      aB.pscan = G.ps || bb;
      aB.minHeight = ~~G.mh || 150;
      aB.minWidth = ~~G.mw || 150;
      aB.minOpaque = G.ot || 80;
      aB.tweakOverflow = G.of;
      aB.foundImages = 0;
      aB[bp] = {};
      aB[F] = {};
      aB[bl] = {};
      aB.scanTimeout = O;
      aB.inViewRatio = G.tr || 0;
      aB.vpDimension = {w: bJ[aV], h: bJ[bh]};
      aB.UUID = 0;
      aB.classInclude = G.ci || bb;
      aB.classExclude = G.ce || bb;
      aY = function (bO, bN) {
        var bS = af(bO), bM = N(bS), bK = bN[aV], bT = bN[bh], bP = bO.naturalWidth, bR = bO.naturalHeight, bQ = O, bL = O;
        if (bP === aE || bR === aE) {
          bQ = aB[bl][bM];
          if (!bQ) {
            bL = new Image();
            bL.src = bS;
            bQ = {};
            bQ[aV] = bL[aV];
            bQ[bh] = bL[bh]
          }
          bP = bQ[aV];
          bR = bQ[bh];
          aB[bl][bM] = bQ
        }
        return ((bP >= aB.minWidth && bR >= aB.minHeight) && (!isNaN(bK) && !isNaN(bT)) && (bK >= aB.minWidth && bT >= aB.minHeight) && !(bK === 160 && bT === 600) && !(bK === 180 && bT === 150) && !(bK === 200 && bT === 200) && !(bK === 250 && bT === 250) && !(bK === 300 && bT === 250) && !(bK === 300 && bT === 600) && !(bK === 336 && bT === 280))
      };
      aA = function (bK) {
        return bK[aK].indexOf("ggnoads") > -1 || af(bK).indexOf("ggnoads") > -1 || bF([".ggnoads", ".picappoverlay"], bK)
      };
      bC = function (bK) {
        var bL = N(af(bK));
        return aB[bp][bL] ? aB[bp][bL].id : (++aB.UUID)
      };
      aB.requestAssetsNew = (a2 = function (bS, bQ) {
        var bT = a4 || aF(aQ), bK = aI.href, bO = {
          v: "1.1",
          pv: bo.pvid,
          r: i,
          t: bm,
          a: [bS],
          rf: bq.referrer,
          p: N(bK),
          fs: at,
          ce: h.cookieEnabled,
          ac: A ? A.occurrences : {},
          vp: {ii: (aQ[aS] && top !== aQ), w: bT[aV], h: bT[bh]},
          sc: {w: aQ.screen[aV], h: aQ.screen[bh], d: aQ.devicePixelRatio || 1}
        }, bM = (bK.match(/#ggad=(.+)$/) || [O, bb])[1], bR = (parseInt(bQ, 10) > 0) ? "&adBuyId=" + bQ : (bM ? "&eAdBuyId=" + bM : ""), bN = u(), bL = new Date(), bP;
        if (bN) {
          bO.dt = bN
        }
        if (aB.inViewRatio) {
          bO.tr = aB.inViewRatio
        }
        if (bE) {
          bO.ai = aQ.ggaffid
        }
        bo.affiliateId = (bo.affIdParam = bE || "");
        bO = bs(bi(bO));

        // Todo: ?
        b(ax + "/assets/new?assets=" + bO + "&bf=" + bA + "&lt=" + (+bL) + "&to=" + (bL[bz]()) + bR, function (bW) {
          var bV = !!(bM || bR || bQ), bU = O, bX = bV || (A ? (A.servedAds < L(aB.foundImages * A.coverage) ? ag : "blocked") : ag);
          if (bW) {
            if (bV && bW.ads[0]) {
              bW.ads[0].forced = 1
            }
            if (A && bW.ads && (bX !== "blocked")) {
              bU = new U(bW.ads)
            }
            if (bW.bdg) {
              bP = (bW.ads && bW.ads[0] && bW.ads[0].ad) || "";
              bW.bdg[0].thrott = (bX === "blocked");
              bo.Stack.push({type: "InImageBadge", data: bW.bdg[0], om: bP})
            }
            if (bW.pxs) {
              bB.triggerAssetPixels(bW.pxs)
            }
          }
        }, "callback")
      });
      aD = function (bL, bQ) {
        var bP = bL.img, bN = bP[aN], bO = O, bM = aB.vpDimension, bK;
        bO = {
          i: bL.id,
          u: N(af(bP)),
          w: bQ[aV],
          h: bQ[bh],
          x: bQ[ap],
          y: bQ[aS],
          lt: B,
          af: ((bQ[aS] + bQ[bh]) < bM.h && (bQ[ap] + bQ[aV]) < bM.w)
        };
        if (bN.tagName[q]() === "a" && (bK = bN.href || bN.getAttribute("href"))) {
          bO.lu = N(bK);
          if (bN.host !== bq.domain) {
            bO.lt = "out"
          }
          if (bN.host === bq.domain) {
            bO.lt = "in"
          }
          if (/\.(jpg|gif|png|jpeg)/i.test(bK)) {
            bO.lt = "image"
          }
          if (bK === (af(bP) || af(bN))) {
            bO.lt = "self"
          }
        }
        if (!!bP.title) {
          bO.it = ("" + bP.title)[C](/\s{2,}/g, "").substring(0, 1024)
        }
        if (!!bP.alt) {
          bO.ia = ("" + bP.alt)[C](/\s{2,}/g, "").substring(0, 1024)
        }
        return bO
      };
      P = function () {
        var bR = O, bQ = O, bV = O, bL = O, bW = O, bP = O, bX = O, bN = O, bM = O, bO = O, bK = O, bU = O, bS = O, bT = function (b0) {
          var bY = aB.classInclude, bZ = aB.classExclude;
          return (bY && !bF(bY, b0)) || (!bY && bZ && bF(bZ, b0))
        };
        aB.tick = bg();
        a4 = aF(aQ);
        bv(aB.scanTimeout);
        bR = a0.call(bo.bodyEl, "img");
        for (bU = 0, bS = bR[bu]; bU < bS; bU++) {
          bQ = bR[bU];
          if ((bQ[aV] <= 100 || bQ[bh] <= 100)) {
            continue
          }
          bW = bH(bQ);
          if (!bW || bW[aV] < 100 || bW[bh] < 100 || bW[aS] < 0 || bW[ap] < 0) {
            continue
          }
          bV = af(bQ);
          bL = N(bV);
          if (!bV || !bL) {
            continue
          }
          if (K(bf, bQ)) {
            continue
          }
          if (bF([".ggnative"], bQ)) {
            continue
          }
          bP = aB[bp][bL];
          if (bP) {
            bX = bP.img;
            bN = (bX === bQ);
            bM = (bP.src === af(bQ));
            bK = (ae(bW[aV] - bP.ofs[aV]) < 5 && ae(bW[bh] - bP.ofs[bh]) < 5);
            bO = (c(bX) && bI(bX));
            if (bN && bM && bK && bO && ((aA(bQ) === bP.ggnoad)) && (bT(bQ) === bP.classr)) {
              bP.ofs = bW;
              bP.tick = aB.tick
            }
          } else {
            if (aY(bQ, bW) && bj(bQ, bW)) {
              bP = {
                src: bV,
                srcmin: bL,
                img: bQ,
                ofs: bW,
                id: bC(bQ),
                ggnoad: !!aA(bQ),
                classr: !!bT(bQ),
                tick: aB.tick
              };
              if (bP.ggnoad || bP.classr) {
                bo.Stack.push({type: "InImageBadge", data: {i: bP.id, ggnoad: bP.ggnoad, classr: bP.classr}})
              } else {
                bP.reqdata = aD(bP, bW);
                a2(bP.reqdata);
                aB.foundImages++
              }
              aB[F][bP.id] = bP;
              aB[bp][bL] = bP
            }
          }
        }
        aG(bw, 50);
        if (aB.UUID < 100) {
          aB.scanTimeout = aG(P, aw)
        }
      };
      bw = function () {
        var bL = O, bK = O;
        for (bL in aB[bp]) {
          if (bx(aB[bp], bL)) {
            bK = aB[bp][bL];
            if (bK.tick && bK.tick < aB.tick) {
              if (bK.ad) {
                bK.ad.remove()
              }
              if (bK.badge) {
                bK.badge.remove()
              }
              delete aB[bp][bK.srcmin];
              delete aB[bl][bK.srcmin];
              delete aB[F][bL]
            } else {
              if (bK.ad) {
                bK.ad.setPosition(bK.ofs)
              }
              if (bK.badge) {
                bK.badge.setPosition(bK.ofs)
              }
            }
          }
        }
      };
      bo.AT = aB;
      P()
    };
    ay = function (G) {
      A = {};
      A.coverage = G.coverage || 0;
      A.servedAds = 0;
      A.occurrences = {};
      bo.ADS = A
    };
    bD = new M({
      initialize: function (bJ) {
        var G = this;
        if (bJ.mobile) {
          bJ.md = "overlay"
        }
        G[aT] = bJ;
        G.pollCount = 0;
        G.pollTO = ar(function () {
          G.pollSelector()
        }, 50)
      }, triggerEvent: function (bP, bN, bM) {
        var bK = this, bJ = bK[aT], G = new Date(), bO = {}, bL = [], bQ = 0;
        bM = bM || {};
        bM.type = bM.type || "img";
        bO.t = bm;
        bO.p = aI.href;
        bO.a = bJ.ai;
        bO.s = bJ.s;
        bO.lt = G[s]();
        bO.to = G[bz]();
        bO.pv = bo.pvid;
        if (bN) {
          for (bQ in bN) {
            if (bx(bN, bQ)) {
              bO[bQ] = bN[bQ]
            }
          }
        }
        for (bQ in bO) {
          if (bx(bO, bQ)) {
            bL.push(bs(bQ) + "=" + bs(bO[bQ]))
          }
        }
        g(ax + bP + "?" + bL.join("&"), bM)
      }, pollSelector: function () {
        var bK = this, bL = bK[aT], G = bL.cs, bJ = O;
        bJ = T(G);
        if (bJ && bJ[bu]) {
          bn(bK.pollTO);
          bK.elements = bJ;
          bK.tries = bL.tr || 3;
          bK.cache = {elements: {}, placeholders: {}};
          bK.showUI()
        } else {
          if ((++bK.pollCount) > 25) {
            bn(bK.pollTO)
          }
        }
        return ag
      }, showUI: function () {
        var bP = this, bL = bP[aT], bN = bL.mobile ? T("body > :first-child")[0] : bP.elements[0], bJ = new Date(), G = "GGSA" + (bJ[s]()), bO = O, bM = O, bK = bL.md === "replace" ? "static" : "absolute", bS = bL.zi || a3() + 9, bQ = V(bN.scrollWidth, bN[d]), bR = V(bN.scrollHeight, bN[bG]);
        bO = '<div id="_ID_" style="position:' + bK + ";z-index:" + bS + ";width:" + bQ + "px;height:" + bR + 'px">                <br style="display:none"><style>                   #_ID_{text-align:center;background:transparent url(//c.gumgum.com/ads/com/gumgum/bg/white85.png);position:absolute;font:normal 14px/1 arial}                   #_ID_-body{display:block;width:100%;height:auto}                   #_ID_-sponsor,#_ID_-content{padding-top:1em}                   #_ID_-header{margin-bottom:1em;padding:1em 2em 0}                   #_ID_-header span{display:inline-block;width:32.5%;border:1px solid #ccc;text-align:center;vertical-align:middle;font-size:inherit}                   #_ID_-skip{margin-bottom:1em;opacity:0;filter:alpha(opacity=0);transition:all 1s;-wekbit-transition:all 1s;-moz-transition:all 1s}                   #_ID_-skip button{border:1px solid #ccc;padding:0.5em 1em;color:#444;background:rgba(249,249,249,.5)}                   #_ID_-skip._ss{opacity:1;filter:alpha(opacity=100)}                   #_ID_-skip._ss button:hover{border:1px solid #9f9f9f;color:#000;background:#fff}                   #_ID_-sponsor{margin-bottom:1em}                   #_ID_-sponsor *{font:bold 1.4em/1 arial;color:#555}                   #_ID_-content{margin-bottom:1em}                   html body .gumgum-blur{filter:blur(3px)!important;-webkit-filter:blur(3px)!important;-moz-filter:blur(3px)!important;-o-filter:blur(3px)!important;-ms-filter:blur(3px)!important;filter:url(//c.gumgum.com/ads/com/gumgum/bg/blur.svg#blur)!important;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=\'3\')!important}                </style>                <div id="_ID_-body">                   <div id="_ID_-header">                       <span></span><span style="border:0 none">Sponsored Video</span><span></span>                       <div id="_ID_-sponsor"></div>                       <div id="_ID_-skip"></div>                   </div>                   <div id="_ID_-content">' + bL.am + "</div>                </div>            </div>";
        bO = bO[C](/_ID_/g, G);
        bM = aP(bO);
        bN[aN].insertBefore(bM, bN);
        if (bL.md === "replace") {
          bP.hideContent()
        } else {
          bN[aK] += " gumgum-blur"
        }
        bP.id = G;
        bP[aM] = bM;
        a8.on(bP[aM], "sa.ad.report", function () {
          a5.call(bP)
        });
        bD.viewability = bo.bindCtx(bP, bP.checkViewability);
        a8.on(aQ, "sa.viewability", bD.viewability);
        a8.on(aQ, "scroll resize", function () {
          a8.fire(aQ, "sa.viewability")
        });
        bP.addSponsor();
        bP.triggerEvent("/sa/view")
      }, addSponsor: function () {
        var bK = this, bL = bK[aT], bJ = O, G = aq(bK.id + "-sponsor");
        if (bL.zhm) {
          am(G, aP(bL.zhm))
        } else {
          bJ = "";
          if (bL.zlu) {
            bJ += "<img src='" + bL.zlu + "'>"
          }
          if (bL.zmt) {
            bJ += "<p style='width:90%;margin:1em auto 0;color:" + (bL.zmc || "#444") + "'>" + (bL.zmt) + "</p>"
          }
          G[aC] = bJ
        }
        a8.fire(aQ, "sa.viewability")
      }, skipAd: function () {
        var G = this;
        G.triggerEvent("/sa/skip");
        G.grantAccess()
      }, hideContent: function () {
        var bO = this, bN = O, bP = O, bK = O, bJ = bO.cache, bM = bO.elements, bL = bM[bu], G = aP('<div style="_CLEARCSS_"></div>');
        for (bN = 0; bN < bL; bN++) {
          bP = bM[bN];
          bK = "" + ((new Date())[s]()) + (aW() * aW());
          bJ.elements[bK] = bP;
          bJ.placeholders[bK] = G.cloneNode(ag);
          bP[aN].replaceChild(bJ.placeholders[bK], bP)
        }
      }, showContent: function () {
        var bM = this, bK = O, bN = O, bL = O, bJ = bM.cache, bO = bJ.placeholders, G = bJ.elements;
        for (bK in bO) {
          if (bx(bO, bK)) {
            bN = bO[bK];
            bL = G[bK];
            if (bN[aN]) {
              bN[aN].replaceChild(bL, bN)
            }
            bO[bK] = O
          }
        }
      }, grantAccess: function () {
        var bK = this, bL = bK[aT], G = bK[aM], bJ = bK.elements[bK.elements[bu] - 1];
        aU(O, G);
        if (bL.md === "replace") {
          bK.showContent()
        }
        if (bL.lm && bJ && bJ[aN]) {
          bK.showLeaveBehind(bJ)
        }
        a8.off(aQ, "sa");
        bo.saad = O;
        return ag
      }, showLeaveBehind: function (bJ) {
        var bL = this, bM = bL[aT], G = new Date(), bK = O;
        bK = aP(bM.lm);
        if (bM.lc) {
          a8.add(bK, "click", function (bN) {
            bL.clickLeaveBehind(bN)
          })
        }
        bJ[aN].insertBefore(bK, bJ.nextSibling);
        bL.event_info.lt = G[s]();
        bL.event_info.to = G[bz]();
        D(ax + aJ("/sa/leavebehind/view?t={:tid:}&p={:pu:}&a={:ai:}&lt={:lt:}&to={:to:}", bL.event_info))
      }, clickLeaveBehind: function (G) {
        var bK = this, bJ = new Date();
        G.stop();
        bK.event_info.lt = bJ[s]();
        bK.event_info.to = bJ[bz]();
        D(ax + aJ("/sa/leavebehind/click?t={:tid:}&p={:pu:}&a={:ai:}&lt={:lt:}&to={:to:}", bK.event_info));
        return window.open(bK[aT].lc, "ggsalbclick")
      }, checkViewability: function (G) {
        var bK = this, bJ = a0.call(bK[aM], "div")[0], bL = bK[aT];
        if (G && G.type === "resize") {
          a4 = bo.getWH(aQ)
        }
        if (!bL.viewable50 && p(bJ, a4) >= 50) {
          aG(function () {
            if (p(bJ, a4) < 50) {
              return
            }
            bK.triggerEvent("/ad/viewable50", O);
            bL.viewable50 = ag
          }, 1000)
        }
        if (!bL.viewable100 && p(bJ, a4) === 100) {
          aG(function () {
            if (p(bJ, a4) < 100) {
              return
            }
            bK.triggerEvent("/ad/viewable100", O, {delay: 1000});
            bL.viewable100 = ag;
            a8.off(aQ, "sa.viewability", bD.viewability)
          }, 1000)
        }
      }
    });
    U = new M({
      initialize: function (bN) {
        var bM = this, bL = O, bO = O, bK = O, bJ = O, G = O;
        if (Q(bN) !== "array" || !(bN = bN[0])) {
          return bb
        }
        if (!bN.ad) {
          return bb
        }
        bM.asset = (bL = aB[F][bN.i]);
        if (!bL) {
          return bd("noImageFound", {message: "No image found (" + bN.u + ")"})
        }
        bO = "ad_ii_" + (bg());
        bL.ad = this;
        bo[bO] = bM;
        bN.cs = (bJ = bN.cs || {});
        bM.styles = {
          body: {
            MozOpacity: (bJ.trn || 85) / 100,
            WebkitOpacity: (bJ.trn || 85) / 100,
            zoom: 1,
            filter: "alpha(opacity=" + (bJ.trn || 85) + ")",
            opacity: (bJ.trn || 85) / 100,
            backgroundColor: bJ.bgc || "#fff",
            zIndex: 1,
            font: "normal 0px/0 Arial"
          },
          closeContent: bJ.cbi || "x",
          close: {
            color: bJ.cbc || "#000",
            top: bJ.cbt || (bJ.cbb ? "auto" : 5),
            right: bJ.cbr || (bJ.cbl ? "auto" : 5),
            bottom: bJ.cbb || "auto",
            left: bJ.cbl || "auto",
            height: bJ.cbh || 10,
            width: bJ.cbw || "auto",
            zIndex: 3,
            cursor: "pointer"
          },
          adsByContent: bJ.abi || "Ads by GumGum",
          adsBy: {
            color: bJ.abc || "#000",
            top: isNaN(bJ.abt) ? (bJ.abb ? "auto" : 5) : bJ.abt,
            right: bJ.abr || "auto",
            bottom: bJ.abb || "auto",
            left: (bJ.abl === 999 ? O : bJ.abl) || (bJ.abr ? "auto" : 5),
            height: bJ.abh || 10,
            width: bJ.abw || "auto",
            zIndex: 2,
            cursor: "pointer"
          }
        };
        bN.ad = bN.ad[C](/GGSWFCID/ig, f)[C](/GGUID/ig, bO);
        bN.uid = bO;
        bM[aT] = bN;
        bM.build();
        ab(bM[aM], bO, {closeAd: bo.bindCtx(bM, bM.closeAd), showInfo: bo.bindCtx(bM, bM.showInfo)});
        bK = bN.scr;
        if (bK && bK[bu]) {
          for (bJ = 0; bJ < bK[bu]; bJ++) {
            G = bK[bJ];
            if (G.u && G.e === "IMPRESSION") {
              G.p = a1(G.u, {moat: bM[aM].firstChild});
              g(G.u[C](/GGUID/ig, bO), {parent: G.p, type: G.t, delay: G.d})
            }
          }
        }
        if (!bN.forced) {
          A.servedAds++
        }
        if (A.occurrences[bN.ab]) {
          A.occurrences[bN.ab]++
        } else {
          A.occurrences[bN.ab] = 1
        }
        am(bf, bM[aM]);
        if (bN.ipu) {
          g(bN.ipu, {parent: bM[aM], type: "img", delay: bN.id, preserve: ag})
        }
      }
    }).methods({
      openAd: function (bO) {
        if (bO) {
          bO.preventDefault()
        }
        var bM = this, bN = bM[aT], bJ = bN.scr, bL = bN.du, bK, G;
        if (!bL) {
          return bb
        }
        if (bJ && bJ[bu]) {
          for (bK = 0; bK < bJ[bu]; bK++) {
            G = bJ[bK];
            if (G.u && G.e === "CLICK") {
              g(G.u[C](/GGUID/ig, bN.uid), {parent: bf, type: G.t})
            }
          }
        }
        if (bN.modal) {
          J.call(bM, bL)
        } else {
          aQ.open(bL)
        }
        return bb
      }, closeAd: function (bR) {
        var bQ = this, bO = bQ[aT], bL = bQ.asset.img, bJ = aI.href, G = aB.vpDimension, bP = bH(bL), bK = new Date(), bM = {
          t: bm,
          u: N(af(bL)),
          ab: bO.ab,
          pv: bo.pvid,
          seq: bO.i,
          pu: bJ,
          af: ((bP[aS] + bP[bh]) < G.h && (bP[ap] + bP[aV]) < G.w)
        }, bN;
        if (aB.inViewRatio) {
          bM.tr = aB.inViewRatio
        }
        bN = {dt: bs(bi(bM)), lt: +bK, to: bK[bz](), pu: bs(bJ), bf: bA};
        if (bR) {
          bR.preventDefault()
        }
        if (!bO.forced) {
          D(ax + aJ("/ad/close?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + bE, bN), bQ[aM])
        }
        if (bO.uid && bo[bO.uid]) {
          delete bo[bO.uid]
        }
        bQ.remove();
        bQ.asset.ad = O
      }, showInfo: function (bJ, bM) {
        var bS = this, bQ = bS[aT], bN = bS.asset.img, bK = aI.href, G = aB.vpDimension, bR = bH(bN), bL = new Date(), bO = {
          t: bm,
          u: N(af(bN)),
          ab: bQ.ab,
          pv: bo.pvid,
          seq: bQ.i,
          pu: bK,
          af: ((bR[aS] + bR[bh]) < G.h && (bR[ap] + bR[aV]) < G.w)
        }, bP;
        if (aB.inViewRatio) {
          bO.tr = aB.inViewRatio
        }
        bP = {dt: bs(bi(bO)), lt: +bL, to: bL[bz](), pu: bs(bK), bf: bA};
        if (!bQ.forced) {
          D(ax + aJ("/ad/info?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + bE, bP), bS[aM])
        }
        J.call(bM || W, bJ || w)
      }, eventParams: function (bP) {
        var bR = this, bO = bR[aT], bL = bP || bR.asset.img, bJ = aI.href, G = aB.vpDimension, bQ = bH(bL), bK = new Date(), bN = {
          pu: bJ,
          t: bm,
          u: N(af(bL)),
          ab: bO.ab,
          seq: bO.i,
          pv: bo.pvid,
          af: ((bQ[aS] + bQ[bh]) < G.h && (bQ[ap] + bQ[aV]) < G.w)
        }, bM = {};
        if (aB.inViewRatio) {
          bN.tr = aB.inViewRatio
        }
        if (bO.r) {
          bN.r = "" + (bO.r)
        }
        bM = {dt: bs(bi(bN)), lt: +bK, to: bK[bz](), pu: bs(bJ), bf: bA};
        return bM
      }, triggerHover: function (G) {
        var bL = this, bM = bL[aT], bK = bL[aM], bN = bL.eventParams(G), bJ = O;
        bJ = ax + aJ("/ad/hover?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + (bM.forced ? "&f=true" : "") + bE, bN, O, bb);
        g(bJ, {type: "img", parent: bK, delay: bM.id});
        bL.isHovered = ag;
        return ag
      }, triggerViewability: function (bL) {
        bL = bL || 50;
        var bJ = this, bK = bJ.data, bM = bJ.eventParams(), G = ax + aJ("/ad/viewable" + bL + "?asset={:dt:}&lt={:lt:}&to={:to:}&pu={:pu:}&bf={:bf:}" + (bK.forced ? "&f=true" : "") + bE, bM, O, bb);
        aG(function () {
          if ((bK.viewable100 && bL === 100) || (bK.viewable50 && bL === 50)) {
            return
          }
          if (p(bJ[aM], a4) < bL) {
            return
          }
          if (bL >= 50) {
            bK.viewable50 = ag
          }
          if (bL === 100) {
            bK.viewable100 = ag
          }
          D(G)
        }, 1000);
        return ag
      }, build: function () {
        var bQ = this, bN = bQ[aT], bK = bN.adhs, bL = bQ.asset.img, bO = O, G = O, bR = O, bJ = O, bP = O, bM = O;
        if (!bK) {
          return bd("ads.build", {message: "Ad without adhs: " + bN.ab})
        }
        if (!bK.adf) {
          bK.adf = {}
        }
        bQ[aM] = (bO = aP(('            <span id="GGADGGUID" style="_CLEARCSS_;position:absolute;overflow:hidden;left:-9999px;top:-9999px"><span id="GGUID_CONTAINER" style="_CLEARCSS_;position:relative;display:inline-block;*display:block;width:100%;height:100%">               ' + av + '               <span id="GGUID_CLOSE" style="_CLEARCSS_;position:absolute;z-index:103;cursor:pointer" title="Close Ad"></span>               <span id="GGUID_ATTRIBUTION" style="_CLEARCSS_;position:absolute;z-index:102;"></span>               <span id="GGUID_BODY" style="_CLEARCSS_;display:block;z-index:101"></span>            </span></span>')[C](/GGUID/g, bN.uid)));
        bM = a0.call(bO, "span");
        G = bM[0];
        bR = bM[1];
        bJ = bM[2];
        bP = bM[3];
        if (bN.ii || /<!--iframe-->/im.test(bN.ad)) {
          bP.style.fontSize = 0
        }
        if (bN.ii && !/<!--iframe-->/im.test(bN.ad)) {
          bM = bk(bN.ad, bP);
          bM[bh] = !bK.adf.assettall ? (bN.add.h * (bN.add.s || 1)) : "100%";
          bM[aV] = !bK.adf.assetwide ? (bN.add.w * (bN.add.s || 1)) : "100%"
        } else {
          am(bP, aP(bN.ad))
        }
        bN.adp = {x: ("" + bK.adp.x)[q](), y: ("" + bK.adp.y)[q]()};
        if (bK.adf.assetwide) {
          bO[y][aV] = bL[d] + "px"
        }
        if (bK.adf.assettall) {
          bO[y][bh] = bL[bG] + "px"
        }
        if (bK.adf.animated) {
          bQ.requireAnimation = bK.adf.animated
        }
        if ((bM = ~~bK.adf.rounded)) {
          X(bO, {MozBorderRadius: bM, WebkitBorderRadius: bM, KhtmlBorderRadius: bM, borderRadius: bM})
        }
        if ((bM = bK.adf.opacity)) {
          X(bO, {opacity: bM, filter: "alpha(opacity=" + (bM * 100) + ")"})
        }
        if (bK.ads) {
          X(bO, bK.ads)
        }
        if (bK.atc) {
          bJ[aC] = bK.atc[C](/GGUID/ig, bN.uid)
        }
        if (bK.atp) {
          X(bJ, bK.atp)
        }
        if (bK.clc) {
          bR[aC] = bK.clc[C](/GGUID/ig, bN.uid)
        }
        if (bK.clp) {
          X(bR, bK.clp)
        }
        if ((bM = bN.cs)) {
          if (bM.abc) {
            bJ[y].color = bM.abc
          }
          if (bM.cbc) {
            bR[y].color = bM.cbc
          }
          if (bM.trn) {
            bO[y].opacity = bM.trn / 100;
            bO[y].filter = "alpha(opacity=" + bM.trn + ")"
          }
        }
        if (bN.du && !/GGNOCLICK/i.test(bN.ad)) {
          a8.add(bP, "click", function (bS) {
            bQ.openAd(bS)
          })
        }
        a8.add(bR, "click", function (bS) {
          bQ.closeAd(bS)
        });
        a8.add(bP, "mouseenter", function () {
          if (!bQ.isHovered) {
            bQ.hoverTO = aG(bo.bindCtx(bQ, bQ.triggerHover), 500)
          } else {
            a8.off(bP, "mouseenter mouseleave")
          }
        });
        a8.add(bP, "mouseleave", function () {
          bv(bQ.hoverTO)
        });
        a8.on(bQ.asset, "inimage.ad.report", function () {
          var bS = aB.cacheImages[bQ.asset.srcmin].ad;
          a5.call({data: bS[aT], element: bS[aM], container: aq(bS[aT].uid + "_CONTAINER")})
        })
      }, setHeight: function (G) {
        var bJ = this;
        G = parseInt(G, 10);
        return G && (bJ.data.adH = G) && bJ.setPosition(bJ.asset.ofs) && X(bJ[aM], {height: G + "px"})
      }, setPosition: function (bN) {
        var bP = this, bL = bP[aT], bM = bP[aM], bK = bL.adp, bJ = bP.requireAnimation, G = bP.adW || bM[d], bS = bL.adH || bP.adH || bM[bG], bR, bQ, bO;
        if (G && bS) {
          bP.adW = G;
          bP.adH = bS
        }
        bO = a0.call(bM, "span");
        if (bJ && (bR = bO[0][d]) && (bQ = bO[0][bG])) {
          bM[y][ac] = Y;
          bM[y][aV] = bR + "px";
          bM[y][bh] = bQ + "px";
          switch (bJ) {
            case bt:
              bR = {start: ["opacity", "0"], end: "opacity:1"};
              break;
            case ap:
              bR = {start: ["marginLeft", "-100%"], end: "margin-left:0"};
              break;
            case az:
              bR = {start: ["marginLeft", "100%"], end: "margin-left:0"};
              break;
            case aS:
              bR = {start: ["marginTop", "-100%"], end: "margin-top:0"};
              break;
            case aO:
              bR = {start: ["marginTop", "100%"], end: "margin-top:0"};
              break;
            default:
              bR = {start: ["marginTop", "100%"], end: "margin-top:0"};
              break
          }
          bO[0][y][bR.start[0]] = bR.start[1];
          new aZ(bO[0], bR.end, {
            duration: 900, after: function () {
              bO[1][y][a] = e;
              bO[2][y][a] = e;
              bM[y][ac] = ad
            }
          });
          bP.requireAnimation = bb
        }
        bR = {};
        switch (bK.x) {
          case"l":
            bR[ap] = bN[ap];
            break;
          case"r":
            bR[ap] = bN[ap] + bN[aV] - G;
            break;
          case"c":
            bR[ap] = bN[ap] + (bN[aV] - G) / 2;
            break;
          default:
            bR[ap] = ~~bK.x > 0 ? (bN[ap] + ~~bK.x) : (bN[ap] + bN[aV] - G + ~~bK.x);
            break
        }
        switch (bK.y) {
          case"t":
            bR[aS] = bN[aS];
            break;
          case"b":
            bR[aS] = bN[aS] + bN[bh] - bS;
            break;
          case"m":
            bR[aS] = bN[aS] + (bN[bh] - bS) / 2;
            break;
          default:
            bR[aS] = ~~bK.y > 0 ? (bN[aS] + ~~bK.y) : (bN[aS] + bN[bh] - bS + ~~bK.y);
            break
        }
        X(bM, {zIndex: bN[l], left: bR[ap], top: bR[aS], display: e, visibility: ad});
        if (bo.subs.inimage && !bP.emitted) {
          bP.emitted = ag;
          a8.fire(bf, "gumgum.inimage.load", {image: bP.asset.img, ad: bH(bM)})
        }
        if (!bL.viewable50 && p(bM, a4) >= 50) {
          bP.triggerViewability(50)
        }
        if (!bL.viewable100 && p(bM, a4) === 100) {
          bP.triggerViewability(100)
        }
        return ag
      }, remove: function () {
        var G = this;
        a8.off(G[aM], "viewable");
        aU(bf, G[aM]);
        if (!G[aT].forced) {
          A.servedAds--
        }
        delete G.asset.ad;
        if (bo.subs.inimage) {
          a8.fire(bf, "gumgum.inimage.close", {image: G.asset.img})
        }
      }
    });
    if (ah()) {
      bo.onReady(be)
    }
  }(GUMGUM, window, document))
}
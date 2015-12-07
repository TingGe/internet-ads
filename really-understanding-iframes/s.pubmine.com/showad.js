(function() {
    function log(text) {
        window['__ATA_DEBUG'] &&
            (typeof console !== 'undefined') &&
            (console.info) &&
            console.info(new Date(), ' -> ', text.replace('http', 'htt_p'));
    }

    //var AD_SERVER_URL = '//s.pubmine.com/';
    var AD_SERVER_URL = './s.pubmine.com/';

    // !!! [VERY IMPORTANT] !!!!
    // this must exactly match variable name in global scope, which must contain displayAd function
    // it is used to connect this lib with global object
    var globalLinkName = '__ATA',
        globalPart = window[globalLinkName],
        SLOT_ID_PREFIX = globalPart.slotPrefix;

    // setup inheritance. AdBase must be prototype for both our classes
    // it contains only basic functions, which I want to be accessible from
    // manager and renderer
    AdManager.prototype = new AdBase();
    AdManager.prototype.constructor = AdManager;
    AdRenderer.prototype = new AdBase();
    AdRenderer.prototype.constructor = AdRenderer;

    var adm = new AdManager(globalPart);
    /**
     * Instance of this class rules server request and processing.
     * It creates real displayAd function, which is called on ad tag render
     * or server response receiving.
     * @class AdManager
     * @extends AdBase
     * @param {Object} linkToGlobalPart
     */
    function AdManager(linkToGlobalPart) {
        var me = this;

        var knownParams = ['section_id', 'tz', 'fl', 'click3rd', 'slot_id', 'ref', 'pos'];

        /**
         * Links AdManager to global object.
         * @property {Object} globalPart
         */
        this.globalPart = linkToGlobalPart;
        /**
         * Link between AdManager and AdRenderer
         * @property {AdRenderer} adRenderer
         */
        this.adRenderer = new AdRenderer(this);

        /**
         * Main displaying function.
         * @param {String} slotId
         */
        this.displayAd = this.globalPart['displayAd'] = function(slotId, customParams) {
            log('<span class="blue">displayAd is called for ID:</span> ' + slotId);
            var ids = me.globalPart['ids'];
            if (ids && ids[slotId]) {
                delete ids[slotId]; // remove slot from 'to-be-rendered' map
            }
            var adTagEl, type, scriptTag, baseUrl, completeAdServerUrl, width, height, slotDef;
            adTagEl = document.getElementById(slotId);
            width = parseInt(adTagEl.style.width, 10);
            height = parseInt(adTagEl.style.height, 10);
            type = adTagEl.getAttribute('data-type') || 'adj';
            baseUrl = AD_SERVER_URL;
            slotDef = {
                slotId: slotId,
                sectionId: adTagEl.getAttribute('data-section'),
                forcedUrl: adTagEl.getAttribute('data-forcedurl'),
                customParams: customParams,
                type: type,
                width: width,
                height: height
            };
            completeAdServerUrl = slotDef.forcedUrl || me.generateAdServerUrl(baseUrl, slotDef);

            log('Ad server full URL: ' + completeAdServerUrl);
            me.adRenderer.renderSlot(me.isSyncMode(), slotDef, completeAdServerUrl);
        };

        /**
         * Checks, if there are not rendered slots (pushed into window.__ATA.ids array),
         * iterates it and launches displayAd for every item found.
         */
        this.checkNotRendered = function() {
            var slotId, ids;
            ids = this.globalPart['ids'];
            // if we're in async mode, then creatives aren't rendered yet.
            if (ids !== null && typeof ids === 'object') {
                for (slotId in ids) {
                    if (!ids.hasOwnProperty(slotId)) {
                        continue;
                    }
                    this.displayAd(slotId);
                }
            }
        };

        /**
         * Prepares url, which will be used to call ad server for ads.
         * @param {String} baseUrl Without protocol, if possible
         * @returns {String} final url
         */
        this.generateAdServerUrl = function(baseUrl, opts) {
            opts = opts || {};
            var useSSL, url, allParams, baseParams, paramName, paramValue, customParams, lang, referrerUrl;

            useSSL = 'https:' === document.location.protocol;
            allParams = [];
            lang = this.getLang();
            // remove protocol and trailing "?"
            url = baseUrl.replace(/^http:|^https:|\?$/im, '');
            url = (useSSL ? 'https:' : 'http:') + url + opts.type + '/';

            referrerUrl = '';
            if (top !== self) {
                referrerUrl = encodeURIComponent(document.referrer);
            }
            baseParams = [
                'tz=' + new Date().getTimezoneOffset(),
                'fl=' + me.getFlashVersion(),
                'ref=' + referrerUrl || '',
                'pos=' + me.getSlotPosition(opts.slotId) || ''
            ];

            //url += opts.sectionId + '/' + opts.width + '/' + opts.height + '/';
            url += opts.sectionId + '/' + opts.width + '/' + opts.height;
            allParams = allParams.concat(baseParams);

            // Add user-defined params to final URL
            me.addCustomParams(me.globalPart.customParams, allParams)
            me.addCustomParams(opts.customParams, allParams)

            if (typeof me.globalPart.click3rd !== 'undefined') {
                allParams.push('click3rd=' + encodeURIComponent(me.globalPart.click3rd));
            }

            if (lang !== false) {
                allParams.push('lang=' + encodeURIComponent(lang));
            }

            return url + '?' + allParams.join('&') + '&ord=' + Math.floor(Math.random() * 10e12);
        };

        this.addCustomParams = function(customParams, allParams) {
            if (typeof customParams !== 'undefined') {
                piterate: for (paramName in customParams) {
                    for (var i = 0, l = knownParams.length; i < l; i++) {
                        if (knownParams[i] + '' === paramName + '') {
                            continue piterate;
                        }
                    }
                    if (customParams.hasOwnProperty(paramName)) {
                        paramValue = customParams[paramName];
                        if (me.isArray(paramValue)) {
                            for (var j = 0; j < paramValue.length; j++) {
                                paramValue[j] = encodeURIComponent(paramValue[j]);
                            }
                            allParams.push(paramName + '=' + paramValue.join('|'));
                            continue piterate;
                        }
                        allParams.push(paramName + '=' + encodeURIComponent(paramValue));
                    }
                }
            }
        };

        /**
         * Returns current sync/async state
         * @returns {Boolean}
         */
        this.isSyncMode = function() {
            return me.globalPart['isSync'] === true;
        };
        this.checkNotRendered();
    }

    /**
     * Instance of this class is connected to AdManager and performs all
     * operations related to ad rendering on page. Usually AdManager calls
     * AdRenderer's instance's renderSlot method with slot id argument.
     * @class AdRenderer
     * @extends AdBase
     * @param {AdManager} adManager
     */
    function AdRenderer(adManager) {
        var me = this;
        /**
         * Link between AdManager and AdRenderer
         * @property {AdManager} adManager
         */
        if (adManager instanceof AdManager) {
            this.adManager = adManager;
        }
        /**
         *
         * @param {Boolean} sync
         * @param {Object} slotDef
         * @param {String} url
         */
        this.renderSlot = function(sync, slotDef, url) {
            log('<span class="green">Slot rendering method is invoked for ID:: ' + slotDef.slotId + ' ' + 'with ' + slotDef.type + ' content</span>');
            sync ? this.renderSyncSlot(slotDef, url) : this.renderAsyncSlot(slotDef, url);
        };
        /**
         * Renders sync slot (page is blocked here now)
         * @param {Object} slot
         * @param {String} url
         * @private
         */
        this.renderSyncSlot = function(slot, url) {
            if (slot.type === 'adj') {
                document.write('<script type=\"text/javascript\" src="' + url + '"><\/scr' + 'ipt>');
            } else {
                document.write(
                    '<iframe src=\"' + url + '\" style=\"border:none;height:' + slot.height + 'px;width:' + slot.width + 'px;\"' +
                    'width=\"' + slot.width + '\" height=\"' + slot.height + '\" border=\"0\"></iframe>'
                );
            }
        };
        /**
         * Renders ad content.
         * TODO: more detailed description
         * @param {Object} slot slot definition
         * @returns {Boolean} slot render success.
         */
        this.renderAsyncSlot = function(slot, url) {
            var parentEl, fif, fifWindow, fifDocument, content, syncTagText, isNetscape;
            parentEl = document.getElementById(slot.slotId);
            // ad HTML container is not rendered yet
            if (!parentEl) {
                log('Not ready to render: ' + slot.slotId);
                return false;
            }
            // fif means Friendly iFrame
            fif = me.prepareFrame(slot);

            switch (slot.type) {
                case 'adj':
                    fif.src = 'javascript:\"<html><body style=\'background:transparent;margin:0%;\'></body></html>\"';
                    parentEl.appendChild(fif);
                    content = '<html><body style=\'background:transparent;margin:0%;\'>' +
                        '<script type=\"text/javascript\">var inDapIF=true;<\/scri' + 'pt>' +
                        '<script type=\"text/javascript\" src="' + url + '"><\/scri' + 'pt>' +
                        '<\/body><\/html>';

                    break;
                case 'adi':
                    fif.src = url;
                    parentEl.appendChild(fif);
                    return true; // nothing  to do more, we've got URL, we've got iframe.
            }

            // browser-specific flow
            isNetscape = me.isNetscape();

            if (me.getIEVersion() !== 0 || isNetscape) {
                fifWindow = window.frames[fif.name];
                fifWindow['contents'] = content;
                fifWindow.location.replace(me.getFifLocationIE());
            } else {
                fifDocument = fif.contentWindow ? fif.contentWindow.document : fif.contentDocument;

                if (navigator.userAgent.indexOf('Firefox') !== -1) {
                    fifDocument.open('text/html', 'replace');
                }

                fifDocument.write(content);

                // Opera non-webkit won't write all inside scripts if closed
                // this is not good, but important.
                if (!me.isPresto()) {
                    fifDocument.close();
                }
            }
            return true;

        };

        /**
         * Creates basic firendly iframe (fif).
         * @param {Object} slot slot server definition
         * @returns {HTMLElement}
         */
        this.prepareFrame = function(slot) {
            var fif = document.createElement('iframe'),
                fifStyle = 'border:none;',
                fifName = me.getFrameName(slot.slotId);

            // width of iframe
            if (me.notEmptyVar(slot.width)) {
                fifStyle += 'width:' + slot.width + 'px;';
                fif.width = slot.width;
            }

            // height of iframe
            if (me.notEmptyVar(slot.height)) {
                fifStyle += 'height:' + slot.height + 'px;';
                fif.height = slot.height;
            }

            fif.setAttribute('style', fifStyle);
            fif.setAttribute('frameBorder', '0');
            fif.setAttribute('scrolling', 'no');
            fif.name = fifName;
            fif.id = fifName;
            return fif;
        };
        /**
         * Returns correct location for iframe in case of old browser
         * @returns {String}
         */
        this.getFifLocationIE = function() {
            return me.isNetscape() && !me.adManager.isSyncMode() ?
                'javascript:document.write(window.contents);' :
                'javascript:window.contents';
        };
        /**
         * Generates name for Friendly-iFrame ad container
         * @param {String} slotId
         * @returns {String}
         */
        this.getFrameName = function(slotId) {
            return 'fif_slot_' + SLOT_ID_PREFIX + '_' + slotId;
        };

    }

    /**
     * Base class for AdRenderer and AdManager, holds some common functions.
     * @class AdBase
     */
    function AdBase() {
        var me = this;

        /**
         * Returns flash version or 0 if none;
         * @returns {Number}
         */
        this.getFlashVersion = function() {
            var flashVersion = 0,
                d;

            if (me.isDefined(navigator.plugins) && typeof navigator.plugins['Shockwave Flash'] === 'object') {
                d = navigator.plugins['Shockwave Flash'].description;
                if (d &&
                    !(me.isDefined(navigator.mimeTypes) &&
                        navigator.mimeTypes['application/x-shockwave-flash'] &&
                        !navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin)
                ) {
                    d = d.replace(/^.*\s+(\S+\s+\S+$)/, '$1');
                    flashVersion = parseInt(d.replace(/^(.*)\..*$/, '$1'), 10);
                }
            } else if (me.isDefined(window.ActiveXObject)) {
                try {
                    var a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                    if (a) {
                        d = a.GetVariable('$version');
                        if (d) {
                            d = d.split(' ')[1].split(',');
                            flashVersion = parseInt(d[0], 10);
                        }
                    }
                } catch (e) {}
            }

            return flashVersion;
        };

        /**
         * Basic check for typeof !== undefined
         * @param {void} [subject]
         * @returns {Boolean}
         */
        this.isDefined = function(subject) {
            return typeof subject !== 'undefined';
        };

        /**
         * Checks variable for containing any value.
         * TODO: may impl. object/arrays correct processing. Minor.
         * @param {void} variable
         * @returns {Boolean}
         */
        this.notEmptyVar = function(variable) {
            return me.isDefined(variable) &&
                (variable !== null) &&
                (variable + '' !== '');
        };

        /**
         * Returns Internet Explorer version or 0 if not IE.
         * @returns {Number}
         */
        this.getIEVersion = function() {
            var agent = navigator.userAgent,
                isIE = agent.indexOf('MSIE ');
            return -1 === isIE ? 0 : parseFloat(agent.substring(isIE + 5, agent.indexOf(';', isIE)));
        };

        /**
         * Returns true if current browser is suspected to be NN
         * @returns {Boolean}
         */
        this.isNetscape = function() {
            var agent = navigator.userAgent;

            return agent.match(/\d\sNavigator\/\d/) !== null || agent.match(/\d\sNetscape\/\d/) !== null;
        };

        /**
         * Checks if useragent is old Opera. Old Opera is the Opera browser before webkit engine
         * @returns {Boolean}
         */
        this.isPresto = function() {
            return navigator.userAgent.indexOf('Opera') !== -1;
        };

        /**
         * Polyfill from MDN. Checks arg.
         * @param {Mixed} arg
         * @returns {Boolean}
         */
        this.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
        /**
         * Returns browser viewport size in (virtual) pixels.
         * @returns {Object} {width: {Number}, height: {Number}}
         */
        this.getScreenSize = function() {
            // Trying to calculate browser window height
            var winHeight = 0,
                winWidth = 0;

            if (typeof window.innerHeight === 'number') {
                // Non-IE
                winHeight = window.innerHeight;
                winWidth = window.innerWidth;
            } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                // IE 6+ in 'standards compliant mode'
                winHeight = document.documentElement.clientHeight;
                winWidth = document.documentElement.clientWidth;
            }
            return {
                width: winWidth,
                height: winHeight
            };
        };
        /**
         * Tries to detect slot position relative to the fold (screen border)
         * @returns {String}
         */
        this.getSlotPosition = function(slotId) {
            // logic is taken from legacy script, but changed a bit, image writing is removed
            // visibility is calculated by the very slot
            // Calculate visibility
            // Trying to calculate pixel's offsetY
            var pix = document.getElementById(slotId);
            var size = me.getScreenSize();
            var pos = pix ? pix.offsetTop : 0;
            while (pix && (pix.offsetParent !== null)) {
                pix = pix.offsetParent;
                pos += pix.offsetTop;
                if (pix.tagName === 'BODY') {
                    break;
                }
            }

            // Compare and save
            if ((pos || (pos === 0)) && size.height) {
                pos > size.height ? pos = 'btf' : pos = 'atf';
            } else {
                pos = '';
            }
            return pos;
        };
        /**
         * Tries to detect page language
         * @returns {String|Boolean}
         */
        this.getLang = function() {
            var metaTags = document.getElementsByTagName('meta'),
                equiv,
                lang = false;

            for (var i = 0; i < metaTags.length; i++) {
                equiv = false;
                if (!!metaTags[i]) {
                    equiv = metaTags[i].getAttribute('http-equiv') || metaTags[i]['httpEquiv'];
                }

                if (!!equiv && equiv.toLowerCase() === 'content-language') {
                    lang = metaTags[i].getAttribute('content') || metaTags[i]['content'];
                    lang = lang || false;
                    return lang;
                }
            }

            return lang;
        };
    }
})();

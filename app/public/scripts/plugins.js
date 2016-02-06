/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});
/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 *
 * Copyright 2014, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */

;(function($, window, document, undefined) {

	var pluginName = 'stellar',
		defaults = {
			scrollProperty: 'scroll',
			positionProperty: 'position',
			horizontalScrolling: true,
			verticalScrolling: true,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			hideDistantElements: true,
			hideElement: function($elem) { $elem.hide(); },
			showElement: function($elem) { $elem.show(); }
		},

		scrollProperty = {
			scroll: {
				getLeft: function($elem) { return $elem.scrollLeft(); },
				setLeft: function($elem, val) { $elem.scrollLeft(val); },

				getTop: function($elem) { return $elem.scrollTop();	},
				setTop: function($elem, val) { $elem.scrollTop(val); }
			},
			position: {
				getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }
			},
			margin: {
				getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
			},
			transform: {
				getLeft: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
				},
				getTop: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
				}
			}
		},

		positionProperty = {
			position: {
				setLeft: function($elem, left) { $elem.css('left', left); },
				setTop: function($elem, top) { $elem.css('top', top); }
			},
			transform: {
				setPosition: function($elem, left, startingLeft, top, startingTop) {
					$elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
				}
			}
		},

		// Returns a function which adds a vendor prefix to any CSS property name
		vendorPrefix = (function() {
			var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				style = $('script')[0].style,
				prefix = '',
				prop;

			for (prop in style) {
				if (prefixes.test(prop)) {
					prefix = prop.match(prefixes)[0];
					break;
				}
			}

			if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
			if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

			return function(property) {
				return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
			};
		}()),

		prefixedTransform = vendorPrefix('transform'),

		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

		setBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem, x, y) {
				$elem.css({
					'background-position-x': x,
					'background-position-y': y
				});
			} :
			function($elem, x, y) {
				$elem.css('background-position', x + ' ' + y);
			}
		),

		getBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem) {
				return [
					$elem.css('background-position-x'),
					$elem.css('background-position-y')
				];
			} :
			function($elem) {
				return $elem.css('background-position').split(' ');
			}
		),

		requestAnimFrame = (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback) {
				setTimeout(callback, 1000 / 60);
			}
		);

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

			this._defineElements();
			this._defineGetters();
			this._defineSetters();
			this._handleWindowLoadAndResize();
			this._detectViewport();

			this.refresh({ firstLoad: true });

			if (this.options.scrollProperty === 'scroll') {
				this._handleScrollEvent();
			} else {
				this._startAnimationLoop();
			}
		},
		_defineElements: function() {
			if (this.element === document.body) this.element = window;
			this.$scrollElement = $(this.element);
			this.$element = (this.element === window ? $('body') : this.$scrollElement);
			this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
		},
		_defineGetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

			this._getScrollLeft = function() {
				return scrollPropertyAdapter.getLeft(self.$scrollElement);
			};

			this._getScrollTop = function() {
				return scrollPropertyAdapter.getTop(self.$scrollElement);
			};
		},
		_defineSetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
				positionPropertyAdapter = positionProperty[self.options.positionProperty],
				setScrollLeft = scrollPropertyAdapter.setLeft,
				setScrollTop = scrollPropertyAdapter.setTop;

			this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
				setScrollLeft(self.$scrollElement, val);
			} : $.noop);

			this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
				setScrollTop(self.$scrollElement, val);
			} : $.noop);

			this._setPosition = positionPropertyAdapter.setPosition ||
				function($elem, left, startingLeft, top, startingTop) {
					if (self.options.horizontalScrolling) {
						positionPropertyAdapter.setLeft($elem, left, startingLeft);
					}

					if (self.options.verticalScrolling) {
						positionPropertyAdapter.setTop($elem, top, startingTop);
					}
				};
		},
		_handleWindowLoadAndResize: function() {
			var self = this,
				$window = $(window);

			if (self.options.responsive) {
				$window.bind('load.' + this.name, function() {
					self.refresh();
				});
			}

			$window.bind('resize.' + this.name, function() {
				self._detectViewport();

				if (self.options.responsive) {
					self.refresh();
				}
			});
		},
		refresh: function(options) {
			var self = this,
				oldLeft = self._getScrollLeft(),
				oldTop = self._getScrollTop();

			if (!options || !options.firstLoad) {
				this._reset();
			}

			this._setScrollLeft(0);
			this._setScrollTop(0);

			this._setOffsets();
			this._findParticles();
			this._findBackgrounds();

			// Fix for WebKit background rendering bug
			if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
				$(window).load(function() {
					var oldLeft = self._getScrollLeft(),
						oldTop = self._getScrollTop();

					self._setScrollLeft(oldLeft + 1);
					self._setScrollTop(oldTop + 1);

					self._setScrollLeft(oldLeft);
					self._setScrollTop(oldTop);
				});
			}

			this._setScrollLeft(oldLeft);
			this._setScrollTop(oldTop);
		},
		_detectViewport: function() {
			var viewportOffsets = this.$viewportElement.offset(),
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

			this.viewportWidth = this.$viewportElement.width();
			this.viewportHeight = this.$viewportElement.height();

			this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
			this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
		},
		_findParticles: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop();

			if (this.particles !== undefined) {
				for (var i = this.particles.length - 1; i >= 0; i--) {
					this.particles[i].$element.data('stellar-elementIsActive', undefined);
				}
			}

			this.particles = [];

			if (!this.options.parallaxElements) return;

			this.$element.find('[data-stellar-ratio]').each(function(i) {
				var $this = $(this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					$offsetParent,
					offsetLeft,
					offsetTop,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-elementIsActive')) {
					$this.data('stellar-elementIsActive', this);
				} else if ($this.data('stellar-elementIsActive') !== this) {
					return;
				}

				self.options.showElement($this);

				// Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
				if (!$this.data('stellar-startingLeft')) {
					$this.data('stellar-startingLeft', $this.css('left'));
					$this.data('stellar-startingTop', $this.css('top'));
				} else {
					$this.css('left', $this.data('stellar-startingLeft'));
					$this.css('top', $this.data('stellar-startingTop'));
				}

				positionLeft = $this.position().left;
				positionTop = $this.position().top;

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft;
				offsetTop = $this.offset().top - marginTop;

				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				// Add our object to the particles collection
				self.particles.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('position') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingPositionLeft: positionLeft,
					startingPositionTop: positionTop,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
					width: $this.outerWidth(true),
					height: $this.outerHeight(true),
					isHidden: false
				});
			});
		},
		_findBackgrounds: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				$backgroundElements;

			this.backgrounds = [];

			if (!this.options.parallaxBackgrounds) return;

			$backgroundElements = this.$element.find('[data-stellar-background-ratio]');

			if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
			}

			$backgroundElements.each(function() {
				var $this = $(this),
					backgroundPosition = getBackgroundPosition($this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					offsetLeft,
					offsetTop,
					$offsetParent,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-backgroundIsActive')) {
					$this.data('stellar-backgroundIsActive', this);
				} else if ($this.data('stellar-backgroundIsActive') !== this) {
					return;
				}

				// Save/restore the original top and left CSS values in case we destroy the instance
				if (!$this.data('stellar-backgroundStartingLeft')) {
					$this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
					$this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
				} else {
					setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
				}

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft - scrollLeft;
				offsetTop = $this.offset().top - marginTop - scrollTop;
				
				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				self.backgrounds.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('background-attachment') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingValueLeft: backgroundPosition[0],
					startingValueTop: backgroundPosition[1],
					startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
					startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
					startingPositionLeft: $this.position().left,
					startingPositionTop: $this.position().top,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
				});
			});
		},
		_reset: function() {
			var particle,
				startingPositionLeft,
				startingPositionTop,
				background,
				i;

			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];
				startingPositionLeft = particle.$element.data('stellar-startingLeft');
				startingPositionTop = particle.$element.data('stellar-startingTop');

				this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

				this.options.showElement(particle.$element);

				particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
			}

			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

				setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
			}
		},
		destroy: function() {
			this._reset();

			this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
			this._animationLoop = $.noop;

			$(window).unbind('load.' + this.name).unbind('resize.' + this.name);
		},
		_setOffsets: function() {
			var self = this,
				$window = $(window);

			$window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

			if (typeof this.options.horizontalOffset === 'function') {
				this.horizontalOffset = this.options.horizontalOffset();
				$window.bind('resize.horizontal-' + this.name, function() {
					self.horizontalOffset = self.options.horizontalOffset();
				});
			} else {
				this.horizontalOffset = this.options.horizontalOffset;
			}

			if (typeof this.options.verticalOffset === 'function') {
				this.verticalOffset = this.options.verticalOffset();
				$window.bind('resize.vertical-' + this.name, function() {
					self.verticalOffset = self.options.verticalOffset();
				});
			} else {
				this.verticalOffset = this.options.verticalOffset;
			}
		},
		_repositionElements: function() {
			var scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				horizontalOffset,
				verticalOffset,
				particle,
				fixedRatioOffset,
				background,
				bgLeft,
				bgTop,
				isVisibleVertical = true,
				isVisibleHorizontal = true,
				newPositionLeft,
				newPositionTop,
				newOffsetLeft,
				newOffsetTop,
				i;

			// First check that the scroll position or container size has changed
			if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
				return;
			} else {
				this.currentScrollLeft = scrollLeft;
				this.currentScrollTop = scrollTop;
				this.currentWidth = this.viewportWidth;
				this.currentHeight = this.viewportHeight;
			}

			// Reposition elements
			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];

				fixedRatioOffset = (particle.isFixed ? 1 : 0);

				// Calculate position, then calculate what the particle's new offset will be (for visibility check)
				if (this.options.horizontalScrolling) {
					newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
					newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
				} else {
					newPositionLeft = particle.startingPositionLeft;
					newOffsetLeft = particle.startingOffsetLeft;
				}

				if (this.options.verticalScrolling) {
					newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
					newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
				} else {
					newPositionTop = particle.startingPositionTop;
					newOffsetTop = particle.startingOffsetTop;
				}

				// Check visibility
				if (this.options.hideDistantElements) {
					isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
					isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
				}

				if (isVisibleHorizontal && isVisibleVertical) {
					if (particle.isHidden) {
						this.options.showElement(particle.$element);
						particle.isHidden = false;
					}

					this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
				} else {
					if (!particle.isHidden) {
						this.options.hideElement(particle.$element);
						particle.isHidden = true;
					}
				}
			}

			// Reposition backgrounds
			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				fixedRatioOffset = (background.isFixed ? 0 : 1);
				bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
				bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

				setBackgroundPosition(background.$element, bgLeft, bgTop);
			}
		},
		_handleScrollEvent: function() {
			var self = this,
				ticking = false;

			var update = function() {
				self._repositionElements();
				ticking = false;
			};

			var requestTick = function() {
				if (!ticking) {
					requestAnimFrame(update);
					ticking = true;
				}
			};
			
			this.$scrollElement.bind('scroll.' + this.name, requestTick);
			requestTick();
		},
		_startAnimationLoop: function() {
			var self = this;

			this._animationLoop = function() {
				requestAnimFrame(self._animationLoop);
				self._repositionElements();
			};
			this._animationLoop();
		}
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

	$[pluginName] = function(options) {
		var $window = $(window);
		return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
	};

	// Expose the scroll and position property function hashes so they can be extended
	$[pluginName].scrollProperty = scrollProperty;
	$[pluginName].positionProperty = positionProperty;

	// Expose the plugin class so it can be modified
	window.Stellar = Plugin;
}(jQuery, this, document));
/*
---------------------------------------------------------------------------------------
    Variable / Dynamic Content Opacity depends on page scroll or page down
    Plugin: jQuery Vopacity
	Version 1.0.0
	Author: Jewel Ahmed
	Author URL: http://www.codeatomic.com/

	Licensed under The MIT License (MIT)
	Usage: jQuery('div.class').vopacity(0.15, true);
---------------------------------------------------------------------------------------
*/
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();
	var windowWidth = $window.width();
	
	$window.resize(function () {
		windowHeight = $window.height();
		windowWidth = $window.width();
	});

	$.fn.vopacity = function( extraDownSpeed, outerHeight ) {
		var $this = $(this);
		var getHeight;
		var paddingTop = 0;
		
		
		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		if (arguments.length < 1 || extraDownSpeed === null) extraDownSpeed = 0;
		if (arguments.length < 2 || outerHeight === null) outerHeight = true;
		
		function update(){
			var windowScrollTop = $window.scrollTop();				
			
			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
	
				if (top + height < windowScrollTop) { //Hidden at screen top area / just above of the viewport
					return;
				} else if (top > windowScrollTop + windowHeight) { //Hidden at screen bottom area / just below of the viewport
					return;
				}
				
				var $visibleHeight = ( ( top + height ) - windowScrollTop );
				if ( $visibleHeight > height ) {
					$visibleHeight = height;
				}
				
				var $calculatedOpacity = ( 1 / height ) * $visibleHeight;
				if ( $calculatedOpacity < 1 && extraDownSpeed > 0 ) {
					$calculatedOpacity-= extraDownSpeed;
				}
				if ( typeof $(this).data('content-dynamic-opacity-class') !== 'undefined' && $(this).data('content-dynamic-opacity-class') != '') {
					$element.find('.'+$(this).data('content-dynamic-opacity-class')).stop(true,true).animate( { 'opacity' : $calculatedOpacity }, 0, 'swing' );			
				} else {
					$element.stop(true,true).animate( { 'opacity' : $calculatedOpacity }, 0, 'swing' );
				}
			});
		}	

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, _i, _len, _ref;
      _ref = this.keys;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, _i, _len, _ref;
      _ref = this.keys;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var _ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, char) {
          return char.toUpperCase();
        });
      }
      return ((_ref = el.currentStyle) != null ? _ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      this.animationNameCache = new WeakMap();
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.stopped = false;
      this.boxes = (function() {
        var _i, _len, _ref, _results;
        _ref = this.element.querySelectorAll("." + this.config.boxClass);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box);
        }
        return _results;
      }).call(this);
      this.all = (function() {
        var _i, _len, _ref, _results;
        _ref = this.boxes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box);
        }
        return _results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          this.util().addEvent(window, 'scroll', this.scrollHandler);
          this.util().addEvent(window, 'resize', this.scrollHandler);
          this.interval = setInterval(this.scrollCallback, 50);
        }
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var node, record, _j, _len1, _results;
            _results = [];
            for (_j = 0, _len1 = records.length; _j < _len1; _j++) {
              record = records[_j];
              _results.push((function() {
                var _k, _len2, _ref1, _results1;
                _ref1 = record.addedNodes || [];
                _results1 = [];
                for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                  node = _ref1[_k];
                  _results1.push(this.doSync(node));
                }
                return _results1;
              }).call(_this));
            }
            return _results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, _i, _len, _ref, _results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      _ref = element.querySelectorAll("." + this.config.boxClass);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        if (__indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          _results.push(this.scrolled = true);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.style.visibility = 'visible');
      }
      return _results;
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, value, vendor, _results;
      _results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        _results.push((function() {
          var _i, _len, _ref, _results1;
          _ref = this.vendors;
          _results1 = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            vendor = _ref[_i];
            _results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var result, style, vendor, _i, _len, _ref;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      _ref = this.vendors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        vendor = _ref[_i];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (_error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

/*!
 * Masonry PACKAGED v3.3.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=parseInt(e,10),h=parseInt(f,10),i=this.layout.size;g=-1!=e.indexOf("%")?g/100*i.width:g,h=-1!=f.indexOf("%")?h/100*i.height:h,g=isNaN(g)?0:g,h=isNaN(h)?0:h,g-=c?i.paddingLeft:i.paddingRight,h-=d?i.paddingTop:i.paddingBottom,this.position.x=g,this.position.y=h},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,a=this.getXValue(a),b=this.getYValue(b),n?"translate3d("+a+", "+b+", 0)":"translate("+a+", "+b+")"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});
/*! Swipebox v1.4.1 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */

;( function ( window, document, $, undefined ) {

	$.swipebox = function( elem, options ) {

		// Default options
		var ui,
			defaults = {
				useCSS : true,
				useSVG : true,
				initialIndexOnArray : 0,
				removeBarsOnMobile : true,
				hideCloseButtonOnMobile : false,
				hideBarsDelay : 3000,
				videoMaxWidth : 1140,
				vimeoColor : 'cccccc',
				beforeOpen: null,
				afterOpen: null,
				afterClose: null,
				nextSlide: null,
				prevSlide: null,
				loopAtEnd: false,
				autoplayVideos: false,
				queryStringData: {},
				toggleClassOnLoad: ''
			},

			plugin = this,
			elements = [], // slides array [ { href:'...', title:'...' }, ...],
			$elem,
			selector = elem.selector,
			$selector = $( selector ),
			isMobile = navigator.userAgent.match( /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i ),
			isTouch = isMobile !== null || document.createTouch !== undefined || ( 'ontouchstart' in window ) || ( 'onmsgesturechange' in window ) || navigator.msMaxTouchPoints,
			supportSVG = !! document.createElementNS && !! document.createElementNS( 'http://www.w3.org/2000/svg', 'svg').createSVGRect,
			winWidth = window.innerWidth ? window.innerWidth : $( window ).width(),
			winHeight = window.innerHeight ? window.innerHeight : $( window ).height(),
			currentX = 0,
			/* jshint multistr: true */
			html = '<div id="swipebox-overlay">\
					<div id="swipebox-container">\
						<div id="swipebox-slider"></div>\
						<div id="swipebox-top-bar">\
							<div id="swipebox-title"></div>\
						</div>\
						<div id="swipebox-bottom-bar">\
							<div id="swipebox-arrows">\
								<a id="swipebox-prev"></a>\
								<a id="swipebox-next"></a>\
							</div>\
						</div>\
						<a id="swipebox-close"></a>\
					</div>\
			</div>';

		plugin.settings = {};

		$.swipebox.close = function () {
			ui.closeSlide();
		};

		$.swipebox.extend = function () {
			return ui;
		};

		plugin.init = function() {

			plugin.settings = $.extend( {}, defaults, options );

			if ( $.isArray( elem ) ) {

				elements = elem;
				ui.target = $( window );
				ui.init( plugin.settings.initialIndexOnArray );

			} else {

				$( document ).on( 'click', selector, function( event ) {

					// console.log( isTouch );

					if ( event.target.parentNode.className === 'slide current' ) {

						return false;
					}

					if ( ! $.isArray( elem ) ) {
						ui.destroy();
						$elem = $( selector );
						ui.actions();
					}

					elements = [];
					var index , relType, relVal;

					// Allow for HTML5 compliant attribute before legacy use of rel
					if ( ! relVal ) {
						relType = 'data-rel';
						relVal  = $( this ).attr( relType );
					}

					if ( ! relVal ) {
						relType = 'rel';
						relVal = $( this ).attr( relType );
					}

					if ( relVal && relVal !== '' && relVal !== 'nofollow' ) {
						$elem = $selector.filter( '[' + relType + '="' + relVal + '"]' );
					} else {
						$elem = $( selector );
					}

					$elem.each( function() {

						var title = null,
							href = null;

						if ( $( this ).attr( 'title' ) ) {
							title = $( this ).attr( 'title' );
						}


						if ( $( this ).attr( 'href' ) ) {
							href = $( this ).attr( 'href' );
						}

						elements.push( {
							href: href,
							title: title
						} );
					} );

					index = $elem.index( $( this ) );
					event.preventDefault();
					event.stopPropagation();
					ui.target = $( event.target );
					ui.init( index );
				} );
			}
		};

		ui = {

			/**
			 * Initiate Swipebox
			 */
			init : function( index ) {
				if ( plugin.settings.beforeOpen ) {
					plugin.settings.beforeOpen();
				}
				this.target.trigger( 'swipebox-start' );
				$.swipebox.isOpen = true;
				this.build();
				this.openSlide( index );
				this.openMedia( index );
				this.preloadMedia( index+1 );
				this.preloadMedia( index-1 );
				if ( plugin.settings.afterOpen ) {
					plugin.settings.afterOpen();
				}
			},

			/**
			 * Built HTML containers and fire main functions
			 */
			build : function () {
				var $this = this, bg;

				$( 'body' ).append( html );

				if ( supportSVG && plugin.settings.useSVG === true ) {
					bg = $( '#swipebox-close' ).css( 'background-image' );
					bg = bg.replace( 'png', 'svg' );
					$( '#swipebox-prev, #swipebox-next, #swipebox-close' ).css( {
						'background-image' : bg
					} );
				}

				if ( isMobile && plugin.settings.removeBarsOnMobile ) {
					$( '#swipebox-bottom-bar, #swipebox-top-bar' ).remove();
				}

				$.each( elements,  function() {
					$( '#swipebox-slider' ).append( '<div class="slide"></div>' );
				} );

				$this.setDim();
				$this.actions();

				if ( isTouch ) {
					$this.gesture();
				}

				// Devices can have both touch and keyboard input so always allow key events
				$this.keyboard();

				$this.animBars();
				$this.resize();

			},

			/**
			 * Set dimensions depending on windows width and height
			 */
			setDim : function () {

				var width, height, sliderCss = {};

				// Reset dimensions on mobile orientation change
				if ( 'onorientationchange' in window ) {

					window.addEventListener( 'orientationchange', function() {
						if ( window.orientation === 0 ) {
							width = winWidth;
							height = winHeight;
						} else if ( window.orientation === 90 || window.orientation === -90 ) {
							width = winHeight;
							height = winWidth;
						}
					}, false );


				} else {

					width = window.innerWidth ? window.innerWidth : $( window ).width();
					height = window.innerHeight ? window.innerHeight : $( window ).height();
				}

				sliderCss = {
					width : width,
					height : height
				};

				$( '#swipebox-overlay' ).css( sliderCss );

			},

			/**
			 * Reset dimensions on window resize envent
			 */
			resize : function () {
				var $this = this;

				$( window ).resize( function() {
					$this.setDim();
				} ).resize();
			},

			/**
			 * Check if device supports CSS transitions
			 */
			supportTransition : function () {

				var prefixes = 'transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition'.split( ' ' ),
					i;

				for ( i = 0; i < prefixes.length; i++ ) {
					if ( document.createElement( 'div' ).style[ prefixes[i] ] !== undefined ) {
						return prefixes[i];
					}
				}
				return false;
			},

			/**
			 * Check if CSS transitions are allowed (options + devicesupport)
			 */
			doCssTrans : function () {
				if ( plugin.settings.useCSS && this.supportTransition() ) {
					return true;
				}
			},

			/**
			 * Touch navigation
			 */
			gesture : function () {

				var $this = this,
					index,
					hDistance,
					vDistance,
					hDistanceLast,
					vDistanceLast,
					hDistancePercent,
					vSwipe = false,
					hSwipe = false,
					hSwipMinDistance = 10,
					vSwipMinDistance = 50,
					startCoords = {},
					endCoords = {},
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' ),
					slider = $( '#swipebox-slider' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( 'body' ).bind( 'touchstart', function( event ) {

					$( this ).addClass( 'touching' );
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
					endCoords = event.originalEvent.targetTouches[0];
					startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
					startCoords.pageY = event.originalEvent.targetTouches[0].pageY;

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX +'%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '.touching' ).bind( 'touchmove',function( event ) {
						event.preventDefault();
						event.stopPropagation();
						endCoords = event.originalEvent.targetTouches[0];

						if ( ! hSwipe ) {
							vDistanceLast = vDistance;
							vDistance = endCoords.pageY - startCoords.pageY;
							if ( Math.abs( vDistance ) >= vSwipMinDistance || vSwipe ) {
								var opacity = 0.75 - Math.abs(vDistance) / slider.height();

								slider.css( { 'top': vDistance + 'px' } );
								slider.css( { 'opacity': opacity } );

								vSwipe = true;
							}
						}

						hDistanceLast = hDistance;
						hDistance = endCoords.pageX - startCoords.pageX;
						hDistancePercent = hDistance * 100 / winWidth;

						if ( ! hSwipe && ! vSwipe && Math.abs( hDistance ) >= hSwipMinDistance ) {
							$( '#swipebox-slider' ).css( {
								'-webkit-transition' : '',
								'transition' : ''
							} );
							hSwipe = true;
						}

						if ( hSwipe ) {

							// swipe left
							if ( 0 < hDistance ) {

								// first slide
								if ( 0 === index ) {
									// console.log( 'first' );
									$( '#swipebox-overlay' ).addClass( 'leftSpringTouch' );
								} else {
									// Follow gesture
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							// swipe rught
							} else if ( 0 > hDistance ) {

								// last Slide
								if ( elements.length === index +1 ) {
									// console.log( 'last' );
									$( '#swipebox-overlay' ).addClass( 'rightSpringTouch' );
								} else {
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							}
						}
					} );

					return false;

				} ).bind( 'touchend',function( event ) {
					event.preventDefault();
					event.stopPropagation();

					$( '#swipebox-slider' ).css( {
						'-webkit-transition' : '-webkit-transform 0.4s ease',
						'transition' : 'transform 0.4s ease'
					} );

					vDistance = endCoords.pageY - startCoords.pageY;
					hDistance = endCoords.pageX - startCoords.pageX;
					hDistancePercent = hDistance*100/winWidth;

					// Swipe to bottom to close
					if ( vSwipe ) {
						vSwipe = false;
						if ( Math.abs( vDistance ) >= 2 * vSwipMinDistance && Math.abs( vDistance ) > Math.abs( vDistanceLast ) ) {
							var vOffset = vDistance > 0 ? slider.height() : - slider.height();
							slider.animate( { top: vOffset + 'px', 'opacity': 0 },
								300,
								function () {
									$this.closeSlide();
								} );
						} else {
							slider.animate( { top: 0, 'opacity': 1 }, 300 );
						}

					} else if ( hSwipe ) {

						hSwipe = false;

						// swipeLeft
						if( hDistance >= hSwipMinDistance && hDistance >= hDistanceLast) {

							$this.getPrev();

						// swipeRight
						} else if ( hDistance <= -hSwipMinDistance && hDistance <= hDistanceLast) {

							$this.getNext();
						}

					} else { // Top and bottom bars have been removed on touchable devices
						// tap
						if ( ! bars.hasClass( 'visible-bars' ) ) {
							$this.showBars();
							$this.setTimeout();
						} else {
							$this.clearTimeout();
							$this.hideBars();
						}
					}

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX + '%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
					$( '.touching' ).off( 'touchmove' ).removeClass( 'touching' );

				} );
			},

			/**
			 * Set timer to hide the action bars
			 */
			setTimeout: function () {
				if ( plugin.settings.hideBarsDelay > 0 ) {
					var $this = this;
					$this.clearTimeout();
					$this.timeout = window.setTimeout( function() {
							$this.hideBars();
						},

						plugin.settings.hideBarsDelay
					);
				}
			},

			/**
			 * Clear timer
			 */
			clearTimeout: function () {
				window.clearTimeout( this.timeout );
				this.timeout = null;
			},

			/**
			 * Show navigation and title bars
			 */
			showBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				if ( this.doCssTrans() ) {
					bars.addClass( 'visible-bars' );
				} else {
					$( '#swipebox-top-bar' ).animate( { top : 0 }, 500 );
					$( '#swipebox-bottom-bar' ).animate( { bottom : 0 }, 500 );
					setTimeout( function() {
						bars.addClass( 'visible-bars' );
					}, 1000 );
				}
			},

			/**
			 * Hide navigation and title bars
			 */
			hideBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				if ( this.doCssTrans() ) {
					bars.removeClass( 'visible-bars' );
				} else {
					$( '#swipebox-top-bar' ).animate( { top : '-50px' }, 500 );
					$( '#swipebox-bottom-bar' ).animate( { bottom : '-50px' }, 500 );
					setTimeout( function() {
						bars.removeClass( 'visible-bars' );
					}, 1000 );
				}
			},

			/**
			 * Animate navigation and top bars
			 */
			animBars : function () {
				var $this = this,
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( '#swipebox-slider' ).click( function() {
					if ( ! bars.hasClass( 'visible-bars' ) ) {
						$this.showBars();
						$this.setTimeout();
					}
				} );

				$( '#swipebox-bottom-bar' ).hover( function() {
					$this.showBars();
					bars.addClass( 'visible-bars' );
					$this.clearTimeout();

				}, function() {
					if ( plugin.settings.hideBarsDelay > 0 ) {
						bars.removeClass( 'visible-bars' );
						$this.setTimeout();
					}

				} );
			},

			/**
			 * Keyboard navigation
			 */
			keyboard : function () {
				var $this = this;
				$( window ).bind( 'keyup', function( event ) {
					event.preventDefault();
					event.stopPropagation();

					if ( event.keyCode === 37 ) {

						$this.getPrev();

					} else if ( event.keyCode === 39 ) {

						$this.getNext();

					} else if ( event.keyCode === 27 ) {

						$this.closeSlide();
					}
				} );
			},

			/**
			 * Navigation events : go to next slide, go to prevous slide and close
			 */
			actions : function () {
				var $this = this,
					action = 'touchend click'; // Just detect for both event types to allow for multi-input

				if ( elements.length < 2 ) {

					$( '#swipebox-bottom-bar' ).hide();

					if ( undefined === elements[ 1 ] ) {
						$( '#swipebox-top-bar' ).hide();
					}

				} else {
					$( '#swipebox-prev' ).bind( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getPrev();
						$this.setTimeout();
					} );

					$( '#swipebox-next' ).bind( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getNext();
						$this.setTimeout();
					} );
				}

				$( '#swipebox-close' ).bind( action, function() {
					$this.closeSlide();
				} );
			},

			/**
			 * Set current slide
			 */
			setSlide : function ( index, isFirst ) {

				isFirst = isFirst || false;

				var slider = $( '#swipebox-slider' );

				currentX = -index*100;

				if ( this.doCssTrans() ) {
					slider.css( {
						'-webkit-transform' : 'translate3d(' + (-index*100)+'%, 0, 0)',
						'transform' : 'translate3d(' + (-index*100)+'%, 0, 0)'
					} );
				} else {
					slider.animate( { left : ( -index*100 )+'%' } );
				}

				$( '#swipebox-slider .slide' ).removeClass( 'current' );
				$( '#swipebox-slider .slide' ).eq( index ).addClass( 'current' );
				this.setTitle( index );

				if ( isFirst ) {
					slider.fadeIn();
				}

				$( '#swipebox-prev, #swipebox-next' ).removeClass( 'disabled' );

				if ( index === 0 ) {
					$( '#swipebox-prev' ).addClass( 'disabled' );
				} else if ( index === elements.length - 1 && plugin.settings.loopAtEnd !== true ) {
					$( '#swipebox-next' ).addClass( 'disabled' );
				}
			},

			/**
			 * Open slide
			 */
			openSlide : function ( index ) {
				$( 'html' ).addClass( 'swipebox-html' );
				if ( isTouch ) {
					$( 'html' ).addClass( 'swipebox-touch' );

					if ( plugin.settings.hideCloseButtonOnMobile ) {
						$( 'html' ).addClass( 'swipebox-no-close-button' );
					}
				} else {
					$( 'html' ).addClass( 'swipebox-no-touch' );
				}
				$( window ).trigger( 'resize' ); // fix scroll bar visibility on desktop
				this.setSlide( index, true );
			},

			/**
			 * Set a time out if the media is a video
			 */
			preloadMedia : function ( index ) {
				var $this = this,
					src = null;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( ! $this.isVideo( src ) ) {
					setTimeout( function() {
						$this.openMedia( index );
					}, 1000);
				} else {
					$this.openMedia( index );
				}
			},

			/**
			 * Open
			 */
			openMedia : function ( index ) {
				var $this = this,
					src,
					slide;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( index < 0 || index >= elements.length ) {
					return false;
				}

				slide = $( '#swipebox-slider .slide' ).eq( index );

				if ( ! $this.isVideo( src ) ) {
					slide.addClass( 'slide-loading' );
					$this.loadMedia( src, function() {
						slide.removeClass( 'slide-loading' );
						slide.html( this );
					} );
				} else {
					slide.html( $this.getVideo( src ) );
				}

			},

			/**
			 * Set link title attribute as caption
			 */
			setTitle : function ( index ) {
				var title = null;

				$( '#swipebox-title' ).empty();

				if ( elements[ index ] !== undefined ) {
					title = elements[ index ].title;
				}

				if ( title ) {
					$( '#swipebox-top-bar' ).show();
					$( '#swipebox-title' ).append( title );
				} else {
					$( '#swipebox-top-bar' ).hide();
				}
			},

			/**
			 * Check if the URL is a video
			 */
			isVideo : function ( src ) {

				if ( src ) {
					if ( src.match( /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || src.match( /vimeo\.com\/([0-9]*)/ ) || src.match( /youtu\.be\/([a-zA-Z0-9\-_]+)/ ) ) {
						return true;
					}

					if ( src.toLowerCase().indexOf( 'swipeboxvideo=1' ) >= 0 ) {

						return true;
					}
				}

			},

			/**
			 * Parse URI querystring and:
			 * - overrides value provided via dictionary
			 * - rebuild it again returning a string
			 */
			parseUri : function (uri, customData) {
				var a = document.createElement('a'),
					qs = {};

				// Decode the URI
				a.href = decodeURIComponent( uri );

				// QueryString to Object
				if ( a.search ) {
					qs = JSON.parse( '{"' + a.search.toLowerCase().replace('?','').replace(/&/g,'","').replace(/=/g,'":"') + '"}' );
				}
				
				// Extend with custom data
				if ( $.isPlainObject( customData ) ) {
					qs = $.extend( qs, customData, plugin.settings.queryStringData ); // The dev has always the final word
				}

				// Return querystring as a string
				return $
					.map( qs, function (val, key) {
						if ( val && val > '' ) {
							return encodeURIComponent( key ) + '=' + encodeURIComponent( val );
						}
					})
					.join('&');
			},

			/**
			 * Get video iframe code from URL
			 */
			getVideo : function( url ) {
				var iframe = '',
					youtubeUrl = url.match( /((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/ ),
					youtubeShortUrl = url.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
					vimeoUrl = url.match( /(?:www\.)?vimeo\.com\/([0-9]*)/ ),
					qs = '';
				if ( youtubeUrl || youtubeShortUrl) {
					if ( youtubeShortUrl ) {
						youtubeUrl = youtubeShortUrl;
					}
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'v' : ''
					});
					iframe = '<iframe width="560" height="315" src="//' + youtubeUrl[1] + '/embed/' + youtubeUrl[2] + '?' + qs + '" frameborder="0" allowfullscreen></iframe>';

				} else if ( vimeoUrl ) {
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'byline' : '0',
						'portrait' : '0',
						'color': plugin.settings.vimeoColor
					});
					iframe = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + vimeoUrl[1] + '?' + qs + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

				} else {
					iframe = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
				}

				return '<div class="swipebox-video-container" style="max-width:' + plugin.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + iframe + '</div></div>';
			},

			/**
			 * Load image
			 */
			loadMedia : function ( src, callback ) {
                // Inline content
                if ( src.trim().indexOf('#') === 0 ) {
                    callback.call(
                    	$('<div>', {
                    		'class' : 'swipebox-inline-container'
                    	})
                    	.append(
                    		$(src)
	                    	.clone()
	                    	.toggleClass( plugin.settings.toggleClassOnLoad )
	                    )
                    );
                }
                // Everything else
                else {
    				if ( ! this.isVideo( src ) ) {
    					var img = $( '<img>' ).on( 'load', function() {
    						callback.call( img );
    					} );

    					img.attr( 'src', src );
    				}
                }
			},

			/**
			 * Get next slide
			 */
			getNext : function () {
				var $this = this,
					src,
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
				if ( index + 1 < elements.length ) {

					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index++;
					$this.setSlide( index );
					$this.preloadMedia( index+1 );
					if ( plugin.settings.nextSlide ) {
						plugin.settings.nextSlide();
					}
				} else {

					if ( plugin.settings.loopAtEnd === true ) {
						src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
						$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
						index = 0;
						$this.preloadMedia( index );
						$this.setSlide( index );
						$this.preloadMedia( index + 1 );
						if ( plugin.settings.nextSlide ) {
							plugin.settings.nextSlide();
						}
					} else {
						$( '#swipebox-overlay' ).addClass( 'rightSpring' );
						setTimeout( function() {
							$( '#swipebox-overlay' ).removeClass( 'rightSpring' );
						}, 500 );
					}
				}
			},

			/**
			 * Get previous slide
			 */
			getPrev : function () {
				var index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) ),
					src;
				if ( index > 0 ) {
					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe').attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index--;
					this.setSlide( index );
					this.preloadMedia( index-1 );
					if ( plugin.settings.prevSlide ) {
						plugin.settings.prevSlide();
					}
				} else {
					$( '#swipebox-overlay' ).addClass( 'leftSpring' );
					setTimeout( function() {
						$( '#swipebox-overlay' ).removeClass( 'leftSpring' );
					}, 500 );
				}
			},

			nextSlide : function () {
				// Callback for next slide
			},

			prevSlide : function () {
				// Callback for prev slide
			},

			/**
			 * Close
			 */
			closeSlide : function () {
				$( 'html' ).removeClass( 'swipebox-html' );
				$( 'html' ).removeClass( 'swipebox-touch' );
				$( window ).trigger( 'resize' );
				this.destroy();
			},

			/**
			 * Destroy the whole thing
			 */
			destroy : function () {
				$( window ).unbind( 'keyup' );
				$( 'body' ).unbind( 'touchstart' );
				$( 'body' ).unbind( 'touchmove' );
				$( 'body' ).unbind( 'touchend' );
				$( '#swipebox-slider' ).unbind();
				$( '#swipebox-overlay' ).remove();

				if ( ! $.isArray( elem ) ) {
					elem.removeData( '_swipebox' );
				}

				if ( this.target ) {
					this.target.trigger( 'swipebox-destroy' );
				}

				$.swipebox.isOpen = false;

				if ( plugin.settings.afterClose ) {
					plugin.settings.afterClose();
				}
			}
		};

		plugin.init();
	};

	$.fn.swipebox = function( options ) {

		if ( ! $.data( this, '_swipebox' ) ) {
			var swipebox = new $.swipebox( this, options );
			this.data( '_swipebox', swipebox );
		}
		return this.data( '_swipebox' );

	};

}( window, document, jQuery ) );


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 17.11.2014
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.6
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));



if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
};

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},p=function(s,r,n,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,m,f,d=r.length,v=d;--d>-1;)(_=c[r[d]]||new p(r[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),m=u.pop(),f=l(u.join("."))[m]=this.gsClass=n.apply(n,o),a&&(i[m]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],A=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&k,c=500,p=33,d=function(t){var e,a,o=S()-x;o>c&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){c=t||1/_,p=Math.min(e,c,0)},h.sleep=function(){null!=r&&(f&&A?A(r):clearTimeout(r),s=m,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=S()-c+5),s=0===i?m:f&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&M())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&H(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&H(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.14.2",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=!0,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],L={},N=I._internals={isArray:f,isSelector:E,lazyTweens:z},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=R._rootFramesTimeline=new D,B=R._rootTimeline=new D,M=N.lazyRender=function(){var t,e=z.length;for(L={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout(M,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&M(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),z.length&&M(),!(a.frame%120)){for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(F[n||(t._gsTweenID=n="t"+j++)]||(F[n]={target:t,tweens:[]}),e&&(s=F[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return F[n].tweens},K=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},H=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||K(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,m=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,c),0===J(o,h,c)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)if(o=m[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!K(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)G[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&M(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],G[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(U[n]&&(l=new U[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&H(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,m=this._easeType,f=this._easePower;(1===m||3===m&&u>=.5)&&(u=1-u),3===m&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===m?1-u:2===m?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u;if((f(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if(!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var V=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=V.prototype},!0);if(n=V.prototype,V.version="1.10.1",V.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},V.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===V.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){V.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new V(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,V.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in c)c[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=function(t,e,i,s){var r=t._timeline._totalTime;(e||!this._forcingPlayhead)&&(t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_),this._forcingPlayhead&&t._timeline.seek(r))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.14.2",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,p=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=f(t)),n=n||0,0>n&&(t=f(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),p.to(t[u],e,c(r),u*n);return this.add(p,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,c,p,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(p=this,f=p.rawTime()>r._startTime;p._timeline;)f&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(p,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,c=this._dirty?this.totalDuration():this._totalDuration,p=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=c?(this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==p||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==p&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==p&&t>0&&(this._active=!0),0===p&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=p)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m.recent=function(){return this._recent},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");

/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.14.2",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var h,u,f,p,_,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,T=/opacity:([^;]*)/i,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(t,e){return e.toUpperCase()},k=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},z=document,X=z.createElement("div"),I=z.createElement("img"),E=a._internals={_specialProps:o},F=navigator.userAgent,Y=function(){var t,e=F.indexOf("Android"),i=z.createElement("div");return f=-1!==F.indexOf("Safari")&&-1===F.indexOf("Chrome")&&(-1===e||Number(F.substr(e+8,1))>3),_=f&&6>Number(F.substr(F.indexOf("Version/")+8,1)),p=-1!==F.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F))&&(c=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),B=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},U=function(t){window.console&&console.log(t)},j="",W="",V=function(t,e){e=e||X;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(W=3===r?"ms":i[r],j="-"+W.toLowerCase()+"-",W+t):null},q=z.defaultView?z.defaultView.getComputedStyle:function(){},H=a.getStyle=function(t,e,i,r,s){var n;return Y||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||q(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):B(t)},G=E.convertToPixels=function(t,i,r,s,n){if("px"===s||!s)return r;if("auto"===s||!r)return 0;var o,l,h,u=k.test(i),f=t,p=X.style,_=0>r;if(_&&(r=-r),"%"===s&&-1!==i.indexOf("border"))o=r/100*(u?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+H(t,"position")+";line-height:0;","%"!==s&&f.appendChild)p[u?"borderLeftWidth":"borderTopWidth"]=r+s;else{if(f=t.parentNode||z.body,l=f._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;p[u?"width":"height"]=r+s}f.appendChild(X),o=parseFloat(X[u?"offsetWidth":"offsetHeight"]),f.removeChild(X),u&&"%"===s&&a.cacheWidths!==!1&&(l=f._gsCache=f._gsCache||{},l.time=h,l.width=100*(o/r)),0!==o||n||(o=G(t,i,r,s,!0))}return _?-o:o},Q=E.calculateOffset=function(t,e,i){if("absolute"!==H(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=H(t,"margin"+r,i);return t["offset"+r]-(G(t,e,parseFloat(s),s.replace(y,""))||0)},Z=function(t,e){var i,r,s={};if(e=e||q(t,null))if(i=e.length)for(;--i>-1;)s[e[i].replace(S,C)]=e.getPropertyValue(e[i]);else for(i in e)s[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===s[i]&&(s[i.replace(S,C)]=e[i]);return Y||(s.opacity=B(t)),r=Ae(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,be&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},$=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==h[a]&&(o=new fe(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=K[e],n=s.length;for(i=i||q(t,null);--n>-1;)r-=parseFloat(H(t,"padding"+s[n],i,!0))||0,r-=parseFloat(H(t,"border"+s[n]+"Width",i,!0))||0;return r},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(v,"")),e.oy=parseFloat(s.replace(v,""))),r+" "+s+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},re=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},se=function(t,e,i,r){var s,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=a.parseColor=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(s+1/3,e,i),t[1]=ae(s,e,i),t[2]=ae(s-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,f=u>0?a[0].replace(d,""):"";return u?s=e?function(t){var e,p,_,c;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(c=t.replace(D,"|").split("|"),_=0;c.length>_;_++)c[_]=s(c[_]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],_=p.length,u>_--)for(;u>++_;)p[_]=i?p[0|(_-1)/2]:a[_];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=s(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},fe=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),pe=(E._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,f=r,p={},_={},c=i._transform,d=N;for(i._transform=null,N=e,r=u=i.parse(t,e,r,s),N=d,n&&(i._transform=c,f&&(f._prev=null,f._prev&&(f._prev._next=null)));r&&r!==f;){if(1>=r.type&&(o=r.p,_[o]=r.s+r.c,p[o]=r.s,n||(h=new fe(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,_[o]=r.data[l],p[o]=r[l],n||(h=new fe(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,r,s,a,o,l,h,u,f,p){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===f?r:f,this.e=void 0===p?r+s:p,a&&(this._next=a,a._prev=this)}),_e=a.parseComplex=function(t,e,i,r,s,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,r),r+="";var f,p,_,c,g,v,y,x,T,w,P,S,R=i.split(", ").join(",").split(" "),C=r.split(", ").join(",").split(" "),k=R.length,O=h!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),C=C.join(" ").replace(D,", ").split(" "),k=R.length),k!==C.length&&(R=(n||"").split(" "),k=R.length),a.plugin=l,a.setRatio=u,f=0;k>f;f++)if(c=R[f],g=C[f],x=parseFloat(c),x||0===x)a.appendXtra("",x,ie(g,x),g.replace(m,""),O&&-1!==g.indexOf("px"),!0);else if(s&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),T=c.length+g.length>6,T&&!Y&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(C[f]).join("transparent")):(Y||(T=!1),a.appendXtra(T?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],T?",":S,!0),T&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(_=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,_),a.appendXtra(c.substr(_,w-_),Number(P),ie(y[p],P),"",O&&"px"===c.substr(w+P.length,2),0===p),_=w+P.length;a["xs"+a.l]+=c.substr(_)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,f=1;a.l>f;f++)S+=a["xs"+f]+a.data["xn"+f];a.e=S+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new de(n[r],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,r,s,n,a,l){var h=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return h?(h._cssRegister(),o[r].parse(t,i,r,s,n,a,l)):(U("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,f,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),f=i.indexOf(p),u!==f&&(i=-1===f?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return _e(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},l.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,r,s,n,a,o){var l=new pe(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})};var ve,ye="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=V("transform"),Te=j+"transform",we=V("transformOrigin"),be=null!==V("perspective"),Pe=E.Transform=function(){this.skewY=0},Se=window.SVGElement,Re=function(t,e,i){var r,s=z.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s},Ce=document.documentElement,ke=function(){var t,e,i,r=c||/Android/i.test(F)&&!window.chrome;return z.createElementNS&&!r&&(t=Re("svg",Ce),e=Re("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().left,e.style[we]="50% 50%",e.style[xe]="scale(0.5,0.5)",r=i===e.getBoundingClientRect().left,Ce.removeChild(t)),r}(),Oe=function(t,e,i){var r=t.getBBox();e=ee(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*r.width:parseFloat(e[0]))+r.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*r.height:parseFloat(e[1]))+r.y},Ae=E.getTransform=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var n,o,l,h,u,f,p,_,c,d,m,g,v,y=i?t._gsTransform||new Pe:new Pe,x=0>y.scaleX,T=2e-5,w=1e5,b=179.99,P=b*M,S=be?parseFloat(H(t,we,e,!1,"0 0 0").split(" ")[2])||y.zOrigin||0:0,R=parseFloat(a.defaultTransformPerspective)||0;if(xe?n=H(t,Te,e,!0):t.currentStyle&&(n=t.currentStyle.filter.match(O),n=n&&4===n.length?[n[0].substr(4),Number(n[2].substr(4)),Number(n[1].substr(4)),n[3].substr(4),y.x||0,y.y||0].join(","):""),n&&"none"!==n&&"matrix(1, 0, 0, 1, 0, 0)"!==n){for(o=(n||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=o.length;--l>-1;)h=Number(o[l]),o[l]=(u=h-(h|=0))?(0|u*w+(0>u?-.5:.5))/w+h:h;if(16===o.length){var C=o[8],k=o[9],A=o[10],D=o[12],N=o[13],z=o[14];if(y.zOrigin&&(z=-y.zOrigin,D=C*z-o[12],N=k*z-o[13],z=A*z+y.zOrigin-o[14]),!i||r||null==y.rotationX){var X,I,E,F,Y,B,U,j=o[0],W=o[1],V=o[2],q=o[3],G=o[4],Q=o[5],Z=o[6],$=o[7],K=o[11],J=Math.atan2(Z,A),te=-P>J||J>P;y.rotationX=J*L,J&&(F=Math.cos(-J),Y=Math.sin(-J),X=G*F+C*Y,I=Q*F+k*Y,E=Z*F+A*Y,C=G*-Y+C*F,k=Q*-Y+k*F,A=Z*-Y+A*F,K=$*-Y+K*F,G=X,Q=I,Z=E),J=Math.atan2(C,j),y.rotationY=J*L,J&&(B=-P>J||J>P,F=Math.cos(-J),Y=Math.sin(-J),X=j*F-C*Y,I=W*F-k*Y,E=V*F-A*Y,k=W*Y+k*F,A=V*Y+A*F,K=q*Y+K*F,j=X,W=I,V=E),J=Math.atan2(W,Q),y.rotation=J*L,J&&(U=-P>J||J>P,F=Math.cos(-J),Y=Math.sin(-J),j=j*F+G*Y,I=W*F+Q*Y,Q=W*-Y+Q*F,Z=V*-Y+Z*F,W=I),U&&te?y.rotation=y.rotationX=0:U&&B?y.rotation=y.rotationY=0:B&&te&&(y.rotationY=y.rotationX=0),y.scaleX=(0|Math.sqrt(j*j+W*W)*w+.5)/w,y.scaleY=(0|Math.sqrt(Q*Q+k*k)*w+.5)/w,y.scaleZ=(0|Math.sqrt(Z*Z+A*A)*w+.5)/w,y.skewX=0,y.perspective=K?1/(0>K?-K:K):0,y.x=D,y.y=N,y.z=z}}else if(!(be&&!r&&o.length&&y.x===o[4]&&y.y===o[5]&&(y.rotationX||y.rotationY)||void 0!==y.x&&"none"===H(t,"display",e))){var ee=o.length>=6,ie=ee?o[0]:1,re=o[1]||0,se=o[2]||0,ne=ee?o[3]:1;y.x=o[4]||0,y.y=o[5]||0,f=Math.sqrt(ie*ie+re*re),p=Math.sqrt(ne*ne+se*se),_=ie||re?Math.atan2(re,ie)*L:y.rotation||0,c=se||ne?Math.atan2(se,ne)*L+_:y.skewX||0,d=f-Math.abs(y.scaleX||0),m=p-Math.abs(y.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(x?(f*=-1,c+=0>=_?180:-180,_+=0>=_?180:-180):(p*=-1,c+=0>=c?180:-180)),g=(_-y.rotation)%180,v=(c-y.skewX)%180,(void 0===y.skewX||d>T||-T>d||m>T||-T>m||g>-b&&b>g&&false|g*w||v>-b&&b>v&&false|v*w)&&(y.scaleX=f,y.scaleY=p,y.rotation=_,y.skewX=c),be&&(y.rotationX=y.rotationY=y.z=0,y.perspective=R,y.scaleZ=1)}y.zOrigin=S;for(l in y)T>y[l]&&y[l]>-T&&(y[l]=0)}else y={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,perspective:R,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=y),y.svg=Se&&t instanceof Se&&t.parentNode instanceof Se,y.svg&&(Oe(t,H(t,we,s,!1,"50% 50%")+"",y),ve=a.useSVGTransformAttr||ke),y.xPercent=y.yPercent=0,y},De=function(t){var e,i,r=this.data,s=-r.rotation*M,n=s+r.skewX*M,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,f=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,f.filter="";var _,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,T="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x+m*r.xPercent/100,b=r.y+g*r.yPercent/100;if(null!=r.ox&&(_=(r.oxp?.01*m*r.ox:r.ox)-m/2,d=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=_-(_*o+d*l),b+=d-(_*h+d*u)),v?(_=m/2,d=g/2,T+=", Dx="+(_-(_*o+d*l)+w)+", Dy="+(d-(_*h+d*u)+b)+")"):T+=", sizingMethod='auto expand')",f.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,T):T+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===T.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&f.removeAttribute("filter")),!v){var P,S,R,C=8>c?1:-1;for(_=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):G(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==r[S]?2>ce?-r.ieOffsetX:-r.ieOffsetY:2>ce?_-r.ieOffsetX:d-r.ieOffsetY,f[S]=(r[S]=Math.round(i-R*(0===ce||2===ce?1:C)))+"px"}}},Me=E.set3DTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,_,c,d,m,g,v,y,x,T,w,b,P,S=this.data,R=this.t.style,C=S.rotation*M,k=S.scaleX,O=S.scaleY,A=S.scaleZ,D=S.x,L=S.y,N=S.z,z=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==A||z||N))return Le.call(this,t),void 0;if(p){var X=1e-4;X>k&&k>-X&&(k=A=2e-5),X>O&&O>-X&&(O=A=2e-5),!z||S.z||S.rotationX||S.rotationY||(z=0)}if(C||S.skewX)y=Math.cos(C),x=Math.sin(C),e=y,n=x,S.skewX&&(C-=S.skewX*M,y=Math.cos(C),x=Math.sin(C),"simple"===S.skewType&&(T=Math.tan(S.skewX*M),T=Math.sqrt(1+T*T),y*=T,x*=T)),i=-x,a=y;else{if(!(S.rotationY||S.rotationX||1!==A||z||S.svg))return R[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+L+"px,"+N+"px)"+(1!==k||1!==O?" scale("+k+","+O+")":""),void 0;e=a=1,i=n=0}f=1,r=s=o=l=h=u=_=c=d=0,m=z?-1/z:0,g=S.zOrigin,v=1e5,C=S.rotationY*M,C&&(y=Math.cos(C),x=Math.sin(C),h=f*-x,c=m*-x,r=e*x,o=n*x,f*=y,m*=y,e*=y,n*=y),C=S.rotationX*M,C&&(y=Math.cos(C),x=Math.sin(C),T=i*y+r*x,w=a*y+o*x,b=u*y+f*x,P=d*y+m*x,r=i*-x+r*y,o=a*-x+o*y,f=u*-x+f*y,m=d*-x+m*y,i=T,a=w,u=b,d=P),1!==A&&(r*=A,o*=A,f*=A,m*=A),1!==O&&(i*=O,a*=O,u*=O,d*=O),1!==k&&(e*=k,n*=k,h*=k,c*=k),g&&(_-=g,s=r*_,l=o*_,_=f*_+g),S.svg&&(s+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),l+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)),s=(T=(s+=D)-(s|=0))?(0|T*v+(0>T?-.5:.5))/v+s:s,l=(T=(l+=L)-(l|=0))?(0|T*v+(0>T?-.5:.5))/v+l:l,_=(T=(_+=N)-(_|=0))?(0|T*v+(0>T?-.5:.5))/v+_:_,R[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|h*v)/v,(0|c*v)/v,(0|i*v)/v,(0|a*v)/v,(0|u*v)/v,(0|d*v)/v,(0|r*v)/v,(0|o*v)/v,(0|f*v)/v,(0|m*v)/v,s,l,_,z?1+-_/z:1].join(",")+")"},Le=E.set2DTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,p=this.data,_=this.t,c=_.style,d=p.x,m=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&ve||!be?(s=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*M,i=e-p.skewX*M,r=1e5,a=Math.cos(e)*s,o=Math.sin(e)*s,l=Math.sin(i)*-n,h=Math.cos(i)*n,p.svg&&(d+=p.xOrigin-(p.xOrigin*a+p.yOrigin*l),m+=p.yOrigin-(p.xOrigin*o+p.yOrigin*h),f=1e-6,f>d&&d>-f&&(d=0),f>m&&m>-f&&(m=0)),u=(0|a*r)/r+","+(0|o*r)/r+","+(0|l*r)/r+","+(0|h*r)/r+","+d+","+m+")",p.svg&&ve?_.setAttribute("transform","matrix("+u):c[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+u):c[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+s+",0,0,"+n+","+d+","+m+")",void 0):(this.setRatio=Me,Me.call(this,t),void 0)};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,r,n,o,l){if(r._transform)return n;var h,u,f,p,_,c,d,m=r._transform=Ae(t,s,!0,l.parseTransform),g=t.style,v=1e-6,y=ye.length,x=l,T={};if("string"==typeof x.transform&&xe)f=X.style,f[xe]=x.transform,f.display="block",f.position="absolute",z.body.appendChild(X),h=Ae(X,null,!1),z.body.removeChild(X);else if("object"==typeof x){if(h={scaleX:re(null!=x.scaleX?x.scaleX:x.scale,m.scaleX),scaleY:re(null!=x.scaleY?x.scaleY:x.scale,m.scaleY),scaleZ:re(x.scaleZ,m.scaleZ),x:re(x.x,m.x),y:re(x.y,m.y),z:re(x.z,m.z),xPercent:re(x.xPercent,m.xPercent),yPercent:re(x.yPercent,m.yPercent),perspective:re(x.transformPerspective,m.perspective)},d=x.directionalRotation,null!=d)if("object"==typeof d)for(f in d)x[f]=d[f];else x.rotation=d;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(h.x=0,h.xPercent=re(x.x,m.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(h.y=0,h.yPercent=re(x.y,m.yPercent)),h.rotation=se("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:m.rotation,m.rotation,"rotation",T),be&&(h.rotationX=se("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",T),h.rotationY=se("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",T)),h.skewX=null==x.skewX?m.skewX:se(x.skewX,m.skewX),h.skewY=null==x.skewY?m.skewY:se(x.skewY,m.skewY),(u=h.skewY-m.skewY)&&(h.skewX+=u,h.rotation+=u)}for(be&&null!=x.force3D&&(m.force3D=x.force3D,c=!0),m.skewType=x.skewType||m.skewType||a.defaultSkewType,_=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,_||null==x.scale||(h.scaleZ=1);--y>-1;)i=ye[y],p=h[i]-m[i],(p>v||-v>p||null!=x[i]||null!=N[i])&&(c=!0,n=new pe(m,i,m[i],p,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return p=x.transformOrigin,p&&m.svg&&(Oe(t,p,h),n=new pe(m,"xOrigin",m.xOrigin,h.xOrigin-m.xOrigin,n,-1,"transformOrigin"),n.b=m.xOrigin,n.e=n.xs0=h.xOrigin,n=new pe(m,"yOrigin",m.yOrigin,h.yOrigin-m.yOrigin,n,-1,"transformOrigin"),n.b=m.yOrigin,n.e=n.xs0=h.yOrigin,p="0px 0px"),(p||be&&_&&m.zOrigin)&&(xe?(c=!0,i=we,p=(p||H(t,i,s,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,be?(f=m.zOrigin,p=p.split(" "),m.zOrigin=(p.length>2&&(0===f||"0px"!==p[2])?parseFloat(p[2]):f)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=f,n.xs0=n.e=m.zOrigin):n.xs0=n.e=p):ee(p+"",m)),c&&(r._transformType=m.svg&&ve||!_&&3!==this._transformType?2:3),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,f,p,_,c,d,m,g,v,y,x,T,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),f=u=H(t,b[l],s,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),p=h=o[l],_=parseFloat(f),v=f.substr((_+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=r[i]||v),g!==v&&(x=G(t,"borderLeft",_,v),T=G(t,"borderTop",_,v),"%"===g?(f=100*(x/d)+"%",u=100*(T/m)+"%"):"em"===g?(w=G(t,"borderLeft",1,"em"),f=x/w+"em",u=T/w+"em"):(f=x+"px",u=T+"px"),y&&(p=parseFloat(f)+c+g,h=parseFloat(u)+c+g)),a=_e(P,b[l],f+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,f,p,_="background-position",d=s||q(t,null),m=this.format((d?c?d.getPropertyValue(_+"-x")+" "+d.getPropertyValue(_+"-y"):d.getPropertyValue(_):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=H(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(f=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*f+"px":100*(parseFloat(m)/f)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(H(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,"borderTopWidth",s,!1,"0px")+" "+H(t,"borderTopStyle",s,!1,"solid")+" "+H(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("borderWidth",{parser:ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ne=function(t){var e,i=this.t,r=i.filter||H(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!H(this.data,"filter")):(i.filter=r.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(x,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(H(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===H(t,"visibility",s)&&0!==e&&(o=0),Y?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ne),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var ze=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Xe=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:ze(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};me("className",{parser:function(t,e,r,n,a,o,l){var h,u,f,p,_,c=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new pe(t,r,0,0,a,2),a.setRatio=Xe,a.pr=-11,i=!0,a.b=c,u=Z(t,s),f=t._gsClassPT){for(p={},_=f.data;_;)p[_.p]=1,_=_._next;f.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),h=$(t,u,Z(t),l,p),t.setAttribute("class",c),a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Ie=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],o[i]&&(o[i].parse===a?s=!0:i="transformOrigin"===i?we:o[i].p),ze(n,i);s&&(ze(n,xe),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,r,s,n){return n=new pe(t,r,0,0,n,2),n.setRatio=Ie,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=q(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,x,w=t.style;if(u&&""===w.zIndex&&(l=H(t,"zIndex",s),("auto"===l||""===l)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(d=w.cssText,l=Z(t,s),w.cssText=d+";"+e,l=$(t,l,Z(t)).difs,!Y&&T.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(x=3===this._transformType,xe?f&&(u=!0,""===w.zIndex&&(v=H(t,"zIndex",s),("auto"===v||""===v)&&this._addLazySet(w,"zIndex",0)),_&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=x&&be?Me:xe?Le:De,y.data=this._transform||Ae(t,s,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,f,p,_,c,d,m,g,v=t.style;for(a in e)_=e[a],l=o[a],l?i=l.parse(t,_,a,this,i,n,e):(p=H(t,a,s)+"",m="string"==typeof _,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(_)?(m||(_=oe(_),_=(_.length>3?"rgba(":"rgb(")+_.join(",")+")"),i=_e(v,a,p,_,!0,"transparent",i,0,n)):!m||-1===_.indexOf(" ")&&-1===_.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,s),c="px"):"left"===a||"top"===a?(u=Q(t,a,s),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===_.charAt(1),g?(f=parseInt(_.charAt(0)+"1",10),_=_.substr(2),f*=parseFloat(_),d=_.replace(y,"")):(f=parseFloat(_),d=m?_.substr((f+"").length)||"":""),""===d&&(d=a in r?r[a]:c),_=f||0===f?(g?f+u:f)+d:e[a],c!==d&&""!==d&&(f||0===f)&&u&&(u=G(t,a,u,c),"%"===d?(u/=G(t,a,100,"%")/100,e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=G(t,a,1,"em"):"px"!==d&&(f=G(t,a,f,d),d="px"),g&&(f||0===f)&&(_=f+u+d)),g&&(f+=u),!u&&0!==u||!f&&0!==f?void 0!==v[a]&&(_||"NaN"!=_+""&&null!=_)?(i=new pe(v,a,f||u||0,0,i,-1,a,!1,0,p,_),i.xs0="none"!==_||"display"!==a&&-1===a.indexOf("Style")?_:p):U("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,f-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,_),i.xs0=d)):i=_e(v,a,p,_,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);
return i},l.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},l._enableTransforms=function(t){this._transform=this._transform||Ae(this._target,s,!0),this._transformType=this._transform.svg&&ve||!t&&3!==this._transformType?2:3};var Ee=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var r=this._firstPT=new pe(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Ee,r.data=this},l._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Fe=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Fe(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push(Z(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Fe(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o=e.to(t,i,r),l=[o],h=[],u=[],f=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Fe(t,h,f),o.render(i,!0),Fe(t,u),o.render(0,!0),o._enabled(!0),s=f.length;--s>-1;)if(n=$(f[s],h[s],u[s]),n.firstMPT){n=n.difs;for(a in r)p[a]&&(n[a]=r[a]);l.push(e.to(f[s],i,n))}return l},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");

/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(t){"use strict";var e=t.GreenSockGlobals||t,i=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},s=i("com.greensock.utils"),r=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=r(t)}else if(3===e||4===e)return t.nodeValue;return i},n=document,a=n.defaultView?n.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,h=function(t,e,i,s){var r;return(i=i||a(t,null))?(t=i.getPropertyValue(e.replace(o,"-$1").toLowerCase()),r=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,r=i[e]),s?r:parseInt(r,10)||0},l=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},_=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],l(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},u=")eefec303079ad17405c",c=/(?:<br>|<br\/>|<br \/>)/gi,p=n.all&&!n.addEventListener,f="<div style='position:relative;display:inline-block;"+(p?"*display:inline;*zoom:1;'":"'"),m=function(t){t=t||"";var e=-1!==t.indexOf("++"),i=1;return e&&(t=t.split("++").join("")),function(){return f+(t?" class='"+t+(e?i++:"")+"'>":">")}},d=s.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=d.selector(t)),!t)throw"cannot split a null element.";this.elements=l(t)?_(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},g=function(t,e,i){var s=t.nodeType;if(1===s||9===s||11===s)for(t=t.firstChild;t;t=t.nextSibling)g(t,e,i);else(3===s||4===s)&&(t.nodeValue=t.nodeValue.split(e).join(i))},v=function(t,e){for(var i=e.length;--i>-1;)t.push(e[i])},y=function(t,e,i,s,o){c.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(c,u));var l,_,p,f,d,y,T,w,b,x,P,S,C,k,R=r(t),A=e.type||e.split||"chars,words,lines",O=-1!==A.indexOf("lines")?[]:null,D=-1!==A.indexOf("words"),M=-1!==A.indexOf("chars"),L="absolute"===e.position||e.absolute===!0,z=L?"&#173; ":" ",I=-999,E=a(t),N=h(t,"paddingLeft",E),F=h(t,"borderBottomWidth",E)+h(t,"borderTopWidth",E),X=h(t,"borderLeftWidth",E)+h(t,"borderRightWidth",E),U=h(t,"paddingTop",E)+h(t,"paddingBottom",E),B=h(t,"paddingLeft",E)+h(t,"paddingRight",E),j=h(t,"textAlign",E,!0),Y=t.clientHeight,q=t.clientWidth,G="</div>",V=m(e.wordsClass),Q=m(e.charsClass),W=-1!==(e.linesClass||"").indexOf("++"),H=e.linesClass,Z=-1!==R.indexOf("<"),$=!0,K=[],J=[],te=[];for(W&&(H=H.split("++").join("")),Z&&(R=R.split("<").join("{{LT}}")),l=R.length,f=V(),d=0;l>d;d++)if(T=R.charAt(d),")"===T&&R.substr(d,20)===u)f+=($?G:"")+"<BR/>",$=!1,d!==l-20&&R.substr(d+20,20)!==u&&(f+=" "+V(),$=!0),d+=19;else if(" "===T&&" "!==R.charAt(d-1)&&d!==l-1&&R.substr(d-20,20)!==u){for(f+=$?G:"",$=!1;" "===R.charAt(d+1);)f+=z,d++;(")"!==R.charAt(d+1)||R.substr(d+1,20)!==u)&&(f+=z+V(),$=!0)}else f+=M&&" "!==T?Q()+T+"</div>":T;for(t.innerHTML=f+($?G:""),Z&&g(t,"{{LT}}","<"),y=t.getElementsByTagName("*"),l=y.length,w=[],d=0;l>d;d++)w[d]=y[d];if(O||L)for(d=0;l>d;d++)b=w[d],p=b.parentNode===t,(p||L||M&&!D)&&(x=b.offsetTop,O&&p&&x!==I&&"BR"!==b.nodeName&&(_=[],O.push(_),I=x),L&&(b._x=b.offsetLeft,b._y=x,b._w=b.offsetWidth,b._h=b.offsetHeight),O&&(D!==p&&M||(_.push(b),b._x-=N),p&&d&&(w[d-1]._wordEnd=!0),"BR"===b.nodeName&&b.nextSibling&&"BR"===b.nextSibling.nodeName&&O.push([])));for(d=0;l>d;d++)b=w[d],p=b.parentNode===t,"BR"!==b.nodeName?(L&&(S=b.style,D||p||(b._x+=b.parentNode._x,b._y+=b.parentNode._y),S.left=b._x+"px",S.top=b._y+"px",S.position="absolute",S.display="block",S.width=b._w+1+"px",S.height=b._h+"px"),D?p&&""!==b.innerHTML?J.push(b):M&&K.push(b):p?(t.removeChild(b),w.splice(d--,1),l--):!p&&M&&(x=!O&&!L&&b.nextSibling,t.appendChild(b),x||t.appendChild(n.createTextNode(" ")),K.push(b))):O||L?(t.removeChild(b),w.splice(d--,1),l--):D||t.appendChild(b);if(O){for(L&&(P=n.createElement("div"),t.appendChild(P),C=P.offsetWidth+"px",x=P.offsetParent===t?0:t.offsetLeft,t.removeChild(P)),S=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(k=!L||!D&&!M,d=0;O.length>d;d++){for(_=O[d],P=n.createElement("div"),P.style.cssText="display:block;text-align:"+j+";position:"+(L?"absolute;":"relative;"),H&&(P.className=H+(W?d+1:"")),te.push(P),l=_.length,y=0;l>y;y++)"BR"!==_[y].nodeName&&(b=_[y],P.appendChild(b),k&&(b._wordEnd||D)&&P.appendChild(n.createTextNode(" ")),L&&(0===y&&(P.style.top=b._y+"px",P.style.left=N+x+"px"),b.style.top="0px",x&&(b.style.left=b._x-x+"px")));0===l&&(P.innerHTML="&nbsp;"),D||M||(P.innerHTML=r(P).split(String.fromCharCode(160)).join(" ")),L&&(P.style.width=C,P.style.height=b._h+"px"),t.appendChild(P)}t.style.cssText=S}L&&(Y>t.clientHeight&&(t.style.height=Y-U+"px",Y>t.clientHeight&&(t.style.height=Y+F+"px")),q>t.clientWidth&&(t.style.width=q-B+"px",q>t.clientWidth&&(t.style.width=q+X+"px"))),v(i,K),v(s,J),v(o,te)},T=d.prototype;T.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=this.elements.length;--e>-1;)this._originals[e]=this.elements[e].innerHTML,y(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},d.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(d.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},d.version="0.3.3"})(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}





(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery)

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.5 (02.12.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
function revslider_showDoubleJqueryError(a){var b="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";b+="<br> This includes make eliminates the revolution slider libraries, and make it not work.",b+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.",b+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.",b="<span style='font-size:16px;color:#BC0C06;'>"+b+"</span>",jQuery(a).show().html(b)}!function(a,b){function c(){var a=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(a=!0):a=!1,a}function d(d,e){if(d==b)return!1;if(d.data("aimg")!=b&&("enabled"==d.data("aie8")&&i(8)||"enabled"==d.data("amobile")&&W())&&d.html('<img class="tp-slider-alternative-image" src="'+d.data("aimg")+'">'),("preview1"==e.navigationStyle||"preview3"==e.navigationStyle||"preview4"==e.navigationStyle)&&(e.soloArrowLeftHalign="left",e.soloArrowLeftValign="center",e.soloArrowLeftHOffset=0,e.soloArrowLeftVOffset=0,e.soloArrowRightHalign="right",e.soloArrowRightValign="center",e.soloArrowRightHOffset=0,e.soloArrowRightVOffset=0,e.navigationArrows="solo"),"on"==e.simplifyAll&&(i(8)||c())&&(d.find(".tp-caption").each(function(){var b=a(this);b.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"),b.data("splitin",""),b.data("speed",400)}),d.find(">ul>li").each(function(){var b=a(this);b.data("transition","fade"),b.data("masterspeed",500),b.data("slotamount",1);var c=b.find(">img").first();c.data("kenburns","off")})),e.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),"on"!=e.fullWidth&&"on"!=e.fullScreen&&(e.autoHeight="off"),"on"==e.fullScreen&&(e.autoHeight="on"),"on"!=e.fullWidth&&"on"!=e.fullScreen&&(forceFulWidth="off"),"on"==e.fullWidth&&"off"==e.autoHeight&&d.css({maxHeight:e.startheight+"px"}),W()&&"on"==e.hideThumbsOnMobile&&"thumb"==e.navigationType&&(e.navigationType="none"),W()&&"on"==e.hideBulletsOnMobile&&"bullet"==e.navigationType&&(e.navigationType="none"),W()&&"on"==e.hideBulletsOnMobile&&"both"==e.navigationType&&(e.navigationType="none"),W()&&"on"==e.hideArrowsOnMobile&&(e.navigationArrows="none"),"on"==e.forceFullWidth&&0==d.closest(".forcefullwidth_wrapper_tp_banner").length){var j=d.parent().offset().left,p=d.parent().css("marginBottom"),q=d.parent().css("marginTop");p==b&&(p=0),q==b&&(q=0),d.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+q+";margin-bottom:"+p+'" class="forcefullwidth_wrapper_tp_banner"></div>'),d.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+d.height()+'px"></div>'),d.css({backgroundColor:d.parent().css("backgroundColor"),backgroundImage:d.parent().css("backgroundImage")}),d.parent().css({left:0-j+"px",position:"absolute",width:a(window).width()}),e.width=a(window).width()}try{e.hideThumbsUnderResolution>a(window).width()&&0!=e.hideThumbsUnderResolution?d.parent().find(".tp-bullets.tp-thumbs").css({display:"none"}):d.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}catch(r){}if(!d.hasClass("revslider-initialised")){d.addClass("revslider-initialised"),d.attr("id")==b&&d.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),e.firefox13=!1,e.ie=!a.support.opacity,e.ie9=9==document.documentMode,e.origcd=e.delay;var t=a.fn.jquery.split("."),u=parseFloat(t[0]),v=parseFloat(t[1]);parseFloat(t[2]||"0"),1==u&&7>v&&d.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+t+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),u>1&&(e.ie=!1),a.support.transition||(a.fn.transition=a.fn.animate),d.find(".caption").each(function(){a(this).addClass("tp-caption")}),W()&&d.find(".tp-caption").each(function(){var b=a(this);(1==b.data("autoplayonlyfirsttime")||"true"==b.data("autoplayonlyfirsttime"))&&b.data("autoplayonlyfirsttime","false"),(1==b.data("autoplay")||"true"==b.data("autoplay"))&&b.data("autoplay",!1)});var x=0,y=0,B="http";if("https:"===location.protocol&&(B="https"),d.find(".tp-caption").each(function(){try{if((a(this).data("ytid")!=b||a(this).find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==x){x=1;var d=document.createElement("script"),e="https";d.src=e+"://www.youtube.com/iframe_api";var f=document.getElementsByTagName("script")[0],g=!0;a("head").find("*").each(function(){a(this).attr("src")==e+"://www.youtube.com/iframe_api"&&(g=!1)}),g&&f.parentNode.insertBefore(d,f)}}catch(h){}try{if((a(this).data("vimeoid")!=b||a(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==y){y=1;var i=document.createElement("script");i.src=B+"://a.vimeocdn.com/js/froogaloop2.min.js";var f=document.getElementsByTagName("script")[0],g=!0;a("head").find("*").each(function(){a(this).attr("src")==B+"://a.vimeocdn.com/js/froogaloop2.min.js"&&(g=!1)}),g&&f.parentNode.insertBefore(i,f)}}catch(h){}try{a(this).data("videomp4")!=b||a(this).data("videowebm")!=b}catch(h){}}),d.find(".tp-caption video").each(function(){a(this).removeClass("video-js").removeClass("vjs-default-skin"),a(this).attr("preload",""),a(this).css({display:"none"})}),d.find(">ul:first-child >li").each(function(){var b=a(this);b.data("origindex",b.index())}),"on"==e.shuffle){var C=new Object,D=d.find(">ul:first-child >li:first-child");C.fstransition=D.data("fstransition"),C.fsmasterspeed=D.data("fsmasterspeed"),C.fsslotamount=D.data("fsslotamount");for(var E=0;E<d.find(">ul:first-child >li").length;E++){var F=Math.round(Math.random()*d.find(">ul:first-child >li").length);d.find(">ul:first-child >li:eq("+F+")").prependTo(d.find(">ul:first-child"))}var G=d.find(">ul:first-child >li:first-child");G.data("fstransition",C.fstransition),G.data("fsmasterspeed",C.fsmasterspeed),G.data("fsslotamount",C.fsslotamount)}e.slots=4,e.act=-1,e.next=0,e.startWithSlide!=b&&(e.next=e.startWithSlide);var H=g("#")[0];if(H.length<9&&H.split("slide").length>1){var I=parseInt(H.split("slide")[1],0);1>I&&(I=1),I>d.find(">ul:first >li").length&&(I=d.find(">ul:first >li").length),e.next=I-1}e.firststart=1,e.navigationHOffset==b&&(e.navOffsetHorizontal=0),e.navigationVOffset==b&&(e.navOffsetVertical=0),d.append('<div class="tp-loader '+e.spinner+'">'+'<div class="dot1"></div>'+'<div class="dot2"></div>'+'<div class="bounce1"></div>'+'<div class="bounce2"></div>'+'<div class="bounce3"></div>'+"</div>"),0==d.find(".tp-bannertimer").length&&d.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');var J=d.find(".tp-bannertimer");if(J.length>0&&J.css({width:"0%"}),d.addClass("tp-simpleresponsive"),e.container=d,e.slideamount=d.find(">ul:first >li").length,0==d.height()&&d.height(e.startheight),(e.startwidth==b||0==e.startwidth)&&(e.startwidth=d.width()),(e.startheight==b||0==e.startheight)&&(e.startheight=d.height()),e.width=d.width(),e.height=d.height(),e.bw=e.startwidth/d.width(),e.bh=e.startheight/d.height(),e.width!=e.startwidth&&(e.height=Math.round(e.startheight*(e.width/e.startwidth)),d.height(e.height)),0!=e.shadow){d.parent().append('<div class="tp-bannershadow tp-shadow'+e.shadow+'"></div>');var j=0;"on"==e.forceFullWidth&&(j=0-e.container.parent().offset().left),d.parent().find(".tp-bannershadow").css({width:e.width,left:j})}d.find("ul").css({display:"none"}),d.find("ul").css({display:"block"}),s(d,e),"off"!=e.parallax&&ab(d,e),e.slideamount>1&&k(d,e),e.slideamount>1&&"thumb"==e.navigationType&&cb(d,e),e.slideamount>1&&l(d,e),"on"==e.keyboardNavigation&&m(d,e),n(d,e),e.hideThumbs>0&&o(d,e),setTimeout(function(){z(d,e)},e.startDelay),e.startDelay=0,e.slideamount>1&&V(d,e),setTimeout(function(){d.trigger("revolution.slide.onloaded")},500),a("body").data("rs-fullScreenMode",!1),a(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",function(){a("body").data("rs-fullScreenMode",!a("body").data("rs-fullScreenMode")),a("body").data("rs-fullScreenMode")&&setTimeout(function(){a(window).trigger("resize")},200)});var L="resize.revslider-"+d.attr("id");a(window).on(L,function(){if(d==b)return!1;if(0!=a("body").find(d)&&"on"==e.forceFullWidth){var c=e.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;e.container.parent().css({left:0-c+"px",width:a(window).width()})}(d.outerWidth(!0)!=e.width||d.is(":hidden"))&&h(d,e)});try{0!=e.hideThumbsUnderResoluition&&"thumb"==e.navigationType&&(e.hideThumbsUnderResoluition>a(window).width()?a(".tp-bullets").css({display:"none"}):a(".tp-bullets").css({display:"block"}))}catch(r){}d.find(".tp-scrollbelowslider").on("click",function(){var b=0;try{b=a("body").find(e.fullScreenOffsetContainer).height()}catch(c){}try{b-=parseInt(a(this).data("scrolloffset"),0)}catch(c){}a("body,html").animate({scrollTop:d.offset().top+d.find(">ul >li").height()-b+"px"},{duration:400})});var M=d.parent();a(window).width()<e.hideSliderAtLimit&&(d.trigger("stoptimer"),"none"!=M.css("display")&&M.data("olddisplay",M.css("display")),M.css({display:"none"})),f(d,e)}}a.fn.extend({revolution:function(c){var e={delay:9e3,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideTimerBar:"off",hideThumbs:200,hideNavDelayOnMobile:1500,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",navigationInGrid:"off",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",fullScreenOffset:"0",dottedOverlay:"none",forceFullWidth:"off",spinner:"spinner0",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,isJoomla:!1,parallax:"off",parallaxLevels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],parallaxBgFreeze:"off",parallaxOpacity:"on",parallaxDisableOnMobile:"off",panZoomDisableOnMobile:"off",simplifyAll:"on",minHeight:0,nextSlideOnWindowFocus:"off",startDelay:0};return c=a.extend({},e,c),this.each(function(){if(1==window.tplogs)try{console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on "+a(this).attr("id")),console.groupCollapsed("Used Options:"),console.info(c),console.groupEnd(),console.groupCollapsed("Tween Engine:")}catch(e){}if(punchgs.TweenLite==b){if(1==window.tplogs)try{console.error("GreenSock Engine Does not Exist!")}catch(e){}return!1}if(punchgs.force3D=!0,1==window.tplogs)try{console.info("GreenSock Engine Version in Slider Revolution:"+punchgs.TweenLite.version)}catch(e){}if("on"==c.simplifyAll||(punchgs.TweenLite.lagSmoothing(1e3,16),punchgs.force3D="true"),1==window.tplogs)try{console.groupEnd(),console.groupEnd()}catch(e){}d(a(this),c)})},revscroll:function(c){return this.each(function(){var d=a(this);d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0&&a("body,html").animate({scrollTop:d.offset().top+d.find(">ul >li").height()-c+"px"},{duration:400})})},revredraw:function(){return this.each(function(){var c=a(this);if(c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0){var d=c.parent().find(".tp-bannertimer"),e=d.data("opt");h(c,e)}})},revkill:function(){var d=this,e=a(this);if(e!=b&&e.length>0&&a("body").find("#"+e.attr("id")).length>0){e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause");var f=e.parent().find(".tp-bannertimer"),g=f.data("opt");g.bannertimeronpause=!0,e.trigger("stoptimer"),punchgs.TweenLite.killTweensOf(e.find("*"),!1),punchgs.TweenLite.killTweensOf(e,!1),e.unbind("hover, mouseover, mouseenter,mouseleave, resize");var h="resize.revslider-"+e.attr("id");a(window).off(h),e.find("*").each(function(){var c=a(this);c.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),c.off("on, hover, mouseenter,mouseleave,mouseover, resize"),c.data("mySplitText",null),c.data("ctl",null),c.data("tween")!=b&&c.data("tween").kill(),c.data("kenburn")!=b&&c.data("kenburn").kill(),c.remove(),c.empty(),c=null}),punchgs.TweenLite.killTweensOf(e.find("*"),!1),punchgs.TweenLite.killTweensOf(e,!1),f.remove();try{e.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(i){}try{e.closest(".rev_slider_wrapper").remove()}catch(i){}try{e.remove()}catch(i){}return e.empty(),e.html(),e=null,g=null,delete d.container,delete d.opt,!0}return!1},revpause:function(){return this.each(function(){var c=a(this);if(c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0){c.data("conthover",1),c.data("conthover-changed",1),c.trigger("revolution.slide.onpause");var d=c.parent().find(".tp-bannertimer"),e=d.data("opt");e.bannertimeronpause=!0,c.trigger("stoptimer")}})},revresume:function(){return this.each(function(){var c=a(this);if(c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0){c.data("conthover",0),c.data("conthover-changed",1),c.trigger("revolution.slide.onresume");var d=c.parent().find(".tp-bannertimer"),e=d.data("opt");e.bannertimeronpause=!1,c.trigger("starttimer")}})},revnext:function(){return this.each(function(){var c=a(this);c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0&&c.parent().find(".tp-rightarrow").click()})},revprev:function(){return this.each(function(){var c=a(this);c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0&&c.parent().find(".tp-leftarrow").click()})},revmaxslide:function(){return a(this).find(">ul:first-child >li").length},revcurrentslide:function(){var d=a(this);if(d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0){var e=d.parent().find(".tp-bannertimer"),f=e.data("opt");return f.act}},revlastslide:function(){var d=a(this);if(d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0){var e=d.parent().find(".tp-bannertimer"),f=e.data("opt");return f.lastslide}},revshowslide:function(c){return this.each(function(){var d=a(this);d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0&&(d.data("showus",c),d.parent().find(".tp-rightarrow").click())})}}),function(){var a,b,c={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(a in c)if(a in document){b=c[a];break}return function(c){return c&&document.addEventListener(b,c),!document[a]}}();var f=function(c,d){var e=document.documentMode===b,f=window.chrome;e&&!f?a(window).on("focusin",function(){return c==b?!1:(setTimeout(function(){"on"==d.nextSlideOnWindowFocus&&c.revnext(),c.revredraw()},300),void 0)}).on("focusout",function(){}):window.addEventListener?(window.addEventListener("focus",function(){return c==b?!1:(setTimeout(function(){"on"==d.nextSlideOnWindowFocus&&c.revnext(),c.revredraw()},300),void 0)},!1),window.addEventListener("blur",function(){},!1)):(window.attachEvent("focus",function(){setTimeout(function(){return c==b?!1:("on"==d.nextSlideOnWindowFocus&&c.revnext(),c.revredraw(),void 0)},300)}),window.attachEvent("blur",function(){}))},g=function(a){for(var c,b=[],d=window.location.href.slice(window.location.href.indexOf(a)+1).split("_"),e=0;e<d.length;e++)d[e]=d[e].replace("%3D","="),c=d[e].split("="),b.push(c[0]),b[c[0]]=c[1];return b},h=function(c,d){if(c==b)return!1;try{0!=d.hideThumbsUnderResoluition&&"thumb"==d.navigationType&&(d.hideThumbsUnderResoluition>a(window).width()?a(".tp-bullets").css({display:"none"}):a(".tp-bullets").css({display:"block"}))}catch(e){}c.find(".defaultimg").each(function(){r(a(this),d)});var f=c.parent();a(window).width()<d.hideSliderAtLimit?(c.trigger("stoptimer"),"none"!=f.css("display")&&f.data("olddisplay",f.css("display")),f.css({display:"none"})):c.is(":hidden")&&(f.data("olddisplay")!=b&&"undefined"!=f.data("olddisplay")&&"none"!=f.data("olddisplay")?f.css({display:f.data("olddisplay")}):f.css({display:"block"}),c.trigger("restarttimer"),setTimeout(function(){h(c,d)},150));var g=0;"on"==d.forceFullWidth&&(g=0-d.container.parent().offset().left);try{c.parent().find(".tp-bannershadow").css({width:d.width,left:g})}catch(e){}var i=c.find(">ul >li:eq("+d.act+") .slotholder"),j=c.find(">ul >li:eq("+d.next+") .slotholder");v(c,d,c),punchgs.TweenLite.set(j.find(".defaultimg"),{opacity:0}),i.find(".defaultimg").css({opacity:1}),j.find(".defaultimg").each(function(){var e=a(this);"on"==d.panZoomDisableOnMobile||e.data("kenburn")!=b&&(e.data("kenburn").restart(),Y(c,d,!0))});var k=c.find(">ul >li:eq("+d.next+")"),l=c.parent().find(".tparrows");l.hasClass("preview2")&&l.css({width:parseInt(l.css("minWidth"),0)}),L(k,d,!0),p(c,d)},i=function(b,c){var d=a('<div style="display:none;"/>').appendTo(a("body"));d.html("<!--[if "+(c||"")+" IE "+(b||"")+"]><a>&nbsp;</a><![endif]-->");var e=d.find("a").length;return d.remove(),e},j=function(a,b){a.next==b.find(">ul >li").length-1&&(a.looptogo=a.looptogo-1,a.looptogo<=0&&(a.stopLoop="on")),z(b,a)},k=function(b,c){var d="hidebullets";0==c.hideThumbs&&(d=""),("bullet"==c.navigationType||"both"==c.navigationType)&&b.parent().append('<div class="tp-bullets '+d+" simplebullets "+c.navigationStyle+'"></div>');var e=b.parent().find(".tp-bullets");b.find(">ul:first >li").each(function(a){b.find(">ul:first >li:eq("+a+") img:first").attr("src"),e.append('<div class="bullet"></div>'),e.find(".bullet:first")}),e.find(".bullet").each(function(d){var e=a(this);d==c.slideamount-1&&e.addClass("last"),0==d&&e.addClass("first"),e.click(function(){var a=!1,d=e.index();("withbullet"==c.navigationArrows||"nexttobullets"==c.navigationArrows)&&(d=e.index()-1),d==c.act&&(a=!0),0!=c.transition||a||(c.next=d,j(c,b))})}),e.append('<div class="tpclear"></div>'),p(b,c)},l=function(a,c){function h(b){a.parent().append('<div style="'+e+'" class="tp-'+b+"arrow "+f+" tparrows "+g+'"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')}var e=(a.find(".tp-bullets"),""),f="hidearrows",g=c.navigationStyle;0==c.hideThumbs&&(f=""),"none"==c.navigationArrows&&(e="visibility:hidden;display:none"),c.soloArrowStyle="default "+c.navigationStyle,"none"!=c.navigationArrows&&"nexttobullets"!=c.navigationArrows&&(g=c.soloArrowStyle),h("left"),h("right"),a.parent().find(".tp-rightarrow").click(function(){0==c.transition&&(c.next=a.data("showus")!=b&&-1!=a.data("showus")?a.data("showus")-1:c.next+1,a.data("showus",-1),c.next>=c.slideamount&&(c.next=0),c.next<0&&(c.next=0),c.act!=c.next&&j(c,a))}),a.parent().find(".tp-leftarrow").click(function(){0==c.transition&&(c.next=c.next-1,c.leftarrowpressed=1,c.next<0&&(c.next=c.slideamount-1),j(c,a))}),p(a,c)},m=function(c,d){a(document).keydown(function(a){0==d.transition&&39==a.keyCode&&(d.next=c.data("showus")!=b&&-1!=c.data("showus")?c.data("showus")-1:d.next+1,c.data("showus",-1),d.next>=d.slideamount&&(d.next=0),d.next<0&&(d.next=0),d.act!=d.next&&j(d,c)),0==d.transition&&37==a.keyCode&&(d.next=d.next-1,d.leftarrowpressed=1,d.next<0&&(d.next=d.slideamount-1),j(d,c))}),p(c,d)},n=function(b,c){var d="vertical";"on"==c.touchenabled&&(1==c.drag_block_vertical&&(d="none"),b.swipe({allowPageScroll:d,fingers:c.swipe_min_touches,treshold:c.swipe_treshold,swipe:function(e,f){switch(f){case"left":0==c.transition&&(c.next=c.next+1,c.next==c.slideamount&&(c.next=0),j(c,b));break;case"right":0==c.transition&&(c.next=c.next-1,c.leftarrowpressed=1,c.next<0&&(c.next=c.slideamount-1),j(c,b));break;case"up":"none"==d&&a("html, body").animate({scrollTop:b.offset().top+b.height()+"px"});break;case"down":"none"==d&&a("html, body").animate({scrollTop:b.offset().top-a(window).height()+"px"})}}}))},o=function(a,b){var c=a.parent().find(".tp-bullets"),d=a.parent().find(".tparrows");if(null==c){a.append('<div class=".tp-bullets"></div>');var c=a.parent().find(".tp-bullets")}if(null==d){a.append('<div class=".tparrows"></div>');var d=a.parent().find(".tparrows")}if(a.data("hideThumbs",b.hideThumbs),c.addClass("hidebullets"),d.addClass("hidearrows"),W())try{a.hammer().on("touch",function(){a.addClass("hovered"),"on"==b.onHoverStop&&a.trigger("stoptimer"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")}),a.hammer().on("release",function(){a.removeClass("hovered"),a.trigger("starttimer"),a.hasClass("hovered")||c.hasClass("hovered")||a.data("hideThumbs",setTimeout(function(){c.addClass("hidebullets"),d.addClass("hidearrows"),a.trigger("starttimer")},b.hideNavDelayOnMobile))})}catch(e){}else c.hover(function(){b.overnav=!0,"on"==b.onHoverStop&&a.trigger("stoptimer"),c.addClass("hovered"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")},function(){b.overnav=!1,a.trigger("starttimer"),c.removeClass("hovered"),a.hasClass("hovered")||c.hasClass("hovered")||a.data("hideThumbs",setTimeout(function(){c.addClass("hidebullets"),d.addClass("hidearrows")},b.hideThumbs))}),d.hover(function(){b.overnav=!0,"on"==b.onHoverStop&&a.trigger("stoptimer"),c.addClass("hovered"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")},function(){b.overnav=!1,a.trigger("starttimer"),c.removeClass("hovered")}),a.on("mouseenter",function(){a.addClass("hovered"),"on"==b.onHoverStop&&a.trigger("stoptimer"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")}),a.on("mouseleave",function(){a.removeClass("hovered"),a.trigger("starttimer"),a.hasClass("hovered")||c.hasClass("hovered")||a.data("hideThumbs",setTimeout(function(){c.addClass("hidebullets"),d.addClass("hidearrows")},b.hideThumbs))})},p=function(b,c){var d=b.parent(),e=d.find(".tp-bullets");if("thumb"==c.navigationType){e.find(".thumb").each(function(){var d=a(this);d.css({width:c.thumbWidth*c.bw+"px",height:c.thumbHeight*c.bh+"px"})});var f=e.find(".tp-mask");f.width(c.thumbWidth*c.thumbAmount*c.bw),f.height(c.thumbHeight*c.bh),f.parent().width(c.thumbWidth*c.thumbAmount*c.bw),f.parent().height(c.thumbHeight*c.bh)}var g=d.find(".tp-leftarrow"),h=d.find(".tp-rightarrow");"thumb"==c.navigationType&&"nexttobullets"==c.navigationArrows&&(c.navigationArrows="solo"),"nexttobullets"==c.navigationArrows&&(g.prependTo(e).css({"float":"left"}),h.insertBefore(e.find(".tpclear")).css({"float":"left"}));var i=0;"on"==c.forceFullWidth&&(i=0-c.container.parent().offset().left);var j=0,k=0;if("on"==c.navigationInGrid&&(j=b.width()>c.startwidth?(b.width()-c.startwidth)/2:0,k=b.height()>c.startheight?(b.height()-c.startheight)/2:0),"none"!=c.navigationArrows&&"nexttobullets"!=c.navigationArrows){var l=c.soloArrowLeftValign,m=c.soloArrowLeftHalign,n=c.soloArrowRightValign,o=c.soloArrowRightHalign,p=c.soloArrowLeftVOffset,q=c.soloArrowLeftHOffset,r=c.soloArrowRightVOffset,s=c.soloArrowRightHOffset;g.css({position:"absolute"}),h.css({position:"absolute"}),"center"==l?g.css({top:"50%",marginTop:p-Math.round(g.innerHeight()/2)+"px"}):"bottom"==l?g.css({top:"auto",bottom:0+p+"px"}):"top"==l&&g.css({bottom:"auto",top:0+p+"px"}),"center"==m?g.css({left:"50%",marginLeft:i+q-Math.round(g.innerWidth()/2)+"px"}):"left"==m?g.css({left:j+q+i+"px"}):"right"==m&&g.css({right:j+q-i+"px"}),"center"==n?h.css({top:"50%",marginTop:r-Math.round(h.innerHeight()/2)+"px"}):"bottom"==n?h.css({top:"auto",bottom:0+r+"px"}):"top"==n&&h.css({bottom:"auto",top:0+r+"px"}),"center"==o?h.css({left:"50%",marginLeft:i+s-Math.round(h.innerWidth()/2)+"px"}):"left"==o?h.css({left:j+s+i+"px"}):"right"==o&&h.css({right:j+s-i+"px"}),null!=g.position()&&g.css({top:Math.round(parseInt(g.position().top,0))+"px"}),null!=h.position()&&h.css({top:Math.round(parseInt(h.position().top,0))+"px"})}"none"==c.navigationArrows&&(g.css({visibility:"hidden"}),h.css({visibility:"hidden"}));var t=c.navigationVAlign,u=c.navigationHAlign,v=c.navigationVOffset*c.bh,w=c.navigationHOffset*c.bw;"center"==t&&e.css({top:"50%",marginTop:v-Math.round(e.innerHeight()/2)+"px"}),"bottom"==t&&e.css({bottom:0+v+"px"}),"top"==t&&e.css({top:0+v+"px"}),"center"==u&&e.css({left:"50%",marginLeft:i+w-Math.round(e.innerWidth()/2)+"px"}),"left"==u&&e.css({left:0+w+i+"px"}),"right"==u&&e.css({right:0+w-i+"px"})},q=function(c){var d=c.container;c.beforli=c.next-1,c.comingli=c.next+1,c.beforli<0&&(c.beforli=c.slideamount-1),c.comingli>=c.slideamount&&(c.comingli=0);var e=d.find(">ul:first-child >li:eq("+c.comingli+")"),f=d.find(">ul:first-child >li:eq("+c.beforli+")"),g=f.find(".defaultimg").attr("src"),h=e.find(".defaultimg").attr("src");c.arr==b&&(c.arr=d.parent().find(".tparrows"),c.rar=d.parent().find(".tp-rightarrow"),c.lar=d.parent().find(".tp-leftarrow"),c.raimg=c.rar.find(".tp-arr-imgholder"),c.laimg=c.lar.find(".tp-arr-imgholder"),c.raimg_b=c.rar.find(".tp-arr-imgholder2"),c.laimg_b=c.lar.find(".tp-arr-imgholder2"),c.ratit=c.rar.find(".tp-arr-titleholder"),c.latit=c.lar.find(".tp-arr-titleholder"));var i=c.arr,j=c.rar,k=c.lar,l=c.raimg,m=c.laimg,n=c.raimg_b,o=c.laimg_b,p=c.ratit,q=c.latit;if(e.data("title")!=b&&p.html(e.data("title")),f.data("title")!=b&&q.html(f.data("title")),j.hasClass("itishovered")&&j.width(p.outerWidth(!0)+parseInt(j.css("minWidth"),0)),k.hasClass("itishovered")&&k.width(q.outerWidth(!0)+parseInt(k.css("minWidth"),0)),i.hasClass("preview2")&&!i.hasClass("hashoveralready"))if(i.addClass("hashoveralready"),W()){var i=a(this),r=i.find(".tp-arr-titleholder");r.addClass("alwayshidden"),punchgs.TweenLite.set(r,{autoAlpha:0})}else i.hover(function(){var b=a(this),c=b.find(".tp-arr-titleholder");a(window).width()>767&&b.width(c.outerWidth(!0)+parseInt(b.css("minWidth"),0)),b.addClass("itishovered")},function(){var b=a(this);b.find(".tp-arr-titleholder"),b.css({width:parseInt(b.css("minWidth"),0)}),b.removeClass("itishovered")});f.data("thumb")!=b&&(g=f.data("thumb")),e.data("thumb")!=b&&(h=e.data("thumb")),i.hasClass("preview4")?(n.css({backgroundImage:"url("+h+")"}),o.css({backgroundImage:"url("+g+")"}),punchgs.TweenLite.fromTo(n,.8,{force3D:punchgs.force3d,x:0},{x:-l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){l.css({backgroundImage:"url("+h+")"}),punchgs.TweenLite.set(n,{x:0})}}),punchgs.TweenLite.fromTo(o,.8,{force3D:punchgs.force3d,x:0},{x:l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){m.css({backgroundImage:"url("+g+")"}),punchgs.TweenLite.set(o,{x:0})}}),punchgs.TweenLite.fromTo(l,.8,{x:0},{force3D:punchgs.force3d,x:-l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(l,{x:0})}}),punchgs.TweenLite.fromTo(m,.8,{x:0},{force3D:punchgs.force3d,x:l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(m,{x:0})}})):(punchgs.TweenLite.to(l,.5,{autoAlpha:0,onComplete:function(){l.css({backgroundImage:"url("+h+")"}),m.css({backgroundImage:"url("+g+")"})}}),punchgs.TweenLite.to(m,.5,{autoAlpha:0,onComplete:function(){punchgs.TweenLite.to(l,.5,{autoAlpha:1,delay:.2}),punchgs.TweenLite.to(m,.5,{autoAlpha:1,delay:.2})}})),j.hasClass("preview4")&&!j.hasClass("hashoveralready")&&(j.addClass("hashoveralready"),j.hover(function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(b,.4,{x:b.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{autoAlpha:1,overwrite:"all"})},function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(b,.4,{x:b.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{delay:.6,autoAlpha:0,overwrite:"all"})}),k.hover(function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(b,.4,{x:0-b.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{autoAlpha:1,overwrite:"all"})},function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(b,.4,{x:0-b.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{delay:.6,autoAlpha:0,overwrite:"all"})}))},r=function(c,d){if(d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:d.container.height()}),d.container.closest(".rev_slider_wrapper").css({height:d.container.height()}),d.width=parseInt(d.container.width(),0),d.height=parseInt(d.container.height(),0),d.bw=d.width/d.startwidth,d.bh=d.height/d.startheight,d.bh>d.bw&&(d.bh=d.bw),d.bh<d.bw&&(d.bw=d.bh),d.bw<d.bh&&(d.bh=d.bw),d.bh>1&&(d.bw=1,d.bh=1),d.bw>1&&(d.bw=1,d.bh=1),d.height=Math.round(d.startheight*(d.width/d.startwidth)),d.height>d.startheight&&"on"!=d.autoHeight&&(d.height=d.startheight),"on"==d.fullScreen){d.height=d.bw*d.startheight,d.container.parent().width();var f=a(window).height();if(d.fullScreenOffsetContainer!=b){try{var g=d.fullScreenOffsetContainer.split(",");a.each(g,function(b,c){f-=a(c).outerHeight(!0),f<d.minFullScreenHeight&&(f=d.minFullScreenHeight)})}catch(h){}try{d.fullScreenOffset.split("%").length>1&&d.fullScreenOffset!=b&&d.fullScreenOffset.length>0?f-=a(window).height()*parseInt(d.fullScreenOffset,0)/100:d.fullScreenOffset!=b&&d.fullScreenOffset.length>0&&(f-=parseInt(d.fullScreenOffset,0)),f<d.minFullScreenHeight&&(f=d.minFullScreenHeight)}catch(h){}}d.container.parent().height(f),d.container.closest(".rev_slider_wrapper").height(f),d.container.css({height:"100%"}),d.height=f,d.minHeight!=b&&d.height<d.minHeight&&(d.height=d.minHeight)}else d.minHeight!=b&&d.height<d.minHeight&&(d.height=d.minHeight),d.container.height(d.height);d.slotw=Math.ceil(d.width/d.slots),d.sloth="on"==d.fullScreen?Math.ceil(a(window).height()/d.slots):Math.ceil(d.height/d.slots),"on"==d.autoHeight&&(d.sloth=Math.ceil(c.height()/d.slots))},s=function(c,d){c.find(".tp-caption").each(function(){a(this).addClass(a(this).data("transition")),a(this).addClass("start")}),c.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:c.parent().css("maxHeight")}).addClass("tp-revslider-mainul"),"on"==d.autoHeight&&(c.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),c.css({maxHeight:"none"}),c.parent().css({maxHeight:"none"})),c.find(">ul:first >li").each(function(){var e=a(this);if(e.addClass("tp-revslider-slidesli"),e.css({width:"100%",height:"100%",overflow:"hidden"}),e.data("link")!=b){var f=e.data("link"),g="_self",h=60;"back"==e.data("slideindex")&&(h=0);var i=checksl=e.data("linktoslide");i!=b&&"next"!=i&&"prev"!=i&&c.find(">ul:first-child >li").each(function(){var b=a(this);b.data("origindex")+1==checksl&&(i=b.index()+1)}),e.data("target")!=b&&(g=e.data("target")),"slide"!=f&&(i="no");var j='<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:'+h+';" data-x="center" data-y="center" data-linktoslide="'+i+'" data-start="0"><a style="width:100%;height:100%;display:block"';"slide"!=f&&(j=j+' target="'+g+'" href="'+f+'"'),j+='><span style="width:100%;height:100%;display:block"></span></a></div>',e.append(j)}}),c.parent().css({overflow:"visible"}),c.find(">ul:first >li >img").each(function(c){var e=a(this);e.addClass("defaultimg"),e.data("lazyload")!=b&&1!=e.data("lazydone")||r(e,d),i(8)&&e.data("kenburns","off"),"on"==d.panZoomDisableOnMobile&&W()&&(e.data("kenburns","off"),e.data("bgfit","cover")),e.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="'+e.data("duration")+'"'+'data-zoomstart="'+e.data("zoomstart")+'"'+'data-zoomend="'+e.data("zoomend")+'"'+'data-rotationstart="'+e.data("rotationstart")+'"'+'data-rotationend="'+e.data("rotationend")+'"'+'data-ease="'+e.data("ease")+'"'+'data-duration="'+e.data("duration")+'"'+'data-bgpositionend="'+e.data("bgpositionend")+'"'+'data-bgposition="'+e.data("bgposition")+'"'+'data-duration="'+e.data("duration")+'"'+'data-kenburns="'+e.data("kenburns")+'"'+'data-easeme="'+e.data("ease")+'"'+'data-bgfit="'+e.data("bgfit")+'"'+'data-bgfitend="'+e.data("bgfitend")+'"'+'data-owidth="'+e.data("owidth")+'"'+'data-oheight="'+e.data("oheight")+'"'+"></div>"),"none"!=d.dottedOverlay&&d.dottedOverlay!=b&&e.closest(".slotholder").append('<div class="tp-dottedoverlay '+d.dottedOverlay+'"></div>');
var f=e.attr("src"),h=(e.data("lazyload"),e.data("bgfit")),j=e.data("bgrepeat"),k=e.data("bgposition");h==b&&(h="cover"),j==b&&(j="no-repeat"),k==b&&(k="center center");var l=e.closest(".slotholder");e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+e.data("lazyload")+'" data-bgfit="'+h+'"data-bgposition="'+k+'" data-bgrepeat="'+j+'" data-lazydone="'+e.data("lazydone")+'" src="'+f+'" data-src="'+f+'" style="background-color:'+e.css("backgroundColor")+";background-repeat:"+j+";background-image:url("+f+");background-size:"+h+";background-position:"+k+';width:100%;height:100%;"></div>'),i(8)&&(l.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"}),l.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+f+'" style="width:100%">')),e.css({opacity:0}),e.data("li-id",c)})},t=function(a,c,d,e){var f=a,g=f.find(".defaultimg"),h=f.data("zoomstart"),j=f.data("rotationstart");g.data("currotate")!=b&&(j=g.data("currotate")),g.data("curscale")!=b&&"box"==e?h=100*g.data("curscale"):g.data("curscale")!=b&&(h=g.data("curscale")),r(g,c);var k=g.data("src"),l=g.css("backgroundColor"),m=c.width,n=c.height,o=g.data("fxof"),p=0;"on"==c.autoHeight&&(n=c.container.height()),o==b&&(o=0);var q=0,s=g.data("bgfit"),t=g.data("bgrepeat"),v=g.data("bgposition");if(s==b&&(s="cover"),t==b&&(t="no-repeat"),v==b&&(v="center center"),i(8)){f.data("kenburns","off");var w=k;k=""}switch(e){case"box":var x=0,y=0,z=0;if(x=c.sloth>c.slotw?c.sloth:c.slotw,!d)var q=0-x;c.slotw=x,c.sloth=x;var y=0,z=0;"on"==f.data("kenburns")&&(s=h,s.toString().length<4&&(s=X(s,f,c)));for(var A=0;A<c.slots;A++){z=0;for(var B=0;B<c.slots;B++)f.append('<div class="slot" style="position:absolute;top:'+(p+z)+"px;"+"left:"+(o+y)+"px;"+"width:"+x+"px;"+"height:"+x+"px;"+'overflow:hidden;">'+'<div class="slotslide" data-x="'+y+'" data-y="'+z+'" '+'style="position:absolute;'+"top:"+0+"px;"+"left:"+0+"px;"+"width:"+x+"px;"+"height:"+x+"px;"+'overflow:hidden;">'+'<div style="position:absolute;'+"top:"+(0-z)+"px;"+"left:"+(0-y)+"px;"+"width:"+m+"px;"+"height:"+n+"px;"+"background-color:"+l+";"+"background-image:url("+k+");"+"background-repeat:"+t+";"+"background-size:"+s+";background-position:"+v+';">'+"</div></div></div>"),z+=x,i(8)&&(f.find(".slot ").last().find(".slotslide").append('<img src="'+w+'">'),u(f,c)),h!=b&&j!=b&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j});y+=x}break;case"vertical":case"horizontal":if("on"==f.data("kenburns")&&(s=h,s.toString().length<4&&(s=X(s,f,c))),"horizontal"==e){if(!d)var q=0-c.slotw;for(var B=0;B<c.slots;B++)f.append('<div class="slot" style="position:absolute;top:'+(0+p)+"px;"+"left:"+(o+B*c.slotw)+"px;"+"overflow:hidden;width:"+(c.slotw+.6)+"px;"+"height:"+n+'px">'+'<div class="slotslide" style="position:absolute;'+"top:0px;left:"+q+"px;"+"width:"+(c.slotw+.6)+"px;"+"height:"+n+'px;overflow:hidden;">'+'<div style="background-color:'+l+";"+"position:absolute;top:0px;"+"left:"+(0-B*c.slotw)+"px;"+"width:"+m+"px;height:"+n+"px;"+"background-image:url("+k+");"+"background-repeat:"+t+";"+"background-size:"+s+";background-position:"+v+';">'+"</div></div></div>"),h!=b&&j!=b&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j}),i(8)&&(f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%;height:auto">'),u(f,c))}else{if(!d)var q=0-c.sloth;for(var B=0;B<c.slots+2;B++)f.append('<div class="slot" style="position:absolute;top:'+(p+B*c.sloth)+"px;"+"left:"+o+"px;"+"overflow:hidden;"+"width:"+m+"px;"+"height:"+c.sloth+'px">'+'<div class="slotslide" style="position:absolute;'+"top:"+q+"px;"+"left:0px;width:"+m+"px;"+"height:"+c.sloth+"px;"+'overflow:hidden;">'+'<div style="background-color:'+l+";"+"position:absolute;"+"top:"+(0-B*c.sloth)+"px;"+"left:0px;"+"width:"+m+"px;height:"+n+"px;"+"background-image:url("+k+");"+"background-repeat:"+t+";"+"background-size:"+s+";background-position:"+v+';">'+"</div></div></div>"),h!=b&&j!=b&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j}),i(8)&&(f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%;height:auto;">'),u(f,c))}}},u=function(a,b){if(i(8)){var c=a.find(".ieeightfallbackimage");c.width(),c.height(),b.startwidth/b.startheight<a.data("owidth")/a.data("oheight")?c.css({width:"auto",height:"100%"}):c.css({width:"100%",height:"auto"}),setTimeout(function(){var d=c.width(),e=c.height(),f=a.data("bgposition");"center center"==f&&c.css({position:"absolute",top:b.height/2-e/2+"px",left:b.width/2-d/2+"px"}),("center top"==f||"top center"==f)&&c.css({position:"absolute",top:"0px",left:b.width/2-d/2+"px"}),("center bottom"==f||"bottom center"==f)&&c.css({position:"absolute",bottom:"0px",left:b.width/2-d/2+"px"}),("right top"==f||"top right"==f)&&c.css({position:"absolute",top:"0px",right:"0px"}),("right bottom"==f||"bottom right"==f)&&c.css({position:"absolute",bottom:"0px",right:"0px"}),("right center"==f||"center right"==f)&&c.css({position:"absolute",top:b.height/2-e/2+"px",right:"0px"}),("left bottom"==f||"bottom left"==f)&&c.css({position:"absolute",bottom:"0px",left:"0px"}),("left center"==f||"center left"==f)&&c.css({position:"absolute",top:b.height/2-e/2+"px",left:"0px"})},20)}},v=function(b,c,d){d.find(".slot").each(function(){a(this).remove()}),c.transition=0},w=function(c,d){c.find("img, .defaultimg").each(function(){var e=a(this),f=e.data("lazyload");if(f!=e.attr("src")&&3>d&&f!=b&&"undefined"!=f){if(f!=b&&"undefined"!=f){e.attr("src",f);var g=new Image;g.onload=function(){e.data("lazydone",1),e.hasClass("defaultimg")&&x(e,g)},g.error=function(){e.data("lazydone",1)},g.src=e.attr("src"),g.complete&&(e.hasClass("defaultimg")&&x(e,g),e.data("lazydone",1))}}else if((f===b||"undefined"===f)&&1!=e.data("lazydone")){var g=new Image;g.onload=function(){e.hasClass("defaultimg")&&x(e,g),e.data("lazydone",1)},g.error=function(){e.data("lazydone",1)},g.src=e.attr("src")!=b&&"undefined"!=e.attr("src")?e.attr("src"):e.data("src"),g.complete&&(e.hasClass("defaultimg")&&x(e,g),e.data("lazydone",1))}})},x=function(a,b){var c=a.closest("li"),d=b.width,e=b.height;c.data("owidth",d),c.data("oheight",e),c.find(".slotholder").data("owidth",d),c.find(".slotholder").data("oheight",e),c.data("loadeddone",1)},y=function(c,d,e){w(c,0);var f=setInterval(function(){e.bannertimeronpause=!0,e.container.trigger("stoptimer"),e.cd=0;var g=0;c.find("img, .defaultimg").each(function(){1!=a(this).data("lazydone")&&g++}),g>0?w(c,g):(clearInterval(f),d!=b&&d())},100)},z=function(a,c){try{a.find(">ul:first-child >li:eq("+c.act+")")}catch(e){a.find(">ul:first-child >li:eq(1)")}c.lastslide=c.act;var f=a.find(">ul:first-child >li:eq("+c.next+")"),g=f.find(".defaultimg");c.bannertimeronpause=!0,a.trigger("stoptimer"),c.cd=0,g.data("lazyload")!=b&&"undefined"!=g.data("lazyload")&&1!=g.data("lazydone")?(i(8)?g.attr("src",f.find(".defaultimg").data("lazyload")):g.css({backgroundImage:'url("'+f.find(".defaultimg").data("lazyload")+'")'}),g.data("src",f.find(".defaultimg").data("lazyload")),g.data("lazydone",0),g.data("orgw",0),f.data("loadeddone",1),a.find(".tp-loader").css({display:"block"}),y(a.find(".tp-static-layers"),function(){y(f,function(){var b=f.find(".slotholder");if("on"==b.data("kenburns"))var d=setInterval(function(){var e=b.data("owidth");e>=0&&(clearInterval(d),A(c,g,a))},10);else A(c,g,a)},c)},c)):f.data("loadeddone")===b?(f.data("loadeddone",1),y(f,function(){A(c,g,a)},c)):A(c,g,a)},A=function(a,b,c){a.bannertimeronpause=!1,a.cd=0,c.trigger("nulltimer"),c.find(".tp-loader").css({display:"none"}),r(b,a),p(c,a),r(b,a),B(c,a)},B=function(a,c){a.trigger("revolution.slide.onbeforeswap"),c.transition=1,c.videoplaying=!1;try{var d=a.find(">ul:first-child >li:eq("+c.act+")")}catch(e){var d=a.find(">ul:first-child >li:eq(1)")}c.lastslide=c.act;var f=a.find(">ul:first-child >li:eq("+c.next+")");setTimeout(function(){q(c)},200);var g=d.find(".slotholder"),h=f.find(".slotholder");("on"==h.data("kenburns")||"on"==g.data("kenburns"))&&(_(a,c),a.find(".kenburnimg").remove()),f.data("delay")!=b?(c.cd=0,c.delay=f.data("delay")):c.delay=c.origcd,1==c.firststart&&punchgs.TweenLite.set(d,{autoAlpha:0}),punchgs.TweenLite.set(d,{zIndex:18}),punchgs.TweenLite.set(f,{autoAlpha:0,zIndex:20});var i=0;d.index()!=f.index()&&1!=c.firststart&&(i=R(d,c)),"on"!=d.data("saveperformance")&&(i=0),setTimeout(function(){a.trigger("restarttimer"),C(a,c,f,d,g,h)},i)},C=function(c,d,e,f,g,h){function x(){a.each(o,function(a,b){(b[0]==m||b[8]==m)&&(j=b[1],n=b[2],r=s),s+=1})}"prepared"==e.data("differentissplayed")&&(e.data("differentissplayed","done"),e.data("transition",e.data("savedtransition")),e.data("slotamount",e.data("savedslotamount")),e.data("masterspeed",e.data("savedmasterspeed"))),e.data("fstransition")!=b&&"done"!=e.data("differentissplayed")&&(e.data("savedtransition",e.data("transition")),e.data("savedslotamount",e.data("slotamount")),e.data("savedmasterspeed",e.data("masterspeed")),e.data("transition",e.data("fstransition")),e.data("slotamount",e.data("fsslotamount")),e.data("masterspeed",e.data("fsmasterspeed")),e.data("differentissplayed","prepared")),c.find(".active-revslide").removeClass(".active-revslide"),e.addClass("active-revslide"),e.data("transition")==b&&e.data("transition","random");var j=0,k=e.data("transition").split(","),l=e.data("nexttransid")==b?-1:e.data("nexttransid");"on"==e.data("randomtransition")?l=Math.round(Math.random()*k.length):l+=1,l==k.length&&(l=0),e.data("nexttransid",l);var m=k[l];d.ie&&("boxfade"==m&&(m="boxslide"),"slotfade-vertical"==m&&(m="slotzoom-vertical"),"slotfade-horizontal"==m&&(m="slotzoom-horizontal")),i(8)&&(m=11);var n=0;"scroll"==d.parallax&&d.parallaxFirstGo==b&&(d.parallaxFirstGo=!0,bb(c,d),setTimeout(function(){bb(c,d)},210),setTimeout(function(){bb(c,d)},420)),"slidehorizontal"==m&&(m="slideleft",1==d.leftarrowpressed&&(m="slideright")),"slidevertical"==m&&(m="slideup",1==d.leftarrowpressed&&(m="slidedown")),"parallaxhorizontal"==m&&(m="parallaxtoleft",1==d.leftarrowpressed&&(m="parallaxtoright")),"parallaxvertical"==m&&(m="parallaxtotop",1==d.leftarrowpressed&&(m="parallaxtobottom"));var o=[["boxslide",0,1,10,0,"box",!1,null,0],["boxfade",1,0,10,0,"box",!1,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4],["curtain-2",5,3,0,0,"horizontal",!0,!0,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10],["fade",11,0,1,300,"horizontal",!0,null,11],["slideleft",12,0,1,0,"horizontal",!0,!0,12],["slideup",13,0,1,0,"horizontal",!0,!0,13],["slidedown",14,0,1,0,"horizontal",!0,!0,14],["slideright",15,0,1,0,"horizontal",!0,!0,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18],["cubic",19,0,20,600,"horizontal",!1,!0,19],["cube",19,0,20,600,"horizontal",!1,!0,20],["flyin",20,0,4,600,"vertical",!1,!0,21],["turnoff",21,0,1,1600,"horizontal",!1,!0,22],["incube",22,0,20,200,"horizontal",!1,!0,23],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27],["fadefromright",12,1,1,0,"horizontal",!0,!0,28],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",!0,!0,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43],["zoomout",13,5,1,0,"horizontal",!0,!0,44],["zoomin",13,6,1,0,"horizontal",!0,!0,45],["notransition",26,0,1,0,"horizontal",!0,null,46]],p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],q=[16,17,18,19,20,21,22,23,24,25,26,27],j=0,n=1,r=0,s=0,u=new Array;"on"==h.data("kenburns")&&(("boxslide"==m||0==m||"boxfade"==m||1==m||"papercut"==m||16==m)&&(m=11),Y(c,d,!0,!0)),"random"==m&&(m=Math.round(Math.random()*o.length-1),m>o.length-1&&(m=o.length-1)),"random-static"==m&&(m=Math.round(Math.random()*p.length-1),m>p.length-1&&(m=p.length-1),m=p[m]),"random-premium"==m&&(m=Math.round(Math.random()*q.length-1),m>q.length-1&&(m=q.length-1),m=q[m]);var v=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==d.isJoomla&&window.MooTools!=b&&-1!=v.indexOf(m)){var w=Math.round(Math.random()*(q.length-2))+1;w>q.length-1&&(w=q.length-1),0==w&&(w=1),m=q[w]}x(),i(8)&&j>15&&28>j&&(m=Math.round(Math.random()*p.length-1),m>p.length-1&&(m=p.length-1),m=p[m],s=0,x());var y=-1;(1==d.leftarrowpressed||d.act>d.next)&&(y=1),d.leftarrowpressed=0,j>26&&(j=26),0>j&&(j=0);var z=300;e.data("masterspeed")!=b&&e.data("masterspeed")>99&&e.data("masterspeed")<d.delay&&(z=e.data("masterspeed")),e.data("masterspeed")!=b&&e.data("masterspeed")>d.delay&&(z=d.delay),u=o[r],c.parent().find(".bullet").each(function(){var b=a(this),c=b.index();b.removeClass("selected"),("withbullet"==d.navigationArrows||"nexttobullets"==d.navigationArrows)&&(c=b.index()-1),c==d.next&&b.addClass("selected")});var A=new punchgs.TimelineLite({onComplete:function(){D(c,d,h,g,e,f,A)}});if(A.add(punchgs.TweenLite.set(h.find(".defaultimg"),{opacity:0})),A.pause(),e.data("slotamount")==b||e.data("slotamount")<1?(d.slots=Math.round(12*Math.random()+4),"boxslide"==m?d.slots=Math.round(6*Math.random()+3):"flyin"==m&&(d.slots=Math.round(4*Math.random()+1))):d.slots=e.data("slotamount"),d.rotate=e.data("rotate")==b?0:999==e.data("rotate")?Math.round(360*Math.random()):e.data("rotate"),(!a.support.transition||d.ie||d.ie9)&&(d.rotate=0),1==d.firststart&&(d.firststart=0),z+=u[4],(4==j||5==j||6==j)&&d.slots<3&&(d.slots=3),0!=u[3]&&(d.slots=Math.min(d.slots,u[3])),9==j&&(d.slots=d.width/20),10==j&&(d.slots=d.height/20),null!=u[7]&&t(g,d,u[7],u[5]),null!=u[6]&&t(h,d,u[6],u[5]),0==j){var B=Math.ceil(d.height/d.sloth),C=0;h.find(".slotslide").each(function(b){var c=a(this);C+=1,C==B&&(C=0),A.add(punchgs.TweenLite.from(c,z/600,{opacity:0,top:0-d.sloth,left:0-d.slotw,rotation:d.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),(15*b+30*C)/1500)})}if(1==j){var E,F=0;h.find(".slotslide").each(function(b){var c=a(this),e=Math.random()*z+300,f=500*Math.random()+200;e+f>E&&(E=f+f,F=b),A.add(punchgs.TweenLite.from(c,e/1e3,{autoAlpha:0,force3D:"auto",rotation:d.rotate,ease:punchgs.Power2.easeInOut}),f/1e3)})}if(2==j){var G=new punchgs.TimelineLite;g.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.to(b,z/1e3,{left:d.slotw,force3D:"auto",rotation:0-d.rotate}),0),A.add(G,0)}),h.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.from(b,z/1e3,{left:0-d.slotw,force3D:"auto",rotation:d.rotate}),0),A.add(G,0)})}if(3==j){var G=new punchgs.TimelineLite;g.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.to(b,z/1e3,{top:d.sloth,rotation:d.rotate,force3D:"auto",transformPerspective:600}),0),A.add(G,0)}),h.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.from(b,z/1e3,{top:0-d.sloth,rotation:d.rotate,ease:punchgs.Power2.easeOut,force3D:"auto",transformPerspective:600}),0),A.add(G,0)})}if(4==j||5==j){setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var H=z/1e3,G=new punchgs.TimelineLite;g.find(".slotslide").each(function(b){var c=a(this),e=b*H/d.slots;5==j&&(e=(d.slots-b-1)*H/d.slots/1.5),G.add(punchgs.TweenLite.to(c,3*H,{transformPerspective:600,force3D:"auto",top:0+d.height,opacity:.5,rotation:d.rotate,ease:punchgs.Power2.easeInOut,delay:e}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this),e=b*H/d.slots;5==j&&(e=(d.slots-b-1)*H/d.slots/1.5),G.add(punchgs.TweenLite.from(c,3*H,{top:0-d.height,opacity:.5,rotation:d.rotate,force3D:"auto",ease:punchgs.Power2.easeInOut,delay:e}),0),A.add(G,0)})}if(6==j){d.slots<2&&(d.slots=2),d.slots%2&&(d.slots=d.slots+1);var G=new punchgs.TimelineLite;setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100),g.find(".slotslide").each(function(b){var c=a(this);if(b+1<d.slots/2)var e=90*(b+2);else var e=90*(2+d.slots-b);G.add(punchgs.TweenLite.to(c,(z+e)/1e3,{top:0+d.height,opacity:1,force3D:"auto",rotation:d.rotate,ease:punchgs.Power2.easeInOut}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this);if(b+1<d.slots/2)var e=90*(b+2);else var e=90*(2+d.slots-b);G.add(punchgs.TweenLite.from(c,(z+e)/1e3,{top:0-d.height,opacity:1,force3D:"auto",rotation:d.rotate,ease:punchgs.Power2.easeInOut}),0),A.add(G,0)})}if(7==j){z=2*z,z>d.delay&&(z=d.delay);var G=new punchgs.TimelineLite;setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100),g.find(".slotslide").each(function(){var b=a(this).find("div");G.add(punchgs.TweenLite.to(b,z/1e3,{left:0-d.slotw/2+"px",top:0-d.height/2+"px",width:2*d.slotw+"px",height:2*d.height+"px",opacity:0,rotation:d.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this).find("div");G.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-b*d.slotw+"px",ease:punchgs.Power2.easeOut,force3D:"auto",top:"0px",width:d.width,height:d.height,opacity:1,rotation:0,delay:.1}),0),A.add(G,0)})}if(8==j){z=3*z,z>d.delay&&(z=d.delay);var G=new punchgs.TimelineLite;g.find(".slotslide").each(function(){var b=a(this).find("div");G.add(punchgs.TweenLite.to(b,z/1e3,{left:0-d.width/2+"px",top:0-d.sloth/2+"px",width:2*d.width+"px",height:2*d.sloth+"px",force3D:"auto",opacity:0,rotation:d.rotate}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this).find("div");G.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-b*d.sloth+"px",width:h.find(".defaultimg").data("neww")+"px",height:h.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0}),0),A.add(G,0)})}if(9==j||10==j){var J=0;h.find(".slotslide").each(function(b){var c=a(this);J++,A.add(punchgs.TweenLite.fromTo(c,z/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:punchgs.Power2.easeInOut,delay:5*b/1e3}),0)})}if(11==j||26==j){var J=0;26==j&&(z=0),h.find(".slotslide").each(function(){var c=a(this);A.add(punchgs.TweenLite.from(c,z/1e3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power2.easeInOut}),0)})}if(12==j||13==j||14==j||15==j){z=z,z>d.delay&&(z=d.delay),setTimeout(function(){punchgs.TweenLite.set(g.find(".defaultimg"),{autoAlpha:0})},100);var K=d.width,M=d.height,N=h.find(".slotslide"),O=0,P=0,Q=1,R=1,S=1,T=punchgs.Power2.easeInOut,U=punchgs.Power2.easeInOut,V=z/1e3,W=V;("on"==d.fullWidth||"on"==d.fullScreen)&&(K=N.width(),M=N.height()),12==j?O=K:15==j?O=0-K:13==j?P=M:14==j&&(P=0-M),1==n&&(Q=0),2==n&&(Q=0),3==n&&(T=punchgs.Power2.easeInOut,U=punchgs.Power1.easeInOut,V=z/1200),(4==n||5==n)&&(R=.6),6==n&&(R=1.4),(5==n||6==n)&&(S=1.4,Q=0,K=0,M=0,O=0,P=0),6==n&&(S=.6),A.add(punchgs.TweenLite.from(N,V,{left:O,top:P,scale:S,opacity:Q,rotation:d.rotate,ease:U,force3D:"auto"}),0);var Z=g.find(".slotslide");if((4==n||5==n)&&(K=0,M=0),1!=n)switch(j){case 12:A.add(punchgs.TweenLite.to(Z,W,{left:0-K+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0);break;case 15:A.add(punchgs.TweenLite.to(Z,W,{left:K+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0);break;case 13:A.add(punchgs.TweenLite.to(Z,W,{top:0-M+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0);break;case 14:A.add(punchgs.TweenLite.to(Z,W,{top:M+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0)}}if(16==j){var G=new punchgs.TimelineLite;A.add(punchgs.TweenLite.set(f,{position:"absolute","z-index":20}),0),A.add(punchgs.TweenLite.set(e,{position:"absolute","z-index":15}),0),f.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),f.find(".tp-half-one").clone(!0).appendTo(f).addClass("tp-half-two"),f.find(".tp-half-two").removeClass("tp-half-one");var K=d.width,M=d.height;"on"==d.autoHeight&&(M=c.height()),f.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+K+"px;height:"+M+'px;"></div>'),f.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+K+"px;height:"+M+'px;"></div>'),f.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),f.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),A.add(punchgs.TweenLite.set(f.find(".tp-half-two"),{width:K,height:M,overflow:"hidden",zIndex:15,position:"absolute",top:M/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),A.add(punchgs.TweenLite.set(f.find(".tp-half-one"),{width:K,height:M/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var _=(f.find(".defaultimg"),Math.round(20*Math.random()-10)),ab=Math.round(20*Math.random()-10),cb=Math.round(20*Math.random()-10),db=.4*Math.random()-.2,eb=.4*Math.random()-.2,fb=1*Math.random()+1,gb=1*Math.random()+1,hb=.3*Math.random()+.3;A.add(punchgs.TweenLite.set(f.find(".tp-half-one"),{overflow:"hidden"}),0),A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-one"),z/800,{width:K,height:M/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:fb,rotation:_,y:0-M-M/4,autoAlpha:0,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-two"),z/800,{width:K,height:M,overflow:"hidden",position:"absolute",top:M/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:gb,rotation:ab,y:M+M/4,ease:punchgs.Power2.easeInOut,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(f,{position:"absolute","z-index":15}),punchgs.TweenLite.set(e,{position:"absolute","z-index":20}),f.find(".tp-half-one").length>0&&(f.find(".tp-half-one .defaultimg").unwrap(),f.find(".tp-half-one .slotholder").unwrap()),f.find(".tp-half-two").remove()}}),0),G.add(punchgs.TweenLite.set(h.find(".defaultimg"),{autoAlpha:1}),0),null!=f.html()&&A.add(punchgs.TweenLite.fromTo(e,(z-200)/1e3,{scale:hb,x:d.width/4*db,y:M/4*eb,rotation:cb,force3D:"auto",transformOrigin:"center center",ease:punchgs.Power2.easeOut},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),A.add(G,0)}if(17==j&&h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:.06*b}),0)}),18==j&&h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/500,{autoAlpha:0,rotationY:310,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:.06*b}),0)}),19==j||22==j){var G=new punchgs.TimelineLite;A.add(punchgs.TweenLite.set(f,{zIndex:20}),0),A.add(punchgs.TweenLite.set(e,{zIndex:20}),0),setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var kb=(e.css("z-index"),f.css("z-index"),90),Q=1,lb="center center ";1==y&&(kb=-90),19==j?(lb=lb+"-"+d.height/2,Q=0):lb+=d.height/2,punchgs.TweenLite.set(c,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),h.find(".slotslide").each(function(b){var c=a(this);G.add(punchgs.TweenLite.fromTo(c,z/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:d.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationX:kb},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),G.add(punchgs.TweenLite.to(c,.1,{autoAlpha:1,delay:50*b/1e3}),0),A.add(G)}),g.find(".slotslide").each(function(b){var c=a(this),e=-90;1==y&&(e=90),G.add(punchgs.TweenLite.fromTo(c,z/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationX:0},{autoAlpha:1,rotationY:d.rotate,top:0,z:10,scale:1,rotationX:e,delay:50*b/1e3,force3D:"auto",ease:punchgs.Power2.easeInOut}),0),A.add(G)})}if(20==j){if(setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100),e.css("z-index"),f.css("z-index"),1==y)var mb=-d.width,kb=70,lb="left center -"+d.height/2;else var mb=d.width,kb=-70,lb="right center -"+d.height/2;h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1500,{left:mb,rotationX:40,z:-600,opacity:Q,top:0,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:kb},{left:0,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.fromTo(c,z/1e3,{rotationX:40,z:-600,opacity:Q,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:kb},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.to(c,.1,{opacity:1,force3D:"auto",delay:50*b/1e3+z/2e3}),0)}),g.find(".slotslide").each(function(b){var c=a(this);if(1!=y)var e=-d.width,f=70,g="left center -"+d.height/2;else var e=d.width,f=-70,g="right center -"+d.height/2;A.add(punchgs.TweenLite.fromTo(c,z/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:g,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:e,force3D:"auto",scale:.8,rotationY:f,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.to(c,.1,{force3D:"auto",opacity:0,delay:50*b/1e3+(z/1e3-z/1e4)}),0)})}if(21==j||25==j){setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var kb=(e.css("z-index"),f.css("z-index"),90),mb=-d.width,nb=-kb;if(1==y)if(25==j){var lb="center top 0";kb=d.rotate}else{var lb="left center 0";nb=d.rotate}else if(mb=d.width,kb=-90,25==j){var lb="center bottom 0";nb=-kb,kb=d.rotate}else{var lb="right center 0";nb=d.rotate}h.find(".slotslide").each(function(){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,transformStyle:"flat",rotationX:nb,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:kb},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),0)}),1!=y?(mb=-d.width,kb=90,25==j?(lb="center top 0",nb=-kb,kb=d.rotate):(lb="left center 0",nb=d.rotate)):(mb=d.width,kb=-90,25==j?(lb="center bottom 0",nb=-kb,kb=d.rotate):(lb="right center 0",nb=d.rotate)),g.find(".slotslide").each(function(){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:0},{left:0,rotationX:nb,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:kb,ease:punchgs.Power1.easeInOut}),0)})}if(23==j||24==j){setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var kb=(e.css("z-index"),f.css("z-index"),-90),Q=1,ob=0;if(1==y&&(kb=90),23==j){var lb="center center -"+d.width/2;Q=0}else var lb="center center "+d.width/2;punchgs.TweenLite.set(c,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:ob,rotationX:d.rotate,force3D:"auto",opacity:Q,top:0,scale:1,transformPerspective:600,transformOrigin:lb,rotationY:kb},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*b/500,ease:punchgs.Power2.easeInOut}),0)}),kb=90,1==y&&(kb=-90),g.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,autoAlpha:1,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:0},{left:ob,autoAlpha:1,rotationX:d.rotate,top:0,scale:1,rotationY:kb,delay:50*b/500,ease:punchgs.Power2.easeInOut}),0)})}A.pause(),L(e,d,null,A),punchgs.TweenLite.to(e,.001,{autoAlpha:1});var pb={};pb.slideIndex=d.next+1,pb.slide=e,c.trigger("revolution.slide.onchange",pb),setTimeout(function(){c.trigger("revolution.slide.onafterswap")},z),c.trigger("revolution.slide.onvideostop")},D=function(a,b,c,d,e,f,g){punchgs.TweenLite.to(c.find(".defaultimg"),.001,{autoAlpha:1,onComplete:function(){v(a,b,e)}}),e.index()!=f.index()&&punchgs.TweenLite.to(f,.2,{autoAlpha:0,onComplete:function(){v(a,b,f)}}),b.act=b.next,"thumb"==b.navigationType&&db(a),"on"==c.data("kenburns")&&Y(a,b),a.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"),e.addClass("current-sr-slide-visible"),("scroll"==b.parallax||"scroll+mouse"==b.parallax||"mouse+scroll"==b.parallax)&&bb(a,b),g.clear()},E=function(b){var c=b.target.getVideoEmbedCode(),d=a("#"+c.split('id="')[1].split('"')[0]),e=d.closest(".tp-simpleresponsive"),f=d.parent().data("player");if(b.data==YT.PlayerState.PLAYING){var g=e.find(".tp-bannertimer"),h=g.data("opt");"mute"==d.closest(".tp-caption").data("volume")&&f.mute(),h.videoplaying=!0,e.trigger("stoptimer"),e.trigger("revolution.slide.onvideoplay")}else{var g=e.find(".tp-bannertimer"),h=g.data("opt");-1!=b.data&&3!=b.data&&(h.videoplaying=!1,e.trigger("starttimer"),e.trigger("revolution.slide.onvideostop")),0==b.data&&1==h.nextslideatend?h.container.revnext():(h.videoplaying=!1,e.trigger("starttimer"),e.trigger("revolution.slide.onvideostop"))}},F=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent(b,c,!1)},G=function(b,c){var d=$f(b),e=a("#"+b),f=e.closest(".tp-simpleresponsive"),g=e.closest(".tp-caption");setTimeout(function(){d.addEvent("ready",function(){c&&d.api("play"),d.addEvent("play",function(){var b=f.find(".tp-bannertimer"),c=b.data("opt");c.videoplaying=!0,f.trigger("stoptimer"),"mute"==g.data("volume")&&d.api("setVolume","0")}),d.addEvent("finish",function(){var b=f.find(".tp-bannertimer"),c=b.data("opt");c.videoplaying=!1,f.trigger("starttimer"),f.trigger("revolution.slide.onvideoplay"),1==c.nextslideatend&&c.container.revnext()}),d.addEvent("pause",function(){var b=f.find(".tp-bannertimer"),c=b.data("opt");c.videoplaying=!1,f.trigger("starttimer"),f.trigger("revolution.slide.onvideostop")}),g.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(a(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),d.api("play")})})},150)},H=function(a,c){var d=c.width(),e=c.height(),f=a.data("mediaAspect");f==b&&(f=1);var g=d/e;a.css({position:"absolute"}),a.find("video"),f>g?punchgs.TweenLite.to(a,1e-4,{width:e*f,force3D:"auto",top:0,left:0-(e*f-d)/2,height:e}):punchgs.TweenLite.to(a,1e-4,{width:d,force3D:"auto",top:0-(d/f-e)/2,left:0,height:d/f})},I=function(){var a=new Object;return a.x=0,a.y=0,a.rotationX=0,a.rotationY=0,a.rotationZ=0,a.scale=1,a.scaleX=1,a.scaleY=1,a.skewX=0,a.skewY=0,a.opacity=0,a.transformOrigin="center, center",a.transformPerspective=400,a.rotation=0,a},J=function(b,c){var d=c.split(";");return a.each(d,function(a,c){c=c.split(":");var d=c[0],e=c[1];"rotationX"==d&&(b.rotationX=parseInt(e,0)),"rotationY"==d&&(b.rotationY=parseInt(e,0)),"rotationZ"==d&&(b.rotationZ=parseInt(e,0)),"rotationZ"==d&&(b.rotation=parseInt(e,0)),"scaleX"==d&&(b.scaleX=parseFloat(e)),"scaleY"==d&&(b.scaleY=parseFloat(e)),"opacity"==d&&(b.opacity=parseFloat(e)),"skewX"==d&&(b.skewX=parseInt(e,0)),"skewY"==d&&(b.skewY=parseInt(e,0)),"x"==d&&(b.x=parseInt(e,0)),"y"==d&&(b.y=parseInt(e,0)),"z"==d&&(b.z=parseInt(e,0)),"transformOrigin"==d&&(b.transformOrigin=e.toString()),"transformPerspective"==d&&(b.transformPerspective=parseInt(e,0))
}),b},K=function(b){var c=b.split("animation:"),d=new Object;d.animation=J(I(),c[1]);var e=c[0].split(";");return a.each(e,function(a,b){b=b.split(":");var c=b[0],e=b[1];"typ"==c&&(d.typ=e),"speed"==c&&(d.speed=parseInt(e,0)/1e3),"start"==c&&(d.start=parseInt(e,0)/1e3),"elementdelay"==c&&(d.elementdelay=parseFloat(e)),"ease"==c&&(d.ease=e)}),d},L=function(c,d,e,f){function g(){}function h(){}c.data("ctl")==b&&c.data("ctl",new punchgs.TimelineLite);var j=c.data("ctl"),k=0,l=0,m=c.find(".tp-caption"),n=d.container.find(".tp-static-layers").find(".tp-caption");j.pause(),a.each(n,function(a,b){m.push(b)}),m.each(function(c){var f=e,j=-1,m=a(this);if(m.hasClass("tp-static-layer")){var n=m.data("startslide"),o=m.data("endslide");(-1==n||"-1"==n)&&m.data("startslide",0),(-1==o||"-1"==o)&&m.data("endslide",d.slideamount),0==n&&o==d.slideamount-1&&m.data("endslide",d.slideamount+1),n=m.data("startslide"),o=m.data("endslide"),m.hasClass("tp-is-shown")?j=o==d.next||n>d.next||o<d.next?2:0:n<=d.next&&o>=d.next||n==d.next||o==d.next?(m.addClass("tp-is-shown"),j=1):j=0}k=d.width/2-d.startwidth*d.bw/2;var p=d.bw;d.bh,"on"==d.fullScreen&&(l=d.height/2-d.startheight*d.bh/2),("on"==d.autoHeight||d.minHeight!=b&&d.minHeight>0)&&(l=d.container.height()/2-d.startheight*d.bh/2),0>l&&(l=0);var r=0;if(d.width<d.hideCaptionAtLimit&&"on"==m.data("captionhidden")?(m.addClass("tp-hidden-caption"),r=1):d.width<d.hideAllCaptionAtLimit||d.width<d.hideAllCaptionAtLilmit?(m.addClass("tp-hidden-caption"),r=1):m.removeClass("tp-hidden-caption"),0==r){if(m.data("linktoslide")==b||m.hasClass("hasclicklistener")||(m.addClass("hasclicklistener"),m.css({cursor:"pointer"}),"no"!=m.data("linktoslide")&&m.click(function(){var b=a(this),c=b.data("linktoslide");"next"!=c&&"prev"!=c?(d.container.data("showus",c),d.container.parent().find(".tp-rightarrow").click()):"next"==c?d.container.parent().find(".tp-rightarrow").click():"prev"==c&&d.container.parent().find(".tp-leftarrow").click()})),0>k&&(k=0),m.hasClass("tp-videolayer")||m.find("iframe").length>0||m.find("video").length>0){var s="iframe"+Math.round(1e5*Math.random()+1),t=m.data("videowidth"),u=m.data("videoheight"),v=m.data("videoattributes"),w=m.data("ytid"),x=m.data("vimeoid"),y=m.data("videpreload"),z=m.data("videomp4"),A=m.data("videowebm"),B=m.data("videoogv"),C=m.data("videocontrols"),D="http",L="loop"==m.data("videoloop")?"loop":"loopandnoslidestop"==m.data("videoloop")?"loop":"";if(m.data("thumbimage")!=b&&m.data("videoposter")==b&&m.data("videoposter",m.data("thumbimage")),w!=b&&String(w).length>1&&0==m.find("iframe").length&&(D="https","none"==C&&(v=v.replace("controls=1","controls=0"),-1==v.toLowerCase().indexOf("controls")&&(v+="&controls=0")),m.append('<iframe style="visible:hidden" src="'+D+"://www.youtube.com/embed/"+w+"?"+v+'" width="'+t+'" height="'+u+'" style="width:'+t+"px;height:"+u+'px"></iframe>')),x!=b&&String(x).length>1&&0==m.find("iframe").length&&("https:"===location.protocol&&(D="https"),m.append('<iframe style="visible:hidden" src="'+D+"://player.vimeo.com/video/"+x+"?"+v+'" width="'+t+'" height="'+u+'" style="width:'+t+"px;height:"+u+'px"></iframe>')),(z!=b||A!=b)&&0==m.find("video").length){"controls"!=C&&(C="");var N='<video style="visible:hidden" class="" '+L+' preload="'+y+'" width="'+t+'" height="'+u+'"';m.data("videoposter")!=b&&m.data("videoposter")!=b&&(N=N+'poster="'+m.data("videoposter")+'">'),A!=b&&"firefox"==M().toLowerCase()&&(N=N+'<source src="'+A+'" type="video/webm" />'),z!=b&&(N=N+'<source src="'+z+'" type="video/mp4" />'),B!=b&&(N=N+'<source src="'+B+'" type="video/ogg" />'),N+="</video>",m.append(N),"controls"==C&&m.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')}var R=!1;(1==m.data("autoplayonlyfirsttime")||"true"==m.data("autoplayonlyfirsttime")||1==m.data("autoplay"))&&(m.data("autoplay",!0),R=!0),m.find("iframe").each(function(){var c=a(this);if(punchgs.TweenLite.to(c,.1,{autoAlpha:1,zIndex:0,transformStyle:"preserve-3d",z:0,rotationX:0,force3D:"auto"}),W()){var g=c.attr("src");c.attr("src",""),c.attr("src",g)}if(d.nextslideatend=m.data("nextslideatend"),m.data("videoposter")!=b&&m.data("videoposter").length>2&&1!=m.data("autoplay")&&!f&&(0==m.find(".tp-thumb-image").length?m.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+m.data("videoposter")+'); background-size:cover"></div>'):punchgs.TweenLite.set(m.find(".tp-thumb-image"),{autoAlpha:1})),c.attr("src").toLowerCase().indexOf("youtube")>=0)if(c.hasClass("HasListener")){if(!e){var h=m.data("player");"on"!=m.data("forcerewind")||W()||h.seekTo(0),(!W()&&1==m.data("autoplay")||R)&&m.data("timerplay",setTimeout(function(){h.playVideo()},m.data("start")))}}else try{c.attr("id",s);var h,i=setInterval(function(){YT!=b&&typeof YT.Player!=b&&"undefined"!=typeof YT.Player&&(h=new YT.Player(s,{events:{onStateChange:E,onReady:function(c){var d=c.target.getVideoEmbedCode(),e=a("#"+d.split('id="')[1].split('"')[0]),f=e.closest(".tp-caption"),g=f.data("videorate");f.data("videostart"),g!=b&&c.target.setPlaybackRate(parseFloat(g)),(!W()&&1==f.data("autoplay")||R)&&f.data("timerplay",setTimeout(function(){c.target.playVideo()},f.data("start"))),f.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(a(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),W()||h.playVideo()})}}})),c.addClass("HasListener"),m.data("player",h),clearInterval(i)},100)}catch(j){}else if(c.attr("src").toLowerCase().indexOf("vimeo")>=0)if(c.hasClass("HasListener")){if(!(e||W()||1!=m.data("autoplay")&&"on"!=m.data("forcerewind"))){var c=m.find("iframe"),r=c.attr("id"),t=$f(r);"on"==m.data("forcerewind")&&t.api("seekTo",0),m.data("timerplay",setTimeout(function(){1==m.data("autoplay")&&t.api("play")},m.data("start")))}}else{c.addClass("HasListener"),c.attr("id",s);for(var p,k=c.attr("src"),l={},n=k,o=/([^&=]+)=([^&]*)/g;p=o.exec(n);)l[decodeURIComponent(p[1])]=decodeURIComponent(p[2]);k=l.player_id!=b?k.replace(l.player_id,s):k+"&player_id="+s;try{k=k.replace("api=0","api=1")}catch(j){}k+="&api=1",c.attr("src",k);var h=m.find("iframe")[0],q=setInterval(function(){$f!=b&&typeof $f(s).api!=b&&"undefined"!=typeof $f(s).api&&($f(h).addEvent("ready",function(){G(s,R)}),clearInterval(q))},100)}}),(W()&&1==m.data("disablevideoonmobile")||i(8))&&m.find("video").remove(),m.find("video").length>0&&m.find("video").each(function(){var e=this,f=a(this);f.parent().hasClass("html5vid")||f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');var g=f.parent();F(e,"loadedmetadata",function(a){a.data("metaloaded",1)}(g)),clearInterval(g.data("interval")),g.data("interval",setInterval(function(){if(1==g.data("metaloaded")||0/0!=e.duration){if(clearInterval(g.data("interval")),!g.hasClass("HasListener")){g.addClass("HasListener"),"none"!=m.data("dottedoverlay")&&m.data("dottedoverlay")!=b&&1!=m.find(".tp-dottedoverlay").length&&g.append('<div class="tp-dottedoverlay '+m.data("dottedoverlay")+'"></div>'),f.attr("control")==b&&(0==g.find(".tp-video-play-button").length&&g.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'),g.find("video, .tp-poster, .tp-video-play-button").click(function(){g.hasClass("videoisplaying")?e.pause():e.play()})),(1==m.data("forcecover")||m.hasClass("fullscreenvideo"))&&(1==m.data("forcecover")&&(H(g,d.container),g.addClass("fullcoveredvideo"),m.addClass("fullcoveredvideo")),g.css({width:"100%",height:"100%"}));var a=m.find(".tp-vid-play-pause")[0],c=m.find(".tp-vid-mute")[0],h=m.find(".tp-vid-full-screen")[0],i=m.find(".tp-seek-bar")[0],j=m.find(".tp-volume-bar")[0];a!=b&&(F(a,"click",function(){1==e.paused?e.play():e.pause()}),F(c,"click",function(){0==e.muted?(e.muted=!0,c.innerHTML="Unmute"):(e.muted=!1,c.innerHTML="Mute")}),F(h,"click",function(){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}),F(i,"change",function(){var a=e.duration*(i.value/100);e.currentTime=a}),F(e,"timeupdate",function(){var a=100/e.duration*e.currentTime;i.value=a}),F(i,"mousedown",function(){e.pause()}),F(i,"mouseup",function(){e.play()}),F(j,"change",function(){e.volume=j.value})),F(e,"play",function(){"mute"==m.data("volume")&&(e.muted=!0),g.addClass("videoisplaying"),"loopandnoslidestop"==m.data("videoloop")?(d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop")):(d.videoplaying=!0,d.container.trigger("stoptimer"),d.container.trigger("revolution.slide.onvideoplay"));var a=m.find(".tp-vid-play-pause")[0],c=m.find(".tp-vid-mute")[0];a!=b&&(a.innerHTML="Pause"),c!=b&&e.muted&&(c.innerHTML="Unmute")}),F(e,"pause",function(){g.removeClass("videoisplaying"),d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop");var a=m.find(".tp-vid-play-pause")[0];a!=b&&(a.innerHTML="Play")}),F(e,"ended",function(){g.removeClass("videoisplaying"),d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop"),1==d.nextslideatend&&d.container.revnext()})}var k=!1;(1==m.data("autoplayonlyfirsttime")||"true"==m.data("autoplayonlyfirsttime"))&&(k=!0);var l=16/9;if("4:3"==m.data("aspectratio")&&(l=4/3),g.data("mediaAspect",l),1==g.closest(".tp-caption").data("forcecover")&&(H(g,d.container),g.addClass("fullcoveredvideo")),f.css({display:"block"}),d.nextslideatend=m.data("nextslideatend"),(1==m.data("autoplay")||1==k)&&("loopandnoslidestop"==m.data("videoloop")?(d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop")):(d.videoplaying=!0,d.container.trigger("stoptimer"),d.container.trigger("revolution.slide.onvideoplay")),"on"!=m.data("forcerewind")||g.hasClass("videoisplaying")||e.currentTime>0&&(e.currentTime=0),"mute"==m.data("volume")&&(e.muted=!0),g.data("timerplay",setTimeout(function(){"on"!=m.data("forcerewind")||g.hasClass("videoisplaying")||e.currentTime>0&&(e.currentTime=0),"mute"==m.data("volume")&&(e.muted=!0),e.play()},10+m.data("start")))),g.data("ww")==b&&g.data("ww",f.attr("width")),g.data("hh")==b&&g.data("hh",f.attr("height")),!m.hasClass("fullscreenvideo")&&1==m.data("forcecover"))try{g.width(g.data("ww")*d.bw),g.height(g.data("hh")*d.bh)}catch(n){}clearInterval(g.data("interval"))}}),100)}),1==m.data("autoplay")&&(setTimeout(function(){"loopandnoslidestop"!=m.data("videoloop")&&(d.videoplaying=!0,d.container.trigger("stoptimer"))},200),"loopandnoslidestop"!=m.data("videoloop")&&(d.videoplaying=!0,d.container.trigger("stoptimer")),(1==m.data("autoplayonlyfirsttime")||"true"==m.data("autoplayonlyfirsttime"))&&(m.data("autoplay",!1),m.data("autoplayonlyfirsttime",!1)))}var U=0,V=0;if(m.find("img").length>0){var X=m.find("img");0==X.width()&&X.css({width:"auto"}),0==X.height()&&X.css({height:"auto"}),X.data("ww")==b&&X.width()>0&&X.data("ww",X.width()),X.data("hh")==b&&X.height()>0&&X.data("hh",X.height());var Y=X.data("ww"),Z=X.data("hh");Y==b&&(Y=0),Z==b&&(Z=0),X.width(Y*d.bw),X.height(Z*d.bh),U=X.width(),V=X.height()}else if(m.find("iframe").length>0||m.find("video").length>0){var $=!1,X=m.find("iframe");0==X.length&&(X=m.find("video"),$=!0),X.css({display:"block"}),m.data("ww")==b&&m.data("ww",X.width()),m.data("hh")==b&&m.data("hh",X.height());var Y=m.data("ww"),Z=m.data("hh"),_=m;_.data("fsize")==b&&_.data("fsize",parseInt(_.css("font-size"),0)||0),_.data("pt")==b&&_.data("pt",parseInt(_.css("paddingTop"),0)||0),_.data("pb")==b&&_.data("pb",parseInt(_.css("paddingBottom"),0)||0),_.data("pl")==b&&_.data("pl",parseInt(_.css("paddingLeft"),0)||0),_.data("pr")==b&&_.data("pr",parseInt(_.css("paddingRight"),0)||0),_.data("mt")==b&&_.data("mt",parseInt(_.css("marginTop"),0)||0),_.data("mb")==b&&_.data("mb",parseInt(_.css("marginBottom"),0)||0),_.data("ml")==b&&_.data("ml",parseInt(_.css("marginLeft"),0)||0),_.data("mr")==b&&_.data("mr",parseInt(_.css("marginRight"),0)||0),_.data("bt")==b&&_.data("bt",parseInt(_.css("borderTop"),0)||0),_.data("bb")==b&&_.data("bb",parseInt(_.css("borderBottom"),0)||0),_.data("bl")==b&&_.data("bl",parseInt(_.css("borderLeft"),0)||0),_.data("br")==b&&_.data("br",parseInt(_.css("borderRight"),0)||0),_.data("lh")==b&&_.data("lh",parseInt(_.css("lineHeight"),0)||0),"auto"==_.data("lh")&&_.data("lh",_.data("fsize")+4);var ab=d.width,bb=d.height;if(ab>d.startwidth&&(ab=d.startwidth),bb>d.startheight&&(bb=d.startheight),m.hasClass("fullscreenvideo")){k=0,l=0,m.data("x",0),m.data("y",0);var cb=d.height;"on"==d.autoHeight&&(cb=d.container.height()),m.css({width:d.width,height:cb})}else m.css({"font-size":_.data("fsize")*d.bw+"px","padding-top":_.data("pt")*d.bh+"px","padding-bottom":_.data("pb")*d.bh+"px","padding-left":_.data("pl")*d.bw+"px","padding-right":_.data("pr")*d.bw+"px","margin-top":_.data("mt")*d.bh+"px","margin-bottom":_.data("mb")*d.bh+"px","margin-left":_.data("ml")*d.bw+"px","margin-right":_.data("mr")*d.bw+"px","border-top":_.data("bt")*d.bh+"px","border-bottom":_.data("bb")*d.bh+"px","border-left":_.data("bl")*d.bw+"px","border-right":_.data("br")*d.bw+"px","line-height":_.data("lh")*d.bh+"px",height:Z*d.bh+"px"});0==$?(X.width(Y*d.bw),X.height(Z*d.bh)):1==m.data("forcecover")||m.hasClass("fullscreenvideo")||(X.width(Y*d.bw),X.height(Z*d.bh)),U=X.width(),V=X.height()}else{m.find(".tp-resizeme, .tp-resizeme *").each(function(){O(a(this),d)}),m.hasClass("tp-resizeme")&&m.find("*").each(function(){O(a(this),d)}),O(m,d),V=m.outerHeight(!0),U=m.outerWidth(!0);var db=m.outerHeight(),eb=m.css("backgroundColor");m.find(".frontcorner").css({borderWidth:db+"px",left:0-db+"px",borderRight:"0px solid transparent",borderTopColor:eb}),m.find(".frontcornertop").css({borderWidth:db+"px",left:0-db+"px",borderRight:"0px solid transparent",borderBottomColor:eb}),m.find(".backcorner").css({borderWidth:db+"px",right:0-db+"px",borderLeft:"0px solid transparent",borderBottomColor:eb}),m.find(".backcornertop").css({borderWidth:db+"px",right:0-db+"px",borderLeft:"0px solid transparent",borderTopColor:eb})}"on"==d.fullScreenAlignForce&&(k=0,l=0),m.data("voffset")==b&&m.data("voffset",0),m.data("hoffset")==b&&m.data("hoffset",0);var fb=m.data("voffset")*p,gb=m.data("hoffset")*p,hb=d.startwidth*p,ib=d.startheight*p;"on"==d.fullScreenAlignForce&&(hb=d.container.width(),ib=d.container.height()),("center"==m.data("x")||"center"==m.data("xcenter"))&&(m.data("xcenter","center"),m.data("x",hb/2-m.outerWidth(!0)/2+gb)),("left"==m.data("x")||"left"==m.data("xleft"))&&(m.data("xleft","left"),m.data("x",0/p+gb)),("right"==m.data("x")||"right"==m.data("xright"))&&(m.data("xright","right"),m.data("x",(hb-m.outerWidth(!0)+gb)/p)),("center"==m.data("y")||"center"==m.data("ycenter"))&&(m.data("ycenter","center"),m.data("y",ib/2-m.outerHeight(!0)/2+fb)),("top"==m.data("y")||"top"==m.data("ytop"))&&(m.data("ytop","top"),m.data("y",0/d.bh+fb)),("bottom"==m.data("y")||"bottom"==m.data("ybottom"))&&(m.data("ybottom","bottom"),m.data("y",(ib-m.outerHeight(!0)+fb)/p)),m.data("start")==b&&m.data("start",1e3);var jb=m.data("easing");jb==b&&(jb="punchgs.Power1.easeOut");var kb=m.data("start")/1e3,lb=m.data("speed")/1e3;if("center"==m.data("x")||"center"==m.data("xcenter"))var mb=m.data("x")+k;else var mb=p*m.data("x")+k;if("center"==m.data("y")||"center"==m.data("ycenter"))var nb=m.data("y")+l;else var nb=d.bh*m.data("y")+l;if(punchgs.TweenLite.set(m,{top:nb,left:mb,overwrite:"auto"}),0==j&&(f=!0),m.data("timeline")==b||f||(2!=j&&m.data("timeline").gotoAndPlay(0),f=!0),!f){m.data("timeline")!=b;var ob=new punchgs.TimelineLite({smoothChildTiming:!0,onStart:h});ob.pause(),"on"==d.fullScreenAlignForce;var pb=m;m.data("mySplitText")!=b&&m.data("mySplitText").revert(),("chars"==m.data("splitin")||"words"==m.data("splitin")||"lines"==m.data("splitin")||"chars"==m.data("splitout")||"words"==m.data("splitout")||"lines"==m.data("splitout"))&&(m.find("a").length>0?m.data("mySplitText",new punchgs.SplitText(m.find("a"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})):m.find(".tp-layer-inner-rotation").length>0?m.data("mySplitText",new punchgs.SplitText(m.find(".tp-layer-inner-rotation"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})):m.data("mySplitText",new punchgs.SplitText(m,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})),m.addClass("splitted")),"chars"==m.data("splitin")&&(pb=m.data("mySplitText").chars),"words"==m.data("splitin")&&(pb=m.data("mySplitText").words),"lines"==m.data("splitin")&&(pb=m.data("mySplitText").lines);var qb=I(),rb=I();m.data("repeat")!=b&&(repeatV=m.data("repeat")),m.data("yoyo")!=b&&(yoyoV=m.data("yoyo")),m.data("repeatdelay")!=b&&(repeatdelayV=m.data("repeatdelay"));var sb=m.attr("class");sb.match("customin")?qb=J(qb,m.data("customin")):sb.match("randomrotate")?(qb.scale=3*Math.random()+1,qb.rotation=Math.round(200*Math.random()-100),qb.x=Math.round(200*Math.random()-100),qb.y=Math.round(200*Math.random()-100)):sb.match("lfr")||sb.match("skewfromright")?qb.x=15+d.width:sb.match("lfl")||sb.match("skewfromleft")?qb.x=-15-U:sb.match("sfl")||sb.match("skewfromleftshort")?qb.x=-50:sb.match("sfr")||sb.match("skewfromrightshort")?qb.x=50:sb.match("lft")?qb.y=-25-V:sb.match("lfb")?qb.y=25+d.height:sb.match("sft")?qb.y=-50:sb.match("sfb")&&(qb.y=50),sb.match("skewfromright")||m.hasClass("skewfromrightshort")?qb.skewX=-85:(sb.match("skewfromleft")||m.hasClass("skewfromleftshort"))&&(qb.skewX=85),(sb.match("fade")||sb.match("sft")||sb.match("sfl")||sb.match("sfb")||sb.match("skewfromleftshort")||sb.match("sfr")||sb.match("skewfromrightshort"))&&(qb.opacity=0),"safari"==M().toLowerCase();var tb=m.data("elementdelay")==b?0:m.data("elementdelay");rb.ease=qb.ease=m.data("easing")==b?punchgs.Power1.easeInOut:m.data("easing"),qb.data=new Object,qb.data.oldx=qb.x,qb.data.oldy=qb.y,rb.data=new Object,rb.data.oldx=rb.x,rb.data.oldy=rb.y,qb.x=qb.x*p,qb.y=qb.y*p;var ub=new punchgs.TimelineLite;if(2!=j)if(sb.match("customin"))pb!=m&&ob.add(punchgs.TweenLite.set(m,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"})),qb.visibility="hidden",rb.visibility="visible",rb.overwrite="all",rb.opacity=1,rb.onComplete=g(),rb.delay=kb,rb.force3D="auto",ob.add(ub.staggerFromTo(pb,lb,qb,rb,tb),"frame0");else if(qb.visibility="visible",qb.transformPerspective=600,pb!=m&&ob.add(punchgs.TweenLite.set(m,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"})),rb.visibility="visible",rb.delay=kb,rb.onComplete=g(),rb.opacity=1,rb.force3D="auto",sb.match("randomrotate")&&pb!=m)for(var c=0;c<pb.length;c++){var vb=new Object,wb=new Object;a.extend(vb,qb),a.extend(wb,rb),qb.scale=3*Math.random()+1,qb.rotation=Math.round(200*Math.random()-100),qb.x=Math.round(200*Math.random()-100),qb.y=Math.round(200*Math.random()-100),0!=c&&(wb.delay=kb+c*tb),ob.append(punchgs.TweenLite.fromTo(pb[c],lb,vb,wb),"frame0")}else ob.add(ub.staggerFromTo(pb,lb,qb,rb,tb),"frame0");if(m.data("timeline",ob),new Array,m.data("frames")!=b){var yb=m.data("frames");yb=yb.replace(/\s+/g,""),yb=yb.replace("{","");var zb=yb.split("}");a.each(zb,function(a,b){if(b.length>0){var c=K(b);S(m,d,c,"frame"+(a+10),p)}})}ob=m.data("timeline"),m.data("end")==b||-1!=j&&2!=j?-1==j||2==j?T(m,d,999999,qb,"frame99",p):T(m,d,999999,qb,"frame99",p):T(m,d,m.data("end")/1e3,qb,"frame99",p),ob=m.data("timeline"),m.data("timeline",ob),P(m,p),ob.resume()}}if(f&&(Q(m),P(m,p),m.data("timeline")!=b)){var Ab=m.data("timeline").getTweensOf();a.each(Ab,function(a,c){if(c.vars.data!=b){var d=c.vars.data.oldx*p,e=c.vars.data.oldy*p;if(1!=c.progress()&&0!=c.progress())try{c.vars.x=d,c.vary.y=e}catch(f){}else 1==c.progress()&&punchgs.TweenLite.set(c.target,{x:d,y:e})}})}});var o=a("body").find("#"+d.container.attr("id")).find(".tp-bannertimer");o.data("opt",d),f!=b&&setTimeout(function(){f.resume()},30)},M=function(){var c,a=navigator.appName,b=navigator.userAgent,d=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!=(c=b.match(/version\/([\.\d]+)/i))&&(d[2]=c[1]),d=d?[d[1],d[2]]:[a,navigator.appVersion,"-?"],d[0]},O=function(a,c){a.data("fsize")==b&&a.data("fsize",parseInt(a.css("font-size"),0)||0),a.data("pt")==b&&a.data("pt",parseInt(a.css("paddingTop"),0)||0),a.data("pb")==b&&a.data("pb",parseInt(a.css("paddingBottom"),0)||0),a.data("pl")==b&&a.data("pl",parseInt(a.css("paddingLeft"),0)||0),a.data("pr")==b&&a.data("pr",parseInt(a.css("paddingRight"),0)||0),a.data("mt")==b&&a.data("mt",parseInt(a.css("marginTop"),0)||0),a.data("mb")==b&&a.data("mb",parseInt(a.css("marginBottom"),0)||0),a.data("ml")==b&&a.data("ml",parseInt(a.css("marginLeft"),0)||0),a.data("mr")==b&&a.data("mr",parseInt(a.css("marginRight"),0)||0),a.data("bt")==b&&a.data("bt",parseInt(a.css("borderTopWidth"),0)||0),a.data("bb")==b&&a.data("bb",parseInt(a.css("borderBottomWidth"),0)||0),a.data("bl")==b&&a.data("bl",parseInt(a.css("borderLeftWidth"),0)||0),a.data("br")==b&&a.data("br",parseInt(a.css("borderRightWidth"),0)||0),a.data("ls")==b&&a.data("ls",parseInt(a.css("letterSpacing"),0)||0),a.data("lh")==b&&a.data("lh",parseInt(a.css("lineHeight"),0)||"auto"),a.data("minwidth")==b&&a.data("minwidth",parseInt(a.css("minWidth"),0)||0),a.data("minheight")==b&&a.data("minheight",parseInt(a.css("minHeight"),0)||0),a.data("maxwidth")==b&&a.data("maxwidth",parseInt(a.css("maxWidth"),0)||"none"),a.data("maxheight")==b&&a.data("maxheight",parseInt(a.css("maxHeight"),0)||"none"),a.data("wii")==b&&a.data("wii",parseInt(a.css("width"),0)||0),a.data("hii")==b&&a.data("hii",parseInt(a.css("height"),0)||0),a.data("wan")==b&&a.data("wan",a.css("-webkit-transition")),a.data("moan")==b&&a.data("moan",a.css("-moz-animation-transition")),a.data("man")==b&&a.data("man",a.css("-ms-animation-transition")),a.data("ani")==b&&a.data("ani",a.css("transition")),"auto"==a.data("lh")&&a.data("lh",a.data("fsize")+4),a.hasClass("tp-splitted")||(a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none"),punchgs.TweenLite.set(a,{fontSize:Math.round(a.data("fsize")*c.bw)+"px",letterSpacing:Math.floor(a.data("ls")*c.bw)+"px",paddingTop:Math.round(a.data("pt")*c.bh)+"px",paddingBottom:Math.round(a.data("pb")*c.bh)+"px",paddingLeft:Math.round(a.data("pl")*c.bw)+"px",paddingRight:Math.round(a.data("pr")*c.bw)+"px",marginTop:a.data("mt")*c.bh+"px",marginBottom:a.data("mb")*c.bh+"px",marginLeft:a.data("ml")*c.bw+"px",marginRight:a.data("mr")*c.bw+"px",borderTopWidth:Math.round(a.data("bt")*c.bh)+"px",borderBottomWidth:Math.round(a.data("bb")*c.bh)+"px",borderLeftWidth:Math.round(a.data("bl")*c.bw)+"px",borderRightWidth:Math.round(a.data("br")*c.bw)+"px",lineHeight:Math.round(a.data("lh")*c.bh)+"px",minWidth:a.data("minwidth")*c.bw+"px",minHeight:a.data("minheight")*c.bh+"px",overwrite:"auto"}),setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30),"none"!=a.data("maxheight")&&a.css({maxHeight:a.data("maxheight")*c.bh+"px"}),"none"!=a.data("maxwidth")&&a.css({maxWidth:a.data("maxwidth")*c.bw+"px"}))},P=function(c,d){c.find(".rs-pendulum").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("startdeg")==b?-20:c.data("startdeg"),f=c.data("enddeg")==b?20:c.data("enddeg"),g=c.data("speed")==b?2:c.data("speed"),h=c.data("origin")==b?"50% 50%":c.data("origin"),i=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("ease");e*=d,f*=d,c.data("timeline").append(new punchgs.TweenLite.fromTo(c,g,{force3D:"auto",rotation:e,transformOrigin:h},{rotation:f,ease:i})),c.data("timeline").append(new punchgs.TweenLite.fromTo(c,g,{force3D:"auto",rotation:f,transformOrigin:h},{rotation:e,ease:i,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-rotate").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("startdeg")==b?0:c.data("startdeg"),f=c.data("enddeg")==b?360:c.data("enddeg");speed=c.data("speed")==b?2:c.data("speed"),origin=c.data("origin")==b?"50% 50%":c.data("origin"),easing=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("easing"),e*=d,f*=d,c.data("timeline").append(new punchgs.TweenLite.fromTo(c,speed,{force3D:"auto",rotation:e,transformOrigin:origin},{rotation:f,ease:easing,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-slideloop").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("xs")==b?0:c.data("xs"),f=c.data("ys")==b?0:c.data("ys"),g=c.data("xe")==b?0:c.data("xe"),h=c.data("ye")==b?0:c.data("ye"),i=c.data("speed")==b?2:c.data("speed"),j=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("easing");e*=d,f*=d,g*=d,h*=d,c.data("timeline").append(new punchgs.TweenLite.fromTo(c,i,{force3D:"auto",x:e,y:f},{x:g,y:h,ease:j})),c.data("timeline").append(new punchgs.TweenLite.fromTo(c,i,{force3D:"auto",x:g,y:h},{x:e,y:f,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-pulse").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var d=c.data("zoomstart")==b?0:c.data("zoomstart"),e=c.data("zoomend")==b?0:c.data("zoomend"),f=c.data("speed")==b?2:c.data("speed"),g=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("easing");c.data("timeline").append(new punchgs.TweenLite.fromTo(c,f,{force3D:"auto",scale:d},{scale:e,ease:g})),c.data("timeline").append(new punchgs.TweenLite.fromTo(c,f,{force3D:"auto",scale:e},{scale:d,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-wave").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("angle")==b?10:c.data("angle"),f=c.data("radius")==b?10:c.data("radius"),g=c.data("speed")==b?-20:c.data("speed");c.data("origin")==b?-20:c.data("origin"),e*=d,f*=d;var i={a:0,ang:e,element:c,unit:f};c.data("timeline").append(new punchgs.TweenLite.fromTo(i,g,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=i.a*(Math.PI/180);punchgs.TweenLite.to(i.element,.1,{force3D:"auto",x:Math.cos(a)*i.unit,y:i.unit*(1-Math.sin(a))})},onComplete:function(){c.data("timeline").restart()}}))}})},Q=function(c){c.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var c=a(this);c.data("timeline")!=b&&(c.data("timeline").pause(),c.data("timeline",null))})},R=function(c,d){var e=0,f=c.find(".tp-caption"),g=d.container.find(".tp-static-layers").find(".tp-caption");return a.each(g,function(a,b){f.push(b)}),f.each(function(){var f=-1,g=a(this);if(g.hasClass("tp-static-layer")&&((-1==g.data("startslide")||"-1"==g.data("startslide"))&&g.data("startslide",0),(-1==g.data("endslide")||"-1"==g.data("endslide"))&&g.data("endslide",d.slideamount),g.hasClass("tp-is-shown")?g.data("startslide")>d.next||g.data("endslide")<d.next?(f=2,g.removeClass("tp-is-shown")):f=0:f=2),0!=f){if(Q(g),g.find("iframe").length>0){punchgs.TweenLite.to(g.find("iframe"),.2,{autoAlpha:0}),W()&&g.find("iframe").remove();try{var h=g.find("iframe"),i=h.attr("id"),j=$f(i);j.api("pause"),clearTimeout(g.data("timerplay"))}catch(k){}try{var l=g.data("player");l.stopVideo(),clearTimeout(g.data("timerplay"))}catch(k){}}if(g.find("video").length>0)try{g.find("video").each(function(){var c=a(this).parent();c.attr("id"),clearTimeout(c.data("timerplay"));var e=this;e.pause()})}catch(k){}try{var m=g.data("timeline"),n=m.getLabelTime("frame99"),o=m.time();if(n>o){var p=m.getTweensOf(g);if(a.each(p,function(a,b){0!=a&&b.pause()}),0!=g.css("opacity")){var q=g.data("endspeed")==b?g.data("speed"):g.data("endspeed");q>e&&(e=q),m.play("frame99")}else m.progress(1,!1)}}catch(k){}}}),e},S=function(a,c,d,e,f){var g=a.data("timeline"),h=new punchgs.TimelineLite,i=a;"chars"==d.typ?i=a.data("mySplitText").chars:"words"==d.typ?i=a.data("mySplitText").words:"lines"==d.typ&&(i=a.data("mySplitText").lines),d.animation.ease=d.ease,d.animation.rotationZ!=b&&(d.animation.rotation=d.animation.rotationZ),d.animation.data=new Object,d.animation.data.oldx=d.animation.x,d.animation.data.oldy=d.animation.y,d.animation.x=d.animation.x*f,d.animation.y=d.animation.y*f,g.add(h.staggerTo(i,d.speed,d.animation,d.elementdelay),d.start),g.addLabel(e,d.start),a.data("timeline",g)},T=function(a,c,d,e,f,g){var h=a.data("timeline"),i=new punchgs.TimelineLite,j=I(),k=a.data("endspeed")==b?a.data("speed"):a.data("endspeed"),l=a.attr("class");if(j.ease=a.data("endeasing")==b?punchgs.Power1.easeInOut:a.data("endeasing"),k/=1e3,l.match("ltr")||l.match("ltl")||l.match("str")||l.match("stl")||l.match("ltt")||l.match("ltb")||l.match("stt")||l.match("stb")||l.match("skewtoright")||l.match("skewtorightshort")||l.match("skewtoleft")||l.match("skewtoleftshort")||l.match("fadeout")||l.match("randomrotateout")){l.match("skewtoright")||l.match("skewtorightshort")?j.skewX=35:(l.match("skewtoleft")||l.match("skewtoleftshort"))&&(j.skewX=-35),l.match("ltr")||l.match("skewtoright")?j.x=c.width+60:l.match("ltl")||l.match("skewtoleft")?j.x=0-(c.width+60):l.match("ltt")?j.y=0-(c.height+60):l.match("ltb")?j.y=c.height+60:l.match("str")||l.match("skewtorightshort")?(j.x=50,j.opacity=0):l.match("stl")||l.match("skewtoleftshort")?(j.x=-50,j.opacity=0):l.match("stt")?(j.y=-50,j.opacity=0):l.match("stb")?(j.y=50,j.opacity=0):l.match("randomrotateout")?(j.x=Math.random()*c.width,j.y=Math.random()*c.height,j.scale=2*Math.random()+.3,j.rotation=360*Math.random()-180,j.opacity=0):l.match("fadeout")&&(j.opacity=0),l.match("skewtorightshort")?j.x=270:l.match("skewtoleftshort")&&(j.x=-270),j.data=new Object,j.data.oldx=j.x,j.data.oldy=j.y,j.x=j.x*g,j.y=j.y*g,j.overwrite="auto";var m=a,m=a;"chars"==a.data("splitout")?m=a.data("mySplitText").chars:"words"==a.data("splitout")?m=a.data("mySplitText").words:"lines"==a.data("splitout")&&(m=a.data("mySplitText").lines);var n=a.data("endelementdelay")==b?0:a.data("endelementdelay");h.add(i.staggerTo(m,k,j,n),d)}else if(a.hasClass("customout")){j=J(j,a.data("customout"));var m=a;"chars"==a.data("splitout")?m=a.data("mySplitText").chars:"words"==a.data("splitout")?m=a.data("mySplitText").words:"lines"==a.data("splitout")&&(m=a.data("mySplitText").lines);var n=a.data("endelementdelay")==b?0:a.data("endelementdelay");j.onStart=function(){punchgs.TweenLite.set(a,{transformPerspective:j.transformPerspective,transformOrigin:j.transformOrigin,overwrite:"auto"})},j.data=new Object,j.data.oldx=j.x,j.data.oldy=j.y,j.x=j.x*g,j.y=j.y*g,h.add(i.staggerTo(m,k,j,n),d)}else e.delay=0,h.add(punchgs.TweenLite.to(a,k,e),d);h.addLabel(f,d),a.data("timeline",h)},U=function(b,c){b.children().each(function(){try{a(this).die("click")}catch(b){}try{a(this).die("mouseenter")}catch(b){}try{a(this).die("mouseleave")}catch(b){}try{a(this).unbind("hover")}catch(b){}});try{b.die("click","mouseenter","mouseleave")}catch(d){}clearInterval(c.cdint),b=null},V=function(c,d){if(d.cd=0,d.loop=0,d.looptogo=d.stopAfterLoops!=b&&d.stopAfterLoops>-1?d.stopAfterLoops:9999999,d.lastslidetoshow=d.stopAtSlide!=b&&d.stopAtSlide>-1?d.stopAtSlide:999,d.stopLoop="off",0==d.looptogo&&(d.stopLoop="on"),d.slideamount>1&&(0!=d.stopAfterLoops||1!=d.stopAtSlide)){var e=c.find(".tp-bannertimer");
c.on("stoptimer",function(){var b=a(this).find(".tp-bannertimer");b.data("tween").pause(),"on"==d.hideTimerBar&&b.css({visibility:"hidden"})}),c.on("starttimer",function(){1!=d.conthover&&1!=d.videoplaying&&d.width>d.hideSliderAtLimit&&1!=d.bannertimeronpause&&1!=d.overnav&&("on"==d.stopLoop&&d.next==d.lastslidetoshow-1||1==d.noloopanymore?d.noloopanymore=1:(e.css({visibility:"visible"}),e.data("tween").resume())),"on"==d.hideTimerBar&&e.css({visibility:"hidden"})}),c.on("restarttimer",function(){var b=a(this).find(".tp-bannertimer");"on"==d.stopLoop&&d.next==d.lastslidetoshow-1||1==d.noloopanymore?d.noloopanymore=1:(b.css({visibility:"visible"}),b.data("tween").kill(),b.data("tween",punchgs.TweenLite.fromTo(b,d.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:f,delay:1}))),"on"==d.hideTimerBar&&b.css({visibility:"hidden"})}),c.on("nulltimer",function(){e.data("tween").pause(0),"on"==d.hideTimerBar&&e.css({visibility:"hidden"})});var f=function(){0==a("body").find(c).length&&(U(c,d),clearInterval(d.cdint)),c.trigger("revolution.slide.slideatend"),1==c.data("conthover-changed")&&(d.conthover=c.data("conthover"),c.data("conthover-changed",0)),d.act=d.next,d.next=d.next+1,d.next>c.find(">ul >li").length-1&&(d.next=0,d.looptogo=d.looptogo-1,d.looptogo<=0&&(d.stopLoop="on")),"on"==d.stopLoop&&d.next==d.lastslidetoshow-1?(c.find(".tp-bannertimer").css({visibility:"hidden"}),c.trigger("revolution.slide.onstop"),d.noloopanymore=1):e.data("tween").restart(),z(c,d)};e.data("tween",punchgs.TweenLite.fromTo(e,d.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:f,delay:1})),e.data("opt",d),c.hover(function(){if("on"==d.onHoverStop&&!W()){c.trigger("stoptimer"),c.trigger("revolution.slide.onpause");var e=c.find(">ul >li:eq("+d.next+") .slotholder");e.find(".defaultimg").each(function(){var c=a(this);c.data("kenburn")!=b&&c.data("kenburn").pause()})}},function(){if(1!=c.data("conthover")){c.trigger("revolution.slide.onresume"),c.trigger("starttimer");var e=c.find(">ul >li:eq("+d.next+") .slotholder");e.find(".defaultimg").each(function(){var c=a(this);c.data("kenburn")!=b&&c.data("kenburn").play()})}})}},W=function(){var a=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],b=!1;for(var c in a)navigator.userAgent.split(a[c]).length>1&&(b=!0);return b},X=function(a,b,c){var d=b.data("owidth"),e=b.data("oheight");if(d/e>c.width/c.height){var f=c.container.width()/d,g=e*f,h=g/c.container.height()*a;return a*=100/h,h=100,a=a,a+"% "+h+"%"+" 1"}var f=c.container.width()/d,g=e*f,h=g/c.container.height()*a;return a+"% "+h+"%"},Y=function(c,d,e,f){try{c.find(">ul:first-child >li:eq("+d.act+")")}catch(h){c.find(">ul:first-child >li:eq(1)")}d.lastslide=d.act;var j=c.find(">ul:first-child >li:eq("+d.next+")"),k=j.find(".slotholder"),l=k.data("bgposition"),m=k.data("bgpositionend"),n=k.data("zoomstart")/100,o=k.data("zoomend")/100,p=k.data("rotationstart"),q=k.data("rotationend"),r=k.data("bgfit"),s=k.data("bgfitend"),t=k.data("easeme"),u=k.data("duration")/1e3,v=100;r==b&&(r=100),s==b&&(s=100);var w=r,x=s;r=X(r,k,d),s=X(s,k,d),v=X(100,k,d),n==b&&(n=1),o==b&&(o=1),p==b&&(p=0),q==b&&(q=0),1>n&&(n=1),1>o&&(o=1);var y=new Object;y.w=parseInt(v.split(" ")[0],0),y.h=parseInt(v.split(" ")[1],0);var z=!1;"1"==v.split(" ")[2]&&(z=!0),k.find(".defaultimg").each(function(){var b=a(this);0==k.find(".kenburnimg").length?k.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="'+b.attr("src")+'" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:'+y.w+"%;height:"+y.h+'%;"></div>'):k.find(".kenburnimg img").css({width:y.w+"%",height:y.h+"%"});var c=k.find(".kenburnimg img"),e=Z(d,l,r,c,z),g=Z(d,m,s,c,z);if(z&&(e.w=w/100,g.w=x/100),f){punchgs.TweenLite.set(c,{autoAlpha:0,transformPerspective:1200,transformOrigin:"0% 0%",top:0,left:0,scale:e.w,x:e.x,y:e.y});var h=e.w,j=h*c.width()-d.width,n=h*c.height()-d.height,o=Math.abs(100*(e.x/j)),p=Math.abs(100*(e.y/n));0==n&&(p=0),0==j&&(o=0),b.data("bgposition",o+"% "+p+"%"),i(8)||b.data("currotate",$(c)),i(8)||b.data("curscale",y.w*h+"%  "+(y.h*h+"%")),k.find(".kenburnimg").remove()}else b.data("kenburn",punchgs.TweenLite.fromTo(c,u,{autoAlpha:1,force3D:punchgs.force3d,transformOrigin:"0% 0%",top:0,left:0,scale:e.w,x:e.x,y:e.y},{autoAlpha:1,rotationZ:q,ease:t,x:g.x,y:g.y,scale:g.w,onUpdate:function(){var a=c[0]._gsTransform.scaleX,e=a*c.width()-d.width,f=a*c.height()-d.height,g=Math.abs(100*(c[0]._gsTransform.x/e)),h=Math.abs(100*(c[0]._gsTransform.y/f));0==f&&(h=0),0==e&&(g=0),b.data("bgposition",g+"% "+h+"%"),i(8)||b.data("currotate",$(c)),i(8)||b.data("curscale",y.w*a+"%  "+(y.h*a+"%"))}}))})},Z=function(a,b,c,d,e){var f=new Object;switch(f.w=e?parseInt(c.split(" ")[1],0)/100:parseInt(c.split(" ")[0],0)/100,b){case"left top":case"top left":f.x=0,f.y=0;break;case"center top":case"top center":f.x=((0-d.width())*f.w+parseInt(a.width,0))/2,f.y=0;break;case"top right":case"right top":f.x=(0-d.width())*f.w+parseInt(a.width,0),f.y=0;break;case"center left":case"left center":f.x=0,f.y=((0-d.height())*f.w+parseInt(a.height,0))/2;break;case"center center":f.x=((0-d.width())*f.w+parseInt(a.width,0))/2,f.y=((0-d.height())*f.w+parseInt(a.height,0))/2;break;case"center right":case"right center":f.x=(0-d.width())*f.w+parseInt(a.width,0),f.y=((0-d.height())*f.w+parseInt(a.height,0))/2;break;case"bottom left":case"left bottom":f.x=0,f.y=(0-d.height())*f.w+parseInt(a.height,0);break;case"bottom center":case"center bottom":f.x=((0-d.width())*f.w+parseInt(a.width,0))/2,f.y=(0-d.height())*f.w+parseInt(a.height,0);break;case"bottom right":case"right bottom":f.x=(0-d.width())*f.w+parseInt(a.width,0),f.y=(0-d.height())*f.w+parseInt(a.height,0)}return f},$=function(a){var b=a.css("-webkit-transform")||a.css("-moz-transform")||a.css("-ms-transform")||a.css("-o-transform")||a.css("transform");if("none"!==b)var c=b.split("(")[1].split(")")[0].split(","),d=c[0],e=c[1],f=Math.round(Math.atan2(e,d)*(180/Math.PI));else var f=0;return 0>f?f+=360:f},_=function(c,d){try{var e=c.find(">ul:first-child >li:eq("+d.act+")")}catch(f){var e=c.find(">ul:first-child >li:eq(1)")}d.lastslide=d.act;var g=c.find(">ul:first-child >li:eq("+d.next+")");e.find(".slotholder"),g.find(".slotholder"),c.find(".defaultimg").each(function(){var c=a(this);punchgs.TweenLite.killTweensOf(c,!1),punchgs.TweenLite.set(c,{scale:1,rotationZ:0}),punchgs.TweenLite.killTweensOf(c.data("kenburn img"),!1),c.data("kenburn")!=b&&c.data("kenburn").pause(),c.data("currotate")!=b&&c.data("bgposition")!=b&&c.data("curscale")!=b&&punchgs.TweenLite.set(c,{rotation:c.data("currotate"),backgroundPosition:c.data("bgposition"),backgroundSize:c.data("curscale")}),c!=b&&c.data("kenburn img")!=b&&c.data("kenburn img").length>0&&punchgs.TweenLite.set(c.data("kenburn img"),{autoAlpha:0})})},ab=function(b,c){return W()&&"on"==c.parallaxDisableOnMobile?!1:(b.find(">ul:first-child >li").each(function(){for(var b=a(this),d=1;10>=d;d++)b.find(".rs-parallaxlevel-"+d).each(function(){var b=a(this);b.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:'+b.css("zIndex")+'" class="tp-parallax-container" data-parallaxlevel="'+c.parallaxLevels[d-1]+'"></div>')})}),("mouse"==c.parallax||"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax)&&(b.mouseenter(function(a){var c=b.find(".current-sr-slide-visible"),d=b.offset().top,e=b.offset().left,f=a.pageX-e,g=a.pageY-d;c.data("enterx",f),c.data("entery",g)}),b.on("mousemove.hoverdir, mouseleave.hoverdir",function(d){var e=b.find(".current-sr-slide-visible");switch(d.type){case"mousemove":var f=b.offset().top,g=b.offset().left,h=e.data("enterx"),i=e.data("entery"),j=h-(d.pageX-g),k=i-(d.pageY-f);e.find(".tp-parallax-container").each(function(){var b=a(this),d=parseInt(b.data("parallaxlevel"),0)/100,e=j*d,f=k*d;"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax?punchgs.TweenLite.to(b,.4,{force3D:"auto",x:e,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(b,.4,{force3D:"auto",x:e,y:f,ease:punchgs.Power3.easeOut,overwrite:"all"})});break;case"mouseleave":e.find(".tp-parallax-container").each(function(){var b=a(this);"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax?punchgs.TweenLite.to(b,1.5,{force3D:"auto",x:0,ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(b,1.5,{force3D:"auto",x:0,y:0,ease:punchgs.Power3.easeOut})})}}),W()&&(window.ondeviceorientation=function(c){var d=Math.round(c.beta||0),e=Math.round(c.gamma||0),f=b.find(".current-sr-slide-visible");if(a(window).width()>a(window).height()){var g=e;e=d,d=g}var h=360/b.width()*e,i=180/b.height()*d;f.find(".tp-parallax-container").each(function(){var b=a(this),c=parseInt(b.data("parallaxlevel"),0)/100,d=h*c,e=i*c;punchgs.TweenLite.to(b,.2,{force3D:"auto",x:d,y:e,ease:punchgs.Power3.easeOut})})})),("scroll"==c.parallax||"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax)&&a(window).on("scroll",function(){bb(b,c)}),void 0)},bb=function(b,c){if(W()&&"on"==c.parallaxDisableOnMobile)return!1;var d=b.offset().top,e=a(window).scrollTop(),f=d+b.height()/2,g=d+b.height()/2-e,h=a(window).height()/2,i=h-g;if(h>f&&(i-=h-f),b.find(".current-sr-slide-visible"),b.find(".tp-parallax-container").each(function(){var c=a(this),d=parseInt(c.data("parallaxlevel"),0)/100,e=i*d;c.data("parallaxoffset",e),punchgs.TweenLite.to(c,.2,{force3D:"auto",y:e,ease:punchgs.Power3.easeOut})}),"on"!=c.parallaxBgFreeze){var k=c.parallaxLevels[0]/100,l=i*k;punchgs.TweenLite.to(b,.2,{force3D:"auto",y:l,ease:punchgs.Power3.easeOut})}},cb=function(c,d){var e=c.parent();("thumb"==d.navigationType||"both"==d.navsecond)&&e.append('<div class="tp-bullets tp-thumbs '+d.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');var f=e.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),g=f.parent();g.width(d.thumbWidth*d.thumbAmount),g.height(d.thumbHeight),g.parent().width(d.thumbWidth*d.thumbAmount),g.parent().height(d.thumbHeight),c.find(">ul:first >li").each(function(a){var e=c.find(">ul:first >li:eq("+a+")"),g=e.find(".defaultimg").css("backgroundColor");if(e.data("thumb")!=b)var h=e.data("thumb");else var h=e.find("img:first").attr("src");f.append('<div class="bullet thumb" style="background-color:'+g+";position:relative;width:"+d.thumbWidth+"px;height:"+d.thumbHeight+"px;background-image:url("+h+') !important;background-size:cover;background-position:center center;"></div>'),f.find(".bullet:first")});var h=10;f.find(".bullet").each(function(b){var e=a(this);b==d.slideamount-1&&e.addClass("last"),0==b&&e.addClass("first"),e.width(d.thumbWidth),e.height(d.thumbHeight),h<e.outerWidth(!0)&&(h=e.outerWidth(!0)),e.click(function(){0==d.transition&&e.index()!=d.act&&(d.next=e.index(),j(d,c))})});var i=h*c.find(">ul:first >li").length,k=f.parent().width();d.thumbWidth=h,i>k&&(a(document).mousemove(function(b){a("body").data("mousex",b.pageX)}),f.parent().mouseenter(function(){var b=a(this),d=b.offset(),e=a("body").data("mousex")-d.left,f=b.width(),g=b.find(".bullet:first").outerWidth(!0),h=g*c.find(">ul:first >li").length,i=h-f+15,j=i/f;b.addClass("over"),e-=30;var k=0-e*j;k>0&&(k=0),0-h+f>k&&(k=0-h+f),eb(b,k,200)}),f.parent().mousemove(function(){var b=a(this),d=b.offset(),e=a("body").data("mousex")-d.left,f=b.width(),g=b.find(".bullet:first").outerWidth(!0),h=g*c.find(">ul:first >li").length-1,i=h-f+15,j=i/f;e-=3,6>e&&(e=0),e+3>f-6&&(e=f);var k=0-e*j;k>0&&(k=0),0-h+f>k&&(k=0-h+f),eb(b,k,0)}),f.parent().mouseleave(function(){var b=a(this);b.removeClass("over"),db(c)}))},db=function(a){var b=a.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),c=b.parent(),e=(c.offset(),c.find(".bullet:first").outerWidth(!0)),f=c.find(".bullet.selected").index()*e,g=c.width(),e=c.find(".bullet:first").outerWidth(!0),h=e*a.find(">ul:first >li").length,k=0-f;k>0&&(k=0),0-h+g>k&&(k=0-h+g),c.hasClass("over")||eb(c,k,200)},eb=function(a,b){punchgs.TweenLite.to(a.find(".tp-thumbcontainer"),.2,{force3D:"auto",left:b,ease:punchgs.Power3.easeOut,overwrite:"auto"})}}(jQuery);
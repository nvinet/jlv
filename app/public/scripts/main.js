"use strict";var setREVStartSize=function e(){var e={startwidth:960,startheight:350,container:jQuery("#rev_slider_35_1"),fullScreen:"on",forceFullWidth:"off"};e.container.closest(".rev_slider_wrapper").css({height:e.container.height()});e.width=parseInt(e.container.width(),0);e.height=parseInt(e.container.height(),0);e.bw=e.width/e.startwidth;e.bh=e.height/e.startheight;if(e.bh>e.bw){e.bh=e.bw}if(e.bh<e.bw){e.bw=e.bh}if(e.bw<e.bh){e.bh=e.bw}if(e.bh>1){e.bw=1;e.bh=1}if(e.bw>1){e.bw=1;e.bh=1}e.height=Math.round(e.startheight*(e.width/e.startwidth));if(e.height>e.startheight&&e.autoHeight!=="on"){e.height=e.startheight}if(e.fullScreen==="on"){e.height=e.bw*e.startheight;var t=e.container.parent().width();var i=jQuery(window).height();if(e.fullScreenOffsetContainer!==undefined){try{var o=e.fullScreenOffsetContainer.split(",");jQuery.each(o,function(t,o){i=i-jQuery(o).outerHeight(true);if(i<e.minFullScreenHeight){i=e.minFullScreenHeight}})}catch(r){}}e.container.parent().height(i);e.container.height(i);e.container.closest(".rev_slider_wrapper").height(i);e.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(i);e.container.css({height:"100%"});e.height=i}else{e.container.height(e.height);e.container.closest(".rev_slider_wrapper").height(e.height);e.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(e.height)}};setREVStartSize();var tpj=jQuery;tpj.noConflict();var revapi1;tpj(document).ready(function(){if(tpj("#rev_slider_35_1").revolution===undefined){revslider_showDoubleJqueryError("#rev_slider_35_1")}else{revapi1=tpj("#rev_slider_35_1").show().revolution({dottedOverlay:"none",delay:5e3,startwidth:960,startheight:350,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:3,simplifyAll:"off",navigationType:"bullet",navigationArrows:"solo",navigationStyle:"round",touchenabled:"on",onHoverStop:"off",nextSlideOnWindowFocus:"off",swipe_threshold:75,swipe_min_touches:1,drag_block_vertical:false,keyboardNavigation:"off",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:0,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:0,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner2",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideTimerBar:"on",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"on",hideThumbsUnderResolution:0,fullScreenOffsetContainer:".wrapper",fullScreenOffset:"",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0})}});"use strict";(function(e){e(document).ready(function(){var t=e(".slider-inner");e(window).on("scroll",function(){var i=e(undefined).scrollTop();t.css({opacity:1-i/700})});e(".swipebox").swipebox();e.stellar({horizontalScrolling:false,verticalOffset:0,responsive:true});e(".counter").counterUp({delay:10,time:1e3});e(".hamburger-menu").on("click",function(){e(".hamburger-menu").toggleClass("menu-open");e(".navigation").toggleClass("show-me");e(".navigation ul li").toggleClass("show-me")});e(".transition").on("click",function(t){e(".transition-overlay").toggleClass("show-me");t.preventDefault();var i=this.getAttribute("href");setTimeout(function(){window.location=i},1e3)});e(window).on("scroll touchmove",function(){e(".slider .slider-inner").toggleClass("hide",e(document).scrollTop()>1500)})});new WOW({animateClass:"animated",offset:50}).init();e(window).load(function(){var t=e(".portfolio-masonry");t.masonry({columnWidth:0,itemSelector:".portfolio-masonry li"})})})(jQuery);"use strict";var jlv=jlv||{};
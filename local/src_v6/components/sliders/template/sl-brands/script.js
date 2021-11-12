!function () {
    'use strict';

    function setSlidesHeight(slider) {
        if (typeof setSimilarSlidesHeight === 'function') {
            setSimilarSlidesHeight(slider);
        }
    }

    //https://github.com/kenwheeler/slick/
    function initSlider() {
        var block = $('.sl-brands');
        if (!block.length || !$.fn.slick) {
            return false;
        }
        block.each(function () {
            var self = $(this);
            var slider = self.find('.slider');
            // var slidesLength = slider.find('.slide').length;
            var pager = self.find('.js-sl-pager');
            var sliderWrap = self.find('.wrap');
            var prev = self.find('.prev');
            var next = self.find('.next');
            sliderWrap.removeClass('inited-not');
            slideCounter(block);
            slider.on('setPosition', function () {
                setSlidesHeight(slider);
            });
            slider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: false, // true - height: auto
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 500,
                // centerMode: true,
                variableWidth: true,
                arrows: false,
                dots: false,
                appendDots: pager,
                dotsClass: 'list-reset', // pager class
                nextArrow: next,
                prevArrow: prev,
                infinite: false
            });
            sliderWrap.addClass('inited');
        });
    }

    $(function () {
        initSlider();
    });
}();
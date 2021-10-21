!function () {
    'use strict';

    function menuIconActive() {
        var menu = $('.menu-drop-8');
        if (menu.length) {
            menu.each(function () {
                var self = $(this);
                var icons = self.find('.item_1 > a > span.icon');

                icons.off('click.menu').on('click.menu', function(e) {
                    e.preventDefault();
                    var item = $(this).closest('.item_1');
                    item.siblings('.item_1').removeClass('active');
                    if (item.hasClass('active')) {
                        item.removeClass('active');
                    } else {
                        item.addClass('active');
                    }
                });
            });
        }
    }

    $(function () {
        menuIconActive();
    });
}();

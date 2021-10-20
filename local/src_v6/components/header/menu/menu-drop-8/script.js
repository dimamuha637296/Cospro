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
                    $(this).closest('.item_1').toggleClass('active');
                });
            });
        }
    }

    $(function () {
        menuIconActive();
    });
}();

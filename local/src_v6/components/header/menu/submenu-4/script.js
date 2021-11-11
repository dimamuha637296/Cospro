!function () {
    'use strict';

    function menuIconActive() {
        var menu = $('.submenu-4');
        if (menu.length) {
            var items = menu.find('.item_2');

            items.each(function () {
                var self = $(this);

                self.off('mouseenter').on('mouseenter', function(e) {
                    e.preventDefault();
                    menu.find('.submenu_inner_item').fadeOut(0);

                    if (self.attr('data-submenu') !== undefined) {
                        var itemName = self.attr('data-submenu');
                        // console.log(itemName);
                        if (menu.find('#' + itemName)) {
                            menu.find('#' + itemName).fadeIn(0);
                        }
                    }
                });
            });
        }
    }

    $(function () {
        menuIconActive();
    });
}();

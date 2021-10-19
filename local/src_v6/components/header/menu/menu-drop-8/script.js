!function () {
    'use strict';

    function menuIconActive() {
        var menu = $('.menu-drop-8');
        if (menu.length) {
            menu.each(function () {
                var self = $(this);
                var icons = self.find('.item_1 > a > span.icon');
                console.log(icons);

                icons.off('click.menu').on('click.menu', function(e) {
                    e.preventDefault();
                    console.log('sssssssssss');
                    $(this).closest('.item_1').toggleClass('active');
                });
            });
        }
    }

    // function menuIconActive() {
    //
    //     var menu = $('.menu-drop-8');
    //     if (!menu.length) {
    //         return false;
    //     }
    //
    //     menu.each(function () {
    //         var self = $(this);
    //         console.log(self);
    //     })
    // }

    $(function () {
        menuIconActive();
    });
}();

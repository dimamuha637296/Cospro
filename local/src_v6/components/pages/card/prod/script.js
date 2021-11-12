!function () {
    'use strict';

    function toFavorites() {
        var card = $('.prod');
        if (card.length) {
            var btn = card.find('.addFavorites');
            btn.each(function () {
                var self = $(this);

                self.off('click.card').on('click.card', function(e) {
                    e.preventDefault();
                    $(this).toggleClass('active');
                });
            });
        }
    }

    $(function () {
        toFavorites();
    });
}();

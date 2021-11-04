!function () {
    'use strict';

    function toFavorites() {
        var toFavoritesBtn = $('.prod .toFavoritesBtn');
        if (toFavoritesBtn.length) {
            toFavoritesBtn.each(function () {
                var self = $(this);

                self.off('click.toFavoritesBtn').on('click.toFavoritesBtn', function(e) {
                    e.preventDefault();
                    self.toggleClass('active');
                });
            });
        }
    }

    $(function () {
        toFavorites();
    });
}();
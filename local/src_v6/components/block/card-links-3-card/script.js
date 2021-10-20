!function () {
    'use strict';

    function addToBasket() {
        var addBasketBtn = $('.addToBasket');
        if (addBasketBtn.length) {
            addBasketBtn.each(function () {
                var self = $(this);

                self.off('click.addBasketBtn').on('click.addBasketBtn', function(e) {
                    e.preventDefault();
                    console.log('Добавить в корзину');
                });
            });
        }
    }

    function toFavorites() {
        var card = $('.card-links-3-card');
        if (card.length) {
            card.each(function () {
                var self = $(this);
                var favoritesBtn = self.find('.toFavoritesBtn');

                favoritesBtn.off('click.card').on('click.card', function(e) {
                    e.preventDefault();
                    $(this).closest('.card-links-3-card').toggleClass('favorites-active');
                });
            });
        }
    }

    $(function () {
        addToBasket();
        toFavorites();
    });
}();

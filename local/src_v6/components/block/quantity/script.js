!function () {
    'use strict';

    function quantity() {
        var quantity = $('.js-quantity');
        if (quantity.length) {
            quantity.each(function () {
                var self = $(this);
                var btns = self.find('.js-quantity-btn');
                // var minus = self.find('.js-quantity-btn-minus');
                // var minus = self.find('.js-quantity-btn-plus');
                var input = self.find('.js-quantity-input');
                // var min = self.attr('min');

                // if (min) {
                //     if (parseFloat(input.val()) <= parseFloat(min)) {
                //         input.val(parseFloat(min));
                //         minus.addClass('disabled');
                //     } else {
                //         minus.removeClass('disabled');
                //     }
                // }

                btns.off('click.quantity').on('click.quantity', function(e) {
                    e.preventDefault();
                    var buf = parseFloat(input.val());
                    if ($(this).hasClass('js-quantity-btn-minus')) {
                        input.val(--buf);
                    } else
                    if ($(this).hasClass('js-quantity-btn-plus')) {
                        input.val(++buf);
                    }
                });
            });
        }
    }

    $(function () {
        quantity();
    });
}();

!function () {
    'use strict';

    /**
     * @method wsPagesToggle Включатель wsPages
     */
    function wsPagesToggle() {
        if (
            (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '')
        ) {
            $('head').append('<link rel="stylesheet" href="/css/libs/ws-pages.min.css"><script src="/js/libs/ws-pages.min.js"></script>');
        }
    }

    $(function () {
        wsPagesToggle();
    });
}();
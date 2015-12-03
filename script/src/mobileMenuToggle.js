var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = MobileMenuToggle;

function MobileMenuToggle() {
    if (!(this instanceof MobileMenuToggle)) {
        return new MobileMenuToggle();
    }

    console.log('MobileMenuToggle initialized.');

    navToggle();
    resizeCheck();

    function navToggle() {

        $('.nav__item--activator').click(function(){
            $('.nav__item--pages, .nav__item--deactivator, .nav__logo').addClass('nav__item--show').removeClass('nav__item--hide');
            $('.nav__item--activator').addClass('nav__item--hide').removeClass('nav__item--show');
            $('.nav').addClass('nav--toggled');
            disableScroll();
        });
        $('.nav__item--deactivator').click(function(){
            $('.nav__item--pages, .nav__item--deactivator, .nav__logo').addClass('nav__item--hide').removeClass('nav__item--show');
            $('.nav__item--activator').addClass('nav__item--show').removeClass('nav__item--hide');
            $('.nav').removeClass('nav--toggled');
            enableScroll();

        });

        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
                e.returnValue = false;
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        function disableScroll() {
            if (window.addEventListener)
                window.addEventListener('DOMMouseScroll', preventDefault, false);
                window.onwheel = preventDefault; // modern standard
                window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
                window.ontouchmove  = preventDefault; // mobile
                document.onkeydown  = preventDefaultForScrollKeys;

        }

        function enableScroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
                window.onmousewheel = document.onmousewheel = null;
                window.onwheel = null;
                window.ontouchmove = null;
                document.onkeydown = null;

        }

    }

    function resizeCheck() {
        $(window).resize(function() {
            $('.nav').removeClass('nav__toggled');
            if (Modernizr.mq('(min-width: 768px)')) {
                $('.nav__item--activator, .nav__item--deactivator').addClass('nav__item--hide').removeClass('nav__item--show');
                $('.nav__item--pages, .nav__logo').addClass('nav__item--show').removeClass('nav__item--hide');
            } else {
                $('.nav__item--activator').addClass('nav__item--show').removeClass('nav__item--hide');
                $('.nav__item--pages, .nav__item--deactivator, .nav__logo').addClass('nav__item--hide').removeClass('nav__item--show');
            }
        });

    }


}

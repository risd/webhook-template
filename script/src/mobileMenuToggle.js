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

        $('.nav--item--activator').click(function(){
            $('.nav--item--pages, .nav--item--deactivator, .nav--logo').addClass('nav--item__show').removeClass('nav--item__hide');
            $('.nav--item--activator').addClass('nav--item__hide').removeClass('nav--item__show');
            $('.nav').addClass('nav__toggled');
            disableScroll();
        });
        $('.nav--item--deactivator').click(function(){
            $('.nav--item--pages, .nav--item--deactivator, .nav--logo').addClass('nav--item__hide').removeClass('nav--item__show');
            $('.nav--item--activator').addClass('nav--item__show').removeClass('nav--item__hide');
            $('.nav').removeClass('nav__toggled');
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
                $('.nav--item--activator, .nav--item--deactivator').addClass('nav--item__hide').removeClass('nav--item__show');
                $('.nav--item--pages, .nav--logo').addClass('nav--item__show').removeClass('nav--item__hide');
            } else {
                $('.nav--item--activator').addClass('nav--item__show').removeClass('nav--item__hide');
                $('.nav--item--pages, .nav--item--deactivator, .nav--logo').addClass('nav--item__hide').removeClass('nav--item__show');
            }
        });

    }


}

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
            $('body').addClass('body--no-scroll');
        });
        $('.nav__item--deactivator').click(function(){
            $('.nav__item--pages, .nav__item--deactivator, .nav__logo').addClass('nav__item--hide').removeClass('nav__item--show');
            $('.nav__item--activator').addClass('nav__item--show').removeClass('nav__item--hide');
            $('.nav').removeClass('nav--toggled');
            $('body').removeClass('body--no-scroll');
        });

    }

    function resizeCheck() {
        $(window).resize(function() {
            $('.nav').removeClass('nav--toggled');
            $('body').removeClass('body--no-scroll');
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

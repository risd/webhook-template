var $ = global.jQuery;

module.exports = StickyNav;

function StickyNav() {
    if (!(this instanceof StickyNav)) {
        return new StickyNav();
    }
    console.log('StickyNav initialized.');

    stickyHeader();

    function stickyHeader() {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 1;
        var navbarHeight = $('.nav').outerHeight();


        $(window).scroll(function(event) {
            didScroll = true;
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);


        function hasScrolled() {
            var scrollTopPos = $(window).scrollTop();
            // console.log(scrollTopPos);
            if (Math.abs(lastScrollTop - scrollTopPos) <= delta) {
                return;
            }
            if (scrollTopPos > lastScrollTop && scrollTopPos > navbarHeight) {
                $('.nav').removeClass('nav__down').addClass('nav__up');
            } else {
                if ((scrollTopPos + $(window).height()) < $(document).height()) {
                    $('.nav').removeClass('nav__up').addClass('nav__down');
                }
            }

            lastScrollTop = scrollTopPos;
        }
    }
}

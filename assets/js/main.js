!function (e) {
    "use strict";

    $(document).ready(function () {

        // headerFixed
        function headerFixed() {
            var $scTop = $(window).scrollTop();
            if ($scTop > 0) {
                $(".header").addClass("fixdHeader");
            } else {
                $(".header").removeClass("fixdHeader");
            }
        }

        headerFixed();


        $(window).on('scroll', function () {
            var $scTop = $(window).scrollTop();
            if ($scTop < 120) {
                $('.gotop').hide(120);
            } else {
                $('.gotop').show(120);
            }

            headerFixed();
        });

        function bannerSlider() {
            $(".bannerSlider").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                loop: true,
                lazyLoad: true,
                // autoplaySpeed: 1000,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    480: {
                        items: 1,
                        nav: false,
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }

        bannerSlider();

    });

}(jQuery);
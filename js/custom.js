/* JS */
$(function () {
    //    sticky navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".navbar");
        if (scrolling >= 20) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });
    // // toggle navbar button //
    $(".navbar-toggler").on("click", function () {
        $(".navbar-brand").addClass("navbar__brand-none");
    });
    $(".btn-close").on("click", function () {
        $(".navbar-brand").removeClass("navbar__brand-none");
    });
    // // toggle navbar button //
    $(".navbar-toggler").on("click", function () {
        $(".hero__content").addClass("hero__content-img-back");
    });
    $(".btn-close").on("click", function () {
        $(".hero__content").removeClass("hero__content-img-back");
    });

    //  workplace owl-carouse
    $('#workplace .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: [" <i class='fal fa-arrow-left'></i> ", "<i class='fal fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1.9
            },
            1000: {
                items: 1.9
            }
        }
    });
    //  service  owl-carouse

    // $('.slider').slick({
    //     autoplay: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     leftMode: true,
    //     autoplaySpeed: 2000,
    // });


    $('#service .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: [" <i class='fal fa-arrow-left'></i> ", "<i class='fal fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1.5
            },
            600: {
                items: 2.5
            },
            769: {
                items: 1.8
            },
            1000: {
                items: 2.8
            },
            1500: {
                items: 2.8
            },
            1920: {
                items: 3
            }
        }
    })
    //  Dave Davidson owl-carouse
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [" <i class='fal fa-arrow-left'></i> ", "<i class='fal fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
});
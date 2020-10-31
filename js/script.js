//humberger toogler
$(document).ready(function() {

    $('.first-button').on('click', function() {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function() {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function() {

        $('.animated-icon3').toggleClass('open');
    });
});


//navbar active class color change
$(window).on('scroll', function() {

    if ($(window).scrollTop() > 100) {

        $('.current').addClass('navbar-item activee a animated fadeInDown');
    } else {

        $('.current').removeClass('navbar-item activee a animated fadeInDown');

    }

});




//Fixed header backgroundcolor change
$(window).on('scroll', function() {

    if ($(window).scrollTop() > 100) {

        $('.navbar').addClass('header-solid animated fadeInDown');
    } else {

        $('.navbar').removeClass('header-solid animated fadeInDown');

    }

});
//Fixed header navitem color change
$(window).on('scroll', function() {

    if ($(window).scrollTop() > 100) {

        $('.nav-link').addClass('navitem-colorchange  animated fadeInDown');
    } else {

        $('.nav-link').removeClass('navitem-colorchange  animated fadeInDown');

    }

});

//owl carousel
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({

        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 0,
        /*
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1366: {
                items: 1
            }
        }
    });
});


//for scroll fadeout
$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();


    }
});

//for scroll to top
$('.scrollup').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

//Aos
$(document).ready(function() {
    AOS.init();
    ({
        duration: 1000
    })

});

//isotope
(function() {

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({
            filter: filter
        });

    });

    $('.card').mouseenter(function() {

        $(this).find('.card-overlay').css({
            'top': '-100%'
        });
        $(this).find('.card-hover').css({
            'top': '0'
        });

    }).mouseleave(function() {

        $(this).find('.card-overlay').css({
            'top': '0'
        });
        $(this).find('.card-hover').css({
            'top': '100%'
        });

    });

})(jQuery);


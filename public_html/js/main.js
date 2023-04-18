$(document).ready(function () {
    function checkHeader() {
        let scrollSize = $(window).scrollTop();
        if (scrollSize > 100) {
            $('header').addClass('scaled');
        } else {
            $('header').removeClass('scaled');
        }
    }
    checkHeader();
    $(window).scroll(function () {
        checkHeader();
        animation();
    });

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        let windowWidth = $(window).width();
        $('.animation').each(function () {

            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 512) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }
    animation();


    if ($('.modal-form').length > 0) {
        $(function () {
            $(".login-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    }
                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
            $(".register-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                    rePassword: {
                        required: true,
                        equalTo: "#registerPassword"
                    }
                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        }); //Form Validation 
    }

    if ($('.hero-slider').length > 0) {
        $('.hero-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 25,
            items: 1,
            dots: true


        });
    }
    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 24,
            responsive: {
                320: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            },
            dots: true
        });
    }
    if ($('.testimonials-item').length > 0) {
        $('.testimonials-item:odd').addClass('testimonals-even');
        $('.testimonials-item:even').addClass('testimonals-odd');
        $('.testimonials-item:odd .testimonials-item-img img').attr('src', './img/testimonials/quotation-white.png');
        $('.testimonials-item:even .testimonials-item-img img').attr('src', './img/testimonials/quotation-green.png');
    }

    Fancybox.bind("[data-fancybox]", {
// Your custom options
    });
    if ($('.client-slider').length > 0) {
        $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            responsive: {
                360: {
                    items: 2,
                    margin: 5
                },
                992: {
                    items: 4,
                    margin: 15
                },
                1110: {
                    items: 6,
                    margin: 25
                }

            },
            dots: false

        });
    }
});
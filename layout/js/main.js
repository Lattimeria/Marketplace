
//Проверяем, есть ли подменю

$(".main-nav__item").each(function() {
        if ($(this).children('.main-nav__item-dropdown').length > 0) {
            $(this).addClass('main-nav__item--dropdown');
        }
       
    });


//Проверяем, есть ли подподменю

  $(".main-nav__item-dropdown-item").each(function() {
        if ($(this).children('.main-nav__item-dropdown2').length > 0) {
            $(this).addClass('main-nav__item-dropdown-item--dropright');


        }

    });





$('.main-nav__menuButton-mobile').click(function() {
    $('body').toggleClass('showMenu');
    return false;
});

$('.main-nav__item--close a').click(function() {
    $('body').removeClass('showMenu');
});


$('.main-nav__search a').click(function() {
    $(this).parent().toggleClass('openSearch');

});





$('.main-nav__item--dropdown').click(function() {
    if ($(window).width() < 920) {
        $(this).toggleClass('showSubMenu');
        return false;
    }
});


$('.main-nav__item-dropdown-item--dropright').click(function() {
    if ($(window).width() < 920) {
        $(this).toggleClass('showSubMenu');
        return false;
    }
});



$('.main-nav__item-dropdown-item').click(function() {
    if ($(window).width() < 920) {
        if (!$(this).children('.main-nav__item-dropdown2').length > 0) {
            document.location.href = $(this).children('.main-nav__item-dropdown-link').attr('href');
            return true;
        }

        return false;

    } else {
        document.location.href = $(this).children('.main-nav__item-dropdown-link').attr('href');
        return true;
    }
});


$('.main-nav__item-dropdown2-item').click(function() {

    if ($(window).width() < 1101) {
        if (!$(this).children('.main-nav__item-dropdown3').length > 0) {
            document.location.href = $(this).children('.main-nav__item-dropdown2-link').attr('href');
            return true;
        }

        return false;
    }

});








jQuery(window).scroll(function() {
    var $sections = $('.anchor-section');
    $sections.each(function(i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('li.active').removeClass('active');
            $('a[href="#' + id + '"]').parent('li').addClass('active');

        }
    })
});

$("body").on("click", ".scrollDownLink", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 50;
    $('body,html').animate({ scrollTop: top }, 500);
});







jQuery(document).ready(function() {

setTimeout(function() {
    $('.modal-city__link').fancybox({
        padding: 0,
    }) .trigger('click');
}, 500);




    var $containerWidth = $(window).width();
    if ($containerWidth >= 1200) {

        fixAnchorMenu();
    }

    $(window).on('resize', function() {
        var $containerWidth = $(window).width();
        if ($containerWidth >= 1200) {

            fixAnchorMenu();
        } else {
            $(".anchor-menu").css({ "right": "50px" });
        }
    });

    function fixAnchorMenu() {
        var windowWidth = $(window).width();
        var anchorMenuRight = (windowWidth - 1199) / 2 + 40;
        $(".anchor-menu").css({ "right": anchorMenuRight });

    }


});
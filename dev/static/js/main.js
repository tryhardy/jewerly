$(document).ready(function(){
    $('.top-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        dotsClass: "top-slider__nav"
    });

    lightHeader();
    squarePic(".reviews__image-wrapper");

    $(window).on("scroll", function(e){
        lightHeader();
    })

    $(window).resize(function(){
        squarePic(".reviews__image-wrapper");
    });

    $('.slider-single').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true,
        /*asNavFor: '.slider-nav'*/
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-single',
        dots: false,
        /*centerMode: true,*/
        focusOnSelect: true,
        infinite: true,
        dots: false
      });

      $(".product__tabs").on("click", ".product__tab:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("#tabs")
          .find(".product__tabs-content-item")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");

        $(".product__tabs-wrapper").css("transform", "translateX(" + ($(this).index() * -1 * 100) + "%)");
    });


    $(".hamburder-menu").on("click", function(){
        $(".hamburder-menu").toggleClass("active");
        $(".header-mobile").toggleClass("active");
    });

    $(".hamburger-close").on("click", function(){
        $(".hamburder-menu").toggleClass("active");
        $(".header-mobile").toggleClass("active");
    });

    //яндекс карты в оформлении заказа
    ymaps.ready(init);

});

function lightHeader(){
    if($(window).scrollTop() > 300) {
        $(".header").addClass("header--light")
    } else {
        $(".header").removeClass("header--light")
    }
}

function squarePic(currentClass){

    $(currentClass).each(function(){
        let height = $(this).css("width");
        $(this).css("height", height);
        //$(this).css("height", height);
    });
}

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}
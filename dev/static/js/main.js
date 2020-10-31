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
        let height = $(this).css("height");
        console.log(height);
        $(this).css("width", height);
        //$(this).css("height", height);
    });
}

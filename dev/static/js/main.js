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
    squarePic(".reviews__image");

    $(window).on("scroll", function(e){
        lightHeader();
    })
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
        /*let height = $(this).css("height");
        console.log(height);
        $(this).css("width", height);
        $(this).css("min-height", height);*/
    });
}

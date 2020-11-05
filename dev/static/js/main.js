$(document).ready(function(){
    $('.top-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        dotsClass: "top-slider__nav",
        fade: true,
        cssEase: 'linear'
    });

    lightHeader();
    squarePic(".reviews__image-wrapper");

    $(window).on("scroll", function(e){
        lightHeader();
    })

    $(window).resize(function(){
        squarePic(".reviews__image-wrapper");
    });

    //карточка товара
    $('.slider-single').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true,
        dotsClass: "slider-dots",
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,

            }
          },
        ]
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

    //Мобильное меню
    $(".menu-mob__btn").on("click", function(){
        let item = $(".menu-mob__btn").closest(".menu-mob__item--has-submenu");
        let submenu = item.find(".menu-mob__submenu");
        let submenuHeight = submenu[0].scrollHeight;
        if(item.hasClass("active-item")){
            item.removeClass("active-item");
            submenu.css("height", "0px");
        } else {
            item.addClass("active-item");
            submenu.css("height", submenuHeight + "px");
        }
        
    });



    /*ОФОРМЛЕНИЕ ЗАКАЗА*/

    //яндекс карты в оформлении заказа
    ymaps.ready(init);

    /*кнопка сворачивает инфо о заказе в мобилке*/
    $("#order-info-button").on("click", function(){
        let orderInfo = $("#order-info");
        let orderInfoBlock = $("#order-info-block");
        let orderInfoBlockHeight = $("#order-info-block")[0].scrollHeight;
        if(orderInfo.hasClass("active")) {
            orderInfo.removeClass("active");
            orderInfoBlock.css("height", "0px");
        } else {
            orderInfo.addClass("active");
            orderInfoBlock.css("height", orderInfoBlockHeight + 30 + "px");
        }
    });

    /*обеспечивает работу табов в мобилке*/
    $(".order__tabs-mobile-item").on("click", function(e){
        let target = e.target;
        let tab = target.closest(".order__tabs-mobile-item");
        let currentTabId = tab.dataset.tab;
        $(".order__tabs-mobile-item").removeClass("active");
        $(".order__tabs-mobile-info").each(function(){
            if($(this).attr("data-tab") == currentTabId) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        tab.classList.add("active");
    });

    /*Работа радио кнопок оплаты */
    $("input[name='payment']").each(function(){
        let select = $(this).closest(".order__select");
        console.log(select)
        if ($(this).checked) {
            $(".order__select").removeClass("active");
            select.classList.add("active");
        }
    });
    $("input[name='payment']").on("change", function(e){
        let target= e.target;
        let select = target.closest(".order__select");
        if (target.checked) {
            $(".order__select").removeClass("active");
            select.classList.add("active");
        }
    });
    /*Работа радио кнопок доставки*/
    $("input[name='delivery']").each(function(){
        let select = $(this).closest(".order__select");
        console.log(select)
        if ($(this).checked) {
            $(".order__select").removeClass("active");
            select.classList.add("active");
        }
    });
    $("input[name='delivery']").on("change", function(e){
        let target= e.target;
        let select = target.closest(".order__select");
        if (target.checked) {
            $(".order__select").removeClass("active");
            select.classList.add("active");
        }
    });

    $(".order__next").on("click", function(e){
        e.preventDefault();
        let currentTabId = $(this).attr("data-tab");

        $(".order__tabs-mobile-info").each(function(){
            if($(this).attr("data-tab") == currentTabId) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        $(".order__tabs-mobile-item").each(function(){
            if($(this).attr("data-tab") == currentTabId) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });
});

function lightHeader(){
    if($(window).scrollTop() > 300) {
        $(".header").addClass("header--light");
    } else {
        $(".header").removeClass("header--light");
    }
}

function squarePic(currentClass){

    $(currentClass).each(function(){
        let height = $(this).css("width");
        $(this).css("height", height);
    });
}

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
}
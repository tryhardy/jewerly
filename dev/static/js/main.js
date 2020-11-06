$(document).ready(function(){
    /*анимации на главной*/
    productAnimation(".popular-products__item", 3);
    productAnimation(".section-title");
    productAnimation(".section-subtitle");
    productAnimation(".video-section");
    productAnimation(".video");
    productAnimation(".reviews-section");
    productAnimation(".reviews__item", 2);
    productAnimation(".reviews__more");

    /*анимации на странице спецпредложений*/
    productAnimation(".title");
    productAnimation(".gifts__item", 2);

    lightHeader();
    squarePic(".reviews__image-wrapper");

    
    $(window).on("scroll", function(e){
        var isScrolling = false;
        lightHeader();

        /*анимации на главной*/
        productAnimation(".popular-products__item", 3);
        productAnimation(".section-title");
        productAnimation(".section-subtitle");
        productAnimation(".video-section");
        productAnimation(".video");
        productAnimation(".reviews-section");
        productAnimation(".reviews__item", 2);
        productAnimation(".reviews__more");

        /*анимации на странице спецпредложений*/
        productAnimation(".title");
        productAnimation(".gifts__item", 2);
    })

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

    $(window).resize(function(){
        squarePic(".reviews__image-wrapper");
    });



    /*ВИДЕО ПЛЕЕР YOUTUBE - START*/
    $(".video__button").on("click", function(){
        $(".video__bg").css("display", "none");
        $(".video__button").addClass("inactive");
        playVideo();
    });
    $(".video__bg").on("click", function(){
        $(".video__bg").css("display", "none");
        $(".video__button").addClass("inactive");
        playVideo();
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

    /* МОБИЛЬНОЕ МЕНЮ - START*/
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
 
    $(".hamburder-menu").on("click", function(){
        $(".hamburder-menu").toggleClass("active");
        $(".header-mobile").toggleClass("active");
    });

    $(".hamburger-close").on("click", function(){
        $(".hamburder-menu").toggleClass("active");
        $(".header-mobile").toggleClass("active");
    });
    /* МОБИЛЬНОЕ МЕНЮ - END*/

    /*ОФОРМЛЕНИЕ ЗАКАЗА - START*/
    /*яндекс карты в оформлении заказа*/
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

    /*работа кнопок перехода к следующему этапу заказа*/
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

/*инициирцет яндекс карты в оформлении заказа */
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
}

function productAnimation(className, colsCount = 1){
    let item = $(className);
    if(colsCount == 3) {
        item.each(function(index){
            let pixelsLeft = $(this).offset().top - ($(window).scrollTop() + $(window).height() - 100);
            if(pixelsLeft < 0){
                if(index < 3) {
                    if(index == 0) {
                        $(this).css("transition", "all .3s ease-in-out .1s");
                    } else if(index == 1) {
                        $(this).css("transition", "all .3s ease-in-out .2s");
                    } else if(index == 2){
                        $(this).css("transition", "all .3s ease-in-out .3s");
                    }
                } else {
                    if(Number.isInteger(index/3)){
                        $(this).css("transition", "all .3s ease-in-out .1s");
                    } else if(Number.isInteger(index/2)) {
                        $(this).css("transition", "all .3s ease-in-out .2s");
                    } else {
                        $(this).css("transition", "all .3s ease-in-out .3s");
                    }
                }
                $(this).addClass("animate");
            }
        });
    }
    if(colsCount == 2) {
        item.each(function(index){
            let pixelsLeft = $(this).offset().top - ($(window).scrollTop() + $(window).height() - 100);
            if(pixelsLeft < 0){
                if(index < 2) {
                    if(index == 0) {
                        $(this).css("transition", "all .3s ease-in-out .1s");
                    } else {
                        $(this).css("transition", "all .3s ease-in-out .2s");
                    }
                } else {
                    if(Number.isInteger(index/2)) {
                        $(this).css("transition", "all .3s ease-in-out .2s");
                    } else {
                        $(this).css("transition", "all .3s ease-in-out .1s");
                    }
                }
                $(this).addClass("animate");
            }
        });
    }
    if(colsCount == 1) {
        item.each(function(index){
            let pixelsLeft = $(this).offset().top - ($(window).scrollTop() + $(window).height() - 100);
            if(pixelsLeft < 0){
                $(this).css("transition", "all .3s ease-in-out .1s");
                $(this).addClass("animate");
            }
        });
    }
}



/* YOUTUBE VIDEO */
/*подключаю скрипт с апи youtube*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var video;
function onYouTubeIframeAPIReady() {
    video = new YT.Player('video', {
    height: '1000',
    width: '100%',
    videoId: 'MgnlbDVuPdg',
    playerVars: {
        autoplay: 0,
        controls: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        showinfo:0,
        rel:0,
    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
    });
}


/*Слушатель события*/
function onPlayerReady(event) {
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        $(".video__bg").css("display", "block");
        $(".video__button").removeClass("inactive");
    }
    
    if (event.data == YT.PlayerState.PLAYING) {
        $(".video__button").addClass("inactive");
        $(".video__bg").css("display", "none");
    }

    if (event.data == YT.PlayerState.PAUSED) {

    }
}

function stopVideo() {
    video.stopVideo();
}

function playVideo() {
    video.playVideo();
}
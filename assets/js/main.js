"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.addEventListener('load', function () {
  console.log('All resources finished loading!');
  $('a').click(function () {
    $(this).toggleClass('active');
    return false;
  });

  document.getElementById('buttonnav').onclick = function () {
    openbox('header__menu', this);
    return false;
  };

  function openbox(id, buttonnav) {
    var btn = document.querySelector('.menu-btn');
    var div = document.getElementById(id);

    if (div.style.top === '-281px') {
      //btn.classList.add('is-active');
      div.style.top = '81px';
      div.style.opacity = '1';
    } else {
      //btn.classList.remove('is-active');
      div.style.top = '-281px';
      div.style.opacity = '0';
    }
  }

  document.getElementById('nav').onclick = function () {
    menuHide('header__menu', this);
    return false;
  };

  function menuHide(id, nav) {
    var div = document.getElementById(id);
    console.log(div);

    if (div.style.top === '81px') {
      div.style.top = '-281px';
      div.style.opacity = '0';
    } //btn.classList.remove('is-active');

  } //================================================================//
  //*********** main.js
  //*********** © Dariya Leleka - code
  //*********** Описание поведения slider
  //*********** 
  //*********** 
  //================================================================//


  $('.second-screen_content__items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: false,
    infinite: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 3,
        appendArrows: $('.second-screen_content__arrows'),
        prevArrow: '<div class="arrow"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        appendArrows: $('.second-screen_content__arrows'),
        prevArrow: '<div class="arrow"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow"><img src="assets/img/slider-arrow-next.svg" alt=""></div>',
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        appendArrows: $('.second-screen_content__arrows'),
        prevArrow: '<div class="arrow"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow"><img src="assets/img/slider-arrow-next.svg" alt=""></div>',
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 560,
      settings: {
        arrows: true,
        slidesToScroll: 1,
        //centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        appendArrows: $('.second-screen_content__arrows'),
        prevArrow: '<div class="arrow"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'
      }
    }]
  });
});
window.addEventListener('load', function () {
  var _settings;

  $('.six-screen__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    "true": false,
    dots: false,
    appendArrows: $('.six-screen-arrows'),
    prevArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
    nextArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-next.svg" alt=""></div>',
    infinite: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        //centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 560,
      settings: (_settings = {
        slidesToShow: 1,
        slidesToScroll: 1
      }, _defineProperty(_settings, "slidesToShow", 1), _defineProperty(_settings, "appendArrows", $('.six-screen-arrows')), _defineProperty(_settings, "prevArrow", '<div class="arrow arow-new"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>'), _defineProperty(_settings, "nextArrow", '<div class="arrow arow-new"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'), _settings)
    }]
  });
});
window.addEventListener('load', function () {
  var _settings2;

  $('.seven-screen__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    "true": false,
    dots: false,
    appendArrows: $('.seven-screen-arrows'),
    prevArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
    nextArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-next.svg" alt=""></div>',
    infinite: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        //centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        //centerMode: true,
        //centerPadding: '40px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 560,
      settings: (_settings2 = {
        slidesToShow: 1,
        slidesToScroll: 1
      }, _defineProperty(_settings2, "slidesToShow", 1), _defineProperty(_settings2, "appendArrows", $('.seven-screen-arrows')), _defineProperty(_settings2, "prevArrow", '<div class="arrow arow-new"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>'), _defineProperty(_settings2, "nextArrow", '<div class="arrow arow-new"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'), _settings2)
    }]
  });
}); //================================================================//
//*********** main.js
//*********** © Dariya Leleka - code
//*********** Плавный скролл
//*********** 
//*********** 
//================================================================//

$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top - 60
  }, 800);
});
//# sourceMappingURL=main.js.map

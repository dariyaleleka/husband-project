"use strict";

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

  }

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
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 770,
      settings: {
        arrows: true,
        appendArrows: $('.second-screen_content__arrows'),
        prevArrow: '<div class="arrow"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow"><img src="assets/img/slider-arrow-next.svg" alt=""></div>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 560,
      settings: {
        arrows: true,
        slidesToScroll: 1,
        //centerPadding: '40px',
        slidesToShow: 1,
        appendArrows: $('.second-screen_content__arrows'),
        prevArrow: '<div class="arrow"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'
      }
    }]
  });
});
window.addEventListener('load', function () {
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
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.six-screen-arrows'),
        prevArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'
      }
    }]
  });
});
window.addEventListener('load', function () {
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
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.seven-screen-arrows'),
        prevArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-back.svg" alt=""> </div>',
        nextArrow: '<div class="arrow arow-new"><img src="assets/img/slider-arrow-next.svg" alt=""></div>'
      }
    }]
  });
});
$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top - 60
  }, 800);
});
//# sourceMappingURL=main.js.map

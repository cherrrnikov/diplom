$(document).ready(function () {
  // Вызов мобильного окна на маленьких экранах
  var menuButton = $(".menu-button");
  menuButton.on("click", function() {
    $(".navbar-window").toggleClass("navbar-window--visible");
  })
  var closeButton = $(".navbar-window__close");
  closeButton.on("click", function() {
    $(".navbar-window").removeClass("navbar-window--visible");
  })
  var menuLink = $(".navbar-menu__link")
  menuLink.on("click", function() {
    $(".navbar-window").removeClass("navbar-window--visible");
  })


  // Переключение по табам
  // Таб "Новинки"
  var trendsTabNew = $(".trends-tabs__tab--primary")
  trendsTabNew.on("click", function() {
    $(".trends-card").removeClass("trends-card--hidden");
    $(".trends-button").removeClass("trends-button--hidden");
    $(".best-card").removeClass("best-card--visible");
    $(".soon-card").removeClass("soon-card--visible")

  // Меняются цвета табов при клике
    $(".trends-tabs__tab--primary").removeClass("news-tab");
    $(".trends-tabs__tab--best").removeClass("best-tab");
    $(".trends-tabs__tab--soon").removeClass("soon-tab")
  })
  
  // Таб "Лучшее"
  var trendsTabBest = $(".trends-tabs__tab--best")
  trendsTabBest.on('click', function() {
    $('.trends-card').addClass("trends-card--hidden");
    $(".trends-button").addClass("trends-button--hidden");
    $(".best-card").addClass("best-card--visible");
    $(".soon-card").removeClass("soon-card--visible")
    

  // Меняются цвета табов при клике
    $(".trends-tabs__tab--primary").addClass("news-tab");
    $(".trends-tabs__tab--best").addClass("best-tab");
    $(".trends-tabs__tab--soon").removeClass("soon-tab")
  
  })
  
  // Таб "Скоро"
  var trendsTabSoon = $(".trends-tabs__tab--soon")
  trendsTabSoon.on("click", function() {
    $('.trends-card').addClass("trends-card--hidden");
    $(".trends-button").addClass("trends-button--hidden");
    $(".best-card").removeClass("best-card--visible")
    $(".soon-card").addClass("soon-card--visible")

  // Меняются цвета табов при клике
    $(".trends-tabs__tab--soon").addClass("soon-tab")
    $(".trends-tabs__tab--primary").addClass("news-tab");
    $(".trends-tabs__tab--best").removeClass("best-tab");
  })

  // Слайдер с отзывами
  var reviewsSlider = new Swiper('.reviews-slider', {
  speed: 700,
  autoplay: {
    enabled: true,
    delay: 7000,
    disableOnInteraction: false,
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Подключение клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  })
  $(".swiper-container").on("mouseenter",function(){
    reviewsSlider.autoplay.stop();
  });
  $(".swiper-container").on("mouseleave",function(){
    reviewsSlider.autoplay.start();
  });

  // Слайдер с историями
  var storiesSlider = new Swiper('.stories-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  effect: "fade",
  // Подключение клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
})
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Укажите Ваше имя",
          minlength: "Имя должно быть не короче двух символов",
        },
        email: {
          required: "Пожалуйста, укажите Вашу почту",
          email: "Пример: name@domain.com",
        },
        phone: {
          required: "Укажите номер телефона",
          minlength: "Пример: +7 (xxx)-xxx-xx-xx",
        },
        subscribeEmail : {
          required: "Пожалуйста, укажите Вашу почту",
          email: "Пример: name@domain.com",
        },
      },
    });
  });
  // Модальные окна
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalOverlay = $('.modal__overlay')
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Сокрытие модального окна при нажатии на Escape
  $('body').on('keydown', function(e) {
   if(e.keyCode == 27) { // when Enter key is pressed trigger click event for first button 
      $('.modal__overlay').removeClass('modal__overlay--visible')
      $('.modal__dialog').removeClass('modal__dialog--visible')
   }
  });
  $(".phone").mask("+7 (000)-000-00-00")
})


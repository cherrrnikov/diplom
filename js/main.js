$(document).ready(function () {
  // Вызов мобильного окна на маленьких экранах
  var menuButton = $(".menu-button");
  menuButton.on("click", function() {
    $(".navbar-window").toggleClass("navbar-window--visible");
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
  var reviewsSlider = new Swiper('.swiper-container', {
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
})



$(document).ready(function () {
  // Вызов мобильного окна на маленьких экранах
  var menuButton = $(".menu-button");
  menuButton.on("click", function() {
    $(".navbar-window").toggleClass("navbar-window--visible");
  })
})
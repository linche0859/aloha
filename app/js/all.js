(function () {
  $('#carouselControls').carousel({
    interval: 5000,
  });

  // Initialize daterangepicker
  $('#dropdownCheckIn').daterangepicker();

  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();

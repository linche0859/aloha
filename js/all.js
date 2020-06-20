"use strict";

(function () {
  $('#carouselControls').carousel({
    interval: 5000
  }); // Initialize daterangepicker

  $('#dropdownCheckIn').daterangepicker(); // Initialize Swiper

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // 查詢結果頁的每個項目，引導至訂房詳細頁

  var searchResultList = document.querySelectorAll('.searchResult__list > .card');
  searchResultList.forEach(function (item) {
    item.addEventListener('click', function () {
      location.href = 'detail.html';
    });
  });
})();
//# sourceMappingURL=all.js.map

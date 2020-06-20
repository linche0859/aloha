"use strict";

// 訂房詳細頁的 js 操作
(function () {
  /**
   * 元素上設定指定樣式
   * @param {string} selector 元素選擇器
   * @param {string} className class 名稱
   * @param {boolean} add 加入樣式為 true，移除則為 false
   */
  function setClassWithElement(_ref) {
    var _ref$selector = _ref.selector,
        selector = _ref$selector === void 0 ? '' : _ref$selector,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        _ref$add = _ref.add,
        add = _ref$add === void 0 ? false : _ref$add;
    var element = document.querySelector(selector);
    element && element.classList[add ? 'add' : 'remove'](className);
  }
  /**
   * 調整視窗事件
   */


  function resizeHandler() {
    var _document$documentEle = document.documentElement.getBoundingClientRect(),
        width = _document$documentEle.width; // 在 768px 以下時，隱藏搜尋的表單


    setClassWithElement({
      selector: '.search .card > a',
      className: 'd-flex',
      add: width < 768
    });
    setClassWithElement({
      selector: '.search .card > a',
      className: 'd-none',
      add: width > 767
    });
    setClassWithElement({
      selector: '.search form',
      className: 'd-none',
      add: width < 768
    });
    setClassWithElement({
      selector: '.search form',
      className: 'd-flex',
      add: width > 767
    });
  }

  window.addEventListener('resize', resizeHandler); // 預設先執行一次

  resizeHandler();
})();
//# sourceMappingURL=detail.js.map

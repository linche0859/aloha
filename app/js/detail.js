// 訂房詳細頁的 js 操作

(function () {
  /**
   * 元素上設定指定樣式
   * @param {string} selector 元素選擇器
   * @param {string} className class 名稱
   * @param {boolean} add 加入樣式為 true，移除則為 false
   */
  function setClassWithElement({ selector = '', className = '', add = false }) {
    const element = document.querySelector(selector);
    element && element.classList[add ? 'add' : 'remove'](className);
  }

  /**
   * 調整視窗事件
   */
  function resizeHandler() {
    const { width } = document.documentElement.getBoundingClientRect();
    // 在 768px 以下時，隱藏搜尋的表單
    setClassWithElement({
      selector: '.search .card > a',
      className: 'd-flex',
      add: width < 768,
    });
    setClassWithElement({
      selector: '.search .card > a',
      className: 'd-none',
      add: width > 767,
    });
    setClassWithElement({
      selector: '.search form',
      className: 'd-none',
      add: width < 768,
    });
    setClassWithElement({
      selector: '.search form',
      className: 'd-flex',
      add: width > 767,
    });
  }
  window.addEventListener('resize', resizeHandler);

  // 預設先執行一次
  resizeHandler();
})();

(function (window) {
  const App = window.App || {};
  const $ = window.jQuery;

  function rangeStyle(range, value) {
    range.on('input', function (e) {
      if (this.value < 31) {
        value.text(this.value).css({
          color: 'orange',
        });
      }
      if (this.value > 30 && this.value < 71) {
        value.text(this.value).css({
          color: 'green',
        });
      }
      if (this.value > 70 && this.value < 101) {
        value.text(this.value).css({
          color: 'red',
          'font-size': 'bold',
        });
      }
    });
    $('#res').on('click', function () {
      $('.rangeValue').text('30').css({ color: 'orange' });
    });
  }

  App.rangeStyle = rangeStyle;
  window.App = App;
})(window);

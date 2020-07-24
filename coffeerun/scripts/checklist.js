(function (window) {
  const App = window.App || {};
  const $ = window.jQuery;

  function Checklist(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error(`Could not find element with selector: ${selector}`);
    }
  }

  // конструктор Row будет отвечать за создание всех элементов DOM
  function Row(coffeeOrder) {
    const $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      class: 'checkbox',
    });

    const $label = $('<label></label>');

    const $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAdress,
    });
  }

  App.Checklist = Checklist;
  window.App = App;
})(window);

(function (window) {
  const App = window.App || {};
  const $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    console.log(this.$element);

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
      value: coffeeOrder.emailAddress,
    });

    // Переменная description это текстовое описание, которое будет отображаться рядом с флажком
    let description = ` ${coffeeOrder.size}, `;
    if (coffeeOrder.flavor) {
      description += `${coffeeOrder.flavor}, `;
    }
    description += `${coffeeOrder.coffee}, `;
    description += ` (${coffeeOrder.emailAddress})`;
    description += ` [${coffeeOrder.strength}x]`;

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    // Делаем поддерево DOM доступным в виде свойства экземпляра, присвоив его свойству this.$element
    this.$element = $div;
  }

  CheckList.prototype.addRow = function (coffeeOrder) {
    // Удаляем все имеющиеся строки с входящим email
    this.removeRow(coffeeOrder.emailAddress);
    // Создаем новый экземпляр строки на основе информации о заказе кофе
    const rowElement = new Row(coffeeOrder);

    // Добавляем свойство $element нового экземпляра строки в перечень
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function (email) {
    this.$element
      .find(`[value="${email}"]`)
      .closest('[data-coffee-order="checkbox"]')
      .remove();
  };

  App.CheckList = CheckList;
  window.App = App;
})(window);

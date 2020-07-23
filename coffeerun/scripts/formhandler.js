(function (window) {
  const App = window.App || {};
  const { createModal } = App;
  const $ = window.jQuery;
  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error(`Could not find element with selector: ${selector}`);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', e => {
      e.preventDefault();

      const data = {};
      $(this.$formElement)
        .serializeArray()
        .forEach(function (i) {
          data[i.name] = i.value;
          console.log(`${i.name} is ${i.value}`);
        });
      console.log(data.strength);

      App.createModal(data.size, data.flavor, data.strength, data.emailAddress);

      fn(data);
      this.$formElement[0].reset();
      this.$formElement[0].elements[0].focus();
      $('.rangeValue').text('30').css({ color: 'orange' });
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);

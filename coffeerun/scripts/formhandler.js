(function (window) {
  const App = window.App || {};
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
      console.log(data);
      fn(data);
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);

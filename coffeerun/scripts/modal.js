(function (window) {
  const App = window.App || {};
  const $ = window.jQuery;

  function createModal(size, flavor, strength, email) {
    if (size === 'coffee-zilla' && flavor !== '' && strength === '100') {
      console.log($('#exampleModal'));
      $(document).ready(function () {
        $('#myModal').modal('show');
        $('.col-form-label').text(`Hello, ${email}`);
      });
    }
  }

  App.createModal = createModal;
  window.App = App;
})(window);

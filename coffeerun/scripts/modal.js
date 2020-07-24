(function (window) {
  const App = window.App || {};
  const $ = window.jQuery;
  let eMail = '';

  function addSelector(selector, className) {
    $(selector).addClass(className);
  }

  function removeSelector(selector, className) {
    $(selector).removeClass(className);
  }

  function showChooseCheckbox(e) {
    e.preventDefault();
    removeSelector('#option-form', 'd-none');
    addSelector('#first-screen', 'd-none');
  }

  function showEmailInput() {
    removeSelector('#no-email', 'd-none');
    $('#submit-email').on('click', showChooseCheckbox);
  }

  function controlModal(e) {
    $('#btn-choose').button('dispose');
    if (eMail === '') {
      showEmailInput();
    } else {
      showChooseCheckbox();
    }
  }

  function createModal(size, flavor, strength, email) {
    if (size === 'coffee-zilla' && flavor !== '' && strength === '100') {
      console.log(email);
      eMail = email;
      $(document).ready(function () {
        $('#myModal').modal('show');
        $('#btn-ok').on('click', controlModal);
      });
    }
  }

  App.createModal = createModal;
  window.App = App;
})(window);

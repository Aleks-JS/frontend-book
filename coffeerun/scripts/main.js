(function (window) {
  const FORM_SELECTOR = '[data-coffee-order="form"]';
  const CHECKLIST_SELECTOR = '[data-coffee-order]';
  const { App } = window;
  const { Truck } = App;
  const { DataStore } = App;
  const { FormHandler } = App;
  const { CheckList } = App;
  const { rangeStyle } = App;
  const { createModal } = App;
  const myTruck = new Truck('ncc-1701', new DataStore());
  const formHandler = new FormHandler(FORM_SELECTOR);

  // Регистрация метода createOrdrer в качестве обработчика события
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  rangeStyle($('#strengthLevel'), $('.rangeValue'));
  console.log(formHandler);
  window.myTruck = myTruck;
})(window);

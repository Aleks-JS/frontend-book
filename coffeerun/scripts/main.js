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
  const checkList = new CheckList(CHECKLIST_SELECTOR);
  const formHandler = new FormHandler(FORM_SELECTOR);
  window.myTruck = myTruck;

  // Регистрация метода createOrdrer в качестве обработчика события
  // formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  rangeStyle($('#strengthLevel'), $('.rangeValue'));
})(window);

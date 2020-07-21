(function (window) {
  const { App } = window;
  const { Truck } = App;
  const { DataStore } = App;

  const myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
})(window);

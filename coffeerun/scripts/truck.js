(function (window) {
  const App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  // Метод, который добавляет данные о заказчике и заказе в базу данных
  Truck.prototype.createOrder = function (order) {
    console.log(`Adding order for ${order.emailAddress}`);
    this.db.add(order.emailAddress, order);
  };

  // Метод, который удаляет заказ из базы данных после его выдачи
  Truck.prototype.deliverOrder = function (customerId) {
    console.log(`Delivering order for ${customerId}`);
    this.db.remove(customerId);
  };

  // Метод, который получает массив данных всех email и выводит информацию о заказе
  Truck.prototype.printOrders = function () {
    const customerIdArray = Object.keys(this.db.getAll());

    console.log(`Truck #${this.truckId} has pending orders:`);
    customerIdArray.forEach(
      function (id) {
        console.log(this.db.get(id));
      }.bind(this) // При вызове обратной функции в ForEach this=undefined
    ); // Метод bind передает this ссылку на экземпляр truck
  };

  App.Truck = Truck;
  window.App = App;
})(window);

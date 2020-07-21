(function (window) {
  const App = window.App || {};

  function DataStore() {
    const data = {};
    this.data = data;
  }

  // Прототип конструктора *en* Constructor prototype
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  // Создаем метод для поиска значения по заданному ключу *en* Create a method for finding a value by a given key
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };

  // Метод для поиска всех ключей и значений *en* Method to find all keys and values
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  // Метод для удаления информации *en* Method for removing information
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;

  window.App = App;
})(window);

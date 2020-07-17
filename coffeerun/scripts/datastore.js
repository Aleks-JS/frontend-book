(function (window) {
  const App = window.App || {};

  function DataStore() {
    console.log('running the Datastore function');
  }
  App.DataStore = DataStore;
  window.App = App;
})(window);

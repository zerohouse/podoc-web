(function () {
  var app = angular.module('podoc.services');
  app.service('db', db);
  /* @ng-inject */
  function db($window) {

    var self = this;
    set('etc', {});
    set('user', {});
    set('language', {language: 'en', isSet: false});
    set('pokemons', []);
    set('playerStatus', {});
    set('orderPokedex', {orderBy: 'id', keyword: ''});
    set('orderMypokemon', {orderBy: 'creation_time_ms', desc: true});

    function set(val, defaultObj) {
      try {
        self[val] = $window.localStorage[val] === undefined ? defaultObj : JSON.parse($window.localStorage[val]);
        if (typeof self[val] !== "object") {
          self[val] = defaultObj;
        }
      }
      catch (e) {
        self[val] = defaultObj;
      }
    }

  }

  app.run(function (db, $rootScope, $window) {
    angular.forEach(db, function (v, k) {
      watch(k);
    });
    function watch(val) {
      $rootScope.$watch(function () {
        return db[val];
      }, function (v) {
        $window.localStorage[val] = JSON.stringify(v);
      }, true);
    }
  });
})();


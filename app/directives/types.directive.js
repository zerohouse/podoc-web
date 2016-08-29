(function () {
  angular.module('podoc.directives').directive('types', types);
  /* @ng-inject */
  function types() {
    return {
      restrict: 'E',
      template: '<type type="type" ng-repeat="type in types"></type>',
      scope: {
        types: '='
      }
    };
  }
})();

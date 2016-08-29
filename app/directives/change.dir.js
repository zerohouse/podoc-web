(function () {
  angular.module('podoc.directives').directive('change', change);
  /* @ng-inject */
  function change() {
    return {
      restrict: 'E',
      scope: {
        change: '='
      },
      template: "<span ng-if=\"change>0\" style=\"color:green\"><i class=\"ion-arrow-up-b\"></i>{{change}}</span>" +
      "<span ng-if=\"change==0\" style=\"color:grey\"><i class=\"ion-android-remove\"></i></span>" +
      "<span ng-if=\"change<0\" style=\"color:red\"><i class=\"ion-arrow-down-b\"></i>{{-change}}</span>"
    };
  }
})();

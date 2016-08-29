/* @ng-inject */
angular.module('podoc')
    .config(($locationProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .run(function ($rootScope, $state, $window, $location) {
        $rootScope.$on('$stateChangeSuccess', function () {
            $window.ga('send', 'pageview', $location.path());
        });
    });
(function () {
    angular.module('podoc').run(rootScopeSetting);
    /* @ng-inject */
    function rootScopeSetting($rootScope, $state) {
        $rootScope.getClass = function () {
            return $state.current.name.split('.')[0] + " " + $state.current.classes || '';
        };

    }
})();
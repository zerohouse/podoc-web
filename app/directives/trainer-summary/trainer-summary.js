(function () {
    angular.module('podoc.directives').directive('trainerSummary', trainerSummary);
    /* @ng-inject */
    function trainerSummary() {
        return {
            restrict: 'E',
            scope: {
                trainer: '=',
                rank: '='
            },
            templateUrl: '/directives/trainer-summary/trainer-summary.html'
        };
    }
})();
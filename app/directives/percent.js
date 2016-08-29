(function () {
    angular.module('podoc.directives').directive('percent', percent);
    /* @ng-inject */
    function percent() {
        return {
            restrict: 'E',
            template: '{{v*100/m|number:1}}%',
            scope: {v: '=', m: '='}
        };
    }
})();
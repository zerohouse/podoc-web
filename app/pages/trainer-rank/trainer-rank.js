(function () {
    angular.module('podoc.controllers').controller('trainerRankCtrl', trainerRankCtrl);
    /* @ng-inject */
    function trainerRankCtrl($ajax, $scope, rankerService, $stateParams) {

        $scope.$on('$stateChangeSuccess', function () {
            rankerService.district = $stateParams.district;
            rankerService.reset();

            $ajax.get('/api/v1/address/detail');
        });

        $scope.querySearch = function (keyword) {
            return $ajax.get('/api/v1/address/web', {keyword: keyword});
        };

        $scope.rankerService = rankerService;

        $scope.selectedItemChange = function (item) {
            if (item !== undefined)
                rankerService.district = item.longName;
            else {
                rankerService.district = '';
            }
            rankerService.reset();
        };

    }
})();
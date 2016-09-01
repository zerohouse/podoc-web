(function () {
    angular.module('podoc.controllers').controller('trainerRankCtrl', trainerRankCtrl);
    /* @ng-inject */
    function trainerRankCtrl($ajax, $scope, rankerService, $stateParams) {

        $scope.reset = function () {
            $ajax.get('/api/v1/address/detail', {id: rankerService.district}).then(function (res) {
                $scope.address = res;
                $scope.address.sum = $scope.address.red + $scope.address.blue + $scope.address.yellow;
                $scope.address.redPercent = $scope.address.red * 100 / $scope.address.sum;
                $scope.address.bluePercent = $scope.address.blue * 100 / $scope.address.sum;
                $scope.address.yellowPercent = $scope.address.yellow * 100 / $scope.address.sum;
            });
        };

        $scope.$on('$stateChangeSuccess', function () {
            rankerService.district = $stateParams.district;
            rankerService.reset();
            $scope.reset();
        });

        $scope.querySearch = function (keyword) {
            return $ajax.get('/api/v1/address/web', {keyword: keyword});
        };

        $scope.rankerService = rankerService;

        $scope.selectedItemChange = function (item) {
            if (item !== undefined) {
                rankerService.district = item.id;
            }
            else {
                rankerService.district = null;
            }
            rankerService.reset();
            $scope.reset();
        };

    }
})();
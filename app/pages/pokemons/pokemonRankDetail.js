(function () {
    angular.module('podoc.controllers').controller('pokemonRankDetailCtrl', pokemonRankDetailCtrl);
    /* @ng-inject */
    function pokemonRankDetailCtrl(pokemonRankService, $scope) {
        $scope.pokemonRankService = pokemonRankService;

        pokemonRankService.reset();
        pokemonRankService.more();

        $scope.$on('$stateChangeSuccess', function () {
            pokemonRankService.reset();
            pokemonRankService.more();
        });
    }
})();
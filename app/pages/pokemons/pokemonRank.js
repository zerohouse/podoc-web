(function () {
    angular.module('podoc.controllers').controller('pokemonRankCtrl', pokemonsCtrl);
    /* @ng-inject */
    function pokemonsCtrl(pokemonRankService, $scope) {
        $scope.pokemonRankService = pokemonRankService;
        pokemonRankService.allGet();
    }
})();
angular.module('podoc.controllers').controller('pokemonDetailCtrl', pokemonDetailCtrl);
/* @ng-inject */
function pokemonDetailCtrl($scope, $stateParams, $ajax, pokemonService, Pokemons) {

    getPokemon($stateParams.id);

    $scope.$on('$stateChangeSuccess', function () {
        getPokemon($stateParams.id);
    });

    function getPokemon(id) {
        $ajax.get('/api/v1/pokemon', {id: id}).then(function (pokemon) {
            pokemonService.setPokemon(pokemon);
            $scope.pokemon = pokemon;
            $scope.pokemon.owner.pokemons.forEach(function (pokemon) {
                pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
            });
        });
    }
}

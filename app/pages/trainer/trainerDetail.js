(function () {
    angular.module('podoc.controllers').controller('trainerDetailCtrl', trainerDetailCtrl);
    /* @ng-inject */
    function trainerDetailCtrl($scope, $stateParams, $ajax, Pokemons) {

        getTrainer($stateParams.id);

        $scope.$on('$stateChangeSuccess', function () {
            getTrainer($stateParams.id);
        });

        function getTrainer(id) {
            $ajax.get('/api/v1/trainer', {id: id}).then(function (trainer) {
                $scope.trainer = trainer;
                trainer.change = trainer.pre_rank - trainer.rank;
                trainer.pokemons.forEach(function (pokemon) {
                    pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
                });
            });
        }
    }
})();
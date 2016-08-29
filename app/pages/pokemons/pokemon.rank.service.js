angular.module('podoc.services').service('pokemonRankService', pokemonRankService);
/* @ng-inject */
function pokemonRankService($ajax, Pokemons, $stateParams) {
    var self = this;
    self.reset = function () {
        self.rankers = [];
        self.page = 0;
    };

    self.reset();

    self.more = function () {
        if (self.loading)
            return;
        $ajax.get('/api/v1/pokemon/rank', {page: self.page, pokemon_id: $stateParams.id}).then(function (rankers) {
            self.rankers.pushAll(rankers);
            rankers.forEach(function (ran) {
                ran.pokemon = Pokemons.get(ran.pokemon_id);
                ran.change = ran.pre_rank - ran.rank;
                ran.individual_score = ran.individual_attack + ran.individual_defense + ran.individual_stamina;
            });
            self.loading = false;
            if (rankers.length < 10) {
                self.end = true;
            }
            self.page++;
        });
    };

    self.allGet = function () {
        if (self.all) {
            return;
        }
        $ajax.get('/api/v1/pokemon/rank/all').then(function (rankers) {
            self.all = rankers;
            rankers.forEach(function (ran) {
                ran.pokemon = Pokemons.get(ran.pokemon_id);
                ran.change = ran.pre_rank - ran.rank;
                ran.individual_score = ran.individual_attack + ran.individual_defense + ran.individual_stamina;
            });
        });
    };
}

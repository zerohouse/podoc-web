angular.module('podoc.services').service('rankerService', rankerService);
/* @ng-inject */
function rankerService($ajax, Pokemons) {


    var self = this;
    self.rankers = [];
    self.page = 0;
    self.loading = false;
    self.district = 0;
    self.more = function () {
        if (self.loading)
            return;
        self.loading = true;
        var query = {page: self.page};
        if (self.district)
            query.id = self.district;
        if (self.team)
            query.team = self.team;
        $ajax.get('/api/v1/address/rank', query).then(function (rankers) {
            self.rankers.pushAll(rankers);
            self.loading = false;
            rankers.forEach(function (ran) {
                ran.change = ran.pre_rank ? ran.pre_rank - ran.rank : 0;
                ran.pokemons.forEach(pokemon=>{
                   pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
                });
            });
            if (rankers.length < 10) {
                self.end = true;
            }
            self.page++;
        });
    };
    self.reset = function () {
        self.rankers = [];
        self.page = 0;
        self.end = false;
        self.more();
    };
}

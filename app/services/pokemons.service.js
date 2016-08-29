angular.module('podoc.services').service('pokemonService', pokemonService);
/* @ng-inject */
function pokemonService(Pokemons) {

  this.setPokemon = function(pokemon){
    pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
    pokemon.individual_score = pokemon.individual_attack + pokemon.individual_defense + pokemon.individual_stamina;
    pokemon.skill_1 = Pokemons.skills.findById(pokemon.move_1);
    pokemon.skill_2 = Pokemons.skills.findById(pokemon.move_2);
    if (pokemon.creation_time_ms && pokemon.creation_time_ms.toNumber)
      pokemon.creation_time_ms = pokemon.creation_time_ms.toNumber();
    if (pokemon.id && pokemon.id.toNumber)
      pokemon.id = pokemon.id.toNumber();
  };

}

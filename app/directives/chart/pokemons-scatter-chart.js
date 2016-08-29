(function () {
    angular.module('podoc.directives').directive('pokemonsScatterChart', pokemonsChart);
    /* @ng-inject */
    function pokemonsChart() {
        return {
            restrict: 'A',
            scope: {pokemons: '='},
            link: function ($scope, element) {
                var typesMap = {};
                $scope.$watch('pokemons', function (pokemons) {
                    if (!pokemons)
                        return;

                    $scope.pokemons.forEach(function (p) {
                        p.pokemon.types.forEach(function (t) {
                            var key = t.name;
                            if (!typesMap[key])
                                typesMap[key] = [];
                            typesMap[key].push(p);
                        });
                    });

                    var bubbleChartPokemons = [];
                    var pokemonIndexes = [];
                    angular.forEach(typesMap, function (value) {
                        value.forEach(function (pokemon) {
                            pokemon.individual_score = pokemon.individual_attack + pokemon.individual_defense + pokemon.individual_stamina;
                            bubbleChartPokemons.push({x: pokemon.pokemon.power, y: pokemon.individual_score, r: pokemon.cp/1000});
                            pokemonIndexes.push(pokemon);
                        });
                    });

                    Chart.defaults.global.legend.display = false;

                    var bubbleChartCanvas = element[0].getContext("2d");
                    var bubbleChartData = {
                        datasets: [
                            {
                                label: 'pokemons',
                                data: bubbleChartPokemons,
                                backgroundColor: "#FF6384",
                                hoverBackgroundColor: "#FF6384"
                            }]
                    };


                    new Chart(bubbleChartCanvas, {
                        type: 'bubble',
                        data: bubbleChartData,
                        options: {
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItem) {
                                        var pokemon = pokemonIndexes[tooltipItem.index];
                                        var name = pokemon.nickname || pokemon.pokemon.name;
                                        // if (text.isShowEng())
                                        //     name += "(" + pokemon.pokemon.en + ")";
                                        name += " - ";
                                        return name +
                                            "종족값" +
                                            // text('pokemonPower') +
                                            ":" + pokemon.pokemon.power + ", " +
                                            "개체값" +
                                            // text('individualValue') +
                                            ":" + pokemon.individual_score;
                                    }
                                }
                            }
                        }
                    });
                });
            }
        };
    }
})();
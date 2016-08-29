(function () {
    angular.module('podoc.directives').directive('pokemonsBarChart', pokemonsChart);
    /* @ng-inject */
    function pokemonsChart() {
        return {
            restrict: 'A',
            scope: {pokemons: '='},
            link: function ($scope, element) {
                $scope.$watch('pokemons', function (pokemons) {
                    if (!pokemons)
                        return;
                    var typesMap = {};
                    $scope.pokemons.forEach(function (p) {
                        p.pokemon.types.forEach(function (t) {
                            var key = t.name;
                            // if (text.isShowEng())
                            //     key += "(" + t.en + ")";
                            if (!typesMap[key])
                                typesMap[key] = [];
                            typesMap[key].push(p);
                        });
                    });

                    var barChartCtx = element[0].getContext("2d");
                    var pokemonIndexes = [];
                    var barChartDataSet = [];
                    var barChartLabels = [];
                    angular.forEach(typesMap, function (value, key) {
                        barChartLabels.push(key);
                        barChartDataSet.push(value.length);
                        value.forEach(function (pokemon) {
                            pokemonIndexes.push(pokemon);
                        });
                    });

                    Chart.defaults.global.legend.display = false;



                    var data = {
                        labels: barChartLabels,
                        datasets: [{
                            borderWidth: 1,
                            data: barChartDataSet
                        }]
                    };


                    new Chart(barChartCtx, {
                        type: 'horizontalBar',
                        data: data
                    });

                });
            }
        };
    }
})();
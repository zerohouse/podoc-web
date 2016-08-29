(function () {
    angular.module('podoc.controllers').controller('pokemonMapCtrl', pokemonMapCtrl);
    /* @ng-inject */
    function pokemonMapCtrl($scope, $ajax, Pokemons, $interval, $stateParams) {


        $scope.pokemons = [];

        if (!$scope.map)
            $scope.map = {
                center: {
                    latitude: $stateParams.lat || 38.1937916519,
                    longitude: $stateParams.lng || 128.57818904700002
                },
                zoom: 18,
                control: {},
                events: {
                    bounds_changed: function (e) {
                        $scope.bounds = e.getBounds();
                    }
                }
            };


        $scope.$on('$stateChangeSuccess', function () {
            if ($scope.map && $scope.map.control && $scope.map.control.refresh)
                $scope.map.control.refresh();
            if ($stateParams.lat && $stateParams.lng) {
                $scope.map.center.latitude = $stateParams.lat;
                $scope.map.center.longitude = $stateParams.lng;
            }
        });

        $scope.getLabel = function (pokemon) {
            return getTwo(Math.floor(pokemon.pokemon_remain_time / 60)) + ":" + getTwo(pokemon.pokemon_remain_time % 60);
        };

        function getTwo(num) {
            if (num > 9)
                return num;
            return "0" + num;
        }

        $scope.refresh = function () {
            if (!$scope.bounds)
                return;
            $ajax.get('/map/api/' + $scope.bounds.f.f + "/" + $scope.bounds.f.b + "/" + $scope.bounds.b.b + "/" + $scope.bounds.b.f).then(null, function (res) {
                var pokemons = res.list;

                pokemons.forEach(function (pokemon) {
                    var exist = $scope.pokemons.findBy("pokemon_id", pokemon.pokemon_id);
                    if (exist)
                        exist.pokemon_remain_time = pokemon.pokemon_remain_time;
                    else {
                        pokemon.pokemon = Pokemons.get(parseInt(pokemon.pokemon_type));
                        pokemon.icon = {
                            url: "/" + pokemon.pokemon.img,
                            scaledSize: new google.maps.Size(50, 50),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(0, 25)
                        };
                        $scope.pokemons.push(pokemon);
                    }
                });

                $scope.pokemons.forEach(pokemon=> {
                    var finded = pokemons.findBy("pokemon_id", pokemon.pokemon_id);
                    if (!finded)
                        $scope.pokemons.pokemon_remain_time--;
                    if ($scope.pokemons.pokemon_remain_time <= 1)
                        $scope.pokemons.remove(pokemon);
                });
            });
        };

        $interval($scope.refresh, 1000);
    }
})();
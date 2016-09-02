(function () {
    angular.module('podoc.controllers').controller('pokemonMapCtrl', pokemonMapCtrl);
    /* @ng-inject */
    function pokemonMapCtrl($scope, $ajax, Pokemons, $interval, $stateParams, $timeout) {

        $scope.$on('$stateChangeSuccess', function () {
            if ($scope.map && $scope.map.control && $scope.map.control.refresh)
                $scope.map.control.refresh();
            if ($stateParams.lat && $stateParams.lng) {
                $scope.map.center.latitude = $stateParams.lat;
                $scope.map.center.longitude = $stateParams.lng;
            }
        });

        $scope.refresh = function () {
            if (!$scope.bounds)
                return;
            $ajax.get('/api/pokemons', getBoundsObj()).then(function (pokemons) {
                pokemons.forEach(function (pokemon) {
                    if ($scope.pokemons.findById(pokemon.id))
                        return;
                    pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
                    pokemon.expirationTime = new Date(pokemon.expirationTime);
                    pokemon.icon = {
                        url: "/" + pokemon.pokemon.img,
                        scaledSize: new google.maps.Size(50, 50),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(25, 0)
                    };
                    $scope.pokemons.push(pokemon);
                });
            });
        };

        function getBoundsObj() {
            if (!$scope.bounds)
                return;
            return {
                minLat: $scope.bounds.f.f,
                maxLat: $scope.bounds.f.b,
                minLng: $scope.bounds.b.b,
                maxLng: $scope.bounds.b.f
            };
        }

        $interval(function () {
            $scope.pokemons.forEach(pokemon=> {
                var remainMs = pokemon.expirationTime.getTime() - new Date().getTime();
                if (remainMs > 0)
                    pokemon.remainTime = moment(remainMs).format('mm:ss');
                else {
                    $scope.pokemons.remove(pokemon);
                }
            });
        }, 1000);

        $interval($scope.refresh, 2000);


        $scope.scanner = {};
        $scope.pokemons = [];

        function requestScan(lat, lng) {
            // var map = $scope.map.control.getGMap();
            // var lat = map.center.lat();
            // var lng = map.center.lng();
            $ajax.post('/api/point', {lat: lat, lng: lng});
        }

        var time;
        $scope.requestBoundaries = function () {
            $timeout.cancel(time);
            time = $timeout(function () {
                $ajax.post('/api/bounds', getBoundsObj());
            }, 300);
        };


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
                        // $scope.requestBoundaries();
                    },
                    click: function (mapModel, eventName, originalEventArgs) {
                        var latitude = originalEventArgs[0].latLng.lat();
                        var longitude = originalEventArgs[0].latLng.lng();
                        $scope.scanner.center = {latitude: latitude, longitude: longitude};
                        requestScan(latitude, longitude);
                    }
                }
            };

    }
})();
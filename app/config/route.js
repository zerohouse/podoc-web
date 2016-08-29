/* @ngInject */
angular.module('podoc')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("log", {
                url: "/log",
                templateUrl: '/pages/log/log.html',
                controller: 'logCtrl'
            })
            .state("googleLogged", {
                url: "/google?code",
                templateUrl: '/pages/google/logged.html',
                controller: 'loggedCtrl'
            })
            .state("trainersRank", {
                url: "/trainers/:district",
                templateUrl: '/pages/trainer-rank/trainer-rank.html',
                controller: 'trainerRankCtrl'
            })
            .state("trainerDetail", {
                url: "/trainer/:id",
                templateUrl: '/pages/trainer/trainerDetail.html',
                controller: 'trainerDetailCtrl',
            })
            .state("pokemonRank", {
                url: "/pokemon/rank",
                templateUrl: '/pages/pokemons/pokemonRank.html',
                controller: 'pokemonRankCtrl',
            })
            .state("pokemonRankDetail", {
                url: "/pokemon/:id/rank",
                templateUrl: '/pages/pokemons/pokemonRankDetail.html',
                controller: 'pokemonRankDetailCtrl',
            })
            .state("pokemonDetail", {
                url: "/pokemon/:id",
                templateUrl: '/pages/pokemon/pokemon.html',
                controller: 'pokemonDetailCtrl',
            })
            .state("pokemonMap", {
                url: "/pokemonMap/:lat/:lng",
                templateUrl: '/pages/map/map.html',
                controller: 'pokemonMapCtrl',
                classes: 'layout-column flex',
                onEnter: function ($timeout) {
                    $timeout(function () {
                        var map = angular.element($('[ui-view]')).scope().map;
                        if (!map || !map.control)
                            return;
                        map.control.refresh();
                    });
                }
            });


        $urlRouterProvider.otherwise("/log");
    });

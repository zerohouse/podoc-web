(function () {
    angular.module('podoc.directives').directive('type', type);
    /* @ng-inject */
    function type(Pokemons, text) {
        return {
            restrict: 'E',
            template: '<span style="color:#626262">{{type.name}}<i ng-if="!noHelp" class="ion-ios-help-outline" style="font-size:13px"></i> ',
            scope: {
                type: '=',
                noHelp: '='
            },
            link: function ($scope, element) {
                $scope.$watch('type', function (type) {
                    if (!type)
                        return;
                    var template = '';
                    var defense_strong = type.defense.strong.map(function (id) {
                        return Pokemons.attrs[id].name;
                    }).join(", ");
                    var defense_weak = type.defense.weak.map(function (id) {
                        return Pokemons.attrs[id].name;
                    }).join(", ");
                    if (defense_strong)
                        template += "<strong>" + defense_strong + "</strong> " +
                            text('strongDefense') +
                            "<br><br>";
                    if (defense_weak)
                        template += "<strong>" + defense_weak + "</strong> " +
                            text('weakDefense') +
                            "<br><br>";
                    $(element).tooltipster({
                        content: template,
                        theme: 'tooltipster-borderless',
                        side: 'top',
                        contentAsHTML: true
                    });
                });
            }
        };
    }
})();

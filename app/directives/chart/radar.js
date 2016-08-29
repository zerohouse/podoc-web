(function () {

    angular.module('podoc.directives').directive('radar', radar);
    /* @ng-inject */
    function radar() {
        Chart.defaults.global.legend.display = false;

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.radar, function () {
                    var d = scope.$eval(attrs.radar);
                    if(!d)
                        return;
                    var labels = scope.$eval(attrs.labels);
                    var data = d.slice(0, labels.length);
                    var label = scope.$eval(attrs.label);
                    new Chart(element[0].getContext("2d"), {
                        type: 'radar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: label,
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }],
                        }, options: {
                            scale: {
                                ticks: {
                                    beginAtZero: true,
                                    max: attrs.max
                                }
                            }
                        }
                    });
                });
            }
        };
    }
})();
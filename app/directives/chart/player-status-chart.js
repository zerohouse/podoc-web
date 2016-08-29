(function () {

    angular.module('podoc.directives').directive('playerStatusChart', playerStatusChart);
    /* @ng-inject */
    function playerStatusChart() {
        Chart.defaults.global.legend.display = false;

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.status, function () {
                    var d = scope.$eval(attrs.status);
                    if (!d)
                        return;
                    var labels = [];
                    var cp = [];
                    var rank = [];
                    d.forEach(function (data) {
                        labels.push(new Date(data.createdAt).toDateString());
                        cp.push(data.cp);
                        rank.push(data.rank);
                    });
                    if (!d)
                        return;
                    new Chart(element[0].getContext("2d"), {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                    label: "CP (순위)",
                                    fill: false,
                                    lineTension: 0,
                                    backgroundColor: "rgba(75,192,192,0.4)",
                                    borderColor: "rgba(75,192,192,1)",
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: "rgba(75,192,192,1)",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                    pointHoverBorderColor: "rgba(220,220,220,1)",
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: cp,
                                    spanGaps: false
                                }],
                        }, options: {
                            // scale: {
                            //     yAxes: {
                            //         ticks: {
                            //             beginAtZero: true,
                            //             // max: attrs.max
                            //         }
                            //     }
                            // }
                        }
                    });
                });
            }
        };
    }
})();
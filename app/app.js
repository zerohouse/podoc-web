angular
    .module('podoc', [
        'podoc.services',
        'podoc.controllers',
        'podoc.directives',
        'podoc.filters',
        'angular.essential',
        'ngSanitize',
        'ngAnimate',
        'ui.router',
        'ngMessages',
        'toastr',
        'ngFileUpload',
        'ngMaterial',
        'angular-jqcloud',
        'infinite-scroll',
        'uiGmapgoogle-maps',
        'angular-google-adsense'
    ]);

angular.module('podoc.services', []);
angular.module('podoc.directives', ['angular-svg-round-progressbar']);
angular.module('podoc.controllers', []);
angular.module('podoc.filters', []);

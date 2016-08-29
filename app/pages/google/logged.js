(function () {
    angular.module('podoc.controllers').controller('loggedCtrl', loggedCtrl);
    /* @ng-inject */
    function loggedCtrl($stateParams, $ajax, $window) {
        $ajax.post('/api/v1/web/user', {code: $stateParams.code}).then(function (user) {
            $window.opener.window.login(user);
            $window.close();
        });
    }
})();
(function () {
    angular.module('podoc').run(ajaxConfig);
    /* @ng-inject */
    function ajaxConfig($ajax) {
        $ajax.handler((response, success, error)=> {
                if (response.state === "SUCCESS") {
                    success(response.data);
                    return;
                }
                error(response);
            }
        );
    }
})();
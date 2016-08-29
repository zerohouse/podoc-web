angular.module('podoc.filters').filter('ymd', function () {
    return function (value) {
        var date = new Date(value);
        if (new Date().isSameDay(date))
            return date.fromNow();
        return date.format("YYYY. M. D");
    };
});
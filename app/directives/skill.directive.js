(function () {
    angular.module('podoc.directives').directive('skill', skill);
    /* @ng-inject */
    function skill() {
        return {
            restrict: 'E',
            template: '<div class="layout-row">\
                    <div class="flex" style="min-width: 100px">{{skill.name}}<br>{{skill.eng}}</div>\
                    <div class="flex"><type type="skill.type" attack="true"></type></div>\
                    <div class="flex">{{skill.attack}}</div>\
                    <div class="flex">{{skill.cooldown}}</div>\
                    <div class="flex">{{skill.attack / skill.cooldown | number:1}}</div>\
                    <div class="flex">{{skill.energy}}</div>\
                 </div>\
                 ',
            scope: {skill: '='}
        };
    }
})();

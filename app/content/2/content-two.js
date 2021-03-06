﻿
(function () {

    "use strict";

    var ME = "app-content-two";
    var COMPONENT = "appContentTwo";

    var extend = angular.extend,
        forEach = angular.forEach;

    /////////////////////////////////////////////
    angular.module("app")
        .component(COMPONENT, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
            bindings: {
                folders: '<'
            },
            controller: fn
        });


    /////////////////////////////////////////////
    fn.$inject = ['$log', '$window'];
    function fn($log, $window) {
        var ctrl = this;

        extend(ctrl, {

            "$onInit": onInit,
            "$onChanges": onChanges,
            openMultiUrls: openMultiUrls
        });

        return ctrl;
        /////////////////

        ///////////////////////////
        function openMultiUrls (urls) {
            $log.debug(ME, 'openMultiUrls', urls);
            angular.forEach(urls, function (value, key) {
                $window.open(value, 'win' + key); // ok in FF, notok chrome
            });
        }


        /////////////////
        function onInit() {
            $log.log(ME, 'onInit');
        }

        /////////////////
        function onChanges(changes) {
            $log.log(ME, 'onChanges', changes);
        }

    }


})();


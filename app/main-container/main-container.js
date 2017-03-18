(function () {
    "use strict";

    var ME = 'app-main-container';
    var COMPONENT = 'appMainContainer';

    /////////////////////////////////////////////
    angular.module("app")
        .component(COMPONENT, {
            templateUrl: ["APP_CONST", function (APP_CONST) { return APP_CONST.filePath[ME]; }],
            bindings: {},
            controller: fn
        });


    ///////////////////////////
    fn.$inject = ["$log", "appDataService"];
    function fn($log, appDataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            isOldVersion: appDataService.isOldVersion,
            folders: appDataService.data,
            folderRows: appDataService.dataRows,
            
        });

        $log.log(ME, ctrl);

        return;
        ///////////////////

    }

}());


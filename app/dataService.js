(function () {

    "use strict";

    var ME = 'dataService';

    angular.module('app')
        .service(ME, fn);

    ////////////////////////////////////////////////////
    fn.$inject = ['$window', 'APP_CONST'];
    function fn($window, APP_CONST) {

        var service = this;

        var data = getData();
        var dataRows = getDataRows(data);

        angular.extend (service, {
            isOldVersion: /old/i.test($window.location.search),
            data: data,
            dataRows: dataRows,
        });

        return service;
        /////////////

        //********************
        function getData() {
            var _d = APP_CONST.data; // APP_CONST.data; mockData

            var data = angular.copy(_d);

            fixData(data);
            return data;
        }

        //********************
        function getDataRows(data, columns) {
            columns = columns || 6;
            var rows = [];
            for (var i = 0; i < data.length; i = i + columns) {
                rows.push(data.slice(i, i + columns));
            }

            return rows;
        }


        //********************
        function fixData(folderData) {
            angular.forEach (folderData, function (folder) {
                angular.forEach (folder.bkmrks, fixBookmark);
            });
        }

        
        //********************
        function fixBookmark(bookmark) {

            switch (bookmark.type) {

                case 'multi-urls':
                    if (angular.isDefined(bookmark.urls)) {
                        angular.forEach(bookmark.urls, function (url, urlIndex) {
                            bookmark.urls[urlIndex] = fixUrl(url);
                        });
                    }
                    break;

                case 'separator':
                    break;

                default:
                    // fix title
                    if (angular.isUndefined(bookmark.title)) {
                        bookmark.title = bookmark.url;
                    }

                    // fix url
                    bookmark.url = fixUrl(bookmark.url);

                    break;
            }

        }

        //**********************************************
        function fixUrl(url) {

            var prefix = (angular.isDefined(url) && !url.match(/^http/i)) ? "http://" : "";
            return (prefix + url);
        }


    }



}());

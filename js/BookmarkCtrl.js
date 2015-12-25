(function () {

    angular.module("BookmarkApp").controller("BookmarkCtrl", BookmarkCtrl);

    BookmarkCtrl.$inject = ["$window", "BookmarkService"];

    function BookmarkCtrl($window, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            folders: dataService.folderData,
            openMultiUrls: openMultiUrls
        });

        return;
        ///////////////////

        function openMultiUrls (urls) {
            angular.forEach(urls, function (value) {
                $window.open(value);
            });
        };

    }

}());

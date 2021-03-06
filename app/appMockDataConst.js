(function () {
    "use strict";

    angular.module('app')
        .constant('appMockDataConst', getMockData());


    ////////////////////////////////////////////
    function getMockData() {
        return [{
            "title": "Fav-1",
            bkmrks: [
                { type: 'multi-urls', title: "open-all", urls: ["http://google.com", "http://www.yahoo.com"] },
                { title: "Gmail", url: "https://gmail.com" },
                { title: "NO http google", url: "google.com" },
                { url: "no-title.com" },
                { type: "separator" },
                { title: "BING", url: "http://bing.com" },
            ]
        }, {
            "title": "Fav-2",
            bkmrks: [
                { url: "spammotel.com" },
                { url: "freepops.org", note: "supports webmails." },
                { title: "Gmail", url: "https://gmail.com" },
                { title: "Gmail w/o http", url: "gmail.com" }
            ]
        }];
    }




}());

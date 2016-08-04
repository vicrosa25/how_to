/**
 * Created by victor on 2/08/16.
 */
(function () {
    "use strict";
    var classList = require("../vendor/classList");

    classList.shim();

    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultElement = options.default;
        var contentHideClass = options.contentHideClass;
        var activeTabClass = options.activeTabClass;

        if(tabs === undefined) throw new Error("Expected options.tabs");
        if(content === undefined) throw new Error("Expected options.content");
        if(defaultElement === undefined) throw new Error("Expected options.default");
        if(contentHideClass === undefined) throw new Error("Expected options.contentHideClass");
        if(activeTabClass === undefined) throw new Error("Expected options.activeTabclass");

        content.forEach(function (element) {
            element.classList.add(contentHideClass);
        });

        defaultElement.classList.remove(contentHideClass);
        if (tabs !== undefined) tabs[0].classList.add(activeTabClass);
    };
    


}());
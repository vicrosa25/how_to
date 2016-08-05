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
        var defaultTab = options.default;
        var contentHideClass = options.contentHideClass;
        var activeTabClass = options.activeTabClass;

        checkOption(tabs, "option.tabs");
        checkOption(content, "option.content");
        checkOption(defaultTab, "option.default");
        checkOption(contentHideClass, "option.contentHideClass");
        checkOption(activeTabClass, "option.activeTabClass");


        var activeIndex = findIndexDefaultContent(tabs, defaultTab);
        var defaultContent = content[activeIndex];

        content.forEach(function (element) {
            element.classList.add(contentHideClass);
        });

        defaultContent.classList.remove(contentHideClass);
        defaultTab.classList.add(activeTabClass);
    };

    function findIndexDefaultContent(contentTabs, defaultContentTab) {
        for (var i = 0; i < contentTabs.length; i++){
            if (contentTabs[i] === defaultContentTab) return i;
        }
        throw new Error ("Could not find default in list");
    }
    
    function checkOption(option, name) {
        if (option === undefined) throw new Error("Expected " + name);
    }
}());
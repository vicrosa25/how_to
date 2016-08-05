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
        var defaultTab = options.defaultTab;
        var activeTabClass = options.activeTabClass;
        var hiddenContentClass = options.hiddenContentClass;

        checkOption(tabs, "option.tabs");
        checkOption(content, "option.content");
        checkOption(defaultTab, "option.defaultTab");
        checkOption(activeTabClass, "option.activeTabClass");
        checkOption(hiddenContentClass, "option.hiddenContentClass");



        var activeIndex = findIndexDefaultContent(tabs, defaultTab);
        var defaultContent = content[activeIndex];

        content.forEach(function (element) {
            element.classList.add(hiddenContentClass);
        });

        defaultContent.classList.remove(hiddenContentClass);
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
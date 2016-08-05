/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        var IRRELEVANT = "irrelevant";
        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        });

        it("hides multiple elements", function () {

            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [ createTab(), defaultTab, createTab() ],
                content: [ content1, defaultContent, content3],
                defaultTab: defaultTab,
                activeTabClass: IRRELEVANT,
                hiddenContentClass: "hideClass"
            });

            // Assert
            assert.equal(getClasses(content1), "hideClass", "element1 should be hiden");
            assert.equal(getClasses(defaultContent), "", "element2 is default should not be hiden");
            assert.equal(getClasses(content3), "hideClass", "element3 should be hiden");
        });


        it.only("styles the active tab with a class", function () {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();

            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ createTabContent(), defaultContent, createTabContent() ],
                defaultTab: defaultTab,
                activeTabClass: "activeTab",
                hiddenContentClass: IRRELEVANT
            });

            assert.equal(getClasses(tab1), null, "tab1 should not be styled");
            assert.equal(getClasses(defaultTab), "activeTab", "defaultTab should be styled");
            assert.equal(getClasses(tab3), null, "tab 3 should no be styled");
        });


        it("perserve existing classes when adding new classes", function () {
            var defaultTab = createTab();
            defaultTab.setAttribute("class", "existingTabClass");

            var defaultContent = createTabContent();
            var hidenContent = createTabContent();
            hidenContent.setAttribute("class", "existingContentClass");

            tabs.initialize({
                tabs: [ defaultTab, createTab()],
                content: [ defaultContent, hidenContent ],
                defaultTab: defaultTab,
                activeTabClass: "activeTab",
                hiddenContentClass: "hiddenContent"
            });

            assert.equal(getClasses(defaultTab), "existingTabClass activeTab", "tab should perverve existing" +
                "clases");
            assert.equal(getClasses(hidenContent), "existingContentClass hiddenContent", "content should" +
                "perserve existing classes");
        });


        function getClasses(element) {
            return element.getAttribute("class");
        }

        function createTab() {
            var tab = addElement("div");
            tab.innerHTML = "tab";
            return tab;
        }

        function createTabContent() {
            var tab = addElement("div");
            tab.innerHTML = "content";
            return tab;
        }


        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }


        function removeElement(element) {
            element.parentNode.removeChild(element);
        }
    });

}());
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

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [ createTab(), createTab(), createTab() ],
                content: [ content1, defaultContent, content3],
                default: defaultContent,
                activeTabClass: IRRELEVANT,
                contentHideClass: "hideClass"
            });

            // Assert
            assert.equal(getClasses(content1), "hideClass", "element1 should be hiden");
            assert.equal(getClasses(defaultContent), "", "element2 is default should not be hiden");
            assert.equal(getClasses(content3), "hideClass", "element3 should be hiden");
        });

        it("perserve existing classes when hiding an element", function () {
            var defaultContent = createTabContent();
            var hidenContent = createTabContent();
            hidenContent.setAttribute("class", "existingClass");

            tabs.initialize({
                tabs: [ createTab(), createTab()],
                content: [ hidenContent ],
                default: defaultContent,
                activeTabClass: IRRELEVANT,
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(hidenContent), "existingClass newClass");
        });

        it("styles the active tab with a clas", function () {
            var defaultTab = createTab();
            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [defaultTab],
                content: [ defaultContent ],
                default: defaultContent,
                activeTabClass: "activeClass",
                contentHideClass: IRRELEVANT
            });

            assert.equal(getClasses(defaultTab), "activeClass");
        });

        it("preserves existing class on the active tab", function () {
            // TODO
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
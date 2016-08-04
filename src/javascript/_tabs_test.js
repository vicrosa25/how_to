/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        });

        it("hides multiple elements", function () {

            var tab1 = createTab();
            var defaultTab = addElement("div");
            var tab3 = addElement("div");

            var element1 = addElement("div");
            var defaultElement = addElement("div");
            var element3 = addElement("div");

            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ element1, defaultElement, element3],
                default: defaultElement,
                activeTabClass: "activeClass",
                contentHideClass: "hideClass"
            });

            // Assert
            assert.equal(getClasses(element1), "hideClass", "element1 should be hiden");
            assert.equal(getClasses(defaultElement), "", "element2 is default should not be hiden");
            assert.equal(getClasses(element3), "hideClass", "element3 should be hiden");
        });

        it("perserve existing classes when hiding an element", function () {
            var defaultTab = addElement("div");
            var hidenTab = addElement("div");

            var defaultElement = addElement("div");
            var element = addElement("div");
            element.setAttribute("class", "existingClass");

            tabs.initialize({
                tabs: [ defaultTab, hidenTab],
                content: [ element ],
                default: defaultElement,
                activeTabClass: "activeClass",
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(element), "existingClass newClass");
        });

        it("styles the active tab with a clas", function () {
            var defaultTab = addElement("div");
            var defaultElement = addElement("div");

            tabs.initialize({
                tabs: [defaultTab],
                content: [ defaultElement ],
                default: defaultElement,
                activeTabClass: "activeClass",
                contentHideClass: "ignored"
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
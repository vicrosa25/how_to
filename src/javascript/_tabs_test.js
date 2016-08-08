/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        var IRRELEVANT = "irrelevant";
        var HIDDEN_CONTENT = "hideClass";
        var ACTIVE_TAB = "activeTab";
        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        });

        it("use a class to hide all elements except the default upon initialization", function () {

            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [ createTab(), defaultTab, createTab() ],
                content: [ content1, defaultContent, content3],
                defaultTab: defaultTab,
                activeTabClass: IRRELEVANT,
                hiddenContentClass: HIDDEN_CONTENT
            });

            // Assert
            assertContentHidden(content1, "element 1");
            assertContentVisible(defaultContent, "default element");
            assertContentHidden(content3, "element 3");
        });

        it("styles the default tab with a class upon initialization", function () {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();

            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ createTabContent(), defaultContent, createTabContent() ],
                defaultTab: defaultTab,
                activeTabClass: ACTIVE_TAB,
                hiddenContentClass: IRRELEVANT
            });

            assertTabInactive(tab1, "tab 1");
            assertTabActive(defaultTab, "defaultTab");
            assertTabInactive(tab3, "tab 3");
        });

        function assertTabInactive(tab, tabName) {
            assert.equal(getClasses(tab), null, tabName + " should not be styled");
        }

        function assertTabActive(tab, tabName) {
            assert.equal(getClasses(tab), ACTIVE_TAB, tabName + " should be active");
        }

        it("switch content when tab is clicked", function () {
            var tab1 = createTab();
            var tab2 = createTab();
            var tab3 = createTab();

            var content1 = createTabContent();
            var content2 = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [ tab1, tab2, tab3],
                content: [content1, content2, content3],
                defaultTab: tab1,
                activeTabClass: "activeTab",
                hiddenContentClass: HIDDEN_CONTENT
            });

            // click tab 2
            // assert content 2 is visible
            // assert content 1 is no longer visible

            // assert tab 2 is active
            // assert tab 1 is no longer active
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

        function assertContentHidden(element, elementName) {
            assert.equal(getClasses(element), HIDDEN_CONTENT, elementName + " should be hiden");
        }

        function assertContentVisible(element, elementName) {
            assert.equal(getClasses(element), "", elementName + " should be visible");
        }

    });

}());
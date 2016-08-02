/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {
        it("hides an element", function () {
            var element = addElement("div");
            tabs.initialize(element);
            assert.equal(getDisplayProperty(element), "none");
            removeElement(element);
        });
        
        
        function addElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }

        function getDisplayProperty(element) {
            var styles = getComputedStyle(element);
            var display = styles.getPropertyValue("display");
            return display;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }
    });

}());
/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {
        it("sets a class on an element", function () {
            var element = addElement("div");
            tabs.initialize(element, "someClass");
            assert.equal(getClass(element), "someClass");
            removeElement(element);
        });

        function getClass(element) {
            return element.getAttribute("class");
        }
        
        
        function addElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }


        function removeElement(element) {
            element.parentNode.removeChild(element);
        }
    });

}());
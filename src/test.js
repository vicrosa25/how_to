/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";



    describe("Addition", function () {

        it("adds positive numbers", function () {
            assertEqual(add(3, 4), 7);
        });

        it("IEEE 754 floating point", function () {
            assertEqual(add(0.1, 0.2), 0.30000000000000004);
        });
        
        function assertEqual(actual, expected) {
            if (actual !== expected) throw new Error("Expected: " + expected + ", but was " + actual);
        }

    });

    function add(a, b) {
        return a + b;
    }

}());
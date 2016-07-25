/**
 * Created by victor on 25/07/16.
 */
(function () {
    "use strict";

    assertEqual(add(3,4),7);

    function add(a, b) {
        return a + b;
    }

    function assertEqual(actual, expected) {
        if (actual !== expected) throw new Error("Expected " + expected + ", but got " + actual);
    }
}());
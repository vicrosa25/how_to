/**
 * Created by victor on 19/07/16.
 */
(function () {
    "use strict";

    var EXPECTED_NODE_VERSION = "v4.2.6";


    desc('Default Build');
    task("default", [ "version"],function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check the node version");
    task("version", function () {
        console.log("Cheking the node version: .");

        var actualVersion = process.version;

        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail("Incorrect node version: Expected " + EXPECTED_NODE_VERSION + " but was " + actualVersion);
        }

    });

}());
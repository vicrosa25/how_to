/**
 * Created by victor on 19/07/16.
 */
(function () {
    "use strict";

    var jshint = require("simplebuild-jshint");



    desc('Default Build');
    task("default", [ "version", "lint"],function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check the node version");
    task("version", function () {
        console.log("Cheking the node version: .");

        var packageJson = require("./package.json");

        var expectedVersion = 'v' + packageJson.engines.node;

        var actualVersion = process.version;

        if (actualVersion !== expectedVersion) {
            fail("Incorrect node version: Expected " + expectedVersion + " but was " + actualVersion);
        }

    });

    desc("Lint Javascript code");
    task("lint", function () {
        process.stdout.write("Linting Javascript: ");

        jshint.checkFiles({
            files: "Jakefile.js",
            options: {},
            globals: {}
        }, complete, fail);
    }, {async: true});

}());
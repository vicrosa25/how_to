/**
 * Created by victor on 19/07/16.
 */
(function () {
    "use strict";




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
        console.log("Linting Javascript: .");

        //ejecuta comandos en el terminal
        jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", {interactive: true}, complete);
    }, {async: true});

}());
/**
 * Created by victor on 19/07/16.
 */
/*globals jake:false, desc:false, task:false, complete:false, fail:false*/

(function () {
    "use strict";

    var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");


    var KARMA_CONFIG = "karma.conf.js";

    //**** General-purpose task

    desc("Start the karma server (run this first)");
    task("karma", function () {
        console.log("Starting karma server:");
        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, {async: true});

    desc('Default Build');
    task("default", [ "version", "lint", "test"],function () {
        console.log("\n\nBUILD OK");
    });

    desc("Run a localhost");
    task("run", function () {

        jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);


        console.log("Run http-server here");
    }, {async: true});


    //**** Supporting tasks
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
            files: [ "Jakefile.js", "src/**/*.js" ],
            options: lintOptions(),
            globals: lintGlobals()
        }, complete, fail);
    }, {async: true});

    desc("Run tests");
    task("test", function () {
       console.log("Testing Javascript:");
        karma.run({
            configFile: KARMA_CONFIG
        }, complete,fail);
    }, {async: true});

    function lintOptions() {
        return {
            bitwise: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            futurehostile: true,
            latedef: "nofunc",
            nonew: true,
            strict: true,
            undef: true,
            node: true,
            browser: true
        };
    }

    function lintGlobals() {
        return {
            // Mocha
            describe: false,
                it: false,
            before: false,
            after: false,
            beforeEach: false,
            afterEach: false
        };
    }

}());
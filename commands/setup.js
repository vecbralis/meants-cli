"use strict";
/// <reference path="../typings/tsd.d.ts" />
var shell = require('shelljs');
var SetupMeants = (function () {
    function SetupMeants(name) {
        this.name = name;
        shell.exec("git clone git@github.com:vecbralis/meants-public.git " + name);
        shell.cd(name);
        shell.exec('npm install');
    }
    return SetupMeants;
}());
exports.SetupMeants = SetupMeants;

"use strict";
/// <reference path="../typings/tsd.d.ts" />
var shell = require('shelljs');
var meants_cli_1 = require('meants-cli');
var NewModel = (function () {
    function NewModel(fullName) {
        var _this = this;
        (new meants_cli_1.Validate(fullName, 'path', function (path, name) {
            _this.run(path, name);
        }));
    }
    NewModel.prototype.run = function (path, name) {
        if (path) {
            shell.exec("mkdir -p app/models/" + path);
        }
        else {
            path = null;
        }
        shell.exec("cp -a node_modules/meants/examples/models/default.ts app/models/" + path + "/" + name + ".ts");
        shell.echo("New model created file path/name: app/models/" + path + " " + name);
    };
    return NewModel;
}());
exports.NewModel = NewModel;

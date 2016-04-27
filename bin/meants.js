#!/usr/bin/env node
"use strict";
var commander = require('commander');
var setup_1 = require('../commands/setup');
var newmodel_1 = require('../commands/newmodel');
var program = commander;
program
    .version('0.0.1');
program
    .command('setup [name]')
    .description('run setup for meants FrameWork')
    .action(function (name) {
    (new setup_1.SetupMeants(name));
});
program
    .command('new:model [name]')
    .description('Setup new mongoDB model file')
    .action(function (name) {
    (new newmodel_1.NewModel(name));
});
program.parse(process.argv);

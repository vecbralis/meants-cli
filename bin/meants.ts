#!/usr/bin/env node
/// <reference path="../typings/tsd.d.ts" />

/**
 * Module dependencies.
 */
import * as commander from 'commander';
import {SetupMeants as setup} from '../commands/setup';
import {NewModel} from '../commands/newmodel';

const program = commander;

program
	.version('0.0.1');

program
	.command('setup [name]')
	.description('run setup for meants FrameWork')
	.action(function(name) {
		(new setup(name));
	});

program
	.command('new:model [name]')
	.description('Setup new mongoDB model file')
	.action(function(name) {
		(new NewModel(name));
	});

program.parse(process.argv);
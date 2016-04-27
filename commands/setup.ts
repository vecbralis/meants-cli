/// <reference path="../typings/tsd.d.ts" />
import * as shell from 'shelljs';

export class SetupMeants {

	constructor (public name) {
		
		shell.exec(`git clone git@github.com:vecbralis/meants-public.git ${name}`);
		shell.cd(name);
		shell.exec('npm install');

	}

}
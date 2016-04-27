/// <reference path="../typings/tsd.d.ts" />
import * as shell from 'shelljs';
import {Validate} from 'meants-cli';

export class NewModel {

	constructor(fullName) {

		(new Validate(fullName, 'path', (path, name) => {
			this.run(path, name);
		}));

	}

	run(path, name) {

		if (path) {
			shell.exec(`mkdir -p app/models/${path}`);
		} else {
			path = null;
		}

		shell.exec(`cp -a node_modules/meants/examples/models/default.ts app/models/${path}/${name}.ts`);

		shell.echo(`New model created file path/name: app/models/${path} ${name}`);

	}

}
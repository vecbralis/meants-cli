
export class Validate {

	constructor(private input, private type, private callback) {

		switch (type) {

			case 'path':
				this.pathCheck();
				break;

		}

	}

	pathCheck() {

		let size = this.input.split('/').length;

		if (size > 1) {
			let name = this.input.split('/').pop();
			this.callback(this.input.replace(name, ''), name);
		} else {
			this.callback(false, this.input);
		}

	}

}
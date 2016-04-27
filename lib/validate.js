"use strict";
var Validate = (function () {
    function Validate(input, type, callback) {
        this.input = input;
        this.type = type;
        this.callback = callback;
        switch (type) {
            case 'path':
                this.pathCheck();
                break;
        }
    }
    Validate.prototype.pathCheck = function () {
        var size = this.input.split('/').length;
        if (size > 1) {
            var name_1 = this.input.split('/').pop();
            this.callback(this.input.replace(name_1, ''), name_1);
        }
        else {
            this.callback(false, this.input);
        }
    };
    return Validate;
}());
exports.Validate = Validate;

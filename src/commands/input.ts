'use strict';

import Command from '../command';

class Input extends Command {
    constructor(text: string) {
        super('INPUT')
        this.args.push(text);
    }

    toString() {
        return this.code + ' ' +
      this.args[0];
    }

}

export default Input;

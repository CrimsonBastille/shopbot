'use strict';

import Command from '../command';

class Comment extends Command {

    constructor(name: string) {
        super('\'');
        this.args.push(name);
    }

    toString() {
        return '\n' + this.code + ' ' +
      this.args.join(',');
    }

}

export default Comment;

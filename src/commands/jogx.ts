'use strict';

import Command from '../command';

class JogX extends Command {

    constructor(distance: number) {
        super('JX');
        this.args.push(distance);
    }

}

export default JogX;

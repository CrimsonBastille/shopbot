'use strict';

import Command from '../command';

class JogB extends Command {

    constructor(distance: number | null) {
        super('JB');
        this.args.push(distance);
    }

}

export default JogB;

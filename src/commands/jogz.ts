'use strict';

import Command from '../command';

class JogZ extends Command {

    constructor(distance: number) {
        super("JZ");
        this.args.push(distance);
    }

}

export default JogZ;

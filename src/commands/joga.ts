'use strict';

import Command from '../command';

class JogA extends Command {

    constructor(distance: number | null) {
        super('JA');
        this.args.push(distance);
    }

}

export default JogA;

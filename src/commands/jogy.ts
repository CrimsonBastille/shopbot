'use strict';

import Command from '../command';

class JogY extends Command {

    constructor(distance: number) {
        super('JY');
        this.args.push(distance);
    }

}

export default JogY;

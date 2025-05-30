'use strict';

import Command from '../command';

class MoveZ extends Command {

    constructor(distance: number) {
        super("MZ");
        this.args.push(distance)
    }
}

export default MoveZ;

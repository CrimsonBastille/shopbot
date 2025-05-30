'use strict';

import Command from '../command';

class MoveX extends Command {

    constructor(distance: number) {
        super("MX");
        this.args.push(distance)
    }
}

export default MoveX;

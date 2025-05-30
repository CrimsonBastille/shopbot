'use strict';

import Command from '../command';

class MoveY extends Command {

    constructor(distance: number) {
        super("MY");
        this.args.push(distance)
    }
}

export default MoveY;

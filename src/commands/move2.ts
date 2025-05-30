'use strict';

import Command from '../command';

class Move2 extends Command {

    constructor(distanceX: number, distanceY: number) {
        super("M2")
        this.args.push(distanceX)
        this.args.push(distanceY)
    }
}

export default Move2

'use strict';

import Command from '../command';

class Move3 extends Command {

    constructor(distanceX: number, distanceY: number, distanceZ: number) {
        super("M3")
        this.args.push(distanceX)
        this.args.push(distanceY)
        this.args.push(distanceZ)
    }
}

export default Move3

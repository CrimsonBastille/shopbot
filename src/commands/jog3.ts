'use strict';

import Command from '../command';

class Jog3 extends Command {

    constructor(distanceX: number | null = null, distanceY: number | null = null, distanceZ: number | null = null) {
        super("J3");
        this.args.push(distanceX);
        this.args.push(distanceY);
        this.args.push(distanceZ);
    }
}

export default Jog3;

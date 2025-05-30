 
'use strict';

import Command from '../command';

class Jog4 extends Command {

    constructor(distanceX: number | null = null, distanceY: number | null = null, distanceZ: number | null = null, distanceA: number | null = null) {
        super("J4");
        this.args.push(distanceX);
        this.args.push(distanceY);
        this.args.push(distanceZ);
        this.args.push(distanceA);
    }
}

export default Jog4;

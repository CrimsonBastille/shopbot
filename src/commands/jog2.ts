'use strict';

import Command from '../command';

class Jog2 extends Command {
    constructor(distanceX: number, distanceY: number) {
        super("J2");
        this.args.push(distanceX);
        this.args.push(distanceY);
    }
}

export default Jog2;

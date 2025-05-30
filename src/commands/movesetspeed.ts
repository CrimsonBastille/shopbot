 
'use strict';

import Command from '../command';

class MoveSetSpeed extends Command {
    constructor(xySpeed: number | null = null, zSpeed: number | null = null, aSpeed: number | null = null, bSpeed: number | null = null) {
        super('MS')
        this.args.push(xySpeed);
        this.args.push(zSpeed);
        this.args.push(aSpeed);
        this.args.push(bSpeed);
    }
}

export default MoveSetSpeed;

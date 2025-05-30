 
'use strict';

import Command from '../command';

class Move5 extends Command {

    constructor(distanceX: number, distanceY: number, distanceZ: number, distanceA: number, distanceB: number) {
        super('M5')
        this.args.push(distanceX)
        this.args.push(distanceY)
        this.args.push(distanceZ)
        this.args.push(distanceA)
        this.args.push(distanceB)
    }
}

export default Move5

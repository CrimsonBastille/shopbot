 
'use strict';

import Command from '../command';

class ValComm extends Command {

    constructor(
        commPortNum: number | null = null,
        obsolete2: number | null = null,
        obsolete3: number | null = null,
        driverChan1: number | null = null,
        driverChan2: number | null = null,
        driverChan3: number | null = null,
        driverChan4: number | null = null,
        speed: number | null = null
    ) {
        super('VI');
        this.args.push(commPortNum)
        this.args.push(obsolete2)
        this.args.push(obsolete3)
        this.args.push(driverChan1)
        this.args.push(driverChan2)
        this.args.push(driverChan3)
        this.args.push(driverChan4)
        this.args.push(speed)
    }
}

export default ValComm;

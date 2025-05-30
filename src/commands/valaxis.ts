 
'use strict';

import Command from '../command';

class ValAxis extends Command {

    constructor(
        cxLocation: number | null = null,
        yLocation: number | null = null,
        zLocation: number | null = null,
        aLocation: number | null = null,
        bLocation: number | null = null,
        tableBaseXLocation: number | null = null,
        tableBaseYlocation: number | null = null,
        tableBaseZLocation: number | null = null,
        tableBaseALocation: number | null = null,
        tableBaseBLocation: number | null = null
    ) {
        super('VA');
        this.args.push(cxLocation)
        this.args.push(yLocation)
        this.args.push(zLocation)
        this.args.push(aLocation)
        this.args.push(bLocation)
        this.args.push(tableBaseXLocation)
        this.args.push(tableBaseYlocation)
        this.args.push(tableBaseZLocation)
        this.args.push(tableBaseALocation)
        this.args.push(tableBaseBLocation)
    }
}

export default ValAxis;

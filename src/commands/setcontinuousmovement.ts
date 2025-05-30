'use strict';

import Command from '../command';

class SetContinuousMovement extends Command {

    constructor(switchNum: number) {
        super("SC");
        this.args.push(switchNum)
    }
}

export default SetContinuousMovement;

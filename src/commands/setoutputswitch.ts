'use strict';

import Command from '../command';

class SetOutputSwitch extends Command {

    constructor(switchNum: number, state: string) {
        super("SO");
        this.args.push(switchNum)
        this.args.push(state)
    }
}

export default SetOutputSwitch;

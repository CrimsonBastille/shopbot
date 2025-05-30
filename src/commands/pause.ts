'use strict';

import Command from '../command';

class Pause extends Command {
    constructor(seconds: number) {
        super("PAUSE")
        this.args.push(seconds)
    }
}

export default Pause;

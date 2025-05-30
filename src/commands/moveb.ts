'use strict';

import Command from '../command';

class MoveB extends Command {

    constructor(distance: number) {
        super('MB');
        this.args.push(distance)
    }
}

export default MoveB;

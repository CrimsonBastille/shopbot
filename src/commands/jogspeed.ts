'use strict';

import Command from '../command';

class JogSpeed extends Command {

    constructor(xjogspeed: number | null, yjogspeed: number | null) {
        super("JS");
        this.args.push(xjogspeed);
        this.args.push(yjogspeed);
    }

}

export default JogSpeed;

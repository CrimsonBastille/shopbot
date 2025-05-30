 
'use strict';

import Command from '../command';

class CutGCircle extends Command {
    constructor(diameter = null, xEndPoint = null, yEndPoint = null, xCenterOffset = null, yCenterOffset = null,
        outInTrue = null, direction = null, plunge = null, repetitions = null, proportionX = null,
        proportionY = null, tabPocketSpiral = null, pullUpEnd = null, doPlungeZ = null) {
        super("CG");
        this.args.push(diameter);
        this.args.push(xEndPoint);
        this.args.push(yEndPoint);
        this.args.push(xCenterOffset);
        this.args.push(yCenterOffset);
        this.args.push(outInTrue);
        this.args.push(direction);
        this.args.push(plunge);
        this.args.push(repetitions);
        this.args.push(proportionX);
        this.args.push(proportionY);
        this.args.push(tabPocketSpiral);
        this.args.push(pullUpEnd);
        this.args.push(doPlungeZ);
    }

}

export default CutGCircle;

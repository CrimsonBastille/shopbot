 
'use strict';

import Command from '../command';

class CutCircle extends Command {
    constructor(diameter = null, xCenterPoint = null, yCenterPoint = null,
        outInTrue = null, direction = null, startAngle = null, endAngle = null,
        plunge = null, repetitions = null, proportionX = null,
        proportionY = null, tabPocketSpiral = null, pullUpEnd = null, doPlungeZ = null) {
        super('CC');
        this.args.push(diameter);
        this.args.push(xCenterPoint);
        this.args.push(yCenterPoint);
        this.args.push(outInTrue);
        this.args.push(direction);
        this.args.push(startAngle);
        this.args.push(endAngle);
        this.args.push(plunge);
        this.args.push(repetitions);
        this.args.push(proportionX);
        this.args.push(proportionY);
        this.args.push(tabPocketSpiral);
        this.args.push(pullUpEnd);
        this.args.push(doPlungeZ);
    }
}

export default CutCircle;

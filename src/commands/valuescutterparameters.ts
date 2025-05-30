/* eslint-disable @typescript-eslint/no-unused-vars */
 
'use strict';

import Command from '../command';

class ValuesCutterParameters extends Command {
    constructor(diameter: number,
        obsolete1: number | null = null,
        obsolete2: number | null = null,
        safeZPullUp = null,
        plungeDirection = null,
        pocketOverlap = null,
        safeAPullUp = null,
        triggeredOutputSwitch = null,
        triggerONThreshold = null,
        triggerOFFThreshold = null,
        verticalAxisMonitored = null,
        triggeredOutputSwitchNum = null
    ) {
        super('VC')
        this.args.push(diameter)
    }
}

export default ValuesCutterParameters;

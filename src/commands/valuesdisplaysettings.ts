/* eslint-disable @typescript-eslint/no-unused-vars */
 
'use strict';

import Command from '../command';

class ValuesDisplaySettings extends Command {
    constructor(
        obsolete1: any,
        numAxes: any,
        linearUnits: any,
        unitsTypeA: any,
        unitsTypeB: any,
        obsolete2: any,
        displayFileComments: any,
        keypadFixedDistance: any,
        keypadRemote: any,
        writePartFileLog: any,
        writeSystemLog: any,
        messageScreenLocX: any,
        messageScreenLocY: any,
        messageScreenSizeX: any,
        messageScreenSizeY: any,
        showFileProgress1: any,
        keypadSwitchesAutoOff: any,
        showFileProgress2: any,
        mainDisplayType: any
    ) {
        super('VD')
        this.args.push(obsolete1)
    }
}

export default ValuesDisplaySettings;

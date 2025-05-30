 
'use strict';

import Command from '../command';

class FileLoadPartFile extends Command {
    constructor(
        filename: any,
        proportionX: any,
        proportionY: any,
        proportionZ: any,
        repetitions: any,
        offset3d2d: any,
        plunge: any,
        tabFeature: any,
        doPlungeZ: any,
    ) {
        super('FP')
        this.args.push(filename);
        this.args.push(proportionX);
        this.args.push(proportionY);
        this.args.push(proportionZ);
        this.args.push(repetitions);
        this.args.push(offset3d2d);
        this.args.push(plunge);
        this.args.push(tabFeature);
        this.args.push(doPlungeZ);
    }

}

export default FileLoadPartFile;

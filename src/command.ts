'use strict';

import numeral from 'numeral'

class Command {

    protected code: string;
    protected args: any[];

    constructor(code: string) {
        this.code = code;
        this.args = [];
    }

    processArgs() {
        const processedArgs = this.args.map((current) => {

            let result = current;

            if (typeof current === 'number') {
                if (Number.isInteger(current)) {
                    result = current;
                } else if (isNaN(current)) {
                    result = '';
                } else if (!isFinite(current)) {
                    result = '';
                } else {
                    result = numeral(current).format('0.0000');
                }
            }

            return result;
        });
        return processedArgs;
    }

    toString() {
        let output = this.code;
        if (this.args.length > 0) {
            output += ', ' +
        this.processArgs().join(',');
        };
        return output;
    }

}

export default Command;

'use strict';

import Code from './code';
import Command from './command';
import Label from './label';
import Variable from './variable';

class ShopbotPrinter {

    static print(arr: Array<Code | Command | Label | Variable | Array<any>>, sb: string = '') {
        arr.forEach((current: Code | Command | Label | Variable | Array<any>) => {
            if (current instanceof Code) {
                sb += current.toString();
            } else if (current instanceof Command) {
                sb += current.toString();
            } else if (current instanceof Label) {
                sb += current.toString();
            } else if (current instanceof Variable) {
                sb += current.toString();
            } else if (current instanceof Array) {
                sb += '\n';
                sb = ShopbotPrinter.print(current, sb);
            }
            sb += '\n';
        });
        return sb;
    }
}

export default ShopbotPrinter;

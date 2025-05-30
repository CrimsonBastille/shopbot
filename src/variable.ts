'use strict';

class Variable {

    private name: string;
    private assignment: string;

    constructor(name: string, assignment: string) {
        this.name = name;
        this.assignment = assignment;
    }

    toString() {
        return '&' + this.name + ', ' + this.assignment;
    }

}

export default Variable;

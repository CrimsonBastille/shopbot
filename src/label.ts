'use strict';

class Label {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return this.name + ':';
    }

}

export default Label;

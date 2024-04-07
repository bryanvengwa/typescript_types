"use strict";
class person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ': ' + this.name);
    }
}

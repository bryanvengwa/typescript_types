"use strict";
class person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ': ' + this.name);
    }
}
let user1;
user1 = new person('Bryan');
user1.greet('hi there');

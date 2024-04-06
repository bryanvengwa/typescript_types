"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Department ' + this.name);
    }
}
const house = new Department('House');
console.log(house.describe());
const copy = { describe: house.describe, name: 'copy' };
console.log(copy.describe());

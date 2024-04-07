"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log('Department ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const house = new Department('1', 'House');
house.addEmployee('bryan');
house.addEmployee('Castle');
console.log(house.describe());
console.log(house.printEmployeeInformation());
// const copy = { describe: house.describe, name: 'copy' , employees:['fsf']: string[] };
// console.log(copy.describe());

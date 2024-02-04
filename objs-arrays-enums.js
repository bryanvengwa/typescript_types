"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: 'John',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
console.log(person.age);

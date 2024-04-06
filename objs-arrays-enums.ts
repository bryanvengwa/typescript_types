enum Role {ADMIN, AUTHOR , READ_ONLY}
const person = {
  name: 'John',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

console.log(person.age);

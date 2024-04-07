interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'John',
  age: 34,
  greet: (phrase: string): void => {
    console.log(phrase + ' ' + user1.name);
  },
};

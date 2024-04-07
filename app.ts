interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class person implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(phrase + ': ' + this.name);
  }
}

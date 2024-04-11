function LogClass(target: Function) {
  console.log("Class name:", target.name);

}
  
@LogClass
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }

  greet() {
    console.log("Hello from", this.name);
  }
}

const bryan = new Person();
bryan.greet();

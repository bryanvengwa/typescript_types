function Logger(logString: string) {
  return function (constructor: Function) {
    console.log('logging ....');
  };
}
function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const  p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template; 
      hookEl.querySelector('h1')!.innerHTML = p.name
    }
  };
}

// @Logger('LOGGING -PERSON')
@withTemplate('<h1>My Person Object !!! </h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('creating person object ...');
  }
}
const max = new Person();
console.log(max);

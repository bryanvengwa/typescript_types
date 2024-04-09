const names: Array<string> = [];

names[0].toLowerCase();

function merge<T extends Object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}
 interface Lengthy{
  length : number;
 }

function countAndPrint<T  extends Lengthy  >(element: T) : [T , string   ] {
  let descriptionText = 'Got no value';
  if(element.length === 1) {
    descriptionText = 'Got 1 element';
  }else{

  }

  return [element, descriptionText]
}

console.log(countAndPrint('bryan'))
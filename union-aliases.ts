type Combinable = number | string ;
type ConversionDescription = 'as-text' | 'as-number';

function combine(
  n1: Combinable,
  n2: Combinable,
  conversionType:ConversionDescription
): string | number {
  let result: Combinable;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result; 
}

const combinedAges = combine(30, 40, 'as-number');
const combinedStringAges = combine('30', '40', 'as-number');
const combinedNames = combine('Martin', 'Luther', 'as-text');

console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);

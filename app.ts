function combine(
  n1: number | string,
  n2: number | string,
  conversionType: string
): string | number {
  let result: number | string;
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

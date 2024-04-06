function combine(n1, n2, conversionType) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 40, 'as-number');
var combinedStringAges = combine('30', '40', 'as-number');
var combinedNames = combine('Martin', 'Luther', 'as-text');
console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);

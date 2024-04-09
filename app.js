
function merge(a, b) {
    return Object.assign(a, b);
}
function countAndPrint(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else {
        descriptionText = 'got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndPrint('bryan'));
console.log('code running');

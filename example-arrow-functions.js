var names = ['tom', 'john', 'jen']

// names.forEach(function(name) {
//     console.log('for each', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name)
// });

// names.forEach((name) => console.log('arrowFunc', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('joe'));

// var person = {
//     name: 'Hunter',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// }

// person.greet();

function add (a, b) {
    return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(3, 3));

var addExpression = (a, b) => a + b;


console.log(addExpression(1, 1));
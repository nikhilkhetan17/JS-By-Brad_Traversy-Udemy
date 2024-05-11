let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays [array within array]

// Nesting berries inside of fruits
// fruits.push(berries);

// Now we can access 'blueberry' with the following
// x = fruits[3][1];
// console.log(x);

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];
console.log(allFruits);

x = allFruits[1][0];
console.log(x);

// concat() - Concatenate arrays --> 1st way
x = fruits.concat(berries);

// spread operator (...) - Concatenate with --> 2nd way
x = [...fruits, ...berries];
console.log(x);

// flat() - Flatten an array
const arr = [1, 2, [3, 4, [5.5, 5.6]], 6, [7, 8]];
x = arr.flat(2);

// Static methods of Array object

// isArray() - Check if it is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);

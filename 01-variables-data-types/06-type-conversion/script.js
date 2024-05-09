// Type conversion or type casting is the process of explicitly converting a value from one type to another type.

let amount = '99.5';

// Convert string to number
// amount = parseInt(amount);
amount = +amount; //unary operator
amount = Number(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
// amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log(1 + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);

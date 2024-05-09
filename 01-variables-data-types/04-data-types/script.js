// Primitive data types:
// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null -> Intentional absence of any object value
const aptNumber = null;

// Undefined -> A variable that has not been defined / assigned
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt -> Numbers that are really big that `Number` type can't handle
const n = 9007199254740991n;
console.log(n);

// Reference Types: -> object literals, arrays, functions
// Reference types or objects are given a non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Reference types are objects.

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
} // ' In JavaScript, every function is actually a function object'

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3

// IIFE Syntax (Has it's own scope and runs right away)
// Declare and invoke the function at the same time
// One the main reason to use IIFE is to avoid global scope pollution
// const user = 'John'; // Identifier 'user' has already been declared
(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
(function (name) {
  console.log('Hello ' + name);
})('Shawn');

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
  // hello(); // recursion
})();

// Q. can IIFE return something in javascript?
// Ans. Yes, an Immediately Invoked Function Expression (IIFE) in JavaScript can return a value, just like a regular function.

const result = (function () {
  // Function body
  return 'Hello, World!'; // Return something
})();
console.log(result); // Output: Hello, World!

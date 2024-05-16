// They take in function as an argument which is called a callback function, in that callback function we can pass a variable for each element in that array.

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((element) => console.log(element));

// We can also pass in the index and original array
socials.forEach((element, index, arr) =>
  console.log(`${index} - ${element}`, arr)
);

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));

// --------------------------------------------------------

// forEach doesn't return anything; it simply iterates over the array and applies the provided function to each element.
// forEach method will modify/mutate the original array:

// Original array
let numbers = [1, 2, 3, 4, 5];

// Using forEach to mutate the original array
numbers.forEach((num, index) => {
  numbers[index] = num * 2; // Modifying the original array
});

console.log(numbers); // Output: [2, 4, 6, 8, 10]

// If you want to create a new array instead of modifying the original, you can use map.

// Original array
let numbers1 = [1, 2, 3, 4, 5];

// Creating a new array without modifying the original
let doubledNumbers = numbers.map((num) => num * 2);

console.log(numbers1); // Output: [1, 2, 3, 4, 5]
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

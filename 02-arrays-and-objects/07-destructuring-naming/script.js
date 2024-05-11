// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// const todoid = todo.id;
// console.log(todoid);

const { id } = todo; // any property that we want to destructure are going to go inside curly braces.
console.log(id);

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId, title, name);

// Destructuring arrays & using the rest/spread operator:

// Rest Operator with Arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

// Spread Operator with Arrays
const odd = [1, 3, 5];
const combined = [...odd, 7, 9]; // Spread odd array and add new elements
console.log(combined); // Output: [1, 3, 5, 7, 9]

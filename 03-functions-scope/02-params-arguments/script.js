// Default Params
function registerUser(user = 'Bot') {
  // Old way - before(ES6) using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  // console.log(numbers); //it will give us an array with all the arguments passed in.
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};
console.log(loginUser(user));

console.log(
  loginUser({
    id: 2,
    name: 'Sara',
  })
);

// Arrays as params
// function getRandom(...arr) {
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  // console.log(randomIndex);
  const item = arr[randomIndex];

  console.log(item);
}

getRandom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
// getRandom(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

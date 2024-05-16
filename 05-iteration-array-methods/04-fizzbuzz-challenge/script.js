// For Loop
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ' FIZZBUZZ');
  } else if (i % 5 === 0) {
    console.log(i + ' BUZZ');
  } else if (i % 3 === 0) {
    console.log(i + ' FIZZ');
  } else {
    console.log(i);
  }
}

// While Loop
let j = 1;

// while (j <= 100) {
//   if (j % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (j % 3 === 0) {
//     console.log('Fizz');
//   } else if (j % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(j);
//   }

//   j++;
// }

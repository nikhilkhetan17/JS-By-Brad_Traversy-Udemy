// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(35).toFixed(2)} \xB0C `);

// Challenge 2
function minMax(arr) {
  // console.log(...arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min: min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
// (function (length, width) {
((length, width) => {
  // arrow function
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);

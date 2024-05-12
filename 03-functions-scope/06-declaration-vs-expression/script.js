// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you cannot
console.log(addDollarSign(100));

// Function Expression (function assigned to a variable)
// at the end of the expression we have a semicolon
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));

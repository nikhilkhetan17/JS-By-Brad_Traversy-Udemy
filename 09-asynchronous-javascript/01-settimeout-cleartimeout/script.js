// setTimeout - takes in a callback and a time to wait until that callback is executed

setTimeout(function () {
  console.log('Hello from callback');
}, 2000);

console.log('Hello from global');

// Named function
// setTimeout(changeText, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'Hello from h1 callback';
}

// clearTimeout() will clear a timer
const timerId = setTimeout(changeText, 4000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});

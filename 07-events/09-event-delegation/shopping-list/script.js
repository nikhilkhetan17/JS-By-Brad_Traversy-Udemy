const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Add an event listener on all items
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.remove();
//   });
// });

// Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'green';
  }
});

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');
// console.log(items);

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);

  // Changing the classes with className
  // text.className = 'card dark';
  // console.log(text);

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  // text.classList.remove('card'); //having padding in style.css
  text.classList.toggle('hidden');
  // text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;

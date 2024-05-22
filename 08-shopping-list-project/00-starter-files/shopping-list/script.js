const itemForm = document.getElementById('item-form');
// console.log(itemForm);
const itemInput = document.getElementById('item-input');
// console.log(itemInput);
const itemList = document.getElementById('item-list'); //ul
// console.log(itemList);
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function displayItemsFromLocalStorage() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (itemInput.value === '') {
    alert('Please add item');
    return;
  }

  addItemToDOM(newItem);
  addItemToLocalStorage(newItem);

  checkUI();
  itemInput.value = '';
}

function addItemToDOM(item) {
  //   create list item
  const li = document.createElement('li');
  //   li.appendChild(document.createTextNode(item.value));
  li.innerText = item;
  //   console.log(li);
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  //   console.log(button);
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  //   console.log(icon);

  button.appendChild(icon);
  li.appendChild(button);
  //   console.log(li);

  //   li.innerHTML = `${itemInput.value}
  //   <button class="remove-item btn-link text-red">
  //     <i class="fa-solid fa-xmark"></i>
  //   </button>`;

  //   Add li to the DOM
  itemList.appendChild(li);
}

function addItemToLocalStorage(item) {
  let itemsFromStorage;
  //   console.log(itemsFromStorage);
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
    // console.log(itemsFromStorage);
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    // console.log(itemsFromStorage);
  }

  //   Add new item to array
  itemsFromStorage.push(item);
  //   console.log(itemsFromStorage);

  //   Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  //   console.log(JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  //   console.log(itemsFromStorage);
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
    // console.log(itemsFromStorage);
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    // console.log(itemsFromStorage);
  }
  return itemsFromStorage;
}

// without event delegation
// const icon = document.querySelectorAll('i');
// // console.log(icon);
// icon.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     if (e.target.parentElement.classList.contains('remove-item')) {
//       e.target.parentElement.parentElement.remove();
//     }
//   });
// });

function removeItem(e) {
  // event delegation
  //   console.log(e.target);
  //   console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      checkUI();
    }
  }
}

function clearItems(e) {
  itemList.innerHTML = '';
  //   while (itemList.firstChild) {
  //     itemList.removeChild(itemList.firstChild);
  //   }
  //   document.getElementById('item-list').remove();
  //   e.target.remove();
  checkUI();
}

function filterItems(e) {
  // console.log(e.target);
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase().trim();
  //   console.log(text);

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase().trim();
    // console.log(itemName);
    // if (itemName.startsWith(text)) {
    if (itemName.includes(text)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  //   console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItemsFromLocalStorage);
checkUI();

// localStorage.setItem('name', 'nikhil');
// localStorage.setItem('age', 25);
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();

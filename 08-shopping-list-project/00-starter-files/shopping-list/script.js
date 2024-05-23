const itemForm = document.getElementById('item-form'); // whole form
// console.log(itemForm);
const itemInput = document.getElementById('item-input'); // input field
// console.log(itemInput);
const itemList = document.getElementById('item-list'); //ul
// console.log(itemList);
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter'); //filter input
const formBtn = itemForm.querySelector('button'); // addItem button
// console.log(formBtn);
let isEditMode = false;

// on page load
function displayItemsFromLocalStorage() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  // console.log(itemsFromStorage);
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (itemInput.value === '') {
    alert('Please add item');
    return;
  }

  if (isEditMode) {
    // const itemToEdit = document.querySelector('.edit-mode');
    const itemToEdit = itemList.querySelector('.edit-mode'); //li
    // console.log(itemToEdit.textContent);

    removeItemFromStorage(itemToEdit.textContent);
    // itemToEdit.classList.remove('edit-mode'); // will work without this also
    itemToEdit.remove(); // remove from DOM
    isEditMode = false;
    // console.log(isEditMode);
  } else {
    if (checkIfItemExists(itemInput.value)) {
      alert('Item already exits!');
      return;
    }
  }

  addItemToDOM(itemInput.value);
  addItemToLocalStorage(newItem);

  itemInput.value = '';
  checkUI();
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
  // console.log(itemsFromStorage);
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
    // console.log(itemsFromStorage);
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    // console.log(itemsFromStorage);
  }
  return itemsFromStorage;
}

function onClickItem(e) {
  // console.log(e.target);
  // console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    // console.log(1);
    // console.log(e.target) ;
    setItemToEdit(e.target);
  }
}

function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class= "fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}

// event delegation
function removeItem(item) {
  // console.log(item);
  if (confirm('Are you sure?')) {
    // remove item from DOM
    item.remove();

    // remove item form local storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
}

function removeItemFromStorage(itemText) {
  const itemsFromStorage = getItemsFromStorage(); //an array
  // console.log(itemsFromStorage);

  // Filter out item to be removed
  const filterItemArr = itemsFromStorage.filter((item) => item !== itemText);
  // console.log(filterItemArr);

  // reset to local storage
  localStorage.setItem('items', JSON.stringify(filterItemArr));
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

function clearItems(e) {
  itemList.innerHTML = '';
  //   while (itemList.firstChild) {
  //     itemList.removeChild(itemList.firstChild);
  //   }
  // document.getElementById('item-list').remove();

  // clear from local storage
  localStorage.removeItem('items');
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

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();

  if (itemsFromStorage.includes(item)) {
    return true;
  } else {
    return false;
  }
}

function checkUI() {
  // itemInput.value = '';

  const items = itemList.querySelectorAll('li');
  //   console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItemsFromLocalStorage);
checkUI();

// localStorage.setItem('name', 'nikhil');
// localStorage.setItem('age', 25);
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();

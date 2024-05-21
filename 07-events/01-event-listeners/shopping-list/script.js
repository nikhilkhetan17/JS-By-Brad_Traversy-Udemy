const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// addEventListener()
// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// });
clearBtn.addEventListener('click', () => console.log('Clear Items'));

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';  //1st way

  items.forEach((item) => item.remove()); // 2nd way

  // while (itemList.firstChild) {
  //   itemList.removeChild(itemList.firstChild); //3rd way
  // }

  // alert('Clear Items');
}

// Use named function
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000); // removing event listner after 5 sec.

// Fire off event from JS
// setTimeout(() => clearBtn.click(), 4000);

const form = document.getElementById('item-form');

// Get value with .value
function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

form.addEventListener('submit', onSubmit);

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Get individual items [1st way]
  // const item = formData.get('item'); // name attribute in html
  // const priority = formData.get('priority'); // name attribute in html

  // console.log(item, priority);

  // Get all entried as an Iterator [2nd way]
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);

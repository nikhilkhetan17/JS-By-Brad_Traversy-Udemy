// Fetching a JSON file
fetch('./movies.json')
  .then((response) => {
    // console.log(response.json());
    return response.json();
  })
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/bradtraversy')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((obj) => (document.querySelector('h1').textContent = obj.bio));

// IF we don't specify which type or request we are making then its going to be always GET

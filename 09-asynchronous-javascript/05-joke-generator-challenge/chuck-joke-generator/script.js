const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(this.responseText); // its in string format
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
      }
    }
  };

  xhr.send();
};

// Using fetch api
/* 
  function generateJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => {
        if (res.status === 200) {
          // console.log(res);
          return res.json();
        } else {
          throw new Error('Failed to fetch joke');
        }
      })
      .then((data) => {
        console.log(data);
        jokeEl.innerHTML = data.value;
      })
      .catch((err) => {
        console.log(err);
        jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
      });
  }
*/

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);

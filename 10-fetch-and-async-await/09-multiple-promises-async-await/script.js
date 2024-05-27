function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    // setTimeout(() => {
    xhr.send();
    // }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}
// getAllData();

// ------------------------------------------------------------------------
async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}
getAllDataWithFetch();

// array destructuring
async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);
  // console.log(moviesRes.url);
  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

// without array destructuring
/*
  async function getAllDataPromiseAll() {
    const responses = await Promise.all([
      fetch('./movies.json'),
      fetch('./actors.json'),
      fetch('./directors.json'),
    ]);
    // console.log(responses);
    // console.log(moviesRes.url);
    const movies = await responses[0].json();
    const actors = await responses[1].json();
    const directors = await responses[2].json();
 
    console.log(movies, actors, directors);
  } 
*/
// getAllDataPromiseAll();

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}
// getAllDataPromiseAll2();

// ---------------------------------By me Self note----------------------------

// Option 1
// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     return await response.json();
//   } catch (error) {
//     console.log(`ErrorNk fetching ${url}:`, error);
//     throw error; // Re-throw the error to propagate it further
//   }
// }

// Option 2
function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(`ErrorNk fetching ${url}:`, error);
      throw error; // Re-throw the error to propagate it further
    });
}

// fetchData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return fetchData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return fetchData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((err) => console.log(err));

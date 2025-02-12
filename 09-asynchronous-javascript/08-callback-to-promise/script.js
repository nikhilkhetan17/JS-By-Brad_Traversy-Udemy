const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 2000); // it waits total 3 sec
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// createPost({ title: 'Post Three ', body: 'This is post' }, getPosts);

// Callback to promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (!error) {
        // posts.push(post);
        resolve(posts.push(post));
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById('posts').appendChild(h3);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(showError);

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string [converts javaScript object to JSON string]
const str = JSON.stringify(post);

console.log(str);

// console.log(str.id); // you can't do it like this, i need to first parse it in order to access specific property.

// Parse JSON [parses JSON string and constructs javaScript object]
const obj = JSON.parse(str);

console.log(obj.id);
// console.log(obj);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);

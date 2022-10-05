// // const http = new easyHTTP;
// const http = new easyHTTP;

// // get posts 
// http.get('https://jsonplaceholder.typicode.com/posts');

const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
  if (error) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

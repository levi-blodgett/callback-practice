const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
]

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000)
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output;
//   }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

function createPost(post) {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
    posts.push(post);

    const error = false;

    if (!error) {
      resolve();
    } else {
      reject('Error: Something went wrong.');
    }
  }, 2000)
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000)
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
// A callback is just a function that can be passed into another function and then be called in that function
// A promise is alternative to callbacks, an alternative way to handle async operations
// They are called promises because whilst doing async operations, they can also do something when that operation is finished
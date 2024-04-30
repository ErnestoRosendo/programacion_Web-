fetch(`https://jsonplaceholder.typicode.com/users2`)
      .then(response => response.json())
      .then(user => fetch (`https://jsonplaceholder.typicode.com/posts?userId=2`) 
        .then(response => response.json())
        .then(post => {
            let idPost = post[0].id;
        })
        .then(response => response.json())
        .then(comment => fetch (`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`)))
        .catch((err) => {

        })
        
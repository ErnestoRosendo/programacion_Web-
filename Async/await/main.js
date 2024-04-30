const cargarDatos = async () => {
    try{
        let url = 'https://jsonplaceholder.typicode.com/users/1';
        let res = await fetch(url);
        let user = await res.json();
        console.log(user.name);
        url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
        res = await fetch(url);
        const post = await res.json();
        console.log(post[0].title);
        url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
        res = await fetch(url);
        const comment = await res.json();
        console.log(comment[1].body);

    } catch(err) {
        console.log(err)
    }
} 
cargarDatos();
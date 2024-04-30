


const button = document.getElementById("btn");
    button.addEventListener("click", () => {
        let select = document.getElementById("mnuUsers");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((usuarios) => {
                let opciones = "";
                for (let i = 0; i < usuarios.length; i++) {
                opciones += `<option value="${usuarios[i].id}">${usuarios[i].username}</option>`;
        }
        console.log(opciones)
        select.innerHTML += opciones;
                
      });
    });

const buttonCancelar= document.getElementById('btn');
    buttonCancelar.addEventListener('click', () => {
      buttonCancelar.style.display = 'none';
  
    });


    const select = document.getElementById('mnuUsers');
    select.addEventListener('change', () => {
    let userId = select.value;
    console.log(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => {
        const divPosts = document.getElementById('divPosts');
        divPosts.innerHTML = '';
        let agregado = '';
        for (let i = 0; i < posts.length; i++) 
            agregado += `<div class="card">
            <div class="card-header">
            <h5 class="card-title">${posts[i].title}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">${posts[i].body}</p>
              <a href="#" class="btn btn-primary" onclick='avisar(1), comentarios(${posts[i].id})'>Ver comentarios</a>
            </div>
            <div id='${posts[i].id}'>
            </div>
          </div>
          <br>`;
          
        
      divPosts.innerHTML += agregado;
      })
})

function comentarios (id) {
  console.log(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(comments => {
      const divPost = document.getElementById(`${id}`);
      divPost.innerHTML += `<div id='delete${id}'></div>`
      const divDel = document.getElementById(`delete${id}`);
      let agregar = '';
      for (let i = 0; i < comments.length; i++) 
        agregar += `<div>
        <div>
          <p>${comments[i].name}</p>
        </div>
        <div>
          <p>${comments[i].body}</p>
        </div>
        </div>`
      divDel.innerHTML += agregar;
      divDel.innerHTML += `<a href="#" class="btn btn-secondary" onclick='avisar(0),  borrar(${id})'>Ocultar comentarios</a>`
      })

}


function avisar(num){
  let divAv=document.getElementById('divAvisos');

  if (num) {
    
    divAv.innerHTML+=`<div id='divMsj' class="alert alert-success" role="alert">Cargando comentarios</p></div>`;
    
  } else {

    divAv.innerHTML+=`<div id='divMsj' class="alert alert-danger" role="alert">Ocultando comentarios</p></div>`;
  }
  setTimeout(() => borrar(0), 3000);
  
};

function borrar(id){
  let div;
  if (id) {
    
    div = document.getElementById(`delete${id}`);
    
  } else {
    
    div = document.getElementById('divMsj');
  }
  div.remove();
};
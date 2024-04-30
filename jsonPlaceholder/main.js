const button = document.getElementById('btn');
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((usuarios) => {
        opciones = '';
        for (let i = 0; i < usuarios.length; i++) 
            opciones += `<option value='${usuarios[i].id}'>${usuarios[i].username}</option>`
            
        
    const section = document.getElementById('mnuUsers');
    section.innerHTML += opciones;
      })
})

const select = document.getElementById('mnuUsers');
select.addEventListener('change', () => {
    let userId = select.value;
    console.log(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then(response => response.json())
      .then(tareas => {
        const taskList = document.getElementById('taskList');
        let oso = '';
        for (let i = 0; i < tareas.length; i++) 
            tareas += `<li>${tareas[i].title}</li>`;
          
        
      taskList.innerHTML += oso;
      
      })
})

function borrar(numero){
  let div = document.getElementById(`${numero}`);
  div.remove();
};


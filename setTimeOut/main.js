const boton=document.getElementById("btn");
boton.addEventListener('click',()=>{
   let divRes=document.getElementById('divRes');
   let dato=document.getElementById('dato').value;
   dato=parseInt(dato);
   for(let i=dato;i<dato+10;i++)
           divRes.innerHTML+=`<button type='button' onclick='avisar(${i})' id='btn${i}'>${i}</button>`;
});

function avisar(numero){
   let divAv=document.getElementById('divAvisos');
   divAv.innerHTML+=`<div id="${numero}"><p>Click en ${numero}</p></div>`;
   setTimeout(() => borrar(numero), 1000);

};

function borrar(numero){
   let div = document.getElementById(`${numero}`);
   div.remove();
};


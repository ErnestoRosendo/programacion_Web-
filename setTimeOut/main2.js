const boton=document.getElementById("btn");
boton.addEventListener('click',()=>{
   let divRes=document.getElementById('divRes');
   let dato=document.getElementById('num').value;
   dato=parseInt(dato);
   for(let i=dato;i<dato+10;i++)
           divRes.innerHTML+=`<button type='button' onclick='avisar(${i})' id='btn${i}'>${i}</button>`;
})

function avisar (numero) {
    const divAv = document.getElementById('avisos');
    divAv.innerHTML += `<div id='${numero}'><p>Se presiono el botón ${numero}</p></div>`
    setTimeout(() => borrar(numero), 1000);
}

function borrar (numero) {
    const divBorr = document.getElementById(`${numero}`);
    divBorr.remove();
}
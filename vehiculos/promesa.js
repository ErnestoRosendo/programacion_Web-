function guardar(parametros){
    return new Promise((resolve,reject)=>{
    const placa = document.getElementById('placa').value
    fetch(`https://vehiculos`)
      .then(response => response.json())
      .then(vehiculos => { 
        if (!vehiculos.buscar(placa) && placa != null) {
            resolve(vehiculos.agregar(placa));
        } else {
            reject("ERROR");
        }
      })

    });
}
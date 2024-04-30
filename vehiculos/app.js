const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

    let vehiculos=[
        {
            placa: 1232,
            marca: "Nissan",
            modelo: "Versa"
        }
    ];

    app.get('/vehiculos', (req, res) => {
        res.json({vehiculos:vehiculos});
    })

    app.post('/vehiculos',(req,res)=>{
        let placa = parseInt(req.body.placa);
        let marca = req.body.marca;
        let modelo = req.body.modelo;
        let newcar = {placa, marca, modelo}
        let indice= vehiculos.indexOf(newcar);
        if (indice==-1)
            vehiculos.push(newcar);
        res.json({tipo:'agregar'})
    })


    app.get('/vehiculos/:id', (req, res) => {
        const placa = parseInt(req.params.id);
        const indice = vehiculos.findIndex((vehiculo) => vehiculo.placa === placa);
        res.json({ tipo: 'busqueda', pos: indice });
    });
    
    app.delete('/vehiculos/:id', (req, res) => {
        const placa = parseInt(req.params.id);
        const indice = vehiculos.findIndex((vehiculo) => vehiculo.placa === placa);
        if (indice !== -1) {
            vehiculos.splice(indice, 1);
            res.json({ tipo: 'eliminar', cardel: placa });
        }
        else
            res.status(404).json({ tipo: 'error', mensaje: 'El vehículo no fue encontrado' }); 
    });

    app.listen(3000,()=>{console.log('Escuchando en puerto 3000')});
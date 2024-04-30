const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let alumnos = [
    {
        numCuenta: 20186639,
        nombre: Ernesto,
        semestre: 4
    },
    {
        numCuenta: 20188419,
        nombre: Toño,
        semestre: 6
    },
    {
        numCuenta: 20208491,
        nombre: René,
        semestre: 2
    }
];

app.get('/alumnos', (req, res) => {
    res.json({alumnos:alumnos});
})

app.get('/alumnos/:id', (req, res) => {
    const numCuenta = parseInt(req.params.id);
    const indice = alumnos.findIndex((alumnos) => alumnos.numCuenta === numCuenta);
    res.json({ tipo: 'busqueda', pos: indice });
});

app.post('/alumnos',(req,res)=>{
    let numCuenta = parseInt(req.body.numCuenta);
    let nombre = req.body.nombre;
    let semestre = req.body.semestre;
    let newAlumno = {numCuenta, nombre, semestre}
    let indice= alumnos.indexOf(newAlumno);
    if (indice==-1)
        alumnos.push(newAlumno);
    res.json({tipo:'agregar'})
});


app.delete('/alumnos/:id', (req, res) => {
    const numCuenta = parseInt(req.params.id);
    const indice = alumnos.findIndex((alumno) => alumno.numCuenta === numCuenta);
    if (indice !== -1) {
        alumnos.splice(indice, 1);
        res.json({ tipo: 'eliminar', del: numCuenta });
    }
    else
        res.status(404).json({ tipo: 'El alumno que buscas no existe' }); 
});

app.put('/alumnos/:id', (req, res) => {
    const numCuenta = parseInt(req.params.id);
    const indice = alumnos.findIndex((alumnos) => alumnos.numCuenta === numCuenta);
    if (indice !== -1) {
        alumnos[indice].nombre = req.body.nombre;
        alumnos[indice].semestre = req.body.semestre;
        res.json({ tipo: 'modificar', mod: numCuenta });
    } 
    else
        res.status(404).json({ tipo: 'El alumno no existe' });
})

app.listen(3000,()=>{console.log('Escuchando en puerto 3000')});
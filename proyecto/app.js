const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json());

let router=require('./routes');
app.use('/api', router)

app.listen(3000, ()=>{
    console.log('Escuchando en puerto 3000')
});




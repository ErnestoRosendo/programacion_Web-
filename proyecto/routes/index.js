let router = require('express').Router();

let clientes = require('./clientes.js')
router.use('/clientes', clientes)

let numerosr=require('./numeros');
router.use('/numeros', numerosr);


module.exports=router;
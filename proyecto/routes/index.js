let router = require('express').Router();

let clientes = require('./clientes')
router.use('/clientes', clientes)

let numerosr=require('./numeros');
router.use('/numeros', numerosr);


module.exports=router;
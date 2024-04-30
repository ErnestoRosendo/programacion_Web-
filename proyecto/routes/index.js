let router = require('express').Router();


let numerosr=require('./numeros');
router.use('/numeros', numerosr);


module.exports=router;
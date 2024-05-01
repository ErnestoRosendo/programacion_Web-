let clientesController=require('../controllers/clienteController')
let router=require('express').Router()

router.get('./', (req,res)=>{
    clientesController.listar(req,res);
})

router.get('/:id', (req, res)=>{
    res.json({id:0, tipo:'todos'})
})
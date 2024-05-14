let clientesController=require('../controllers/clienteController')
let router=require('express').Router()

router.get('./', (req,res)=>{
    clientesController.listar(req,res);
})

router.get('/:id', (req, res)=>{
    clienteController.buscar(req, res)
})

router.post('/',(req, res)=>{
    clienteController.agregar(req, res)
})

module.exports = router
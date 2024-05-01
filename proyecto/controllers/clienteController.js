let mysql=require('../bd/mysql');

module.exports = {
    listar:(req,res)=>{
        mysql.query('select * from clientes',(err, rows, fields)=>{
            if (err)
                res.json(err)
            else
                console.log(fields);
                res.json(rows);
        })
    },

    eliminar:(req,res)=>{

    },

    buscar:(req,res)=>{

    }
}
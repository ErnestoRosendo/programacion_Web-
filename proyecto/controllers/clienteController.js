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
        let id = req.params.id;
        mysql.query('DELETE from clientes where id='+id,(err, rows, fields)=>{
            if (err)
                res.json(err)
            else
                console.log(fields);
                res.json(rows);
        })
    },

    buscar:(req,res)=>{
        let id = req.params.id;
        mysql.query('SELECT from clientes where id='+id,(err, rows, fields)=>{
            if (err)
                res.json(err)
            else
                console.log(fields);
                res.json(rows);
        })
    },

    agregar:(req,res)=>{
        let nombre = req.body.nombre;
        let rfc = req.body.rfc;
        let celular = req.body.celular;
        let calle = req.body.calle;
        let numero = req.body.numero;
        let codigopostal = req.body.codigopostal;
        mysql.query('INSERT INTO clientes(nombre, rfc, celular, calle, numero,codigopostal) VALUES (?,?,?,?,?,?)',[nombre,rfc,celular,calle,numero,codigopostal],(err, rows, fields)=>{
            if (err)
                res.json(err)
            else
                console.log(fields);
                res.json(rows);
        })
    }
}



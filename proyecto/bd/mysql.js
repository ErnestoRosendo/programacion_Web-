const mysql = require("./node_modules/mysql");

const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

mysqlConnection.connect((err)=>{
    if (err)
        console.error(err);
    else
        console.log("Conectando a la BD")
});

module.exports=mysqlConnection;
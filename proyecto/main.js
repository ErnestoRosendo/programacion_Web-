var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'clientes'
});
 
connection.connect();
 
connection.query('SELECT * from clientes', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});
 
connection.end();
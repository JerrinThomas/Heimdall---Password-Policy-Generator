const mysql = require('mysql');
//connection Variable
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'heimdall'
});

module.exports = {
  con
};

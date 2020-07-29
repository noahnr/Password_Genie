var mysql = requre("mysql")


if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
   host:'local host' ,
   port: 8080,
   user:'root',
   password:'password',   
   database:'password_genie'
});
}
 connection.connect();

 module.exports = connection;

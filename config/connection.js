// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "f57u460bv5tp6tmm",
  password: "c3d9gv1yu9ni21vn",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


//tip: load the website with express
//seed the database first with the burgers first 
//update 

var connection = require("../config/connection.js");

var orm = {
//all 
selectAll: function (tableInput,cb) {

},

//create
insertOne: function (table, cols, vals, cb){

},
// update
updateOne: function (table, objColVals, condition, cb){

}
};


module.exports = orm;

//tip: load the website with express
//seed the database first with the burgers first 
//update 

var connection = require("../config/connection.js");

var orm = {
//all 
all: function (tableInput,cb) {

},

//create
create: function (table, cols, vals, cb){

},
// update
update: function (table, objColVals, condition, cb){

}
};


module.exports = orm;
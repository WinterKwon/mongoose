//mongoose 설정
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {type : String, required : true},
    password : {type : Number || String, required : true}
},{
    timestamps : true
});

module.exports = mongoose.model("User", userSchema);
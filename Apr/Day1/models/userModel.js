const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullname:{
        type:String,

    },
    age:{
        type:Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },

});

const user = mongoose.model("user",userSchema);

module.exports = user;
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

const User = mongoose.model("User",userSchema);

module.exports = User;
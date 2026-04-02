const User = require("../models/userModel");


const createUser = async (req,res) => {

    try {
        const user = new User(req.body);
        console.log("hii")
        await user.save();

        res.json({status:true,message:"successfully created"});
    } catch (error) {
        res.json({status:false,message:"Failed to create user"});
    }
}

const updateUser = async (req,res) => {

    try {
        const {id} = req.params;
        const existingUser = await User.findById(id);

        res.json({status:true,message:"success",existingUser});

    } catch (error) {
        res.json({status:false,message:"Failed to update user"});
    }
}


module.exports = {createUser,updateUser};

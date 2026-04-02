const express= require("express");
const { createUser,updateUser } = require("../controller/userController");

const router = express.Router();

router.get("/get",(req,res)=>{
    res.send("this is get request");
});

router.post("/post",createUser)


router.put("/update/:id",updateUser)
    


router.delete("/delete/:id",(req,res)=>{
    res.send("this is delete request");
});

module.exports = router;


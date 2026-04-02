const express= require("express");
const { createUser } = require("../controller/userController");

const router= express.Router();

router.get("/get",(req,res)=>{
    res.send("this is get request");
});

router.post("/add",createUser)
router.post("/add",(req,res)=>{
    res.send("this is post request");

});

router.put("/update/:id",(req,res)=>{
    res.send("this is put request");

});

router.delete("/delete/:id",(req,res)=>{
    res.send("this is delete request");
});

module.exports = router;


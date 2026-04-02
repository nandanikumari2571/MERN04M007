const express = require("express");
const dotenv = require("dotenv");

const  userRoutes  = require("./routes/userRoutes");
dotenv.config();

const app = express();

app.use(express.json());


const port = process.env.PORT || 8000;


app.use("/user",userRoutes);

app.use("/api",(req,res)=>{
    res.send("welcome back to backend !"); 
});


app.listen(port, () => {
    console.log("Server is running",port);
});

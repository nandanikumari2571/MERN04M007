const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const  userRoutes  = require("./routes/userRoutes");
const connectDB = require("./config/db");



const app = express();

app.use(express.json());
connectDB();



const port = process.env.PORT || 8000;


app.use("/user",userRoutes);

app.use("/api",(req,res)=>{
    res.send("welcome back to backend !"); 
});


app.listen(port, () => {
    console.log("Server is running",port);
});

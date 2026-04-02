// it is used to import the express inside the current file.
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();   // it is used to create the express application.




const app = express();

let port = process.env.port || 8000;

// listen is used to run the server on specific port.
app.listen(8000, () => {
    console.log("My server is  and now we can access hahahaa...");

});
    

const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("My data base is connected") 

    }
    catch (error) {
        console.log("fail to connect",error);
    }
}

module.exports = connectDB;
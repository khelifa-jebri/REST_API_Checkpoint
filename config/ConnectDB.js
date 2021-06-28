const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const MONGODB_URI = process.env.MONGODB_URI;

const ConnectDB = () => {
    mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => console.log("Connected to DB successfully. "))
        .catch((err) => console.log(err));
}

module.exports = ConnectDB;
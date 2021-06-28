const express = require("express");

require("dotenv").config({ path: "./config/.env" });
const ConnectDB = require("./config/ConnectDB");

const app = express();

//Middelwares
app.use(express.json());

//Creating server
const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`server started on port ${PORT}`);
});

// Connecting to Data Base
ConnectDB();

//connecting the routes (CRUD)
app.use("/api/users/", require("./routes/user"));
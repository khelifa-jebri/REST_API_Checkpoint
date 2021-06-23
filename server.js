const express = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();
const Service = require("./services/Services")
require("dotenv").config({ path: "./config/.env" });

const app = express();

// Connecting to Data Base
mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successfully ..."))
    .catch((err) => console.log(err));

app.use(express.json());


router.get(
    "/userList",
    Service.getAllUser
);

router.post(
    "/createUser",
    Service.addUser
);

router.put(
    "/editUser/:id",
    Service.updateUser
);

router.delete(
    "/deleteUser/:id",
    Service.deleteUser
);

app.use("/api", router);

const PORT = 5000 || process.env.PORT;

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`server started on port ${PORT}`);
});
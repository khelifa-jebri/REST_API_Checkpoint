const express = require("express");
const router = express.Router();
const User = require("../models/User");

//ADD New User
router.post("/addUser", (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    User.create({
        firstName,
        lastName,
        phone,
        email
    }, (err, data) => {
        if (err) throw err;
        else res.json({
            status: 200,
            message: "User added successfully.",
            data: data
        });
    });
});

//GET All Users
router.get("/getUsers", (req, res) => {
    return User.find({}, (err, data) => {
        if (err) throw err;
        else res.json({ status: 200, messsage: "All users : ", data });
    });
})

//DELETE One User by id
router.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err, data) => {
        if (err) throw err;
        else res.json({
            status: 200,
            message: "user deleted successfully",
            data
        });
    });
})

//Update One User by id
router.put("/upateUser/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, {...req.body }, (err, data) => {
        if (err) throw err;
        else res.json({
            status: 200,
            message: "user updated successfully",
            data
        });
    });
})

module.exports = router;
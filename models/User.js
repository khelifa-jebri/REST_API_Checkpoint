const mongoose = require("mongoose");

const userModel = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
};

const UserSchema = new mongoose.Schema(userModel);

User = mongoose.model("User", UserSchema);

module.exports = User;
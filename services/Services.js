const User = require("../models/User")

module.exports = {

    //Service for addding a new user
    async addUser(req, res) {
        try {
            const { firstName, lastName, phoneNumber, email } = req.body;
            const newUser = User.create({ firstName, lastName, phoneNumber, email });
            res.status(201).json({
                status: true,
                message: "user added successfully",
            });
        } catch (err) {
            res.status(500).json({ status: false, message: err });
            console.log(err);
        }
    },

    //Service for getting all users
    async getAllUser(req, res) {
        try {
            UserList = await User.find();
            res.status(200)
                .json({ status: true, message: "User list", data: UserList });
        } catch (err) {
            console.log(err);
            return err;
        }
    },

    //Service for deleting a user by id
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await User.findByIdAndRemove(id);
            res.status(200)
                .json({ status: true, message: "user deleted successfully" });

        } catch (err) {
            console.log(err);
            res.status(500).json({ staus: false, message: err });
        }
    },

    //Service for update a user by id
    async updateUser(req, res) {
        try {

            const { id } = req.params;
            const { firstName, lastName, phoneNumber, email } = req.body;
            await User.findByIdAndUpdate(id, {
                firstName,
                lastName,
                phoneNumber,
                email,
            });

            existingUser = await User.findById(id);

            res.status(200).json({
                status: true,
                message: "User edited",
                data: existingUser,
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
}
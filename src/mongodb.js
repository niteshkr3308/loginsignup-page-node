const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginsignup")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Failed to connect", err);
    });

const loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: String,
    resetTokenExpiration: Date
});
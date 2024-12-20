const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginsignup", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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
        required: true,
        select: false
    },
    resetToken: String,
    resetTokenExpiration: Date
});

const collection = mongoose.model("collection1", loginschema);

module.exports = collection;
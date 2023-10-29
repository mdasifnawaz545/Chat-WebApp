const mongoose = require('mongoose');

// Creating Schema for MongoDB

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
        min: [3, "Name is Too Short"],

    },
    to: {
        type: String,
        required: true,
        min: [3, "Name is Too Short"],

    },
    message: {
        type: String,
        default: "Salaam...",
    },
    timeline: {
        type: Date,
    },
}
);
let Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;


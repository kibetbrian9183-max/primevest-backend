const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: {
        type: String,
        unique: true
    },

    password: String,

    balance: {
        type: Number,
        default: 0
    },

    totalInvested: {
        type: Number,
        default: 0
    },

    totalWithdrawn: {
        type: Number,
        default: 0
    },

    referralCode: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);

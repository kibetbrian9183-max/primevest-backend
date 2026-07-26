const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema({

    phone: String,

    account: String,

    amount: Number,

    status: {
        type: String,
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Withdrawal", withdrawalSchema);

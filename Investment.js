const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({

    phone: String,

    plan: String,

    amount: Number,

    dailyIncome: Number,

    duration: Number,

    status: {
        type: String,
        default: "Pending"
    },

    mpesaReceipt: String,

    checkoutRequestId: String,

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Investment", investmentSchema);

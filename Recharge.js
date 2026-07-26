const mongoose = require("mongoose");

const rechargeSchema = new mongoose.Schema({

    phone: String,

    amount: Number,

    mpesaReceipt: String,

    checkoutRequestId: String,

    status: {
        type: String,
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Recharge", rechargeSchema);

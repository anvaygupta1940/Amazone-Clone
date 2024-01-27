const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    products: {
        type: Array,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    address: {
        type: Object,
        require: true
    }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
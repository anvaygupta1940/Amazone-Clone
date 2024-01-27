const mongoose = require("mongoose");

const AddProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    imageURL: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    rating: {
        type: Number,
        require: true
    }
}, { timestamps: true });

const AddProduct = mongoose.model("AddProduct", AddProductSchema);
module.exports = AddProduct;
const AddProduct = require("../models/AddProduct");
const router = require("express").Router();

/* adding product */
router.post("/add", async (req, res) => {
    const newProduct = new AddProduct({
        title: req.body.title,
        imageURL: req.body.imageURL,
        price: req.body.price,
        rating: req.body.rating
    });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }

})

/* getting all products */
router.get("/get", async (req, res) => {
    try {
        const products = await AddProduct.find();
        res.status(201).json(products);
    } catch (err) {
        res.status(500).json(err);
    }

})


// get a particular product
router.get("/find/:productId", async (req, res) => {
    try {
        const product = await AddProduct.findById(req.params.productId);
        res.status(201).json(product);
    } catch (err) {
        return res.status(500).json(err);
    }
})
module.exports = router;
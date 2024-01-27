const Order = require("../models/Order");

const router = require("express").Router();

/* adding order */
router.post("/add", async (req, res) => {
    const newOrder = new Order({
        products: req.body.products,
        price: req.body.price,
        email: req.body.email,
        address: req.body.address
    });

    // console.log("Order details >>>", newOrder);

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})


// gettting all orders of logged in user
router.get("/get/:email", async (req, res) => {
    try {
        // console.log("email>>", req.params.email);

        const orders = await Order.find({ email: req.params.email });
        res.status(201).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;
const router = require("express").Router();
const stripe = require("stripe")(
    "sk_test_51NY2MkSI7I8p7o5kCzvRK2Ah5MUluugCSCNzzj0WR8eJqHJERsnnkvdNyI66eY8mY1MeByuSvxvsyidPWbqheJaW00UoArLFFo"
);
/*  above key is secret key of stripe */


/* making a payment  */
router.post("/create", async (req, res) => {
    const total = req.body.amount;
    // console.log("Payment request is received of amount ", total);

    /* creating client secret using stripe */
    const payment = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: "inr",
    });

    // console.log(payment.client_secret);
    /* sending client secret which we get from this payment */
    res.status(201).send(payment.client_secret);

})

module.exports = router;
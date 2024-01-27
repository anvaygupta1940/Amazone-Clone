const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// routeeee
const addProductRoute = require("./Routes/addProduct");
const paymentRoute = require("./Routes/payment");
const orderRoute = require("./Routes/order");
const authRoute = require("./Routes/auth");


/*  MIDDLEWARES */
dotenv.config();
app.use(cors());
app.use(express.json());


/* Routes */
app.use("/api/product", addProductRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);



const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL).then(app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    console.log("Server is connected with database");
})).catch((err) => {
    console.log(`${err} does not connect`);
})

const express = require("express");
const router = express.Router();
require("dotenv").config();


const { makePayment } = require("../controllers/payment");

// POST route for payment
router.post("/makePayment", makePayment);

module.exports = router;

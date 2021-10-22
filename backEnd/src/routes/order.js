const express = require("express");
const router = express.Router();
const { getOrders } = require("../controller/order");

router.post("/getOrders", getOrders);

module.exports = router;

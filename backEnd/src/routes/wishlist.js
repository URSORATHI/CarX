const express = require("express");
const { addItemToWishlist } = require("../controller/wishlist");
const { requireSignin, userMiddleware } = require("../common-middleware");
const router = express.Router();

router.post(
  "/user/wishlist/addtowishlist",
  requireSignin,
  userMiddleware,
  addItemToWishlist
);

module.exports = router;

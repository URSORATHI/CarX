const express = require("express");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");
const { createProduct } = require("../controller/product");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
    // cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
    // cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: "uploads/" });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("carPictures"),
  createProduct
);

module.exports = router;

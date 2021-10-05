const Product = require("../models/product");
const slugify = require("slugify");

exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.files, body: req.body });
  const {
    name,
    price,
    inspectionScore,
    category,
    carOverview,
    inspectionReport,
    carSpecifications,
    carFeatures,
    createdBy,
  } = req.body;

  let carPictures = [];
  if (req.files.length > 0) {
    carPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    inspectionScore,
    carPictures,
    category,
    carOverview,
    inspectionReport,
    carSpecifications,
    carFeatures,
    createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

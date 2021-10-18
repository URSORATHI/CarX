const Product = require("../models/product");
const slugify = require("slugify");
const Category = require("../models/category");

exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.files, body: req.body });
  const {
    name,
    price,
    inspectionScore,
    category,
    // carOverview,
    // inspectionReport,
    // carSpecifications,
    // carFeatures,
    manufacturedYear,
    regYear,
    fuel,
    kmsDriven,
    engineDisplacement,
    noOfOwners,
    rto,
    transmission,
    insuranceType,

    interiorDetails,
    bodyNframe,
    engineNtransmission,
    electricals,
    tyre,
    light,
    exteriorDetails,
    otherDetails,

    mileage,
    engine,
    maxPower,
    torque,
    wheelSize,
    seats,

    carComfort,
    carSafety,
    carInterior,
    carExterior,
    carEntertainment,
    // createdBy,
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
    // carOverview,
    // inspectionReport,
    // carSpecifications,
    // carFeatures,
    manufacturedYear,
    regYear,
    fuel,
    kmsDriven,
    engineDisplacement,
    noOfOwners,
    rto,
    transmission,
    insuranceType,

    interiorDetails,
    bodyNframe,
    engineNtransmission,
    electricals,
    tyre,
    light,
    exteriorDetails,
    otherDetails,

    mileage,
    engine,
    maxPower,
    torque,
    wheelSize,
    seats,

    carComfort,
    carSafety,
    carInterior,
    carExterior,
    carEntertainment,
    // createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id")
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (category) {
        Product.find({ category: category._id }).exec((error, products) => {
          if (error) {
            return res.status(400).json({ error });
          }

          if (products.length > 0) {
            res.status(200).json({ products });
          }
        });
      }
    });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params Required" });
  }
};

exports.getAllProducts = (req, res) => {
  Product.find({}).exec((error, products) => {
    if (error) return res.status(400).json({ error });
    // if (products) {
    //   const productList = createProduct(products);
    res.status(200).json({ products });
    // console.log(productList);
    //}
  });
};

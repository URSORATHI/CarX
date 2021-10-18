const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
    inspectionScore: {
      type: Number,
      required: true,
    },
    carPictures: [
      {
        img: { type: String },
        // required: true,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // carOverview: [
    //   {
    manufacturedYear: {
      type: Number,
      required: true,
    },
    regYear: {
      type: Number,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    kmsDriven: {
      type: Number,
      required: true,
    },
    engineDisplacement: {
      type: Number,
      required: true,
    },
    noOfOwners: {
      type: Number,
    },
    rto: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    insuranceType: {
      type: String,
      required: true,
    },
    //   },
    // ],
    // inspectionReport: [
    //   {
    interiorDetails: {
      type: Number,
      required: true,
    },
    bodyNframe: {
      type: Number,
      required: true,
    },
    engineNtransmission: {
      type: Number,
      required: true,
    },
    electricals: {
      type: Number,
      required: true,
    },
    tyre: {
      type: Number,
      required: true,
    },
    light: {
      type: Number,
      required: true,
    },
    exteriorDetails: {
      type: Number,
      required: true,
    },
    otherDetails: {
      type: Number,
      required: true,
    },
    //   },
    // ],
    // carSpecifications: [
    //   {
    mileage: {
      type: Number,
      required: true,
    },
    engine: {
      type: Number,
      required: true,
    },
    maxPower: {
      type: Number,
      required: true,
    },
    torque: {
      type: Number,
      required: true,
    },
    wheelSize: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    //   },
    // ],
    // carFeatures: [
    //   {
    carComfort: {
      type: String,
    },
    carSafety: {
      type: String,
    },
    carInterior: {
      type: String,
    },
    carExterior: {
      type: String,
    },
    carEntertainment: {
      type: String,
    },
    //   },
    // ],
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

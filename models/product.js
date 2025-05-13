const mongoose = require("mongoose");

// Schema - Variant -> Person -> Eye, Hand, Leg, Teet
const productSchema = new mongoose.Schema(
  {
    productName: { type: String },
    sellingPrice: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);


// Model Expand
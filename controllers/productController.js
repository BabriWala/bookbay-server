const Product = require("../models/product");
// Simple CRUD  = Create, Read, Delete, Update

// Product Image
const createProduct = async (req, res) => {
  //   console.log(req.body);
  const newProduct = new Product(req.body);

  const savedProduct = await newProduct.save();
  res.status(201).json(savedProduct);
};

// Filter - nmae, rating, categoyr, subcategory, 
// Pagination -> Sorting by 
// position number
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  // console.log(products);
  res.json(products);
};

// Verify id  exist
const getProductsById = async (req, res) => {
  // console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  // console.log(product);
  res.json(product);
};

// Verify id  exist
const updateProduct = async (req, res) => {
  // console.log(req.params.id, req.body);
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// Verify id  exist
const deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
};

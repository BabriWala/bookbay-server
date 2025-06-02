const express = require("express");

const createProduct = require("../controllers/product/createProduct");
const getAllProducts = require("../controllers/product/getAllProducts");
const getProductById = require("../controllers/product/getProductById");
const updateProduct = require("../controllers/product/updateProduct");
const deleteProduct = require("../controllers/product/deleteProduct");
const productUpload = require("../middlewares/productUpload/productUpload");

const router = express.Router();

router.post(
  "/",
  productUpload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  createProduct
);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

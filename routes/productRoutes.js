const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

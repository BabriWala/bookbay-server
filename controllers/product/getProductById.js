const Product = require("../../models/product");

// Verify id  exist
const getProductById = async (req, res) => {
  try {
    // console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product Not Found" });
    // console.log(product);
    res.json(product);
  } catch (err) {
    res.status(500).json({ errro: "Failed to fetch Product" });
  }
};

module.exports = getProductById;

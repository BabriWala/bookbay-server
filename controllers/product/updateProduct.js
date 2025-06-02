const Product = require("../../models/product");

// Verify id  exist
const updateProduct = async (req, res) => {
  try {
    // console.log(req.params.id, req.body);
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Productnot found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed To Update Product" });
  }
};

module.exports = updateProduct;

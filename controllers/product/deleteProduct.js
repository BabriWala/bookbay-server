const Product = require("../../models/product");

// Verify id  exist
const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    // console.log(deleted);
    // Tyr yourself
    if (!deleted) {
      return res.status(404).json({
        error: "Product not found please provide existing product id. ",
      });
    }
    res.status(200).json({ message: `${req.params.id} has been deleted` });
  } catch (err) {
    res.status(500).json({
      error: `Couln't delete desired product for this reason: ${err}`,
    });
  }
};

module.exports = deleteProduct;

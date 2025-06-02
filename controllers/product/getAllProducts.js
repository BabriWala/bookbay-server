/**
 * Search By Product Name
 * Case Insensitive
 *
 *
 */

const Product = require("../../models/product");

const buildFilters = (query) => {
  const filters = { isDeleted: false, isPublished: true };
  // { productName: "Mango" }
  // {}

  if (query.productName)
    filters.productName = { $regex: new RegExp(query.productName, "i") };
  if (query.category)
    filters.category = { $regex: new RegExp(query.category, "i") };
  if (query.subCategory)
    filters.subCategory = { $regex: new RegExp(query.subCategory, "i") };
  if (query.brand) filters.brand = { $regex: new RegExp(query.brand, "i") };

  return filters;
};

const getAllProducts = async (req, res) => {
  // console.log();
  // {productName: mango}
  const filters = buildFilters(req.query);
  // const page = 1;
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;

  /// 1 = 1,2
  // 2 = 3,4
  /// skip = (page -1 ) * limit = (2-1) * 2 = 1 * 2 = 2
  // skip = (page-1) * limit = (3-1) * 2 = 2 * 2 = 4

  try {
    // const products = await Product.find({ productName: "Mango" });
    const products = await Product.find(filters).skip(skip).limit(limit);
    // console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Products" });
  }
};

module.exports = getAllProducts;

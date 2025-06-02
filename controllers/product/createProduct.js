const Product = require("../../models/product");

const createProduct = async (req, res) => {
  //   console.log(req.body);
  try {
    const {
      productName,
      productNameLocal,
      slug,
      description,
      descriptionLocal,
      category,
      subCategory,
      brand,
      manufacturere,
      modelNumber,
      sku,
      barcode,
      regularPrice,
      sellingPrice,
      discountPercentage,
      discountType,
      dealStartDate,
      dealEndDate,
      stock,
      inStock,
      minOrderQty,
      maxOrderQty,
      variants,
      specification,
      shippingInfo,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      isFeatured,
      isTrending,
      isNewArrival,
      isPublished,
      seller,
      adddedBy,
      returnable,
      returnDays,
      warrantyType,
      warrantyDuration,
      customFields,
    } = req.body;

    //  Parse JSOn Strings
    const parsedVariants = variants ? JSON.parse(variants) : [];
    console.log(variants, "variants");
    const parsedSpecification = specification ? JSON.parse(specification) : [];
    const parsedShippingInfo = shippingInfo ? JSON.parse(shippingInfo) : [];
    const parsedMetaKeywords = metaKeywords ? JSON.parse(metaKeywords) : [];
    const parsedTags = tags ? JSON.parse(tags) : [];
    const parsedCustomFields = customFields ? JSON.parse(customFields) : [];
    // Image Hnadling from multer
    const images = req.files?.images?.map((file) => file.path) || [];
    const thumbnail = req.files?.thumbnail?.[0]?.path || null;

    const newProduct = new Product({
      productName,
      productNameLocal,
      slug,
      description,
      descriptionLocal,
      category,
      subCategory,
      brand,
      manufacturere,
      modelNumber,
      sku,
      barcode,
      regularPrice,
      sellingPrice,
      discountPercentage,
      discountType,
      dealStartDate,
      dealEndDate,
      stock,
      inStock,
      minOrderQty,
      maxOrderQty,
      variants: parsedVariants,
      specification: parsedSpecification,
      shippingInfo: parsedShippingInfo,
      tags: parsedTags,
      metaTitle,
      metaDescription,
      metaKeywords: parsedMetaKeywords,
      isFeatured,
      isTrending,
      isNewArrival,
      isPublished,
      seller,
      adddedBy,
      returnable,
      returnDays,
      warrantyType,
      warrantyDuration,
      customFields: parsedCustomFields,
      images,
      thumbnail,
    });

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      product: newProduct,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      error: `Failed To Create This Product for this problem: ${err}`,
    });
  }
};

module.exports = createProduct;

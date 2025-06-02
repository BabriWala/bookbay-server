const mongoose = require("mongoose");

// Schema - Variant -> Person -> Eye, Hand, Leg, Teet
const productSchema = new mongoose.Schema(
  {
    // Product Name
    productName: { type: String }, // Mango
    productNameLocal: { type: String },
    slug: { type: String, required: true, unique: true },

    // Description
    description: { type: String },
    descriptionLocal: { type: String },

    // Category
    category: { type: String }, // Single Path
    subCategory: { type: String }, // Single Path

    // Brand
    brand: { type: String },
    manufacturer: { type: String },
    modelNumber: { type: String },

    // Unique
    sku: { type: String, unique: true },
    barcode: { type: String },

    // Price & Discount
    regularPrice: { type: Number },
    sellingPrice: { type: Number },
    discountPercentage: { type: Number },
    discountType: { type: String, enum: ["percentage", "flat"] },
    dealStartDate: { type: Date },
    dealEndDate: { type: Date },

    // Stock
    stock: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
    minOrderQty: { type: Number, default: 1 },
    maxOrderQty: { type: Number },

    // Images
    images: [{ type: String }],
    thumbnail: { type: String },

    // variants
    variants: [
      {
        name: { type: String }, // "Color, size",
        options: [{ type: String }],
      },
    ],

    // Specification & Attributes
    specification: [
      {
        key: { type: String },
        value: { type: String },
      },
    ],

    // Shipping
    shippingInfo: {
      weight: { type: Number },
      dimensions: {
        length: Number,
        width: Number,
        height: Number,
      },
      ShippingFrom: { type: String },
      estimatedDeliveryDays: { type: Number },
      shippingCharge: { type: Number, default: 0 },
    },

    // Review/Ratings
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    reviews: [
      {
        user: { type: String },
        rating: { type: Number, required: true },
        comment: { type: String },
        images: [{ type: String }],
        createdAt: { type: Date, default: Date.now },
      },
    ],

    // Tags & SEO
    tags: [{ type: String }],
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: [{ type: String }],

    // Flags
    isFeatured: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },

    /// Ownership
    seller: { type: String },
    addedBy: { type: String },

    // Return & Warranty
    returnable: { type: Boolean, default: false },
    returnDays: { type: Number },
    warrantyType: { type: String }, // Manufacturer, seller
    warrantyDuration: { type: String },

    // Soft Delete
    isDeleted: { type: Boolean, default: false },

    // Extra Custom Fields
    customFields: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
  },

  // Shipping

  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

// Model Expand

// Field -> BuyingPrice, CreatedBy -> Admin, Staff, Category -> Food, Electronics, Fabrics
// isavailable, productimage, author, rating, description,

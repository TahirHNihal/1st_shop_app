import mongoose from "mongoose";

//Schema
const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    reguler_price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    stock: {
      type: Number,
      default: null,
    },
    short_des: {
      type: String,
      trim: true,
    },
    long_des: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    gallery: {
      type: Array,
      default: null,
      trim: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Categories",
      default: [],
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tags",
      default: [],
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brands",
      default: null,
    },
    status: {
      type: Boolean,
      default: null,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Export Model
export default mongoose.model("Products", productsSchema);

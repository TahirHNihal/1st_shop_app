import express from "express";
import {
  createProductCategories,
  deleteProductCategory,
  getProductCategories,
  getProductCategory,
  updateProductCategory,
} from "../controllers/productCategoriesController.js";
import { productCategoriesMulter } from "../utils/multer.js";

//Create Router
const router = express.Router();

//Routes
router.get("/category", getProductCategories);
router.post("/category", productCategoriesMulter, createProductCategories);
router.get("/category/:slug", getProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", updateProductCategory);

//Export
export default router;

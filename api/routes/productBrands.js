import express from "express";
import {
  createProductBrand,
  deleteProductBrand,
  getProductBrand,
  getProductBrands,
  updateProductBrand,
} from "../controllers/productBrandsController.js";
import { productBrandsMulter } from "../utils/multer.js";

//Create Router
const router = express.Router();

//Routes
router.get("/brand", getProductBrands);
router.post("/brand", productBrandsMulter, createProductBrand);
router.get("/brand/:slug", getProductBrand);
router.delete("/brand/:id", deleteProductBrand);
router.put("/brand/:id", updateProductBrand);

//Export
export default router;

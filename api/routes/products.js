import express from "express";
import {
  createProducts,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productsController.js";
import { productMulter } from "../utils/multer.js";

//Create Router
const router = express.Router();

//Routes
router.route("/").get(getAllProducts).post(productMulter, createProducts);
router.get("/:slug", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", productMulter, updateProduct);

//Export
export default router;

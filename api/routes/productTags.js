import express from "express";
import {
  createProductTag,
  getProductTag,
  getProductTags,
  deleteProductTag,
  updateProductTag,
} from "../controllers/productTagsController.js";

//Create Router
const router = express.Router();

//Routes
router.get("/tag", getProductTags);
router.post("/tag", createProductTag);
router.get("/tag/:slug", getProductTag);
router.delete("/tag/:id", deleteProductTag);
router.put("/tag/:id", updateProductTag);

//Export
export default router;

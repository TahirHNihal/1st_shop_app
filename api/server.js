import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productsRoute from "./routes/products.js";
import productCategoriesRoute from "./routes/productCategories.js";
import productBrandsRoute from "./routes/productBrands.js";
import productTagsRoute from "./routes/productTags.js";
import mongoDBConnect from "./config/db.js";

//Initial Express
const app = express();
dotenv.config();

//Middlewares Setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Static
app.use(express.static("api/public"));

//Routes
app.use("/api/v1/product", productsRoute);
app.use("/api/v1/product", productCategoriesRoute);
app.use("/api/v1/product", productBrandsRoute);
app.use("/api/v1/product", productTagsRoute);

//Environment Variable
const PORT = process.env.PORT || 4040;

//Listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});

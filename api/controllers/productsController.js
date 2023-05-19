import { json } from "express";
import { createSlug } from "../helper/slugCreate.js";
import Products from "../models/Products.js";
import { unlinkSync } from "fs";

//Get All Products
const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find();
    res.status(200).json({
      products: data,
      message: "All products gated successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Get Create Products
const createProducts = async (req, res) => {
  try {
    const {
      name,
      reguler_price,
      sale_price,
      stock,
      short_des,
      long_des,
      categories,
      tags,
      brands,
    } = req.body;
    //Get photo filename
    const photo = req.files["product_photo"][0].filename;
    //Get gallery filename
    const gallery = [];
    [...req.files["product_gallery"]].forEach((item) => {
      gallery.push(item.filename);
    });

    //Product store in MongoDB
    const data = await Products.create({
      name,
      slug: createSlug(name),
      reguler_price,
      sale_price,
      stock,
      short_des,
      long_des,
      photo,
      gallery,
    });
    res.status(200).json({
      products: data,
      message: "Product added successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Get All Products
const getSingleProduct = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Products.findOne({ slug });
    res.status(200).json({
      product: data,
      message: "Get single product data successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Delete Product Category Controller
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Products.findByIdAndDelete(id);

    //delete related files
    unlinkSync(`api/public/products/${data.photo}`);
    data.gallery.forEach((item) => {
      unlinkSync(`api/public/products/${item}`);
    });
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Updated product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      reguler_price,
      sale_price,
      stock,
      short_des,
      long_des,
      del_gallery,
      categories,
      tags,
      brands,
    } = req.body;

    //Get Edit Product
    const product = await Products.findById(id);

    //Update product photo
    let photo = product.photo;
    if (req.files["product_photo"]) {
      photo = req.files["product_photo"][0].filename;
      unlinkSync(`api/public/products/${product.photo}`);
    }

    //Update product gallery
    if (del_gallery) {
      del_gallery.forEach((item) => {
        unlinkSync(`api/public/products/${item}`);
      });
    }
    let gallery_old = product.gallery.filter(
      (data) => !del_gallery.includes(data)
    );
    let new_gallery = [];
    if (req.files["product_gallery"]) {
      req.files["product_gallery"].forEach((item) => {
        new_gallery.push(item.filename);
      });
    }
    const final_gallery = gallery_old.concat(new_gallery);

    const data = await product.updateOne({
      name,
      slug: createSlug(name),
      photo,
      gallery: final_gallery,
      reguler_price,
      sale_price,
      stock,
      short_des,
      long_des,
    });

    res.status(200).json({
      product: data,
      message: "Product updated successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};
//Export
export {
  getAllProducts,
  createProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};

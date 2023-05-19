import Categories from "../models/Categories.js";

//Get All Product Categories Controller
const getProductCategories = async (req, res) => {
  try {
    const data = await Categories.find();
    res.status(200).json({
      categories: data,
      message: "All categories data geted success",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};
//Create Product Categories Controller
const createProductCategories = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Categories.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Category created  success",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Get Single Product Category Controller
const getProductCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Categories.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single category data geted success",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Delete Product Category Controller
const deleteProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Categories.findByIdAndDelete(id);
    console.log(data);
    res.status(200).json({
      message: "Category delete successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Update Product Category Controller
const updateProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Categories.findByIdAndUpdate(id, {
      name,
      slug,
    });
    res.status(200).json({
      message: "Category upadated successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Export
export {
  getProductCategories,
  createProductCategories,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

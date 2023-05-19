import Brand from "../models/Brands.js";

//Get All Product Categories Controller
const getProductBrands = async (req, res) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      brand: data,
      message: "All brands data geted successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};
//Create Product Brand Controller
const createProductBrand = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Brand created  successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

// //Get Single Product Category Controller
const getProductBrand = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Brand.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single brand data geted successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Delete Product Category Controller
const deleteProductBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Brand.findByIdAndDelete(id);
    console.log(data);
    res.status(200).json({
      message: "Brand delete successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

// //Update Product Category Controller
const updateProductBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Brand upadated successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Export
export {
  getProductBrands,
  createProductBrand,
  getProductBrand,
  updateProductBrand,
  deleteProductBrand
};

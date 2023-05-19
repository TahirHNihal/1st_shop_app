import Tags from "../models/Tags.js";

//Get All Product Categories Controller
const getProductTags = async (req, res) => {
  try {
    const data = await Tags.find();
    res.status(200).json({
      tag: data,
      message: "All tag data geted successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Create Product Tag Controller
const createProductTag = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Tags.create({
      name,
      slug,
    });
    res.status(200).json({
      tag: data,
      message: "Tag created  success",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

// //Get Single Tag  Controller
const getProductTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Tags.findOne({ slug });
    res.status(200).json({
      tag: data,
      message: "Single tag data geted success",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Delete Tag  Controller
const deleteProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tags.findByIdAndDelete(id);
    res.status(200).json({
      message: "Tag delete successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

// //Update Tag Controller
const updateProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tags.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Tag upadated successfully",
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
  }
};

//Export
export {
  getProductTags,
  createProductTag,
  getProductTag,
  deleteProductTag,
  updateProductTag,
};

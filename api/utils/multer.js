import multer from "multer";

//Create Storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "categories_photo") {
      cb(null, "api/public/categories/");
    }
    if (file.fieldname == "brands_photo") {
      cb(null, "api/public/brands/");
    }
    if (
      file.fieldname == "product_photo" ||
      file.fieldname == "product_gallery"
    ) {
      cb(null, "api/public/products/");
    }
  },
});

//product Categories Middlewares
export const productCategoriesMulter = multer({ storage }).single(
  "categories_photo"
);
export const productBrandsMulter = multer({ storage }).single("brands_photo");
export const productMulter = multer({ storage }).fields([
  {
    name: "product_photo",
    maxCount: 1,
  },
  {
    name: "product_gallery",
    maxCount: 10,
  },
]);

const express = require("express");
var router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createProduct, 
        getProducts, 
        getProduct, 
        deleteProduct,
        updateProduct} = require("../controllers/productController");

const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createProduct);
router.put("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);





module.exports = router;
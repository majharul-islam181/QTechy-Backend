const express = require("express");
const { createProduct, getProducts } = require("../controllers/product.controller");
const { auth } = require("../middlewares/auth.middleware");
const { admin } = require("../middlewares/admin.middleware");

const router = express.Router();

router.post("/", auth, admin, createProduct); 
router.get("/getProduts", auth,getProducts);

module.exports = router;

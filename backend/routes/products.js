const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");
//  http://localhost:3200/products/
router.get("/", productController.getProducts);
//  http://localhost:3200/products/5c1fb158b4cc3a53e842c191
router.get("/:id", productController.getProduct);
//  http://localhost:3200/products/    send in the body of requet the product {}
router.post("/", productController.postProduct);
//  http://localhost:3200/products/5c1fb158b4cc3a53e842c191    send in the body of requet the product {}
router.put("/:id", productController.updateProduct);
//  http://localhost:3200/products/5c1fb158b4cc3a53e842c191
router.delete("/:id", productController.deleteProduct);

module.exports = router;

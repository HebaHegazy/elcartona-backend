const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shops");

//  http://localhost:3200/shops/
router.get("/", shopController.getShops);
//  http://localhost:3200/shops/المعادي/القاهرة
router.get("/:city/:area", shopController.getShopsAtSpecificArea);
//  http://localhost:3200/shops/Mac
router.get("/:shopName", shopController.getProductsAtSpecificAreaAndShop);
//  http://localhost:3200/shops/5c1fd18f7f9bee47a854068c
router.get("/:id", shopController.getShop);
//  http://localhost:3200/shops/  send in the body of requet the shop {}
router.post("/", shopController.postShop);
//  http://localhost:3200/shops/5c1fd18f7f9bee47a854068c  send in the body of requet the shop {}
router.put("/:id", shopController.updateShop);
//  http://localhost:3200/shops/5c1fd18f7f9bee47a854068c
router.delete("/:id", shopController.deleteShop);

module.exports = router;

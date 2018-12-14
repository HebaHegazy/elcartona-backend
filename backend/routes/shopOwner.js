const express = require('express');
const router = express.Router();
const ShopOwnerController =require('../controllers/shopOwner');

router.get('/',ShopOwnerController.getShopOwners);
router.get('/:id',ShopOwnerController.getShopOwner);
router.post('/',ShopOwnerController.postShopOwner);
router.put('/:id',ShopOwnerController.updateShopOwner);
router.delete('/:id',ShopOwnerController.deleteShopOwner);

module.exports = router;
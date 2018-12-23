const express = require('express');
const router = express.Router();
const shopController =require('../controllers/shops');

router.get('/',shopController.getShops);
// router.get('/:id',shopController.getShop);
router.post('/',shopController.postShop);
// router.put('/:id',shopController.updateShop);
// router.delete('/:id',shopController.deleteShop);

module.exports = router;
const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areas');

router.get('/',areaController.getAreas);
router.get('/:id',areaController.getArea);
router.post('/',areaController.postArea);
router.put('/:id',areaController.updateArea);
router.delete('/:id',areaController.deleteArea);

module.exports = router; 


const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');

router.get('/',clientController.getClients);
router.get('/:id',clientController.getClient);
router.post('/',clientController.postClient);
router.put('/:id',clientController.updateClient);
router.delete('/:id',clientController.deleteClient);

module.exports = router; 


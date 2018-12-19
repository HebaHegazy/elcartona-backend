const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');

//  http://localhost:3000/clients/
router.get('/',clientController.getClients);
//  http://localhost:3000/clients/1
router.get('/:id',clientController.getClient);
//  http://localhost:3000/clients/
router.post('/',clientController.postClient);
//  http://localhost:3000/clients/1
router.put('/:id',clientController.updateClient);
//  http://localhost:3000/clients/1
router.delete('/:id',clientController.deleteClient);

module.exports = router; 


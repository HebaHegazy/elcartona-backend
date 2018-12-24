const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clients");

//  http://localhost:3200/clients/
router.get("/", clientController.getClients);
//  http://localhost:3200/clients/5c1fcb74780aa24b9c7fd09c
router.get("/:id", clientController.getClient);
//  http://localhost:3200/clients/  send in the body of requet the client {}
router.post("/", clientController.postClient);
//  http://localhost:3200/clients/5c1fcb74780aa24b9c7fd09c send in the body of requet the client {}
router.put("/:id", clientController.updateClient);
//  http://localhost:3200/clients/5c1fcb74780aa24b9c7fd09c
router.delete("/:id", clientController.deleteClient);

module.exports = router;

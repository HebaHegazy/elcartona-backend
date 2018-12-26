const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

//  http://localhost:3200/users/
router.get("/", userController.getUsers);
//  http://localhost:3200/users/5c1fcb74780aa24b9c7fd09c
router.get("/:id", userController.getUser);
//  http://localhost:3200/users/  send in the body of requet the user {}
router.post("/", userController.postUser);
//  http://localhost:3200/users/5c1fcb74780aa24b9c7fd09c send in the body of requet the user {}
router.put("/:id", userController.updateUser);
//  http://localhost:3200/users/5c1fcb74780aa24b9c7fd09c
router.delete("/:id", userController.deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const userAPI = require("../controller/api");

router.get("/users", (userAPI.fetchUsers));
router.get("/", userAPI.updateUser);
router.get("/users/:_id", userAPI.fetchUserById);


module.exports = router;
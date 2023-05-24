const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { registerUser, logout, login, loginStatus,} = require("../controllers/userController");




router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);
router.get("/loggedin", loginStatus);




module.exports = router;
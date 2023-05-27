const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { registerUser, logout, login, loginStatus, getUser, updateUser,} = require("../controllers/userController");
const protect = require("../middleWare/authMiddleware");




router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);
router.get("/loggedin", loginStatus);
router.get("/getuser", protect, getUser);
router.put("/updateuser", protect, updateUser);




module.exports = router;
const express = require("express");
var router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createTicket, 
        deleteTicket,} = require("../controllers/ticketController");


router.post("/", protect, createTicket);
router.delete("/:id", protect, deleteTicket);





module.exports = router;
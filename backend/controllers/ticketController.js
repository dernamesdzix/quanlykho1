const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticketModel");

dotenv.config();

const createTicket = asyncHandler(async (req, res) => {
  const { category, quantity, price } = req.body;

  // Validation
  if (!category || !quantity || !price) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Create Ticket
  const ticket = await Ticket.create({
    user: req.user.id,
    category,
    quantity,
    price,
  });

  res.status(201).json(ticket);
});

// Delete Ticket
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  // if ticket doesn't exist
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  // Match ticket to its user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await ticket.removeTicket();
  res.status(200).json({ message: "Ticket deleted." });
});

module.exports = {
  createTicket,
  deleteTicket,
};

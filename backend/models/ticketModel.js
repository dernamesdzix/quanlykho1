const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Please add a quantity"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Please add a price"],
      trim: true,
    },
    // description: {
    //   type: String,
    //   required: [true, "Please add a description"],
    //   trim: true,
    // },
    // image: {
    //   type: Object,
    //   default: {},
    // },
  },
  {
    timestamps: true,
  }
);

// Add custom instance method to the schema
ticketSchema.methods.removeTicket = async function () {
  await this.deleteOne();
};

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;

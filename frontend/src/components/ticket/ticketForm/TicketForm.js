import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./TicketForm.scss";

const ProductForm = ({
  ticket,
  handleInputChange,
  saveTicket,
}) => {
  return (
    <div className="add-ticket">
      <Card cardClass={"card"}>
        <form onSubmit={saveTicket}>
          <Card cardClass={"group"}>

          </Card>

          <label>Category:</label>
          <input
            type="text"
            placeholder="Ticket Category"
            name="category"
            value={ticket?.category}
            onChange={handleInputChange}
          />

          <label>Price:</label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={ticket?.price}
            onChange={handleInputChange}
          />

          <label>Quantity:</label>
          <input
            type="text"
            placeholder="Quantity"
            name="quantity"
            value={ticket?.quantity}
            onChange={handleInputChange}
          />


          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Ticket
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};


export default TicketForm;

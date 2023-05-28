// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
// import InvoiceForm from "../../components/invoice/InvoiceForm";
// import { createInvoice, selectIsLoading } from "../../redux/features/invoice/invoiceSlice";

// const initialState = {
//   customerName: "",
//   amount: "",
//   dueDate: "",
//   description: "",
// };

// const AddInvoice = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [invoice, setInvoice] = useState(initialState);
//   const isLoading = useSelector(selectIsLoading);

//   const { customerName, amount, dueDate, description } = invoice;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInvoice({ ...invoice, [name]: value });
//   };

//   const saveInvoice = async (e) => {
//     e.preventDefault();

//     const formData = {
//       customerName,
//       amount: Number(amount),
//       dueDate,
//       description,
//     };

//     await dispatch(createInvoice(formData));

//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       {isLoading && <Loader />}
//       <h3 className="--mt">Add New Invoice</h3>
//       <InvoiceForm
//         invoice={invoice}
//         handleInputChange={handleInputChange}
//         saveInvoice={saveInvoice}
//       />
//     </div>
//   );
// };

// export default AddInvoice;

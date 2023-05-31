import { FaTh, FaRegChartBar, FaFileInvoiceDollar } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Ticket",
    icon: <FaFileInvoiceDollar />,
    childrens: [
      {
        title: "Add Ticket",
        path: "/add-ticket",
      },
      {
        title: "T-Dashboard",
        path: "/ticket-dashboard",
      },
    ],
  },
  
];

export default menu;

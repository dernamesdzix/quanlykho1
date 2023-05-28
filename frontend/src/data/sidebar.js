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
    title: "Invoice",
    icon: <FaFileInvoiceDollar />,
    childrens: [
      {
        title: "Add Invoice",
        path: "/invoice",
      },
      {
        title: "Edit Invoice",
        path: "/edit-invoice",
      },
    ],
  },
  
];

export default menu;

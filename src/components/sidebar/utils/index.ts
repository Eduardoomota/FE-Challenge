import {
  FaHome,
  FaUser,
  FaChartBar,
  FaCreditCard,
  FaDollarSign,
  FaTools,
  FaRegLightbulb,
  FaCog,
} from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export const sidebarItems = [
  { name: "Dashboard", icon: FaHome, url: "/" },
  { name: "Transactions", icon: FaMoneyBillTransfer, url: "/transactions" },
  { name: "Accounts", icon: FaUser, url: "/accounts" },
  { name: "Investments", icon: FaChartBar, url: "/investments" },
  { name: "Credit Cards", icon: FaCreditCard, url: "/credit-cards" },
  { name: "Loans", icon: FaDollarSign, url: "/loans" },
  { name: "Services", icon: FaTools, url: "/services" },
  { name: "My Privileges", icon: FaRegLightbulb, url: "/my-privileges" },
  { name: "Setting", icon: FaCog, url: "/settings" },
];

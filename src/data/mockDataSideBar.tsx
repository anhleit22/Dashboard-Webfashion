import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import BookIcon from "@mui/icons-material/Book";

import config from "../config";

export const listMenu = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    tofrom: config.Routes.dashboard,
  },
  {
    title: "User",
    icon: AccountCircleIcon,
    tofrom: config.Routes.user,
  },
  {
    title: "Product",
    icon: ProductionQuantityLimitsIcon,
    tofrom: config.Routes.product,
  },
  {
    title: "Blog",
    icon: BookIcon,
    tofrom: config.Routes.blog,
  },
  {
    title: "Login",
    icon: LoginIcon,
    tofrom: config.Routes.login,
  },
  {
    title: "Not Found",
    icon: NotInterestedIcon,
    tofrom: config.Routes.notfound,
  },
];

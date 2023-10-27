import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

export const menuItems = [
  {
    section: "MAIN",
    items: [
      { label: "Overview", icon: <DashboardOutlinedIcon />, route: "/" },
      { label: "Leaderboard", icon: <EqualizerOutlinedIcon />, route: "/leaderboard" },
      { label: "Spreadsheets", icon: <TableChartOutlinedIcon />, route: "/spreadsheets" },
      {
        label: "Sales",
        icon: <MonetizationOnOutlinedIcon />,
        route: "/sales",
        subItems: [
          { label: "Product List", route: "/sales/productlist" },
          { label: "Transaction History", route: "/sales/transactionhistory" },
        ],
      },
      { label: "Administration", icon: <BusinessOutlinedIcon />, route: "/administration" },
      { label: "Schedule", icon: <EventOutlinedIcon />, route: "/schedule" },
    ],
  },
  {
    section: "OTHER",
    items: [
      { label: "Messages", icon: <MessageOutlinedIcon />, route: "/messages" },
      { label: "Library", icon: <LibraryBooksOutlinedIcon />, route: "/library" },
      { label: "Settings", icon: <SettingsOutlinedIcon />, route: "/settings" },
      { label: "Support", icon: <PhoneInTalkOutlinedIcon />, route: "/support" },
    ],
  },
];

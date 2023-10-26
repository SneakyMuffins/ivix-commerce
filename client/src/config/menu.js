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
        { label: "Overview", icon: <DashboardOutlinedIcon /> },
        { label: "Leaderboard", icon: <EqualizerOutlinedIcon /> },
        { label: "Spreadsheets", icon: <TableChartOutlinedIcon /> },
        {
          label: "Sales",
          icon: <MonetizationOnOutlinedIcon />,
          subItems: [{ label: "Product List" }, { label: "Transaction History" }],
        },
        { label: "Administration", icon: <BusinessOutlinedIcon /> },
        { label: "Schedule", icon: <EventOutlinedIcon /> },
      ],
    },
    {
      section: "OTHER",
      items: [
        { label: "Messages", icon: <MessageOutlinedIcon /> },
        { label: "Library", icon: <LibraryBooksOutlinedIcon /> },
        { label: "Settings", icon: <SettingsOutlinedIcon /> },
        { label: "Support", icon: <PhoneInTalkOutlinedIcon /> },
      ],
    },
];
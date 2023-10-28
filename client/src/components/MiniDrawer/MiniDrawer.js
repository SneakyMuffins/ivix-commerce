import { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const MiniDrawer = ({ children, menuItems }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const headerStyle = open ? { marginLeft: "-1px" } : { marginLeft: 23 };

  return (
    <Box sx={{ display: "flex" }}>
      <Box onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
        <Sidebar open={open} menuItems={menuItems} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            flexGrow: 1,
            transition: "margin 0.3s",
            ...headerStyle,
            zIndex: 1201,
            position: "relative",
          }}
        >
          <Header />
        </Box>
        <Box sx={{ flexGrow: 1, p: "28px", pt: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default MiniDrawer;

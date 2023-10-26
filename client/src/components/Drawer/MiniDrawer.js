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

  return (
    <Box sx={{ display: "flex" }}>
      <Box onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
        <Sidebar open={open} menuItems={menuItems} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, pl: 23 }}>
          <Header />
        </Box>
        <Box sx={{ flexGrow: 1, p: 5, pt: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MiniDrawer;

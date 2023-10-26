import * as React from "react";
import { useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

import SidebarItem from "./SidebarItem";
import DrawerHeader from "../Drawer/styled/DrawerHeader";
import Drawer from "../Drawer/styled/Drawer";

const Sidebar = ({ open, menuItems, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((section) => (
          <React.Fragment key={section.section}>
            <ListSubheader
              sx={{
                visibility: open ? "inherit" : "hidden",
                fontWeight: "bold",
              }}
            >
              {section.section}
            </ListSubheader>
            {section.items.map((menuItem) => (
                <SidebarItem open={open} menuItem={menuItem} />
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

import * as React from "react";
import { useLocation } from "react-router-dom";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SidebarItem from "./SidebarItem";
import Drawer from "./styled/Drawer";

const Sidebar = ({ open, menuItems }) => {
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <Divider sx={{ pt: "71px" }} />
      <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map((section) => (
          <React.Fragment key={section.section}>
            <ListSubheader
              key={section.section}
              sx={{
                visibility: open ? "inherit" : "hidden",
                fontWeight: "bold",
                paddingTop: "30px",
                paddingBottom: "10px",
                lineHeight: 0,
                color: "#92929D"
              }}
            >
              {section.section}
            </ListSubheader>
            {section.items.map((menuItem) => (
              <SidebarItem
                key={menuItem.label}
                open={open}
                menuItem={menuItem}
                currentLocation={location}
              />
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

import * as React from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SidebarItem from "./SidebarItem";
import Drawer from "../Drawer/styled/Drawer";

const Sidebar = ({ open, menuItems }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Divider sx={{pt: "69px"}} />
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

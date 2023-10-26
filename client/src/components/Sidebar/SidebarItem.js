import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SidebarSubItem from "./SidebarSubItem";

const SidebarItem = ({ open, menuItem }) => {
  return (
    <React.Fragment key={menuItem.label}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {menuItem.icon}
          </ListItemIcon>
          <ListItemText
            primary={menuItem.label}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
        {menuItem.subItems && (
          <List>
            {menuItem.subItems.map((subItem) => (
              <SidebarSubItem open={open} subItem={subItem} />
            ))}
          </List>
        )}
      </ListItem>
    </React.Fragment>
  );
};

export default SidebarItem;

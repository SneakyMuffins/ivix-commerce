import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import SidebarSubItem from "./SidebarSubItem";
import { useHighlightMenuItem } from "../../hooks/useHighlightMenuItem";

import Selector from "./svg/Selector";

const SidebarItem = ({ open, menuItem, currentLocation }) => {
  const isActive = useHighlightMenuItem(menuItem, currentLocation);
  const navigate = useNavigate();

  const [isSubItemsToggled, setSubItemsOpen] = React.useState(false);

  const handleItemClick = () => {
    if (menuItem.route) {
      navigate(menuItem.route);
    }
    setSubItemsOpen(!isSubItemsToggled);
  };

  return (
    <React.Fragment key={menuItem.label}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Box display="flex" alignItems="center">
          {isActive && <Selector />}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={handleItemClick}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: isActive ? "primary.main" : "",
              }}
            >
              {menuItem.icon}
            </ListItemIcon>
            <ListItemText
              primary={menuItem.label}
              sx={{ opacity: open ? 1 : 0 }}
              primaryTypographyProps={{
                color: isActive ? "primary" : "",
                fontWeight: 600,
                fontSize: "14px",
              }}
            />
            {menuItem.subItems &&
              open &&
              (isSubItemsToggled ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </Box>
        {menuItem.subItems && (
          <Collapse in={isSubItemsToggled}>
            <List>
              {menuItem.subItems.map((subItem) => (
                <SidebarSubItem
                  key={subItem.label}
                  open={open}
                  subItem={subItem}
                  currentLocation={currentLocation}
                />
              ))}
            </List>
          </Collapse>
        )}
      </ListItem>
    </React.Fragment>
  );
};

export default SidebarItem;

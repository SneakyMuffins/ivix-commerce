import { useNavigate } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useHighlightMenuItem } from "../../hooks/useHighlightMenuItem";

const SidebarSubItem = ({ open, subItem, currentLocation }) => {
  const isActive = useHighlightMenuItem(subItem, currentLocation);
  const navigate = useNavigate();

  const handleItemClick = () => {
    if (subItem.route) {
      navigate(subItem.route);
    }
  };

  return (
    <ListItem
      disablePadding
      sx={{
        display: "block",
        visibility: open ? "inherit" : "hidden",
        paddingLeft: "47px",
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: "initial",
          px: 2.5,
        }}
        onClick={handleItemClick}
      >
        <ListItemText
          primary={subItem.label}
          primaryTypographyProps={{
            color: isActive ? "#0062FF" : "",
            fontWeight: 500,
            fontSize: "14px",
          }}
        />
        <ListItemText
          sx={{ flex: "none" }}
          primaryTypographyProps={{
            color: "grey",
            fontWeight: 500,
            fontSize: "14px",
            width: "min-content",
          }}
        >
          {subItem.indicator}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarSubItem;

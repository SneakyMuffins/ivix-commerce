import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const SidebarSubItem = ({ open, subItem }) => {
  return (
    <ListItem
      key={subItem.label}
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
      >
        <ListItemText primary={subItem.label} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarSubItem;

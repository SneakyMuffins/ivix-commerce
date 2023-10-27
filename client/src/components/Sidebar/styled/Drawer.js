import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import openedMixin from "../mixin/openedMixin";
import closedMixin from "../mixin/closedMixin";
import { drawerWidth } from "../config";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default Drawer;

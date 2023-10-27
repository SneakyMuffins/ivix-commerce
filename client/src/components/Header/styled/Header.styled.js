import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";


export const HeaderContainer = styled(AppBar)(({ theme }) => ({
  position: "static",
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.common.white,
  minHeight: theme.spacing(9),
  justifyContent: "center",
}));

export const HeaderToolbar = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

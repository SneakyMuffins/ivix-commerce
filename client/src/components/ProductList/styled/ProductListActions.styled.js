import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { styled } from "@mui/material/styles";

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const SortDropdown = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  alignItems: "center",
  margin: "auto auto",
  gap: theme.spacing(3),
  width: "232px",
}));

export const FilterButton = styled(FilterAltOutlinedIcon)(({ theme }) => ({
  color: "#92929D",
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));

export const NewProductButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  fontSize: "14px",
  textTransform: "none",
  backgroundColor: "#0062FF",
  width: "168px",
  justifyContent: "left",
  fontWeight: "bold",
}));

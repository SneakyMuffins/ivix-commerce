import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
}));

export const ShowLabel = styled("p")(({ theme }) => ({
  fontSize: "18px",
  color: "#92929D",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const AllProductsLabel = styled("label")(({ theme }) => ({
  color: "#44444F",
  fontWeight: 500,
}));

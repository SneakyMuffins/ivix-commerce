import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Typography from "@mui/material/Typography";
import {
  HeaderContainer,
  ShowLabel,
  AllProductsLabel,
} from "./styled/ProductListHeader.styled";

const ProductListHeader = () => (
  <HeaderContainer>
    <Typography
      sx={{ fontSize: "24px", fontWeight: "bold", padding: "0 12px" }}
      variant="h2"
      component="h2"
    >
      Products List
    </Typography>
    <ShowLabel>
      Show: <AllProductsLabel>All Products</AllProductsLabel>
      <ArrowDropDownOutlinedIcon color="action" />
    </ShowLabel>
  </HeaderContainer>
);

export default ProductListHeader;

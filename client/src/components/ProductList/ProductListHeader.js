import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import {
  HeaderContainer,
  ShowLabel,
  AllProductsLabel,
} from "./styled/ProductListHeader.styled";

const ProductListHeader = () => (
  <HeaderContainer>
    <h2>Products List</h2>
    <ShowLabel>
      Show: <AllProductsLabel>All Products</AllProductsLabel>
      <ArrowDropDownOutlinedIcon color="action" />
    </ShowLabel>
  </HeaderContainer>
);

export default ProductListHeader;

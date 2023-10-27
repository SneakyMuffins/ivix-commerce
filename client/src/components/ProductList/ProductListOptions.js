import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ProductListOptions = ({ id, stock, onAddToBasket }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleMenuOpen}
        color="palette.secondary.main"
        size="small"
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => onAddToBasket(id)} disabled={stock === 0}>
          <IconButton>
            <AddShoppingCartIcon />
          </IconButton>
          Add to Cart
        </MenuItem>
        <MenuItem>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          Add to Wishlist
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProductListOptions;

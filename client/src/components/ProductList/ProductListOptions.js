import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
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
        sx={{
          "& .MuiMenu-paper": {
            p: "0 8px",
            backgroundColor: "#44444F",
          },
          "& .MuiMenu-paper .MuiList-root": {
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            width: "200px",
          },
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem sx={{ p: 0, fontSize: "12px", color: "white" }}>
          <StarBorderOutlinedIcon sx={{ pr: 1, color: "#92929D" }} />
          Wishlist this Product
        </MenuItem>
        <MenuItem
          onClick={() => onAddToBasket(id)}
          disabled={stock === 0}
          sx={{ p: 0, fontSize: "12px", color: "white" }}
        >
          <AddOutlinedIcon sx={{ pr: 1, color: "#92929D" }} />
          Add to Basket
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProductListOptions;

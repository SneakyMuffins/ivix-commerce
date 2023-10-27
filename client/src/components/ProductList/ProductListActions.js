import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  ActionsContainer,
  SortDropdown,
  FilterButton,
  NewProductButton,
} from "./styled/ProductListActions.styled";

const ProductListActions = () => {
  return (
    <ActionsContainer>
      <SortDropdown>
        <Box display="flex">
          <Typography sx={{ fontSize: "14px", color: "#696974" }}>
            Sort by:
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#44444F", fontWeight: "500" }}
          >
            Default
          </Typography>
        </Box>
        <ArrowDropDownOutlinedIcon
          sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.12)" }}
          color="action"
        />
      </SortDropdown>
      <FilterButton />
      <NewProductButton
        variant="contained"
        startIcon={<AddOutlinedIcon color="action" />}
      >
        New Product
      </NewProductButton>
    </ActionsContainer>
  );
};

export default ProductListActions;
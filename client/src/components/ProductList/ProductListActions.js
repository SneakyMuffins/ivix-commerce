import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { buttonClasses } from "@mui/material/Button";
import {
  ActionsContainer,
  SortDropdown,
  FilterButton,
  NewProductButton,
} from "./styled/ProductListActions.styled";

const ProductListActions = ({ stockPercentage }) => {
  return (
    <ActionsContainer>
      <Box sx={{ marginRight: "70px", marginBottom: "5px" }}>
        <SemiCircleProgressBar
          percentage={stockPercentage}
          strokeWidth={28}
          diameter={170}
          background="#F1F1F5"
          stroke="#50B5FF"
          showPercentValue
        />
      </Box>
      <SortDropdown>
        <Box display="flex" p="7px">
          <Typography sx={{ fontSize: "14px", color: "#696974" }}>
            Sort by:
          </Typography>
          <Box sx={{ marginLeft: "4px" }}>
            <Typography
              sx={{ fontSize: "14px", color: "#44444F", fontWeight: "600" }}
            >
              Default
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          sx={{
            padding: "7px 2px",
            borderLeft: "1px solid #F1F1F5",
          }}
        >
          <ArrowDropDownOutlinedIcon color="action" />
        </Box>
      </SortDropdown>
      <FilterButton />
      <NewProductButton
        sx={{
          [`& .${buttonClasses.startIcon} > *:nth-of-type(1)`]: {
            fontSize: "24px",
          },
        }}
        variant="contained"
        startIcon={<AddOutlinedIcon sx={{ color: "#92929D" }} />}
      >
        New Product
      </NewProductButton>
    </ActionsContainer>
  );
};

export default ProductListActions;

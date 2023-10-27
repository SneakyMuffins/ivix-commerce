import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";

const ProductList = ({ products }) => {
  const columns = [
    { field: "name", headerName: "Name", },
    { field: "brand", headerName: "Brand", },
    { field: "id", headerName: "ID" },
    { field: "stock", headerName: "Stock", },
    { field: "var", headerName: "Variant", },
    { field: "price", headerName: "Price", },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "30px", alignItems: "baseline" }}>
          <h2>Products List</h2>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p style={{ fontSize: "18px", color: "#92929D" }}>
              Show:{" "}
              <label style={{ color: "#44444F", fontWeight: "500" }}>
                All Products
              </label>
            </p>
            <ArrowDropDownOutlinedIcon color="action" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="white"
            p={1}
            sx={{
              borderRadius: "10px",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "auto",
              gap: "45px"
            }}
          >
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
          </Box>
          <FilterAltOutlinedIcon
            color="action"
            sx={{ bgcolor: "white", p: "7px", borderRadius: "10px" }}
          />
          <Button
            sx={{
              borderRadius: "10px",
              fontSize: "14px",
              textTransform: "none",
              bgcolor: "#0062FF",
            }}
            variant="contained"
            startIcon={<AddOutlinedIcon color="action" />}
          >
            New Product
          </Button>
        </Box>
      </Box>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          checkboxSelection
          hideFooterPagination
        />
      </div>
    </Box>
  );
};

export default ProductList;

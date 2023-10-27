import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import ProductListHeader from "./ProductListHeader";
import ProductListActions from "./ProductListActions";

const ProductList = ({ products }) => {
  const columns = [
    { field: "name", headerName: "Name" },
    { field: "brand", headerName: "Brand" },
    { field: "id", headerName: "ID" },
    { field: "stock", headerName: "Stock" },
    { field: "var", headerName: "Variant" },
    { field: "price", headerName: "Price" },
  ];

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <ProductListHeader />
        <ProductListActions />
      </Box>
      <Box>
        <DataGrid
          rows={products}
          columns={columns}
          checkboxSelection
          hideFooterPagination
        />
      </Box>
    </>
  );
};

export default ProductList;

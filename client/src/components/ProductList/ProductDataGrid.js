import React from "react";
import { Box, CircularProgress } from "@mui/material";
import DataGridHeader from "./DataGridHeader";
import DataGrid from "./styled/DataGrid.styled";
import DataGridFooter from "./DataGridFooter";
import ProductListOptions from "./ProductListOptions";
import { API_BASE_URL } from "../../api/config";

const ProductDataGrid = ({ productData, loading, setProductData }) => {
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  const renderActionsCell = (params) => (
    <ProductListOptions
      id={params.row.id}
      stock={params.row.stock}
      onAddToBasket={handleAddToBasket}
    />
  );

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
      renderCell: (params) => (
        <Box
          display="flex"
          alignItems="center"
          style={{
            color: params.row.stock === 0 ? "gray" : "inherit",
          }}
        >
          <img
            src={API_BASE_URL + params.row.imageUrl}
            alt={params.row.name}
            style={{
              width: "48px",
              height: "auto",
              borderRadius: "5px",
              marginRight: "17px",
            }}
          />
          {params.value}
        </Box>
      ),
    },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "id", headerName: "#ID", width: 150 },
    { field: "stock", headerName: "Stock", width: 150 },
    { field: "var", headerName: "Variant", width: 150 },
    { field: "price", headerName: "Price", width: 75 },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      renderCell: renderActionsCell,
    },
  ];

  const handleAddToBasket = (id) => {
    const updatedProductData = productData.map((product) =>
      product.id === id && product.stock > 0
        ? { ...product, stock: product.stock - 1 }
        : product
    );
    setProductData(updatedProductData);
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      sx={{ gap: "30px", background: "white", p: "20px 12px" }}
    >
      <DataGridHeader />
      <DataGrid
        rows={productData}
        columns={columns}
        checkboxSelection
        columnHeaderHeight={38}
        disableColumnMenu
        disableRowSelectionOnClick
        hideFooter
      />
      <DataGridFooter />
    </Box>
  );
};

export default ProductDataGrid;

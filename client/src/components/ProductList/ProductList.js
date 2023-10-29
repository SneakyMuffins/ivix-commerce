import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { API_BASE_URL } from "../../api/config";

import ProductListActions from "./ProductListActions";
import ProductListHeader from "./ProductListHeader";
import ProductListOptions from "./ProductListOptions";

const ProductList = ({ products }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stockPercentage, setStockPercentage] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      setProductData(products);
      setLoading(false);
    }
  }, [products]);

  useEffect(() => {
    if (!loading) {
      const inStockProducts = productData.filter(
        (product) => product.stock > 0
      );
      const percentage = (inStockProducts.length / productData.length) * 100;
      setStockPercentage(percentage);
    }
  }, [productData, loading]);

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
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
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
    <>
      <Box display="flex" justifyContent="space-between">
        <ProductListHeader />
        <ProductListActions stockPercentage={stockPercentage} />
      </Box>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        <DataGrid
          rows={productData}
          columns={columns}
          checkboxSelection
          sx={{
            border: "none",
            background: "white",
            "& .MuiDataGrid-columnHeaders": {
              bgcolor: "#FAFAFB",
            },
            "& .MuiDataGrid-withBorderColor": {
              border: 0,
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#44444F",
              fontWeight: "600",
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          columnHeaderHeight={38}
          disableColumnMenu
          disableRowSelectionOnClick
        />
      )}
    </>
  );
};

export default ProductList;

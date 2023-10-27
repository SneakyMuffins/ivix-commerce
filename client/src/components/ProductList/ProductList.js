import React, { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import ProductListActions from "./ProductListActions";
import ProductListHeader from "./ProductListHeader";
import ProductListOptions from "./ProductListOptions";

const ProductList = ({ products }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products && products.length > 0) {
      setProductData(products);
      setLoading(false);
    }
  }, [products]);

  const renderActionsCell = (params) => (
    <ProductListOptions
      id={params.row.id}
      stock={params.row.stock}
      onAddToBasket={handleAddToBasket}
    />
  );

  const columns = [
    { field: "name", headerName: "Name" },
    { field: "brand", headerName: "Brand" },
    { field: "id", headerName: "ID" },
    { field: "stock", headerName: "Stock" },
    { field: "var", headerName: "Variant" },
    { field: "price", headerName: "Price" },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
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
        <ProductListActions />
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
          hideFooterPagination
          sx={{
            border: "none",
            background: "white",
          }}
        />
      )}
    </>
  );
};

export default ProductList;

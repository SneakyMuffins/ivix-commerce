import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ProductListActions from "./ProductListActions";
import ProductListHeader from "./ProductListHeader";
import ProductDataGrid from "./ProductDataGrid";

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

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <ProductListHeader />
        <ProductListActions stockPercentage={stockPercentage} />
      </Box>
      <ProductDataGrid
        productData={productData}
        loading={loading}
        setProductData={setProductData}
      />
    </>
  );
};

export default ProductList;

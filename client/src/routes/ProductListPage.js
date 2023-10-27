import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { fetchProducts } from '../api/services/product';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListPage;

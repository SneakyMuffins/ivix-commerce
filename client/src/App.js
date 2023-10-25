import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api/services/product';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;

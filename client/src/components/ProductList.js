import React from 'react';
import { API_BASE_URL } from '../api/config';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={`${API_BASE_URL}${product.imageUrl}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock} available</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

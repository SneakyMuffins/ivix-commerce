import React from 'react';
import { API_BASE_URL } from '../../api/config';

const ProductCard = ({ product }) => {
  return (
    <li>
      <img src={`${API_BASE_URL}${product.imageUrl}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock} available</p>
    </li>
  );
};

export default ProductCard;

import React, { useState, ChangeEvent } from 'react';
import { productsList } from '../../constants';
import ProductCard from '../ProductCard';

type Props = {};

const ProductList = (props: Props) => {
    
  const [products, setProducts] = useState(productsList);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = productsList.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(filteredProducts);
  }

  return (
<>
<div className="container">
  <div className="row mb-3">
    <div className="col-12 col-md-4 mb-3 mx-auto">
      <input
        type="text"
        className="form-control"
        onChange={search}
        placeholder='Search for a product...'
      />
    </div>
  </div>

  {products.length > 0 ? (
    <div className="row">
      {products.map((product, i) => (
        <div className="col-md-4 mb-3" key={i}>
          {/* Adjust the col-md-4 to the desired column size */}
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  ) : (
    <div className="row mb-3">
      <p>No items found.</p>
    </div>
  )}
</div>
</>
  );
}

export default ProductList;

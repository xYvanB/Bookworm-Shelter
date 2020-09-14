import React from 'react';
import ProductData from '../Data/ProductData';
import ProductItem from './ProductItem';

function Product () {

  const ProductItems = ProductData.map (item => <ProductItem key={item.isbn} li={item}/>)

  return (

    <div className="ProductContainer">
      {ProductItems}
    </div>
    
  )
}

export default Product;
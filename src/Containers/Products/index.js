import React from 'react';
// Components
import { Product } from '../../Components/Product';
// Styles
import './products.css';

export const Products = (props) =>{
  return (
    <section className="productsContainer">
      {
        props.data.products.map(product => {
          return <Product key={product.id} data={product}/>
        })
      }
    </section>
  )
}

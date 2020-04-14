import React from 'react';
//Component
import { Image } from '../Image';
//Styles
import './product.css';

export const Product = (props) => {
  let {img, price, product, specs} = props.data;

  return (
    <article className='article'>
      <Image className='productImage' src={img} alt={product} title={product}/>
      <div className='productMeta'>
        <h3 className='productTitle'>{product}</h3>
        <p className='productDescription'>{specs}</p>
      </div>
      <span className='productPrice'>{price}€</span>
    </article>
  )
}
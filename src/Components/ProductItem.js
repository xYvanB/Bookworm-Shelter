import React from 'react';
import { ButtonItem, ButtonLikes } from './Button.js';

function ProductItem (props) {

  return (

    <div className="main">
      <div className= {props.li.liclassName}>
        <div className='top'>
          <span className='title'>{props.li.description}</span>
          <span className='author'>Autore: {props.li.author}</span>
          <span className='price'>Price: € {props.li.price}</span>
          <span className='isbn'>ISBN: {props.li.isbn}</span>
        </div>
        <div className='bottom'>
          <ButtonItem />
          <ButtonLikes />
        </div>
      </div>
      <img src={props.li.img} alt={props.li.alt}></img>
    </div>
    
  )
}

export default ProductItem
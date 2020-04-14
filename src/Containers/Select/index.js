import React from 'react';
// Assets
import { options } from '../../data';
//Styles
import './select.css';

export const Select = (props) =>{
  return(
    <select onChange={(e) => props.onClick(e.target.value, props.objKey)} className='select'>
      {
        Object.keys(options).map(option => {
          return (
            <option 
              key={option}
              value={option}>
              {options[option]}
            </option>
          )
        })
      }
    </select>
  )
}
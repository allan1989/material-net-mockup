import React , { Component } from 'react';
// Assets
import { brandsArrayAllValues } from '../../../data';
// Styles
import './brands.css';

export class Brands extends Component {
  constructor(props){
    super(props);
    this.state = {
      brands: []
    }
    this.loadBrands = this.loadBrands.bind(this);
  }

  loadBrands(brands){
    let brandsMapping = {};
    for(let brand of brands){
      brandsMapping.hasOwnProperty(brand) ? brandsMapping[brand]++ : brandsMapping[brand] = 1;
    }
    this.setState({brands: brandsMapping})
  }

  componentDidMount(){
    this.loadBrands(brandsArrayAllValues);
  }

  render(){
    let { brands } = this.state;
    return(
      <div className='brandsContainer'>
        <h3 className='brandsTitle'>MARQUE</h3>
        <ul className='brandsList'>
          {
            Object.keys(brands).map((el, i) => {
              return (
                <li key={i} className='item'>
                  <input 
                    id={el}
                    className='input' 
                    type="checkbox" 
                    name={el} 
                    onChange={(e) => this.props.onChange(el, e.target.checked)}
                  />
                  <label
                    className='label' 
                    htmlFor={el}>
                      <span className='name'>{el}</span>
                      <span>({brands[el]})</span>
                  </label>
                </li>
              )
            })
          }
        </ul>
        <button 
          className='button'
          onClick={this.props.onClick}>Valider</button>
      </div>
    )
  }
}

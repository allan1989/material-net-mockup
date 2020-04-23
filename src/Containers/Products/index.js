import React, { Component} from 'react';
// Components
import { Product } from '../../Components/Product';
// Styles
import './products.css';

export class Products extends Component{
  constructor(props){
    super(props); 
    this.state = {
      activeSortCriteria: '',
      products: []
    }
  }

  componentDidMount(){
    this.setState({
      activeSortCriteria : 'product',
      products: this.props.data.products
    })
  }


  static getDerivedStateFromProps(props, state){
    if(state.activeSortCriteria !== props.data.activeSortCriteria 
      || state.products !== props.data.products ){
      return {
        activeSortCriteria: props.data.activeSortCriteria,
        products: props.data.products
      }
    }
    return null;
  }

  render(){
    return (
      <section className="productsContainer">
        {
          this.state.products.map(product => {
            return <Product key={product.id} data={product}/>
          })
        }
      </section>
    )
  }
}

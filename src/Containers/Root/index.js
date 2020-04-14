import React , { Component } from 'react';
// Components
import { Header } from '../../Components/Header';
import { Image } from '../../Components/Image';
import { Section } from '../../Components/Section';
import { Aside } from '../../Components/Aside';
import { Main } from '../../Components/Main';
import { Products } from '../Products';
import { Brands } from '../Filters/Brands';
import { Select } from '../Select';
// Assets
import logo from '../../assets/site-logo-white.svg';
import { data, brandsArrayUniqueValues } from '../../data';
// Utils
import { filterArray } from '../../data/utils';
// Styles
import './root.css';

export class Root extends Component{
  constructor(props){
    super(props);
    this.displayProducts = this.displayProducts.bind(this);
    this.setActiveBrandsFilter = this.setActiveBrandsFilter.bind(this);
    this.createFilters = this.createFilters.bind(this);
    this.filterByBrandAction = this.filterByBrandAction.bind(this);
    this.state = {
      products: [],
      filteredProducts: [],
      filters : {
        brands: []
      }
    }
  }

  displayProducts(type, key){
    let sorted = [];
    switch(type){
      case 'brand':
      case 'product':  
        sorted = this.state[key].sort((a, b) => {
          let aLowerCase = a[type].toLowerCase();
          let bLowerCase = b[type].toLowerCase();
          if(aLowerCase < bLowerCase) return -1;
          if(aLowerCase > bLowerCase) return 1;
          return 0;
        });
        this.setState({[key]: sorted})
        break;
        case 'priceAsc':
        case 'priceDesc':
          sorted = this.state[key].sort((a,b) => {
            let aVal = Number(a.price);
            let bVal = Number(b.price);
            if(type === 'priceAsc'){
              if(aVal < bVal) return -1;
              if(aVal > bVal) return 1;
              return 0;
            }
            if(type === 'priceDesc'){
              if(bVal < aVal) return -1;
              if(bVal > aVal) return 1;
              return 0;
            }
            return 0;
          })
          this.setState({[key]: sorted})
          break;
        default:
          return this.state.products;
    }
  }

  createFilters(brands){
    let filters = {};
    for(let brand of brands){
      filters[brand] = false;
    }
    this.setState({
      ...this.state,
      filters: {
        brands: filters
      }
    })
  }

  setActiveBrandsFilter(brand, isActive){
    this.setState({
      ...this.state,
      filters: {
        brands: {
          ...this.state.filters.brands,
          [brand] : isActive
        }
      }
    })
  }

  filterByBrandAction(){
    let activeFilters = brandsArrayUniqueValues.filter(el => {
      return this.state.filters.brands[el] === true;
    }); 
    this.setState({
      ...this.state,
      filteredProducts: filterArray(this.state.products, 'brand', activeFilters)
    })
  }

  componentDidMount(){
    this.setState({products: data}, () => {
      this.displayProducts('product', 'products');
      this.createFilters(brandsArrayUniqueValues);
    });    
  }

  render(){
    return(
      <div className='root'>
        <Header>
          <Image 
            className="headerLogo"  
            src={logo}
            alt="Materiel.net"
            title="Materiel.net, votre spécialiste High-Tech"/>
        </Header>
        <Section>
          <Aside>
            <Brands 
              onChange={this.setActiveBrandsFilter}
              onClick={this.filterByBrandAction}
              />
          </Aside>
          <Main>
            <Select onClick={this.displayProducts}
                    objKey={this.state.filteredProducts.length === 0 ? 'products' : 'filteredProducts'}
            />
            <Products data={this.state.filteredProducts.length === 0 ? 
              { products: this.state.products, key: 'products'} : 
              { products: this.state.filteredProducts, key: 'filteredProducts'}
            }/>
          </Main>
        </Section>
      </div>
    )
  }
}
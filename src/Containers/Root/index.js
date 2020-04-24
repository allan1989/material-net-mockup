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
import { filterArray, sortProducts } from '../../data/utils';
// Styles
import './root.css';

export class Root extends Component{
  constructor(props){
    super(props);
    this.setActiveBrandsFilter = this.setActiveBrandsFilter.bind(this);
    this.createFilters = this.createFilters.bind(this);
    this.filterByBrandAction = this.filterByBrandAction.bind(this);
    this.setActiveSortCriteria = this.setActiveSortCriteria.bind(this);
    this.state = {
      products: [],
      filteredProducts: [],
      activeSortCriteria: '',
      filters : {
        brands: []
      }
    }
  }

  setActiveSortCriteria(criteria){
    this.setState({
      ...this.state,
      activeSortCriteria: criteria
    })
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
      activeFilter: '',
      filteredProducts: filterArray(this.state.products, 'brand', activeFilters)
    })
  }

  componentDidMount(){
    this.setState({products: data, activeSortCriteria: 'product'}, () => {
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
            <Select onClick={this.setActiveSortCriteria}
                    objKey={this.state.filteredProducts.length === 0 ? 'products' : 'filteredProducts'}
            />
            <Products data={this.state.filteredProducts.length === 0 ? 
              { products: sortProducts(this.state.products, this.state.activeSortCriteria), key: 'products'} : 
              { products: sortProducts(this.state.filteredProducts, this.state.activeSortCriteria), key: 'filteredProducts'}
            }/>
          </Main>
        </Section>
      </div>
    )
  }
}
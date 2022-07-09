import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import './Categories.css';
import ProductList from './ProductList';

export default class Categories extends Component {
  state = { objCategory: [], categorieProducts: [] };

  componentDidMount() {
    this.categoryFecth();
  }

  categoryFecth = async () => {
    const response = await getCategories();
    this.setState({ objCategory: response });
  };

  handleProductID = async ({ target }) => {
    const { id } = target;
    const data = await getProductsFromCategoryAndQuery(id, null);
    this.setState({ categorieProducts: data.results });
  }

  render() {
    const { objCategory, categorieProducts } = this.state;
    return (
      <div className="categories-container">
        {objCategory.map((list) => (
          <label
            key={ list.id }
            htmlFor={ list.id }
            data-testid="category"
          >
            <input
              onChange={ this.handleProductID }
              type="radio"
              name="category"
              id={ list.id }
            />
            { list.name }
          </label>
        ))}
        <div>
          { categorieProducts.map((obj) => (
            <div key={ obj.id }>
              <ProductList
                propObj={ obj }
                // productImage={ obj.thumbnail }
                // productPrice={ obj.price }
                // productName={ obj.title }
                // productId={ obj.id }
              />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

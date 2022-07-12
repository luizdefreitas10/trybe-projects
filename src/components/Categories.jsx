import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  // handleCartButton = () => {
  //   // const { propObj } = this.props;
  //   const { categorieProducts } = this.state;
  //   // // const { productName, productPrice } = this.props;
  //   // this.setState({
  //   //   cartList: categorieProducts,
  //   // });
  //   console.log(categorieProducts);
  //   // this.setState((prevState) => ({
  //   //   addToCart: prevState.productList,
  //   // }));
  //   // console.log(addToCart);
  //   // getAddToCart();
  // }

  render() {
    const { objCategory, categorieProducts } = this.state;
    const { handleCartButton } = this.props;
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
              />
              <button
                type="submit"
                data-testid="product-add-to-cart"
                onClick={ () => handleCartButton(obj) }
                // id={ obj.id }
              >
                Adicionar ao carrinho

              </button>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  handleCartButton: PropTypes.func.isRequired,
};

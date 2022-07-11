import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getAddToCart } from './Cart';

export default class ProductList extends Component {
  render() {
    // const { productName, productPrice, productImage, productId } = this.props;
    const { propObj } = this.props;
    // const { productList, addToCart } = this.state;
    // console.log(addToCart);
    return (
      <div data-testid="product">
        <Link to={ `/product/${propObj.id}` } data-testid="product-detail-link">
          <h3>{ propObj.title }</h3>
          <img
            src={ propObj.thumbnail }
            alt={ propObj.title }
          />
          <h4>{ propObj.price }</h4>
        </Link>
      </div>
    );
  }
}

ProductList.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string,
}.isRequired;

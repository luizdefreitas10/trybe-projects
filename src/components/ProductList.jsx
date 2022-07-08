import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { productName, productPrice, productImage, productId } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/product/${productId}` } data-testid="product-detail-link">
          <h3>{ productName }</h3>
          <img
            src={ productImage }
            alt={ productName }
          />
          <h4>{ productPrice }</h4>
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

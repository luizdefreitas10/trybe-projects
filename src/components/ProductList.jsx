import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { propObj } = this.props;
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

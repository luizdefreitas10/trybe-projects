import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { productName, productPrice, productImage } = this.props;
    // console.log(propObjResults);
    return (
      <div data-testid="product">
        <h3>{ productName }</h3>
        <img
          src={ productImage }
          alt={ productName }
        />
        <h4>{ productPrice }</h4>
      </div>
    );
  }
}

ProductList.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string,
}.isRequired;

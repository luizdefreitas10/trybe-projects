import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCart extends Component {
    state = {
      quantidade: 1,
    }

    counter = ({ target }) => {
      if (target.value === '+') {
        this.setState((prev) => ({ quantidade: prev.quantidade + 1 }));
      } else {
        this.setState((prev) => ({ quantidade: prev.quantidade - 1 }));
      }
    };

    render() {
      const { cartProduct } = this.props;
      const { quantidade } = this.state;
      return (
        <div>
          <h2 data-testid="shopping-cart-product-name">{ cartProduct.title }</h2>
          <h3>{cartProduct.price}</h3>
          <input
            type="button"
            value="-"
            data-testid="product-decrease-quantity"
            onClick={ this.counter }
            disabled={ quantidade <= 1 }
          />
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <input
            type="button"
            value="+"
            data-testid="product-increase-quantity"
            onClick={ this.counter }
          />
        </div>
      );
    }
}

ProductCart.propTypes = {
  cartProduct: PropTypes.object,
}.isRequired;

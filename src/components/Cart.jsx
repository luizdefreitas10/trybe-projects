import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';

class Cart extends React.Component {
  render() {
    const { cartList } = this.props;
    // console.log(cartList);
    return (
      <div>
        { cartList.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        ) : (
          cartList.map((product, index) => (
            <ProductCart cartProduct={ product } key={ index } />
          ))
        ) }
        <h3>
          { `Quantidade de produtos do carrinho: ${cartList.length}` }
        </h3>

        <Link to="/checkout" data-testid="checkout-products">
          <input type="button" value="Finalizar Compra" />
        </Link>
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

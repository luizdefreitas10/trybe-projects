import React from 'react';
import PropTypes from 'prop-types';

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
            <div key={ index }>
              <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
              <h3>{product.price}</h3>
            </div>
          ))
        ) }
        <h3
          data-testid="shopping-cart-product-quantity"
        >
          { `Quantidade de produtos do carrinho: ${cartList.length}` }

        </h3>
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

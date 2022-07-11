import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  state = {
    quantidade: [],
  }

  // counter= (event, product) => {
  //   // const { cartList } = this.props;
  //   const { value } = event.target;
  //   // const { quantidade } = this.state;
  //   if (value === '+') {
  //     this.setState((prevState) => ({ quantidade: prevState.quantidade + 1 }));
  //   } else {
  //     this.setState((prevState) => ({ quantidade: prevState.quantidade - 1 }));
  //   }
  // }

  counter = ({ target }) => {
    if (target.value === '+') {
      this.setState((get) => ({ quantidade: get.quantidade + 1 }));
    } else {
      this.setState((get) => ({ quantidade: get.quantidade - 1 }));
    }
  };

  render() {
    const { cartList } = this.props;
    const { quantidade } = this.state;
    return (
      <div>
        { cartList.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        ) : (
          cartList.map((product, index) => (
            <div key={ index }>
              <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
              <h3>{product.price}</h3>
              <input
                type="button"
                value="-"
                onClick={ this.counter }
              />
              <p value={ quantidade }>{ quantidade }</p>
              <input
                type="button"
                value="+"
                onClick={ this.counter }
              />
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

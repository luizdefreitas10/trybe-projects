import React from 'react';

// export async function getAddToCart(objectCart) {
//   console.log('funcionou');
// }

class Cart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;

// export async function getProductsById(id)

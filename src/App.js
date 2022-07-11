import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Cart from './components/Cart';
import { getProductsById } from './services/api';

export default class App extends Component {
  state = {
    cartList: [],
    // quantidade: 1,
  }

  handleCartButton = async (event) => {
    // const { cartList } = this.state;
    const { id } = event.target;
    console.log(id);
    const response = await getProductsById(id);
    // const test = 1;
    response.qnt = 1;
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, response],
    }));
    // console.log(response);
  }

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={ () => <Home handleCartButton={ this.handleCartButton } /> }
        />
        <Route path="/cart" render={ () => (<Cart cartList={ cartList } />) } />
        <Route
          path="/product/:id"
          render={ (props) => (<ProductDetails
            { ...props }
            handleCartButton={ this.handleCartButton }
          />) }
        />
      </BrowserRouter>
    );
  }
}

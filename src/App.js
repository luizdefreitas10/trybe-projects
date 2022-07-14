import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default class App extends Component {
  state = {
    cartList: [],
  }

  handleCartButton = (obj) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, obj],
    }));
    // console.log(id);
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
        <Route path="/checkout" component={ Checkout } />
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

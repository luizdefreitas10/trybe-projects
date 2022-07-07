import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={ Home } />
        <Route path="/cart" component={ Cart } />
      </BrowserRouter>
    );
  }
}

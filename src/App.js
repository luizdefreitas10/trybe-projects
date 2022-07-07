import React, { Component } from 'react';
import { getCategories } from './services/api';

export default class App extends Component {
  render() {
    return (
      <div>{ getCategories() }</div>
    );
  }
}

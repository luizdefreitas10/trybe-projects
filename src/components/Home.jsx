import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <input type="text" />
        <Link to="/cart" data-testid="shopping-cart-button"><Button /></Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;

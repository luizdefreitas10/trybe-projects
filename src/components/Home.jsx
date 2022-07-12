import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

import Button from './Button';
import Categories from './Categories';
import ProductList from './ProductList';

class Home extends React.Component {
  state = { nameInput: '', objResult: [] }

  searchButton = async (event) => {
    const { nameInput } = this.state;
    event.preventDefault();
    const response = await getProductsFromCategoryAndQuery(null, nameInput);
    this.setState({ objResult: response.results });
    // console.log(response.results);
  }

  render() {
    const { nameInput, objResult } = this.state;
    const { handleCartButton } = this.props;
    // console.log(objResult);
    return (
      <div className="home-container">
        <input
          type="text"
          data-testid="query-input"
          value={ nameInput }
          name="nameInput"
          onChange={ (event) => {
            const { value } = event.target;
            this.setState({ nameInput: value });
          } }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.searchButton }
        >
          Pesquisar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button"><Button /></Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Categories handleCartButton={ handleCartButton } />
        </div>
        <div>
          { objResult.map((obj) => (
            <div key={ obj.id }>
              <ProductList
                propObj={ obj }
                // productImage={ obj.thumbnail }
                // productPrice={ obj.price }
                // productName={ obj.title }
                // productId={ obj.id }
              />
              <button
                type="submit"
                data-testid="product-add-to-cart"
                onClick={ () => handleCartButton(obj) }
                id={ obj.id }
              >
                Adicionar ao carrinho

              </button>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handleCartButton: PropTypes.func.isRequired,
};

export default Home;

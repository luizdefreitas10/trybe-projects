import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsById } from '../services/api';
import Button from './Button';

export default class ProductDetails extends Component {
  state ={ productCart: [] }

  componentDidMount() {
    this.handleApi();
  }

  handleApi = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductsById(id);
    this.setState({ productCart: data });
  }

  render() {
    const { productCart } = this.state;
    const { handleCartButton } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ productCart.title }</h3>
        <img src={ productCart.thumbnail } alt={ productCart.title } />
        <h3>
          Valor: R$
          {' '}
          { productCart.price }
        </h3>
        <h3>
          Quantidades disponíveis:
          {' '}
          { productCart.available_quantity }
          {' '}
          unidades
        </h3>
        <div>
          <button
            type="submit"
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleCartButton(productCart) }
            // id={ productCart.id }
          >
            Adicionar ao carrinho

          </button>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button"><Button /></Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

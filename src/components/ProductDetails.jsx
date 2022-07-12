import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsById } from '../services/api';
import Button from './Button';

export default class ProductDetails extends Component {
  state ={
    productCart: [],
    emailForms: '',
    rating: '',
    avaliation: '',
    saveForm: [],
  }

  componentDidMount() {
    this.handleApi();
  }

  handleApi = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductsById(id);
    this.setState({ productCart: data });
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    const { rating, emailForms, avaliation } = this.state;
    this.setState({
      [name]: value,
    }, () => this.setState({
      saveForm: {
        rating,
        emailForms,
        avaliation,
      },
    }));
  }

  saveAvaliation = (event) => {
    event.preventDefault();
    const { rating, emailForms, avaliation } = this.state;
    this.setState({
      saveForm: {
        rating,
        emailForms,
        avaliation,
      },
    });
    const { saveForm } = this.state;
    console.log(saveForm);
    localStorage.setItem('productCart', JSON.stringify(saveForm));
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
          >
            Adicionar ao carrinho
          </button>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button"><Button /></Link>

        <hr />

        <form>
          <fieldset>
            <legend>Avaliação</legend>
            <label htmlFor="email">
              Email:
              <input
                placeholder="E-mail"
                type="email"
                data-testid="product-detail-email"
                name="emailForms"
                id="email"
                onChange={ this.onChange }
              />
            </label>

            <br />
            <br />

            Nota:
            <input
              type="button"
              value="1"
              name="rating"
              data-testid="1-rating"
              onClick={ this.onChange }
            />
            <input
              type="button"
              value="2"
              name="rating"
              data-testid="2-rating"
              onClick={ this.onChange }
            />
            <input
              type="button"
              value="3"
              name="rating"
              data-testid="3-rating"
              onClick={ this.onChange }
            />
            <input
              type="button"
              value="4"
              name="rating"
              data-testid="4-rating"
              onClick={ this.onChange }
            />
            <input
              type="button"
              value="5"
              name="rating"
              data-testid="5-rating"
              onClick={ this.onChange }
            />

            <br />
            <br />

            <label htmlFor="product-detail-evaluation">
              <textarea
                placeholder="Sobre o Produto"
                data-testid="product-detail-evaluation"
                name="avaliation"
                onChange={ this.onChange }
              />
            </label>

            <br />
            <br />

            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.saveAvaliation }
            >
              Salvar
            </button>
          </fieldset>

        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

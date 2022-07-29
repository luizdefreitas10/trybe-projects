import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';
import './WalletForm.css';

class WalletForm extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  componentDidMount() {
    const { fetchApiProp } = this.props;
    fetchApiProp();
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Despesas:
            <input
              type="number"
              id="value-input"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição da despesa:
            <input
              type="text"
              id="description-input"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              id="currency-input"
              name="currency-input"
              data-testid="currency-input"
            >
              { currencies
                .map((coin, index) => (
                  <option key={ index }>{coin}</option>
                ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Métodos de pagamento:
            <select
              id="method-input"
              name="method-input"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select
              id="tag-input"
              name="tag-input"
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiProp: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = ({ wallet: { currencies, loading } }) => ({
  currencies,
  loading,
});

WalletForm.propTypes = {
  currencies: PropTypes.array,
  loading: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

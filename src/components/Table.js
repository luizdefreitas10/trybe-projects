import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { getFormState } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        { getFormState.map((expense, index) => (
          <tbody key={ index }>
            <tr>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ Number(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(expense.value) * (expense
                  .exchangeRates[expense.currency].ask)).toFixed(2) }
              </td>
              <td>Real</td>

            </tr>
          </tbody>
        )) }

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  getFormState: state.wallet.expenses,
});

Table.propTypes = {
  getFormState: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Table);

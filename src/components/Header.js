import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  sum = () => {
    const { getForm } = this.props;
    const rateValues = getForm
      .map((item) => Number(item.exchangeRates[item.currency].ask));
    let total = 0;
    getForm.forEach((item, index) => {
      total += Number(item.value) * rateValues[index];
    });
    // return rateValues;
    return total.toFixed(2);
  }

  render() {
    const { getEmail, getForm } = this.props;
    // console.log(getForm);
    // console.log(this.sum());
    return (
      <div className="div-header">
        <p>TrybeWallet</p>
        <div className="div-nav-header">
          <h4
            data-testid="email-field"
          >
            { `Usuário: ${getEmail}` }
          </h4>
          <h4>
            Despesa total
            { ' ' }
            <span data-testid="total-field">
              { getForm.length === 0 ? '0.00' : this.sum() }
            </span>
          </h4>
          <h4
            data-testid="header-currency-field"
          >
            BRL
          </h4>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string,
  getForm: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getForm: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

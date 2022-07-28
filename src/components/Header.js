import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { getEmail } = this.props;
    console.log(getEmail);
    return (
      <div className="div-header">
        <p>TrybeWallet</p>
        <div className="div-nav-header">
          <h4
            data-testid="email-field"
          >
            { `Usuário: ${getEmail}` }
          </h4>
          <h4
            data-testid="total-field"
          >
            Despesa total: R$ 0
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
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

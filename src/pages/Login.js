import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginAction } from '../redux/actions/index';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      // password: '',
      isDisabled: true,
    };
  }

  handleEmail = (event) => {
    const { value } = event.target;
    this.setState({
      email: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, userEmail } = this.props;
    console.log('clicou');
    // console.log(history);
    history.push('/carteira');
    userEmail(email);
  };

  handlePass = (event) => {
    const { value } = event.target;
    const { email } = this.state;
    const MIN_LENGTH = 6;
    // const { isDisabled } = this.state;
    if (value.length >= MIN_LENGTH && email.includes('@') && email.includes('.com')) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, isDisabled } = this.state;
    return (
      <main>
        <p>Trybe Wallet</p>
        <hr />
        <form>
          <label htmlFor="email-input">
            <input
              placeholder="Email"
              type="email"
              id="email-input"
              data-testid="email-input"
              onChange={ this.handleEmail }
              value={ email }
            />
          </label>
          <label htmlFor="password-input">
            <input
              placeholder="Password"
              type="password"
              id="password-input"
              data-testid="password-input"
              onChange={ this.handlePass }
            />
          </label>
          <button
            type="submit"
            id="submitform-button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(userLoginAction(email)),
});

Login.propTypes = {
  history: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

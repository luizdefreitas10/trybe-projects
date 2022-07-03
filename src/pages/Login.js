import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disableButton: true,
      loading: false,
      loaded: false,
    };
  }

  handleLoginName = (event) => {
    const { value } = event.target;
    const maxLengthName = 2;
    console.log(value);
    this.setState({
      name: value,
    });
    if (value.length > maxLengthName) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  }

  handleClick = (event) => {
    console.log('clicou');
    event.preventDefault();
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    createUser({ name })
      .then(() => this.setState({
        loading: false,
        loaded: true,
      }));
  }

  render() {
    const { name, disableButton, loading, loaded } = this.state;
    return (
      <div data-testid="page-login" className="page-login-class">
        { loading ? <Loading /> : null }
        <input
          data-testid="login-name-input"
          type="text"
          placeholder="Nome"
          value={ name }
          onChange={ this.handleLoginName }
        />
        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={ disableButton }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
        { loaded ? <Redirect to="/search" /> : null }
      </div>
    );
  }
}

export default Login;

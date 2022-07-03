import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      btnDisabled: true,
    };
  }

  handleBtn = (event) => {
    event.preventDefault();
    console.log('clicou');
  }

  handleInput = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      inputText: value,
    });
    if (value.length > 1) {
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({
        btnDisabled: true,
      });
    }
  }

  render() {
    const { btnDisabled, inputText } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <form>
            <input
              data-testid="search-artist-input"
              placeholder="Digite um artista"
              onChange={ this.handleInput }
              value={ inputText }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ btnDisabled }
              onClick={ this.handleBtn }
            >
              Procurar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;

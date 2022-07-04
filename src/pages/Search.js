import React from 'react';
import DataInfo from '../components/DataInfo';
// import { FaSistrix } from 'react-icons/fa';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      btnDisabled: true,
      isLoading: false,
      loaded: false,
      artistSearched: '',
      data: [],
    };
  }

  handleBtn = (event) => {
    event.preventDefault();
    const { artist } = this.state;
    this.setState({
      isLoading: true,
    }, async () => {
      const data = await searchAlbumsAPI(artist);
      this.setState({
        loaded: true,
        isLoading: false,
        artist: '',
        data,
      });
    });
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      artist: value,
      artistSearched: value,
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
    const { btnDisabled, artist, isLoading, loaded, artistSearched, data } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div className="div-form-artist">
          { isLoading ? <Loading />
            : (
              <form>
                <input
                  data-testid="search-artist-input"
                  placeholder="Digite um artista"
                  onChange={ this.handleInput }
                  value={ artist }
                />
                <button
                  type="submit"
                  data-testid="search-artist-button"
                  disabled={ btnDisabled }
                  onClick={ this.handleBtn }
                >
                  Procurar
                </button>
              </form>)}
        </div>
        { loaded ? <DataInfo data={ data } value={ artistSearched } /> : null }
      </div>
    );
  }
}

export default Search;

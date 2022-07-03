import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userName: '',
    };
  }

  componentDidMount() {
    this.handleApi();
  }

  handleApi = async () => {
    const response = await getUser();
    this.setState({
      loading: false,
      userName: response,
    });
  }

  render() {
    const { loading, userName } = this.state;
    return (
      <>
        <header
          data-testid="header-component"
          className="header-class"
        >
          { loading ? <Loading />
            : (
              <>
                <img src="logo-trybe-tunes.png" alt="logo trybe" />
                <div
                  data-testid="header-user-name"
                  className="div-header-user"
                >
                  { `Bem vindo(a), ${userName.name}` }

                </div>
              </>) }
        </header>
        <nav className="class-nav">
          <Link
            to="/search"
            data-testid="link-to-search"
          >
            Pesquisa

          </Link>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritos

          </Link>
          <Link
            to="/profile"
            data-testid="link-to-profile"
          >
            Favoritos

          </Link>
        </nav>
      </>
    );
  }
}

export default Header;

// { loading ? <Loading />
// : (
//   <>
//     <img src="logo-trybe-tunes.png" alt="logo trybe" />
//     <div
//       data-testid="header-user-name"
//       className="div-header-user"
//     >
//       { `Bem vindo(a), ${userName.name}` }

//     </div>
//   </>) }

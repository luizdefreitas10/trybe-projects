import React from 'react';
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

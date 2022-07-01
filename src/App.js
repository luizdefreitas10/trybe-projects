import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import Album from './pages/Album';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Login />
          <Search />
          <Profile />
          <ProfileEdit />
          <NotFound />
          <Favorites />
          <Album />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

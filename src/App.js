import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route
              path="/"
              exact
              render={ () => <Login /> }
            />
            <Route
              path="/search"
              render={ () => <Search /> }
            />
            <Route
              path="/album/:id"
              exact
              render={ (props) => <Album { ...props } /> }
            />
            <Route
              path="/favorites"
              render={ () => <Favorites /> }
            />
            <Route
              path="/profile"
              render={ () => <Profile /> }
            />
            <Route
              path="/profile/edit"
              exact
              render={ () => <ProfileEdit /> }
            />
            <Route
              path="*"
              render={ () => <NotFound /> }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

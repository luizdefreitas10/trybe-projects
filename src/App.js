import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        {/* <Title headline="" /> */}
        {/* <PlanetCard data-testid="planet-card " planetName /> */}
      </>
    );
  }
}

export default App;

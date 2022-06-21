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
        <PlanetCard planetName="Nome do planeta" PlanetImage />
      </>
    );
  }
}

export default App;

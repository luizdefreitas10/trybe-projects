import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <MissionCard name="luiz" year={ 2020 } country="country" destination="dest" />
      </>
    );
  }
}

export default App;

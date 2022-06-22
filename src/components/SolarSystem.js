import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div className="class-solar-system">
        <div className="planets-style" data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="planet-class">
          {planets
            .map((p) => (<PlanetCard
              key={ p.name }
              planetName={ p.name }
              planetImage={ p.image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

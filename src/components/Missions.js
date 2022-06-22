import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div className="missions-cards-class" data-testid="missions">
        <Title headline="Missões" />
        <div className="missioncard-class">
          {missions
            .map((m) => (<MissionCard
              key={ m.name }
              name={ m.name }
              year={ m.year }
              country={ m.country }
              destination={ m.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;

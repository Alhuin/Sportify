import React, { Component } from 'react';
import HomeCard from './homeCard';

class HomeContent extends Component {
  render() {
    return(
      <div className="content" style={{display:'flex'}}>
          <HomeCard title="Mes pass à valider" text="Aucun pass à afficher"/>
          <HomeCard title="Mes salles favorites" text="Aucune salle favorite à afficher."/>
      </div>
    );
  }
}

export default HomeContent;

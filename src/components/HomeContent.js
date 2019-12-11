import React, { Component } from 'react';
import HomeCard from './homeCard';

class HomeContent extends Component {
  render() {
    const { favorites, passes, removeFromFavorites, history } = this.props;
    return(
      <div className="content" style={{display:'flex'}}>
          <HomeCard title="Mes pass à valider" passes={passes} favorites={null} history={history}/>
          <HomeCard title="Mes salles favorites" favorites={favorites} passes={null} removeFromFavorites={removeFromFavorites}/>
      </div>
    );
  }
}

export default HomeContent;

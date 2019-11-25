import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  render() {
    const { type, name, lastName, membership } = this.props;
    let content = "";

    // On choisit le contenu du Header en fonction de la page

    switch (type) {
      case "Home":
        content = `Bonjour ${name} ${lastName} !`;
        break;
      case "Search":
        content = "Trouver une salle";
        break;
      case "Passes":
        content = "Mes Pass";
        break;
      case "Profile":
        content =
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>{name} {lastName}</p>
          <p style={{fontSize: 12}}>Offre {membership} à des fins de démonstration.</p>
        </div>;
        break;
      default:
        content = "Sportify";
    }

    return(
      <div className="HeaderContainer">
        {content}
      </div>
    );
  }
}

export default Header;

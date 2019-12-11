import React, { Component } from 'react';
import '../index.css';

class Header extends Component {


  render() {
    const { type, name, lastName, membership } = this.props;
    let content = "";
    let headerColor = {background: "linear-gradient(to bottom right, #3D4FFF, #7CBBFF)"};
    // On choisit le contenu du Header en fonction de la page

    switch (type) {
      case "Home":
        content = `Bonjour ${name} !`;
        break;
      case "Search":
        content = "Trouver une salle";
        break;
      case "Passes":
        content = "Mes Pass";
        break;
      case "Pass":
        content = "Mon Pass";
        break;
      case "Profile":
        content =
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>{name} {lastName}</p>
          <p style={{fontSize: 12}}>Offre {membership} à des fins de démonstration.</p>
        </div>;
        // headerColor = {background: "linear-gradient(to bottom right, yellow, green)"};
        break;
      default:
        content = <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
          <p>MSS</p>
          <p style={{fontSize: '12px'}}>Multi-Sports for Students</p>
        </div>;
    }

    return(
      <div className="HeaderContainer" style={headerColor}>
        {content}
      </div>
    );
  }
}

export default Header;

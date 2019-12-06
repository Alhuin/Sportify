import React, {Component} from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/Person';
import PassesIcon from '@material-ui/icons/ConfirmationNumber';
import SearchIcon from '@material-ui/icons/Search';
import '../index.css';

class TabBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "home",
    };
}

  render() {
    const {value} = this.state;
    const {updateType} = this.props;

    return (
      <div style={{position: 'fixed', bottom: 0, width:'100%'}} >
        <BottomNavigation
          className="tabBar"
          value={value}
          onChange={(event, newValue) => {
            this.setState({value: newValue});
          }}
          showLabels
        >
          <BottomNavigationAction value="home" label="Accueil" icon={<HomeIcon />} onClick={()=>updateType("Home")} />
          <BottomNavigationAction label="Recherche" icon={<SearchIcon />} onClick={()=>updateType("Search")} />
          <BottomNavigationAction label="Mes Pass" icon={<PassesIcon />} onClick={()=>updateType("Passes")} />
          <BottomNavigationAction label="Profil" icon={<ProfileIcon />} onClick={()=>updateType("Profile")} />
        </BottomNavigation>
        <div style={{backgroundColor: 'white', height: 10, width: '100%'}}/>
      </div>
    )
  }
}

export default TabBar;

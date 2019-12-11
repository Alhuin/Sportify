import React, { Component } from "react";
import Header from '../containers/Header'
import '../index.css'
import TodayIcon from '@material-ui/icons/Today';
import PhoneIcon from '@material-ui/icons/Phone';
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Pass extends Component {

  render() {
    const QRCode = require('qrcode.react');
    const { pass } = this.props.location.state;
    return(
      <div className="MainContainer">
        <Header type="Pass" />
        <div className="content">
          <QRCode value="https:/alhuin.github.io/Sportify" style={{width: '200px', height: '200px'}}/>
          <List>
            <ListItem>
              <ListItemIcon>
                <TodayIcon/>
              </ListItemIcon>
              <ListItemText>
                le {pass.date} entre {pass.begin} et {pass.end}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon/>
              </ListItemIcon>
              <ListItemText>
                {pass.Nom}<br/>
                {pass.adresse}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon/>
              </ListItemIcon>
              <ListItemText>
                {pass.Tel}
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Pass

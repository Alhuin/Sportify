import React, { Component } from "react";
import Header from '../containers/Header'
import '../index.css'
import PhoneIcon from '@material-ui/icons/Phone';
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import DatePicker from 'react-date-picker';
import Button from "@material-ui/core/Button";
import Select from 'react-select'


class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      when: 0,
      datePickerVisible: false,
    }
  }

  onChange = date => this.setState({ date });

  createPass = (partner) => {
   const { when, date } = this.state;
   const { generatePass, history } = this.props;
   const pass = partner;

   pass.begin = (when === 1 ? "8h" : "14h");
   pass.end = (when === 1 ? "12h" : "18h");
   pass.date = date.toLocaleDateString("FR");
   generatePass(pass);
   history.push({
        pathname : '/pass',
        state :{
          pass : pass,
        }
      }
    );
  };

  updateWhen = when => this.setState({when});

  render() {

    const options = [
      { value: 'matin', label: 'Matin' },
      { value: 'am', label: 'Après-midi' },
    ];

    const { partner } = this.props.location.state;
    const {when, datePickerVisible} = this.state;

    return(
      <div className="MainContainer">
        <Header type="Partner" />
        <div className="content" style={{position: 'absolute', top: '50px'}}>
          <Avatar style={{width: '150px', height: '150px'}}>
            <img src={partner.Lien} style={{width: '100%'}}/>
          </Avatar>
          <List>
            <ListSubheader>
              <h4 style={{textAlign: 'center'}}>{partner.Nom}</h4>
            </ListSubheader>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon/>
              </ListItemIcon>
              <ListItemText>
                {partner.adresse}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon/>
              </ListItemIcon>
              <ListItemText>
                {partner.Tel}
              </ListItemText>
            </ListItem>
          </List>
          { datePickerVisible &&
            <div style={{marginTop: '20px'}}>
              <DatePicker
                onChange={this.onChange}
                value={this.state.date}
                minDate={new Date()}
              />
              <br/>
              <br/>
              <Select options={options} onChange={this.updateWhen}/>
            </div>
          }
          <Button
            variant="outlined"
            color="primary"
            onClick={()=> {
              if (datePickerVisible && when !== 0){
                this.createPass(partner, when);
              } else {
                this.setState({datePickerVisible: true})
              }
            }}
            style={{marginTop: '20px'}}
          >
            Générer un Pass
          </Button>
        </div>
      </div>
    )
  }
}

export default Partner

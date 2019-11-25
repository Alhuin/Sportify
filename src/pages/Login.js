import React, { Component } from "react";
import Header from '../containers/Header'
import '../index.css'
import TextField from '@material-ui/core/TextField';
import MembershipModal from '../components/MembershipModal'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
    }
  }

  updateName = (input) => {
    const name = input.target.value;
    this.setState({name});
  };

  updateLastName = (input) => {
    const lastName = input.target.value;
    this.setState({lastName});
  };

  handleClick = (membership) => {
    let {name, lastName} = this.state;
    const {setName, setLastName, setMembership, history} = this.props;

    if (name !== "") {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      setName(name);
    }
    if (lastName !== "") {
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      setLastName(lastName);
    }
    if (membership !== "") {
      setMembership(membership);
    }
    history.push('/app')
  };

  render() {
    return(
      <div className="MainContainer">
        <Header message="Sportify" />
        <div className="content">
          <TextField id="outlined-basic" label="Prénom" variant="outlined" style={{ marginBottom: '10%' }} onChange={this.updateName}/>
          <TextField id="outlined-basic" label="Nom" variant="outlined" style={{ marginBottom: '10%' }} onChange={this.updateLastName}/>
          <MembershipModal handleClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default Login

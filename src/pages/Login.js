import React, { Component } from "react";
import Header from '../containers/Header'
import '../index.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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

  handleClick = () => {
    const {name, lastName} = this.state;
    const {setName, setLastName, history} = this.props;

    if (name !== "") {
      setName(name);
    }
    if (lastName !== "") {
      setLastName(lastName);
    }
    console.log(this.props);
    history.push('/app')
  };

  render() {
    return(
      <div className="MainContainer">
        <Header message="Sportify" />
        <div className="content">
          <TextField id="outlined-basic" label="Prénom" variant="outlined" style={{ marginBottom: '10%' }} onChange={this.updateName}/>
          <TextField id="outlined-basic" label="Nom" variant="outlined" style={{ marginBottom: '10%' }} onChange={this.updateLastName}/>
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Lancer la démo
          </Button>
        </div>
      </div>
    )
  }
}

export default Login

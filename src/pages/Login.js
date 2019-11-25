import React, { Component } from "react";
import Header from '../components/Header'
import '../index.css'
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Home",
    }
  }

  updateType = (type) => {
    this.setState({type})
  };

  render() {
    return(
      <div className="MainContainer">
        <Header message="Sportify" />
        <div className="content">
          <Button variant="contained" color="primary" href="/app">
            Lancer la démo
          </Button>
        </div>
      </div>
    )
  }
}

export default Login

import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  render() {
    const { message } = this.props;

    return(
      <div className="HeaderContainer">
        {message}
      </div>
    );
  }
}

export default Header;

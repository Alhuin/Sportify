import React, { Component } from "react";
import '../index.css'
import Header from '../containers/Header'
import TabBar from "../components/TabBar";
import HomeContent from "../components/HomeContent";
import SearchContent from "../components/SearchContent";
import PassesContent from "../components/PassesContent";
import ProfileContent from "../components/ProfileContent";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Home",
    }
  }

  componentWillMount() {
    console.log(this.props);
  }

  scrollToBottom = () => {
    this.tabBar.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  };

  updateType = (type) => {
    this.setState({type})
  };

  render() {
    const { type } = this.state;
    let content = "";

    switch (type) {
      case "Home":
        content = <HomeContent />;
        break;
      case "Search":
        content = <SearchContent />;
        break;
      case "Passes":
        content = <PassesContent />;
        break;
      case "Profile":
        content = <ProfileContent />;
        break;
      default:
        content = "";
    }
    return(
      <div className="MainContainer">
        <Header type={type} />
        {content}
        <TabBar className="tabBar" updateType={this.updateType} />
        <div ref={(el) => { this.tabBar = el; }} />
      </div>
    )
  }
}

export default AppContent

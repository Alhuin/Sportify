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

  componentDidMount() {
    console.log(this.props);
  }

  updateType = (type) => {
    this.setState({type})
  };

  render() {
    const { type } = this.state;
    const { favorites, addToFavorites, removeFromFavorites, setFirstSearch, firstSearch, passes, history } = this.props;
    let content = "";

    switch (type) {
      case "Home":
        content = <HomeContent favorites={favorites} passes={passes} removeFromFavorites={removeFromFavorites} history={history}/>;
        break;
      case "Search":
        content = <SearchContent
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            setFirstSearch={setFirstSearch}
            firstSearch={firstSearch}
            history={history}
        />;
        break;
      case "Passes":
        content = <PassesContent passes={passes} history={history} />;
        break;
      case "Profile":
        content = <ProfileContent exit={() => history.push('/')}/>;
        break;
      default:
        content = "";
    }
    return(
      <div className="MainContainer">
        <Header type={type} />
        {content}
        <TabBar className="tabBar" updateType={this.updateType} />
      </div>
    )
  }
}

export default AppContent

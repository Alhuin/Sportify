import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import store from './redux/store/store';
import history from './services/history';
import Routes from './routes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        const { width } = this.state;
        let content = <>
        <MetaTags>
            <meta name="google" value="notranslate" />
            <meta name="description" content="MSS, Mutli-Sports for Students" />
            <title>MSS Demo</title>
        </MetaTags>
        <Provider store={store}>
            <Router history={history}>
                <Routes />
            </Router>
        </Provider>
        </>;
        if (width > 480) {
            content = <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p>Cette démo n'est pas accessible sur ordinateur, merci d'y accéder depuis un mobile.</p>
            </div>
        }
          return content;
    }
}
export default App;
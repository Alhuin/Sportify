import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './redux/store/store';
import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}
export default App;
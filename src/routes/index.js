import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import AppContent from '../containers/AppContent';
import Pass from '../pages/Pass';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/app" component={AppContent} />
      <Route path="/pass" component={Pass} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}

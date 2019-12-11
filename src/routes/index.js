import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import AppContent from '../containers/AppContent';
import Pass from '../pages/Pass';
import Partner from '../containers/Partner';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/app" component={AppContent} />
      <Route path="/pass" component={Pass} />
      <Route path="/partner" component={Partner} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}

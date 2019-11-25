import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AppContent from '../pages/AppContent';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/app" component={AppContent} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}

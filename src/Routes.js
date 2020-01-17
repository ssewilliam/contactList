import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './components/core';
import LandingLayout from './layouts/Landing'
import ContactListView from './views/ContactList';

export default function Route() {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/contacts"
      />
      <RouteWithLayout
        component={ContactListView}
        exact
        layout={LandingLayout}
        path="/contacts"
      />
      <Redirect
        to="/contacts"
      />
    </Switch>
  )
}

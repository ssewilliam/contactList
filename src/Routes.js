import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import RouteWithLayout from './components/core';
import LandingLayout from './layouts/Landing'
import ContactListView from './views/ContactList';
import store from './redux/store'

export default function Route() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

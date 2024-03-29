import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './Routes';
import './App.css';

const browserHistory = createBrowserHistory();
function App() {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;

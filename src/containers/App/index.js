import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Link
} from 'react-router-dom';

import Child from '../../components/Child';

const App = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow-group">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus-create">Modus Create</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Child} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;

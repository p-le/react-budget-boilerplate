import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';

import Child from '../../components/Child';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <h2>Accounts</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/zillow-group">Zillow Group</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
          <li><Link to="/modus-create">Modus Create</Link></li>
        </ul>
        <i className="fa fa-github fa-3x" aria-hidden="true" />
        <i className="fa fa-facebook-official fa-3x" aria-hidden="true" />
        <i className="fa fa-google fa-3x" aria-hidden="true" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Child} />
      </div>
    </MuiThemeProvider>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './keycloak/Welcome';
import Secured from './keycloak/Secured';
import Crypto from './components/Crypto';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Crypto />
          <ul>
            <li><Link to="/">public component</Link></li>
            <li><Link to="/secured">secured component</Link></li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap';

class Logout extends Component {

  logout() {
    this.props.history.push('/');
    this.props.keycloak.logout();
  }

  render() {
    return (
      <ReactBootstrap.Button variant="danger" onClick={ () => this.logout() }>
        Uitloggen
      </ReactBootstrap.Button>
    );
  }
}
export default withRouter(Logout);
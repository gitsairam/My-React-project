import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '616764956428-m8qd31rlu62qceviphhb55r2ovhod9i6.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google </div>;
  }
}

export default GoogleAuth;

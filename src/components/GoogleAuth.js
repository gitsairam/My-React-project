import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '616764956428-m8qd31rlu62qceviphhb55r2ovhod9i6.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/userinfo.email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if you signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>Welcome</div>;
    } else {
      return <div>You are not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;

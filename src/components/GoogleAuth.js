import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange());
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };
  onsignInClick() {
    this.auth.signIn();
  }
  onsignOutClick() {
    this.auth.signOut();
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onsignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onsignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()} </div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);

import React from 'react';
import fakeAuth from '../../utils/auth'

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    });
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { redirectToReferrer } = this.state;

    return (
      <div>
        { redirectToReferrer && (
          <Redirect to ={ from || '/' } />
        )}
        { from && (
          <p>
            You must log in to view the page at
            <code>{ from.pathname }</code>
          </p>
        )}
        <button onClick={this.login}>Log In</button>
      </div>
    )
  }
}

export default Login;

import React from 'react';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router';
import fakeAuth from '../utils/auth';

import App from '../components/App';

import Login from '../components/session/Login';
// import Logout from '../components/session/Logout';
// import Register from '../components/session/Register';
import notFound from '../components/notFound';
// import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ App } />
        <Miss component={ notFound } />
        <Match pattern="/login" component={ Login } />
        <MatchWhenAuthorized pattern="/dashboard" component={ Dashboard } />
      </div>
    </BrowserRouter>
  )
}

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component { ...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )}/>
)

export default Routes

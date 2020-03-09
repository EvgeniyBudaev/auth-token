import React, { Component } from 'react';
import classes from './login-page.module.css';
import Login from '../login';

class LoginPage extends Component {
  render() {
    return (
      <div className={classes.Login__wrapper}>
          <Login />
      </div>
    )
  };
};

export default LoginPage;

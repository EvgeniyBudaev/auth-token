import React, { Component } from "react";
import { Link } from "react-router-dom";
import { URL } from '../../../../routes/urls';
import * as classes from "./auth-btn.module.css";
import { connect } from 'react-redux';

class AuthBtn extends Component {
  render() {

    // const links = [
    //   links.push({ to: "/logout", label: "Выйти", exact: false })
    // ];

    if (this.props.isAuthenticated) { }
    return (
      <div className={classes.HeaderBtn}>
        <div className={classes.HeaderBtnSignup}><Link to={URL.SIGNUP} className={classes.Signup}>Регистрация</Link></div>
        <div className={classes.HeaderBtnLogin}><Link to={URL.LOGIN} className={classes.Login}>Войти</Link></div>
        <div className={classes.HeaderBtnLogin}><Link to={URL.LOGOUT} className={classes.Login}>Выйти</Link></div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(AuthBtn);

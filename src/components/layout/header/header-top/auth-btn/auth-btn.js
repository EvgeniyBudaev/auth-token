import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../../../routes/urls";
import * as classes from "./auth-btn.module.css";
import { connect } from "react-redux";

class AuthBtn extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;

    if (this.props.isAuthenticated) {
    }
    return (
      <div className={classes.HeaderBtn}>
        {isAuthenticated ? (
          <div className={classes.HeaderBtnLogin}>
            <Link to={URL.LK} className={classes.Signup}>
              Личный кабинет
            </Link>
            <Link to={URL.LOGOUT} className={classes.Login}>
              Выйти
            </Link>
          </div>
        ) : (
          <Fragment>
            <div className={classes.HeaderBtnSignup}>
              <Link to={URL.SIGNUP} className={classes.Signup}>
                Регистрация
              </Link>
            </div>
            <div className={classes.HeaderBtnLogin}>
              <Link to={URL.LOGIN} className={classes.Login}>
                Войти
              </Link>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  };
};

export default connect(mapStateToProps)(AuthBtn);

import React from "react";
import { Link } from "react-router-dom";
import { URL } from '../../../../routes/urls';
import * as classes from "./auth-btn.module.css";


const AuthBtn = props => {
  return (

    <div className={classes.HeaderBtn}>
      <div className={classes.HeaderBtnSignup}><Link to={URL.SIGNUP} className={classes.Signup}>Регистрация</Link></div>
      <div className={classes.HeaderBtnLogin}><Link to={URL.LOGIN} className={classes.Login}>Войти</Link></div>
    </div>

  );
};

export default AuthBtn;

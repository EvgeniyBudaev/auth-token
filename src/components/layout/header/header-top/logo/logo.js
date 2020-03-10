import React from "react";
import { NavLink } from "react-router-dom";
import { URL } from "../../../../routes/urls";
import * as classes from "./logo.module.css";
import logo from "./logo.svg";

const Logo = props => {
  return (
    <div className={classes.Logo}>
      <NavLink to={URL.HOME}>
        <img src={logo} alt="Tesla"></img>
      </NavLink>
    </div>
  );
};

export default Logo;

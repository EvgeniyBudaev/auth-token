import React, { Component } from "react";
import classes from "./signup-page.module.css";
import SignUp from "../signup";

class SignupPage extends Component {
  render() {
    return (
      <div className={classes.Signup__wrapper}>
        <SignUp />
      </div>
    );
  }
}

export default SignupPage;

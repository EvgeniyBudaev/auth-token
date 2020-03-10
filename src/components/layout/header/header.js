import React, { Component } from "react";
import HeaderTop from "./header-top";
import * as classes from "./header.module.css";

class Header extends Component {

  render() {
    return (

      <header className={classes.Header}>
        <div className={classes.Container}>
          <div className={classes['Header-wrapper']}>
            <HeaderTop {...this.props} />
          </div>
        </div>
      </header>

    );
  }
};

export default Header;

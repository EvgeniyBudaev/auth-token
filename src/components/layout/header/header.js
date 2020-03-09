import React from "react";
import HeaderTop from "./header-top";
import * as classes from "./header.module.css";

const Header = props => {
  return (

    <header className={classes.Header}>
      <div className={classes.Container}>
        <div className={classes['Header-wrapper']}>
          <HeaderTop {...props} />
        </div>
      </div>
    </header>

  );
};

export default Header;

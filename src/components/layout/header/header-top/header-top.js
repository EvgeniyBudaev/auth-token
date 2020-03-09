import React from "react";
import Logo from "./logo";
import Menu from './menu';
import AuthBtn from './auth-btn';
import * as classes from "./header-top.module.css";

const HeaderTop = props => {
  return (

    <div className={classes['Header-top']}>
      <Logo {...props} />
      <Menu {...props} />
      <AuthBtn {...props} />
    </div>

  );
};

export default HeaderTop;

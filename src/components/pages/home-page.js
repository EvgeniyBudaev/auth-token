import React, { Fragment } from "react";
import classes from './home-page.module.css'

const HomePage = props => {
  return (
    <Fragment>
      <div className={classes.HomePage}>
        <div className={classes.TopText}></div>Домашняя страница</div>
    </Fragment>
  );
};

export default HomePage;

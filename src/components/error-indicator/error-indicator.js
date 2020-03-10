import React from "react";

import * as classes from "./error-indicator.module.css";
import icon from "./error-icon.png";

const ErrorIndicator = () => {
  return (
    <div className={classes.error_indicator}>
      <img className={classes.error_icon} src={icon} alt="error icon" />
      <span className={classes.boom}>BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>( please report a problem)</span>
    </div>
  );
};

export default ErrorIndicator;

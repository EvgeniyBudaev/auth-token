import React from "react";
import { Link } from "react-router-dom";
import { URL } from "../../../../routes/urls";
import * as classes from "./menu.module.css";

const Menu = props => {
  return (
    <nav className={classes.Menu}>
      <ul className={classes["Menu__list"]}>
        <li>
          <Link to={URL.PROJECTS} className={classes.link}>
            Проекты
          </Link>
        </li>
        <li>
          <Link to={URL.ARTWORKS} className={classes.link}>
            Произведения
          </Link>
        </li>
        <li>
          <Link to={URL.MASTERS} className={classes.link}>
            Мастера
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

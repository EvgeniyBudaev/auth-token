import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./drawer.module.css";
import Backdrop from "../../ui/Backdrop/Backdrop";

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    const links = [
      { to: "/", label: "Главная", exact: true }
    ];

    if (this.props.isAuthenticated) {
      links.push({ to: "/projects", label: "Проекты", exact: false })
      links.push({ to: "/artworks", label: "Произведения", exact: false })
      links.push({ to: "/masters", label: "Мастера", exact: false })
      links.push({ to: "/lk", label: "Личный кабинет", exact: false })
      links.push({ to: "/logout", label: "Выйти", exact: false })
    } else {
      links.push({ to: "/projects", label: "Проекты", exact: false })
      links.push({ to: "/artworks", label: "Произведения", exact: false })
      links.push({ to: "/masters", label: "Мастера", exact: false })
      links.push({ to: "/login", label: "Авторизация", exact: false })
      links.push({ to: "/signup", label: "Регистрация", exact: false })
    }

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;



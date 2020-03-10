import React, { Component } from 'react';
import Header from '../header';
import MenuToggle from '../../navigation/menu-toggle';
import Drawer from '../../navigation/drawer';
import { connect } from 'react-redux';
import classes from './main-layout.module.css';

class MainLayout extends Component {

  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }


  render() {
    return (
      <div className={classes.MainLayout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated} />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Header {...this.props} />
        <main>{this.props.children}</main>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(MainLayout);

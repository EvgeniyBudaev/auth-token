import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { URL } from '../routes/urls';
import MainLayout from '../layout/main-layout';
import HomePage from '../pages/home-page';
import Projects from '../pages/projects';
import ArtworksPage from '../pages/artworks-page';
import MastersPage from '../pages/masters-page';
import SignupPage from '../pages/signup-page';
import LoginPage from '../pages/login-page';
import Logout from '../logout';
import LK from '../lk';
import { autoLogin } from '../../actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path={URL.LK} exact>
          <LK />
        </Route>
        <Route path={URL.SIGNUP} exact>
          <SignupPage />
        </Route>
        <Route path={URL.LOGIN} exact>
          <LoginPage />
        </Route>
  
          <Route path={URL.HOME} exact>
            <HomePage />
          </Route>
          <Route path={URL.PROJECTS} exact>
            <Projects />
          </Route>
          <Route path={URL.ARTWORKS} exact>
            <ArtworksPage />
          </Route>
          <Route path={URL.MASTERS} exact>
            <MastersPage />
          </Route>

        <Redirect to={URL.HOME} />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path={URL.LK} exact>
            <LK />
          </Route>
          <Route path={URL.LOGOUT} exact>
            <Logout />
          </Route>

            <Route path={URL.HOME} exact>
              <HomePage />
            </Route>
            <Route path={URL.PROJECTS} exact>
              <Projects />
            </Route>
            <Route path={URL.ARTWORKS} exact>
              <ArtworksPage />
            </Route>
            <Route path={URL.MASTERS} exact>
              <MastersPage />
            </Route>

          <Redirect to={URL.HOME} />
        </Switch>
      )
    }

    return (
      <MainLayout>
        {routes}
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



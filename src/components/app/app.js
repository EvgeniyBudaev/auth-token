import React, { Component, Fragment } from "react";
import { Route, Switch } from 'react-router-dom';
import { URL } from '../routes/urls';
import MainLayout from '../layout/main-layout';
import HomePage from '../pages/home-page';
import Projects from '../pages/projects';
import ArtworksPage from '../pages/artworks-page';
import MastersPage from '../pages/masters-page';
import SignupPage from '../pages/signup-page';
import LoginPage from '../pages/login-page';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Switch>
        <Route path={URL.SIGNUP} exact>
          <SignupPage />
          </Route>
          <Route path={URL.LOGIN} exact>
            <LoginPage />
          </Route>
        <MainLayout>
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
        </MainLayout>
        </Switch>
      </Fragment>
    );
  }
}

export default App;



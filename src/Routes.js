import {
  AppContainer,
  DoctorHomeContainer,
  DoctorLoginContainer,
  HomeContainer,
  PatientLoginContainer
} from './containers';
import { Redirect, Route, Switch } from 'react-router-dom';

import React from 'react';
import { connect } from 'react-redux';
import { isLogged } from 'selectors';

const connectState = connect(state => ({ isLogged: isLogged(state, 'doctor', 'doctor1') }));

const PrivateRoute = connectState(
  ({ component: Component, isLogged: logged, entity, ...routeProps }) => {
    return (
      <Route
        {...routeProps}
        render={props =>
          logged ? (
            <Component {...props} />
          ) : (
            <Redirect to={`/login/${entity}`} />
          )
        }
      />
    );
  }
);

const Routes = () => (
  <div>
    <Route path="/" component={AppContainer} />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <PrivateRoute
        path="/doctor"
        entity="doctor"
        component={DoctorHomeContainer}
      />
      <Route exact path="/login/doctor" component={DoctorLoginContainer} />
      <Route exact path="/login/patient" component={PatientLoginContainer} />
    </Switch>
  </div>
);

export default Routes;

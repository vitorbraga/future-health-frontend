import {
  AppContainer,
  DoctorHomeContainer,
  DoctorLoginContainer,
  DoctorRegisterContainer,
  HomeContainer,
  PatientHomeContainer,
  PatientLoginContainer
} from 'containers';
import { Redirect, Route, Switch } from 'react-router-dom';

import React from 'react';
import { connect } from 'react-redux';
import { isLogged } from 'selectors';

const connectState = connect((state, { entity }) => ({ isLogged: isLogged(state, entity) }));

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
      <PrivateRoute
        path="/patient"
        entity="patient"
        component={PatientHomeContainer}
      />
      <Route exact path="/login/doctor" component={DoctorLoginContainer} />
      <Route exact path="/login/patient" component={PatientLoginContainer} />
      <Route exact path="/register/doctor" component={DoctorRegisterContainer} />
    </Switch>
  </div>
);

export default Routes;

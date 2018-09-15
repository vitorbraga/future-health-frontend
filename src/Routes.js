import {
  AppContainer,
  DoctorLoginContainer,
  HomeContainer,
  PatientLoginContainer
} from "./containers";
import { Route, Switch } from "react-router-dom";

import React from "react";

const Routes = () => (
  <div>
    <Route path="/" component={AppContainer} />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/doctor" component={DoctorLoginContainer} />
      <Route path="/patient" component={PatientLoginContainer} />
    </Switch>
  </div>
);

export default Routes;

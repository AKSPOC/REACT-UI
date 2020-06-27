import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import RegisterPage from "views/RegisterPage.js";
import ProfilePage from "views/ProfilePage.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/register"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/"
        render={props => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

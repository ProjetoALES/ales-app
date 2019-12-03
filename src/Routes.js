import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import GetThere from "./pages/GetThere/GetThere";
import ResetPasswordRequested from "./pages/ResetPasswordRequested/ResetPasswordRequested";
import NewPassword from "./pages/NewPassword/NewPassword";
import NewPasswordSet from "./pages/NewPasswordSet/NewPasswordSet";
import Dashboard from "./pages/Dashboard/Dashboard";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={() =>
      isAuthenticated() ? <Component /> : <Redirect to="/login" />
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/reset-password" exact component={ResetPassword} />
      <Route path="/get-there" exact component={GetThere} />
      <PrivateRoute
        path="/reset-password-requested"
        exact
        component={ResetPasswordRequested}
      />
      <PrivateRoute path="/new-password" exact component={NewPassword} />
      <PrivateRoute path="/new-password-set" exact component={NewPasswordSet} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;

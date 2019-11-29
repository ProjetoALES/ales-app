import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import GetThere from "./pages/GetThere/GetThere";
import ResetPasswordRequested from "./pages/ResetPasswordRequested/ResetPasswordRequested";
import NewPassword from "./pages/NewPassword/NewPassword";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/get-there" exact component={GetThere} />
      <Route
        path="/reset-password-requested"
        exact
        component={ResetPasswordRequested}
      />
      <Route path="/new-password" exact component={NewPassword} />
    </Switch>
  );
};

export default Routes;

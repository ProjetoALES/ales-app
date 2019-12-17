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
import Semesters from "./pages/Semester/Semesters/Semesters";
import SemesterDetail from "./pages/Semester/SemesterDetail/SemesterDetail";
import NewSemester from "./pages/Semester/NewSemester/NewSemester";
import SemesterEdit from "./pages/Semester/SemesterEdit/SemesterEdit";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

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
      <Route path="/new-password/:uid/:token" exact component={NewPassword} />
      <Route path="/new-password-set" exact component={NewPasswordSet} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/semesters" exact component={Semesters} />
      <PrivateRoute path="/semesters/:name" exact component={SemesterDetail} />
      <PrivateRoute path="/new-semester" exact component={NewSemester} />
      <PrivateRoute
        path="/semesters/:name/edit"
        exact
        component={SemesterEdit}
      />
    </Switch>
  );
};

export default Routes;

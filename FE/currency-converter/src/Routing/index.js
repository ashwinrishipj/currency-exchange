import React from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login"
import { useSelector } from "react-redux";
import Dashboard from "../Dashboard";
import LockScreen from "../Login/LockScreen";

export const Routing = () => {
  const route = useSelector(state => state.pageRoute);

  return (
    <BrowserRouter>
      <Switch>
        {(route === "lockScreen" && (
          <Route path="/" component={() => (
            <LockScreen />
          )} />
        )) ||
          (route === ("login" || "logout") && (
            <Route
              path="/"
              component={() => (
                <Login />
              )}
            />
          )) ||
          (route === "dashBoard" && (
            <Route
              path="/"
              component={() => (
                <Dashboard />
              )}
            />)) ||

          ""}
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter;

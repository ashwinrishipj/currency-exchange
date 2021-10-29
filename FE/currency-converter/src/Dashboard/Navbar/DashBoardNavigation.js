import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCurrency from "../../Currency/AddCurrency";
import ManageCurrency from "../../Currency/ManageCurrency";
import Charts from "../../LandingPage/Charts";
import CompareCurrencies from "../../LandingPage/CompareCurrencies";
import CurrentRates from "../../LandingPage/CurrentRates";

function DashBoardNavigation() {
  const navigateTo = useSelector(state => state.currentPage);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {(navigateTo === "home" && (
            <Route path="/" component={() => (
              <CompareCurrencies />
            )} />
          )) ||
            (navigateTo === ("charts") && (
              <Route
                path="/"
                component={() => (
                  <Charts />
                )}
              />
            )) ||
            (navigateTo === "rates" && (
              <Route
                path="/"
                component={() => (
                  <CurrentRates />
                )}
              />)) ||
            (navigateTo === "addCurrency" && (
              <Route
                path="/"
                component={() => (
                  <AddCurrency />
                )}
              />)) ||
            (navigateTo === "manageCurrency" && (
              <Route
                path="/"
                component={() => (
                  <ManageCurrency />
                )}
              />)) ||
            ""}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default DashBoardNavigation;
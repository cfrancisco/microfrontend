import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

let Dashboard = null;
let Home = null;
let Widget = null;
let WizardManager = null;

Dashboard = React.lazy(() => import("guinx/App").catch((err) => console.log(err.message)));

const RedirectToLogin = () => <Redirect to={{ pathname: "/login" }} />;
const RedirectToLogout = () => <Redirect to={{ pathname: "/logout" }} />;

const routes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
  },
  {
    path: "/home",
    component: Dashboard,
    exact: false,
  },
  {
    path: "/login",
    component: RedirectToLogin,
    exact: false,
  },
  {
    path: "/logout",
    component: RedirectToLogout,
    exact: false,
  },
];

const Routes = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </React.Suspense>
);

export default Routes;

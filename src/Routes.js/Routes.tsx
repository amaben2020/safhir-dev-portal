import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LandingPage = React.lazy(() => import("./../components/LandingPage"));
const ApprovedSoftware = React.lazy(
  () => import("../Pages/ApprovedSoftware/ApprovedSoftware")
);
const DevportalHome = React.lazy(() => import("../Pages/DevportalHome"));
const PendingApproval = React.lazy(
  () => import("../Pages/PendingApproval/PendingApproval")
);
const Dashboard = React.lazy(() => import("./../components/Layout/Layout"));

const Routes = () => {
  return (
    <React.Suspense
      fallback={
        <p>
          <Spinner animation="border" />
        </p>
      }
    >
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Dashboard>
          <Switch>
            <Route
              exact={true}
              path="/devportal-home"
              component={DevportalHome}
            />
            <Route
              exact
              path="/approved-software"
              component={ApprovedSoftware}
            />
            <Route exact path="/pending-approval" component={PendingApproval} />
          </Switch>
        </Dashboard>
      </Router>
    </React.Suspense>
  );
};

export default Routes;

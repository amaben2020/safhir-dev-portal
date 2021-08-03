import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LandingPage = React.lazy(() => import("./../components/LandingPage"));
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
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;

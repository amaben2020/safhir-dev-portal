import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LandingPage = React.lazy(() => import("./../components/LandingPage"));
const ApprovedSoftware = React.lazy(
  () => import("./../pages/ApprovedSoftware/ApprovedSoftware")
);
const DevportalHome = React.lazy(() => import("./../pages/DevportalHome"));
const PendingApproval = React.lazy(
  () => import("./../pages/PendingApproval/PendingApproval")
);
const Dashboard = React.lazy(() => import("./../components/Layout/Layout"));
const Login = React.lazy(() => import("./../pages/login/LoginPage"));
const Register = React.lazy(
  () => import("./../pages/softwareRegistration/SoftwareRegistrationPage")
);
const CreateAccount = React.lazy(
  () => import("./../pages/createAccount/createAccount")
);

const DevportalVerification = React.lazy(
  () => import("./../pages/devPortalVerification/DevportalVerification")
);

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/complete-verification"
          component={DevportalVerification}
        />

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

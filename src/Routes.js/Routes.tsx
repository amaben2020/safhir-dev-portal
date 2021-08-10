import React from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./../components/LandingPage'));
const ApprovedSoftware = React.lazy(
  () => import('./../Pages/ApprovedSoftware/ApprovedSoftware')
);
const DevportalHome = React.lazy(() => import('./../Pages/DevportalHome'));
const PendingApproval = React.lazy(
  () => import('./../Pages/PendingApproval/PendingApproval')
);
const Dashboard = React.lazy(() => import('./../components/Layout/Layout'));
const Login = React.lazy(() => import('./../Pages/login/LoginPage'));
const Register = React.lazy(
  () => import('./../Pages/softwareRegistration/SoftwareRegistrationPage')
);
const CreateAccount = React.lazy(
  () => import('./../Pages/createAccount/createAccount')
);

const DevportalVerification = React.lazy(
  () => import('./../Pages/devPortalVerification/DevportalVerification')
);

const CreateDevPortal = React.lazy(
  () => import('./../Pages/createDevPortal/CreateDevPortal')
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
        <Route exact path="/create-dev-account" component={CreateDevPortal} />

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

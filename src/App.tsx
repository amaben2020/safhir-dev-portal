import React from "react";
import NavigationBar from "./components/NavigatorBar";

import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SoftwareRegistrationPage from "./pages/softwareRegistration/SoftwareRegistrationPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="./landing-page" component={LandingPage} />
          <Route exact path="./login" component={LoginPage} />
          <Route
            exact
            path="./app-registration"
            component={SoftwareRegistrationPage}
          />
        </Switch>
        {/* <LandingPage /> */}
        {/* <LoginPage /> */}
        <SoftwareRegistrationPage />
      </Router>
    </>
  );
}

export default App;

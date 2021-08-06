import React from "react";
import NavigationBar from "./components/NavigatorBar";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SoftwareRegistrationPage from "./pages/softwareRegistration/SoftwareRegistrationPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Routes.js/Routes";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes />
    </>
  );
}

export default App;

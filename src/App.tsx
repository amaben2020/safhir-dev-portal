import React from "react";
import NavigationBar from "./components/NavigatorBar";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
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

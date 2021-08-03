import React from "react";
import NavigationBar from "./components/NavigatorBar";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <NavigationBar />
      <LandingPage />
    </>
  );
}

export default App;

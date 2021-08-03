import React from "react";
import NavigationBar from "./components/NavigatorBar";

import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <NavigationBar />
      <div>
        <LandingPage />
      </div>
    </>
  );
}

export default App;

import React from "react";
import NavigationBar from "./components/NavigatorBar";
import "react-toastify/dist/ReactToastify.css";
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

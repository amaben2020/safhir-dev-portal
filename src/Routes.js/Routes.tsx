import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import DevportalHome from "../Pages/DevportalHome";
import Dashboard from "./../components/Layout/Layout";
import Layout from './../components/Layout/Layout'
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
         
            <Dashboard>
               <Route  exact path='/devportal-home' component={DevportalHome}/>
             
              
              
            </Dashboard>
        
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;

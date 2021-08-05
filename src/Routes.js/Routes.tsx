import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import ApprovedSoftware from "../Pages/ApprovedSoftware/ApprovedSoftware";
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
      
          <Route exact path="/">
            <LandingPage />
          </Route>
         
            <Dashboard>
            <Switch>
               <Route  exact={true} path='/devportal-home' component={DevportalHome}/>        
               <Route  exact path='/approved-software' component={ApprovedSoftware}/>        
               </Switch>         
            </Dashboard>
        
       
      </Router>
    </React.Suspense>
  );
};

export default Routes;

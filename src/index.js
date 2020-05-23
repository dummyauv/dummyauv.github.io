/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import LandingPage from "views/LandingPage/LandingPage";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import AboutUsPage from 'views/AboutUsPage/AboutUsPage';
import TeamPage from 'views/TeamPage/TeamPage'
import AnahitaPage from 'views/Vehicles/AnahitaPage/AnahitaPage';
import VarunPage from 'views/Vehicles/VarunPage/VarunPage';
// others

ReactDOM.render(
  <BrowserRouter>
  <ExamplesNavbar />
    <Switch>
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/about-us"
        render={props => <AboutUsPage {...props} />}
      />
      <Route
        path="/team"
        render={props => <TeamPage {...props} />}
      />
      <Route
        path="/vehicles/anahita"
        render={props => <AnahitaPage {...props} />}
      />
      <Route
        path="/vehicles/varun"
        render={props => <VarunPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

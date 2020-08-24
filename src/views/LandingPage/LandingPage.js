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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

// core components
import AboutUs from "./components/About/AboutUs.js";
import Team from "./components/Team/Team.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Posts from "./components/Posts/Posts.js";
import Vehicles from "./components/Vehicles/Vehicles.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Achievements from './components/Achievements/Achievements';
import "./LandingPage.css"
import "./LandingPage.css"
function LandingPage(props) {
  // console.log(props.location.pathname);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>

  <LandingPageHeader />

  <ExamplesNavbar home="" page="landing-page" activePage={props.location.pathname}/>
    <div className="section text-center ">
      <Container className="reduce-margin">
      
          <Row>
            <h2 className="heading-main">About Us</h2>          
          </Row>
      </Container>
    </div>
      <div className="main">
        <AboutUs />
        <Team className="team"/>
        <Vehicles />
        <Achievements/>
        <Sponsors className="sponsors"/>
      </div>
    </>
  );
}

export default LandingPage;

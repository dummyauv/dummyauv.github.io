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

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

import ContactUsComponent from '../LandingPage/components/ContactUs/ContactUs'

function ContactUsPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    <ExamplesNavbar/>
    <div className="section text-center ">
        <Container className="reduce-margin">
        
          <Row>
            <h2 className="heading-main">Contact Us</h2>          
          </Row>
        </Container>
    </div>
      <div className="main">
          <ContactUsComponent/>
      </div>  
    </>
  );
}

export default ContactUsPage;

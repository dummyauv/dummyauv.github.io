
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import { Row, Container, Col, NavLink } from "reactstrap";
import {
    
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    
} from "reactstrap";
import './Footer.css'
function Footer() {
  return (
    <footer className="footer-new">
        <Row className="footer-heading">
            <h2 className="footer-heading-content"></h2>
        </Row> 
      <Container>
        <Row>
            <Col md="4">
                <div className="footer-auv-logo"></div>
                <div className="footer-heading-primary">Team AUV-IITK</div>
                <div className="footer-address">AUV Room, Hall-2,    
                    Indian Institute of Technology, Kalyanpur, Kanpur Nagar,
                    Uttar Pradesh-208016, India
                </div>
            </Col>
            <Col md="4">
                <div className="footer-links-heading">Quick Links</div>   
                <NavLink to="/landing-page" tag={Link} className="footer-nav-link">
                    Home
                </NavLink> 
                <NavLink to="/about-us" tag={Link} className="footer-nav-link">
                    About Us
                </NavLink> 
                <NavLink to="/team" tag={Link} className="footer-nav-link">
                    Team
                </NavLink> 
                <NavLink to="/vehicles/anahita" tag={Link} className="footer-nav-link">
                    Anahita
                </NavLink> 
                <NavLink to="/vehicles/anahita" tag={Link} className="footer-nav-link">
                    Varun
                </NavLink> 

                <div className="nav-icons-container">
                    <NavLink
                        data-placement="bottom"
                        href="https://github.com/AUV-IITK"
                        target="_blank"
                        title="Star on GitHub"
                        className="footer-nav-icon"
                    >
                        <i className="fa fa-github" />
                        <p className="d-lg-none">GitHub</p>
                </NavLink>    
                <NavLink
                    data-placement="bottom"
                    href="https://www.facebook.com/auviitk"
                    target="_blank"
                    title="Like us on Facebook"
                    className="footer-nav-icon"
                >
                    <i className="fa fa-facebook-square" />
                    <p className="d-lg-none">Facebook</p>
                </NavLink>
                <NavLink
                    data-placement="bottom"
                    href="https://www.linkedin.com/company/auv-iitk/"
                    target="_blank"
                    title="Reach Us on Linkedin"
                    className="footer-nav-icon"
                >
                    <i className="fa fa-linkedin-square" />
                    <p className="d-lg-none">Facebook</p>
                </NavLink>
                </div>
            </Col> 
            <Col md="4" >
                <h1 className="footer-links-heading u-margin-top-negative-medium">Reach Us</h1>
                
                <Form className="footer-form">
                  <Row>
                    <Col md="12">
                      <label className="footer-links-heading u-margin-top-negative">Name</label>
                      <InputGroup className="u-margin-bottom-small">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" className="footer-input-group" />
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label className="footer-links-heading u-margin-top-negative">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label className="footer-links-heading u-margin-top-negative-small">Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    className="footer-input-group"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                  <a className="btn-blue mt-5" href="javascript:alert('Sorry we do not have a backend setup');">Send</a>
                    </Col>
                  </Row>
                </Form>
                
            </Col> 
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

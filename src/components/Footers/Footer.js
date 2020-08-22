
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
        <br />
        <Row style={{width: "100%",padding:"10px"}}>
            <Col md="1">
            </Col>
            <Col md="4">
                <div className="footer-auv-logo"></div>
                <div className="footer-heading-primary">Team AUV-IITK</div>
                <div className="footer-address">
                AUV Room, Hall-2, 
                <br/>Indian Institute of Technology Kanpur,
                <br />Uttar Pradesh-208016, India
                </div>
            </Col>

            <Col md="2">
                <div className="footer-links-heading u-margin-top-negative-medium">Quick Links</div>   
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
                    title="Follow us on Facebook"
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
                    <p className="d-lg-none">Linkedin</p>
                </NavLink>
                <NavLink
                    data-placement="bottom"
                    href="mailto:iitkauv@gmail.com"
                    target="_blank"
                    title="Write Us"
                    className="footer-nav-icon"
                >
                    <i className="fa fa-envelope-square" />
                    <p className="d-lg-none">Mail</p>
                </NavLink>
                <NavLink
                    data-placement="bottom"
                    href="https://www.instagram.com/auviitk/"
                    target="_blank"
                    title="Fllow us on Instagram
                    "
                    className="footer-nav-icon"
                >
                    <i className="fa fa-instagram" />
                    <p className="d-lg-none">Instagram</p>
                </NavLink>
                </div>

                
            </Col> 
            <Col md="1">
            </Col>
            <Col md="3" >

                <h1 className="footer-links-heading u-margin-top-negative-medium">Reach Us</h1>
                
                <Form className="footer-form">
                  <Row>
                    <Col md="12">
                      <InputGroup >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className="footer-input-group">
                            <i style={{color:"white"}} className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" className="footer-input-group" />
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <InputGroup className=" mt-4">
                        <InputGroupAddon  addonType="prepend">
                          <InputGroupText className="footer-input-group">
                            <i style={{color:"white"}} className=" nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" className="footer-input-group" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Input
                    placeholder="Any message or feedback for us..."
                    type="textarea"
                    rows="4"
                    className="footer-input-group mt-4"
                  />
                  <Row>
                    <Col  md="4">
                  <a className="btn mt-3" href="javascript:alert('Sorry we do not have a backend setup');">Send</a>
                    </Col>
                  </Row>
                </Form>
                
            </Col> 
        </Row>
    </footer>
  );
}

export default Footer;

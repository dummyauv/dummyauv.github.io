import React from "react";
import anahitapic from "assets/img/anahita-1.jpg";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import './AboutUs.css';
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
  Col,
} from "reactstrap";

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      <div className="section text-center ">
        <Container className="reduce-margin">
        
        <Row>
          <h2 className="heading-main">About Us</h2>          
        </Row>
        <h1 className="small-heading-edited ">WE ARE ROBOTICS ENTHUSIASTS!</h1>
        <Row>
          <Col className="left-desc" xl="9">
          
          <img
              src={anahitapic}
              className=" image-anahita"
            ></img>
            
            <p className="description desc-ssk1">
              We are a team of undergraduate students researching in the field
              of marine robotics. The team started off in 2014, as the
              brainchild of a group of enthusiastic engineers. From a team
              with just an idea to create an impact on underwater robotics, we
              have grown into a family of over 40 members, through consistent
              dedication and hard work.
              </p>
            <p className="description desc-ssk1">
              We have successfully designed and manufactured two robust
              autonomous underwater vehicles (AUV), namely, Varun and Anahita.
              These machines are capable of navigating in unknown
              environments, performing acoustic localization, and identifying
                objects using computer vision.{" "}
            </p>
            <br />

            <Link to='/about-us' className="btn-blue">
              More
            </Link>

          </Col>
          <div xl="3" className="icons-container">
            <div xl="3" md="3" sm="6" className=" single-icon-container">
              <div className=" icon-ssk">
                <div className="icon icon-info">
                  <strong><h3>2</h3></strong>
                </div>
                <div className="description">
                  <h4 className="info-title"><strong>Vehicles</strong></h4>
                  
                </div>
              </div>
            </div>
            <div xl="3" md="3" sm="6" className="single-icon-container">
              <div className=" icon-ssk">
                <div className="icon icon-info">
                  <h3>30</h3>
                </div>
                <div className="description">
                  <h4 className="info-title"><strong>Team Members</strong></h4>
                  
                </div>
              </div>
            </div>
            <div xl="3" md="3" sm="6" className="single-icon-container">
              <div className=" icon-ssk">
                <div className="icon icon-info">
                  <h3>30+</h3>
                </div>
                <div className="description">
                  <h4 className="info-title">Projects </h4>
                  
                </div>
              </div>
            </div>
            <div xl="3" md="3" sm="6" className="single-icon-container">
              <div className=" icon-ssk">
                <div className="icon icon-info">
                  <h3>400+</h3>
                </div>
                <div className="description">
                  <h4 className="info-title">NightOuts</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </Row>
        <br />
        <br />
        <Row className="icons-row text-align-center">
          
        </Row>
        </Container>
      </div>
    </>
  );
}
export default AboutUs;

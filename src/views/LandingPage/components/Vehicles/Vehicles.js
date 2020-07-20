import React from 'react';
import varun from "assets/img/varun.jpg";
import anahita from "assets/img/anahita-2.jpg";
import {Link } from "react-router-dom";
import "./Vehicles.css"
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

function Vehicles() {
    return (
        <>
        <div className="section landing-section">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col md="2"></Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center mb-4 heading-main">Vehicles</h2>
              </Col>
              <Col md="2"></Col>
              <Col lg="6" className="text-center">
                <h2 className="small-heading">Varun</h2>
                <img src={varun} className="image-anahita m-3"></img>
                <p className="desc-ssk1">Varun was the first Autonomous Underwater Vehicle developed by our team. With a modular design for easy assembly and installation, Varun could be used as a staging vehicle for carrying out experiments, autonomous underwater inspection and data collection. It has upto four hours of continuous operation capacity.</p>
                <p className="desc-ssk1">Bot Varun was the first runner up in NIOT-SAVe 2016.</p>
                <Link to='/vehicles/varun' className="btn-blue mt-5 ml-auto mr-auto">
                        More
                        </Link>
              </Col>
              <Col lg="6" className="text-center">
                <h2 className="small-heading">Anahita</h2>
                <img src={anahita} className="image-anahita m-3"></img>
                <p className="desc-ssk1">Anahita is an improvement over AUV-IITK’s previous vehicle Varun in terms of its modularity, robustness, ease of manufacturing and assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the same time, not compromising on the maneuverability</p>
                <p className="desc-ssk1">Anahita participated in RoboSub-2019, San Diego and was the first runner up at NIOT-SAVe, 2019.</p>
                <Link to='/vehicles/anahita' className="btn-blue mt-3 ml-auto mr-auto">
                        More
                        </Link>
              </Col>
            </Row>
          </Container>
        </div>
         
        </>
    );


}
export default Vehicles;
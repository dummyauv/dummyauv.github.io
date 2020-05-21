import React from 'react';
import varun from "assets/img/varun.jpg"
import anahita from "assets/img/anahita-2.jpg"
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
                <h2 className="text-center mb-4">Vehicles</h2>
              </Col>
              <Col md="2"></Col>
              <Col md="6" className="text-center">
                <h2 className="text-info">Varun</h2>
                <img src={varun} className="img-responsive img-rounded img-thumbnail m-3" width="60%"></img>
                <p>Varun was the first Autonomous Underwater Vehicle developed by our team. With a modular design for easy assembly and installation, Varun could be used as a staging vehicle for carrying out experiments, autonomous underwater inspection and data collection. It has upto four hours of continuous operation capacity.</p>
                <p>Bot Varun was the first runner up in NIOT-SAVe 2016.</p>
              </Col>
              <Col md="6" className="text-center">
                <h2 className="text-info">Anahita</h2>
                <img src={anahita} className="img-responsive img-rounded img-thumbnail m-4 mb-5" width="60%"></img>
                <p>Anahita is an improvement over AUV-IITK’s previous vehicle Varun in terms of its modularity, robustness, ease of manufacturing and assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the same time, not compromising on the maneuverability</p>
                <p>Anahita participated in RoboSub-2019, San Diego and was the first runner up at NIOT-SAVe, 2019.</p>
              </Col>
              <button class="btn btn-primary ml-auto mr-auto mt-5"> More</button>
            </Row>
          </Container>
        </div>
        
        </>
    );


}
export default Vehicles;
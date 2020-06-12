import React from 'react';
import solidworks from "assets/img/sponsors/solidworks.png"
import mathworks from "assets/img/sponsors/mathworks.png"
import altium from "assets/img/sponsors/altium.png"
import ansys from "assets/img/sponsors/ansys.jpg"
import dord from "assets/img/sponsors/dord-iitk.png"
import sparton from "assets/img/sponsors/sparton.png"
import xsens from "assets/img/sponsors/xsens.png"
import ids from "assets/img/sponsors/ids.png"
import "./Sponsors.css"
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

function Sponsors() {
    return (
        <>
            <div className="section landing-section light-ssk" id="sponsors">
          {/* <Container> */}
            <Row className="ml-2">
              <Col md="2"></Col>
              <Col className="ml-auto mr-auto mb-4" md="8">
                <h2 className="text-center mb-4 heading-ssk2">Our Sponsors</h2>
              </Col>
              <Col md="2"></Col>
              <Col lg="3" xs="6">
                <img src={solidworks} className="img-responsive1" width="100%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={mathworks} className="img-responsive1" width="80%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={ids} className="img-responsive1" width="80%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={ansys} className="img-responsive1" width="80%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={xsens} className="img-responsive1" width="80%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={sparton} className="img-responsive1" width="80%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={dord} className="img-responsive1" width="80%"></img>
              </Col>
              <Col lg="3" xs="6">
                <img src={altium} className="img-responsive1" width="80%"></img>
              </Col>
            </Row>
          {/* </Container> */}
        </div>
        
        </>
    );


}
export default Sponsors;
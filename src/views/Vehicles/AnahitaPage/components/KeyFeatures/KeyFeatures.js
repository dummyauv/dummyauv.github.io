import React from 'react';
import {useEffect} from 'react';
import "./KeyFeatures.css";
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

const embedstyle= {
    fontSize: "13px",
    fontWeight: "normal",
    margin: "5px",
    color: "#4A4A4A"
};


function Posts() {

    useEffect(() => {
        window.scrollTo(0, 0)
      });
    return (
        <>
            <div className="section landing-section">
            <Container>
                <Row className="d-flex justify-content-center">
                                        
                    <Col md="6" className="text-center">
                    <h2 className="text-center mb-4 heading-main">Key Features</h2>
                        <ul classname>
                            <li><h4 className="desc-ssk1"><b >Wired frame with truss structures</b> for
structural support and reduced mass</h4></li>
                            <li><h4 className="desc-ssk1">Camera, IMU, DVL, Pressure Sensor and Hydrophones on board</h4></li>
                            <li><h4 className="desc-ssk1">Only <b>32 Kgs</b> in weight</h4></li>
                            <li><h4 className="desc-ssk1">Upto <b>4 hours of continuous operation</b> capability</h4></li>
                            <li><h4 className="desc-ssk1">Production cost of Rs. <b >23,00,000</b></h4></li>
                        </ul>
                    </Col>
                    <Col>
                        <h2 className="text-center mb-4 heading-main">ANAHITA on Sketchfab</h2>
                    </Col>
                </Row>
                </Container>
            </div>

        </>
    );


}
export default Posts;
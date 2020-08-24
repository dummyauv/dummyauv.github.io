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
                    <Col>
                        <h2 className="text-center mb-4 small-heading">ANAHITA on Sketchfab</h2>
                    </Col>                    
                    <Col md="6" className="text-center">
                    <h2 className="text-center mb-4 small-heading">Key Features</h2>
                        <ul classname>
                            <li><h4 className="text-left desc-ssk1"><b >Wired frame with truss structures,</b> for
                            structural support and reduced mass</h4></li>
                            <li><h4 className="text-left desc-ssk1">On board Camera, IMU, DVL, Pressure Sensor & Hydrophones </h4></li>
                            <li><h4 className="text-left desc-ssk1">Upto <b>4 hours of continuous operation</b> capability</h4></li>
                            <li><h4 className="text-left desc-ssk1">Production cost : Rs. <b >23,00,000</b></h4></li>
                            <li><h4 className="text-left desc-ssk1">Only <b>32 Kgs</b> in weight</h4></li>
                        </ul>
                    </Col>
                </Row>
                </Container>
            </div>

        </>
    );


}
export default Posts;
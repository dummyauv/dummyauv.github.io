import React from 'react';
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
import labelled from '../../../../../assets/img/varun/varun_labelled.png';
import powerimg from '../../../../../assets/img/varun/varun_power.png';
import soft from '../../../../../assets/img/varun/software_logos.png';
const embedstyle= {
    fontSize: "13px",
    fontWeight: "normal",
    margin: "5px",
    color: "#4A4A4A"
}
function Posts() {
    return (
        <>
            <div className="section landing-section">

                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 text-info"><b>SPECIFICATIONS</b></h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="2"></Col>
                    <Col md="8" className="text-center">
                        <h3><b>MECHANICAL</b></h3>
                        <img src={labelled} className="img-responsive" width="80%"></img>
                        <p>Exploded View of Varun</p>
                        <ul classname>
                            <li><h4>Five degrees of freedom</h4></li>
                            <li><h4>Weigth of 44.5 kg with +1% buoyancy</h4></li>
                            <li><h4>Max coefficient of drag at 1.5 m/s 0.42</h4></li>
                            <li><h4>Motion through 6 brushed-DC Seabotix thrusters</h4></li>
                            <li><h4>Pneumatics actuation for torpedo shooting</h4></li>
                            <li><h4>Fabricated using in-house manufacturing facilities</h4></li>
                        </ul>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="2"></Col>
                    <Col md="8" className="text-center mt-5">
                        <h3><b>ELECTRICAL</b></h3>
                        <img src={powerimg} className="img-responsive" width="80%"></img>
                        <p>Schematic Diagram of Power Distribution Board</p>
                        <ul classname>
                            <li><h4>Powered by four 3S Lithium-Polymer Batteries</h4></li>
                            <li><h4>Custom made power-distribution board with protection and monitoring circuits</h4></li>
                            <li><h4>Two Logitech C290 cameras for 1080p video feed</h4></li>
                            <li><h4>Bluerobotics Depth Sensor for precision depth</h4></li>
                            <li><h4>Intel NUC for high-processing power</h4></li>
                        </ul>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="2"></Col>
                    <Col md="8" className="text-center mt-5">
                        <h3><b>SOFTWARE</b></h3>
                        <img src={soft} className="img-responsive" width="80%"></img>
                        <p>Frameworks in Varun's Code</p>
                        <ul classname>
                            <li><h4>System integration through ROS on Ubuntu 14.04</h4></li>
                            <li><h4>Simulation through Gazebo to optimize testing time</h4></li>
                            <li><h4>Image processing to perform vision-based tasks</h4></li>
                            <li><h4>Navigation through dead-reckoning sensors</h4></li>
                            <li><h4>Intel NUC for high-processing power</h4></li>
                            <li><h4>GUI enabled control for debugging</h4></li>
                            <li><h4>Code available on GitHub with documentation under BSD-3 License Clause</h4></li>
                        </ul>
                    </Col>
                    <Col md="2"></Col>
                    
                </Row>

            </div>

        </>
    );


}
export default Posts;
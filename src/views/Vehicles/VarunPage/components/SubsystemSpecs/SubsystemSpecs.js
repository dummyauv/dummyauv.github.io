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
import "./subs.css"
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

                <Row className=" light-light2">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-ssk92"><b>SPECIFICATIONS</b></h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="2"></Col>
                    <Col md="8" className="text-center">
                        <h3 className="heading-ssk9">Mechanical</h3>
                        <img src={labelled} className="img-responsive white-bg" width="80%"></img>
                        <p className="desc-ssk">Exploded View of Varun</p>
                        <ul classname>
                            <li className="desc-ssk">Five degrees of freedom</li>
                            <li className="desc-ssk">Weigth of 44.5 kg with +1% buoyancy</li>
                            <li className="desc-ssk">Max coefficient of drag at 1.5 m/s 0.42</li>
                            <li className="desc-ssk">Motion through 6 brushed-DC Seabotix thrusters</li>
                            <li className="desc-ssk">Pneumatics actuation for torpedo shooting</li>
                            <li className="desc-ssk">Fabricated using in-house manufacturing facilities</li>
                        </ul>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8" className="text-center mb-5">
                        <h3 className="heading-ssk292">Electrical</h3>
                        <img src={powerimg} className="img-responsive white-bg2" width="80%"></img>
                        <p className="desc-ssk1">Schematic Diagram of Power Distribution Board</p>
                        <ul classname="mb-5">
                            <li className="desc-ssk1">Powered by four 3S Lithium-Polymer Batteries</li>
                            <li className="desc-ssk1">Custom made power-distribution board with protection and monitoring circuits</li>
                            <li className="desc-ssk1">Two Logitech C290 cameras for 1080p video feed</li>
                            <li className="desc-ssk1">Bluerobotics Depth Sensor for precision depth</li>
                            <li className="desc-ssk1">Intel NUC for high-processing power</li>
                        </ul>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row className="light-light2">
                    <Col md="2"></Col>
                    <Col md="8" className="text-center mt-5">
                        <h3 className="heading-ssk9">Software</h3>
                        <img src={soft} className="img-responsive white-bg" width="80%"></img>
                        <p className="desc-ssk">Frameworks in Varun's Code</p>
                        <ul classname>
                            <li className="desc-ssk">System integration through ROS on Ubuntu 14.04</li>
                            <li className="desc-ssk">Simulation through Gazebo to optimize testing time</li>
                            <li className="desc-ssk">Image processing to perform vision-based tasks</li>
                            <li className="desc-ssk">Navigation through dead-reckoning sensors</li>
                            <li className="desc-ssk">Intel NUC for high-processing power</li>
                            <li className="desc-ssk">GUI enabled control for debugging</li>
                            <li className="desc-ssk">Code available on GitHub with documentation under BSD-3 License Clause</li>
                        </ul>
                    </Col>
                    <Col md="2"></Col>
                    
                </Row>

            </div>

        </>
    );


}
export default Posts;
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
import labelled from '../../../../../assets/img/anahita/AnahitaMech.jpg';
import powerimg from '../../../../../assets/img/anahita/AnahitaElec.jpg';
import soft from '../../../../../assets/img/anahita/AnahitaSoft.jpg';
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
            <Container>
                <Row>
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-main"><b>SPECIFICATIONS</b></h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="6" className="text-center">
                        <h3 className="small-heading">Mechanical</h3>
                        <img src={labelled} className="image-anahita"></img>
                        <p className="small-heading-edited">Anahita Vehicle:- Structure</p>
                        <ul classname>
                            <li className="desc-ssk1"><b>Six</b> degrees of freedom.</li>
                            <li className="desc-ssk1">Weigth of <b>32 kg</b> with +1% buoyancy</li>
                            <li className="desc-ssk1">Max coefficient of drag at <b>0.6 m/s 0.12</b></li>
                            <li className="desc-ssk1">Motion through <b>8 T200 (Blue Robotics) thrusters.</b></li>
                            <li className="desc-ssk1">Pneumatics actuation for torpedo shooting</li>
                            <li className="desc-ssk1">Fabricated using advanced in-house manufacturing facilities like <b>Abrasive Water-jet Machining</b></li>
                        </ul>
                    </Col>
                    <Col md="6" className="text-center mb-5">
                        <h3 className="small-heading">Electrical</h3>
                        <img src={powerimg} className="image-anahita elec-edit"></img>
                        <p className="small-heading-edited">COMPLETE ELECTRICAL FLOWCHART</p>
                        <ul classname="mb-5">
                            <li className="desc-ssk1">Powered by Two <b>25v Li-Po batteries</b></li>
                            <li className="desc-ssk1"><b>Intel i7 NUC</b> for fast processing</li>
                            <li className="desc-ssk1"><b>Two IDS UI-5260SE-C-HQ Rev.4</b> cameras for 1080p video feed</li>
                            <li className="desc-ssk1"><b>Teledyne Pathfinder DVL</b> for velocity measurements.</li>
                            <li className="desc-ssk1"><b>Custom PCB</b> for ESCs and Micro-controller with Compact design</li>
                        </ul>
                    </Col>
                    <Col md="3"></Col>
                    <Col md="6" className="text-center mt-5 ml-auto mr-auto">
                        <h3 className="small-heading">Software</h3>
                        <img src={soft} className="image-anahita"></img>
                        <p className="small-heading-edited">SOFTWARE DATA AND CONTROL FLOW</p>
                        <ul classname>
                            <li className="desc-ssk1">System integration through ROS on <b>Ubuntu 18.04</b></li>
                            <li className="desc-ssk1">Simulation through <b>Gazebo and UWSim</b> to optimize testing time</li>
                            <li className="desc-ssk1">Making use of a <b>faster and simpler simulator</b> designed specifically for underwater vehicles</li>
                            <li className="desc-ssk1">New stack with <b>improved documentation, continuous deployment and optimised structure</b></li>
                            <li className="desc-ssk1">Experimenting with different types of control systems - <b>model based & model free</b></li>
                            <li className="desc-ssk1"><b>Code available on GitHub</b> with documentation under BSD-3 License Clause</li>
                        </ul>
                    </Col>
                    <Col md="3"></Col>                    
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;
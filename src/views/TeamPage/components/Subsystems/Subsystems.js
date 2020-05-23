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
import niotwin from '../../../../assets/img/niotwinner.jpeg';
import desbot from '../../../../assets/img/designbot.png';
import atwork from '../../../../assets/img/atwork.png';


function Posts() {
    return (
        <>
            <div className="section landing-section">

                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 text-info">Subsystems</h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="6" className="text-center">
                        <h3 className="">Software</h3>
                        <i class="nc-icon nc-laptop text-info" style={{ fontSize: '200px' }}></i>
                        <p>Remove this para and add a better laptop icon </p>
                        <p>Develop the algorithms controlling the robot - working on Computer Vision, Localisation, and Control Systems</p>
                    </Col>
                    <Col md="6" className="text-center">
                        <h3 className="">Electrical</h3>
                        <i class="nc-icon nc-laptop text-info" style={{ fontSize: '200px' }}></i>
                        <p>Remove this para and add thunder-bolt or bulb icon</p>
                        <p>Build the electrical systems powering our AUV - working on Battery Management, Acoustic Localisation, and Circuit Designing</p>
                    </Col>
                    <Col md="6" className="text-center">
                        <h3 className=" mb-2">Mechanical</h3>
                        <img
                            alt="..."
                            src={require("assets/img/gear.jpg")}
                            height="200px"
                        />
                        <p>Design the entire vehicle and accessories - working on Fluid Dynamics, Actuator controls, and Pneumatics</p>
                    </Col>
                    <Col md="6" className="text-center">
                        <h3 className=" mb-2">Business</h3>
                        <img
                            alt="..."
                            src={require("assets/img/brief.jpg")}
                            height="200px"
                        />

                        <p>Manage the funding and outreach activities of the team by procuring sponsors and meeting people.</p>
                    </Col>
                </Row>

            </div>

        </>
    );


}
export default Posts;
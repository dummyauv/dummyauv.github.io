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
import combinedimage from '../../../../assets/img/competitions.jpg'
import resimage from '../../../../assets/img/research.jpg'
import csrimage from '../../../../assets/img/projects.jpg'
import trainimage from '../../../../assets/img/training.png'
import "./Participation.css"

function Posts() {
    return (
        <>
            <div className="section landing-section">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">                        </Col>
                        <Col md="2"></Col>
                        <Col xl="6" className="text-center">
                            <h2 className="heading-main">Student Competitions</h2>
                            <img src={combinedimage} className=" image-anahita" ></img>
                            <p className="desc-ssk1">We aim to participate in National and International student-level AUV
                            compeititions - Robosub (organised by AUVSI), Singapore AUV Challenge, and the
                                    NIOT-Student AUV Challenge.</p> 
                        </Col>
                        <Col xl="6" className="text-center">
                            <h2 className="heading-main">Research Potential</h2>
                            <img src={resimage} className=" image-anahita" ></img>
                            <p className="desc-ssk1">Contribute to the development in the fields of marine technology, and
                                    implement cutting-edge research ideas to our vehicles</p>
                        </Col>
                        <Col xl="6" className="text-center">
                            <h2 className="heading-main">Training</h2>
                            <img src={trainimage} className=" image-anahita" ></img>
                            <p className="desc-ssk1">Team AUV-IITK provides training to all its new recruits in the various
                            field of Robotics. It is because of this training that many of the past members of
                            team AUV-IITK are pursuing their careers in robotics and doing exceptionally well
                                    owing to their strong foundation.</p>
                        </Col>
                        <Col xl="6" className="text-center">
                            <h2 className="heading-main">Social Projects</h2>
                            <img src={csrimage} className=" image-anahita"></img>
                            <p className="desc-ssk1">Apart from Robotics competitions, team AUV-IITK also actively
                            participates various hackathon and undertakes projects owing its responsibility to
                                    the society.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );


}
export default Posts;
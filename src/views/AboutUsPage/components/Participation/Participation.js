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
import combinedimage from '../../../../assets/img/combined.jpg'
import resimage from '../../../../assets/img/research.jpeg'
import csrimage from '../../../../assets/img/csr.png'
import trainimage from '../../../../assets/img/training.jpg'


function Posts() {
    return (
        <>
            <div className="section landing-section">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">                        </Col>
                        <Col md="2"></Col>
                        <Col md="6" className="text-center">
                            <h2>Student Competitions</h2>
                            <img src={combinedimage} className="img img-responsive mt-4 mb-5" width="80%"></img>
                            <p>We aim to participate in National and International student-level AUV
                            compeititions - Robosub (organised by AUVSI), Singapore AUV Challenge, and the
                                    NIOT-Student AUV Challenge.</p>
                        </Col>
                        <Col md="6" className="text-center">
                            <h2>Research Potential</h2>
                            <img src={resimage} className="img img-responsive mt-2 mb-3" width="60%"></img>
                            <p>Contribute to the development in the fields of marine technology, and
                                    implement cutting-edge research ideas to our vehicles</p>
                        </Col>
                        <Col md="6" className="text-center">
                            <h2>Training</h2>
                            <img src={trainimage} className="img img-responsive mt-4 mb-2" width="80%"></img>
                            <p>Team AUV-IITK provides training to all its new recruits in the various
                            field of Robotics. It is because of this training that many of the past members of
                            team AUV-IITK are pursuing their careers in robotics and doing exceptionally well
                                    owing to their strong foundation.</p>
                        </Col>
                        <Col md="6" className="text-center">
                            <h2>Social Projects</h2>
                            <img src={csrimage} className="img img-responsive mt-4 mb-2" width="45%"></img>
                            <p>Apart from Robotics competitions, team AUV-IITK also actively
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
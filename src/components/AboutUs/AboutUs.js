import React from 'react';
import anahitapic from "assets/img/anahita-1.jpg"
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

function AboutUs() {
    return (
        <>
            <div className="section text-center">
                <Container>
                    <Row>
                        <h2 className="title ml-auto mr-auto" >About Us</h2>
                    </Row>
                    <Row>
                        <Col className="" md="6">
                            <h4>We are Robotics Enthusiasts!</h4>
                            <p className="description">
                                We are a team of undergraduate students researching in the field of marine robotics. The team started off in 2014, as the brainchild of a group of enthusiastic engineers. From a team with just an idea to create an impact on underwater robotics, we have grown into a family of over 40 members, through consistent dedication and hard work.
              </p>
                            <p className="description">
                                We have successfully designed and manufactured two robust autonomous underwater vehicles (AUV), namely, Varun and Anahita. These machines are capable of navigating in unknown environments, performing acoustic localization, and identifying objects using computer vision.                </p>
                            <br />
                            <Button
                                className="btn-round"
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                More
              </Button>
                        </Col>
                        <Col>
                            <img src={anahitapic} width="90%" className="mt-4 img-rounded"></img>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <h3>2</h3>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Vehicles</h4>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                  </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <h3>30</h3>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Team Members</h4>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                  </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <h3>30+</h3>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Projects </h4>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                  </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <h3>400+</h3>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">NightOuts</h4>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                  </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

    
}
export default AboutUs;
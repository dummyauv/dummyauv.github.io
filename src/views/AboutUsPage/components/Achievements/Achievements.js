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
            <div className="section section-dark landing-section">
                
                    <Row className="d-flex justify-content-center">
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">                        </Col>
                        <Col md="2"></Col>
                        <Col md="4" className="text-center">
                            <h3 className="text-info">Undergraduate Roboticists</h3>
                            <img src={atwork} className="img img-responsive img-rounded mt-4 mb-5" width="80%"></img>
                            <p>Selected after a comprehensive recruitment, sharing our love for robotics, we build low-cost robust AUV systems.</p>
                        </Col>
                        <Col md="4" className="text-center">
                            <h3 className="text-info">National Competition Winner</h3>
                            <img src={niotwin} className="img img-responsive img-rounded mt-4 mb-3" width="80%"></img>
                            <p>Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the National Insitute Of Ocean Technology, Chennai.</p>
                        </Col>
                        <Col md="4" className="text-center">
                            <h3 className="text-info mb-2">Ingenious Design & Creativity</h3>
                            <img src={desbot} className="img img-responsive img-rounded mt-3 mb-5" width="80%"></img>
                            <p>The designing process behind our latest vehicle, Anahita, has been appreciated at the international level.</p>
                        </Col>
                    </Row>
                
            </div>

        </>
    );


}
export default Posts;
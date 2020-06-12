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
import "./Achievements.css"

function Posts() {
    return (
        <>
            <div className="section landing-section ">
                
                    <Row className="d-flex justify-content-center">
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">                        </Col>
                        <Col md="2"></Col>
                        <Col xl="12" className="text-center">
                            <h3 className="heading-ssk15">Undergraduate Roboticists</h3>
                            <img src={atwork} className="img-sska1"></img>
                            <p className="desc-ssk24">Selected after a comprehensive recruitment, sharing our love for robotics, we build low-cost robust AUV systems.</p>
                        </Col>
                        <hr></hr>
                        <Col xl="12" className="text-center">
                            <h3 className="heading-ssk15">National Competition Winner</h3>
                            <img src={niotwin} className="img-sska2"></img>
                            <p className="desc-ssk24">Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the National Insitute Of Ocean Technology, Chennai.</p>
                        </Col>
                        <hr></hr>
                        <Col xl="12" className="text-center">
                            <h3 className="heading-ssk15">Ingenious Design & Creativity</h3>
                            <img src={desbot} className="img-sska3"></img>
                            <p className="desc-ssk24">The designing process behind our latest vehicle, Anahita, has been appreciated at the international level.</p>
                        </Col>
                    </Row>
                
            </div>

        </>
    );


}
export default Posts;
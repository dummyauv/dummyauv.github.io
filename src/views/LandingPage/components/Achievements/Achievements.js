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
import niotwin from '../../../../assets/img/niotwinner.png';
import desbot from '../../../../assets/img/anahita_design.jpg';
import atwork from '../../../../assets/img/newreplaced.jpg';
import "./Achievements.css"

function Posts() {
    return (
        <>
            <div className="section landing-section ">
                   <Container>
                       
                    <Row className="d-flex justify-content-center">
                        <Col md="2"></Col>
                        <Col className="heading-main" md="8" style={{textAlign:'center'}}>          Achievements             </Col>
                        <Col md="2"></Col>
                        <Col xl="4" className="text-center">
                            <h3 className="small-heading">Achievement 1</h3>
                            <img src={atwork} className="image-anahita"></img>
                            <p className="desc-ssk1">Selected after a comprehensive recruitment, sharing our love for robotics, we build low-cost robust AUV systems.</p>
                        </Col>
                        <Col xl="4" className="text-center">
                            <h3 className="small-heading">Achievement 2</h3>
                            <img src={niotwin} className="image-anahita"></img>
                            <p className="desc-ssk1">Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the National Insitute Of Ocean Technology, Chennai.</p>
                        </Col>
                        <Col xl="4" className="text-center">
                            <h3 className="small-heading">Achievement 3</h3>
                            <img src={desbot} className="image-anahita"></img>
                            <p className="desc-ssk1 ">The designing process behind our latest vehicle, Anahita, has been appreciated at the international level.</p>
                        </Col>
                    </Row>

                    </Container>       
            </div>

        </>
    );


}
export default Posts;
import React from 'react';
import {
    Container,
    Row,
    Col
} from "reactstrap";
import paper from '../../../../assets/img/Achievements/mech-paper.jpg';
import robosub from '../../../../assets/img/Achievements/robosub.jpg';
import niot from '../../../../assets/img/Achievements/niot.png';
import "./Achievements.css"

function Posts() {
    return (
        <>
            <div className="section landing-section ">
                   <Container>
                       
                    <Row className="d-flex justify-content-center">  
                        <Col md="2"></Col>
                        <Col className="heading-main mb-0" md="8" style={{textAlign:'center'}}>OUR ACHIEVEMENTS</Col>
                        <Col md="2"></Col>
                        <Col xl="6" lg="6"className="text-center u-margin-top-negative">
                            <h3 className="small-heading"></h3>
                            <img src={paper} className="w-100 image-anahita mb-0 responsive-achievement-image3 mobile-margin-top"></img>
                            <p className="desc-ssk1" >Published a paper at IEEE OES Symposium 2018,  on design and development of an open frame AUV: Anahita (Our 2nd Gen Vehicle)</p>
                        </Col>
                        <Col xl="6" lg="6" className="text-center u-margin-top-negative">
                            <h3 className="small-heading"></h3>
                            <img src={niot} className="border border-dark w-100 image-anahita responsive-achievement-image3 responsive-achievement-image mobile-margin-top"></img>
                            <p className="desc-ssk1">Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the National Insitute Of Ocean Technology, Chennai.</p>
                            <h3 className="small-heading"></h3>
                            <img src={robosub} className="border border-dark w-100 image-anahita responsive-achievement-image3 responsive-achievement-image mobile-margin-top responsive-achievement-image2 mb-5 mt-5"></img>
                            <p className="desc-ssk1">Qualified and Participated in Robosub-2019 held at TRANSDEC Anechoic pool in San Diego, California.</p>
                        </Col>
                    </Row>

                    </Container>       
            </div>
 
        </>
    );


}
export default Posts;
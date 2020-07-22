import React from 'react';
import "./SketchFabEmbed.css"
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

const embedstyle = {
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
                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-main">VARUN 3D Model</h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="12" className="text-center">
                        <div className="">
                            <iframe title="A 3D model" className="yt-video" src="https://sketchfab.com/models/6e1274e10d9e4b6a922a5ed0baf9445f/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            <p style={embedstyle}>
                                {/* <a href="https://sketchfab.com/3d-models/varun-6e1274e10d9e4b6a922a5ed0baf9445f?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">VARUN</a>
        by <a href="https://sketchfab.com/karthic?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">AUVIITK</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a> */}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;
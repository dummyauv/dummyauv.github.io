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

                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-ssk29">ANAHITA on Sketchfab</h2>
                    </Col>
                    <Col md="2"></Col>
                    
                    <h2>Coming soon..</h2>
                </Row>

            </div>

        </>
    );


}
export default Posts;
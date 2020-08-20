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
import "./Event.css"
function Event(props) {
    return (
        <>
            <div className="section landing-section ">
                   <Container className="red-back">
                       
                        <Row className="event-container">
                            <Col md= '6' className="event-image-container" >
                                <img src={require("assets/img/anahita-1.jpg")} className="event-image"></img>
                            </Col>
                            <Col md='6' className="headings-container"> 
                                <h1 className="heading-main primary-heading-event">{props.event.heading}</h1>
                                <h2 className="small-heading-edited secondary-heading-event">SUBHEADING FOR EVENT 1</h2>
                            </Col>
                        </Row>
                        <Row>
                            <p className="desc-ssk1">
                                {props.event.para1}
                            </p>
                            <p className="desc-ssk1">
                                {props.event.para2}
                            </p>
                        </Row>

                    </Container>       
            </div>

        </>
    );


}
export default Event;
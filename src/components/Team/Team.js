import React from 'react';
import teamphoto from "assets/img/team-photo.jpg"

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

function Team() {
    return (
        <>
            <div className="section landing-section">
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center mb-4">Our Team</h2>
                            <p className="description text-center">Over the past years, the team has witnessed a close collaboration between students from various departments coming and sharing ideas; creating a small yet strong network of people who are eagerly looking for a low-cost solution to large-scale problems.</p>
                            <p className="description text-center">Working long hours and brainstorming some complex problems leads to a very special bonding between the members of the teams. This leads to a lot of nicknames and some extremely fun gaming nights.</p>
                            <img src={teamphoto} className="img-rounded img-responsive img-thumbnail mt-0"></img>
                        </Col>
                        <Col md="2"></Col>
                        <button class="btn btn-primary ml-auto mr-auto"> More</button>
                    </Row>
                </Container>
            </div>

        </>
    );


}
export default Team;
import React from 'react';
import teamphoto from "assets/img/team-photo.jpg"
import { Link } from 'react-router-dom';
import {useEffect} from "react";

import "./Team.css"
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
    useEffect(() => {
        window.scrollTo(0, 0)
      });
    return (
        <>
            <div className="section landing-section light-light">
                <Container>
                    <Row>
                        <Col md="1"></Col>
                        <Col className="ml-auto mr-auto mb-4" md="10">
                            <h2 className="text-center mb-4 heading-ssk">Our Team</h2>
                            <p className="description text-center mb-2 desc-ssk">Over the past years, the team has witnessed a close collaboration between students from various departments coming and sharing ideas; creating a small yet strong network of people who are eagerly looking for a low-cost solution to large-scale problems.</p>
                            <p className="description text-center mb-5 desc-ssk">Working long hours and brainstorming some complex problems leads to a very special bonding between the members of the teams. This leads to a lot of nicknames and some extremely fun gaming nights.</p>
                            <img src={teamphoto} className="img-rounded img-responsive"></img>
                        </Col>
                        <Col md="1"></Col>
                        <Link to='/team' className="button-ssk mt-3 ml-auto mr-auto">
                        More
                        </Link>
                    </Row>
                </Container>
            </div>

        </>
    );


}
export default Team;
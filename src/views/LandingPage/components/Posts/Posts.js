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

function Posts() {
    return (
        <>
        <div className="section landing-section">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col md="2"></Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center mb-4">Posts</h2>
              </Col>
              <Col md="2"></Col>
              <Col md="4" className="text-center">
                <h2>Post 1</h2>
                <p>AUV-IITK is a multidisciplinary team of IITK students involved in designing, manufacturing, and testing of a series of Autonomous Underwater Vehicles (AUVs), working towards providing a research platform for geoscientific research while preparing to compete in prestigious competitions such as NIOT, SAUVC, and RoboSub.</p>
              </Col>
              <Col md="4" className="text-center">
                <h2>Post 2</h2>
                <p>AUV-IITK is a multidisciplinary team of IITK students involved in designing, manufacturing, and testing of a series of Autonomous Underwater Vehicles (AUVs), working towards providing a research platform for geoscientific research while preparing to compete in prestigious competitions such as NIOT, SAUVC, and RoboSub.</p>

              </Col>
              <Col md="4" className="text-center">
                <h2>Post 3</h2>
                <p>AUV-IITK is a multidisciplinary team of IITK students involved in designing, manufacturing, and testing of a series of Autonomous Underwater Vehicles (AUVs), working towards providing a research platform for geoscientific research while preparing to compete in prestigious competitions such as NIOT, SAUVC, and RoboSub.</p>

              </Col>
              <button class="btn btn-primary ml-auto mr-auto mt-5"> More</button>
            </Row>
          </Container>
        </div>

        </>
    );


}
export default Posts;
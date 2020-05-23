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

function TalkAbout() {
  return (
    <>
      <div className="section section-dark text-center">
        <Container>
          <h2 className="title">Subsystem Heads</h2>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/ayush.jpg")}
                      />

                      <CardTitle tag="h4">Ayush Gupta</CardTitle>
                      <h6 className="card-category">Software Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/inshu.jpg")}
                      />
                      <CardTitle tag="h4">Inshu Namdev</CardTitle>
                      <h6 className="card-category">Electrical Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/priank.jpeg")}
                      />
                      <CardTitle tag="h4">Priank Prasad</CardTitle>
                      <h6 className="card-category">Mechanical Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );


}
export default TalkAbout;
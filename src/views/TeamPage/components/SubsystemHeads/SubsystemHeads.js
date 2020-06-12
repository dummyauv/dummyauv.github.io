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
import "./SubsystemHeads.css"
function TalkAbout() {
  return (
    <>
      <div className="section light-dark-ssk5 text-center">
        {/* <Container> */}
        <div className="padding-small">
          <h2 className="title heading-ssk232">Faculty Advisor</h2>
          <Col xl="4 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/mangal.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3 pt-3">Prof. Mangal Kothari</CardTitle>
                      <h6 className="card-category">Aerospace Department, IITK</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <h1 className="title heading-ssk232">Senior Members</h1>
          <Row>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/ayush.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Ayush Gupta</CardTitle>
                      <h6 className="card-category">Y17, Software Subsystem</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/inshu.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Inshu Namdev</CardTitle>
                      <h6 className="card-category">Y17, Electrical Subsystem</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/p.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Priank Prasad</CardTitle>
                      <h6 className="card-category">Y17, Mechanical Subsystem</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>

          <h1 className="title heading-ssk232">Subsystem Heads</h1>
          <Row>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/sajal.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Sajal Goyal</CardTitle>
                      <h6 className="card-category"> Software Subsystem Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/devendra.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Devendra Kharolia</CardTitle>
                      <h6 className="card-category"> Electrical Subsystem Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/jaskeerat.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Jaskeerat Singh</CardTitle>
                      <h6 className="card-category">Mechanical Subsystem co-Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/kamlesh.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Kamlesh Kalsariya</CardTitle>
                      <h6 className="card-category">Mechanical Subsystem co-Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>

          <h1 className="title heading-ssk232">Software Subsystem</h1>
          <Row>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody className="margin-bottom">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/rishab.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Rishabh Doge</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/shivanshu.png")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Shivanshu Tyagi</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/shubham.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Shubham Korde</CardTitle>
                      <h6 className="card-category"> </h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/prakhar.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Prakhar Maheshwari</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/aryansh.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Aryansh Bansal</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/Krishna.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Krishna Agrawal</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/atharv.jpg")}
                        className="image-prof"
                      />
                      
                      <CardTitle tag="h4" className="text-info13 pt-3">Atharv Singh Patlan</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>

          <h1 className="title heading-ssk232">Electrical Subsystem</h1>
          <Row>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/Utkarshjha.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Utkarsh Jha</CardTitle>
                      <h6 className="card-category">  </h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/neelabh.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Neelabh Singhania</CardTitle>
                      <h6 className="card-category"> </h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/Munish.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Munish Gupta</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/sunny.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Sunny Bhagat</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/debaditya.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Debaditya Bhattacharya</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <h1 className="title heading-ssk232">Mechanical Subsystem</h1>
          <Row>
          <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/shashank.jpeg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Shashank Katiyar</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/prateek.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Prateek Pandey</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/tanishq.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Tanishq Chourishi</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/team-1.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="text-info13 pt-3">Jayant</CardTitle>
                      <h6 className="card-category"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>
        </div>
        {/* </Container> */}
      </div>

    </>
  );


}
export default TalkAbout;
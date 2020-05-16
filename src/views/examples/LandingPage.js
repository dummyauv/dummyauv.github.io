/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import anahitapic from "assets/img/anahita-1.jpg"
import teamphoto from "assets/img/team-photo.jpg"
import solidworks from "assets/img/sponsors/solidworks.png"
import mathworks from "assets/img/sponsors/mathworks.png"
import altium from "assets/img/sponsors/altium.png"
import ansys from "assets/img/sponsors/ansys.png"
import dord from "assets/img/sponsors/dord-iitk.png"
import sparton from "assets/img/sponsors/sparton.png"
import xsens from "assets/img/sponsors/xsens.png"
import ids from "assets/img/sponsors/ids.png"
import varun from "assets/img/varun.jpg"
import anahita from "assets/img/anahita-2.jpg"


function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const mainStyle= {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader /> 
      <div className="main" style={mainStyle}>
        <div className="section text-center">
          <Container>
            <Row>
              <h2 className="title ml-auto mr-auto" >About Us</h2>
            </Row>
            <Row>
              <Col className="" md="6">
                <h4>We are Robotics Enthusiasts!</h4>
                <p className="description">
                We are a team of undergraduate students researching in the field of marine robotics. The team started off in 2014, as the brainchild of a group of enthusiastic engineers. From a team with just an idea to create an impact on underwater robotics, we have grown into a family of over 40 members, through consistent dedication and hard work.
                </p>
                <p className="description">
                We have successfully designed and manufactured two robust autonomous underwater vehicles (AUV), namely, Varun and Anahita. These machines are capable of navigating in unknown environments, performing acoustic localization, and identifying objects using computer vision.                </p>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  More
                </Button>
              </Col>
              <Col>
                <img src={anahitapic} width="90%" className="mt-4 img-rounded"></img>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <h3>2</h3>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Vehicles</h4>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <h3>30</h3>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Team Members</h4>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <h3>30+</h3>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Projects </h4>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <h3>400+</h3>
                  </div>
                  <div className="description">
                    <h4 className="info-title">NightOuts</h4>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
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
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
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
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
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
        </div> */}
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
        
        <div className="section landing-section">
          <Container>
            <Row>
              <Col md="2"></Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center mb-4">Our Sponsors</h2>                
              </Col>
              <Col md="2"></Col>
              <Col md="3">
                <img src={solidworks} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={mathworks} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={ids} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={ansys} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={xsens} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={sparton} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={dord} className="img-responsive" width="100%"></img>
              </Col>
              <Col md="3">
                <img src={altium} className="img-responsive" width="100%"></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col md="2"></Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center mb-4">Vehicles</h2>                
              </Col>
              <Col md="2"></Col>
              <Col md="6" className="text-center">
                <h2 className="text-info">Varun</h2>
                <img src={varun} className="img-responsive img-rounded img-thumbnail m-3" width="60%"></img>
                <p>Varun was the first Autonomous Underwater Vehicle developed by our team. With a modular design for easy assembly and installation, Varun could be used as a staging vehicle for carrying out experiments, autonomous underwater inspection and data collection. It has upto four hours of continuous operation capacity.</p>
                <p>Bot Varun was the first runner up in NIOT-SAVe 2016.</p>
              </Col>
              <Col md="6" className="text-center">
                <h2 className="text-info">Anahita</h2>
                <img src={anahita} className="img-responsive img-rounded img-thumbnail m-4 mb-5" width="60%"></img>
                <p>Anahita is an improvement over AUV-IITK’s previous vehicle Varun in terms of its modularity, robustness, ease of manufacturing and assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the same time, not compromising on the maneuverability</p>
                <p>Anahita participated in RoboSub-2019, San Diego and was the first runner up at NIOT-SAVe, 2019.</p>
              </Col>
              <button class="btn btn-primary ml-auto mr-auto mt-5"> More</button>
            </Row>
          </Container>
        </div>
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
        
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;

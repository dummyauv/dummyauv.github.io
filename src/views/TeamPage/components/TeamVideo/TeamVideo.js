import React from "react";
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
  Col,
} from "reactstrap";

function TalkAbout() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <h2 className="title">Team Video</h2>
          <iframe
            width="956"
            height="538"
            src="https://www.youtube.com/embed/2kunTvZ_zLI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Container>
      </div>
    </>
  );
}
export default TalkAbout;

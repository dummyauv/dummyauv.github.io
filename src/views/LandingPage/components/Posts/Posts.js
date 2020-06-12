import React from 'react';
import {Link} from 'react-router-dom';
import "./Posts.css"
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
        <div className="section landing-section ">
          <div className="container-ssk">
            <Row className="">
              <Col md="2"></Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center mb-4 heading-ssk2">Posts</h2>
                <hr></hr>
              </Col>
              <Col md="2"></Col>
              <Col xl="6" className="text-center ">
                <div className="post-ssk">
                <h2 className="robo-heading4">Post 1</h2>
                <p className="para-ssk2">Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!!Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!!</p>            
                <Link to='/about-us' className="button-ssk">
              More
            </Link>
                </div>
              </Col>
              <Col xl="6" className="text-center ">
                <div className="post-ssk">
                <h2 className="robo-heading4">Post 1</h2>
                <p className="para-ssk2">Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!!Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!!</p>            
                <Link to='/about-us' className="button-ssk">
              More
            </Link>
                </div>
              </Col>
              <Col xl="6" className="text-center ">
                <div className="post-ssk">
                <h2 className="robo-heading4">Post 1</h2>
                <p className="para-ssk2">Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!!Posts hai hi nahi. Koi likhdo please!!! Posts hai hi nahi. Koi likhdo please!!!</p>            
                <Link to='/about-us' className="button-ssk">
              More
            </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        </>
    );


}
export default Posts;
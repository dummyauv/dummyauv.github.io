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
import "./Blog.css"
function Blog(props) {
    return (
        <>
            <div className="section landing-section ">
                   <Container className="red-back">
                       
                        <Row className="blog-container">
                            <Col md= '4' className="image-container" >
                                <img src={require("assets/img/training.png")} className="blog-image"></img>
                            </Col>
                            <Col md='8' className="headings-container"> 
                                <h2 className="small-heading-edited blog-date">{props.blog.date}</h2>
                                <h1 className=" primary-heading-blog">{props.blog.heading}</h1>
                                <p className="desc-ssk1">
                                    {props.blog.para1}
                                </p>
                                <div className="btn-blue">Read More</div>
                            </Col>
                            
                        </Row>

                    </Container>       
            </div>

        </>
    );


}
export default Blog;
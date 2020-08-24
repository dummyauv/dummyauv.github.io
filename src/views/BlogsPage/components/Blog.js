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
import { Link } from 'react-router-dom';
function Blog(props) {
    var topath= "/blogs/"+props.blog[1].id;
    console.log("Props recieved in blog are");
    console.log(props.blog[1]);
    return (
        <>
            <div className="section landing-section ">
                   <Container className="red-back">
                       
                        <Row className="blog-container">
                            <Col md= '4' className="image-container" >
                                <img src={props.blog[1].image} className="blog-image"></img>
                            </Col>
                            <Col md='8' className="headings-container"> 
                                <h2 className="small-heading-edited blog-date">{props.blog[1].date}</h2>
                                <h1 className=" primary-heading-blog">{props.blog[1].heading}</h1>
                                <p className="desc-ssk1" style={{textAlign:"left"}}>
                                    {props.blog[1].para1}
                                </p>
                                <Link to={topath}>
                                <div className="btn-blue">Read More</div>
                                </Link>
                                
                            </Col>
                             
                        </Row>

                    </Container>       
            </div>

        </>
    );


}
export default Blog;
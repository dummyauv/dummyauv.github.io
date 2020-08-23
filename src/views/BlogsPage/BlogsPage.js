import React, {Component} from "react";
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
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import axios from "../../axios-blogs";

import Blog from './components/Blog';
class BlogsPage extends Component {

  state= {
    blogs: null,
    blogsArray:[]
  }

  componentDidMount(){
    axios.get('https://auv-iitk.firebaseio.com/blogs.json')
          .then(response => {
              this.setState({blogs: response.data});
              // console.log("blogs recieved");
              const newArray= Object.entries(this.state.blogs)
              this.setState({blogsArray: newArray});
              console.log(this.state.blogs);
          })
        }

render(){

  const blogList = this.state.blogsArray.map(recievedBlog => {
    return(
      <Blog blog={recievedBlog} key={recievedBlog.id}></Blog>
    )
  })
  return (
    <>
    <ExamplesNavbar activePage="/blogs"/>
    <div className="section text-center ">
        <Container className="reduce-margin">
          
          <Row>
            <h2 className="heading-main">Blogs</h2>          
          </Row>
        </Container>
    </div>
      <div className="main">
          {/* <Blog blog={blog1}></Blog> */}
          {/* <Blog blog={blog2}></Blog>
          <Blog blog={blog3}></Blog> */}
          {blogList}  
      </div>  
    </>
  );
        }
}

export default BlogsPage;
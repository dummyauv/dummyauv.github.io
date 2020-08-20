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

import Blog from './components/Blog';
function BlogsPage() {
    document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const blog1={
          heading: 'How to get the most of your London Trip',
          subheading: 'SUBHEADING FOR EVENT 1',
          para1: 'Occaecat consectetur magna adipisicing ad ut. Sunt incididunt mollit amet veniam eiusmod esse magna pariatur aute eu laboris culpa dolor sunt. Et sunt labore ea excepteur consectetur ipsum. Non excepteur excepteur nisi ipsum do minim id cillum fugiat. Ad eu sit est pariatur.',
          para2: 'Reprehenderit elit elit non incididunt qui cillum irure non reprehenderit id mollit anim. Sunt ea occaecat incididunt ipsum mollit cupidatat esse proident anim. Sint in ea consequat sunt sint. Sit ad incididunt ex officia cillum nulla eu. Est commodo in magna non magna magna. Ex aliquip eu voluptate aute eu cillum cupidatat.',
          date:'May 15, 2019'
    }
    const blog2={
        heading: 'This will serve as the heading for blog 2',
        subheading: 'SUBHEADING FOR EVENT 1',
        para1: 'Occaecat consectetur magna adipisicing ad ut. Sunt incididunt mollit amet veniam eiusmod esse magna pariatur aute eu laboris culpa dolor sunt. Et sunt labore ea excepteur consectetur ipsum. Non excepteur excepteur nisi ipsum do minim id cillum fugiat. Ad eu sit est pariatur.',
        para2: 'Reprehenderit elit elit non incididunt qui cillum irure non reprehenderit id mollit anim. Sunt ea occaecat incididunt ipsum mollit cupidatat esse proident anim. Sint in ea consequat sunt sint. Sit ad incididunt ex officia cillum nulla eu. Est commodo in magna non magna magna. Ex aliquip eu voluptate aute eu cillum cupidatat.',
        date:'August 15, 2019'
  }

  const blog3={
    heading: 'How to get the most of your London Trip',
    subheading: 'SUBHEADING FOR EVENT 1',
    para1: 'Occaecat consectetur magna adipisicing ad ut. Sunt incididunt mollit amet veniam eiusmod esse magna pariatur aute eu laboris culpa dolor sunt. Et sunt labore ea excepteur consectetur ipsum. Non excepteur excepteur nisi ipsum do minim id cillum fugiat. Ad eu sit est pariatur.',
    para2: 'Reprehenderit elit elit non incididunt qui cillum irure non reprehenderit id mollit anim. Sunt ea occaecat incididunt ipsum mollit cupidatat esse proident anim. Sint in ea consequat sunt sint. Sit ad incididunt ex officia cillum nulla eu. Est commodo in magna non magna magna. Ex aliquip eu voluptate aute eu cillum cupidatat.',
    date:'May 15, 2019'
}
  return (
    <>
      <div className="main">
          <Blog blog={blog1}></Blog>
          <Blog blog={blog2}></Blog>
          <Blog blog={blog3}></Blog>
        
      </div>  
    </>
  );
}

export default BlogsPage;
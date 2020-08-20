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

import Event from "./components/Event"
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const event1={
          heading: 'Event 1 heading',
          subheading: 'SUBHEADING FOR EVENT 1',
          para1: 'Occaecat consectetur magna adipisicing ad ut. Sunt incididunt mollit amet veniam eiusmod esse magna pariatur aute eu laboris culpa dolor sunt. Et sunt labore ea excepteur consectetur ipsum. Non excepteur excepteur nisi ipsum do minim id cillum fugiat. Ad eu sit est pariatur.',
          para2: 'Reprehenderit elit elit non incididunt qui cillum irure non reprehenderit id mollit anim. Sunt ea occaecat incididunt ipsum mollit cupidatat esse proident anim. Sint in ea consequat sunt sint. Sit ad incididunt ex officia cillum nulla eu. Est commodo in magna non magna magna. Ex aliquip eu voluptate aute eu cillum cupidatat.',
          imageurl: '../../../assets/img/anahita-1.jpg'

        }
  const event2={
        heading: 'Event 2 heading',
        subheading: 'SUBHEADING FOR EVENT 2',
        para1: 'Occaecat consectetur magna adipisicing ad ut. Sunt incididunt mollit amet veniam eiusmod esse magna pariatur aute eu laboris culpa dolor sunt. Et sunt labore ea excepteur consectetur ipsum. Non excepteur excepteur nisi ipsum do minim id cillum fugiat. Ad eu sit est pariatur.',
        para2: 'Reprehenderit elit elit non incididunt qui cillum irure non reprehenderit id mollit anim. Sunt ea occaecat incididunt ipsum mollit cupidatat esse proident anim. Sint in ea consequat sunt sint. Sit ad incididunt ex officia cillum nulla eu. Est commodo in magna non magna magna. Ex aliquip eu voluptate aute eu cillum cupidatat.'
    }
    const event3={
        heading: 'Event 3 heading',
        subheading: 'SUBHEADING FOR EVENT 3',
        para1: 'Occaecat consectetur magna adipisicing ad ut. Sunt incididunt mollit amet veniam eiusmod esse magna pariatur aute eu laboris culpa dolor sunt. Et sunt labore ea excepteur consectetur ipsum. Non excepteur excepteur nisi ipsum do minim id cillum fugiat. Ad eu sit est pariatur.',
        para2: 'Reprehenderit elit elit non incididunt qui cillum irure non reprehenderit id mollit anim. Sunt ea occaecat incididunt ipsum mollit cupidatat esse proident anim. Sint in ea consequat sunt sint. Sit ad incididunt ex officia cillum nulla eu. Est commodo in magna non magna magna. Ex aliquip eu voluptate aute eu cillum cupidatat.'
    }
  return (
    <>
      <div className="main">
        <Event event={event1}>   </Event>
        <Event event={event2}>   </Event>
        <Event event={event3}>   </Event>
      </div>  
    </>
  );
}

export default LandingPage;

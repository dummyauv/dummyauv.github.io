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
import { Button, Container } from "reactstrap";
import auvlogo from 'assets/img/auv-logo.png';
import "./LPHeader.scss"
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  const h3style= {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%,110%)'
  }
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
      <div
         className="header-styling"
        data-parallax={true}
        ref={pageHeader}
        >

      </div>
  );
}

export default LandingPageHeader;

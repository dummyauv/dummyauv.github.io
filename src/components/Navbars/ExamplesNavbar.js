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
import React from 'react';
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import auvlog from '../../assets/img/auv-logo-mini.png'
import "./ExamplesNavbar.css"
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Row
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 250 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar','custom-navbar-ssk'];
  if(scrolled){
    x.push('scrolled');
  }

  return (  
    <div  className={x.join(" ")} >
      <Navbar
      color-on-scroll="300"
      expand="lg"
      className="custom-navbar-ssk"
    >
      <Container >
      <div className="navbar-translate" style={{transform:'translateX(80%)'}}>
          {/* <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Paper Kit 2
          </NavbarBrand> */} 
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
            style={{float: 'right'}}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse} 
        >
          <Nav navbar className="navigation">
            <NavItem>
              <NavLink to="/landing-page" tag={Link}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about-us" tag={Link}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/team" tag={Link}>
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/events" tag={Link}>
                Events
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/index" tag={Link} component={Link} to="#sponsors">
                Sponsors
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="black"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                Vehicles
                      </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
                style={{backgroundColor:"white"}}
              >
                
                  <Link to='/vehicles/anahita' style={{color: 'black'}}>
                  <DropdownItem
                  // href="#pablo"
                  // onClick={e => e.preventDefault()}
                  style={{textAlign: "center"}}
                >
                  Anahita
                  </DropdownItem>
                  </Link>
                  
                        
                  <Link to='/vehicles/varun' style={{color: 'black'}} className="dropdown-ssk">
                  <DropdownItem
                  // href="#pablo"
                  // onClick={e => e.preventDefault()}
                  style={{textAlign: "center"}}
                  className="dropdown-ssk"
                >
                  Varun
                  </DropdownItem>
                  </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/blogs" tag={Link}>
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact-us" tag={Link}>
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/auviitk"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/AUV-IITK"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  
    </div>
  );
}

export default ExamplesNavbar;

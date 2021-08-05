import React from "react";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import logo from "../../src/images/safhir-logo-white.png";
import "./../Sass/components/navbar.scss";
// interface ChildProps {
//   expand: string;
//   id: string;
// }

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo-white" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="items">
              <Nav.Link href="#features">Docs</Nav.Link>
              <Nav.Link href="#pricing">App</Nav.Link>
              <Nav.Link href="#pricing">Data</Nav.Link>
              <Nav.Link href="#pricing">Issues</Nav.Link>
              <Nav.Link href="#pricing">Products</Nav.Link>

              <Nav.Link className="d-none d-lg-block" href="#pricing">
                |
              </Nav.Link>

              <Nav>
                <Nav.Link>
                  <Button> Login </Button>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button className="btn-register"> Register </Button>
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

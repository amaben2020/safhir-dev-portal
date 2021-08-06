import React from "react";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import logo from "../../src/images/safhir-logo-white.png";
import "./../Sass/components/navbar.scss";
import bellIcon from "./../images/auth-bell.svg";
import womanIcon from "./../images/auth-image.png";
import gearIcon from "./../images/auth-gear.svg";

const NavigationBar = () => {
  let isAuthenticated = true;
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
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

<<<<<<< HEAD
              <Nav>
                <Nav.Link>
                  <Button> Login </Button>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button className="btn-register"> Register </Button>
=======
              {isAuthenticated && (
                <Nav>
                  <Nav.Link href="#deets">
                    <Button> Login </Button>
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <Button className="btn-register"> Register </Button>
                  </Nav.Link>
                </Nav>
              )}

              {!isAuthenticated && (
                <Nav.Link href="#deets" className="auth-flex">
                  <img
                    className="auth-flex-img-gear"
                    src={gearIcon}
                    alt="gear"
                  />
                  <img
                    className="auth-flex-img-bell"
                    src={bellIcon}
                    alt="bell"
                  />
                  <div className="auth-flex-textArea">
                    <h5>MarvFash</h5>
                    <h5>8958u59848838</h5>
                  </div>
                  <img src={womanIcon} alt="gear" />
>>>>>>> 490c4aae89a27fb60b325e55756a78866a7c7b68
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

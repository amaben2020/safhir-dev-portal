import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./createAccount.scss";
import { Link } from "react-router-dom";

const createAccount = () => {
  return (
    <Container className="overflow3">
      <Row className="justify-content-center">
        <Col lg={7}>
          <div>
            <div className="createAccount">
              <div>
                <h1 className="header-main">Create an account</h1>
                <div className="createAccount__text">
                  <span className="createAccount__text-1">
                    Register under a different Organization{" "}
                  </span>
                  <span className="createAccount__text-2 px-5">or </span>
                  <span className="createAccount__text-3">
                    Continue registering as a SAPHIR Developer{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="form-wrapper">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control type="text" placeholder="Your first name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="email" placeholder="Your last name" />
                </Form.Group>{" "}
                <Form.Group className="mb-3">
                  <Form.Label>Username *</Form.Label>
                  <Form.Control type="email" placeholder="Your username" />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Organization Name </Form.Label>
                  <Form.Control type="email" placeholder="Your organization" />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    An email is required so we may notify you when your account
                    has been activated.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Mobile Phone Number *</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    A mobile phone number is highly recommended so we may send
                    you important updates on account activity.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password *</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Text className="text-muted">
                    Password must be at least 8 character, and contain at least
                    1 uppercase and special character.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password *</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <div className="img-content">
                    {" "}
                    <Form.Control type="file" className="person" />{" "}
                    <Form.Label className="img-content__text">
                      Upload Profile Picture
                    </Form.Label>
                  </div>
                </Form.Group>
                <div className="flex-cont">
                  <Link to="/complete-verification">
                    <Button className="createAcct-btn" type="submit">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </Form>
              <div className="createAccount base-text">
                <span>Already have an account? </span>{" "}
                <span className="marLeft">{"  "}Log in</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default createAccount;

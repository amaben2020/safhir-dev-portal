import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./createAccount.scss";
import person from "./../../images/person.svg";
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
                <Button className="createAcct-btn" type="submit">
                  Create Account
                </Button>
              </Form>
              <div>
                <span>Create Account</span> <span>Log in</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default createAccount;

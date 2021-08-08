import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./createAccount.scss";
import person from "./../../images/person.svg";
const createAccount = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <div className="justify-content-center">
            <div className="createAccount">
              <div>
                <h1 className="header-main">Create an account</h1>
                <div className="createAccount__text">
                  <p>Register under a different Organization </p>
                  <p>or </p>
                  <p>Continue registering as a SAPHIR Developer </p>
                </div>
              </div>
            </div>
            <div className="form-wrapper">
              <Form>
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
                  <Form.Label>Upload Profile Picture</Form.Label>
                  <Form.Control type="file" className="person" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default createAccount;

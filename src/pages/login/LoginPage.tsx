import React, { useState } from "react";
import "./LoginPage.scss";
import "../../components/button/Button";
import Button from "../../components/button/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/bareCard/Card";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameChangeHandler = (e: React.ChangeEvent<any>) => {
    setUserName(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    console.log("Username", userName);
    console.log("Password", password);
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Log in</h1>
      <div className="login-form-container">
        <Card>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={userNameChangeHandler}
                placeholder="Your username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                name="password"
                onChange={passwordChangeHandler}
                placeholder="Your password"
                required
              />
            </Form.Group>

            <div className="login-btn">
              <Button type="submit" title="Login" />
            </div>

            <div className="forgot-password m-4">
              <span>
                Forgot Password?{" "}
                <Link to="" className="recover-link">
                  Recover Password
                </Link>{" "}
              </span>
            </div>
            <div className="recover">
              <p>
                {" "}
                <span>Recover with Email</span>{" "}
                <span className="no-acct"> or</span>{" "}
                <span>Recovery Phrase</span>
              </p>
            </div>
            <div className="divider">
              <hr />
            </div>

            <div className="no-account">
              <p className="no-acct">
                Don’t Have an Account?{" "}
                <Link to="/register" className="registration-link">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

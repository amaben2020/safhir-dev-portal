import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./devportal-verification.scss";
const DevportalVerification = () => {
  return (
    <Container fluid className="wrappin-container">
      <Row lg={6} className="justify-content-center">
        <Col lg={6} className="justify-content-center">
          <div className="verification-wrapper">
            <h1 className="heading-main">Complete Verification</h1>
            <div className="verification">
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Verify Email"
                  feedback="You must agree before submitting."
                />
                <Form.Text className="text-muted">Verified</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 grey-color">
                <Form.Check
                  className="grey-color"
                  required
                  label="Verify Your Phone Number"
                  feedback="You must agree before submitting."
                />
                <Form.Text className="text-muted grey-color">
                  Waiting for verification
                </Form.Text>
              </Form.Group>
            </div>
            <div className="btn-area">
              <Link to="/devportal-home">
                <button className="dev-btn">GO TO DEVELOPER PORTAL</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DevportalVerification;

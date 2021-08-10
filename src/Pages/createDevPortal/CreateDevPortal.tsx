import { Col, Container, Row, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './create-devportal.scss';
import { Accordion } from 'react-bootstrap';
const CreateDevPortal = () => {
  return (
    <Container fluid className="wrappin-container">
      <Row lg={6} className="justify-content-center">
        <Col lg={6} className="justify-content-center">
          <div className="verification-wrapper">
            <h1 className="heading-main">Create Developer Account</h1>
            <div className="verification">
              <h1>Find Your Organization</h1>
              {/* <Dropdown>
                <Dropdown.Toggle
                  variant="primary my-dropdown"
                  id="dropdown-basic"
                  style={{ width: '50vw' }}
                >
                  Select Organization
                </Dropdown.Toggle>

                <Dropdown.Menu className="my-dropdown-item">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
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

export default CreateDevPortal;

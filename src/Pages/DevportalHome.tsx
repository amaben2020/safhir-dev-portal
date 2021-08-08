import { Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import "./devportal-home.scss";
import Dropdownn from "./../components/Dropdown/Dropdown";
import { useHistory, useLocation } from "react-router";
const DevportalHome = () => {
  const history = useHistory();
  const route = useLocation();
  return (
    <div className="home overflow">
      {route.pathname === "/devportal-home" && (
        <Row>
          <Col lg={10} sm={12} xs={12} className="wrapper">
            <h2 className="home-h2 biggy mleft"> Hello, Marvel,</h2>

            <h3 className="home-h3 biggy mleft">
              {" "}
              You are a Developer for SAFHIR Developers{" "}
            </h3>

            <div className="resources">
              <div className="smally" style={{ marginTop: "5rem" }}>
                <Dropdownn />
              </div>

              <h2 className="home-h2 smally"> Hello, Marvel,</h2>

              <h3 className="home-h3 smally">
                {" "}
                You are a Developer for SAFHIR Developers{" "}
              </h3>
              <div className="resources__wrapper">
                <p className="resources__wrapper-p1">New/Unapproved </p>
                <p className="resources__wrapper-p2">5 </p>
              </div>
              <div className="resources__wrapper">
                <p className="resources__wrapper-p1">Pending approval </p>
                <p className="resources__wrapper-p2">2 </p>
              </div>
              <div className="resources__wrapper">
                <p className="resources__wrapper-p1">Approved </p>
                <p className="resources__wrapper-p2">22 </p>
              </div>
              <button className="about-btn smally">
                {" "}
                Create New Application
              </button>
            </div>

            <div className="about">
              <h2 className="about-h2 mleft"> About SAFHIR Developer Portal</h2>
              <p className="about-p mleft">
                {" "}
                Use this site to register software for connecting to health
                plans, health systems, health information exchanges (HIEs) and
                other data providers. You may choose an individual HL7 FHIR
                Implementation Guide or a set of Implementation Guides this
                service recognizes. OAuth2 scopes are implied by Implementation
                Guides. After creating a Software Registration you may submit an
                access request to one or more available data providers. Once
                approved, you'll get notification that a signed software
                statement was generated for your application.
              </p>

              <button className="about-btn biggy mleft">
                {" "}
                Create New Application
              </button>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DevportalHome;

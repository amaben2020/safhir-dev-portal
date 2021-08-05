import { Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
// import './devportal-home.scss';
// import Dropdownn from './../components/Dropdown/Dropdown'
import "./approved-software.scss";
import { useHistory, useLocation } from "react-router";
import copy from "./../../images/copy.svg";
import down from "./../../images/down-arrow.svg";

const ApprovedSoftware = () => {
  const history = useHistory();
  const route = useLocation();
  return (
    <div className="home ">
      {route.pathname === "/approved-software" && (
        <Row>
          <Col lg={12} sm={12} xs={12} className="wrapper overflow">
            {/* <Dropdownn/> */}
            <div className="home ">
              <h2 className="home-h2"> New/Unapproved Software</h2>
              <button className="home-btn"> Create New Application </button>
            </div>

            <h3 className="home-h3">
              {" "}
              Registering the application here is the first step. Software
              applications in this platform always receive a software_id that is
              the unique key for a particular version of your software. A
              software ID is a UUID that you may generate or we will create one
              for you automatically.{" "}
            </h3>

            <Dropdown>
              <Dropdown.Toggle variant="success">
                <div className="approved-dropdown">
                  <h2 className="approved-dropdown-h2">
                    {" "}
                    New Application 1.0{" "}
                  </h2>{" "}
                  <h2 className="approved-dropdown-h2"> V2</h2>{" "}
                  <h2 className="approved-dropdown-h2">
                    {" "}
                    6a3007c3-63a3-4777-a03b-4c599a367d57
                  </h2>{" "}
                  <div className="approved-dropdown-img">
                    <img
                      className="approved-dropdown-img-svg"
                      src={copy}
                      alt="copy"
                    />
                    <img
                      className="approved-dropdown-img-svg"
                      src={down}
                      alt="down"
                    />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div className="item">
                    <div className="item-1">
                      <p className="item-1-p">Data Provider</p>
                      <p className="item-1-p-2">QUARTZ - UAT</p>
                    </div>
                    <div className="item-2">
                      <p className="item-1-p">State</p>
                      <p className="item-1-p-2">New</p>
                    </div>
                    <div className="item-3">
                      <p className="item-1-p">Implementation Guides</p>
                      <p className="button-wrapper">
                        <button className="button-wrapper-btn"> US-Core</button>
                        <button className="button-wrapper-btn">
                          {" "}
                          Carin Blue Button
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          PDEX Server
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          US Drug Formulary
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          Plan-Net
                        </button>
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <div className="approved-dropdown">
                  <h2 className="approved-dropdown-h2">
                    {" "}
                    New Application 1.0{" "}
                  </h2>{" "}
                  <h2 className="approved-dropdown-h2"> V2</h2>{" "}
                  <h2 className="approved-dropdown-h2">
                    {" "}
                    6a3007c3-63a3-4777-a03b-4c599a367d57
                  </h2>{" "}
                  <div className="approved-dropdown-img">
                    <img
                      className="approved-dropdown-img-svg"
                      src={copy}
                      alt="copy"
                    />
                    <img
                      className="approved-dropdown-img-svg"
                      src={down}
                      alt="down"
                    />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div className="item">
                    <div className="item-1">
                      <p className="item-1-p">Data Provider</p>
                      <p className="item-1-p-2">QUARTZ - UAT</p>
                    </div>
                    <div className="item-2">
                      <p className="item-1-p">State</p>
                      <p className="item-1-p-2">New</p>
                    </div>
                    <div className="item-3">
                      <p className="item-1-p">Implementation Guides</p>
                      <p className="button-wrapper">
                        <button className="button-wrapper-btn"> US-Core</button>
                        <button className="button-wrapper-btn">
                          {" "}
                          Carin Blue Button
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          PDEX Server
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          US Drug Formulary
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          Plan-Net
                        </button>
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <div className="approved-dropdown">
                  <h2 className="approved-dropdown-h2">
                    {" "}
                    New Application 1.0{" "}
                  </h2>{" "}
                  <h2 className="approved-dropdown-h2"> V2</h2>{" "}
                  <h2 className="approved-dropdown-h2">
                    {" "}
                    6a3007c3-63a3-4777-a03b-4c599a367d57
                  </h2>{" "}
                  <div className="approved-dropdown-img">
                    <img
                      className="approved-dropdown-img-svg"
                      src={copy}
                      alt="copy"
                    />
                    <img
                      className="approved-dropdown-img-svg"
                      src={down}
                      alt="down"
                    />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div className="item">
                    <div className="item-1">
                      <p className="item-1-p">Data Provider</p>
                      <p className="item-1-p-2">QUARTZ - UAT</p>
                    </div>
                    <div className="item-2">
                      <p className="item-1-p">State</p>
                      <p className="item-1-p-2">New</p>
                    </div>
                    <div className="item-3">
                      <p className="item-1-p">Implementation Guides</p>
                      <p className="button-wrapper">
                        <button className="button-wrapper-btn"> US-Core</button>
                        <button className="button-wrapper-btn">
                          {" "}
                          Carin Blue Button
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          PDEX Server
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          US Drug Formulary
                        </button>
                        <button className="button-wrapper-btn">
                          {" "}
                          Plan-Net
                        </button>
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ApprovedSoftware;

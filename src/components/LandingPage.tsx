import { Button, Col, Container, Row } from "react-bootstrap";
import safhir from "./../images/hero.svg";
import safhirSmall from "./../images/safhir-2.png";
import Footer from "./Footer";
import logoWhite from "./../images/onyx.png";
import ModalBig from "./../components/Modal/ModalBig";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./../components/Modal/modal.scss";
import { useHistory } from "react-router";
import { modalData } from "./Modal/modalData";
const LandingPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const login = () => {
    return history.push("/login");
  };

  return (
    <>
      <div className="overflow">
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>SAFHIR Developer Portal</Modal.Title>
            </Modal.Header>
            <Modal.Title className="terms-of-use">Terms of use</Modal.Title>
            <Modal.Body className="overflow">{modalData.data}</Modal.Body>
            <Modal.Footer>
              <Button
                className="agree"
                onClick={() => history.push("/create-account")}
              >
                I AGREE TO THESE TERMS
              </Button>
              <button className="cancel" onClick={handleClose}>
                Cancel
              </button>
            </Modal.Footer>
          </Modal>
        </>

        <div className="landingPage__wrapper">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <header className="landingPage__wrapper-header">
                <img
                  className="landingPage__wrapper-img"
                  src={safhirSmall}
                  alt=""
                />{" "}
                <h1 className="landingPage__wrapper-h1">Manage your</h1>
                <h2 className="landingPage__wrapper-h2">
                  {" "}
                  <span className="landingPage__wrapper-h2-span">
                    SAFHIR{" "}
                  </span>{" "}
                  Applications
                </h2>
                <h3 className="landingPage__wrapper-h3">
                  SAFHIR applications use OAuth2 to access SAFHIR Application
                  Progamming Interfaces (APIs).{" "}
                </h3>
                <div className="landingPage__wrapper-button-area">
                  <button
                    className="landingPage__wrapper-button-area-1"
                    onClick={login}
                  >
                    {" "}
                    Login
                  </button>
                  <button
                    className="landingPage__wrapper-button-area-2"
                    onClick={handleShow}
                  >
                    {" "}
                    Register{" "}
                  </button>
                </div>
              </header>
            </Col>

            <Col lg={6} md={6}>
              <div className="landingPage__wrapper-hero">
                <img
                  src={safhir}
                  alt="hero-image"
                  className="landingPage__wrapper-hero-img"
                />
              </div>
            </Col>
          </Row>
        </div>

        <Row className="landingPage__section2">
          <Col lg={5} sm={12} xs={12}>
            <div>
              <img
                className="landingPage__wrapper-section2-img"
                src={safhirSmall}
                alt=""
              />{" "}
            </div>
          </Col>
          <Col lg={7} sm={12} xs={12}>
            <div className="landingPage__wrapper-section2-textArea">
              <h1 className="landingPage__wrapper-section2-textArea-h1">
                About Safhir
              </h1>
              <h2 className="landingPage__wrapper-section2-textArea-h2">
                {" "}
                SAFHIR Applications
              </h2>
              <h3 className="landingPage__wrapper-section2-textArea-h3">
                {" "}
                SAFHIR applications typically function on bealf on insurance
                companies (i.e. Payers), such as Blue Cross Blue Shield of XYZ.
                SAFHIR applications frequently acces Protected Health
                Information (PHI) Since these application access sensitive
                health information, on behalf of members, additional precautions
                are taken when vetting individual developers, companies, and
                applications. An application is approved before production
                access is granted.
              </h3>

              <h2 className="landingPage__wrapper-section2-textArea-h2">
                SAFHIR Developer Portal
              </h2>

              <h3 className="landingPage__wrapper-section2-textArea-h3">
                {" "}
                The SAFHIR Developer Portal manages developer registration,
                application registration, application approval, and obtaining
                credentials necessary for your application to work in
                production. The client_id and client_secret credentials are
                issued on a per organization (i.e. Payor) basis.{" "}
              </h3>

              <h2 className="landingPage__wrapper-section2-textArea-h2">
                Data Provider
              </h2>

              <h3 className="landingPage__wrapper-section2-textArea-h3">
                If you work on behalf of an data provider (e.g. payer. insurance
                company, HIE, and require access), contact us by phone or email
                so we can assist with account setup or recovery. In many cases,
                we will need to verify your identity and your affiliation with
                the data_provider.
              </h3>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

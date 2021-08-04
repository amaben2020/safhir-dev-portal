import { Button, Col, Container, Row } from "react-bootstrap";
import safhir from "./../images/hero.svg";
import safhirSmall from "./../images/safhir-2.png";
import Footer from "./Footer";
import logoWhite from "./../images/onyx.png";
import ModalBig from './../components/Modal/ModalBig'
import { useState } from "react";
import {Modal} from 'react-bootstrap'
import './../components/Modal/modal.scss'
 
const LandingPage = () => {

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="overflow">
   
   <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton >
            <Modal.Title  >SAFHIR Developer Portal</Modal.Title>
          
          </Modal.Header>
          <Modal.Title className='terms-of-use'>Terms of use</Modal.Title>
          <Modal.Body className="overflow  " >
          General. These Terms shall be governed in all respects by the laws of the State of Maryland without giving effect to its conflicts of law provisions. Both parties submit to the personal jurisdiction of and venue in the state and federal courts located in the judicial district that includes Elkridge, MD. The parties further agree that any cause of action arising under these Terms or our Privacy Policy shall exclusively be brought in such courts. If any provision of these Terms is held to be invalid or unenforceable, then such provision shall be struck and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. Onyx's failure to act with respect to a breach by you or others does not constitute a waiver of its right to act with respect to subsequent or similar breaches. Subject to Section 19 (Relationship to Privacy Policy and Other Contracts), this agreement and the terms and conditions contained herein set forth the entire understanding and agreement between Onyx and you with respect to the subject matter hereof and supersede any prior or contemporaneous understanding, whether written or oral. 
Survival. In addition to any right or obligation that by its nature or intent is intended to survive the termination or expiration of these Terms, the following Sections shall survive any termination or expiration of thesThese Terms of Use (the "Terms of Use" or "Terms") apply to the services and information (collectively, the "Services") that Onyx Technology LLC ("Onyx," "we," "our", or "us") provides to you through our SAFHIR developer portal website at http://private.dev.safhir.io (our "Website" or "Site") (the Services, together with our Website, are referred to as the "SAFHIR Developer Portal"). These Terms govern your use of the SAFHIR Developer Portal and your provision of information while using the SAFHIR Developer Portal. Please read these Terms carefully because they impose legal obligations on you and on Onyx, and establish our legal relationship.

To assist you in using the SAFHIR Developer Portal and to ensure a clear understanding of the relationship arising from your use of the SAFHIR Developer Portal, we have created these Terms of Use and the Privacy Policy. Our Privacy Policy explains how we treat information that we have about you, and our Terms govern your use of our SAFHIR Developer Portal. Our Terms apply to anyone that uses our SAFHIR Developer Portal (collectively, "you" and "your"), including individuals who use our SAFHIR Developer Portal without registering an account, and individuals who are (or are seeking to become) registered users ("Registered Users").

PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SAFHIR DEVELOPER PORTAL. BY USING OUR SAFHIR DEVELOPER PORTAL, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS, THEN PLEASE DO NOT USE OUR SAFHIR DEVELOPER PORTAL.

Your Agreement. These Terms govern your use of the SAFHIR Developer Portal. Please read these Terms carefully because they impose legal obligations on you General. These Terms shall be governed in all respects by the laws of the State of Maryland without giving effect to its conflicts of law provisions. Both parties submit to the personal jurisdiction of and venue in the state and federal courts located in the judicial district that includes Elkridge, MD. The parties further agree that any cause of action arising under these Terms or our Privacy Policy shall exclusively be brought in such courts. If any provision of these Terms is held to be invalid or unenforceable, then such provision shall be struck and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. Onyx's failure to act with respect to a breach by you or others does not constitute a waiver of its right to act with respect to subsequent or similar breaches. Subject to Section 19 (Relationship to Privacy Policy and Other Contracts), this agreement and the terms and conditions contained herein set forth the entire understanding and agreement between Onyx and you with respect to the subject matter hereof and supersede any prior or contemporaneous understanding, whether written or oral. 
Survival. In addition to any right or obligation that by its nature or intent is intended to survive the termination or expiration of these Terms, the following Sections shall survive any termination or expiration of these Terms and shall apply indefinitely: (i) Section 6 (Ownership; Reservation of Rights); (ii) Section 4 (API Credentials); (iii) Section 12 (Warranty Disclaimer); (iv) Section 13 (Limitation of Liability); (v) Section 14 (Indemnity); (vi) Section 16 (Assignment); and (vii) Section 17 (General).
Additional Terms. Certain portions of the SAFHIR Developer Portal may be subject to additional or different terms and conditions. We will notify you if a portion of the SAFHIR Developer Portal is subject to terms and conditions that differ from these Terms, and you will have the opportunity to decline to participate in such portion of the SAFHIR Developer Portal if you do not agree with the differing terms and conditions.
Relationship to Privacy Policy and Other Contracts. These Terms must be read in conjunction: (i) with other agreements into which you and Onyx may enter (if any) such as an end user license agreement; and (ii) with our Privacy Policy. The provisions of our Privacy Policy are incorporated herein. To the extent these Terms conflict with the terms of our Privacy Policy, the terms of our Privacy Policy shall control. Similarly, to the extent these Terms conflict with the terms and conditions of any specific agreement you enter with us, the terms and conditions of such specific agreement shall control. 
Contact Us. If you have any questions about these Terms, our practices, or your dealings with the SAFHIR Developer Portal, then please contact us using the information below, or by other means of communication as described on our SAFHIR Developer Portal: https://www.onyxhealth.io/contact/.
Effective Date; Legal Notice. The effective date of these Terms of Use is June 1, 2021. © 2021 Onyx Technology LLC. All Rights Reserved. 
          </Modal.Body>
          <Modal.Footer>
          <Button   className='agree' onClick={handleClose}>
             I AGREE TO THESE TERMS
            </Button>
            <Button  className='cancel' onClick={handleClose}>
              Cancel
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>

        <div className="landingPage__wrapper">
          <Row>
            <Col lg={6} md={6}>
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
                  <button className="landingPage__wrapper-button-area-1"  >
                    {" "}
                    Login
                  </button>
                  <button className="landingPage__wrapper-button-area-2" onClick={handleShow}>
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

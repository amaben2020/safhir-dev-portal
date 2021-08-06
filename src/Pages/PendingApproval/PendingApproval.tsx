import {
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
} from "react-bootstrap";
// import './devportal-home.scss';
// import Dropdownn from './../components/Dropdown/Dropdown'
import "./pending-approval.scss";
import { useHistory, useLocation } from "react-router";
import copy from "./../../images/copy.svg";
import down from "./../../images/down-arrow.svg";
import { useState } from "react";
import { data } from "./data";
import "./../PendingApproval/pending-approval.scss";
import "./../../components/Modal/modal.scss";

const PendingApproval = () => {
  const history = useHistory();
  const route = useLocation();

  const data = [
    {
      text: '{"resourceType": "CapabilityStatement", "id": "carin-bb", "meta": {"versionId": "13", "lastUpdated": "2021-06-24T13:20:42.181+00:00"}, "url": "http://hl7.org/fhir/us/carin-bb/CapabilityStatement/c4bb", "version": "1.0.0", "name": "CarinBbCapabilityStatement", "title": "Carin Blue Button Capability Statement", "status": "active", "experimental": false, "date": "2020-11-16", "publisher": "HL7 Financial Management Working Group", "contact": [{"name": "HL7 Financial Management Working Group", "telecom": [{"system": "url", "value": "http://www.hl7.org/Special/committees/fm/index.cfm"}, {"system": "email", "value": "fm@lists.HL7.org"}]}], "description": "This Section describes the expected capabilities of the C4BB Server actor which is responsible for providing responses to the queries submitted by the C4BB Requestors. \n\nThe EOB Resource is the focal Consumer-Directed Payer Data Exchange (CDPDE) Resource. Several Reference Resources are defined directly/indirectly from the EOB: Coverage, Patient, Organization (Payer ID), Practioner, and Organization (Facility).\n\nThe Coverage Reference Resource SHALL be returned with data that was effective as of the date of service of the claim; for example, the data will reflect the employer name in effect at that time. However, for other reference resources, payers MAY decide to provide either the data that was in effect as of the date of service or the current data. All reference resources within the EOB will have meta.lastUpdated flagged as must support. Payers SHALL provide the last time the data was updated or the date of creation in the payers system of record, whichever comes last. Apps will use the meta.lastUpdated values to determine if the reference resources are as of the current date or date of service.", "jurisdiction": [{"coding": [{"system": "urn:iso:std:iso:3166", "code": "US"}]}], "kind": "requirements", "fhirVersion": "4.0.1", "format": ["xml", "json"], "patchFormat": ["application/json-patch+json"], "implementationGuide": ["http://hl7.org/fhir/us/carin-bb/STU1/"], "rest": [{"mode": "server", "documentation": "The C4BB  Server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all CARIN-BB interactions.\n1. Identify the CARIN-BB  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile  individually and in combination.\n\nThe C4BB  Server **SHOULD**:\n\n1. Support xml source formats for all C4BB interactions.", "security": {"service": [{"coding": [{"system": "http://terminology.hl7.org/CodeSystem/restful-security-service", "code": "SMART-on-FHIR", "display": "SMART-on-FHIR"}], "text": "See http://docs.smarthealthit.org/"}], "description": "1. See the [General Security Considerations](Authorization_Authentication_and_Registration.html) section for requirements and recommendations.\n1. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code.", "extension": [{"url": "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris", "extension": [{"url": "token", "valueUri": "https://api-hmny-qul.safhir.io/v1/token"}, {"url": "authorize", "valueUri": "https://api-hmny-qul.safhir.io/v1/authorize"}]}]}, "resource": [{"type": "Coverage", "supportedProfile": ["http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage"], "interaction": [{"code": "read"}, {"code": "search-type"}], "referencePolicy": ["resolves"], "searchInclude": ["Coverage:payor"]}, {"type": "ExplanationOfBenefit", "supportedProfile": ["http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit", "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional", "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional", "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy", "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician"], "documentation": "When an EOB references another resource (e.g., Patient or Practitioner), the reference may be versioned or versionless. Payers SHALL use versioned references whenever they maintain point-in-time data (data that was effective as of the date of service or date of admission on the claim), but MAY use versionless references when they do not maintain versioned data. Clients MAY request referenced resources as part of an EOB search (by supplying the _include parameter) or directly using read or vread. Payers SHALL support both approaches, and SHALL return the same content for referenced resources in either case. \ufffd:iterate" should be used if you request to include Coverage:payor in the EOB response bundle, e.g. GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:coverage&_include:iterate=Coverage:payor.", "interaction": [{"code": "search-type"}, {"code": "read", "documentation": "Searches using service-date, _lastUpdated, or type require a patient search argument.\n\n_include:* SHALL be supported."}], "referencePolicy": ["resolves"], "searchInclude": ["ExplanationOfBenefit:patient", "ExplanationOfBenefit:provider", "ExplanationOfBenefit:care-team", "ExplanationOfBenefit:coverage", "ExplanationOfBenefit:insurer", "ExplanationOfBenefit:*"], "searchParam": [{"name": "_id", "definition": "http://hl7.org/fhir/SearchParameter/Resource-id", "type": "token"}, {"name": "patient", "definition": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-patient", "type": "reference"}, {"name": "_lastUpdated", "definition": "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated", "type": "date"}, {"name": "type", "definition": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-type", "type": "token"}, {"name": "identifier", "definition": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-identifier", "type": "token"}, {"name": "service-date", "definition": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-service-date", "type": "date"}]}, {"type": "Organization", "supportedProfile": ["http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization"], "interaction": [{"code": "read"}, {"code": "vread"}], "referencePolicy": ["resolves"]}, {"type": "Patient", "supportedProfile": ["http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient"], "interaction": [{"code": "read"}, {"code": "vread"}], "referencePolicy": ["resolves"]}, {"type": "Practitioner", "supportedProfile": ["http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner"], "interaction": [{"code": "read"}, {"code": "vread"}], "referencePolicy": ["resolves"]}]}]}',
    },
  ];

  const modalData = data.map((data) => data.text);

  // const modalData = Object.entries(data).map((val) => val);
  // console.log(modalData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="home ">
      {route.pathname === "/pending-approval" && (
        <Row>
          <Col lg={12} sm={12} xs={12} className="wrapper overflow">
            {/* <Dropdownn/> */}
            <div className="home ">
              <h2 className="home-h2"> Software Pending Approval</h2>
              <button className="home-btn"> Create New Application </button>
            </div>

            <h3 className="home-h3">
              These are software applications or applications pending approval
              by a data provider.
            </h3>

            <Dropdown>
              <Dropdown.Toggle variant="success">
                <div className="approved-dropdown">
                  <h2 className="approved-dropdown-h2">Application beta_1.0</h2>{" "}
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
                      <p className="item-1-p">Issuer/KID</p>
                      <p className="item-1-p-2">bcbsla-bbla-test</p>
                    </div>
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
                      </p>
                      <div>
                        <button
                          className="button-wrapper-btn-large"
                          onClick={handleShow}
                        >
                          Get Software Statement (Unsigned JSON)
                        </button>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <div className="approved-dropdown">
                  <h2 className="approved-dropdown-h2">Second Application</h2>{" "}
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
                      <p className="item-1-p">Issuer/KID</p>
                      <p className="item-1-p-2">bcbsla-bbla-test</p>
                    </div>
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

            <Modal
              show={show}
              onHide={handleClose}
              className="terms-of-use left"
            >
              <Modal.Header closeButton>
                <Modal.Title>Software Statement (Unsigned JSON)</Modal.Title>
              </Modal.Header>
              <Modal.Title className="terms-of-use">copy</Modal.Title>
              <Modal.Body className="overflow">
                <div> {modalData} </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default PendingApproval;

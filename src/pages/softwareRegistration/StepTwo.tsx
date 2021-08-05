import React, { useState } from "react";
import { Form } from "react-bootstrap";

const StepTwo = () => {
  const [clientUri, setClientUri] = useState("");
  const [clientTermsOfServiceUri, setClientTermsOfServiceUri] = useState("");
  const [securityCertifications, setSecurityCertifications] = useState("");
  const [clientContacts, setClientContacts] = useState([]);
  const [supportEmail, setSupportEmail] = useState("");
  const [supportPhoneNumber, setSupportPhoneNumber] = useState("");

  const clientUriChangeHandler = (e: React.ChangeEvent<any>) => {
    setClientUri(e.target.value);
  };
  const clientTermsOfServiceUriChangeHandler = (e: React.ChangeEvent<any>) => {
    setClientTermsOfServiceUri(e.target.value);
  };
  const securityCertificationsChangeHandler = (e: React.ChangeEvent<any>) => {
    setSecurityCertifications(e.target.value);
  };
  const clientContactsChangeHandler = (e: React.ChangeEvent<any>) => {
    setClientContacts(e.target.value);
  };
  const supportEmailChangeHandler = (e: React.ChangeEvent<any>) => {
    setSupportEmail(e.target.value);
  };
  const supportPhoneNumberChangeHandler = (e: React.ChangeEvent<any>) => {
    setSupportPhoneNumber(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<any>) => {
    console.log("Client Uri", clientUri);

    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-5">
        <Form.Label className="label">Client URI</Form.Label>
        <p className="description">
          This is typically a home/download website for the application. For
          example, https://www.example.org or http://www.example.org.
        </p>
        <Form.Control
          type="text"
          name="clientUri"
          value={clientUri}
          onChange={clientUriChangeHandler}
          placeholder="Client URI"
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">Client Terms of Service URI *</Form.Label>

        <Form.Control
          type="text"
          name="clientTermsOfService"
          value={clientTermsOfServiceUri}
          onChange={clientTermsOfServiceUriChangeHandler}
          placeholder=">Client Terms of Service URI"
          required
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">Client Terms of Service URI *</Form.Label>
        <p className="description">
          This can be a model privacy notice or other policy document.
        </p>

        <Form.Control
          type="text"
          name="clientTermsOfService"
          value={clientTermsOfServiceUri}
          onChange={clientTermsOfServiceUriChangeHandler}
          placeholder=">Client Terms of Service URI"
          required
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">
          Security Certifications and Attestations URI
        </Form.Label>
        <p className="description">
          Enter in a link to a page for your security certifications or
          attestation pages such as for the CARIN Code of Conduct.
        </p>
        <Form.Control
          type="text"
          name="securityCertifications"
          value={securityCertifications}
          onChange={securityCertificationsChangeHandler}
          placeholder="Security Certifications and Attestations URI"
        />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label>Client Contacts *</Form.Label>
        <p className="description">This is typically an email.</p>
        <Form.Control
          as="textarea"
          onChange={clientContactsChangeHandler}
          value={clientContacts}
          rows={3}
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">Support Email *</Form.Label>
        <p className="description">
          Email address must be entered in the format: someone(at)example.com.
        </p>
        <Form.Control
          type="text"
          name="supportEmail"
          onChange={supportEmailChangeHandler}
          value={supportEmail}
          placeholder="Support Email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">Support Phone Number</Form.Label>
        <p className="description">
          Phone number must be entered in the format: '+999999999'. Up to 15
          digits allowed.
        </p>
        <Form.Control
          type="text"
          name="supportPhoneNumber"
          onChange={supportPhoneNumberChangeHandler}
          value={supportPhoneNumber}
          placeholder="Support Phone Number"
        />
      </Form.Group>
    </Form>
  );
};

export default StepTwo;

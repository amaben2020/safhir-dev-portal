import React, { useState } from "react";
import { Form } from "react-bootstrap";

const StepOne = () => {
  const [applicationName, setApplicationName] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientVersion, setClientVersion] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [logoUri, setLogoUri] = useState("");
  const [redirectUri, setRedirectUri] = useState("");
  const [applicationDescription, setApplicationDescription] = useState("");

  const applicationTypeData = [
    {
      item: "Web: authorization_code grant type with a confidential client type.",
    },
    { item: "Lorem ipsum dolor sit amet consectetur." },
    { item: "Lorem ipsum dolor sit." },
    { item: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
  ];

  const applicationNameChangeHandler = (e: React.ChangeEvent<any>) => {
    setApplicationName(e.target.value);
  };
  const clientIdChangeHandler = (e: React.ChangeEvent<any>) => {
    setClientId(e.target.value);
  };
  const clientVersionChangeHandler = (e: React.ChangeEvent<any>) => {
    setClientVersion(e.target.value);
  };
  const applicationTypeChangeHandler = (e: React.ChangeEvent<any>) => {
    setApplicationType(e.target.value);
  };

  const redirectUriChangeHandler = (e: React.ChangeEvent<any>) => {
    setRedirectUri(e.target.value);
  };
  const logoUriChangeHandler = (e: React.ChangeEvent<any>) => {
    setLogoUri(e.target.value);
  };
  const applicationDescriptionChangeHandler = (e: React.ChangeEvent<any>) => {
    setApplicationDescription(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<any>) => {
    console.log("Name", applicationName);

    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-5">
        <Form.Label className="label">Name *</Form.Label>
        <Form.Control
          type="text"
          name="applicationName"
          value={applicationName}
          onChange={applicationNameChangeHandler}
          placeholder="Application Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">Client ID *</Form.Label>

        <Form.Control
          type="text"
          name="client_ID"
          value={clientId}
          onChange={clientIdChangeHandler}
          placeholder="6a3007c3-63a3-4777-a03b-4c599a367d57"
          required
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label">Client Version *</Form.Label>

        <Form.Control
          type="text"
          name="clientVersion"
          value={clientVersion}
          onChange={clientVersionChangeHandler}
          placeholder="6a3007c3-63a3-4777-a03b-4c599a367d57"
          required
        />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label className="label">Application Type *</Form.Label>

        <Form.Select onChange={applicationTypeChangeHandler}>
          {applicationTypeData.map((applicationData) => (
            <option value="">{applicationData.item}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label>Redirect URIs *</Form.Label>
        <p className="description">
          Multiple redirect URIs can be separated by a space or by separate
          lines. Read more about implementing redirect URIs in our
          documentation.
        </p>
        <Form.Control
          as="textarea"
          onChange={redirectUriChangeHandler}
          value={redirectUri}
          rows={3}
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label className="label"> Logo URI</Form.Label>

        <Form.Control
          type="text"
          name="logoUri"
          onChange={logoUriChangeHandler}
          value={logoUri}
          placeholder="Logo URI"
          required
        />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label>Application Description</Form.Label>
        <p className="description">Up to 1000 characters allowed.</p>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={applicationDescriptionChangeHandler}
          value={applicationDescription}
        />
      </Form.Group>
    </Form>
  );
};

export default StepOne;

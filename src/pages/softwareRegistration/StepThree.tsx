import React, { useState } from "react";
import { Form } from "react-bootstrap";

const StepThree = () => {
  const implementationGuidePayerData = [
    { payer: "Select Payer" },
    { payer: "Whomever" },
    { payer: "However" },
    { payer: "Whenever" },
  ];
  const checkboxData = [
    { item: "CARIN Blue Button" },
    { item: "US Core" },
    { item: "PDEX Server" },
    { item: "US Drug Formuary" },
  ];

  const [implementationGuidesPayer, setImplementationGuidesPayer] =
    useState("");
  const implementationGuidesPayerChangeHandler = (
    e: React.ChangeEvent<any>
  ) => {
    setImplementationGuidesPayer(e.target.value);
  };
  return (
    <Form>
      <Form.Group className="mb-5">
        <Form.Label className="label">Implementation Guides *</Form.Label>
        <p>
          CARIN Blue Button and US Core are selected by default, allowing access
          to the full range of data from the API.
        </p>

        <Form.Select
          onChange={implementationGuidesPayerChangeHandler}
          className="implementation-guide-payer"
        >
          {implementationGuidePayerData.map((payerData, key) => (
            <option value={key}>{payerData.payer}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-5" id="implementationGuideCheckbox">
        {checkboxData.map((data) => (
          <Form.Check type="checkbox" label={data.item} />
        ))}
      </Form.Group>
    </Form>
  );
};

export default StepThree;

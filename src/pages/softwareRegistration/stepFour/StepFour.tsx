import React from "react";
import "./StepFour.scss";
import Success from "../../../images/registration-success-icon.svg";
import Button from "../../../components/button/Button";
const StepFour = () => {
  const goToApplication = () => {
    console.log("Done");
  };
  return (
    <div className="success-container">
      <div>
        <img src={Success} alt="Success Icon" />
      </div>
      <div className="success-message">
        <p>Your Software Application has been Submitted</p>
        <p>It will be reviewed between 3 to 5 business days.</p>
      </div>
      <div className="submit-data">
        <Button
          type="submit"
          title="Go to Your Applications"
          onClick={goToApplication}
        />
      </div>
    </div>
  );
};

export default StepFour;

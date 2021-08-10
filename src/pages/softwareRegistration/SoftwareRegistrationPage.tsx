import React, { useState } from 'react';
import Card from '../../components/bareCard/Card';
import './SoftwareRegistrationPage.scss';
import Button from '../../components/button/Button';
import BareButton from '../../components/button/bareButton/BareButton';
import StepOne from './../softwareRegistration/StepOne';
import StepTwo from '../softwareRegistration/StepTwo';
import StepThree from './../softwareRegistration/StepThree';
import StepFour from '../softwareRegistration/stepFour/StepFour';

const SoftwareRegistrationPage = () => {
  const defaultData = {
    applicationName: '',
    clientId: '',
    clientVersion: '',
    applicationType: '',
    redirectUris: [],
    logoUri: '',
    applicationDescription: '',
    clientUri: '',
    clientTermsOfServiceUri: '',
    securityAttestationUri: '',
    clientContacts: [],
    supportEmail: '',
    supportPhoneNumber: '',
    implementationGuides: [],
  };
  const [step, setStep] = useState(1);
  const [data, setData] = useState(defaultData);
  const props = { data, setData };

  const updateData = (type: string, newData: {}) => {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  };

  const nextStep = () => {
    if (step === 4) return;
    setStep((step) => step + 1);
  };
  const previousStep = () => {
    setStep((step) => step - 1);
  };

  const cancelApplication = () => {
    console.log('Application Canceled');
  };

  return (
    <div className="overflow">
      <Card>
        <div className="card">
          <h1 className="heading">Register Software</h1>
          <div className="progress-steps-container">
            <div className="steps">
              <div
                className={step === 1 ? 'step-in-progress' : 'step-completed'}
              >
                <div>
                  <p className="step-number">1</p>
                </div>
                <div>
                  <h1 className="title">Implementation Guides</h1>
                  <p className="status">{step !== 1 ? 'Done' : 'Pending'}</p>
                </div>
              </div>
              <div
                className={
                  step === 1
                    ? 'next-step'
                    : step === 2
                    ? 'step-in-progress'
                    : 'step-completed'
                }
              >
                <div>
                  <p className="step-number">2</p>
                </div>
                <div>
                  <h1 className="title">Client Details</h1>
                  <p className="status">
                    {step === 3 || step === 4 ? 'Done' : 'Pending '}
                  </p>
                </div>
              </div>
              <div
                className={
                  step === 1 || step === 2
                    ? 'next-step'
                    : step === 3
                    ? 'step-in-progress'
                    : 'step-completed'
                }
              >
                <div>
                  <p className="step-number">3</p>
                </div>
                <div>
                  <h1 className="title">Software Application Details</h1>
                  <p className="status">{step !== 4 ? 'Pending' : 'Done'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="steps-container">
        <Card>
          <div className="form-container">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            {step === 4 && <StepFour />}
            {step !== 4 && <Button title="Continue" onClick={nextStep} />}
            <div className="mt-5">
              {step !== 1 && step !== 4 && (
                <BareButton title="Back" onClick={previousStep} />
              )}
            </div>
            <div className=" mt-2 cancel-apllication">
              {step === 1 && (
                <BareButton title="Cancel" onClick={cancelApplication} />
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SoftwareRegistrationPage;

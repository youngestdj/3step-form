/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import PreviousButton from '../components/PreviousButton';
import NextButton from '../components/NextButton';
import FourthStep from '../components/FourthStep';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    phone: '',
    gender: '',
    address1: '',
    address2: '',
    zip: '',
    city: '',
    state: '',
    acceptShipments: null,
    plan: null,
    errors: []
  });

  const [step, setStep] = useState({
    currentStep: 1,
    submitted: false
  });

  const validateInput = () => {
    setInput({ ...input, errors: [] });
    const errors = [];
    switch (step.currentStep) {
      case (1):
        if (!input.name) errors.push('Name cannot be empty');
        if (!input.email) errors.push('Email cannot be empty');
        if (!input.password) errors.push('Password cannot be empty');
        if (input.password !== input.confirmPassword) errors.push('Passwords do not match');
        break;
      case (2):
        if (!input.dob) errors.push('Please enter your date of birth');
        if (input.dob.length !== 14) errors.push('Please enter a valid date of birth');
        if (input.phone) {
          const validPhone = input.phone.replace(/\D/g, '');
          if (validPhone.length !== 11) errors.push('Please enter a valid Phone number');
        } else errors.push('Please enter your Phone number');
        if (!input.gender) errors.push('Please select a gender');
        break;
      case (3):
        if (!input.address1) errors.push('Please enter your first address');
        if (!input.address2) errors.push('Please enter your second address');
        if (!input.zip) errors.push('Please enter your zip code');
        if (!input.city) errors.push('Please enter your city');
        if (!input.state) errors.push('Please enter your state');
        break;
      default:
    }
    if (errors.length > 0) setInput({ ...input, errors });
    return !((errors.length > 0));
  };

  const incrementStep = (event) => {
    event.preventDefault();
    if (!validateInput()) {
      return;
    }
    if (step.currentStep === 2 && !input.acceptShipments) {
      setStep({ ...step, currentStep: 4 });
      return;
    }
    setStep({ ...step, currentStep: step.currentStep += 1 });
  };

  const decrementStep = (event) => {
    event.preventDefault();
    if (step.currentStep === 4 && !input.acceptShipments) {
      setStep({ ...step, currentStep: 2 });
      return;
    }
    setStep({ ...step, currentStep: step.currentStep -= 1 });
  };

  const updateInput = (event) => {
    event.preventDefault();
    setInput({
      ...input, [event.target.name]: event.target.value
    });
  };

  if (input.acceptShipments === null) {
    return (
      <div className="container">
        <h2>Do you accept shipments?</h2>
        <button className="left" onClick={() => { setInput({ ...input, acceptShipments: false }); }}>No</button>
        <button className="right" onClick={() => { setInput({ ...input, acceptShipments: true }); }}>Yes</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>3-step form</h1>
      <div className="form-area">
        {
          (input.errors)
            ? input.errors.map(error => <ErrorMessage error={error} key={error} />) : null
        }
        <form method="post">
          <div className="input-group">
            <FirstStep
              currentStep={step.currentStep}
              updateInput={updateInput}
              input={input}
            />
            <SecondStep
              currentStep={step.currentStep}
              updateInput={updateInput}
              input={input}
            />
            <ThirdStep
              currentStep={step.currentStep}
              acceptShipments={input.acceptShipments}
              incrementStep={incrementStep}
              updateInput={updateInput}
              input={input}
            />
            <FourthStep
              currentStep={step.currentStep}
              updateInput={updateInput}
              input={input}
            />
          </div>
          <div className="nav-button">
            <PreviousButton
              currentStep={step.currentStep}
              decrementStep={decrementStep}
            />
            <NextButton
              currentStep={step.currentStep}
              incrementStep={incrementStep}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
